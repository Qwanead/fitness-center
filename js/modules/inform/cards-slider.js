import Swiper from 'swiper';
window.Swiper = Swiper;

export default () => {
  const sliders = document.querySelectorAll(`.cards-section__slider`);

  if (!sliders.length) {
    return;
  }

  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
  }

  sliders.forEach((slider) => {
    if (slider.classList.contains('js-random-order')) {
      const cards = slider.querySelectorAll('.swiper-slide');

      cards.forEach((slide) => {
        slide.style.order = getRandomIntInclusive(0, cards.length);
      });
    }

    const swiper = new Swiper(slider, {
      slidesPerView: 'auto',
      spaceBetween: 20,
      loop: false,
      threshold: 5,
      observer: true,
      observeParents: true,
      slidesPerGroup: 3,
      navigation: {
        nextEl: '.js-slider-next',
        prevEl: '.js-slider-prev',
      },
      pagination: {
        el: '.slider-controls__pagination',
        clickable: true,
      }
    });
  });
};
