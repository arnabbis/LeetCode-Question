let items =[["phone","blue","pixel"],["computer","silver","phone"],["phone","gold","iphone"]];
let ruleKey = "type";
let ruleValue = "phone";
let count = 0;

function findCount(array,ruleKey,ruleValue){
    if(ruleKey==='color' && array[1] === ruleValue ){
        count = count+1
    }else if(ruleKey === 'type' && array[0] === ruleValue){
        count = count+1
    }else if(ruleKey === 'name' && array[2] === ruleValue){
        count = count+1
    }
    return count;
}

let findCountEkle;
for(let i=0;i<items.length;i++){
    findCountEkle = findCount(items[i],ruleKey,ruleValue)
}

console.log(findCountEkle)
