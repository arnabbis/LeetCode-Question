// Return squares of a sorted array in sorted order.

let nums = [-4,-1,0,3,10];

let left = 0;
let right = nums.length-1;

while(left<right){
    let temp = nums[left]*nums[left];
    nums[left] = nums[right]*nums[right];
    nums[right] = temp;

    left++;
    right--;
}

console.log(nums.sort((a,b)=>a-b))