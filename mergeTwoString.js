let word1 = "ab"
let word2 = "pqr"

function mergeString(word1,word2){
    let arr = [];
    let i = 0;
    let minlength = Math.min(word1.length,word2.length);
    while(i<minlength){
        arr.push(word1[i]);
        arr.push(word2[i]);
        i++;
    }
    if(word1.length>i|| word2.length>i){
        let max = word1.length>word2.length?word1:word2;
        while(i<max.length){
            arr.push(max[i]);
                i++;
        }
    }
    return arr
}

console.log(mergeString(word1,word2));

