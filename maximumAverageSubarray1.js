let nums = [1,12,-5,-6,50,3];
let k = 4;

let window = 0;

for(let i=0;i<k;i++){
    window = window+nums[i];
}

let maxSum = window;

for(let i=k;i<nums.length;i++){
    window = window - nums[i-k] + nums[i];
    maxSum = Math.max(maxSum,window);
}

console.log(maxSum/k)