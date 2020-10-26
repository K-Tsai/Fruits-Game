let playing= false
let score;
let trialsLeft;
let fruits = ['apple', 'banana', 'cherries', 'grapes', 'mango', 'orange', 'peach', 'pear', 'watermelon'];
$(function() {
  $("#startreset").click(function(){
    if (playing == true) { //are we playing?
      location.reload(); //yes reload page
    } else {  //no
      playing == true; //set playing to true
      score = 0; //set score to 0
      $("#scorevalue").html(score);
      $("#startreset").html("Reset Game");
      $("#trialsLeft").show();
      trialsLeft= 3;
      addHearts();
      startAction();
    }
  })
});

function addHearts() {
  for(let i = 0 ; i < trialsLeft; i++) {
    $('#trialsLeft').append('<img class="heartImg" src="images/heart.png" />')
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
  }

  function chooseFruit () {
    $("#fruit1").attr('src', 'images/' + fruits[Math.round(Math.random() * 8)] + '.png');
  }