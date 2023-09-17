let nums = [4,5,6,7,0,1,2];
let target = 3

for(let i=0;i<nums.length;i++){
    if(nums[i]==target){
        console.log("give the index",i)
    }else{
        console.log(-1)
    }
}