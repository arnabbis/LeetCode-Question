let nums = [100,4,200,1,3,2]
let store = [];
let storeFinal = [];
let sortArr = nums.sort((a,b)=>a-b);
console.log(sortArr);


for(let i=0;i<sortArr.length;i++){
    if(sortArr[i+1]-sortArr[i]==1){
        store.push(sortArr[i],sortArr[i+1]);
        // break;
    }
}
console.log(store)
for(let i=0;i<store.length;i++){
    if(!storeFinal.includes(store[i])){
        storeFinal.push(store[i])
    }
}
console.log("after sorting",storeFinal)
if(storeFinal.length==1){
    console.log(storeFinal.length)
}else{
    console.log(storeFinal.length)
}