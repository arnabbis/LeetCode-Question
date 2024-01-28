let s1 = "this apple is sweet";
let s2 = "this apple is sour";
let store = [];

let splits1 = s1.split(' ');
let splits2 = s2.split(' ');

let concat = splits1.concat(splits2);
console.log(concat);

let obj = {};

for(let i=0;i<concat.length;i++){
    obj[concat[i]]=(obj[concat[i]]||0)+1;
}

for(let ele in obj){
    if(obj[ele]===1){
        store.push(ele);
    }
}

console.log(store)