function formatNumber(number) {
    return number < 10 ? "0" + number : number;
}

function showTime() {
    const date = new Date();
    const h = formatNumber(date.getHours())
    const m = formatNumber(date.getMinutes());
    const s = formatNumber(date.getSeconds());

    const time = `${h}:${m}:${s}`;
    displayElement.textContent = time;

    setTimeout(showTime, 1000);
}

const displayElement = document.getElementById("MyClockDisplay");
showTime();