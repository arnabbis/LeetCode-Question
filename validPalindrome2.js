let a = "raceacar";

function findStringPalindrome(s){
let first = 0;
let last = s.length-1;
while(first<last){
    if(a[first]!==a[last]){
        return findPalindrome(a,first+1,last)|| findPalindrome(a,first,last-1)
    }
    first++;
    last--;
}
return true;
}


function findPalindrome(str,left,right){
    while(left<right){
        if(str[left]!==str[right]){
            return false;
        }
        left++;
        right--
    }
    return true;
}