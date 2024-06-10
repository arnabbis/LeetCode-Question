let s = "cabbac";
let ele = null;
for(let i=0;i<s.length;i++){
    let currentChar = s[i];
    let inedxOfChar = s.slice(i+1);
    if(inedxOfChar.includes(currentChar)){
        ele = currentChar;
        break
    }
}

console.log(ele)
console.log(ele !== null ? s.slice(s.indexOf(ele) + 1, s.lastIndexOf(ele)).length : -1); // Output: -1
