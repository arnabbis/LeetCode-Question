let word = "FlaG";

let data = word;
let sliceWord = word.slice(0,1);
let restWord = word.slice(1)


console.log(word===data.toLocaleUpperCase()||word===data.toLocaleLowerCase()||word.slice(0,1) === data.slice(0,1) && word.slice(1)===data.slice(1).toLocaleLowerCase()?true:false)
