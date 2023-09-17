let nums = [1,2,4,3]
var containsDuplicate = function(nums) {
    let obj = {};
for(let i=0;i<nums.length;i++){
    if(obj[nums[i]]===undefined){
        obj[nums[i]]=1;
    }else{
        obj[nums[i]]++
    }
}
for(let key in obj){
    if(obj.hasOwnProperty(key) && obj[key]!==1){
        return false
    }
}
return true
};

console.log(containsDuplicate(nums))