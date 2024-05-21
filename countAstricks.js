let s = "iamprogrammeryo|uar|e**|b|e***au|tifu|l"
let splitString = s.split('|');
let wordCount = 0;

function countWordAstrics(word){
    let count = 0;
    for(let i=0;i<word.length;i++){
        if(word[0]!=='*'){
            if(word[i]==='*'){
                count = count+1
            }
        }
    }
    return count;
}

for(let i=0;i<splitString.length;i++){
    wordCount = wordCount+countWordAstrics(splitString[i])
}

console.log(wordCount)