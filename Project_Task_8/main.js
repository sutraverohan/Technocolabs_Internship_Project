var userName="Rohan";
if(userName===""){
  console.log("Hello!");
}else{
  console.log("Hello, "+userName+"");
}


const story = document.getElementById('nice');
// Populating the story element with the value of the story variable
story.innerHTML = "Hello, "+userName+"";

var userQuestion="How is this website ?"
console.log(userQuestion);
const storyEl = document.getElementById('nicer');
// Populating the story element with the value of the story variable
storyEl.innerHTML = userQuestion;


var randomNumber=Math.floor(Math.random() * 8);

var eightBall="";
switch (randomNumber) {
  case 0:
    eightBall="It is certain";
    break;
  case 1:
    eightBall="It is decidedly so";
    break;
  case 2:
     eightBall="Reply hazy try again";
    break;
  case 3:
    eightBall="Cannot predict now";
    break;
  case 4:
    eightBall="Do not count on it";
    break;
  case 5:
    eightBall="My sources say no";
    break;
  case 6:
    eightBall="Outlook not so good";
    break;
  case 7:
    eightBall="Signs point to yes";

}
const stor = document.getElementById('nic');
// Populating the story element with the value of the story variable
stor.innerHTML = "Answer: "+eightBall+"";

console.log(eightBall);
