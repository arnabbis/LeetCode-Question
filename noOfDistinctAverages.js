let nums = [1,100];
let sortNums = [...nums].sort((a,b)=>a-b);
let storeAvg = [];
function findAvg(min,max){
    return (min+max)/2
}

while(sortNums.length>0){
    storeAvg.push(findAvg(sortNums.shift(),sortNums.pop()))
}

console.log([...new Set(storeAvg)].length)

