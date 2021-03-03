function computerChoice() {
        let choices = ['rock', 'paper', 'scissors'];
        let result = choices[Math.floor(Math.random() * choices.length)];
        return result
      };
      
function playerChoice() {
        let playerChoice = prompt('Rock, paper or scissors?');
        return playerChoice.toLowerCase();
      }

var userWin;
var computerWin;

function playRound(choice1, choice2) {
        if (choice1 == 'rock' && choice2 == 'paper') {
          userWin = true;
          return ('Paper beats rock! You lose!');
        } else if (choice1 == 'rock' && choice2 == 'scissors') {
          userWin = true;
          return ('Rock smash scissors! You win!');
        } else if (choice1 == 'paper' && choice2 == 'rock') {
          userWin = true;
          return ('Paper covers rock! You win!');
        } else if (choice1 == 'paper' && choice2 == 'scissors') {
          computerWin == true;
          return ('Scissors cuts paper! You lose.'); 
        } else if (choice1 == 'scissors' && choice2 == 'paper') {
          userWin = true;
          return ('Scissors cuts paper! You win!'); 
        } else if (choice1 == 'scissors' && choice2 == 'rock') {
          computerWin == true;
          return ('Rock beats scissors! You lose!');
        } else if (choice1 == choice2 ) {
          return ('Tie! You must select a different weapon!');
        }
        }   

function game() {
        
        var playerScore = 0;
        var computerScore = 0;

        for (var i = 0; i < 5; i++) {
            var playerSelection = prompt('Rock, paper or scissors?');
            var computerSelection = computerChoice();
            playRound(playerSelection, computerSelection);
            console.log("You chose: " + playerSelection);
            console.log("The computer chose: " + computerSelection);
            console.log(playRound(playerSelection, computerSelection));
        
            if (userWin = true) {
            playerScore++;
            console.log("You won the round! Your score is ", playerScore, "and the computer's score is ", computerScore);

        }   else if (computerWin = true) {
            computerScore++;
            console.log("You lost the round! Your score is ", playerScore, "and the computer's score is ", computerScore);
            
        }

    
      }

    }
  

game();

