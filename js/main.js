// We need to grab multiple user input values, specfically for second(s), minute(s), or hour(s)
// Once we have the user values, we need to put those into a type of countdown function 




   function startItUp(){
       var secondsy = document.getElementById('seconds').value;
       seconds = parseInt(secondsy);
      var countdownTimer = setInterval('secondPassed()', 1000);
// alert(seconds);
}

function secondPassed() {

    var minutes = Math.round((seconds - 30)/60);
    var remainingSeconds = seconds % 60;
    
    if (remainingSeconds < 10) {
        remainingSeconds = "0" + remainingSeconds;  
    }
    document.getElementById('countdown').innerHTML = minutes + ":" + remainingSeconds;
    if (seconds == 0) {
        clearInterval(countdownTimer);
        document.getElementById('alert').innerHTML = "Buzz Buzz";
    } else {
        seconds = seconds - 1;
    }
}


// That variable will be placed into a function that decrements it by the second


// 
