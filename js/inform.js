import smoothscroll from 'smoothscroll-polyfill';
import cardsSlider from './modules/inform/cards-slider';
import contentPopup from './modules/inform/content-popup';
import toBottom from './modules/inform/to-bottom';

smoothscroll.polyfill();

cardsSlider();
contentPopup();
toBottom();

if (!('fonts' in document)) {
  window.addEventListener(`load`, ()=> {
    document.querySelector(`.inform-hero__title`).classList.add(`inform-hero__title--show`);
  });
} else {
  document.fonts.load('50px TTCommons').then(function () {
    document.querySelector(`.inform-hero__title`).classList.add(`inform-hero__title--show`);
  });
}
