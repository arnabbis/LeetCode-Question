function anagram(a,b){
let aSort = a.split('').sort();
let bSort = b.split('').sort();
console.log(aSort);
console.log(bSort);
if(aSort.length!==bSort.length){
    return false;
}

for(let i=0;i<bSort.length;i++){
    if(bSort[i]!==bSort[i]){
        return false
    }
}
return true;
}

console.log(anagram("anagram","nagaram"))
