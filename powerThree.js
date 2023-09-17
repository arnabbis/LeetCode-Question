let num = 15;

var isPowerOfThree = function(num) {
    let base = 3;
    if(num<=0){
        return false;
    }
if(num%base!==0){
   return false
}
return true
};

console.log(isPowerOfThree(num))
