let nums = [0,1];
let store = 0;
let sortNums = nums.sort(); // Sorts lexicographically, which is okay for this specific case.
let data = nums.length

for (let i = 0; i <= data; i++) { // Change the loop condition to iterate up to the maximum number in the sorted array.
    if (!sortNums.includes(i)) {
        store = i;
    }
}

console.log(store)
