let items1 = [[1,3],[2,2]];
let items2 = [[7,1],[2,2],[1,4]];
let arr = [];

let sortItemOne = items1.sort((a,b)=>a[0]-b[0])
let sortItemTwo = items2.sort((a,b)=>a[0]-b[0]);
for(let i=0;i<sortItemOne.length;i++){
    if(sortItemOne[i][0]===sortItemTwo[i][0]){
        arr.push([sortItemOne[i][0],sortItemOne[i][1]+sortItemTwo[i][1]])
    }
}

if(items2.length>items1.length){
    let idsInItems1 = new Set(items1.map(item => item[0]));
    let filteredItems2 = items2.filter(item => !idsInItems1.has(item[0]));
    arr.push(filteredItems2)
}else if(items1.length>items2.length){
    let idsInItems1 = new Set(items2.map(item => item[0]));
    let filteredItems1 = items1.filter(item => !idsInItems1.has(item[0]));
    arr.push(filteredItems1)
}
console.log(arr)
