let nums = [3,6,1,0]
;

let max = nums[0];
let maxIndex = 0;
let found = false;
for(let i=0;i<nums.length;i++){
    if(nums[i]>max){
        max = nums[i];
        maxIndex = i;
        nums.splice(i,1);
    }
}
console.log(max);

for(let i=0;i<nums.length;i++){
    if(nums[i]*2>max){
        found = true;
        break;
    }
}


console.log(found===true?-1:maxIndex)

