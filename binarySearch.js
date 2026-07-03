let nums = [-1,0,3,5,9,12], target = -1;


    let left = 0;
    let right = nums.length-1;
    
    while(left<right){
            let mid = Math.floor((left+right)/2);
            if(target===nums[mid]){
                console.log(mid);
                break;
            }
            else if(target>nums[mid]){
                left = mid+1;
            }else{
                right = mid-1
            }
    }


