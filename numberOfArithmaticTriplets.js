let nums = [4,5,6,7,8,9];
let diff = 2;
let arr = [];

for(let i=0;i<nums.length;i++){
    for(let j=1;j<=nums.length;j++){
        for(let k=2;k<nums.length;k++){
            if(nums[j]-nums[i]==diff && nums[k]-nums[j]===diff){
                arr.push([i,j,k])
            }
        }
    }
};

console.log(arr.length)
