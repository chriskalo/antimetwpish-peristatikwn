var isPlaying = false;
var points = 0;
var audio = new Audio('sounds/security.mp3');
var stopTimer;

document.getElementById("startButton").addEventListener("click", function() { //event gia na emfanistei o xronos kai oi erwthseis molis paththei to koumpi

  if (isPlaying == false){  //autos o elenxos ginetai giati den theloume ean to paixnidi exei ksekinisei kai o xrhsths ksanapatisei to koumpi na treksei pali o kwdikas
    var twoMinutes = 60 * 2, display = document.querySelector('#timer');  //thetoume ton xrono pou theloume kai epilegoume to shmeio sto opoio theloume na emfanizetai
    display.innerHTML = "<h1>02:00</h1>";
    startTimer(twoMinutes, display);  //kaloume thn sinartish h opoia me thn seira ths tha kalesei thn antistixh sinarthsh gia thn antistrofh metrish tou xronou pou exoume thesei
    // setTimeout(function(){ document.getElementById("questions").style.display = "block"; }, 1000);
    document.getElementById("questions").style.display = "block"; //emfanizoume tis erwthseis
  } else {
    console.log("The game is on");
  }

});

function startTimer(duration, display) {  //sinarthsh h opoia tha ksekinisei thn antistrofh metrish
    var timer = duration, minutes, seconds;
    isPlaying = true;
    stopTimer = setInterval(function () { //auth h sinarthsh tha ekteleitai ana 1 deuterolepto meiwnontas ton xrono kata 1 kai typwnontas to apotelesma.
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.innerHTML = "<h1>" + minutes + ":" + seconds + "</h1>"; //tipwnetai to apotelesma afou exei ginei o ipologismos tou neou xronou.

        if (timer == 6){  //otan ftasei sta 6 deuterolepta h antistrofh metrish tote tha akoustei hxos seirinas
          audio.play();
        }

        if (--timer < 0) {  //otan ftasei sto miden h antistrofh metrish tha stamatisei na ekteleitai h sinarthsh ipologismou tou xronou tha eksafanistoun oi erwthseis kai tha tipwthoun sthn othonh oi pontoi
            clearInterval(stopTimer); //auth h sinarthsh tha stamatisei thn sinarthsh pou epanalamvanetai kathe ena deuterolepto kai einai ekxwrimenh sthn metavlith stopTimer
            results();  //sinarthsh gia ton ipologismo twn pontwn
            var clearQuiz = document.getElementsByClassName("question");
            for(var i = 0; i < clearQuiz.length; i++){  //for loop gia na katharisoun ta radio buttons etsi wste na mporei na paiksei kai o epomenos paikths
              clearQuiz[i].checked = false;
            }

            isPlaying = false;
            display.innerHTML = "<h1>Πόντοι: " + points + "/14</h1><p>Αυτό ήταν!!! Όταν είναι έτοιμος ο επόμενος παίκτης μπορεί να πατήσει το κουμπί.</p>"; //tipwnontai oi pontoi tou paikth
            document.getElementById("questions").style.display = "none";  //eksafanizontai oi erwthseis
            points = 0;
        }


    }, 1000);
}

function results(){ //auth h sinarthsh pairnei tis apantiseis apo kathe erwthsh kai ipologizei tous pontous
  var q1 = document.myform.q1.value;  //pernoume to value apo to button pou patithike sthn erwthsh ena
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
  var q13 = document.myform.q13.value;
  var q14 = document.myform.q14.value;

  if (q1 == "a"){ //ipologizontai oi pontoi
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
  if (q13 == "c"){
    points++;
  }
  if (q14 == "b"){
    points++;
  }
}

document.getElementById("finishButton").addEventListener("click", function() {  //event etsi wste otan paththei to koumpi ipovolh prin thn liksh tou xronou na oloklhrwthei o giros tipwnontas tous pontous pou sigedrose o paikths

  clearInterval(stopTimer); //epanalamvanetai o idios kwdikas pou etrexe otan teleiwne o xronos
  results();
  var clearQuiz = document.getElementsByClassName("question");
  for(var i = 0; i < clearQuiz.length; i++){
    clearQuiz[i].checked = false;
  }

  isPlaying = false;
  document.querySelector('#timer').innerHTML = "<h1>Πόντοι: " + points + "/14</h1><p>Αυτό ήταν!!! Όταν είναι έτοιμος ο επόμενος παίκτης μπορεί να πατήσει το κουμπί.</p>";
  document.getElementById("questions").style.display = "none";
  points = 0;

});
