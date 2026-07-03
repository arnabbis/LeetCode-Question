let nums = [-1,-2,3,-4,5]
let k = 2;
let firstPositive = [];
let result = [];

for(let i=0;i<nums.length;i++){
    if(nums[i]>0){
        firstPositive.push(i);
    }
    if(i>=k-1){
        while(firstPositive.length>0 && firstPositive[0]<i-k+1){
            firstPositive.shift();
        }
        if(firstPositive.length>0){
            result.push(nums[firstPositive[0]])
        }else{
            result.push(0)
        }
    }
}
console.log(result);