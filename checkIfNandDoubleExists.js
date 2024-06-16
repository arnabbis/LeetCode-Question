let arr = [7,1,14,11];
let found = false;
for(let i=0;i<arr.length;i++){
    for(let j=0;j<=arr.length;j++){
        if (i !== j && (arr[i] == 2 * arr[j] || arr[j] == 2 * arr[i])) {
            found = true;
            break;
        }
    }
    if(found){
        break;
    }
};

console.log(found);
