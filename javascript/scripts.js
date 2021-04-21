var isPlaying = false;
var points = 0;
var audio = new Audio('sounds/security.mp3');
var stopTimer;

document.getElementById("startButton").addEventListener("click", function() {

  if (isPlaying == false){
    var threeMinutes = 60 * 2, display = document.querySelector('#timer');
    display.innerHTML = "<h1>02:00</h1>";
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
            display.innerHTML = "<h1>Πόντοι: " + points + "/12</h1><p>Αυτό ήταν!!! Όταν είναι έτοιμος ο επόμενος παίκτης μπορεί να πατήσει το κουμπί.</p>";
            document.getElementById("questions").style.display = "none";
            points = 0;
        }

    }, 1000);
}

function results(){
  var q1 = document.myform.q1.value;
  var q2 = document.myform.q2.value;
  var q3 = document.myform.q3.value;
  var q4 = document.myform.q4.value;
  var q5 = document.myform.q5.value;
  var q6 = document.myform.q6.value;
  var q7 = document.myform.q7.value;
  var q8 = document.myform.q8.value;
  var q9 = document.myform.q9.value;
  var q10 = document.myform.q10.value;
  var q11 = document.myform.q11.value;
  var q12 = document.myform.q12.value;

  if (q1 == "a"){
    points++;
  }
  if (q2 == "a"){
    points++;
  }
  if (q3 == "a"){
    points++;
  }
  if (q4 == "c"){
    points++;
  }
  if (q5 == "b"){
    points++;
  }
  if (q6 == "c"){
    points++;
  }
  if (q7 == "c"){
    points++;
  }
  if (q8 == "a"){
    points++;
  }
  if (q9 == "c"){
    points++;
  }
  if (q10 == "b"){
    points++;
  }
  if (q11 == "c"){
    points++;
  }
  if (q12 == "b"){
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
  document.querySelector('#timer').innerHTML = "<h1>Πόντοι: " + points + "/12</h1><p>Αυτό ήταν!!! Όταν είναι έτοιμος ο επόμενος παίκτης μπορεί να πατήσει το κουμπί.</p>";
  document.getElementById("questions").style.display = "none";
  points = 0;

});
