let digits = [2,1,3,0];
let store = [];
for(let i=0;i<digits.length;i++){
    for(let j=0;j<digits.length;j++){
        for(let k=0;k<digits.length;k++){
            if(i!==j && j!==k && k!==i){
                let num = digits[i]*100+digits[j]*10+digits[k];
                if(num.toString().length===3 && num%2==0){
                store.push(num)
            }
        }
        }
    }
}

let newArr = new Set(store);
let arr = [...newArr].sort((a,b)=>a-b)
console.log(arr);

