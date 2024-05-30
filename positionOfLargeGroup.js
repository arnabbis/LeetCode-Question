let s = "abcdddeeeeaabbbcd";
let word = s[0];
let consecutiveCount = 1;
let arr = [];
for (let i = 1; i < s.length; i++) {
    if (s[i] === word) {
        consecutiveCount++;
    } else {
        arr.push([word, consecutiveCount]);  
        word = s[i]; 
        consecutiveCount = 1; 
    }
}

console.log(arr)