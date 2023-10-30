let nums = [2,3,-2,4]
let sub = [];
for(let i=0;i<nums.length;i++){
    console.log("every ele",nums[i])
    for(let j=i+1;j<=nums.length;j++){
       sub.push(nums.slice(i, j))
    }
}

console.log(sub)