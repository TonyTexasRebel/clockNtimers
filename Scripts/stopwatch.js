
//navigation element variables

let homeButton = document.querySelector('.home-button');
let timerButton = document.querySelector('.glasstime-button');

//stopwatch element variables

let hoursElement = document.querySelector('.hours');
let minutesElement = document.querySelector('.minutes');
let secondsElement = document.querySelector('.seconds');
let decisecondElement = document.querySelector('.deciseconds');

let startButtonElement = document.querySelector('.start-button');
let stopButtonElement = document.querySelector('.stop-button');

let startButtonPressed = false;
let stopButtonPressed = false;

let stopwatchInterval;

let seconds = 0;
let minutes = 0;
let hours = 0;

//event listeners

homeButton.addEventListener('click', switchToHome);
timerButton.addEventListener('click', switchToTimer);
startButtonElement.addEventListener('click', startStopwatch);
stopButtonElement.addEventListener('click', stopStopwatch);


//stopwatch interval


//functions

function switchToHome() {
    location.href = '/JS - Clock Timer/index.html';
}

function switchToTimer() {
  location.href = '/JS - Clock Timer/timer.html';
}



function count() {

  seconds = seconds + 1;

  displayStopwatch();

}


function startStopwatch() {
  hoursElement.style.color = '#ffffff';
  minutesElement.style.color = '#ffffff';
  secondsElement.style.color = '#ffffff';
  hoursElement.style.textShadow = '';
  minutesElement.style.textShadow = '';
  secondsElement.style.textShadow = '';

  
  if (startButtonPressed === false) {
    seconds = seconds + 1;
    displayStopwatch();
    stopwatchInterval = setInterval(count, 1000);
    startButtonPressed = true;
  }
}


function stopStopwatch() {

  hoursElement.style.color = '#d6d6d6';
  minutesElement.style.color = '#d6d6d6';
  secondsElement.style.color = '#d6d6d6';
  hoursElement.style.textShadow = '0px 0px 8px black';
  minutesElement.style.textShadow = '0px 0px 8px black';
  secondsElement.style.textShadow = '0px 0px 8px black';

  clearInterval(stopwatchInterval);
  console.log(hoursElement.style);
  seconds = 0;
  minutes = 0;
  hours = 0;
  startButtonPressed = false;
}


function displayStopwatch() {
  
  if (hours < 10) {
    hoursElement.innerHTML = `0${hours}`;
  } else {
    hoursElement.innerHTML = `${hours}`;
  }

  if (minutes < 10) {
    minutesElement.innerHTML = `0${minutes}`;
  } else {
    minutesElement.innerHTML = `${minutes}`;
  }

  if (seconds < 10) {
    secondsElement.innerHTML = `0${seconds}`;
  } else {
    secondsElement.innerHTML = `${seconds}`;
  }


}