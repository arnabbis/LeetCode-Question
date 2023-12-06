let nums1 = [4,9,5];
let nums2 = [9,4,9,8,4];
let store = [];
for(let i=0;i<nums1.length;i++){
    if(nums2.includes(nums1[i])){
        store.push(nums1[i])
    }
}

let newArr = new Set(store);
let array = [...newArr];
console.log(array)


