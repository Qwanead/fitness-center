import Swiper from 'swiper';

const activateSliders = (article) => {
  const sliders = article.querySelectorAll(`.article__figures`);

  if (!sliders.length) {
    return;
  }

  sliders.forEach((slider) => {
    const slides = slider.querySelectorAll('figure');

    if (slides.length > 1) {
      slider.classList.add('swiper-container');
      const wrap = document.createElement('div');
      wrap.classList.add('swiper-wrapper');

      const pagination = document.createElement('div');
      pagination.classList.add('article__pagination');
      slider.append(pagination);

      const controls = document.createElement('div');
      controls.classList.add('article__controls');
      controls.innerHTML = `
        <div class="article__btn js-slider-next" aria-label="next"></div>
        <div class="article__btn js-slider-prev" aria-label="prev"></div>
      `;
      slider.append(controls);

      slides.forEach((slide) => {
        slide.classList.add('swiper-slide');
        wrap.append(slide);
      });

      slider.append(wrap);

      const swiper = new Swiper(slider, {
        slidesPerView: 'auto',
        spaceBetween: 20,
        observer: true,
        observeParents: true,
        loop: false,
        navigation: {
          nextEl: '.js-slider-next',
          prevEl: '.js-slider-prev',
        },
        pagination: {
          el: '.article__pagination',
          type: 'fraction',
        }
      });
    }
  });
};

export default activateSliders;
