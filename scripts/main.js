// create a global array of options: Rock-paper scissors
const selection = ["rock", "paper", "scissors"];
let totalHumanWin = 0;
let totalComputerWin = 0;
let ties = 0;
let roundWinner = '';
let playerSelection = '';
let humanInput;

const buttons = document.querySelectorAll('.player-selection');
let cpuScore = document.getElementById('cpu-score');
let humanScore = document.getElementById('player-score');
let messageDisplay = document.getElementById('message-display');
let showReset = document.getElementById('reset-btn');
let resultDisplay = document.querySelector('.result')


let playerScissors = document.querySelector('#player-scissors');
let playerRock = document.querySelector('#player-rock');
let playerPaper = document.querySelector('#player-paper');

let cpuRock = document.querySelector('#cpu-rock');
let cpuPaper = document.querySelector('#cpu-paper');
let cpuScissors = document.querySelector('#cpu-scissors');
showReset.style.visibility = 'hidden';


function clickButton() {
    const clickSound = document.querySelector('#click-audio');
    clickSound.currentTime = 0;
    clickSound.play();
}

// ==========create computer player funtion =========================
const computerPlayer = () => {
        // create a random generator to generate number
        let numberGenerator = Math.round(Math.random() * 2);
        // loop through the selection to make a choice for the computer
        for (let i = 0; i < selection.length; i++) {
            return selection[numberGenerator];
        }
    }
    // ==========create  humanPlayer funtion =========================
    //==============play round function ==============
function playRound(playerSelection) {
    let cpuSelection = computerPlayer();

    switch (cpuSelection) {
        case "scissors":
            cpuScissors.setAttribute('class', 'cpu-selection-made')
            cpuRock.setAttribute('class', 'cpu-selection');
            cpuPaper.setAttribute('class', 'cpu-selection');

            if (playerSelection === "rock") {
                playerRock.setAttribute('class', 'player-selection-made')
                playerPaper.setAttribute('class', 'player-selection')
                playerScissors.setAttribute('class', 'player-selection')

                messageDisplay.textContent = "You Win!"
                return 'player';

            } else if (playerSelection === "paper") {
                playerPaper.setAttribute('class', 'player-selection-made')
                playerRock.setAttribute('class', 'player-selection')
                playerScissors.setAttribute('class', 'player-selection')


                messageDisplay.textContent = "You Lose!"
                return "computer"

            } else if (playerSelection === "scissors") {
                playerScissors.setAttribute('class', 'player-selection-made')
                playerRock.setAttribute('class', 'player-selection')
                playerPaper.setAttribute('class', 'player-selection')

                messageDisplay.textContent = "It's a tie"
                return null;
            }
            break;
        case "paper":
            cpuPaper.setAttribute('class', 'cpu-selection-made');
            cpuScissors.setAttribute('class', 'cpu-selection')
            cpuRock.setAttribute('class', 'cpu-selection');


            if (playerSelection === "rock") {
                playerRock.setAttribute('class', 'player-selection-made')
                playerPaper.setAttribute('class', 'player-selection')
                playerScissors.setAttribute('class', 'player-selection')

                messageDisplay.textContent = "You Lose!"
                return 'computer'

            } else if (playerSelection === "scissors") {
                playerScissors.setAttribute('class', 'player-selection-made')
                playerPaper.setAttribute('class', 'player-selection')
                playerRock.setAttribute('class', 'player-selection')


                messageDisplay.textContent = "You win!"
                return 'player'

            } else if (playerSelection === "paper") {
                playerPaper.setAttribute('class', 'player-selection-made')
                playerScissors.setAttribute('class', 'player-selection')
                playerRock.setAttribute('class', 'player-selection')


                messageDisplay.textContent = "It's a tie"
                return null;
            }
            break;
        case "rock":
            cpuRock.setAttribute('class', 'cpu-selection-made');
            cpuPaper.setAttribute('class', 'cpu-selection');
            cpuScissors.setAttribute('class', 'cpu-selection')



            if (playerSelection === "paper") {
                playerPaper.setAttribute('class', 'player-selection-made')
                playerRock.setAttribute('class', 'player-selection')
                playerScissors.setAttribute('class', 'player-selection')

                messageDisplay.textContent = "You Lose!"
                return 'player'

            } else if (playerSelection === "scissors") {
                playerScissors.setAttribute('class', 'player-selection-made')
                playerPaper.setAttribute('class', 'player-selection')
                playerRock.setAttribute('class', 'player-selection')


                messageDisplay.textContent = "You Lose!"
                return 'computer'

            } else if (playerSelection === "rock") {
                playerPaper.setAttribute('class', 'player-selection')
                playerScissors.setAttribute('class', 'player-selection')
                playerRock.setAttribute('class', 'player-selection-made')


                messageDisplay.textContent = "It's a tie"
                return null;
            }
            break;

        default:
            break;
    }
}

buttons.forEach(button => button.addEventListener('click', () => {
    
    clickButton();
    playerSelection = button.value;

    roundWinner = playRound(playerSelection)
    switch (roundWinner) {
        case "player":
            totalHumanWin += 1;
            break;
        case "computer":
            totalComputerWin += 1;
            break;
        case null:
            ties++
            break;

        default:
            break;
    }

    humanScore.textContent = totalHumanWin;
    cpuScore.textContent = totalComputerWin;

    console.log("player: " + totalHumanWin);
    console.log("computer: " + totalComputerWin);


    if (totalHumanWin === 5 || totalComputerWin === 5) {
        declearWinner();

        //To disable buttons once winner is decleared
        buttons.forEach(button => button.disabled = true);
        showReset.style.visibility = 'visible';
    }
}));

function declearWinner() {
    if (totalHumanWin > totalComputerWin) {
        messageDisplay.textContent = "You won";
        resultDisplay.style.backgroundColor = 'green';

    } else {
        messageDisplay.textContent = "Computer Won!"
        resultDisplay.style.backgroundColor = 'red'
    }
}