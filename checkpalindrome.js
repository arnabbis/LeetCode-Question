let data = "A man, a plan, a canal: Panama";
let lowercase = data.toLocaleLowerCase();
let dsplitdata = lowercase.split('')
for(let i=0;i<dsplitdata.length;i++){
    if(dsplitdata[i]==' '){
       dsplitdata.splice(i,1)
       i--
    }
    if(dsplitdata[i]==','){
        dsplitdata.splice(i,1)
        i--
     }
     if(dsplitdata[i]==':'){
        dsplitdata.splice(i,1)
        i--
     }
}
console.log("removing every thing",dsplitdata)
let jointhestring = dsplitdata.join('');
let store = '';
for(let j=jointhestring.length-1;j>=0;j--){
    store = store+jointhestring[j]
}
console.log("after reversing ",store)
if(jointhestring===store){
    console.log("palindrome");
}else{
    console.log("not a palindrome")
}

// "amanaplanacanalpanama"