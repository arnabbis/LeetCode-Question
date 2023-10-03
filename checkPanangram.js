let sentence = "thequickbrownfoxjumpsoverthelazydog";

const data = new Set(sentence);
let arr =[...data]

if(arr.length!==26){
    console.log(false)
}else{
    console.log(true)
}