let data = [3,2,1,5,6,4];

let k = 2;


for(let i=0;i<data.length;i++){
    if(data[i]>data[i+1]){
        let teamp = data[i];
        data[i]=data[i+1];
        data[i+1]=teamp
        i=-1
    }
}
console.log(data[data.length-k])