'use strict';

var swiper = new Swiper('.swiper-trainers', {
  slidesPerView: 4,
  spaceBetween: 30,
  slidesPerGroup: 4,
  slidesPerGroupSkip: 4,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
      slidesPerGroup: 1
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
      slidesPerGroup: 2
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
      slidesPerGroup: 3
    },
    1366: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 40
    }
  }
});

document.querySelector('.trainers__controls--prev').addEventListener('click', function () {
  swiper.slidePrev();
});

document.querySelector('.trainers__controls--next').addEventListener('click', function () {
  swiper.slideNext();
});
