! function(e) {
  function t(t) {
      for (var n, i, o = t[0], l = t[1], c = t[2], _ = 0, u = []; _ < o.length; _++) i = o[_], a[i] && u.push(a[i][0]), a[i] = 0;
      for (n in l) Object.prototype.hasOwnProperty.call(l, n) && (e[n] = l[n]);
      for (d && d(t); u.length;) u.shift()();
      return r.push.apply(r, c || []), s()
  }

  function s() {
      for (var e, t = 0; t < r.length; t++) {
          for (var s = r[t], n = !0, o = 1; o < s.length; o++) {
              var l = s[o];
              0 !== a[l] && (n = !1)
          }
          n && (r.splice(t--, 1), e = i(i.s = s[0]))
      }
      return e
  }
  var n = {},
      a = {
          "web/biz": 0
      },
      r = [];

  function i(t) {
      if (n[t]) return n[t].exports;
      var s = n[t] = {
          i: t,
          l: !1,
          exports: {}
      };
      return e[t].call(s.exports, s, s.exports, i), s.l = !0, s.exports
  }
  i.m = e, i.c = n, i.d = function(e, t, s) {
      i.o(e, t) || Object.defineProperty(e, t, {
          enumerable: !0,
          get: s
      })
  }, i.r = function(e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
          value: "Module"
      }), Object.defineProperty(e, "__esModule", {
          value: !0
      })
  }, i.t = function(e, t) {
      if (1 & t && (e = i(e)), 8 & t) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var s = Object.create(null);
      if (i.r(s), Object.defineProperty(s, "default", {
              enumerable: !0,
              value: e
          }), 2 & t && "string" != typeof e)
          for (var n in e) i.d(s, n, function(t) {
              return e[t]
          }.bind(null, n));
      return s
  }, i.n = function(e) {
      var t = e && e.__esModule ? function() {
          return e.default
      } : function() {
          return e
      };
      return i.d(t, "a", t), t
  }, i.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
  }, i.p = "/js/cmodules/";
  var o = window.webpackJsonp = window.webpackJsonp || [],
      l = o.push.bind(o);
  o.push = t, o = o.slice();
  for (var c = 0; c < o.length; c++) t(o[c]);
  var d = l;
  r.push([83, "bundles/common"]), s()
}({
  "/1BP": function(e, t, s) {
      "use strict";
      s.r(t);
      s("rE2o"), s("ioFf"), s("91GP"), s("tUrg"), s("T39b"), s("HEwt"), s("KKXr"), s("OG14"), s("a1Th"), s("rGqo"), s("Btvt"), s("/8Fb"), s("pIFo");

      function n(e, t) {
          var s = function() {},
              n = function(e) {
                  setTimeout(e || s, 0)
              },
              a = {
                  addEventListener: !!window.addEventListener,
                  touch: "ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch,
                  transitions: function(e) {
                      var t = ["transitionProperty", "WebkitTransition", "MozTransition", "OTransition", "msTransition"];
                      for (var s in t)
                          if (void 0 !== e.style[t[s]]) return !0;
                      return !1
                  }(document.createElement("swipe"))
              };
          if (e) {
              var r, i, o, l, c = e.children[0];
              t = t || {};
              var d = parseInt(t.startSlide, 10) || 0,
                  _ = t.speed || 300;
              t.continuous = void 0 === t.continuous || t.continuous;
              var u, p, h, v = t.auto || 0,
                  g = {},
                  f = {},
                  m = {
                      handleEvent: function(e) {
                          switch (e.type) {
                              case "touchstart":
                                  this.start(e);
                                  break;
                              case "touchmove":
                                  this.move(e);
                                  break;
                              case "touchend":
                                  n(this.end(e));
                                  break;
                              case "webkitTransitionEnd":
                              case "msTransitionEnd":
                              case "oTransitionEnd":
                              case "otransitionend":
                              case "transitionend":
                                  n(this.transitionEnd(e));
                                  break;
                              case "resize":
                                  n(y)
                          }
                          t.stopPropagation && e.stopPropagation()
                      },
                      start: function(e) {
                          var t = e.touches[0];
                          g = {
                              x: t.pageX,
                              y: t.pageY,
                              time: +new Date
                          }, h = void 0, f = {}, c.addEventListener("touchmove", this, !1), c.addEventListener("touchend", this, !1)
                      },
                      move: function(e) {
                          if (!(e.touches.length > 1 || e.scale && 1 !== e.scale)) {
                              t.disableScroll && e.preventDefault();
                              var s = e.touches[0];
                              f = {
                                  x: s.pageX - g.x,
                                  y: s.pageY - g.y
                              }, void 0 === h && (h = !!(h || Math.abs(f.x) < Math.abs(f.y))), h || (e.preventDefault(), C(), t.continuous ? (L(E(d - 1), f.x + i[E(d - 1)], 0), L(d, f.x + i[d], 0), L(E(d + 1), f.x + i[E(d + 1)], 0)) : (f.x = f.x / (!d && f.x > 0 || d == r.length - 1 && f.x < 0 ? Math.abs(f.x) / o + 1 : 1), L(d - 1, f.x + i[d - 1], 0), L(d, f.x + i[d], 0), L(d + 1, f.x + i[d + 1], 0)))
                          }
                      },
                      end: function(e) {
                          var s = +new Date - g.time,
                              n = Number(s) < 250 && Math.abs(f.x) > 20 || Math.abs(f.x) > o / 2,
                              a = !d && f.x > 0 || d == r.length - 1 && f.x < 0;
                          t.continuous && (a = !1);
                          var l = f.x < 0;
                          h || (n && !a ? (l ? (t.continuous ? (k(E(d - 1), -o, 0), k(E(d + 2), o, 0)) : k(d - 1, -o, 0), k(d, i[d] - o, _), k(E(d + 1), i[E(d + 1)] - o, _), d = E(d + 1)) : (t.continuous ? (k(E(d + 1), o, 0), k(E(d - 2), -o, 0)) : k(d + 1, o, 0), k(d, i[d] + o, _), k(E(d - 1), i[E(d - 1)] + o, _), d = E(d - 1)), t.callback && t.callback(d, r[d])) : t.continuous ? (k(E(d - 1), -o, _), k(d, 0, _), k(E(d + 1), o, _)) : (k(d - 1, -o, _), k(d, 0, _), k(d + 1, o, _))), c.removeEventListener("touchmove", m, !1), c.removeEventListener("touchend", m, !1)
                      },
                      transitionEnd: function(e) {
                          parseInt(e.target.getAttribute("data-index"), 10) == d && (v && F(), t.transitionEnd && t.transitionEnd.call(e, d, r[d]))
                      }
                  };
              return y(), v && F(), a.addEventListener ? (a.touch && c.addEventListener("touchstart", m, !1), a.transitions && (c.addEventListener("webkitTransitionEnd", m, !1), c.addEventListener("msTransitionEnd", m, !1), c.addEventListener("oTransitionEnd", m, !1), c.addEventListener("otransitionend", m, !1), c.addEventListener("transitionend", m, !1)), window.addEventListener("resize", m, !1)) : window.onresize = function() {
                  y()
              }, {
                  setup: function() {
                      y()
                  },
                  begin: function() {
                      F()
                  },
                  beginBack: function() {
                      p = setInterval(b, v)
                  },
                  slide: function(e, t) {
                      C(), S(e, t)
                  },
                  prev: function() {
                      C(), b()
                  },
                  next: function() {
                      C(), w()
                  },
                  stop: function() {
                      C()
                  },
                  getPos: function() {
                      return d
                  },
                  getNumSlides: function() {
                      return l
                  },
                  kill: function() {
                      C(), c.style.width = "", c.style.left = "";
                      for (var e = r.length; e--;) {
                          var t = r[e];
                          t.style.width = "", t.style.left = "", a.transitions && L(e, 0, 0)
                      }
                      a.addEventListener ? (c.removeEventListener("touchstart", m, !1), c.removeEventListener("webkitTransitionEnd", m, !1), c.removeEventListener("msTransitionEnd", m, !1), c.removeEventListener("oTransitionEnd", m, !1), c.removeEventListener("otransitionend", m, !1), c.removeEventListener("transitionend", m, !1), window.removeEventListener("resize", m, !1)) : window.onresize = null
                  }
              }
          }

          function y() {
              r = c.children, l = r.length, r.length < 2 && (t.continuous = !1), a.transitions && t.continuous && r.length < 3 && (c.appendChild(r[0].cloneNode(!0)), c.appendChild(c.children[1].cloneNode(!0)), r = c.children), i = new Array(r.length), o = e.getBoundingClientRect().width || e.offsetWidth, c.style.width = r.length * o + "px";
              for (var s = r.length; s--;) {
                  var n = r[s];
                  n.style.width = o + "px", n.setAttribute("data-index", s), a.transitions && (n.style.left = s * -o + "px", k(s, d > s ? -o : d < s ? o : 0, 0))
              }
              t.continuous && a.transitions && (k(E(d - 1), -o, 0), k(E(d + 1), o, 0)), a.transitions || (c.style.left = d * -o + "px"), e.style.visibility = "visible"
          }

          function b() {
              t.continuous ? S(d - 1) : d && S(d - 1)
          }

          function w() {
              t.continuous ? S(d + 1) : d < r.length - 1 && S(d + 1)
          }

          function E(e) {
              return (r.length + e % r.length) % r.length
          }

          function S(e, s) {
              if (d != e) {
                  if (a.transitions) {
                      var l = Math.abs(d - e) / (d - e);
                      if (t.continuous) {
                          var u = l;
                          (l = -i[E(e)] / o) !== u && (e = -l * r.length + e)
                      }
                      for (var p = Math.abs(d - e) - 1; p--;) k(E((e > d ? e : d) - p - 1), o * l, 0);
                      e = E(e), k(d, o * l, s || _), k(e, 0, s || _), t.continuous && k(E(e - l), -o * l, 0)
                  } else e = E(e),
                      function(e, s, n) {
                          if (!n) return void(c.style.left = s + "px");
                          var a = +new Date,
                              i = setInterval(function() {
                                  var o = +new Date - a;
                                  if (o > n) return c.style.left = s + "px", v && F(), t.transitionEnd && t.transitionEnd.call(event, d, r[d]), void clearInterval(i);
                                  c.style.left = (s - e) * (Math.floor(o / n * 100) / 100) + e + "px"
                              }, 4)
                      }(d * -o, e * -o, s || _);
                  d = e, n(t.callback && t.callback(d, r[d]))
              }
          }

          function k(e, t, s) {
              L(e, t, s), i[e] = t
          }

          function L(e, t, s) {
              var n = r[e],
                  a = n && n.style;
              a && (a.webkitTransitionDuration = a.MozTransitionDuration = a.msTransitionDuration = a.OTransitionDuration = a.transitionDuration = s + "ms", a.webkitTransform = "translate(" + t + "px,0)translateZ(0)", a.msTransform = a.MozTransform = a.OTransform = "translateX(" + t + "px)")
          }

          function F() {
              u = setTimeout(w, v)
          }

          function C() {
              clearTimeout(u), clearInterval(p)
          }
      }
      var a = s("zxIV");

      function r(e, t) {
          return function(e) {
              if (Array.isArray(e)) return e
          }(e) || function(e, t) {
              var s = [],
                  n = !0,
                  a = !1,
                  r = void 0;
              try {
                  for (var i, o = e[Symbol.iterator](); !(n = (i = o.next()).done) && (s.push(i.value), !t || s.length !== t); n = !0);
              } catch (e) {
                  a = !0, r = e
              } finally {
                  try {
                      n || null == o.return || o.return()
                  } finally {
                      if (a) throw r
                  }
              }
              return s
          }(e, t) || function() {
              throw new TypeError("Invalid attempt to destructure non-iterable instance")
          }()
      }

      function i() {
          return (i = Object.assign || function(e) {
              for (var t = 1; t < arguments.length; t++) {
                  var s = arguments[t];
                  for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
              }
              return e
          }).apply(this, arguments)
      }
      var o = {
          isMobileLayout: window.innerWidth <= 879,
          init: function() {
              addEvent(window, "scroll", o.onscroll), o.onscroll();
              var e = Object(a.geByClass1)("landing_vk_business__header_inner");
              addEvent(Object(a.geByClass1)("landing_vk_business__header_burger"), "click", function() {
                  Object(a.toggleClass)(e, "open")
              }), addEvent(Object(a.geByClass1)("landing_vk_business"), "click", function(t) {
                  ["landing_vk_business__header_burger", "landing_vk_business__header_nav", "landing_vk_business__header_link"].indexOf(t.target.className) < 0 && Object(a.hasClass)(e, "open") && Object(a.removeClass)(e)
              }), each(Object(a.geByClass)("landing_academy__courses_item"), function() {
                  var e = this.href.replace(/.+video/, "");
                  addEvent(this, "click", function() {
                      if (!(window.innerWidth < 1024)) return showVideo(e, "", {
                          autoplay: 1,
                          hideInfo: !0
                      }), stopEvent(), !1
                  })
              }), vk.al = 4
          },
          initMain: function() {
              var e, t = document.querySelector(".landing_vk_business__links_slides"),
                  s = document.querySelector(".landing_vk_business__links_slide_1"),
                  r = document.querySelector(".landing_vk_business__links_slide_2"),
                  i = document.querySelector(".landing_vk_business__links_slide_3"),
                  o = "landing_vk_business__links_slide_hover",
                  l = "landing_vk_business__links_slides",
                  c = document.querySelector(".landing_vk_business__links_texts"),
                  d = document.querySelector(".landing_vk_business__links_info_1"),
                  _ = document.querySelector(".landing_vk_business__links_info_2"),
                  u = document.querySelector(".landing_vk_business__links_info_3"),
                  p = "landing_vk_business__links_info_hover",
                  h = "landing_vk_business__links_texts";
              if ([
                      [s, d, 1],
                      [r, _, 2],
                      [i, u, 3]
                  ].map(function(e) {
                      e[1].addEventListener("mouseenter", function() {
                          ! function(e, s) {
                              if (~getComputedStyle(s.querySelector(".landing_vk_business__links_info_text")).transform.indexOf("1.1")) return document.querySelector(".landing_vk_business__links").classList.add("landing_vk_business__links_hover"), !1;
                              (function() {
                                  for (var e = document.querySelectorAll(".landing_vk_business__links_info_text"), t = document.querySelectorAll(".landing_vk_business__links_slide"), s = 0; s < 3; s++)
                                      if (~getComputedStyle(e[s]).transform.indexOf("1.1")) return e[s].parentElement.classList.add("landing_vk_business__links_info_hover_leave"), t[s].classList.add("landing_vk_business__links_slide_hover_leave"), !1
                              })(), setTimeout(function() {
                                  document.querySelector(".landing_vk_business__links_info_hover_leave") && document.querySelector(".landing_vk_business__links_info_hover_leave").classList.remove("landing_vk_business__links_info_hover_leave"), document.querySelector(".landing_vk_business__links_slide_hover_leave") && document.querySelector(".landing_vk_business__links_slide_hover_leave").classList.remove("landing_vk_business__links_slide_hover_leave")
                              }, 300), t.className = l + " " + l + "_hover", e.classList.add(o), c.className = h + " " + h + "_hover", s.classList.add(p)
                          }(e[0], e[1])
                      }), e[1].addEventListener("mouseleave", function() {
                          ! function(e, s, n) {
                              document.querySelector(".landing_vk_business__links_hover") && document.querySelector(".landing_vk_business__links_hover").classList.remove("landing_vk_business__links_hover");
                              t.className = l + " landing_vk_business__links_slides_from_" + n, e.classList.remove(o), c.className = h + " landing_vk_business__links_texts_from_" + n, s.classList.remove(p)
                          }(e[0], e[1], e[2])
                      })
                  }), window.innerWidth < 880) {
                  var v = document.querySelector(".landing_vk_business__slider_mobile");
                  window.swipeSlider = n(v, {
                      continuous: !1,
                      auto: 5e3,
                      callback: function(e) {
                          var t = window.swipeSlider;
                          Object(a.removeClass)(Object(a.geByClass1)("landing_vk_business__slider_dot_active"), "landing_vk_business__slider_dot_active"), Object(a.addClass)(Object(a.geByClass1)("landing_vk_business__slider_dot_" + (e + 1)), "landing_vk_business__slider_dot_active"), 2 === e && (t.stop(), setTimeout(function() {
                              t.beginBack()
                          }, 500)), 0 === e && t.stop()
                      }
                  })
              }
              window.addEventListener("touchstart", function(t) {
                  var s = t.touches[0];
                  e = {
                      x: s.pageX,
                      y: s.pageY
                  }
              }), window.addEventListener("touchmove", function(t) {
                  var s = t.touches[0],
                      n = {
                          x: s.pageX - e.x,
                          y: s.pageY - e.y
                      }
                  //     a = "auto";
                  // Math.abs(n.x) < Math.abs(n.y) && (a = "none"), document.querySelector("body").style.touchAction = a
              })
          },
          initArticle: function(e) {
              new ArticleView(e, {}, !0)
          },
          initCourses: function() {
              var e = Object(a.geByClass1)("landing_academy__courses_popup");
              close = Object(a.geByClass1)("landing_academy__courses_popup_close"), addEvent(e, "scroll", function() {
                  (e.pageYOffset || e.scrollTop) > intval(getComputedStyle(Object(a.geByClass1)("landing_academy__courses_popup_inner")).marginTop) - 6 ? Object(a.addClass)(close, "landing_academy__courses_popup_close_fixed") : Object(a.removeClass)(close, "landing_academy__courses_popup_close_fixed")
              })
          },
          cases: {
              options: {
                  company_type: "default",
                  segment: "default",
                  tool: "default",
                  search: ""
              },
              list: [],
              shownNumber: 0,
              init() {
                  o.cases.defaultOptions = i({}, o.cases.options), o.cases.headerEl = document.querySelector(".js-nd-vkbiz-header"), o.cases.listContainerEl = document.querySelector(".landing_cases__case_list"), o.cases.filtersSectionEl = document.querySelector(".landing_cases__filters"), o.cases.selectFiltersSectionEl = document.querySelector(".landing_cases__select_filters"), o.cases.showSelectFiltersButtonEl = document.querySelector(".landing_cases__show_select_filters_button"), o.cases.hideSelectFiltersButtonEl = document.querySelector(".landing_cases__hide_select_filters_button"), o.cases.applySelectFiltersButtonEl = document.querySelector(".landing_cases__apply_select_filters_button"), o.cases.showMoreButtonEl = document.querySelector(".landing_cases__case_list_show_more"), o.cases.searchContainerEl = document.querySelector(".landing_cases__search"), o.cases.openSearchButtonEl = document.querySelector(".landing_cases__open_search_button"), o.cases.closeSearchButtonEl = document.querySelector(".landing_cases__close_search_button"), o.cases.searchInputEl = document.querySelector(".landing_case__search_input"), o.cases.notFoundEl = document.querySelector(".landing_cases__not_found_filters_and_search"), o.cases.notFoundByFiltersOnlyEl = document.querySelector(".landing_cases__not_found_filters_only"), o.cases.resetFiltersElems = document.querySelectorAll(".landing_cases__reset_filters"), o.cases.throttledInputHandler = o.helpers.throttle(e => e(), 300), window.addEventListener("resize", o.cases.onWindowResize), document.addEventListener("click", o.cases.onDocumentClick), o.cases.showMoreButtonEl.addEventListener("click", o.cases.renderFilteredList), o.cases.selectFiltersSectionEl.addEventListener("click", o.cases.onSelectFiltersSectionClick), o.cases.selectFiltersSectionEl.addEventListener("input", o.cases.onSelectFiltersSectionInput), o.cases.showSelectFiltersButtonEl.addEventListener("click", o.cases.onShowSelectFilters), o.cases.hideSelectFiltersButtonEl.addEventListener("click", o.cases.onHideSelectFilters), o.cases.applySelectFiltersButtonEl.addEventListener("click", o.cases.onApplySelectFilters), o.cases.filtersSectionEl.addEventListener("input", o.cases.changeFilters), o.cases.listContainerEl.addEventListener("click", o.cases.onCaseClick), o.cases.openSearchButtonEl.addEventListener("click", o.cases.onSearchOpen), o.cases.closeSearchButtonEl.addEventListener("click", o.cases.onSearchClose), o.cases.resetFiltersElems.forEach(e => {
                      e.addEventListener("click", o.cases.resetFilters)
                  }), o.cases.renderFilteredList(), o.cases.applySearchAppearance(), o.cases.applyFiltersAppearance();
              },
              openVideo(e) {
                  // if (e.preventDefault(), o.isMobileLayout && (window.location.href = e.target.href.replace(/vk\.com/, "m.vk.com")), e.target.href.includes("video")) {
                  //     var t = e.target.href.replace(/.+video/, "");
                  //     return showVideo(t, "", {
                  //         autoplay: 1,
                  //         hideInfo: !0
                  //     }), stopEvent(), !1
                  // }
              },
              resetFilters(e) {
                  e.preventDefault();
                  var t = window.location.hash,
                      s = new URLSearchParams(t.slice(1));
                  return Object.entries(o.cases.defaultOptions).forEach(e => {
                      var t = r(e, 2),
                          n = t[0],
                          a = t[1];
                      s.set(n, a)
                  }), o.cases.applyFilters(s), o.cases.applySearchAppearance(), o.cases.onHideSelectFilters(), !1
              },
              onDocumentClick(e) {
                  e.target.closest(".landing_cases__select_filter") || (o.cases.selectFiltersSectionEl.querySelectorAll(".landing_cases__select_filter_body").forEach(e => {
                      e.classList.remove("landing_cases__select_filter_body--open")
                  }), o.cases.selectFiltersSectionEl.querySelectorAll(".landing_cases__select_filter_header").forEach(e => {
                      e.classList.remove("landing_cases__select_filter_header--focused")
                  }))
              },
              onSelectFiltersSectionClick(e) {
                  var t = e.target;
                  if (t.classList.contains("landing_cases__select_filter_header")) {
                      var s = t.closest(".landing_cases__select_filter").querySelector(".landing_cases__select_filter_body");
                      return s.classList.toggle("landing_cases__select_filter_body--open"), t.classList.toggle("landing_cases__select_filter_header--focused"), void o.cases.selectFiltersSectionEl.querySelectorAll(".landing_cases__select_filter_body").forEach(e => {
                          e !== s && e.classList.remove("landing_cases__select_filter_body--open")
                      })
                  }
                  t.closest(".landing_cases__select_filter_option") && (t.closest(".landing_cases__select_filter_body").classList.remove("landing_cases__select_filter_body--open"), t.closest(".landing_cases__select_filter").querySelector(".landing_cases__select_filter_header").classList.remove("landing_cases__select_filter_header--focused"))
              },
              onSelectFiltersSectionInput(e) {
                  var t = e.target;
                  t.classList.contains("landing_cases__select_filter_option_input") && (t.closest(".landing_cases__select_filter").querySelector(".landing_cases__select_filter_header").textContent = cur[t.name][t.value])
              },
              onShowSelectFilters() {
                  o.cases.selectFiltersSectionEl.classList.add("landing_cases__select_filters--open"), document.body.classList.add("landing_cases__scroll_lock--mobile")
              },
              onHideSelectFilters() {
                  o.cases.selectFiltersSectionEl.classList.remove("landing_cases__select_filters--open"), document.body.classList.remove("landing_cases__scroll_lock--mobile")
              },
              onApplySelectFilters() {
                  o.cases.onHideSelectFilters();
                  var e = o.cases.headerEl.getBoundingClientRect().height,
                      t = o.cases.listContainerEl.getBoundingClientRect().top;
                  window.htmlNode.scrollTop = t - e
              },
              onSearchOpen() {
                  var e = o.cases,
                      t = e.searchInputEl,
                      s = e.openSearchButtonEl,
                      n = e.closeSearchButtonEl,
                      a = e.selectFiltersSectionEl,
                      r = e.showSelectFiltersButtonEl,
                      i = e.searchContainerEl;
                  a.style.opacity = "0", r.style.opacity = "0", i.classList.add("landing_cases__search--open"), t.classList.add("landing_case__search_input--open"), t.focus(), s.classList.add("landing_cases__open_search_button--open"), s.disabled = !0, n.classList.add("landing_cases__close_search_button--open")
              },
              onSearchClose() {
                  var e = o.cases,
                      t = e.searchInputEl,
                      s = e.openSearchButtonEl,
                      n = e.closeSearchButtonEl,
                      a = e.selectFiltersSectionEl,
                      r = e.showSelectFiltersButtonEl,
                      i = e.searchContainerEl;
                  a.style.opacity = "1", r.style.opacity = "1", i.classList.remove("landing_cases__search--open"), t.classList.remove("landing_case__search_input--open"), t.value = "", s.classList.remove("landing_cases__open_search_button--open"), s.disabled = !1, n.classList.remove("landing_cases__close_search_button--open");
                  var l = window.location.hash,
                      c = new URLSearchParams(l.slice(1));
                  c.set("search", ""), o.cases.applyFilters(c)
              },
              onWindowResize() {
                  o.isMobileLayout = window.innerWidth <= 879
              },
              onCaseClick(e) {
                  //e.target.classList.contains("landing_cases__case_preview_video_link") && o.cases.openVideo(e)
              },
              changeFilters(e) {
                  var t = e.target,
                      s = t.name,
                      n = t.value,
                      a = window.location.hash,
                      r = new URLSearchParams(a.slice(1));
                  switch (s) {
                      case "company_type":
                      case "segment":
                      case "tool":
                          r.set(s, n.trim()), o.cases.applyFilters(r);
                          break;
                      case "search":
                          return void o.cases.throttledInputHandler(() => {
                              r.set(s, n.trim()), o.cases.applyFilters(r)
                          })
                  }
                  o.cases.applyFilters(r)
              },
              applyFilters(e) {
                  o.cases.cleanList();
                  var t = e.toString();

                  window.parent.postMessage({"filters": t}, "*");

                  t && (window.location.hash = t), o.cases.renderFilteredList(), o.cases.applyFiltersAppearance()
              },
              applySearchAppearance() {
                  if (!o.cases.options.search) return o.cases.searchInputEl.value = "", void o.cases.onSearchClose();
                  o.cases.searchInputEl.value = o.cases.options.search, o.cases.onSearchOpen()
              },
              applyFiltersAppearance() {
                  [document.querySelector(`.landing_cases__select_filter_option_input[name="company_type"][value="${o.cases.options.company_type}"]`), document.querySelector(`.landing_cases__select_filter_option_input[name="segment"][value="${o.cases.options.segment}"]`), document.querySelector(`.landing_cases__select_filter_option_input[name="tool"][value="${o.cases.options.tool}"]`)].forEach(e => {
                      e.checked = !0, o.cases.onSelectFiltersSectionInput({
                          target: e
                      })
                  })
              },
              updateFiltersScreen(e) {
                  e ? (o.cases.applySelectFiltersButtonEl.classList.remove("landing_cases__hidden"), o.cases.applySelectFiltersButtonEl.textContent = `${getLang("ads_biz_cases_show")} ${e}`, o.cases.notFoundByFiltersOnlyEl.classList.add("landing_cases__hidden")) : (o.cases.applySelectFiltersButtonEl.classList.add("landing_cases__hidden"), o.cases.notFoundByFiltersOnlyEl.classList.remove("landing_cases__hidden"))
              },
              getOptions() {
                  var e = window.location.hash,
                      t = new URLSearchParams(e.slice(1)),
                      s = i({}, o.cases.options);
                  return t.forEach((e, t) => {
                      switch (t) {
                          case "company_type":
                          case "segment":
                          case "tool":
                          case "search":
                              s[t] = e || null
                      }
                  }), o.cases.options = s, s
              },
              cleanList() {
                  o.cases.listContainerEl.innerHTML = "", o.cases.shownNumber = 0
              },
              filterList(e) {
                  var t = [...cur.cases];
                  return "default" !== e.company_type && (t = t.filter(t => t.company_type === e.company_type)), "default" !== e.segment && (t = t.filter(t => t.segment === e.segment)), "default" !== e.tool && (t = t.filter(t => t.tools.includes(e.tool))), e.search && (t = t.filter(t => {
                      return `${t.case_name} ${t.city} ${t.company_name} ${t.segment} ${t.tools.join(" ")}`.toLowerCase().includes(e.search.toLowerCase())
                  })), t
              },
              renderFilteredList() {
                  var e = o.cases.getOptions(),
                      t = o.cases.filterList(e);
                  o.cases.updateFiltersScreen(t.length), o.cases.render(t)
              },
              render(e) {
                  var t = cf(),
                      s = o.isMobileLayout ? 6 : 12,
                      n = e.slice(o.cases.shownNumber, o.cases.shownNumber + s);
                  o.cases.shownNumber += s, e.length <= o.cases.shownNumber ? o.cases.showMoreButtonEl.classList.add("landing_cases__hidden") : o.cases.showMoreButtonEl.classList.remove("landing_cases__hidden"), e.length ? o.cases.notFoundEl.classList.add("landing_cases__hidden") : o.cases.notFoundEl.classList.remove("landing_cases__hidden"), n.forEach(e => {
                      var s = e.date.split("."),
                          n = `${s[0]} ${cur.monthDictionary[s[1]]} ${s[2]}`,
                          r = "" === e.city ? "" : ` · ${e.city}`,
                          i = Object(a.rs)(cur.template, {
                              company_name: clean(e.company_name),
                              case_name: clean(e.case_name),
                              case_link: clean(e.case_link),
                              city: clean(r),
                              date: clean(n),
                              small_image: clean(e.small_image),
                              video: clean(e.video),
                              video_iframe: clean(e.video_iframe)
                          });
                      t.appendChild(Object(a.se)(i));
                      var o = t.lastChild.querySelector(".landing_cases__case_preview_video_link");
                      `${o.origin}${o.pathname}` === `${window.location.origin}${window.location.pathname}` && o.classList.add("landing_cases__hidden")
                  }), o.cases.listContainerEl.appendChild(t)
              }
          },
          caseArticle: {
              init() {
                  o.caseArticle.videoLinkEl = document.querySelector(".landing_case_article__jumbotron_video_link"), o.caseArticle.relevantCasesContatinerEl = document.querySelector(".landing_case_article__relevant_cases"), o.caseArticle.headerEl = document.querySelector(".landing_vk_business__header"), window.addEventListener("resize", o.caseArticle.onWindowResize), Boolean(o.caseArticle.videoLinkEl) && o.caseArticle.videoLinkEl.addEventListener("click", o.cases.openVideo), o.caseArticle.relevantCasesContatinerEl.addEventListener("click", o.caseArticle.onRelevantCaseCLick), o.caseArticle.handleVideoButtonsInRelevantCasesSection(), o.caseArticle.scrollToAnchor()
              },
              scrollToAnchor() {
                  var e = window.location.search,
                      t = new URLSearchParams(e.slice(1)).get("anchor"),
                      s = document.querySelector(`#${t}`);
                  if ("" !== t && s) {
                      var n = o.caseArticle.headerEl.getBoundingClientRect().height,
                          a = s.getBoundingClientRect().top;
                      window.htmlNode.scrollTop = a - n
                  }
              },
              onRelevantCaseCLick(e) {
                  e.target.classList.contains("landing_cases__case_preview_video_link") && o.cases.openVideo(e)
              },
              handleVideoButtonsInRelevantCasesSection() {
                  o.caseArticle.relevantCasesContatinerEl.querySelectorAll(".landing_cases__case_preview_video_link").forEach(e => {
                      `${e.origin}${e.pathname}` === `${window.location.origin}${window.location.pathname}` && e.classList.add("landing_cases__hidden")
                  })
              },
              onWindowResize() {
                  o.isMobileLayout = window.innerWidth <= 879
              }
          },
          caseSuccessStory: {
              init() {
                  o.caseSuccessStory.CreatePageLinkEl = document.querySelector(".landing_cases__success_story_link_create_page"), o.caseSuccessStory.launchAdsLinkEl = document.querySelector(".landing_cases__success_story_link_launch_ads"), o.caseSuccessStory.setLinks()
              },
              setLinks() {
                  o.isMobileLayout ? (o.caseSuccessStory.CreatePageLinkEl.href = "https://m.vk.com/vkui/community_create/#/main", o.caseSuccessStory.CreatePageLinkEl.target = "", o.caseSuccessStory.launchAdsLinkEl.href = "https://vk.com/biz/article/kak-sozdat-reklamu") : (o.caseSuccessStory.CreatePageLinkEl.href = "https://vk.com/groups?w=groups_create", o.caseSuccessStory.CreatePageLinkEl.target = "_blank", o.caseSuccessStory.launchAdsLinkEl.href = "https://vk.com/ads")
              }
          },
          partners: {
              active: {
                  type: 1,
                  statuses: [],
                  categories: [],
                  budgetFrom: null,
                  budgetTo: null,
                  search: null
              },
              sections: {
                  show: {}
              },
              types: {},
              shownNumber: 0,
              joinButtonTitles: {
                "1": "Стать агентством",
                "2": "Стать экспертом",
                "3": "Стать сервисом",
                "4": "Стать спикером"
              },
              init() {
                  o.partners.sidebarEl = document.querySelector(".landing_academy__sidebar"), o.partners.contentBodyEl = document.querySelector(".landing_academy__content_body"), o.partners.listContainerEl = document.querySelector(".landing_academy__partners_list"), o.partners.morePartnersButtonEl = document.querySelector(".landing_academy__partners_button_more"), o.partners.joinButtonElems = document.querySelectorAll(".landing_academy__partners_button_join"), o.partners.subfiltersEl = document.querySelector(".landing_academy__sidebar_subfilters"), o.partners.sections.show.buttonEl = document.querySelector(".landing_academy__sidebar_section_show_filters"), o.partners.sections.show.textEl = document.querySelector(".landing_academy__sidebar_section_show_filters_text"), o.partners.sections.statusesEl = document.querySelector(".landing_academy__sidebar_section_status"), o.partners.sections.categoriesEl = document.querySelector(".landing_academy__sidebar_section_categories"), o.partners.sections.budgetEl = document.querySelector(".landing_academy__sidebar_section_budget"), o.partners.filterInputHandler = o.helpers.throttle(e => e(), 300), o.partners.types = o.partners.getTypes(), o.partners.sidebarEl.addEventListener("input", o.partners.changeFilters), o.partners.contentBodyEl.addEventListener("input", o.partners.changeFilters), o.partners.morePartnersButtonEl.addEventListener("click", o.partners.renderFilteredList), o.partners.sections.show.buttonEl.addEventListener("click", o.partners.toggleShowFiltersButton), o.partners.joinButtonsInit(), o.partners.renderFilteredList(), o.partners.renderSubFilters(), o.partners.applyFiltersAppearance(), o.partners.applySearchAppearance()
              },
              joinButtonsInit() {
                  var e = o.partners.joinButtonElems;
                  if (e.length && cur.joinBox) {
                      var t = document.getElementById("box_layer_bg"),
                          s = new MessageBox({
                              hideButtons: !0,
                              selfDestruct: !1,
                              width: "auto",
                              onShow() {
                                  t && t.classList.add("partners_join_box_bg")
                              },
                              onHide() {
                                  t && t.classList.remove("partners_join_box_bg")
                              }
                          }).content(cur.joinBox),
                          n = s.bodyNode,
                          a = n.querySelector(".partners_join_box_close"),
                          r = null,
                          i = null,
                          l = null;
                      n.closest && (i = n.closest("#box_layer"), r = n.closest(".popup_box_container"), l = n.closest("#box_layer_wrap")), l && l.classList.add("partners_join_box"), i && i.classList.add("partners_join_box_layout"), r && r.classList.add("partners_join_box_popup"), n.classList.add("partners_join_box_container"), a && a.addEventListener("click", () => s.hide()), Array.from(e).forEach(e => {
                          e.addEventListener("click", e => {
                              e.preventDefault();
                              if (e.clientX > 0) {
                                s.show();
                              }

                          })
                      }), document.addEventListener("DOMContentLoaded", () => {
                          "?join" === window.location.search && s && s.show && s.show()
                      })
                  }
              },
              changeFilters(e) {
                  e.preventDefault();
                  var t = e.target,
                      s = t.name,
                      n = t.value,
                      a = new URLSearchParams(window.location.hash.slice(1));

                  function r() {
                      window.location.hash = a.toString(), o.partners.clean(), o.partners.shownNumber = 0, o.partners.renderFilteredList(), "type" === s && o.partners.renderSubFilters(), o.partners.applyFiltersAppearance()
                  }
                  switch (s) {
                      case "budgetFrom":
                      case "budgetTo":
                          var i = n.trim();
                          if (i.length || (t.value = ""), i.length && !/\d/.test(i[i.length - 1])) return void(t.value = i.slice(0, -1))
                  }
                  switch (s) {
                      case "type":
                          if (a.set(s, n), o.partners.active.statuses.length) {
                              var l = o.partners.active.statuses.filter(e => o.partners.types[n].statuses.has(e));
                              a.set("statuses", l.join(","))
                          }
                          if (o.partners.active.categories.length) {
                              var c = o.partners.active.categories.filter(e => o.partners.types[n].categories.has(e));
                              a.set("categories", c.join(","))
                          }
                          "3" === n && (a.set("budgetFrom", ""), a.set("budgetTo", ""));
                          break;
                      case "statuses":
                      case "categories":
                          var d = a.get(s);
                          if (d) {
                              var _ = new Set(d.split(","));
                              _.has(n) ? _.delete(n) : _.add(n), a.set(s, [..._].join(","))
                          } else a.set(s, n);
                          break;
                      case "budgetFrom":
                      case "budgetTo":
                      case "search":
                          return void o.partners.filterInputHandler(() => {
                              a.set(s, n.trim()), r()
                          })
                  }
                  r()
              },
              toggleShowFiltersButton() {
                  o.partners.subfiltersEl.classList.toggle("landing_academy__sidebar_section_hide_mobile");
                  var e = o.partners.sections.show.textEl;
                  switch (e.textContent) {
                      case getLang("ads_biz_partners_show_filters"):
                          e.textContent = getLang("ads_biz_partners_hide_filters");
                          break;
                      case getLang("ads_biz_partners_hide_filters"):
                          e.textContent = getLang("ads_biz_partners_show_filters")
                  }
              },
              renderFilteredList() {
                  var e = o.partners.setState(o.partners.types),
                      t = o.partners.getList(o.partners.types, e);
                  o.partners.renderList(t)
              },
              getTypes() {
                  var e = cur.partnersTypes;
                  return o.helpers.shuffle(cur.partners).reduce((t, s) => (t[s.type] || (t[s.type] = {
                      statuses: new Set,
                      categories: new Set,
                      partners: []
                  }), t[s.type].partners.push(i({}, s, {
                      category: s.category.map(t => e[t])
                  })), s.status.split(", ").forEach(e => {
                      var n = e.trim();
                      Boolean(n) && t[s.type].statuses.add(n)
                  }), s.category.forEach(n => {
                      var a = n.trim();
                      Boolean(a) && Boolean(e[a]) && t[s.type].categories.add(e[a])
                  }), t), {})
              },
              setState(e) {
                  var t = i({}, o.partners.active),
                      s = window.location.hash;
                  return new URLSearchParams(s.slice(1)).forEach((s, n) => {
                      switch (n) {
                          case "agencies":
                              t.type = 1;
                              break;
                          case "experts":
                              t.type = 2;
                              break;
                          case "services":
                              t.type = 3;
                              break;
                          case "speakers":
                              t.type = 4;
                              break;
                          case "type":
                              var a = parseInt(s, 10);
                              e[a] && (t.type = a);
                              break;
                          case "categories":
                          case "statuses":
                              t[n] = s ? s.split(",") : [];
                              break;
                          case "budgetFrom":
                          case "budgetTo":
                              t[n] = s ? parseInt(s.replace(/\s/g, "")) : null;
                              break;
                          case "search":
                              t[n] = s || null
                      }
                  }), o.partners.active = t, t
              },
              getList(e, t) {
                  var s = [...e[t.type].partners];

                  return t.statuses.length && (s = s.filter(e => t.statuses.some(t => e.status === t))),

                  t.categories.length && (
                    s = s.filter(e => t.categories.every(t => e.category.includes(t)))
                  ),

                  t.budgetFrom && (s = s.filter(e => {
                      return parseInt(e.cost.replace(/\s/g, "")) >= t.budgetFrom
                  })),

                  t.budgetTo && (s = s.filter(e => {
                      return parseInt(e.cost.replace(/\s/g, "")) <= t.budgetTo
                  })),

                  t.search && (s = s.filter(e => {
                      return `${e.name} ${e.text} ${e.link} ${e.skills.join(" ")}`.toLowerCase().includes(t.search.toLowerCase())
                  })), s
              },
              renderList(e) {
                  var t = e.slice(o.partners.shownNumber, o.partners.shownNumber + 10);
                  if (o.partners.shownNumber += 10, !t.length) return o.partners.morePartnersButtonEl.classList.add("landing_academy__hidden"), o.partners.clean(), void o.partners.listContainerEl.appendChild(ce("div", {
                      className: "biz_partners_not_found",
                      innerHTML: getLang("ads_biz_partners_search_failed")
                  }));
                  e.length <= o.partners.shownNumber ? o.partners.morePartnersButtonEl.classList.add("landing_academy__hidden") : o.partners.morePartnersButtonEl.classList.remove("landing_academy__hidden"), o.partners.render(t)
              },
              render: function(e) {
                  var t = cf();
                  e.forEach(e => {
                      e.category = e.category || [];
                      var s = e.category.map(e => `<div>${e=clean(e)}</div>`).join(""),
                          n = e.link.trim().replace(/^(?:https?:\/\/)?(?:www\.)?/i, "");
                      1 === e.type && (n = n.split("/")[0]), "/" === n[n.length - 1] && (n = n.slice(0, -1)), t.appendChild(Object(a.se)(Object(a.rs)(cur.template, {
                          name: clean(e.name),
                          text: clean(e.text),
                          image: clean(e.image),
                          link: o.partners.wrapLink(e.utm),
                          linkname: clean(n),
                          categories: s,
                          skills: `${e.skills.join(", ")}`,
                          status: clean(e.status),
                          type: clean(e.type),
                          town: clean(e.town)
                      }))), e.skills[0] || t.lastChild.querySelector(".landing_academy__partners_item_branches").classList.add("landing_academy__hidden")
                  }), o.partners.listContainerEl.appendChild(t);

                  o.partners.listContainerEl.children.forEach(function(elem) {
                    if (!elem.querySelector('.landing_academy__partners_item_skills>div').innerHTML){
                        elem.querySelector('.landing_academy__partners_item_skills').classList.add("landing_academy__hidden");
                      }

                    if (elem.getAttribute('data-type') === "4") {
                      elem.querySelector('.landing_academy__partners_item_status').classList.remove("landing_academy__hidden");
                    }
                  })

              },
              wrapLink: function(e) {
                  return /^https?:\/\//.test(e) || (e = "https://" + e), /^https:\/\/vk.com\//.test(e) ? e : "https://vk.com/away.php?to=" + encodeURIComponent(e) + "&utf=1"
              },
              clean: function() {
                  o.partners.listContainerEl.innerHTML = ""
              },
              showLess: function() {
                  var e = o.partners.items.splice(0, 10);
                  o.partners.render(e), o.partners.items.length ? show(ge("biz_show_less")) : hide(ge("biz_show_less"))
              },
              hideAllSubFilterSections() {
                  [o.partners.sections.statusesEl, o.partners.sections.categoriesEl, o.partners.sections.budgetEl].forEach(e => {
                      e.classList.add("landing_academy__hidden")
                  })
              },
              renderCheckboxes(e, t) {
                  var s = cf();
                  return e.forEach(e => {
                      s.appendChild(Object(a.se)(Object(a.rs)(cur.templateCheckbox, {
                          name: clean(t),
                          value: clean(e)
                      })))
                  }), s
              },
              renderStatusFilters() {
                  var e = o.partners.sections.statusesEl,
                      t = e.querySelector(".landing_academy__sidebar_section_filters"),
                      s = o.partners.renderCheckboxes(o.partners.types[o.partners.active.type].statuses, "statuses");
                  t.innerHTML = "", t.appendChild(s), e.classList.remove("landing_academy__hidden")
              },
              renderCategoryFilters() {
                  var e = o.partners.sections.categoriesEl,
                      t = e.querySelector(".landing_academy__sidebar_section_filters"),
                      s = o.partners.renderCheckboxes(o.partners.types[o.partners.active.type].categories, "categories");
                  t.innerHTML = "", t.appendChild(s), e.classList.remove("landing_academy__hidden")
              },
              renderBudgetFilters() {
                  o.partners.sections.budgetEl.classList.remove("landing_academy__hidden")
              },
              renderSubFilters() {
                  switch (o.partners.hideAllSubFilterSections(), o.partners.active.type) {
                      case 1:
                          o.partners.renderStatusFilters(), o.partners.renderCategoryFilters(), o.partners.renderBudgetFilters();
                          break;
                      case 2:
                          o.partners.renderCategoryFilters(), o.partners.renderBudgetFilters();
                          break;
                      case 3:
                          o.partners.renderCategoryFilters();
                          break;
                      case 4:
                          o.partners.renderStatusFilters();
                          break;
                      default:
                          return null
                  }
              },
              applyFiltersAppearance() {
                  document.querySelector(`.landing_academy__filter_input[value="${o.partners.active.type}"]`).checked = !0;

                  var id = document.querySelector(`.landing_academy__filter_input[value="${o.partners.active.type}"]`).value;

                  o.partners.joinButtonElems.forEach(function(btn) {
                    btn.innerHTML = o.partners.joinButtonTitles[id];
                  });

                  o.partners.active.statuses.forEach(e => {
                      document.querySelector(`.landing_academy__filter_input[value="${e}"]`).checked = !0
                  });

                  o.partners.active.categories.forEach(e => {
                      document.querySelector(`.landing_academy__filter_input[value="${e}"]`).checked = !0
                  });

                  document.querySelector('.landing_academy__sidebar_section_input_filter[name="budgetFrom"]').value = o.partners.active.budgetFrom;

                  document.querySelector('.landing_academy__sidebar_section_input_filter[name="budgetTo"]').value = o.partners.active.budgetTo
              },
              applySearchAppearance() {
                  document.querySelectorAll(".biz_partner_search").forEach(e => {
                      e.value = o.partners.active.search
                  })
              }
          },
          addFilter: function(e) {
              e.classList.toggle("landing_academy__sidebar_section_filter_active")
          },
          showFilters: function() {
              document.body.style.overflow = "hidden", Object(a.geByClass1)("landing_vk_business__header").classList.add("landing_vk_business__header_fixed"), Object(a.geByClass1)("landing_academy__mobile_filters").classList.add("landing_academy__mobile_filters_shown")
          },
          hideFilters: function() {
              document.body.style.overflow = "auto", Object(a.geByClass1)("landing_vk_business__header").classList.remove("landing_vk_business__header_fixed"), Object(a.geByClass1)("landing_academy__mobile_filters").classList.remove("landing_academy__mobile_filters_shown")
          },
          inputSum: function(e) {
              e.target.value = e.target.value.replace(" ", "").replace(/[^0-9,.-]/gi, "").replace(/(\d{1,3}(?=(\d{3})+(?:\.\d|\b)))/g, "$1 ")
          },
          onscroll: function() {
              var e = window.pageYOffset || document.documentElement.scrollTop,
                  t = document.querySelector(".landing_vk_business__header"),
                  s = "landing_vk_business__header_scrolling";
              e > 15 ? Object(a.addClass)(t, s) : Object(a.removeClass)(t, s)
          },
          helpers: {
              throttle(e, t) {
                  var s, n, a = !1;
                  return function r() {
                      if (a) return s = arguments, void(n = this);
                      e.apply(this, arguments), a = !0, setTimeout(() => {
                          a = !1, s && (r.apply(n, s), s = null, n = null)
                      }, t)
                  }
              },
              shuffle(e) {
                  for (var t = [...e], s = t.length - 1; s > 0; s--) {
                      var n = Math.floor(Math.random() * (s + 1)),
                          a = [t[n], t[s]];
                      t[s] = a[0], t[n] = a[1]
                  }
                  return t
              }
          }
      };
      window.Biz = o;
      try {
          stManager.done(jsc("web/biz.js"))
      } catch (e) {}
  },
  "4LiD": function(e, t, s) {
      "use strict";
      var n = s("dyZX"),
          a = s("XKFU"),
          r = s("KroJ"),
          i = s("3Lyj"),
          o = s("Z6vF"),
          l = s("SlkY"),
          c = s("9gX7"),
          d = s("0/R4"),
          _ = s("eeVq"),
          u = s("XMVh"),
          p = s("fyDq"),
          h = s("Xbzi");
      e.exports = function(e, t, s, v, g, f) {
          var m = n[e],
              y = m,
              b = g ? "set" : "add",
              w = y && y.prototype,
              E = {},
              S = function(e) {
                  var t = w[e];
                  r(w, e, "delete" == e ? function(e) {
                      return !(f && !d(e)) && t.call(this, 0 === e ? 0 : e)
                  } : "has" == e ? function(e) {
                      return !(f && !d(e)) && t.call(this, 0 === e ? 0 : e)
                  } : "get" == e ? function(e) {
                      return f && !d(e) ? void 0 : t.call(this, 0 === e ? 0 : e)
                  } : "add" == e ? function(e) {
                      return t.call(this, 0 === e ? 0 : e), this
                  } : function(e, s) {
                      return t.call(this, 0 === e ? 0 : e, s), this
                  })
              };
          if ("function" == typeof y && (f || w.forEach && !_(function() {
                  (new y).entries().next()
              }))) {
              var k = new y,
                  L = k[b](f ? {} : -0, 1) != k,
                  F = _(function() {
                      k.has(1)
                  }),
                  C = u(function(e) {
                      new y(e)
                  }),
                  x = !f && _(function() {
                      for (var e = new y, t = 5; t--;) e[b](t, t);
                      return !e.has(-0)
                  });
              C || ((y = t(function(t, s) {
                  c(t, y, e);
                  var n = h(new m, t, y);
                  return null != s && l(s, g, n[b], n), n
              })).prototype = w, w.constructor = y), (F || x) && (S("delete"), S("has"), g && S("get")), (x || L) && S(b), f && w.clear && delete w.clear
          } else y = v.getConstructor(t, e, g, b), i(y.prototype, s), o.NEED = !0;
          return p(y, e), E[e] = y, a(a.G + a.W + a.F * (y != m), E), f || v.setStrong(y, e, g), y
      }
  },
  83: function(e, t, s) {
      e.exports = s("/1BP")
  },
  T39b: function(e, t, s) {
      "use strict";
      var n = s("wmvG"),
          a = s("s5qY");
      e.exports = s("4LiD")("Set", function(e) {
          return function() {
              return e(this, arguments.length > 0 ? arguments[0] : void 0)
          }
      }, {
          add: function(e) {
              return n.def(a(this, "Set"), e = 0 === e ? 0 : e, e)
          }
      }, n)
  },
  s5qY: function(e, t, s) {
      var n = s("0/R4");
      e.exports = function(e, t) {
          if (!n(e) || e._t !== t) throw TypeError("Incompatible receiver, " + t + " required!");
          return e
      }
  },
  wmvG: function(e, t, s) {
      "use strict";
      var n = s("hswa").f,
          a = s("Kuth"),
          r = s("3Lyj"),
          i = s("m0Pp"),
          o = s("9gX7"),
          l = s("SlkY"),
          c = s("Afnz"),
          d = s("1TsA"),
          _ = s("elZq"),
          u = s("nh4g"),
          p = s("Z6vF").fastKey,
          h = s("s5qY"),
          v = u ? "_s" : "size",
          g = function(e, t) {
              var s, n = p(t);
              if ("F" !== n) return e._i[n];
              for (s = e._f; s; s = s.n)
                  if (s.k == t) return s
          };
      e.exports = {
          getConstructor: function(e, t, s, c) {
              var d = e(function(e, n) {
                  o(e, d, t, "_i"), e._t = t, e._i = a(null), e._f = void 0, e._l = void 0, e[v] = 0, null != n && l(n, s, e[c], e)
              });
              return r(d.prototype, {
                  clear: function() {
                      for (var e = h(this, t), s = e._i, n = e._f; n; n = n.n) n.r = !0, n.p && (n.p = n.p.n = void 0), delete s[n.i];
                      e._f = e._l = void 0, e[v] = 0
                  },
                  delete: function(e) {
                      var s = h(this, t),
                          n = g(s, e);
                      if (n) {
                          var a = n.n,
                              r = n.p;
                          delete s._i[n.i], n.r = !0, r && (r.n = a), a && (a.p = r), s._f == n && (s._f = a), s._l == n && (s._l = r), s[v]--
                      }
                      return !!n
                  },
                  forEach: function(e) {
                      h(this, t);
                      for (var s, n = i(e, arguments.length > 1 ? arguments[1] : void 0, 3); s = s ? s.n : this._f;)
                          for (n(s.v, s.k, this); s && s.r;) s = s.p
                  },
                  has: function(e) {
                      return !!g(h(this, t), e)
                  }
              }), u && n(d.prototype, "size", {
                  get: function() {
                      return h(this, t)[v]
                  }
              }), d
          },
          def: function(e, t, s) {
              var n, a, r = g(e, t);
              return r ? r.v = s : (e._l = r = {
                  i: a = p(t, !0),
                  k: t,
                  v: s,
                  p: n = e._l,
                  n: void 0,
                  r: !1
              }, e._f || (e._f = r), n && (n.n = r), e[v]++, "F" !== a && (e._i[a] = r)), e
          },
          getEntry: g,
          setStrong: function(e, t, s) {
              c(e, t, function(e, s) {
                  this._t = h(e, t), this._k = s, this._l = void 0
              }, function() {
                  for (var e = this._k, t = this._l; t && t.r;) t = t.p;
                  return this._t && (this._l = t = t ? t.n : this._t._f) ? d(0, "keys" == e ? t.k : "values" == e ? t.v : [t.k, t.v]) : (this._t = void 0, d(1))
              }, s ? "entries" : "values", !s, !0), _(t)
          }
      }
  }
});
