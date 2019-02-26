function changeBackground(x) {
  let page_wrapper = document.getElementById('page-wrapper');
  page_wrapper.style.backgroundImage = 'none';
  let image_wrapper = document.getElementById('image-wrapper');
  image_wrapper.style.backgroundImage = 'url(' + x + ')';
}

function whiteBackground(x) {
  let wrapper = document.getElementById('image-wrapper');
  wrapper.style.backgroundImage = 'none';
  let page_wrapper = document.getElementById('page-wrapper');
  page_wrapper.style.backgroundImage = "url('images/menu/slit-scan.jpg')";
}