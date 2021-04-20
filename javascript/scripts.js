var isPlaying = false;
var points = 0;
var audio = new Audio('sounds/security.mp3');
var stopTimer;

document.getElementById("startButton").addEventListener("click", function() {

  if (isPlaying == false){
    var threeMinutes = 60 * 1, display = document.querySelector('#timer');
    display.innerHTML = "<h1>01:00</h1>";
    startTimer(threeMinutes, display);
    // setTimeout(function(){ document.getElementById("questions").style.display = "block"; }, 1000);
    document.getElementById("questions").style.display = "block";
  } else {
    console.log("The game is on");
  }

});

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    isPlaying = true;
    stopTimer = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.innerHTML = "<h1>" + minutes + ":" + seconds + "</h1>";

        if (timer == 6){
          audio.play();
        }
        
        if (--timer < 0) {
            clearInterval(stopTimer);
            results();
            var clearQuiz = document.getElementsByClassName("question");
            for(var i = 0; i < clearQuiz.length; i++){
              clearQuiz[i].checked = false;
            }

            isPlaying = false;
            display.innerHTML = "<h1>Πόντοι: " + points + "</h1><p>Αυτό ήταν!!! όταν είναι έτοιμος ο επόμενος παίκτης μπορεί να πατήσει το κουμπί.</p>";
            document.getElementById("questions").style.display = "none";
            points = 0;
        }

    }, 1000);
}

function results(){
  var q1 = document.myform.q1.value;
  var q2 = document.myform.q2.value;

  if (q1 == "a"){
    points++;
  }
  if (q2 == "a"){
    points++;
  }
}

document.getElementById("finishButton").addEventListener("click", function() {

  clearInterval(stopTimer);
  results();
  var clearQuiz = document.getElementsByClassName("question");
  for(var i = 0; i < clearQuiz.length; i++){
    clearQuiz[i].checked = false;
  }

  isPlaying = false;
  document.querySelector('#timer').innerHTML = "<h1>Πόντοι: " + points + "</h1><p>Αυτό ήταν!!! όταν είναι έτοιμος ο επόμενος παίκτης μπορεί να πατήσει το κουμπί.</p>";
  document.getElementById("questions").style.display = "none";
  points = 0;

});
