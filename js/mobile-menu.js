/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("nav-options-container");
  if (x.className === "nav-options") {
    x.className += " responsive-menu";
  } else {
    x.className = "nav-options";
  }
}