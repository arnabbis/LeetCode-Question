let arr = [4,3,2,2,4,1,3,4,3];
let found = -1
let obj = {};
let highestCount = 0;
let highestElement = null;


for(let i=0;i<arr.length;i++){
    obj[arr[i]] = (obj[arr[i]]||0)+1
}


for (let key in obj) {
    let numericKey = Number(key); 
    if (numericKey === obj[key]) {
        if (found === -1 || numericKey > found) {
            found = numericKey;
        }
    }
}


console.log(found)
