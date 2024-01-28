let s = "booe";
let vowels = ["a","e","i","o","u","A","E","I","O","U"];
let midpoint = Math.floor(s.length/2);
let obj = {};
let obj1 = {};
let firsthalf = s.substring(0,midpoint);
let secondhalf = s.substring(midpoint);
console.log("firsthalf",firsthalf);
console.log("secondhalf",secondhalf);

for(let i=0;i<firsthalf.length;i++){
    obj[firsthalf[i]] = (obj[firsthalf[i]]||0)+1
}
console.log(obj)
for(let i=0;i<secondhalf.length;i++){
    obj1[secondhalf[i]]=(obj1[secondhalf[i]]||0)+1;
}

let countObj = 0;
let countObj1 = 0;
for(let ele in obj){
    if(vowels.includes(ele)){
        countObj=countObj+obj[ele];
    }
}
console.log("count of first object",countObj)
for(let ele in obj1){
    if(vowels.includes(ele)){
        countObj1=countObj1+obj1[ele];
    }
}

console.log("count of second object",countObj1);

if(countObj===countObj1){
    console.log(true);
}else{
    console.log(false);
}
