let s = "textbook";

// Calculate the midpoint index
let midpoint = Math.floor(s.length / 2);

// Split the string into two halves
let firstHalf = s.substring(0, midpoint);
let secondHalf = s.substring(midpoint);

console.log("First Half:", firstHalf);
console.log("Second Half:", secondHalf);
