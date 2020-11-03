let playing= false
let score;
let trialsLeft;
let fruits = ['apple', 'banana', 'cherries', 'grapes', 'mango', 'orange', 'peach', 'pear', 'watermelon'];
let step;
let action;

$(function() {
  $("#startreset").click(function(){
    if (playing == true) { //are we playing?
      location.reload(); //yes reload page
    } else {  //no
      playing == true; //set playing to true
      score = 0; //set score to 0
      $("#scorevalue").html(score);
      $("#trialsLeft").show();
      trialsLeft= 3;
      addHearts();
      $("#gameOver").hide();
      $("#startreset").html("Reset Game");
      startAction();
    }
  });


function addHearts() {
  $("#trialsLeft").empty();
  console.log(trialsLeft);
  for(let i = 0 ; i < trialsLeft; i++) {
    $('#trialsLeft').append('<img class="heartImg" src="images/heart.png" >');
  }
}

//are we playing?
  //yes
    //reloadpage
  //no
  //show trials left
  //change button text to "reset game"
  //1.create a random fruit
  //define a random step
  //2.move fruit down one step every 30 sec
    //is fruit too low?
      //no-> repeat nb2
      //yes ->any trials left?
        //yes: repeat nbl
        //no : show game over, button text: start game
//slice a fruit 
  //play sound
  //explode fruit

  function startAction() {
    $('#fruit1').show();
    chooseFruit(); //random fruit
    $('#fruit1').css({'left': Math.round(Math.random()*550), 'top': -50})

    //generate a random step
    step = Math.round(Math.random() * 5) + 1;
    action = setInterval(function(){
      $('#fruit1').css('top', 
      $('#fruit1').position().top + step);
      if($('#fruit1').position().top > $('#fruitsContainer').height()){
        if (trialsLeft > 1){
          $('#fruit1').show();
          chooseFruit(); //random fruit
          $('#fruit1').css({'left': Math.round(Math.random()*550), 'top': -50})

          //generate a random step
          step = Math.round(Math.random() * 5) + 1;
          trialsLeft --;
          addHearts();
        } else {
          playing = false;
          $('#startreset').html("Start Game");
          $('#gameOver').show();
          $('#gameOver').html("<p>Game Over</p> <p>Your Score is " + score + ".</p>");
          $('#trialsLeft').hide();
          stopAction();
        }
      }
    }, 10);

  }

  function chooseFruit () {
    $("#fruit1").attr('src', 'images/' + fruits[Math.round(Math.random() * 8)] + '.png');
  }

  function stopAction() {
    clearInterval(action);
    $("fruit1").hide();
  }
});