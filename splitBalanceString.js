let s = "RLRRLLRLRL";  
    let count = 0;
    let countL = 0;
    for(let i=0;i<s.length;i++){
        if(s[i]==='R'){
            countL = countL+1
        }else if(s[i]==='L'){
            countL = countL-1
        }
    if(countL==0){
        count = count+1
    }
}
    
    console.log(count)




