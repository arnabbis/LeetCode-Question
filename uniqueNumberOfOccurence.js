let arr = [26,2,16,16,5,5,26,2,5,20,20,5,2,20,2,2,20,2,16,20,16,17,16,2,16,20,26,16]
let obj = {};

for(let i=0;i<arr.length;i++){
    obj[arr[i]] = (obj[arr[i]]||0)+1
}
console.log(obj)
let data = Object.values(obj);

let dubOccurance = true;
for(i=0;i<data.length-1;i++){
    if(data[i]==data[i+1]){
        dubOccurance = false;
        break;
    }
}

console.log(dubOccurance)

