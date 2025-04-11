let smallestPostive = [...new Set([1,2,3,4,5,0,6,2,-8,-7].filter(ele=>ele>=1).sort((a,b)=>a-b))];
let found = 1;
for(let i=0;i<smallestPostive.length;i++){  
    if(smallestPostive[i]==found){
        found++;
    }else{
        console.log(found);
        return;
    }
}
console.log(smallestPostive[smallestPostive.length-1]+1);
