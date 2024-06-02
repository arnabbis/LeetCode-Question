let nums = [2,5,1,3,4,7];
let n = 3;
let chunk = [];
let convertNums = nums.join('').slice(0,n);
let convertRest = nums.join('').slice(n);

for(let i=0;i<convertNums.length;i++){
    chunk.push(parseInt(convertNums[i]),parseInt(convertRest[i]))
}

console.log(chunk)