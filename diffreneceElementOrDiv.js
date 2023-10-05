let nums = [1,15,6,3];
let sum = 0;
let sum1 = 0;
let changeToString = nums.join('');
console.log(changeToString);
let splitString = changeToString.split('')
console.log(splitString)
for(let i=0;i<splitString.length;i++){
    console.log(splitString[i])
    sum=sum+parseInt(splitString[i])
}

console.log("sum",sum)
for(let i=0;i<nums.length;i++){
    sum1= sum1+nums[i]
}

console.log(sum1)

let findDiffrencesum = sum1-sum
console.log(findDiffrencesum)