

let nums = [1,2,3]

let obj = {};
  let result =  [];
  let limit = Math.floor(nums.length/3)
    for(let i=0;i<nums.length;i++){
    if(obj[nums[i]]==undefined){
        obj[nums[i]]=1;
    }else{
            obj[nums[i]]++
        }
    if (obj[nums[i]] > limit && result.indexOf(nums[i]) === -1) {
            result.push(nums[i]);
        }
    }

    console.log(obj)
    console.log(result)

