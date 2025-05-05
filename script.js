let hour = document.getElementById("hours")
let min = document.getElementById("mins")
let sec = document.getElementById("secs")

setInterval(() => {
    let time = new Date();

    hour.innerText = (hour.innerText < 10 ? "0" : "") + time.getHours();
    min.innerText = (min.innerText < 10 ? "0" : "") + time.getMinutes();
    sec.innerText = (sec.innerText < 10 ? "0" : "") + time.getSeconds()

}, 1000)