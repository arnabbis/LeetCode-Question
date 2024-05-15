let nums = [6,5,4,8]
let array = [];
function findNumber(num){
    let count = 0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]<num){
            count++
        }
    }
    return count
}


for(let i=0;i<nums.length;i++){
    array.push(findNumber(nums[i]))
}

console.log(array)