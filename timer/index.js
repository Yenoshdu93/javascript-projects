const startAndstop = document.querySelector(".startstopbtn");

const resetBtn = document.querySelector(".resetBtn");

let seconds = 0;
let minutes = 0;
let hours = 0;

let leadingseconds = 0;
let leadingminutes = 0;
let leadinhours = 0;

//timer variables

let timeInterval = null;
let timeStatus = "stopped";

function startTimer() {
  seconds++;
  if (seconds / 60 === 1) {
    seconds = 0;
    minutes++;
    if (minutes / 60 === 1) {
      minutes = 0;
      hours++;
    }
  }
  if (seconds < 10) {
    leadingseconds = "0" + seconds.toString();
  } else {
    leadingseconds = seconds;
  }
  if (minutes < 10) {
    leadingminutes = "0" + minutes.toString();
  } else {
    leadingminutes = minutes;
  }
  if (hours < 10) {
    leadinhours = "0" + hours.toString();
  } else {
    leadinhours = hours;
  }

  let display = (document.querySelector(".timer").innerHTML =
    leadinhours + ":" + leadingminutes + ":" + leadingseconds);
}

// window.setInterval(startTimer, 1000);

startAndstop.addEventListener("click", function () {
  if (timeStatus === "stopped") {
    timeInterval = window.setInterval(startTimer, 1000);
    startAndstop.style.backgroundColor = "red";
    timeStatus = "started";
  } else {
    window.clearInterval(timeInterval);
    this.style.backgroundColor = "green";
    timeStatus = "stopped";
  }
});

resetBtn.addEventListener("click", function () {
  window.clearInterval(timeInterval);
  seconds = 0;
  minutes = 0;
  hours = 0;
  document.querySelector(".timer").innerHTML = "00:00:00";
  timeStatus = "stopped";
});
