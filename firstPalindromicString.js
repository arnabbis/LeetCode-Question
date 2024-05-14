let words =["def","ghi"]

function findPalindrome(word){
    let palindromeWord = '';
    for(let i=word.length-1;i>=0;i--){
        palindromeWord = palindromeWord+word[i]
    }
    if(word===palindromeWord){
        return true;
    }
    return false;
}



for(let i=0;i<words.length;i++){
    if(findPalindrome(words[i])===true){
        console.log(words[i])
        break;
    }
}