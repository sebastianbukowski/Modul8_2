'use strict';

// variables for button id=farenheitCounter-button

var outcomeF = document.getElementById('farenheitCounter-outcome');
var descF = document.getElementById('farenheitCounter-description');
var buttonF = document.getElementById('farenheitCounter-button');

// variables for button id=celsiusCounter-button

var outcomeC = document.getElementById('celsiusCounter-outcome');
var descC = document.getElementById('celsiusCounter-description');
var buttonC = document.getElementById('celsiusCounter-button');

// add event liesters for buttons:

buttonF.addEventListener('click', function(){

  // clear output divs

outcomeF.innerHTML = "";
descF.innerHTML = "";
var celsiusInput = window.prompt('Enter the temperature in degrees Celsius?');

  // use parseInt() to convert string received from window.prompt to number

  celsiusInput = parseInt(celsiusInput);
  console.log(isNaN(celsiusInput));
  console.log(celsiusInput);

  if(!isNaN(celsiusInput)) {
    var farenheitsAmount = celsiusInput * 1.8 + 32;
      outcomeF.innerHTML = celsiusInput+ '&deg;C'+' = '+Math.round(farenheitsAmount)+ '&deg;F!';
    if (celsiusInput <= 0) {
      descF.innerHTML = ' At this temperature the water is in the form of ice.';
    }
    if (celsiusInput >0 && celsiusInput <99) {
      descF.innerHTML =  'At this temperature the water is in the form of liquid.'
    }
    if (celsiusInput >= 100) {
      descF.innerHTML = ' At this temperature the water is in the form of steam .'
    }
  } else {
     descF.innerHTML = 'Something went wrong. Are you sure you wrote a number?' +'<br>';
     outcomeF.innerHTML = '';
   }
});

buttonC.addEventListener('click', function(){

  // clear output divs

outcomeC.innerHTML = "";
descC.innerHTML = "";
var farenheitsInput = window.prompt('Enter the temperature in Farenheits degrees?');

  // use parseInt() to convert string received from window.prompt to number

  farenheitsInput = parseInt(farenheitsInput);
  console.log(isNaN(farenheitsInput));

  if( !isNaN(farenheitsInput)) {
    var celsiusAmount = (farenheitsInput - 32) * (5/9);
      outcomeC.innerHTML = farenheitsInput + '&deg;F'+' = '+Math.round(celsiusAmount)+ '&deg;C!';
    if (celsiusAmount <= 0) {
      descC.innerHTML = ' At this temperature the water is in the form of ice.';
    }
    if (celsiusAmount >0 && celsiusAmount <99) {
      descC.innerHTML =  'At this temperature the water is in the form of liquid.'
    }
    if (celsiusAmount >= 100) {
      descC.innerHTML = ' At this temperature the water is in the form of steam .'
    }
  } else {
      descC.innerHTML = 'Something went wrong. Are you sure you wrote a number?' +'<br>';
      outcomeC.innerHTML = '';
    }
});
