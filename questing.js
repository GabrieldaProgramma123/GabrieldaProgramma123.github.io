var xpos = 150;
var ypos = 24;
var canmove;
var onSurface = true;
var whattobuy;
var equippedWeapon;
var money = 0;
var moneyPoins = 0;
var subscribed = false;
var anger = 0;
var xp = 0;
var health = 100;
var leftBound = 150;
var rightBound = 4000;
var upBound = 20;
var downBound = 4000;
var gameLoop = false;
var atHome = false;
var detrimVal = 1;
var going;
var going2 = true;
var stopped = false;
var initJumpY;
var initJumpX = -2;
var jumpY = 0;
var jumpX = -2;
var jumping = false;
var velocityY = 0;
var gravity = 1.2;
var jumpStrength = -15;
var loading = true;
var randNum;
var buttonVar = 0;
var buttonLet = 0;
var idstring = "BU-";
var kidstring = "KU-";
var foestring = "RU-";
var foeval = 0;
var kidval = 0;
var car = false;
var forsaleVal = 0;
var time = 0;
var outerTime = 0;
var innerTimeString;
var hours = 8;
var pm = false;
var isTimeSwitched = false;
var isEnemyMade = false;
var isDay = true;
var days = 0;
var debt = 0;
var costNum = 4;
var childName;
var childGender;
var xxyy;
var charisma = 0;
var interacting = false;
var lootVal = 0;
var isPaused = false;
var strength = 1;
var foeStrength = 10;
var garyquests;
var questMonitor = ["no", "no", "no"];
var isBeaten = false;

var kids = [];
var GARYSTORAGE = [];
var buttons = [];
var buttonPoses = [];
var inv = [];
var weaponData = [
  "dummy",
  "Rusty Blade",
  1,
  25,
  "Old Sword",
  1.5,
  50,
  "Axe",
  2,
  70,
  "Nice Axe",
  4,
  90,
  "Shiny Sword",
  6,
  120,
  "The Worst Sword Ever",
  0.01,
  0,
  "Car",
  "NA",
  50000,
];
var forsale = [weaponData[1], weaponData[4], weaponData[7], weaponData[16]];
var interact1 = ["Hi!", "Hello!"];
const baddies = [];
const save = {
  xpos: xpos,
  ypos: ypos,
  canmove: canmove,
  onSurface: onSurface,
  whattobuy: whattobuy,
  equippedWeapon: equippedWeapon,
  money: money,
  moneyPoins: moneyPoins,
  subscribed: subscribed,
  anger: anger,
  xp: xp,
  health: health,
  leftBound: leftBound,
  rightBound: rightBound,
  upBound: upBound,
  downBound: downBound,
  gameLoop: gameLoop,
  atHome: atHome,
  detrimVal: detrimVal,
  going: going,
  going2: going2,
  stopped: stopped,
  initJumpY: initJumpY,
  initJumpX: initJumpX,
  jumpY: jumpY,
  jumpX: jumpX,
  jumping: jumping,
  velocityY: velocityY,
  gravity: gravity,
  jumpStrength: jumpStrength,
  loading: loading,
  randNum: randNum,
  buttonVar: buttonVar,
  buttonLet: buttonLet,
  idstring: idstring,
  kidstring: kidstring,
  foestring: foestring,
  foeval: foeval,
  kidval: kidval,
  car: car,
  forsaleVal: forsaleVal,
  time: time,
  outerTime: outerTime,
  innerTimeString: innerTimeString,
  hours: hours,
  pm: pm,
  isTimeSwitched: isTimeSwitched,
  isEnemyMade: isEnemyMade,
  isDay: isDay,
  days: days,
  debt: debt,
  costNum: costNum,
  childName: childName,
  childGender: childGender,
  xxyy: xxyy,
  charisma: charisma,
  interacting: interacting,
  lootVal: lootVal,
  kids: kids,
  buttons: buttons,
  buttonPoses: buttonPoses,
  inv: inv,
  weaponData: weaponData,
  forsale: forsale,
  interact1: interact1,
  isPaused: isPaused,
  strength: strength,
  foeStrength: foeStrength,
  garyquests: garyquests,
  questMonitor: questMonitor,
  isBeaten: isBeaten
};

