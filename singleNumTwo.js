let nums = [1,2,1,3,2,5];
let store = [];

let obj = {};

for(let i=0;i<nums.length;i++){
    if(obj[nums[i]]===undefined){
        obj[nums[i]]=1;
    }else{
        obj[nums[i]]++;
    }
}

for(let ele in obj){
    if(obj[ele]==1){
        store.push(parseInt(ele))
    }
}

console.log(store)