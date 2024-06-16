let nums = [-1,-2,3,4];
let k = 3;
function findSubsequences(arr) {
    let result = [];
    let uniqueSubsequences = new Set();
    
    function generate(index, current) {
        if (index === arr.length) {
            if (current.length === k) {
                let serializedCurrent = JSON.stringify(current);
                if (!uniqueSubsequences.has(serializedCurrent)) {
                    uniqueSubsequences.add(serializedCurrent);
                    result.push(current);
                }
            }
            return;
        }
        
        generate(index + 1, [...current, arr[index]]);
        generate(index + 1, current);
    }
    
    generate(0, []);
    return result;
}

function findSum(arr){
    return [arr,arr.reduce((sum, num) => sum + num, 0)]
}

let findArrSum = findSubsequences(nums).map(ele=>findSum(ele)).sort((a,b)=>b[1]-a[1]);
console.log(findArrSum[0][0])





