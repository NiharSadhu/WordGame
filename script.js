// Define the word list
const words = [
    "apple",
    "banana",
    "cherry",
    "date",
    "elderberry",
    "fig",
    "grapefruit",
    "honeydew",
    "indian plum",
    "jackfruit",
    "kiwi",
    "lemon",
    "mango",
    "nectarine",
    "orange",
    "pineapple",
    "quince",
    "raspberry",
    "strawberry",
    "tangerine",
    "ugli fruit",
    "vanilla bean",
    "watermelon",
    "xigua",
    "yellow watermelon",
    "zucchini"
];

// Get the input field and set focus
const input = document.getElementById("input");
input.focus();

// Set initial score and time values
let score = 0;
let time = 60;

// Show initial score and time
updateScore();
updateTime();

// Start the game loop
setInterval(gameLoop, 1000);

// Game loop function
function gameLoop() {
    // Decrement time every second
    time--;
    updateTime();

    // End the game if time runs out
    if (time === 0) {
        endGame();
        return;
    }

    // Check if the entered word matches the current word
    if (input.value.trim().toLowerCase() === getCurrentWord().toLowerCase()) {
        // Increase score and update current word
        score++;
        updateScore();
        input.value = "";
    }
}

// Update the score display
function updateScore() {
    const scoreElement = document.getElementById("score");
    scoreElement.innerText = `Score: ${score}`;
}

// Update the time display
function updateTime() {
    const timeElement = document.getElementById("time");
    timeElement.innerText = `Time: ${time}`;
}

// Get a random word from the word list
function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)];
}

// Get the current word
function getCurrentWord() {
    const wordElement = document.getElementById("word");
    return wordElement.innerText;
}

// Set the next word
function setNextWord() {
    const wordElement = document.getElementById("word");
    wordElement.innerText = getRandomWord();
}

// End the game
function endGame() {
    // Disable the input field
    input.disabled = true;

    // Show the final score
    alert(`Game over! Your final score is ${score}`);
}

// Set the first word and start the game
setNextWord();
