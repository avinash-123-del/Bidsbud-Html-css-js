AOS.init({
  duration: 1500,
  easing: 'ease',
})

const carousel = document.querySelector('.section_4_hero');
const carouselInner = carousel.querySelector('.section_4_cards');
const carouselItems = carouselInner.querySelectorAll('.section_4_card');
const nextButton = carousel.querySelector('.section_4_button');
const itemWidth = carouselItems[0].offsetWidth;
const itemsPerView = 2;
let currentPosition = 0;

nextButton.addEventListener('click', () => {
  currentPosition -= itemWidth * itemsPerView;

  carouselInner.style.transform = `translateX(${currentPosition}px)`;

  if (currentPosition <= -(itemWidth * (carouselItems.length - itemsPerView))) {
    // Move the first itemsPerView cards to the end
    for (let i = 0; i < itemsPerView; i++) {
      carouselInner.appendChild(carouselInner.firstElementChild);
    }

    currentPosition += itemWidth * itemsPerView;
    carouselInner.style.transform = `translateX(${currentPosition}px)`;
  }
});
