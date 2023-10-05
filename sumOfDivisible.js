let n = 15;
let div = [3,5,7]
let arr = [];
let sum = 0;
for(let i=1;i<=n;i++){
    for(let j= 0;j<div.length;j++){
        if(i%div[j]==0){
            arr.push(i)
        }
    }
}
let removeDub = new Set(arr);
let newArr = [...removeDub];
console.log("new arr",newArr)
for(let i=0;i<newArr.length;i++){
    sum=sum+newArr[i]
}

console.log(sum)