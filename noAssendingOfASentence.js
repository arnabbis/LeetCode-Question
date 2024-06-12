let s = "1 box has 3 blue 4 red 6 green and 6 yellow marbles";

let data = s.replace(/[a-z]/g,'').split(' ').filter(ele=>ele!=='');
console.log(data)
let larger = true;
for(let i=0;i<data.length;i++){
    if(parseInt(data[i+1])<=parseInt(data[i])){
        larger = false;
        break;
    }
}

console.log(larger)