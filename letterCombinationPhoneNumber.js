let digits = "234";
let arr = [];
let data = {
    '2':"abc",
    '3':'def',
    '4':'ghi',
    '5':'jkl',
    '6':'mno',
    '7':'pqrs',
    '8':'tuv',
    '9':'wxyz'
}


function createPairs(value1,value2){
    let res = [];
    for(let i=0;i<value1.length;i++){
        for(let j=0;j<value2.length;j++){
            res.push(value1[i]+value2[j])
        }
    }
    return res;
}

let findCombinations = digits.split('');
for(let ele of findCombinations){
    if(data[ele]){
        arr.push(data[ele])
    }
}
console.log(arr)
if(arr.length===0){
    console.log([])
}else if(arr.length===1){
    console.log(arr[0].split(''))
}else{
    let res = arr[0];
    for(let i=1;i<arr.length;i++){
        res = createPairs(res,arr[i])
    }
    console.log(res)
}