// Game State
const ANIMALS = ['lion', 'elephant', 'monkey', 'giraffe', 'panda', 'tiger', 'rabbit', 'fox', 'koala', 'zebra'];

let cards = [];
let flippedCards = [];
let matchedPairs = 0;
let flipsCount = 0;
let lockBoard = false;
let audioCtx = null;

// DOM Elements
const gameGrid = document.getElementById('game-grid');
const matchesCountEl = document.getElementById('matches-count');
const flipsCountEl = document.getElementById('flips-count');
const progressBarFill = document.getElementById('progress-bar-fill');
const btnReset = document.getElementById('btn-reset');
const victoryModal = document.getElementById('victory-modal');
const modalFlipsEl = document.getElementById('modal-flips');
const btnPlayAgain = document.getElementById('btn-play-again');

// Start Page & Changelog DOM Elements
const startScreen = document.getElementById('start-screen');
const appContainer = document.getElementById('app-container');
const btnStart = document.getElementById('btn-start');
const btnChangelog = document.getElementById('btn-changelog');
const changelogModal = document.getElementById('changelog-modal');
const btnCloseChangelog = document.getElementById('btn-close-changelog');

// Warm up Web Speech API voices
if ('speechSynthesis' in window) {
    window.speechSynthesis.getVoices();
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
        window.speechSynthesis.onvoiceschanged = () => {
            window.speechSynthesis.getVoices();
        };
    }
}

// Initialize Game
function initGame() {
    // Reset state
    cards = [];
    flippedCards = [];
    matchedPairs = 0;
    flipsCount = 0;
    lockBoard = false;
    
    // Update stats UI
    updateStatsUI();
    victoryModal.classList.remove('active');
    
    // Generate deck: 10 word cards + 10 image cards
    ANIMALS.forEach(animal => {
        const displayName = animal.charAt(0).toUpperCase() + animal.slice(1);
        
        // Word Card
        cards.push({
            id: `word_${animal}`,
            name: animal,
            type: 'word',
            label: displayName
        });
        
        // Image Card
        cards.push({
            id: `image_${animal}`,
            name: animal,
            type: 'image',
            label: displayName,
            imageSrc: `assets/images/${animal}.png`
        });
    });
    
    // Shuffle the deck
    shuffle(cards);
    
    // Build Board
    gameGrid.innerHTML = '';
    cards.forEach(cardData => {
        const cardElement = createCardElement(cardData);
        gameGrid.appendChild(cardElement);
    });
    
    // Auto adjust word card font size to keep words in a single line
    setTimeout(adjustWordFontSizes, 50);
}

// Fisher-Yates Shuffle Algorithm
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Create Card DOM Element
function createCardElement(cardData) {
    const container = document.createElement('div');
    container.classList.add('card-container');
    container.dataset.id = cardData.id;
    container.dataset.name = cardData.name;
    container.dataset.type = cardData.type;
    
    const inner = document.createElement('div');
    inner.classList.add('card-inner');
    
    // Back Face (Paw-print pattern / Question Mark)
    const back = document.createElement('div');
    back.classList.add('card-face', 'card-back');
    
    const pattern = document.createElement('span');
    pattern.classList.add('card-back-pattern');
    pattern.textContent = '❓';
    back.appendChild(pattern);
    
    // Front Face (Content)
    const front = document.createElement('div');
    front.classList.add('card-face', 'card-front');
    
    if (cardData.type === 'word') {
        const wordDiv = document.createElement('div');
        wordDiv.classList.add('card-word');
        const textSpan = document.createElement('span');
        textSpan.textContent = cardData.label;
        wordDiv.appendChild(textSpan);
        front.appendChild(wordDiv);
    } else {
        const wrapper = document.createElement('div');
        wrapper.classList.add('card-image-wrapper');
        
        const img = document.createElement('img');
        img.classList.add('card-image');
        img.src = cardData.imageSrc;
        img.alt = `Cute Cartoon ${cardData.label}`;
        img.loading = 'lazy';
        
        const audioBadge = document.createElement('div');
        audioBadge.classList.add('audio-badge');
        audioBadge.innerHTML = '🔊';
        
        wrapper.appendChild(img);
        wrapper.appendChild(audioBadge);
        front.appendChild(wrapper);
    }
    
    inner.appendChild(back);
    inner.appendChild(front);
    container.appendChild(inner);
    
    // Event listener
    container.addEventListener('click', () => handleCardClick(container, cardData));
    
    return container;
}

