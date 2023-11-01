let target = 11;
let nums = [1,2,3,4,5]
let subArray = [];
let store = [];
for(let i=0;i<nums.length;i++){
    for(let j=i+1;j<=nums.length;j++){
        subArray.push(nums.slice(i,j))
    }
}

console.log(subArray);

for(let i=0;i<subArray.length;i++){
    let sum = 0;
    for(let j=0;j<subArray[i].length;j++){
            sum=sum+subArray[i][j];
            console.log(sum)
            
    }
    if(sum>=target){
        store.push(subArray[i].length)
    }
}
console.log(store)
let max = store[0];
for(let i=0;i<store.length;i++){
    if(store[i]<max){
        max = store[i]
    }
}
console.log(max)
