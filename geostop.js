const totalItems = []
const ourItems = localStorage.getItem("theItems")
let price1;
let item1;
let p1;
let i1;
let text = "";
function addItem() {
  price1 = (document.getElementById("price").value) / 100;
  item1 = (document.getElementById("item").value);
  p1 = price1.toString();
  i1 = item1.toString();
  totalItems.push(`${i1} for $${p1}`);
  window.alert('Item Added.');
}
function saveItems() {
  localStorage.setItem("theItems", (totalItems));
  window.alert('Changes Published.');
}
for (let i = 0; i < ourItems.length; i++) {
  text += ourItems[i];
}
function seeItems() {
document.getElementById("productItems").innerHTML = text;
}
function killCart() {
  localStorage.clear();
}

