let num = 38;
function addDigit(num){
let sum = 0;
if(num<10){
    return num;
}
let convertnum = num.toString();

let splitstring = convertnum.split('');

for(let i=0;i<splitstring.length;i++){
    sum = sum+parseInt(splitstring[i])
}
return addDigit(sum)
}

console.log(addDigit(num))
