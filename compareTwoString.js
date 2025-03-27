let word1 = "zzzyyy";
let word2 = "iiiiii";

let wordCount = true;

const freq1 = {};
const freq2 = {};

for (let char of word1) {
    freq1[char] = (freq1[char] || 0) + 1;
}

for (let char of word2) {
    freq2[char] = (freq2[char] || 0) + 1;
}

const allChars = new Set([...Object.keys(freq1), ...Object.keys(freq2)]);
console.log(allChars)
for (let char of allChars) {
    const difference = Math.abs((freq1[char] || 0) - (freq2[char] || 0));
    if (difference > 3) {
        wordCount = false;
        break;
    }
}

console.log(wordCount);
