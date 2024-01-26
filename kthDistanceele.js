let arr = ["a","b","a"];
let k = 2;
let store = [];
let obj = {};
for(let i=0;i<arr.length;i++){
    obj[arr[i]] = (obj[arr[i]]||0)+1
}

for(let ele in obj){
    if(obj[ele]===1){
        store.push(ele)
    }
}
console.log("store of k",store[k-1]);
if(store[k-1]==undefined){
    console.log("");
}else{
    console.log(store[k-1]);
}
