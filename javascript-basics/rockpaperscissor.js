
function getComputerChoice() {
    let randIndex = Math.floor(Math.random() * 3);
    let choices = ["rock", "paper", "scissors"];
    return choices[randIndex];
}

function playRound(userChoice) {

    userChoice = userChoice.toLowerCase();
    computerChoice = getComputerChoice();

    const div = document.createElement('div');
    const result = document.createElement('p');
    const playerCounter = document.querySelector('#playerWins');
    const computerCounter = document.querySelector('#computerWins');

    let playerCounterText = playerCounter.textContent;
    let computerCounterText = computerCounter.textContent;
    let counterNum = parseInt(playerCounterText.charAt(playerCounterText.length-1));
    let computerNum = parseInt(computerCounterText.charAt(computerCounterText.length-1));

    let winnerNum = 0;

    if (userChoice === computerChoice) {
        result.textContent = "Tie! ";
        winnerNum = -1;
    }
    
    else if (computerChoice === "rock") {
        if (userChoice === "paper") {
            result.textContent = "You win! ";
            winnerNum = 1;
        }
        else result.textContent = "You lose! ";
    }
    else if (computerChoice === "paper") {
        if (userChoice == "scissors") {
            result.textContent = "You win! ";
            winnerNum = 1;
        }
        else result.textContent = "You lose! ";
    }
    else if (computerChoice === "scissors") {
        if (userChoice === "rock") {
            result.textContent = "You win! ";
            winnerNum = 1;
        }
        else result.textContent = "You lose! ";
    }
   
    if (winnerNum === 1) {
        counterNum++;
    }
    else if (winnerNum === 0) {
        computerNum++;
    }

    playerCounter.textContent = "Player Wins: " + counterNum;
    computerCounter.textContent = "Computer Wins: " + computerNum;
    result.textContent += "You chose " + userChoice + ", and computer chose " + computerChoice + "!";

    div.appendChild(result);
    document.body.append(div);

    if (counterNum === 5) {
        const winnerText = document.createElement('h1');
        winnerText.textContent = "You WIN!!";
        document.body.appendChild(winnerText);
        counterNum = 0;
        comptuerNum = 0;
    }
    if (computerNum === 5) {
        const loserText = document.createElement('h1');
        loserText.textContent = "You Lose!!";
        document.body.appendChild(loserText);
        counterNum = 0;
        computerNum = 0;
    }
    
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.textContent);
    });
});
