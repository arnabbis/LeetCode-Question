let arrivalTime = 1;
let delayedTime = 24; 

let totalArrival = arrivalTime+delayedTime;

let findMin = totalArrival*60;
let findHR = Math.floor(findMin/60);
let mins = findHR%60

if(findHR>=24){
    findHR= findHR%24
    mins=0;
}

const formattedTime = findHR

if(formattedTime==0){
    console.log(0)
}else{
    console.log(formattedTime)
}