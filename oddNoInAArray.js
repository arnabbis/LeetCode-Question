let a = [4, 3, 6, 2, 4, 2, 3, 4, 3, 3]

let obj = {}

for(let i=0;i<a.length;i++){
    if(obj[a[i]]===undefined){
        obj[a[i]] = 1
    }else{
        obj[a[i]]++
    }
}

for(let ele in obj){
    if(obj[ele]%2!==0){
        console.log(ele)
    }
}