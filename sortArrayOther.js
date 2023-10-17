let name = ["Mary","John","Emma"]
let heights = [180,165,170]
let store = [];
let sortName = [];
for(let i=0;i<name.length;i++){
    store.push({name:name[i],heights:heights[i]})
}

let sortArr = store.sort((a,b)=>b.heights-a.heights);

for(let i=0;i<sortArr.length;i++){
    sortName.push(sortArr[i].name)
    console.log("every ele of sortArray",sortArr[i].name)

}

console.log("sorted array of name",sortName)