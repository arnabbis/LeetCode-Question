let word = "a123bc34d8ef34";
let num = '0123456789';

let currentDigitLength = 0; // Track the length of consecutive digits

for (let i = 0; i < word.length; i++) {
    if (num.includes(word[i])) {
        currentDigitLength++; // Increment the length of consecutive digits
    } else {
        if (currentDigitLength > 0) {
            console.log(`Found ${currentDigitLength} consecutive digits`);
            currentDigitLength = 0; // Reset the count
        }
    }
}

// Check if there are consecutive digits at the end of the string
if (currentDigitLength > 0) {
    console.log(`Found ${currentDigitLength} consecutive digits`);
}
