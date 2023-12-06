let s = "azxxzy";
function removeConsecutiveDuplicates(s) {
let splitele = s.split('');
for(let i=0;i<splitele.length;i++){
    if(splitele[i]==splitele[i+1]){
        splitele.splice(i,2);
        i--;
    }
}
    let res = splitele.join('');
    if(res!==s){
        return removeConsecutiveDuplicates(res)
    }
    return res
}

let data = removeConsecutiveDuplicates(s)
console.log(data);
// console.log(store)

