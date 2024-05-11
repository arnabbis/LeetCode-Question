let nums = [5,10];
let indexDifference = 1;
let valueDifference = 2;
let store = [];

if(nums.length>1){
for(let i=0;i<nums.length;i++){
    for(let j=i+1;j<nums.length;j++){
        if(Math.abs(i-j)>=indexDifference && Math.abs(nums[i]-nums[j])>=valueDifference){
            store.push(i,j);
        }
    }
}
}
if(indexDifference===0&&valueDifference===0){
    store.push(0,0)
}
if(store.length===0){
    store.push(-1,-1)
}
console.log(store)