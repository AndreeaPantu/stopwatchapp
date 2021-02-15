const playBtn = document.querySelector("#start");
const pauseBtn = document.querySelector("#pause");
const stopBtn = document.querySelector("#stop");
const watchDisplay = document.querySelector("#watch");
const minutesDisplay = document.querySelector("#minutes");
const secondsDisplay = document.querySelector("#seconds");
var minutes;
var seconds;
var timer;
var sec;
playBtn.disabled = false;
pauseBtn.disabled = true;
stopBtn.disabled = true;

// Event Listeners
playBtn.addEventListener('click', playWatch);
pauseBtn.addEventListener('click', pauseWatch);
stopBtn.addEventListener('click', stopWatch);
let startTime = Math.floor(Date.now() / 1000); //Get the starting time (right now) in seconds

// Play Button
function playWatch(){
  playBtn.disabled = true;
  pauseBtn.disabled = false;
  stopBtn.disabled = false;
  sec = parseInt(minutesDisplay.textContent)*60 +  parseInt(secondsDisplay.textContent);
  timer = setInterval(() => {
    seconds = checkTime(++sec%60); // add a leading zero if it's single digit
    minutes = checkTime(parseInt(sec/60,10)); // add a leading zero if it's single digit
    minutesDisplay.innerHTML = minutes; // update the element where the minutes will appear
    secondsDisplay.innerHTML = seconds; // update the element where the minutes will appear
  }, 1000);
}

// Pause Button
function pauseWatch(){
  playBtn.disabled = false;
  pauseBtn.disabled = true;
  stopBtn.disabled = false;
  console.log(sec)
  clearInterval(timer);
}

// Stop Button
function stopWatch(){
  playBtn.disabled = false;
  pauseBtn.disabled = true;
  stopBtn.disabled = true;
  clearInterval(timer);
  minutesDisplay.innerHTML = checkTime(0); // update the element where the minutes will appear
  secondsDisplay.innerHTML = checkTime(0); // update the element where the minutes will appear
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}