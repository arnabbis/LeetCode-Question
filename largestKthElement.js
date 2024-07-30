let nums = [3,2,3,1,2,4,5,5,6];
let k = 4;
let count = 0;
let res = 0;
function findMaxAndRemove(arr){
    let max = nums[0];
    let maxIndex = 0;
    for(let i=1;i<arr.length;i++){
        if(arr[i]>max){
            max = arr[i];
            maxIndex = i;
        }
    }
    arr.splice(maxIndex, 1);
    return max;
}

while(k!==count){
    res = findMaxAndRemove(nums);
    count++;
}

console.log(res)