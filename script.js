// Assignment Code

var numberArray =  ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialCharactersArray = [  '@',  '%',  '+',  '\\',  '/',  "'",  '!',  '#',  '$',  '^',  '?',  ':',  ',',  ')',  '(',  '}',  '{',  ']',  '[',  '~',  '-',  '_',  '.'];
var lowerCaseArray = [  'a',  'b',  'c',  'd',  'e',  "f",  'g',  'h',  'i',  'j',  'k',  'l',  'm',  'n',  'o',  'p',  'q',  'r',  's',  't',  'u',  'v',  'w',  'x',  'y',  'z'];
var upperCaseArray = [  'A',  'B',  'C',  'D',  'E',  "F",  'G',  'H',  'I',  'J',  'K',  'L',  'M',  'N', 'O',  'P',  'Q',  'R',  'S',  'R',  'U',  'V',  'W',  'X',  'Y',  'Z'];


function generatePassword(){
  var finalPasswordArray = []
  var characterPool = []
  var passwordLength = parseInt(prompt("How long would you like your password to be? Enter a number between 8 and 128."));
  var specialCharacters = confirm("Would you like to include special characters?")
  var numbers = confirm ("Would you like it to include numbers?")
  var upperCase = confirm("Would you like to include uppercase letters?")
  var lowerCase = confirm ("Would you like it to include lowercase letters?")
  
  if (!specialCharacters && !numbers && !upperCase && !lowerCase){
    alert("Error. Please select at least one character type. Will return 'undefined'.")
    return 
  }

  if (passwordLength < 8 || passwordLength > 128){
    alert("Error. Please enter a number between 8 and 128. Will return 'undefined'.")
    return
  }

  if (specialCharacters === true){
    characterPool = characterPool.concat(specialCharactersArray) 
  }
  if (numbers === true){
    characterPool = characterPool.concat(numberArray)
  }
  if (upperCase===true){
    characterPool = characterPool.concat(upperCaseArray)
  }
  if (lowerCase===true){
    characterPool = characterPool.concat(lowerCaseArray)
  }
  console.log(characterPool)

  for (var i = 0; i < passwordLength ; i ++) {

var randomIndex = Math.floor (Math.random()* characterPool.length)
var characterValue = characterPool[randomIndex]
finalPasswordArray.push(characterValue)

console.log(finalPasswordArray)

}
 console.log (finalPasswordArray)

  return finalPasswordArray = finalPasswordArray.join("");
  
}



var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
 
  var passwordText = document.querySelector("#password");


  passwordText.value = generatePassword();

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
