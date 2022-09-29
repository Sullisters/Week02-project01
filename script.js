//global variables
var result = []
// arrays of numbers, specials, uppercase, lowercase
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var specials = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "F", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]


function generatePassword() {
    
    //  prompt user for length
    var answer = prompt("Please input a vaule of 8 or greater but no more than 128");
    
    // check length
    while (answer < 8 || answer > 128) {
        answer = prompt(
            "You have entered an incorrect variable, please choose a number between 8 and 128"
            )
        }
    
    // prompt/confirm for types of characters
    var lowercaseChar = confirm("Do you want to include lowercase letters?")
    var uppercaseChar = confirm("Do you want to include uppercase letters?")
    var numericChar = confirm("Do you want to include numeric characters?")
    var specialChar = confirm("Do you want to include special characters?")
    
    // based on the respones trim/build available pool of characters
    if (lowercaseChar === true) {
        result = result.concat(lowercase)
    }
    
    if (uppercaseChar === true) {
        result = result.concat(uppercase)
    }
    
    if (numericChar === true) {
        result = result.concat(numbers)
}

if (specialChar === true) {
    result = result.concat(specials)
}

var passwordEnd = ""

for (let i = 1; i <= answer; i++) {
    passwordEnd += result[Math.floor(Math.random() * result.length)]
}
console.log(passwordEnd)
return passwordEnd
}

// Get ref to the #generate element
var generateBtn = document.querySelector("#generate");

// write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}

// add event listener to generate button
generateBtn.addEventListener("click", writePassword);