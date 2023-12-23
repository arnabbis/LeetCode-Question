let s = "aaabbb";

let splitString = s.split('');
console.log(splitString);

// let findNum = splitString.map((num)=>s.indexOf(num));

// console.log(findNum)

let sequence = true;
for(let i=0;i<splitString.length-1;i++){
    if(splitString[i]==='b' && splitString[i+1]==='a'){
        sequence=false;
        break;
    }
}