// Card Click Event Handler
function handleCardClick(cardElement, cardData) {
    // Check if card click is allowed
    if (lockBoard) return;
    if (cardElement.classList.contains('flipped') || cardElement.classList.contains('matched')) return;
    if (flippedCards.includes(cardElement)) return;
    
    // Play card flip sound
    playSound('flip');
    
    // Flip card
    cardElement.classList.add('flipped');
    
    // Voice playback: ONLY for image cards
    if (cardData.type === 'image') {
        speakAnimalName(cardData.name);
    }
    
    flippedCards.push(cardElement);
    
    // Check match if two cards are flipped
    if (flippedCards.length === 2) {
        flipsCount++;
        lockBoard = true;
        checkForMatch();
    }
}

// Matching Logic
function checkForMatch() {
    const [card1, card2] = flippedCards;
    const isMatch = card1.dataset.name === card2.dataset.name && card1.dataset.type !== card2.dataset.type;
    
    if (isMatch) {
        // Match found!
        matchedPairs++;
        updateStatsUI();
        
        card1.classList.add('success-match');
        card2.classList.add('success-match');
        
        setTimeout(() => {
            playSound('match');
        }, 150);
        
        setTimeout(() => {
            card1.classList.remove('success-match');
            card2.classList.remove('success-match');
            card1.classList.add('matched');
            card2.classList.add('matched');
            
            flippedCards = [];
            lockBoard = false;
            
            // Check for victory
            if (matchedPairs === ANIMALS.length) {
                setTimeout(winGame, 600);
            }
        }, 600);
    } else {
        // Mismatch
        card1.classList.add('mismatch');
        card2.classList.add('mismatch');
        
        setTimeout(() => {
            playSound('mismatch');
        }, 200);
        
        setTimeout(() => {
            card1.classList.remove('flipped', 'mismatch');
            card2.classList.remove('flipped', 'mismatch');
            flippedCards = [];
            lockBoard = false;
        }, 1200);
    }
}

// Update Stats Interface
function updateStatsUI() {
    matchesCountEl.textContent = `${matchedPairs}/${ANIMALS.length}`;
    flipsCountEl.textContent = flipsCount;
    
    // Calculate progress percentage
    const progressPercent = (matchedPairs / ANIMALS.length) * 100;
    progressBarFill.style.width = `${progressPercent}%`;
}

// Text-to-Speech Engine
function speakAnimalName(name) {
    if ('speechSynthesis' in window) {
        // Cancel active speaking to avoid overlap
        window.speechSynthesis.cancel();
        
        const utterance = new SpeechSynthesisUtterance(name);
        const voices = window.speechSynthesis.getVoices();
        
        // Find natural English child-friendly/clear voice
        let selectedVoice = voices.find(voice => voice.lang.includes('en-US') && voice.name.includes('Google'));
        if (!selectedVoice) {
            selectedVoice = voices.find(voice => voice.lang.startsWith('en'));
        }
        
        if (selectedVoice) {
            utterance.voice = selectedVoice;
        }
        
        utterance.pitch = 1.35; // Cute kid-like voice pitch
        utterance.rate = 0.85;  // Slightly slower rate for clarity
        utterance.volume = 1.0;
        
        window.speechSynthesis.speak(utterance);
    }
}

// Sound Synthesizer via Web Audio API
function initAudio() {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
}

