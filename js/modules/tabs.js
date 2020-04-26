import { getParents, getSiblings } from '../vendor/tools.js';

export default () => {

  const tabsLinks = document.querySelectorAll(`.tabs__nav-link`);

  const tabsToggle = (e) => {
    e.preventDefault();

    const tabsLink = e.currentTarget;
    const tabsWrap = getParents(tabsLink, `.tabs`)[0];

    const href = tabsLink.getAttribute(`href`);

    // nav
    tabsLink.classList.add(`tabs__nav-link--active`);

    const othersTabsItems = getSiblings(tabsLink.parentNode);

    othersTabsItems.forEach((item) => {
      item.querySelector(`.tabs__nav-link`).classList.remove(`tabs__nav-link--active`);
    });

    // content
    const newActiveContentItem = tabsWrap.querySelector(href);
    const othersContentItems = getSiblings(newActiveContentItem);

    newActiveContentItem.classList.remove(`tabs__content-item--hide`);

    othersContentItems.forEach((item) => {
      item.classList.add(`tabs__content-item--hide`);
    });
  };

  tabsLinks.forEach((link) => {
    link.addEventListener(`click`, tabsToggle);
  });

};
