let sequence = "aa";
let word = "aa";
let arr = [];
for(let i=0;i<sequence.length;i++){
    for(let j=1;j<sequence.length;j++){
        arr.push(sequence.slice(i,j))
    }
}

let findWord = arr.filter(ele=>ele===word);
console.log(findWord.length)