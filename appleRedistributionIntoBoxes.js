let apple = [1,3,2];
let capacity = [4,3,1,5,2];
let count = 0;
let sumApple = apple.reduce((acc,curr)=>acc+curr,0);
let sortArray = capacity.sort((a,b)=>b-a);
let sum = 0;

for(let i=0;i<sortArray.length;i++){
    sum = sum+sortArray[i];
    count++
    if(sum===sumApple){
        break
    }
}
