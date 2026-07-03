let s = "the sky is blue";
let splitS = s.split('');
let left = 0;
let right = splitS.length-1;
while(left<right){
    let temp = splitS[left];
    splitS[left] = splitS[right];
    splitS[right] = temp;

    left++;
    right--;
}
    let totalWord = splitS.length;
    let start = 0;
    for(let i=0;i<=totalWord;i++){
        if(i===totalWord||splitS[i]===' '){
            let wordStart = start;
            let wordEnd = i-1;
            while(wordStart<wordEnd){
                let temp = splitS[wordStart];
                splitS[wordStart] = splitS[wordEnd];
                splitS[wordEnd] = temp;

                wordStart++;
                wordEnd--
            }
            start = i+1;
        }
    }


console.log(splitS.join(''));
