let n = 4;

let res = '';

if(n%2==0){
    res = 'p'.repeat(n);
}else{
    res = 'p'.repeat(n-1)+'z'
}

console.log(res)