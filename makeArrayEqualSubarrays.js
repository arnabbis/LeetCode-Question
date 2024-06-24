let target = [392,360];
let arr = [392,360];
let sortArr = [...arr].sort((a,b)=>a-b);
let sortedTarget = [...target].sort((a, b) => a - b);
let equalArray = true;

for(let i=0;i<sortArr.length;i++){
    if(sortArr[i]!==sortedTarget[i]){
        equalArray = false;
        break;
    }
}

console.log(equalArray)