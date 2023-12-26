let nums = [2,5,6,9,10]
let store = [];
let max = nums[0];
let min = nums[0];
for(let i=0;i<nums.length;i++){
    if(nums[i]>max){
        max = nums[i]
    }
    if(nums[i]<min){
        min = nums[i];
    }
}
store.push(min,max)
console.log(max)
console.log(min)
console.log(store)

let greatestCommonDivisor = 1;
for(let i=0;i<store.length-1;i++){
    if(store[i]%store[i+1]===0){
        greatestCommonDivisor=store[i]
    }
}

console.log(greatestCommonDivisor)