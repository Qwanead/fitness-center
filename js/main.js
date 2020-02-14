'use strict';

var Swiper = window.Swiper;
var trainersControlsPrev = document.querySelector('.trainers__controls.controls--prev');
var trainersControlsNext = document.querySelector('.trainers__controls.controls--next');
var reviewsControlsPrev = document.querySelector('.reviews__controls.controls--prev');
var reviewsControlsNext = document.querySelector('.reviews__controls.controls--next');

if (trainersControlsPrev && trainersControlsNext) {
  var trainersSwiper = new Swiper('.swiper-trainers', {
    slidesPerView: 4,
    spaceBetween: 30,
    slidesPerGroup: 4,
    slidesPerGroupSkip: 4,
    loop: true,
    loopFillGroupWithBlank: true,
    breakpoints: {
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
    trainersSwiper.slidePrev();
  });

  trainersControlsNext.addEventListener('click', function () {
    trainersSwiper.slideNext();
  });
}

if (reviewsControlsPrev && reviewsControlsNext) {
  var reviewsSwiper = new Swiper('.swiper-reviews', {
    slidesPerView: 1,
    spaceBetween: 0,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 1,
    loop: true,
    loopFillGroupWithBlank: true
  });

  reviewsControlsPrev.addEventListener('click', function () {
    reviewsSwiper.slidePrev();
  });

  reviewsControlsNext.addEventListener('click', function () {
    reviewsSwiper.slideNext();
  });
}
