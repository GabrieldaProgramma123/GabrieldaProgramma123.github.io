function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
$(document).ready(function () {
  
  $("<div>")
  .css("height", 15)
  .css("width", 15)
  .css("background-color", "black")
  .css("position", "absolute")
  .css("top", 50)
  .css("left", 50)
  .appendTo("#die");
  handleClick();
  rollDie(dieId);
  function handleClick() {

  }
  function rollDie() {

  }

});
