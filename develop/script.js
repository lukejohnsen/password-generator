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

// generate password function

var lengthPromptAnswer = lengthPrompt()
console.log(lengthPrompt)

function generatePassword() {
  // length prompt
  lengthPrompt() {
    var charLength = window.prompt("How long would you like your password to be? Please enter a numeric value. Min: 8 characters, Max: 128");

    if (charLength < 7) {
      window.prompt("Password must be more than 7 characters!");
      return lengthPrompt();
    }

    else if (charLength > 129) {
      window.prompt("Password must be less than 129 characters!");
      return lengthPrompt();
    }

    else {
      return lengthPrompt();
    }
  }
}
