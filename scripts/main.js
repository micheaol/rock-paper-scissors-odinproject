// create a global array of options: Rock-paper scissors
const selection = ["rock", "paper", "scissors"];
let totalHumanWin = 0;
let totalComputerWin = 0;
const buttons = document.querySelectorAll('button');
let cpuScore = document.getElementById('cpu-score');
let humanScore = document.getElementById('player-score');
let messageDisplay = document.getElementById('message-display');
let showReset = document.getElementById('reset-btn');
showReset.style.visibility = 'hidden';

// ==========create computer player funtion =========================
const computerPlayer = () => {
        // create a random generator to generate number
        let numberGenerator = Math.round(Math.random() * 2);
        // loop through the selection to make a choice for the computer
        for (let i = 0; i < selection.length; i++) {
            return selection[numberGenerator];
        }
    }
    // =============End of computer player funtion =========================

// ==========create Human player funtion =========================
const humanPlayer = () => {
        let clickButton;
        buttons.forEach((button) => {
            button.addEventListener('click', () => {
                clickButton = button.id;
                console.log(clickButton);
                return clickButton
            })

        });
        // console.log(clickButton);
    }
    // ==========End of human player funtion =========================

// ==========create checkWinner funtion to compare the selection of player=========================
const checkWinner = () => {
        let message = "";
        let humanInput = humanPlayer()
        console.log(humanInput);
        let computerInput = computerPlayer();
        if (humanInput === 'rock' && computerInput === 'scissors') {
            message = "You win";
            console.log(message)
            totalHumanWin += 1;
        } else if (humanInput === 'paper' && computerInput === 'rock') {
            message = "You win";
            console.log(message)
            totalHumanWin += 1;
        } else if (humanInput === 'scissors' && computerInput === 'paper') {
            message = "You win";
            console.log(message)
            totalHumanWin += 1;
        } else if (humanInput === computerInput) {
            message = "It's a tie";
            console.log(message);
        } else {
            message = "Computer wins"
            console.log(message)
            totalComputerWin += 1;
        }
        messageDisplay.textContent = message;
        humanScore.textContent = totalHumanWin;
        cpuScore.textContent = totalComputerWin;

    }
    // ========== End of checkWinner funtion to compare the selection of player=========================

//======== Recursive function to call the play the game number of times.
const playGame = () => {
    checkWinner();
    if (totalHumanWin === 5 || totalComputerWin === 5) {

    } else {
        playGame();
    }
}

//======= End of Recursive function to call the play the game number of  times.
humanPlayer();

// console.log(totalHumanWin);
// console.log(totalComputerWin);