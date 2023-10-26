let nums = [1,2,3,4,5,6,7];
let k = 3;


function rotate(nums, k) {
    let spliceEle = nums.splice(-k);
    // console.log(spliceEle)
    let storeArray = [...spliceEle,...nums];
    // console.log(storeArray)
    return storeArray;
    };
// console.log(nums,k)
let data = rotate(nums,k);

console.log(data)