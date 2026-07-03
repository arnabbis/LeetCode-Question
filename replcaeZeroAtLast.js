let s = "a0b0c0d";

function replcaeZero(str){
    let char = [];
    let zero = [];
    for(let i=0;i<str.length;i++){
        if(str[i]==="0"){
            zero.push(str[i])        
        }else{
            char.push(str[i])
        }
    }
    return char.join('')+zero.join('');
}

console.log(replcaeZero(s));