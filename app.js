// Game State
const TOPICS = {
    animals: {
        title: "Cute Animals! 🐾",
        items: [
            { name: 'lion', label: 'Lion', src: 'assets/images/lion.png' },
            { name: 'elephant', label: 'Elephant', src: 'assets/images/elephant.png' },
            { name: 'monkey', label: 'Monkey', src: 'assets/images/monkey.png' },
            { name: 'giraffe', label: 'Giraffe', src: 'assets/images/giraffe.png' },
            { name: 'panda', label: 'Panda', src: 'assets/images/panda.png' },
            { name: 'tiger', label: 'Tiger', src: 'assets/images/tiger.png' },
            { name: 'rabbit', label: 'Rabbit', src: 'assets/images/rabbit.png' },
            { name: 'fox', label: 'Fox', src: 'assets/images/fox.png' },
            { name: 'koala', label: 'Koala', src: 'assets/images/koala.png' },
            { name: 'zebra', label: 'Zebra', src: 'assets/images/zebra.png' }
        ]
    },
    colors: {
        title: "Splash of Colors! 🎨",
        items: [
            { name: 'red', label: 'Red', color: '#ef4444' },
            { name: 'blue', label: 'Blue', color: '#3b82f6' },
            { name: 'green', label: 'Green', color: '#10b981' },
            { name: 'yellow', label: 'Yellow', color: '#fbbf24' },
            { name: 'orange', label: 'Orange', color: '#f97316' },
            { name: 'purple', label: 'Purple', color: '#8b5cf6' },
            { name: 'pink', label: 'Pink', color: '#ec4899' },
            { name: 'brown', label: 'Brown', color: '#78350f' },
            { name: 'black', label: 'Black', color: '#1e293b' },
            { name: 'white', label: 'White', color: '#ffffff' }
        ]
    },
    fruits: {
        title: "Yummy Fruits! 🍎",
        items: [
            { name: 'apple', label: 'Apple', emoji: '🍎' },
            { name: 'banana', label: 'Banana', emoji: '🍌' },
            { name: 'orange', label: 'Orange', emoji: '🍊' },
            { name: 'strawberry', label: 'Strawberry', emoji: '🍓' },
            { name: 'grape', label: 'Grape', emoji: '🍇' },
            { name: 'watermelon', label: 'Watermelon', emoji: '🍉' },
            { name: 'peach', label: 'Peach', emoji: '🍑' },
            { name: 'cherry', label: 'Cherry', emoji: '🍒' },
            { name: 'pineapple', label: 'Pineapple', emoji: '🍍' },
            { name: 'pear', label: 'Pear', emoji: '🍐' }
        ]
    },
    shapes: {
        title: "Fun Shapes! 📐",
        items: [
            { name: 'circle', label: 'Circle', shape: 'circle' },
            { name: 'square', label: 'Square', shape: 'square' },
            { name: 'triangle', label: 'Triangle', shape: 'triangle' },
            { name: 'rectangle', label: 'Rectangle', shape: 'rectangle' },
            { name: 'star', label: 'Star', shape: 'star' },
            { name: 'heart', label: 'Heart', shape: 'heart' },
            { name: 'diamond', label: 'Diamond', shape: 'diamond' },
            { name: 'oval', label: 'Oval', shape: 'oval' },
            { name: 'pentagon', label: 'Pentagon', shape: 'pentagon' },
            { name: 'hexagon', label: 'Hexagon', shape: 'hexagon' }
        ]
    },
    kitchen: {
        title: "In the Kitchen! 🍳",
        items: [
            { name: 'spoon', label: 'Spoon', emoji: '🥄' },
            { name: 'fork', label: 'Fork', emoji: '🍴' },
            { name: 'plate', label: 'Plate', emoji: '🍽️' },
            { name: 'bowl', label: 'Bowl', emoji: '🥣' },
            { name: 'cup', label: 'Cup', emoji: '🥛' },
            { name: 'pan', label: 'Pan', emoji: '🍳' },
            { name: 'pot', label: 'Pot', emoji: '🍲' },
            { name: 'teapot', label: 'Teapot', emoji: '🫖' },
            { name: 'mug', label: 'Mug', emoji: '☕' },
            { name: 'knife', label: 'Knife', emoji: '🔪' }
        ]
    },
    toilet: {
        title: "In the Bathroom! 🧼",
        items: [
            { name: 'soap', label: 'Soap', emoji: '🧼' },
            { name: 'toothbrush', label: 'Toothbrush', emoji: '🪥' },
            { name: 'toilet paper', label: 'Toilet Paper', emoji: '🧻' },
            { name: 'toilet', label: 'Toilet', emoji: '🚽' },
            { name: 'bathtub', label: 'Bathtub', emoji: '🛁' },
            { name: 'shower', label: 'Shower', emoji: '🚿' },
            { name: 'mirror', label: 'Mirror', emoji: '🪞' },
            { name: 'lotion', label: 'Lotion', emoji: '🧴' },
            { name: 'comb', label: 'Comb', emoji: '🪮' },
            { name: 'sponge', label: 'Sponge', emoji: '🧽' }
        ]
    },
    livingroom: {
        title: "My Living Room! 🛋️",
        items: [
            { name: 'sofa', label: 'Sofa', emoji: '🛋️' },
            { name: 'tv', label: 'TV', emoji: '📺' },
            { name: 'lamp', label: 'Lamp', emoji: '💡' },
            { name: 'clock', label: 'Clock', emoji: '🕰️' },
            { name: 'picture', label: 'Picture', emoji: '🖼️' },
            { name: 'plant', label: 'Plant', emoji: '🪴' },
            { name: 'chair', label: 'Chair', emoji: '🪑' },
            { name: 'window', label: 'Window', emoji: '🪟' },
            { name: 'book', label: 'Book', emoji: '📖' },
            { name: 'toys', label: 'Toys', emoji: '🧸' }
        ]
    },
    school: {
        title: "At My School! ✏️",
        items: [
            { name: 'pencil', label: 'Pencil', emoji: '✏️' },
            { name: 'ruler', label: 'Ruler', emoji: '📏' },
            { name: 'backpack', label: 'Backpack', emoji: '🎒' },
            { name: 'book', label: 'Book', emoji: '📚' },
            { name: 'crayon', label: 'Crayon', emoji: '🖍️' },
            { name: 'scissors', label: 'Scissors', emoji: '✂️' },
            { name: 'paper', label: 'Paper', emoji: '📝' },
            { name: 'computer', label: 'Computer', emoji: '💻' },
            { name: 'globe', label: 'Globe', emoji: '🌍' },
            { name: 'bell', label: 'Bell', emoji: '🔔' }
        ]
    },
    kindergarten: {
        title: "At Kindergarten! 🧸",
        items: [
            { name: 'teddy bear', label: 'Teddy Bear', emoji: '🧸' },
            { name: 'slide', label: 'Slide', emoji: '🛝' },
            { name: 'blocks', label: 'Blocks', emoji: '🧱' },
            { name: 'ball', label: 'Ball', emoji: '⚽' },
            { name: 'balloon', label: 'Balloon', emoji: '🎈' },
            { name: 'puzzle', label: 'Puzzle', emoji: '🧩' },
            { name: 'toy train', label: 'Toy Train', emoji: '🚂' },
            { name: 'drum', label: 'Drum', emoji: '🥁' },
            { name: 'bicycle', label: 'Bicycle', emoji: '🚲' },
            { name: 'paint', label: 'Paint', emoji: '🎨' }
        ]
    },
    park: {
        title: "In the Park! 🌳",
        items: [
            { name: 'tree', label: 'Tree', emoji: '🌳' },
            { name: 'flower', label: 'Flower', emoji: '🌸' },
            { name: 'bench', label: 'Bench', emoji: '🪑' },
            { name: 'fountain', label: 'Fountain', emoji: '⛲' },
            { name: 'bird', label: 'Bird', emoji: '🐦' },
            { name: 'butterfly', label: 'Butterfly', emoji: '🦋' },
            { name: 'kite', label: 'Kite', emoji: '🪁' },
            { name: 'bicycle', label: 'Bicycle', emoji: '🚲' },
            { name: 'grass', label: 'Grass', emoji: '🌱' },
            { name: 'squirrel', label: 'Squirrel', emoji: '🐿️' }
        ]
    },
    beach: {
        title: "At the Beach! 🏖️",
        items: [
            { name: 'umbrella', label: 'Umbrella', emoji: '⛱️' },
            { name: 'shell', label: 'Shell', emoji: '🐚' },
            { name: 'crab', label: 'Crab', emoji: '🦀' },
            { name: 'fish', label: 'Fish', emoji: '🐟' },
            { name: 'sun', label: 'Sun', emoji: '☀️' },
            { name: 'boat', label: 'Boat', emoji: '⛵' },
            { name: 'sunglasses', label: 'Sunglasses', emoji: '🕶️' },
            { name: 'coconut', label: 'Coconut', emoji: '🥥' },
            { name: 'wave', label: 'Wave', emoji: '🌊' },
            { name: 'sandcastle', label: 'Sandcastle', emoji: '🏰' }
        ]
    },
    restaurant: {
        title: "At the Restaurant! 🍕",
        items: [
            { name: 'pizza', label: 'Pizza', emoji: '🍕' },
            { name: 'burger', label: 'Burger', emoji: '🍔' },
            { name: 'pasta', label: 'Pasta', emoji: '🍝' },
            { name: 'ice cream', label: 'Ice Cream', emoji: '🍨' },
            { name: 'cake', label: 'Cake', emoji: '🍰' },
            { name: 'juice', label: 'Juice', emoji: '🥤' },
            { name: 'salad', label: 'Salad', emoji: '🥗' },
            { name: 'soup', label: 'Soup', emoji: '🥣' },
            { name: 'menu', label: 'Menu', emoji: '📋' },
            { name: 'chef', label: 'Chef', emoji: '🧑‍🍳' }
        ]
    }
};

