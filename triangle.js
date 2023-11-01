let triangle =[[-1],[2,3],[1,-1,-3]]
let store = [];
let sum = 0;
for(let i=0;i<triangle.length;i++){
    let max = triangle[i][0];
    for(let j=0;j<triangle[i].length;j++){
        if(triangle[i][j]<max){
            max=triangle[i][j]
        }
    }
    store.push(max)
}
console.log(store)
for(let i=0;i<store.length;i++){
    sum = sum+store[i]
}

console.log(sum)
