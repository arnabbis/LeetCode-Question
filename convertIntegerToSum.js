let n = 11;
let a = 1;
let b = 1;
let arr = []

while(n>0){
    if(b<=n){
    if(a+b==n && !a.toString().includes('0') &&  !b.toString().includes('0')){
        arr.push(a,b);
        break;
    }else{
        b=b+1
    }
}else{
    a = a+1;
    b=1;
}
}

console.log(arr)