let arr = [1,2,1,2,3];

for(let i=0;i<arr.length;i++){
    if(arr[i]>arr[i+1]){
        let temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp
        i-=1
    }
}

console.log(arr)