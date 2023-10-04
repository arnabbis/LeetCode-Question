let s = "l|*e*et|c**o|*de|";

let splitDta = s.split('|');

console.log("splited the data",splitDta);
let count = 0;
for(let i=0;i<splitDta.length;i++){
    if(splitDta[i].charAt(0)!=='*'){
        count++;
    }
}

console.log(count)