
//Selections 
var d1 = document.querySelector("#i-day");
var m1 = document.querySelector("#i-month");
var y1 = document.querySelector("#i-year");
var oy = document.querySelector("#o-year");
var om = document.querySelector("#o-month");
var od = document.querySelector("#o-day");
var warns = document.querySelector(".warn-msgs span");
var btn = document.querySelector("#submit");

//.............end Selection 
var date = new Date();
var d2 = date.getDate();
var m2 = 1 + date.getMonth();
var y2 = date.getFullYear();

function caldate() {

  // Calculations done here
  var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if (d1.value > d2) {
    d2 = d2 + month[m2 - 1];
    m2 = m2 - 1;
  }
  if (m1.value > m2) {
    m2 = m2 + 12;
    y2 = y2 - 1;
  }

  var d = d2 - d1.value;
  var m = m2 - m1.value;
  var y = y2 - y1.value;

  document.getElementById('o-year').innerHTML = y;
  document.getElementById('o-month').innerHTML = m;
  document.getElementById('o-day').innerHTML = d;

  //......end calculations 

}
btn.addEventListener('click', function Myage() {
  if (d1.value == "" && m1.value == "" && y1.value == "") {
    document.querySelectorAll(".warn-msgs div span")[0].innerHTML = "Field Should not be Empty"
    document.querySelectorAll(".warn-msgs div span")[1].innerHTML = "Field Should not be Empty"
    document.querySelectorAll(".warn-msgs div span")[2].innerHTML = "Field Should not be Empty"

    document.querySelectorAll(".first-part .inputs div label")[0].style.color = "red"
    document.querySelectorAll(".first-part .inputs div label")[1].style.color = "red"
    document.querySelectorAll(".first-part .inputs div label")[2].style.color = "red"

    document.querySelectorAll(".first-part .inputs div input")[0].style.borderColor = "red"
    document.querySelectorAll(".first-part .inputs div input")[1].style.borderColor = "red"
    document.querySelectorAll(".first-part .inputs div input")[2].style.borderColor = "red"

    document.getElementById('o-year').innerHTML = "--";
    document.getElementById('o-month').innerHTML = "--";
    document.getElementById('o-day').innerHTML = "--";

  } else if (y1.value == "") {
    document.querySelectorAll(".warn-msgs div span")[0].innerHTML = ""
    document.querySelectorAll(".warn-msgs div span")[1].innerHTML = ""
    document.querySelectorAll(".warn-msgs div span")[2].innerHTML = "field Should not be empty"


    document.querySelectorAll(".first-part .inputs div label")[0].style.color = "grey"
    document.querySelectorAll(".first-part .inputs div label")[1].style.color = "grey"
    document.querySelectorAll(".first-part .inputs div label")[2].style.color = "red"

    document.querySelectorAll(".first-part .inputs div input")[0].style.borderColor = "grey"
    document.querySelectorAll(".first-part .inputs div input")[1].style.borderColor = "grey"
    document.querySelectorAll(".first-part .inputs div input")[2].style.borderColor = "red"

  } else if (d1.value < 1 || d1.value > 31) {
    document.querySelectorAll(".warn-msgs div span")[0].innerHTML = "Day should Between 1 - 31"
    document.querySelectorAll(".warn-msgs div span")[1].innerHTML = ""
    document.querySelectorAll(".warn-msgs div span")[2].innerHTML = ""

    document.querySelectorAll(".first-part .inputs div label")[0].style.color = "red"
    document.querySelectorAll(".first-part .inputs div label")[1].style.color = "grey"
    document.querySelectorAll(".first-part .inputs div label")[2].style.color = "grey"

    document.querySelectorAll(".first-part .inputs div input")[0].style.borderColor = "red"
    document.querySelectorAll(".first-part .inputs div input")[1].style.borderColor = "grey"
    document.querySelectorAll(".first-part .inputs div input")[2].style.borderColor = "grey"

  } else if (m1.value < 1 || m1.value > 12) {
    document.querySelectorAll(".warn-msgs div span")[0].innerHTML = ""
    document.querySelectorAll(".warn-msgs div span")[1].innerHTML = "month should Between 1 - 12"
    document.querySelectorAll(".warn-msgs div span")[2].innerHTML = ""


    document.querySelectorAll(".first-part .inputs div label")[0].style.color = "grey"
    document.querySelectorAll(".first-part .inputs div label")[1].style.color = "red"
    document.querySelectorAll(".first-part .inputs div label")[2].style.color = "grey"

    document.querySelectorAll(".first-part .inputs div input")[0].style.borderColor = "grey"
    document.querySelectorAll(".first-part .inputs div input")[1].style.borderColor = "red"
    document.querySelectorAll(".first-part .inputs div input")[2].style.borderColor = "grey"
  } else if (y1.value > y2) {
    document.querySelectorAll(".warn-msgs div span")[0].innerHTML = ""
    document.querySelectorAll(".warn-msgs div span")[1].innerHTML = ""
    document.querySelectorAll(".warn-msgs div span")[2].innerHTML = "Date Should be in Past"


    document.querySelectorAll(".first-part .inputs div label")[0].style.color = "grey"
    document.querySelectorAll(".first-part .inputs div label")[1].style.color = "grey"
    document.querySelectorAll(".first-part .inputs div label")[2].style.color = "red"

    document.querySelectorAll(".first-part .inputs div input")[0].style.borderColor = "grey"
    document.querySelectorAll(".first-part .inputs div input")[1].style.borderColor = "grey"
    document.querySelectorAll(".first-part .inputs div input")[2].style.borderColor = "red"


  } else {
    document.querySelectorAll(".warn-msgs div span")[0].innerHTML = ""
    document.querySelectorAll(".warn-msgs div span")[1].innerHTML = ""
    document.querySelectorAll(".warn-msgs div span")[2].innerHTML = ""


    document.querySelectorAll(".first-part .inputs div label")[0].style.color = "grey"
    document.querySelectorAll(".first-part .inputs div label")[1].style.color = "grey"
    document.querySelectorAll(".first-part .inputs div label")[2].style.color = "grey"

    document.querySelectorAll(".first-part .inputs div input")[0].style.borderColor = "grey"
    document.querySelectorAll(".first-part .inputs div input")[1].style.borderColor = "grey"
    document.querySelectorAll(".first-part .inputs div input")[2].style.borderColor = "grey"


    caldate();
  }

}
);



