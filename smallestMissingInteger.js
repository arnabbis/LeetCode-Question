let nums = [34];
let arr = [];
if(nums.length===1){
    arr.push(nums[0])
}
for(let i=1;i<nums.length;i++){
    if(nums[i]===nums[i-1]+1){
        arr.push(nums[i-1])
    }else{
        arr.push(nums[i-1]);
        break;
    }
    if(arr.length===nums.length-1){
        arr.push(nums[nums.length-1])
    }
}
let longestSum = arr.reduce((acc,curr)=>curr+acc,0);
while(nums.includes(longestSum)){
    longestSum++
}

console.log(longestSum)