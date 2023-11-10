// Function that console logs Rock, Paper or Scissors randomly

let choices = ['Rock', 'Paper', 'Scissors']

function Randomnumber(min,max){
    let Number = Math.floor(Math.random() * (max - min + 1) + min)
    return Number
}

 function computerChoice(){
     choice = choices[Randomnumber(0,2)]
     return choice
}

//computerChoice())

// Function that takes the two answers and calculates who wins


let computerSelection = computerChoice();
function playRound(playerSelection, computerSelection) {
    if(playerSelection == computerSelection){
        return 'Tie, try again'
    }
    else if (playerSelection == 'Rock' && computerSelection == 'Paper'){
        return 'Paper Beats Rock Computer Wins!'  
    }
    else if (playerSelection =='Rock' && computerSelection == 'Scissors'){
        return 'Rock Beats Scissors You Win!'
    }
    else if(playerSelection == 'Scissors' && computerSelection == 'Paper'){
        return 'Scissors Beats Paper You Win!'
    }
    else if(playerSelection == 'Scissors' && computerSelection == 'Rock'){
        return 'Rock Beats Scissor Computer Wins!'
    }
    else if(playerSelection == 'Paper' && computerSelection == 'Scissors'){
        return 'Scissors Beats Paper Computer Wins'
    }
    else {
        return 'Paper Beats Rock You Win!'
    }
   
  }




function game(){
    let computerScore = 0
    let playerScore = 0
    for (let i = 0; i < 5; i++){
        let playerSelection = prompt('Rock Paper or Scissors?');
        let computerSelection = computerChoice();
        let result = playRound(playerSelection,computerSelection);
        console.log(playRound(playerSelection, computerSelection));
        if(result.includes('You')){
            playerScore++
            console.log('Player score is ' + playerScore)
        }
        else if(result.includes('Computer')){
            computerScore++
            console.log('Computer score is ' + computerScore)
        }
    } 
    if(playerScore > computerScore){
        console.log('You WIN!')
    }
    else if (playerScore < computerScore){
        console.log('You LOSE!')
    }
    else{
        console.log('A TIE!')
    }
}

game()

// function that creates rounds
// function that keeps score