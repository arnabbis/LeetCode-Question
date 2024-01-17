let nums = [555,901,482,1771]

let count = [];

function findOddevenNo(num){
    let change = num.toString();
    if(change.length%2==0){
        return "even";
    }else{
        return "odd"
    }
    
}

for(let i=0;i<nums.length;i++){
    if(findOddevenNo(nums[i])==='even'){
        count.push(nums[i])
    }
}

console.log(count.length)

