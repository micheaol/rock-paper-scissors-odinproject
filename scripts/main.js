// create computer funtion which will include array of [Rock, Paper, and Scissors]
// create human play funtion which will include array of [Rock, Paper, and Scissors]
// Loop through the array to make selection
// compare the selection
// 
// 
// 
// 
// 

const computerPlayer = () => {
    let selection = ["Rock", "Paper", "Scissors"];
    // Generate random number to match the array
    let selectionGenerated = Math.round(Math.random() * 3);
    // Loop the array of selection to make choice for the computer.
    for (let i = 0; i < selection.length; i++) {
        return selection[selectionGenerator];
    }

}
console.log(computerPlayer());