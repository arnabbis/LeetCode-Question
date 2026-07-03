let s = "daaabcbaabcbc";
let part = "abc";
let arr = [];

for (let i = 0; i < s.length; i++) {
    arr.push(s[i]);

    if (arr.length >= part.length) {
        let lastThree = arr.slice(-part.length).join("");
        console.log(lastThree)
        if (lastThree === part) {
            arr.splice(arr.length - part.length, part.length);
        }
    }
}

console.log(arr.join(""));
