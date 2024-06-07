let nums = [1,2,2,1,1,0];

let arr = [];

for(let i=0;i<nums.length;i++){
    if(i < nums.length - 1 && nums[i]==nums[i+1]){
        nums[i] = nums[i]*2;
        nums[i+1] = 0;
    }
    if (nums[i] !== 0) {
        arr.push(nums[i]);
    }
}

while(arr.length<nums.length){
    arr.push(0)
}


console.log(arr)
