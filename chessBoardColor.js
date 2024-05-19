let coordinates = "c7";
let determineArray = ["a","b","c","d","e","f","g","h"];
let evenArray = [];
let oddArray = [];

function coordinateColor(s,num){
    let colorValue;
    for(let i=0;i<determineArray.length;i++){
        if(i%2==0){
            evenArray.push(determineArray[i])
        }else{
            oddArray.push(determineArray[i])
        }
    }
    if(evenArray.includes(s)){
        if(num%2==0){
            colorValue = true;
        }else{
            colorValue = false;
        }
    }else if(oddArray.includes(s)){
        if(num%2==0){
            colorValue = false;
        }else{
            colorValue = true;
        }
    }
    return colorValue;
}

let value = coordinateColor(coordinates[0],parseInt(coordinates[1]));

console.log(value)