let arr = [4,3,1,1,3,3,2];
let k = 2;
let count = 0;
let obj = {};
for(let i=0;i<arr.length;i++){
    obj[arr[i]] = (obj[arr[i]]||0)+1
}

for(let ele in obj){
    if(obj[ele]>1){
        count++
    }
}
console.log(count);