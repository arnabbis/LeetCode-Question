let nums = [3,1,2,2,2,1,3];
let k = 2
let store = [];
for(let i=0;i<nums.length-1;i++){
    for(let j=i+1;j<nums.length;j++){
        if(nums[i]==nums[j] && (i*j)%k===0){
            store.push([i,j])
        }
    }
}

console.log(store.length)