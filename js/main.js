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

