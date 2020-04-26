import debounce from '../vendor/debounce.js';

export default () => {
  const bubbles = document.querySelectorAll(`.bubble__text-wrap`);
  const mediaQueryDesktopLarge = window.matchMedia('(min-width:1920px)');
  const mediaQueryDesktop = window.matchMedia('(min-width:1280px)');
  const wrap = document.querySelector(`.full-page-wrap`);

  if (!wrap) return;

  const scrollCallback = debounce(function () {
    if (mediaQueryDesktop.matches) {

      const scrollDistance = wrap.scrollTop;
      let delta = 15;

      if (mediaQueryDesktopLarge.matches) {
        delta = 20;
      }

      bubbles.forEach(function (elem, i) {
        let target = ((elem.offsetTop - scrollDistance) / 85) + (i * delta);

        if (elem.parentNode.classList.contains(`subscribe__hint`)) {
          target *= -1;
          target += 20;
        }

        elem.style.transform = `translateY(${target}px)`;
      });
    }
  }, 10);

  wrap.addEventListener(`scroll`, scrollCallback);
};
