const hourEl = document.querySelector('#hour');
const minuteEl = document.querySelector('#minute');
const secondEl = document.querySelector('#second');
const periodEl = document.querySelector('#period');

function clock(){
    const currentDate = new Date();
    const currentHour = Math.floor(currentDate.getHours());
    const currentMinute = Math.floor(currentDate.getMinutes());
    const currentSecond = Math.floor(currentDate.getSeconds());

    hourEl.innerHTML = formatHour(currentHour);
    minuteEl.innerHTML = formatTime(currentMinute);
    secondEl.innerHTML = formatTime(currentSecond);
    periodEl.innerHTML = formatPeriod(currentHour);
}

function formatTime(time){
    return time < 10 ? `0${time}` : time;
}

function formatHour(time){
    return time > 12 ? formatTime(time - 12) : formatTime(time);
}

function formatPeriod(currentHour) {
    return currentHour > 12 ? 'P.M.' : 'A.M.'
}
clock();

setInterval(clock, 1000);