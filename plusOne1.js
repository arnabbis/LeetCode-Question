let digits = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3];

let findNumber = BigInt(digits.join(''))+1n;
console.log(findNumber)

console.log(findNumber.toString().split('').map(ele=>parseInt(ele)));


