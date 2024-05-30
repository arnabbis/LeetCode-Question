let name = "aleeeex";
let typed = "aalleex";
let obj = {};
let obj1 = {};
for(let i=0;i<name.length;i++){
    obj[name[i]] = (obj[name[i]]||0)+1;
}

for(let i=0;i<typed.length;i++){
    obj1[typed[i]] = (obj1[typed[i]]||0)+1;
}

let allFound = true;
for(let ele in obj){
    if(!(ele in obj1) || obj1[ele]<obj[ele]){
        allFound = false;
        break;
    }
}

console.log(allFound)