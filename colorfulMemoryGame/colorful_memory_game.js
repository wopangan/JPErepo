const colors = [
    'red', 'blue', 'green', 'purple', 'orange', 'pink', 'red', 'blue', 'green', 'purple', 'orange', 'pink'
];
let cards = shuffle(colors.concat(colors));
let selectedCards = [];
let score = 0;
let timeLeft = 30;
let gameInterval;

const startBtn = document.getElementById('startBtn');
const gameContainer = document.getElementById('game-container');
const scoreElement = document.getElementById('score');
const timerElement = document.getElementById('timer');

// Function that creates the card elements dynamically within the game-container div
function generateCards() {

    // for loop that will iterate over each element (color) in the 'cards' array.
    for (const color of cards) {
        const card = document.createElement('div');
        card.classList.add('card'); // adds a class 'card' to the created 'div'
        card.dataset.color = color; // represents the card's hidden color until the player picks it.
        card.textContent = '?'; // color of the card is hidden until it's clicked by the player.
        gameContainer.appendChild(card); // adds each card element within the designated container
    } 
}

// Function that is responsible for shuffling the elements of an array in random order
function shuffle(array) {

    // loop that iterates backward through the array starting from the last index
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); // represents a random index within the array
        [array[i], array[j]] = [array[j], array[i]]; // swaps the values at positions 'i' and 'j' without requiring a temporary variable.
    }
    return array;
}

// Function which manages the logic when a user clicks the card in the game. 
function handleCardClick(event) {
    const card = event.target; // line that retrieves the element that triggered the event (clicked card) and assigns it to the 'card' variable

    // if statement that checks whether the clicked element is a card and if it's already matched.
    if (!card.classList.contains('card') || card.classList.contains('matched')) {
        return; // ignore the click if not a card or already matched.
    }

    card.textContent = card.dataset.color;
    card.style.backgroundColor = card.dataset.color;
    selectedCards.push(card);

    // if statement that checks if two cards have been selected and also a delay that allows the player to see both selected cards.
    if (selectedCards.length === 2) {
        setTimeout(checkMatch, 500);
    }
}

// Function that evaluates whether the two selected cards match each other.
function checkMatch() {
    const [card1, card2] = selectedCards;

    if (card1.dataset.color === card2.dataset.color) {
        card1.classList.add('matched');
        card2.classList.add('matched');
        score += 2;
        scoreElement.textContent = `Score: ${score}`;
    } else {
        card1.textContent = '?';
        card2.textContent = '?';
        card1.style.backgroundColor = '#ddd';
        card2.style.backgroundColor = '#ddd';
    }

    selectedCards = []; // clears the 'selectedCards' array to reset it for the next set of card selections.
}

// Function for initializing and starting the memory match game.
function startGame() {

    // initial game state
    let timeLeft = 30;
    startBtn.disabled = true;
    score = 0 // reset scores to zero
    scoreElement.textContent = `Score: ${score}`;

    // starting the game timer
    startGameTimer(timeLeft);

    // prepareing cards and game elements
    cards = shuffle(colors.concat(colors));
    selectedCards = [];
    gameContainer.textContent = '';
    generateCards();
    gameContainer.addEventListener('click', handleCardClick);
}

function startGameTimer(timeLeft) {
    timerElement.textContent = `Time Left: ${timeLeft}`;
    gameInterval = setInterval(() => {
        timeLeft--;
        timerElement.textContent = `Time Left: ${timeLeft}`;

        if (timeLeft === 0) {
            clearInterval(gameInterval);
            let timeLeft = 30;
            alert('Game Over!');
            startBtn.disabled = false;
        }
    }, 1000);
}

startBtn.addEventListener('click', startGame);

