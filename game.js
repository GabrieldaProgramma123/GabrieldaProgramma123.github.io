const jokes = ["Two people walk into a bar. They snap back to reality affer coming into contact with the metal. They were drunk. Ow!",
 "Conjunction is too long of a word. We need to shorten it. If only someone made a word for that...  IN TEARS OF THE KIN wait, I'm not cdotkom",
  "Memories are like Post-It notes that tell you how things might have been and what could have happened. -Dylan Hanks",
   "What do you call a master cheese maker?  A cheez whiz!",
    "Your love is like sleep. I just can't get enough of it!",
     "What do you call a fitness routine based on jumping?  The trampo-lean!",
      "Red be actin MEGA SUS, did you see that?  He JUST VANTED IN FRUNT OF MY EYES!!!1!111!!!!!!1!!!!1!",
       "MOM GET THE CAMERA ITS SANTA CLAUS!!!1!11!1111111!!!!!!", 
       "#povthatonefreedartmonkeygettingthelastredbloononround100  HUHHHHHHH????????",
        "What do you call the favorite country of a pirate?  Arrrrrwanda!",
        "SUBSCRIBE TO MY YOUTUBE CHANNEL BRUH OH XD MOM GET THE CAMERAAAAAAAAA DORITOS FORTNITE MINECRAFT ROBLOX LETS GOOOOOOOOOOOOOOOO",
        "ur mom",
        "What do you call someone who doesn't want the Bloonchipper in BTD6?  Sabre, because Sabre = Bananas.", 
        "* awkward silence intensifies *", 
        "sobbin mathmatically in da club", 
        "Computers will neverl fully replace humans until they learn to laugh at the boss's jokes", 
        "You are the ; to my statements", 
        "POV: The article when two bodies are found on the side of the road after bar incident: Two guys walking into a hot spiky bar is not a very good idea. This article is a complete joke, and should not be taken seriously. I took a classic joke format and made it into a news article, Mom! Are you proud of me? Mom: Hey s-son, I’m p-proud of you, t-the thing is, m-my doctor said I was obese, so…  In the background: AAHHHHH!!!  Well, it looks like we have a new news article to make.                POV: The next day after the bar incident happens: Gargantuan crater appears when planet-size mother decides to sit down.      Calling your mother is never a good idea, especially when you are making jokes willy nilly. The moral of the story is: Don’t haphazardly make jokes everywhere, for you might turn into a joke.",];
        let wetness = 0;
        function funTime() {
            let joke = jokes[Math.floor(Math.random() * 19)];
            window.alert(joke);
        }
        function getRndInteger(min, max) {
            return Math.floor(Math.random() * (max - min + 1) ) + min;
          }
          setInterval(paintDry, 3000);
          function paintDry() {
            wetness = wetness + 1;
          }
          function checkDry() {
            if (wetness > 1000000000000) {
                window.alert('the paint is dry!');
            } else {
                window.alert('the paint is not dry.');
            }
          }
          function pressKey(){
            document.getElementById("key").innerHTML = "Press this button below to play and roll!"
        } 
        let score = 0;
function incrementScore(){
    score = score + 1;
}
function incrementScoreByFive(){
    score = score + 5;
}
function decrementScore(){
    score = score - 1;
}
function decrementScoreByFive(){
    score = score - 5;
}


function beginGame(){
    let x = Math.floor(Math.random() * 41);
    if (x > 32) {
        playGame();
    } else if (x < 5 ) {
        workGame();
    } else {
        window.alert('No score changes');
    }

}
function playGame(){
    let y = Math.floor(Math.random() * 51);
    if (y > 30) {
        incrementScoreByFive();
    } else if (y > 5) {
        incrementScore();
    } else {
        window.alert('hi from the developers');
    }

}
function workGame(){
    let z = Math.floor(Math.random() * 21);
    if (z > 17) {
        decrementScore();
    } else if (z > 2) {
        decrementScoreByFive();
    } else {
        secretScore();
    }
}
function secretScore(){
    let secret = Math.floor(Math.random() * 10001);
    if (secret > 1) {
        window.alert("There is a secret hidden around here...  Can you find it!");
    } else {
        lose("SECRET ENDING!", "YOU FOUND THE SECOND SUPER SECRET!");
    }
}
function checkScore() {
if(score > 50) {
    win();
} else if (score < -50) {
    lose("GAME OVER!", "YOU LOST THIS GAME!");
} else {
    window.alert('Nothing happened');
}
}
function displayScore() {
    document.getElementById('score').innerHTML = score;
}


function win() {
    window.alert('Amazing! You WIN!');
}
function lose(text1, text2) {
    window.alert(text1 + " " + text2 + " " + "CREDITS TO GABRIEL TENDER!");
}
