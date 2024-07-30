let nums = ["12345678901234567890","98765432109876543210"];
let k = 2;

let newArr = nums.map(ele => BigInt(ele)).sort((a, b) => {
    if (a > b) return -1;
    if (a < b) return 1;
    return 0
});
console.log(newArr)
console.log(newArr[k-1].toString())