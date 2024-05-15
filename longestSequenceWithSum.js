let nums = [4,5,2,1];
let queries = [3,10,21];
let store  = [];

function findCountSum(num) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] <= num) {
                count++;
            }
        }
    }
    return count;   
}


for(let i=0;i<queries.length;i++){
    store.push(findCountSum(queries[i]))
}

console.log(store)