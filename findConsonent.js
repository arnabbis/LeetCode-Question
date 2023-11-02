let flag = false;
let str = "arnab";
let storeData = [];
let store = '';
let vowel =  ['a', 'e', 'i', 'o', 'u'];
let i;
for(i=0;i<str.length;i++){
    for(let j=0;j<vowel.length;j++){
        if(str.charAt(0)===vowel[j]){
            console.log(str+"way");
        }else{
            if(str[i]===vowel[j]){
                flag=true;
                break;
            }
        }
    }
    if(flag){
        break;
    }
    store+=str[i];
    if(i!==0){
        console.log(str.slice(i)+store+"ay")
    }
}
