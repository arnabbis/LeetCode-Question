let nums =[10,2,10,9,1,6,8,9,2,8];
let k = 5;
let store = [];
for(let i=0;i<nums.length-1;i++){
    for(let j=i+1;j<nums.length;j++){
        if(Math.abs(nums[i]-nums[j])===k){
            store.push([i,j])
        }
    }
}
console.log(store)
console.log(store.length)