// create a global array of options: Rock-paper scissors
const selection = ["rock", "paper", "scissors"];
let totalHumanWin = 0;
let totalComputerWin = 0;
const buttons = document.querySelectorAll('button');
let cpuScore = document.getElementById('cpu-score');
let humanScore = document.getElementById('player-score')

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


// ==========create  humanPlayer funtion =========================
const humanPlayer = () => {
        let humanInput;
        let computerInput = computerPlayer();
        buttons.forEach((button) => {
            button.addEventListener('click', () => {
                humanInput = button.id;

                // console.log(userClick)
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
                cpuScore.textContent = totalComputerWin;
                humanScore.textContent = totalHumanWin;
            });
        });
    }
    // ==========End of human player funtion =========================

// ==========create checkWinner funtion to compare the selection of player=========================
// const checkWinner = () => {
//         let message = "";
//         let humanInput = humanPlayer()
//         console.log(humanInput);
//         let computerInput = computerPlayer();
//         if (humanInput === 'rock' && computerInput === 'scissors') {
//             console.log("You win")
//             totalHumanWin += 1;
//         } else if (humanInput === 'paper' && computerInput === 'rock') {
//             console.log("You win")
//             totalHumanWin += 1;
//         } else if (humanInput === 'scissors' && computerInput === 'paper') {
//             console.log("You win")
//             totalHumanWin += 1;
//         } else if (humanInput === computerInput) {
//             console.log("It's a tie")
//         } else {
//             console.log("Computer wins")
//             totalComputerWin += 1;
//         }

//     }
// ========== End of checkWinner funtion to compare the selection of player=========================

//======== Recursive function to call the play the game 5 number of times.
// const playGame = () => {
//     humanPlayer();
//     if (totalHumanWin === 5 || totalComputerWin === 5) {
//         break;
//     }
//     // else {
//     //     playGame();
//     // }
// }

//======= End of Recursive function to call the play the game number of  times.
// checkWinner();

humanPlayer();
// console.log(totalComputerWin);

// const buttons = document.querySelectorAll('button');

// buttons.forEach((button) => {

//     // and for each one we add a 'click' listener
//     button.addEventListener('click', () => {
//         console.log(button.id)
//     });
// });