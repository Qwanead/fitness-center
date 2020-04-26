import debounce from '../vendor/debounce.js';

export default () => {
  const sections = document.querySelectorAll(`.section`);
  const mediaQueryDesktop = window.matchMedia('(min-width:1280px)');
  const wrap = document.querySelector(`.full-page-wrap`);

  if (!wrap) return;

  const scrollCallback = debounce(function () {
    if (mediaQueryDesktop.matches) {
      const scrollDistance = wrap.scrollTop;

      sections.forEach(function (elem, i) {
        const delta = Number(elem.getAttribute(`data-delta`)) || 0;
        let target = ((elem.offsetTop - scrollDistance) / 8) + delta;

        if (target < -100) {
          target = -100;
        }

        if (target > 100) {
          target = 100;
        }

        let newBgPosition = `calc(50% + ${target}px) bottom`;

        if (elem.id === `section-1`) {
          newBgPosition = `left calc(50% - ${target}px) bottom -2px`;
        }

        if (elem.id === `section-5`) {
          newBgPosition = `calc(50% + ${target + 50}px) bottom`;
        }

        elem.style.backgroundPosition = newBgPosition;
      });
    }

  }, 10);

  window.addEventListener(`load`, function () {
    wrap.addEventListener(`scroll`, scrollCallback);

    sections.forEach(function (elem, i) {
      elem.classList.add(`section--transition`);
    });
  });

  window.addEventListener(`DOMContentLoaded`, function () {
    document.body.classList.add(`loaded`);
  });
};
