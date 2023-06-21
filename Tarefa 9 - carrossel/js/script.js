// Tarefa 9 - carrossel

// Atividade 1

// Crie um carrossel de imagens em seu site

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