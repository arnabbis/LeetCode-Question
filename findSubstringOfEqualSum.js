let nums = [4,2,4];

let sub = [];
for(let i=0;i<nums.length;i++){
    for(let j=1;j<=nums.length;j++){
        sub.push(nums.slice(i,j))
    }
}
let findSubarrayOfTwo = sub.filter(ele=>ele.length===2);
function findSum(ele){
    let sum = ele.reduce((acc,curr)=>acc+curr,0)
    return sum
}

let findSumData = findSubarrayOfTwo.map(ele=>findSum(ele));
let dublicate = findSumData.filter((ele,index)=>findSumData.indexOf(ele)!==index);
