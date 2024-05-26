let date = "26th May 1960"
let month = [{"Jan": '01'}, {"Feb":'02'}, {"Mar":'03'}, {"Apr":'04'}, {"May":'05'}, {"Jun":'06'}, {"Jul":'07'}, {"Aug":'08'}, {"Sep":'09'}, {"Oct":'10'}, {"Nov":'11'}, {"Dec":'12'}]
let removeDate = date.split(' ');
let checkDate = removeDate[0].replace(/[a-zA-Z_\-]/g, ' ').trim();
console.log(removeDate)
let findMonth = month.find((ele)=>Object.keys(ele)[0]===removeDate[1]);

console.log(`${removeDate[2]}-${Object.values(findMonth).join('')}-${checkDate.length===2?checkDate:`0${checkDate}`}`)