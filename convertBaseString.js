let n = 34;
let k = 6;

let convertBase = n.toString(k).split('').reduce((acc,curr)=>acc+parseInt(curr),0);
console.log(convertBase)

