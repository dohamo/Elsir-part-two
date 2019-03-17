let inputEvent = prompt('What type of event are you attending?', 'casual/semi-formal/formal');
var eventType = inputEvent;
switch (eventType) {
  case 'casual':
    eventType = 'something comfy';
    break;
  case 'semi-formal':
    eventType = 'a polo';
    break;
  case 'formal':
    eventType = 'a suit';
    break;
  default:
    eventType = 'anything you like';
    break;
}
let inputTemp = prompt('What is the temperature outside?', 'degrees Fahrenheit');
var tempFahr = inputTemp;
if (tempFahr < 54) {
  tempFahr = 'a coat';
} else if (53 < tempFahr && tempFahr < 71) {
  tempFahr = 'a jacket';
} else {
  tempFahr = 'no jacket';
}
console.log(`Since it is ${inputTemp} degrees Fahrenheit and you are going to a ${inputEvent} event, you should wear ${eventType} and ${tempFahr}.`);

