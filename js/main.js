window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}


window.onscroll = function() {navStick()};

var sideNav = document.getElementById("sideNav");
var openNav = document.getElementById("openNav");
var body = document.getElementById("mainBody");
var sticky = body.offsetTop;

function navStick() {
  if (window.pageYOffset >= sticky) {
    sideNav.classList.add("sticky");
    openNav.classList.add("sticky");
  } 
  else {
    sideNav.classList.remove("sticky");
    openNav.classList.remove("sticky");
  }
}


document.getElementById ("openNav").addEventListener ("click", sideOpen, false);
document.getElementById ("closeNav").addEventListener ("click", sideClose, false);
function sideOpen() {
    document.getElementById("sideNav").style.display = "inline";
    document.getElementById("closeNav").style.display = "inline";
    document.getElementsByClass("sticky").style.display = "inline";
    document.getElementById("openNav").style.display = "none";
}

function sideClose() {
    document.getElementById("sideNav").style.display = "none";
    document.getElementById("closeNav").style.display = "none";
    document.getElementsByClass("sticky").style.display = "none";
    document.getElementById("openNav").style.display = "inline";
}