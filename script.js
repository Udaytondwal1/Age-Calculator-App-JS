var btn = document.querySelector(".submit");
btn.addEventListener("click", ()=>{
var d1 = document.querySelector("#i-day").value;
var m1 = document.querySelector("#i-month").value;
var y1 = document.querySelector("#i-year").value;

var oy = document.querySelector("#o-year");
  
var om = document.querySelector("#o-month");

var od = document.querySelector("#o-day");

var date = new Date();

var d2 = date.getDate();
var m2 = 1 + date.getMonth();
var y2 = date.getFullYear();
var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if (d1 > d2) {
    d2 = d2 + month[m2 - 1];
    m2 = m2 - 1;
  }
  if (m1 > m2) {
    m2 = m2 + 12;
    y2 = y2 - 1;
  }
  var d = d2 - d1;
  var m = m2 - m1;
  var y = y2 - y1;

oy.innerHTML = y;
om.innerHTML = m;
od.innerHTML = d;
});

