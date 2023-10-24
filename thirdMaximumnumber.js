let nums = [3,2,3,1,2,4,5,5,6,7,7,8,2,3,1,1,1,10,11,5,6,2,4,7,8,5,6];
let max= 0;
let removeDub = new Set(nums)
console.log(removeDub)
let storeArr = [...removeDub];
let rem = storeArr.sort((a,b)=>a-b);
console.log(rem)
console.log(rem[rem.length-3])

if(rem[rem.length-3]===undefined){
    console.log(rem[rem.length-1])
}else{
    console.log(rem[rem.length-3])
}