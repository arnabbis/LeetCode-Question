let nums = [3,30,34,5,9];
let convertNums = nums.map(ele=>ele.toString());
convertNums.sort((a,b)=>(b+a)-(a+b));
