let word = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"];
let data
let max = 0; 
for(let i=0;i<word.length;i++){
    data = word[i].split(' ')
    if(data.length>max){
        max = data.length
    }
    }
    console.log(max)