function playSound(type) {
    initAudio();
    if (!audioCtx) return;
    
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
    
    const now = audioCtx.currentTime;
    
    if (type === 'flip') {
        // Gentle card pop sound
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(150, now);
        osc.frequency.exponentialRampToValueAtTime(600, now + 0.1);
        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.1);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(now);
        osc.stop(now + 0.1);
    } else if (type === 'match') {
        // Happy, sparkling chime (C major arpeggio)
        const notes = [261.63, 329.63, 392.00, 523.25];
        notes.forEach((freq, index) => {
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq, now + index * 0.07);
            gain.gain.setValueAtTime(0.1, now + index * 0.07);
            gain.gain.exponentialRampToValueAtTime(0.01, now + index * 0.07 + 0.2);
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.start(now + index * 0.07);
            osc.stop(now + index * 0.07 + 0.25);
        });
    } else if (type === 'mismatch') {
        // Soft descending buzzer
        const osc1 = audioCtx.createOscillator();
        const osc2 = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        const filter = audioCtx.createBiquadFilter();
        
        osc1.type = 'sawtooth';
        osc2.type = 'sawtooth';
        
        osc1.frequency.setValueAtTime(130, now);
        osc1.frequency.linearRampToValueAtTime(90, now + 0.2);
        osc2.frequency.setValueAtTime(132, now); // Detune
        osc2.frequency.linearRampToValueAtTime(92, now + 0.2);
        
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(320, now);
        
        gain.gain.setValueAtTime(0.06, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.25);
        
        osc1.connect(filter);
        osc2.connect(filter);
        filter.connect(gain);
        gain.connect(audioCtx.destination);
        
        osc1.start(now);
        osc2.start(now);
        osc1.stop(now + 0.25);
        osc2.stop(now + 0.25);
    } else if (type === 'win') {
        // Grand victory fanfare
        const notes = [261.63, 329.63, 392.00, 523.25, 659.25, 783.99, 1046.50];
        notes.forEach((freq, index) => {
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq, now + index * 0.09);
            gain.gain.setValueAtTime(0.12, now + index * 0.09);
            gain.gain.exponentialRampToValueAtTime(0.01, now + index * 0.09 + 0.35);
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.start(now + index * 0.09);
            osc.stop(now + index * 0.09 + 0.4);
        });
    }
}

// Victory Screen Configuration
function winGame() {
    playSound('win');
    modalFlipsEl.textContent = flipsCount;
    victoryModal.classList.add('active');
    triggerConfetti();
}

// Confetti System
function triggerConfetti() {
    const colors = ['#fecfef', '#ff9a9e', '#a1c4fd', '#c2e9fb', '#f87171', '#fbbf24', '#34d399', '#60a5fa', '#a78bfa', '#f472b6'];
    const container = document.body;
    
    for (let i = 0; i < 80; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti-particle';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = -10 - (Math.random() * 20) + 'px';
        confetti.style.width = Math.random() * 8 + 8 + 'px';
        confetti.style.height = Math.random() * 12 + 8 + 'px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.position = 'fixed';
        confetti.style.zIndex = '101';
        confetti.style.borderRadius = '3px';
        confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
        
        const duration = Math.random() * 2.5 + 2.5; // 2.5s to 5s
        const delay = Math.random() * 1.2;
        
        confetti.style.animation = `fall ${duration}s linear ${delay}s forwards`;
        container.appendChild(confetti);
        
        // Remove particles once out of screen
        setTimeout(() => {
            confetti.remove();
        }, (duration + delay) * 1000);
    }
}

// Auto adjust font sizes for word cards so they fit in one line
function adjustWordFontSizes() {
    // If game board is hidden, measurements will return 0. Do not adjust yet.
    if (appContainer.classList.contains('hidden')) return;
    
    const wordCards = document.querySelectorAll('.card-word');
    wordCards.forEach(card => {
        const span = card.querySelector('span');
        if (!span) return;
        
        // Reset inner span size so we measure its natural stylesheet-based size
        span.style.fontSize = '';
        
        const maxAllowedWidth = card.clientWidth - 12; // 12px for safe horizontal padding
        let fontSize = parseFloat(window.getComputedStyle(span).fontSize);
        
        // span has white-space: nowrap and display: inline-block,
        // so span.offsetWidth is the true single-line width of the text.
        while (span.offsetWidth > maxAllowedWidth && fontSize > 8) {
            fontSize -= 0.5;
            span.style.fontSize = `${fontSize}px`;
        }
    });
}

// Event Bindings
btnReset.addEventListener('click', initGame);
btnPlayAgain.addEventListener('click', initGame);
window.addEventListener('resize', adjustWordFontSizes);

// Start Screen Events
btnStart.addEventListener('click', () => {
    playSound('flip');
    startScreen.classList.add('fade-out');
    appContainer.classList.remove('hidden');
    
    // Trigger auto-sizing now that elements are rendered in DOM and clientWidth is non-zero
    setTimeout(adjustWordFontSizes, 100);
});

// Changelog Modal Events
btnChangelog.addEventListener('click', (e) => {
    e.stopPropagation();
    changelogModal.classList.add('active');
});

btnCloseChangelog.addEventListener('click', () => {
    changelogModal.classList.remove('active');
});

// Close changelog if clicking outside content
changelogModal.addEventListener('click', (e) => {
    if (e.target === changelogModal) {
        changelogModal.classList.remove('active');
    }
});

// Load the game on DOM ready (pre-generates deck)
document.addEventListener('DOMContentLoaded', () => {
    initGame();
});
