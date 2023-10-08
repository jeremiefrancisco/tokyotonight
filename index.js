var info = document.getElementById("slide-info");
var total = document.getElementById("past-event");
var info0 = document.getElementById("slide-info-0");
var total0 = document.getElementById("past-event-0");
var info1 = document.getElementById("slide-info-1");
var total1 = document.getElementById("past-event-1");
var info2 = document.getElementById("slide-info-2");
var total2 = document.getElementById("past-event-2");

let interval = 2000;

function openInfo() {
  if (info.style.height === "170px") {
    info.style.height = "0px";
    total.style.height = "170px";
  } else {
    info.style.height = "170px";
    total.style.height = "340px";
  }
}

function openInfo0() {
  if(info0.style.height === "200px") {
    info0.style.height = "0px";
    total0.style.height = "220px";
  } else {
    info0.style.height = "200px";
    total0.style.height = "400px";
  }
}

function openInfo1() {
  if(info1.style.height === "200px") {
    info1.style.height = "0px";
    total1.style.height = "220px";
  } else {
    info1.style.height = "200px";
    total1.style.height = "400px";
  }
}

function openInfo2() {
  if(info2.style.height === "200px") {
    info2.style.height = "0px";
    total2.style.height = "220px";
  } else {
    info2.style.height = "200px";
    total2.style.height = "400px";
  }
}
