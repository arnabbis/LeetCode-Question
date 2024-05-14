let nums1 = [1,2];
let  nums2 =[1,1];
let storeArray = [];
let newArray = new Set(nums2);

console.log(newArray);

for(let i=0;i<nums1.length;i++){
    if(newArray.has(nums1[i])){
        storeArray.push(nums1[i])
    }
}

console.log(storeArray)

