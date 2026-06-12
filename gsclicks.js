var currentGrade = 0;
var clicks = 0;
var gradLevel = 100;
var gradStreak = 0;
var autoLearners = 0;
const save = {
  currentGrade: currentGrade,
  clicks: clicks,
  gradLevel: gradLevel,
  gradStreak: gradStreak,
  autoLearners: autoLearners
};
// grade 0 = preschool, grade 1 = kindergarten, go up from there
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function saveProgress(thing) {
  if (thing === "credits") {
    var savie = true;
  } else {
    var savie = confirm("Are you sure you want to save?");
  }
  if (savie|| thing === "credits") {
    save.currentGrade = currentGrade;
    save.clicks = clicks;
    save.gradLevel = gradLevel;
    save.gradStreak = gradStreak;
    save.autoLearners = autoLearners;
    localStorage.setItem("saves2", JSON.stringify(save));
  }
}
function loadSave() {
  var savie = confirm("Are you sure you want to load?");
  if (savie) {
    const load = JSON.parse(localStorage.getItem("saves2"));
    if (!load) return;

    for (let x in load) {
      window[x] = load[x];
    }
  }
}
function animate() {
  if (currentGrade === 0) {
    document.getElementById("cool").innerHTML =
      "Welcome To Preschool: The Beginning Of School";
  } else if (currentGrade === 1) {
    document.getElementById("cool").innerHTML =
      "Welcome To Kindergarten: Where Kids Enjoy School";
  } else {
    document.getElementById("cool").innerHTML =
      `Welcome To Grade ${currentGrade - 1}`;
  }
  document.getElementById("booty").innerHTML = clicks;
}
function autoLearn() {
  var warnn = prompt("This will send you back to preschool and remove all clicks, but you will start to learn automatically; how much depends on your grade. Are youu sure?")
  if (warnn === "yes") {
    autoLearners += currentGrade;
    currentGrade = 0;
    gradStreak = 0;
    gradLevel = 100;
    clicks = 0;
  }
}
function autos() {
  clicks += autoLearners;
}
function schoolDay() {
  alert(
    "Hi! Welcome to CLickCademy, where you click that student portal and just stay home and relax! Best thing ever, right?",
  );
  if (clicks > gradLevel) {
    if (currentGrade > 7) {
      alert(
        "You've really done well, so here's a challenge. You must click more to graduate.",
      );
      currentGrade++;
      gradLevel += 200;
      gradStreak++;
      if (gradStreak >= 10) {
        alert(
          "Holy school! You graduated 10 times in a row! I've got a special credits surprise for anyone who gets that far. Congrats, you beat Grade School Clicks.",
        );
        window.location.href = "gsclickscredits.html";
        alert("Now Saving.");
        saveProgress("credits");
      }
    } else {
      alert("You deserve to graduate. Do it enough times in a row and maybe you'll get a reward!");
      currentGrade++;
      gradLevel += 100;
      gradStreak++;
    }
  }
}
function addClicks() {
  clicks++;
  gradStreak = 0;
}
function assignHomework() {}
setInterval(animate, 30);
setInterval(autos, 1000);
