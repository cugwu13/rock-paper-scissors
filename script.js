const scoreTable = {
    "player": 0,
    "computer": 0
};

const results = document.querySelector('.results');
const score = document.querySelector('.score');
const winner = document.createElement('h2');

const humanCard = document.querySelector('.card-pic-human .flip-card-inner');

const choices = document.querySelectorAll('.choice');
choices.forEach(choice => choice.addEventListener(
        'click', () => {
            // humanCard.classList.toggle('flip');
            //TODO: Add feature that flips computer's card as well

            //TODO: Add feature to flip card back after 2 seconds

            simulateRound(choice.id, computerPlay());
            getWinner();
        }
));

function getWinner() {
    for (const opponent in scoreTable) {
        if (scoreTable[opponent] === 5) {
            if (opponent === 'player') winner.innerText = "You win!!";
            else winner.innerText = "You lost :(";
            score.appendChild(winner);
            setTimeout(resetGame, 1000);
            return;
        };
    };
};

function computerPlay() {
    let options = ['Rock', 'Paper', 'Scissors'];
    randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
};

function simulateRound(playerSelection, computerSelection) {
    const para = document.createElement('p');
    playerSelection = playerSelection.toLowerCase();
    switch (playerSelection) {
        case 'rock':
            if (computerSelection === 'Paper') {
                scoreTable["computer"]++;
                para.innerText = "You lose! Paper beats rock!";
                break;
            } else if (computerSelection === 'Scissors') {
                scoreTable["player"]++;
                para.innerText = "You win! Rock beats scissors!";
                break;
            } else {
                para.innerText = "It's a tie! Rock can't beat rock!";
                break;
            }
        case 'paper':
            if (computerSelection === 'Rock') {
                scoreTable["player"]++;
                para.innerText = "You win! Paper beats rock!";
                break;
            } else if (computerSelection === 'Scissors') {
                scoreTable["computer"]++;
                para.innerText = "You lose! Scissors beats paper!";
                break;
            } else {
                para.innerText = "It's a tie! Paper can't beat Paper!";
                break;
            }
        case 'scissors':
            if (computerSelection === 'Rock') {
                scoreTable["computer"]++;
                para.innerText = "You lose! Rock beats scissors!";
                break;
            } else if (computerSelection === 'Paper') {
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

function removeChoices(nodelist) {
    return
}

function resetGame() {
    const content = document.querySelector('.content');
    content.style.cssText = 'justify-content: center; align-items: center;';

    const resetBtn = document.createElement('button');
    resetBtn.innerText = "PLAY AGAIN";
    resetBtn.classList.add("resetBtn");

    while (content.firstElementChild) {
        content.removeChild(content.firstElementChild);
    };
    content.appendChild(resetBtn);
    resetBtn.addEventListener('click', () => location.reload());
}

function simulateGame(rounds) {
    for (let round = 0; round < rounds; round++) {
        let player = prompt('Rock, Paper, or Scissors?');
        let computer = computerPlay();
        simulateRound(player, computer);
    }
    let finalScore = `${scoreTable['player']} - ${scoreTable['computer']}`;
    let winner = () => (scoreTable['player'] > scoreTable['computer']) ? `You win! Final score: ${finalScore}` : `You lose :( Final score: ${finalScore}`;
    return winner()
};