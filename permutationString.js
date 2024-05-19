let s = "abc";
let t = "bac";
let sum = 0;
let firstStringT = [];

for(let i=0;i<s.length;i++){
    sum = sum + Math.abs(i-t.indexOf(s[i]))
}

console.log(sum)


// for(let i=0;i<)