// function mergearr(arr, m, arr1, n) {
let arr = [1,2,3,0,0,0];
let arr1 = [2,5,6];

  let   m = arr.length;

   let  n = arr1.length;

    for(let i=0;i<arr.length;i++){
        if(arr[i]===0){
            arr.splice(i,1)
            i--;
        }
    }
  if (n === 0) {
    return arr;
  } 
  console.log("first array after removing space",arr)
  for(let i=0;i<arr1.length;i++){
    arr.push(arr1[i])
  }
  console.log(arr.sort())
// }


