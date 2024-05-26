let s = "AaAaAaaA";
let count = 0;
let word = s[0].toUpperCase();


for(let i=0;i<s.length;i++){
    if(word!==s[i].toUpperCase()){
        count = count+1
        word = s[i].toUpperCase()
    }
}


console.log(count)