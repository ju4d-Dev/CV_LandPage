const slider = document.querySelector(".slider");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const slideWidth = slider.clientWidth;
let currentIndex = 0;

function goToSlide(index) {
  currentIndex = index;
  const translateX = -index * slideWidth;
  slider.style.transform = `translateX(${translateX}px)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slider.children.length;
  goToSlide(currentIndex);
}

function prevSlide() {
  currentIndex =
    (currentIndex - 1 + slider.children.length) % slider.children.length;
  goToSlide(currentIndex);
}

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

setInterval(nextSlide, 3000);