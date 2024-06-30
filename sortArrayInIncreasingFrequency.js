let nums = [1,1,2,2,2,3];
let store = [];
let obj = {};

for(let i=0;i<nums.length;i++){
    obj[nums[i]]=(obj[nums[i]]||0)+1
}

function addElements(count,ele){
    for(let i=0;i<count;i++){
        store.push(ele)
    }
    return store;
};

