let inputTemp = 75;
let tempFahr = inputTemp;
if(tempFahr <54){
tempFahr='a coat';
} else if(53 < tempFahr && tempFahr < 71){
tempFahr='a jacket';
}else{
tempFahr='no jacket';
}

let inputTemp = 70;
var tempFahr = inputTemp;
if(tempFahr <54){
  tempFahr = 'a coat';
  } else if(53 < tempFahr && tempFahr < 71){
    tempFahr='a jacket';
}else{
  tempFahr='no jacket';
}
console.log(`Since it is ${inputTemp} degrees and you are going to a ${inputEvent}, you should wear ${eventType} and ${tempFahr}.`);
