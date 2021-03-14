var daysEl = document.getElementById('days');
var hoursEl = document.getElementById('hours');
var minsEl = document.getElementById('mins');
var secsEl = document.getElementById('secs');

var newYears = "1 Jan 2022";

function countdown() {
    var newYearsDate = new Date(newYears);
    var currentDate = new Date();

    var totalseconds = (newYearsDate - currentDate) / 1000;
    var days = Math.floor(totalseconds / 3600/ 24);
    var hours = Math.floor(totalseconds / 3600) % 24;
    var mins = Math.floor(totalseconds / 60) % 60;
    var secs = Math.floor(totalseconds) % 60;

    daysEl.innerHTML = days; 
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secsEl.innerHTML = formatTime(secs);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}
countdown();

setInterval(countdown, 1000);

