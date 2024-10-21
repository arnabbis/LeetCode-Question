let a = ["a",1,["b",1,["v",3]]];

let splitArray = a.toString().split('').filter(ele=>ele!=",");
console.log(splitArray);
