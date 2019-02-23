let info = document.getElementById('content-container');
let results = document.getElementById('results');
let articles = document.getElementsByTagName('article');

document.getElementById('submit').onclick = function () {
  if (!info.classList.contains('fade')) {
    info.classList.add('fade');
  }
  
  if (!results.classList.contains('show')) {
    results.classList.add('show');
  }
}