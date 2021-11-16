// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  if(!password) return
  passwordText.value = password;

}

// Add event listener to generate button
// Deleted generate button command

var lowercase = "abcdefghijklmnopqrstuvxyz"
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVXYZ"
var numbers = "0123456789"
// added "☺☻♥" to special any way
var special = "!@#$%^&*()_+-={}[]';/.,><:|☺☻♥"

// var alt = "☺☻♥"
// Tried alt codes, couldn't get it to work :(

function generatePassword() {
  var PWCharacters = ""
  var PW = ""

  var PWSize = prompt("Define password length.", "24")
  if(!PWSize) return

  if(isNaN(PWSize)) {
    alert("Please only enter a number.")
    return
  }


// Checking if PW meets 8 character minimum
if(PWSize < 8) {
  alert("The password must be atleast 8 characters long.")
  return

}
// Checking if PW exceeds 128 character minimum
if(PWSize > 128) {
  alert("The password may not be longer than 128 characters.")
  return
}

var UppercaseAnswer = confirm("Would you like uppercase characters?")
if(UppercaseAnswer) PWCharacters += uppercase

var SpecialAnswer = confirm("Would you like special characters?")
if(SpecialAnswer) PWCharacters += special

var LowercaseAnswer = confirm("Would you like lowercase characters?")
if(LowercaseAnswer) PWCharacters += lowercase

var NumericAnswer = confirm("Would you like numeric characters?")
if(NumericAnswer) PWCharacters += numbers

if(PWCharacters.length == 0) {
  alert("You must approve at least one character type.")
  return
}

while(PW.length < PWSize) {
  PW += PWCharacters.charAt(Math.floor(Math.random() * PWCharacters.length));
  }

return PW
}


generateBtn.addEventListener("click", writePassword);
