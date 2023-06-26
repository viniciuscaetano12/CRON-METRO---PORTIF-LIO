const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

let intervalId;
let seconds = 0;
let minutes = 0;
let hours = 0;

function startTimer() {
  intervalId = setInterval(updateTimer, 1000);
  startBtn.disabled = true;
}

function stopTimer() {
  clearInterval(intervalId);
  startBtn.disabled = false;
}

function resetTimer() {
  clearInterval(intervalId);
  startBtn.disabled = false;
  seconds = 0;
  minutes = 0;
  hours = 0;
  updateTimer();
}

function updateTimer() {
  seconds++;

  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }

  if (minutes === 60) {
    minutes = 0;
    hours++;
  }

  hoursElement.textContent = padNumber(hours);
  minutesElement.textContent = padNumber(minutes);
  secondsElement.textContent = padNumber(seconds);
}

function padNumber(num) {
  return num.toString().padStart(2, '0');
}

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);
