class add {
    addNum(a1,b1){
        this.a1 = a1;
        this.b1 = b1;
        let add = a1+b1;
        return add;
    }
}

class substract {
    subStract(){
        let getData = new add();
        return getData.addNum(2,0)-2;
    }
    checkBollean(){
        let charele = this.subStract();
        return charele>0;
    }
}

let data = new add();
let subData = new substract();
console.log(data.addNum(1,2));
console.log(subData.subStract());
console.log(subData.checkBollean());



