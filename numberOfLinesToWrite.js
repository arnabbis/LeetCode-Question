let widths = [4,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10];
let s = "bbbcccdddaaa".split('').sort().join('')
console.log(s)
let arr = [];

for(let i=0;i<widths.length;i++){
    arr.push(s[i],widths[i])
}

console.log(arr)