let nums = [4,6,7,8,11,12]
let k = 3
let primeNo = [];
let result = [];
function isPrime(num){
    if(num<=1){
        return false
    }
    for(let i=2;i<num;i++){
        if(num%i===0){
            return false
        }
    }
    return true;
}

for(let i=0;i<nums.length;i++){
    if(isPrime(nums[i])){
        primeNo.push(i)
    }
    if(i>=k-1){
        while(primeNo.length>0 && primeNo[0]<i-k+1){
            primeNo.shift();
        }
        if(primeNo.length>0){
            result.push(nums[primeNo[0]])
        }else{
            result.push(0);
        }
    }
}

console.log(result);