let nums = [5,5,5];
let k = 2;
let index = 0;
let count = 0;

let max = nums[0];

for(let i=0;i<nums.length;i++){
    if(nums[i]>max){
        max = nums[i];
        index = i
    }
}
console.log(index)
if(nums.includes(index)){
    nums[index]=max+k;
}

let sum = nums.reduce((acc,curr)=>curr+acc,0);
console.log(sum)




