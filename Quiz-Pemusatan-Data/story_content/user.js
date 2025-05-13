window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
window.Script49 = function()
{
  var player = GetPlayer();
var timeinterval;
var totalTime = 600000; // 10 minutes in milliseconds
var t = totalTime;

// Function to get the remaining time
function getTimeRemaining() {
    t -= 1000;
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    return {
        total: t,
        hours: hours,
        minutes: minutes,
        seconds: seconds
    };
}

// Function to start or restart the clock
function startClock() {
    clearInterval(timeinterval); // Clear previous interval
    t = totalTime; // Reset timer to 10 minutes

    function updateClock() {
        if (player.GetVar("pause") == 0) {
            var time = getTimeRemaining();
            player.SetVar("hours", ('0' + time.hours).slice(-2));
            player.SetVar("minutes", ('0' + time.minutes).slice(-2));
            player.SetVar("seconds", ('0' + time.seconds).slice(-2));

            if (time.total <= 0) {
                clearInterval(timeinterval);
            }
        }
    }

    updateClock(); // Run once immediately
    timeinterval = setInterval(updateClock, 1000);
}

// Call startClock() to initialize the timer when the course starts
startClock();

// Optional: expose a global function to reset from a button
window.resetTimer = function() {
    startClock();
};

}

window.Script50 = function()
{
  resetTimer();
}

window.Script51 = function()
{
  resetTimer();
}

window.Script52 = function()
{
  resetTimer();
}

window.Script53 = function()
{
  resetTimer();

}

};
