const carouselSlide = document.querySelector('.carousel-slide');

function startCarousel() {
  setInterval(() => {
    carouselSlide.style.transform = 'translateX(-100%)';
    setTimeout(() => {
      carouselSlide.appendChild(carouselSlide.firstElementChild);
      carouselSlide.style.transform = 'translateX(0)';
    }, 1000);
  }, 3000);
}

startCarousel();