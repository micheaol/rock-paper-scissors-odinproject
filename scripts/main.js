// create a global array of options: Rock-paper scissors
const selection = ["rock", "paper", "scissors"];

// ==========create computer player funtion =========================
const computerPlayer = () => {
        // create a random generator to generate number
        let numberGenerator = Math.round(Math.random() * 2);
        // loop through the selection to make a choice for the computer
        for (let i = 0; i < selection.length; i++) {
            return selection[numberGenerator];
        }
    }
    // ==========End of computer player funtion =========================

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

// ==========create playGame funtion =========================
const playGame = () => {
    let totalHumanWin = 0;
    let totalComputerWin = 0;
    let message = "";
    let humanInput = humanPlayer()
    let computerInput = computerPlayer();

    return `User is: ${humanInput} && computer is: ${computerInput}`;


}
console.log(playGame())