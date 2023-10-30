let s = "lEeTcOdE";

for(let i=0;i<s.length-1;i++){
    if(s[i].toLocaleUpperCase()===s[i+1].toLocaleUpperCase() && s[i].toLocaleLowerCase()===s[i+1].toLocaleLowerCase()){
        console.log(s[i].toLocaleUpperCase())
    }
}