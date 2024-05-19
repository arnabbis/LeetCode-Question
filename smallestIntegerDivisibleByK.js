let k = 3;
let ele = '9';
let string = '';
let storeEle = [];
for(let i=0;i<k;i++){
    string = string+ele
}
console.log(string)
let min = 0;
while(parseInt(string)>0 && string.length==k){
    if(parseInt(string)%k==0){
        min = string;
    }
    string = (parseInt(string)-1).toString()
}

console.log(min)



