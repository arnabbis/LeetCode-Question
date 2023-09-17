let s = "anagram"; 
let t = "nagaramt";

let splitfirst = s.split('').sort().join('');
let splitsecond = t.split('').sort().join('');
console.log("first word",splitfirst)
console.log("second word", splitsecond)
if(splitfirst===splitsecond){
    console.log("it is an anagram")
}else{
    console.log("it is not a anagram")
}

