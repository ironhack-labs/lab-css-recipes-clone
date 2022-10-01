let rock = 'rock';
let paper = 'paper'; 
scissors = 'scissors'; 

let firstPlayerChoice; 
let secondPlayerChoice; 

// On these scenarios first player will win 
let firstPossibility;
let secondPossibility;
let thirdPossibility;
// On these scenarios second player will winn 
let fourthPossibility;
let fifthPossibility;
let sxithPossibility;
// On these scenarios there will be a tie 
let seventhPossibility;


firstPlayerChoice = paper
secondPlayerChoice = rock
//Results 
// First player scenarios 
firstPossibility = firstPlayerChoice === rock && secondPlayerChoice === scissors;
secondPossibility = firstPlayerChoice === scissors && secondPlayerChoice === paper;
thirdPossibility = firstPlayerChoice === paper && secondPlayerChoice === rock;
// Second player scenarios 
fourthPossibility = firstPlayerChoice === scissors && secondPlayerChoice === rock;
fifthPossibility = firstPlayerChoice === paper && secondPlayerChoice === scissors;
sixthPossibility = firstPlayerChoice === rock && secondPlayerChoice === paper;
// Third scenarios tie
seventhPossibility = firstPlayerChoice === secondPlayerChoice; 

if (firstPossibility || secondPossibility || thirdPossibility) {
    console.log('First player wins');
} else if (fourthPossibility || firstPossibility || sixthPossibility) {
    console.log('Second player wins');    
} else  if (seventhPossibility) {
    console.log(`It´s a Tie`);   
} else{
    console.log(`Error`);
}
