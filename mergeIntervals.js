let intervals =[[1,4],[1,4]];
let flatArray = intervals.flat();
let arr = [];
for(let i=1;i<flatArray.length;i++){
    if(flatArray[i]-flatArray[i-1]<=0){
        arr.push(flatArray[i-1],flatArray[i])
    }
}
let newArr = flatArray.filter(ele=>!arr.includes(ele));
function pairElements(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i += 2) {
      result.push(arr.slice(i, i + 2));
    }
    return result;
  }

console.log(pairElements(newArr))
  
  