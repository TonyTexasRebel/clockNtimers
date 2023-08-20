
//navigation element variables

let homeButton = document.querySelector('.home-button');
let stopwatchButton = document.querySelector('.stopwatch-button');

//event listeners

homeButton.addEventListener('click', switchToHome);
stopwatchButton.addEventListener('click', switchToStopwatch);

//functions

function switchToHome() {
  location.href = '/JS - Clock Timer/index.html';
}

function switchToStopwatch() {
  location.href = '/JS - Clock Timer/stopwatch.html';
}