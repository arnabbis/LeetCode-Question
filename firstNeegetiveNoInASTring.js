let nums = [12,-1,-7,8,-15,30];
let k = 3;
let arr = [];
let result = [];

for(let i=0 ;i<nums.length;i++){
    if(nums[i]<0){
        console.log("element to be inserted in the array negetive",nums[i])
        arr.push(i);
    }
    console.log("first all negetive elements",arr)
    if(i >= k-1){
        while(arr.length > 0 && arr[0] < i-k+1){
            console.log("while loop check ....{}",arr)
            arr.shift();
            console.log("while loop check after....{}",arr)
        }

        if(arr.length>=2){
            console.log("result in the arr to be inserted",arr)
            result.push(nums[arr[1]])
        }else{
            result.push(0)
        }
        console.log("result value in the array",result);
    }
}

console.log(result)