let num = 1234;
let numArray = num.toString().split('');
let evenData = numArray.filter(ele=>parseInt(ele)%2==0).sort((a,b)=>parseInt(b)-parseInt(a))
let oddData =  numArray.filter(ele=>parseInt(ele)%2!==0).sort((a,b)=>parseInt(b)-parseInt(a))
console.log("odd data",oddData)
function swapValues(arr, i, j) {
    console.log(arr,i,j)
    if (i < 0 || i >= arr.length || j < 0 || j >= arr.length) {
        throw new Error("Index out of range");
    }
[arr[i], arr[j]] = [arr[j], arr[i]];
return arr;

}

let swapEvenValues = swapValues(numArray,numArray.indexOf(evenData[1]),numArray.indexOf(evenData[0]));
let swapOddValues = swapValues(swapEvenValues,swapEvenValues.indexOf(oddData[1]),swapEvenValues.indexOf(oddData[0]));
console.log(parseInt(swapOddValues.join('')))