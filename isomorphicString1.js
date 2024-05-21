let s = "foo";
let t = "bar";
let objectS = {};
let objectT = {};
for(let i=0;i<s.length;i++){
    objectS[s[i]] = (objectS[s[i]] ||0)+1
    objectT[t[i]] = (objectT[t[i]] ||0)+1
}


let isomorphic = false;

if(Object.keys(objectS).length === Object.keys(objectT).length && new Set(Object.values(objectS)).size === new Set(Object.values(objectT)).size){
    isomorphic = true;
}

console.log(isomorphic)