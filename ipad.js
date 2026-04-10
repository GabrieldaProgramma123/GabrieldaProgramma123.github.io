let trial = 5;
let videos;
let games;
let win;
function convertTrial() {
  if (trial > 0) {
    var igs = ("What do you want to convert?");
    if (igs === "videos") {
      trial--;
      videos++;
    }
    if (igs === "games") {
      trial--;
      games++;
    }
  }
}
function app() {

}