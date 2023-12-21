let nums =[-1,-100,3,99];
let k = 2;

let removeEle = nums.splice(-k);
let add = removeEle.concat(nums);

console.log(add)