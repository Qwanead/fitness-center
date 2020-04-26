export default () => {
  const videoBtns = document.querySelectorAll(`.video-btn`);
  const modal = document.querySelector(`.modal`);

  if (!modal) return;

  document.addEventListener(`click`, (e) => {
    if (e.target && e.target.classList.contains('video-btn')){

      e.preventDefault();

      const target = e.target;

      const modalId = target.getAttribute(`data-modal`);
      const modal = document.querySelector(`.modal`);
      const iframe = modal.querySelector(`iframe`);

      iframe.setAttribute(`src`, modalId);

      modal.classList.add(`modal--show`);

      document.body.classList.add('overflow');
    }
  });

  const closeModal = () => {
    modal.classList.remove(`modal--show`);
    document.body.classList.remove('overflow');

    const iframe = modal.querySelector(`iframe`);
    iframe.removeAttribute(`src`);
  }

  modal.addEventListener(`click`, (e) => {
    e.preventDefault();

    if (!e.target.classList.contains(`modal__content`)) {
      closeModal();
    }
  });

  document.addEventListener('keydown', function(evt) {
    evt = evt || window.event;
    if (evt.keyCode == 27) {
      closeModal();
    }
  });

  const btn = document.querySelector(`.about__btn`);

  window.addEventListener('blur', function(){
    setTimeout(() => {
      const x = window.scrollX;
      const y = window.scrollY;

      btn.focus({
        preventScroll: true
      });

      window.scrollTo(x, y);
    }, 10)
  });
};
