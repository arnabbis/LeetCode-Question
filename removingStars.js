let s = "leet**cod*e"

let splitString = s.split('');

for(let i=0;i<splitString.length;i++){
    if(splitString[i]==='*'){
        console.log(i)
    }
}