let a = 25;
let b = 30;
let c = a+b
let storeAele = [];
let storeBele = [];
let storeFactor = [];
for(let i=1;i<=c;i++){
    if(a%i==0){
        storeAele.push(i)
    }
}

for(let i=1;i<=c;i++){
    if(b%i==0){
        storeBele.push(i)
    }
}

console.log(storeAele)
console.log(storeBele)

for(let i=0;i<storeAele.length;i++){
    if(storeBele.includes(storeAele[i])){
        storeFactor.push(storeAele[i])
    }
}

console.log(storeFactor)