(window.webpackJsonp = window.webpackJsonp || []).push([
	["bundles/3113b7f72dc7a6cb1bd72a96856988db"],
	{
		QySK: function (t, e, i)
		{
			"use strict";
			i.r(e);
			i("a1Th"), i("Btvt"), i("rE2o"), i("ioFf"), i("rGqo"), i("91GP"), i("KKXr"), i("pIFo");
			var a = i("sWID"),
				r = i("zxIV");

			function o(t, e)
			{
				var i = domQuery1("[data-sizes]", t),
					o = JSON.parse(domData(i, "sizes"));
				(domData(i, "media-links") || "").split(",");
				if (!(o.length <= 1 || domData(t, "carousel-inited")))
				{
					if (domData(t, "carousel-inited", 1), e.mobile) return function (t, e)
					{
						var i, r, o, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] :
							{},
							c = geByClass1("article_photo_carousel__controls", e),
							l = geByClass1("article_photo_carousel__counter", e),
							d = domData(l, "counter-lang") || getLang("global_article_carousel_counter"),
							h = getSize(geByClass1("article_figure_content", e)),
							u = geByClass1("article_photo_carousel_inner", e),
							p = n.onClick,
							_ = 0,
							g = 0,
							v = !1,
							m = 0,
							w = 0,
							b = !1,
							f = !1;
						c.addEventListener("touchstart", t =>
						{
							r = t.touches[0].pageX, i = t.touches[0].pageY, addClass(u, "--no_trans"), v = !0, clearTimeout(o)
						});
						var y, O = !1;

						function j(i, a, r)
						{
							if (!a || !v)
							{
								if (v = !0, a) return u.style.transform = "translateX(-50px)", void(o = setTimeout(() =>
								{
									u.style.transform = "translateX(0px)"
								}, 700));
								clearTimeout(o), _ = void 0 === _ ? Math.min(t.length - 1, Math.max(0, _ + i)) : r, domData(e, "photo-carousel-index", _), s(_, e), l.innerHTML = d.replace("{counter}", _ + 1).replace("{total}", t.length), u.style.transform = `translateX(-${_*h[0]}px)`
							}
						}
						return c.addEventListener("touchmove", e =>
						{
							if (f || !(Math.abs(e.touches[0].pageY - i) > 5 || b))
							{
								if (g = e.touches[0].pageX - r, !(Math.abs(g) < 10) || O)
								{
									f || window.addEventListener("touchmove", y = t => cancelEvent(t),
									{
										passive: !1
									}), f = !0, O = !0;
									var a = Math.min(t.length - 1, Math.max(0, _ + (g < 0 ? 1 : -1))),
										o = 0 === a && 0 === _,
										s = a === t.length - 1 && _ === t.length - 1;
									m = a;
									var n = -_ * h[0];
									n += o || s ? .2 * g : g, u.style.transform = `translateX(${n}px)`
								}
							}
							else b = !0
						}), c.addEventListener("touchend", () =>
						{
							O = !1, b = !1, f = !1, w = _, removeClass(u, "--no_trans"), y && window.removeEventListener("touchmove", y), Math.abs(g) < 50 || (_ = m), j(0, !1, m), isFunction(p) && w !== m && p(w < m ? a.ArticleStatsEvents.clickOnCarouselNext : a.ArticleStatsEvents.clickOnCarouselPrev)
						}), j
					}(o, t, e);
					var n = function (t, e, i, r)
					{
						var o, n = 0,
							c = geByClass1("article_photo_carousel__controls", e),
							l = geByClass1("article_photo_carousel__counter", e),
							d = domData(l, "counter-lang") || getLang("global_article_carousel_counter"),
							h = getSize(geByClass1("article_figure_content", e)),
							u = geByClass1("article_photo_carousel_inner", e),
							p = geByClass1("article_photo_carousel__left", e),
							_ = geByClass1("article_photo_carousel__right", e),
							g = i.onClick,
							v = !1;

						function m(i, a)
						{
							if (!a || !v)
							{
								if (v = !0, a) return u.style.transform = "translateX(-50px)", void(o = setTimeout(() =>
								{
									u.style.transform = "translateX(0px)"
								}, 700));
								clearTimeout(o), n = Math.min(t.length - 1, Math.max(0, n + i)), u.style.transform = `translateX(-${n*h[0]}px)`, l.innerHTML = d.replace("{counter}", n + 1).replace("{total}", t.length), toggle(p, n > 0), toggle(_, n < t.length - 1), domData(e, "photo-carousel-index", n), s(n, e)
							}
						}
						return _.addEventListener("click", t => (m(1), g && g(a.ArticleStatsEvents.clickOnCarouselNext), cancelEvent(t))), p.addEventListener("click", t => (m(-1), g && g(a.ArticleStatsEvents.clickOnCarouselPrev), cancelEvent(t))), e.addEventListener("mousemove", () =>
						{
							c.style.opacity = 1
						}), e.addEventListener("mouseleave", () =>
						{
							c.style.opacity = 0
						}), m
					}(o, t, e);
					return Object(r.data)(t, "changePhotoFunction", n), n
				}
			}

			function s(t, e)
			{
				var i = geByTag1("figcaption", e),
					a = [];
				i && ((a = domData(i, "captions")) && (a = JSON.parse(a)), i.innerHTML = a[t] || "")
			}
			var n = i("lkNA");

			function c(t, e)
			{
				return function (t)
				{
					if (Array.isArray(t)) return t
				}(t) || function (t, e)
				{
					if (!(Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t))) return;
					var i = [],
						a = !0,
						r = !1,
						o = void 0;
					try
					{
						for (var s, n = t[Symbol.iterator](); !(a = (s = n.next()).done) && (i.push(s.value), !e || i.length !== e); a = !0);
					}
					catch (t)
					{
						r = !0, o = t
					}
					finally
					{
						try
						{
							a || null == n.return || n.return()
						}
						finally
						{
							if (r) throw o
						}
					}
					return i
				}(t, e) || function ()
				{
					throw new TypeError("Invalid attempt to destructure non-iterable instance")
				}()
			}
			i.d(e, "default", function ()
			{
				return A
			});
			var l, d, h, u = window,
				p = u.geByTag,
				_ = u.geByTag1,
				g = u.each,
				v = u.nav,
				m = u.removeClass,
				w = u.intval,
				b = u.toggleClass,
				f = u.domData,
				y = u.domQuery1,
				O = u.getW,
				j = u.getXY,
				S = u.getH,
				E = u.geByClass,
				T = u.ge,
				k = u.matchesSelector,
				P = {};
			window._articleCarouselGlobalId = window._articleCarouselGlobalId || 1;
			class A
			{
				constructor(t, e, i)
				{
					this._article = t, this._options = e, this._readTO = null, this._scrollStatEvent = !1, this._openTime = 0, this._els = {
						view: T(`article_view_${t.raw_id}`)
					}, window.cur && cur.destroy && cur.destroy.push(() =>
					{
						this.deinit()
					}), window.cur && cur.destroy.push(() =>
					{
						this.deinit()
					}), window.addEventListener("VKWebAppEvent", t =>
					{
						if (t && t.detail && void 0 !== t.detail.index)
						{
							var e = t.detail.index;
							if (h)
							{
								var i = P[f(h, "id")];
								i && i(e)
							}
						}
					}), i && this.ready()
				}
				getEl()
				{
					return this._els.view
				}
				getArticle()
				{
					return this._article
				}
				getScrollNode()
				{
					return this._options.getScrollNode ? this._options.getScrollNode() : document
				}
				_getScrollTop()
				{
					return this._options.getScrollTop ? this._options.getScrollTop() : window.scrollNode ? window.scrollNode.scrollTop : window.document.documentElement.scrollTop
				}
				getTimeSpent()
				{
					return Math.round((Date.now() - this._openTime) / 1e3)
				}
				deinit()
				{
					this._scrollEvent && (this.getScrollNode().removeEventListener("scroll", this._scrollEvent), this._scrollEvent = !1), this._scrollStatEvent && (this.getScrollNode().removeEventListener("scroll", this._scrollStatEvent), this._scrollStatEvent = !1), clearTimeout(this._readTO)
				}
				_onViewScroll()
				{
					var t = scrollGetY(),
						e = window.innerHeight;
					g(p("figure", this._els.view), (i, a) =>
					{
						var r = w(f(a, "done"));
						if (!r)
						{
							var o = S(a),
								s = j(a)[1],
								n = w(f(a, "type")),
								c = 101 == n ? -200 : 100,
								l = s <= t + e - c && t + c <= s + o;
							(r = this._onObjectView(l, n, a)) && f(a, "done", 1)
						}
					}), g(p("figure", this._els.view), (i, a) =>
					{
						var r, o = S(a),
							s = j(a)[1],
							n = w(f(a, "type")),
							c = s,
							l = s + o,
							d = t,
							h = t + e;
						if (c > h || d > l) r = !1;
						else
						{
							var u = Math.max(c, d);
							r = (Math.min(l, h) - u) / o > .7
						}
						this._onObjectPartialView(r, n, a)
					})
				}
				_initObjects()
				{
					this._initedObjects = this._initedObjects ||
					{}, g(E("_article_unmute_button", this._els.view), (t, e) =>
					{
						this._initedObjects[t] || (this._initedObjects[t] = !0, e.addEventListener("click", () =>
						{
							var t = e.parentNode,
								i = _("video", t);
							i.muted = !i.muted, b(t, "article_object_unmuted", !i.muted)
						}))
					}), g(p("figure", this._els.view), (t, e) =>
					{
						if (!this._initedObjects[t]) switch (this._initedObjects[t] = !0, parseInt(f(e, "type")))
						{
						case a.ParagraphType.ObjectPhoto:
							var i = o(e,
							{
								mobile: this._options.mobile,
								moderDeletePhoto: this._options.moderDeletePhoto,
								onClick: t =>
								{
									this.sendStats(
									{
										type: t
									})
								}
							});
							if (this._initPhoto(e), i)
							{
								var r = window._articleCarouselGlobalId++;
								e.setAttribute("data-carousel-id", r), P[r] = i
							}
							break;
						case a.ParagraphType.ObjectAudio:
						case a.ParagraphType.ObjectAudioPlaylist:
							geByClass1("article_figure_content", e).addEventListener("click", () =>
							{
								this.sendStats(
								{
									type: a.ArticleStatsEvents.clickOnAudio
								})
							}, !0);
							break;
						case a.ParagraphType.ObjectMarketItem:
						case a.ParagraphType.ObjectAliExpressProduct:
							break;
						case a.ParagraphType.ObjectGIF:
						case a.ParagraphType.ObjectVideo:
							if (this._options.mobile)
							{
								var s = _("video", e);
								s && (s.addEventListener("play", () =>
								{
									this.sendStats(
									{
										type: a.ArticleStatsEvents.clickOnVideo
									})
								}), s.addEventListener("pause", () =>
								{
									this.sendStats(
									{
										type: a.ArticleStatsEvents.clickOnVideo
									})
								}))
							}
							else
							{
								geByClass1("article_figure_content", e).addEventListener("click", () =>
								{
									this.sendStats(
									{
										type: a.ArticleStatsEvents.clickOnVideo
									})
								}, !0)
							}
						}
					}), this._els.view.addEventListener("click", t =>
					{
						var e = t.target;
						if (k(e, 'a[href^="/away"]'))
						{
							var i = decodeURIComponent(unescape(e.href)).split("vk.com/away.php?to=")[1];
							i && this.sendStats(
							{
								type: a.ArticleStatsEvents.clickOnExternalLink,
								domain: encodeURIComponent(this._getUrlDomain(i))
							})
						}
					})
				}
				_initPhoto(t)
				{
					geByClass1("article_figure_content", t).addEventListener("click", () =>
					{
						var e = y("[data-sizes]", t),
							i = JSON.parse(f(e, "sizes")),
							r = w(f(t, "photo-carousel-index"));
						this._options.onImageOpen && this._options.onImageOpen.call(this, i, t, r), this.sendStats(
						{
							type: a.ArticleStatsEvents.clickOnPhoto
						})
					})
				}
				_initStats()
				{
					if (this._statsInited) this._scrollStatEvent && this._scrollStatEvent();
					else
					{
						this._statsInited = !0, this._openTime = Date.now();
						var t, e = -1,
							i = [];
						this._scrollStatEvent && this.getScrollNode().removeEventListener("scroll", this._scrollStatEvent), clearTimeout(this._readTO);
						var r = this;
						this.getScrollNode().addEventListener("scroll", this._scrollStatEvent = function ()
						{
							var a = r.getCurrentScrollRatio();
							if (!(a < 0))
							{
								var s = 1;
								a >= .95 ? s = 4 : a > .66 ? s = 3 : a > .33 && (s = 2),
									function (a)
									{
										if (r._isReady && (r._article.has_more && (a = Math.min(a, 1)), !(e >= a)))
										{
											for (var s = e + 1; s <= a; s++) i.push(s);
											if (e = a, clearTimeout(t), t = setTimeout(o, 300), 3 == a && r._article.ttr)
											{
												var n = r._article.ttr - r.getTimeSpent();
												n > 0 && (r._readTO = setTimeout(() =>
												{
													if (!document.hidden)
													{
														var t = r.getCurrentScrollRatio();
														if (!(t < 0 || t > 1.3))
														{
															var a = 4 == e;
															i = [e = 4], o(a)
														}
													}
												}, 1e3 * n))
											}
										}
									}(s), 4 != s || r._article.has_more || (r.getScrollNode().removeEventListener("scroll", r._scrollStatEvent), r._scrollStatEvent = !1)
							}
						},
						{
							passive: !0
						}), this._scrollStatEvent && this._scrollStatEvent()
					}

					function o(t)
					{
						if (i.length)
						{
							var e = r._article,
								o = r._options,
								s = "";
							if (e.ref) s = e.ref;
							else if (window.cur)
							{
								if ("feed" === (s = window.cur.module) && cur.articlePrevLoc && !o.mobile) "search" === v.fromStr(cur.articlePrevLoc).section && (s = "feed_search")
							}
							var n = {
								act: "stats",
								scroll: i.join(","),
								spent: r.getTimeSpent(),
								hash: e.access_hash,
								article_owner_id: e.owner_id,
								article_id: e.id,
								is_web_view: o.isWebView ? 1 : 0,
								post_id: o.sourcePostId,
								is_widget: o.isWidget,
								is_delayed_scroll_4: w(t),
								track_code: o.trackCode,
								ref: s
							};
							i = []
						}
					}
				}
				_initGoogleAnalytics()
				{
					var t = this._options.googleAnalyticsId;
					if (t)
						if (window.dataLayer = window.dataLayer || [], window.gtag) window.gtag("config", t,
						{
							page_location: window.location.href
						});
						else
						{
							var e = document.createElement("script");
							e.setAttribute("src", `https://www.googletagmanager.com/gtag/js?id=${t}`), e.setAttribute("async", "true"), document.head.appendChild(e), window.gtag = function ()
							{
								window.dataLayer.push(arguments)
							}, window.gtag("js", new Date), window.gtag("config", t)
						}
				}
				_onObjectPartialView(t, e, i)
				{
					if (e == a.ParagraphType.ObjectPhoto)
					{
						var r = y("[data-sizes]", i);
						if (JSON.parse(f(r, "sizes")).length > 1)
						{
							var o = i.getAttribute("data-carousel-id");
							t ? d != o && (clearTimeout(l), l = setTimeout(() =>
							{
								var t = P[o];
								t && t(1, !0)
							}, 400), d = o) : o == d && (d = -1, clearTimeout(l))
						}
					}
				}
				_onObjectView(t, e, i)
				{
					var r = !1;
					switch (e)
					{
					case a.ParagraphType.ObjectPhoto:
						if (t)
						{
							var o = _("img", i),
								s = O(o) || this._options.width,
								n = y("[data-sizes]", i),
								l = JSON.parse(f(n, "sizes")),
								d = p("img", i);
							l.forEach((t, e) =>
							{
								var i = c(Object(a.getAppropriateImage)(l[e], s, !0), 1)[0];
								Object(a.preloadImage)(i, () =>
								{
									var t = d[e];
									m(t, "article_object_photo__image_blur"), t.src = i
								})
							}), r = !0
						}
						break;
					case a.ParagraphType.ObjectGIF:
						if (!this._options.mobile)
						{
							var h = _("video", i);
							if (h)
								if (t)
								{
									if (h.hasAttribute("autoplay"))
									{
										var u = h.play();
										u && u.catch(() =>
										{})
									}
								}
							else h.pause();
							else r = !0
						}
						break;
					case a.ParagraphType.ObjectTwitter:
					case a.ParagraphType.ObjectFacebook:
					case a.ParagraphType.ObjectInstagram:
					case a.ParagraphType.ObjectVK:
					case a.ParagraphType.ObjectTelegram:
						this.initEmbed(e, i), r = !0
					}
					return r
				}
				initEmbed(t, e)
				{
					switch (t)
					{
					case a.ParagraphType.ObjectTwitter:
						var i = y("[data-tweet-id]", e),
							r = f(i, "tweet-id");
						Object(n.loadScript)("https://platform.twitter.com/widgets.js",
						{
							onLoad: () =>
							{
								window.twttr.widgets.createTweet(r, i,
								{
									align: "center",
									lang: window.vk && 0 == window.vk.lang ? "ru" : "en",
									dnt: !0
								})
							}
						});
						break;
					case a.ParagraphType.ObjectFacebook:
						var o = window.vk && 0 == window.vk.lang ? "ru_RU" : "en_US";
						Object(n.loadScript)(`https://connect.facebook.net/${o}/all.js#xfbml=1&amp;version=v2.8`,
						{
							onLoad: () =>
							{
								window.FB.XFBML.parse()
							}
						});
						break;
					case a.ParagraphType.ObjectInstagram:
						Object(n.loadScript)("https://www.instagram.com/embed.js",
						{
							onLoad: () =>
							{
								window.instgrm.Embeds.process(), addEvent(window, "message", a.changeHeightInstagramEmbed)
							}
						});
						break;
					case a.ParagraphType.ObjectVK:
						var s = y("[data-raw-id]", e),
							l = f(s, "raw-id"),
							d = f(s, "index"),
							h = c(l.split(";"), 2),
							u = h[0],
							p = h[1];
						Object(n.loadScript)("/js/api/openapi.js",
						{
							onLoad: () =>
							{
								ajax.post("dev.php",
								{
									act: "a_get_post_hash",
									post: `${u}_${p}`
								},
								{
									onDone: t =>
									{
										t && window.VK && window.VK.Widgets && window.VK.Widgets.Post(`vk_post_${l}_${d}`, u, p, t,
										{
											from: this._options.isWebView ? "article_webview" : ""
										})
									}
								})
							}
						});
						break;
					case a.ParagraphType.ObjectTelegram:
						Object(n.loadScript)("https://telegram.org/js/telegram-widget.js?5",
						{})
					}
				}
				getCurrentScrollRatio()
				{
					var t = S(this._els.view),
						e = j(this._els.view)[1] - j(this.getScrollNode().firstElementChild)[1];
					return (this._getScrollTop() + window.innerHeight - e) / t
				}
				getScreenVisibilityRatio()
				{
					var t = S(this._els.view),
						e = j(this._els.view)[1] - j(this.getScrollNode().firstElementChild)[1],
						i = this._getScrollTop(),
						a = window.innerHeight,
						r = e,
						o = e + t,
						s = i,
						n = i + a;
					if (s > o || r > n) return 0;
					var c = Math.max(r, s);
					return (Math.min(o, n) - c) / a
				}
				update()
				{
					this._initObjects(), this._initStats(), this._options.onScroll && this._options.onScroll.call(this, this.getCurrentScrollRatio())
				}
				ready()
				{
					(this._isReady = !0, this._initObjects(), this._initStats(), this._initGoogleAnalytics(), setTimeout(() =>
					{
						var t = Object(a.getUrlParam)("anchor");
						if (t)
						{
							this._options.isWebView || this.scrollToAnchor(t);
							var e = this.getScrollNode();
							e === document && (e = document.scrollingElement || window.scrollNode || document.body), e.click && e.click(), e.focus()
						}
					}, 0), !this._options.mobile && window.AudioPlaylist) && (this._article.audios_list && this._article.audios_list.length > 0 && new AudioPlaylist(AudioPlaylist.TYPE_TEMP, this._article.owner_id, "article_" + this._article.id).mergeWith(
					{
						list: this._article.audios_list
					}));
					this.getScrollNode().addEventListener("scroll", this._scrollEvent = () =>
					{
						this._onViewScroll(), this._options.onScroll && this._options.onScroll.call(this, this.getCurrentScrollRatio())
					}), setTimeout(() =>
					{
						this._scrollEvent()
					}, this._options.objectsInitDelay || 0)
				}
				scrollToAnchor(t)
				{
					t = t || Object(a.getUrlParam)("anchor");
					var e = this._options,
						i = this.getScrollNode();
					i === document && (i = document.scrollingElement || window.scrollNode || document.body);
					t && (() =>
					{
						var a = document.getElementById(t);
						if (a)
						{
							"scrollRestoration" in history && (history.scrollRestoration = "manual");
							var r = e.isWebView ? 0 : 25,
								o = a.parentNode.offsetTop - r;
							window.setTimeout(() =>
							{
								i.scrollTo ? i.scrollTo(0, o) : i.scrollTop = o
							}, 0)
						}
					})()
				}
				sendStats(t)
				{
					var e = this._article,
						i = this._options,
						a = {
							act: "stats",
							spent: this.getTimeSpent(),
							article_id: e.id,
							article_owner_id: e.owner_id,
							hash: e.access_hash,
							is_web_view: i.isWebView ? 1 : 0
						};
					Object.assign(a, t)
				}
				_getUrlDomain(t)
				{
					var e = document.createElement("a");
					return e.href = t, e.hostname
				}
			}
		},
		sWID: function (t, e, i)
		{
			"use strict";
			i.r(e), i.d(e, "ParagraphType", function ()
			{
				return a
			}), i.d(e, "ResizableObjectTypes", function ()
			{
				return r
			}), i.d(e, "ObjectResizeType", function ()
			{
				return o
			}), i.d(e, "ArticleStatsEvents", function ()
			{
				return s
			}), i.d(e, "getAppropriateImage", function ()
			{
				return c
			}), i.d(e, "preloadImage", function ()
			{
				return d
			}), i.d(e, "mailruStatsPixel", function ()
			{
				return h
			}), i.d(e, "getUrlParam", function ()
			{
				return u
			}), i.d(e, "changeHeightInstagramEmbed", function ()
			{
				return p
			});
			i("OG14"), i("Oyvg"), i("pIFo"), i("Vd3H");
			var a = {
					Text: 1,
					Header1: 2,
					Header2: 3,
					Header3: 4,
					Code: 5,
					NumericList: 6,
					BulletList: 7,
					Quote: 8,
					Quote2: 9,
					ObjectAudioPlaylist: 100,
					ObjectPhoto: 101,
					ObjectVideo: 102,
					ObjectGIF: 103,
					ObjectPodcast: 104,
					ObjectAudio: 105,
					ObjectTwitter: 106,
					ObjectFacebook: 107,
					ObjectInstagram: 108,
					ObjectVK: 109,
					ObjectTelegram: 110,
					ObjectPoll: 111,
					ObjectMarketItem: 112,
					ObjectAliExpressProduct: 113
				},
				r = [a.ObjectPhoto, a.ObjectGIF, a.ObjectVideo, a.ObjectTwitter, a.ObjectFacebook, a.ObjectInstagram, a.ObjectVK, a.ObjectTelegram],
				o = {
					Normal: 0,
					Float: 1,
					Medium: 2,
					Large: 3
				},
				s = {
					clickOnVideo: "click_on_video",
					clickOnAudio: "click_on_audio",
					clickOnPhoto: "click_on_photo",
					clickOnExternalLink: "external_link_click",
					clickOnCarouselNext: "click_on_carousel_next",
					clickOnCarouselPrev: "click_on_carousel_prev",
					clickOnMentions: "click_on_mentions",
					nightModeOn: "night_mod_on",
					nightModeOff: "night_mod_off",
					close: "close"
				};

			function n()
			{
				var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] :
					{},
					e = arguments.length > 1 ? arguments[1] : void 0;
				for (var i in t)
					if (Object.prototype.hasOwnProperty.call(t, i) && !1 === e.call(t[i], i, t[i])) break;
				return t
			}

			function c(t, e, i)
			{
				var a = [];
				if (n(t, (t, e) =>
					{
						i && -1 == ["w", "z", "y", "x", "m", "s"].indexOf(t) || a.push(e)
					}), !a.length) return [!1];
				a.sort((t, e) => t[1] - e[1]), e *= window.devicePixelRatio >= 2 ? 2 : 1;
				var r = a[a.length - 1];
				return n(a, (t, i) =>
				{
					if (i[1] >= e) return r = i, !1
				}), r
			}
			var l = {};

			function d(t, e)
			{
				if (!0 === l[t]) return e && e(), !0;
				if (isArray(l[t])) return l[t].push(e), !1;
				l[t] = [e];
				var i = new Image;
				return i.onload = () =>
				{
					var e = l[t];
					l[t] = !0, n(e, (t, e) =>
					{
						e && e()
					})
				}, i.src = t, !1
			}

			function h(t, e)
			{
				if (isObject(e) && !isEmpty(e))
				{
					var i = `https://vk-callback.go.mail.ru/longread_pxl?action=${t}`;
					n(e, (t, e) =>
					{
						i += `&${t}=${e}`
					}), (new Image).src = i
				}
			}

			function u(t)
			{
				t = t.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
				var e = new RegExp("[\\?&]" + t + "=([^&#]*)").exec(location.search);
				return null === e ? "" : decodeURIComponent(e[1].replace(/\+/g, " "))
			}

			function p(t)
			{
				if (/^https?:\/\/([\w-]+\.)*(instagram\.com|instagr\.am)$/.test(t.origin))
				{
					var e = function (t)
					{
						for (var e, i = document.getElementsByTagName("iframe"), a = i.length - 1; a >= 0; a--)
						{
							var r = i[a];
							if (r.contentWindow === t.source)
							{
								e = r;
								break
							}
						}
						return e
					}(t);
					if (e)
					{
						try
						{
							t = JSON.parse(t.data)
						}
						catch (t)
						{}
						"object" == typeof t && "string" == typeof t.type && "object" == typeof t.details && setTimeout(() =>
						{
							if ("MEASURE" === t.type)
							{
								var i = t.details.height;
								e.setAttribute("height", i)
							}
						}, 100)
					}
				}
			}
		}
	}
]);
try
{
	stManager.done("cmodules/bundles/3113b7f72dc7a6cb1bd72a96856988db.8a3c951730e0fbff9a65.js")
}
catch (t)
{}
