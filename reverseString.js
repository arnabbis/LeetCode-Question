// Reverse a string in-place.

let a = "arman";
let splitArr = a.split('');
let left = 0;
let right = a.length-1;

while(left<right){
    let temp = splitArr[left];
    splitArr[left] = splitArr[right];
    splitArr[right] = temp;
    left++;
    right--;
}

console.log(splitArr.join(''));