var firstname = "jose"
var lastname = "alvarez"
var numberOfsiblings = 2;
var hasPets = true;

console.log(firstname);
console.log(lastname);
console.log(numberOfsiblings);
console.log(hasPets);

if(hasPets === true){
console.log("dogs are better than cats");

}
var  number = 0;
while (number < 15){
console.log("hi");
number++;

}

var button = document.getElementById("hi");
var body = document.body;

button.addEventListener("click", function(){
console.log("click");
body.setAttribute("style", "background-color: blue");


});