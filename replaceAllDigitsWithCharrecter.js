let s = "a1b2c3d4e";
let store = '';

for (let i = 0; i < s.length; i++) {
    if (!isNaN(s[i])) {
        console.log(store.charCodeAt(store.length-1))
        let z = store.charCodeAt(store.length-1)+parseInt(s[i])
        console.log(z)
        store = store+String.fromCharCode(z)
    } else {
        store += s[i];
    }
}

console.log(store);

