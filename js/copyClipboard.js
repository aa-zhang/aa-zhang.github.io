function copy() {
  var copyText = document.getElementById("email");
  copyText.select();
  document.execCommand("copy");
}