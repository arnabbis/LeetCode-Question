let nums = [2,2];
let arr = [];
if(nums[0]!==1){
    for(let i=0;i<nums.length;i++){
        if(nums[i]===nums[i+1]){
            arr.push(nums[i],nums[i]-1)
        }
    }
}else{
for(let i=0;i<nums.length;i++){
    if(nums[i]===nums[i+1]){
        arr.push(nums[i],nums[i]+1)
    }
};
}

console.log(arr)