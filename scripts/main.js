// create a global array of options: Rock-paper scissors
const selection = ["rock", "paper", "scissors"];
let totalHumanWin = 0;
let totalComputerWin = 0;

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
const humanPlayer = (str) => {
        // receive input from client
        do {
            str = prompt("Enter your choice between: Paper, rock and scissors ");
        } while (str === null);
        let userInput = str.toLowerCase();
        return userInput;
        // return userInput;
    }
    // ==========End of human player funtion =========================

// ==========create checkWinner funtion to compare the selection of player=========================
const checkWinner = () => {
        let message = "";
        let humanInput = humanPlayer()
        let computerInput = computerPlayer();
        if (humanInput === 'rock' && computerInput === 'scissors') {
            console.log("You win")
            totalHumanWin += 1;
        } else if (humanInput === 'paper' && computerInput === 'rock') {
            console.log("You win")
            totalHumanWin += 1;
        } else if (humanInput === 'scissors' && computerInput === 'paper') {
            console.log("You win")
            totalHumanWin += 1;
        } else if (humanInput === computerInput) {
            console.log("It's a tie")
        } else {
            console.log("Computer wins")
            totalComputerWin += 1;
        }

    }
    // ========== End of checkWinner funtion to compare the selection of player=========================

//======== Recursive function to call the play the game 5 number of times.
const playGame = () => {
    checkWinner();
    if (totalHumanWin === 5 || totalComputerWin === 5) {

    } else {
        playGame();
    }
}

//======= End of Recursive function to call the play the game number of  times.
playGame();

console.log(totalHumanWin);
console.log(totalComputerWin);

const rock = document.getElementById('rock');

rock.addEventListener('click', function(e) {
    if (e.detail === 1) {
        console.log('rock')
    }
})