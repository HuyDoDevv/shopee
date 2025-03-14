let slideIndex = 1;
let slideInterval;

function startSlideshow() {
  clearInterval(slideInterval);
  slideInterval = setInterval(() => plusSlides(1), 2000);
}

function plusSlides(n) {
  showSlides(slideIndex += n);
  startSlideshow();
}

function currentSlide(n) {
  showSlides(slideIndex = n);
  startSlideshow();
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("banner__slideshow-link");
  let dots = document.getElementsByClassName("banner__slideshow-dot");

  if (n > slides.length) slideIndex = 1;
  if (n < 1) slideIndex = slides.length;

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" banner__slideshow-dot-active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " banner__slideshow-dot-active";
}

showSlides(slideIndex);
startSlideshow();
