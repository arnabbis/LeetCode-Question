let sentence = "I speak Goat Latin";
let vowels = ["a", "e", "i", "o", "u"];
let store = [];
let splitSentence = sentence.split(' ');

for (let i = 0; i < splitSentence.length; i++) {
    let word = splitSentence[i];
    let firstChar = word[0].toLowerCase();
    console.log("firstChar",firstChar)
    if (vowels.includes(firstChar)) {
        store.push(word + "ma" + "a".repeat(i + 1));
        console.log()
    } else {
        let newWord = word.substring(1) + word[0] + "ma" + "a".repeat(i + 1);
        store.push(newWord);
    }
}

console.log(store.join(' '));

