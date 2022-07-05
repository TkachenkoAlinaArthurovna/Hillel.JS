<<<<<<< Updated upstream

=======
const random = (min, max) => Math.floor(min + Math.random() * (max + 1 - min))
const min = 1;
const max = 3;

let pl1 = document.querySelector('.pl1');
let pl2 = document.querySelector('.pl2');

let paper = document.createElement('img');
paper.setAttribute('src', '/img/paper.jpg');

let scissors = document.createElement('img');
scissors.setAttribute('src', '/img/scissors.jpg');

let stone = document.createElement('img');
stone.setAttribute('src', '/img/stone.jpg');

function render(gamer, pl) {
    pl.removeChild(pl.lastChild);
    if (gamer === 1) {
        pl.append(paper.cloneNode())
    }
    if (gamer === 2) {
        pl.append(scissors.cloneNode())
    }
    if (gamer === 3) {
        pl.append(stone.cloneNode())
    }
}

let start = document.querySelector('.start');

start.addEventListener('click', startGame)

function startGame() {
    let gamer1 = random(min, max);
    render(gamer1, pl1);
    let gamer2 = random(min, max);
    render(gamer2, pl2);
    getWinner(gamer1, gamer2);
}

function getWinner(gamer1, gamer2) {
    let winner = document.querySelector('.result')
    if (gamer1 === gamer2) {
        winner.innerHTML = 'Draw!'
        return;
    }
    if (gamer1 === 1 && gamer2 === 3 || gamer1 === 2 && gamer2 === 1 || gamer1 === 3 && gamer2 === 2) {
        winner.innerHTML = 'WINNER: I!'
        return;
    }
    winner.innerHTML = 'WINNER: II!'
}
>>>>>>> Stashed changes
