// Assignment Code
  var generateBtn = document.querySelector("#generate");
//Global variables
  //Each object contains all characters of that type and can return a random character
  var randomLower = {
    letterLower : ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    randomCharacterMethod : function(){
        //a random element of the chosen property
        let randomCharacter = this.letterLower[Math.floor(Math.random()* this.letterLower.length)];
      return randomCharacter
    }
  };
  var randomUpper = {
    letterUpper : ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "I", "W", "X", "Y", "Z"],
    randomCharacterMethod : function(){
        //a random element of the chosen property
        let randomCharacter = this.letterUpper[Math.floor(Math.random()* this.letterUpper.length)];
      return randomCharacter
    }
  };
  var randomDigit = {
    allDigits : ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
    randomCharacterMethod : function(){
        //a random element of the chosen property
        let randomCharacter = this.allDigits[Math.floor(Math.random()* this.allDigits.length)];
      return randomCharacter
    }
  };
  var randomSpecialCharacter = {
    allSpecialCharacters : ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "{", "]", "}", ";", ";", ":", "/", ",", ">", "<", "?"],
    randomCharacterMethod : function(){
        //a random element of the chosen property
        let randomCharacter = this.allSpecialCharacters[Math.floor(Math.random()* this.allSpecialCharacters.length)];
      return randomCharacter
    }
  };
 
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
  
//Takes user criteria and pushes each object into an array.
function meetUserCriteria(){
  let criteria = userCriteriaObj;
  let confirmedCriteria = [];
  
  if (criteria.userChoiceLower === true){
    confirmedCriteria.push(randomLower.letterLower)
  }  
  if (criteria.userChoiceUpper === true){
    confirmedCriteria.push(randomUpper.letterUpper)
  }
  if (criteria.userChoiceDigits === true){
    confirmedCriteria.push(randomDigit.allDigits)
  }
  if (criteria.userChoiceSpecial === true){
    confirmedCriteria.push(randomSpecialCharacter.allSpecialCharacters)
  }
  return confirmedCriteria
}

function randomizeAndPopulate(){
  meetUserCriteria()
  let scrableArray = meetUserCriteria()
  let randomArray = scrableArray[Math.floor(Math.random()* scrableArray.length)];
  let randomCharacter = randomArray[Math.floor(Math.random()* randomArray.length)];
  return randomCharacter
}
for (i = 0; i < passwordLength; i++){
  passwordArray.push(passwordCharacter)
}
// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
