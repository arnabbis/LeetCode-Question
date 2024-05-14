let s = "(1+(2*3)+((8)/4))+1"

let currentDepth = 0;
let maxDepth = 0;
for(let ele of s){
    if(ele === '('){
        currentDepth++;
        maxDepth = Math.max(maxDepth,currentDepth)
        console.log(maxDepth,currentDepth)
    }else if(ele === ')'){
        currentDepth--;
    }
    console.log(maxDepth)
}

console.log(maxDepth)