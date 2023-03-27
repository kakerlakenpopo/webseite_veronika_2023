

//onload
function homeScroll() {
  document.documentElement.style.scrollBehavior = "auto";
  const element = document.getElementById("home");
  element.scrollIntoView();
  document.documentElement.style.scrollBehavior = "smooth";
}

//getting modal opening buttons
var modalBtns = document.querySelectorAll('.modal-open');

modalBtns.forEach(function (btn) {
  btn.onclick = function () {
    var modal = btn.getAttribute('data-modal');

    document.getElementById(modal).style.display = "block";
    document.body.style.overflow = "hidden";
    
  };
});


var closeBtns = document.querySelectorAll('.modal-close');

closeBtns.forEach(function (btn) {
  btn.onclick = function () {
    var modal = btn.closest('.modal').style.display = 'none';
    document.body.style.overflow = "";
  }
})

window.onclick = function (e) {
  if (e.target.classList.contains('modal')) {
    e.target.style.display = 'none';
    document.body.style.overflow = "";
  }
}
