let nums = [2,0,2,1,1,0]

for(let i=0;i<nums.length;i++){
    if(nums[i]>nums[i+1]){
        let temp = nums[i];
        nums[i]=nums[i+1];
        nums[i+1]=temp;
        i=-1
    }
}

console.log(nums)