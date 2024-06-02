let  nums = [3,4,5,6,7,8]
let sum = 0;
    let subsets = [];
    let n = nums.length;
        for (let i = 0; i < (1 << n); i++) {
        let subset = [];
        for (let j = 0; j < n; j++) {
            if (i & (1 << j)) {
                subset.push(nums[j]);
            }
        }
        subsets.push(subset);
    }

function findXORToatal(arr){
    let res = 0;
    if(arr.length===0){
        res = 0
    }else{
        for(let i=0;i<arr.length;i++){
            res ^= arr[i];
        }
    }
    return res;
}


for(let i=0;i<subsets.length;i++){
    sum = sum+findXORToatal(subsets[i])
}


console.log(sum)
