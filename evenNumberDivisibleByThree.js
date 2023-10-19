let nums = [94,65,82,40,79,74,92,84,37,19,16,85,20,79,25,89,55,67,84,3,79,38,16,44,2,54,58,94,69,71,14,24,13,21];
let storeEven = [];
let divisibleStore = [];
let sum = 0;
for(let i=0;i<nums.length;i++){
    if(nums[i]%2==0){
        storeEven.push(nums[i])
    }
};
console.log(storeEven)
for(let i=0;i<storeEven.length;i++){
    if(storeEven[i]%3==0){
        divisibleStore.push(storeEven[i])
    }
}
console.log(divisibleStore)
for(let i=0;i<divisibleStore.length;i++){
    sum = sum+divisibleStore[i]
}

let roundData = parseInt(sum/divisibleStore.length);
console.log(roundData)



