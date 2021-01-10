// Assignment Code
var generateBtn = document.querySelector("#generate");
//object that contains uppercase, lowercase, numbers, special cases
var character = {
  letterLower: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  letterUpper: toUpperCase(letterLower)
  allDigits: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  specialCharacters: ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "{", "]", "}", "", ";", ";", ":", "/", ",", ">", "<", "?"]

//possibly give the object a method that randomly outputs a letter,number or character
//use a random number generator to choose one of the properties
};

//use a random number generator to choose one of the properties
//ask the user how strong they want their password
//create that many by calling the object x many times(while loop or for loop?)
//or create an empty array, fill it with the random character and iterate the array

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
