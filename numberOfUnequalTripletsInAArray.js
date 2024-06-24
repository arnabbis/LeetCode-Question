let nums = [4,4,2,4,3];
let count = [];
for(let i=0;i<nums.length;i++){
    for(let j=1;j<=nums.length;j++){
        for(let k=2;k<=nums.length;k++){
            if(nums[i]!==nums[j] && nums[i] != nums[k] && nums[j] != nums[k]){
                count.push([nums[i],nums[j],nums[k]])
            }
        }
    }
}

console.log(count)
