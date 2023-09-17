let j= 19;
function happyNumber(j){
    if(j===1){
        return true
    }
let changeNum = j.toString();
let splitdata = changeNum.split('');
let sum = 0;
let change = splitdata.map((data)=>(parseInt(data,10)**2))
console.log(change)

for(let i=0;i<change.length;i++){
    sum = sum+change[i]
}
return happyNumber(sum)
}

console.log(happyNumber(j))