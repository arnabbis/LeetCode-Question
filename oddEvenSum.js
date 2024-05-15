let n = 521;
let convertToString = n.toString().split('').map(Number);
console.log(convertToString)
let oddSum = 0;
let evenSum = 0;


for(let i=0;i<convertToString.length;i++){
    if(i%2==0){
        oddSum = oddSum + convertToString[i]
    }else{
        evenSum = evenSum+ convertToString[i]
    }
}

console.log(oddSum-evenSum)

