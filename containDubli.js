let nums = [1,2,3,1];
let  k = 3;
let ele = [];

for(let i=0;i<nums.length;i++){
    for(let j=i+1;j<nums.length;j++){
        if(nums[i]==nums[j]){
            ele.push(i,j)
        }
    }
}
// console.log(ele)
for(let i=0;i<ele.length;i++){
    for(let j=i+1;j<ele.length;j++){
        let data = Math.abs(ele[j]-ele[i])
            console.log(data)
            if(Math.abs(ele[j]-ele[i])==k){
                console.log(true)
            }else{
                console.log(false)
            }
        }
        
}