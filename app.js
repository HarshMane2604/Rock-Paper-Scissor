let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");

const genCompChoice = () => {
    let options = ["rock", "paper", "scissors"]; 
    return options[Math.floor(Math.random() * options.length)];   
    // rock, paper, Scissor
}

const drawGame = () => {
    console.log("Game was draw");
    
}

const showWinner = (userWin) => {
    if(userWin){
        console.log("You Win!");
    }else{
        console.log("You Loose!");
    }
    
}
const playGame = (userChoice) => {
    console.log("User Choice = ", userChoice);
    const compChoice = genCompChoice();
    console.log("Comp Choice = ", compChoice);

    if(userChoice === compChoice){
        drawGame();
    }else{
     let userWin = true;
     if(userChoice === "rock"){
        // Scissors, paper
        userWin = compChoice === "paper" ? false : true; 
     } else if(userChoice === "paper"){
        // rock, scissor
        userWin = compChoice === "scissors" ? false : true; 
     } else {
        // paper, rock
        userWin = compChoice === "rock" ? false : true; 
     }
    showWinner(userWin);
    }
}


choices.forEach((choice) => {    
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        // console.log("choice was clicked", userChoice);
        playGame(userChoice)  
    })
})

