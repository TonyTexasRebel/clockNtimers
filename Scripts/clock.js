

//local clock variables

let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');

//local date variables

let year = document.getElementById('year');
let month = document.getElementById('month');
let day = document.getElementById('day');

//time until midnight variables

let hrs = document.getElementById('hrs');
let mins = document.getElementById('mins');
let secs = document.getElementById('secs');

//clock interval

setInterval(setTime, 1000);


//functions

function setTime() {
  let localTime = new Date();
  setDate();
  setTimeUntilMidnight();
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

function setDate() {
  let localTime = new Date();
  year.innerHTML = localTime.getFullYear();
  
  if (localTime.getMonth() === 0) {
    month.innerHTML = 'January';
  } else if (localTime.getMonth() === 1) {
    month.innerHTML = 'February';
  } else if (localTime.getMonth() === 2) {
    month.innerHTML = 'March';
  } else if (localTime.getMonth() === 3) {
    month.innerHTML = 'April';
  } else if (localTime.getMonth() === 4) {
    month.innerHTML = 'May';
  } else if (localTime.getMonth() === 5) {
    month.innerHTML = 'June';
  } else if (localTime.getMonth() === 6) {
    month.innerHTML = 'July';
  } else if (localTime.getMonth() === 7) {
    month.innerHTML = 'August';
  } else if (localTime.getMonth() === 8) {
    month.innerHTML = 'September';
  } else if (localTime.getMonth() === 9) {
    month.innerHTML = 'October';
  } else if (localTime.getMonth() === 10) {
    month.innerHTML = 'November';
  } else if (localTime.getMonth() === 11) {
    month.innerHTML = 'December';
  }

  if (localTime.getDay() < 10) {
    day.innerHTML = `0${localTime.getDay()}`;
  } else {
    day.innerHTML = `${localTime.getDay()}`;
    console.log(day.innerHTML);
  }
}

function setTimeUntilMidnight() {
  let localTime = new Date();
  hrs.innerHTML = 24 - localTime.getHours();
  mins.innerHTML = 60 - localTime.getMinutes();
  secs.innerHTML = 60 - localTime.getSeconds();

}
