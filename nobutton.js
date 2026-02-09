const newInput = document.createElement("input");
const newButton = document.createElement("button");
const newButton2 = document.createElement("button");
const newButton3 = document.createElement("button");
const newButton4 = document.createElement("button");
const newButton5 = document.createElement("button");
const buttonDeal = document.createElement("button");
const buttonUp = document.createElement("button");
const buttonMove = document.createElement("button");
const buttonMove2 = document.createElement("button");
const buttonView = document.createElement("button");
const draw = document.createElement("button");
const pmove = document.createElement("p");
const inputMove = document.createElement("input");
let startable = true;
let superClick;
let y = 0;
let buttsSpanked = 0;
let deadVal;
let kval = false;
let valueval;
let valcap;
let safe = true;
let BossHealth = 30;
let PlayerHealth = 50;
const equations = [];
let AtkDes;
let rndClick = 0;
let wildNum;
let handNum;
let iDeal = true;
let p1turn = true;
let p1move;
let p2move;
let handValue;
let drawNum = 0;
const wildCards = ["Wild Draw Four","Wild"];
const colorCards = ["9","8","7","6","5","4","3","2","1","0"];
const colors = ["Red","Blue","Green","Yellow"];
const p1hand = [];
const p2hand = [];
function stopBeats() {
  document.getElementById("backg").pause();
}
function startBeats() {
  if (startable === true) {
  document.getElementById("backg").play();
  } else {
    document.getElementById("backg").pause();
  }
}
function gameStart() {
    document.getElementById("backg").play();
    document.getElementById("evil").innerHTML = "I said, don't press the button!";
    document.getElementById("bigbutts").setAttribute("onclick", "game1()");
} function game1() {
    document.getElementById("evil").innerHTML = "Uhh!";
    document.getElementById("bigbutts").setAttribute("onclick", "game2()");
} function game2() {
    document.getElementById("evil").innerHTML = "Stop clicking!";
    document.getElementById("bigbutts").setAttribute("onclick", "game3()");
} function game3() {
    document.getElementById("evil").innerHTML = "How about this, what is your favorite thing?";
    valueval = document.getElementById("boxx").appendChild(newInput).value;
    document.getElementById("bigbutts").setAttribute("onclick", "game4()");
} function game4() {
     valueval = document.getElementById("boxx").appendChild(newInput).value;
     if (valueval === "") {
      strangeEnding2();
      valcap = document.getElementById("evil").innerHTML;
     } else if (valueval === "upupdowndownleftrightleftrightbastart") {
      document.getElementById("evil").innerHTML = `I hate the Konami code!`;
      valcap = document.getElementById("evil").innerHTML;
      document.getElementById("bigbutts").setAttribute("onclick", "game5()");
      kval = true;
     }
      else {
      document.getElementById("evil").innerHTML = `I hate ${valueval}`;
      valcap = document.getElementById("evil").innerHTML;
      document.getElementById("bigbutts").setAttribute("onclick", "game5()");
     }
} function game5() {
    document.getElementById("bodie").className = "baddy";
    document.getElementById("evil").innerHTML = valcap.toUpperCase();
    document.getElementById("bigbutts").setAttribute("onclick", "game6()");
} function game6() {
    document.getElementById("evil").innerHTML = "AND YOU";
    document.getElementById("bigbutts").setAttribute("onclick", "game7()");
} function game7() {
    document.getElementById("evil").innerHTML = "DON'T CLICK!";
    document.getElementById("bigbutts").setAttribute("onclick", "game8()");
} function game8() {
    document.getElementById("evil").innerHTML = "You want more?";
    document.getElementById("bigbutts").setAttribute("onclick", "game9()");
} function game9() {
    valueval = document.getElementById("boxx").appendChild(newInput).value;
    document.getElementById("evil").innerHTML = "I have more...";
    document.getElementById("bigbutts").setAttribute("onclick", "game10()");
} function game10() {
    document.getElementById("evil").innerHTML = "Here comes...";
    document.getElementById("bigbutts").setAttribute("onclick", "game11()");
} function game11() {
  if (valueval === "secretcode12345") {
    document.getElementById("evil").innerHTML = "MOMMY!";
    document.getElementById("bigbutts").setAttribute("onclick", "strangerEnding()");
  } else {
    document.getElementById("evil").innerHTML = "GANDAMORA!!!";
    if (kval === true) {
    document.getElementById("bigbutts").setAttribute("onclick", "FightWeird()");
    } else {
      document.getElementById("bigbutts").setAttribute("onclick", "Fight()");
    }
  }
}
function strangerEnding() {
  document.getElementById("myAudio").play();
    document.getElementById("bodie").className = "gove";
    document.getElementById("boxx").className = "gove2";
    document.getElementById("evil").innerHTML = "Fever Dream Ending? Ending 6?";
    document.getElementById("boxx").removeChild(document.getElementById("bigbutts"));
}
function Fight() {
    if (safe === true) {
        BossHealth -= 4;
        PlayerHealth += 4;
    } else {
        PlayerHealth -= 4;
    }
    document.getElementById("bossbar").innerHTML = `Boss Health: ${BossHealth}`;
    document.getElementById("healthbar").innerHTML = `Player Health: ${PlayerHealth}`;
    makeButtons();
    if (PlayerHealth <= 0) {
        gameOver();
    } if (BossHealth <= 0) {
        game12();
    }
}
function FightWeird() {
    if (safe === true) {
        BossHealth -= 4;
        PlayerHealth += 4;
    } else {
        PlayerHealth -= 4;
    }
    document.getElementById("bossbar").innerHTML = `Boss Health: ${BossHealth}`;
    document.getElementById("healthbar").innerHTML = `Player Health: ${PlayerHealth}`;
    makeButtons();
    if (PlayerHealth <= -100) {
        gameStartd();
    } if (BossHealth <= 0) {
        buttonsPressed();
    }
}
function makeButtons() {
    safe = false;
    rndClick = Math.floor(Math.random() * 3);
        if (rndClick === 1) {
        document.getElementById("boxx").appendChild(newButton).setAttribute("onclick", "safeTrue()");
        document.getElementById("boxx").appendChild(newButton).innerHTML = "baby";
        document.getElementById("boxx").appendChild(newButton2).setAttribute("onclick", "safeTrue()");
        document.getElementById("boxx").appendChild(newButton2).innerHTML = "baby";
        document.getElementById("boxx").appendChild(newButton3).setAttribute("onclick", "safeTrue()");
        document.getElementById("boxx").appendChild(newButton3).innerHTML = "baby";
        document.getElementById("boxx").appendChild(newButton4).setAttribute("onclick", "safeTrue()");
        document.getElementById("boxx").appendChild(newButton4).innerHTML = "baby";
        document.getElementById("boxx").appendChild(newButton5).setAttribute("onclick", "safeTrue()");
        document.getElementById("boxx").appendChild(newButton5).innerHTML = "baby";
        } else {
        document.getElementById("boxx").appendChild(newButton);
        document.getElementById("boxx").appendChild(newButton).innerHTML = "baby";
        document.getElementById("boxx").appendChild(newButton2);
        document.getElementById("boxx").appendChild(newButton2).innerHTML = "baby";
        document.getElementById("boxx").appendChild(newButton3);
        document.getElementById("boxx").appendChild(newButton3).innerHTML = "baby";
        document.getElementById("boxx").appendChild(newButton4);
        document.getElementById("boxx").appendChild(newButton4).innerHTML = "baby";
        document.getElementById("boxx").appendChild(newButton5);
        document.getElementById("boxx").appendChild(newButton5).innerHTML = "baby";
        }
}
function safeTrue() {
    safe = true;
}
function gameOver() {
  document.getElementById("backg").pause();
    document.getElementById("myAudio2").play();
    document.getElementById("bodie").className = "gove";
    document.getElementById("boxx").className = "gove";
    document.getElementById("evil").innerHTML = "Game Over";
    document.getElementById("bigbutts").setAttribute("onclick", "youLost()");
    startable = false;
}
function youLost() {
    window.alert("Must Suck to be You! Refresh!");
} function game12() {
    document.getElementById("evil").innerHTML = "Uhh! You're too strong!";
    document.getElementById("bigbutts").setAttribute("onclick", "game13()");
} function game13() {
    document.getElementById("evil").innerHTML = "You can go.";
    document.getElementById("bigbutts").setAttribute("onclick", "game14()");
} function game14() {
    document.getElementById("evil").innerHTML = "But actually...";
    document.getElementById("bigbutts").setAttribute("onclick", "game15()");
} function game15() {
    document.getElementById("evil").innerHTML = "I want to talk";
    document.getElementById("bigbutts").setAttribute("onclick", "game16()");
} function game16() {
    document.getElementById("evil").innerHTML = "But I'm still a little hyper...";
    document.getElementById("bigbutts").setAttribute("onclick", "game17()");
} function game17() {
    document.getElementById("evil").innerHTML = "How about we play...";
    document.getElementById("bigbutts").setAttribute("onclick", "game18()");
} function game18() {
    document.getElementById("evil").innerHTML = "UNO!";
    document.getElementById("bigbutts").setAttribute("onclick", "game19()");
} function game19() {
    document.getElementById("evil").innerHTML = "Let's Go!";
    document.getElementById("bigbutts").setAttribute("onclick", "game20()");
}
function game20() {
  document.getElementById("boxx").appendChild(buttonUp).setAttribute("onclick", "turnUp()");;
  document.getElementById("boxx").appendChild(buttonUp).innerHTML = "start";
  document.getElementById("boxx").appendChild(buttonDeal).setAttribute("onclick", "dealCards()");
  document.getElementById("boxx").appendChild(buttonDeal).innerHTML = "deal";
  document.getElementById("boxx").appendChild(inputMove).setAttribute("id", "cardplayed1");
  document.getElementById("boxx").appendChild(pmove).setAttribute("id", "move");
  document.getElementById("boxx").appendChild(draw).setAttribute("onclick", "drawCards()");
  document.getElementById("boxx").appendChild(draw).innerHTML = "draw";
  document.getElementById("boxx").appendChild(buttonView).setAttribute("onclick", "viewP1Hand()");
  document.getElementById("boxx").appendChild(buttonView).innerHTML = "view hand";
  document.getElementById("boxx").appendChild(buttonMove).setAttribute("onclick", "play()");
  document.getElementById("boxx").appendChild(buttonMove).innerHTML = "play";
  document.getElementById("boxx").appendChild(buttonMove2).setAttribute("onclick", "play2()");
  document.getElementById("boxx").appendChild(buttonMove2).innerHTML = "get me to respond, i'm bored after battling.";

}
function youWin() {
   window.alert("From Gabe Studios, Great Job! Refresh to Play Again!");
    document.getElementById("evil").innetHTML = ("I give up! Credit to Gabe Studios!");
     document.getElementById("bigbutts").setAttribute("onclick", "youWin()");
}
function checkTurn() {
  if (p1turn) {
    document.getElementById("turn").innerHTML = "p1 turn";
  } else {
    document.getElementById("turn").innerHTML = "p2 turn";
  }
}
function drawCard() {
handNum = colors[Math.floor(Math.random() * 4)] + " " + colorCards[Math.floor(Math.random() * 10)];
return handNum;
}

