let nums =[8267,8727,2649,7359,2142,7824,7399,3424,8868,476,9769,4631,6631,4205,9178,7920,4748,5523,74,5550,516,6448,3475,7867,7041,5896,4382,2066,8101,674,67,9311,4308,1693,4586,3959,2973,2158,5067,9060,2988,1147,1746,9722,8550,9126,3029,1677,4154,5473,6589,5381,1486,8699,792,8349,6773,496,4505,6163,6843,1232,4809,4432,6251,7658,4949,1419,7005,3815,6295,4635,7785,4891,6941,6952,7218,134,2718,7409,9551]
let storeEven = [];
let obj = {};

for(let i=0;i<nums.length;i++){
    if(nums[i]%2==0){
        storeEven.push(nums[i])
    }
}

for(let i=0;i<storeEven.length;i++){
    if(obj[storeEven[i]]==undefined){
        obj[storeEven[i]]=1;
    }else{
        obj[storeEven[i]]++
    }
}
console.log(obj)
let value = -Infinity;
let key = null
for(let ele in obj){
    if(obj[ele]>value || (obj[ele] === value && ele < key)){
        value = obj[ele]
        key=ele
    }else{
        if(obj[ele]===1 && ele<key){
            value=obj[ele];
            key=ele
        }
    }
}
console.log(key)
console.log(parseInt(key))

