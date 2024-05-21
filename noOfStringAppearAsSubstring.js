let patterns =["a","a","a"];
let word = "ab";
let arr = [];

for(let i=0;i<patterns.length;i++){
    if(word.includes(patterns[i])){
        arr.push(patterns[i])
    }
}


console.log(arr)