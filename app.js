let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
let Uscore = document.querySelector("#user-score");
let Cscore = document.querySelector("#comp-score");

const genCompChoice = () => {
    let options = ["rock", "paper", "scissors"]; 
    return options[Math.floor(Math.random() * options.length)];   
    // rock, paper, Scissor
}

const drawGame = () => {
    console.log("Game was draw");
    msg.innerText = "Game Draw"
    msg.style.backgroundColor = "#081b31"
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        console.log("You Win!");
        msg.innerText = `Congratulation You Win! Your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor = "Green"
        userScore++
        Uscore.innerText = userScore;
    }else{
        console.log("You Loose!");
        msg.innerText = `You loose!  ${compChoice} beats Your ${userChoice}`
        msg.style.backgroundColor = "red"
        compScore++
        Cscore.innerText = compScore;
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
    showWinner(userWin, userChoice, compChoice);
    }
}


choices.forEach((choice) => {    
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        // console.log("choice was clicked", userChoice);
        playGame(userChoice)  
    })
})

