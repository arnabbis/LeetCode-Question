let height = [1, 8, 6, 2, 5, 4, 8, 3, 7];

let left = 0;
let right = height.length - 1;
let maxArea = 0;

while (left < right) {
  let width = right - left;
  let currentArea = width * Math.min(height[left], height[right]);
  maxArea = Math.max(maxArea, currentArea);
  if(height[left]<height[right]){
     left++;
  }else{
    right--;
  }
}
console.log(maxArea)
