let arr = [15,88];
let pieces = [[88],[15]];
let store = []
for(let i=pieces.length-1;i>=0;i--){
    console.log(pieces[i])
    store.push(pieces[i])
}

let concatArray = store.flat();
console.log(arr);

for(let i=0;i<arr.length;i++){
        if(arr[i]===concatArray[i]){
            console.log(true)
        }else{
            console.log(false)
        }
}