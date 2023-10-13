let data = 1534236469;
const min32BitInteger = -Math.pow(2, 31);
const max32BitInteger = Math.pow(2, 31) - 1;
console.log(min32BitInteger);
console.log(max32BitInteger)
let convert = data.toString();
let splitdata = convert.split('');
let negetive = false;
if(splitdata[0]==='-'){
    negetive = true;
    splitdata = splitdata.splice(1);
}
let string = '';
for(let i=splitdata.length-1;i>=0;i--){
    string = string+splitdata[i]
};
if(negetive){
    string = '-'+string
}

let convertNum = parseInt(string);
if(convertNum<=  -min32BitInteger || convertNum>= max32BitInteger){
    console.log("out of range")
}else{
    console.log(convertNum)
}
