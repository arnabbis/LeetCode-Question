// Check if a string reads the same forward and backward.

let string = "madame";

let left = 0;
let right = string.length-1;
let validPalindrom = true;

while(left<right){
    if(string[left]!==string[right]){
        validPalindrom= false;
        break;
    }
    left++;
    right--;
}

console.log(validPalindrom);