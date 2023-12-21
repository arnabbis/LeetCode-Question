let num = [1,2,6,3,0,7,1,7,1,9,7,5,6,6,4,4,0,0,6,3];
let k = 516;

let change = num.toString();
let store = BigInt(change.split(',').join(''));
let changenum = BigInt(k)
let add = store+changenum;

console.log(add.toString().split(''))