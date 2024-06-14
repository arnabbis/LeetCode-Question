nums = [-100,-98,-1,2,3,4]
let maximumSum = nums.sort((a,b)=>b-a)
let value = maximumSum[0]*maximumSum[1]*maximumSum[2];
let nextValue = maximumSum[0]*maximumSum[maximumSum.length-1]*maximumSum[maximumSum.length-2];
console.log(value>nextValue?value:nextValue)