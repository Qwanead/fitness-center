//var urlEvents = '../docs/educations-events.csv';
var urlEvents = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vT5Px48wwT6UdT3wEmL3koJgfBn4pgRj8KDfIib59vjj6D6V1qe9db1-yvKeI_Yenm0SYcYyGWX3kfF/pub?gid=2060752878&single=true&output=csv';

window.addEventListener('DOMContentLoaded', () => {
  const eventTemplate = document.querySelector('#event-item');
  const eventPeriod = document.querySelector('#event-period');
  const eventGroup = document.querySelector('#event-group');
  const contentWrap = document.querySelector('.events__content');
  const eventTab = document.querySelector('#event-tab');
  const tabsWrap = document.querySelector('.events__months');
  const cityTemplate = document.querySelector('#event-city');
  const citysWrap = document.querySelector('.events__select--city .select-filter__body');

  const themes = {
    "1": {
      title: "Реклама",
      name: "avert"
    },

    "2": {
      title: "SMM",
      name: "smm"
    },

    "3": {
      title: "Общее",
      name: "common"
    },
  }

  const group = document.querySelector('.events__tag-group');
  let items = [];

  Papa.parse(urlEvents, {
    download: true,
    //worker: true,
    header: true,
    error: (err, file, inputElem, reason) => {
      console.log(reason);
    },
    complete: (result) => {
      listToData(result.data.filter((elem) => elem.status === "1"));

      const eventFilters = new EventsFilters({
        container: `.events`
      });
    }
  });

  function insertText(target, selector, text) {
    target.querySelector(selector).insertAdjacentHTML('beforeend', text);
  }

  function onlyUniqueObj(arr) {
    return Array.from(new Set(arr.map(JSON.stringify))).map(JSON.parse);
  }

  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  let dates = [];
  let groups = [];
  let citys = [];
  const mounths = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
  ];

  const mounthsSmall = {
    'Январь': 'января',
    'Февраль': 'февраля',
    'Март': 'марта',
    'Апрель': 'апреля',
    'Май': 'мая',
    'Июнь': 'июня',
    'Июль': 'июля',
    'Август': 'августа',
    'Сентябрь': 'сентября',
    'Октябрь': 'октября',
    'Ноябрь': 'ноября',
    'Декабрь': 'декабря',
  };

  function arraysFill(list) {
    items = [...list].filter((elem) => elem.status === "1");

    list.map((element) => {
      if (element.status === "0") {
        return;
      }

      const date = getDate(element.date);

      if (date instanceof Date && !isNaN(date)) {
        dates.push({
          day: date.getDate(),
          mounth: mounths[date.getMonth()],
          year: date.getFullYear()
        });
      } else {
        const period = generateDates(element.date) || [];

        period.forEach(function(date) {
          if (date instanceof Date && !isNaN(date)) {
            dates.push({
              day: date.getDate(),
              mounth: mounths[date.getMonth()],
              year: date.getFullYear()
            });
          }

          const copyCard = JSON.parse(JSON.stringify(element));
          copyCard.date = date;

          list.push(copyCard);
        });
      }
    });

    dates = onlyUniqueObj(dates);
    groups = dates.map((elem) => `${elem.mounth} ${elem.year}`).filter( onlyUnique );

    citys = items.map((elem) => elem.town).filter( onlyUnique );
  }

  function generateDates(date) {
    if (date) {

      const firstDate = getDate(date.substr(0, 10));
      const lastDate = getDate(date.substr(11));

      const dateArray = getDates(firstDate, lastDate);
      return dateArray;
    }
  }

  Date.prototype.addDays = function(days) {
    var dat = new Date(this.valueOf())
    dat.setDate(dat.getDate() + days);
    return dat;
  }

  function getDates(startDate, stopDate) {
    var dateArray = new Array();
    var currentDate = startDate;
    while (currentDate <= stopDate) {
      dateArray.push(currentDate)
      currentDate = currentDate.addDays(1);
    }
    return dateArray;
  }

  function listToData(list) {
    arraysFill(list);

    // render Periods
    groups.map((element) => {
      contentWrap.appendChild(renderPeriod(element));
      tabsWrap.appendChild(renderTab(element));
    });

    // render Groups
    dates = dates.sort(function(a, b) {
      return a.day - b.day
    })

    dates.map((element) => {
      const wrap = document.querySelector(`[data-id="${element.mounth} ${element.year}"]`).querySelector('.events__list');
      wrap.appendChild(renderGroup(element))
    });

    // render Events by Days
    list.map((element) => {
      const date = getDate(element.date);
      if (date instanceof Date && !isNaN(date)) {
        const selector = `.events__item[data-id="${date.getDate()} ${mounths[date.getMonth()]} ${date.getFullYear()}"]`;
        const wrap = document.querySelector(selector);

        if (wrap && element.status === "1") {
          const group = wrap.querySelector('.events__tag-group');
          group.appendChild(renderEvent(element));
        }

      }
    });

    //render citys
    citys.map((element) => {
      citysWrap.appendChild(renderCity(element));
    });

    // first tabs activate
    const dateNow = new Date();
    const mounthNum = dateNow.getMonth();
    const yearNum = dateNow.getFullYear();
    const label = mounths[mounthNum] + ' ' + yearNum;

    document.querySelector(`.events__month[data-id-content="${label}"]`).classList.add('events__month--active');
    document.querySelector(`.events__period[data-id="${label}"]`).classList.add('events__period--active');

    if (document.querySelector(`.events__month[data-id-content="${label}"]`) !== document.querySelector(`.events__month:first-child`)) {
      document.querySelector('.button--backward').classList.remove('button--disabled');
    }
  }

  function getDate(date) {
    if (date instanceof Date && !isNaN(date)) {
      return date;
    }

    var st = date;
    var pattern = /(\d{2})\.(\d{2})\.(\d{4})/;
    var dt = new Date(st.replace(pattern,'$3-$2-$1'));

    return dt;
  }

  function renderEvent(data) {
    const eventItem = eventTemplate.content.cloneNode(true);
    const eventWrap = eventItem.querySelector('.events__tag');
    const eventTag = eventWrap.querySelector('.tag__name');
    const eventTime = eventWrap.querySelector('.tag__time');
    const eventDot = eventWrap.querySelector('.tag__dot');

    if (data.theme) {
      const {title, name} = themes[data.theme];
      eventWrap.classList.add(`tag--${name}`);
      eventTag.classList.add(`tag__name--${name}`);
      insertText(eventItem, '.tag__name',  title);
      eventWrap.setAttribute('data-topic', name);
    } else {
      eventWrap.classList.add(`tag--common`);
    }

    eventWrap.setAttribute('data-city', data.town);
    insertText(eventItem, '.tag__title',  data.name);
    insertText(eventItem, '.tag__time',  data.time);
    insertText(eventItem, '.tag__city',  data.town);

    if (!data.time) {
      eventTime.remove();
      eventDot.remove();
    }

    return eventItem;
  }

  function renderPeriod(data) {
    const period = eventPeriod.content.cloneNode(true);
    const item = period.querySelector('.events__period');

    item.setAttribute('data-id', data)

    return item;
  }

  function renderTab(data) {
    const tab = eventTab.content.cloneNode(true);
    const mounthNode = tab.querySelector('.events__month');

    insertText(tab, '.events__month', data);

    mounthNode.setAttribute('data-id-content', data);

    return mounthNode;
  }

  function renderGroup(data) {
    const period = eventGroup.content.cloneNode(true);
    const group = period.querySelector('.events__item');

    insertText(group, '.js-event-date-day', data.day);
    insertText(group, '.js-event-date-mounth', mounthsSmall[data.mounth]);
    group.setAttribute('data-id', `${data.day} ${data.mounth} ${data.year}`);

    return group;
  }

  function renderCity(data) {
    const city = cityTemplate.content.cloneNode(true);
    const item = city.querySelector('.select-filter__option');
    const input = item.querySelector('.select-filter__input');

    input.setAttribute('value', data);
    insertText(item, '.select-filter__content', data);

    if (data === 'Онлайн') {
      item.classList.add('order-2');
    }

    return item;
  }

  // popup
  const popup = document.querySelector('.vk_events__modal');
  const popupDate = popup.querySelector('.js-popup-date');
  const popupTime = popup.querySelector('.js-popup-time');
  const popupTown = popup.querySelector('.js-popup-town');
  const popupTitle = popup.querySelector('.js-popup-title');
  const popupDesc = popup.querySelector('.js-popup-desc');
  const popupTag = popup.querySelector('.js-popup-tag');
  const popupLink = popup.querySelector('.popup__link--go a');
  const popupAuthor = popup.querySelector('.popup__author p');

  document.addEventListener('click', function(e) {
    if (e.target.closest('.tag')) {
      e.preventDefault();
      const tag = e.target.closest('.tag');

      updatePopupData(tag);
    }
  });

  function noData(text) {
    return text || 'нет данных'
  }

  function dataOrHide(text, node) {
    if (text) {
      node.innerHTML = text;
      node.classList.remove('hidden');
    } else {
      node.classList.add('hidden');
    }
  }

  function validURL(str) {
    var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
      '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return !!pattern.test(str);
  }

  function updatePopupData(tag) {
    const data = items.filter(elem => {
      if (elem.name === tag.querySelector('.tag__title').innerHTML &&
          elem.town === tag.querySelector('.tag__city').innerHTML) {
            return elem;
          }
    })[0];
    popupDate.innerHTML = noData(data.date);

    if (data["Время"]) {
      popupTime.innerHTML = data["Время"];
      popupTime.classList.remove('hidden');
    } else {
      popupTime.classList.add('hidden');
    }

    dataOrHide(data.speaker, popupAuthor);

    popupTown.innerHTML = noData(data.town);
    popupTitle.innerHTML = noData(data.name);
    popupDesc.innerHTML = noData(data.description.replace(new RegExp('\r?\n','g'), '<br />'));

    if (validURL(data.link)) {
      popupLink.setAttribute('href', data.link);
      popupLink.closest('.popup__links').style = "";
    } else {
      popupLink.closest('.popup__links').style = "display: none;"
    }

    popupTag.classList.remove(...popupTag.classList);

    const {name, title} = themes[data.theme];
    popupTag.classList.add(`popup__tag`, `popup__tag--${name}`);
    popupTag.innerHTML = title;
  }

});
