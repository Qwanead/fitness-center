document.addEventListener("DOMContentLoaded", function() {
  var modal = document.querySelector(".modal");
  var iframe = modal.querySelector("iframe");

  if (!modal) return;

  document.addEventListener("click", function(e) {
    if (e.target.closest('.js-video-popup')) {

      e.preventDefault();

      var target = e.target.closest('.js-video-popup');
      var videoId = target.getAttribute("data-iframe");

      if (!videoId) {
        return;
      }

      iframe.setAttribute("src", videoId);

      modal.classList.add("modal--show");

      document.body.classList.add('nd-overflow');
    }
  });

  var closeModal = function() {
    modal.classList.remove("modal--show");
    document.body.classList.remove('nd-overflow');

    iframe.removeAttribute("src");
  }

  modal.addEventListener("click", function(e) {
    e.preventDefault();

    if (!e.target.classList.contains("modal__content")) {
      closeModal();
    }
  });

  document.addEventListener('keydown', function(evt) {
    evt = evt || window.event;
    if (evt.keyCode == 27) {
      closeModal();
    }
  });

  var btn = document.querySelector(".nd-vkbiz-header__logo");

  window.addEventListener('blur', function(){
    setTimeout(function() {
      var x = window.scrollX;
      var y = window.scrollY;

      btn.focus({
        preventScroll: true
      });

      window.scrollTo(x, y);
    }, 10)
  });
});
