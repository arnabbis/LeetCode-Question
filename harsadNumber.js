let x = 18;
let sum = 0
let digit = -1;
const findSum = x.toString().split('').map(Number).reduce((acc,curr)=>acc+curr,0);
if(x%findSum==0){
    digit=findSum
}

