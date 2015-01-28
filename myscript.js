var display = document.getElementById("timer"),
    start = document.getElementById("start"),
    stop = document.getElementById("stop"),
    reset = document.getElementById("reset"),
    seconds = 0,
    minutes = 0,
    hours = 0,
    time = null;



start.addEventListener('click', startTimer);  // Click on Start -> Timer will start running
stop.addEventListener('click', stopTimer);    // Click on Stop -> Timer will be paused
reset.addEventListener('click', resetTimer);  // Click on Reset -> Timer will reset and start on 00:00:00



function startTimer() {                       // Function to trigger the function Timer after each 1000ms (Made sure u can't trigger it more with the null method)
    if (time === null) {
        timer();
        time = setInterval(timer, 1000);
    }
}

function stopTimer() {                        // Function to make the timer pause/stop by clearing the Interval (1000ms)
    clearInterval(time);
    time = null;
}

function resetTimer() {                       // Function to make the timer reset by setting the values Seconds,Minutes and Hours to "0"
    seconds = 0;
    minutes = 0;
    hours = 0;
    if (time === null) {
        timer();
        time = setInterval(timer, 1000);
    }}

function timer(){                             // Function which counts up
    display.innerHTML = ExtraZero(hours)+":"+ExtraZero(minutes)+":"+ExtraZero(seconds);  // Displaying the seconds/minutes/hours

    seconds++;

    if (seconds >= 60){                       // When seconds are at 60, seconds will reset to zero and 1 minute will be added
        seconds = 0;
        minutes++;

        if (minutes >= 60){                   // When minutes are at 60, minutes will reset to zero and 1 hour will be added
            minutes = 0;
            hours ++;
        }
    }
}

function ExtraZero(i) {                       // Adds an extra "0" when the number of seconds/minutes/hours is lower than 10 (example: 00:13:03 instead of 0:13:3)
    if (i < 10)
    {
        i = "0" + i
    }
    return i
}



// Liam Boer    2014-2015    Media Development