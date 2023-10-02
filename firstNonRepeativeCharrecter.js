let s = 'arnrab';
let obj = {}
let arr = [];


for(let i=0;i<s.length;i++){
    if(obj[s[i]]===undefined){
        obj[s[i]] = 1
    }else{
        if(obj[s[i]]===1){
            arr.push(s[i])
        }
        obj[s[i]]++
    }
}
console.log(arr)
console.log(obj)

for(let ele in obj){
   if(obj[ele]==1){
        console.log(ele);
        break;
   }
}
