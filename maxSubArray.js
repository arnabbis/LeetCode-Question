let nums = [-2,1,-3,4,-1,2,1,-5,4];
let store = [];
let data = [];
for(let i=0;i<nums.length;i++){
    for(let j=i+1;j<=nums.length;j++){
        store.push(nums.slice(i,j))
    }
}

for(let i=0;i<store.length;i++){
    let sum = 0;
    for(let j=0;j<store[i].length;j++){
       sum = sum+store[i][j]; 
    }
    data.push(sum)
}

let sort = data.sort((a,b)=>a-b);
console.log(sort[sort.length-1])