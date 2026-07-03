let nums = [1,2,3,4,5,6,7];
let k = 3;
let window = 0;
for(let i=0;i<k;i++){
    if(nums[i]%2!==0){
        window++
    }
}
console.log(window);
let maxValue = window;
for(let i=k;i<nums.length;i++){
    if(nums[i-k]%2!==0){
        window--;
    }
    if(nums[i]%2!==0){
        window++;
    }
    maxValue = Math.max(window,maxValue);
}

console.log(maxValue);