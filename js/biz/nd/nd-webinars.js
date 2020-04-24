//var urlWebinars = 'docs/educations-webs.csv';
var urlWebinars = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vT5Px48wwT6UdT3wEmL3koJgfBn4pgRj8KDfIib59vjj6D6V1qe9db1-yvKeI_Yenm0SYcYyGWX3kfF/pub?gid=300672527&single=true&output=csv';

window.addEventListener('DOMContentLoaded', () => {
  const webinarTemplate = document.querySelector('#webinar-slide');
  const fullWebinarCard = document.querySelector('.webinars__hero');
  const dateNow = new Date();
  let items = [];

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

  const mounths = [
    'Января',
    'Февраля',
    'Марта',
    'Апреля',
    'Мая',
    'Июня',
    'Июля',
    'Августа',
    'Сентября',
    'Ноября',
    'Декабря',
  ];

  Papa.parse(urlWebinars, {
    download: true,
    //worker: true,
    header: true,
    error: (err, file, inputElem, reason) => {
      console.log(reason);
    },
    complete: (result) => {
      renderWebinars(result.data);
    }
  });

  function insertText(target, selector, text) {
    target.querySelector(selector).insertAdjacentHTML('beforeend', text);
  }

  function getDate(date) {
    var pattern = /(\d{2})\.(\d{2})\.(\d{4})/;
    var dt = new Date(date.replace(pattern,'$3-$2-$1'));

    return dt;
  }

  function renderWebinars(data) {

    items = data.slice().filter(elem => elem.name);

    items = items.map((elem) => {
      const newObj = JSON.parse(JSON.stringify(elem));

      newObj.date = {
        label: elem.date,
        value: getDate(elem.date)
      }

      return newObj;
    });

    items = items.sort((a, b) => {
      return a.date.value < b.date.value;
    });

    if (fullWebinarCard) {
      const fullWebinarData = items.filter(elem => elem.date > dateNow).sort((a, b) => a.date - b.date)[0];

      if (fullWebinarData) {
        renderFullWebinar(fullWebinarData);
      } else {
        document.querySelector('.webinars__hero').classList.add('hidden');
      }
    }

    items.map((elem) => {
      if (!elem.name) {
        return;
      }

      const node = renderWebinarItem(elem);

      if (node) {
        window.webinarSwiper.appendSlide(node);
      }
    });

    window.webinarSwiper.slideTo(0);

    let pager = document.querySelector('.slider__pager');

    if (window.webinarSwiper.slides.length <= 8) {
      pager.style = 'display: none';
    }
  }

  function renderFullWebinar(data) {
    const hero = document.querySelector('.webinars__hero');
    const poster = hero.querySelector('.webinars__main-slide-image img');
    const date = hero.querySelector('.webinars__main-slide-date');
    const author = hero.querySelector('.webinars__main-slide-author p');
    const title = hero.querySelector('.webinars__hero-title');

    const descIntro = hero.querySelector('.js-desc-intro');
    const descFull = hero.querySelector('.js-desc-full');

    const moreBtn = hero.querySelector('.webinars__main-slide-description .link');

    poster.setAttribute('src', data.poster);
    poster.setAttribute('alt', data.name);

    if (data.time) {
      const time = data.time.split(":");
      data.date.setHours(Number(time[0]));
      data.date.setMinutes(Number(time[1]))
    }

    //timer
    let currentYear = new Date().getFullYear();
    let targetDate = data.date;


    let onStart = () => {
      document.querySelectorAll('.countdown-item').forEach(item => item.classList.add('show'))
    }

    let onTick = ({ days, hours, minutes }) => {
      document.querySelector('.countdown-item.days').innerHTML = days;
      document.querySelector('.countdown-item.hours').innerHTML = hours;
      document.querySelector('.countdown-item.minutes').innerHTML = minutes;
    };

    const sufixes = new LsCountdownSufixes({
      days: ' дней',
      hours: ' часов',
      minutes: ' минут'
    });

    let options = new LsCountdownOptions({ targetDate, onStart, onTick, sufixes});
    let countdown = new LsCountdown(options);

    countdown.start();
    window.mycountdown = countdown;
    // end timer

    date.innerHTML = `${data.date.getDate()} ${mounths[data.date.getMonth()]} ${data.date.getFullYear()}`;
    author.innerHTML = data.speeker;
    title.innerHTML = data.name;

    let descIntroText = data.description.substr(0, 90);
    let descFullText = data.description.substr(90);

    if (data.description.length > 90) {
      descIntroText += '...';
    } else {
      moreBtn.classList.add('hidden');
    }

    descIntro.innerHTML = descIntroText;
    descFull.innerHTML = descFullText;

    moreBtn.addEventListener('click', function(e) {
      e.preventDefault();

      descFull.classList.remove('hidden');
      descIntro.innerHTML = descIntroText.substr(0, 90);

      moreBtn.classList.add('hidden');
    })
  }

  function renderWebinarItem(item) {
    if (fullWebinarCard) {
      if (item.name === document.querySelector('.webinars__hero-title').innerHTML &&
          `${date.getDate()} ${mounths[date.getMonth()]} ${date.getFullYear()}` === document.querySelector('.webinars__main-slide-date').innerHTML) {
        return null;
      }
    }

    const webinarItem = webinarTemplate.content.cloneNode(true);
    const webinarWrap = webinarItem.querySelector('.js-webinar');
    const webinarPoster = webinarWrap.querySelector('.js-webinar-poster');
    const webinarTime = webinarItem.querySelector('.js-webinar-time');
    const webinarSlide = webinarItem.querySelector('.swiper-slide');

    webinarPoster.setAttribute('src', item.poster);
    webinarPoster.setAttribute('alt', item.name);
    webinarWrap.setAttribute('data-video', item.video);
    webinarSlide.setAttribute('data-theme', themes[item.direction].title);

    insertText(webinarWrap, '.js-webinar-name', item.name);
    insertText(webinarWrap, '.js-webinar-date', item.date.label);

    if (item.date.value > dateNow) {
      webinarTime.classList.add('slider__timer--soon');
      webinarTime.innerHTML = 'Скоро';
      webinarSlide.setAttribute('data-type', 'soon');
    } else {
      webinarTime.remove();
      webinarSlide.setAttribute('data-type', 'past');
    }

    return webinarItem;
  }

  // video-modal
  const modal = document.querySelector(`.modal`);

  if (!modal) return;

  document.addEventListener(`click`, (e) => {
    if (e.target.closest('.js-webinar')){

      e.preventDefault();

      const target = e.target.closest('.js-webinar');

      const videoSrc = target.getAttribute(`data-video`);
      const modal = document.querySelector(`.modal`);
      const iframe = modal.querySelector(`iframe`);
      const desc = document.querySelector(`.modal__desc`);

      iframe.setAttribute(`src`, videoSrc);

      modal.classList.add(`modal--show`);

      document.body.style.overflow = 'hidden';

      const item = items.filter((elem) => target.querySelector('.js-webinar-name').innerHTML === elem.name)[0];
      const pars = item.description.split('\n');

      let newDesc = '';

      pars.map((par) => {
        if (par.length > 0) {
          newDesc += `<p>${par}</p>`;
        }

      })

      desc.innerHTML = newDesc;
    }
  });

  const closeModal = () => {
    modal.classList.remove(`modal--show`);
    document.body.style.overflow = 'auto';

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

  // const btn = document.querySelector(`.about__btn`);

  // window.addEventListener('blur', function(){
  //   setTimeout(() => {
  //     const x = window.scrollX;
  //     const y = window.scrollY;

  //     btn.focus({
  //       preventScroll: true
  //     });

  //     window.scrollTo(x, y);
  //   }, 10)
  // });
});
