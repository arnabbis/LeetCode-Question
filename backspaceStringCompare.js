let s = "ab#c#"
let t = "ad#c"

function checkBackspace(str){
let arr = [];
for(let i=0;i<str.length;i++){
    if(str[i]==="#"){
        if(arr.length>0){
            arr.pop();
        }else{
            arr.push(str[i])
        }
    }
}
    return arr.join('');

}

console.log(checkBackspace(s)===checkBackspace(t))

