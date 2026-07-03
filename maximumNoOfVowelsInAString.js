let s = "abciiidef"
let k = 3;
let vowel = ["a","e","i","o","u"];

let windowLength = 0;


for(let i=0;i<k;i++){
    if(vowel.includes(s[i])){
        windowLength++;
    }
};

console.log(windowLength);

let maxLength = windowLength;

for(let i=k;i<s.length;i++){
    console.log(s[i])
    if(vowel.includes(s[i-k])){
       console.log(windowLength)
       windowLength--;
    }
    if(vowel.includes(s[i])){
        console.log(windowLength)
        windowLength++
    }

    maxLength = Math.max(maxLength,windowLength);
}

console.log(maxLength);