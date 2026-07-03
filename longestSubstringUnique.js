let s = "abcabcbb";
let left = 0;
let maxLength = 0;
let set = new Set();

for(let right=0;right<s.length;right++){
    while(set.has(s[right])){
        set.delete(s[left]);
        left++;
    }
    set.add(s[right]);
    console.log(set)
        console.log("after before length...{}",maxLength)
    maxLength = Math.max(maxLength,right-left+1)
    console.log("after check length...{}",maxLength)
}

console.log(maxLength)