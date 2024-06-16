nums = [4,2,5,9,7,4,8]
nums.sort((a,b)=>a-b);
console.log((nums[nums.length-1]*nums[nums.length-2])-(nums[0]*nums[1]))