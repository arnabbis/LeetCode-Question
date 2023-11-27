let s = "abccbaacz";
let store = [];

let splitString = s.split('');
console.log(splitString);

for(let i=0;i<splitString.length;i++){
  let ele = splitString[i];
  let data = splitString.indexOf(ele);
  console.log(data);
}

