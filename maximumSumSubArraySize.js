let nums = [2,1,5,1,3,2]
let k = 3;

let windowLength = 0;

for(let i=0;i<k;i++){
    windowLength = windowLength+nums[i]
};

let maxLength = windowLength;

for(let i=k;i<nums.length;i++){
    windowLength = windowLength + nums[i-k] + nums[i];
    maxLength = Math.max(maxLength,windowLength)
}

console.log(maxLength);
