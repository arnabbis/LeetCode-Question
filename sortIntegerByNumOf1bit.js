let arr = [1024,512,256,128,64,32,16,8,4,2,1];

let sortArr = arr.sort((a,b)=>a-b).map(ele=>[ele,ele.toString(2).split('1').length-1]).sort((a,b)=>a[1]-b[1]).map(ele=>ele[0]);
console.log(sortArr)
