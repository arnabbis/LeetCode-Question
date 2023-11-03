let nums = [1,3,5,4,7];
let store = [];
for(let i=0;i<nums.length-1;i++){
    if(nums[i+1]-nums[i]==2){
        store.push(nums[i],nums[i+1])
    }
}

let removeDubli = new Set(store);

let newArr = [...removeDubli];
console.log(newArr)