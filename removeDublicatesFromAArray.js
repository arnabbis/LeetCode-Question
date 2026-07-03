// Remove duplicates without using extra space.
let a = [1,2,2,3,4];
// let map = new Map();
// for(let i=0;i<data.length;i++){
//     if(!map.has(data[i])){
//         map.set(data[i],1);
//     }
// }

// console.log(map.keys());


let slow = 0;

for(let fast=1;fast<a.length;fast++){
    if(a[fast]!==a[slow]){
        slow++;
        a[slow] = a[fast];
        console.log(a)
    }
}
console.log(slow);
console.log(a.slice(0,slow+1))  