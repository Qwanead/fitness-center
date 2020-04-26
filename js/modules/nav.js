import debounce from '../vendor/debounce.js';

export default () => {
  const wrap = document.querySelector(`.full-page-wrap`);

  if (!wrap) return;

  const goToSection = (e) => {
    e.preventDefault();

    const href = e.currentTarget.getAttribute(`href`);
    const target = document.querySelector(href);

    const yCoordinate = target.getBoundingClientRect().top + wrap.scrollTop;
    let yOffset = 0;

    const mediaQueryTablet = window.matchMedia('(min-width:768px)');

    if (mediaQueryTablet.matches === false && !e.currentTarget.classList.contains(`subscribe__hint`)) {
      yOffset = 50;
    }

    if (target) {
      wrap.scrollTo({
        top: yCoordinate + yOffset,
        behavior: 'smooth'
      });
    }

    setActiveSection(target);
  };

  const setActiveItem = (item) => {
    navItems.forEach((elem) => elem.classList.remove(`main-nav__item--active`));
    item.classList.add(`main-nav__item--active`);
  };

  const setActiveSection = (item) => {
    item.classList.add(`section--active`);
  };

  const bubbles = document.querySelectorAll(`.bubble`);

  bubbles.forEach(function (elem) {
    elem.addEventListener(`click`, goToSection);
  });

  const navLinks = document.querySelectorAll(`.main-nav__link`);

  navLinks.forEach(function (elem) {
    elem.addEventListener(`click`, function (e) {
      goToSection(e);
      setActiveItem(e.currentTarget.parentNode);

      wrap.removeEventListener(`scroll`, scrollCallback);

      setTimeout(() => {
        wrap.addEventListener(`scroll`, scrollCallback);
      }, 800)
    });
  });

  const sections = document.querySelectorAll(`.section`);
  const navItems = document.querySelectorAll(`.main-nav__item`);

  const scrollCallback = debounce(function () {
    const scrollDistance = wrap.scrollTop;

    sections.forEach(function (elem, i) {
      if (elem.offsetTop <= scrollDistance + (elem.offsetHeight / 2)) {
        setActiveItem(navLinks[i].parentNode);
        setActiveSection(elem);
      }
    });
  }, 10);

  wrap.addEventListener(`scroll`, scrollCallback);

  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  } else {
    window.addEventListener(`load`, function () {
      wrap.scrollTo(0, 0);
    });
  }
};
