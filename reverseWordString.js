let s ="a good   example";
let str = '';
let splitS = s.split(' ')
console.log(splitS);

for(let i=0;i<splitS.length;i++){
    if(splitS[i]==''){
        splitS.splice(i,1);
        i--;
    }
}
 
console.log(splitS.reverse().join(' '))
