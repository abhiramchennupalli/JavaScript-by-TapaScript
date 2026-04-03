//This is Rock paper scissors game

//creating the function

function rockPaperScissor() {

    console.log("Welcome to Rock Paper Scissor game");
    let userInput = prompt("Enter your choice , is it Rock, Paper or Scissor?");
    const userChoice = userInput.toLowerCase();

    const computerInput = Math.floor(Math.random() * 3 + 1);
    let computerChoice;


    if (computerInput === 1) {
        computerChoice = "rock";
    }
    else if (computerInput === 2) {
        computerChoice = "paper";
    }
    else if (computerInput === 3) {
        computerChoice = "scissors";
    }

    console.log("User input is", userChoice);
    console.log("Computer input is", computerChoice);

    if (computerChoice === userChoice) {
        console.log("Draw Match");


    }

    else if (
        (userChoice === "rock" && computerChoice === "scissor") ||
        (userChoice === "scissor" && computerChoice === "paper") ||
        (userChoice === "paper" && computerChoice === "rock")
    ) {
        console.log("User wins");
    }

    else if (
        (userChoice === "rock" && computerChoice === "paper") ||
        (userChoice === "scissor" && computerChoice === "rock") ||
        (userChoice === "paper" && computerChoice === "scissor")
    ) {
        console.log("Computer Wins");
    }
    else {
        console.log("Enter correct input");
    }

    let userReplay = prompt("Would you want to play again? (yes/no)");
    userReplay = userReplay ? userReplay.toLowerCase() : "No";
    if (userReplay === "yes") {
        rockPaperScissor();
    } else {
        console.log("Thankyou");
    }


}

//invoking function
rockPaperScissor();