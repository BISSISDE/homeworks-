const HeaderStartButton = document.getElementById("buttonStart");
const QuestionPart = document.getElementById("QuestionPart");
const StartPart = document.getElementById("StartPart");

let timer;
let isRunning = false;
let time = 0;

const timeDisplay = document.getElementById("timer");
const resetButton = document.getElementById("reset");
const startButton = document.getElementById("start");
const TimerSpan = document.getElementById("TimerSpan");

let questions = [];
let currentQuestionIndex = 0;
let score = 0;

const apiUrl =
  "https://67873274c4a42c916105d2fe.mockapi.io/api/onlineduken/questions";

async function ApiQuestion() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    questions = data.map((item) => ({
      question: item.question,
      answers: item.options,
      correctIndex: item.answer,
      image: item.image,
    }));
  } catch (error) {
    console.error("Error:", error);
  }
}

function displayQuestion(index) {
  const question = questions[index];
  const colorTrueFalse = document.getElementById("colorTrueFalse");
  const answerButtons = document.querySelectorAll(".QuestionOneButton");
  const questionImage = document.getElementById("questionImage");
  const textTrueFalse = document.getElementById("TextTrueFalse");
  const nextButton = document.getElementById("nextButton");

  colorTrueFalse.textContent = question.question;

  answerButtons.forEach((button, i) => {
    button.textContent = question.answers[i];
    button.disabled = false;

    button.onclick = function () {
      answerButtons.forEach((btn) => (btn.disabled = true));

      if (i === question.correctIndex) {
        textTrueFalse.textContent = "Correct!";
        textTrueFalse.style.color = "green";
        score++;
      } else {
        textTrueFalse.textContent = "Incorrect!";
        textTrueFalse.style.color = "red";
      }

      nextButton.style.display = "none";

      setTimeout(function () {
        nextQuestion();
      }, 1000);
    };
  });

  questionImage.src = question.image;
  questionImage.style.display = "block";

  if (index === questions.length - 1) {
    nextButton.textContent = "Finish Quiz";
  } else {
    nextButton.textContent = "Next Question";
    nextButton.style.display = "block";
  }
}

function nextQuestion() {
  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    displayQuestion(currentQuestionIndex);
    document.getElementById("TextTrueFalse").textContent = "";
    document.getElementById("nextButton").style.display = "block";
  } else {
    document.getElementById("TextTrueFalse").textContent = "Quiz Finished!";
    document.getElementById("nextButton").style.display = "none";
    stopTimer();
    displayResult();
  }
}

function displayResult() {
  const Result = document.getElementById("Result");
  const finalScore = document.getElementById("finalScore");
  const timeTaken = document.getElementById("timeTaken");

  finalScore.textContent = `Your score: ${score} / ${questions.length}`;
  timeTaken.textContent = `Time taken: ${padZero(
    Math.floor(time / 60)
  )}:${padZero(time % 60)} minutes`;

  Result.style.display = "block";
  QuestionPart.style.display = "none";
  TimerSpan.style.display = "none";
}

function startTimer() {
  isRunning = true;
  timer = setInterval(() => {
    time++;
    displayTime();
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
  startButton.textContent = "Start";
}

function displayTime() {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  timeDisplay.textContent = `${padZero(minutes)}:${padZero(seconds)}`;
}

function padZero(time) {
  return time < 10 ? `0${time}` : time;
}

HeaderStartButton.addEventListener("click", async () => {
  StartPart.style.display = "none";
  QuestionPart.style.display = "block";
  TimerSpan.style.display = "block";
  currentQuestionIndex = 0;

  if (!isRunning) {
    startButton.textContent = "Rest";
    startTimer();
  }

  await ApiQuestion();
  displayQuestion(currentQuestionIndex);
});

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

document.getElementById("nextButton").addEventListener("click", nextQuestion);

document.getElementById("playAgainButton").addEventListener("click", () => {
  document.getElementById("Result").style.display = "none";
  QuestionPart.style.display = "block";
  TimerSpan.style.display = "block";
  TextTrueFalse.textContent = "";
  resetTimer();
  score = 0;
  currentQuestionIndex = 0;
  ApiQuestion();
  displayQuestion(currentQuestionIndex);
});
