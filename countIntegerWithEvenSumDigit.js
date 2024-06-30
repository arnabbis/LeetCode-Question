let num = 30;
let count = 0;
let data = 0;
function digitSum(n) {
    let sum = 0;
    while (n > 0) {
        sum += n % 10;      // Extract the last digit and add to sum
        n = Math.floor(n / 10);  // Remove the last digit
    }
    return sum;
}

while(num>1){
    if(digitSum(num)%2==0){
        count++
    }
    num = num-1
}

console.log(count)
