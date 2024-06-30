let s = "leet**cod*e"
let splitString = s.split('');
let arr = [];
for(let i=1;i<splitString.length;i++){
    if(splitString[i]==='*'){
        arr.push(splitString[i-1]);
        splitString.splice(i-1,2);
        i=i-2
    }
}
console.log(splitString.length>0?splitString.join(''):'')
