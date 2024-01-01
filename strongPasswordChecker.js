let password = "11A!A!Aa!"

let matchLength = false;
let foundUpper = false;
let foundLower = false;
let numberFound = false;
let foundSpecialCharacter = false;
let specialCharacters = "!@#$%^&*()-+";
let dubLetter = false; 

for (let i = 0; i < password.length; i++) {
    if (password[i] === password[i + 1]) {
        dubLetter = true;
        break;    
    } else if (password[i] >= 'A' && password[i] <= 'Z') {
        foundUpper = true;
    } else if (password[i] >= 'a' && password[i] <= 'z') {
        foundLower = true;
    } else if (!isNaN(parseInt(password[i]))) {
        numberFound = true;
    } else if (specialCharacters.includes(password[i])) {
        foundSpecialCharacter = true;
    } else if (password.length<8) {
        matchLength=true
    }
}

// Checking the conditions
if (matchLength || !foundUpper || !foundLower || !numberFound || !foundSpecialCharacter || dubLetter) {
    console.log(false); // Password does not meet the criteria
} else {
    console.log(true); // Password meets the criteria
}

