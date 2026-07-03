let a = [1,3,4,6,10,13];
let target = 16;

let left = 0;
let right = a.length-1;

while(left<right){
    let sum = a[left]+a[right];
    if(sum===target){
        console.log(a[left],a[right]);
        break;
    }else if(sum<target){
        left++;
    }else{
        right--
    }
}

