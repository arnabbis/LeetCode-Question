let s = "sunset is at 7 51 pm overnight lows will be in the low 50 and 60 s";

let splitString = s.split(' ');

let storeNumbner = [];

for(let i=0;i<splitString.length;i++){
    splitString[i] = parseInt(splitString[i]);
    if(!isNaN(splitString[i])){
        storeNumbner.push(splitString[i])
    }
}
console.log(storeNumbner)
for(let i=0;i<storeNumbner.length-1;i++){
    if(storeNumbner[i+1]>storeNumbner[i]){
        console.log(true);
    }else{
        console.log(false)
    }
}