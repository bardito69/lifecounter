// Default lifetotals
let player1Life = 20;
let player2Life = 20;

// Updates display on screen
function updateDisplay() {
    document.getElementById("player1-lifetotal").textContent = player1Life;
    document.getElementById("player2-lifetotal").textContent = player2Life;
}

// Change life for a player
function changeLife(player, amount) {
    if (player === "player1") {
        player1Life += amount;
    } else if (player === "player2") {
        player2Life += amount;
    }
    updateDisplay();
}

// Reset both players to 20
function resetLife() {
    player1Life = 20;
    player2Life = 20;
    updateDisplay();
}

// Initialize display on page load
updateDisplay();
