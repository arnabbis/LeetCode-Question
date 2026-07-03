//Remove all occurrences of a value in-place.

let nums = [1,2,3,2,4,2,5,2];
let val = 5;

let slow = 0;

for(let fast=1;fast<nums.length;fast++){
    if(nums[fast]!==val){
        slow++;
        nums[slow]=nums[fast]
        console.log(nums)
    }
}
console.log(slow)
console.log(nums.slice(0,slow+1));