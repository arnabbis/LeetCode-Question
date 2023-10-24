let nums = [1];
let target = 1;
let store = [];
// let firstIndex = nums.indexOf(target);

// if(!firstIndex){
//     console.log([-1,-1])
// }

// let lastIndexOf= nums.lastIndexOf(target);
// console.log([firstIndex,lastIndexOf])

for(let i=0;i<nums.length;i++){
    console.log(i)
    for(let j=i+1;j<nums.length;j++){
        console.log(j)
        store.push(i)
    }
}

console.log(store)

