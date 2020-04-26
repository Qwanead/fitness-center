document.addEventListener("DOMContentLoaded", function() {
  var url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vStLFsYz1RiPSeJZfaJQQQaChkuEvUMj4minD0n_8_7jusyfqyq0r5mS3dp43gkisO56Wt4Cid5J69Z/pub?gid=144479480&single=true&output=csv';

  window.addEventListener('DOMContentLoaded', () => {
    Papa.parse(url, {
      download: true,
      worker: true,
      header: true,
      error: (err, file, inputElem, reason) => {
        console.log(reason);
      },
      complete: (result) => {

        renderLinks(result.data);
      }
    });
  });

  function renderLinks(data) {
    var wrap = document.querySelector('.landing_vk_business__news_samples');
    var newsItemTemplate = document.querySelector('#news-item');

    data.map(function(elem, i) {
      const divid = "vk_article_" + i;
      const id_for_widget = elem.url.replace('vk.com/', '');

      const newsItem = newsItemTemplate.content.cloneNode(true);
      const newsLink = newsItem.querySelector('.landing_vk_business_news_article');
      const div = newsItem.querySelector('.landing_vk_business_news_article > div');

      div.id = divid;
      newsLink.setAttribute('href', 'https://' + elem.url);
      newsLink.setAttribute('target', '_blank');

      wrap.appendChild(newsItem);

      VK.Widgets.Article(divid, id_for_widget, {
        height: '213px',
        background: '#fff'
      });
    });
  }
});
