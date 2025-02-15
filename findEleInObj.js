let num = 5;
let data = [1,2,3,4,5]
let index = 0;
// console.log(data);


for(let i=0;i<data.length;i++){
    if(data[i]===num){
        index = i;
        break;
    }
}

console.log(index)