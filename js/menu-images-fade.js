function changeBackground(x) {
  console.log(x);
  document.body.style.backgroundImage = 'url(' + x + ')';
}

function whiteBackground() {
  document.body.style.backgroundImage = "none";
  console.log("none");
}