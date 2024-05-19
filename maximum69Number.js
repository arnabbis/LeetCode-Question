let num = 9996;
let ele = num.toString();
let arr = [];
function reverseNumber(s){
    let splitNum = ele.split('');
    for(let i=0;i<splitNum.length;i++){
        if(i===s){
            if(splitNum[i]=='6'){
                splitNum[i] = '9'
            }else{
                splitNum[i] = '6'
            }
        }
    }
    return parseInt(splitNum.join(''),10)
}


for(let i=0;i<ele.length;i++){
    arr.push(reverseNumber(i))
    arr.sort((a,b)=>b-a);
}

console.log(arr[0])





