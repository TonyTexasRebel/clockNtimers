

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

//chinese zodiac variables

let currentYear = document.getElementById('currentYear');
let zodiacName = document.getElementById('zodiac-year-name');

//clock interval

setInterval(setTime, 1000);


//functions

function setTime() {
  let localTime = new Date();

  setDate(localTime);
  setTimeUntilMidnight(localTime);
  setChineseZodiac(localTime);

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

function setDate(localTime) {
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

  if (localTime.getDate() < 10) {
    day.innerHTML = `0${localTime.getDate()}`;
  } else {
    day.innerHTML = `${localTime.getDate()}`;
  }
}

function setTimeUntilMidnight(localTime) {
  hrs.innerHTML = 24 - localTime.getHours();
  mins.innerHTML = 60 - localTime.getMinutes();
  secs.innerHTML = 60 - localTime.getSeconds();
}

function setChineseZodiac(localTime) {

  currentYear.innerHTML = localTime.getFullYear();
  let year = localTime.getFullYear();
  let remainder = (year - 4) % 12;

  switch (remainder) {
    case 0:
      zodiacName.innerHTML = `Year of the Rat`;
      break;
    case 1:
      zodiacName.innerHTML = `Year of the Ox`;
      break;
    case 2:
      zodiacName.innerHTML = `Year of the Tiger`;
      break;
    case 3:
      zodiacName.innerHTML = `Year of the Rabbit`;
      break;
    case 4:
      zodiacName.innerHTML = `Year of the Dragon`;
      break;
    case 5:
      zodiacName.innerHTML = `Year of the Snake`;
      break;
    case 6:
      zodiacName.innerHTML = `Year of the Horse`;
      break;
    case 7:
      zodiacName.innerHTML = `Year of the Goat`;
      break;
    case 8:
      zodiacName.innerHTML = `Year of the Monkey`;
      break;
    case 9:
      zodiacName.innerHTML = `Year of the Rooster`;
      break;
    case 10:
      zodiacName.innerHTML = `Year of the Dog`;
      break;
    case 11:
      zodiacName.innerHTML = `Year of the Pig`;
      break;
  }
}

