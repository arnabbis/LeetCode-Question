let n = 14;
let x = n-1;
let divisibleNumber = [2,3,5]
let value = true;
while(x>1){
    if(n%x==0 && !divisibleNumber.includes(x)){
        value = false;
        break;
    }
    x = x-1
}

console.log(value)