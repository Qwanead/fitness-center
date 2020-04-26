import smoothscroll from 'smoothscroll-polyfill';
import AOS from './vendor/aos.esm.js';

import nav from './modules/nav.js';
import intro from './modules/intro.js';
import bubbles from './modules/bubbles.js';
import waves from './modules/waves.js';
import gtmInit from './modules/gtm-init.js';

// make-biz
import ndScipts from './modules/nd-scripts.js';
/*import schedule from './modules/schedule.js';*/
import cases from './modules/cases.js';
import about from './modules/about.js';
import finalForum from './modules/final-forum.js';
import tabs from './modules/tabs.js';
import news from './modules/news.js';
import modal from './modules/modal.js';
import parseData from './modules/parse-data.js';
import newsFromDocs from './modules/news-from-docs.js';

smoothscroll.polyfill();

if (document.querySelector(`.full-page-wrap`)) {
  AOS.init({
    once: true,
    container: `.full-page-wrap`,
  });
}

nav();
intro();
bubbles();
waves();
gtmInit();

// make-biz
ndScipts();
/*schedule();*/
cases();
about();
finalForum();
tabs();
// news();
modal();
parseData();
newsFromDocs();
