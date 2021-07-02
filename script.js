// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Declaration of the variables that will be used to generate a random password
const lowerChar = "abcdefghijklmnopqrstuvwxyz";
const upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberChar = "0123456789";
const specialChar = "@#$%^&*()_+[]<>?{}-=/";

// Functions for creating random characters
function getRandomLower() {
  return lowerChar.charAt(Math.ceil(Math.random() * lowerChar.length));
}
function getRandomUpper() {
  return upperChar.charAt(Math.ceil(Math.random() * upperChar.length));
}
function getRandomNumber() {
  return numberChar.charAt(Math.ceil(Math.random() * numberChar.length));
}
function getRandomSymbol() {
  return specialChar.charAt(Math.ceil(Math.random() * specialChar.length));
}

function generatePassword() {
  let passLength = prompt(
    "Choose a password length of at least 8 characters and no more than 128 characters"
  );

  // Validates if the user enters a valid input.
  if (
    parseInt(passLength) < 8 ||
    parseInt(passLength) > 128 ||
    isNaN(passLength) ||
    passLength === "null" ||
    passLength === null ||
    passLength.trim() === ""
  ) {
    alert("Invalid input. You must enter a number from 8 to 128 only.");
  } else {
    // Check to see if the choices are true or false
    let isLowercase = confirm("Do you want to include LOWERCASE character?");
    let isUppercase = confirm("Do you want to include UPPERCASE character?");
    let isNumeric = confirm("Do you want to include NUMERIC character?");
    let isSpecialChar = confirm("Do you want to include SPECIAL CHARACTERS?");

    return processPasswordGenerator(
      passLength,
      isLowercase,
      isUppercase,
      isNumeric,
      isSpecialChar
    );
  }
}

// This function handles the creation of random password based on user's choices
function processPasswordGenerator(length, lower, upper, numeric, symbol) {
  let tempPass = "";

  for (let counter = 1; counter <= length; counter++) {
    tempPass += lower ? getRandomLower() : "";
    tempPass += upper ? getRandomUpper() : "";
    tempPass += numeric ? getRandomNumber() : "";
    tempPass += symbol ? getRandomSymbol() : "";
  }

  return tempPass
    .slice(0, length)
    .split("")
    .sort(() => {
      Math.random() * -0.5;
    })
    .join("");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
