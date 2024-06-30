let nums = [1];
let k = 1;
let obj = {};
let arr = [];
for(let i=0;i<nums.length;i++){
    obj[nums[i]] = (obj[nums[i]]||0)+1
}

let frequenyOfObj = Object.entries(obj).sort((a,b)=>a[1]-b[1])
let mapEle = frequenyOfObj.map(ele=>ele[0]);
console.log(mapEle.length===k?mapEle:mapEle.slice(0,k))