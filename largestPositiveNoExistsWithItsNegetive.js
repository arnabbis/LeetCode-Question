let nums = [-9,-43,24,-23,-16,-30,-38,-30];
let arr = [];

nums.forEach(ele=>{
    if(ele<0&&nums.includes(Math.abs(ele))){
        arr.push(ele)
    }
})
console.log(arr)
console.log(arr.length>0?arr.sort((a,b)=>b-a)[0]:-1)