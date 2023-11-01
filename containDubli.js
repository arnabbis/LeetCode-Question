let nums = [1,2,3,1,2,3];
let  k = 2;
let ele = [];

for(let i=0;i<nums.length;i++){
    for(let j=i+1;j<nums.length;j++){
        if(nums[i]==nums[j] && Math.abs(i-j)==k){
            ele.push(i,j)
        }
    }
}
console.log(ele);
