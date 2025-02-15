let data = "112334444";
let obj = {};

for(let ele of data){
    obj[ele]= (obj[ele]||0)+1;
}

const sortValue = [...new Set(Object.values(obj).sort((a,b)=>b-a))][1];

const getKeysWithThat = Object.keys(obj).filter(ele=>obj[ele]==sortValue);
console.log(getKeysWithThat)