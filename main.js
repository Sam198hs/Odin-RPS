function getComputerChoice(){
    const choices  = ["rock", "paper", "scissor"];
    const index = Math.floor(Math.random()*choices.length);

    return choices[index];
}

function getHumanChoice(){
    const userChoice = prompt("Choose one between Rock, Paper, Scissor", "Rock").toLowerCase();
  
    return userChoice; 
}

function playRound(humanChoice, computerChoice) {
 if (
        humanChoice === "paper" && computerChoice ==="rock" ||
        humanChoice === "rock" && computerChoice ==="scissor" ||
        humanChoice === "scissor" && computerChoice ==="paper" 
    ){
        console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
        return  "human";
    }else if(humanChoice === computerChoice){
        console.log("It's Draw");
    }else {
        console.log(`Computer Wins! ${computerChoice} beats ${humanChoice}`);
        return "comp";
    };
}

function playGame(){
     
    const rounds = parseInt(prompt("Enter number of rounds", 5));

    let humanScore = 0;
    let computerScore =0;   
   

    for (let i =0; i<rounds; i++){
        const humanChoose = getHumanChoice();
        const computerChoose = getComputerChoice();

        const result = playRound(humanChoose, computerChoose);
        if (result==="human"){
            humanScore++;
        }else if (result ==="comp"){
            computerScore++;
        }
    }

    console.log(`\nFinal Scores — You: ${humanScore}, Computer: ${computerScore}`);
    if (humanScore > computerScore) {
        console.log("🏆 You are the overall winner!");
    } else if (computerScore > humanScore) {
        console.log("🤖 The computer wins the game!");
    } else {
        console.log("It's a tie overall!");
    }

}

playGame();