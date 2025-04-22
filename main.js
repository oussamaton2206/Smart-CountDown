let timer = document.getElementById("timer");
let timeLeft = 0;
let interval;
let running = false;
let settingsBox = document.getElementById("settings");

function applyBtn() {
    let sdInput = document.getElementById("duration").value; 
    sd = Number(sdInput); 
    timeLeft = sd * 60; 
    update(); 
}

function update() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    timer.textContent = `${minutes}:${seconds}`;
}

function start() {
    if (running) return;
        running = true;
        interval = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            update();
        } 
        else {
            clearInterval(interval);
            alert("Time's up! Take a break.");
            timeLeft = 5 * 60; 
            update();
            running = false;
        }
    }, 1000);
}

function reset() {
    clearInterval(interval);
    running = false;
    timeLeft = sd * 60;
    update();
}

function setBtn() {
    settingsBox.style.display = "block";
}

function closeBox() {
    settingsBox.style.display = "none";
}

update();
