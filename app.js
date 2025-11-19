let lifeTotals = {
    player1: 20,
    player2: 20
};

function changeLife(player, delta) {
    lifeTotals[player] += delta;
    document.getElementById(`${player}-lifetotal`).textContent = lifeTotals[player];
}

function resetLife() {
    lifeTotals = { player1: 20, player2: 20 };
    document.getElementById('player1-lifetotal').textContent = lifeTotals.player1;
    document.getElementById('player2-lifetotal').textContent = lifeTotals.player2;
}
