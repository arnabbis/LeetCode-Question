let strs = ["1","01","001","0001"];
let count = 0

function checkLength(ele){
    let splitEle = ele.split('');
    let convertEleToNumber = splitEle.map(ele=>parseInt(ele));
    if(convertEleToNumber.includes(NaN)){
        return ele.length
    }
    return parseInt(ele,10)
}


let findLength = strs.map(ele=>checkLength(ele)).sort((a,b)=>b-a);
console.log(findLength[0])