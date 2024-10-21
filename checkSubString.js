let a = "abcabcabcabc";
let obj = {};
let res = [];

for(let i=0;i<a.length;i++){
    obj[a[i]] = (obj[a[i]]||0)+1
};

for(let ele in obj){
    res.push(obj[ele]);
}

const checkResponse = res.every(ele=>ele===res[0]);
console.log(checkResponse);