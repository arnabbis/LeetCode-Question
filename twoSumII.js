let numbers = [2,7,11,15]
let target = 9;
let left = 0;
let right = numbers.length-1;
let storeArray = [];

while(left<right){
    let sum = numbers[left]+numbers[right];
    if(sum===target){
        storeArray.push(numbers[left],numbers[right]);
        break;
    }else if(sum<target){
        left++
    }else{
        right--
    }
}
console.log(storeArray)

