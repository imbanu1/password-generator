// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz"; 
var numbers = "0123456789";
var specialCharacters = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

// 1. Series of prompts for password critera

function promptUser() {
var includeLowerCase = confirm("Do you want to include lowercase letters?");
var includeUpperCase = confirm("Do you want to include uppercase letters?");
var includeNumbers = confirm("Do you want to include numbers");
var includeSpecialChar = confirm("Do you want to include special characters?");
return{
    includeLowerCase: includeLowerCase,
    includeUpperCase: includeUpperCase,
    includeNumbers: includeNumbers,
    includeSpecialChar: includeSpecialChar
};
}

function generatePassword() {
    var password = "";

    // prompt user
    var passwordLength = prompt(" How long do you want your password? Password shoild be at least 8 characters and no more than 128 characters")

    // check password length
    if (passwordLength < 8 || passwordLength > 128) {
        alert("Invalid length. Password must be between 8 and 128 characters.");
    }
    //confirm whether or not to include ,lowercase, uppercase, numbers and/or special characters
    else {
       //select characters
    var characterSet = "";
    var userchoices = promptUser();

    if (userchoices.includeLowerCase) {
        characterSet += lowerCase;
    }
    if (userchoices.includeUpperCase) {
        characterSet += upperCase;
    }
    if (userchoices.includeNumbers) {
        characterSet += numbers;
    }
    if (userchoices.includeSpecialChar) {
        characterSet += specialCharacters;
    }

    for (var i = 0; i < passwordLength; i++) {
        var randomIndex = Math.floor(Math.random() * characterSet.length);
        password += characterSet[randomIndex];
    }
    // generate password
 
}
   
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