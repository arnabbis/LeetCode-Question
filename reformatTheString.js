let s = "12a3456";
let arr = [];
let getWord = s.split('').filter((ele)=>isNaN(ele));
let number = s.split('').filter((ele)=>!isNaN(ele));
if(getWord.length>number.length){
for(let i=0;i<getWord.length;i++){
    arr.push(getWord[i],number[i]) 
}
}else if(number.length>getWord.length){
    for(let i=0;i<number.length;i++){
        arr.push(number[i],getWord[i]) 
    }
}else{
    for(let i=0;i<getWord.length;i++){
        arr.push(getWord[i],number[i]) 
    }
}

console.log((getWord.length==0 || number.length==0)||(getWord.length-number.length)>=1 ? "": arr.join(''));