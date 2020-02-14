'use strict';

// Слайдеры

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

// Плавный скролл

var subscriptionLink = document.querySelector('a[href="#subscription-id"]');
var subscriptionFooterLink = document.querySelector('.footer a[href="#subscription-id"]');
var gymFooterLink = document.querySelector('.footer a[href="#gym-id"]');
var promoFooterLink = document.querySelector('.footer a[href="#promo-id"]');
var trainersFooterLink = document.querySelector('.footer a[href="#trainers-id"]');

var onAnchorClick = function (evt) {
  evt.preventDefault();
  document.querySelector(evt.currentTarget.getAttribute('href')).scrollIntoView({behavior: 'smooth'});
};

subscriptionLink.addEventListener('click', onAnchorClick);
subscriptionFooterLink.addEventListener('click', onAnchorClick);
gymFooterLink.addEventListener('click', onAnchorClick);
promoFooterLink.addEventListener('click', onAnchorClick);
trainersFooterLink.addEventListener('click', onAnchorClick);

// IMaskJS

window.iMaskJS(document.getElementById('tel-id'), {mask: '+{7}(000)000-00-00'});

// Табы
var ELEMENT_COUNT = 3;
var ACTIVE_TAB_CLASS = 'subscription__duration-item--active';

var Duration = {
  ONE_MONTH: '1 месяц',
  SIX_MONTH: '6 месяцев',
  TWELVE_MONTH: '12 месяцев'
};

var Price = {
  ONE_MONTH: [5000, 1700, 2700],
  SIX_MONTH: [28000, 9500, 15000],
  TWELVE_MONTH: [55000, 17000, 28000]
};

var LessonCount = {
  ONE_MONTH: '12 занятий',
  SIX_MONTH: '72 занятия',
  TWELVE_MONTH: '144 занятия'
};

var updatePrice = function (element, price) {
  var span = '<span class="rate__price-shadow">' + price + '</span>' + price;
  element.innerHTML = span;
};

var updateLessonCount = function (count) {
  lessonCount.textContent = count;
};

var updateActiveTab = function (tab) {
  activeTab.classList.remove(ACTIVE_TAB_CLASS);
  tab.classList.add(ACTIVE_TAB_CLASS);
  activeTab = tab;
};

var onTabClick = function (evt) {
  if (evt.target !== activeTab) {
    var tab = evt.target.textContent;

    updateActiveTab(evt.target);

    switch (tab) {
      case Duration.ONE_MONTH:
        updateLessonCount(LessonCount.ONE_MONTH);
        for (var i = 0; i < ELEMENT_COUNT; i++) {
          updatePrice(rates[i], Price.ONE_MONTH[i]);
        }
        break;
      case Duration.SIX_MONTH:
        updateLessonCount(LessonCount.SIX_MONTH);
        for (i = 0; i < ELEMENT_COUNT; i++) {
          updatePrice(rates[i], Price.SIX_MONTH[i]);
        }
        break;
      case Duration.TWELVE_MONTH:
        updateLessonCount(LessonCount.TWELVE_MONTH);
        for (i = 0; i < ELEMENT_COUNT; i++) {
          updatePrice(rates[i], Price.TWELVE_MONTH[i]);
        }
        break;
    }
  }
};

var activeTab = document.querySelector('.' + ACTIVE_TAB_CLASS);
var tabs = Array.prototype.slice.call(document.querySelectorAll('.subscription__duration-item'));
var rates = Array.prototype.slice.call(document.querySelectorAll('.rate__price'));
var lessonCount = document.querySelector('.rate__schedule');

if (activeTab) {
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', onTabClick);
  }
}
