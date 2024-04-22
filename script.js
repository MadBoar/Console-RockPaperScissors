let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
    const roll = Math.floor(Math.random() * (3) + 1);
    
    switch (roll){
        case 1:
            return 'rock';
        case 2:
            return 'paper';
        case 3:
            return 'scissor';
    }
}

function getHumanChoice(){
    let entry = prompt('Enter "Rock", "Paper", or "Scissor"').toLowerCase();

    if (entry == 'rock' || entry == 'paper' || entry == 'scissor'){
        return entry;
    } else {
        return "Invalid";
    }
}

function playRound(){
    let comp = getComputerChoice();
    let player = getHumanChoice();


    if(player == 'rock'){
        if(comp == 'paper'){
            computerScore++;
        } else if(comp =='scissor'){
            humanScore++;
        } else {
            console.log('draw');
        }
    } else if (player == 'paper') {
        if(comp == 'paper'){
            console.log('draw');
        } else if(comp =='scissor'){
            computerScore++;
        } else {
            humanScore++;
        }
    } else {
        if(comp == 'paper'){
            humanScore++;
        } else if(comp =='scissor'){
            console.log('draw');
        } else {
            computerScore++;
        }
    }

    console.log(computerScore, humanScore)
}

function playGame(){
    for(let i = 0; i < 5; i++){
        playRound();
    }
    if(computerScore > humanScore){
        console.log('Computer won');
    } else if(humanScore > computerScore){
        console.log('You won!');
    } else {
        console.log('Draw');
    }
}

