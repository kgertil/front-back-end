
/*  create variable */
var randomNumber1 = Math.floor((Math.random())*6)+ 1 ; //generate a random number between 1 - 6
var randomDice = "dice" + randomNumber1 + ".png"; // creat empty arrary to store dice images
var randomImages = "./images/" + randomDice; //add the correct image path for file

document.querySelectorAll(".img1")[0].setAttribute("src", randomImages );// set attribute

var randomNumber2 = Math.floor((Math.random())*6)+ 1 ; //generate a random number between 1 - 6
var randomDice2 = "dice" + randomNumber2 + ".png"; // creat empty arrary to store dice images
var randomImages2 = "./images/" + randomDice2; //add the correct image path for file

document.querySelectorAll(".img2")[0].setAttribute("src", randomImages2 );// set attribute

if (randomNumber1 > randomNumber2) {
document.querySelector("h1").innerHTML = "Player 1 Win's 🚩"  ; }
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Win's 🚩"  ;
} else if (randomNumber1 == randomNumber2){
    document.querySelector("h1"). innerHTML = " Draw !"
 }
