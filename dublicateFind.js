const dublicate = [1,1,2,4,21,10,3,4,6,7,10,7,21];
let map = new Map();
let arr = [];
for(let i=0;i<dublicate.length;i++){
    if(map.get(dublicate[i])){
        arr.push(dublicate[i]);
        map.set(dublicate[i],map.get(dublicate[i]+1))
    }else{
        map.set(dublicate[i],1)
    }
}

console.log(arr);

