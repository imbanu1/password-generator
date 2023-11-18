// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz"; 
var numbers = "0123456789";
var specialCharacters = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

// 1. Series of prompts for password critera
// length of password shoild be at least 8 characters and no more than 128 characters
// confirm whether or not to include ,lowercase, uppercase, numbers and/or special characters
function promptUser() {

}

function generatePassword() {
    var password 

    // prompt user
    var passwordLength = prompt(" How long do you want your password?")

    // check password length
    if (passwordLength < 8 || passwordLength > 128) {
        alert("Invalid length")
    }

    //check lower, upper, numbers, special characters

    //select characters

    // generate password
    password = "Hello"
    return password;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);