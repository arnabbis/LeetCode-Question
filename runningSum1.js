let nums = [3,1,2,10,1]
let sum = 0;
let arr = [];

for(let i=0;i<nums.length;i++){
    sum = sum + nums[i];
    arr.push(sum)
}


console.log(arr)