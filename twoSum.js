let arr = [2,7,11,15];
let index = [];
let target = 9

for(let i=0;i<arr.length-1;i++){
    console.log("first ele",arr[i])
    for(j=i+1;j<arr.length;j++){
        console.log("second ele",arr[j])
        if(arr[i]+arr[j]==target){
            index.push(i,j);
        }
    }
}

console.log("index of the ele",index)