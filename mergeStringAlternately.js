let word1 = "ab"
let word2 = "pq"
let arr=[];
word1.length>word2.length?le=word1.length:le=word2.length;
    for(i=0;i<le;i++){
        arr.push(word1[i],word2[i])
    }
    console.log(arr.join(''));
