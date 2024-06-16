let heights = [1,2,3,4]
let expected = [...heights].sort((a,b)=>a-b);
console.log(expected)
let count = 0;
for(let i=0;i<heights.length;i++){
    if(heights[i]!==expected[i]){
        count++;
    }
}

console.log(count)