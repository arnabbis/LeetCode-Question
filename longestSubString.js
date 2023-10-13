let s = "nigzhtkqxr"

;
let store = [];
let unique = [];
let obj = {};
let storeunique = [];
let newEle = new Set()
// let splitString ; 
let sliceString=0;
for(let i=0;i<s.length;i++){
    for(j=i+1;j<=s.length;j++){
        store.push(s.substring(i,j))
    }
}
console.log(store)
for(let i=0;i<store.length;i++){
    // console.log("elements of the string",store[i]);
    let hasDub = false;
    for(j=0;j<store[i].length;j++){
        let ele = store[i][j]
        // console.log("every charecter",ele)
        if (store[i].indexOf(ele) !== store[i].lastIndexOf(ele)) {
            hasDub = true;
            break;
        }
}
if(!hasDub){
    storeunique.push(store[i])
}
}
console.log("store unique ele",storeunique)
let storeLength = [];
// console.log("sorted data",sort)
for(let i=0;i<storeunique.length;i++){
    storeLength.push(storeunique[i].length)
}
console.log(storeLength)
let sortEleLength = storeLength.sort((a,b)=>a-b)
console.log(sortEleLength[sortEleLength.length-1])

