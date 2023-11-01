let data = "A man, a plan, a canal: Panama"
let lowercase = data.toLocaleLowerCase();
let removeNonalphanumeric = lowercase.replace(/[^a-zA-Z0-9]/g, '');
console.log("operations after every check",removeNonalphanumeric)

let store = '';
for(let j=removeNonalphanumeric.length-1;j>=0;j--){
    store = store+removeNonalphanumeric[j]
}
console.log("reverse the string",store)
if(removeNonalphanumeric===store){
    console.log(true)
}else{
    console.group(false)
}