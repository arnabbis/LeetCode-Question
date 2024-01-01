let paragraph ="a.";
let banned = ["a"]
let obj = {};
const words = paragraph.toLowerCase().match(/\b\w+\b/g);
console.log(words)
let filteredArr = words.filter(word => !banned.includes(word.toLowerCase()));
if(filteredArr.length===0){
    console.log(words.toString())
}
for(let i=0;i<filteredArr.length;i++){
    obj[filteredArr[i]]= (obj[filteredArr[i]]||0)+1
}

let maxkey = '';
let maxCount = -Infinity; 

for(let ele in obj){
    if(obj[ele]>maxCount){
        maxCount=obj[ele];
        maxkey=ele
    }
}

console.log(maxkey)