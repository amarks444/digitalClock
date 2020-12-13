let clock = () =>   {
const fullDate = new Date();
let hour = fullDate.getHours();
let min  = fullDate.getMinutes();
let sec  = fullDate.getSeconds();
if(hour<10)
{ hour = "0" + hour;}
if(min<10)
{ min = "0" + min;}
if(sec<10)
{ sec = "0" + sec;}
document.getElementById("hour").innerHTML = hour;
document.getElementById("min").innerHTML = ":"+min;
document.getElementById("sec").innerHTML = ":"+sec;
}
setInterval(clock,100);