let nums = [1,12,-5,-6,50,3];
let k = 4;
let storeSubArr = [];
let storeKele = [];
let push = [];
for(let i=0;i<nums.length;i++){
    for(let j=i+1;j<=nums.length;j++){
        storeSubArr.push(nums.slice(i,j))
    }
}

for(let i=0;i<storeSubArr.length;i++){
    if(storeSubArr[i].length===k){
        storeKele.push(storeSubArr[i])
    }
}
console.log(storeKele);


for(let i=0;i<storeKele.length;i++){
    let avg = 0;
    for(let j=0;j<storeKele[i].length;j++){
        avg = avg+storeKele[i][j]/storeKele[i].length
    }
    push.push(avg)
}

let sort = push.sort((a,b)=>a-b);

console.log(sort)