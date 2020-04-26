document.addEventListener("DOMContentLoaded", function() {
  //var url = '../docs/articles.csv';

  var url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ2VL94JjA7l-5F2AkWMLU30pafc7Z9k6UB9YCfbV-fV448mDiFTJC58nf_j7mFIjCBDPYxq6ePBTJ-/pub?gid=695351659&single=true&output=csv';

  window.addEventListener('DOMContentLoaded', () => {
    Papa.parse(url, {
      download: true,
      //worker: true,
      header: true,
      error: (err, file, inputElem, reason) => {
        console.log(reason);
      },
      complete: (result) => {

        renderLinks(result.data);
      }
    });
  });

  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  function insertText(target, selector, text) {
    target.querySelector(selector).insertAdjacentHTML('beforeend', text);
  }

  function renderLinks(data) {
    var categorys = data.sort((a, b) => a["N"] - b["N"]).map(item => item["section"]).filter( onlyUnique );

    var list = document.querySelector('.landing_academy__materials_list');

    categorys.forEach(element => {
      var categoryNode = document.querySelector('#material-item').content.cloneNode(true);
      insertText(categoryNode, '.landing_academy__materials_item_title', element);

      list.appendChild(categoryNode);
    });

    data.forEach(element => {
      if (element["Не показывать"]) {
        return;
      }

      var linkNode = document.querySelector('#material-link').content.cloneNode(true);
      insertText(linkNode, '.landing_academy__bg_link', element["name"]);

      var linkHref = element["source"].replace('vk.com/@-170652532-', 'https://vk.com/biz/article/');
      linkNode.querySelector('a').setAttribute('href', linkHref);

      var title = [...list.children]
        .filter(item => item.querySelector('.landing_academy__materials_item_title').textContent.includes(element["section"]));

      title[0].querySelector('.landing_academy__materials_item_links').appendChild(linkNode);
    });

  }
});
