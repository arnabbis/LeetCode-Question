let image = [[1,1,0],[1,0,1],[0,0,0]];

let data = image.map(ele=>ele.reverse().join('').replace(/[01]/g,match=>{
    return match=='0'?'1':'0'
}).split(''));
console.log(data)

