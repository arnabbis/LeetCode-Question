let s = "abc1111";
let number = [...new Set(s.split('').filter(ele=>!isNaN(ele)))].sort();
console.log(number.length>1?number[number.length-2]:-1)
