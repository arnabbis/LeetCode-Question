let a = "egg";
let b = "add";
let obj ={};
let obj1 = {};

for(let i=0;i<a.length;i++){
    obj[a[i]] = (obj[a[i]]||0)+1
}

for(let i=0;i<b.length;i++){
    obj1[b[i]] = (obj1[b[i]]||0)+1
}
console.log(obj);
console.log(obj1);

for(let ele in obj){
    
}


console.log(isomorphic)