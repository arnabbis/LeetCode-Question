let licensePlate = "1s3 456";
let words = ["looks","pest","stew","show"];

let replaceWord = licensePlate.split('').filter(ele=>isNaN(ele)).join('').toLocaleLowerCase();
let store = [];
function findElement(word){
    let splitWord = word.split('');
    for(let ele of replaceWord ){
        let checkeveryCharrceter = splitWord.indexOf(ele);
        if(checkeveryCharrceter===-1){
            return false;
        }
        splitWord.splice(checkeveryCharrceter, 1);
    }
    return true;
}


for(let i=0;i<words.length;i++){
    if(findElement(words[i])===true){
        store.push(words[i])
    }
}


