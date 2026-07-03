let nums = [5,12,7,15,20,8]
let k = 3;
let moreThan10 = [];
let result = [];
for(let i=0;i<nums.length;i++){
    if(nums[i]>10){
        moreThan10.push(i)
    }
    if(i>=k-1){
        while(moreThan10.length>0 && moreThan10[0]<i-k+1){
            moreThan10.shift();
        }
        if(moreThan10.length>0){
            result.push(nums[moreThan10[0]])
        }else{
            result.push(0);
        }
    }
}

console.log(result)