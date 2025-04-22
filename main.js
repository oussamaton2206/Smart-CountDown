let timer = document.getElementById("timer");
let container = document.getElementById("container");
let breakAlert = document.createElement("p");
let duration = Number(document.getElementById("dur").value); 
let timeLeft = 0;
let interval;
let isRunning = false;
let isBreak = false;

breakAlert.id = "ba";

function apply() {
    duration = Number(document.getElementById("dur").value); 
    timeLeft = duration * 60;
    update();
}

function start() {
    if (isRunning) return;
    isRunning = true;
    document.getElementById("sets").style.display = "none";
    interval = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            update();
        } else {
            clearInterval(interval);
            isRunning = false;
            if (!isBreak) {
                isBreak = true;
                if (!document.getElementById("ba")) {
                    container.appendChild(breakAlert);
                }
                timeLeft = Math.floor((duration / 5) * 60);
                breakAlert.textContent = `Take a break of ${timeLeft / 60} minutes ⏰`;
                start();
            } else {
                timeLeft = duration * 60;
                isBreak = false;
                update();
                if (document.getElementById("ba")) {
                    breakAlert.textContent = 'Go back to work 💪✌️' 
                    setTimeout(() => {
                        container.removeChild(breakAlert);
                    },3000)
                }
            }
        }
    }, 1000);
}

function update() {
    let minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
    let seconds = String(timeLeft % 60).padStart(2, "0");
    timer.textContent = `${minutes}:${seconds}`;
}

document.getElementById("sets").style.display = "none";
function set() {
    document.getElementById("sets").style.display = "block";
}

function closeBtn() {
    document.getElementById("sets").style.display = "none";
}



function reset(){
    clearInterval(interval);
    timeLeft = 0;
    isRunning = false
    isBreak = false;
    updateDisplay();
}

/* Page custimization */
let body = document.getElementById("body");

let t1 = document.getElementById("t1");
let t2 = document.getElementById("t2");
let t3 = document.getElementById("t3");
let t4 = document.getElementById("t4");
let t5 = document.getElementById("t5");
let t6 = document.getElementById("t6");
let t7 = document.getElementById("t7");
let t8 = document.getElementById("t8");
let t9 = document.getElementById("t9");
let t10 = document.getElementById("t10");
let t11 = document.getElementById("t11");
let t12 = document.getElementById("t12");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");

function colorChanger(){
    t1.addEventListener('click',() => {
        body.style.background = "#ABBB77";
        body.style.color = "#000";
        btn1.style.background = "transparent";
        btn1.style.color = "000";
        btn2.style.background = "transparent";
        btn2.style.color = "000";
        btn3.style.background = "transparent";
        btn3.style.color = "000";
        breakAlert.style.color = "black";
    })
    t2.addEventListener('click',() => {
        body.style.background = "#fefae0";
        body.style.color = "#000";
        btn1.style.background = "transparent";
        btn1.style.color = "000";
        btn2.style.background = "transparent";
        btn2.style.color = "000";
        btn3.style.background = "transparent";
        btn3.style.color = "000";
        breakAlert.style.color = "black";
    })
    t3.addEventListener('click',() => {
        body.style.background = "#dda15e";
        body.style.color = "#000";
        btn1.style.background = "transparent";
        btn1.style.color = "000";
        btn2.style.background = "transparent";
        btn2.style.color = "000";
        btn3.style.background = "transparent";
        btn3.style.color = "000";
        breakAlert.style.color = "black"
    })
    t4.addEventListener('click',() => {
        body.style.background = "#bc6c25";
        body.style.color = "#222932";
        btn1.style.background = "transparent";
        btn1.style.color = "#222932";
        btn2.style.background = "transparent";
        btn2.style.color = "#222932";
        btn3.style.background = "transparent";
        btn3.style.color = "#222932";
        breakAlert.style.color = "black"

    })
    t5.addEventListener('click',() => {
        body.style.background = "#4DC2E0";
        body.style.color = "#15191E";
        btn1.style.background = "transparent";
        btn1.style.color = "#15191E";
        btn2.style.background = "transparent";
        btn2.style.color = "#15191E";
        btn3.style.background = "transparent";
        btn3.style.color = "#15191E";
        breakAlert.style.color = "black"

    })
    t6.addEventListener('click',() => {
        body.style.background = "#ffb703";
        body.style.color = "#fff";
        btn1.style.background = "transparent";
        btn1.style.color = "#fff";
        btn2.style.background = "transparent";
        btn2.style.color = "#fff";
        btn3.style.background = "transparent";
        btn3.style.color = "#fff";
    })
    t7.addEventListener('click',() => {
        body.style.background = "#c1121f";
        body.style.color = "#fff";
        btn1.style.background = "transparent";
        btn1.style.color = "#fff";
        btn2.style.background = "transparent";
        btn2.style.color = "#fff";
        btn3.style.background = "transparent";
        btn3.style.color = "#fff";
    })
    t8.addEventListener('click',() => {
        body.style.background = "#583C04";
        body.style.color = "#fff";
        btn1.style.background = "transparent";
        btn1.style.color = "#fff";
        btn2.style.background = "transparent";
        btn2.style.color = "#fff";
        btn3.style.background = "transparent";
        btn3.style.color = "#fff";
    })
    t9.addEventListener('click',() => {
        body.style.background = "#254355";
        body.style.color = "#fff";
        btn1.style.background = "transparent";
        btn1.style.color = "#fff";
        btn2.style.background = "transparent";
        btn2.style.color = "#fff";
        btn3.style.background = "transparent";
        btn3.style.color = "#fff";
        breakAlert.style.color = "#fff"
    })
    t10.addEventListener('click',() => {
        body.style.background = "#ccd5ae";
        body.style.color = "#1D1B1B";
        btn1.style.background = "transparent";
        btn1.style.color = "#1D1B1B";
        btn2.style.background = "transparent";
        btn2.style.color = "#1D1B1B";
        btn3.style.background = "transparent";
        btn3.style.color = "#1D1B1B";
        breakAlert.style.color = "black"

    })
    t11.addEventListener('click',() => {
        body.style.background = "#bacc80";
        body.style.color = "#1D1B1B";
        body.style.color = "#1D1B1B";
        btn1.style.background = "transparent";
        btn1.style.color = "#1D1B1B";
        btn2.style.background = "transparent";
        btn2.style.color = "#1D1B1B";
        btn3.style.background = "transparent";
        btn3.style.color = "#1D1B1B";
        breakAlert.style.color = "black"

    })
    t12.addEventListener('click',() => {
        body.style.background = "#d4a373";
        body.style.color = "#000";
        body.style.color = "#1D1B1B";
        btn1.style.background = "transparent";
        btn1.style.color = "#000";
        btn2.style.background = "transparent";
        btn2.style.color = "#000";
        btn3.style.background = "transparent";
        btn3.style.color = "#000";
        breakAlert.style.color = "black"
    })
}
colorChanger()