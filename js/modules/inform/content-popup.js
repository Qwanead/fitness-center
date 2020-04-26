import activateSliders from './article-sliders';
import cleanArticle from './clean-article';
import { disableBodyScroll, enableBodyScroll } from '../../vendor/bodyScrollLock';

export default () => {
  const contentPopup = document.querySelector(`.content-popup`);

  if (!contentPopup) return;

  const popupContent = contentPopup.querySelector('.content-popup__content');
  let cachedArticles = {};

  document.addEventListener(`click`, (e) => {
    if (e.target.closest('.js-content-popup') && !e.target.closest('.js-content-popup a')){
      e.preventDefault();
      const btn = e.target.closest('.js-content-popup');
      const url = btn.getAttribute('data-popup');
      const type = btn.getAttribute('data-type');

      if (cachedArticles[url]) {
        updatePopupContent({
          html: cachedArticles[url],
          type: type
        });
      } else {
        fetch(url)
          .then(res => {
            return res.text();
          })
          .then(data => {
            updatePopupContent({
              html: data,
              writeToCache: true,
              key: url,
              type: type
            });
          });
      }
    }
  });

  function getScrollbarWidth() {
    return window.innerWidth - document.documentElement.clientWidth;
  }

  const updatePopupContent = (options) => {
    const {
      html,
      writeToCache,
      key,
      type
    } = options;

    popupContent.innerHTML = html;
    const links = popupContent.querySelectorAll('a');

    if (links.length) {
      links.forEach((link) => {
        link.setAttribute('target', '_blank')
      });
    }

    //document.body.style.paddingRight = getScrollbarWidth() + 'px';
    disableBodyScroll(contentPopup);

    if (writeToCache) {
      cachedArticles[key] = html;
    }

    if (type === 'article') {
      const article = popupContent.querySelector('.article');
      cleanArticle(article);
      activateSliders(article);
    }

    if (type === 'info') {
      contentPopup.classList.add(`content-popup--small`);
    }

    setTimeout(() => {
      contentPopup.classList.add(`content-popup--show`);
    }, 200)

  }

  const closeModal = () => {
    contentPopup.classList.remove(`content-popup--show`, 'content-popup--small');
    popupContent.innerHTML = '';
    enableBodyScroll(contentPopup);
    //document.body.style.paddingRight = '0px';
  }

  contentPopup.addEventListener(`click`, (e) => {
    if (!e.target.closest(`.content-popup__wrap`) || e.target.closest(`.content-popup__close`)) {
      e.preventDefault();
      closeModal();
    }
  });

  document.addEventListener('keydown', function(evt) {
    evt = evt || window.event;
    if (evt.keyCode == 27) {
      closeModal();
    }
  });
};
