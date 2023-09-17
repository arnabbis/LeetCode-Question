let data = "aabbbcacc";
let element = data[0]
// console.log("check first ele",element)
let count = 1;
let store = '';
for(let i=1;i<data.length;i++){
    if(data[i]==element){
        count++
    }else{
        store = store+element+'-'+count;
        element = data[i];
        count = 1;
    }
}
store = store+element+'-'+count;
console.log(store)