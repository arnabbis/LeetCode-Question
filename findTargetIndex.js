let nums = [1,2,5,2,3]
let target = 2
let store = [];
let sort = nums.sort((a,b)=>a-b)
for(let i=0;i<sort.length;i++){
    if(sort[i]===target){
        store.push(i)
    }
}

console.log(store)