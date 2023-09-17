let arr = [0,10,20,30];
let data = [-2,-1,0,1,2]
function greaterThan10(n) { return n > 10; }
function firstIndex(n, i) { return i === 0; }
function plusOne(n) { return n + 1 }
let filterdata = arr.filter(greaterThan10);

console.log(filterdata)

let findFirstIndex = arr.filter(firstIndex);

console.log(findFirstIndex)

let removeFalse = data.filter(plusOne);

console.log(removeFalse)
