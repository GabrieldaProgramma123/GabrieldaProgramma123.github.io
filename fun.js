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
    down: false
}
const pos = {
    left: 0,
    top: 0,
}
const berries = [];
var leftPos = 0;
function css(id, property, amount) { 
  document.getElementById(id).style[property] = `${amount}px`; 
  }
setInterval(animate, 30);
function animate() {
    document.getElementById("char").scrollIntoView({behavior: 'smooth', block: 'center', inline: "center"});
    if (moving.left && !moving.right) {
        pos.left += 3;
    }
    if (moving.right && !moving.left) {
        pos.left -= 3;
    }
    if (moving.up && !moving.down) {
        pos.top -= 3;
    }
    if (moving.down && !moving.up) {
        pos.top += 3;
    }
  css("char", "left", pos.left);
  css("char", "top", pos.top);
}
function createBerry() {
    var myBerry = {}
}
function move(con) {
for (let key in moving) {
        moving[key] = false;
    }
    moving[con] = true;
  }