export default () => {
  const intro = document.querySelector(`.intro`);
  const iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);

  if (!intro) return;

  const mediaQueryDesktop = window.matchMedia('(min-width:1280px)');

  const offset = 210;

  function mediaQueryChecker() {
    if (mediaQueryDesktop.matches === false) {
      if (iOS) {
        intro.style.height = window.innerHeight - offset + `px`;
      }
    } else {
      intro.removeAttribute(`style`);
    }
  }

  window.addEventListener(`DOMContentLoaded`, function () {
    mediaQueryChecker();
    mediaQueryDesktop.addListener(mediaQueryChecker);
  });
}
