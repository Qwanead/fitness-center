export default () => {
  document.addEventListener("DOMContentLoaded", function() {
    var udHeader = document.querySelector('.js-nd-vkbiz-header');

    if (!udHeader) return;

    var menuToggler = document.querySelector('.js-nd-header-toggler');
    var subnavTrigger = document.querySelector('.js-subnav-trigger');
    var linkBack = document.querySelector('.js-back-to-menu');
    var subnavEls = document.querySelectorAll('.js-subnav');
    var nav = document.querySelector('.js-nav');


    window.addEventListener('scroll', function() {
      if (window.scrollY >= 10) {
        udHeader.classList.add('scrolling');
      } else {
        udHeader.classList.remove('scrolling');
      }
    });

    menuToggler.addEventListener('click', function() {
      if (udHeader.classList.contains('menu-opened')) {
        document.body.classList.remove('nd-overflow');
        udHeader.classList.remove('menu-opened');
      } else {
        document.body.classList.add('nd-overflow');
        udHeader.classList.add('menu-opened');
      }
    });

    if (window.innerWidth < 880 && subnavTrigger) {
      subnavTrigger.addEventListener('click', function(e) {
        e.preventDefault();
        e.target.nextElementSibling.classList.add('show');
        linkBack.classList.remove('hidden');
        nav.classList.add('overflow');
      });
    };

    linkBack.addEventListener('click', function() {
      subnavEls.forEach(function (subnav) {
          subnav.classList.remove('show');
      });
      linkBack.classList.add('hidden');
      nav.classList.remove('overflow');
    })
  });
}

