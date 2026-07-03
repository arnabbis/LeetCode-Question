// Move all zeros to the end while maintaining order.
let zeros = [0,1,0,3,12];

let slow = 0;

for(let fast=0;fast<zeros.length;fast++){
    if(zeros[fast]!==0){
        zeros[slow] = zeros[fast];
        slow ++;
    }
}
console.log(slow)
console.log(zeros);

while(slow<zeros.length){
    zeros[slow]=0;
    slow++
}

console.log(zeros)