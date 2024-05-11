let num = [-1,1,-6,4,5,-6,1,4,1];

let obj = {};


for(let i=0;i<num.length;i++){
    obj[num[i]] = (obj[num[i]]||0) +1
}

const entries = Object.entries(obj);

let sort = entries.sort((a,b)=>a[1]-b[1]);

let storeSortdata = [];

sort.forEach(([key,value])=>{
    for(let i=0;i<value;i++){
        storeSortdata.push(parseInt(key))
    }
})

console.log(storeSortdata)