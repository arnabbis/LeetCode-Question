let nums = [-1,1,-1,1,-1]


function signFunc(nums){
    if(nums>=1){
        return 1
    }else if(nums<0){
        return -1
    }else{
        return 0
    }
}


let sum = signFunc(nums.reduce((acc,curr)=>acc*curr,1));

console.log(sum)