let arr = [1,3,5];
let subArray = [];
for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<=arr.length;j++){
        subArray.push(arr.slice(i,j))
    }
}

function findSum(arr){
    let sum = 0;
    if(arr.length==0){
        return sum;
    }
    for(let i=0;i<arr.length;i++){
        sum = sum+arr[i]
    }
    return sum;
}

let findOddSum1 = subArray.map((ele)=>findSum(ele)).filter((ele)=>ele%2!==0);
console.log(findOddSum1.length)