function dealCards(){
  for (let i = 0; i < 7; i++) {
    p1hand.push(drawCard());
    p2hand.push(drawCard());
  }
}
function drawCards(){
  
    p1hand.push(drawCard());
    p2hand.push(drawCard());
  
}
function viewP1Hand() {
  document.getElementById("healthbar").innerHTML = ("YOU: " + p1hand);
  document.getElementById("bossbar").innerHTML = "BOSS" + p2hand;
}
function viewP2Hand() {
  window.alert(p2hand);
}
function play() {
  let x = 0;
  if(p1turn){
    //play the card
  p1move = document.getElementById("cardplayed1").value;
    handValue = (p1hand[p1move - 1]);
    //special card functions
      //colors
      if(document.getElementById("move").innerHTML.includes("Red")){
        if(handValue.includes("Red")){
          document.getElementById("move").innerHTML = handValue;
    p1hand.splice((p1move - 1), 0);
          p1turn = false;
          
        }
      } else if (true) {
        for(let i = 0; i < 9; i++) {
            if (document.getElementById("move").innerHTML.includes(`${x}`)) {
              if (handValue.includes(`${x}`)) {
                document.getElementById("move").innerHTML = handValue;
                p1hand.splice((p1move - 1), 0);
                p1turn = false;
                
                  }
            }
          x++;
        }
    }
        if(document.getElementById("move").innerHTML.includes("Yellow")){
        if(handValue.includes("Yellow")){
          document.getElementById("move").innerHTML = handValue;
    p1hand.splice((p1move - 1), 0);
          p1turn = false;
          
        } 
      } else if (true) {
        for(let i = 0; i < 9; i++) {
            if (document.getElementById("move").innerHTML.includes(`${x}`)) {
              if (handValue.includes(`${x}`)) {
                document.getElementById("move").innerHTML = handValue;
                p1hand.splice((p1move - 1), 0);
                p1turn = false;
                
                  }
            }
          x++;
            }
        }
        if(document.getElementById("move").innerHTML.includes("Green")){
        if(handValue.includes("Green")){
          document.getElementById("move").innerHTML = handValue;
    p1hand.splice((p1move - 1), 0);
          p1turn = false;
          
        } 
      } else if (true) {
        for(let i = 0; i < 9; i++) {
            if (document.getElementById("move").innerHTML.includes(`${x}`)) {
              if (handValue.includes(`${x}`)) {
                document.getElementById("move").innerHTML = handValue;
                p1hand.splice((p1move - 1), 0);
                p1turn = false;
                
                  }
            }
          x++;
            }
        }
        if(document.getElementById("move").innerHTML.includes("Blue")){
        if (handValue.includes("Blue")){
          document.getElementById("move").innerHTML = handValue;
    p1hand.splice((p1move - 1), 0);
          p1turn = false;
          
        } 
      } else if (true) {
        for(let i = 0; i < 9; i++) {
            if (document.getElementById("move").innerHTML.includes(`${x}`)) {
              if (handValue.includes(`${x}`)) {
                document.getElementById("move").innerHTML = handValue;
                p1hand.splice((p1move - 1),0);
                p1turn = false;
                
                  }
            }
          x++;
            }
      }
     drawNum = 0;
      }
      if (p1hand.length === 0) {
        game21();
        
  } else if (p1hand.length > 100) {
    strangeEnding();
  }
  if (rndClick !== 1) {
    gameOver();
  }
      viewP1Hand();
      }

    

