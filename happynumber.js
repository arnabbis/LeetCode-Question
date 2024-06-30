let j=19;
let happyNumber = false;
let storeData = new Set()
while(j>=1){
    let splitEle = j.toString().split('').map(ele=>ele*ele).reduce((acc,curr)=>acc+curr,0)
    if(splitEle===1){
        happyNumber = true
        break;
    }else if(storeData.has(splitEle)){
        happyNumber = false
        break;
    }else{
        storeData.add(splitEle)
        j = splitEle
    }
}
console.log(happyNumber)
