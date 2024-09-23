//現在日時の生成
const ymd = new Date();

//年
let year = ymd.getFullYear();

//月
let month = ymd.getMonth() + 1;

//日
let date = ymd.getDate();

console.log(year + '年' + month + '月' + date + '日');