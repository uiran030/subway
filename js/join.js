var optlist='';

var now = new Date()
var year = now.getFullYear()
for (let i=year; i>=1900; i--) {
    optlist += `<option value="${i}">${i}</option>`
}
// console.log(optlist)
document.getElementById('birthyear').innerHTML = optlist

var optmonth='';
for (let i=1; i<=12; i++) {
    optmonth += `<option value="${i}">${i}</option>`
}
document.getElementById('birthmonth').innerHTML = optmonth

var optday='';
for (let i=1; i<=31; i++) {
    optday += `<option value="${i}">${i}</option>`
}
document.getElementById('birthday').innerHTML = optday