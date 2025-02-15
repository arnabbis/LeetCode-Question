const a = "AAATTPOOT";
let ele = a[0];
let count = 1;
let stringEle = "";
for(let i=1;i<a.length;i++){
    console.log(a[i]);
    if(a[i]===ele){
        count++;
        console.log(count);
    }else{
        stringEle = stringEle+count+ele;
        ele = a[i];
        count = 1;
    }  
    console.log(stringEle);
}
stringEle = stringEle+count+ele;

console.log(stringEle);



