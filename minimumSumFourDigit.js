let num = 4009;
let digit = num.toString().split('').map(Number);

const result = [...num.toString()].sort();
  console.log( parseInt(result[0] + result[2]) + parseInt(result[1] + result[3]));


