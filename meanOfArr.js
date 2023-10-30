let arr = [1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3]
let store = []
let sortArr = arr.sort();
// console.log(sortArr)
console.log(sortArr)

let findArrLength = Math.floor(sortArr.length*0.05);
console.log("find the arra length",findArrLength)
let max = arr[0];
let min = arr[0];
for(let i=0;i<sortArr.length;i++){
    if(sortArr[i]>max){
        max=sortArr[i]
        // store.push(max)
    }
    if(sortArr[i]<min){
        min=sortArr[i]
        // store.push(min)
    }
}

for(let i=0;i<arr.length;i++){
    if(store.includes(arr[i])){
        
    }
}




