let arr = [1,2,4,4,5];

let bool = true;
for(let i=0;i<arr.length;i++){
    if(arr[i]>arr[i+1]){
        bool = false;
        break
    }
}

console.log(bool)