let nums = [1,2,2,4];
let store = nums.length;
let miss = 1;
let dub = 0;
// for(let i=nums[0];i<=store;i++){
//     storeele.push(i)
    
// }

// console.log(storeele)
// let ele = [];

// for(let i=0;i<nums.length;i++){
//     for(let j=0;j<storeele.length;j++){
//     if(!nums.includes(storeele[j])){
//         ele.push(storeele[j])
//     }
//     if(!store.includes(storeele[j])){
//         ele.push(storeele[j])
//     }
// }
// }
let obj = {};

for(let i=0;i<nums.length;i++){
    obj[nums[i]] = (obj[nums[i]] ||0)+1
}

console.log(obj);

for(let i=nums[0];i<=store;i++){
    if(!obj.hasOwnProperty(i)){
        miss=i
        break;
    }
    
}

for(let [key,value] of Object.entries(obj)){
    if(value===2){
        dub=key;
        break;
    }
}
let change = parseInt(dub)
console.log([change,miss])