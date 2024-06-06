let letters = ["c","f","j"];
let target = "a";
let found ;
for(let i=0;i<letters.length;i++){
    if(letters[i].charCodeAt()>target.charCodeAt()){
        found = letters[i];
        break;
    }
}

console.log(found)


