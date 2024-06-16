let salary = [1000,2000,3000];
let sortSalary = [...salary].sort((a,b)=>a-b);
let filterArr = sortSalary.reduce((acc,curr)=>curr+acc,0)-(sortSalary[0]+sortSalary[sortSalary.length-1]);
console.log(filterArr/(sortSalary.length-2))