let currentTopic = 'animals';
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
    
    // Get active dataset
    const topicData = TOPICS[currentTopic];
    
    // Update game title based on topic
    document.getElementById('game-title').textContent = topicData.title;
    
    // Generate deck: 10 word cards + 10 content cards
    topicData.items.forEach(item => {
        // Word Card
        cards.push({
            id: `word_${item.name}`,
            name: item.name,
            type: 'word',
            label: item.label
        });
        
        // Image Card (Content face)
        cards.push({
            id: `image_${item.name}`,
            name: item.name,
            type: 'image',
            label: item.label,
            imageSrc: item.src || null,
            color: item.color || null,
            shape: item.shape || null,
            emoji: item.emoji || null
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
        
        // Render content dynamically based on active topic item parameters
        if (currentTopic === 'colors') {
            const colorBubble = document.createElement('div');
            colorBubble.classList.add('color-bubble');
            if (cardData.name === 'white') {
                colorBubble.style.borderColor = '#cbd5e1';
            }
            colorBubble.style.background = `radial-gradient(circle at 30% 30%, #ffffff 0%, ${cardData.color} 35%, ${getDarkenedColor(cardData.color)} 100%)`;
            wrapper.appendChild(colorBubble);
        } else if (currentTopic === 'shapes') {
            wrapper.innerHTML = getShapeSVG(cardData.shape);
        } else if (cardData.imageSrc) {
            const img = document.createElement('img');
            img.classList.add('card-image');
            img.src = cardData.imageSrc;
            img.alt = `Cute Cartoon ${cardData.label}`;
            img.loading = 'lazy';
            wrapper.appendChild(img);
        } else if (cardData.emoji) {
            const emojiSpan = document.createElement('span');
            emojiSpan.classList.add('card-emoji');
            emojiSpan.textContent = cardData.emoji;
            wrapper.appendChild(emojiSpan);
        }
        
        const audioBadge = document.createElement('div');
        audioBadge.classList.add('audio-badge');
        audioBadge.innerHTML = '🔊';
        
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
    
    // Calculate card translation to shift it towards the screen center when zoomed
    const rect = cardElement.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const centerX = viewportWidth / 2;
    const centerY = viewportHeight / 2;
    const cardCenterX = rect.left + rect.width / 2;
    const cardCenterY = rect.top + rect.height / 2;
    
    // Shift the card 45% of the distance towards the screen center to prevent viewport clipping at 2x scale
    const translateX = (centerX - cardCenterX) * 0.45;
    const translateY = (centerY - cardCenterY) * 0.45;
    
    cardElement.style.setProperty('--translate-x', `${translateX}px`);
    cardElement.style.setProperty('--translate-y', `${translateY}px`);
    
    // Flip and zoom card
    cardElement.classList.add('flipped', 'zoomed');
    setTimeout(() => {
        cardElement.classList.remove('zoomed');
    }, 1000);
    
    // Voice playback: ONLY for content/image cards
    if (cardData.type === 'image') {
        speakWord(cardData.label);
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
    const totalPairs = TOPICS[currentTopic].items.length;
    
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
            if (matchedPairs === totalPairs) {
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
    const totalPairs = TOPICS[currentTopic].items.length;
    matchesCountEl.textContent = `${matchedPairs}/${totalPairs}`;
    flipsCountEl.textContent = flipsCount;
    
    // Calculate progress percentage
    const progressPercent = (matchedPairs / totalPairs) * 100;
    progressBarFill.style.width = `${progressPercent}%`;
}

// Helper to darken hex color code for 3D radial gloss rendering
function getDarkenedColor(hex) {
    if (hex === '#ffffff') return '#cbd5e1';
    if (hex === '#1e293b') return '#0f172a';
    
    let c = hex.substring(1);
    let rgb = parseInt(c, 16);
    let r = (rgb >> 16) & 0xff;
    let g = (rgb >> 8) & 0xff;
    let b = (rgb >> 0) & 0xff;
    
    // Darken by 30%
    r = Math.max(0, Math.floor(r * 0.7));
    g = Math.max(0, Math.floor(g * 0.7));
    b = Math.max(0, Math.floor(b * 0.7));
    
    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
}

// Helper to build shape inline SVGs with cute cartoon faces
function getShapeSVG(shape) {
    let shapeElement = '';
    
    switch(shape) {
        case 'circle':
            shapeElement = '<circle cx="50" cy="50" r="38" fill="#ff7675" />';
            break;
        case 'square':
            shapeElement = '<rect x="15" y="15" width="70" height="70" rx="10" fill="#74b9ff" />';
            break;
        case 'triangle':
            shapeElement = '<polygon points="50,15 15,80 85,80" fill="#55efc4" />';
            break;
        case 'rectangle':
            shapeElement = '<rect x="10" y="25" width="80" height="50" rx="8" fill="#fd79a8" />';
            break;
        case 'star':
            shapeElement = '<polygon points="50,10 63,38 93,38 70,57 78,87 50,70 22,87 30,57 7,38 37,38" fill="#ffeaa7" />';
            break;
        case 'heart':
            shapeElement = '<path d="M50,30 C50,15 28,12 28,30 C28,48 50,72 50,82 C50,72 72,48 72,30 C72,12 50,15 50,30 Z" fill="#ff76b2" />';
            break;
        case 'diamond':
            shapeElement = '<polygon points="50,12 82,50 50,88 18,50" fill="#a29bfe" />';
            break;
        case 'oval':
            shapeElement = '<ellipse cx="50" cy="50" rx="42" ry="28" fill="#81ecec" />';
            break;
        case 'pentagon':
            shapeElement = '<polygon points="50,14 86,40 72,82 28,82 14,40" fill="#fab1a0" />';
            break;
        case 'hexagon':
            shapeElement = '<polygon points="50,12 83,31 83,69 50,88 17,69 17,31" fill="#ffeaa7" />';
            break;
    }
    
    // Cute face elements: eyes, highlights, cheeks, curved happy smile
    const face = `
        <!-- Cheeks -->
        <circle cx="36" cy="53" r="4" fill="#ff4d4d" opacity="0.4" />
        <circle cx="64" cy="53" r="4" fill="#ff4d4d" opacity="0.4" />
        <!-- Eyes -->
        <circle cx="41" cy="48" r="5" fill="#2d3436" />
        <circle cx="59" cy="48" r="5" fill="#2d3436" />
        <!-- Eye Highlights -->
        <circle cx="43" cy="46" r="1.8" fill="#ffffff" />
        <circle cx="61" cy="46" r="1.8" fill="#ffffff" />
        <!-- Smile -->
        <path d="M 45,55 Q 50,60 55,55" stroke="#2d3436" stroke-width="3" stroke-linecap="round" fill="none" />
    `;
    
    // Return complete SVG string
    return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        ${shapeElement}
        ${face}
    </svg>`;
}

// Create a global list to hold active utterances and prevent garbage collection on mobile
window.activeUtterances = [];

// Text-to-Speech Engine
function speakWord(word) {
    if ('speechSynthesis' in window) {
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        
        // Android Chrome cancel() bug: calling cancel() before speak() can freeze/silence the engine on mobile.
        // Only cancel on desktop if speaking.
        if (!isMobile && window.speechSynthesis.speaking) {
            window.speechSynthesis.cancel();
        }
        
        const utterance = new SpeechSynthesisUtterance(word);
        
        // Enforce English language explicitly (essential for Android Chrome routing)
        utterance.lang = 'en-US';
        
        // Store utterance in a global array to prevent mobile garbage collection
        window.activeUtterances.push(utterance);
        
        const cleanUpUtterance = () => {
            const index = window.activeUtterances.indexOf(utterance);
            if (index > -1) {
                window.activeUtterances.splice(index, 1);
            }
        };
        
        utterance.onend = cleanUpUtterance;
        utterance.onerror = cleanUpUtterance;
        
        // Force speech synthesis to resume if paused (common mobile browser bug)
        if (window.speechSynthesis.paused) {
            window.speechSynthesis.resume();
        }

        if (!isMobile) {
            const voices = window.speechSynthesis.getVoices();
            // Find natural English voice for desktop
            let selectedVoice = voices.find(voice => voice.lang.includes('en-US') && voice.name.includes('Google'));
            if (!selectedVoice) {
                selectedVoice = voices.find(voice => voice.lang.startsWith('en'));
            }
            if (selectedVoice) {
                utterance.voice = selectedVoice;
            }
            
            utterance.pitch = 1.35; // Cute kid-like voice pitch on desktop
            utterance.rate = 0.85;  // Slightly slower rate for desktop clarity
        } else {
            // On mobile, leave utterance.voice empty so it falls back to the system's
            // default working voice (avoids cloud voice offline silence bugs).
            // Also keep standard pitch/rate to ensure system engine compatibility.
            utterance.pitch = 1.0;
            utterance.rate = 1.0;
        }
        
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
        
        const maxAllowedWidth = card.clientWidth - 8; // 8px for safe horizontal padding (4px on each side)
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

// Start Screen Topic Grid Event Bindings
const topicCards = document.querySelectorAll('.topic-card');
topicCards.forEach(card => {
    card.addEventListener('click', () => {
        playSound('flip');
        currentTopic = card.dataset.topic;
        
        // Initialize game for selected topic
        initGame();
        
        startScreen.classList.add('fade-out');
        appContainer.classList.remove('hidden');
        
        // Trigger auto-sizing now that elements are rendered in DOM and clientWidth is non-zero
        setTimeout(adjustWordFontSizes, 120);
    });
});

// Home Button Event (Return to Selection Screen)
const btnHome = document.getElementById('btn-home');
btnHome.addEventListener('click', () => {
    playSound('flip');
    
    // Stop speaking immediately
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
    }
    
    appContainer.classList.add('hidden');
    startScreen.classList.remove('fade-out');
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

// Load the game on DOM ready (pre-generates deck for initial topic)
document.addEventListener('DOMContentLoaded', () => {
    initGame();
});

