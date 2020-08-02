
const kelvin=293;

  //as kelvin is constant so const is used

const celsius=kelvin-273; //celsius is a const and its 273 less than kelvin

var fahrenheit=celsius*(9/5)+32; // this is formula to convert celcius to farhrenheit

fahrenheit=Math.floor(fahrenheit); // floor of that value as fahrenheit can be fractional.

var newton = celsius * (33/100);

newton=Math.floor(newton);

const final=document.getElementById('numb');
final.innerHTML="The temperature is "+fahrenheit+" degrees Fahrenheit.";
const final2=document.getElementById('numb2');
final2.innerHTML="The temperature is "+newton+" degrees Newton.";
console.log("The temperature is "+fahrenheit+" degrees Fahrenheit.");
console.log("The temperature is "+newton+" degrees Newton.");
