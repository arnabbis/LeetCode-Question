nums = [10]
let arr = [];
let sort = nums.sort((a,b)=>a-b);
console.log(nums)
for(let i=1;i<sort.length;i++){
    arr.push(sort[i]-sort[i-1])
}
console.log(arr.length>0?arr.sort((a,b)=>b-a)[0]:0)