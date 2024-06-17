let arr1 = [2,1,100,3];
let arr2 = [-5,-2,10,-3,7];
let remove
let d = 6;
let count = 0;
for (let i = 0; i < arr1.length; i++) {
    let val = true;
    for (let j = 0; j < arr2.length; j++) {
        if (Math.abs(arr1[i] - arr2[j]) <= d ){
            val=false;
            break;
        }
    }
    if(val){
        count++;
    }
}

console.log(count) 


