let n = 4;
let start = 3;
let res = 0;

for(let i=0;i<n;i++){
    res = res^(start + 2 * i)
}

console.log(res)