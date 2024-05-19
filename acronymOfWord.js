let words = ["never","gonna","give","up","on","you"];
let s = "ngguoy";


const findFirstWord  = words.map((ele)=>ele[0]).join('');
console.log(findFirstWord==s ? true: false)
