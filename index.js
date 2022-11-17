let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let startButton = document.getElementById("start-button")
let endButton = document.getElementById("end-button")
let userTimeInput = document.getElementById("timer-number")
let homeScoreBtnPlus1 = document.getElementById('home-plus-1')
let homeScoreBtnPlus3 = document.getElementById('home-plus-3')
let homeScoreBtnPlus5 = document.getElementById('home-plus-5')

let guestScoreBtnPlus1 = document.getElementById('guest-plus-1')
let guestScoreBtnPlus3 = document.getElementById('guest-plus-3')
let guestScoreBtnPlus5 = document.getElementById('guest-plus-5')

let homeScoreCounter = 0
let guestScoreCounter = 0

startButton.addEventListener("click", function(){
    homeScoreCounter = 0
    homeScore.innerHTML = homeScoreCounter
    guestScoreCounter = 0
    guestScore.innerHTML = guestScoreCounter
    timerTime.innerHTML = userTimeInput.value + ":" + 00;
    startTimer();
})
endButton.addEventListener("dblclick", function(){
    timerTime.innerHTML = 0 + ":" + 00;
})
homeScore.innerHTML = homeScoreCounter

//Timer function goes here
let timerTime = document.getElementById('timer')
// timerTime.innerHTML = 30 + ":" + 00;



function startTimer() {
    let presentTime = document.getElementById('timer').innerHTML;
    let timeArray = presentTime.split(/[:]+/);
    let m = timeArray[0];
    let s = checkSecond((timeArray[1] - 1));
    if(s==59){m=m-1}
    if(m<0){
        return
    }
    
    document.getElementById('timer').innerHTML =
        m + ":" + s;
    console.log(m)
    setTimeout(startTimer, 1000);
    
}

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
    if (sec < 0) {sec = "59"};
    return sec;
}





//add plus 1,3, and 5 to home score
homeScoreBtnPlus1.addEventListener("click", function() {
    console.log("click+1")
    homeScoreCounter += 1
    console.log(homeScore)
    homeScore.innerHTML = homeScoreCounter
    return homeScore
})

homeScoreBtnPlus3.addEventListener("click", function() {
    console.log("click+3")
    homeScoreCounter += 3
    console.log(homeScore)
    homeScore.innerHTML = homeScoreCounter
    return homeScore
})

homeScoreBtnPlus5.addEventListener("click", function() {
    console.log("click+35")
    homeScoreCounter += 5
    console.log(homeScore)
    homeScore.innerHTML = homeScoreCounter
    return homeScore
})

////add plus 1,3, and 5 to guest score
guestScoreBtnPlus1.addEventListener("click", function() {
    console.log("click+1")
    guestScoreCounter += 1
    console.log(homeScore)
    guestScore.innerHTML = guestScoreCounter
    return homeScore
})
guestScoreBtnPlus3.addEventListener("click", function() {
    console.log("click+1")
    guestScoreCounter += 3
    console.log(homeScore)
    guestScore.innerHTML = guestScoreCounter
    return homeScore
})
guestScoreBtnPlus5.addEventListener("click", function() {
    console.log("click+1")
    guestScoreCounter += 5
    console.log(homeScore)
    guestScore.innerHTML = guestScoreCounter
    return homeScore
})


