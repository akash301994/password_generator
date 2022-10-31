// setting all variables needed for password criteria

var abcUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" ;
var abcUpperArr = abcUpper.split("");
var abcLower = "abcdefghijklmnopqrstuvwxyz";
var LowerArr = abcLower.split("");
var num = "0123456789";
var numArr = num.split("");
// var for special character set in criteria of assigment
var sym = "!#$%&\()*+,-./:;<=>?@^[\\]^_`{|}~";
var symArr = sym.split("");
 

// initial instruction for the user
window.onload = alert("Welcome! To begin please click 'Generate Password");


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
