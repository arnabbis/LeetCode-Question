let score = [5,4,3,2,1];
let soetArray = [...score].sort((a,b)=>b-a);
let arr = [];
let ele = [];
let store = [];
let inedx = 1;
for(let i=0;i<soetArray.length;i++){
        arr.push([soetArray[i],(inedx++).toString()])
}

for(let i=0;i<score.length;i++){
    for(let j=0;j<arr.length;j++){
        if(arr[j][0]==score[i]){
            ele.push(arr[j][1]);
            break;
        }
    }
}


for(let i=0;i<ele.length;i++){
    if(ele[i]==='1'){
        store.push("Gold Medal");
    }else if(ele[i]==='2'){
        store.push("Silver Medal");
    }else if(ele[i]==='3'){
        store.push("Bronze Medal")
    }else{
        store.push(ele[i])  
    }
}

console.log(store)

