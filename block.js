

function css(id, property, amount) { 
  document.getElementById(id).style[property] = `${amount}px`; 
  }
  function createGround() {
    const platform = document.createElement("div");
    platform.classList.add("platforms");
  }