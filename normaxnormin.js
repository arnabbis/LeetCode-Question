let nums = [3,2,1,4]
if(nums.length>2){
    nums = nums.sort((a,b)=>a-b)
    console.log(nums[1])
}else{
    console.log(-1)
}

