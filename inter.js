let arr = [0,1,2,3,4,5,2,1];
let secondarr = [];
let restArr = [];
let max = arr[0];
// console.log(max);
let store;
for(let i=0;i<arr.length;i++){
    // console.log(arr[i])
    
    if(arr[i]>max){
        max=arr[i]
    }
}
let found = false;
for(let i=0;i<arr.length;i++){
    if(arr[i]===max){
        found=true;
        break;
    }
    secondarr.push(arr[i]);
}

console.log("max",max)
console.log("splited array",secondarr);

secondarr.push(max)

console.log("new array after pushing max",secondarr);






