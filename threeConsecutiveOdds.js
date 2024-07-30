let arr = [2,6,4,1];
let found = [];
for(let i=0;i<arr.length-2;i++){
    if(arr[i]%2!==0&&arr[i+1]==0&&arr[i+2]==0){
        found.push(arr[i],arr[i+1],arr[i+2]);
    }
}
console.log(found)
