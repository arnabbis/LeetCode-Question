let allowed = "abc";
let words = ["a","b","c","ab","ac","bc","abc"]
let count = [];

function wordConsistentency(word){
    for(let i=0;i<word.length;i++){
        if(!allowed.includes(word[i])){
            return false
        }
    }
    return true;
}

for(let i=0;i<words.length;i++){
    if(wordConsistentency(words[i])===true){
        count.push(words[i])
    }
}

console.log(count)

