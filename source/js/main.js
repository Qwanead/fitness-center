'use strict';

var Swiper = window.Swiper;
var trainersControlsPrev = document.querySelector('.trainers__controls.controls--prev');
var trainersControlsNext = document.querySelector('.trainers__controls.controls--next');

var swiper = new Swiper('.swiper-trainers', {
  slidesPerView: 4,
  spaceBetween: 30,
  slidesPerGroup: 4,
  slidesPerGroupSkip: 4,
  loop: true,
  loopFillGroupWithBlank: true,
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

trainersControlsPrev.addEventListener('click', function () {
  swiper.slidePrev();
});

trainersControlsNext.addEventListener('click', function () {
  swiper.slideNext();
});
