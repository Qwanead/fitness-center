document.addEventListener("DOMContentLoaded", function () {
  var udHeader = document.querySelector('.js-nd-vkbiz-header');
  var menuToggler = document.querySelector('.js-nd-header-toggler');
  var subnavTrigger = document.querySelector('.js-subnav-trigger');
  var linkBack = document.querySelector('.js-back-to-menu');
  var subnavEls = document.querySelectorAll('.js-subnav');
  var nav = document.querySelector('.js-nav');

  window.addEventListener('scroll', function () {
    if (window.scrollY >= 10) {
      udHeader.classList.add('scrolling');
    } else {
      udHeader.classList.remove('scrolling');
    }
  });

  menuToggler.addEventListener('click', function () {
    if (udHeader.classList.contains('menu-opened')) {
      document.body.classList.remove('nd-overflow');
      udHeader.classList.remove('menu-opened');
    } else {
      document.body.classList.add('nd-overflow');
      udHeader.classList.add('menu-opened');
    }
  });

  if (window.innerWidth < 880) {
    subnavTrigger.addEventListener('click', function (e) {
      e.preventDefault();
      e.target.nextElementSibling.classList.add('show');
      linkBack.classList.remove('hidden');
      nav.classList.add('overflow');
    });
  };

  linkBack.addEventListener('click', function () {
    subnavEls.forEach(function (subnav) {
      subnav.classList.remove('show');
    });
    linkBack.classList.add('hidden');
    nav.classList.remove('overflow');
  })

  var links = document.querySelectorAll("a:not(.js-target-blank)");

  for (var i = 0; i < links.length; i++) {
    var link = links[i];
    link.target = "_top";

    if (link.classList.contains('landing_cases__case_preview_link') ||
      link.classList.contains('landing_cases__company_name')) {
      var newHref = '' + link.getAttribute('href').replace('/biz/case/', '/cases/') + '.html';
      link.setAttribute('href', newHref);
    }
  }

  // prevent click
  var subnavParentLinks = udHeader.querySelectorAll('.nd-vkbiz-nav__list-item_has-subnav > a');

  subnavParentLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
    });
  });

  // ads gifs mobile
  var gifs = document.querySelectorAll('.manage-step-item__gif');

  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  var changeClasses = function () {
    gifs.forEach(function (element) {
      if (isElementInViewport(element)) {
        element.classList.add('manage-step-item__gif--show');
      } else {
        element.classList.remove('manage-step-item__gif--show');
      }
    });
  };

  changeClasses();

  window.addEventListener('scroll', changeClasses);


  // link refer
  if (window.location !== window.parent.location) {
    const url = new URL(document.referrer);
    const links = document.querySelectorAll('a[target="_top"]');
    Array.prototype.forEach.call(links, (link) => {
      if (link.origin === window.location.origin) {
        const originUrl = new URL(link.href);
        link.href = `${url.origin}${originUrl.pathname}${originUrl.search}${originUrl.hash}`;
      }
    });
  }
});

document.addEventListener('DOMContentLoaded', function() {
  var menuIcons = document.querySelectorAll(".js-nd-vkbiz-header img");

  if (!menuIcons.length || document.body.classList.contains('inform-center')) {
    return;
  }

  menuIcons.forEach(function(elem) {
    elem.setAttribute("src", "../" + elem.getAttribute("src"));
  });

  // VK.init({ apiId: 7396670 });

  // VK.Auth.login(function(response) {
  //   if (response.session) {
  //     /* Пользователь успешно авторизовался */
  //     VK.Api.call('users.get', {v:"5.103", fields: "photo_50"}, function(r) {
  //       if(r.response) {
  //         const ava = r.response[0].photo_50;
  //         const span = document.createElement('span');
  //         const img = document.createElement('img');

  //         span.classList.add('ava');
  //         img.setAttribute('src', ava);

  //         span.appendChild(img);

  //         const userBlock = document.querySelector('.nd-vkbiz-user-block__label');
  //         userBlock.insertAdjacentHTML('afterbegin', span.outerHTML);
  //       }
  //     });
  //   }
  // });
});
