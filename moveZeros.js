let nums = [0,0,1];

let arr = [];


for(let i=0;i<nums.length;i++){
    if(nums[i]===0){
        arr.push(nums.splice(i,1)[0]);
        i--;
    }
}
console.log(arr)
for(let j=0;j<arr.length;j++){
    nums.push(arr[j])
}

console.log(nums)