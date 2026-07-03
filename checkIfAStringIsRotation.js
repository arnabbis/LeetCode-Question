let s = "waterbottle";
let a = "erbottlewat";
let check = true;
if(a.length!==s.length){
 check = false;
}
console.log(s.concat(s))
if(!s.concat(s).includes(a)){
    check = false
}

console.log(check);

