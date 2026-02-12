const events = ["0 seconds - story starts", "15 minutes - princess messes with witch", "20 minutes - witch traps princess in tower", "6 years - The Big Bad Wolf and his brother Phil both die. (Goldie and Bear) (Fairytale)", "15 years - 3 little piigs die. (Goldie and Bear) (Fairytale)", "55 years - Hazel’s mom dies (Little Charmers)", "70 yrs 20 minutes - princess dies.", "70 years 25 days 20 minutes - princess releases 1600 g nitrogen, 500 g phosphorus, 200 g potassium, and 50 g magnesium, according to Wikipedia.", "81 years - Red Riding Hood, Goldie, Lavender, Posie, Hazel, Prince Lucas, and every other human child character dies (Goldie and Bear) (Little Charmers) (Fairytale) (Kingdom of Wrenly)", 
"90 years 25 days 20 minutes - bones fully decay, princess at this point: 1600 g nitrogen, 500 g phosphorus, 200 g potassium, 50 g magnesium, 3.3 g calcium phosphate, 3.3 g calcium carbonate, 3.3 g collagen, and 1.1 g water.", "100 years - dragons take over Wrenly due to there being no heroes. (Kingdom of Wrenly)", "120 years - mermaids go extinct due to a dragon overpopulation problem. (Kingdom of Wrenly)", "140 years - mermaids decay, releasing toxic mermaid gases into the atmosphere and water, decreasing population of certain fish. (Kingdom of Wrenly)", "300 years - dragons start hunting fairies, starting a fairy extinction. (Kingdom of Wrenly)", "800 years - fairies and elves go extinct. (Kingdom of Wrenly) (Ben and Holly)", "10^100 years - heat death (Real World) (REAL WORLD END)", 
"((10^1,480,000,000,000,000,000) + 82.5) years 25 days 20 minutes - new princess forms", 
"((10^1,480,000,000,000,000,000) + 82.5) years 25 days 40 minutes - new princess lives happily ever after."
];
let eventNo = 0;
function proceed() {
  document.getElementById("event").innerHTML = events[eventNo];
  if (eventNo >= events.length) {
    alert("Finished");
    document.getElementById("event").innerHTML = "We are done.";
  } else {
    eventNo++;
  }
}