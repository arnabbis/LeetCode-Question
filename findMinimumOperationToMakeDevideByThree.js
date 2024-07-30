let nums = [1,2,3,4];
let count = 0;
let arr = [];
function addOrSubstractNumber(ele){
    let addEle = ele+1;
    if(addEle%3==0){
        return addEle;
    }else{
        addEle = addEle-2;
        if(addEle%3==0){
            return addEle;
        }
    }
    return addEle+1;
}

for(let i=0;i<nums.length;i++){
    if(nums[i]%3!==0){
        arr.push(addOrSubstractNumber(nums[i]));
        count++
    }else{
        arr.push(nums[i])
    }
}

console.log(count,arr);

