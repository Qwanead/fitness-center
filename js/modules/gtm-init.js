export default () => {
  const gtmBtns = document.querySelectorAll(`.gtm-btn`);

  const gtmCallback = (e) => {
    const clickType = e.currentTarget.getAttribute(`data-gtm`);

    dataLayer.push({event: clickType});
  }

  gtmBtns.forEach(function (elem) {
    elem.addEventListener(`click`, gtmCallback);
  });
};
