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
window.onload = alert("Welcome! To begin please click ok");


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatepass(){
  var allCHars = [];
  var resultPass = "";
}

var Totlength = prompt("How many characters would you like your password to be?");

if(Totlength <8 || Totlength >128){
  alert("We recommend to have a password between 8 and 128 characters \nplease start over.");
}

else{
  if(confirm("would you like your password to contain upper case letters?")){
    Array.prototype.push.apply(AllChars, abcUpperArr);
  }

  if(confirm("would you like your passoword to contain lower case letters?")){
    Array.prototype.push.apply(AllChars, abcUpperArr);
  }

  if(confirm("would you like your password to contain numbers?")){
    Array.prototype.push.apply(allChars, abcUpperArr);
  }

  if(confirm("Would you like your password to contain symbols?")){
    Array.prototype.push.apply(allChars, symArr);
  }

  if(allChars.length===0){
    alert("You must select at lease 1 type of characters to generate a password!\nPlease start over.");
  }

  
  else{
    for(var i=0; i<Totlength; i++){
        var random = Math.floor(Math.random()*allChars.length);
        resultPass += allChars[random];
    }
}
}
  

        document.getElementById("password").innerHTML = resultPass;

        function writePassword() {
          var password = generatePassword();
          var passwordText = document.querySelector("#password");
        
          passwordText.value = password;
        
        }
        
        // Add event listener to generate button
        generateBtn.addEventListener("click", writePassword);
  

function copyPass(){

  document.querySelector("textarea").select();
  document.execCommand("Copy");
  alert("Password copied to clipboard!");
}
