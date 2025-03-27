let sentence = "cat and  do1g"


function checkWordContainsNumbers(sentence){
    const CheckWordContainsNumber = sentence.split(' ').filter(ele=>ele!=="")
    const wordsWithNumbers = CheckWordContainsNumber.filter(word => /\d/.test(word));
    console.log(wordsWithNumbers)
    return wordsWithNumbers.length==0?true:false;
}


let checkNumber = checkWordContainsNumbers(sentence);
console.log(checkNumber);