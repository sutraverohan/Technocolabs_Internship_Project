const myAge= 19; //age is const variable
var earlyYears=2; //  variable this value may change

earlyYears=2*10.5;//as early years are 10.5 times of first two earlyYears
var laterYears=myAge-2;// later earlyYears

laterYears=laterYears*4;

var myAgeInDogYears=earlyYears+ laterYears; // total age in dog earlyYears

var str="Rohan"; //initialising my name
var myName=str.toLowerCase(); //converting to lower case

const stri=document.getElementById('stu');

stri.innerHTML="My name is "+myName+". I am "+myAge+" years old in human years which is "+myAgeInDogYears+" years old in dog years.";

console.log("My name is "+myName+". I am "+myAge+" years old in human years which is "+myAgeInDogYears+" years old in dog years.");
