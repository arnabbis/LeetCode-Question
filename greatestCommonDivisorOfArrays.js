let nums = [3,3];

let sort = nums.sort((a,b)=>a-b);

let lastNumber = nums[nums.length-1];


while(lastNumber>0){
    if(nums[0]%lastNumber==0 && nums[nums.length-1]%lastNumber==0){
        console.log(lastNumber);
        break;
    }
    lastNumber = lastNumber-1
}


console.log(lastNumber)