let arr =[1,4,2,5,3];
let sub = [];
let pushSub = [];
let sum = 0;
for(let i=0;i<arr.length;i++){
    console.log("every ele",arr[i])
    for(let j=i+1;j<=arr.length;j++){
       sub.push(arr.slice(i, j))
    }
}
// console.log("sub arrays", sub)

for(let i=0;i<sub.length;i++){
    if(sub[i].length%2!==0){
        pushSub.push(sub[i])
    }
}
let flattenArray = pushSub.flat();
for(let i=0;i<flattenArray.length;i++){
    sum=sum+flattenArray[i]
}

console.log("sum of the subarrays",sum)

  