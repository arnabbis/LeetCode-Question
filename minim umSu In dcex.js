let list = ["happy","sad","good"]
let list1 = ["sad","happy","good"]

let res = [];
let found = false;


for(let i=0;i<list.length;i++){
    if(list1.includes(list[i])){
            found=true;
            if(found){
                res.push([list[i],i+list1.indexOf(list[i])]);            
            }
        }
}
let least = res.sort((a,b)=>a[1]-b[1])[0][1];

let findEle = res.filter(ele=>ele[1]==least).map(ele=>
    ele[0]
);
console.log(findEle);
