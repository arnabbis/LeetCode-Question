let a = "abcabcbb";
let arr =[];
let max = 0
    let left = 0;
    let set = new Set();

for(let i=0;i<a.length;i++){    
    while(set.has(a[i])){
        set.delete(a[left])
        left++;
    }
    console.log(set)
    set.add(a[i])
        console.log(set)

    max = Math.max(max,i-left+1)
    console.log(max,i-left+1)   
}

console.log(max)