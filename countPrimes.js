let n = 10;
let count = 0;
for(let i=2;i<=Math.sqrt(n);i++){
    if(n<=1){
        console.log(false)
    }
    if(n%i===0){
        console.log(false)
    }
    console.log(true)
}
// console.log(count)
