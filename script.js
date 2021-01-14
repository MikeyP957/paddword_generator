// Assignment Code
  var generateBtn = document.querySelector("#generate");
//Global variables
  //object that has all possible characters and a method that returns one random character
  var allCharacters = {
    //I broke these into two groups so that the arrays were more even in length
    letterLower : ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m"], 
    letterLowerSecond :["n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    letterUpper : ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M"],
    letterUpperSecond : [ "N", "O", "P", "Q", "R", "S", "T", "U", "I", "W", "X", "Y", "Z"],
    allDigits : ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
    specialCharacters : ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_"],
    specialCharactersSecond : ["=", "+", "[", "{", "]", "}", ";", ";", ":", "/", ",", ">", "<", "?"],
    randomCharacterMethod : function(){
      //all properties are in this array
        let allSelectedProperties = [this.letterLower, this.letterLowerSecond, 
          this.letterUpper, this.letterUpperSecond, this.allDigits, 
          this.specialCharacters, this.specialCharactersSecond];
      //a random property is chosen
        let randomSeclector = allSelectedProperties[Math.floor(Math.random()* allSelectedProperties.length)];
      //a random element of the chosen property
        let randomCharacter = randomSeclector[Math.floor(Math.random()* randomSeclector.length)];
      return randomCharacter
      }  
  };
  //An array where the password is stored
  var passwordCharacter = [];
  var passwordLength = Number;

//Functions  
   
function userInput(){  
  var userChoiceLength = prompt("How long do you want your password? (Choose a number between 8 and 128")
  var userChoiceLower = confirm("Do you want to include lowercase characters?")
  var userChoiceUpper = confirm("Do you want to include numbers?")
  var userChoiceDigits = confirm("Do you want to include numbers?")
  var userChoiceSpecial = confirm("Do you want to include special characters?")
  var options = {
    //change userChoiceLength to a number
    userChoiceLength: parseInt(userChoiceLength),
    userChoiceLower: userChoiceLower,
    userChoiceUpper: userChoiceUpper,
    userChoiceDigits: userChoiceDigits,
    userChoiceSpecial: userChoiceSpecial,
   }
  return options;
  };
  
  //This returns the users' choice length
  function userChosenLength () {
    let takeInput = userInput();
    let returnLength = takeInput.userChoiceLength
    return (returnLength);
  };
  passwordLength = userChosenLength();
  
  //pushes random characters to array
  //the loop is set to continue until the legnth that the use chose
  for (var i = 0; i < passwordLength; i++){
    passwordCharacter.push(allCharacters.randomCharacterMethod());
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
