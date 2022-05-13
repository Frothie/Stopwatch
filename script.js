var milli_seconds = 0,
    seconds = 0,
    minutes = 0;
var h1 = document.getElementById('time'),
    start = document.getElementById('button-start'),
    stop = document.getElementById('button-stop'),
    clear = document.getElementById('button-reset'),
    interval = 1;
function count() {
    interval = 1;
    milli_seconds += interval;

    if (milli_seconds >= 100) {
        milli_seconds = 0;
        seconds += interval;
    }

    if (seconds >= 60) {
        seconds = 0;
        minutes += interval;
    }

    h1.textContent =
        (minutes ? (minutes > 9 ? minutes : '0' + minutes) : '00') +
        ':' +
        (seconds ? (seconds > 9 ? seconds : '0' + seconds) : '00') +
        ':' +
        (milli_seconds > 9 ? milli_seconds : '0' + milli_seconds);
}

var t;

/* start button */
start.onclick = () => {
    if (!t) {
        t = setInterval(count, 10);
    }
};

/*stop button */
stop.onclick = () => {
    stopTimer();
};

/* clear button */
clear.onclick = () => {
    stopTimer();
    h1.textContent = '00:00:00';
    seconds = 0;
    minutes = 0;
    milli_seconds = 0;
    interval = 0;
};

function stopTimer() {
    clearInterval(t);
    t = null;
}
