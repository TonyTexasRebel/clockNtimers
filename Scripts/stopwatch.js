
//navigation element variables

let homeButton = document.querySelector('.home-button');

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

homeButton.addEventListener('click', switchPage);
startButtonElement.addEventListener('click', startStopwatch);
stopButtonElement.addEventListener('click', stopStopwatch);


//stopwatch interval


//functions

function switchPage() {
  location.href = '/JS - Clock Timer/index.html';
}


function count() {

  seconds = seconds + 1;

  displayStopwatch();

}


function startStopwatch() {
  if (startButtonPressed === false) {
    stopwatchInterval = setInterval(count, 1000);
    startButtonPressed = true;
  }
}


function stopStopwatch() {

  clearInterval(stopwatchInterval);

  deciseconds = 0;
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