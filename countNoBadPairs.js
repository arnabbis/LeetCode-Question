let nums = [1,2,3,4,5]
let store = [];
for(let i=0;i<nums.length-1;i++){
    for(let j=i+1;j<nums.length;j++){
        if(i<j && j-i!=nums[j]-nums[i]){
            store.push([i,j])
        }
    }
}

console.log(store.length)