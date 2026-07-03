let arr = [3,7,8,9,10,11];
let k = 3;
k  = k%arr.length;

console.log(k, arr.slice(-k).concat(arr.slice(0,arr.length-k)))

