export default () => {

  const aboutBtn = document.querySelector(`.about__btn`);

  if (!aboutBtn) return;

  aboutBtn.addEventListener(`click`, (e) => {
    e.preventDefault();

    const target = document.querySelector(`.schedule`);

    const yCoordinate = target.getBoundingClientRect().top + window.pageYOffset;
    let yOffset = document.querySelector(`.js-nd-vkbiz-header`).offsetHeight;

    if (target) {
      window.scrollTo({
        top: yCoordinate - yOffset,
        behavior: 'smooth'
      });
    }
  });

  if (!('fonts' in document)) {
    window.addEventListener(`load`, ()=> {
      document.querySelector(`.about__title`).classList.add(`about__title--show`);
    });
  } else {
    document.fonts.load('14px TTCommons').then(function () {
      document.querySelector(`.about__title`).classList.add(`about__title--show`);
    });
  }

};
