let s = "   -042";


let negative = false;
const INT_MIN = -2147483648;
const INT_MAX = 2147483647;

function removeLeadingSpace(ele) {
    return ele.trim();
}

function checkEleNegative(ele) {
    if (ele[0] === '-') {
        negative = true;
        ele = ele.slice(1); // Remove the negative sign for further processing
    } else if (ele[0] === '+') {
        ele = ele.slice(1); // Remove the positive sign for further processing
    }
    return ele;
}

function checkNonDigitCharacter(ele, negative) {
    console.log(ele, negative);
    if (isNaN(parseInt(ele[0]))) {
        return 0; // Return 0 if the first character is not a digit
    }
    let splitEle = ele.split('');
    for (let i = 0; i < splitEle.length; i++) {
        if (isNaN(parseInt(splitEle[i]))) {
            let number = splitEle.slice(0, i).join('');
            return negative ? -parseInt(number) : parseInt(number);
        }
    }
    let number = splitEle.join('');
    return negative ? -parseInt(number) : parseInt(number);
}

function check32BitNumber(num) {
    if (num > INT_MAX) {
        return INT_MAX;
    } else if (num < INT_MIN) {
        return INT_MIN;
    }
    return num;
}


s = removeLeadingSpace(s);
s = checkEleNegative(s);
let result = check32BitNumber(checkNonDigitCharacter(s, negative));
console.log(result); 

