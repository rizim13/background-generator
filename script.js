ar _ = require('lodash');
var array = [1, 2, 3, 4, 3, 9 ,7];
console.log('answer: ', _.without(array, 3));



var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var random = document.querySelector(".random");

var body = document.getElementById('bgradient');

function setRandomGradient() {
body.style.background =
"linear-gradient(to right, " 
+ "rgb(" + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ")"
+ ", "
+ "rgb(" + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ")"
+ ")";
}




function setGradient() {
	body.style.background = 
	"linear-gradient(to right, "
	 + color1.value 
	 + ", " 
	 +  color2.value 
	 + ")";



	 css.textContent = body.style.background + ";" ;
	
}


color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);
random.addEventListener("click", setRandomGradient);


