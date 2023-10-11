window.onload = function () {
    let seconds = 0;
    let tens = 0;
    const appendTens = document.getElementById("tens");
    const appendSeconds = document.getElementById("seconds");
    const buttonStart = document.getElementById("button-start");
    const buttonStop = document.getElementById("button-stop");
    const buttonReset = document.getElementById("button-reset");
    let Interval;

    function formatTime(value) {
        return value < 10 ? "0" + value : value;
    }

    function startTimer() {
        tens++;
        if (tens > 99) {
            seconds++;
            tens = 0;
        }
        appendTens.innerHTML = formatTime(tens);
        appendSeconds.innerHTML = formatTime(seconds);
    }

    buttonStart.onclick = function () {
        if (Interval) {
            clearInterval(Interval);
        }
        Interval = setInterval(startTimer, 10);
    }

    buttonStop.onclick = function () {
        clearInterval(Interval);
    }

    buttonReset.onclick = function () {
        clearInterval(Interval);
        tens = 0;
        seconds = 0;
        appendTens.innerHTML = formatTime(tens);
        appendSeconds.innerHTML = formatTime(seconds);
    }


}