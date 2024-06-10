let paths = [["B","C"],["D","B"],["C","A"]];


let firstEle = new Set(paths.map((ele)=>ele[1]));
let zeroElement = new Set(paths.map((ele)=>ele[0]));
for(let ele of firstEle){
    if(!zeroElement.has(ele)){
        console.log(ele)
        break;
    }
}

