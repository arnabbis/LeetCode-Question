let s = 'zaz';
let pushedAdd = [];
let getAscii = s.split('').map((ele)=>ele.charCodeAt());

for(let i=0;i<getAscii.length-1;i++){
    pushedAdd.push(Math.abs(getAscii[i+1]-getAscii[i]));
}

const findSum = pushedAdd.reduce((acc,curr)=>acc+curr,0)

console.log(findSum)