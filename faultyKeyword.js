let s = "poiinter"

let result = '';

for(let i=0;i<s.length;i++){
    if(s[i]==='i'){
        result = result.split('').reverse().join('')
        console.log(result)
    }else{
        result = result+s[i]
    }
}

