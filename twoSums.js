const arr = [4,6,2,1,9];
const getTargetValue = 10;
let storeArray = [];

for(let i=0;i<arr.length;i++){
    if(arr[i]+arr[i+1]===getTargetValue){
        storeArray.push(arr[i],arr[i+1]);
    }
}

console.log(storeArray);