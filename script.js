let humanScore = 0;
let computerScore = 0;
let drawScore = 0;
const pScore = document.querySelector(".player-score");
const cScore = document.querySelector(".computer-score");
const pVisual = document.querySelector(".player");
const cVisual = document.querySelector(".computer");


function getComputerChoice() {
    const roll = Math.floor(Math.random() * (3) + 1);
    
    switch (roll){
        case 1:
            cVisual.textContent = "R"
            return 'rock';
        case 2:
            cVisual.textContent = "P"
            return 'paper';
        case 3:
            cVisual.textContent = "S"
            return 'scissor';
    }
}

function playRound(hand){
    let comp = getComputerChoice();
    let player = hand.toLowerCase();
    

    if(player == 'rock'){
        pVisual.textContent = "R"
        if(comp == 'paper'){
            computerScore++;
            pVisual.style.background = "salmon";
            cVisual.style.background = "lightgreen";

        } else if(comp =='scissor'){
            humanScore++;
            pVisual.style.background = "lightgreen";
            cVisual.style.background = "salmon";
        } else {
            drawScore++
            pVisual.style.background = "lightslategray";
            cVisual.style.background = "lightslategray";
            console.log('draw');
        }
    } else if (player == 'paper') {
        pVisual.textContent = "P"
        if(comp == 'paper'){
            drawScore++
            pVisual.style.background = "lightslategray";
            cVisual.style.background = "lightslategray";
            console.log('draw');
        } else if(comp =='scissor'){
            computerScore++;
            pVisual.style.background = "salmon";
            cVisual.style.background = "lightgreen";
        } else {
            humanScore++;
            pVisual.style.background = "lightgreen";
            cVisual.style.background = "salmon";
        }
    } else {
        pVisual.textContent = "S"
        if(comp == 'paper'){
            humanScore++;
            pVisual.style.background = "lightgreen";
            cVisual.style.background = "salmon";
        } else if(comp =='scissor'){
            drawScore++
            pVisual.style.background = "lightslategray";
            cVisual.style.background = "lightslategray";
            console.log('draw');
        } else {
            computerScore++;
            pVisual.style.background = "salmon";
            cVisual.style.background = "lightgreen";
        }
    }
    pScore.textContent = humanScore;
    cScore.textContent = computerScore;
    console.log(computerScore, humanScore)
}

function playGame(hand){
    console.clear();

    playRound(hand)

    if((humanScore + computerScore + drawScore) == 5){
        if(humanScore > computerScore){
            alert("You won!")
        } else if(computerScore > humanScore) {
            alert("You lost!")
        } else {
            alert("Draw!")
        }
        drawScore = 0;

        pScore.textContent = 0;
        humanScore = 0;
        pVisual.style.background = "none";
        pVisual.textContent = "X";
            
        cScore.textContent = 0;
        computerScore = 0;
        cVisual.style.background = "none";
        cVisual.textContent = "X";
    }
}

const buttons = document.querySelectorAll("button")

buttons.forEach((el) =>{
    el.addEventListener("click", () => {
        playGame(el.textContent);
    })
})

