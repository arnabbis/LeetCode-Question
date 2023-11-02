let nums1 =[3,1];
let nums2 =[2,3];
let nums3 = [1,2];
let store = [];
for(let i=0;i<nums1.length;i++){
    for(let j=0;j<nums2.length;j++){
        if(nums3.includes(nums1[i])){
            store.push(nums1[i])
        }
        if(nums3.includes(nums2[j])){
            store.push(nums2[j])
        }
        if(nums2.includes(nums1[i])){
            store.push(nums1[i]);
        }
    }
}
console.log(store)
let newSet = new Set(store);

let newArr = [...newSet];
console.log(newArr)
