let s = "leetcode";
let word = s[0];  // Start with the first character
let consecutiveCount = 1;  // Start count at 1 for the first character
let arr = [];  // Array to store the results

for (let i = 1; i < s.length; i++) {
    if (s[i] === word) {
        consecutiveCount++;
    } else {
        arr.push([word, consecutiveCount]);  
        word = s[i]; 
        consecutiveCount = 1; 
    }
}
arr.push([word, consecutiveCount]);
console.log(arr.sort((a,b)=>b[1]-a[1])[0][1])
