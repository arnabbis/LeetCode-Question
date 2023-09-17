let haystack = "sadbutsad";
let needle = "sad";

for(let i=0;i<haystack.length;i++){
    if(haystack[i]===needle){
        console.log(i);
        break;
    }else{
        console.log(-1)
    }
}