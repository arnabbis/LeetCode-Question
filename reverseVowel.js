let s = "leetcode";

function reverseVowel(s){
    let arr = s.split('');
    let a = 0;
    let b = s.length-1;
    while(a<b){
        while(a<b && !checkVowel(arr[a])){
            a++
        }
        while(a<b && !checkVowel(arr[b])){
            b--
        }

        let temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;

        a++;
        b--;
    }
    return arr.join('');
}

function checkVowel(char){
    let vowels = ["a","e","i","o","u"];
    return vowels.includes(char.toLowerCase());
}


let data = reverseVowel(s);
console.log(data);

