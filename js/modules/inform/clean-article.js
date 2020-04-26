const cleanArticle = (article) => {
  const childNodes = article.children;
  const anchors = article.querySelectorAll('.article_anchor_button');


  if (anchors.length) {
    anchors.forEach((anchor) => {
      anchor.remove();
    });
  }

  [...childNodes].forEach((node) => {
    if (node.tagName !== 'DIV') {
      cleanTag(node);
    }

    if (node.tagName === 'FIGURE') {
      const sizes = node.querySelector('.article_object_sizer_wrap');
      const carusel = node.querySelector('.article_photo_carousel');
      const images = node.querySelectorAll('img');
      const captions = node.querySelector('figcaption');
      let captionTexts;

      if (captions) {
        captionTexts = JSON.parse(captions.getAttribute('data-captions'));
        captions.remove();
      }

      if (sizes) {
        getImgSrcFromSizes(sizes.getAttribute('data-sizes'), images);
      }

      if (carusel) {
        getImgSrcFromSizes(carusel.getAttribute('data-sizes'), images);
      }

      node.innerHTML = '';
      const newWrap = document.createElement('div');
      newWrap.classList.add('article__figures');

      images.forEach((img, i) => {
        const figure = document.createElement('figure');
        figure.append(img);

        if (captionTexts[i]) {
          const caption = document.createElement('figcaption');
          caption.innerHTML = captionTexts[i];
          figure.append(caption);
        }

        newWrap.append(figure);

        const links = newWrap.querySelectorAll('a');

        if (links.length) {
          links.forEach((link) => {
            link.setAttribute('target', '_blank')
          });
        }
      });

      node.parentNode.replaceChild(newWrap, node);
    }
  });
}

const cleanTag = (tag) => {
  tag.classList.remove(...tag.classList);
  [...tag.attributes].forEach(attr => tag.removeAttribute(attr.name));
}

const getImgSrcFromSizes = (str, images) => {
  let sizes = JSON.parse(str);

  images.forEach((img, i) => {
    img.setAttribute('src', sizes[i].z[0]);
  });
}

export default cleanArticle;
