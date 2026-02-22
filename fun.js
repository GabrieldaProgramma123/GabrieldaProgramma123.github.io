/* let moving = false;
let leftPos = 0;
function animate() {
    document.getElementById("char").scrollIntoView({behavior: 'smooth', block: 'center', inline: "center"});
    if (moving) {
        leftPos++;
    }
    document.getElementById("char").style.left = `${leftPos}px`;
}
setInterval(animate, 30);
function move() {
    moving = !moving;
} */
const moving = {
  left: false,
  right: false,
  up: false,
  down: false,
};
const pos = {
  left: 0,
  top: 0,
};
const berries = [];
var times = 0;
var yumVal = 0;
var score = 0;
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
var leftPos = 0;
function isAt(xcor, ycor) {
  return pos.left === xcor && pos.top === ycor;
}
function isWithin(target, firstval, lastval) {
  return target > firstval && target < lastval;
}
function css(id, property, amount) {
  document.getElementById(id).style[property] = `${amount}px`;
}
setInterval(animate, 30);
setInterval(clockYum, 1000);
function animate() {
  document
    .getElementById("char")
    .scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
  if (moving.left && !moving.right) {
    pos.left += 1;
  }
  if (moving.right && !moving.left) {
    pos.left -= 1;
  }
  if (moving.up && !moving.down) {
    pos.top -= 1;
  }
  if (moving.down && !moving.up) {
    pos.top += 1;
  }
  css("char", "left", pos.left);
  css("char", "top", pos.top);
  for (let i = berries.length - 1; i >= 0; i--) {
    if (
      isWithin(berries[i].xpos, pos.left - 20, pos.left + 20) &&
      isWithin(berries[i].ypos, pos.top - 20, pos.top + 20)
    ) {
      berries[i].interact();
      berries.splice(i, 1);
    }
  }
  if (times % 2 === 0) {
    for (let i = 0; i < berries.length; i++) {
      if (document.getElementById(`YU-${i}`) !== null) {
        document.getElementById(`YU-${i}`).style.left = `${berries[i].xpos}px`;
        document.getElementById(`YU-${i}`).style.top = `${berries[i].ypos}px`;
      }
    }
  }
  document.getElementById("scoring").innerHTML = score;
}
function clockYum() {
  times++;
  if (times % 10 === 0) {
    createBerry();
  }
}
function Berry(xpos, ypos, berryID) {
  this.xpos = xpos;
  this.ypos = ypos;
  this.form = document.createElement("button");
  this.interact = function () {
    this.form.remove();
    score++;
  };
  this.born = function () {
    document.body.appendChild(this.form);
    this.form.classList.add("npc");
    this.form.id = berryID;
    this.form.style.position = "absolute";
    this.form.style.backgroundColor = "red";
  };
}
function createBerry() {
  var myBerry = new Berry(
    getRndInteger(1, 50),
    getRndInteger(1, 50),
    "YU-" + yumVal,
  );
  myBerry.born();
  berries.push(myBerry);
  yumVal++;
}
function move(con) {
  for (let key in moving) {
    moving[key] = false;
  }
  moving[con] = true;
}
