import Papa from 'papaparse';
import { periodsSliderSettings, scheduleInnerSlidersSettings } from './schedule.js';
import Swiper from 'swiper';

export default () => {
  const casesWrap = document.querySelector(`.schedule__list`);

  if (!casesWrap) return;

  const insertText = (target, selector, text) => {
    target.querySelector(selector).insertAdjacentHTML(`beforeend`, text);
  }

  const innerSliders = [];

  const renderPeriods = (data) => {
    data.forEach((periodText) => {
      let periodNode = document.querySelector(`#schedule-period`).content.cloneNode(true);

      insertText(periodNode, `.schedule__period-title`, periodText);

      const slideObj = {
        period: periodText,
        innerSlider: new Swiper (periodNode.querySelector(`.schedule__items`), scheduleInnerSlidersSettings),
      }

      // sliders
      innerSliders.push(slideObj);
      casesWrap.querySelector(`.swiper-wrapper`).appendChild(periodNode);
    });

    periodsSliderSettings.initialSlide = data.length;
    const periodsSlider = new Swiper (casesWrap, periodsSliderSettings);
  }

  const renderFromData = (data) => {
    let result = ``;

    // get periods
    let periodsAll = [];

    data.forEach((card) => {
      periodsAll.push(card.period);
    });

    const periodsUniq = [...new Set(periodsAll)];

    renderPeriods(periodsUniq);

    // get cards
    data.forEach((card) => {
      let status = ``;
      let statusNode = ``;

      /*
        1. schedule-card--finished-results - завершен и известны победители
        2. schedule-card--finished - завершен, итогов еще нет
        3. schedule-card--active-hiring - набор участников
        4. schedule-card--active-members - закончен набор
        5. schedule-card--new - закрыт
      */

      if (card.status === `завершен`) {
        status = `schedule-card--finished-results`;

        if (!card.winners_images) {
          status = `schedule-card--finished`;
        }
      }

      if (card.status === `Набор участников`) {
        status = `schedule-card--active-hiring`;
      }

      if (card.status === `Набор участников закончен`) {
        status = `schedule-card--active-members`;
      }

      if (card.status === `Новый поток`) {
        status = `schedule-card--new`;
      }

      // members
      let membersImages = card.members_images.split(',\n');
      let membersLinks = card.members_links.split(',\n');
      let membersList = ``;

      membersImages.forEach((image, i) => {
        membersList += `<li class="members__item">
                          <a class="members__link" href="${membersLinks[i]}" target="_blank">
                            <img src="${membersImages[i]}" alt="Участник ${i}" width="50" height="50" />
                          </a>
                        </li>`
      });

      membersList += `<li class="members__item">
                        <a class="members__link members__link--more" target="_blank" href="${card.members_others_link}">+${card.members_others_link_text}</a>
                      </li>`


      // winners
      let winnersImages = card.winners_images.split(',\n');
      let winnersLinks = card.winners_links.split(',\n');
      let winnersTitles = card.winners_titles.split(',\n');
      let winnersList = ``;

      winnersImages.forEach((image, i) => {
        winnersList += `<li class="winners__item winners__item--${i + 1}-place">
                          <a class="winners__link" href="${winnersLinks[i]}" target="_blank" title="${winnersTitles[i]}">
                            <img src="${winnersImages[i]}" alt="Победитель ${i}" width="36" height="36" />
                          </a>
                        </li>`
      });

      // cardHtml
      let templateId = `#${status}`;

      if (status === `schedule-card--active-hiring` || status === `schedule-card--active-members`) {
        templateId = `#schedule-card--active`;
      }

      let cardHtml = document.querySelector(templateId).content.cloneNode(true);
      const statusTextNode = cardHtml.querySelector(`.schedule-card__status`);

      if (statusTextNode) {
        insertText(cardHtml, `.schedule-card__status`, card.status_text);
      }

      /*
        3. schedule-card--active-hiring - набор участников
        4. schedule-card--active-members - закончен набор
      */

      if (status === `schedule-card--active-hiring` || status === `schedule-card--active-members`) {
        cardHtml.querySelector(`.schedule-card`).classList.add(status);
        cardHtml.querySelector(`.schedule-card__title`).classList.add(`schedule-card__title--large`);

        insertText(cardHtml, `.schedule-card__price`, card.price);
        insertText(cardHtml, `.schedule-card__top-places`, card.top_places);
      }

      // все кроме - schedule-card--new(закрыт)

      if (status !== `schedule-card--new`) {
        insertText(cardHtml, `.schedule-card__title`, card.title);
      }


      // 1. schedule-card--finished-results - завершен и известны победители

      if (status === `schedule-card--finished-results`) {
        insertText(cardHtml, `.winners__list`, winnersList);
      }


      // 2. schedule-card--finished - завершен, итогов еще нет

      if (status === `schedule-card--finished`) {
        insertText(cardHtml, `.schedule-card__date--clock strong`, card.results_date);
      }


      // 3. schedule-card--active-hiring - набор участников

      if (status === `schedule-card--active-hiring`) {
        const membersNode = cardHtml.querySelector(`.schedule-card__members`);
        membersNode.parentNode.removeChild(membersNode);

        insertText(cardHtml, `.schedule-card__request-date`, card.request_date);
      }


      // 4. schedule-card--active-members - закончен набор

      if (status === `schedule-card--active-members`) {
        const hiringNode = cardHtml.querySelector(`.schedule-card__hiring`);
        hiringNode.parentNode.removeChild(hiringNode);

        insertText(cardHtml, `.members__list`, membersList);
      }


      // 5. schedule-card--new - закрыт

      if (status === `schedule-card--new`) {
        insertText(cardHtml, `.schedule-card__date--lock strong`, card.open_date);
        insertText(cardHtml, `.schedule-card__year`, card.year);
      }

      const periodObj = innerSliders.find(x => x.period === card.period);

      periodObj.innerSlider.appendSlide(cardHtml);
    });
  }

  // const url = `https://docs.google.com/spreadsheets/d/e/2PACX-1vT8oK8YIl2C5D8KonEdruWpKGf1Vo3Txux7XqViXqoeYPGzOgeh9IKM_99Dr7wOClJGIDLsZgLFFbof/pub?gid=1452801026&single=true&output=csv`;
  const url = `https://docs.google.com/spreadsheets/d/e/2PACX-1vSYQC04zek-hFmz5xjVsHVRCeb-wDPyOOjKzp7mNwIZdlJoCp5t9KSWJZQKbLTDLTZ_B3kkr1UvazBU/pub?gid=1452801026&single=true&output=csv`;

  window.addEventListener(`DOMContentLoaded`, function () {
    Papa.parse(url, {
      download: true,
      header: true,
      error: function(err, file, inputElem, reason) {
        console.log(reason)
      },
      complete: (result) =>{
        renderFromData(result.data)
      }
    });
  });
}
