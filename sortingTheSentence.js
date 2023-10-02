let s = "is2 sentence4 This1 a3"
let splitWord = s.split(' ');
let temp = 0;
let arr = [];
for(let i=0;i<splitWord.length-1;i++){
    if(splitWord[i][splitWord[i].length-1]>splitWord[i+1][splitWord[i+1].length-1]){
        temp = splitWord[i];
        splitWord[i]=splitWord[i+1];
        splitWord[i+1]=temp
        i=-1
    }
}

let data = splitWord.map((word)=>word.slice(0,-1))

console.log(data.join(' '))
// let joinArray = splitWord.join('');

// console.log