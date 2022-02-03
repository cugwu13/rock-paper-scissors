const scoreTable = {
    "player": 0,
    "computer": 0
};

const results = document.querySelector('.results');
const score = document.querySelector('.score');
const winner = document.createElement('p');
const winnerContainer = document.querySelector('.winner-container');
const humanCard = document.querySelector('.card-pic-human .flip-card-inner');
const cpuCard = document.querySelector('.card-pic-cpu .flip-card-inner');
const blockDiv = document.querySelector('#block-div');

const choices = document.querySelectorAll('.choice');
choices.forEach(choice => choice.addEventListener(
        'click', () => runClickEvent(choice)));

// Function to run series of functions that make up card animations and page interactions
function runClickEvent(choice) {
    let cpuChoice = computerPlay().toLowerCase();
    toggleBlockDiv();
    addSymbolToCard(choice, 0, "human");
    addSymbolToCard(cpuChoice, 1, "cpu");
    flipPlayerCard();
    setTimeout(flipCpuCard, 1000);
    setTimeout(() => simulateRound(choice.id, cpuChoice), 1500);
    setTimeout(() => {
        flipPlayerCard();
        flipCpuCard();
    }, 2500);
    setTimeout(() => {
        removeSymbolFromCard(0);
        removeSymbolFromCard(1);
        toggleBlockDiv();
        getWinner();
    }, 2800);
};

// Prevent user from selecting choices in rapid succession
function toggleBlockDiv() {
    blockDiv.classList.toggle('block-div');
};

// Check if score of 5 has been reached
function getWinner() {
    for (const opponent in scoreTable) {
        if (scoreTable[opponent] === 5) {
            if (opponent === 'player') winner.innerText = "You win!!";
            else winner.innerText = "You lost :(";
            winnerContainer.appendChild(winner);
            setTimeout(resetGame, 1000);
            return;
        };
    };
};

// Randomize cpu selection
function computerPlay() {
    let options = ['Rock', 'Paper', 'Scissors'];
    randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
};

// RPS logic and append results of round to log
function simulateRound(playerSelection, computerSelection) {
    const para = document.createElement('p');
    playerSelection = playerSelection.toLowerCase();
    switch (playerSelection) {
        case 'rock':
            if (computerSelection === 'paper') {
                scoreTable["computer"]++;
                para.innerText = "You lose! Paper beats rock!";
                break;
            } else if (computerSelection === 'scissors') {
                scoreTable["player"]++;
                para.innerText = "You win! Rock beats scissors!";
                break;
            } else {
                para.innerText = "It's a tie! Rock can't beat rock!";
                break;
            }
        case 'paper':
            if (computerSelection === 'rock') {
                scoreTable["player"]++;
                para.innerText = "You win! Paper beats rock!";
                break;
            } else if (computerSelection === 'scissors') {
                scoreTable["computer"]++;
                para.innerText = "You lose! Scissors beats paper!";
                break;
            } else {
                para.innerText = "It's a tie! Paper can't beat Paper!";
                break;
            }
        case 'scissors':
            if (computerSelection === 'rock') {
                scoreTable["computer"]++;
                para.innerText = "You lose! Rock beats scissors!";
                break;
            } else if (computerSelection === 'paper') {
                scoreTable["player"]++;
                para.innerText = "You win! Scissors beats paper!";
                break;
            } else {
                para.innerText = "It's a tie! Scissors can't beat scissors!";
                break;
            }
        default:
            para.innerText = 'Choose a valid option!';
            break;
    }
    results.appendChild(para);
    score.innerText = `${scoreTable['player']} - ${scoreTable['computer']}`;

    return;
};

// Clear 'game' div, show 'play again' button
function resetGame() {
    const game = document.querySelector('.game');
    game.style.cssText = 'justify-content: center; align-items: center;';

    const resetBtn = document.createElement('button');
    resetBtn.innerText = "PLAY AGAIN";
    resetBtn.classList.add("resetBtn");

    while (game.firstElementChild) {
        game.removeChild(game.firstElementChild);
    };
    game.appendChild(resetBtn);
    resetBtn.addEventListener('click', () => location.reload());
};

function flipPlayerCard() {
    humanCard.classList.toggle('flip');
};

function flipCpuCard() {
    cpuCard.classList.toggle('flip');
};

// Add choice pic to either card
function addSymbolToCard(element, index, type) {
    let elementClone;
    if (type === "human") elementClone = element.cloneNode();
    else {
        const cpuElement = document.querySelector(`.choices #${element}`);
        elementClone = cpuElement.cloneNode();
    };
    elementClone.classList.remove('choice');
    elementClone.classList.add('choice-clone');
    const cardBacks = document.querySelectorAll('.flip-card-back');
    cardBacks[index].appendChild(elementClone);
};

// Remvoe choice pic from either card
function removeSymbolFromCard(index) {
    const cardBacks = document.querySelectorAll('.flip-card-back');
    cardBacks[index].removeChild(cardBacks[index].firstElementChild);
};
