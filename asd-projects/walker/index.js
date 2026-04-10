/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  var walker = {
    x: 0,
    y: 0,
    speedX: 0,
    speedY: 0
  }

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  
  // Game Item Objects


  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)

  /* 
  This section is where you set up event listeners for user input.
  For example, if you wanted to handle a click event on the document, you would replace 'eventType' with 'click', and if you wanted to execute a function named 'handleClick', you would replace 'handleEvent' with 'handleClick'.

  Note: You can have multiple event listeners for different types of events.
  */
 document.addEventListener('keydown', function (event) {
      if (event.code === "ArrowRight") {
        walker.speedX = 5;
      }
      if (event.code === "ArrowLeft") {
        walker.speedX = -5;
      }
      if (event.code === "ArrowUp") {
        walker.speedY = -5;
      }
      if (event.code === "ArrowDown") {
        walker.speedY = 5;
      }
  })      
  document.addEventListener('keyup', function (event) {
      if (event.code === "ArrowRight") {
        walker.speedX = 0;
      }
      if (event.code === "ArrowLeft") {
        walker.speedX = -0;
      }
      if (event.code === "ArrowUp") {
        walker.speedY = -0;
      }
      if (event.code === "ArrowDown") {
        walker.speedY = 0;
      }
  })      
  // looked this up on google                    

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    repositionGameItem();
    wallCollision();
    redrawGameItem();
  }
  
  /* 
  This section is where you set up the event handlers for user input.
  For example, if you wanted to make an event handler for a click event, you should rename this function to 'handleClick', then write the code that should execute when the click event occurs.
  
  Note: You can have multiple event handlers for different types of events.
  */
  function handleEventUp(event) {
      if (event.code === "ArrowRight") {
        walker.speedX = 5;
      }
      if (event.code === "ArrowLeft") {
        walker.speedX = -5;
      }
      if (event.code === "ArrowUp") {
        walker.speedY = -5;
      }
      if (event.code === "ArrowDown") {
        walker.speedX = 5;
      }
  }
  function handleEventDown(event) {
      if (event.code === "ArrowRight") {
        walker.speedX = 5;
      }
      if (event.code === "ArrowLeft") {
        walker.speedX = -5;
      }
      if (event.code === "ArrowUp") {
        walker.speedY = -5;
      }
      if (event.code === "ArrowDown") {
        console.log("me")
        walker.speedX = 5;
      }
  }

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  function wallCollision(bob) {
    if (walker.x + $('#walker').width() > $('#board').width()) {
      walker.x -= walker.speedX;
    }
    if (walker.y + $('#walker').height() > $('#board').height()) {
      walker.y -= walker.speedY;
    }
    if (walker.x < 0) {
      walker.x -= walker.speedX;
    }
    if (walker.y < 0) {
      walker.y -= walker.speedY;
    }
  }
function repositionGameItem(totallyMeaningfulParameter) {
  walker.x += walker.speedX
  walker.y += walker.speedY
}
function redrawGameItem() {
  $("#walker").css("left", walker.x);
$("#walker").css("top", walker.y);
}
  
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  
}
