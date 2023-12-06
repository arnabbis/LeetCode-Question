let ransomNote = "a";
let magazine = "b";

let obj = {};
let obj1 = {};
for(let i=0;i<ransomNote.length;i++){
    if(obj[ransomNote[i]]===undefined){
        obj[ransomNote[i]] = 1;
    }else{
        obj[ransomNote[i]]++;
    }
}
console.log(obj)
for(let i=0;i<magazine.length;i++){
    if(obj1[magazine[i]]===undefined){
        obj1[magazine[i]] = 1;
    }else{
        obj1[magazine[i]]++;
    }
}

for(let ele in obj){
    console.log(ele)
    console.log(obj[ele])
    for(let i in obj1){
        console.log(i)
        console.log(obj1[i])
        if(ele===i && obj[ele]===obj1[i]){
            console.log(true)
        }else{
            console.log(false);
        }
    }
}



