const playBtn = document.getElementById("play-btn");
const stopBtn = document.getElementById("stop-btn");
const resetBtn = document.getElementById("reset-btn");
const displayCents = document.getElementById("cents");
const displaySeconds = document.getElementById("seconds");
const displayMinutes = document.getElementById("minutes");

let cents = 0;
let seconds = 0;
let minutes = 0;

let intervalID;

playBtn.onclick = function () {
  intervalID = setInterval(startTimer, 10);
};

stopBtn.onclick = function () {
  clearInterval(intervalID);
};

resetBtn.onclick = function () {
  cents = 0;
  seconds = 0;
  minutes = 0;
  displayCents.innerHTML = "00";
  displaySeconds.innerHTML = "00";
  displayMinutes.innerHTML = "00";
};

function startTimer() {
  cents++;
  if (cents <= 9) displayCents.innerHTML = "0" + cents;
  else if (cents > 9) displayCents.innerHTML = cents;

  if (cents > 99) {
    seconds++;
    if (seconds <= 9) displaySeconds.innerHTML = "0" + seconds;
    else if (seconds > 9) displaySeconds.innerHTML = cents;
    cents = 0;
    displayCents.innerHTML = "00";
  }

  if (seconds > 59) {
    minutes++;
    if (minutes <= 9) displayMinutes.innerHTML = "0" + minutes;
    else if (minutes > 9) displayMinutes.innerHTML = minutes;
    seconds = 0;
    displaySeconds.innerHTML = "00";
  }
}
