let s = "leetcode";
let k = 2;
let count = 0;
let sum = 0;
let arr = '';
let data = {
    'a': 1,
    'b': 2,
    'c': 3,
    'd': 4,
    'e': 5,
    'f': 6,
    'g': 7,
    'h': 8,
    'i': 9,
    'j': 10,
    'k': 11,
    'l': 12,
    'm': 13,
    'n': 14,
    'o': 15,
    'p': 16,
    'q': 17,
    'r': 18,
    's': 19,
    't': 20,
    'u': 21,
    'v': 22,
    'w': 23,
    'x': 24,
    'y': 25,
    'z': 26
};

for(let ele of s){
    if(data[ele]){
        arr = arr+data[ele]
    }
}
console.log(arr)  
// 12552031545
while(k!==count){
    sum = 0;
    for(let i=0;i<arr.length;i++){
        sum = sum+parseInt(arr[i])
    }
    arr = sum.toString();
    console.log(arr)
    count++
}
console.log(sum)