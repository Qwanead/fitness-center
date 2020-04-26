import Swiper from 'swiper';
import Rellax from 'rellax';

export default () => {
  const forumMedia = document.querySelector(`.final-forum__media`);

  if (!forumMedia) return;

  const forumMediaSlider = new Swiper (forumMedia, {
    loop: false,
    slidesPerView: 'auto',

    breakpoints: {
      1024: {
        allowTouchMove: false,
      }
    }
  });

  const forumMediaItems = document.querySelectorAll(`.final-forum__media-item[data-paralax]`);
  const mediaQueryDesktop = window.matchMedia(`(min-width:1024px)`);

  let rellax;

  function mediaQueryChecker() {
    if (mediaQueryDesktop.matches === false) {
      forumMediaItems.forEach((elem) => {
        elem.removeAttribute(`style`);
      });

      if (rellax) {
        rellax.destroy();

        rellax = undefined;
      }

    } else {
      if (!rellax) {
        rellax = new Rellax(`.final-forum__media-item[data-paralax]`, {
          center: true,
          speed: 2,
        });
      }
    }
  }

  window.addEventListener(`DOMContentLoaded`, function () {
    mediaQueryChecker();
    mediaQueryDesktop.addListener(mediaQueryChecker);
  });
};
