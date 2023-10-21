let digits =[6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]
let convertToString = digits.toString();
console.log(convertToString)
let splitString = convertToString.split(',').join('')
console.log(splitString)
let addele = BigInt(splitString)+1n;
console.log(addele)
let changeStr = addele.toString();

let splitStr = changeStr.split('')

for(let i=0;i<splitStr.length;i++){
    splitStr[i]= parseInt(splitStr[i])
}

console.log(splitStr)