/* 
weapon, damage, cost
dummy should never be used, it's to make sure rusty blade is index 1
weapons 1 - 5 are basic
item 7 is not a weapon, so it has a damage of "NA"
*/

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isAt(xcor, ycor) {
  return xpos === xcor && ypos === ycor;
}

function isWithin(target, firstval, lastval) {
  return target > firstval && target < lastval;
}

function animate() {
  randNum = getRndInteger(1, 100);
  if (gameLoop) {
    if (!stopped) {
      if (going2) {
        xpos += 1;
      }
      if (!going2) {
        xpos -= 1;
      }
    }
    /* if (jumping) {
     ypos += velocityY;
     velocityY += gravity;
     }
     // check if landed
     if (ypos >= initJumpY) {
       ypos = initJumpY;
       jumping = false;
       velocityY = 0;
     }
       */
    if (randNum === 1) {
      createCoin();
    }
    if (!isDay) {
      goToHome();
      gameLoop = false;
      alert("Work is Over, Tme for Bed!");
    }
    // didyoutouchacoin tester
    for (let x of buttonPoses) {
      if (document.getElementById("main").style.left === x) {
        money++;
        document.body.removeChild(buttons[buttonLet]);
        buttons.splice(buttonLet, 1);
        buttonPoses.splice(buttonLet, 1);
        buttonLet++;
      }
    }
  }
  // create enemies
  // babysitting loop

  // check if interacting
  document.getElementById("main").style.left = `${xpos}px`;
  document.getElementById("main").style.top = `${ypos}px`;
  if (onSurface) {
    if (xpos > 480 && xpos < 520) {
      if (ypos > 165 && ypos < 175) {
        goToCave();
      }
    }
  }
  if (subscribed) {
    if (moneyPoins >= 1) {
      money++;
      moneyPoins = 0;
    }
    document.getElementById("points").innerHTML = `Points: ${moneyPoins}`;
  }
  if (isAt(7441, 7459)) {
    sleep("bed");
  }
  document.getElementById("money").innerHTML = `Coins: ${money} <br> XP: ${xp}`;
  document.getElementById("healthy").innerHTML = `Health: ${health}`;
  document
    .getElementById("main")
    .scrollIntoView({ behavior: "smooth", block: "center", inline: `center` });
  if (health <= 0) {
    gameOver();
  }
  // GARY
}
function pause() {
  isPaused = true;
  document.getElementById("dayNight").style.backgroundColor =
    "rgba(0, 0, 0, 0.50)";
  const menu = document.createElement("div");
  const unpaused = document.createElement("button");
  const savepush = document.createElement("button");
  const loadpush = document.createElement("button");
  menu.id = "lilMenu";
  unpaused.id = "stopstop";
  document.body.append(menu);
  menu.style.position = "fixed";
  menu.style.backgroundColor = "red";
  menu.style.color = "white";
  menu.style.borderColor = "white";
  menu.style.size = "10px";
  menu.style.zIndex = "2";
  menu.style.left = "200px";
  menu.style.top = "5px";
  menu.innerHTML =
    "Car:<br> 500 coins<br>Health Potion:<br> 20 coins<br>Damage Upgrade:<br> 20 coins<br>Rusty Blade:<br> 1 dmg, 25 coins<br>0ld Sword:<br> 1.5 dmg, 50 coins<br>Axe:<br> 2 dmg, 70 coins<br>Nice Axe:<br> 4 dmg, 90 coins<br>Shiny Sword:<br> 6 dmg: 120 coins<br>Worst Sword Ever:<br> 0.01 dmg, free!";
  document.body.append(unpaused);
  unpaused.style.backgroundColor = "red";
  unpaused.style.color = "white";
  unpaused.setAttribute("onclick", "unpause()");
  unpaused.innerHTML = "unpause";
  unpaused.style.position = "fixed";
  unpaused.style.left = "330px";
  unpaused.style.top = "5px";
  unpaused.style.zIndex = "2";
  savepush.id = "savid";
  savepush.classList.add("items");
  savepush.setAttribute("onclick", "saveProgress()");
  savepush.innerHTML = "SAVE";
  document.body.append(savepush);
  savepush.style.left = "330px";
  savepush.style.top = "30px";
  loadpush.id = "loadid";
  loadpush.classList.add("items");
  document.body.append(loadpush);
  loadpush.style.left = "330px";
  loadpush.style.top = "50px";
  loadpush.setAttribute("onclick", "loadSave()");
  loadpush.innerHTML = "LOAD";
}
function unpause() {
  isPaused = false;
  document.body.removeChild(document.getElementById("lilMenu"));
  document.body.removeChild(document.getElementById("stopstop"));
  document.body.removeChild(document.getElementById("savid"));
  document.body.removeChild(document.getElementById("loadid"));
  if (isDay) {
    document.getElementById("dayNight").style.backgroundColor =
      "rgba(0, 0, 0, 0)";
  } else {
    document.getElementById("dayNight").style.backgroundColor = "#00006480";
  }
}
function clock() {
  if (!isPaused) {
    time += 1;
    outerTime += 1;
    if (pm) {
      if (outerTime < 10) {
        innerTimeString = `0${outerTime}PM`;
      } else {
        innerTimeString = `${outerTime}PM`;
      }
    }
    if (!pm) {
      if (outerTime < 10) {
        innerTimeString = `0${outerTime}AM`;
      } else {
        innerTimeString = `${outerTime}AM`;
      }
    }
    if (outerTime >= 60) {
      outerTime = 0;
      hours++;
      createEnemies(
        getRndInteger(150, 500),
        getRndInteger(500, 1000),
        getRndInteger(5, foeStrength),
        10,
      );
    }
    if (hours > 12) {
      hours = 1;
      isTimeSwitched = false;
    }
    if (hours >= 12) {
      if (!isTimeSwitched) {
        pm = !pm;
      }
      isTimeSwitched = true;
    }
    if (
      (hours >= 9 && hours !== 12 && pm) ||
      (hours < 8 && !pm) ||
      (hours === 12 && !pm)
    ) {
      document.getElementById("dayNight").style.backgroundColor = "#00006480";
      isDay = false;
    } else {
      document.getElementById("dayNight").style.backgroundColor = "#ffffff00";
      isDay = true;
    }
    if (hours === 2 && !pm) {
      sleep("candid");
    }
    for (let i = 0; i < kids.length; i++) {
      if (!kids[i].dead) {
        if (time % kids[i].randomHunger === 0) {
          kids[i].processEat();
          if (kids[i].hunger >= 7) {
            alert(
              `Your ${kids[i].gender} ${kids[i].name} is getting very hungry.`,
            );
          } else {
            alert(`Your ${kids[i].gender} ${kids[i].name} is getting hungry.`);
          }
        }
        if (isAt(7423, 7189)) {
          if (kids.length !== 0) {
            kids[i].processEating();
            alert("Your kids have eaten");
          } else {
            alert("There is no one to feed");
          }
        }
        kids[i].xpos = xpos;
        kids[i].ypos = ypos;
        document.getElementById(`KU-${i}`).style.left = `${kids[i].xpos}px`;
        document.getElementById(`KU-${i}`).style.top =
          `${kids[i].ypos - 6 * i}px`;
      }
      if ((kids[i].dead = true)) {
        kids.splice(i, 1);
      }
    }

    document.getElementById("time").innerHTML =
      `TIME: ${hours}:${innerTimeString}<br>DAYS SPENT: ${days}`;
    for (let i = 0; i < baddies.length; i++) {
      if (!atHome && !baddies[i].dead) {
        if (
          isWithin(baddies[i].xps, xpos - 20, xpos + 20) &&
          isWithin(baddies[i].yps, ypos - 20, ypos + 20)
        ) {
          baddies[i].onCollision();
        }
        if (ypos > 700) {
          if (time % 2 === 0) {
            baddies[i].chase();
            if (document.getElementById(`RU-${i}`) !== null) {
              document.getElementById(`RU-${i}`).style.left =
                `${baddies[i].xps}px`;
              document.getElementById(`RU-${i}`).style.top =
                `${baddies[i].yps}px`;
            }
          }
        }
        if (document.getElementById(`RU-${i}`) !== null) {
          document.getElementById(`RU-${i}`).innerHTML = baddies[i].hp;
        }
        if (baddies[i].hp <= 0) {
          baddies[i].die();
        }
      }
    }
  }
}
createTHENPC("Gary", 258, 474, "Gary likes questing...", "GARY");
document.getElementById("GARY").style.left = `${GARYSTORAGE[0].xpos}px`;
document.getElementById("GARY").style.top = `${GARYSTORAGE[0].ypos}px`;
function interact() {
  for (let i = 0; i < baddies.length; i++) {
    if (
      isWithin(baddies[i].xps, xpos - 50, xpos + 50) &&
      isWithin(baddies[i].yps, ypos - 50, ypos + 50) &&
      ypos > 700
    ) {
      baddies[i].hp -= strength;
    }
  }
  if (
    isWithin(GARYSTORAGE[0].xpos, xpos - 50, xpos + 50) &&
    isWithin(GARYSTORAGE[0].ypos, ypos - 50, ypos + 50)
  ) {
    GARYSTORAGE[0].interact();
  }
}
function createCoin() {
  const btn = document.createElement("button");
  btn.classList.add("coins");
  btn.id = idstring + buttonVar;
  btn.style.left = `${getRndInteger(150, 700)}px`;

  document.body.appendChild(btn);

  buttons.push(btn);
  buttonPoses.push(btn.style.left);

  buttonVar++;
}
function newDay() {
  days++;
  hours = 8;
  outerTime = 0;
  pm = false;
  goToHome();
  foeStrength += 5;
}
function sleep(type) {
  if (type === "bed") {
    newDay();
  } else if (type === "candid") {
    newDay();
    health -= health * (detrimVal / 16);
    detrimVal++;
  }
}
let updater = setInterval(animate, 20);
let updaterTime = setInterval(clock, 700);

