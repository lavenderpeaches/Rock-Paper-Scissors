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

function getHumanChoice(){
    let humChoice=prompt("Make a choice: ");
    humChoice=humChoice.toLowerCase();
    return humChoice;
}

let humanScore=0, computerScore=0;


function playGame(){

    function playRound(humanChoice,computerChoice){
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
        
       return message;
    }


    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(humanSelection, computerSelection));
    }

    final_result=`Computer Score: ${computerScore}\nHuman Score: ${humanScore}`

    console.log(final_result);

   if(humanScore>computerScore){
    console.log("You have won! Congratulations.")
   }
   else if(computerScore>humanScore){
    console.log("Sorry, you have lost. Better luck next time")
   }
   else{
    console.log("It's a draw :D")
   }
}

playGame()

