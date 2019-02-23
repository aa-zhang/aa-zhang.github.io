window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

$('.carousel').carousel({
  interval: false;
})