let s = "abccbaacz";
let store = [];


for (let i = 0; i < s.length; i++) {
  if (s[i] === s[i + 1]) {
    store.push(s[i]);
    break;
  }else{
  if (s[i] !== s[i + 1] && !store.includes(s[i])) { 
    for (let j = i + 1; j < s.length; j++) {
      if (s[i] == s[j]) {
        store.push(s[i]);
        break;
      }
    }
  }
}
}



console.log(store);
