let nums = [1,1,2,2,2,3]
let obj = {}
let sortArray = []
for(let i=0;i<nums.length;i++){
    if(obj[nums[i]]===undefined){
        obj[nums[i]] = 1
    }else{
        obj[nums[i]]++
    }
}

let objectArray = Object.entries(obj);
objectArray.sort((a,b)=>a[1]-b[1]);

for(let i=0;i<objectArray.length;i++){
    for( j=0;j<objectArray[i][1];j++){
        sortArray.push(parseInt(objectArray[i][0]))
    }
}

console.log(sortArray)