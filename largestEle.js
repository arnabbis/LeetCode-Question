// let Input= [2, 8, 1, 5, 9,2, 12 , 32]
// let Output= 9;
// let max = Input[0];
// let secondMax = Input[0]

// for(let i=1;i<=Input.length;i++){
//     if(max<Input[i]){
//         secondMax = max;
//         max = Input[i];
//     }
// }

// console.log(max);
// console.log(secondMax)



let a = [6, 2, 3, 4, 5];
let sortedArray = true;

for(let i=0;i<a.length-1;i++){
    if(a[i+1]<a[i]){
        sortedArray = false;
        break;
    }
}

console.log(sortedArray);