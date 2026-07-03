let arr1 = [1,2,3,4,5];
let arr2 = [1,2,3,4];
let mergeArr = [];
let left=0;
let right=0;

while(left<arr1.length && right<arr2.length){
    if(arr1[left]<=arr2[right]){
        mergeArr.push(arr1[left]);
        left++
    }else{
        mergeArr.push(arr2[right]);
        right++
    }
}
while(right<arr1.length){
    console.log(right)
    console.log(arr1.length)
    console.log(arr1[right]);
    mergeArr.push(arr1[right]);
    right++
}

while(left<arr2.length){
    mergeArr.push(arr2[left]);
    left++
}

console.log(mergeArr)