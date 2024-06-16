let nums = [4,1,3];
let joinArray = [];
let evenNo = nums.filter((ele,index)=>index%2==0).sort((a,b)=>a-b);
let oddNo = nums.filter((ele,index)=>index%2!==0).sort((a,b)=>b-a);
let evenIndex = 0;
let oddIndex = 0;


for(let i=0;i<nums.length;i++){
    if(i%2==0){
        joinArray.push(evenNo[evenIndex])
        evenIndex++
    }else{
        joinArray.push(oddNo[oddIndex])
        oddIndex++
    }
}


console.log(evenNo.length===1 && oddNo.length===1?nums:joinArray)