let accounts = [[2,8,7],[7,1,3],[1,9,5]];
let arr = [];
function findAmount(arr){
    let sum = 0;
    for(let i=0;i<arr.length;i++){
        sum = sum+arr[i]
    }
    return sum;
}


for(let i=0;i<accounts.length;i++){
    arr.push(findAmount(accounts[i]))
}

console.log(arr.sort((a,b)=>b-a)[0])
