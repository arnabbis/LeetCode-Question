let nums = [-1,2,-3,3];
let storeEle = [];
for(let i=0;i<nums.length;i++){
    if(nums[i]<0){
        nums[i]= -nums[i]
    }
}

for(let i=0;i<nums.length;i++){
    if(nums[i]==nums[i+1]){
        storeEle.push(nums[i])
    }
}

console.log(storeEle)
