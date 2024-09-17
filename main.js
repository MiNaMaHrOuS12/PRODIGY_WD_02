let startTime = 0;
let updatedTime = 0;
let difference = 0;
let timerInterval = null;
let running = false;

const timerDisplay = document.getElementById('timer');
const lapsContainer = document.getElementById('laps');

function startTimer() {
    if (!running) {
        startTime = new Date().getTime() - difference;
        timerInterval = setInterval(updateTimer, 1000);
        running = true;
    }
}

function updateTimer() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;

    let seconds = Math.floor((difference / 1000) % 60);
    let minutes = Math.floor((difference / (1000 * 60)) % 60);
    let hours = Math.floor((difference / (1000 * 60 * 60)) % 24);

    seconds = (seconds < 10) ? "0" + seconds : seconds;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    hours = (hours < 10) ? "0" + hours : hours;

    timerDisplay.innerHTML = `${hours}:${minutes}:${seconds}`;
}

function pauseTimer() {
    if (running) {
        clearInterval(timerInterval);
        running = false;
    }
}

function resetTimer() {
    clearInterval(timerInterval);
    running = false;
    difference = 0;
    timerDisplay.innerHTML = "00:00:00";
    lapsContainer.innerHTML = "";
}

function lapTime() {
    if (running) {
        let lapElement = document.createElement('div');
        lapElement.classList.add('lap');
        lapElement.innerText = timerDisplay.innerHTML;
        lapsContainer.appendChild(lapElement);
    }
}

document.getElementById('startBtn').addEventListener('click', startTimer);
document.getElementById('pauseBtn').addEventListener('click', pauseTimer);
document.getElementById('resetBtn').addEventListener('click', resetTimer);
document.getElementById('lapBtn').addEventListener('click', lapTime);
