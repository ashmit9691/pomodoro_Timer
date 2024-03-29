let timer;
let timeLeft = 1500; // 25 minutes in seconds
let isTimerRunning = false;
let sessionCounter = 0;

function startTimer() {
    let durationInput = document.getElementById('duration').value;
    if (durationInput !== '') {
        timeLeft = parseInt(durationInput) * 60;
    }

    if (!isTimerRunning) {
        isTimerRunning = true;
        timer = setInterval(updateTimer, 1000);
        document.getElementById('startButton').textContent = 'Pause';
    } else {
        isTimerRunning = false;
        clearInterval(timer);
        document.getElementById('startButton').textContent = 'Resume';
    }
}

function updateTimer() {
    const minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    document.getElementById('time').textContent = `${minutes}:${seconds}`;

    const progress = Math.ceil(((1500 - timeLeft) / 1500) * 100); // Calculate progress percentage
    document.getElementById('progressBar').style.width = progress + '%';

    if (timeLeft === 0) {
        clearInterval(timer);
        document.getElementById('startButton').textContent = 'Start';
        alert('Time is up!');
        resetTimer();
    } else {
        timeLeft--;
    }
}

function resetTimer() {
    clearInterval(timer);
    isTimerRunning = false;
    document.getElementById('duration').value = '';
    timeLeft = 1500;
    document.getElementById('time').textContent = '25:00';
    document.getElementById('startButton').textContent = 'Start';
    document.getElementById('progressBar').style.width = '0%';
    sessionCounter++;
    document.getElementById('sessionCounter').textContent = 'Session: ' + sessionCounter;
}
