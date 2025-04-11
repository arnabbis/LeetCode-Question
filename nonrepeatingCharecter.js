let s = "geeksforgeeks";

let obj = {};

for(let i=0;i<s.length;i++){
    obj[s[i]] = (obj[s[i]]||0)+1;
}

const getFilterData = Object.keys(obj).filter(ele=>obj[ele]==1);
console.log(getFilterData[0]);