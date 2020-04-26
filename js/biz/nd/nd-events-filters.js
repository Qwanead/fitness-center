class EventsFilters {
  constructor(options) {
    const {container} = options;
    this.container = document.querySelector(container);
    this.selects = this.container.querySelectorAll(`.select-filter`);
    this.eventCards = this.getEventCards(this.container);
    this.noResultMessage = this.container.querySelector(`.events__no-result`);
    this.mounthWraps = this.container.querySelectorAll(`.events__period`);
    this.daysWraps = this.container.querySelectorAll(`.events__item`);
    this.nextBtn = this.container.querySelector(`.js-mounth-next`);
    this.prevBtn = this.container.querySelector(`.js-mounth-prev`);
    this.resetBtn = this.container.querySelector(`.events__show-btn--reset`);
    this.moreBtn = this.container.querySelector(`.js-all-btn`);
    this.showCardsCount = 6;

    this.breakpointTablet = window.matchMedia(`(min-width:768px)`);

    this.init();
  }

  updateSelectHeaders() {
    this.selects.forEach((item) => {
      const header = item.closest(`.select-filter`).querySelector(`.select-filter__header`);
      const checked = item.querySelector(`.select-filter__input:checked`);
      const newText = checked.parentNode.querySelector(`.select-filter__content`).innerHTML;
      header.innerHTML = newText;
    });
  }

  filterArrByParams(filters, nodesArr) {
    nodesArr.forEach((item) => {
      let isVisible = true;
      const data = item.dataset;

      for (let value in filters) {
        if (filters[value] !== data[value] && filters[value] !== `default`) {
          isVisible = false;
        }
      }

      if (isVisible) {
        item.classList.remove(`is-hide`);
        item.classList.add(`is-show`);
      } else {
        item.classList.add(`is-hide`);
        item.classList.remove(`is-show`);
      }
    });
  }

  collectParams() {
    let params = {};

    this.selects.forEach((item) => {
      const checked = item.querySelector(`.select-filter__input:checked`);
      params[checked.name] = checked.value;
    });

    return params;
  }

  toggleNoResult(allCount, hiddenCount) {
    if (allCount === hiddenCount) {
      this.noResultMessage.classList.remove(`is-hide`);
    } else {
      this.noResultMessage.classList.add(`is-hide`);
    }
  }

  showNoResult() {
    this.toggleNoResult(this.eventCards.length, this.hiddenEventsCount);
  }

  showNoResultMounth() {
    this.toggleNoResult(
      this.calcEventsCount(this.activeTabField),
      this.calcHiddenEventsCount(this.activeTabField)
    );
  }

  updateHiddenEventsCount() {
    this.hiddenEventsCount = this.calcHiddenEventsCount(this.container);
  }

  updateActiveTabField() {
    this.activeTabField = this.container.querySelector(`.events__period--active`);
    this.activeTabCards = this.getEventCards(this.activeTabField);
  }

  calcEventsCount(container) {
    return container.querySelectorAll(`.events__tag`).length;
  }

  calcHiddenEventsCount(container) {
    return container.querySelectorAll(`.events__tag.is-hide`).length;
  }

  calcShowedEventsCount(container) {
    return container.querySelectorAll(`.events__tag.is-show`).length;
  }

  findActiveMounth() {
    const mounthsHasEvents = Array.from(this.mounthWraps).filter((mounth) => {
      if (mounth.querySelectorAll(`.events__item.is-show`).length) {
        return mounth;
      }
    });

    return mounthsHasEvents[0];
  }

  updateDaysStatus() {
    this.daysWraps.forEach((day) => {
      if (this.calcEventsCount(day) === this.calcHiddenEventsCount(day)) {
        day.classList.add(`is-hide`);
        day.classList.remove(`is-show`);
      } else {
        day.classList.remove(`is-hide`);
        day.classList.add(`is-show`);
      }
    });
  }

  activateTab(tab) {
    const oldActiveTab = this.container.querySelector(`.events__period--active`);
    const oldActiveTabLink = this.container.querySelector(`.events__month--active`);

    if (oldActiveTab) {
      oldActiveTabLink.classList.remove(`events__month--active`);
      oldActiveTab.classList.remove(`events__period--active`);

      const id = tab.getAttribute(`data-id`);
      const newActiveTabLink = this.container.querySelector(`[data-id-content="${id}"]`);

      tab.classList.add(`events__period--active`);
      newActiveTabLink.classList.add(`events__month--active`);
    }
  }

  isActive(node, className) {
    return this.container.querySelector(node).classList.contains(className);
  }

  updateControls() {
    this.nextBtn.classList.remove(`button--disabled`);
    this.prevBtn.classList.remove(`button--disabled`);

    if (this.isActive(`.events__month:last-child`, `events__month--active`)) {
      this.nextBtn.classList.add(`button--disabled`);
    }

    if (this.isActive(`.events__month:first-child`, `events__month--active`)) {
      this.prevBtn.classList.add(`button--disabled`);
    }
  }

  applyFilters() {
    this.updateSelectHeaders();
    this.filterArrByParams(this.collectParams(), this.eventCards);
    this.updateDaysStatus();
    this.hideOverEvents(this.showCardsCount, this.getShowedEventCards(this.activeTabField));
    this.updateHiddenEventsCount();

    if (this.findActiveMounth()) {
      this.activateTab(this.findActiveMounth());
      this.updateControls();
    }

    this.showNoResult();
    this.updateMoreBtn(this.calcShowedEventsCount(this.activeTabField));
  }

  showAllEventCards(cards) {
    cards.forEach((card) => {
      card.classList.remove(`is-hide`);
      card.classList.add(`is-show`);
    });
  }

  changeMounth(tab) {
    this.activateTab(tab);
    this.updateActiveTabField();
    this.showNoResultMounth();
    this.updateControls();

    this.hideOverEvents(this.showCardsCount, this.getShowedEventCards(tab));
    this.updateDaysStatus();

    this.updateMoreBtn(this.calcShowedEventsCount(this.activeTabField));

  }

  updateMoreBtn(count) {
    if (count > this.showCardsCount - 1) {
      this.moreBtn.classList.remove(`hidden`);
    } else {
      this.moreBtn.classList.add(`hidden`);
    }
  }

  hideOverEvents(count, cards) {
    cards.forEach((card, i) => {
      if (i > count - 1) {
        card.classList.remove(`is-show`);
        card.classList.add(`is-hide`);
      }
    });
  }

  getEventCards(container) {
    return container.querySelectorAll(`.events__tag`);
  }

  getShowedEventCards(container) {
    return container.querySelectorAll(`.events__tag.is-show`);
  }

  bindEvents() {
    this.selects.forEach((item) => {
      item.addEventListener(`change`, (e) => {
        this.applyFilters();
        this.updateActiveTabField();
      });
    });

    // resetBtn
    this.resetBtn.addEventListener(`click`, (e) => {
      e.preventDefault();

      this.selects.forEach((select) => {
        const defaultInput = select.querySelector(`.select-filter__input[value="default"]`);
        defaultInput.checked = true;
      });

      this.applyFilters();
    });

    // moreBtn
    this.moreBtn.addEventListener(`click`, (e) => {
      e.preventDefault();

      if (this.breakpointTablet.matches) {
        this.showAllEventCards(this.getEventCards(this.activeTabField));
      } else {
        this.showAllEventCards(this.getEventCards(this.container));
      }

      this.updateDaysStatus();
      this.showNoResult();

      this.moreBtn.classList.add(`hidden`);
    });

    // controls
    this.nextBtn.addEventListener(`click`, (e) => {
      if (this.activeTabField.nextElementSibling) {
        this.changeMounth(this.activeTabField.nextElementSibling);
      }
    });

    this.prevBtn.addEventListener(`click`, (e) => {
      if (this.activeTabField.previousElementSibling) {
        this.changeMounth(this.activeTabField.previousElementSibling);
      }
    });
  }

  init() {
    this.bindEvents();
    this.updateActiveTabField();

    if (this.breakpointTablet.matches) {
      this.mounthWraps.forEach((period) => {
        this.hideOverEvents(this.showCardsCount, this.getEventCards(period));
      });
    } else {
      this.hideOverEvents(this.showCardsCount, this.getEventCards(this.container));
    }

    this.updateMoreBtn(this.calcEventsCount(this.activeTabField));

    this.updateDaysStatus();

  }
}

window.EventsFilters = EventsFilters;
