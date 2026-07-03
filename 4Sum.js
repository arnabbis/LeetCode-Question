let nums = [-2,0,1,1,2];
let sordetdArr = nums.sort((a,b)=>a-b);
let arr = [];

for(let i=0;i<sordetdArr.length-3;i++){
    for(let j=i+1;j<sordetdArr.length-2;j++){
        let left = j+1;
        let right = sordetdArr.length-1;
        while(left<right){
            let sum = sordetdArr[i] + sordetdArr[j] + sordetdArr[left] + sordetdArr[right];
            if(sum==0){
                arr.push([sordetdArr[i] , sordetdArr[j] , sordetdArr[left] , sordetdArr[right]]);
                left++;
                right--;
            }else if(sum<0){
                left++;
            }else{
                 right--;

            }
        }
    }
}
console.log(arr);