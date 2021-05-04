// navbar
window.addEventListener("scroll", function () {
  var nav = document.querySelector(".nav-container");
  nav.classList.toggle("navscroll", window.scrollY > 0);
});

// description
var example = [
  "Software Development.",
  "Data Science.",
  "Stock Trading.",
  "Web Development.",
];

rotate(0);
function rotate(i) {
  setTimeout(function () {
    var text = document.getElementById("sequence");
    text.innerHTML = example[i];

    rotate(++i);

    if (example.length == i) {
      rotate(0);
    }
  }, 3000);
}
