'use strict';
const escCode = 27;
const breakpoint = window.matchMedia('(min-width:1000px)');

let webinarSwiper;
let webinarSlider = document.querySelector('.webinars__slider');

const enableMobileSwiper = function () {
  webinarSwiper = new Swiper('.webinars__slider', {
    loop: false,
    spaceBetween: 16,
    slidesPerView: 'auto'
  });
};

const enableDesktopSwiper = function () {
  webinarSwiper = new Swiper('.webinars__slider', {
    loop: false,
    spaceBetween: 16,
    slidesPerView: 4,
    slidesPerColumn: 2,
    slidesPerGroup: 4,
    simulateTouch: false,
    navigation: {
      nextEl: '.slider__button-next',
      prevEl: '.slider__button-prev',
    },
    pagination: {
      el: '.slider__pagination--numbers',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
      },
    },
  });

  //webinarSwiper.on('slideChange', function())
};

const breakpointChecker = function () {
  if (breakpoint.matches === true) {
    if (typeof webinarSwiper !== 'undefined') {
      webinarSwiper.destroy(true, true);
      enableDesktopSwiper();
    }
  } else if (breakpoint.matches === false) {
    if (typeof webinarSwiper !== 'undefined') {
      webinarSwiper.destroy(true, true);
      enableMobileSwiper();
    }
  }
};
enableDesktopSwiper();
breakpoint.addListener(breakpointChecker);
breakpointChecker();

window.webinarSwiper = webinarSwiper;

// открытие/закрытие попапа по клику на мероприятии

let body = document.querySelector('.vk_events');

if (body) {
  let events = body.querySelectorAll('.tag');
  let modal = document.querySelector('.vk_events__modal');

  if (modal) {
    let openPopup = () => {
      modal.classList.remove('hidden');
      disableBodyScroll(modal);
      document.addEventListener('keydown', onPopupEscPress);
    };

    let closePopup = function () {
      modal.classList.add('hidden');
      enableBodyScroll(modal);
      document.removeEventListener('keydown', onPopupEscPress);
    };

    let onPopupEscPress = function (evt) {
      if (evt.keyCode === escCode) {
        closePopup();
      }
    };

    document.addEventListener('click', (e) => {
      if (e.target.closest('.tag')) {
        e.preventDefault();

        openPopup();
        let overlay = modal.querySelector('.vk_events__modal-overlay');
        let popup = modal.querySelector('.popup');
        let closeBtn = popup.querySelector('.popup__close-btn');


        closeBtn.addEventListener('click', closePopup);
        overlay.addEventListener('click', closePopup);
      }
    });

    events.forEach(event => {
      event.addEventListener('click', () => {
        openPopup();
        let overlay = modal.querySelector('.vk_events__modal-overlay');
        let popup = modal.querySelector('.popup');
        let closeBtn = popup.querySelector('.popup__close-btn');


        closeBtn.addEventListener('click', closePopup);
        overlay.addEventListener('click', closePopup);
      });
    });
  }
}

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', function() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

// переключение табов в блоке вебинары

let webinarsTabs = document.querySelector('.webinars__tabs');
if (webinarsTabs) {
  let tabButtons = webinarsTabs.querySelectorAll('.webinars__tab-switcher');
  tabButtons.forEach(tab => {
    tab.addEventListener('click', (evt) => {
      let activeTag = evt.currentTarget.parentElement;
      if (!activeTag.classList.contains('webinars__tab--active')) {
        webinarsTabs.querySelector('.webinars__tab--active').classList.remove('webinars__tab--active');
        activeTag.classList.add('webinars__tab--active');
      }
    });
  });
}

// открытие/закрытие меню селекта

let selects = document.querySelectorAll('.select-filter');
if (selects) {
  selects.forEach(select => {
    let selectHeader = select.querySelector('.select-filter__header');
    let selectBody = select.querySelector('.select-filter__body');
    let closeSelectMenu = (evt) => {
      let target = evt.target;
      evt.stopPropagation();
      if (target === selectHeader) {
        return;
      } else {
        selectBody.classList.remove('select-filter__body--opened');
        document.removeEventListener('click', closeSelectMenu);
      }
    };
    selectHeader.addEventListener('click', () => {
      selectBody.classList.add('select-filter__body--opened');
      document.addEventListener('click', closeSelectMenu);
    });
  });
}
