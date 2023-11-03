let nums = [2,3,-2,4]
let sub = [];
let product = [];
for(let i=0;i<nums.length;i++){
    for(let j=i+1;j<=nums.length;j++){
       sub.push(nums.slice(i, j))
    }
}
console.log(sub)
for(let i=0;i<sub.length;i++){
    let productData = 1;
    for(let j=0;j<sub[i].length;j++){
        productData = productData*sub[i][j];
    }
    product.push(productData);
}
console.log(product)
let sortProduct = product.sort((a,b)=>a-b);

console.log(sortProduct[sortProduct.length-1])