let obj = { '1': 2, '2': 3, '3': 1 };

const entries = Object.entries(obj);

let sort = entries.sort((a,b)=>a[1]-b[1]);

let storeSortdata = [];

sort.forEach(([key,value])=>{
    for(let i=0;i<value;i++){
        storeSortdata.push(parseInt(key))
    }
})

console.log(storeSortdata)