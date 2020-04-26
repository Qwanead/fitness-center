export const periodsSliderSettings = {
  loop: false,
  effect: `fade`,
  slidesPerView: 1,
  allowTouchMove: false,
  threshold: 5,
  preventClicks: false,
  navigation: {
    nextEl: `.schedule__controls-btn--next`,
    prevEl: `.schedule__controls-btn--prev`,
  },
};

export const scheduleInnerSlidersSettings = {
  loop: false,
  nested: true,
  slidesPerView: "auto",
  observer: true,
  observeParents: true,
  threshold: 5,
  breakpoints: {
    1024: {
      allowTouchMove: false,
      preventClicks: false,
    }
  }
};
