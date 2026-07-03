let s = "A man, a plan, a canal: Panama";

function findPalindromeOrNot(s){
    let a = 0;
    let b = s.length-1;
    while(a<b){
            while(a<b && !isAlphaNumeric(s[a])){
                a++;
            }
            while(a<b && !isAlphaNumeric(s[b])){
                b--
            }

            if(s[a].toLowerCase() !== s[b].toLowerCase()){
                return false
            }
            a++;
            b--
    }
    return true;
}


function isAlphaNumeric(char) {
    return /^[a-z0-9]$/i.test(char);
}

let data = findPalindromeOrNot(s);
console.log(data)