import Flickity from '../vendor/flickity.pkgd.js';

export default () => {
  const cases = document.querySelector(`.cases__list`);

  if (!cases) return;

  const mediaQueryMobile = window.matchMedia('(min-width:768px)');

  const mainTicker = new Flickity('.cases__list', {
    accessibility: false,
    resize: true,
    wrapAround: true,
    prevNextButtons: false,
    pageDots: false,
    percentPosition: false,
    setGallerySize: true,
    touchVerticalScroll: false
  });

  let requestId;

  // Set initial position to be 0
  mainTicker.x = 0;

  // Start the marquee animation
  play();

  // Main function that 'plays' the marquee.
  function play() {
    // Set the decrement of position x
    if (mediaQueryMobile.matches) {
      mainTicker.x -= 1;
    } else {
      mainTicker.x -= 0.5;
    }

    // Settle position into the slider
    mainTicker.settle(mainTicker.x);

    // Set the requestId to the local variable
    requestId = window.requestAnimationFrame(play);
  }

  // Main function to cancel the animation.
  function pause() {
    if (requestId) {
      // Cancel the animation
      window.cancelAnimationFrame(requestId)

      // Reset the requestId for the next animation.
      requestId = undefined;
    }
  }

  // Pause on hover/focus
  $('.cases__list').on('mouseenter focusin touchstart', e => {
    pause();

  });

  // Unpause on mouse out / defocus
  $('.cases__list').on('mouseleave touchend', e => {
    play();
  });

  mainTicker.on('dragStart', () => (document.ontouchmove = e => e.preventDefault()));
  mainTicker.on('dragEnd', () => (document.ontouchmove = () => true));
};
