let s = "arnab"
let convertArray = s.split('');

let convert = convertArray[0].toUpperCase();

convertArray[0] = convert;

console.log(convertArray.join(''))
