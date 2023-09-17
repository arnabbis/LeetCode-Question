let s = ["h","e","l","l","o"];
let data = '';
for(let i = s.length-1;i>=0;i--){
    data = data + s[i]
}

let splitdata = data.split('');
console.log(splitdata)