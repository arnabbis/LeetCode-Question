let num = 121
let devidedArr = [];

let changeToString = num.toString();

console.log(changeToString);


let splitString = changeToString.split('');
console.log("split string",splitString)
for(let i=0;i<splitString.length;i++){
    if(num%parseInt(splitString[i])==0){
        devidedArr.push(splitString[i])
    }
}

console.log(devidedArr.length)
