let num1 = 10;
let num2 = 10;
let operation = 0;

while(num1>0 && num2>0){
    if(num1>=num2){
        num1 = num1-num2
        operation = operation+1
    }else{
        num2 = num2-num1;
        operation = operation+1
    }
}

console.log(operation)
