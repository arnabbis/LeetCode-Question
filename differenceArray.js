let nums = [4, 5, 6, 7, 8, 9];
let diff = 2;
let store = [];
let giveEle = [];
for (let i = 0; i < nums.length; i++) {
  console.log(nums[i]);
  for (let j = i + 1; j < nums.length; j++) {
    if (nums[j] - nums[i] == diff) {
      store.push([nums[i], nums[j]]);
    }
  }
}
console.log(store);
// const store = [[4, 6], [5, 7], [6, 8], [7, 9]];

for (let i = 0; i < store.length; i++) {
  for (let j = i + 1; j < store.length; j++) {
    if (store[i].some(element => store[j].includes(element))) {
      store.splice(j, 1);
      j--;
    }
  }
}

console.log(store);
