var buttonColors = ["red", "blue" , "green" , "yellow"];

var gamePattern = [];
var userPattern = [];

var started = false;
var paused = false;

var level = 0;

// start game
$(document).keypress(function() {
    if (!started) {
      $("#level-title").text("Level " + level);
      nextSequence();
      started = true;
    }
});

$(".btn").click(function() {
    if(paused == false){
        var userChosenColor = $(this).attr("id");
        userPattern.push(userChosenColor);
    
        playSound(userChosenColor);
        animatePress(userChosenColor);
    
        checkAnswer(userPattern.length-1);
    }

});

function checkAnswer(currentLevel){
    if( userPattern[currentLevel] == gamePattern[currentLevel] ){
        if( userPattern.length == gamePattern.length){
            setTimeout( function() {
                 nextSequence()
            } , 500);
        }
    }else{
      playSound("wrong");
      $("body").addClass("game-over");
      $("#level-title").text("Game Over, Press any key to restart");

      setTimeout(function(){
        $("body").removeClass("game-over");
      }, 1000)
      startOver();
    }
}

async function nextSequence() {
    paused = true;
    userPattern = [];
    level++ ;
    $("#level-title").text("Level " + level);
    var randomColor = buttonColors[Math.floor(Math.random() * 4)];
    gamePattern.push(randomColor);

    for( let i = 0 ; i < level ; i++ ){
        await waitAndLog("delay",1000);
        animatePress(gamePattern[i]);
        playSound(gamePattern[i]);
    }
    paused = false;
}

function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function () {
        $("#" + currentColor).removeClass("pressed");
    }, 100);
}

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function startOver(){
    level = 0;
    gamePattern = [];
    started = false;
}

async function waitAndLog(message, delay) {
    await new Promise((resolve) => setTimeout(resolve, delay));
    console.log(message);
}