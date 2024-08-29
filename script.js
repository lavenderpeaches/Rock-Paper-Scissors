function getComputerChoice(){
    let randomNumber=Math.random();

    let compChoice;

    if (randomNumber>=0 && randomNumber<0.30){
        compChoice="rock";
    }
    else if (randomNumber>=0.30 && randomNumber<0.60){
        compChoice="paper"
    }
    else{
        compChoice="scissors"
    }

    return compChoice;
}

function getHumanChoice(event){
    let humChoice = event.target.innerText;

    humChoice=humChoice.toLowerCase();

    console.log(humChoice);

    return humChoice;
}

let humanScore=0, computerScore=0;




function playRound(event){
    const computerChoice = getComputerChoice();
    const humanChoice = getHumanChoice(event);

    console.log(computerChoice,humanChoice);

    let message;
    
    if (humanChoice===computerChoice){
        message="Draw";
    }
    else if ((humanChoice==="rock" && computerChoice==="scissors") || (humanChoice==="paper" && computerChoice==="rock") || (humanChoice==="scissors" && computerChoice==="paper")){
        message=`You have won because ${humanChoice} beats ${computerChoice}`;
        humanScore++;
    }
    else{
        message=`You have lost because ${computerChoice} beats ${humanChoice}`;
        computerScore++;
    }

    document.querySelector("#Message").textContent = message;
    document.querySelector("#HumanScore").textContent = `You : ${humanScore} `;
    document.querySelector("#ComputerScore").textContent = `Computer : ${computerScore}`;

    if (humanScore >= 5) {
        document.querySelector("#Message").textContent = "Congratulations! You won the game!";
       
    } else if (computerScore >= 5) {
        document.querySelector("#Message").textContent = "Sorry, you lost the game.";
    
    }

}



document.querySelector("#rock").addEventListener("click", playRound);
document.querySelector("#paper").addEventListener("click", playRound);
document.querySelector("#scissors").addEventListener("click", playRound);

