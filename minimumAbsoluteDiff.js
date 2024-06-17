arr = [4,2,1,3]
arr.sort((a,b)=>a-b);
let storediff = [];
for(let i=0;i<arr.length;i++){
    if(arr[i+1]>arr[i]&&arr[i+1]-arr[i]===arr[i+2]-arr[i+1]){
        storediff.push([arr[i],arr[i+1]])
    }
}

console.log(storediff)