let nums1 = [2,4];
let nums2 = [1,2,3,4]
let arr = [];
function findNextGreatest(num){
    let res = false;
    for(let i=0;i<nums2.length;i++){
        if(num===nums2[i]){
            res = true;
        }
        if(res && nums2[i]>num){
            return nums2[i]
        }
    }
    return -1;
}


for(let i=0;i<nums1.length;i++){
    arr.push(findNextGreatest(nums1[i]))
}

console.log(arr)