// let nums = [[3,1,2,4,5],[1,2,3,4],[3,4,5,6]]
// let max = []
// let flatArr = nums.flat();
// let obj = {};
// for(let i=0;i<flatArr.length;i++){
//     obj[flatArr[i]] = (obj[flatArr[i]]||0)+1
// }
// let maxkey = [];
// let maxnumber = Number.MAX_VALUE;
// for(let ele in obj){

//     if(obj[ele]>maxnumber){
//         maxnumber = obj[ele];
//         maxkey = [ele];
//     }else if(obj[ele]===maxkey){
//         maxkey.push(ele);
//     }
// }

// console.log(maxkey)


let nums =[[3,1,2,4,5],[1,2,3,4],[3,4,5,6]]

let flatArr = nums.flat();

let obj = {};
for (let i = 0; i < flatArr.length; i++) {
    obj[flatArr[i]] = (obj[flatArr[i]] || 0) + 1;
}
let maxKeys = [];
let maxCount = 0;
let allValueSame = true;
for (let key in obj) {
        if(obj[key]===1){
            maxKeys=[];
        }
    if (obj[key] > maxCount) {
        maxCount = obj[key];
        maxKeys = [Number(key)]; // Convert key to number here
    } else if (obj[key] === maxCount) {
        maxKeys.push(Number(key)); // Convert key to number here
    }else{
        allValueSame = false;
    }
}

if(allValueSame){
    maxKeys=[];
}

console.log("Keys with the maximum count:", maxKeys);

