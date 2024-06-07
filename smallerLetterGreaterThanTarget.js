let letters = ["x","x","y","y"];
let target = "z";
let found = letters[0] ;
for(let i=0;i<letters.length;i++){
    if(letters[i].charCodeAt()>target.charCodeAt()){
        found = letters[i];
        break;
    }
}

console.log(found)
