String.prototype.getNumbers = function(){
    return this.split('').map(ele=>parseInt(ele)).filter(ele=>!isNaN(ele)).reverse();
}


const data = "12345wes";
console.log(data.getNumbers())