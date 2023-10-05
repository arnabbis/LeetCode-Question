let n = 234

let convertToString = n.toString();

let product = 1;
let sum = 0;
for(let i=0;i<convertToString.length;i++){
    product = product*convertToString[i]
}

console.log("product",product)

for(let i=0;i<convertToString.length;i++){
    sum = sum+parseInt(convertToString[i])
}

let difference = product-sum

console.log(difference)