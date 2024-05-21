let num = 430043;
let k = 2;
let arr = [];
for(let i=0;i<num.toString().length;i++){
    for(let j=i+1;j<=num.toString().length;j++){
        arr.push(num.toString().substring(i,j))
    }

}

arr = arr.filter((ele)=>ele.length==k && num%parseInt(ele)===0);

console.log(arr)

