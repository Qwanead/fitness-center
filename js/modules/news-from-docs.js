import Papa from 'papaparse';
import Swiper from 'swiper';

export default () => {
  const newsLists = document.querySelectorAll(`.news__list`);

  if (!newsLists.length) {
    return;
  }

  let sliders = [];

  const slidersInit = () => {
    newsLists.forEach((elem) => {
      const slider = new Swiper (elem, {
        loop: false,
        slidesPerView: 'auto',
        spaceBetween: 16,
        observer: true,
        observeParents: true,
        threshold: 5,
        breakpoints: {
          1024: {
            allowTouchMove: false,
            spaceBetween: 26,
            preventClicks: false,
          }
        },
      });

      sliders.push(slider);
    });
  }

  const tabsLinks = document.querySelectorAll(`.tabs__nav-link`);
  tabsLinks.forEach((link) => {
    link.addEventListener(`click`, (e) => {
      e.preventDefault();
      sliders.forEach((slider) => {
        slider.update();
      });
    });
  });

  const insertDataToSlide = (node, post, index, isLink) => {
    const newsText = node.querySelector(`.news__desc`);
    newsText.insertAdjacentHTML(`beforeend`, post.text.substr(0, 60) + `...`);

    const newsDate = node.querySelector(`.news__date`);
    newsDate.insertAdjacentHTML(`beforeend`, post.date);

    if (isLink) {
      const link = post.link;
      node.querySelector(`.news__item`).setAttribute(`href`, link);
    }

    const newsImageUrl = post.image;
    const newsImageNode = node.querySelector(`img`);
    newsImageNode.setAttribute(`src`, newsImageUrl);
    newsImageNode.setAttribute(`alt`, `Пост ${(index + 1)}`);
    const videoBtn = node.querySelector(`.video-btn`);

    if (videoBtn && !isLink) {
      videoBtn.setAttribute(`data-modal`, post.video);
    }

    return node;
  };

  const insertSlides = (data) => {
    data.forEach((post, i) => {
      const template = post.link ? `#news-item` : `#news-item--video`;
      const isLink = post.link ? true : false;
      const newsItemNode = document.querySelector(template).content.cloneNode(true);
      const target = post.video ? `#streams` : `#posts`;
      insertDataToSlide(newsItemNode, post, i, isLink);
      const list = document.querySelector(`${target} .swiper-wrapper`);

      list.appendChild(newsItemNode);
    });

    slidersInit();
  };

  // const url = `https://docs.google.com/spreadsheets/d/e/2PACX-1vSYQC04zek-hFmz5xjVsHVRCeb-wDPyOOjKzp7mNwIZdlJoCp5t9KSWJZQKbLTDLTZ_B3kkr1UvazBU/pub&single=true&output=csv`;
  if (newsLists) {
    const url = `https://docs.google.com/spreadsheets/d/e/2PACX-1vSYQC04zek-hFmz5xjVsHVRCeb-wDPyOOjKzp7mNwIZdlJoCp5t9KSWJZQKbLTDLTZ_B3kkr1UvazBU/pub?gid=381082473&single=true&output=csv`;
    window.addEventListener(`DOMContentLoaded`, () => {
      Papa.parse(url, {
        download: true,
        worker: true,
        header: true,
        error: (err, file, inputElem, reason) => {
          console.log(reason);
        },
        complete: (result) => {
          insertSlides(result.data);
        }
      });
    });
  }
};
