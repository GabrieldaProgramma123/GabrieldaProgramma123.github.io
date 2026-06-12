var namesCollected = []
const save = {
  namesCollected: namesCollected
}
function addName() {
  namesCollected.push(document.getElementById("center").value);
}
function animate() {
  document.getElementById("boo").innerHTML = namesCollected;
}
setInterval(animate, 30)
function saveProgress(thing) {
  if (thing === "credits") {
    var savie = alert("This save had to happen.")
  } else {
    var savie = prompt("Are you sure you want to save?");
  }
  if (savie === "yes" || thing === "credits") {
      save.namesCollected = namesCollected;
    localStorage.setItem("saves2", JSON.stringify(save));
  }
}
function loadSave() {
  var savie = prompt("Are you sure you want to load?");
  if (savie === "yes") {
    const load = JSON.parse(localStorage.getItem("saves2"));
    if (!load) return;

    for (let x in load) {
      window[x] = load[x];
    }
  }
}