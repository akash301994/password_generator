// setting all variables needed for password criteria
var abcUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" ;
var abcLower = "abcdefghijklmnopqrstuvwxyz";
var num = "0123456789";
// var for special character set in criteria of assigment
var sym = "!#$%&\()*+,-./:;<=>?@^[\\]^_`{|}~";



var abcUpperArr = abcUpper.split("");
var abcLowerArr = abcLower.split("");
var numArr = num.split("");
var symArr = sym.split("");
 
function generatePassword() {
	var resultPass = "";
  var allChars = [];    
  
// set parameters for password  
  var Totlength = prompt("How many characters would you like your password to be?");  
  if(Totlength <8 || Totlength >128){
    alert("We recommend to have a password between 8 and 128 characters \nplease start over.");
  }

  else {
    if(confirm("Would you like your password to contain upper case letters?")){
      Array.prototype.push.apply(allChars, abcUpperArr);
    }

    if(confirm("Would you like your passoword to contain lower case letters?")){
      Array.prototype.push.apply(allChars, abcLowerArr);
    }

    if(confirm("Would you like your password to contain numbers?")){
      Array.prototype.push.apply(allChars, numArr);
    }

    if(confirm("Would you like your password to contain symbols?")){
      Array.prototype.push.apply(allChars, symArr);
    }

    if(allChars.length === 0){
      alert("You must select at lease 1 type of characters to generate a password!\nPlease start over.");
    
    return null;
    }
    
    else {
      for(var i=0; i<Totlength; i++) {
          var random = Math.floor(Math.random()*allChars.length);
          resultPass += allChars[random];
      }    
    	return resultPass;
    }
  } 
}

// Added a copy to clipboard button. also edited in the html
function copyPass(){
  var passwordTextArea = document.querySelector("#password")
  passwordTextArea.focus();
  passwordTextArea.select();
  document.execCommand("copy");
  alert("Password copied to clipboard!");
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var copyBtn = document.querySelector("#copy");

// implemented generatePassword
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;  
}

// Add event listener to generate button also added copy button
generateBtn.addEventListener("click", writePassword);  
copyBtn.addEventListener("click", copyPass);