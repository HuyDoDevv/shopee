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

let currentPage = 1;
function toggleHomeCategory(direction) {
  const homeCategoryWrap = document.querySelector('.home-category__content-wrap');
  const homeCategoryList = document.querySelector('.home-category__content-list');
  const homeCategoryListItem = document.querySelectorAll('.home-category__content--item');
  const btnNext = document.querySelector('.home-category__content-btn-right');
  const btnBack = document.querySelector('.home-category__content-btn-left');

  const parentWidth = homeCategoryWrap.clientWidth;

  const totalItems = homeCategoryListItem.length;
  const itemsPerPage = Math.floor(parentWidth / homeCategoryListItem[0].clientWidth) * 2;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  if (direction === 'next' && currentPage < totalPages) currentPage++;
  if (direction === 'back' && currentPage > 1) currentPage--;

  const newTranslateX = -(currentPage - 1) * parentWidth;
  homeCategoryList.style.transform = `translateX(${newTranslateX}px)`;

  btnBack.style.display = currentPage === 1 ? 'none' : 'block';
  btnNext.style.display = currentPage === totalPages ? 'none' : 'block';
}
