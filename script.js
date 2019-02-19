var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}


var item = document.getElementsByClassName("item");
  var img = item.getElementsByTagName('img')[0];

  document.getElementsByClassName("item").style.display = 'none';
  
function enlarge() {
  


  if (event.target.style.width == '100%') {

    event.target.style.width = '200%';
    event.target.style.position = "relative";
    event.target.style.zIndex = "1";
    
  } else {
    event.target.style.width = '100%';
    event.target.style.position = "relative";
    event.target.style.zIndex = "0";
  }

}