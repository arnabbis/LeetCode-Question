let data = 1534236469;
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
console.log("convert to number",convertNum)
//  9646324351