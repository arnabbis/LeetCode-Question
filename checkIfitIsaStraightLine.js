let coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]];

let currentValue = 0;
let [x1,y1] = coordinates[0];
let [x2,y2] = coordinates[1];
let initialSlope = (y2-y1)/(x2-x1)
console.log(initialSlope)

for(let i=2;i<coordinates.length;i++){
    const [xPrev, yPrev] = coordinates[i - 1];
        const [xCurr, yCurr] = coordinates[i];
        const currentSlope = (yCurr - yPrev) / (xCurr - xPrev);

        if (currentSlope !== initialSlope) {
            console.log(false);
        }

    console.log(true)

}



