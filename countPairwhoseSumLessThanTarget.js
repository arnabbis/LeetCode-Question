let nums = [-6,2,5,-2,-7,-1,3];
let target = -2;
let count = 0;

for(let i=0;i<nums.length;i++){
    for(let j=1;j<=nums.length;j++){
        if(nums[i]+nums[j]<target){
            count++
        }
    }
}

console.log(count)