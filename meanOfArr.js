let arr = [6,0,7,0,7,5,7,8,3,4,0,7,8,1,6,8,1,1,2,4,8,1,9,5,4,3,8,5,10,8,6,6,1,0,6,10,8,2,3,4]
let sortArr = arr.sort((a,b)=>a-b);
let findArrLength = Math.floor(sortArr.length*0.05);
let removeMin = sortArr.splice(0,findArrLength)
let removeMax = sortArr.splice(sortArr.length-findArrLength,findArrLength);
console.log(removeMax,removeMin)
let sum = sortArr.reduce((acc,curr)=>curr+acc,0);
let avg = sum/sortArr.length;
console.log(avg.toFixed(5))


