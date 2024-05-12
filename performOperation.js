let operations = ["X++","++X","--X","X--"]

function findSumValue(num){
    let x = 0;
    if(num === '--X' || num === 'X--'){
        x = x-1

    }else if( num === 'X++' || num === '++X'){
        x = x+1
    }
    return x;
}

let sum = 0;
for(let i=0;i<operations.length;i++){
    sum = sum + findSumValue(operations[i]);    
}

console.log(sum)
