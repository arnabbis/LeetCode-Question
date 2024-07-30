let s = "lEetcOde";

let vowel = ['a','e','i','o','u','A','E','I','O','U'];
let arr = []
s.split('').forEach((ele,index)=>{
    if(vowel.includes(ele)){
        arr.push(index)
    }
})
let sortArray = arr.map(index=>s[index]).sort((a,b)=>a.charCodeAt()-b.charCodeAt());
console.log(sortArray)

let splitS = s.split('');
for(let i=0;i<arr.length;i++){
    splitS[arr[i]] = sortArray[i]
}

console.log(arr.length>0?splitS.join(''):s)