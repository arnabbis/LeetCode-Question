let word = "arzquwnjyn" ;
let ch = "j";
let indexOdCh = word.indexOf(ch)
console
let spliceWord = word.slice(0,indexOdCh);
let nextPart = word.slice(indexOdCh+1);
console.log(nextPart)
console.log(spliceWord)
for(let i=spliceWord.length-1;i>=0;i--){
    ch = ch + spliceWord[i];
}

console.log(ch+nextPart)


