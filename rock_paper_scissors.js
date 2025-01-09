// // Create a new function named getComputerChoice.
//         // Write the code so that getComputerChoice will randomly return one of the following string values: “rock”, “paper” or “scissors”.


//         function randomNumber(){
//             return Math.floor(Math.random()*3);
//         };
        
        
//         function getComputerChoice(){
//             const choice = randomNumber();
//             if (choice === 0){
//                 return "rock";
//             } else if (choice === 1){
//                 return "paper";
//             } else {
//                 return "scissors";
//             };
//         };
        
//         // Create a new function named getHumanChoice.
//         // Write the code so that getHumanChoice will return one of the valid choices depending on what the user inputs.
//         function getHumanChoice(){
//             let humanChoice = prompt("please input rock, paper or scissors");
//             let humanChoiceMin = humanChoice.toLowerCase();
//             return humanChoiceMin;
//         };
        
//         // Create a new function named playGame.
//         // Move your playRound function and score variables so that they’re declared inside of the new playGame function
//         // Play 5 rounds by calling playRound 5 times
        
//         function playGame(){
        
//             let humanScore = 0;
//             let computerScore = 0;
        
//             function playRound(humanSelection, computerSelection){
//                 if (humanSelection === computerSelection){
//                     console.log("that's a tie");
//                 } else if (
//                     (humanSelection === "rock" && computerSelection === "scissors") ||
//                     (humanSelection === "paper" && computerSelection === "rock") ||
//                     (humanSelection === "scissors" && computerSelection === "paper")){
//                     console.log(`you choose ${humanSelection} so you win against ${computerSelection}`);
//                     humanScore++;
//                 } else if (
//                     (humanSelection === "rock" && computerSelection === "paper") ||
//                     (humanSelection === "paper" && computerSelection === "scissors") ||
//                     (humanSelection === "scissors" && computerSelection === "rock")){
//                         console.log(`you choose ${humanSelection} so you lose against ${computerSelection}`);
//                         computerScore++;
//                 } else {
//                     console.log("you made a mistake, try again");
//                 };
//                 };
            
//         for (let i = 0; i < 5; i++){
        
//         const humanSelection = getHumanChoice();
//         const computerSelection = getComputerChoice(); 
        
//         playRound(humanSelection, computerSelection);
//         console.log(`your score : ${humanScore} against computer score : ${computerScore}`)
//         };
        
//         function result(){
//             if (humanScore === computerScore){
//                 console.log("it's a tie, please try a new game again")
//             } else if (humanScore > computerScore){
//                 console.log(`you won the game since you had ${humanScore} points against ${computerScore} points for the computer, congrats`)
//             } else {
//                 console.log(`you lose since you had ${humanScore} points against ${computerScore} points for the computer`)
//             };
//         };
        
//         result();
        
//         };
        
//         playGame();
//         function randomNumber(){
//             return Math.floor(Math.random()*3);
//         };



 function randomNumber(){
 return Math.floor(Math.random()*3);
 };
        
        
function getComputerChoice(){
const choice = randomNumber();
 if (choice === 0){
  return "rock";
 } else if (choice === 1){
 return "paper";
 } else {
return "scissors";
};
};


const btnRock = document.querySelector("#btnRock");
btnRock.addEventListener("click", () => {

let humanSelection = "rock";


function playRound(humanSelection, computerSelection){
    if (humanSelection === computerSelection){
                      console.log("that's a tie");
  } else if (
                      (humanSelection === "rock" && computerSelection === "scissors") ||
                      (humanSelection === "paper" && computerSelection === "rock") ||
                      (humanSelection === "scissors" && computerSelection === "paper")){
                      console.log(`you choose ${humanSelection} so you win against ${computerSelection}`);
                      humanScore++;
  } else if (
                      (humanSelection === "rock" && computerSelection === "paper") ||
                      (humanSelection === "paper" && computerSelection === "scissors") ||
                      (humanSelection === "scissors" && computerSelection === "rock")){
                          console.log(`you choose ${humanSelection} so you lose against ${computerSelection}`);
                          computerScore++;
  } else {
                      console.log("you made a mistake, try again");
  };
  };
  
const computerSelection = getComputerChoice()

playRound(humanSelection, computerSelection)

});








const btnPaper = document.querySelector("#btnPaper");
btnPaper.addEventListener("click", () => {
let btnPaperValue = "paper";
return btnPaperValue;
});

const btnScissors = document.querySelector("#btnScissors");
btnScissors.addEventListener("click", () => {
let btnScissorsValue = "scissors";
return btnScissorsValue;
});

