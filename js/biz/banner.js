'use strict';

var banner = document.querySelector('#banner-vkonline');
var bannerMobile = document.querySelector('#banner-vkonline-mobile');

var closeButton = banner.querySelector('button');
var closeButtonMobile = bannerMobile.querySelector('button');

var wasBannerClosed = false;
var isStorageSupport = true;

try {
  wasBannerClosed = localStorage.getItem("wasBannerClosed");
} catch (err) {
  isStorageSupport = false;
}

var isPossibleShowBanner = banner && bannerMobile && !wasBannerClosed && isStorageSupport;

if (isPossibleShowBanner) {
  var onCloseClick = function (evt) {
    evt.preventDefault();

    banner.classList.add('visually-hidden');
    bannerMobile.classList.add('visually-hidden');

    closeButton.removeEventListener('click', onCloseClick);
    closeButtonMobile.removeEventListener('click', onCloseClick);

    localStorage.setItem("wasBannerClosed", true);
  };

  banner.classList.remove('visually-hidden');
  bannerMobile.classList.remove('visually-hidden');

  closeButton.addEventListener('click', onCloseClick);
  closeButtonMobile.addEventListener('click', onCloseClick);
}

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 90) {
    evt.preventDefault();
    localStorage.removeItem("wasBannerClosed");
  }
});
