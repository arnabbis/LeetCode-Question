let s = "Hello how are you Contestant";
let splitStr = s.split(' ');
console.log("split the string", splitStr)
let k = 4

for(let i=0;i<splitStr.length;i++){
    if(i==k){
      splitStr = splitStr.splice(0,i)
    }
}

console.log(splitStr)
