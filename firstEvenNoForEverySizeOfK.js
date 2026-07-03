let nums = [1,2,3,4,5,6,7]
let k = 3;
let evenNo = [];
let result = [];

for(let i=0;i<nums.length;i++){
    if(nums[i]%2==0){
        evenNo.push(i);
    };
    if(i>=k-1){
        while(evenNo.length>0 && evenNo[0]<i-k+1){
            evenNo.shift();
        }
        if(evenNo.length>0){
            result.push(nums[evenNo[0]])
        }else{
            result.push(0)
        }
    }
}
console.log(result)