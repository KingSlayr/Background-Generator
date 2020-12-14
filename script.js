var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var body = document.getElementById("gradient");
var current = document.getElementById("current");

body.style.background = "linear-gradient(to right, " + color1.value +"," + color2.value +")";
current.textContent = body.style.background + " ;";

color1.addEventListener("input",function() {
  body.style.background = "linear-gradient(to right, " + color1.value +"," + color2.value +")";
  current.textContent = body.style.background + " ;";
});

color2.addEventListener("input",function() {
  body.style.background = "linear-gradient(to right, " + color1.value +"," + color2.value +")";
  current.textContent = body.style.background + " ;";
});
