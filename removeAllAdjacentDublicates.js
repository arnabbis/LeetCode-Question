let s = "aaaaaaaaa";
let splitS = [];

for(char of s){
    if(splitS.length>0 && splitS[splitS.length-1]===char){
        splitS.pop();
    }else{
        splitS.push(char);
    }
}

console.log(splitS.join(''));