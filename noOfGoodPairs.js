let nums = [1,2,3];
let count = 0;
for(let i=0;i<nums.length;i++){
    for(let j=1;j<nums.length;j++){
        if(nums[i]==nums[j] && i<j){
            count = count+1
        }
    }
}

console.log(count)