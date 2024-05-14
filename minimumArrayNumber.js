let nums1 =[1,2,3,6];
let nums2 =[2,3,4,5];

let getCommonElement = [];

for(let i=0;i<nums2.length;i++){
    if(nums1.includes(nums2[i])){
        getCommonElement.push(nums2[i])
    }
}

console.log(getCommonElement)

