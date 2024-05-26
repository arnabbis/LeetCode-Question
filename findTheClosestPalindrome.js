let n = "1";
let found  = false;
let number = parseInt(n);
let palindrome;

for(let i=number-1;i>=0;i--){
    if(i.toString().split('').reverse().join('')===i.toString()){
        palindrome = i;
        break;
    }
}


if(palindrome.toString()===n){
    for(let i=palindrome-1;i>=0;i--){
        if(i.toString().split('').reverse().join('')===i.toString()){
            palindrome = i;
            break;
        }
    }
}


console.log(palindrome)