function play2() {
  let x = 0;
   if(true){
    //play the card
    AtkDes = p2hand;
    p2move = Math.floor(Math.random() * p2hand.length);
    handValue = p2hand[Math.floor(Math.random() * p2hand.length)];
   }
      //colors
      if(document.getElementById("move").innerHTML.includes("Red")){
        if(handValue.includes("Red")){
          document.getElementById("move").innerHTML = handValue;
    p2hand.splice((p2move - 1), 0);
          p1turn = true;
          
        } else {
          y++
        }
      } else if (true) {
        for(let i = 0; i < 9; i++) {
            if (document.getElementById("move").innerHTML.includes(`${x}`)) {
              if (handValue.includes(`${x}`)) {
                document.getElementById("move").innerHTML = handValue;
                p2hand.splice((p2move - 1), 0);
                p1turn = true;
                
                  } else {
                    y++;
                  }
            }
          x++;
            }
      }
         if(document.getElementById("move").innerHTML.includes("Yellow")){
        if(handValue.includes("Yellow")){
          document.getElementById("move").innerHTML = handValue;
    p2hand.splice((p2move - 1), 0);
          p1turn = true;
          
        } else {
          y++;
        }
      } else if (true) {
        for(let i = 0; i < 9; i++) {
            if (document.getElementById("move").innerHTML.includes(`${x}`)) {
              if (handValue.includes(`${x}`)) {
                document.getElementById("move").innerHTML = handValue;
                p2hand.splice((p2move - 1), 0);
                p1turn = true;
                
                  } else {
                    y++;
                  }
            }
          x++;
            }
      }
       if(document.getElementById("move").innerHTML.includes("Green")){
        if(handValue.includes("Green")){
          document.getElementById("move").innerHTML = handValue;
    p2hand.splice((p2move - 1), 0);
          p1turn = true;
          
        } else {
          y++;
        }
      } else if (true) {
        for(let i = 0; i < 9; i++) {
            if (document.getElementById("move").innerHTML.includes(`${x}`)) {
              if (handValue.includes(`${x}`)) {
                document.getElementById("move").innerHTML = handValue;
                p2hand.splice((p2move - 1), 0);
                p1turn = true;
                
                  } else {
                    y++
                  }
            }
          x++;
            }
      }
       if(document.getElementById("move").innerHTML.includes("Blue")){
        if(handValue.includes("Blue")){
          document.getElementById("move").innerHTML = handValue;
    p2hand.splice((p2move - 1), 0);
          p1turn = true;
          
        } else {
          y++;
        }
      } else if (true) {
        for(let i = 0; i < 9; i++) {
            if (document.getElementById("move").innerHTML.includes(`${x}`)) {
              if (handValue.includes(`${x}`)) {
                document.getElementById("move").innerHTML = handValue;
                p2hand.splice((p2move - 1), 0);
                p1turn = true;
                
                  } else {
                    y++;
                  }
            }
          x++;
            }
      }
      if (p2hand.length === 0) {
    gameOver();
  } /*else if (y > 0) {
    play2();
  }*/
     drawNum = 0;
     viewP1Hand();
     y = 0;
     
}
function special(x) {
  if (x === true) {
    //p1 cards
  if (handValue.includes("Reverse")) {
      p1turn = true;
    } else if (handValue.includes("Skip")){
        p1turn = true;
    } else if (handValue.includes("Draw Two")){
      for (let i = 0; i < 2; i++) {
        p2hand.push(drawCard());
        p1turn = true;
        drawNum++
      }
    }
  }
  if (x === false) {
  if (handValue.includes("Reverse")) {
        p1turn = false;
    } else if (handValue.includes("Skip")){
        p1turn = false;
    } else if (handValue.includes("Draw Two")){
      for (let i = 0; i < 2; i++) {
        p1hand.push(drawCard());
        p1turn = false;
        drawNum++;
      }
    }
  }
}
function turnUp() {
  document.getElementById("move").innerHTML = drawCard();
  rndClick = 1;
}
function game21() {
    document.getElementById("evil").innerHTML = "You got me!";
    document.getElementById("bigbutts").setAttribute("onclick", "game22()");
} function game22() {
    document.getElementById("evil").innerHTML = "Ooh, I feel good!";
    document.getElementById("bigbutts").setAttribute("onclick", "game23()");
} function game23() {
    document.getElementById("evil").innerHTML = "Almost like I could fight you right here and now!";
    document.getElementById("bigbutts").setAttribute("onclick", "game24()");
} function game24() {
    document.getElementById("evil").innerHTML = "I'm comin, watch out!";
    document.getElementById("bodie").className = "finalFight";
    document.getElementById("bigbutts").setAttribute("onclick", "Fight2()");
    BossHealth = 250;
    PlayerHealth = 180;
}
function Fight2() {
    if (safe === true) {
        BossHealth -= 4;
        PlayerHealth += 4;
    } else {
        PlayerHealth -= 5;
    }
    document.getElementById("bossbar").innerHTML = `Boss Health: ${BossHealth}`;
    document.getElementById("healthbar").innerHTML = `Player Health: ${PlayerHealth}`;
    makeButtons();
    if (PlayerHealth <= 0) {
        gameOver();
    } if (BossHealth <= 0) {
        youWin();
    }
}
function strangeEnding() {
  document.getElementById("evil").innerHTML = "What happened? Are you a card hog?";
    document.getElementById("bigbutts").setAttribute("onclick", "ending2()");
}
function strangeEnding2() {
  document.getElementById("evil").innerHTML = "You can't just leave it empty!";
    document.getElementById("bigbutts").setAttribute("onclick", "ending()");
}
function ending2() {
    document.getElementById("bodie").className = "gove";
    document.getElementById("evil").innerHTML = "Ending 2: Strange Ending.";
    document.getElementById("bigbutts").setAttribute("onclick", "ending2()");
}
function ending() {
    document.getElementById("bodie").className = "gove";
    document.getElementById("evil").innerHTML = "Ending 1: Ending Left Blank.";
    document.getElementById("bigbutts").setAttribute("onclick", "ending()");
}
function deadEnding() {
  document.getElementById("bodie").className = "gove";
    document.getElementById("evil").innerHTML = "Ending 3: Dead Ending";
    document.getElementById("bigbutts").setAttribute("onclick", "deadEnding()");
}
function lazyEnding() {
  document.getElementById("bodie").className = "gove";
    document.getElementById("evil").innerHTML = "Ending 4: Lazy Ending";
    document.getElementById("bigbutts").setAttribute("onclick", "lazyEnding()");
}
function lazyEnding1() {
  document.getElementById("bodie").className = "gove";
    document.getElementById("bigbutts").setAttribute("onclick", "lazyEnding()");
}
function gameStartd() {
    document.getElementById("bodie").className = "cools";
    document.getElementById("evil").innerHTML = "don't press the button!";
    document.getElementById("bigbutts").setAttribute("onclick", "game1d()");
} function game1d() {
    document.getElementById("evil").innerHTML = "Uhh!";
    document.getElementById("bigbutts").setAttribute("onclick", "game2d()");
} function game2d() {
    document.getElementById("evil").innerHTML = "How did you get back here? Are you dead?";
    document.getElementById("bigbutts").setAttribute("onclick", "game3d()");
} function game3d() {
    document.getElementById("evil").innerHTML = "How about this, what is your favorite thing?";
    valueval = document.getElementById("boxx").appendChild(newInput).value;
    document.getElementById("bigbutts").setAttribute("onclick", "game4d()");
} function game4d() {
     valueval = document.getElementById("boxx").appendChild(newInput).value;
     if (valueval === "") {
      strangeEnding2();
      valcap = document.getElementById("evil").innerHTML;
     } else if (valueval === "upupdowndownleftrightleftrightbastart") {
      document.getElementById("evil").innerHTML = `Are you being lazy? You didn't even change it!`;
      valcap = document.getElementById("evil").innerHTML;
      document.getElementById("bigbutts").setAttribute("onclick", "lazyEnding1()");
     }
      else {
      document.getElementById("evil").innerHTML = `I hate ${valueval}`;
      valcap = document.getElementById("evil").innerHTML;
      document.getElementById("bigbutts").setAttribute("onclick", "game5d()");
     }
} function game5d() {
    document.getElementById("bodie").className = "baddy";
    document.getElementById("evil").innerHTML = valcap.toUpperCase();
    document.getElementById("bigbutts").setAttribute("onclick", "game6d()");
} function game6d() {
    document.getElementById("evil").innerHTML = "But I honestly don't";
    document.getElementById("bigbutts").setAttribute("onclick", "game7d()");
} function game7d() {
    document.getElementById("evil").innerHTML = "My name is Gandamora Anna Elizabeth Buttonmasher";
    document.getElementById("bigbutts").setAttribute("onclick", "game8d()");
} function game8d() {
    document.getElementById("evil").innerHTML = "Ahh... peeace";
    document.getElementById("bigbutts").setAttribute("onclick", "game9d()");
} function game9d() {
    document.getElementById("evil").innerHTML = "SInce he's dead I can go on that date";
    document.getElementById("bigbutts").setAttribute("onclick", "game10d()");
} function game10d() {
    document.getElementById("evil").innerHTML = "Oh, you want an ending?";
    document.getElementById("bigbutts").setAttribute("onclick", "game11d()");
} function game11d() {
    document.getElementById("evil").innerHTML = "Boop!";
    document.getElementById("bigbutts").setAttribute("onclick", "deadEnding()");
    }
function buttonsPressed() {
  document.getElementById("evil").innerHTML = "You are a master of button mashing...";
    document.getElementById("bigbutts").setAttribute("onclick", "Challenge()");
}
function Challenge() {
  document.getElementById("evil").innerHTML = "How about we see how many buttons you can press";
    document.getElementById("bigbutts").setAttribute("onclick", "hitButt()");
}
function Click() {
  hitButt();
  superClick = Math.floor(Math.random() * 1000);
  if (superClick === 1) {
    endCookies();
  }
  }
function hitButt() {
  buttsSpanked++;
  document.getElementById("bossbar").innerHTML = buttsSpanked;
  if (buttsSpanked > 100) {
    document.getElementById("evil").innerHTML = "Impressive! ";
    document.getElementById("bigbutts").setAttribute("onclick", "Click()");
  }
}
function endCookies() {
  document.getElementById("evil").innerHTML = `Ending 5: ${buttsSpanked} buttons ending`;
    document.getElementById("bigbutts").setAttribute("onclick", "endCookies()");
    document.getElementById("bodie").className = "gove";
    document.getElementById("boxx").className = "gove";

}
