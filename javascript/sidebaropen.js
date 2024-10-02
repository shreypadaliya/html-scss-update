var toggleButton = document.getElementById("togglebutton");
var toggle = document.getElementById("toggle");
toggleButton.addEventListener("click", function () {
  if (window.matchMedia("(max-width: 767px)").matches) {
    if (toggle.style.display === "block" || toggle.style.display === "") {
      toggle.style.display = "none";
    } else {
      toggle.style.display = "block";
    }
  }
});
window.addEventListener("resize", function () {
  if (window.matchMedia("(min-width: 768px)").matches) {
    toggle.style.display = "block";
  }
});