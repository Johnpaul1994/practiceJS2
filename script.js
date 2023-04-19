const hourTime = document.getElementById("hour");
const minuteTime = document.getElementById("minutes");
const secondsTime = document.getElementById("seconds");
const ampmTime = document.getElementById("ampm");

function updateClock() {
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ampmTime = "AM";

    if(h > 12) {
        h = h - 12;
        ampmTime = "PM";
    }

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    hourTime.innerText = h;
    minuteTime.innerText = m;
    secondsTime.innerText = s;
    ampmTime, (innerText = ampm); 
    setTimeout(() =>{
        updateClock()
    }, 1000)
}

updateClock();