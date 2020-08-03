var register= false;

var runnerAge=19;

let raceNumber = Math.floor(Math.random() * 1000);

if(register==true && runnerAge>18){
  raceNumber+=1000;
}

const story = document.getElementById('inne');

if(register==true && runnerAge>18 ){
  story.innerHTML= "You will race at 9:30am with "+raceNumber+" number";
  console.log("You will race at 9:30am with "+raceNumber+" number");
}else if(register==false && runnerAge>18){
  story.innerHTML="You will race at 11:00am with "+raceNumber+" number";
  console.log("You will race at 11:00am with "+raceNumber+" number");
}else if(runnerAge<18){
  story.innerHTML="You will race at 12:30am with "+raceNumber+" number";
  console.log("You will race at 12:30am with "+raceNumber+" number");
}else{
  story.innerHTML="please see the registration desk";
  console.log("please see the registration desk");
}
