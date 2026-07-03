let nums = [12, -1, -7, 8, -15, 30, 16, 28];
let k = 3;
let arr = [];
let res = [];

for (let i = 0; i < nums.length; i++) {
  if (nums[i] < 0) {
    arr.push(i);
  }

  if (i >= k - 1) {
    while (arr.length > 0 && arr[0] < i - k + 1) {
      arr.shift();
    }
    if (arr.length > 0) {
      res.push(nums[arr[arr.length - 1]]);
    } else {
      res.push(0);
    }
  }
}

console.log(res);
