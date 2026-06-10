const credits = [
  "Grade School Clicks",
  "Staff",
  "Producer:",
  "Gabriel Bayker",
  "Music Producer:",
  "Gabriel Bayker",
  "Teacher:",
  "Ms. Miranda and Mr. Bayker",
  "Out-of-Game Team:",
  "Education:",
  "School",
  "Inspiration:",
  "It was a project on my computer.",
  "Special Thanks:",
  "GitHub",
  "VSCode",
  "WebDiaries",
  "My Mother",
  "My Father",
  "Lienna Daniel Kogler",
  "Akintunde Pounds",
  "Akintunde Pounds's Children",
  "Bacon",
  "Anne Parkinson",
  "Javascript",
  "HTML",
  "Tim Berners-Lee",
  "Windows 11",
  "Google Chrome",
  "Animal Crossing",
  "Life",
  "Fun",
  "Thomas Gabriel",
  "Dinner",
  "George Washington",
  "Breakfast",
  "Lunch",
  "Recess",
  "Nicholas Tender",
  "Christian Tender",
  "Natalie Tender",
  "Lily Tender",
  "Nuggets:",
  "Kinder gardeners' kindergarteners garden kindly.",
  "Great grades grate your hate.",
  "Is it 'kindergarteners' or 'kindergartners'?",
  "A B C D E F G, H I, J K, L M NOPE",
  "Grade School CLicks is owned by Gabriel Bayker.",
  "You may be wondering, how do we get back?",
  "Well, I've developed a way to make infinitely long credits.",
  "I learned it in school."
];
const onCredits = [];
let credNum = 0;
let scrolled = 500;
var score = 0;
function start() {
  makeCredits();
  setInterval(makeCredits, 3000);
}
start();
function makeCredits() {
  var credit = new Credit();
  document.getElementById("rolling").appendChild(credit.form);
  onCredits.push(credit);
  credNum++;
}
function Credit() {
  this.form = document.createElement("button");
  if (credNum < credits.length) {
    this.form.innerHTML = credits[credNum];
    this.form.setAttribute("onclick", "scored()");
  } else {
    this.form.innerHTML = `<a href='gsclicks.html'>BACK</a> <p>your score was ${score}</p>`;
  }
  this.form.style.position = "absolute";
  this.form.style.top = "500px";
  this.form.style.color = "black";
  this.ypos = 500;
}
function scored() {
  score++;
}
function roll() {
  for (var i = 0; i < onCredits.length; i++) {
    if (onCredits[i] !== null) {
      onCredits[i].ypos -= 1;
    }
  }
}
function animate() {
  for (var i = 0; i < onCredits.length; i++) {
    onCredits[i].form.style.top = `${onCredits[i].ypos}px`;
  }
}
setInterval(animate, 30);
setInterval(roll, 40);
