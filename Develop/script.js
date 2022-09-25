// Assignment Code

function generatePassword(){

  var passwordLength = parseInt(prompt("How long would you like your password to be?"));
  
  var charSet = ["0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&**()ABCDEFGHIJKLMNOPQRSTUVWXYZ"];

  for (var i = 0; i < passwordLength ; i ++) {
      var randomNumber = Math.floor (Math.random() * charSet.length);
  }

  return password;
  
}


var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
