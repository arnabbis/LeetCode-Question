let nums = [1,2,10,5,7];
let count = 0;
for(let i=1;i<nums.length;i++){
    if(nums[i-1]>=nums[i]){
        count++;
        if(count>1){
            return false;
        }
        if(i>1 &&nums[i-2]>=nums[i]){
            nums[i] = nums[i-1];
        }
    }
}

if(count<=1){
    return true;
}
