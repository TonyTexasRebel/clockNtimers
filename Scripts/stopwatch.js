
//navigation element variables

let homeButton = document.querySelector('.home-button');

//event listeners

homeButton.addEventListener('click', switchPage);

//functions

function switchPage() {
  location.href = '/JS - Clock Timer/index.html';
}