let sentence = "he bought 2 pencils, 3 erasers, and 1  pencil-sharpener."
let findCorrcetWord = [];
function findValidWord(num){
    if(num===''){
        return false;
    }
    const specialCharacters = [',', '!', '.'];
    const indices = [];
    let specialCharrecterError = true;
    let foundHypenAtEndAndBeginig = true;
    let isNotNumber = true;
    for(let i=0;i<num.length;i++){
        if(!isNaN(parseInt(num[i]))){
            isNotNumber = false;
            break;     
        }
    }
    if(num[0]==='-'||num[num.length-1]==='-' ){
        foundHypenAtEndAndBeginig = false;
    }
    for(let i=0;i<num.length;i++){
        if(specialCharacters.includes(num[i])){
            indices.push(i);
        }
    }
    if (
        (indices.length === 1 && (indices[0] === 0 || indices[0] === num.length - 1)) ||
        (indices.length > 1 && indices[0] === 0 && indices[indices.length - 1] === word.length - 1)
      ) {
        specialCharrecterError = false;
      }
    
    return isNotNumber && foundHypenAtEndAndBeginig && specialCharrecterError
}

let splitWord = sentence.split(' ');
console.log(splitWord)
for(let i=0;i<splitWord.length;i++){
    if(findValidWord(splitWord[i])===true){
        findCorrcetWord.push(splitWord[i]);
    }
}
console.log(findCorrcetWord)
console.log(findCorrcetWord.length)