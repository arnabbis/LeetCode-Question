let pattern = "abba";
let s = "dog cat cat dog";
let store = [];
let spitS = s.split(' ');
console.log(spitS);
for(let i=0;i<pattern.length;i++){
    store.push({ele:pattern[i],val:spitS[i]})
};


console.log("store",store);
