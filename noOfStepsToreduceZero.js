let num = 123;
let steps = 0;
while(num>0){
    if(num%2==0){
        num = num/2;
        steps = steps+1;
    }else{
        num = num-1;
        steps = steps+1
    }
}

console.log(steps)
