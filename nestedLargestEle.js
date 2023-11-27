const nestedArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];


let max = nestedArray[0][0];
console.log(max)
for(let i=0;i<nestedArray.length;i++){
    for(let j=0;j<nestedArray[i].length;j++){
        if(nestedArray[i][j]>max){
            max = nestedArray[i][j]
        }
    }
}

console.log(max)