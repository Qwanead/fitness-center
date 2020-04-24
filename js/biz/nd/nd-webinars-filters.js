window.addEventListener('DOMContentLoaded', () => {
  function filterSelect(filters, nodesArr) {
    nodesArr.forEach(function(item) {
      let isVisible = true;
      const data = item.dataset;

      for (value in filters) {
        if (filters[value] !== data[value] && filters[value] !== 'default') {
          isVisible = false;
        }
      }

      if (!isVisible) {
        item.style.display = 'none';
        item.classList.add('hide');
        item.classList.remove('filtered');
      } else {
        item.style.display = '';
        item.classList.remove('hide');
        item.classList.add('filtered');
      }
    });
  }

  // webinars
  const webinars = document.querySelector('.webinars__slider .swiper-wrapper').children;
  const webinarsSelects = document.querySelectorAll('.webinars__select');
  let pager = document.querySelector('.slider__pager');

  document.addEventListener(`click`, function(e) {
    if (e.target.closest('.webinars__tab-switcher')) {
      const filterText = e.target.closest('.webinars__tab-switcher').getAttribute('data-theme');

      const mobileSelect = document.querySelector(`.webinars__select--theme .select-filter__input[value="${filterText}"]`);
      const mobileSelectHeader = document.querySelector('.webinars__select--theme .select-filter__header');
      mobileSelect.checked = true;
      mobileSelectHeader.innerHTML = mobileSelect.closest('.select-filter__option').querySelector('.select-filter__content').innerHTML;

      filterWebinars();

      if (document.querySelectorAll('.webinars__slider .filtered').length <= 8) {
        pager.style = 'display: none';
        window.webinarSwiper.slideTo(0);
      } else {
        pager.style = '';
      }
    }
  });

  webinarsSelects.forEach(function(item) {
    item.addEventListener('change', filterWebinars);
  });

  function filterWebinars() {
    let values = {};

    webinarsSelects.forEach(function(item) {
      const checked = item.querySelector('.select-filter__input:checked');

      values[checked.name] = checked.value;
    });

    filterSelect(values, [...webinars]);
  };

  function resetFilterWebinars() {
    const selects = document.querySelectorAll('.webinars__select');

    selects.forEach(function(item) {
      const firstOption = item.querySelector('.select-filter__input[value="default"]');
      firstOption.checked = true;

      const header = item.closest('.select-filter').querySelector('.select-filter__header');
      const newText = firstOption.parentNode.querySelector('.select-filter__content').innerHTML;

      header.innerHTML = newText;
    });

    const activeTab = document.querySelector('.webinars__tab--active');
    const firstTab = document.querySelector('.webinars__tab');

    activeTab.classList.remove('webinars__tab--active');
    firstTab.classList.add('webinars__tab--active');
  };

  const breakpoint = window.matchMedia('(min-width:1000px)');

  const breakpointChecker = function () {
    resetFilterWebinars();
  };

  breakpoint.addListener(breakpointChecker);
  breakpointChecker();
});
