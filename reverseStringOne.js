let string =  "Let's take LeetCode contest";

let splitDta = string.split(' ')
console.log(splitDta)
let arr = []
for(let i=0;i<splitDta.length;i++){
    console.log(splitDta[i])
    let rev = '';
    for(let j=splitDta[i].length-1;j>=0;j--){
        rev=rev+splitDta[i][j]
    }
    arr.push(rev)
}

console.log(arr.join(' '))