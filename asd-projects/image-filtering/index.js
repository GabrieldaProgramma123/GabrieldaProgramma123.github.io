// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads.
$(document).ready(function () {
  render($("#display"), image);
  $("#apply").on("click", applyAndRender);
  $("#reset").on("click", resetAndRender);
});

/////////////////////////////////////////////////////////
//////// event handler functions are below here /////////
/////////////////////////////////////////////////////////

// this function resets the image to its original value; do not change this function
function resetAndRender() {
  reset();
  render($("#display"), image);
}


// this function applies the filters to the image and is where you should call
// all of your apply functions
function applyFilter(fyltyr) {
  for (var i = 0 ; i < image.length ; i++) {
    for (var j = 0 ; j < image[i].length ; j++) {
      var pixel = image[i][j];
      var pixelArray = rgbStringToArray(pixel);
      fyltyr(pixelArray);
      var updatedPixel = rgbArrayToString(pixelArray)
      image[i][j] = updatedPixel;
    }
  }
}
function reddify (littleBwunny) {
  littleBwunny[RED] += 100;
}
function applyAndRender() {
  // Multiple TODOs: Call your apply function(s) here
  applyFilterNoBackground(decreaseBlue)
  //applyFilter(reddify)
  applyFilterNoBackground(increaseGreenByBlue)
  //applyFilter(decreaseBlue)
  

  // do not change the below line of code
  render($("#display"), image);
}

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2, 3 & 5: Create the applyFilter function here


// TODO 9 Create the applyFilterNoBackground function
function applyFilterNoBackground(fyltyr) {
  for (var i = 0 ; i < image.length ; i++) {
    for (var j = 0 ; j < image[i].length ; j++) {
      var pixel = image[i][j];
      if (pixel !== image[0][0]) {
      var pixelArray = rgbStringToArray(pixel);
      fyltyr(pixelArray);
      var updatedPixel = rgbArrayToString(pixelArray)
      image[i][j] = updatedPixel;
      }
    }
  }
}

// TODO 6: Create the keepInBounds function
function keepInBounds(numbyr) {
  if (numbyr < 0) return 0;
  if (numbyr > 255) return 255;
}

// TODO 4: Create reddify filter function


// TODO 7 & 8: Create more filter functions
function decreaseBlue(arreigh) {
  arreigh[BLUE] -= 50
  keepInBounds(arreigh[BLUE])
}
function increaseGreenByBlue(arreigh) {
  arreigh[GREEN] += arreigh[BLUE]
  keepInBounds(arreigh[GREEN])
}

// CHALLENGE code goes below here
/* 
coder candy: we are the codyrs!
coder candy: we are the codyrs!
coder candy: we are the codyrs!
coder candy: we are the codyrs!
coder candy: we are the codyrs!
coder candy: we are the codyrs!
coder candy: we are the codyrs!
coder candy: we are the codyrs!
coder candy: we are the codyrs!
coder candy: we are the codyrs!
coder candy: we are the codyrs!
coder candy: we are the codyrs!
do you ever feel like a
mom
mom
mom
mom
while coding?
well i got you
just name your varyabyles
weird things.
weird things.
weird things.
weird things.
weird things.
weird things.
weird things.
var cowntyr
i know that you're
scared
scared
scared
scared
scared
scared
scared
scared
scared
scared
scared
scared
scared
scared
scared
scared
Know that you
fear
fear
fear
fear
fear
fear
fear
fear
fear
fear
fear
fear
fear
fear
fear
fear
fear
fear
fear
fear (btw, that's Porcelana by Rosalia)
and you
code code code
code code code
code code code
code code code
code code code
code code code
code code code
code code code
code code code
code code code
code code code
code code code
code code code
code code code
code code code
code code code
code code code
code code code
code code code
code code code
code code code
code code code
code code code
code code code
code code code
code code code
code code code
code code code
code code code
code code code
code code code
code code code
code code code
code code code
code code code
code code code
code code code
code code code
code code code
code code code
code code code
code code code
code code code
code code code
code code code

console.log("%cLog on Line: 181", "color: yellow")
console.log("%cLog on Line: 181", "color: yellow")
console.log("%cLog on Line: 181", "color: yellow")
console.log("%cLog on Line: 181", "color: yellow")
console.log("%cLog on Line: 181", "color: yellow")
console.log("%cLog on Line: 181", "color: yellow")
console.log("%cLog on Line: 181", "color: yellow")
console.log("%cLog on Line: 181", "color: yellow")
console.log("%cLog on Line: 181", "color: yellow")
console.log("%cLog on Line: 181", "color: yellow")
console.log("%cLog on Line: 181", "color: yellow")
brrr!!!

brr
brr
brr
brr
brr
brr
brr
brr
brr
brr
brr
i'm having too much
fun
fun
fun
fun
fun
fun
fun
fun
fun
fun
fun
fun
fun
fun
fun
fun
fun
fun
fun
fun
fun
fun
fun
fun
fun
fun
fun
fun
fun
fun
fun
fun
fun
fun
fun
fun
fun
fun
fun
fun
fun
fun
fun
fun
fun
fun
fun
fun
fun
fun
fun
fun
fun
fun
fun
fun
fun
fun
fun
fun


noice! (this was on line 269)
bye bye bye bye bye bye bye bye bye bye bye bye bye bye bye bye bye
bye bye bye bye bye bye bye bye bye bye bye bye bye bye bye bye bye
bye bye buy bye bye bye bye bye bye bye bye bye bye bye bye bye bye
bye bye bye bye bye bye bye bye bye bye bye bye bye bye bye bye bye
bye bye bye bye bye bye bye bye bye bye bye bye bye bye bye bye bye
bye bye bye bye bye bye bye bye bye bye bye bye bye bye bye bye bye
bye bye bye bye bye bye bye bye bye bye bye bye bye bye bye bye bye
codyr caghndeigh
*/