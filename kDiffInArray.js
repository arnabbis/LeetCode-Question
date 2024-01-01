let nums = [1,2,4,4,3,3,0,9,2,3];
let k = 3;
let store = [];
for(let i=0;i<nums.length-1;i++){
    for(let j=i+1;j<nums.length;j++){
        if( i!=j && Math.abs(nums[i]-nums[j])===k){
            let sort = [nums[i],nums[j]].sort((a,b)=>a-b)
            store.push(sort)
        }
    }
}
console.log(store)
let store2 = [...new Set(store.map(JSON.stringify))].map(JSON.parse);
console.log(store2)
console.log(store2.length)