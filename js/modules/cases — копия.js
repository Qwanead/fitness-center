import Swiper from 'swiper';

export default () => {
  const cases = document.querySelector(`.cases__list`);

  if (!cases) return;

  let playing = true;
  let timeout;

  const casesSlider = new Swiper (cases, {
    loop: true,
    slidesPerView: `auto`,
    spaceBetween: 16,
    speed: 3000,
    freeMode: true,
    freeModeSticky: true,
    freeModeMomentum: false,
    autoplay: {
      delay: 0,
      disableOnInteraction: false
    },
    breakpoints: {
      1024: {
        spaceBetween: 60
      }
    },
    on: {
      resize: () => {
        casesSlider.autoplay.stop();
        casesSlider.update();
        casesSlider.autoplay.start();
        playing = true;
      },
      touchStart: () => {
        if (playing) {
          casesSlider.autoplay.stop();
          playing = false;
        }
      },
      touchEnd: () => {
        if (!playing) {
          casesSlider.autoplay.start();
          playing = true;
        }
      }
    }
  });

  casesSlider.el.addEventListener(`mouseover`, function (e) {
    if (playing) {
      casesSlider.autoplay.stop();
      playing = false;

      casesSlider.params.speed = 500;
      cases.querySelector(`.swiper-wrapper`).style.transitionDuration = `500ms`;
      casesSlider.setTranslate(casesSlider.getTranslate() - 20);
    }
  }, true);

  document.addEventListener(`mouseover`, function (evt) {
    if (!playing && !evt.target.closest(`.cases__list`)) {
      clearTimeout(timeout);

      casesSlider.params.speed = 500;
      cases.querySelector(`.swiper-wrapper`).style.transitionDuration = `500ms`;

      casesSlider.setTranslate(casesSlider.getTranslate() - 20);
      timeout = setTimeout(function () {
        casesSlider.params.speed = 3000;
        cases.querySelector(`.swiper-wrapper`).style.transitionDuration = `3000ms`;

        casesSlider.update();
        casesSlider.autoplay.start();
        playing = true;

      }, 500);
    }
  }, true);
};
