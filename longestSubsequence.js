let nums = [1,2]
let storeDif = [];
let storeSub = 0;
let storeele = [];
for(let i=0;i<nums.length-1;i++){
    storeDif.push(nums[i+1]-nums[i])
}
console.log(storeDif)

for(let i=0;i<storeDif.length;i++){
    if(storeDif[i]==storeDif[i+1]){
        storeSub=storeDif[i]
    }
}

for(let i=0;i<nums.length-1;i++){
    if(nums[i+1]-nums[i]==storeSub){
        storeele.push(nums[i],nums[i+1])
    }
}

let dubli = new Set(storeele);
let newArr = [...dubli];
console.log(newArr)