let rings = "B0R0G0R9R0B0G0";
let count = 0;
let findColor = rings.split('').filter((ele,index)=>rings.indexOf(ele)%2==0);
let findNumber = rings.split('').filter((ele,index)=>rings.indexOf(ele)%2!==0);
let obj = {};
for(let i=0;i<findNumber.length;i++){
    if(!obj[findNumber[i]]){
        obj[findNumber[i]] = [];
    }
    obj[findNumber[i]].push(findColor[i])
}

console.log(obj)

