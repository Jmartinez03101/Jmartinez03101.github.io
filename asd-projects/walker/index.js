/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()

function runProgram() {
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  //first player keys
  var KEY1 = {
    'LEFT': 37,
    'RIGHT': 39,
    'UP': 38,
    'DOWN': 40,
  }
  //second player keys
  var KEY2 = {
    'W': 87,
    'A': 65,
    'S': 83,
    'D': 68,
  }
  //positions for first player
  var positionX1 = 1450;
  var positionY1 = 680;
  var speedX1 = 0;
  var speedY1 = 0;
  //posiitons for second player
  var positionX2 = 0;
  var positionY2 = 0;
  var speedX2 = 0;
  var speedY2 = 0;
  // Game Item Objects
  var walker1pos = positionX1 + positionY1;
  var walker2pos = positionX2 + positionY2;
  //colors
  var red = 'rgb(255, 0, 0)';
  var teal= 'rgb(0, 128, 128)';
  var yellow = 'rgb(128, 128, 0)';
//score
var score = 0;
var p1Score = 0;
 var p2Score = 0;
  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown1);
  $(document).on('keydown', handleKeyDown2);                           // change 'eventType' to the type of event you want to handle
  $(document).on('keyup', handleKeyUp1);
  $(document).on('keyup', handleKeyUp2);                           // change 'eventType' to the type of event you want to handle

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  
  setTimeout(chooseIt, 000); //person who is it is chosen after 5 seconds
  function newFrame() {
    repositionGameItem1();
    repositionGameItem2();
    redrawGameItem1();
    redrawGameItem2();
    borderLimit1();
    borderLimit2();
    setTimeout(tag, 2000);
    winner();
  }

  /* 
  Called in response to events.
  */
  function handleKeyDown1(event) {
    // console.log('working');

    //player one key down
    if (event.which === KEY1.LEFT) {
      // console.log('left pressed');
      speedX1 = -5;
    }
    if (event.which === KEY1.RIGHT) {
      // console.log('right pressed');
      speedX1 = 5;
    }
    if (event.which === KEY1.UP) {
      // console.log('up pressed');
      speedY1 = -5;
    }
    if (event.which === KEY1.DOWN) {
      // console.log('down pressed');
      speedY1 = 5;
    }

  }
  function handleKeyDown2(event){
        //player 2 key down
        if (event.which === KEY2.A) {
          // console.log('left pressed');
          speedX2 = -5;
        }
        if (event.which === KEY2.D) {
          // console.log('right pressed');
          speedX2 = 5;
        }
        if (event.which === KEY2.W) {
          // console.log('up pressed');
          speedY2 = -5;
        }
        if (event.which === KEY2.S) {
          // console.log('down pressed');
          speedY2 = 5;
        }
  }

  function handleKeyUp1(event) {
    // console.log('working');
    //player 1 key up
    if (event.which === KEY1.LEFT) {
      // console.log('left pressed');
      speedX1 = 0;
    }
    if (event.which === KEY1.RIGHT) {
      // console.log('right pressed');
      speedX1 = 0;
    }
    if (event.which === KEY1.UP) {
      // console.log('up pressed');
      speedY1 = 0;
    }
    if (event.which === KEY1.DOWN) {
      // console.log('down pressed');
      speedY1 = 0;
    }

  }
  function handleKeyUp2(event){
          //player 2 key up
    if (event.which === KEY2.A) {
      // console.log('left pressed');
      speedX2 = 0;
    }
    if (event.which === KEY2.D) {
      // console.log('right pressed');
      speedX2 = 0;
    }
    if (event.which === KEY2.W) {
      // console.log('up pressed');
      speedY2 = 0;
    }
    if (event.which === KEY2.S) {
      // console.log('down pressed');
      speedY2 = 0;
    }
  }

  function tag(){
    if(positionX1 + positionY1 === positionY2 + positionX2 ){
      // positionX1 = 1450;
      // positionY1 = 680;
      console.log(11);
      // positionX2 = 0;
      // positionY2 = 0;

      if ( $("#walker1").css('background-color') === red){
        $("#walker2").css('background-color', red);
        $("#walker1").css('background-color', teal);
        console.log('walker1 turns 2 to red');
        console.log($("#walker1").css('background-color'));
        p1Score = p1Score +1;
        $( "#player1Score" ).text('P1 Score:' + p1Score);
      }
      else if ( $("#walker2").css('background-color') === red){
        console.log('walker2 turns 1 to red');
        $("#walker2").css('background-color', yellow);
        $("#walker1").css('background-color', red);
        p2Score = p2Score +1;
        $( "#player2Score" ).text('P2 Score:' + p2Score);

      }
    }
  }

  function chooseIt(){
    var randomNum = Math.ceil(Math.random() * 2);
    if (randomNum === 1){
      $("#walker1").css('background-color', 'red');
    }
   else if (randomNum === 2){
      $("#walker2").css('background-color', 'red');

    }
  }


  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  function winner() {
    if (p1Score >= 5){
      alert('GAME OVER!');
    }
    if (p2Score >= 5){
      alert('GAME OVER!');
    }
  }

  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }

  function repositionGameItem1() {
    positionX1 += speedX1;
    positionY1 += speedY1;
  }
  function repositionGameItem2(){
    positionX2 += speedX2;
    positionY2 += speedY2;
  }

  function redrawGameItem1() {
    $("#walker1").css("left", positionX1);
    $("#walker1").css("top", positionY1);
  }
  function redrawGameItem2(){
    $("#walker2").css("left", positionX2);
    $("#walker2").css("top", positionY2);
  }

  function borderLimit1() {
    //limits for player 1
    if (positionX1 > 1450) {
      speedX1 = 0;
      positionX1 = 1450;
    }
    if (positionX1 < 0) {
      speedX1 = 0;
      positionX1 = 0;
    }
    if (positionY1 > 680) {
      speedY1 = 0;
      positionY1 = 680;
    }
    if (positionY1 < 0) {
      speedY1 = 0;
      positionY1 = 0;
    }

  }
  function borderLimit2(){
        //limits for player 2
        if (positionX2 > 1450) {
          speedX2 = 0;
          positionX2 = 1450;
        }
        if (positionX2 < 0) {
          speedX2 = 0;
          positionX2 = 0;
        }
        if (positionY2 > 680) {
          speedY2 = 0;
          positionY2 = 680;
        }
        if (positionY2 < 0) {
          speedY2 = 0;
          positionY2 = 0;
        }
  }
}
