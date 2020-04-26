import Swiper from 'swiper';

export default () => {
  const newsLists = document.querySelectorAll(`.news__list`);

  if (!newsLists) return;

  let sliders = [];

  newsLists.forEach((elem) => {

    const slider = new Swiper (elem, {
      loop: false,
      slidesPerView: 'auto',
      spaceBetween: 16,

      breakpoints: {
        1024: {
          allowTouchMove: false,
          spaceBetween: 26,
        }
      }
    })

    sliders.push(slider);
  });

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
    const newsText = node.querySelector(`.news__text`);
    newsText.insertAdjacentHTML(`beforeend`, post.text.substr(0, 60) + `...`);

    if (isLink) {
      const link = `https://vk.com/wall${post.owner_id}_${post.id}`;
      node.querySelector(`.news__item`).setAttribute(`href`, link)
    }

    let newsImageUrl = ``;

    if (post.attachments[0].type === `video`) {
      newsImageUrl = post.attachments[0].video.image[4].url;
    }

    if (post.attachments[0].type === `link`) {
      newsImageUrl = post.attachments[0].link.photo.sizes[5].url;
    }

    const newsImageNode = node.querySelector(`img`);
    newsImageNode.setAttribute(`src`, newsImageUrl);
    newsImageNode.setAttribute(`alt`, `Пост ${index + 1}`);

    const videoBtn = node.querySelector(`.video-btn`);
    if (videoBtn && post.attachments[0].type === `video`) {
      const video = post.attachments[0].video;

      videoBtn.setAttribute(`data-modal`, `https://vk.com/video_ext.php?oid=${video.owner_id}&id=${video.id}&hash=${video.access_key}`);
    }

    return node;
  }

  const insertSlides = (target, data, template, isLink) => {
    data.response.items.forEach((post, i) => {
      let newsItemNode = document.querySelector(template).content.cloneNode(true);

      insertDataToSlide(newsItemNode, post, i, isLink);

      target.appendSlide(newsItemNode);
    });
  }

  const callbackPosts = (result) => {
    insertSlides(sliders[0], result, `#news-item`, true);
  }

  const callbackVideos = (result) => {
    insertSlides(sliders[1], result, `#news-item--video`);
  }

  window.callbackPosts = callbackPosts;
  window.callbackVideos = callbackVideos;
};
