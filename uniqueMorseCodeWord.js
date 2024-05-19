let moreseWord = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
let alphabets = [];
let store = [];

for(let i=97;i<=122;i++){
    alphabets.push(String.fromCharCode(i))
};

let alphaMorse = [];

for(let i=0;i<alphabets.length;i++){
    alphaMorse.push({char:alphabets[i],key:moreseWord[i]})
}


function findWordMorse(word) {
    let addString = '';
    for (let j = 0; j < word.length; j++) {
      for (let i = 0; i < alphaMorse.length; i++) {
        if (alphaMorse[i].char === word[j]) {
          addString += alphaMorse[i].key;
          break;  // Once we find the character, break out of the loop
        }
      }
    }
    return addString;
  }
  


for(let i=0;i<words.length;i++){
    store.push(findWordMorse(words[i]))
}

const removeDublicate = new Set(store);

console.log([...removeDublicate].length)