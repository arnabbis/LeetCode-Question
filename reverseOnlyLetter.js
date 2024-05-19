let s = "Test1ng-Leet=code-Q!";
let hipenArray = [];
for(let i=0;i<s.length;i++){
    if(/[^a-zA-Z]/.test(s[i])){
        hipenArray.push([s[i],i])
    }
}

console.log(hipenArray)
let data = s.replace(/[^a-zA-Z]/g,'').split('').reverse().join('')



function insertCharacterAt(word, index, character) {
    return word.slice(0, index) + character + word.slice(index);
}



for(let i=0;i<hipenArray.length;i++){
    data = insertCharacterAt(data,hipenArray[i][1],hipenArray[i][0])
}


console.log(data)