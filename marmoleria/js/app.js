let currentIndex = 0;
const slides = document.querySelectorAll(".hero-slider .slide");
const dots = document.querySelectorAll(".dot");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    dots[i].classList.remove("active");
    if (i === index) {
      slide.classList.add("active");
      dots[i].classList.add("active");
    }
  });
}

function setSlide(index) {
  currentIndex = index;
  showSlide(currentIndex);
}

// Auto-slide cada 5 segundos
setInterval(() => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}, 5000);

document.addEventListener("DOMContentLoaded", () => {
  showSlide(currentIndex);
});






let indexCentral = 1;
const reseñas = document.querySelectorAll(".slider-reseñas .reseña");

function actualizarCarrusel() {
  reseñas.forEach((r, i) => {
    r.classList.remove("activa", "visible");
    if (i === indexCentral) {
      r.classList.add("activa");
    } else if (i === indexCentral - 1 || i === indexCentral + 1) {
      r.classList.add("visible");
    }
  });

  const desplazamiento = (indexCentral - 1) * 240; // 220 ancho + 20 gap
  document.querySelector(".slider-reseñas").style.transform = `translateX(-${desplazamiento}px)`;
}

function moverReseña(dir) {
  const total = reseñas.length;
  indexCentral += dir;

  // no ir fuera de los límites
  if (indexCentral < 1) indexCentral = 1;
  if (indexCentral > total - 2) indexCentral = total - 2;

  actualizarCarrusel();
}

document.addEventListener("DOMContentLoaded", actualizarCarrusel);









