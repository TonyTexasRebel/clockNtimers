

//local clock variables

let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');

//clock interval

setInterval(setTime, 1000);


//functions

function setTime() {
  let localTime = new Date();
  if (localTime.getHours() < 10) {
    hours.innerHTML = `&nbsp;0${localTime.getHours()}&nbsp;`;
  } else {
    hours.innerHTML = `&nbsp;${localTime.getHours()}&nbsp;`;
  }

  if (localTime.getMinutes() < 10) {
    minutes.innerHTML = `&nbsp;0${localTime.getMinutes()}&nbsp;`;
  } else {
    minutes.innerHTML = `&nbsp;${localTime.getMinutes()}&nbsp;`;
  }

  if (localTime.getSeconds() < 10) {
    seconds.innerHTML = `&nbsp;0${localTime.getSeconds()}&nbsp;`;
  } else {
    seconds.innerHTML = `&nbsp;${localTime.getSeconds()}&nbsp;`;
  }
}