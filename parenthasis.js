let data = '()';

let splitdata = data.split('');
console.log(splitdata);

for(let i=0;i<splitdata.length;i++){
    if(splitdata[i+1]!==')'){
        console.log(false)
    }
    console.log(true)
}