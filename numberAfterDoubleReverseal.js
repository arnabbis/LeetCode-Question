let num = 526;
let firstReverse = parseInt(num.toString().split('').reverse().map(Number).join(''),10);
let secondReverse = parseInt(firstReverse.toString().split('').reverse().map(Number).join(''),10);
if(num===secondReverse){
    
}