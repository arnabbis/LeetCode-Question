let string = '0123456789';
let splitstring = string.split('');
let data = "456 is my best no ";
let removeNum = [];
let stringData = ''
let splitdata = data.split('')

for(let i=0;i<splitdata.length;i++){
    if(splitstring.includes(splitdata[i])&& !removeNum.includes(splitdata[i])){
        removeNum.push(splitdata[i])
    }
}

for(let j=0;j<removeNum.length;j++){
    stringData = parseInt(stringData+removeNum[j])
}

console.log(stringData)


