// Assignment code here
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

var upperArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowerArray = ["a", "b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w", "x", "y", "z"]
var numberArray = ["1","2","3","4","5","6","7","8","9"]
var specialArray = ["!","@","#","$","%","^","&"]

function passwordInput() {

  var charLength = parseInt(window.prompt("How long would you like your password to be? Please enter a numeric value. Min: 8 characters, Max: 128"));

  console.log(charLength);

  if (Number.isNaN(charLength)) {
    alert("You must enter a valid numeric value!");
    return null;
  }

  if (charLength < 8) {
    alert("You must enter a number greater than 8!")
    return null;
  }

  if (charLength > 128) {
    alert("You must enter a number less than 128")
    return null;
  }

  var upperConfirm = confirm("Would you like to use uppercase letters in your password? 'Ok' for YES. 'Cancel' for NO.");
  var lowerConfirm = confirm("Would you like to use lower letters in your password? 'Ok' for YES. 'Cancel' for NO.");
  var numberConfirm = confirm("Would you like to use numbers in your password? 'Ok' for YES. 'Cancel' for NO.");
  var specialConfirm = confirm("Would you like to use special characters in your password? 'Ok' for YES. 'Cancel' for NO.");

  if (upperConfirm === false && lowerConfirm === false && numberConfirm === false && specialConfirm === false) {
    alert("You must choose at least one character type to use!");
    return null;
  }

  var passwordOptions = {
    length: charLength,
    upper: upperConfirm,
    lower: lowerConfirm,
    number: numberConfirm,
    special: specialConfirm
  };

  return passwordOptions;
}

function random (array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  var randomEl = array[randomIndex];
  return randomEl
}

function generatePassword() {
  
  var input =  passwordInput();
  var array = [];
  var result = [];
  var charArray = [];
  
  if (!input) {
    return null;
  }

  if (input.upper) {
    array = array.concat(upperArray);
    charArray.push(random(upperArray));
  }

  if (input.lower) {
    array = array.concat(lowerArray);
    charArray.push(random(lowerArray));
  }

  if (input.number) {
    array = array.concat(numberArray);
    charArray.push(random(numberArray));
  }

  if (input.special) {
    array = array.concat(specialArray);
    charArray.push(random(specialArray));
  }

  for (let i = 0; i < input.length; i++) {
    var variety = random(array);
    result.push(variety);
  }

  for (let i = 0; i < charArray.length; i++) {
    result[i] = charArray[i]
  }

  return result.join("")
}