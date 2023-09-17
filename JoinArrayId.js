let arr1 = [
    {"id": 1, "x": 2, "y": 3},
    {"id": 2, "x": 3, "y": 6}
];
let arr2 = [
    {"id": 2, "x": 10, "y": 20},
    {"id": 3, "x": 0, "y": 0}
]
// let arr = [];
let store = [...arr1,...arr2];
for(let i=0;i<store.length-1;i++){
    console.log("first element",store[i].id)
   console.log("second element",store[i+1].id)
   if(store[i].id===store[i+1].id){
       store.splice(i,1)
   }
}

// console.log(arr)
console.log(store)