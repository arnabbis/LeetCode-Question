let n = 10;
let m = 3;
let divisibleValue = 0;
let nonDivisibleValue = 0;
for(let i=1;i<=n;i++){
    if(i%m!==0){
        divisibleValue = divisibleValue+i
    }else{
        nonDivisibleValue = nonDivisibleValue+i
    }
}

console.log(divisibleValue);
console.log(nonDivisibleValue)

