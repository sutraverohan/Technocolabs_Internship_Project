
var userInput="Rock";
userInput = userInput.toLowerCase();

// const function(userInput){
//   if(userInput==="rock" || userInput==="paper" || userInput==="scissors"  ){
//     return userInput;
//   }else{
//     console.log(err);
//   }
// }

const getUserChoice = (userInput) => {
  if(userInput==="rock" || userInput==="paper" || userInput==="scissors"  ){
    return userInput;
  }else{
    console.log(err);
  }
}

const getComputerChoice = () => {

  var randomNumber=Math.floor(Math.random() * 3);
  if(randomNumber==0  ){
    return "rock";
  }else if(randomNumber==1){
    return "paper";
  }else{
    return "scissors";
  }
}

const userChoice= getUserChoice(userInput);
const computerChoice=getComputerChoice();

const determineWinner = () => {


  if(userChoice===computerChoice  ){
    return "tie";
  }else if(userChoice==="paper"){
    if(computerChoice==="scissors"){
      return "computer";
    }else{
      return "user";
    }
  }else if(userChoice==="scissors") {
    if(computerChoice==="paper"){
      return "user";
    }else{
      return "computer";
    }
  }else{
    if(computerChoice==="paper"){
      return "computer";
    }else{
      return "user";
    }
  }
}

const story = document.getElementById('nice');
// Populating the story element with the value of the story variable
story.innerHTML = "Winner: "+determineWinner()+"";

console.log(determineWinner());