function birth() {
  alert("You're having a baby!");
  xxyy = getRndInteger(1, 2);
  if (xxyy === 2) {
    childGender = "boy";
    alert(`It's a ${childGender}!`);
  } else if (xxyy === 1) {
    childGender = "girl";
    alert(`It's a ${childGender}!`);
  }
  childName = prompt("Name your child");
  const kid = new child(childName, childGender);
  kid.born();
  kids.push(kid);
  kidval++;
}
function createEnemies(xpss, ypss, hlt, dmg) {
  const foe = new Enemy(xpss, ypss, hlt, dmg);
  foe.born();
  baddies.push(foe);
  foeval++;
}
function createTHENPC(name, x, y, speak, id) {
  const guy = new npc(name, x, y, speak, id);
  GARYSTORAGE.push(guy);
  guy.born();
}
function createNPC(name, x, y, speak, id) {
  const guy = new npcNormal(name, x, y, speak, id);
  guy.born();
}
function createBoss() {
  const foe = new Enemy(
    getRndInteger(150, 500),
    getRndInteger(500, 1000),
    10,
    100,
  );
  foe.born();
  baddies.push(foe);
  foeval++;
}
function bake() {}
// constructor functions
function child(name, gender) {
  this.name = name;
  this.gender = gender;
  this.xpos = xpos;
  this.ypos = ypos;
  this.hunger = 0;
  this.form = document.createElement("button");
  this.dead = false;
  this.randomHunger = getRndInteger(50, 200);
  this.born = function () {
    this.form.setAttribute("id", kidstring + kidval);
    this.form.setAttribute("class", "kids");
    document.body.appendChild(this.form);
  };
  this.processEat = function () {
    this.hunger++;
    if (this.hunger >= 10) {
      this.die();
    }
  };
  this.processEating = function () {
    this.hunger--;
  };
  this.die = function () {
    document.body.removeChild(this.form);
    this.dead = true;
  };
}
function coin(xpos, ypos) {
  this.xpos = xpos;
  this.ypos = ypos;
}
// FOR GARY
function npc(name, xpos, ypos, dialogue, npcid) {
  this.name = name;
  this.xpos = xpos;
  this.ypos = ypos;
  this.form = document.createElement("button");
  this.dialogue = dialogue;
  this.romance = 0;
  this.interact = function () {
    garyquests = prompt(
      "I like questing. Unfortunately I came to the wrong place to quest, and I'm kinda trapped. Luckily, I have some quests to get us out of here! Quest 1: Obtain 30 coins. Quest 2: Buy a Weapon or Complete any Quest. Quest 3: Live 30 days. Also, I'll need a car. P.S. The word to leave this land is: escape.",
    );
    if (garyquests === "Quest 1" && questMonitor[0] !== "done") {
      if (money >= 30) {
        inv.push("Quest 1 Token");
        questMonitor[0] = "done";
        alert("Aw thanks, here's a token!");
      } else {
        alert("Insufficient Questing, Gary Sad.");
      }
    }
    if (garyquests === "Quest 2" && questMonitor[1] !== "done") {
      if (inv.length !== 0) {
        inv.push("Quest 2 Token");
        questMonitor[1] = "done";
        alert("Aw thanks, here's a token!");
      } else {
        alert("Insufficient Questing, Gary Sad.");
      }
    }
    if (garyquests === "Quest 3" && questMonitor[2] !== "done") {
      if (days >= 30) {
        inv.push("Quest 3 Token");
        questMonitor[2] = "done";
        alert("Aw thanks, here's a token!");
      } else {
        alert("Insufficient Questing, Gary Sad.");
      }
    }
    if (garyquests === "escape") {
      if (questMonitor.indexOf("no") === -1 && car && !isBeaten) {
      alert("You and Gary are chilling on a beach. The wind rustles through your hair as you look out onto clear blue waters. You live happily ever after. But then you come back for more questing! Congrats! You've beaten Questing Online! At least for now. There might be more added. Credits to Gabriel Bayker for making the game.");
      isBeaten = true;
      } else {
        alert("You can't escape, or you've already escaped...")
      }
    }
  };
  this.born = function () {
    document.body.appendChild(this.form);
    this.form.id = npcid;
    this.form.innerHTML = "GARY!!";
  };
}
// for anyone else
function npcNormal(name, xpos, ypos, dialogue, npcid) {
  this.name = name;
  this.xpos = xpos;
  this.ypos = ypos;
  this.form = document.createElement("button");
  this.dialogue = dialogue;
  this.romance = 0;
  this.interact = function () {
    if (this.dialogue === 0) {
      alert(interact1[getRndInteger(0, interact1.length)]);
    } else {
      alert(this.dialogue);
    }
    if (this.romance >= 100) {
      birth();
      // birth params = mother, father
    }
  };
  this.born = function () {
    document.body.appendChild(this.form);
    this.form.classList.add("npc");
    this.form.id = npcid;
  };
}
function Enemy(xps, yps, hlth, baseDmg) {
  this.xps = xps;
  this.yps = yps;
  this.baseDMG = baseDmg;
  this.form = document.createElement("button");
  this.dead = false;
  this.hp = hlth;
  this.onCollision = function () {
    health -= this.baseDMG;
  };
  this.chase = function () {
    if (this.xps < xpos) {
      this.xps += 18;
    }
    if (this.xps > xpos) {
      this.xps -= 18;
    }
    if (this.yps < ypos) {
      this.yps += 18;
    }
    if (this.yps > ypos) {
      this.yps -= 18;
    }
  };
  this.born = function () {
    document.body.appendChild(this.form);
    this.form.setAttribute("class", "foes");
    this.form.setAttribute("id", foestring + foeval);
  };
  this.die = function () {
    this.dead = true;
    money += Math.ceil(hlth / 2);
    xp += Math.ceil(hlth / 2);
  };
}
// constructors end
function saveProgress() {
  save.xpos = xpos;
  save.ypos = ypos;
  save.canmove = canmove;
  save.onSurface = onSurface;
  save.whattobuy = whattobuy;
  save.equippedWeapon = equippedWeapon;
  save.money = money;
  save.moneyPoins = moneyPoins;
  save.subscribed = subscribed;
  save.anger = anger;
  save.xp = xp;
  save.health = health;
  save.leftBound = leftBound;
  save.rightBound = rightBound;
  save.upBound = upBound;
  save.downBound = downBound;
  save.atHome = atHome;
  save.detrimVal = detrimVal;
  save.going = going;
  save.going2 = going2;
  save.stopped = stopped;
  save.initJumpY = initJumpY;
  save.initJumpX = initJumpX;
  save.jumpY = jumpY;
  save.jumpX = jumpX;
  save.jumping = jumping;
  save.velocityY = velocityY;
  save.gravity = gravity;
  save.jumpStrength = jumpStrength;
  save.loading = loading;
  save.randNum = randNum;
  save.buttonVar = buttonVar;
  save.buttonLet = buttonLet;
  save.idstring = idstring;
  save.kidstring = kidstring;
  save.foestring = foestring;
  save.foeval = 0;
  save.kidval = kidval;
  save.car = car;
  save.forsaleVal = forsaleVal;
  save.time = time;
  save.outerTime = outerTime;
  save.innerTimeString = innerTimeString;
  save.hours = hours;
  save.pm = pm;
  save.isTimeSwitched = isTimeSwitched;
  save.isEnemyMade = isEnemyMade;
  save.isDay = isDay;
  save.days = days;
  save.debt = debt;
  save.costNum = costNum;
  save.childName = childName;
  save.childGender = childGender;
  save.xxyy = xxyy;
  save.charisma = charisma;
  save.interacting = interacting;
  save.lootVal = lootVal;
  save.inv = inv;
  save.interact1 = interact1;
  save.strength = strength;
  save.foeStrength = foeStrength;
  save.garyquests = garyquests;
  save.questMonitor = questMonitor;
  save.isBeaten = isBeaten
  localStorage.setItem("saves", JSON.stringify(save));
}
function loadSave() {
  const load = JSON.parse(localStorage.getItem("saves"));
  if (!load) return;

  load.foeval = 0;

  for (let x in load) {
    window[x] = load[x];
  }
  for (let i = 0; i < baddies.length; i++) {
    baddies.pop();
  }
  isPaused = true;
  document.getElementById("dayNight").style.backgroundColor =
    "rgba(0, 0, 0, 0.50)";
}
function stopMovement() {
  stopped = !stopped;
}
function moveLeft() {
  if (!isPaused) {
    if (gameLoop) {
      alert("Disabled");
    } else if (xpos > leftBound) {
      xpos -= 18;
      if (xpos > 240 && xpos < 348) {
        if (ypos > 294 && ypos < 348) {
          shopMenu();
        }
      }
      if (xpos === 240 && ypos === 420) {
        goToHome();
      }
      if (xpos === 7045 && ypos === 7495) {
        goHome();
      }
      moneyPoins += 0.1;
      Math.floor(moneyPoins);
    }
  }
}
function moveRight() {
  if (!isPaused) {
    if (gameLoop) {
      alert("Disabled");
    } else if (xpos < rightBound) {
      xpos += 18;
      if (xpos > 240 && xpos < 348) {
        if (ypos > 294 && ypos < 348) {
          shopMenu();
        }
      }
      if (xpos === 240 && ypos === 420) {
        goToHome();
      }
      if (xpos === 7045 && ypos === 7495) {
        goHome();
      }
      moneyPoins += 0.1;
      Math.floor(moneyPoins);
    }
  }
}
function moveUp() {
  if (!isPaused) {
    if (gameLoop) {
      alert("Disabled");
    } else if (ypos > upBound) {
      ypos -= 18;
      if (xpos > 240 && xpos < 348) {
        if (ypos > 294 && ypos < 348) {
          shopMenu();
        }
      }
      if (xpos === 240 && ypos === 420) {
        goToHome();
      }
      if (xpos === 7045 && ypos === 7495) {
        goHome();
      }
      moneyPoins += 0.1;
      Math.floor(moneyPoins);
    }
  }
}
function moveDown() {
  if (!isPaused) {
    if (gameLoop) {
      going2 = !going2;
    } else if (ypos < downBound) {
      ypos += 18;
      if (car) {
      }
      if (xpos > 240 && xpos < 348) {
        if (ypos > 294 && ypos < 348) {
          shopMenu();
        }
      }
      if (xpos === 240 && ypos === 420) {
        goToHome();
      }
      if (xpos === 7045 && ypos === 7495) {
        goHome();
      }
      moneyPoins += 0.1;
      Math.floor(moneyPoins);
    }
  }
}
function goToCave() {
  xpos = 5030;
  ypos = 24;
  leftBound = 5000;
  rightBound = 5300;
  downBound = 168;
}
function goToHome() {
  xpos = 7027;
  ypos = 7027;
  leftBound = 7000;
  rightBound = 7500;
  upBound = 7000;
  downBound = 7500;
  document.body.style.backgroundImage = "url(housedoodle.png)";
  atHome = true;
}
function goHome() {
  xpos = 150;
  ypos = 24;
  leftBound = 150;
  rightBound = 4000;
  upBound = 20;
  downBound = 4000;
  document.body.style.backgroundImage = "url(download.png)";
  gameLoop = false;
  atHome = false;
}
function gdMode() {
  xpos = 150;
  ypos = 9000;
  leftBound = 150;
  rightBound = 4000;
  upBound = 8960;
  downBound = 9010;
  gameLoop = true;
  document.body.style.backgroundImage = "url(level.png)";
}
function openInv() {
  alert(inv);
}
function shopMenu() {
  if (isDay) {
    whattobuy = prompt(
      `Stuff Available: Car, Health Potion, Damage Upgrade and These Items: ${forsale}`,
    );
    for (let i = 0; i < forsale.length; i++) {
      if (whattobuy === forsale[i]) {
        if (money >= weaponData[weaponData.indexOf(whattobuy) + 2]) {
          inv.push(forsale[i]);
          forsale.splice(i, 1);
          money -= weaponData[weaponData.indexOf(whattobuy) + 2];
        } else {
          alert("Not Enough Money");
        }
      }
      forsaleVal++;
    }
    forsaleVal = 0;
    if (whattobuy === "Health Potion") {
      if (money >= 20) {
        health += 10;
        money -= 20;
      } else {
        alert("Not Enough Money");
      }
    }
    if (whattobuy === "Damage Upgrade") {
      if (money >= 20) {
        strength++;
        money -= 20;
        alert("You now do 1 more damage per hit!");
      } else {
        alert("Not Enough Money");
      }
    }
    if (whattobuy === "Car") {
      if (money >= 500) {
        car = true;
        money -= 500;
      } else {
        alert("Not Enough Money");
      }
    }
  } else {
    alert("We're Closed!");
  }
}
/* Hehe..  Secret Coder Candy!
What is questing?
Play and find out!
 */
function sub() {
  // subscribed = true;
  // gdMode();
  // unused
}
function tickle() {
  if (anger === 0) {
    window.alert("That Tickles!");
    window.alert("Teeheehee!");
    window.alert("Gahaw-haw-haw!!!!!!!!!!");
  } else if (anger === 1) {
    window.alert("HAA!!!");
  } else if (anger === 2) {
    alert("Could you, like, stop?");
  } else if (anger === 3) {
    alert("STOP! Don't make me use my button magic!");
  } else if (anger === 4) {
    alert(
      "What do you want, a story? If you tickle me again, you are not gonna live happily ever after in my book!",
    );
  } else if (anger === 5) {
    alert(
      `Once upon a time, there was a button named Bob and a player named Boldilocks. Boldiloocks was a foolish teenager who loved to do unwise things. One day, she met Bob at ${xpos}, ${ypos} on the grid. Judging by the ${money} coins in her pocket, I knew I was gonna get tickled. I did get tickled, and then I decided to eat Boldilocks. Goodbye!`,
    );
    gameOver();
  }
  anger++;
}
function gameOver() {
  clearInterval(updater);
  document.body.style.backgroundImage = "url(Drawing.jpeg)";
}
