let arr = [4, 3, 6, 2, 4, 2, 3, 4, 3, 3];

let obj = {};

for(let i=0;i<arr.length;i++){
    if(obj[arr[i]]===undefined){
        obj[arr[i]] = 1;
    }else{
        obj[arr[i]]++;
    }
}
console.log(obj)
for(let ele in obj){
    if(obj[ele]%2==0){
        console.log(ele)
    }
}

