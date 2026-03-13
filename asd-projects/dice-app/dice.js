
$(document).ready(function () {
  function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function makeDot(top, left, elem) {
  $("<div>")
  .css("height", 15)
  .css("width", 15)
  .css("background-color", "black")
  .css("position", "absolute")
  .css("top", top)
  .css("left", left)
  .appendTo(`#${elem}`);
}
$(document).on("click", handleClick);
  handleClick();
  rollDie("#dieID");
  function handleClick() {
    rollDie()
  }
  function rollDie() {
    $("#dieID").empty();
    var randomNum = getRndInteger(1, 6);
    if (randomNum === 1) {
  makeDot(50, 50, "dieID"); // middle middle
} else if (randomNum === 2) {
  makeDot(25, 25, "dieID"); // top left
  makeDot(75, 75, "dieID"); // bottom right
} else if (randomNum === 3) {
  makeDot(25, 25, "dieID"); // top left
  makeDot(75, 75, "dieID"); // bottom right
  makeDot(50, 50, "dieID"); // middle middle
} else if (randomNum === 4) {
  makeDot(75, 75, "dieID"); // bottom right
  makeDot(25, 25, "dieID"); // top left
  makeDot(25, 75, "dieID"); // bottom left
  makeDot(75, 25, "dieID"); // top right
} else if (randomNum === 5) {
  makeDot(50, 50, "dieID"); // middle middle
  makeDot(75, 75, "dieID"); // bottom right
  makeDot(25, 25, "dieID"); // top left
  makeDot(25, 75, "dieID"); // bottom left
  makeDot(75, 25, "dieID"); // top right
}  else if (randomNum === 6) {
  makeDot(50, 25, "dieID"); // middle middle
  makeDot(50, 75, "dieID"); // middle middle
  makeDot(75, 75, "dieID"); // bottom right
  makeDot(25, 25, "dieID"); // top left
  makeDot(25, 75, "dieID"); // bottom left
  makeDot(75, 25, "dieID"); // top right
}
  }

});
