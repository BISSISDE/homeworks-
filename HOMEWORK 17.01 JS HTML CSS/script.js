let timer;
let isRunning = false;
let time = 0;

const timeDisplay = document.getElementById("timer");
const resetButton = document.getElementById("reset");
const startButton = document.getElementById("start");

startButton.addEventListener("click", () => {
  if (!isRunning) {
    startButton.textContent = "Rest";
    startTimer();
  } else {
    stopTimer();
    startButton.textContent = "Continue";
  }
});

resetButton.addEventListener("click", resetTimer);

function startTimer() {
  isRunning = true;
  timer = setInterval(() => {
    time++;
    timeDisplay.textContent = time;
  }, 1000);
}

function stopTimer() {
  isRunning = false;
  clearInterval(timer);
}

function resetTimer() {
  stopTimer();
  time = 0;
  displayTime();
  startButton.textContent = "Strat";
}

function displayTime() {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  timeDisplay.textContent = `${padZero(minutes)}:${padZero(seconds)}`;
}
function padZero(time) {
  return time < 10 ? `0${time}` : time;
}
