(window.webpackJsonp = window.webpackJsonp || [
]).push([['bundles/common'],
{
  '+lvF': function (t, e, r) {
    t.exports = r('VTer') ('native-function-to-string', Function.toString)
  },
  '+rLv': function (t, e, r) {
    var i = r('dyZX').document;
    t.exports = i && i.documentElement
  },
  '/8Fb': function (t, e, r) {
    var i = r('XKFU'),
    n = r('UExd') (!0);
    i(i.S, 'Object', {
      entries: function (t) {
        return n(t)
      }
    })
  },
  '/PiP': function (t, e, r) {
    'use strict';
    r.r(e),
    r.d(e, 'initTopNotifier', function () {
      return u
    }),
    r.d(e, 'isPhotoeditor3Available', function () {
      return p
    }),
    r.d(e, 'showPhoto', function () {
      return _
    }),
    r.d(e, 'showManyPhoto', function () {
      return f
    }),
    r.d(e, 'showAlbums', function () {
      return m
    }),
    r.d(e, 'showAlbum', function () {
      return g
    }),
    r.d(e, 'showPhotoTags', function () {
      return v
    }),
    r.d(e, 'showVideoTags', function () {
      return b
    }),
    r.d(e, 'videoCallback', function () {
      return y
    }),
    r.d(e, 'showAttachProductBox', function () {
      return E
    }),
    r.d(e, 'showWiki', function () {
      return w
    }),
    r.d(e, 'showApp', function () {
      return O
    }),
    r.d(e, 'showPodcast', function () {
      return P
    }),
    r.d(e, 'podcastStartFrom', function () {
      return C
    }),
    r.d(e, 'articlePrepare', function () {
      return x
    }),
    r.d(e, 'isArticleEditorAvailable', function () {
      return A
    }),
    r.d(e, 'openArticleEditor', function () {
      return M
    }),
    r.d(e, 'bookmark', function () {
      return D
    }),
    r.d(e, 'bookmarkPost', function () {
      return k
    }),
    r.d(e, 'bookmarkArticle', function () {
      return T
    }),
    r.d(e, 'bookmarkLink', function () {
      return j
    }),
    r.d(e, 'bookmarkPodcast', function () {
      return S
    }),
    r.d(e, 'bookmarkNarrative', function () {
      return I
    }),
    r.d(e, 'bookmarkEvent', function () {
      return L
    }),
    r.d(e, 'shareAudioPlaylist', function () {
      return B
    }),
    r.d(e, 'getAudioPlayer', function () {
      return R
    }),
    r.d(e, 'deleteAudioOnClaim', function () {
      return F
    }),
    r.d(e, 'initTopAudioPlayer', function () {
      return N
    }),
    r.d(e, 'AudioMessagePlayer', function () {
      return W
    }),
    r.d(e, 'mentionClick', function () {
      return V
    }),
    r.d(e, 'isArticleLayerOpen', function () {
      return U
    });
    r('SRfc'),
    r('pIFo'),
    r('Vd3H');
    var i = r('Egk5'),
    n = r('t7n3'),
    s = r('EasH'),
    o = r('zxIV'),
    a = r('gdug'),
    l = r('v+DW'),
    c = r('4+be'),
    h = r('cGUQ'),
    d = r('kcIO');
    function u() {
      var t = [
        'notifier.js',
        'notifier.css'
      ];
      return {
        preload: function () {
          stManager.add(t, () =>window.TopNotifier.preload())
        },
        show: function (e) {
          if (!0 !== Object(i.checkEvent) (e)) return stManager.add(t, () =>window.TopNotifier.show(e)),
          Object(i.cancelEvent) (e)
        },
        showTooltip: function (e) {
          stManager.add(t, () =>window.TopNotifier.showTooltip(e))
        },
        invalidate: () =>{
        },
        setCount: () =>{
        },
        createNewEventsBox: () =>{
        }
      }
    }
    function p() {
      return !a.browser.msie || parseInt(a.browser.version) > 10
    }
    function _(t, e, r, s) {
      if (cur.viewAsBox) return cur.viewAsBox();
      if (!(Object(i.checkEvent) (s) || cur._editMode && cur._editMode(s))) {
        var o = [
          jsc('web/photoview.js'),
          'photoview.css',
          'page.js',
          'page.css'
        ];
        if (r.img && (r.showProgress = function () {
          Object(l.showProgress) (r.img)
        }, r.hideProgress = function () {
          Object(l.hideProgress) (r.img)
        }), !t) return !1;
        if (window.Photoview && !1 === Photoview.showPhoto(t, e, r)) return !1;
        var a = !0;
        r.temp && !(cur.pvNoTemp || {
        }) [t] && stManager.add(o, function () {
          Object(n.extend) (cur, {
            pvCancelLoad: function () {
              a = !1
            },
            pvData: cur.pvData || {
            },
            pvOptions: cur.pvOptions || {
            }
          }),
          cur.pvData.temp = [
            r.temp
          ],
          cur.pvOptions.temp_final = r.temp_final,
          cur.pvOptions.temp_summary = r.temp_summary,
          cur.pvOptions.queue = r.queue,
          Photoview.show('temp', 0)
        });
        var c = 1;
        if (r && r.additional && r.additional.open_pe && (c = 0), Object(n.extend) (r, {
          onDone: function (i) {
            Photoview.list(t, e, i),
            r.blog_text && arguments[3] && arguments[3][0] && (arguments[3][0].album = r.blog_text),
            Photoview.loaded.apply(window, arguments),
            a && ('deleted' === i ? Photoview.showDeleted.apply(window, arguments)  : Photoview.showPhoto(t, e, r, !0))
          },
          stat: o,
          cache: c
        }), r.temp_final) return !1;
        var h = '';
        return nav.objLoc.dmcah && (h = nav.objLoc.dmcah),
        ajax.post('al_photos.php', Object(n.extend) ({
          act: 'show',
          gid: cur.gid,
          photo: t,
          list: e,
          dmcah: h,
          module: cur.module || '',
          list_info: r.list_info || null
        }, r.additional), r),
        !1
      }
    }
    function f(t, e, r, i) {
      Page.showManyPhoto(t, e, r, i)
    }
    function m(t, e, r) {
      return cur.viewAsBox ? cur.viewAsBox()  : Object(i.checkEvent) (r) ? void 0 : (stManager.add([jsc('web/photoview.js'),
      'photoview.css'], function () {
        Photoview.showAlbums(t, e)
      }), !1)
    }
    function g(t, e, r) {
      return cur.viewAsBox ? cur.viewAsBox()  : Object(i.checkEvent) (r) ? void 0 : (stManager.add([jsc('web/photoview.js'),
      'photoview.css'], function () {
        Photoview.showAlbum(t, e)
      }), !1)
    }
    function v(t, e, r) {
      return cur.viewAsBox ? cur.viewAsBox()  : Object(i.checkEvent) (r) ? void 0 : (stManager.add([jsc('web/photoview.js'),
      'photoview.css'], function () {
        Photoview.showTagged(t, e)
      }), !1)
    }
    function b(t, e, r) {
      return cur.viewAsBox ? cur.viewAsBox()  : Object(i.checkEvent) (r) ? void 0 : (stManager.add([jsc('web/video.js'),
      'video.css',
      jsc('web/photoview.js'),
      'photoview.css'], function () {
        Photoview.showVideoTags(t, e)
      }), !1)
    }
    function y(t) {
      var e = t.shift();
      if (window.Videoview && Videoview.playerCallback[e]) return Videoview.playerCallback[e].apply(Videoview, t);
      throw Error('Unregistered player callback: ' + e)
    }
    function E(t) {
      var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return curBox() || Object(s.showBox) ('al_market.php', {
        act: 'show_attach_product_box'
      }, {
        onDone: function (t, r) {
          window.MarketProductBox.init(t, r, e)
        }
      }),
      Object(i.cancelEvent) (t)
    }
    function w(t, e, r) {
      var s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
      };
      if (Object(i.checkEvent) (r)) return !0;
      if (0 !== cur.gid && (t.gid = cur.gid), window.wkcur && wkcur.shown && wkcur.wkRaw === t.w && t.w && !t.reply) return WkView.restoreLayer(s),
      Object(i.cancelEvent) (r);
      (window.wkcur && wkcur.hideTitle || t.hide_title) && (s.hide_title = t.hide_title = 1);
      var o = s.stat || [
        'wkview.js',
        'wkview.css',
        'wk.css',
        'wk.js'
      ];
      e && o.push('wk_editor.js', 'wk_editor.css');
      var a,
      l,
      c = {
        stat: o,
        loader: !s.noloader,
        onDone: function (t, e, i, o) {
          WkView.show(t, e, Object(n.extend) (i, s), o, r)
        },
        onFail: function (t) {
          return WkView.showError(t)
        }
      };
      if (nav.objLoc.claim && (t.claim = nav.objLoc.claim), t.w && '/query' === t.w.substr( - 6)) {
        var h = Object(n.clone) (nav.objLoc);
        delete h[0],
        delete h.w,
        t.query = JSON.stringify(h)
      }
      s.preload && Object(n.extend) (c, s.preload),
      s.ads_params && (a = s.ads_params, (l = nav.getPostParams(r && r.target)).post_click_url && (a._post_click_url = l.post_click_url));
      var d = '';
      'feed' === cur.module && window.feed ? d = window.feed.getModuleRef()  : 'public' === cur.module ? d = 'club' : 'profile' === cur.module && (d = 'profile');
      var u = '',
      p = Object(n.clone) (nav.objLoc);
      return p.dmcah && (u = p.dmcah),
      ajax.post('wkview.php', Object(n.extend) ({
        act: 'show',
        loc: nav.objLoc[0],
        is_znav: s.isZnav,
        dmcah: u,
        ref: d
      }, t, a, cur.getWkviewOpts && cur.getWkviewOpts()), c),
      Object(i.cancelEvent) (r)
    }
    function O(t, e, r, i, s, o) {
      o || (o = {
      });
      var a = !1,
      l = Object(n.extend) ({
        w: 'app' + e
      }, o);
      if (r = Object(n.intval) (r), i && (Object(n.isObject) (i) ? l = Object(n.extend) (l, i)  : l.ref = i), o.layer && (a = !0), (cur.apps && cur.apps[e] || !r) && !a) {
        delete l.w;
        var c = 'app' + e + (s ? '_' + s : ''),
        h = nav.objLoc && !nav.objLoc[1] && nav.objLoc[0] === c;
        return nav.go('/' + c + nav.toStr(l), t, {
          nocur: h
        })
      }
      s && (l.mid = s);
      var d = {
        stat: [
          'wkview.js',
          'wkview.css',
          'apps.js',
          'apps.css'
        ]
      };
      if (o.queue && (d.queue = 1), o.urlHash && (l.url_hash = o.urlHash), l['#']) {
        var u = l['#'];
        delete l['#'],
        d.onLoaded = () =>{
          nav.setLoc(Object(n.extend) (nav.objLoc, {
            '#': u
          }))
        }
      }
      return w(l, !1, t, d)
    }
    function P(t, e, r, n, s) {
      if (!vk.widget) return Object(o.show) (boxLoader),
      Object(o.show) (boxLayerWrap),
      Object(d.boxRefreshCoords) (boxLoader),
      stManager.add([jsc('web/podcast.js')], function () {
        Podcast.show(t, e, null, n, s)
      }),
      r && Object(i.cancelEvent) (r)
    }
    function C(t, e, r, n) {
      return stManager.add([jsc('web/podcast.js')], function () {
        Podcast.goToTime(t, e, r, n)
      }),
      r && Object(i.cancelEvent) (r)
    }
    function x(t) {
      var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
      };
      t && !vk.isBanned && stManager.add([jsc('web/article_layer.js'),
      'article.css'], function () {
        window.ArticleLayer.prepare(t, null, e)
      })
    }
    function A() {
      return !(a.browser.msie && parseInt(a.browser.version) <= 11)
    }
    function M(t, e, r) {
      if (cur.articleEditorLayer) cur.articleEditorLayer.open(t, e);
       else {
        var i = [
          jsc('web/article_editor_layer.js'),
          'article.css',
          'article_editor.css'
        ];
        stManager.add(i, () =>{
        }),
        ajax.post('al_articles.php', {
          act: 'open_editor',
          article_owner_id: t,
          article_id: e,
          from_post_convert: r ? 1 : 0,
          post_data_medias: r ? r.medias.join(',')  : ''
        }, {
          loader: !0,
          onFail: function (t) {
            return Object(s.showFastBox) (Object(c.getLang) ('global_error'), t),
            !0
          },
          onDone: function (t, e, n, s) {
            window.WkView && WkView.hide(),
            window.boxQueue && boxQueue.hideAll(),
            r && (s.postData = r),
            s.articleOwnerId ? stManager.add(i, function () {
              layers.fullhide = function () {
                cur.articleEditorLayer && cur.articleEditorLayer.hide()
              },
              cur.articleEditorLayer = new ArticleEditorLayer(t, e, n, s, () =>delete cur.articleEditorLayer)
            })  : nav.change({
              z: !1
            })
          }
        })
      }
    }
    function D(t, e, r, i) {
      var a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
      l = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : '',
      h = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : '';
      ajax.post('al_bookmarks.php', {
        act: 'bookmark',
        owner_id: t,
        object_id: e,
        type: r,
        state: a ? 1 : 0,
        hash: i,
        item_access_hash: l,
        ref: h || cur.module
      }, {
        onDone: (r, i, a, l) =>{
          if (r) {
            window.showDoneBox(r, {
              tooltipHandler: function (r) {
                var h = Object(o.geByClass1) ('bookmarks_tag_set', r);
                if (h && !isEmpty(i)) {
                  var d = [
                  ];
                  each(i, (t, e) =>{
                    d.push(e)
                  }),
                  d.sort((t, e) =>t.order - e.order);
                  for (var u = '<div class="bookmarks_tags_list">', p = 0; p < d.length; p++) {
                    var _ = d[p];
                    u += `<div class="bookmarks_tags_list_item" data-id="${_.id
                  }
                  ">${_.name
                }
                </div>`
              }
              u += '</div>',
              (u = se(u)).addEventListener('click', r=>{
                var i = domClosest('bookmarks_tags_list_item', r.target);
                if (i) {
                  var h = Object(o.domData) (i, 'id'),
                  d = toggleClass(i, 'bookmarks_tags_list_item--selected');
                  ajax.post('al_bookmarks.php', {
                    act: 'set_tag',
                    item_type: a,
                    item_oid: t,
                    item_id: e,
                    hash: l,
                    tag_id: h,
                    is_tagged: Object(n.intval) (!d),
                    is_from_snackbar: !0
                  }, {
                    onFail: t=>(Object(s.showFastBox) (Object(c.getLang) ('global_error'), t), !0)
                  })
                }
              }),
              cur.setBookmarksTagTooltip && cur.setBookmarksTagTooltip.destroy(),
              stManager.add(['ui_common.css',
              'ui_common.js'], () =>{
              });
              var f = new ElementTooltip(h, {
                content: u,
                appendToParent: !0,
                cls: 'bookmarks_tag_set_tt',
                autoShow: !0,
                offset: [
                  0,
                  - 36
                ],
                onFirstTimeShow: t=>{
                  stManager.add(['ui_common.css',
                  'ui_common.js'], () =>{
                    cur.setBookmarksTagTooltipScrolls || (cur.setBookmarksTagTooltipScrolls = [
                    ]),
                    cur.setBookmarksTagTooltipScrolls.push(new uiScroll(domFC(t), {
                      theme: 'dark'
                    }))
                  })
                },
                onShow: function () {
                  Notifier.freezeEvents(),
                  curNotifier.tooltipShown = !0
                },
                onHide: function () {
                  curNotifier.tooltipShown = !1,
                  curNotifier.unfreezeAfterTooltipHide && Notifier.unfreezeEvents()
                }
              });
              cur.destroy.push(() =>{
                cur.setBookmarksTagTooltipScrolls && (cur.setBookmarksTagTooltipScrolls.forEach(function (t) {
                  t.destroy()
                }), delete cur.setBookmarksTagTooltipScrolls),
                f.destroy()
              })
            }
          },
          link: '/bookmarks'
        })
      }
    }
  })
}
function k(t, e, r, i, s, a) {
  var l = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : '';
  if (Object(n.isObject) (window.cur) && Object(n.isFunction) (window.cur.viewAsBox)) return window.cur.viewAsBox();
  var c = parseInt(Object(o.domData) (t, 'state'));
  t.innerHTML = c ? Object(o.domData) (t, 'add')  : Object(o.domData) (t, 'remove'),
  Object(o.domData) (t, 'state', c ? 0 : 1),
  D(e, r, i, s, c, a, l)
}
function T(t, e, r, n, s, a, l) {
  return e && (l = parseInt(Object(o.domData) (e, 'state')), Object(o.domData) (e, 'state', l ? 0 : 1)),
  D(r, n, s, a, l),
  each(geByClass(`_article_${r
}
_${n
}
`),
(t, e) =>{
var r = Object(o.geByClass1) ('_bookmark_btn', e);
Object(o.domData) (r, 'state', l ? 0 : 1)
}), Object(i.cancelEvent) (t)
}
function j(t, e, r) {
var n = parseInt(Object(o.domData) (e, 'state'));
return Object(o.domData) (e, 'state', n ? 0 : 1),
ajax.post('al_bookmarks.php', {
act: 'bookmark_link',
state: n ? 1 : 0,
hash: r,
url: Object(o.domData) (e, 'link-url'),
img: Object(o.domData) (e, 'link-img'),
title: Object(o.domData) (e, 'link-title')
}, {
onDone: t=>{
  t && window.showDoneBox(t)
}
}),
Object(i.cancelEvent) (t)
}
function S(t, e, r, n, s) {
return stManager.add([jsc('web/podcast.js')], function () {
Podcast.toggleFave(t, e, r, s)
}),
n && Object(i.cancelEvent) (n)
}
function I(t, e, r, n, s, a) {
var l = parseInt(Object(o.domData) (e, 'state'));
return Object(o.domData) (e, 'state', l ? 0 : 1),
D(r, n, s, a, l),
Object(i.cancelEvent) (t)
}
function L(t, e, r, n) {
var s = parseInt(Object(o.domData) (e, 'state'));
return Object(o.domData) (e, 'state', s ? 0 : 1),
ajax.post('fave.php', {
act: s ? 'a_delete_group' : 'a_add_group',
gid: r,
hash: n
}, {
onDone: (t, e) =>{
  s || showDoneBox(e)
}
}),
Object(i.cancelEvent) (t)
}
function B(t, e, r, n) {
return Object(s.showBox) ('like.php', {
act: 'publish_box',
object: 'audio_playlist' + e + '_' + r,
list: n
}, {
stat: [
  'wide_dd.js',
  'wide_dd.css',
  'sharebox.js'
]
}),
Object(i.cancelEvent) (t)
}
function R() {
return window.ap = window.ap || new AudioPlayer,
window.ap
}
function F(t, e) {
var r = t + '_' + e,
i = Object(o.geByClass1) ('_audio_row_' + r);
AudioUtils.deleteAudio(i, AudioUtils.getAudioFromEl(i, !0)),
cur.claimWarning && cur.claimWarning.hide()
}
function N() {
window.TopAudioPlayer.init()
}
var W = {
loaded: !1,
events: {
on(t, e) {
  stManager.add('voice_message_player.js', () =>{
    window.AudioMessagePlayer.events.on(t, e)
  })
}
},
togglePlay: function (t, e) {
stManager.add('voice_message_player.js', () =>window.AudioMessagePlayer.togglePlay(t, e))
},
detachPlayer: function (t) {
stManager.add('voice_message_player.js', () =>window.AudioMessagePlayer.detachPlayer(t))
}
};
function V(t, e) {
var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
};
t && t.tt && t.tt.hide && t.tt.hide({
fasthide: 1
});
var i = t,
s = !1;
if (U() && ArticleLayer.isStandalone() && (s = !0), i.tagName && 'a' === i.tagName.toLowerCase() && !i.getAttribute('target') && !nav.baseBlank) {
var o,
a = i.getAttribute('hrefparams');
a && (r.params = Object(n.extend) (r.params || {
}, Object(h.fromQueryString) (a))),
(i = (i = i.href || '').replace(/^https?:\/\//i, '')).indexOf(location.hostname) || (i = i.replace(location.hostname, '')),
(i = i.replace(/^(vkontakte\.ru\/|vk\.com\/)/, '/')).match(/#$/) || !(o = i.match(/^\/(.*?)(\?|#|$)/)) ? s = !0 : ((o = o[1]).indexOf('.php') > 0 || o.match(/^(doc\-?\d+_\d+|graffiti\d+|reg\d+|images|utils|\.js|js\/|\.css|css\/)/)) && (s = !0)
}
if (s) {
if (!!!(r && r.params && r.params._post && r.params._post_click_type)) return !0;
t.setAttribute('data-change-location-with-post-away', 1),
i = t
}
return nav.go(i, e, r)
}
function U() {
return window.ArticleLayer && window.ArticleLayer.isShown()
}
},
'0/R4': function (t, e) {
t.exports = function (t) {
return 'object' == typeof t ? null !== t : 'function' == typeof t
}
},
'0gG3': function (t, e, r) {
'use strict';
r.r(e),
r.d(e, 'stManager', function () {
return u
}),
r.d(e, 'fillStaticFilesData', function () {
return p
}),
r.d(e, 'appendCssFiles', function () {
return _
}),
r.d(e, 'initStaticManager', function () {
return f
});
r('rGqo'),
r('Btvt'),
r('Oyvg'),
r('SRfc'),
r('KKXr'),
r('pIFo');
var i = r('zxIV'),
n = r('ryw6'),
s = r('t7n3'),
o = r('gdug'),
a = r('98sY'),
l = t=>'cmodules/' + t;
function c(t) {
var e = '';
return stTypes.fromLib[t] ? e += 'lib/' : stTypes.fromCompiled && stTypes.fromCompiled[t] ? e += l('web/')  : /^lang\d/i.test(t) || stTypes.fromRoot[t] || - 1 !== t.indexOf('/') || (e += 'al/'),
e
}
function h(t) {
var e = window.stDeps;
return !!(void 0 === e ? [
] : e) [`/js/${c(t)
}
${t
}
`]
}
function d(t) {
var e = window.stDeps,
r = (void 0 === e ? [
] : e) [`/js/${c(t)
}
${t
}
`];
return r[r.length - 1]
}
var u = {
_waiters: [
],
_wait: function () {
var t = u._waiters.length,
e = {
},
r = [
];
if (!t) return clearInterval(u._waitTimer),
void (u._waitTimer = !1);
for (var o = 0; o < t; ++o) {
for (var l = u._waiters[o][0], c = 0, h = l.length; c < h; ++c) {
var d = l[c];
if (!e[d]) if (StaticFiles[d].l || 'css' !== StaticFiles[d].t || 'none' !== Object(i.getStyle) (StaticFiles[d].n, 'display') || u.done(d), StaticFiles[d].l) e[d] = 1;
 else if (e[d] = - 1, vk.loaded) {
var p = ++StaticFiles[d].c;
(p > u.lowlimit && stVersions[d] > 0 || p > u.highlimit) && (stVersions[d] < 0 ? (Object(a.logError) (new Error(`Can't load ${d
}
`), {
environment: 'static_manager'
}),
Object(n.topError) (`<b>Error:</b> Could not load <b>${d
}
</b>.`,
{
dt: 5,
type: 1,
msg: `Failed to load with ${u.lowlimit
}
/${u.highlimit
}
 limits (${(Object(s.vkNow) () - vk.started) / 100
}
 ticks passed)`,
file: d
}),
StaticFiles[d].waitersLength = 1,
e[d] = 1) : (Object(n.topMsg) (`Some problems with loading <b>${d
}
</b>...`, 5),
stVersions[d] = Object(s.irand) ( - 10000, - 1),
u._add(d, StaticFiles[d])))
}
e[d] > 0 && (l.splice(c, 1), --c, --h)
}
l.length || (r.push(u._waiters.splice(o, 1) [0][1]), o--, t--)
}
for (var _ = 0, f = r.length; _ < f; ++_) r[_]()
},
_addCss: function (t, e) {
var r = Object(i.ce) ('style', {
type: 'text/css',
media: 'screen'
}),
n = Object(i.domNS) (e);
return n ? headNode.insertBefore(r, n)  : headNode.appendChild(r),
r.sheet ? r.sheet.insertRule(t, 0)  : r.styleSheet && (r.styleSheet.cssText = t),
r
},
_srcPrefix: function (t, e) {
return - 1 === t.indexOf('.js') && - 1 === t.indexOf('.css') || function (t) {
for (var e = 0; e < vk.stExcludedMasks.length; e++) if ( - 1 !== t.indexOf(vk.stExcludedMasks[e])) return !0;
return !1
}(t) ? '' : 0 === `${c(r = t)
}
${r
}
`.indexOf('cmodules/') && vk.stDomain || '';
var r
},
_add: function (t, e) {
var r = t.replace(/[\/\.]/g, '_'),
n = stVersions[t],
s = t + '?' + n,
o = u._srcPrefix(t, n);
if (StaticFiles[t] = {
v: n,
n: r,
l: 0,
c: 0
}, - 1 !== t.indexOf('.js')) {
var a = '/js/' + c(t);
if (StaticFiles[t].t = 'js', t === l('web/common_web.js')) setTimeout(u.done.bind(u).pbind(l('web/common_web.js')), 0);
 else {
var h = o + a + s;
u._insertNode(h, t),
StaticFiles[t].src = h
}
} else if ( - 1 !== t.indexOf('.css')) {
var d = o + ('/css/' + (vk.css_dir || '') + (stTypes.fromRoot[t] || - 1 !== t.indexOf('/') ? '' : 'al/')) + s;
e && e.l && 'css' === e.t && (StaticFiles[t].styleNode = u._addCss(`#${r
}
 {display: block; }`, u._getOldNode(d))),
u._insertNode(d, t),
StaticFiles[t].t = 'css',
StaticFiles[t].src = d,
Object(i.ge) (r) || utilsNode.appendChild(Object(i.ce) ('div', {
id: r
}))
}
},
_getOldNode: function (t) {
return !!headNode.querySelector && ((t = t.split('?') [0]).match(/\.css$/) ? headNode.querySelector('link[href^="' + t + '"]')  : headNode.querySelector('script[src^="' + t + '"]'))
},
_insertNode: function (t, e) {
var r,
n = t.split('?') [0].match(/\.css$/),
s = u._getOldNode(t);
n && StaticFiles[e] && StaticFiles[e].styleNode ? s = Object(i.domNS) (StaticFiles[e].styleNode)  : s && (s = Object(i.domNS) (s)),
n ? (r = Object(i.ce) ('link', {
type: 'text/css',
rel: 'stylesheet',
href: t
})).onload = function () {
u._removeDuplicateNodes(e)
}
 : r = Object(i.ce) ('script', {
type: 'text/javascript',
src: t
}),
s ? headNode.insertBefore(r, s)  : headNode.appendChild(r)
},
_removeDuplicateNodes: function (t) {
var e = StaticFiles[t];
if (e && e.src) {
var r = e.src.split('?') [0],
n = u._getOldNode(r);
if (n) {
e.styleNode && (Object(i.re) (e.styleNode), delete StaticFiles[t].styleNode);
for (var s = r.match(/\.css$/); n && (n = Object(i.domNS) (n)); ) {
var o = s ? n.href : n.src;
if (!o) break;
if ((o = o.replace(/^(https?:\/\/([a-z0-9\-\.\_]+))?vk\.com/, '')).split('?') [0] !== r) break;
Object(i.re) (Object(i.domPS) (n))
}
}
}
},
add: function (t, e, r) {
var i = [
],
n = document.documentElement;
for (var a in Object(s.isArray) (t) || (t = [
t
]), t) if (t.hasOwnProperty(a)) {
var p = t[a];
if (p) {
- 1 !== p.indexOf('?') && (p = p.split('?') [0]);
var _ = '';
~p.indexOf('.js') && (_ = c(p)),
/^lang\d/i.test(p) ? stVersions[p] = stVersions.lang : stVersions[_ + p] || (stVersions[_ + p] = 1);
var f = '/js/' + _ + p;
window.stDeps && window.stDeps[f] && window.stDeps[f].forEach(t=>{
u.add(t)
}),
(o.browser.opera && 768 == n.clientHeight && 1024 == n.clientWidth || __debugMode) && !o.browser.iphone && !o.browser.ipad && p !== l('web/common_web.js') && 'common.css' !== p && stVersions[p] > 0 && stVersions[p] < 1000000000 && (stVersions[p] += Object(s.irand) (1000000000, 2000000000));
var m = p;
if (h(p)) m = d(p);
 else {
var g = StaticFiles[p];
g && g.v == stVersions[p] || u._add(p, g)
}
!e || StaticFiles[m].l || ~m.indexOf('cmodules/bundles/') || i.push(m)
}
}
if (e) {
if (!i.length) return !0 === r ? setTimeout(e, 0)  : e();
u._waiters.push([i,
e]),
u._waitTimer || (u._waitTimer = setInterval(u._wait, 100))
}
},
done: function (t) {
var e = t;
if (h(t)) e = d(t);
 else if (~t.indexOf('cmodules/internal/') && (!StaticFiles[e] || 1 === StaticFiles[e].l)) {
var r = new RegExp(e.replace(/.js$/, '.[0-9a-f]{20}.js')),
i = !1;
Object.keys(StaticFiles).forEach(t=>{
r.test(t) && !StaticFiles[t].l && (i = t)
}),
i && (e = i)
}
stVersions[t] < 0 && Object(n.topMsg) ('<b>Warning:</b> Something is bad, please <b><a href="/page-777107_43991681">clear your cache</a></b> and restart your browser.', 10),
StaticFiles[e].l = 1,
'js' === StaticFiles[e].t && u._removeDuplicateNodes(e)
}
};
function p() {
Object(s.each) (StaticFiles, (t, e) =>{
e.t = - 1 !== t.indexOf('.css') ? 'css' : 'js',
e.n = t.replace(/[\/\.]/g, '_'),
e.l = 0,
e.c = 0
})
}
function _() {
Object(s.each) (StaticFiles, (t, e) =>{
e.l = 1,
'css' === e.t && utilsNode.appendChild(Object(i.ce) ('div', {
id: e.n
}))
})
}
function f() {
window.jsc = l,
window.stVersions || (window.stVersions = {
}, window.stTypes = {
fromLib: {
},
fromRoot: {
}
}, window.navMap = {
}),
window.StaticFiles || (window.StaticFiles = {
})
}
},
'0mN4': function (t, e, r) {
'use strict';
r('OGtf') ('fixed', function (t) {
return function () {
return t(this, 'tt', '', '')
}
})
},
'1BRX': function (t, e, r) {
'use strict';
function i(t) {
var e = new Date;
return t.getFullYear() === e.getFullYear() && t.getMonth() === e.getMonth() && t.getDate() === e.getDate()
}
function n(t) {
return i(new Date(t.getTime() + 86400000))
}
function s(t) {
return i(new Date(t.getTime() - 86400000))
}
function o(t, e) {
var r = new Date(t),
i = new Date(e);
return r.getFullYear() === i.getFullYear() && r.getMonth() === i.getMonth() && r.getDate() === i.getDate()
}
function a(t) {
return t >= 10 ? t : '0' + t
}
function l(t, e) {
var r;
t = Math.max(t, 0);
var i = Math.floor(t % 60);
r = i < 10 ? '0' + i : i;
var n = (t = Math.floor(t / 60)) % 60;
return r = n + ':' + r,
((t = Math.floor(t / 60)) > 0 || e) && (n < 10 && (r = '0' + r), r = t + ':' + r),
r
}
function c() {
return vk.ts + Math.floor(((new Date).getTime() - vk.started) / 1000)
}
r.r(e),
r.d(e, 'isToday', function () {
return i
}),
r.d(e, 'isYesterday', function () {
return n
}),
r.d(e, 'isTomorrow', function () {
return s
}),
r.d(e, 'isSameDate', function () {
return o
}),
r.d(e, 'leadingZero', function () {
return a
}),
r.d(e, 'formatTime', function () {
return l
}),
r.d(e, 'getServerTime', function () {
return c
})
},
'1MBn': function (t, e, r) {
var i = r('DVgA'),
n = r('JiEa'),
s = r('UqcF');
t.exports = function (t) {
var e = i(t),
r = n.f;
if (r) for (var o, a = r(t), l = s.f, c = 0; a.length > c; ) l.call(t, o = a[c++]) && e.push(o);
return e
}
},
'1TsA': function (t, e) {
t.exports = function (t, e) {
return {
value: e,
done: !!t
}
}
},
'2OiF': function (t, e) {
t.exports = function (t) {
if ('function' != typeof t) throw TypeError(t + ' is not a function!');
return t
}
},
'3Lyj': function (t, e, r) {
var i = r('KroJ');
t.exports = function (t, e, r) {
for (var n in e) i(t, n, e[n], r);
return t
}
},
'4+be': function (t, e, r) {
'use strict';
r.r(e),
r.d(e, 'parseLatin', function () {
return o
}),
r.d(e, 'parseCyr', function () {
return a
}),
r.d(e, 'parseLatKeys', function () {
return l
}),
r.d(e, 'langNumeric', function () {
return c
}),
r.d(e, 'langSex', function () {
return h
}),
r.d(e, 'langStr', function () {
return d
}),
r.d(e, 'addLangKeys', function () {
return u
}),
r.d(e, 'getLang', function () {
return p
}),
r.d(e, 'langDate', function () {
return _
}),
r.d(e, 'getShortDate', function () {
return f
}),
r.d(e, 'getShortDateOrTime', function () {
return m
}),
r.d(e, 'langWordNumeric', function () {
return g
}),
r.d(e, 'getDateText', function () {
return v
}),
r.d(e, 'getBigDateNew', function () {
return b
}),
r.d(e, 'getSmDate', function () {
return y
});
r('HEwt'),
r('pIFo'),
r('a1Th'),
r('Btvt'),
r('KKXr');
var i = r('1BRX'),
n = r('t7n3'),
s = r('98sY');
function o(t) {
for (var e = [
'yo',
'zh',
'kh',
'ts',
'ch',
'sch',
'shch',
'sh',
'eh',
'yu',
'ya',
'YO',
'ZH',
'KH',
'TS',
'CH',
'SCH',
'SHCH',
'SH',
'EH',
'YU',
'YA',
'\''
], r = [
'ё',
'ж',
'х',
'ц',
'ч',
'щ',
'щ',
'ш',
'э',
'ю',
'я',
'Ё',
'Ж',
'Х',
'Ц',
'Ч',
'Щ',
'Щ',
'Ш',
'Э',
'Ю',
'Я',
'ь'
], i = t, n = 0, s = e.length; n < s; n++) i = i.split(e[n]).join(r[n]);
for (var o = 'abvgdezijklmnoprstufhcyABVGDEZIJKLMNOPRSTUFHCYёЁ', a = 0, l = o.length; a < l; a++) i = i.split(o.charAt(a)).join('абвгдезийклмнопрстуфхцыАБВГДЕЗИЙКЛМНОПРСТУФХЦЫеЕ'.charAt(a));
return i === t ? null : i
}
function a(t) {
for (var e = [
'yo',
'zh',
'kh',
'ts',
'ch',
'sch',
'shch',
'sh',
'eh',
'yu',
'ya',
'YO',
'ZH',
'KH',
'TS',
'CH',
'SCH',
'SHCH',
'SH',
'EH',
'YU',
'YA',
'\''
], r = [
'ё',
'ж',
'х',
'ц',
'ч',
'щ',
'щ',
'ш',
'э',
'ю',
'я',
'Ё',
'Ж',
'Х',
'Ц',
'Ч',
'Щ',
'Щ',
'Ш',
'Э',
'Ю',
'Я',
'ь'
], i = 'абвгдезийклмнопрстуфхцыАБВГДЕЗИЙКЛМНОПРСТУФХЦЫеЕ', n = t, s = 0; s < r.length; s++) n = n.split(r[s]).join(e[s]);
for (var o = 0; o < i.length; o++) n = n.split(i.charAt(o)).join('abvgdezijklmnoprstufhcyABVGDEZIJKLMNOPRSTUFHCYёЁ'.charAt(o));
return n === t ? null : n
}
function l(t) {
for (var e = 'qwertyuiop[]asdfghjkl;\'zxcvbnm,./`', r = t, i = 0; i < e.length; i++) r = r.split(e.charAt(i)).join('йцукенгшщзхъфывапролджэячсмитьбю.ё'.charAt(i));
return r == t ? null : r
}
function c(t, e, r) {
if (!e || !window.langConfig) return t;
var i;
if (Object(n.isArray) (e) ? (i = e[1], t != Math.floor(t) ? i = e[langConfig.numRules.float] : Object(n.each) (langConfig.numRules.int, function (r, s) {
if ('*' == s[0]) return i = e[s[2]],
!1;
var o = s[0] ? t % s[0] : t;
return - 1 != Object(n.indexOf) (s[1], o) ? (i = e[s[2]], !1)  : void 0
}))  : i = e, r) {
for (var s = t.toString().split('.'), o = [
], a = s[0].length - 3; a > - 3; a -= 3) o.unshift(s[0].slice(a > 0 ? a : 0, a + 3));
s[0] = o.join(langConfig.numDel),
t = s.join(langConfig.numDec)
}
return i = (i || '%s').replace('%s', t)
}
function h(t, e) {
if (!Object(n.isArray) (e)) return e;
var r = e[1];
return window.langConfig ? (Object(n.each) (langConfig.sexRules, function (i, n) {
return '*' == n[0] ? (r = e[n[1]], !1)  : t == n[0] && e[n[1]] ? (r = e[n[1]], !1)  : void 0
}), r)  : r
}
function d(t) {
for (var e = arguments, r = e.length, i = t + '', n = 1; n < r; n += 2) {
var s = '%' === e[n][0] ? e[n] : '{' + e[n] + '}';
i = i.replace(s, e[n + 1])
}
return i
}
function u(t, e) {
var r = e ? window : window.cur;
r.lang ? Object(n.extend) (r.lang, t)  : r.lang = t
}
function p() {
try {
var t = Array.from(arguments),
e = t.shift();
if (!e) return '...';
var r = window.cur.lang && window.cur.lang[e] || window.lang && window.lang[e] || window.langpack && window.langpack[e] || window[e];
if (!r) {
var i = e.split('_');
return i.shift(),
i.join(' ')
}
return Object(n.isFunction) (r) ? r.apply(null, t)  : void 0 === t[0] && !Object(n.isArray) (r) || 'raw' === t[0] ? r : c(t[0], r, t[1])
} catch (t) {
Object(s.debugLog) ('lang error:' + t.message + '(' + Array.from(arguments).join(', ') + ')')
}
}
function _(t, e, r, s, o, a) {
var l;
if (a || (a = ''), Object(n.isArray) (e) || (e = [
'',
e,
e,
e,
e
]), 'number' == typeof t || 'string' == typeof t ? (t > 2147483646000 && (t = 0), t += r, l = new Date(t))  : l = t, o) e = e[1];
 else {
var c = '';
!(c = Object(i.isToday) (l) ? e[3] : Object(i.isYesterday) (l) ? e[2] : Object(i.isTomorrow) (l) ? e[4] : e[1]) && e[1] && (c = e[1]),
e = c
}
var h = {
hours: l.getHours(),
minutes: l.getMinutes(),
seconds: l.getSeconds(),
day: l.getDate(),
month: l.getMonth() + 1,
year: l.getFullYear()
},
d = '';
switch (3 === vk.lang && (d = l.getHours() > 11 ? 'pm' : 'am', h.hours = l.getHours() % 12 == 0 ? 12 : l.getHours() % 12), vk.lang) {
case 1:
switch (l.getHours()) {
case 11:
e = e.replace(' о ', ' об ');
break;
case 0:
e = e.replace(' о ', ' в ')
}
break;
case 3:
!Object(i.isToday) (l) || Object(i.isYesterday) (l) || Object(i.isTomorrow) (l) || (e = a + e);
break;
case 12:
case 73:
1 == l.getHours() && (e = e.replace(' &#224;s ', ' &#224; '))
}
return 68 === vk.lang && (h.year = h.year + 543),
e.replace('{hour}', h.hours).replace('{num_hour}', Object(i.leadingZero) (h.hours)).replace('{minute}', Object(i.leadingZero) (h.minutes)).replace('{day}', h.day).replace('{num_day}', Object(i.leadingZero) (h.day)).replace('{month}', s[h.month]).replace('{year}', h.year).replace('{short_year}', h.year % 100).replace('{second}', Object(i.leadingZero) (h.seconds)).replace('{am_pm}', d)
}
function f(t, e, r, i, n) {
t *= 1000,
void 0 === r && (r = !0),
void 0 === i && (i = p('months_of', 'raw')),
e *= 1000;
var s = Date.now(),
o = new Date(s),
a = new Date(t + e);
return !n && t > s && t - s < 86400000 && o.getDate() === a.getDate() ? _(t, '{hour}:{minute} {am_pm}', e, [
], !r)  : a.getYear() !== o.getYear() || t < s - 15724800000 ? _(t, p('global_date', 'raw'), e, i, !r)  : _(t, p('global_short_date', 'raw'), e, i, !r)
}
function m(t, e, r, n) {
return Object(i.isToday) (new Date(1000 * t + 1000 * e)) ? _(1000 * t, '{hour}:{minute} {am_pm}', 1000 * e, [
], !r)  : f(t, e, r, n)
}
function g(t, e, r) {
return Object(n.isArray) (e) && t < e.length ? e[t] : c(t, r)
}
function v(t, e) {
t += e;
var r = parseInt(Date.now() / 1000) - t,
i = '';
if (r < 60) i = p('global_just_now');
 else if (r < 3600) {
i = g(Object(n.intval) (r / 60), p('global_word_mins_ago', 'raw'), p('global_mins_ago', 'raw'))
} else if (r < 14400) {
i = g(Object(n.intval) (r / 3600), p('global_word_hours_ago', 'raw'), p('global_hours_ago', 'raw'))
} else i = b(t, 0, !0, '_l');
return i
}
function b(t, e, r, i) {
void 0 === r && (r = !0),
void 0 === e && (e = 0),
void 0 === i && (i = ''),
e *= 1000;
var n = new Date(1000 * t),
s = new Date;
return n.getFullYear() !== s.getFullYear() && n.getTime() < s.getTime() - 172800000 || Math.abs(n.getTime() - s.getTime()) > 15724800000 ? _(1000 * t, p('global_date', 'raw'), e, p('months_sm_of'), !r)  : _(1000 * t, p('global_short_date_time' + i, 'raw'), e, p('months_sm_of'), !r)
}
function y(t, e, r) {
void 0 === r && (r = !0),
void 0 === e && (e = 0);
var i = new Date,
n = i.getFullYear(),
s = i.getMonth(),
o = new Date(1000 * t),
a = o.getFullYear(),
l = o.getMonth();
return _(1000 * t, p(a < n && (s > 1 || l < 9 || n - a >= 2) ? 'global_date' : 'global_short_date_time', 'raw'), e, p('months_sm_of', 'raw'), !r)
}
},
'4O8T': function (t, e, r) {
var i;
!function (e) {
'use strict';
function n() {
}
var s = n.prototype,
o = e.EventEmitter;
function a(t, e) {
for (var r = t.length; r--; ) if (t[r].listener === e) return r;
return - 1
}
function l(t) {
return function () {
return this[t].apply(this, arguments)
}
}
s.getListeners = function (t) {
var e,
r,
i = this._getEvents();
if (t instanceof RegExp) for (r in e = {
}, i) i.hasOwnProperty(r) && t.test(r) && (e[r] = i[r]);
 else e = i[t] || (i[t] = [
]);
return e
},
s.flattenListeners = function (t) {
var e,
r = [
];
for (e = 0; e < t.length; e += 1) r.push(t[e].listener);
return r
},
s.getListenersAsObject = function (t) {
var e,
r = this.getListeners(t);
return r instanceof Array && ((e = {
}) [t] = r),
e || r
},
s.addListener = function (t, e) {
if (!function t(e) {
return 'function' == typeof e || e instanceof RegExp || !(!e || 'object' != typeof e) && t(e.listener)
}(e)) throw new TypeError('listener must be a function');
var r,
i = this.getListenersAsObject(t),
n = 'object' == typeof e;
for (r in i) i.hasOwnProperty(r) && - 1 === a(i[r], e) && i[r].push(n ? e : {
listener: e,
once: !1
});
return this
},
s.on = l('addListener'),
s.addOnceListener = function (t, e) {
return this.addListener(t, {
listener: e,
once: !0
})
},
s.once = l('addOnceListener'),
s.defineEvent = function (t) {
return this.getListeners(t),
this
},
s.defineEvents = function (t) {
for (var e = 0; e < t.length; e += 1) this.defineEvent(t[e]);
return this
},
s.removeListener = function (t, e) {
var r,
i,
n = this.getListenersAsObject(t);
for (i in n) n.hasOwnProperty(i) && - 1 !== (r = a(n[i], e)) && n[i].splice(r, 1);
return this
},
s.off = l('removeListener'),
s.addListeners = function (t, e) {
return this.manipulateListeners(!1, t, e)
},
s.removeListeners = function (t, e) {
return this.manipulateListeners(!0, t, e)
},
s.manipulateListeners = function (t, e, r) {
var i,
n,
s = t ? this.removeListener : this.addListener,
o = t ? this.removeListeners : this.addListeners;
if ('object' != typeof e || e instanceof RegExp) for (i = r.length; i--; ) s.call(this, e, r[i]);
 else for (i in e) e.hasOwnProperty(i) && (n = e[i]) && ('function' == typeof n ? s.call(this, i, n)  : o.call(this, i, n));
return this
},
s.removeEvent = function (t) {
var e,
r = typeof t,
i = this._getEvents();
if ('string' === r) delete i[t];
 else if (t instanceof RegExp) for (e in i) i.hasOwnProperty(e) && t.test(e) && delete i[e];
 else delete this._events;
return this
},
s.removeAllListeners = l('removeEvent'),
s.emitEvent = function (t, e) {
var r,
i,
n,
s,
o = this.getListenersAsObject(t);
for (s in o) if (o.hasOwnProperty(s)) for (r = o[s].slice(0), n = 0; n < r.length; n++) !0 === (i = r[n]).once && this.removeListener(t, i.listener),
i.listener.apply(this, e || [
]) === this._getOnceReturnValue() && this.removeListener(t, i.listener);
return this
},
s.trigger = l('emitEvent'),
s.emit = function (t) {
var e = Array.prototype.slice.call(arguments, 1);
return this.emitEvent(t, e)
},
s.setOnceReturnValue = function (t) {
return this._onceReturnValue = t,
this
},
s._getOnceReturnValue = function () {
return !this.hasOwnProperty('_onceReturnValue') || this._onceReturnValue
},
s._getEvents = function () {
return this._events || (this._events = {
})
},
n.noConflict = function () {
return e.EventEmitter = o,
n
},
void 0 === (i = function () {
return n
}.call(e, r, e, t)) || (t.exports = i)
}('undefined' != typeof window ? window : this || {
})
},
'4R4u': function (t, e) {
t.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',')
},
'4fRq': function (t, e) {
var r = 'undefined' != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || 'undefined' != typeof msCrypto && 'function' == typeof window.msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto);
if (r) {
var i = new Uint8Array(16);
t.exports = function () {
return r(i),
i
}
} else {
var n = new Array(16);
t.exports = function () {
for (var t, e = 0; e < 16; e++) 0 == (3 & e) && (t = 4294967296 * Math.random()),
n[e] = t >>> ((3 & e) << 3) & 255;
return n
}
}
},
'69bn': function (t, e, r) {
var i = r('y3w9'),
n = r('2OiF'),
s = r('K0xU') ('species');
t.exports = function (t, e) {
var r,
o = i(t).constructor;
return void 0 === o || null == (r = i(o) [s]) ? e : n(r)
}
},
'6FMO': function (t, e, r) {
var i = r('0/R4'),
n = r('EWmC'),
s = r('K0xU') ('species');
t.exports = function (t) {
var e;
return n(t) && ('function' != typeof (e = t.constructor) || e !== Array && !n(e.prototype) || (e = void 0), i(e) && null === (e = e[s]) && (e = void 0)),
void 0 === e ? Array : e
}
},
'6ng+': function (t, e, r) {
'use strict';
r.r(e),
r.d(e, 'AudioStats', function () {
return V
});
r('91GP'),
r('rE2o'),
r('ioFf'),
r('rGqo'),
r('KKXr');
var i = r('XLUH'),
n = r('BJj/');
function s() {
return (s = Object.assign || function (t) {
for (var e = 1; e < arguments.length; e++) {
var r = arguments[e];
for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i])
}
return t
}).apply(this, arguments)
}
function o(t, e) {
return function (t) {
if (Array.isArray(t)) return t
}(t) || function (t, e) {
var r = [
],
i = !0,
n = !1,
s = void 0;
try {
for (var o, a = t[Symbol.iterator](); !(i = (o = a.next()).done) && (r.push(o.value), !e || r.length !== e); i = !0);
} catch (t) {
n = !0,
s = t
} finally {
try {
i || null == a.return || a.return ()
} finally {
if (n) throw s
}
}
return r
}(t, e) || function () {
throw new TypeError('Invalid attempt to destructure non-iterable instance')
}()
}
var a = 'start',
l = 'stop',
c = 'volume',
h = 'rewind',
d = 'play_further',
u = 'default',
p = 'next_track',
_ = 'prev_track',
f = 'auto',
m = 'interruption',
g = 'pause',
v = 'new',
b = 'close_app',
y = 'queue',
E = 'pause',
w = 'next_btn',
O = 'prev',
P = 'playlist_change',
C = 'playlist_next',
x = 'stop_btn',
A = 'session_end',
M = 'new',
D = {
[
a
]: 1,
[
l
]: 2,
[
c
]: 3,
[
h
]: 4,
[
d
]: 5
},
k = {
[
u
]: 1,
[
p
]: 2,
[
_
]: 3,
[
f
]: 4,
[
m
]: 5,
[
g
]: 6,
[
v
]: 7,
[
b
]: 8,
[
y
]: 9,
[
E
]: 10
},
T = 'other',
j = 0,
S = 1,
I = 2,
L = 10000,
B = 1000,
R = 150,
F = 300,
N = 150,
W = 1;
class V{
constructor(t) {
this.playerAdapter = t,
this.listenedData = null,
this.sendTimeout = null,
this.currentAudioId = null,
this.currentAudioTrackCode = null,
this.pausedAudioId = null,
this.playlistChanged = !1,
this.currentPosition = 0,
this.currentListened = 0,
this.playedTime = 0,
this.adsCompleted = !1,
this.wasEnded = !1,
this.debug = t.isDebug(),
this.onVolume = Object(n.debounce) (this.onVolume.bind(this), F),
this.playerAdapter.listenPlay(this.onPlay, this),
this.playerAdapter.listenPause(this.onPause, this),
this.playerAdapter.listenProgress(this.onProgress, this),
this.playerAdapter.listenVolume(this.onVolume, this),
this.playerAdapter.listenSeek(this.onSeek, this),
this.playerAdapter.listenPlaylistChanged(this.onPlaylistChanged, this),
this.playerAdapter.listenEnded(this.onEnded, this),
this.playerAdapter.listenPlayNext(this.onPlayNext, this),
this.playerAdapter.listenAdCompleted(this.onAdCompleted, this),
this.onPageClose = this.onPageClose.bind(this),
addEvent(window, 'beforeunload', this.onPageClose)
}
canOperate() {
return !this.playerAdapter.isPodcast() && !this.playerAdapter.isAdPlaying() && this.playerAdapter.useNewStats()
}
getCurrentAudioParams() {
var t = this.currentAudioId || this.playerAdapter.getAudioId();
if (t) {
var e = o(t.split('_'), 2);
return {
ownerId: e[0],
audioId: e[1],
trackCode: this.currentAudioTrackCode || this.playerAdapter.getAudioTrackCode()
}
}
return {
}
}
getEnvParams() {
return {
state: this.playerAdapter.getState(),
context: this.playerAdapter.getContext(),
ref: window.cur && vk.widget ? String(cur.widgetReferrer || '').substring(0, 20)  : ''
}
}
getListenedTime() {
return Math.round(this.playerAdapter.getListenedTime()) || 0
}
getPlaySubtype() {
if (this.playerAdapter.isAutoPlayed()) return f;
var t = this.playerAdapter.getSequence();
if (t) return t > 0 ? p : _;
var e = this.pausedAudioId,
r = this.playerAdapter.getAudioId();
return e && r === e ? g : v
}
onPlay() {
if (this.canOperate()) {
var t = this.playerAdapter.getAudioId(),
e = this.currentAudioId === t,
r = this.playerAdapter.getListenedTime();
e || this.onTrackSwitch(this.currentAudioId, this.currentAudioTrackCode, this.currentPlaylistId, t),
this.playedTime = vkNow(),
this.currentAudioId = t,
this.currentAudioTrackCode = this.playerAdapter.getAudioTrackCode(),
this.currentPlaylistId = this.playerAdapter.getPlaylistId(),
this.wasEnded || this.playerAdapter.hasPrevAudio() && (!this.pausedAudioId || this.playerAdapter.isAutoPlayed()) ? (this.currentPosition = 0, r = 0)  : this.currentPosition = this.playerAdapter.getProgressInSeconds(),
this.currentListened = r,
this.sendCurrentAudioEvent({
type: a,
subtype: this.getPlaySubtype(),
position: this.currentPosition,
listened: r
}),
this.pausedAudioId = null,
this.playlistChanged = !1,
this.wasEnded = !1
}
}
onPause() {
this.canOperate() && (this.pausedAudioId = this.playerAdapter.getAudioId(), this.collectListenedData(), this.sendListenedDataDelayed(B), setTimeout(() =>{
if (!(vkNow() - this.playedTime < N)) {
var t = this.playerAdapter.getPausedBy(this.playedTime);
this.sendCurrentAudioEvent({
type: l,
subtype: t ? t === y ? y : m : E
})
}
}))
}
onProgress() {
this.currentPosition = this.playerAdapter.getProgressInSeconds(),
this.currentListened = this.playerAdapter.getListenedTime(),
!this.pausedAudioId && vkNow() - this.playedTime > N && this.collectListenedData(),
this.adsCompleted && (this.sendCurrentAudioEvent({
type: a,
subtype: this.getPlaySubtype(),
position: this.currentPosition
}), this.adsCompleted = !1)
}
onVolume() {
this.canOperate() && this.sendCurrentAudioEvent({
type: c,
subtype: u
})
}
onSeek() {
if (this.canOperate()) {
var t = {
position: this.currentPosition,
positionTo: this.playerAdapter.getProgressInSeconds()
};
t.position !== t.positionTo && this.sendCurrentAudioEvent(s({
type: h,
subtype: u
}, t))
}
}
onPlaylistChanged() {
this.canOperate() && (this.playlistChanged = !0)
}
onEnded() {
this.listenedData && this.playerAdapter.isLastTrack() && (this.listenedData.end_stream_reason = A),
this.wasEnded = !0,
this.playerAdapter.isRepeatCurrentAudio() ? (this.sendCurrentAudioEvent({
type: l,
subtype: f
}), this.collectListenedData(), this.sendListenedData())  : this.sendListenedDataDelayed(R)
}
onPlayNext(t, e) {
if (this.canOperate()) {
var r = o(e.split('_'), 2),
i = r[0],
n = r[1];
this.sendAudioEvent({
type: d,
subtype: u,
ownerId: i,
audioId: n
})
}
}
onAdCompleted() {
this.playerAdapter.useNewStats() && (this.adsCompleted = !0)
}
onTrackSwitch(t, e, r) {
if (t) {
var i = v,
n = this.playerAdapter.getSequence(),
s = o(t.split('_'), 2),
a = s[0],
c = s[1];
this.playerAdapter.isAutoPlayed() ? i = f : n && (i = n > 0 ? p : _),
this.sendCurrentAudioEvent({
type: l,
subtype: i,
position: this.currentPosition,
listened: this.currentListened,
trackCode: e,
playlistId: r,
ownerId: a,
audioId: c
})
}
this.wasEnded = !0,
this.collectListenedDataSwitch(),
this.sendListenedData()
}
onPageClose() {
this.playerAdapter.isPlaying() && (this.sendCurrentAudioEvent({
type: l,
subtype: b
}), this.sendListenedData())
}
collectListenedDataSwitch() {
if (this.listenedData) {
if (this.listenedData.end_stream_reason === A) return;
var t = this.playerAdapter.isAutoPlayed(),
e = this.getListenedTime(),
r = this.playerAdapter.getSequence(),
i = null;
r && !t ? i = r > 0 ? w : O : this.playlistChanged && (i = P),
!i && t && (i = C),
this.listenedData.end_stream_reason = i || M,
e && (this.listenedData.listened = e)
}
}
collectListenedData() {
if (this.canOperate()) {
var t = this.playerAdapter.getAudioId(),
e = this.playerAdapter.getAudioTrackCode(),
r = this.getListenedTime();
if (r) {
var i = {
audio_id: t,
listened: r,
context: this.playerAdapter.getContext()
};
window.cur && vk.widget && (i.ref = cur.widgetReferrer || ''),
this.playerAdapter.hasSearchParams() && (i.search_params = JSON.stringify(this.playerAdapter.getSearchParams())),
this.playerAdapter.hasPlaylist() && (this.playerAdapter.isRealPlaylist() && (i.playlist_id = this.playerAdapter.getPlaylistId()), this.playerAdapter.isShuffledPlaylist() && (i.shuffled = 1)),
e && (i.track_code = e),
this.playerAdapter.isRepeatCurrentAudio() ? i.repeat = 'one' : this.playerAdapter.isRepeatAll() && (i.repeat = 'all'),
this.playerAdapter.isAutoPlayed() && (i.auto = 1),
this.playerAdapter.hasPrevAudio() && (i.prev_audio_id = this.playerAdapter.getPrevAudioId()),
this.playerAdapter.hasPrevPlaylist() && this.playerAdapter.isRealPrevPlaylist() && (i.prev_playlist_id = this.playerAdapter.getPrevPlaylistId()),
this.playerAdapter.isPlaying() || (i.end_stream_reason = x),
i.state = document.hidden ? 'background' : 'app',
this.listenedData = i,
this.sendListenedDataDelayed(L)
}
}
}
sendListenedData() {
clearTimeout(this.sendTimeout);
var t = this.listenedData;
this.listenedData = null,
t && t.listened && this.playerAdapter.sendListenedData(t)
}
sendListenedDataDelayed() {
var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
clearTimeout(this.sendTimeout),
this.sendTimeout = setTimeout(() =>this.sendListenedData(), t)
}
serializeEvent(t) {
var e = [
D[t.type],
k[t.subtype],
W
];
return t.audioId ? e.push(t.ownerId + '_' + t.audioId)  : e.push(0),
t.trackCode ? e.push(t.trackCode)  : e.push(0),
t.state ? e.push(t.state)  : e.push(i.UNKNOWN_STATE),
t.ref ? e.push(t.ref)  : e.push(''),
t.context ? e.push(t.context)  : e.push(T),
t.volume || 0 === t.volume ? e.push(t.volume)  : e.push(this.playerAdapter.getVolume()),
t.position || 0 === t.position ? e.push(t.position)  : e.push(this.playerAdapter.getProgressInSeconds()),
t.shuffle ? e.push(t.shuffle ? 1 : 0)  : e.push(0),
t.repeat ? e.push(t.repeat)  : e.push(0),
t.listened ? e.push(Math.max(t.listened, 0))  : e.push(0),
t.playlistId ? e.push(t.playlistId)  : e.push(0),
t.positionTo && e.push(t.positionTo),
e
}
sendEvent(t) {
this.debug && (console.log('audio stats event', t.type, t.subtype, t), window._statForTest || (window._statForTest = [
]), window._statForTest.push(t)),
statlogsValueEvent('audio_sts', ...this.serializeEvent(t))
}
sendCurrentAudioEvent(t) {
this.sendEvent(s({
shuffle: this.playerAdapter.isShuffledPlaylist(),
repeat: this.playerAdapter.isRepeatCurrentAudio() ? S : this.playerAdapter.isRepeatAll() ? I : j,
volume: this.playerAdapter.getVolume(),
position: this.playerAdapter.getProgressInSeconds(),
listened: this.getListenedTime(),
playlistId: this.playerAdapter.getPlaylistId()
}, this.getEnvParams(), this.getCurrentAudioParams(), t))
}
sendAudioEvent(t) {
this.sendEvent(s({
}, t, this.getEnvParams()))
}
destroy() {
this.playerAdapter.unListenAll(),
removeEvent(window, 'beforeunload', this.onPageClose),
this.playerAdapter = null,
this.listenedData = null,
clearTimeout(this.sendTimeout)
}
}
},
'7DDg': function (t, e, r) {
'use strict';
if (r('nh4g')) {
var i = r('LQAc'),
n = r('dyZX'),
s = r('eeVq'),
o = r('XKFU'),
a = r('D4iV'),
l = r('7Qtz'),
c = r('m0Pp'),
h = r('9gX7'),
d = r('RjD/'),
u = r('Mukb'),
p = r('3Lyj'),
_ = r('RYi7'),
f = r('ne8i'),
m = r('Cfrj'),
g = r('d/Gc'),
v = r('apmT'),
b = r('aagx'),
y = r('I8a+'),
E = r('0/R4'),
w = r('S/j/'),
O = r('M6Qj'),
P = r('Kuth'),
C = r('OP3Y'),
x = r('kJMx').f,
A = r('J+6e'),
M = r('ylqs'),
D = r('K0xU'),
k = r('CkkT'),
T = r('w2a5'),
j = r('69bn'),
S = r('yt8O'),
I = r('hPIQ'),
L = r('XMVh'),
B = r('elZq'),
R = r('Nr18'),
F = r('upKx'),
N = r('hswa'),
W = r('EemH'),
V = N.f,
U = W.f,
K = n.RangeError,
H = n.TypeError,
z = n.Uint8Array,
G = Array.prototype,
q = l.ArrayBuffer,
X = l.DataView,
Y = k(0),
$ = k(2),
Q = k(3),
Z = k(4),
J = k(5),
tt = k(6),
et = T(!0),
rt = T(!1),
it = S.values,
nt = S.keys,
st = S.entries,
ot = G.lastIndexOf,
at = G.reduce,
lt = G.reduceRight,
ct = G.join,
ht = G.sort,
dt = G.slice,
ut = G.toString,
pt = G.toLocaleString,
_t = D('iterator'),
ft = D('toStringTag'),
mt = M('typed_constructor'),
gt = M('def_constructor'),
vt = a.CONSTR,
bt = a.TYPED,
yt = a.VIEW,
Et = k(1, function (t, e) {
return xt(j(t, t[gt]), e)
}),
wt = s(function () {
return 1 === new z(new Uint16Array([1]).buffer) [0]
}),
Ot = !!z && !!z.prototype.set && s(function () {
new z(1).set({
})
}),
Pt = function (t, e) {
var r = _(t);
if (r < 0 || r % e) throw K('Wrong offset!');
return r
},
Ct = function (t) {
if (E(t) && bt in t) return t;
throw H(t + ' is not a typed array!')
},
xt = function (t, e) {
if (!(E(t) && mt in t)) throw H('It is not a typed array constructor!');
return new t(e)
},
At = function (t, e) {
return Mt(j(t, t[gt]), e)
},
Mt = function (t, e) {
for (var r = 0, i = e.length, n = xt(t, i); i > r; ) n[r] = e[r++];
return n
},
Dt = function (t, e, r) {
V(t, e, {
get: function () {
return this._d[r]
}
})
},
kt = function (t) {
var e,
r,
i,
n,
s,
o,
a = w(t),
l = arguments.length,
h = l > 1 ? arguments[1] : void 0,
d = void 0 !== h,
u = A(a);
if (null != u && !O(u)) {
for (o = u.call(a), i = [
], e = 0; !(s = o.next()).done; e++) i.push(s.value);
a = i
}
for (d && l > 2 && (h = c(h, arguments[2], 2)), e = 0, r = f(a.length), n = xt(this, r); r > e; e++) n[e] = d ? h(a[e], e)  : a[e];
return n
},
Tt = function () {
for (var t = 0, e = arguments.length, r = xt(this, e); e > t; ) r[t] = arguments[t++];
return r
},
jt = !!z && s(function () {
pt.call(new z(1))
}),
St = function () {
return pt.apply(jt ? dt.call(Ct(this))  : Ct(this), arguments)
},
It = {
copyWithin: function (t, e) {
return F.call(Ct(this), t, e, arguments.length > 2 ? arguments[2] : void 0)
},
every: function (t) {
return Z(Ct(this), t, arguments.length > 1 ? arguments[1] : void 0)
},
fill: function (t) {
return R.apply(Ct(this), arguments)
},
filter: function (t) {
return At(this, $(Ct(this), t, arguments.length > 1 ? arguments[1] : void 0))
},
find: function (t) {
return J(Ct(this), t, arguments.length > 1 ? arguments[1] : void 0)
},
findIndex: function (t) {
return tt(Ct(this), t, arguments.length > 1 ? arguments[1] : void 0)
},
forEach: function (t) {
Y(Ct(this), t, arguments.length > 1 ? arguments[1] : void 0)
},
indexOf: function (t) {
return rt(Ct(this), t, arguments.length > 1 ? arguments[1] : void 0)
},
includes: function (t) {
return et(Ct(this), t, arguments.length > 1 ? arguments[1] : void 0)
},
join: function (t) {
return ct.apply(Ct(this), arguments)
},
lastIndexOf: function (t) {
return ot.apply(Ct(this), arguments)
},
map: function (t) {
return Et(Ct(this), t, arguments.length > 1 ? arguments[1] : void 0)
},
reduce: function (t) {
return at.apply(Ct(this), arguments)
},
reduceRight: function (t) {
return lt.apply(Ct(this), arguments)
},
reverse: function () {
for (var t, e = Ct(this).length, r = Math.floor(e / 2), i = 0; i < r; ) t = this[i],
this[i++] = this[--e],
this[e] = t;
return this
},
some: function (t) {
return Q(Ct(this), t, arguments.length > 1 ? arguments[1] : void 0)
},
sort: function (t) {
return ht.call(Ct(this), t)
},
subarray: function (t, e) {
var r = Ct(this),
i = r.length,
n = g(t, i);
return new (j(r, r[gt])) (r.buffer, r.byteOffset + n * r.BYTES_PER_ELEMENT, f((void 0 === e ? i : g(e, i)) - n))
}
},
Lt = function (t, e) {
return At(this, dt.call(Ct(this), t, e))
},
Bt = function (t) {
Ct(this);
var e = Pt(arguments[1], 1),
r = this.length,
i = w(t),
n = f(i.length),
s = 0;
if (n + e > r) throw K('Wrong length!');
for (; s < n; ) this[e + s] = i[s++]
},
Rt = {
entries: function () {
return st.call(Ct(this))
},
keys: function () {
return nt.call(Ct(this))
},
values: function () {
return it.call(Ct(this))
}
},
Ft = function (t, e) {
return E(t) && t[bt] && 'symbol' != typeof e && e in t && String( + e) == String(e)
},
Nt = function (t, e) {
return Ft(t, e = v(e, !0)) ? d(2, t[e])  : U(t, e)
},
Wt = function (t, e, r) {
return !(Ft(t, e = v(e, !0)) && E(r) && b(r, 'value')) || b(r, 'get') || b(r, 'set') || r.configurable || b(r, 'writable') && !r.writable || b(r, 'enumerable') && !r.enumerable ? V(t, e, r)  : (t[e] = r.value, t)
};
vt || (W.f = Nt, N.f = Wt),
o(o.S + o.F * !vt, 'Object', {
getOwnPropertyDescriptor: Nt,
defineProperty: Wt
}),
s(function () {
ut.call({
})
}) && (ut = pt = function () {
return ct.call(this)
});
var Vt = p({
}, It);
p(Vt, Rt),
u(Vt, _t, Rt.values),
p(Vt, {
slice: Lt,
set: Bt,
constructor: function () {
},
toString: ut,
toLocaleString: St
}),
Dt(Vt, 'buffer', 'b'),
Dt(Vt, 'byteOffset', 'o'),
Dt(Vt, 'byteLength', 'l'),
Dt(Vt, 'length', 'e'),
V(Vt, ft, {
get: function () {
return this[bt]
}
}),
t.exports = function (t, e, r, l) {
var c = t + ((l = !!l) ? 'Clamped' : '') + 'Array',
d = 'get' + t,
p = 'set' + t,
_ = n[c],
g = _ || {
},
v = _ && C(_),
b = !_ || !a.ABV,
w = {
},
O = _ && _.prototype,
A = function (t, r) {
V(t, r, {
get: function () {
return function (t, r) {
var i = t._d;
return i.v[d](r * e + i.o, wt)
}(this, r)
},
set: function (t) {
return function (t, r, i) {
var n = t._d;
l && (i = (i = Math.round(i)) < 0 ? 0 : i > 255 ? 255 : 255 & i),
n.v[p](r * e + n.o, i, wt)
}(this, r, t)
},
enumerable: !0
})
};
b ? (_ = r(function (t, r, i, n) {
h(t, _, c, '_d');
var s,
o,
a,
l,
d = 0,
p = 0;
if (E(r)) {
if (!(r instanceof q || 'ArrayBuffer' == (l = y(r)) || 'SharedArrayBuffer' == l)) return bt in r ? Mt(_, r)  : kt.call(_, r);
s = r,
p = Pt(i, e);
var g = r.byteLength;
if (void 0 === n) {
if (g % e) throw K('Wrong length!');
if ((o = g - p) < 0) throw K('Wrong length!')
} else if ((o = f(n) * e) + p > g) throw K('Wrong length!');
a = o / e
} else a = m(r),
s = new q(o = a * e);
for (u(t, '_d', {
b: s,
o: p,
l: o,
e: a,
v: new X(s)
}); d < a; ) A(t, d++)
}), O = _.prototype = P(Vt), u(O, 'constructor', _))  : s(function () {
_(1)
}) && s(function () {
new _( - 1)
}) && L(function (t) {
new _,
new _(null),
new _(1.5),
new _(t)
}, !0) || (_ = r(function (t, r, i, n) {
var s;
return h(t, _, c),
E(r) ? r instanceof q || 'ArrayBuffer' == (s = y(r)) || 'SharedArrayBuffer' == s ? void 0 !== n ? new g(r, Pt(i, e), n)  : void 0 !== i ? new g(r, Pt(i, e))  : new g(r)  : bt in r ? Mt(_, r)  : kt.call(_, r)  : new g(m(r))
}), Y(v !== Function.prototype ? x(g).concat(x(v))  : x(g), function (t) {
t in _ || u(_, t, g[t])
}), _.prototype = O, i || (O.constructor = _));
var M = O[_t],
D = !!M && ('values' == M.name || null == M.name),
k = Rt.values;
u(_, mt, !0),
u(O, bt, c),
u(O, yt, !0),
u(O, gt, _),
(l ? new _(1) [ft] == c : ft in O) || V(O, ft, {
get: function () {
return c
}
}),
w[c] = _,
o(o.G + o.W + o.F * (_ != g), w),
o(o.S, c, {
BYTES_PER_ELEMENT: e
}),
o(o.S + o.F * s(function () {
g.of.call(_, 1)
}), c, {
from: kt,
of: Tt
}),
'BYTES_PER_ELEMENT' in O || u(O, 'BYTES_PER_ELEMENT', e),
o(o.P, c, It),
B(c),
o(o.P + o.F * Ot, c, {
set: Bt
}),
o(o.P + o.F * !D, c, Rt),
i || O.toString == ut || (O.toString = ut),
o(o.P + o.F * s(function () {
new _(1).slice()
}), c, {
slice: Lt
}),
o(o.P + o.F * (s(function () {
return [1,
2].toLocaleString() != new _([1,
2]).toLocaleString()
}) || !s(function () {
O.toLocaleString.call([1,
2])
})), c, {
toLocaleString: St
}),
I[c] = D ? M : k,
i || D || u(O, _t, k)
}
} else t.exports = function () {
}
},
'7Qtz': function (t, e, r) {
'use strict';
var i = r('dyZX'),
n = r('nh4g'),
s = r('LQAc'),
o = r('D4iV'),
a = r('Mukb'),
l = r('3Lyj'),
c = r('eeVq'),
h = r('9gX7'),
d = r('RYi7'),
u = r('ne8i'),
p = r('Cfrj'),
_ = r('kJMx').f,
f = r('hswa').f,
m = r('Nr18'),
g = r('fyDq'),
v = 'prototype',
b = 'Wrong index!',
y = i.ArrayBuffer,
E = i.DataView,
w = i.Math,
O = i.RangeError,
P = i.Infinity,
C = y,
x = w.abs,
A = w.pow,
M = w.floor,
D = w.log,
k = w.LN2,
T = n ? '_b' : 'buffer',
j = n ? '_l' : 'byteLength',
S = n ? '_o' : 'byteOffset';
function I(t, e, r) {
var i,
n,
s,
o = new Array(r),
a = 8 * r - e - 1,
l = (1 << a) - 1,
c = l >> 1,
h = 23 === e ? A(2, - 24) - A(2, - 77)  : 0,
d = 0,
u = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
for ((t = x(t)) != t || t === P ? (n = t != t ? 1 : 0, i = l)  : (i = M(D(t) / k), t * (s = A(2, - i)) < 1 && (i--, s *= 2), (t += i + c >= 1 ? h / s : h * A(2, 1 - c)) * s >= 2 && (i++, s /= 2), i + c >= l ? (n = 0, i = l)  : i + c >= 1 ? (n = (t * s - 1) * A(2, e), i += c)  : (n = t * A(2, c - 1) * A(2, e), i = 0)); e >= 8; o[d++] = 255 & n, n /= 256, e -= 8);
for (i = i << e | n, a += e; a > 0; o[d++] = 255 & i, i /= 256, a -= 8);
return o[--d] |= 128 * u,
o
}
function L(t, e, r) {
var i,
n = 8 * r - e - 1,
s = (1 << n) - 1,
o = s >> 1,
a = n - 7,
l = r - 1,
c = t[l--],
h = 127 & c;
for (c >>= 7; a > 0; h = 256 * h + t[l], l--, a -= 8);
for (i = h & (1 << - a) - 1, h >>= - a, a += e; a > 0; i = 256 * i + t[l], l--, a -= 8);
if (0 === h) h = 1 - o;
 else {
if (h === s) return i ? NaN : c ? - P : P;
i += A(2, e),
h -= o
}
return (c ? - 1 : 1) * i * A(2, h - e)
}
function B(t) {
return t[3] << 24 | t[2] << 16 | t[1] << 8 | t[0]
}
function R(t) {
return [255 & t]
}
function F(t) {
return [255 & t,
t >> 8 & 255]
}
function N(t) {
return [255 & t,
t >> 8 & 255,
t >> 16 & 255,
t >> 24 & 255]
}
function W(t) {
return I(t, 52, 8)
}
function V(t) {
return I(t, 23, 4)
}
function U(t, e, r) {
f(t[v], e, {
get: function () {
return this[r]
}
})
}
function K(t, e, r, i) {
var n = p( + r);
if (n + e > t[j]) throw O(b);
var s = t[T]._b,
o = n + t[S],
a = s.slice(o, o + e);
return i ? a : a.reverse()
}
function H(t, e, r, i, n, s) {
var o = p( + r);
if (o + e > t[j]) throw O(b);
for (var a = t[T]._b, l = o + t[S], c = i( + n), h = 0; h < e; h++) a[l + h] = c[s ? h : e - h - 1]
}
if (o.ABV) {
if (!c(function () {
y(1)
}) || !c(function () {
new y( - 1)
}) || c(function () {
return new y,
new y(1.5),
new y(NaN),
'ArrayBuffer' != y.name
})) {
for (var z, G = (y = function (t) {
return h(this, y),
new C(p(t))
}) [v] = C[v], q = _(C), X = 0; q.length > X; ) (z = q[X++]) in y || a(y, z, C[z]);
s || (G.constructor = y)
}
var Y = new E(new y(2)),
$ = E[v].setInt8;
Y.setInt8(0, 2147483648),
Y.setInt8(1, 2147483649),
!Y.getInt8(0) && Y.getInt8(1) || l(E[v], {
setInt8: function (t, e) {
$.call(this, t, e << 24 >> 24)
},
setUint8: function (t, e) {
$.call(this, t, e << 24 >> 24)
}
}, !0)
} else y = function (t) {
h(this, y, 'ArrayBuffer');
var e = p(t);
this._b = m.call(new Array(e), 0),
this[j] = e
},
E = function (t, e, r) {
h(this, E, 'DataView'),
h(t, y, 'DataView');
var i = t[j],
n = d(e);
if (n < 0 || n > i) throw O('Wrong offset!');
if (n + (r = void 0 === r ? i - n : u(r)) > i) throw O('Wrong length!');
this[T] = t,
this[S] = n,
this[j] = r
},
n && (U(y, 'byteLength', '_l'), U(E, 'buffer', '_b'), U(E, 'byteLength', '_l'), U(E, 'byteOffset', '_o')),
l(E[v], {
getInt8: function (t) {
return K(this, 1, t) [0] << 24 >> 24
},
getUint8: function (t) {
return K(this, 1, t) [0]
},
getInt16: function (t) {
var e = K(this, 2, t, arguments[1]);
return (e[1] << 8 | e[0]) << 16 >> 16
},
getUint16: function (t) {
var e = K(this, 2, t, arguments[1]);
return e[1] << 8 | e[0]
},
getInt32: function (t) {
return B(K(this, 4, t, arguments[1]))
},
getUint32: function (t) {
return B(K(this, 4, t, arguments[1])) >>> 0
},
getFloat32: function (t) {
return L(K(this, 4, t, arguments[1]), 23, 4)
},
getFloat64: function (t) {
return L(K(this, 8, t, arguments[1]), 52, 8)
},
setInt8: function (t, e) {
H(this, 1, t, R, e)
},
setUint8: function (t, e) {
H(this, 1, t, R, e)
},
setInt16: function (t, e) {
H(this, 2, t, F, e, arguments[2])
},
setUint16: function (t, e) {
H(this, 2, t, F, e, arguments[2])
},
setInt32: function (t, e) {
H(this, 4, t, N, e, arguments[2])
},
setUint32: function (t, e) {
H(this, 4, t, N, e, arguments[2])
},
setFloat32: function (t, e) {
H(this, 4, t, V, e, arguments[2])
},
setFloat64: function (t, e) {
H(this, 8, t, W, e, arguments[2])
}
});
g(y, 'ArrayBuffer'),
g(E, 'DataView'),
a(E[v], o.VIEW, !0),
e.ArrayBuffer = y,
e.DataView = E
},
'7jxN': function (t, e, r) {
'use strict';
r.r(e),
r.d(e, 'animate', function () {
return o
}),
r.d(e, 'cubicBezier', function () {
return a
}),
r.d(e, 'fadeTo', function () {
return l
}),
r.d(e, 'FxBase', function () {
return c
}),
r.d(e, 'Fx', function () {
return h
}),
r.d(e, 'genFx', function () {
return d
}),
r.d(e, 'slideDown', function () {
return u
}),
r.d(e, 'slideUp', function () {
return p
}),
r.d(e, 'slideToggle', function () {
return _
}),
r.d(e, 'fadeIn', function () {
return f
}),
r.d(e, 'fadeOut', function () {
return m
}),
r.d(e, 'fadeToggle', function () {
return g
}),
r.d(e, 'getRGB', function () {
return v
}),
r.d(e, 'getColor', function () {
return b
}),
r.d(e, 'animateCount', function () {
return y
});
r('pIFo'),
r('a1Th'),
r('Btvt'),
r('SRfc');
var i = r('t7n3'),
n = r('zxIV'),
s = r('gdug');
function o(t, e, r, o) {
if (t = Object(n.ge) (t)) {
var a,
l = Object(i.isFunction) (o) ? o : () =>{
},
h = Object(i.extend) ({
}, 'object' == typeof r ? r : {
duration: r,
onComplete: l
}),
d = {
},
u = {
},
p = Object(n.isVisible) (t);
h.orig = {
},
(e = Object(i.clone) (e)).discrete && (h.discrete = 1, delete e.discrete),
s.browser.iphone && (h.duration = 0);
var _ = Object(n.data) (t, 'tween'),
f = p ? 'hide' : 'show';
for (var m in _ && _.isTweening && (h.orig = Object(i.extend) (h.orig, _.options.orig), _.stop(!1), _.options.show ? f = 'hide' : _.options.hide && (f = 'show')), e) if (e.hasOwnProperty(m)) {
if (!_ && ('show' === e[m] && p || 'hide' === e[m] && !p)) return h.onComplete.call(this, t);
if ('height' !== m && 'width' !== m || !t.style || (e.overflow || (void 0 === h.orig.overflow && (h.orig.overflow = Object(n.getStyle) (t, 'overflow')), t.style.overflow = 'hidden'), Object(n.hasClass) (t, 'inl_bl') || 'TD' === t.tagName || (t.style.display = 'block')), /show|hide|toggle/.test(e[m])) if ('toggle' === e[m] && (e[m] = f), 'show' === e[m]) {
a = 0,
h.show = !0,
void 0 === h.orig[m] && (h.orig[m] = Object(n.getStyle) (t, m, !1) || '', Object(n.setStyle) (t, m, 0));
var g = t.style[m];
t.style[m] = h.orig[m],
e[m] = parseFloat(Object(n.getStyle) (t, m, !0)),
t.style[m] = g,
'height' === m && s.browser.msie && !e.overflow && (t.style.overflow = 'hidden')
} else void 0 === h.orig[m] && (h.orig[m] = Object(n.getStyle) (t, m, !1) || ''),
h.hide = !0,
e[m] = 0
}
return h.show && !p && Object(n.show) (t),
_ = new c(t, h),
Object(i.each) (e, function (e, r) {
if (/backgroundColor|borderBottomColor|borderLeftColor|borderRightColor|borderTopColor|color|borderColor|outlineColor/.test(e)) {
if (a = b(t, 'borderColor' === e ? 'borderTopColor' : e), r = v(r), void 0 === a) return
} else {
var s = r.toString().match(/^([+-]=)?([\d+-.]+)(.*)$/);
s && (r = parseFloat(s[2]), s[1] && (r = ('-=' == s[1] ? - 1 : 1) * r + r)),
0 != (a = _.cur(e, !0)) || 'width' !== e && 'height' !== e || (a = 1),
'opacity' === e && r > 0 && !p && (Object(n.setStyle) (t, 'opacity', 0), a = 0, Object(n.show) (t))
}(a != r || Object(i.isArray) (a) && a.join(',') === r.join(',')) && (d[e] = a, u[e] = r)
}),
_.start(d, u),
Object(n.data) (t, 'tween', _),
_
}
}
function a(t, e, r, i, n, s) {
var o,
a,
l = function (e) {
var i = 1 - e;
return 3 * i * i * e * t + 3 * i * e * e * r + e * e * e
},
c = function (t) {
var r = 1 - t;
return 3 * r * r * t * e + 3 * r * t * t * i + t * t * t
},
h = function (e) {
var i = 1 - e;
return 3 * (2 * (e - 1) * e + i * i) * t + 3 * ( - e * e * e + 2 * i * e) * r
},
d = n;
for (o = d, a = 0; a < 8; a++) {
var u = l(o) - d;
if (Math.abs(u) < s) return c(o);
var p = h(o);
if (Math.abs(p) < 0.000001) break;
o -= u / p
}
var _ = 0,
f = 1;
if ((o = d) < _) return c(_);
if (o > f) return c(f);
for (; _ < f; ) {
var m = l(o);
if (Math.abs(m - d) < s) return c(o);
d > m ? _ = o : f = o,
o = 0.5 * (f - _) + _
}
return c(o)
}
function l(t, e, r, i) {
return o(t, {
opacity: r
}, e, i)
}
class c{
constructor(t, e, r) {
this.el = Object(n.ge) (t),
this.name = r,
this.options = Object(i.extend) ({
onStep: () =>{
},
onComplete: () =>{
},
transition: e.transition || h.Transitions.sineInOut,
duration: 500
}, e || {
})
}
start(t, e) {
this.from = t,
this.to = e,
this.time = Object(i.vkNow) (),
this.isTweening = !0;
var r = t=>this.step(t);
return r.el = this.el,
r() && h.Timers.push(r) && !h.TimerId && (h.TimerId = setInterval(function () {
for (var t = h.Timers, e = t.length, r = 0; r < e; r++) t[r]() || (t.splice(r--, 1), e--);
e || (clearInterval(h.TimerId), h.TimerId = null)
}, 13)),
this
}
stop(t) {
for (var e = h.Timers, r = e.length - 1; r >= 0; r--) e[r].el === this.el && (t && e[r](!0), e.splice(r, 1));
this.isTweening = !1
}
step(t) {
var e = Object(i.vkNow) ();
if (!t && e < this.time + this.options.duration) {
for (var r in this.cTime = e - this.time, this.now = {
}, this.to) if (Object(i.isArray) (this.to[r])) {
for (var s = [
], o = 0; o < 3; o++) {
if (void 0 === this.from[r] || void 0 === this.to[r]) return !1;
s.push(Math.min(parseInt(this.compute(this.from[r][o], this.to[r][o])), 255))
}
this.now[r] = s
} else this.now[r] = this.compute(this.from[r], this.to[r]),
this.options.discrete && (this.now[r] = Object(i.intval) (this.now[r]));
return this.update(),
!0
}
return setTimeout(this.options.onComplete.bind(this, this.el), 10),
this.now = Object(i.extend) (this.to, this.options.orig),
this.update(),
this.options.hide && Object(n.hide) (this.el),
this.isTweening = !1,
!1
}
compute(t, e) {
var r = e - t;
return this.options.transition(this.cTime, t, r, this.options.duration)
}
update() {
for (var t in this.options.onStep(this.now), this.now) Object(i.isArray) (this.now[t]) ? Object(n.setStyle) (this.el, t, 'rgb(' + this.now[t].join(',') + ')')  : void 0 !== this.el[t] ? this.el[t] = this.now[t] : Object(n.setStyle) (this.el, t, this.now[t])
}
cur(t, e) {
return null == this.el[t] || this.el.style && null != this.el.style[t] ? parseFloat(Object(n.getStyle) (this.el, t, e)) || 0 : this.el[t]
}
}
var h = {
Base: c,
Transitions: {
linear: (t, e, r, i) =>r * t / i + e,
sineInOut: (t, e, r, i) => - r / 2 * (Math.cos(Math.PI * t / i) - 1) + e,
halfSine: (t, e, r, i) =>r * Math.sin(Math.PI * (t / i) / 2) + e,
easeOutBack: function (t, e, r, i) {
var n = 1.70158;
return r * ((t = t / i - 1) * t * ((n + 1) * t + n) + 1) + e
},
easeInCirc: (t, e, r, i) => - r * (Math.sqrt(1 - (t /= i) * t) - 1) + e,
easeOutCirc: (t, e, r, i) =>r * Math.sqrt(1 - (t = t / i - 1) * t) + e,
easeInQuint: (t, e, r, i) =>r * (t /= i) * t * t * t * t + e,
easeOutQuint: (t, e, r, i) =>r * ((t = t / i - 1) * t * t * t * t + 1) + e,
easeOutCubic: (t, e, r, i) =>r * ((t = t / i - 1) * t * t + 1) + e,
swiftOut: (t, e, r, i) =>r * a(0.4, 0, 0.22, 1, t / i, 4 / i) + e
},
Attrs: [
['height',
'marginTop',
'marginBottom',
'paddingTop',
'paddingBottom'],
[
'width',
'marginLeft',
'marginRight',
'paddingLeft',
'paddingRight'
],
[
'opacity',
'left',
'top'
]
],
Timers: [
],
TimerId: null
};
function d(t, e) {
var r = {
};
return Object(i.each) (h.Attrs.concat.apply([], h.Attrs.slice(0, e)), function () {
r[this] = t
}),
r
}
var u = (t, e, r) =>o(t, d('show', 1), e, r),
p = (t, e, r) =>o(t, d('hide', 1), e, r),
_ = (t, e, r) =>o(t, d('toggle', 1), e, r),
f = (t, e, r) =>o(t, {
opacity: 'show'
}, e, r),
m = (t, e, r) =>o(t, {
opacity: 'hide'
}, e, r),
g = (t, e, r) =>o(t, {
opacity: 'toggle'
}, e, r);
function v(t) {
var e;
return t && Object(i.isArray) (t) && 3 == t.length ? t : (e = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(t)) ? [
parseInt(e[1]),
parseInt(e[2]),
parseInt(e[3])
] : (e = /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(t)) ? [
2.55 * parseFloat(e[1]),
2.55 * parseFloat(e[2]),
2.55 * parseFloat(e[3])
] : (e = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(t)) ? [
parseInt(e[1], 16),
parseInt(e[2], 16),
parseInt(e[3], 16)
] : (e = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(t)) ? [
parseInt(e[1] + e[1], 16),
parseInt(e[2] + e[2], 16),
parseInt(e[3] + e[3], 16)
] : void 0
}
function b(t, e) {
var r;
do {
if (0 === (r = Object(n.getStyle) (t, e)).indexOf('rgba') && (r = ''), '' != r && 'transparent' !== r || 'body' === t.nodeName.toLowerCase()) break;
e = 'backgroundColor',
t = t.parentNode
} while (t);
return v(r)
}
function y(t, e) {
var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
};
if (t = Object(n.ge) (t), e = r.str ? Object(i.trim) (e.toString()) || '' : Object(i.positive) (e), t) if (!s.browser.mobile || s.browser.safari_mobile || s.browser.android) {
var a = Object(n.data) (t, 'curCount'),
l = Object(n.data) (t, 'nextCount');
if ('number' == typeof l || r.str && 'string' == typeof l) e != l && Object(n.data) (t, 'nextCount', e);
 else if ('number' == typeof a || r.str && 'string' == typeof a) e !== a && Object(n.data) (t, 'nextCount', e);
 else if (a = r.str ? Object(i.trim) (Object(n.val) (t).toString()) || '' : Object(i.positive) (Object(n.val) (t)), 'auto' === r.str && (r.str = !a.match(/^\d+$/) || !e.match(/^\d+$/), r.str || (a = Object(i.positive) (a), e = Object(i.positive) (e))), a !== e) {
Object(n.data) (t, 'curCount', e);
var c,
d,
u = r.str ? a.length === e.length ? a < e : a.length < e.length : a < e,
p = (u ? e : a).toString(),
_ = (u ? a : e).toString(),
f = [
],
m = [
];
for (r.str || (_ = new Array(p.length - _.length + 1).join('0') + _), c = 0, d = p.length; c < d; c++) {
var g = p.charAt(c);
if (g !== _.charAt(c)) break;
f.push(g)
}
var v = p.substr(c),
b = _.substr(c);
if (r.str) {
for (c = v.length; c > 0; c--) {
var E = v.charAt(c);
if (E !== b.charAt(c)) break;
m.unshift(E)
}
m.length && (v = v.substr(0, c + 1), b = b.substr(0, c + 1))
}
f = f.join('').replace(/\s$/, '&nbsp;'),
m = m.join('').replace(/^\s/, '&nbsp;'),
Object(i.trim) (Object(n.val) (t)) || r.noSpaceIfEmpty || Object(n.val) (t, '&nbsp;');
var w = t.clientHeight || t.offsetHeight;
Object(n.val) (t, '<div class="counter_wrap inl_bl"></div>');
var O,
P,
C,
x,
A = t.firstChild,
M = !0;
f.length && A.appendChild(O = Object(n.ce) ('div', {
className: 'counter_const inl_bl',
innerHTML: f
})),
f.length || (b = b.replace(/^0+/, '')),
b && ('0' !== b || f.length) || (b = r.noSpaceIfEmpty ? '' : '&nbsp;', M = !!f.length),
A.appendChild(C = Object(n.ce) ('div', {
className: 'counter_anim_wrap inl_bl'
})),
C.appendChild(x = Object(n.ce) ('div', {
className: 'counter_anim ' + (u ? 'counter_anim_inc' : 'counter_anim_dec'),
innerHTML: `<div class="counter_anim_big"><span class="counter_anim_big_c">${v
}
</span></div>` + (M ? `<div class="counter_anim_small"><span class="counter_anim_small_c">${b
}
</span></div>`: '')
}, M ? {
marginTop: u ? - w : 0
}
 : {
right: 0
})),
r.str && Object(n.setStyle) (x, {
textAlign: 'right',
right: 0
});
var D = Object(n.getSize) (Object(n.geByClass1) ('counter_anim_big_c', x, 'span')) [0],
k = M ? '&nbsp;' === b ? D : Object(n.getSize) (Object(n.geByClass1) ('counter_anim_small_c', x, 'span')) [0] : 0;
!b && r.noSpaceIfEmpty && (k = 0),
m.length && A.appendChild(P = Object(n.ce) ('div', {
className: 'counter_const inl_bl',
innerHTML: m
})),
r.noWrapWidth || Object(n.setStyle) (A, {
width: (O && Object(n.getSize) (O) [0] || 0) + (P && Object(n.getSize) (P) [0] || 0) + D + 0
}),
void 0 === s.browser.csstransitions && (s.browser.csstransitions = s.browser.chrome && s.browser.version >= 9 || s.browser.mozilla && s.browser.version >= 4 || s.browser.opera && s.browser.version >= 10.5 || s.browser.safari && s.browser.version >= 3.2 || s.browser.safari_mobile || s.browser.android);
var T = s.browser.csstransitions;
Object(n.setStyle) (C, {
width: u ? k : D
});
var j = function () {
Object(n.val) (t, e || (r.noSpaceIfEmpty ? '' : ' '));
var i = Object(n.data) (t, 'nextCount');
Object(n.data) (t, 'curCount', !1),
Object(n.data) (t, 'nextCount', !1),
('number' == typeof i || r.str && 'string' == typeof i) && setTimeout(y.pbind(t, i, r), 0),
r.onDone && r.onDone()
},
S = M ? {
marginTop: u ? 0 : - w
}
 : {
marginRight: u ? - k : 0
};
T ? (Object(n.getStyle) (C, 'width'), Object(n.addClass) (C, 'counter_css_anim_wrap'), D !== k && Object(n.setStyle) (C, {
width: u ? D : k
}), M && Object(n.setStyle) (x, S), setTimeout(j, 300), r.fadeMode && (Object(n.setStyle) (Object(n.geByClass1) ('counter_anim_big', t), 'opacity', 1), Object(n.setStyle) (Object(n.geByClass1) ('counter_anim_small', t), 'opacity', 0)))  : (D !== k && o(C, {
width: u ? D : k
}, {
duration: 100
}), M ? o(x, S, {
duration: 300,
transition: h.Transitions.easeOutCirc,
onComplete: j
})  : setTimeout(j, 300))
}
} else Object(n.val) (t, e || '')
}
},
'8a7r': function (t, e, r) {
'use strict';
var i = r('hswa'),
n = r('RjD/');
t.exports = function (t, e, r) {
e in t ? i.f(t, e, n(0, r))  : t[e] = r
}
},
'8oxB': function (t, e) {
var r,
i,
n = t.exports = {
};
function s() {
throw new Error('setTimeout has not been defined')
}
function o() {
throw new Error('clearTimeout has not been defined')
}
function a(t) {
if (r === setTimeout) return setTimeout(t, 0);
if ((r === s || !r) && setTimeout) return r = setTimeout,
setTimeout(t, 0);
try {
return r(t, 0)
} catch (e) {
try {
return r.call(null, t, 0)
} catch (e) {
return r.call(this, t, 0)
}
}
}
!function () {
try {
r = 'function' == typeof setTimeout ? setTimeout : s
} catch (t) {
r = s
}
try {
i = 'function' == typeof clearTimeout ? clearTimeout : o
} catch (t) {
i = o
}
}();
var l,
c = [
],
h = !1,
d = - 1;
function u() {
h && l && (h = !1, l.length ? c = l.concat(c)  : d = - 1, c.length && p())
}
function p() {
if (!h) {
var t = a(u);
h = !0;
for (var e = c.length; e; ) {
for (l = c, c = [
]; ++d < e; ) l && l[d].run();
d = - 1,
e = c.length
}
l = null,
h = !1,
function (t) {
if (i === clearTimeout) return clearTimeout(t);
if ((i === o || !i) && clearTimeout) return i = clearTimeout,
clearTimeout(t);
try {
i(t)
} catch (e) {
try {
return i.call(null, t)
} catch (e) {
return i.call(this, t)
}
}
}(t)
}
}
function _(t, e) {
this.fun = t,
this.array = e
}
function f() {
}
n.nextTick = function (t) {
var e = new Array(arguments.length - 1);
if (arguments.length > 1) for (var r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
c.push(new _(t, e)),
1 !== c.length || h || a(p)
},
_.prototype.run = function () {
this.fun.apply(null, this.array)
},
n.title = 'browser',
n.browser = !0,
n.env = {
},
n.argv = [
],
n.version = '',
n.versions = {
},
n.on = f,
n.addListener = f,
n.once = f,
n.off = f,
n.removeListener = f,
n.removeAllListeners = f,
n.emit = f,
n.prependListener = f,
n.prependOnceListener = f,
n.listeners = function (t) {
return []
},
n.binding = function (t) {
throw new Error('process.binding is not supported')
},
n.cwd = function () {
return '/'
},
n.chdir = function (t) {
throw new Error('process.chdir is not supported')
},
n.umask = function () {
return 0
}
},
'91GP': function (t, e, r) {
var i = r('XKFU');
i(i.S + i.F, 'Object', {
assign: r('czNK')
})
},
'98sY': function (t, e, r) {
'use strict';
r.r(e),
r.d(e, 'initDebugTools', function () {
return o
}),
r.d(e, 'logEvalError', function () {
return a
}),
r.d(e, 'debugLog', function () {
return l
}),
r.d(e, 'debugEl', function () {
return c
}),
r.d(e, 'logError', function () {
return h
}),
r.d(e, 'debugBufferLog', function () {
return d
});
r('a1Th'),
r('Btvt'),
r('pIFo');
var i = r('gdug'),
n = r('W9Tc');
function s() {
if (Object(n.partConfigEnabled) ('log_fetch_requests')) {
var t = (t, e) =>{
try {
if (~t.indexOf('/al_audio') || ~t.indexOf('/like.php')) throw new Error(e)
} catch (t) {
d(t)
}
};
!function (t) {
var e = window.XMLHttpRequest;
window.XMLHttpRequest = function () {
var r,
i,
s = new e,
o = s.open,
a = s.send;
return s.open = function () {
var t = Array.prototype.slice.call(arguments);
return i = t[0],
r = t[1],
o.apply(s, arguments)
},
s.send = function () {
var e = arguments[0];
return ('POST' === (i = (i || '').toUpperCase()) || 'GET' === i && Object(n.partConfigEnabled) ('log_fetch_requests_get')) && t(r, [
i,
r,
e
].join(':')),
a.apply(s, arguments)
},
s
},
[
'DONE',
'HEADERS_RECEIVED',
'LOADING',
'OPENED',
'UNSENT'
].forEach(t=>{
Object.defineProperty(window.XMLHttpRequest, t, {
enumerable: !1,
configurable: !1,
writable: !1,
value: e[t]
})
})
}(t),
window.fetch && function (t) {
var e = window.fetch;
window.fetch = function () {
for (var r = new Array(arguments.length), i = 0; i < r.length; ++i) r[i] = arguments[i];
var n,
s = r[0],
o = 'GET';
'string' == typeof s ? n = s : 'Request' in window && s instanceof window.Request ? (n = s.url, s.method && (o = s.method))  : n = '' + s,
r[1] && r[1].method && (o = r[1].method);
var a = {
method: o,
url: n,
status_code: null
};
return t(n, n),
e.apply(this, r).then(function (t) {
return a.status_code = t.status,
t
}).catch (function (t) {
throw t
})
}
}(t)
}
}
function o() {
window._logTimer = (new Date).getTime(),
s()
}
function a(t, e) {
if (window.Raven) {
if (e && e.length > 350) {
var r = e.indexOf('; window.TimeSpent && TimeSpent.setTimers && TimeSpent.setTimers(');
~r && (e = e.slice(0, r)),
e = `${e.slice(0, 200)
}
...${e.slice( - 200)
}
`
}
t.message += `: ${e
}
`,
h(t)
}
}
function l(t) {
try {
window.debuglogClient && debuglogClient(t);
var e = '[' + ((new Date).getTime() - window._logTimer) / 1000 + '] ';
if (window.console && console.log) {
var r = Array.prototype.slice.call(arguments);
r.unshift(e),
i.browser.msie || i.browser.mobile ? console.log(r.join(' '))  : console.log.apply(console, r)
}
} catch (t) {
}
}
function c(t) {
if (!t) return !1;
var e = t.tagName,
r = t.id,
i = t.className,
n = (e || '').toLowerCase();
return i && (n += '.' + t.className.replace(/\s+/g, '.')),
r && !/^__vk/.test(r) && (n += `#${t.id
}
`),
n || (t.toString() || '[NULL]')
}
function h(t) {
var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
},
r = e.environment,
i = void 0 !== r && r,
n = e.breadcrumb,
s = void 0 !== n && n;
window.Raven && (s && Raven.captureBreadcrumb({
message: s.message,
category: 'custom',
data: s.data
}), i ? Raven.captureException(t, {
environment: i
})  : Raven.captureException(t))
}
function d(t) {
return h(t, {
environment: 'debugLog'
})
}
},
'9gX7': function (t, e) {
t.exports = function (t, e, r, i) {
if (!(t instanceof e) || void 0 !== i && i in t) throw TypeError(r + ': incorrect invocation!');
return t
}
},
A5AN: function (t, e, r) {
'use strict';
var i = r('AvRE') (!0);
t.exports = function (t, e, r) {
return e + (r ? i(t, e).length : 1)
}
},
Afnz: function (t, e, r) {
'use strict';
var i = r('LQAc'),
n = r('XKFU'),
s = r('KroJ'),
o = r('Mukb'),
a = r('hPIQ'),
l = r('QaDb'),
c = r('fyDq'),
h = r('OP3Y'),
d = r('K0xU') ('iterator'),
u = !([].keys && 'next' in [
].keys()),
p = function () {
return this
};
t.exports = function (t, e, r, _, f, m, g) {
l(r, e, _);
var v,
b,
y,
E = function (t) {
if (!u && t in C) return C[t];
switch (t) {
case 'keys':
case 'values':
return function () {
return new r(this, t)
}
}
return function () {
return new r(this, t)
}
},
w = e + ' Iterator',
O = 'values' == f,
P = !1,
C = t.prototype,
x = C[d] || C['@@iterator'] || f && C[f],
A = x || E(f),
M = f ? O ? E('entries')  : A : void 0,
D = 'Array' == e && C.entries || x;
if (D && (y = h(D.call(new t))) !== Object.prototype && y.next && (c(y, w, !0), i || 'function' == typeof y[d] || o(y, d, p)), O && x && 'values' !== x.name && (P = !0, A = function () {
return x.call(this)
}), i && !g || !u && !P && C[d] || o(C, d, A), a[e] = A, a[w] = p, f) if (v = {
values: O ? A : E('values'),
keys: m ? A : E('keys'),
entries: M
}, g) for (b in v) b in C || s(C, b, v[b]);
 else n(n.P + n.F * (u || P), e, v);
return v
}
},
AvRE: function (t, e, r) {
var i = r('RYi7'),
n = r('vhPU');
t.exports = function (t) {
return function (e, r) {
var s,
o,
a = String(n(e)),
l = i(r),
c = a.length;
return l < 0 || l >= c ? t ? '' : void 0 : (s = a.charCodeAt(l)) < 55296 || s > 56319 || l + 1 === c || (o = a.charCodeAt(l + 1)) < 56320 || o > 57343 ? t ? a.charAt(l)  : s : t ? a.slice(l, l + 2)  : o - 56320 + (s - 55296 << 10) + 65536
}
}
},
'BJj/': function (t, e, r) {
'use strict';
function i(t, e, r) {
var i;
return function () {
var n = arguments,
s = () =>{
i = null,
r || t.apply(this, n)
},
o = r && !i;
clearTimeout(i),
i = setTimeout(s, e),
o && t.apply(this, n)
}
}
r.r(e),
r.d(e, 'debounce', function () {
return i
})
},
Bszp: function (t, e, r) {
'use strict';
r.r(e),
r.d(e, 'topHeaderClose', function () {
return d
}),
r.d(e, 'topHeaderClearClose', function () {
return u
});
r('rE2o'),
r('ioFf'),
r('rGqo'),
r('pIFo'),
r('KKXr'),
r('SRfc'),
r('Oyvg');
var i = r('zxIV'),
n = r('Egk5'),
s = r('t7n3'),
o = r('ErRf'),
a = r('4+be'),
l = r('aong'),
c = r('XzvV');
function h(t, e) {
return function (t) {
if (Array.isArray(t)) return t
}(t) || function (t, e) {
var r = [
],
i = !0,
n = !1,
s = void 0;
try {
for (var o, a = t[Symbol.iterator](); !(i = (o = a.next()).done) && (r.push(o.value), !e || r.length !== e); i = !0);
} catch (t) {
n = !0,
s = t
} finally {
try {
i || null == a.return || a.return ()
} finally {
if (n) throw s
}
}
return r
}(t, e) || function () {
throw new TypeError('Invalid attempt to destructure non-iterable instance')
}()
}
function d(t) {
window.headerDestroy && window.headerDestroy(),
window.headerDestroy = t
}
function u() {
delete window.headerDestroy
}
var p = {
cache: {
},
lists: {
},
maxItems: 8,
init: function () {
if (this.inited) return !1;
var t = Object(i.ge) ('ts_input'),
e = Object(i.ge) ('ts_cont_wrap');
if (vk.id && Chat.init(), !t) return !1;
Object(n.addEvent) (t, 'focus', function () {
p.deselect(),
Object(s.trim) (Object(i.val) (this)) && Object(i.addClass) (e.firstChild, 'active'),
p.toggleInput(!0)
}),
Object(n.addEvent) (t, 'keydown', function (r) {
switch (r.keyCode) {
case n.KEY.DOWN:
case n.KEY.UP:
p.moveSelection(r.keyCode),
Object(n.cancelEvent) (r);
break;
case n.KEY.ENTER:
var a = Object(i.geByClass1) ('active', e);
if (a) p.select(a, r);
 else {
var l = Object(s.trim) (Object(i.val) (this));
l && (t.blur(), p.clear(), p.toggle(!1), nav.go('/search?c[section]=auto&c[q]=' + encodeURIComponent(l)))
}
Object(n.cancelEvent) (r);
break;
case n.KEY.TAB:
p.clear(),
p.toggleInput(!1),
Object(o.cancelStackFilter) ('top_search', !0)
}
}), vk.id && (Object(n.addEvent) (t, 'keyup', function (t) {
switch (t.keyCode) {
case n.KEY.DOWN:
case n.KEY.UP:
case n.KEY.ENTER:
case n.KEY.ESC:
Object(n.cancelEvent) (t);
break;
default:
p.prepareRows(Object(s.trim) (Object(i.val) (this)))
}
}), Object(n.addEvent) (t, 'paste', function () {
setTimeout(function () {
p.prepareRows(Object(s.trim) (Object(i.val) (t)))
}, 10)
}), Object(n.addEvent) (document, 'mousedown', function (t) {
Object(n.checkKeyboardEvent) (t) || Object(i.domClosest) ('top_audio_layer_place', t.target) || Object(i.domClosest) ('_ap_layer__close', t.target) || Object(i.domClosest) ('layer_wrap', t.target) || d()
}), this.inited = !0)
}, clear: function () {
window.tooltips && tooltips.destroyAll(Object(i.ge) ('ts_cont_wrap'));
var t = Object(i.ge) ('ts_input');
t && t.phonblur && (Object(i.val) (t, ''), t.blur(), t.phonblur(), this.prepareRows())
}, select: function (t, e, r) {
if (Object(n.checkEvent) (e)) return !0;
var o = Object(i.ge) ('ts_input'),
a = Object(s.trim) (Object(i.val) (o)).length,
l = t.getAttribute('hinttype');
if (this.clear(), d(), a || o.blur(), r && Object(i.hasClass) (e.target, 'ts_contact_status')) return ajax.post('al_search.php', {
act: 'save_metrics',
ql: a,
mk: 'chat_box'
}),
this.writeBox(r),
!1;
var c = nav.go(t, e);
return ajax.post('al_search.php', {
act: 'save_metrics',
ql: a,
mk: l
}),
c
}, deselect: function () {
var t = Object(i.ge) ('ts_cont_wrap');
Object(s.each) (Object(i.geByClass) ('active', t), (t, e) =>Object(i.removeClass) (e, 'active'))
}, itemOver: function (t, e, r) {
1 === e && p.deselect();
var n = Object(s.inArray) (t.getAttribute('hintType'), [
'h_friends',
'h_correspondents',
'h_chats'
]);
Object(i.toggleClass) (t, 'write', n),
Object(i.toggleClass) (t, 'active', e)
}, moveSelection: function (t) {
var e,
r = Object(i.ge) ('ts_cont_wrap'),
s = Object(i.geByClass1) ('active', r);
switch (t) {
case n.KEY.UP:
e = !!s && (this.getNextNode(s, - 1, 'a') || s);
break;
case n.KEY.DOWN:
e = s ? this.getNextNode(s, 1, 'a') || s : r.firstChild
}
return this.deselect(),
e && Object(i.addClass) (e, 'active'),
!1
},
getNextNode: function (t, e, r) {
for (var n = t, s = Object(i.domPN) (t); ; ) {
if ((n = e > 0 ? Object(i.domNS) (n)  : Object(i.domPS) (n)) || (n = e > 0 ? Object(i.domFC) (s)  : Object(i.domLC) (s)), r && n.tagName && n.tagName.toLowerCase() === r || !r && n) return n;
if (n === t) return !1
}
},
toggleInput: function (t) {
t = !!t;
var e = Object(i.ge) ('ts_cont_wrap');
Object(i.isVisible) (e) !== t && (Object(i.toggle) ('ts_cont_wrap', t), t && Object(o.cancelStackPush) ('top_search', function () {
var t = Object(i.ge) ('ts_input');
p.toggleInput(!1),
t.blur(),
Object(c.removeSearchPositionTracker) ('top_search')
}, !0))
},
getList: function (t) {
switch (t) {
case 'friends':
return this.lists.friends || this.topFriends || {
};
case 'publics':
case 'events':
case 'groups':
case 'apps':
case 'chats':
case 'search':
return this.lists[t] || {
}
}
return {
}
},
onlines: function () {
return window.curFastChat && curFastChat.onlines || this.lists.onlines || {
}
},
initFriendsList: function () {
if (p.friendsLoaded) return !1;
if (cur.initingFL || vk.isBanned || !vk.id) return !1;
var t = function () {
if (p.friendsLoaded) return !1;
cur.initingFL = !0,
ajax.post('al_search.php', {
act: 'get_pages'
}, {
cache: 1,
onDone: function (t) {
delete cur.initingFL,
p.friendsLoaded || (Object(s.each) (t, function (t, e) {
p.lists[t] = e,
'onlines' !== t && p.updateCache(t)
}), p.friendsLoaded = !0, Object(i.val) ('ts_input') || p.prepareRows(''))
},
onFail: function () {
delete cur.initingFL
}
})
},
e = p.getList('friends');
Object(s.isEmpty) (e) ? (cur.initingFL = !0, ajax.post('al_search.php', {
act: 'get_top_friends'
}, {
cache: 1,
onDone: function (e) {
delete cur.initingFL,
p.topFriends = e,
p.updateCache('friends'),
p.forceUpdate = !0,
p.prepareRows(cur.tsStr || ''),
t()
},
onFail: function () {
delete cur.initingFL
}
}))  : (p.updateCache('friends'), p.forceUpdate = !0, p.prepareRows(cur.tsStr || ''), t())
},
getSimilarQueries: function (t) {
var e,
r = [
t = t.toLowerCase()
];
return (e = Object(a.parseLatin) (t)) && r.push(e),
(e = Object(a.parseLatKeys) (t)) && r.push(e),
(e = Object(a.parseCyr) (t)) && r.push(e),
r
},
searchCache: function (t, e) {
var r = p.getList(t);
if (!e) return !1;
var i = this.getSimilarQueries(e);
if (void 0 !== this.cache[t][e]) return i;
var n = this.cache[t][e] = {
};
Object(s.each) (i, (e, i) =>{
var o = this.cache[t][' ' + i.charAt(0).toLowerCase()];
if (o) {
var a = new RegExp('(^|[\\s\\-\\(\\)\\.,;|:]+)' + Object(s.escapeRE) (i), 'gi');
Object(s.each) (o, t=>{
var e = r[t + '_'];
if (!Object(s.isArray) (e)) return !0;
null !== e[0].match(a) && (n[t] = 1)
})
}
});
var o = 0;
return Object(s.each) (n, () =>o++),
n._num = o,
i
},
updateCache: function (t, e, r) {
var i = e || this.getList(t);
this.cache[t] = r && this.cache[t] || {
},
Object(s.each) (i, (e, r) =>{
var i = r[0],
n = Object(s.intval) (e),
o = i.split(/[\s\-\(\)\.,;|:]+/);
Object(s.each) (o, (e, r) =>{
var i = ' ' + r.charAt(0).toLowerCase();
this.cache[t][i] = this.cache[t][i] || {
},
this.cache[t][i][n] = 1
})
})
},
listSearch: function (t, e, r, i) {
var n = [
],
o = {
};
return e ? (p.searchCache(t, e), o = p.cache[t] && p.cache[t][e] || {
})  : Object(s.each) (p.getList(t), function (t) {
var e = Object(s.intval) (t);
o[e] = 1
}),
Object(s.each) (p.getList(t), function (t) {
var e = Object(s.intval) (t),
a = o[e];
if ((!i || !i[e]) && a) return !!r-- && void n.push([e,
this])
}),
n
},
row: function (t, e, r, i, n, o, a, c, h) {
var d = 0;
if (o && (i = i.replace(o, '$1<em class="ts_clist_hl">$2</em>')), Object(s.inArray) (a, [
'h_friends',
'h_correspondents',
'h_chats'
]) && (d = t), c || (c = ''), h = Object(s.intval) (h)) {
var u = '';
1 & h && (u += 'page_verified '),
2 & h && (u += 'page_top_author '),
- 128932034 === t ? u += 'ph_verified ' : - 29246653 === t && (u += 'pg_verified '),
h = `<div class="${u
}
" onmouseover="pageVerifiedTip(this, {type: ${h
}
, oid: ${t
}
})"></div>`
} else h = ''; return `
<a href="${e
}
" class="ts_contact clear_fix" id="ts_contact${t
}
" onclick="return TopSearch.select(this, event, ${d
}
);" onmousedown="event.cancelBubble = true;"
      onmouseover="TopSearch.itemOver(this, 1, event);"  onmouseout="TopSearch.itemOver(this, 0, event);" hinttype="${a
}
">
  <span class="ts_contact_photo ${Object(l.onlinePlatformClass) (n)
}
">
    <img class="ts_contact_img" src="${r
}
"/>
  </span>
  <span class="ts_contact_name fl_l">
    <div class="ts_contact_title_wrap${h ? ' is_verified' : ''
}
">
      <span class="ts_contact_title">${i
}
</span>
    </div>${h
}

    <div class="ts_contact_info">${c
}
</div>
  </span>
  <div class="ts_contact_status"></div>
</a>`
},
searchLists: function (t) {
return t ? {
friends: {
order: 0,
count: p.maxItems - 1,
label: Object(a.getLang) ('global_friends')
},
groups: {
order: 1,
count: 4,
label: Object(a.getLang) ('global_communities')
},
publics: {
count: 2,
parent: 'groups'
},
events: {
count: 1,
parent: 'groups'
},
apps: {
order: 2,
count: 1,
label: Object(a.getLang) ('global_apps')
},
vk_apps: {
order: 2,
count: 1,
label: Object(a.getLang) ('global_apps')
},
chats: {
order: 3,
count: p.maxItems - 1,
label: Object(a.getLang) ('global_chats')
},
search: {
order: 4,
count: p.maxItems - 1,
label: Object(a.getLang) ('head_search_results')
}
}
 : {
friends: {
order: 0,
count: p.maxItems,
label: Object(a.getLang) ('global_friends')
}
}
},
initListsHtml: function () {
p.listsHtml = [
]
},
addToListsHtml: function (t, e, r) {
var i = p.searchLists(r),
n = i[(i[t] || {
}).parent || t] || {
},
s = n.order || 0,
o = n.label || '';
p.listsHtml[s] = p.listsHtml[s] || (r && o ? [
`<div class="ts_search_sep">${o
}
</div>`]: [
]),
p.listsHtml[s].push(e)
},
htmlRows: function (t) {
var e = '',
r = p.listsHtml.map(t=>t.join(''));
if (t) {
var i = '#' === t[0] ? 'statuses' : 'auto',
n = '#' === t[0] ? Object(a.getLang) ('global_news_search_results')  : Object(a.getLang) ('global_show_all_results');
e += `
<a href="/search?c[section]=${i
}
&c[q]=${encodeURIComponent(t)
}
" class="ts_search_link clear_fix active" id="ts_search_link"
    onclick="return TopSearch.select(this, event);" onmousedown="event.cancelBubble = true;" onmouseover="TopSearch.itemOver(this, 1, event);"
    onmouseout="TopSearch.itemOver(this, 0, event);" >
  <span class="ts_contact_name fl_l">${n
}
</span>
  <div class="ts_contact_status "></div>
</a>`
}
return e + r.join('')
},
prepareRows: function (t) {
var e = p.maxItems,
r = Object(i.ge) ('ts_cont_wrap');
if (!r || !vk.id) return !1;
if (cur.tsStr && cur.tsStr === t && !p.forceUpdate) return !1;
delete p.forceUpdate,
p.initListsHtml();
var n = {
};
if (t) {
var o = [
];
Object(s.each) (this.getSimilarQueries(t), function () {
o.push(Object(s.escapeRE) (this))
}),
cur.lastRe = new RegExp('([ -]|^|s|&nbsp;|)(' + o.join('|') + ')', 'gi'),
e--
}
Object(s.each) (p.searchLists(t), function (r, o) {
if (p.cache[r]) {
var a = o.count,
l = p.listSearch(r, t, a, n),
c = [
],
d = 0;
Object(s.isEmpty) (l) || (Object(s.each) (l, (t, r) =>{
if (!e || d >= a) return !1;
c.push(r),
e--,
d++
}), c.length && Object(s.each) (c, (e, o) =>{
var a = o[1],
l = Object(s.intval) (o[0]),
c = l > 0 && p.onlines() [l],
d = h(a, 6),
u = d[0],
_ = d[1],
f = d[2],
m = d[3],
g = d[4],
v = d[5],
b = 'search' === r ? m : 'h_' + r,
y = p.row(l, f, _, u, c, i.re, b, g, v);
p.addToListsHtml(r, y, t),
n[l] = 1
}))
}
}),
r.innerHTML = p.htmlRows(t),
!e && t && '#' !== t[0] && Object(c.saveSearchAttemptStats) ('top_search', 0, !0, t),
e && t && '#' !== t[0] && this.hintsSearch(t, cur.lastRe || !1),
t && (cur.tsStr = t)
},
hintsSearch: function (t, e) {
var r,
n = Object(i.ge) ('ts_input'),
o = Object(i.ge) ('ts_cont_wrap');
ajax.post('al_search.php', {
act: 'get_pages_hints',
q: t
}, {
cache: 1,
onDone: function (a) {
if (Object(s.trim) (Object(i.val) (n)) !== t) return !1;
if (!a) return !1;
var l = p.maxItems - Object(i.geByClass) ('ts_contact', o).length - 1,
d = l,
u = {
};
if (Object(s.each) (a, function (n, o) {
var a = Object(s.intval) (n),
c = h(o, 6),
d = c[0],
_ = c[1],
f = c[2],
m = c[3],
g = c[4],
v = c[5],
b = p.searchLists(t),
y = m.replace('h_', ''),
E = (b[y] || {
}).parent || y;
if (void 0 === b[E] && (E = 'search'), u[E] = u[E] || {
}, u[E][n] = o, p.lists[E] = p.lists[E] || {
}, p.lists[E][n] = o, Object(i.ge) ('ts_contact' + a)) return !0;
if (!l--) return !1;
var w = p.row(a, f, _, d, !1, e, m, g, v);
return p.addToListsHtml(E, w, t),
r = !0,
!0
}), Object(c.saveSearchAttemptStats) ('top_search', 0, d !== l, t), Object(s.each) (u, (t, e) =>p.updateCache(t, e, !0)), r) {
var _ = Object(i.geByClass1) ('active', o),
f = _ ? _.id : '';
o.innerHTML = p.htmlRows(t),
f && Object(i.ge) (f) && Object(i.addClass) (Object(i.ge) (f), 'active')
}
}
})
},
writeBox: function (t) {
window.curFastChat && curFastChat.inited && window.FastChat ? FastChat.selectPeer(t, !1, {
entrypoint: 'fastchat_global_search'
})  : t > 0 && t < 2000000000 ? window.showWriteMessageBox(!1, t)  : nav.go('/im?sel=' + t)
}
};
e.default = p
},
Btvt: function (t, e, r) {
'use strict';
var i = r('I8a+'),
n = {
};
n[r('K0xU') ('toStringTag')] = 'z',
n + '' != '[object z]' && r('KroJ') (Object.prototype, 'toString', function () {
return '[object ' + i(this) + ']'
}, !0)
},
'C/va': function (t, e, r) {
'use strict';
var i = r('y3w9');
t.exports = function () {
var t = i(this),
e = '';
return t.global && (e += 'g'),
t.ignoreCase && (e += 'i'),
t.multiline && (e += 'm'),
t.unicode && (e += 'u'),
t.sticky && (e += 'y'),
e
}
},
Cfrj: function (t, e, r) {
var i = r('RYi7'),
n = r('ne8i');
t.exports = function (t) {
if (void 0 === t) return 0;
var e = i(t),
r = n(e);
if (e !== r) throw RangeError('Wrong length!');
return r
}
},
CkkT: function (t, e, r) {
var i = r('m0Pp'),
n = r('Ymqv'),
s = r('S/j/'),
o = r('ne8i'),
a = r('zRwo');
t.exports = function (t, e) {
var r = 1 == t,
l = 2 == t,
c = 3 == t,
h = 4 == t,
d = 6 == t,
u = 5 == t || d,
p = e || a;
return function (e, a, _) {
for (var f, m, g = s(e), v = n(g), b = i(a, _, 3), y = o(v.length), E = 0, w = r ? p(e, y)  : l ? p(e, 0)  : void 0; y > E; E++) if ((u || E in v) && (m = b(f = v[E], E, g), t)) if (r) w[E] = m;
 else if (m) switch (t) {
case 3:
return !0;
case 5:
return f;
case 6:
return E;
case 2:
w.push(f)
} else if (h) return !1;
return d ? - 1 : c || h ? h : w
}
}
},
D4iV: function (t, e, r) {
for (var i, n = r('dyZX'), s = r('Mukb'), o = r('ylqs'), a = o('typed_array'), l = o('view'), c = !(!n.ArrayBuffer || !n.DataView), h = c, d = 0, u = 'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'.split(','); d < 9; ) (i = n[u[d++]]) ? (s(i.prototype, a, !0), s(i.prototype, l, !0))  : h = !1;
t.exports = {
ABV: c,
CONSTR: h,
TYPED: a,
VIEW: l
}
},
DVgA: function (t, e, r) {
var i = r('zhAb'),
n = r('4R4u');
t.exports = Object.keys || function (t) {
return i(t, n)
}
},
E2g8: function (t, e, r) {
(function (i, n) {
var s;
(function () {
'use strict';
function o(t) {
return 'function' == typeof t
}
var a,
l,
c = Array.isArray ? Array.isArray : function (t) {
return '[object Array]' === Object.prototype.toString.call(t)
},
h = 0,
d = function (t, e) {
O[h] = t,
O[h + 1] = e,
2 === (h += 2) && (l ? l(P)  : v())
};
var u = 'undefined' != typeof window ? window : void 0,
p = u || {
},
_ = p.MutationObserver || p.WebKitMutationObserver,
f = void 0 !== i && '[object process]' === {
}.toString.call(i),
m = 'undefined' != typeof Uint8ClampedArray && 'undefined' != typeof importScripts && 'undefined' != typeof MessageChannel;
function g() {
return function () {
setTimeout(P, 1)
}
}
var v,
b,
y,
E,
w,
O = new Array(1000);
function P() {
for (var t = 0; t < h; t += 2) {
(0, O[t]) (O[t + 1]),
O[t] = void 0,
O[t + 1] = void 0
}
h = 0
}
f ? v = function () {
i.nextTick(P)
}
 : _ ? (y = 0, E = new _(P), w = document.createTextNode(''), E.observe(w, {
characterData: !0
}), v = function () {
w.data = y = ++y % 2
})  : m ? ((b = new MessageChannel).port1.onmessage = P, v = function () {
b.port2.postMessage(0)
})  : v = void 0 === u ? function () {
try {
var t = r(!function () {
var t = new Error('Cannot find module \'vertx\'');
throw t.code = 'MODULE_NOT_FOUND',
t
}());
return a = t.runOnLoop || t.runOnContext,
function () {
a(P)
}
} catch (t) {
return g()
}
}()  : g();
var C = function (t, e) {
var r = this._state;
if (r === D && !t || r === k && !e) return this;
var i = new this.constructor(A),
n = this._result;
if (r) {
var s = arguments[r - 1];
d(function () {
U(r, i, s, n)
})
} else F(this, i, t, e);
return i
};
var x = function (t) {
if (t && 'object' == typeof t && t.constructor === this) return t;
var e = new this(A);
return I(e, t),
e
};
function A() {
}
var M = void 0,
D = 1,
k = 2,
T = new W;
function j(t) {
try {
return t.then
} catch (t) {
return T.error = t,
T
}
}
function S(t, e, r) {
e.constructor === t.constructor && r === C && constructor.resolve === x ? function (t, e) {
e._state === D ? B(t, e._result)  : e._state === k ? R(t, e._result)  : F(e, void 0, function (e) {
I(t, e)
}, function (e) {
R(t, e)
})
}(t, e)  : r === T ? R(t, T.error)  : void 0 === r ? B(t, e)  : o(r) ? function (t, e, r) {
d(function (t) {
var i = !1,
n = function (t, e, r, i) {
try {
t.call(e, r, i)
} catch (t) {
return t
}
}(r, e, function (r) {
i || (i = !0, e !== r ? I(t, r)  : B(t, r))
}, function (e) {
i || (i = !0, R(t, e))
}, t._label);
!i && n && (i = !0, R(t, n))
}, t)
}(t, e, r)  : B(t, e)
}
function I(t, e) {
var r;
t === e ? R(t, new TypeError('You cannot resolve a promise with itself'))  : 'function' == typeof (r = e) || 'object' == typeof r && null !== r ? S(t, e, j(e))  : B(t, e)
}
function L(t) {
t._onerror && t._onerror(t._result),
N(t)
}
function B(t, e) {
t._state === M && (t._result = e, t._state = D, 0 !== t._subscribers.length && d(N, t))
}
function R(t, e) {
t._state === M && (t._state = k, t._result = e, d(L, t))
}
function F(t, e, r, i) {
var n = t._subscribers,
s = n.length;
t._onerror = null,
n[s] = e,
n[s + D] = r,
n[s + k] = i,
0 === s && t._state && d(N, t)
}
function N(t) {
var e = t._subscribers,
r = t._state;
if (0 !== e.length) {
for (var i, n, s = t._result, o = 0; o < e.length; o += 3) i = e[o],
n = e[o + r],
i ? U(r, i, n, s)  : n(s);
t._subscribers.length = 0
}
}
function W() {
this.error = null
}
var V = new W;
function U(t, e, r, i) {
var n,
s,
a,
l,
c = o(r);
if (c) {
if ((n = function (t, e) {
try {
return t(e)
} catch (t) {
return V.error = t,
V
}
}(r, i)) === V ? (l = !0, s = n.error, n = null)  : a = !0, e === n) return void R(e, new TypeError('A promises callback cannot return that same promise.'))
} else n = i,
a = !0;
e._state !== M || (c && a ? I(e, n)  : l ? R(e, s)  : t === D ? B(e, n)  : t === k && R(e, n))
}
var K = function (t) {
return new Y(this, t).promise
};
var H = function (t) {
var e = new this(A);
if (!c(t)) return R(e, new TypeError('You must pass an array to race.')),
e;
var r = t.length;
function i(t) {
I(e, t)
}
function n(t) {
R(e, t)
}
for (var s = 0; e._state === M && s < r; s++) F(this.resolve(t[s]), void 0, i, n);
return e
};
var z = function (t) {
var e = new this(A);
return R(e, t),
e
},
G = 0;
var q = X;
function X(t) {
this._id = G++,
this._state = void 0,
this._result = void 0,
this._subscribers = [
],
A !== t && ('function' != typeof t && function () {
throw new TypeError('You must pass a resolver function as the first argument to the promise constructor')
}(), this instanceof X ? function (t, e) {
try {
e(function (e) {
I(t, e)
}, function (e) {
R(t, e)
})
} catch (e) {
R(t, e)
}
}(this, t)  : function () {
throw new TypeError('Failed to construct \'Promise\': Please use the \'new\' operator, this object constructor cannot be called as a function.')
}())
}
X.all = K,
X.race = H,
X.resolve = x,
X.reject = z,
X._setScheduler = function (t) {
l = t
},
X._setAsap = function (t) {
d = t
},
X._asap = d,
X.prototype = {
constructor: X,
then: C,
catch : function (t) {
return this.then(null, t)
}
};
var Y = $;
function $(t, e) {
this._instanceConstructor = t,
this.promise = new t(A),
Array.isArray(e) ? (this._input = e, this.length = e.length, this._remaining = e.length, this._result = new Array(this.length), 0 === this.length ? B(this.promise, this._result)  : (this.length = this.length || 0, this._enumerate(), 0 === this._remaining && B(this.promise, this._result)))  : R(this.promise, this._validationError())
}
$.prototype._validationError = function () {
return new Error('Array Methods must be provided an Array')
},
$.prototype._enumerate = function () {
for (var t = this.length, e = this._input, r = 0; this._state === M && r < t; r++) this._eachEntry(e[r], r)
},
$.prototype._eachEntry = function (t, e) {
var r = this._instanceConstructor,
i = r.resolve;
if (i === x) {
var n = j(t);
if (n === C && t._state !== M) this._settledAt(t._state, e, t._result);
 else if ('function' != typeof n) this._remaining--,
this._result[e] = t;
 else if (r === q) {
var s = new r(A);
S(s, t, n),
this._willSettleAt(s, e)
} else this._willSettleAt(new r(function (e) {
e(t)
}), e)
} else this._willSettleAt(i(t), e)
},
$.prototype._settledAt = function (t, e, r) {
var i = this.promise;
i._state === M && (this._remaining--, t === k ? R(i, r)  : this._result[e] = r),
0 === this._remaining && B(i, this._result)
},
$.prototype._willSettleAt = function (t, e) {
var r = this;
F(t, void 0, function (t) {
r._settledAt(D, e, t)
}, function (t) {
r._settledAt(k, e, t)
})
};
var Q = function () {
var t;
if (void 0 !== n) t = n;
 else if ('undefined' != typeof self) t = self;
 else try {
t = Function('return this') ()
} catch (t) {
throw new Error('polyfill failed because global object is unavailable in this environment')
}
var e = t.Promise;
e && '[object Promise]' === Object.prototype.toString.call(e.resolve()) && !e.cast || (t.Promise = q)
},
Z = {
Promise: q,
polyfill: Q
};
void 0 === (s = function () {
return Z
}.call(e, r, e, t)) || (t.exports = s),
Q()
}).call(this)
}).call(this, r('8oxB'), r('yLpj'))
},
EWmC: function (t, e, r) {
var i = r('LZWt');
t.exports = Array.isArray || function (t) {
return 'Array' == i(t)
}
},
EasH: function (__webpack_module__, __webpack_exports__, __webpack_require__) {
'use strict';
__webpack_require__.r(__webpack_exports__),
__webpack_require__.d(__webpack_exports__, 'MessageBox', function () {
return MessageBox
}),
__webpack_require__.d(__webpack_exports__, 'showBox', function () {
return showBox
}),
__webpack_require__.d(__webpack_exports__, 'showTabbedBox', function () {
return showTabbedBox
}),
__webpack_require__.d(__webpack_exports__, 'showFastBox', function () {
return showFastBox
}),
__webpack_require__.d(__webpack_exports__, 'showCaptchaBox', function () {
return showCaptchaBox
}),
__webpack_require__.d(__webpack_exports__, 'showReCaptchaBox', function () {
return showReCaptchaBox
});
var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('KKXr'),
_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('v+DW'),
_debug_tools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('98sY'),
_dom_events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('Egk5'),
_ui_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('ryw6'),
_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('zxIV'),
_fx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('7jxN'),
_utils_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('t7n3'),
_lang__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('4+be'),
_shared_lib_convert__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__('cGUQ'),
_box_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__('kcIO'),
_accessibility__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__('QGEU'),
_web_helpers_classnames__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__('pemR');
function MessageBox(_options) {
var defaults = {
title: !1,
titleControls: '',
containerClass: '',
width: 450,
height: 'auto',
animSpeed: 0,
bodyStyle: '',
grey: !1,
white: !1,
selfDestruct: !0,
progress: !1,
hideOnBGClick: !1,
hideButtons: !1,
onShow: !1,
onHideAttempt: !1,
onBeforeHide: !1,
onHide: !1,
onClean: !1,
onDestroy: !1
},
options = Object(_utils_common__WEBPACK_IMPORTED_MODULE_7__.extend) (defaults, _options),
guid = window._message_box_guid++,
visible = !1,
btns = {
ok: [
],
cancel: [
]
},
boxTitleBck;
options.progress || (options.progress = 'box_progress' + guid);
var controlsStyle = options.hideButtons ? ' style="display: none"' : '',
boxContainer = Object(_dom__WEBPACK_IMPORTED_MODULE_5__.ce) ('div', {
className: Object(_web_helpers_classnames__WEBPACK_IMPORTED_MODULE_12__.classNames) ('popup_box_container', options.containerClass),
innerHTML: `
<div class="box_layout" onclick="boxQueue.skip=true;">
  <div class="box_title_wrap">
    <div class="box_x_button" aria-label="${Object(_lang__WEBPACK_IMPORTED_MODULE_8__.getLang) ('global_close')
}
" tabindex="0" role="button"></div>
    <div class="box_title_controls"></div>
    <div class="box_title"></div>
  </div>

  <div class="box_body" style="${options.bodyStyle
}
"></div>
  ${options.noControls ? '' : `
  <div class="box_controls_wrap" ${controlsStyle
}
>
    <div class="box_controls">
      <table cellspacing="0" cellpadding="0" class="fl_r">
        <tr></tr>
      </table>
      <div class="progress" id="${options.progress
}
"></div>

      <div class="box_controls_text _box_controls_text">${options.textControls || ''
}
</div>
    </div>
  <div>`
}

</div>`
},
{
display: 'none'
});
Object(_dom__WEBPACK_IMPORTED_MODULE_5__.hide) (boxContainer);
var boxLayout = Object(_dom__WEBPACK_IMPORTED_MODULE_5__.domFC) (boxContainer),
boxTitleWrap = Object(_dom__WEBPACK_IMPORTED_MODULE_5__.domFC) (boxLayout),
boxCloseButton = Object(_dom__WEBPACK_IMPORTED_MODULE_5__.domFC) (boxTitleWrap),
boxTitle = Object(_dom__WEBPACK_IMPORTED_MODULE_5__.domLC) (boxTitleWrap),
boxTitleControls = Object(_dom__WEBPACK_IMPORTED_MODULE_5__.domNS) (boxCloseButton);
options.noCloseButton && Object(_dom__WEBPACK_IMPORTED_MODULE_5__.hide) (boxCloseButton);
var boxBody = Object(_dom__WEBPACK_IMPORTED_MODULE_5__.domNS) (boxTitleWrap),
boxControlsWrap = Object(_dom__WEBPACK_IMPORTED_MODULE_5__.domNS) (boxBody),
boxControls = Object(_dom__WEBPACK_IMPORTED_MODULE_5__.domFC) (boxControlsWrap),
boxButtons = Object(_dom__WEBPACK_IMPORTED_MODULE_5__.domFC) (boxControls),
boxProgress = Object(_dom__WEBPACK_IMPORTED_MODULE_5__.domNS) (boxButtons),
boxControlsText = Object(_dom__WEBPACK_IMPORTED_MODULE_5__.domNS) (boxProgress);
boxLayer.appendChild(boxContainer),
boxContainer.setAttribute('tabindex', 0),
boxContainer.focus(),
refreshBox(),
Object(_box_utils__WEBPACK_IMPORTED_MODULE_10__.boxRefreshCoords) (boxContainer);
var emitter = new EventEmitter;
function refreshBox() {
boxTitleBck || (options.title ? (boxTitle.innerHTML = options.title, Object(_dom__WEBPACK_IMPORTED_MODULE_5__.removeClass) (boxBody, 'box_no_title'), Object(_dom__WEBPACK_IMPORTED_MODULE_5__.show) (boxTitleWrap))  : (Object(_dom__WEBPACK_IMPORTED_MODULE_5__.addClass) (boxBody, 'box_no_title'), Object(_dom__WEBPACK_IMPORTED_MODULE_5__.hide) (boxTitleWrap))),
options.titleControls && (boxTitleControls.innerHTML = options.titleControls),
Object(_dom__WEBPACK_IMPORTED_MODULE_5__.toggleClass) (boxBody, 'box_no_buttons', options.hideButtons),
Object(_dom__WEBPACK_IMPORTED_MODULE_5__.toggleClass) (boxTitleWrap, 'box_grey', options.grey),
Object(_dom__WEBPACK_IMPORTED_MODULE_5__.toggleClass) (boxTitleWrap, 'box_white', options.white),
boxContainer.style.width = 'string' == typeof options.width ? options.width : options.width + 'px',
boxContainer.style.height = 'string' == typeof options.height ? options.height : options.height + 'px'
}
function _addButton(t, e, r, i) {
var n = 'flat_button';
'no' === r || 'gray' === r ? (n += ' secondary', r = 'cancel')  : r = 'ok';
var s = Object(_dom__WEBPACK_IMPORTED_MODULE_5__.ce) ('button', {
className: n,
innerHTML: t,
id: i
});
return boxButtons.rows[0].insertCell(0).appendChild(s),
Object(_ui__WEBPACK_IMPORTED_MODULE_1__.createButton) (s, function () {
emitter.emit(r, retBox),
e.apply(null, arguments)
}),
btns[r].push(s),
s
}
function setControlsText(t) {
boxControlsText.innerHTML = t
}
function _removeButtons() {
for (var t = boxButtons.rows[0]; t.cells.length; ) Object(_dom__WEBPACK_IMPORTED_MODULE_5__.cleanElems) (t.cells[0]),
t.deleteCell(0);
btns.ok.length = btns.cancel.length = 0
}
var destroyMe = function () {
Object(_utils_common__WEBPACK_IMPORTED_MODULE_7__.isFunction) (options.onClean) && options.onClean(),
Object(_utils_common__WEBPACK_IMPORTED_MODULE_7__.isFunction) (options.onDestroy) && options.onDestroy(),
options.noControls || _removeButtons(),
Object(_dom__WEBPACK_IMPORTED_MODULE_5__.cleanElems) (boxContainer, boxCloseButton, boxTitleWrap, options.noControls ? void 0 : boxControlsWrap),
boxLayer.removeChild(boxContainer),
delete window._message_boxes[guid]
},
hideMe = function (t, e, r) {
if (visible) {
visible = !1;
var i = !0 === t ? 0 : options.animSpeed;
options.hideOnBGClick && Object(_dom_events__WEBPACK_IMPORTED_MODULE_3__.removeEvent) (document, 'click', boxQueue.hideBGClick),
Object(_utils_common__WEBPACK_IMPORTED_MODULE_7__.isFunction) (options.onBeforeHide) && options.onBeforeHide();
var n = function () {
boxQueue.currHiding === _message_boxes[guid] && (boxQueue.currHiding = !1),
_message_boxes[guid].shOther || t || layers.boxhide(),
!e && options.selfDestruct ? destroyMe()  : Object(_dom__WEBPACK_IMPORTED_MODULE_5__.hide) (boxContainer),
Object(_utils_common__WEBPACK_IMPORTED_MODULE_7__.isFunction) (options.onHide) && options.onHide(r)
};
i > 0 ? (boxQueue.currHiding = _message_boxes[guid], Object(_fx__WEBPACK_IMPORTED_MODULE_6__.fadeOut) (boxContainer, i, n))  : n()
}
};
function showMe(t, e, r) {
if (!visible && window._message_boxes[guid] && !window._message_boxes[guid].forceHide) {
visible = !0;
var i = !0 === t || e ? 0 : options.animSpeed;
if (options.hideOnBGClick && Object(_dom_events__WEBPACK_IMPORTED_MODULE_3__.addEvent) (document, 'click', boxQueue.hideBGClick), e || layers.boxshow(), boxQueue.currHiding) {
boxQueue.currHiding.shOther = !0;
var n = boxQueue.currHiding.bodyNode.parentNode.parentNode;
Object(_dom__WEBPACK_IMPORTED_MODULE_5__.data) (n, 'tween').stop(!0)
}
i > 0 ? Object(_fx__WEBPACK_IMPORTED_MODULE_6__.fadeIn) (boxContainer, i)  : Object(_dom__WEBPACK_IMPORTED_MODULE_5__.show) (boxContainer),
Object(_box_utils__WEBPACK_IMPORTED_MODULE_10__.boxRefreshCoords) (boxContainer),
options.onShow && options.onShow(r)
}
}
Object(_dom_events__WEBPACK_IMPORTED_MODULE_3__.addEvent) (boxCloseButton, 'click', boxQueue.hideLast);
var retBox = window._message_boxes[guid] = {
guid,
_show: showMe,
_hide: hideMe,
bodyNode: boxBody,
controlsTextNode: boxControlsText,
titleWrap: boxTitleWrap,
btns,
show: function () {
return boxQueue._show(guid),
this
},
progress: boxProgress,
showCloseProgress: _dom__WEBPACK_IMPORTED_MODULE_5__.addClass.pbind(boxTitleWrap, 'box_loading'),
hideCloseProgress: _dom__WEBPACK_IMPORTED_MODULE_5__.removeClass.pbind(boxTitleWrap, 'box_loading'),
showProgress: function () {
Object(_dom__WEBPACK_IMPORTED_MODULE_5__.hide) (boxControlsText),
Object(_dom__WEBPACK_IMPORTED_MODULE_5__.show) (boxProgress)
},
hideProgress: function () {
Object(_dom__WEBPACK_IMPORTED_MODULE_5__.hide) (boxProgress),
Object(_dom__WEBPACK_IMPORTED_MODULE_5__.show) (boxControlsText)
},
hide: function (t) {
return !(Object(_utils_common__WEBPACK_IMPORTED_MODULE_7__.isFunction) (options.onHideAttempt) && !options.onHideAttempt(t)) && (boxQueue._hide(guid), !0)
},
isVisible: function () {
return visible
},
bodyHeight: function () {
return Object(_dom__WEBPACK_IMPORTED_MODULE_5__.getStyle) (boxBody, 'height')
},
content: function (t) {
return options.onClean && options.onClean(),
'string' == typeof t ? boxBody.innerHTML = t : t instanceof HTMLElement && (boxBody.innerHTML = '', boxBody.appendChild(t)),
Object(_box_utils__WEBPACK_IMPORTED_MODULE_10__.boxRefreshCoords) (boxContainer),
boxContainer.focus(),
refreshBox(),
Object(_accessibility__WEBPACK_IMPORTED_MODULE_11__.updateAriaElements) (),
this
},
emit: function (t, e) {
emitter.emit(t, e)
},
addButton: function (t, e, r, i, n) {
var s = _addButton(t, e || this.hide, r, n);
return i ? s : this
},
setButtons: function (t, e, r, i) {
var n = this.removeButtons();
return t ? (n.addButton(t, e), r && n.addButton(r, i, 'no'), n)  : n.addButton(Object(_lang__WEBPACK_IMPORTED_MODULE_8__.getLang) ('box_close'))
},
setControlsText,
removeButtons: function () {
return _removeButtons(),
this
},
setBackTitle: function (t) {
t ? (boxTitle.innerHTML = '<div class="back">' + Object(_lang__WEBPACK_IMPORTED_MODULE_8__.getLang) ('global_box_title_back') + '</div>', boxTitleBck = options.title, options.title = boxTitle.innerHTML, setTimeout(function () {
Object(_dom__WEBPACK_IMPORTED_MODULE_5__.geByClass1) ('back', boxTitle).onclick = t
}, 100))  : boxTitleBck && (boxTitle.innerHTML = options.title = boxTitleBck, boxTitleBck = !1)
},
destroy: destroyMe,
getOptions: function () {
return options
},
on: function (t, e) {
emitter.on(t, e)
},
once: function (t, e) {
emitter.once(t, e)
},
updateBoxCoords: function () {
Object(_box_utils__WEBPACK_IMPORTED_MODULE_10__.boxRefreshCoords) (boxContainer)
},
setOptions: function (t) {
if (options.hideOnBGClick && Object(_dom_events__WEBPACK_IMPORTED_MODULE_3__.removeEvent) (document, 'click', boxQueue.hideBGClick), options = Object(_utils_common__WEBPACK_IMPORTED_MODULE_7__.extend) (options, t), 'bodyStyle' in t) for (var e = options.bodyStyle.split(';'), r = 0, i = e.length; r < i; r++) {
var n = e[r].split(':');
n.length > 1 && n[0].length && (boxBody.style[Object(_utils_common__WEBPACK_IMPORTED_MODULE_7__.trim) (n[0])] = Object(_utils_common__WEBPACK_IMPORTED_MODULE_7__.trim) (n[1]), boxBody.style.setProperty && boxBody.style.setProperty(Object(_utils_common__WEBPACK_IMPORTED_MODULE_7__.trim) (n[0]), Object(_utils_common__WEBPACK_IMPORTED_MODULE_7__.trim) (n[1]), ''))
}
return options.hideOnBGClick && Object(_dom_events__WEBPACK_IMPORTED_MODULE_3__.addEvent) (document, 'click', boxQueue.hideBGClick),
Object(_dom__WEBPACK_IMPORTED_MODULE_5__.toggle) (boxControlsWrap, !options.hideButtons),
refreshBox(),
options.noRefreshCoords || Object(_box_utils__WEBPACK_IMPORTED_MODULE_10__.boxRefreshCoords) (boxContainer),
this
},
evalBox: function evalBox(js, url, params) {
var scr = '((function() { return function() { var box = this; ' + (js || '') + ';}; })())';
if (__debugMode) {
var fn = eval(scr);
fn.apply(this, [
url,
params
])
} else try {
var _fn = eval(scr);
_fn.apply(this, [
url,
params
])
} catch (t) {
Object(_ui_util__WEBPACK_IMPORTED_MODULE_4__.topError) (t, {
dt: 15,
type: 7,
url,
query: params ? Object(_shared_lib_convert__WEBPACK_IMPORTED_MODULE_9__.toQueryString) (params)  : void 0,
js
}),
Object(_debug_tools__WEBPACK_IMPORTED_MODULE_2__.logEvalError) (t, scr)
}
}
};
return retBox
}
function showBox(t, e) {
var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
},
i = arguments.length > 3 ? arguments[3] : void 0;
if (Object(_dom_events__WEBPACK_IMPORTED_MODULE_3__.checkEvent) (i)) return !1;
var n = r.params || {
};
r.containerClass && (n.containerClass = r.containerClass);
var s = new MessageBox(n),
o = {
onDone: function (i, o, a, l) {
if (r.preOnDone && r.onDone && r.onDone(s), s.isVisible()) if (__debugMode) c();
 else try {
c()
} catch (r) {
Object(_ui_util__WEBPACK_IMPORTED_MODULE_4__.topError) (r, {
dt: 15,
type: 103,
url: t,
query: Object(_shared_lib_convert__WEBPACK_IMPORTED_MODULE_9__.toQueryString) (e),
answer: Array.prototype.slice.call(arguments).join('<!>')
}),
s.isVisible() && s.hide()
} else r.onDone && r.onDone(s, l);
function c() {
Object(_dom__WEBPACK_IMPORTED_MODULE_5__.show) (boxLayerBG),
Object(_dom__WEBPACK_IMPORTED_MODULE_5__.addClass) (bodyNode, 'layers_shown'),
s.setOptions({
title: i,
hideButtons: n.hideButtons || !1
}),
r.showProgress ? s.show()  : Object(_dom__WEBPACK_IMPORTED_MODULE_5__.show) (s.bodyNode),
s.content(o),
s.evalBox(a, t, e),
r.onDone && r.onDone(s, l)
}
},
onFail: function (t) {
if (s.failed = !0, setTimeout(s.hide, 0), Object(_utils_common__WEBPACK_IMPORTED_MODULE_7__.isFunction) (r.onFail)) return r.onFail(t)
},
cache: r.cache,
stat: r.stat,
fromBox: !0
};
return r.prgEl && (r.showProgress = _ui_util__WEBPACK_IMPORTED_MODULE_4__.showGlobalPrg.pbind(r.prgEl, {
cls: r.prgClass,
w: r.prgW,
h: r.prgH,
hide: !0
}), r.hideProgress = _dom__WEBPACK_IMPORTED_MODULE_5__.hide.pbind('global_prg')),
r.showProgress ? Object(_utils_common__WEBPACK_IMPORTED_MODULE_7__.extend) (o, {
showProgress: r.showProgress,
hideProgress: r.hideProgress
})  : (s.setOptions({
title: !1,
hideButtons: !0
}).show(), boxQueue.count() < 2 && (Object(_dom__WEBPACK_IMPORTED_MODULE_5__.hide) (boxLayerBG), Object(_dom__WEBPACK_IMPORTED_MODULE_5__.removeClass) (bodyNode, 'layers_shown')), Object(_dom__WEBPACK_IMPORTED_MODULE_5__.hide) (s.bodyNode), o.showProgress = function () {
Object(_dom__WEBPACK_IMPORTED_MODULE_5__.show) (boxLoader),
Object(_box_utils__WEBPACK_IMPORTED_MODULE_10__.boxRefreshCoords) (boxLoader)
}, o.hideProgress = _dom__WEBPACK_IMPORTED_MODULE_5__.hide.pbind(boxLoader)),
s.removeButtons().addButton(Object(_lang__WEBPACK_IMPORTED_MODULE_8__.getLang) ('global_close')),
ajax.post(t, e, o),
s
}
function showTabbedBox(t, e, r, i) {
return (r = r || {
}).stat = r.stat || [
],
r.stat.push('box.js', 'boxes.css'),
showBox(t, e, r, i)
}
function showFastBox(t, e, r, i, n, s) {
return new MessageBox('string' == typeof t ? {
title: t
}
 : t).content(e).setButtons(r, i, n, s).show()
}
function showCaptchaBox(t, e, r, i) {
var n = function (e) {
if (!e || void 0 === e.keyCode || 10 === e.keyCode || 13 === e.keyCode) {
var n = Object(_dom__WEBPACK_IMPORTED_MODULE_5__.geByTag1) ('input', r.bodyNode);
if (Object(_utils_common__WEBPACK_IMPORTED_MODULE_7__.trim) (n.value) || !0 === e) {
var s = Object(_dom__WEBPACK_IMPORTED_MODULE_5__.geByTag1) ('img', r.bodyNode) [0];
Object(_dom_events__WEBPACK_IMPORTED_MODULE_3__.removeEvent) (n),
Object(_dom_events__WEBPACK_IMPORTED_MODULE_3__.removeEvent) (s),
Object(_dom__WEBPACK_IMPORTED_MODULE_5__.show) (Object(_dom__WEBPACK_IMPORTED_MODULE_5__.geByClass1) ('progress', r.bodyNode)),
Object(_dom__WEBPACK_IMPORTED_MODULE_5__.hide) (n),
i.onSubmit(t, n.value)
} else Object(_dom__WEBPACK_IMPORTED_MODULE_5__.elfocus) (n)
}
},
s = !!r,
o = Object(_utils_common__WEBPACK_IMPORTED_MODULE_7__.intval) (e) ? '' : '&s=1',
a = i.imgSrc || '/captcha.php?sid=' + t + o;
if (!s) {
var l = `
<div class="captcha">
  <div><img src="${a
}
"/></div>
  <div>
    <input type="text" class="big_text" maxlength="7" placeholder="${Object(_lang__WEBPACK_IMPORTED_MODULE_8__.getLang) ('global_captcha_input_here')
}
" />
    <div class="progress" /></div>
  </div>
</div>` + (i.addText || '');
r = showFastBox({
title: Object(_lang__WEBPACK_IMPORTED_MODULE_8__.getLang) ('captcha_enter_code'),
width: 305,
onHide: i.onHide,
onDestroy: i.onDestroy || !1
}, l, Object(_lang__WEBPACK_IMPORTED_MODULE_8__.getLang) ('captcha_send'), function () {
r.submit()
}, Object(_lang__WEBPACK_IMPORTED_MODULE_8__.getLang) ('captcha_cancel'), function () {
var t = Object(_dom__WEBPACK_IMPORTED_MODULE_5__.geByTag1) ('input', r.bodyNode),
e = Object(_dom__WEBPACK_IMPORTED_MODULE_5__.geByTag1) ('img', r.bodyNode);
Object(_dom_events__WEBPACK_IMPORTED_MODULE_3__.removeEvent) (t),
Object(_dom_events__WEBPACK_IMPORTED_MODULE_3__.removeEvent) (e),
r.hide()
})
}
r.submit = n.pbind(!0),
r.changed = !0;
var c = Object(_dom__WEBPACK_IMPORTED_MODULE_5__.geByTag1) ('input', r.bodyNode),
h = Object(_dom__WEBPACK_IMPORTED_MODULE_5__.geByTag1) ('img', r.bodyNode);
return s && (c.value = '', h.src = '/captcha.php?sid=' + t + o, Object(_dom__WEBPACK_IMPORTED_MODULE_5__.hide) (Object(_dom__WEBPACK_IMPORTED_MODULE_5__.geByClass1) ('progress', r.bodyNode))),
Object(_dom__WEBPACK_IMPORTED_MODULE_5__.show) (c),
Object(_dom_events__WEBPACK_IMPORTED_MODULE_3__.addEvent) (c, 'keypress', n),
Object(_dom_events__WEBPACK_IMPORTED_MODULE_3__.addEvent) (h, 'click', function () {
this.src = '/captcha.php?sid=' + t + o + '&v=' + Object(_utils_common__WEBPACK_IMPORTED_MODULE_7__.irand) (1000000, 2000000)
}),
Object(_dom__WEBPACK_IMPORTED_MODULE_5__.elfocus) (c),
r
}
function showReCaptchaBox(t, e, r, i) {
window.recaptchaResponse = function (t) {
i.onSubmit(t)
};
var n = !!r,
s = !!window.grecaptcha;
if (!n) {
s || (window.recaptchaCallback = function () {
var e = Object(_box_utils__WEBPACK_IMPORTED_MODULE_10__.curBox) ();
if (e) {
var r = Object(_dom__WEBPACK_IMPORTED_MODULE_5__.geByClass1) ('recaptcha', e.bodyNode);
r && (Object(_dom__WEBPACK_IMPORTED_MODULE_5__.val) (r, ''), window.grecaptcha.render(r, {
sitekey: t,
callback: window.recaptchaResponse
}))
}
}, headNode.appendChild(Object(_dom__WEBPACK_IMPORTED_MODULE_5__.ce) ('script', {
type: 'text/javascript',
src: 'https://www.google.com/recaptcha/api.js?onload=recaptchaCallback&render=explicit&hl=' + e
})));
var o = '<div class="recaptcha"></div>' + (i.addText || '');
r = showFastBox({
title: Object(_lang__WEBPACK_IMPORTED_MODULE_8__.getLang) ('global_recaptcha_title'),
width: 354,
onHide: i.onHide,
onDestroy: i.onDestroy || !1
}, o, Object(_lang__WEBPACK_IMPORTED_MODULE_8__.getLang) ('captcha_cancel'));
var a = Object(_dom__WEBPACK_IMPORTED_MODULE_5__.geByClass1) ('recaptcha', r.bodyNode);
a.id = 'recaptcha' + (r.guid ? r.guid : '0'),
Object(_ui__WEBPACK_IMPORTED_MODULE_1__.showProgress) (a)
}
return n && s ? window.grecaptcha.reset()  : s && window.recaptchaCallback(),
r.changed = !0,
r
}
},
EemH: function (t, e, r) {
var i = r('UqcF'),
n = r('RjD/'),
s = r('aCFj'),
o = r('apmT'),
a = r('aagx'),
l = r('xpql'),
c = Object.getOwnPropertyDescriptor;
e.f = r('nh4g') ? c : function (t, e) {
if (t = s(t), e = o(e, !0), l) try {
return c(t, e)
} catch (t) {
}
if (a(t, e)) return n(!i.f.call(t, e), t[e])
}
},
Egk5: function (t, e, r) {
'use strict';
r.r(e),
r.d(e, 'KEY', function () {
return o
}),
r.d(e, 'addEvent', function () {
return a
}),
r.d(e, 'removeEvent', function () {
return l
}),
r.d(e, 'triggerEvent', function () {
return c
}),
r.d(e, 'cancelEvent', function () {
return h
}),
r.d(e, 'stopEvent', function () {
return d
}),
r.d(e, 'normEvent', function () {
return p
}),
r.d(e, 'checkEvent', function () {
return _
}),
r.d(e, 'checkKeyboardEvent', function () {
return f
}),
r.d(e, 'checkOver', function () {
return m
});
r('HEwt'),
r('KKXr');
var i = r('zxIV'),
n = r('t7n3'),
s = r('gdug'),
o = {
LEFT: 37,
UP: 38,
RIGHT: 39,
DOWN: 40,
DEL: 8,
TAB: 9,
RETURN: 13,
ENTER: 13,
ESC: 27,
PAGEUP: 33,
PAGEDOWN: 34,
SPACE: 32,
CTRL: 17,
ALT: 18,
SHIFT: 16
};
function a(t, e, r, s, o, a) {
if ((t = Object(i.ge) (t)) && 3 != t.nodeType && 8 != t.nodeType) {
var l,
c = o ? ((l = function (t) {
var e = t.data;
t.data = o;
var i = r.apply(this, [
t
]);
return t.data = e,
i
}).handler = r, l)  : r;
t.setInterval && t !== window && (t = window);
var h = Object(i.data) (t, 'events') || Object(i.data) (t, 'events', {
}),
d = Object(i.data) (t, 'handle') || Object(i.data) (t, 'handle', function (t) {
return function () {
u.apply(t, arguments)
}
}(t));
Object(n.each) (e.split(/\s+/), function (e, r) {
h[r] || (h[r] = [
], !s && t.addEventListener ? t.addEventListener(r, d, a)  : !s && t.attachEvent && t.attachEvent('on' + r, d)),
h[r].push(c)
})
}
}
function l(t, e, r, s) {
if (void 0 === s && (s = !1), t = Object(i.ge) (t)) {
var o = Object(i.data) (t, 'events');
if (o) if ('string' == typeof e) Object(n.each) (e.split(/\s+/), function (e, a) {
if (Object(n.isArray) (o[a])) {
var l = o[a].length;
if (Object(n.isFunction) (r)) {
for (var c = l - 1; c >= 0; c--) if (o[a][c] && (o[a][c] === r || o[a][c].handler === r)) {
o[a].splice(c, 1),
l--;
break
}
} else {
for (var h = 0; h < l; h++) delete o[a][h];
l = 0
}
l || (t.removeEventListener ? t.removeEventListener(a, Object(i.data) (t, 'handle'), s)  : t.detachEvent && t.detachEvent('on' + a, Object(i.data) (t, 'handle')), delete o[a])
}
}),
Object(n.isEmpty) (o) && (Object(i.removeData) (t, 'events'), Object(i.removeData) (t, 'handle'));
 else for (var a in o) o.hasOwnProperty(a) && l(t, a)
}
}
function c(t, e, r, s) {
t = Object(i.ge) (t);
var o = Object(i.data) (t, 'handle');
if (o) {
var a = () =>o.call(t, Object(n.extend) (r || {
}, {
type: e,
target: t
}));
s ? a()  : setTimeout(a, 0)
}
}
function h(t) {
if (!(t = t || window.event)) return !1;
for (; t.originalEvent; ) t = t.originalEvent;
return t.preventDefault && t.preventDefault(),
t.stopPropagation && t.stopPropagation(),
t.stopImmediatePropagation && t.stopImmediatePropagation(),
t.cancelBubble = !0,
t.returnValue = !1,
!1
}
function d(t) {
if (!(t = t || window.event)) return !1;
for (; t.originalEvent; ) t = t.originalEvent;
return t.stopPropagation && t.stopPropagation(),
t.cancelBubble = !0,
!1
}
function u(t) {
t = p(t);
var e = Array.from(arguments);
e[0] = t;
var r = Object(i.data) (this, 'events');
if (r && 'string' == typeof t.type && r[t.type] && r[t.type].length) {
var n = (r[t.type] || [
]).slice();
for (var s in n) if (n.hasOwnProperty(s)) {
if ('mouseover' === t.type || 'mouseout' === t.type) {
for (var o = t.relatedElement; o && o !== this; ) o = o.parentNode;
if (o === this) continue
}
var a = n[s].apply(this, e);
if (!1 !== a && - 1 !== a || h(t), - 1 === a) return !1
}
}
}
function p(t) {
var e = t = t || window.event;
if ((t = Object(n.clone) (e)).originalEvent = e, t.target || (t.target = t.srcElement || document), 3 == t.target.nodeType && (t.target = t.target.parentNode), !t.relatedTarget && t.fromElement && (t.relatedTarget = t.fromElement === t.target), null == t.pageX && null != t.clientX) {
var r = document.documentElement,
i = bodyNode;
t.pageX = t.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r.clientLeft || 0),
t.pageY = t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r.clientTop || 0)
}
return !t.which && (t.charCode || 0 === t.charCode ? t.charCode : t.keyCode) && (t.which = t.charCode || t.keyCode),
!t.metaKey && t.ctrlKey ? t.metaKey = t.ctrlKey : !t.ctrlKey && t.metaKey && s.browser.mac && (t.ctrlKey = t.metaKey),
!t.which && t.button && (t.which = 1 & t.button ? 1 : 2 & t.button ? 3 : 4 & t.button ? 2 : 0),
t
}
function _(t) {
var e = t || window.event;
return e && ('click' === e.type || 'mousedown' === e.type || 'mouseup' === e.type) && (e.which > 1 || e.button > 1 || e.ctrlKey || e.shiftKey || s.browser.mac && e.metaKey) || !1
}
function f(t) {
if (!(t = p(t)) || !t.target) return !1;
if (!t.screenX) return !0;
var e = Object(i.getSize) (t.target),
r = Object(i.getXY) (t.target),
n = t.pageX - r[0],
s = t.pageY - r[1];
return n < - 1 || n > e[0] + 1 || s < - 1 || s > e[1] + 1 || Math.abs(t.pageX - r[0] - e[0] / 2) < 1 && Math.abs(t.pageY - r[1] - e[1] / 2) < 1
}
function m(t, e) {
if (!t) return !0;
t = t.originalEvent || t,
e = e || t.target;
var r = t.fromElement || t.relatedTarget;
if (!r || r === e || r === e.parentNode) return !0;
for (; r !== e && r.parentNode && r.parentNode !== bodyNode; ) r = r.parentNode;
return r !== e
}
},
El3O: function (t, e, r) {
'use strict';
r.r(e),
r.d(e, 'getPageHeaderHeight', function () {
return m
}),
r.d(e, 'updateNarrow', function () {
return g
}),
r.d(e, 'checkPageBlocks', function () {
return v
}),
r.d(e, 'redraw', function () {
return b
}),
r.d(e, 'onBodyScroll', function () {
return y
}),
r.d(e, 'onBodyResize', function () {
return E
}),
r.d(e, 'leftBlockOver', function () {
return w
}),
r.d(e, 'leftBlockOut', function () {
return O
}),
r.d(e, 'leftBlockHide', function () {
return P
}),
r.d(e, 'autosizeSetup', function () {
return C
}),
r.d(e, 'TopMenu', function () {
return x
}),
r.d(e, 'getProgressHtml', function () {
return A
}),
r.d(e, 'getProgressBarEl', function () {
return M
});
r('pIFo');
var i,
n = r('t7n3'),
s = r('zxIV'),
o = r('lXE5'),
a = r('kHqu'),
l = r('v+DW'),
c = r('m0N1'),
h = r('7jxN'),
d = r('Egk5'),
u = r('i6oL'),
p = r('gdug'),
_ = r('ErRf'),
f = r('/PiP');
function m() {
var t = Object(s.ge) ('page_header');
return i = i || (t ? t.offsetHeight : 0)
}
function g() {
cur.__narrowBar = cur.__narrowBar || {
},
cur.__narrowBar.bar = cur.__narrowBar.bar || Object(s.ge) ('narrow_column'),
cur.__narrowBar.barBlock = cur.__narrowBar.bar && Object(s.geByClass1) ('page_block', cur.__narrowBar.bar),
cur.__narrowBar.wideCol = cur.__narrowBar.wideCol || Object(s.ge) ('wide_column'),
cur.__narrowBar.isBarFixed = cur.__narrowBar.isBarFixed || 'fixed' === Object(s.getStyle) (cur.__narrowBar.bar, 'position'),
cur.__narrowBar.pl = cur.__narrowBar.pl || Object(s.ge) ('page_layout');
var t = cur.__narrowBar.bar,
e = cur.__narrowBar.barBlock,
r = cur.__narrowBar.wideCol,
i = Object(o.scrollGetY) ();
if (!p.browser.mobile && t && e && r && !Object(s.isVisible) (boxLoader) && !Object(s.isVisible) (boxLayerBG) && !Object(s.isVisible) (layerBG)) {
var a,
l = window.lastWindowHeight || 0,
c = Math.min(i, bodyNode.clientHeight - l),
h = cur.__narrowBar.pl,
d = vk.staticheader ? Math.max(0, m() - c)  : m(),
u = cur.__narrowBar.isBarFixed,
_ = Object(n.floatval) (Object(s.getStyle) (cur.__narrowBar.barBlock, 'marginTop')),
f = Object(s.getSize) (t) [1] - (u ? _ : 0),
g = Object(s.getSize) (r) [1],
v = Object(s.getXY) (r) [1],
b = f >= g - _,
y = _,
E = c + l - g - v - y,
w = Math.max(0, E),
O = v - d,
P = Object(s.getXY) (t) [1] + (u ? _ : 0),
C = cur.__narrowBar.lastSt || 0,
x = cur.__narrowBar.lastStyles || {
},
A = d + y + f + _ + w <= l && !cur.narrowHide,
M = cur.__narrowBarForceNotFixed,
D = !1;
c - 1 < O && !(A && p.browser.msie && P < d + _) || b ? a = {
marginTop: 0
}
 : !M && (c - 1 < Math.min(C, P - d - _) || A) ? (a = {
top: d,
marginLeft: Math.min( - bodyNode.scrollLeft, Math.max( - bodyNode.scrollLeft, bodyNode.clientWidth - Object(s.getSize) (h) [0]))
}, D = !0)  : !M && (c + 1 > Math.max(C, P + f + y - l) && E < 0 && !cur.narrowHide || cur.narrowHide && c + 1 > Math.max(C, P + f - d)) ? (a = {
bottom: cur.narrowHide ? l - d : y,
marginLeft: Math.min( - bodyNode.scrollLeft, Math.max( - bodyNode.scrollLeft, bodyNode.clientWidth - Object(s.getSize) (h) [0]))
}, D = !0)  : a = {
marginTop: E >= 0 ? g - f : Math.min(P - v, g - f + O)
},
function (t, e) {
var r = Object(n.clone) (t),
i = Object(n.clone) (e);
return Object(n.each) (r, function (t, e) {
'position' !== t && (r[t] = Math.round(e))
}),
Object(n.each) (i, function (t, e) {
'position' !== t && (i[t] = Math.round(e))
}),
JSON.stringify(r) === JSON.stringify(i)
}(a, x) || (Object(n.each) (x, function (t) {
x[t] = null
}), Object(s.setStyle) (t, Object(n.extend) (x, a)), cur.__narrowBar.lastStyles = a),
D !== u && Object(s.toggleClass) (t, 'fixed', D),
cur.__narrowBar.lastSt = c,
cur.__narrowBar.isBarFixed = D
}
}
function v() {
var t = Object(s.ge) ('content');
t && (Object(s.toggleClass) (t, 'page_block', !Object(s.geByClass1) ('page_block', t)), window.updateAriaElements())
}
function b(t, e) {
t && 'fixed' === Object(s.getStyle) (t, 'position') && (e ? Object(s.removeClass) (t, e)  : Object(s.setStyle) (t, {
position: 'relative'
}), t.offsetLeft, e ? Object(s.addClass) (t, e)  : Object(s.setStyle) (t, {
position: 'fixed'
}))
}
function y() {
if (window.pageNode) {
var t = Math.min(0, Math.max( - bodyNode.scrollLeft, bodyNode.clientWidth - Object(s.getSize) (Object(s.ge) ('page_layout')) [0]));
p.browser.mobile || vk.staticheader || Object(a.updateHeaderStyles) ({
marginLeft: t
}),
Object(a.updateLeftMenu) (),
g(),
Object(l.updSideTopLink) ()
}
}
function E(t) {
if (window.pageNode) {
var e = document.documentElement,
r = e.clientWidth,
i = e.clientHeight,
o = Object(l.sbWidth) (),
h = Math.max(Object(n.intval) (window.innerWidth), Object(n.intval) (r)),
d = Math.max(Object(n.intval) (window.innerHeight), Object(n.intval) (i)),
_ = !1;
if (p.browser.mobile && (h = Math.max(h, Object(n.intval) (bodyNode.scrollWidth)), d = Math.max(d, Object(n.intval) (bodyNode.scrollHeight))), window.lastWindowWidth !== h || !0 === t) {
_ = !0,
window.lastInnerWidth = window.lastWindowWidth = h,
layerWrap.style.width = boxLayerWrap.style.width = h + 'px';
var m = layer.style.width = boxLayer.style.width = h - o - 2 + 'px';
if (window.mvLayerWrap && !mvcur.minimized && (mvLayerWrap.style.width = h + 'px', mvLayer.style.width = m), window.wkLayerWrap && (wkLayerWrap.style.width = h + 'px', wkLayer.style.width = m), bodyNode.offsetWidth < vk.width + o + 2 && (h = vk.width + o + 2), h) for (var v = pageNode.firstChild; v; v = v.nextSibling) if (v.tagName) {
for (var y = (window.lastInnerWidth = h - o - 1) - 1, E = v.firstChild; E; E = E.nextSibling) 'scroll_fix' === E.className && (E.style.width = y + 'px');
vk.staticheader || Object(a.updateHeaderStyles) ({
width: y
})
}
}
if ((window.lastWindowHeight !== d || !0 === t) && (_ = !0, window.lastWindowHeight = d, layerBG.style.height = boxLayerBG.style.height = layerWrap.style.height = boxLayerWrap.style.height = d + 'px', window.mvLayerWrap && !mvcur.minimized && (mvLayerWrap.style.height = d + 'px'), window.wkLayerWrap)) {
var w = p.browser.mobile ? window.innerHeight : d;
wkLayerWrap.style.height = w + 'px'
}
if (vk.noSideTop || Object(l.updSideTopLink) (1), _ && window.curRBox && window.curRBox.boxes && window.getWndInner) {
var O = getWndInner();
Object(n.each) (curRBox.boxes, (t, e) =>e._wnd_resize(O[0], O[1]))
}
setTimeout(c.updSeenAdsInfo, 0);
var P = Object(f.getAudioPlayer) ();
P.audioLayer && P.audioLayer.isShown() && P.audioLayer.updatePosition(),
cur.pvShown && window.Photoview && setTimeout(Photoview.updatePhotoDimensions),
window.tooltips && tooltips.rePositionAll(),
cur.lSTL && Object(s.setStyle) (cur.lSTL, {
width: Math.max(Object(s.getXY) (cur.lSTL.el) [0], 0),
height: d - 1
}),
Object(s.ge) ('dev_top_nav') && Object(s.setStyle) (Object(s.ge) ('dev_top_nav', 'left', null));
var C = Object(s.geByClass) ('ui_search_fixed'),
x = Object(s.ge) ('narrow_column');
Object(n.each) (C, function () {
b(this, 'ui_search_fixed'),
setTimeout(b.pbind(this, 'ui_search_fixed'), 0)
}),
x && (b(x, 'fixed'), setTimeout(b.pbind(x, 'fixed'), 0)),
Object(a.updateLeftMenu) (),
g(),
Object(u.updateSTL) ()
}
}
function w(t) {
var e = 1;
t.id || (t = Object(s.ge) ('left_hide' + t), e = 0),
!e && t.timer || (t.showing ? Object(s.removeAttr) (t, 'showing')  : (Object(h.animate) (t, {
opacity: e ? 1 : 0.5
}, 200), e && (t.showing = 1))),
t.timer && (clearTimeout(t.timer), Object(s.removeAttr) (t, 'timer'))
}
function O(t) {
var e = 0.5;
t.id || (t = Object(s.ge) ('left_hide' + t), e = 0),
t.timer = setTimeout(function () {
Object(h.animate) (t, {
opacity: e
}, 200),
Object(s.removeAttr) (t, 'timer')
}, 1)
}
function P(t, e, r) {
var i = {
act: 'hide_block',
block: t,
hash: e
};
r && (i.block = r),
ajax.post('al_index.php', i, {
onDone: c.updSeenAdsInfo
}),
Object(s.hide) ('left_block' + t)
}
function C(t, e) {
if (t = Object(s.ge) (t)) if (t.autosize) t.autosize.update();
 else {
e.minHeight = Object(n.intval) (e.minHeight) || Object(n.intval) (Object(s.getStyle) (t, 'height')),
e.maxHeight = Object(n.intval) (e.maxHeight);
var r = Object(s.getSize) (t) [0] || Object(n.intval) (Object(s.getStyle) (t, 'width')),
i = Object(s.getStyle) (t, 'fontSize'),
o = Object(s.getStyle) (t, 'lineHeight');
r < 1 && (r = Object(n.intval) (Object(s.getStyle) (t, 'width', !1))),
i.indexOf('em') > 0 && (i = Object(n.floatval) (i) * vk.fs),
i = Object(n.intval) (i);
var a = {
width: r,
height: 10,
fontFamily: Object(s.getStyle) (t, 'fontFamily'),
fontSize: i + 'px',
lineHeight: o,
boxSizing: Object(s.getStyle) (t, 'boxSizing')
};
Object(n.each) (['Top',
'Bottom',
'Left',
'Right'], function () {
a['padding' + this] = Object(s.getStyle) (t, 'padding' + this)
}),
t.autosize = {
options: e,
helper: Object(s.ce) ('textarea', {
className: 'ashelper'
}, a),
handleEvent: function (e, r) {
var i = r.charCode ? String.fromCharCode(r.charCode)  : r.charCode;
if (void 0 === i && (i = String.fromCharCode(r.keyCode), 10 === r.keyCode || 13 === r.keyCode ? i = '\n' : !p.browser.msie && r.keyCode <= 40 && (i = '')), !i) return e;
if (!p.browser.msie) return e.substr(0, t.selectionStart) + i + e.substr(t.selectionEnd);
var n = document.selection.createRange();
return n.text && (e = e.replace(n.text, '')),
e + i
},
update: function (e) {
var r = t.value;
!e || 'blur' === e.type || 'keyup' === e.type || p.browser.msie && 'keypress' !== e.type || e.ctrlKey || e.altKey || e.metaKey || (r = t.autosize.handleEvent(r, e)),
r || (r = ' '),
t.autosize.helper.value !== r && (t.autosize.helper.value = r);
var i = t.autosize.options,
a = Object(s.getSize) (t, !0) [1],
l = t.autosize.helper.scrollHeight,
c = l % o;
i.exact && c > 2 && (l -= c - 2),
l < i.minHeight && (l = i.minHeight);
var h = {
overflow: 'hidden'
},
d = Object(s.getStyle) (t, 'overflow').indexOf('auto') > - 1 ? 'auto' : 'hidden';
i.maxHeight && l > i.maxHeight && (l = i.maxHeight, Object(n.extend) (h, {
overflow: 'auto',
overflowX: 'hidden'
})),
i.addHeight && (l += i.addHeight),
a === l && d === h.overflow || (h.height = l, Object(s.setStyle) (t, h), Object(n.isFunction) (i.onResize) && i.onResize(l))
}
},
e.exact && ('normal' === o && (o = '120%'), o.indexOf('%') > 0 && (o = i * Object(n.intval) (o) / 100)),
utilsNode.appendChild(t.autosize.helper),
p.browser.opera_mobile ? (Object(s.setStyle) (t, {
overflow: 'hidden'
}), t.autosize.update(), Object(d.addEvent) (t, 'blur', t.autosize.update))  : (Object(d.addEvent) (t, 'keydown keyup keypress change', t.autosize.update), setTimeout(function () {
Object(s.setStyle) (t, {
overflow: 'hidden',
resize: 'none'
}),
t.autosize.update();
var e = Object(s.val) (t);
Object(s.val) (t, ' ', !0),
Object(s.val) (t, e, !0)
}, 0))
}
}
var x = {
init: function () {
if (this.inited) return !1;
var t = Object(s.ge) ('top_profile_link'),
e = Object(s.ge) ('top_profile_menu');
if (!t || !e) return !1;
Object(d.addEvent) (t, 'mousedown', x.clicked),
this.inited = !0
},
clicked: function (t) {
return !(Object(d.checkEvent) (t) || 'mousedown' === t.type && Object(d.checkKeyboardEvent) (t)) && (x.toggle(), !1)
},
toggle: function (t) {
var e = Object(s.ge) ('top_profile_link'),
r = Object(s.ge) ('top_profile_menu'),
i = Object(s.hasClass) (r, 'shown');
void 0 !== t && i === t || (void 0 === t && (t = !i), Object(s.toggleClass) (e, 'active', t), Object(s.toggleClass) (r, 'shown', t), t ? (Object(_.cancelStackPush) ('top_menu', x.toggle.bind(this, !1), !0), cur.introExitTooltipHide && (cur.introExitTooltipHide(), delete cur.introExitTooltipHide))  : Object(_.cancelStackFilter) ('top_menu', !0))
},
show: function () {
x.hidetimer && (clearTimeout(x.hidetimer), x.hidetimer = 0),
x.toggle(!0)
},
hide: function () {
x.hidetimer || (x.hidetimer = setTimeout(function () {
x.toggle(!1),
x.hidetimer = 0
}, 200))
},
select: function (t, e) {
return !!Object(d.checkEvent) (e) || (x.toggle(!1), nav.go(t, e, {
noback: !0
}))
}
};
function A(t, e) {
return Object(s.rs) (vk.pr_tpl, {
id: t || '',
cls: e || ''
})
}
function M(t) {
return Object(s.geByClass1) ('ui_progress_bar', t)
}
},
ErRf: function (t, e, r) {
'use strict';
r.r(e),
r.d(e, 'cancelStackFilter', function () {
return n
}),
r.d(e, 'cancelStackPush', function () {
return s
}),
r.d(e, 'cancelStackPop', function () {
return o
});
var i = r('Bszp');
function n(t, e) {
var r = window.cancelStack || [
];
return e && Object(i.topHeaderClearClose) (),
window.cancelStack = r.filter(e=>e.name !== t),
window.cancelStack
}
function s(t, e, r) {
return r && Object(i.topHeaderClose) (function () {
e(),
n(t)
}),
window.cancelStack = n(t).concat([{
func: e,
name: t,
dclick: r
}
]),
window.cancelStack
}
function o() {
for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
var s = window.cancelStack || [
];
Object(i.topHeaderClearClose) (),
s.length > 0 && s.pop().func(e);
var o = s[s.length - 1];
return o && o.dclick && Object(i.topHeaderClose) (function () {
o.func(e),
n(o.name)
}),
window.cancelStack = s,
window.cancelStack
}
},
FJW5: function (t, e, r) {
var i = r('hswa'),
n = r('y3w9'),
s = r('DVgA');
t.exports = r('nh4g') ? Object.defineProperties : function (t, e) {
n(t);
for (var r, o = s(e), a = o.length, l = 0; a > l; ) i.f(t, r = o[l++], e[r]);
return t
}
},
FWc3: function (t, e, r) {
'use strict';
r.r(e),
r.d(e, 'showTooltip', function () {
return o
}),
r.d(e, 'showTitle', function () {
return a
}),
r.d(e, 'showHint', function () {
return l
});
var i = r('zxIV'),
n = r('Egk5'),
s = r('t7n3');
function o(t, e) {
(vk.loaded || e.noload) && t && (t.temphide || (t.temphide = function () {
t.showing = !1
}, Object(n.addEvent) (t, 'mouseout', t.temphide)), t.showing = !0, 'loadingstat' !== t.tt && (t.tt || (t.tt = 'loadingstat'), Object(i.domClosest) ('fc_tab', t) && (e.appendEl = bodyNode), cur.cancelTooltip = !1, e.stat && stManager.add(e.stat), stManager.add(['tooltips.js',
'tooltips.css'], function () {
'loadingstat' === t.tt && (t.tt = !1),
t.showing && !cur.cancelTooltip && (!function (t) {
t.temphide && (Object(n.removeEvent) (t, 'mouseout', t.temphide), Object(i.removeAttr) (t, 'temphide'), Object(i.removeAttr) (t, 'showing'))
}(t), t.tt && t.tt.el && !e.force || (tooltips.create(t, e), e.onCreate && e.onCreate()), tooltips.show(t, e))
})))
}
function a(t, e, r, n) {
t = Object(i.ge) (t);
r || (r = [
Math.round(20 - Object(i.getSize) (t) [0] / 2),
8
]);
o(t, Object(s.extend) ({
text: function () {
return e || t.getAttribute('data-title')
},
shift: r,
black: 1
}, n || {
}))
}
function l(t, e) {
e = e || {
};
o(t = Object(i.ge) (t), Object(s.extend) ({
text: function () {
return t.getAttribute('data-title')
},
dir: 'auto',
width: 300,
shift: [
22,
8
]
}, e))
}
},
GZEu: function (t, e, r) {
var i,
n,
s,
o = r('m0Pp'),
a = r('MfQN'),
l = r('+rLv'),
c = r('Iw71'),
h = r('dyZX'),
d = h.process,
u = h.setImmediate,
p = h.clearImmediate,
_ = h.MessageChannel,
f = h.Dispatch,
m = 0,
g = {
},
v = function () {
var t = + this;
if (g.hasOwnProperty(t)) {
var e = g[t];
delete g[t],
e()
}
},
b = function (t) {
v.call(t.data)
};
u && p || (u = function (t) {
for (var e = [
], r = 1; arguments.length > r; ) e.push(arguments[r++]);
return g[++m] = function () {
a('function' == typeof t ? t : Function(t), e)
},
i(m),
m
}, p = function (t) {
delete g[t]
}, 'process' == r('LZWt') (d) ? i = function (t) {
d.nextTick(o(v, t, 1))
}
 : f && f.now ? i = function (t) {
f.now(o(v, t, 1))
}
 : _ ? (s = (n = new _).port2, n.port1.onmessage = b, i = o(s.postMessage, s, 1))  : h.addEventListener && 'function' == typeof postMessage && !h.importScripts ? (i = function (t) {
h.postMessage(t + '', '*')
}, h.addEventListener('message', b, !1))  : i = 'onreadystatechange' in c('script') ? function (t) {
l.appendChild(c('script')).onreadystatechange = function () {
l.removeChild(this),
v.call(t)
}
}
 : function (t) {
setTimeout(o(v, t, 1), 0)
}),
t.exports = {
set: u,
clear: p
}
},
H6hf: function (t, e, r) {
var i = r('y3w9');
t.exports = function (t, e, r, n) {
try {
return n ? e(i(r) [0], r[1])  : e(r)
} catch (e) {
var s = t.return;
throw void 0 !== s && i(s.call(t)),
e
}
}
},
HEwt: function (t, e, r) {
'use strict';
var i = r('m0Pp'),
n = r('XKFU'),
s = r('S/j/'),
o = r('H6hf'),
a = r('M6Qj'),
l = r('ne8i'),
c = r('8a7r'),
h = r('J+6e');
n(n.S + n.F * !r('XMVh') (function (t) {
Array.from(t)
}), 'Array', {
from: function (t) {
var e,
r,
n,
d,
u = s(t),
p = 'function' == typeof this ? this : Array,
_ = arguments.length,
f = _ > 1 ? arguments[1] : void 0,
m = void 0 !== f,
g = 0,
v = h(u);
if (m && (f = i(f, _ > 2 ? arguments[2] : void 0, 2)), null == v || p == Array && a(v)) for (r = new p(e = l(u.length)); e > g; g++) c(r, g, m ? f(u[g], g)  : u[g]);
 else for (d = v.call(u), r = new p; !(n = d.next()).done; g++) c(r, g, m ? o(d, f, [
n.value,
g
], !0)  : n.value);
return r.length = g,
r
}
})
},
HhI8: function (t, e, r) {
'use strict';
r.r(e),
r.d(e, 'initFlashUtils', function () {
return c
}),
r.d(e, 'toggleFlash', function () {
return d
}),
r.d(e, 'renderFlash', function () {
return u
});
r('KKXr'),
r('a1Th'),
r('Btvt'),
r('pIFo');
var i = r('t7n3'),
n = r('zxIV'),
s = r('Egk5'),
o = r('J8bf'),
a = r('gdug'),
l = r('cGUQ');
function c() {
var t = 'ShockwaveFlash.ShockwaveFlash',
e = [
0,
0,
0
],
r = 'embed',
n = 'type="application/x-shockwave-flash" ',
s = t=>t.toString().replace('&', '&amp;').replace('"', '&quot;');
if (navigator.plugins && navigator.mimeTypes && navigator.mimeTypes.length) {
var l = navigator.plugins['Shockwave Flash'];
if (l && l.description) for (var c = l.description.replace(/([a-zA-Z]|\s)+/, '').replace(/(\s+r|\s+b[0-9]+)/, '.').split('.'), h = 0; h < 3; ++h) e[h] = c[h] || 0
} else {
if (_ua.indexOf('Windows CE') >= 0) for (var d = !0, u = 6; d; ) try {
++u,
d = new ActiveXObject(t + '.' + u),
e[0] = u
} catch (t) {
} else try {
e = new ActiveXObject(t + '.7').GetVariable('$version').split(' ') [1].split(',')
} catch (t) {
}
r = 'object',
n = 'classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" '
}
a.browser.flashwrap = 'embed' === r ? function (t, e) {
e = Object(i.extend) ({
id: t.id,
name: t.id,
width: t.width,
height: t.height,
style: t.style,
preventhide: t.preventhide
}, e),
a.browser.flash >= t.version ? e.src = t.url : e.src = t.express;
var r = [
];
for (var o in e) if (e.hasOwnProperty(o)) {
var l = e[o];
null != l && r.push(o + '="' + s(l) + '" ')
}
return `<embed ${n + r.join('')
}
/>`
}
: function (t, e) {
a.browser.flash >= t.version ? e.movie = t.url : e.movie = t.express;
var r = {
id: t.id,
width: t.width,
height: t.height,
style: t.style,
preventhide: t.preventhide
},
i = [
];
for (var o in r) if (r.hasOwnProperty(o)) {
var l = r[o];
null != l && i.push(o + '="' + s(l) + '" ')
}
var c = [
];
for (var h in e) if (e.hasOwnProperty(h)) {
var d = e[h];
null != d && c.push('<param name="' + h + '" value="' + s(d) + '" />')
}
return `<object ${n + i.join('')
}
>${c.join('')
}
</object>`
},
e[0] < 7 && (e = [
0,
0,
0
]),
a.browser.flash = Object(i.intval) (e[0]),
a.browser.flashfull = {
major: a.browser.flash,
minor: Object(i.intval) (e[1]),
rev: Object(i.intval) (e[2])
},
Object(o.setCookie) ('remixflash', `${Object(i.intval) (e[0])
}
.${Object(i.intval) (e[1])
}
.${Object(i.intval) (e[2])
}
`,
30)
}
var h = 0;
function d(t, e) {
if (clearTimeout(h), e > 0) h = setTimeout(() =>d(t, 0), e);
 else {
var r = t ? 'visible' : 'hidden';
Object(s.triggerEvent) (document, t ? 'unblock' : 'block');
var o = function (e, i) {
i.getAttribute('preventhide') || 'internal/link' === i.getAttribute('type') || ('flash_app' === i.id && a.browser.msie ? t ? Object(n.setStyle) (i, {
position: 'static',
top: 0
})  : Object(n.setStyle) (i, {
position: 'absolute',
top: '-5000px'
})  : i.style.visibility = r)
};
Object(i.each) (Object(n.geByTag) ('embed'), o),
Object(i.each) (Object(n.geByTag) ('object'), o)
}
}
function u(t, e, r, s) {
if (!e.url || !e.id) return !1;
var o = (e = Object(i.extend) ({
version: 9,
width: 1,
height: 1
}, e)).url;
return stVersions[o] || (stVersions[o] = ''),
__debugMode && stVersions[o] < 1000000 && (stVersions[o] += Object(i.irand) (1000000, 2000000)),
stVersions[o] && (e.url += ( - 1 === e.url.indexOf('?') ? '?' : '&') + '_stV=' + stVersions[o]),
r = Object(i.extend) ({
quality: 'high',
flashvars: Object(l.toQueryString) (s)
}, r),
!(a.browser.flash < e.version) && (Object(n.ge) (t).innerHTML = a.browser.flashwrap(e, r), !0)
}
},
I2ZF: function (t, e) {
for (var r = [
], i = 0; i < 256; ++i) r[i] = (i + 256).toString(16).substr(1);
t.exports = function (t, e) {
var i = e || 0,
n = r;
return [n[t[i++]],
n[t[i++]],
n[t[i++]],
n[t[i++]],
'-',
n[t[i++]],
n[t[i++]],
'-',
n[t[i++]],
n[t[i++]],
'-',
n[t[i++]],
n[t[i++]],
'-',
n[t[i++]],
n[t[i++]],
n[t[i++]],
n[t[i++]],
n[t[i++]],
n[t[i++]]].join('')
}
},
'I8a+': function (t, e, r) {
var i = r('LZWt'),
n = r('K0xU') ('toStringTag'),
s = 'Arguments' == i(function () {
return arguments
}());
t.exports = function (t) {
var e,
r,
o;
return void 0 === t ? 'Undefined' : null === t ? 'Null' : 'string' == typeof (r = function (t, e) {
try {
return t[e]
} catch (t) {
}
}(e = Object(t), n)) ? r : s ? i(e)  : 'Object' == (o = i(e)) && 'function' == typeof e.callee ? 'Arguments' : o
}
},
'IU+Z': function (t, e, r) {
'use strict';
r('sMXx');
var i = r('KroJ'),
n = r('Mukb'),
s = r('eeVq'),
o = r('vhPU'),
a = r('K0xU'),
l = r('Ugos'),
c = a('species'),
h = !s(function () {
var t = /./;
return t.exec = function () {
var t = [
];
return t.groups = {
a: '7'
},
t
},
'7' !== ''.replace(t, '$<a>')
}),
d = function () {
var t = /(?:)/,
e = t.exec;
t.exec = function () {
return e.apply(this, arguments)
};
var r = 'ab'.split(t);
return 2 === r.length && 'a' === r[0] && 'b' === r[1]
}();
t.exports = function (t, e, r) {
var u = a(t),
p = !s(function () {
var e = {
};
return e[u] = function () {
return 7
},
7 != ''[t](e)
}),
_ = p ? !s(function () {
var e = !1,
r = /a/;
return r.exec = function () {
return e = !0,
null
},
'split' === t && (r.constructor = {
}, r.constructor[c] = function () {
return r
}),
r[u](''),
!e
})  : void 0;
if (!p || !_ || 'replace' === t && !h || 'split' === t && !d) {
var f = /./[u],
m = r(o, u, ''[t], function (t, e, r, i, n) {
return e.exec === l ? p && !n ? {
done: !0,
value: f.call(e, r, i)
}
 : {
done: !0,
value: t.call(r, e, i)
}
 : {
done: !1
}
}),
g = m[0],
v = m[1];
i(String.prototype, t, g),
n(RegExp.prototype, u, 2 == e ? function (t, e) {
return v.call(t, this, e)
}
 : function (t) {
return v.call(t, this)
})
}
}
},
Ia1d: function (__webpack_module__, __webpack_exports__, __webpack_require__) {
'use strict';
__webpack_require__.r(__webpack_exports__),
__webpack_require__.d(__webpack_exports__, 'showVideo', function () {
return showVideo
}),
__webpack_require__.d(__webpack_exports__, 'showInlineVideo', function () {
return showInlineVideo
}),
__webpack_require__.d(__webpack_exports__, 'loadInlineVideo', function () {
return loadInlineVideo
}),
__webpack_require__.d(__webpack_exports__, 'revertLastInlineVideo', function () {
return revertLastInlineVideo
}),
__webpack_require__.d(__webpack_exports__, 'pauseLastInlineVideo', function () {
return pauseLastInlineVideo
}),
__webpack_require__.d(__webpack_exports__, 'playLastInlineVideo', function () {
return playLastInlineVideo
}),
__webpack_require__.d(__webpack_exports__, 'checkMp4', function () {
return checkMp4
}),
__webpack_require__.d(__webpack_exports__, 'VideoConstants', function () {
return VideoConstants
}),
__webpack_require__.d(__webpack_exports__, 'initVideo', function () {
return initVideo
});
var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('pIFo'),
core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('KKXr'),
_videoplayer_lib_player_states__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('qOki'),
_dom_events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('Egk5'),
_utils_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('t7n3'),
_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('zxIV'),
_lang__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('4+be'),
_message_box__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('EasH'),
_layout_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('El3O'),
_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__('gdug'),
_shared_lib_ls__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__('Xrg9');
function showVideo(t, e, r, i) {
if (cur.viewAsBox) return cur.viewAsBox();
if (!Object(_dom_events__WEBPACK_IMPORTED_MODULE_3__.checkEvent) (i)) {
if (window.mvcur && mvcur.mvShown && mvcur.minimized && mvcur.videoRaw == t) return Videoview.unminimize(),
!1;
r || (r = {
});
var n = nav.objLoc.claim,
s = !(!r.addParams || !/^-?\d+_\d+$/.test(r.addParams.post_id)) && r.addParams.post_id;
if (!r.playlistId && s && (/^public|groups|profile$/.test(cur.module) && Object(_dom__WEBPACK_IMPORTED_MODULE_5__.hasClass) ('post' + s, 'own') ? r.playlistId = 'wall_' + cur.oid : r.playlistId = 'post_' + r.addParams.post_id), r.playlistId && (r.addParams = Object(_utils_common__WEBPACK_IMPORTED_MODULE_4__.extend) (r.addParams, {
playlist_id: r.playlistId
}), !window.VideoPlaylist || !VideoPlaylist.getList(r.playlistId))) if (/^wall_/.test(r.playlistId)) {
var o = cur.wallVideos && cur.wallVideos[r.playlistId];
r.addParams.load_playlist = o && o.list.length >= 50 ? 0 : 1
} else r.addParams.load_playlist = !/^(?:post_)?-?\d+_-?\d+$/.test(r.playlistId) || cur.pageVideosList && cur.pageVideosList[r.playlistId] ? 0 : 1;
!r.expandPlayer && cur.videoInlinePlayer && cur.videoInlinePlayer.getVideoId() == t && cur.videoInlinePlayer.canExpand() && (r.expandPlayer = cur.videoInlinePlayer),
r.expandPlayer && (r.addParams = Object(_utils_common__WEBPACK_IMPORTED_MODULE_4__.extend) (r.addParams, {
expand_player: 1
}), delete cur.videoInlinePlayer);
var a = new CallHub(function () {
r.hidden ? r.hidden(a.data, r, e, t)  : Videoview.showVideo.apply(Videoview, a.data)
}, 2);
stManager.add(['videoview.js',
'videoview.css',
'page.js',
'page.css'], function () {
a.failed || (r.hidden || (revertLastInlineVideo(), Videoview.show(i, t, e, r)), a.done())
}),
Object(_utils_common__WEBPACK_IMPORTED_MODULE_4__.extend) (r, {
onDone: function () {
var e = Array.prototype.slice.call(arguments);
e.unshift(t),
a.data = e,
a.done()
},
onFail: function (e) {
if (a.failed = 1, !r.hidden) {
if (window.mvcur && mvcur.mvShown) Videoview.hide();
 else {
var i = Object(_utils_common__WEBPACK_IMPORTED_MODULE_4__.clone) (nav.objLoc);
i.z == 'video' + t && delete i.z,
i[0] == 'video' + t && (i[0] = 'videos' + t.split('_') [0]),
nav.setLoc(i)
}
Object(_message_box__WEBPACK_IMPORTED_MODULE_7__.showFastBox) (Object(_lang__WEBPACK_IMPORTED_MODULE_6__.getLang) ('global_error'), e || Object(_lang__WEBPACK_IMPORTED_MODULE_6__.getLang) ('global_error_occured'))
}
return !0
},
cache: 'status' != e
});
var l = r.params;
return l || (l = {
act: 'show',
video: t,
list: e,
autoplay: r.autoplay ? 1 : 0,
ad_video: r.ad_video,
module: r.module || window.Videoview && window.Videoview.getVideoModule() || '',
svids: r.svids
}),
r.addParams && (l = Object(_utils_common__WEBPACK_IMPORTED_MODULE_4__.extend) (l, r.addParams)),
Object(_utils_common__WEBPACK_IMPORTED_MODULE_4__.trim) (l.module) || Object(_utils_common__WEBPACK_IMPORTED_MODULE_4__.extend) (l, {
_nol: JSON.stringify(nav.objLoc)
}),
n && (l.claim = n),
ajax.post(`al_video.php?act=${l.act
}
`,
l,
r),
Object(_utils_common__WEBPACK_IMPORTED_MODULE_4__.vkImage) ().src = locProtocol + '//vk.com/rtrg?r=w*Z1Flwi3QdbWaoLMc7zOA*7Cr4Nrtojr9otHjsjIhsb2CVqRWalgbvxZw3MzxZa6be3Siu2XY3gvK5fysYtWLWgNwHMpjRTupSGZrcGRNlj7fduqq9*t7ij6CX4aMcBTD5be8mIXJsbTsvP8Zl2RZEd76a4FTuCOFqzMxqGtFc-',
!1
}
}
function showInlineVideo(videoId, listId, options, ev, thumb) {
if (Object(_dom_events__WEBPACK_IMPORTED_MODULE_3__.checkEvent) (ev)) return !0;
if (window.mvcur && mvcur.mvShown) return showVideo(videoId, listId, options, ev);
if (Object(_dom__WEBPACK_IMPORTED_MODULE_5__.attr) (thumb, 'data-loading')) return !1;
options = options || {
};
var h = thumb.clientHeight,
w = thumb.clientWidth,
btn = Object(_dom__WEBPACK_IMPORTED_MODULE_5__.domByClass) (thumb, 'page_post_video_play_inline'),
onLoaded = options.onLoaded;
onLoaded && delete options.onLoaded;
var params = {
video: videoId,
list: listId,
autoplay: options.autoplay,
module: options.module
};
return Object(_dom__WEBPACK_IMPORTED_MODULE_5__.domData) (thumb, 'stretch-vertical') && (params.stretch_vertical = 1),
Object(_utils_common__WEBPACK_IMPORTED_MODULE_4__.extend) (params, options.addParams),
showProgress(),
loadInlineVideo(params, function (t, e) {
hideProgress(),
t ? onDone.apply(null, e)  : onFail.apply(null, e)
}, options.cache),
cur.videoInlinePlayerDestroyerSet || (cur.destroy.push(_destroyInlineVideoPlayer), cur.videoInlinePlayerDestroyerSet = 1),
Object(_utils_common__WEBPACK_IMPORTED_MODULE_4__.vkImage) ().src = '//vk.com/rtrg?r=w*Z1Flwi3QdbWaoLMc7zOA*7Cr4Nrtojr9otHjsjIhsb2CVqRWalgbvxZw3MzxZa6be3Siu2XY3gvK5fysYtWLWgNwHMpjRTupSGZrcGRNlj7fduqq9*t7ij6CX4aMcBTD5be8mIXJsbTsvP8Zl2RZEd76a4FTuCOFqzMxqGtFc-',
!1;
function onDone(title, html, js, opts) {
revertLastInlineVideo(),
Object(_dom__WEBPACK_IMPORTED_MODULE_5__.hide) (thumb);
var videoWrap = Object(_dom__WEBPACK_IMPORTED_MODULE_5__.ce) ('div', {
innerHTML: html,
className: 'inline_video_wrap'
}, {
width: w,
height: h
});
if (window._videoLastInlined = [
videoWrap,
thumb
], thumb.parentNode.appendChild(videoWrap), cur.mvOpts = !(!opts || !opts.mvData) && opts.mvData, opts.player) {
var container = Object(_dom__WEBPACK_IMPORTED_MODULE_5__.domByClass) (videoWrap, 'video_box_wrap');
Object(_utils_common__WEBPACK_IMPORTED_MODULE_4__.isFunction) (onLoaded) && (opts.player.params[0].onPlayerLoaded = onLoaded);
var linkAttr = Object(_dom__WEBPACK_IMPORTED_MODULE_5__.attr) (thumb, 'data-link-attr');
linkAttr && (opts.player.params[0].link_attr = linkAttr),
VideoInitializer.initPlayer(container, opts.player.type, opts.player.params)
}
try {
eval('(function () {' + js + '})();')
} catch (t) {
}
if (!params.from_autoplay) {
var notifier = window.Notifier;
notifier && setTimeout(() =>notifier.lcSend('video_start'), 0);
var audioPlayer = window.ap;
audioPlayer && audioPlayer.isPlaying() && (audioPlayer.pause(), audioPlayer.pausedByVideo = Object(_utils_common__WEBPACK_IMPORTED_MODULE_4__.vkNow) ())
}
domClosest('bookmarks_row_type_video', ev.target) && statlogsValueEvent('bookmarks_product_analytics', {
item_type: 'video',
item_owner_id: cur.mvOpts.oid,
item_id: cur.mvOpts.vid,
time: window.getServerTime()
}),
thumb.setAttribute('data-playing', 1)
}
function onFail(t) {
params.from_autoplay || Object(_message_box__WEBPACK_IMPORTED_MODULE_7__.showFastBox) (Object(_lang__WEBPACK_IMPORTED_MODULE_6__.getLang) ('global_error'), t || Object(_lang__WEBPACK_IMPORTED_MODULE_6__.getLang) ('global_error_occured'))
}
function showProgress() {
thumb.setAttribute('data-loading', 1),
options.no_progress || (Object(_dom__WEBPACK_IMPORTED_MODULE_5__.addClass) (btn, 'page_post_video_play_inline_loading'), Object(_dom__WEBPACK_IMPORTED_MODULE_5__.val) (btn, Object(_layout_utils__WEBPACK_IMPORTED_MODULE_8__.getProgressHtml) ()))
}
function hideProgress() {
thumb.removeAttribute('data-loading'),
options.no_progress || (Object(_dom__WEBPACK_IMPORTED_MODULE_5__.removeClass) (btn, 'page_post_video_play_inline_loading'), Object(_dom__WEBPACK_IMPORTED_MODULE_5__.val) (btn, ''))
}
}
function loadInlineVideo(t, e, r) {
var i = Object(_utils_common__WEBPACK_IMPORTED_MODULE_4__.extend) ({
autoplay: 0,
module: cur.module
}, t);
Object(_utils_common__WEBPACK_IMPORTED_MODULE_4__.trim) (i.module) || (i._nol = JSON.stringify(nav.objLoc));
var n = [
'videoview.js',
'videoview.css'
];
function s(t, r) {
Object(_utils_common__WEBPACK_IMPORTED_MODULE_4__.isFunction) (e) && e(t, r)
}
i.from_autoplay && n.push('videoplayer.js', 'videoplayer.css', 'hls.min.js'),
ajax.post('al_video.php?act=show_inline', i, {
onDone: function () {
var t = [
].slice.call(arguments);
s(!0, t)
},
onFail: function () {
var t = [
].slice.call(arguments);
return s(!1, t),
!0
},
stat: n,
local: 1,
cache: r
})
}
function revertLastInlineVideo(t) {
if (_videoLastInlined) {
var e,
r = !1,
i = Object(_dom__WEBPACK_IMPORTED_MODULE_5__.ge) (t);
if (i && (e = _videoLastInlined[0])) {
for (; e = e.parentNode; ) if (e == i) {
r = !0;
break
}
if (!r) return
}
Object(_dom__WEBPACK_IMPORTED_MODULE_5__.re) (_videoLastInlined[0]),
Object(_dom__WEBPACK_IMPORTED_MODULE_5__.show) (_videoLastInlined[1]),
_videoLastInlined[1].removeAttribute('data-playing'),
_videoLastInlined = !1,
_destroyInlineVideoPlayer(),
delete cur.mvOpts
}
}
function _destroyInlineVideoPlayer() {
cur.videoInlinePlayer && (cur.videoInlinePlayer.destroy(), delete cur.videoInlinePlayer)
}
function pauseLastInlineVideo() {
if (_videoLastInlined) {
var t = cur.videoInlinePlayer || Object(_dom__WEBPACK_IMPORTED_MODULE_5__.ge) ('video_yt') && window.VideoYoutube;
if (t) {
if (t.isActiveLive && t.isActiveLive()) return;
cur.mvOpts.lastPlayerState = t.getState(),
t.togglePlay(!1)
}
}
}
function playLastInlineVideo() {
if (_videoLastInlined && cur.mvOpts && cur.mvOpts.lastPlayerState === _videoplayer_lib_player_states__WEBPACK_IMPORTED_MODULE_2__.PLAYING) {
var t = cur.videoInlinePlayer || Object(_dom__WEBPACK_IMPORTED_MODULE_5__.ge) ('video_yt') && window.VideoYoutube;
t && t.togglePlay(!0)
}
}
function checkMp4(t) {
if (_browser__WEBPACK_IMPORTED_MODULE_9__.browser.smart_tv) t(!0);
 else if (_shared_lib_ls__WEBPACK_IMPORTED_MODULE_10__.default.get('video_can_play_mp4')) t(!0);  else {
var e = window.sessionStorage && sessionStorage.getItem('video_can_play_mp4');
if (null == e) {
var r,
i,
n = Object(_dom__WEBPACK_IMPORTED_MODULE_5__.ce) ('video');
n.canPlayType && n.canPlayType('video/mp4; codecs="avc1.42E01E,mp4a.40.2"').replace('no', '') ? (n.onloadedmetadata = s.pbind(!0), n.onerror = function () {
s(!1, 'error_' + n.error.code)
}, n.src = 'images/blank.mp4', n.load(), r = setTimeout(s.pbind(!1, 'timeout'), 3000))  : s(!1, 'video_type')
} else t(!!Object(_utils_common__WEBPACK_IMPORTED_MODULE_4__.intval) (e))
}
function s(e, s) {
if (!i) {
i = !0;
var o = e ? window.localStorage : window.sessionStorage;
try {
o.setItem('video_can_play_mp4', Object(_utils_common__WEBPACK_IMPORTED_MODULE_4__.intval) (e))
} catch (t) {
}
t(e, s),
clearTimeout(r),
n.src = '',
n.load(),
n.onerror = null,
n.onloadedmetadata = null,
n = null
}
}
}
var VideoConstants = {
VIDEO_ITEM_INDEX_OWNER_ID: 0,
VIDEO_ITEM_INDEX_ID: 1,
VIDEO_ITEM_INDEX_THUMB: 2,
VIDEO_ITEM_INDEX_TITLE: 3,
VIDEO_ITEM_INDEX_FLAGS: 4,
VIDEO_ITEM_INDEX_DURATION: 5,
VIDEO_ITEM_INDEX_HASH: 6,
VIDEO_ITEM_INDEX_MODER_ACTS: 7,
VIDEO_ITEM_INDEX_OWNER: 8,
VIDEO_ITEM_INDEX_DATE: 9,
VIDEO_ITEM_INDEX_VIEWS: 10,
VIDEO_ITEM_INDEX_PLATFORM: 11,
VIDEO_ITEM_INDEX_BLOCKED: 12,
VIDEO_ITEM_INDEX_MUSIC_VIDEO_META: 13,
VIDEO_ITEM_FLAG_EXTERNAL: 1,
VIDEO_ITEM_FLAG_ACTIVE_LIVE: 2,
VIDEO_ITEM_FLAG_CAN_EDIT: 64,
VIDEO_ITEM_FLAG_CAN_DELETE: 128,
VIDEO_ITEM_FLAG_CAN_ADD: 256,
VIDEO_ITEM_FLAG_PRIVATE: 512,
VIDEO_ITEM_FLAG_NO_AUTOPLAY: 1024,
VIDEO_ITEM_FLAG_ADDED: 2048,
VIDEO_ITEM_FLAG_SKIP_THUMB_LOAD: 4096,
VIDEO_ITEM_FLAG_NEED_SIGN_IN: 8192,
VIDEO_ITEM_FLAG_HD: 16384
};
function initVideo() {
window._videoLastInlined = !1
}
},
Ieup: function (__webpack_module__, __webpack_exports__, __webpack_require__) {
'use strict';
__webpack_require__.r(__webpack_exports__),
__webpack_require__.d(__webpack_exports__, 'menuSettings', function () {
return menuSettings
}),
__webpack_require__.d(__webpack_exports__, 'showWriteMessageBox', function () {
return showWriteMessageBox
}),
__webpack_require__.d(__webpack_exports__, 'giftsBox', function () {
return giftsBox
}),
__webpack_require__.d(__webpack_exports__, 'moneyTransferBox', function () {
return moneyTransferBox
}),
__webpack_require__.d(__webpack_exports__, 'reportAd', function () {
return reportAd
}),
__webpack_require__.d(__webpack_exports__, 'mobilePromo', function () {
return mobilePromo
}),
__webpack_require__.d(__webpack_exports__, 'showAudioClaimWarning', function () {
return showAudioClaimWarning
}),
__webpack_require__.d(__webpack_exports__, 'sureDeleteAll', function () {
return sureDeleteAll
});
var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('pIFo'),
_message_box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('EasH'),
_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('v+DW'),
_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('zxIV'),
_dom_events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('Egk5'),
_lang__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('4+be'),
_debug_tools__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('98sY'),
_box_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('kcIO');
function menuSettings(t) {
return Object(_message_box__WEBPACK_IMPORTED_MODULE_1__.showTabbedBox) ('al_settings.php', {
act: 'menu_box',
type: t
})
}
function showWriteMessageBox(t, e) {
cur.onFriendMessage && cur.onFriendMessage(),
stManager.add(['page.js',
'wide_dd.js']);
var r = Object(_message_box__WEBPACK_IMPORTED_MODULE_1__.showBox) ('al_im.php', {
act: 'a_write_box',
to: e
}, {
stat: [
'writebox.js',
'writebox.css',
'wide_dd.css',
'page.css',
'post.css',
jsc('web/emoji.js'),
'notifier.css'
],
cache: 1
}, t);
return r && Object(_dom_events__WEBPACK_IMPORTED_MODULE_4__.cancelEvent) (t),
window.WriteBox && WriteBox.extractEmoji(),
!r
}
function giftsBox(t, e, r) {
return cur.viewAsBox ? cur.viewAsBox()  : !Object(_message_box__WEBPACK_IMPORTED_MODULE_1__.showBox) ('al_gifts.php', {
act: 'box',
tab: r || 'received',
mid: t
}, {
cache: 1,
stat: [
'gifts.css',
'gifts.js'
]
}, e)
}
function moneyTransferBox(t, e, r, i, n, s, o) {
if (cur.viewAsBox) return cur.viewAsBox();
if (n) {
var a,
l;
if (!o) return 2 === n ? (a = cur.lang && cur.lang.mail_money_transfer_cancel_confirm || Object(_lang__WEBPACK_IMPORTED_MODULE_5__.getLang) ('mail_money_transfer_cancel_confirm'), l = cur.lang && cur.lang.mail_money_transfer_cancel_btn || Object(_lang__WEBPACK_IMPORTED_MODULE_5__.getLang) ('mail_money_transfer_cancel_btn'))  : (a = cur.lang && cur.lang.mail_money_transfer_decline_confirm || Object(_lang__WEBPACK_IMPORTED_MODULE_5__.getLang) ('news_fb_money_transfer_decline_confirm'), l = cur.lang && cur.lang.mail_money_transfer_decline_btn || Object(_lang__WEBPACK_IMPORTED_MODULE_5__.getLang) ('news_fb_money_transfer_decline_btn')),
void (cur.confirmBox = Object(_message_box__WEBPACK_IMPORTED_MODULE_1__.showFastBox) (Object(_lang__WEBPACK_IMPORTED_MODULE_5__.getLang) ('global_action_confirmation'), a, l, moneyTransferBox.pbind(t, e, r, i, n, !1, 1), Object(_lang__WEBPACK_IMPORTED_MODULE_5__.getLang) ('global_cancel')));
var c = Object(_dom__WEBPACK_IMPORTED_MODULE_3__.hasClass) (Object(_dom__WEBPACK_IMPORTED_MODULE_3__.domPN) (i), 'wall_postlink_preview_btn'),
h = Object(_dom__WEBPACK_IMPORTED_MODULE_3__.geByClass1) ('flat_button', Object(_dom__WEBPACK_IMPORTED_MODULE_3__.domPN) (i));
return 2 !== o && (Object(_ui__WEBPACK_IMPORTED_MODULE_2__.disableButton) (h, !0), c ? (Object(_dom__WEBPACK_IMPORTED_MODULE_3__.addClass) (i.firstChild, 'round_spinner'), Object(_dom__WEBPACK_IMPORTED_MODULE_3__.removeClass) (i.firstChild, 'button'))  : Object(_ui__WEBPACK_IMPORTED_MODULE_2__.lockButton) (i), cur.confirmBox && cur.confirmBox.hide()),
void ajax.post('al_payments.php?act=a_cancel_money_transfer', {
tx_id: t,
hash: e,
from: c ? 'snippet' : ''
}, {
onDone: function (s, o, a) {
0 !== s ? (c ? (Object(_dom__WEBPACK_IMPORTED_MODULE_3__.re) (i), Object(_dom__WEBPACK_IMPORTED_MODULE_3__.hasClass) (h, 'secondary') || Object(_dom__WEBPACK_IMPORTED_MODULE_3__.domReplaceEl) (h, a))  : Object(_dom__WEBPACK_IMPORTED_MODULE_3__.re) (Object(_dom__WEBPACK_IMPORTED_MODULE_3__.domPN) (i)), Object(_box_utils__WEBPACK_IMPORTED_MODULE_7__.showDoneBox) (o), window.TopNotifier.invalidate())  : setTimeout(moneyTransferBox.pbind(t, e, r, i, n, !1, 2), 2000)
},
onFail: function (t) {
return Object(_ui__WEBPACK_IMPORTED_MODULE_2__.disableButton) (h, !1),
c ? (Object(_dom__WEBPACK_IMPORTED_MODULE_3__.addClass) (i.firstChild, 'button'), Object(_dom__WEBPACK_IMPORTED_MODULE_3__.removeClass) (i.firstChild, 'round_spinner'))  : Object(_ui__WEBPACK_IMPORTED_MODULE_2__.unlockButton) (i),
setTimeout(Object(_message_box__WEBPACK_IMPORTED_MODULE_1__.showFastBox) (Object(_lang__WEBPACK_IMPORTED_MODULE_5__.getLang) ('global_error'), t).hide, 2000),
!0
}
})
}
var d;
return d = s ? {
act: 'money_transfer_box',
request_id: t,
request: s,
hash: e
}
 : {
act: 'accept_money_transfer_box',
tx_id: t,
hash: e
},
cur.acceptMoneyBtn = i,
!Object(_message_box__WEBPACK_IMPORTED_MODULE_1__.showBox) ('al_payments.php', d, {
stat: [
'payments.css',
'payments.js'
],
onFail: function (t) {
return setTimeout(Object(_message_box__WEBPACK_IMPORTED_MODULE_1__.showFastBox) (Object(_lang__WEBPACK_IMPORTED_MODULE_5__.getLang) ('global_error'), t).hide, 2000),
!0
}
}, r)
}
function reportAd(t) {
Object(_message_box__WEBPACK_IMPORTED_MODULE_1__.showBox) ('/reports.php?act=a_report_ad_box', {
ad_id: t
}, {
params: {
width: 370
},
stat: [
'ui_controls.js',
'ui_controls.css'
]
})
}
var mobilePromo = _message_box__WEBPACK_IMPORTED_MODULE_1__.showBox.pbind('al_login.php', {
act: 'mobile',
box: 1
});
function showAudioClaimWarning(t, e, r) {
var i,
n,
s = t.id,
o = t.ownerId,
a = t.title,
l = e.id,
c = e.reason,
h = e.original,
d = {
width: 470
};
if (t.restrictionStatus) return AudioUtils.showAudioRestriction(t);
'geo' === c ? (i = Object(_lang__WEBPACK_IMPORTED_MODULE_5__.getLang) ('audio_claimed_geo'), n = Object(_lang__WEBPACK_IMPORTED_MODULE_5__.getLang) ('audio_claim_warning_title'))  : 'site_rules_violation' === c ? (i = Object(_lang__WEBPACK_IMPORTED_MODULE_5__.getLang) ('audio_site_rules_violation_warning'), n = Object(_lang__WEBPACK_IMPORTED_MODULE_5__.getLang) ('audio_site_rules_violation_header'))  : 'replace' === c ? (i = Object(_lang__WEBPACK_IMPORTED_MODULE_5__.getLang) ('audio_claimed_replacement_available'), n = Object(_lang__WEBPACK_IMPORTED_MODULE_5__.getLang) ('audio_claim_warning_title'))  : 'subscription' === c ? (d.hideButtons = !0, d.bodyStyle = 'padding: 0; border-radius: 4px;', d.width = 450, n = !1, i = `
      <div class="audio_claim_popup">
        <div class="audio_claim_popup__title">${Object(_lang__WEBPACK_IMPORTED_MODULE_5__.getLang) ('global_audio_only_with_subscription_title')
}
</div>
        <div class="audio_claim_popup__text">${Object(_lang__WEBPACK_IMPORTED_MODULE_5__.getLang) ('global_audio_only_with_subscription_text')
}
</div>
        <div class="audio_claim_popup__close" onclick="curBox().hide()"></div>
        <button class="flat_button round_button" onclick="AudioPlayer.showSubscriptionPopup()">${Object(_lang__WEBPACK_IMPORTED_MODULE_5__.getLang) ('global_audio_only_with_subscription_btn')
}
</button>
      </div>`) : (i = Object(_lang__WEBPACK_IMPORTED_MODULE_5__.getLang) ('audio_claim_warning'), n = Object(_lang__WEBPACK_IMPORTED_MODULE_5__.getLang) ('audio_claim_warning_title')),
d.title = n;
var u = [
d,
i = (i = (i = i.replace(/\{audio\}/g, `<b>${a
}
</b>`)).replace(/\{objection_link\}/g, `<a href="/help?act=cc_objection&claim=${l
}
&content=audio${o
}
_${s
}
">${Object(_lang__WEBPACK_IMPORTED_MODULE_5__.getLang) ('audio_claim_objection')
}
</a>`)).replace(/\{delete_link\}/g, `<a onclick="deleteAudioOnClaim(${o
}
, ${s
}
); return false;">${Object(_lang__WEBPACK_IMPORTED_MODULE_5__.getLang) ('audio_claim_delete')
}
</a>`)],
p = null;
if (r && h) {
var _ = AudioUtils.drawAudio(h, 'no_extra');
u[1] = i.replace(/\{original\}/g, h[AudioUtils.AUDIO_ITEM_INDEX_PERFORMER] + ' - ' + h[AudioUtils.AUDIO_ITEM_INDEX_TITLE]) + '<br/><br/>' + _,
u.push(Object(_lang__WEBPACK_IMPORTED_MODULE_5__.getLang) ('audio_replace_with_original'), function () {
Object(_ui__WEBPACK_IMPORTED_MODULE_2__.lockButton) (p.btns.ok[0]),
r(() =>p.hide())
}),
d.textControls = `<a onclick="deleteAudioOnClaim(${o
}
, ${s
}
); return false;">${Object(_lang__WEBPACK_IMPORTED_MODULE_5__.getLang) ('audio_claim_delete_capital')
}
</a>`
}
cur.claimWarning = p = _message_box__WEBPACK_IMPORTED_MODULE_1__.showFastBox.apply(null, u)
}
function sureDeleteAll(title, text, where, objectId, toId, fromId, hash, event) {
if (!Object(_dom_events__WEBPACK_IMPORTED_MODULE_4__.checkEvent) (event)) {
var box = Object(_message_box__WEBPACK_IMPORTED_MODULE_1__.showFastBox) ({
title
}, text, Object(_lang__WEBPACK_IMPORTED_MODULE_5__.getLang) ('global_delete'), function (btn) {
ajax.post('/delete_all.php', {
act: where,
object_id: objectId,
to_id: toId,
from_id: fromId,
hash,
loc: nav.objLoc[0]
}, {
onDone: function onDone(res) {
if (__debugMode) eval(res);
 else try {
eval(res)
} catch (t) {
Object(_debug_tools__WEBPACK_IMPORTED_MODULE_6__.logEvalError) (t, res)
}
box.hide()
},
showProgress: _ui__WEBPACK_IMPORTED_MODULE_2__.lockButton.pbind(btn),
hideProgress: _ui__WEBPACK_IMPORTED_MODULE_2__.unlockButton.pbind(btn)
})
}, Object(_lang__WEBPACK_IMPORTED_MODULE_5__.getLang) ('global_cancel'));
return !1
}
}
},
Iw71: function (t, e, r) {
var i = r('0/R4'),
n = r('dyZX').document,
s = i(n) && i(n.createElement);
t.exports = function (t) {
return s ? n.createElement(t)  : {
}
}
},
'J+6e': function (t, e, r) {
var i = r('I8a+'),
n = r('K0xU') ('iterator'),
s = r('hPIQ');
t.exports = r('g3g5').getIteratorMethod = function (t) {
if (null != t) return t[n] || t['@@iterator'] || s[i(t)]
}
},
J8bf: function (t, e, r) {
'use strict';
r.r(e),
r.d(e, 'getCookie', function () {
return n
}),
r.d(e, 'setCookie', function () {
return s
}),
r.d(e, 'initCookies', function () {
return o
});
r('SRfc'),
r('KKXr');
var i = r('W9Tc');
function n(t) {
return function () {
window._cookies = {
};
for (var t = document.cookie.split(';'), e = /^[\s]*([^\s]+?)$/i, r = 0, i = t.length; r < i; r++) {
var n = t[r].split('=');
2 === n.length && (_cookies[n[0].match(e) [1]] = unescape(n[1].match(e) ? n[1].match(e) [1] : ''))
}
}(),
_cookies[t]
}
function s(t, e, r, n) {
var s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 'None',
o = window.locDomain,
a = browser.chrome && Object(i.partConfigEnabled) ('cookie_class_samesite') ? `; SameSite=${s
}
`: '',
l = t + '=' + escape(e),
c = '; path=/' + (o ? '; domain=.' + o : ''),
h = n && 'https:' === locProtocol ? '; secure' : '',
d = '';
if (r) {
var u = new Date;
u.setTime(u.getTime() + 24 * r * 60 * 60 * 1000),
d = '; expires=' + u.toGMTString()
}
document.cookie = l + d + c + a + h
}
function o() {
window._cookies = {
}
}
},
JiEa: function (t, e) {
e.f = Object.getOwnPropertySymbols
},
K0xU: function (t, e, r) {
var i = r('VTer') ('wks'),
n = r('ylqs'),
s = r('dyZX').Symbol,
o = 'function' == typeof s;
(t.exports = function (t) {
return i[t] || (i[t] = o && s[t] || (o ? s : n) ('Symbol.' + t))
}).store = i
},
KKXr: function (t, e, r) {
'use strict';
var i = r('quPj'),
n = r('y3w9'),
s = r('69bn'),
o = r('A5AN'),
a = r('ne8i'),
l = r('Xxuz'),
c = r('Ugos'),
h = r('eeVq'),
d = Math.min,
u = [
].push,
p = !h(function () {
RegExp(4294967295, 'y')
});
r('IU+Z') ('split', 2, function (t, e, r, h) {
var _;
return _ = 'c' == 'abbc'.split(/(b)*/) [1] || 4 != 'test'.split(/(?:)/, - 1).length || 2 != 'ab'.split(/(?:ab)*/).length || 4 != '.'.split(/(.?)(.?)/).length || '.'.split(/()()/).length > 1 || ''.split(/.?/).length ? function (t, e) {
var n = String(this);
if (void 0 === t && 0 === e) return [];
if (!i(t)) return r.call(n, t, e);
for (var s, o, a, l = [
], h = (t.ignoreCase ? 'i' : '') + (t.multiline ? 'm' : '') + (t.unicode ? 'u' : '') + (t.sticky ? 'y' : ''), d = 0, p = void 0 === e ? 4294967295 : e >>> 0, _ = new RegExp(t.source, h + 'g'); (s = c.call(_, n)) && !((o = _.lastIndex) > d && (l.push(n.slice(d, s.index)), s.length > 1 && s.index < n.length && u.apply(l, s.slice(1)), a = s[0].length, d = o, l.length >= p)); ) _.lastIndex === s.index && _.lastIndex++;
return d === n.length ? !a && _.test('') || l.push('')  : l.push(n.slice(d)),
l.length > p ? l.slice(0, p)  : l
}
 : '0'.split(void 0, 0).length ? function (t, e) {
return void 0 === t && 0 === e ? [
] : r.call(this, t, e)
}
 : r,
[
function (r, i) {
var n = t(this),
s = null == r ? void 0 : r[e];
return void 0 !== s ? s.call(r, n, i)  : _.call(String(n), r, i)
},
function (t, e) {
var i = h(_, t, this, e, _ !== r);
if (i.done) return i.value;
var c = n(t),
u = String(this),
f = s(c, RegExp),
m = c.unicode,
g = (c.ignoreCase ? 'i' : '') + (c.multiline ? 'm' : '') + (c.unicode ? 'u' : '') + (p ? 'y' : 'g'),
v = new f(p ? c : '^(?:' + c.source + ')', g),
b = void 0 === e ? 4294967295 : e >>> 0;
if (0 === b) return [];
if (0 === u.length) return null === l(v, u) ? [
u
] : [
];
for (var y = 0, E = 0, w = [
]; E < u.length; ) {
v.lastIndex = p ? E : 0;
var O,
P = l(v, p ? u : u.slice(E));
if (null === P || (O = d(a(v.lastIndex + (p ? 0 : E)), u.length)) === y) E = o(u, E, m);
 else {
if (w.push(u.slice(y, E)), w.length === b) return w;
for (var C = 1; C <= P.length - 1; C++) if (w.push(P[C]), w.length === b) return w;
E = y = O
}
}
return w.push(u.slice(y)),
w
}
]
})
},
KroJ: function (t, e, r) {
var i = r('dyZX'),
n = r('Mukb'),
s = r('aagx'),
o = r('ylqs') ('src'),
a = r('+lvF'),
l = ('' + a).split('toString');
r('g3g5').inspectSource = function (t) {
return a.call(t)
},
(t.exports = function (t, e, r, a) {
var c = 'function' == typeof r;
c && (s(r, 'name') || n(r, 'name', e)),
t[e] !== r && (c && (s(r, o) || n(r, o, t[e] ? '' + t[e] : l.join(String(e)))), t === i ? t[e] = r : a ? t[e] ? t[e] = r : n(t, e, r)  : (delete t[e], n(t, e, r)))
}) (Function.prototype, 'toString', function () {
return 'function' == typeof this && this[o] || a.call(this)
})
},
Kuth: function (t, e, r) {
var i = r('y3w9'),
n = r('FJW5'),
s = r('4R4u'),
o = r('YTvA') ('IE_PROTO'),
a = function () {
},
l = function () {
var t,
e = r('Iw71') ('iframe'),
i = s.length;
for (e.style.display = 'none', r('+rLv').appendChild(e), e.src = 'javascript:', (t = e.contentWindow.document).open(), t.write('<script>document.F=Object</script>'), t.close(), l = t.F; i--; ) delete l.prototype[s[i]];
return l()
};
t.exports = Object.create || function (t, e) {
var r;
return null !== t ? (a.prototype = i(t), r = new a, a.prototype = null, r[o] = t)  : r = l(),
void 0 === e ? r : n(r, e)
}
},
LQAc: function (t, e) {
t.exports = !1
},
LZWt: function (t, e) {
var r = {
}.toString;
t.exports = function (t) {
return r.call(t).slice(8, - 1)
}
},
LyE8: function (t, e, r) {
'use strict';
var i = r('eeVq');
t.exports = function (t, e) {
return !!t && i(function () {
e ? t.call(null, function () {
}, 1)  : t.call(null)
})
}
},
M6Qj: function (t, e, r) {
var i = r('hPIQ'),
n = r('K0xU') ('iterator'),
s = Array.prototype;
t.exports = function (t) {
return void 0 !== t && (i.Array === t || s[n] === t)
}
},
MSYF: function (__webpack_module__, __webpack_exports__, __webpack_require__) {
'use strict';
__webpack_require__.r(__webpack_exports__);
var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('KKXr'),
core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('OG14'),
core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('a1Th'),
core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('Btvt'),
core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('pIFo'),
core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('Oyvg'),
core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('SRfc'),
_top_search__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('Bszp'),
_utils_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('t7n3'),
_ads__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__('m0N1'),
_debug_tools__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__('98sY'),
_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__('zxIV'),
_dom_events__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__('Egk5'),
_scroll__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__('lXE5'),
_ui_util__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__('ryw6'),
_shared_lib_convert__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__('cGUQ'),
_nav_utils__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__('kHqu'),
_layout_utils__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__('El3O'),
_video__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__('Ia1d'),
_legacy_performance_stats__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__('eNQP'),
_browser__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__('gdug'),
_feature_entries__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__('/PiP'),
_accessibility__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__('QGEU'),
_stl__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__('i6oL'),
_utils__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__('aong'),
_message_box__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__('EasH'),
_lang__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__('4+be'),
Nav = {
getData: function (t) {
if (t.length) {
for (var e in navMap) {
if (navMap.hasOwnProperty(e)) if ('<' !== e[0]) if (t.match(new RegExp('^' + e, 'i'))) return navMap[e][2] ? null : {
url: navMap[e][0],
files: navMap[e][1]
}
}
return t.match(/^[a-z0-9\-_]+\.php$/i) ? {
url: t
}
 : {
url: navMap['<other>'][0],
files: navMap['<other>'][1]
}
}
return {
url: navMap['<void>'][0],
files: navMap['<void>'][1]
}
},
reload: function (t) {
if (!Object(_nav_utils__WEBPACK_IMPORTED_MODULE_16__.reloadCheckFlood) (t)) {
t = t || {
};
var e = Nav.strLoc.replace(/^\/+/g, '');
t.force ? (hab.stop(), location.href = '/' + e)  : (TopNotifier.invalidate(), Nav.go('/' + e, void 0, Object(_utils_common__WEBPACK_IMPORTED_MODULE_8__.extend) ({
nocur: !0
}, t)))
}
},
link: function (t, e) {
if (Object(_dom_events__WEBPACK_IMPORTED_MODULE_12__.checkEvent) (e) || cur.noAjaxNav) {
var r = t.replace(new RegExp('^(' + locProtocol + '//' + locHost + ')?/?', 'i'), '');
window.open(r)
} else Nav.go(t)
},
go: function go(loc, ev) {
var opts = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
};
if (loc && loc.href && loc.getAttribute && loc.getAttribute('data-change-location-with-post-away')) {
var newLink = loc.href,
_postParams = Nav.getPostParams(loc, !(!opts.params || !opts.params._post_click_type)),
postOptions = Nav.mergePostParamsOptions(_postParams, opts.params),
extraQuery = {
};
return postOptions._post && (extraQuery.post = postOptions._post, postOptions._post_ad_data && (extraQuery.post_ad_data = postOptions._post_ad_data), postOptions._post_click_cc_key && (extraQuery.cc_key = postOptions._post_click_cc_key), newLink = '/away.php?to=' + encodeURIComponent(newLink) + '&' + Object(_shared_lib_convert__WEBPACK_IMPORTED_MODULE_15__.toQueryString) (extraQuery)),
location.href = newLink,
!1
}
if (!Object(_dom_events__WEBPACK_IMPORTED_MODULE_12__.checkEvent) (ev) && !cur.noAjaxNav) {
if (LongView.onBeforePageChange(), window.appUseTime && window.appUseTime.pageWillChanged(), loc.tagName && 'a' === loc.tagName.toLowerCase()) {
if ('_blank' === loc.target || Nav.baseBlank) return;
var _params = loc.getAttribute('hrefparams');
if (_params && (opts.params = Object(_utils_common__WEBPACK_IMPORTED_MODULE_8__.extend) (opts.params || {
}, Object(_shared_lib_convert__WEBPACK_IMPORTED_MODULE_15__.fromQueryString) (_params))), loc = loc.href || '', ev && !(loc || '').match(new RegExp('^' + locProtocol + '//' + locHost, 'i'))) return
}
var strLoc = '',
objLoc = {
},
changed = {
};
'string' == typeof loc ? (loc = loc.replace(new RegExp('^(' + locProtocol + '//' + locHost + ')?/?', 'i'), ''), strLoc = loc, objLoc = Nav.fromStr(loc))  : (loc[0] || (loc[0] = ''), strLoc = Nav.toStr(loc), objLoc = loc),
Object(_legacy_performance_stats__WEBPACK_IMPORTED_MODULE_19__.statDurationsLoadImage) (),
Object(_legacy_performance_stats__WEBPACK_IMPORTED_MODULE_19__.statNavigationTiming) ();
var ap = Object(_feature_entries__WEBPACK_IMPORTED_MODULE_21__.getAudioPlayer) ();
if (ap && ap.updateCurrentPlaying && ap.updateCurrentPlaying(), !opts.nocur) {
for (var i in changed = Object(_utils_common__WEBPACK_IMPORTED_MODULE_8__.clone) (objLoc), Nav.objLoc) Nav.objLoc.hasOwnProperty(i) && (Nav.objLoc[i] === changed[i] ? delete changed[i] : void 0 === changed[i] && (changed[i] = !1));
if (!1 === Object(_nav_utils__WEBPACK_IMPORTED_MODULE_16__.zNav) (Object(_utils_common__WEBPACK_IMPORTED_MODULE_8__.clone) (changed), {
hist: opts.hist,
asBox: opts.asBox,
onDone: opts.onDone
}, objLoc)) return Nav.setLoc(strLoc),
!1;
bookmarksNav(ev, strLoc);
var onArticleNavBack = cur._back && cur._back.hasOwnProperty('onArticleNavBack') ? cur._back.onArticleNavBack : null,
isHandled = articleNav(strLoc, Nav.toStr(Nav.objLoc), opts.back, onArticleNavBack, ev);
if (isHandled) return Nav.setLoc(strLoc, !0),
(Nav.objLoc.z || Nav.objLoc.w) && Object(_nav_utils__WEBPACK_IMPORTED_MODULE_16__.zNav) ({
z: Nav.objLoc.z,
w: Nav.objLoc.w
}, {
}),
!1;
var isHandledAuthorPage = authorPageNav(strLoc, Nav.toStr(Nav.objLoc), opts.back, opts.postId);
if (isHandledAuthorPage) return cur._hardNav ? (window.location.href = strLoc, !1)  : (Nav.setLoc(strLoc), (Nav.objLoc.z || Nav.objLoc.w) && Object(_nav_utils__WEBPACK_IMPORTED_MODULE_16__.zNav) ({
z: Nav.objLoc.z,
w: Nav.objLoc.w
}, {
}), !1)
}
if (!opts.nocur && (vk.loaded || !changed[0])) for (var curnav = cur.nav || [
], _i = curnav.length - 1; _i >= 0; _i--) {
var oldUrl = document.URL;
if (!1 === curnav[_i](Object(_utils_common__WEBPACK_IMPORTED_MODULE_8__.clone) (changed), Nav.objLoc, objLoc, opts)) {
var currentURL = `${locProtocol
}
//${location.host
}
/${strLoc
}
`,
referrer = oldUrl === currentURL ? '' : oldUrl;
return setTimeout(_nav_utils__WEBPACK_IMPORTED_MODULE_16__.updateOtherCounters.pbind(currentURL, referrer), 10),
!1
}
}
if (4 === vk.al || !vk.loaded && (!window.audioPlayer || !audioPlayer.player) && changed[0]) return setTimeout(function () {
location.href = '/' + (strLoc || '').replace('%23', '#')
}, 0),
!1;
if (window.Upload && Upload.terminateAllUploads(), Object(_top_search__WEBPACK_IMPORTED_MODULE_7__.topHeaderClose) (), opts.back) {
if (window.appUseTime && window.appUseTime.pageChanged(), cur._back && cur._back.onBack) return cur._back.onBack();
for (var _i2 = 0, l = globalHistory.length; _i2 < l; _i2++) if (globalHistory[_i2].loc === strLoc) {
var _ret = function () {
var t = globalHistory.splice(_i2, 1) [0],
e = Object(_dom__WEBPACK_IMPORTED_MODULE_11__.ge) ('wrap3'),
r = Object(_dom__WEBPACK_IMPORTED_MODULE_11__.ge) ('title'),
i = cur._onback;
return window.tooltips && tooltips.destroyAll(),
Object(_dom__WEBPACK_IMPORTED_MODULE_11__.hide) ('audio_tip_wrap'),
Object(_nav_utils__WEBPACK_IMPORTED_MODULE_16__.processDestroy) (cur),
window.radioBtns = t.radioBtns,
window.ajaxCache = t.ajaxCache,
window.PageID = t.pid,
boxQueue.hideAll(!1, !0),
layerQueue.clear(),
layers.fullhide && layers.fullhide(!0),
Object(_nav_utils__WEBPACK_IMPORTED_MODULE_16__.showBackLink) (),
window.cur = t.cur,
setTimeout(function () {
if (e.innerHTML = '', e.parentNode.replaceChild(t.content, e), vk.width === t.width && vk.width_dec_footer === t.width_dec_footer || Object(_nav_utils__WEBPACK_IMPORTED_MODULE_16__.handlePageView) (t), Object(_scroll__WEBPACK_IMPORTED_MODULE_13__.scrollToY) (t.scrollTop, 0), Object(_dom__WEBPACK_IMPORTED_MODULE_11__.setDocumentTitle) (t.htitle), r && (r.innerHTML = t.title, Object(_dom__WEBPACK_IMPORTED_MODULE_11__.setStyle) (r.parentNode, 'display', t.hideHeader ? 'none' : 'block')), t.bodyClass !== bodyNode.className && (bodyNode.className = t.bodyClass || '', vk.body_class = t.bodyClass || ''), cur._back.show) for (var n = 0, s = cur._back.show.length; n < s; n++) cur._back.show[n]();
if (i) for (var o = 0, a = i.length; o < a; o++) i[o]();
Nav.setLoc(strLoc);
var l = t.back || {
};
setTimeout(function () {
Object(_nav_utils__WEBPACK_IMPORTED_MODULE_16__.showBackLink) (l[0], l[1], l[2]),
(Nav.objLoc.z || Nav.objLoc.w) && Object(_nav_utils__WEBPACK_IMPORTED_MODULE_16__.zNav) ({
z: Nav.objLoc.z,
w: Nav.objLoc.w
}, {
}),
Object(_stl__WEBPACK_IMPORTED_MODULE_23__.updateSTL) (),
Object(_nav_utils__WEBPACK_IMPORTED_MODULE_16__.updateLeftMenu) (),
Object(_accessibility__WEBPACK_IMPORTED_MODULE_22__.updateAriaElements) (),
_top_search__WEBPACK_IMPORTED_MODULE_7__.default.clear()
},
10), Object(_feature_entries__WEBPACK_IMPORTED_MODULE_21__.getAudioPlayer) ().updateCurrentPlaying()
},
10), {
v: !1
}
}();
if ('object' == typeof _ret) return _ret.v
}
}
var dest = objLoc[0],
where;
delete objLoc[0];
try {
where = Nav.getData(dest)
} catch (t) {
where = null
}
if (null === where) {
if (opts.throwErrorOnDisabledPath) throw new Error('AL navigation is disabled for this path');
return !0
}
opts.noframe || (opts.tstat = ajax.tGetParam(), ajax.tStart = (new Date).getTime(), opts.bench = !0),
opts.params && opts.params._ref || (opts.params = Object(_utils_common__WEBPACK_IMPORTED_MODULE_8__.extend) (opts.params || {
}, {
_ref: Nav.objLoc[0] || ''
})),
where.files && stManager.add(where.files),
where.params = Object(_utils_common__WEBPACK_IMPORTED_MODULE_8__.extend) ({
__query: dest,
al_id: vk.id
}, objLoc, opts.params || {
});
var postParamsEl = ev && ev.target && ev.target.getAttribute ? ev.target : loc && loc.getAttribute ? loc : null,
postParams = Nav.getPostParams(postParamsEl, !!where.params._post_click_type);
where.params = Nav.mergePostParamsOptions(postParams, where.params),
opts.cl_id && (where.params.fr_click = cur.oid + ',' + opts.cl_id + ',' + cur.options.fr_click),
opts.tstat && (where.params._tstat = opts.tstat),
opts.permanent && (where.params._permanent = opts.permanent);
var curNavVersion = ++NextPageID,
done = function done(title, html, js, params) {
if (curNavVersion === NextPageID) {
try {
params._id = params.id
} catch (t) {
return Object(_ui_util__WEBPACK_IMPORTED_MODULE_14__.topError) (t, {
dt: 15,
type: 6,
msg: `Error: ${t.message
}
, (params undefined?), title: ${title
}
, html: ${html
}
, js: ${js
}
`,
url: where.url,
query: Object(_shared_lib_convert__WEBPACK_IMPORTED_MODULE_15__.toQueryString) (where.params),
answer: arguments.length
})
}
if (window.lastScrollTop = Object(_scroll__WEBPACK_IMPORTED_MODULE_13__.scrollGetY) (), opts.bench && (ajax.tProcess = (new Date).getTime()), stVersions[jsc('web/common_web.js')] > StaticFiles[jsc('web/common_web.js')].v) {
if (Nav.setLoc(params.loc || Nav.strLoc), Object(_nav_utils__WEBPACK_IMPORTED_MODULE_16__.reloadCheckFlood) ({
force: !0,
from: 4
})) return;
location.reload(!0)
} else {
var newPage = void 0 === where.params.al_id || where.params.al_id != params.id || params.fullPage,
tNode = Object(_dom__WEBPACK_IMPORTED_MODULE_11__.ge) ('title'),
wNode = Object(_dom__WEBPACK_IMPORTED_MODULE_11__.ge) ('wrap3'),
_back = cur._back,
hist = !1;
if ((strLoc === (cur._back || {
}).loc || newPage || opts.back) && (_back = !1), (opts.noback || params.level && (!cur._level || params.level <= cur._level) && !1 !== opts.noback) && (_back = !1, (opts.noback || cur._level && params.level < cur._level) && Object(_nav_utils__WEBPACK_IMPORTED_MODULE_16__.showBackLink) ()), window.tooltips && tooltips.destroyAll(), Object(_utils_common__WEBPACK_IMPORTED_MODULE_8__.each) (Object(_dom__WEBPACK_IMPORTED_MODULE_11__.geByClass) ('page_actions_wrap'), (t, e) =>Object(_dom__WEBPACK_IMPORTED_MODULE_11__.hide) (e)), Object(_dom__WEBPACK_IMPORTED_MODULE_11__.hide) ('audio_tip_wrap'), _back) {
if (Object(_video__WEBPACK_IMPORTED_MODULE_18__.revertLastInlineVideo) (), hist = {
loc: _back.loc || Nav.strLoc,
cur,
radioBtns,
ajaxCache,
pid: PageID,
scrollTop: Object(_scroll__WEBPACK_IMPORTED_MODULE_13__.scrollGetY) (),
htitle: document.title.toString(),
width: vk.width,
width_dec: vk.width_dec,
width_dec_footer: vk.width_dec_footer,
noleftmenu: vk.noleftmenu,
notopmenu: vk.notopmenu,
nobottommenu: vk.nobottommenu,
bodyClass: vk.body_class,
back: !(!_tbLink || !_tbLink.loc) && [
_tbLink.loc,
Object(_dom__WEBPACK_IMPORTED_MODULE_11__.val) (_tbLink),
_tbLink.fast
]
}, tNode && tNode.parentNode && !Object(_dom__WEBPACK_IMPORTED_MODULE_11__.isVisible) (tNode.parentNode) && (hist.hideHeader = !0), Object(_nav_utils__WEBPACK_IMPORTED_MODULE_16__.globalHistoryDestroy) (hist.loc), globalHistory.length > 2) {
var h = globalHistory.shift();
Object(_nav_utils__WEBPACK_IMPORTED_MODULE_16__.processDestroy) (h.cur),
h.content.innerHTML = ''
}
if (cur._back.hide) for (var _i5 = 0, _l3 = cur._back.hide.length; _i5 < _l3; _i5++) cur._back.hide[_i5]();
_back.text && Object(_nav_utils__WEBPACK_IMPORTED_MODULE_16__.showBackLink) (hist.loc, _back.text, 1)
} else _tbLink && (_tbLink.fast = 0),
Object(_nav_utils__WEBPACK_IMPORTED_MODULE_16__.processDestroy) (cur);
if (PageID = NextPageID, Object(_utils_common__WEBPACK_IMPORTED_MODULE_8__.each) (radioBtns, function (t, e) {
e.keep || delete radioBtns[t]
}), window.ajaxCache = {
}, boxQueue.hideAll(!1, !0), layerQueue.clear(), layers.fullhide && layers.fullhide(!0), window.cur = {
destroy: [
],
nav: [
]
}, window._stlWas = 0, newPage) {
for (Object(_dom__WEBPACK_IMPORTED_MODULE_11__.cleanElems) ('quick_login_button', 'quick_expire', 'search_form', 'top_links', 'bottom_nav'); globalHistory.length; ) {
var _h = globalHistory.shift();
Object(_nav_utils__WEBPACK_IMPORTED_MODULE_16__.processDestroy) (_h.cur),
_h.content.innerHTML = ''
}
var oldTopW = Object(_dom__WEBPACK_IMPORTED_MODULE_11__.ge) ('dev_top_nav_wrap') && Object(_dom__WEBPACK_IMPORTED_MODULE_11__.getSize) ('dev_top_nav_wrap') [0] || Object(_dom__WEBPACK_IMPORTED_MODULE_11__.ge) ('page_header_wrap') && Object(_dom__WEBPACK_IMPORTED_MODULE_11__.getSize) ('page_header_wrap') [0] || 0;
pageNode.innerHTML = html,
oldTopW && !vk.staticheader && Object(_nav_utils__WEBPACK_IMPORTED_MODULE_16__.updateHeaderStyles) ({
width: oldTopW
}),
window._tbLink = Object(_dom__WEBPACK_IMPORTED_MODULE_11__.ge) ('top_back_link');
try {
_tbLink.style.maxWidth = _tbLink.parentNode.offsetWidth - 35 + 'px'
} catch (t) {
}
_browser__WEBPACK_IMPORTED_MODULE_20__.browser.mobile || Object(_layout_utils__WEBPACK_IMPORTED_MODULE_17__.onBodyResize) (!0)
} else {
if (_back) {
var newW = Object(_dom__WEBPACK_IMPORTED_MODULE_11__.ce) ('div', {
id: 'wrap3'
});
Object(_utils_common__WEBPACK_IMPORTED_MODULE_8__.extend) (hist, {
content: wNode.parentNode.replaceChild(newW, wNode),
title: tNode ? tNode.innerHTML : ''
}),
globalHistory.push(hist),
wNode = newW
}
var _oldTopW = Object(_dom__WEBPACK_IMPORTED_MODULE_11__.ge) ('dev_top_nav_wrap') && Object(_dom__WEBPACK_IMPORTED_MODULE_11__.getSize) ('dev_top_nav_wrap') [0] || Object(_dom__WEBPACK_IMPORTED_MODULE_11__.ge) ('page_header_wrap') && Object(_dom__WEBPACK_IMPORTED_MODULE_11__.getSize) ('page_header_wrap') [0] || 0;
wNode && (wNode.innerHTML = html),
_oldTopW && !vk.staticheader && Object(_nav_utils__WEBPACK_IMPORTED_MODULE_16__.updateHeaderStyles) ({
width: _oldTopW
}),
tNode && (tNode.innerHTML = title, (title ? _dom__WEBPACK_IMPORTED_MODULE_11__.show : _dom__WEBPACK_IMPORTED_MODULE_11__.hide) (tNode.parentNode)),
Object(_feature_entries__WEBPACK_IMPORTED_MODULE_21__.getAudioPlayer) ().updateCurrentPlaying()
}
if (Object(_layout_utils__WEBPACK_IMPORTED_MODULE_17__.checkPageBlocks) (), Object(_stl__WEBPACK_IMPORTED_MODULE_23__.updateSTL) (), Object(_nav_utils__WEBPACK_IMPORTED_MODULE_16__.updateLeftMenu) (), Object(_accessibility__WEBPACK_IMPORTED_MODULE_22__.updateAriaElements) (), _top_search__WEBPACK_IMPORTED_MODULE_7__.default.clear(),
window.LazyLoad && LazyLoad.scanDelayed(),
window.appUseTime && window.appUseTime.pageChanged(),
Object(_nav_utils__WEBPACK_IMPORTED_MODULE_16__.handlePageParams) (params),
opts.preventScroll || (opts.scrollTop > 0 ? Object(_scroll__WEBPACK_IMPORTED_MODULE_13__.scrollToY) (opts.scrollTop, 0)  : opts.noscroll || params.noscroll || Object(_scroll__WEBPACK_IMPORTED_MODULE_13__.scrollToTop) (0)),
opts.bench && (ajax.tRender = (new Date).getTime()),
Nav.curLoc = params.loc,
js) {
var evalString = `(function(){${js
}
;})()`; if (__debugMode) eval(evalString);  else try {
eval(evalString)
} catch (t) {
Object(_debug_tools__WEBPACK_IMPORTED_MODULE_10__.logEvalError) (t, evalString)
}
}
ajax._framenext(),
opts.onDone && opts.onDone(),
_browser__WEBPACK_IMPORTED_MODULE_20__.browser.mobile && Object(_layout_utils__WEBPACK_IMPORTED_MODULE_17__.onBodyResize) (),
changed.f && Object(_utils__WEBPACK_IMPORTED_MODULE_24__.handleScroll) (changed.f),
Nav.setLoc(params.loc || ''),
changed[0] && (window.vkLastNav = Date.now()),
Object(_utils_common__WEBPACK_IMPORTED_MODULE_8__.lTimeout) (function () {
Object(_feature_entries__WEBPACK_IMPORTED_MODULE_21__.getAudioPlayer) ().updateCurrentPlaying(),
TopMenu.toggle(!1)
}, _browser__WEBPACK_IMPORTED_MODULE_20__.browser.chrome ? 100 : 50)
}
}
};
return window.Page && (Page.postsSave(), Page.postsSend(), Page.postsClearTimeouts()),
Object(_ads__WEBPACK_IMPORTED_MODULE_9__.updSeenAdsInfo) (),
Object(_ads__WEBPACK_IMPORTED_MODULE_9__.__adsUpdate) ('already'),
'im' !== Nav.objLoc[0] && 'im' !== changed[0] || (where.params = Object(_utils_common__WEBPACK_IMPORTED_MODULE_8__.extend) ({
}, where.params, {
_full_page: !0
})),
ajax.post(where.url, where.params, {
onDone: function () {
var t = arguments;
if (__debugMode) done.apply(null, t);
 else try {
done.apply(null, t)
} catch (e) {
Object(_ui_util__WEBPACK_IMPORTED_MODULE_14__.topError) (e, {
dt: 15,
type: 6,
url: where.url,
query: Object(_shared_lib_convert__WEBPACK_IMPORTED_MODULE_15__.toQueryString) (where.params),
js: t[2],
answer: Array.prototype.slice.call(arguments).join('<!>')
})
}
},
onFail: opts.onFail || function (t) {
if (t) return setTimeout(Object(_message_box__WEBPACK_IMPORTED_MODULE_25__.showFastBox) ({
title: Object(_lang__WEBPACK_IMPORTED_MODULE_26__.getLang) ('global_error')
}, t).hide, __debugMode ? 30000 : 3000),
!0
},
frame: opts.noframe ? 0 : 1,
canReload: !0,
showProgress: opts.showProgress,
hideProgress: opts.hideProgress,
cache: opts.search ? 1 : '',
bench: opts.bench
}),
!1
}
},
setLoc: function (t, e) {
var r,
i;
r = i = t,
'string' == typeof t ? i = Nav.fromStr(t)  : r = Nav.toStr(t),
(e || !window.isArticleLayerOpen() || r.match(/article_edit(-?\d+_\d+)/)) && (Nav.strLoc = r, Nav.objLoc = i, hab.setLoc(Nav.strLoc))
},
change: function (t, e, r) {
var i = Object(_utils_common__WEBPACK_IMPORTED_MODULE_8__.clone) (Nav.objLoc);
return Object(_utils_common__WEBPACK_IMPORTED_MODULE_8__.each) (t, function (t, e) {
!1 === e ? delete i[t] : i[t] = e
}),
Nav.go(i, e, r)
},
fromStr: function (t) {
var e = (t = t.split('#')) [0].split('?'),
r = {
0: e[0] || ''
};
return t[1] && (r['#'] = t[1]),
Object(_utils_common__WEBPACK_IMPORTED_MODULE_8__.extend) (Object(_shared_lib_convert__WEBPACK_IMPORTED_MODULE_15__.fromQueryString) (e[1] || ''), r)
},
toStr: function (t) {
var e = (t = Object(_utils_common__WEBPACK_IMPORTED_MODULE_8__.clone) (t)) ['#'] || '',
r = t[0] || '';
delete t[0],
delete t['#'];
var i = Object(_shared_lib_convert__WEBPACK_IMPORTED_MODULE_15__.toQueryString) (t);
return (i ? r + '?' + i : r) + (e ? '#' + e : '')
},
init: function () {
window.globalHistory = [
],
Nav.strLoc = hab.getLoc(),
Nav.objLoc = Nav.fromStr(Nav.strLoc)
},
getPostParams: function (t, e) {
var r = !(!t || !t.getAttribute),
i = {
};
if (!r) return i;
var n = t.getAttribute('data-post-id');
n && (i.post_id = n);
var s = t.getAttribute('data-parent-post-id');
s && (i.parent_post_id = s);
var o = t.getAttribute('data-post-click-type');
o && (i.post_click_type = o);
var a = t.getAttribute('mention_id');
a && (i.post_click_mention_id = a);
var l = t.getAttribute('data-post-click-cc-key');
l && (i.post_click_cc_key = l);
var c = [
t.getAttribute('href'),
t.getAttribute('data-href')
];
if (Object(_utils_common__WEBPACK_IMPORTED_MODULE_8__.each) (c, function (t, e) {
if (e && '#' !== e) return i.post_click_url = e,
!1
}), !!o || e) {
var h = Object(_dom__WEBPACK_IMPORTED_MODULE_11__.gpeByClass) ('_ads_block_data_w', t),
d = (h = h || Object(_dom__WEBPACK_IMPORTED_MODULE_11__.gpeByClass) ('_ads_promoted_post_data_w', t)) && h.getAttribute('data-ad'),
u = h && h.getAttribute('data-ad-block-uid');
d && (i.ad_data = d),
u && (i.ad_block_unique_id = u)
}
return i
},
mergePostParamsOptions: function (t, e) {
if (e = e || {
}, !t) return e;
function r(t, r, i) {
var n = i && e[r];
return !(!t || n) && (e[r] = t, !0)
}
return r(t.post_id, '_post', !0),
r(t.parent_post_id, '_parent_post', !0),
r(t.post_click_type, '_post_click_type', !0),
e._post_click_type && (r(t.post_click_mention_id, '_post_click_mention_id', !0), r(t.post_click_cc_key, '_post_click_cc_key', !0), r(t.post_click_url, '_post_click_url', !0), r(t.ad_data, '_post_ad_data', !0) && r(t.ad_block_unique_id, '_post_ad_block_unique_id')),
e
}
};
function authorPageNav(t, e, r) {
if (r && cur.backFromAuthorPage) return delete cur.backFromAuthorPage,
!0;
var i = t.toLowerCase();
if (/^(?:%40|@)-?[.a-z0-9_]+(?:\?\w+)?$/.test(i)) return boxRefreshCoords(boxLoader),
Object(_dom__WEBPACK_IMPORTED_MODULE_11__.show) (boxLoader),
Object(_dom__WEBPACK_IMPORTED_MODULE_11__.show) (boxLayerWrap),
stManager.add([jsc('web/author_page.js'),
jsc('web/article_layer.js'),
'author_page.css',
'ui_controls.js',
'ui_controls.css'], function () {
window.AuthorPage.showLayer(i)
}),
!0;
if (window.AuthorPage && window.AuthorPage.isOpen()) {
if (r && window.AuthorPage.isStandalone()) return window.location.reload(!0),
!0;
var n = window.AuthorPage.close(!0);
return void 0 !== n ? n : !!r
}
}
function articleNav(t, e, r, i, n) {
var s = t.toLowerCase(),
o = /^(?:%40|@)-?[.a-z0-9_]+-[a-z0-9-]+(?:[\?&]\w+\=[a-z0-9-_]+)*$/;
if (o.test(s)) return window.isArticleLayerOpen() || (cur.articlePrevLoc = e),
window.WkView && WkView.hide(!0),
window.boxQueue && boxQueue.hideAll(),
stManager.add([jsc('web/article_layer.js'),
'article.css'], function () {
ArticleLayer.show(s, !0, !1, {
ev: n
}),
cur.articleSequence = Math.max(1, (cur.articleSequence || 0) + (r ? - 1 : 1))
}),
!0;
if (window.isArticleLayerOpen()) {
if (r && ArticleLayer.isStandalone()) return window.location.reload(!0),
!0;
var a = () =>{
ArticleLayer.close(),
delete cur.articleSequence
},
l = cur.articlePrevLoc;
return delete cur.articlePrevLoc,
l && !o.test(l) ? t === l ? (a(), i && i(), !0)  : (layers.fullhide = function () {
a()
}, !1)  : (a(), !0)
}
return !1
}
function bookmarksNav(t) {
if (t) {
var e = Object(_dom__WEBPACK_IMPORTED_MODULE_11__.domClosest) ('bookmarks_rows', t.target),
r = !!Object(_dom__WEBPACK_IMPORTED_MODULE_11__.domClosest) ('bookmarks_pages', t.target);
if ((e || r) && (r || Object(_dom__WEBPACK_IMPORTED_MODULE_11__.hasClass) (e, 'bookmarks_rows_user') || Object(_dom__WEBPACK_IMPORTED_MODULE_11__.hasClass) (e, 'bookmarks_rows_group') || Object(_dom__WEBPACK_IMPORTED_MODULE_11__.hasClass) (e, 'bookmarks_rows_page'))) {
var i;
if (!(i = e ? Object(_dom__WEBPACK_IMPORTED_MODULE_11__.domClosest) ('_bookmark_page_item', t.target)  : Object(_dom__WEBPACK_IMPORTED_MODULE_11__.domClosest) ('line_cell', t.target))) return;
statlogsValueEvent('bookmarks_product_analytics', {
item_type: 'page',
item_id: intval(Object(_dom__WEBPACK_IMPORTED_MODULE_11__.domData) (i, 'id')),
time: window.getServerTime()
})
}
}
}
__webpack_exports__.default = Nav
},
MfQN: function (t, e) {
t.exports = function (t, e, r) {
var i = void 0 === r;
switch (e.length) {
case 0:
return i ? t()  : t.call(r);
case 1:
return i ? t(e[0])  : t.call(r, e[0]);
case 2:
return i ? t(e[0], e[1])  : t.call(r, e[0], e[1]);
case 3:
return i ? t(e[0], e[1], e[2])  : t.call(r, e[0], e[1], e[2]);
case 4:
return i ? t(e[0], e[1], e[2], e[3])  : t.call(r, e[0], e[1], e[2], e[3])
}
return t.apply(r, e)
}
},
MiCK: function (t, e, r) {
'use strict';
r.r(e),
r.d(e, 'mobileOnlineTip', function () {
return s
}),
r.d(e, 'pageVerifiedTip', function () {
return o
}),
r.d(e, 'audioShowActionTooltip', function () {
return a
}),
r.d(e, 'mentionOver', function () {
return l
}),
r.d(e, 'bookmarkTooltip', function () {
return c
});
var i = r('FWc3'),
n = r('zxIV');
function s(t, e) {
var r = e.asrtl ? 0 : e.right ? 289 : 35,
n = e.asrtl ? ' mobile_tt_asrtl' : e.right ? ' mobile_tt_right' : '';
return Object(i.showTooltip) (t, {
url: 'al_login.php',
params: {
act: 'mobile_tt',
mid: e.mid,
was: e.was
},
slide: 15,
ajxdt: 200,
showdt: 200,
hidedt: 200,
forcetoup: e.forcetoup,
toup: !1,
dir: 'auto',
asrtl: e.asrtl,
appendParentCls: e.appendParentCls,
shift: [
r,
8,
7
],
className: 'mobile_tt' + n
})
}
function o(t, e) {
return Object(i.showTooltip) (t, {
url: '/al_page.php',
params: {
act: 'verified_tt',
type: e.type,
oid: e.oid
},
slide: 15,
ajxdt: 200,
showdt: 200,
hidedt: 200,
dir: 'auto',
shift: [
94,
7,
7
],
className: 'verified_tt'
})
}
function a(t, e, r) {
if (!cur._addRestoreInProgress) {
var s = Object(n.gpeByClass) ('_audio_row', t),
o = AudioUtils.getAudioFromEl(s, !0),
a = Object(n.domData) (t, 'action'),
l = AudioUtils.getRowActionName(a, o, s),
c = {
text: () =>l,
black: 1,
shift: e || [
7,
4,
0
],
needLeft: !0,
forcetodown: r
};
each(['_im_mess_stack',
'top_notify_wrap',
'_ape_audio_item',
'wk_history_audio_content'], function (e, r) {
if (Object(n.gpeByClass) (r, t)) return c.appendParentCls = r,
!1
}),
Object(n.gpeByClass) ('_im_mess_stack', t) && (c.shift = [
7,
10,
0
], c.noZIndex = !0),
Object(i.showTooltip) (t, c)
}
}
function l(t) {
var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
};
Object(i.showTooltip) (t, {
url: 'al_wall.php',
params: {
act: 'mention_tt',
mention: t.getAttribute('mention_id'),
from: 'wall'
},
shift: e.shift || [
52,
7,
7
],
hidedt: e.hidedt || 500,
showdt: 500,
needLeft: e.needLeft,
slide: 15,
checkLeft: !0,
reverseOffset: e.reverseOffset || 112,
dir: 'auto',
appendEl: e.appendEl || Object(n.domClosest) ('im-page-history-w', t) || Object(n.domClosest) ('rb_box_wrap', t) || Object(n.domClosest) ('wk_cont', t) || Object(n.domClosest) ('scroll_fix_wrap', t)
})
}
function c(t) {
var e = '';
Object(n.gpeByClass) ('_im_mess_stack', t) ? e = '_im_mess_stack' : Object(n.gpeByClass) ('wall_text', t) && (e = 'scroll_fix_wrap'),
Object(i.showTooltip) (t, {
className: 'bookmarks_tt ',
shift: [
32,
8
],
text: () =>'1' === Object(n.domData) (t, 'state') ? Object(n.domData) (t, 'remove')  : Object(n.domData) (t, 'add'),
black: 1,
appendParentCls: e
})
}
},
Mukb: function (t, e, r) {
var i = r('hswa'),
n = r('RjD/');
t.exports = r('nh4g') ? function (t, e, r) {
return i.f(t, e, n(1, r))
}
 : function (t, e, r) {
return t[e] = r,
t
}
},
N8g3: function (t, e, r) {
e.f = r('K0xU')
},
NO8f: function (t, e, r) {
r('7DDg') ('Uint8', 1, function (t) {
return function (e, r, i) {
return t(this, e, r, i)
}
})
},
Nr18: function (t, e, r) {
'use strict';
var i = r('S/j/'),
n = r('d/Gc'),
s = r('ne8i');
t.exports = function (t) {
for (var e = i(this), r = s(e.length), o = arguments.length, a = n(o > 1 ? arguments[1] : void 0, r), l = o > 2 ? arguments[2] : void 0, c = void 0 === l ? r : n(l, r); c > a; ) e[a++] = t;
return e
}
},
OEbY: function (t, e, r) {
r('nh4g') && 'g' != /./g.flags && r('hswa').f(RegExp.prototype, 'flags', {
configurable: !0,
get: r('C/va')
})
},
OG14: function (t, e, r) {
'use strict';
var i = r('y3w9'),
n = r('g6HL'),
s = r('Xxuz');
r('IU+Z') ('search', 1, function (t, e, r, o) {
return [function (r) {
var i = t(this),
n = null == r ? void 0 : r[e];
return void 0 !== n ? n.call(r, i)  : new RegExp(r) [e](String(i))
},
function (t) {
var e = o(r, t, this);
if (e.done) return e.value;
var a = i(t),
l = String(this),
c = a.lastIndex;
n(c, 0) || (a.lastIndex = 0);
var h = s(a, l);
return n(a.lastIndex, c) || (a.lastIndex = c),
null === h ? - 1 : h.index
}
]
})
},
OGtf: function (t, e, r) {
var i = r('XKFU'),
n = r('eeVq'),
s = r('vhPU'),
o = /"/g,
a = function (t, e, r, i) {
var n = String(s(t)),
a = '<' + e;
return '' !== r && (a += ' ' + r + '="' + String(i).replace(o, '&quot;') + '"'),
a + '>' + n + '</' + e + '>'
};
t.exports = function (t, e) {
var r = {
};
r[t] = e(a),
i(i.P + i.F * n(function () {
var e = ''[t]('"');
return e !== e.toLowerCase() || e.split('"').length > 3
}), 'String', r)
}
},
OP3Y: function (t, e, r) {
var i = r('aagx'),
n = r('S/j/'),
s = r('YTvA') ('IE_PROTO'),
o = Object.prototype;
t.exports = Object.getPrototypeOf || function (t) {
return t = n(t),
i(t, s) ? t[s] : 'function' == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? o : null
}
},
OnI7: function (t, e, r) {
var i = r('dyZX'),
n = r('g3g5'),
s = r('LQAc'),
o = r('N8g3'),
a = r('hswa').f;
t.exports = function (t) {
var e = n.Symbol || (n.Symbol = s ? {
}
 : i.Symbol || {
});
'_' == t.charAt(0) || t in e || a(e, t, {
value: o.f(t)
})
}
},
Oyvg: function (t, e, r) {
var i = r('dyZX'),
n = r('Xbzi'),
s = r('hswa').f,
o = r('kJMx').f,
a = r('quPj'),
l = r('C/va'),
c = i.RegExp,
h = c,
d = c.prototype,
u = /a/g,
p = /a/g,
_ = new c(u) !== u;
if (r('nh4g') && (!_ || r('eeVq') (function () {
return p[r('K0xU') ('match')] = !1,
c(u) != u || c(p) == p || '/a/i' != c(u, 'i')
}))) {
c = function (t, e) {
var r = this instanceof c,
i = a(t),
s = void 0 === e;
return !r && i && t.constructor === c && s ? t : n(_ ? new h(i && !s ? t.source : t, e)  : h((i = t instanceof c) ? t.source : t, i && s ? l.call(t)  : e), r ? this : d, c)
};
for (var f = function (t) {
t in c || s(c, t, {
configurable: !0,
get: function () {
return h[t]
},
set: function (e) {
h[t] = e
}
})
}, m = o(h), g = 0; m.length > g; ) f(m[g++]);
d.constructor = c,
c.prototype = d,
r('KroJ') (i, 'RegExp', c)
}
r('elZq') ('RegExp')
},
QGEU: function (t, e, r) {
'use strict';
r.r(e),
r.d(e, 'hasAccessibilityMode', function () {
return a
}),
r.d(e, 'updateOnlineText', function () {
return l
}),
r.d(e, 'updateAriaCheckboxes', function () {
return c
}),
r.d(e, 'updateAriaRadioBtns', function () {
return h
}),
r.d(e, 'updateAriaElements', function () {
return d
});
var i = r('v+DW'),
n = r('t7n3'),
s = r('zxIV'),
o = r('4+be');
function a() {
return !(!window.vk || !vk.a11y)
}
function l() {
clearTimeout(cur.updateOnlineTO),
cur.updateOnlineTO = setTimeout(function () {
Object(n.each) (Object(s.geByClass) ('_online'), function () {
var t = Object(s.geByClass1) ('_online_reader', this) || this,
e = Object(s.hasClass) (this, 'online'),
r = Object(s.hasClass) (this, 'mobile'),
i = Object(s.geByTag) ('img', t),
a = function (t) {
var e = Object(s.domClosest) ('_post', t),
r = e && Object(s.domByClass) (e, 'author');
return r ? r.innerText || r.textContent : ''
};
if (e) {
var l = '';
Object(n.each) (i, function () {
var t = Object(s.attr) (this, 'alt') || Object(s.attr) (this, 'data-alt') || a(this);
t && (l = Object(n.trim) (l + ' ' + t), this.setAttribute('data-alt', t), this.removeAttribute('alt'))
}),
l = Object(n.trim) (l + ' ' + (r ? Object(o.getLang) ('global_user_is_online_mobile')  : Object(o.getLang) ('global_user_is_online'))),
t.setAttribute('aria-label', l)
} else Object(n.each) (i, function () {
var t = Object(s.attr) (this, 'data-alt') || a(this);
t && (this.setAttribute('alt', t), this.removeAttribute('data-alt'))
}),
t.removeAttribute('aria-label')
})
}, 100)
}
function c() {
clearTimeout(cur.updateChkBoxTO),
cur.updateChkBoxTO = setTimeout(function () {
var t = [
];
Object(n.each) (['checkbox',
'checkbox_pic'], function () {
t = t.concat(Object(s.geByClass) (this))
}),
Object(n.each) (t, function () {
'DIV' !== this.tagName || this.getAttribute('role') || (this.setAttribute('role', 'checkbox'), this.setAttribute('aria-checked', Object(i.isChecked) (this) ? 'true' : 'false'), this.setAttribute('tabindex', 0))
})
}, 100)
}
function h() {
clearTimeout(cur.updateRadioBtnsTO),
cur.updateRadioBtnsTO = setTimeout(function () {
var t = [
],
e = Object(s.geByClass) ('radiobtn');
Object(n.each) (e, function () {
if ('DIV' === this.tagName && !this.getAttribute('role')) {
var e = Object(i.isChecked) (this);
this.setAttribute('role', 'radio'),
this.setAttribute('aria-checked', e ? 'true' : 'false'),
this.setAttribute('tabindex', e ? 0 : - 1);
var r = function (t) {
var e = 0,
r = t;
for (; e < 5 && r !== document; ) {
if (r = Object(s.domPN) (r), Object(s.geByClass) ('radiobtn', r).length > 1) break;
e++
}
return r
}(this);
~t.indexOf(r) || t.push(r)
}
}),
Object(n.each) (t, function () {
if (!Object(s.geByClass) ('on', this).length) {
var t = Object(s.geByClass) ('radiobtn', this);
t.length && t[0].setAttribute('tabindex', 0)
}
})
}, 100)
}
function d() {
l(),
c(),
h()
}
},
QaDb: function (t, e, r) {
'use strict';
var i = r('Kuth'),
n = r('RjD/'),
s = r('fyDq'),
o = {
};
r('Mukb') (o, r('K0xU') ('iterator'), function () {
return this
}),
t.exports = function (t, e, r) {
t.prototype = i(o, {
next: n(1, r)
}),
s(t, e + ' Iterator')
}
},
RYi7: function (t, e) {
var r = Math.ceil,
i = Math.floor;
t.exports = function (t) {
return isNaN(t = + t) ? 0 : (t > 0 ? i : r) (t)
}
},
RbYe: function (t, e, r) {
'use strict';
r.r(e);
r('rE2o'),
r('ioFf'),
r('rGqo');
function i(t) {
var e = window.getSelection();
return e.removeAllRanges(),
e.addRange(t),
t
}
function n(t, e, r, n) {
var s = document.createRange();
return s.setStart(t, e),
s.setEnd(r, n),
i(s)
}
function s(t, e) {
if (e = e ? e + '' : '', !browser.msie && document.execCommand) document.execCommand('insertHTML', !1, e);
 else if (t) {
t.deleteContents();
var r = cf(e),
n = r.lastChild;
t.insertNode(r),
n && ((t = t.cloneRange()).setStartAfter(n), t.collapse(!0), i(t))
}
return t
}
var o = r('E2g8');
function a(t, e) {
return function (t) {
if (Array.isArray(t)) return t
}(t) || function (t, e) {
var r = [
],
i = !0,
n = !1,
s = void 0;
try {
for (var o, a = t[Symbol.iterator](); !(i = (o = a.next()).done) && (r.push(o.value), !e || r.length !== e); i = !0);
} catch (t) {
n = !0,
s = t
} finally {
try {
i || null == a.return || a.return ()
} finally {
if (n) throw s
}
}
return r
}(t, e) || function () {
throw new TypeError('Invalid attempt to destructure non-iterable instance')
}()
}
r.d(e, 'getFiles', function () {
return c
}),
r.d(e, 'clipboardProcessPaste', function () {
return u
}),
r.d(e, 'copyToClipboard', function () {
return p
});
var l = o.Promise;
function c(t) {
var e = function (t) {
return t && t.clipboardData ? t.clipboardData : t && t.originalEvent && t.originalEvent.clipboardData ? t.originalEvent.clipboardData : window.clipboardData
}(t);
if (!e) return [];
var r = e.items;
if (!r) return [];
for (var i = [
], n = 0; n < r.length; n++) 0 == r[n].type.indexOf('image') && i.push(r[n].getAsFile());
return i
}
var h = !1,
d = null;
function u(t) {
return new l((e, r) =>{
if (h) return cancelEvent(t),
r();
var i = a(function () {
var t = null,
e = window.getSelection();
e.getRangeAt && e.rangeCount && (t = e.getRangeAt(0));
var r = null,
i = null,
n = 0,
s = 0,
o = document.activeElement;
return t && ('selectionStart' in o ? (r = o, i = o, n = o.selectionStart, s = o.selectionEnd)  : e.rangeCount && (r = t.startContainer, i = t.endContainer, n = t.startOffset, s = t.endOffset)),
[
t,
r,
n,
i,
s
]
}(), 5),
o = i[0],
c = i[1],
u = i[2],
p = i[3],
_ = i[4];
if (o) {
if ('paste' === t.type) {
var f = t.clipboardData || t.originalEvent && t.originalEvent.clipboardData;
if (f && f.types && f.getData) {
cancelEvent(t),
h = !0;
var m = f.getData('text/html') || clean(f.getData('text/plain')) || '';
return e([m,
t=>{
s(o, t),
h = !1
}
])
}
for (var g = cf(), v = t.target || window.event.srcElement; v.firstChild; ) g.appendChild(v.firstChild);
return new l(t=>setTimeout(() =>{
var e = v.innerHTML || '';
v.innerHTML = '',
v.appendChild(g),
t([e,
t=>{
s(o = n(c, u, p, _), t),
h = !1
}
])
}, 0))
}
if ('beforepaste' === t.type) return h = !0,
function () {
if (!d) {
var t = ge('utils');
d = ce('div', {
}, {
width: '10px',
height: '10px',
overflow: 'hidden'
}),
attr(d, 'contenteditable', 'true'),
t.appendChild(d)
}
}(),
d.focus(),
void (d.onpaste = () =>{
setTimeout(() =>{
var t = d.innerHTML || '';
d.innerHTML = '',
delete d.onpaste,
e([t,
t=>{
s(o = n(c, u, p, _), t),
h = !1
}
])
}, 0)
})
}
return r()
})
}
function p(t) {
var e = document.createElement('input'),
r = document.activeElement;
e.value = t,
document.body.appendChild(e),
e.select(),
document.execCommand('copy'),
document.body.removeChild(e),
r.focus()
}
},
'RjD/': function (t, e) {
t.exports = function (t, e) {
return {
enumerable: !(1 & t),
configurable: !(2 & t),
writable: !(4 & t),
value: e
}
}
},
'S/j/': function (t, e, r) {
var i = r('vhPU');
t.exports = function (t) {
return Object(i(t))
}
},
SRfc: function (t, e, r) {
'use strict';
var i = r('y3w9'),
n = r('ne8i'),
s = r('A5AN'),
o = r('Xxuz');
r('IU+Z') ('match', 1, function (t, e, r, a) {
return [function (r) {
var i = t(this),
n = null == r ? void 0 : r[e];
return void 0 !== n ? n.call(r, i)  : new RegExp(r) [e](String(i))
},
function (t) {
var e = a(r, t, this);
if (e.done) return e.value;
var l = i(t),
c = String(this);
if (!l.global) return o(l, c);
var h = l.unicode;
l.lastIndex = 0;
for (var d, u = [
], p = 0; null !== (d = o(l, c)); ) {
var _ = String(d[0]);
u[p] = _,
'' === _ && (l.lastIndex = s(c, n(l.lastIndex), h)),
p++
}
return 0 === p ? null : u
}
]
})
},
SlkY: function (t, e, r) {
var i = r('m0Pp'),
n = r('H6hf'),
s = r('M6Qj'),
o = r('y3w9'),
a = r('ne8i'),
l = r('J+6e'),
c = {
},
h = {
};
(e = t.exports = function (t, e, r, d, u) {
var p,
_,
f,
m,
g = u ? function () {
return t
}
 : l(t),
v = i(r, d, e ? 2 : 1),
b = 0;
if ('function' != typeof g) throw TypeError(t + ' is not iterable!');
if (s(g)) {
for (p = a(t.length); p > b; b++) if ((m = e ? v(o(_ = t[b]) [0], _[1])  : v(t[b])) === c || m === h) return m
} else for (f = g.call(t); !(_ = f.next()).done; ) if ((m = n(f, v, _.value, e)) === c || m === h) return m
}).BREAK = c,
e.RETURN = h
},
UExd: function (t, e, r) {
var i = r('nh4g'),
n = r('DVgA'),
s = r('aCFj'),
o = r('UqcF').f;
t.exports = function (t) {
return function (e) {
for (var r, a = s(e), l = n(a), c = l.length, h = 0, d = [
]; c > h; ) r = l[h++],
i && !o.call(a, r) || d.push(t ? [
r,
a[r]
] : a[r]);
return d
}
}
},
Ugos: function (t, e, r) {
'use strict';
var i,
n,
s = r('C/va'),
o = RegExp.prototype.exec,
a = String.prototype.replace,
l = o,
c = (i = /a/, n = /b*/g, o.call(i, 'a'), o.call(n, 'a'), 0 !== i.lastIndex || 0 !== n.lastIndex),
h = void 0 !== /()??/.exec('') [1];
(c || h) && (l = function (t) {
var e,
r,
i,
n,
l = this;
return h && (r = new RegExp('^' + l.source + '$(?!\\s)', s.call(l))),
c && (e = l.lastIndex),
i = o.call(l, t),
c && i && (l.lastIndex = l.global ? i.index + i[0].length : e),
h && i && i.length > 1 && a.call(i[0], r, function () {
for (n = 1; n < arguments.length - 2; n++) void 0 === arguments[n] && (i[n] = void 0)
}),
i
}),
t.exports = l
},
UqcF: function (t, e) {
e.f = {
}.propertyIsEnumerable
},
VRzm: function (t, e, r) {
'use strict';
var i,
n,
s,
o,
a = r('LQAc'),
l = r('dyZX'),
c = r('m0Pp'),
h = r('I8a+'),
d = r('XKFU'),
u = r('0/R4'),
p = r('2OiF'),
_ = r('9gX7'),
f = r('SlkY'),
m = r('69bn'),
g = r('GZEu').set,
v = r('gHnn') (),
b = r('pbhE'),
y = r('nICZ'),
E = r('ol8x'),
w = r('vKrd'),
O = l.TypeError,
P = l.process,
C = P && P.versions,
x = C && C.v8 || '',
A = l.Promise,
M = 'process' == h(P),
D = function () {
},
k = n = b.f,
T = !!function () {
try {
var t = A.resolve(1),
e = (t.constructor = {
}) [r('K0xU') ('species')] = function (t) {
t(D, D)
};
return (M || 'function' == typeof PromiseRejectionEvent) && t.then(D) instanceof e && 0 !== x.indexOf('6.6') && - 1 === E.indexOf('Chrome/66')
} catch (t) {
}
}(),
j = function (t) {
var e;
return !(!u(t) || 'function' != typeof (e = t.then)) && e
},
S = function (t, e) {
if (!t._n) {
t._n = !0;
var r = t._c;
v(function () {
for (var i = t._v, n = 1 == t._s, s = 0, o = function (e) {
var r,
s,
o,
a = n ? e.ok : e.fail,
l = e.resolve,
c = e.reject,
h = e.domain;
try {
a ? (n || (2 == t._h && B(t), t._h = 1), !0 === a ? r = i : (h && h.enter(), r = a(i), h && (h.exit(), o = !0)), r === e.promise ? c(O('Promise-chain cycle'))  : (s = j(r)) ? s.call(r, l, c)  : l(r))  : c(i)
} catch (t) {
h && !o && h.exit(),
c(t)
}
}; r.length > s; ) o(r[s++]);
t._c = [
],
t._n = !1,
e && !t._h && I(t)
})
}
},
I = function (t) {
g.call(l, function () {
var e,
r,
i,
n = t._v,
s = L(t);
if (s && (e = y(function () {
M ? P.emit('unhandledRejection', n, t)  : (r = l.onunhandledrejection) ? r({
promise: t,
reason: n
})  : (i = l.console) && i.error && i.error('Unhandled promise rejection', n)
}), t._h = M || L(t) ? 2 : 1), t._a = void 0, s && e.e) throw e.v
})
},
L = function (t) {
return 1 !== t._h && 0 === (t._a || t._c).length
},
B = function (t) {
g.call(l, function () {
var e;
M ? P.emit('rejectionHandled', t)  : (e = l.onrejectionhandled) && e({
promise: t,
reason: t._v
})
})
},
R = function (t) {
var e = this;
e._d || (e._d = !0, (e = e._w || e)._v = t, e._s = 2, e._a || (e._a = e._c.slice()), S(e, !0))
},
F = function (t) {
var e,
r = this;
if (!r._d) {
r._d = !0,
r = r._w || r;
try {
if (r === t) throw O('Promise can\'t be resolved itself');
(e = j(t)) ? v(function () {
var i = {
_w: r,
_d: !1
};
try {
e.call(t, c(F, i, 1), c(R, i, 1))
} catch (t) {
R.call(i, t)
}
})  : (r._v = t, r._s = 1, S(r, !1))
} catch (t) {
R.call({
_w: r,
_d: !1
}, t)
}
}
};
T || (A = function (t) {
_(this, A, 'Promise', '_h'),
p(t),
i.call(this);
try {
t(c(F, this, 1), c(R, this, 1))
} catch (t) {
R.call(this, t)
}
}, (i = function (t) {
this._c = [
],
this._a = void 0,
this._s = 0,
this._d = !1,
this._v = void 0,
this._h = 0,
this._n = !1
}).prototype = r('3Lyj') (A.prototype, {
then: function (t, e) {
var r = k(m(this, A));
return r.ok = 'function' != typeof t || t,
r.fail = 'function' == typeof e && e,
r.domain = M ? P.domain : void 0,
this._c.push(r),
this._a && this._a.push(r),
this._s && S(this, !1),
r.promise
},
catch : function (t) {
return this.then(void 0, t)
}
}), s = function () {
var t = new i;
this.promise = t,
this.resolve = c(F, t, 1),
this.reject = c(R, t, 1)
}, b.f = k = function (t) {
return t === A || t === o ? new s(t)  : n(t)
}),
d(d.G + d.W + d.F * !T, {
Promise: A
}),
r('fyDq') (A, 'Promise'),
r('elZq') ('Promise'),
o = r('g3g5').Promise,
d(d.S + d.F * !T, 'Promise', {
reject: function (t) {
var e = k(this);
return (0, e.reject) (t),
e.promise
}
}),
d(d.S + d.F * (a || !T), 'Promise', {
resolve: function (t) {
return w(a && this === o ? A : this, t)
}
}),
d(d.S + d.F * !(T && r('XMVh') (function (t) {
A.all(t).catch (D)
})), 'Promise', {
all: function (t) {
var e = this,
r = k(e),
i = r.resolve,
n = r.reject,
s = y(function () {
var r = [
],
s = 0,
o = 1;
f(t, !1, function (t) {
var a = s++,
l = !1;
r.push(void 0),
o++,
e.resolve(t).then(function (t) {
l || (l = !0, r[a] = t, --o || i(r))
}, n)
}),
--o || i(r)
});
return s.e && n(s.v),
r.promise
},
race: function (t) {
var e = this,
r = k(e),
i = r.reject,
n = y(function () {
f(t, !1, function (t) {
e.resolve(t).then(r.resolve, i)
})
});
return n.e && i(n.v),
r.promise
}
})
},
VTer: function (t, e, r) {
var i = r('g3g5'),
n = r('dyZX'),
s = n['__core-js_shared__'] || (n['__core-js_shared__'] = {
});
(t.exports = function (t, e) {
return s[t] || (s[t] = void 0 !== e ? e : {
})
}) ('versions', [
]).push({
version: i.version,
mode: r('LQAc') ? 'pure' : 'global',
copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
})
},
Vd3H: function (t, e, r) {
'use strict';
var i = r('XKFU'),
n = r('2OiF'),
s = r('S/j/'),
o = r('eeVq'),
a = [
].sort,
l = [
1,
2,
3
];
i(i.P + i.F * (o(function () {
l.sort(void 0)
}) || !o(function () {
l.sort(null)
}) || !r('LyE8') (a)), 'Array', {
sort: function (t) {
return void 0 === t ? a.call(s(this))  : a.call(s(this), n(t))
}
})
},
W0P9: function (t, e, r) {
'use strict';
r.r(e),
r.d(e, 'log', function () {
return o
}),
r.d(e, 'warn', function () {
return a
}),
r.d(e, 'error', function () {
return l
}),
r.d(e, 'debug', function () {
return c
});
var i = r('W9Tc'),
n = 'js_console_logs';
function s() {
return window.console && Object(i.partConfigEnabled) (n)
}
function o() {
s() && window.console.log && window.console.log(...arguments)
}
function a() {
s() && (window.console.warn ? window.console.warn(...arguments)  : o(...arguments))
}
function l() {
s() && (window.console.error ? window.console.error(...arguments)  : o(...arguments))
}
function c() {
s() && (window.console.debug ? window.console.debug(...arguments)  : o(...arguments))
}
},
W0fz: function (t, e, r) {
'use strict';
r.r(e),
r.d(e, 'isPodcast', function () {
return n
});
var i = r('uk5P');
function n(t) {
if (!t) return !1;
var e = isObject(t) ? t.extra : t[i.AUDIO_PLAYER_ENUMS.AUDIO_ITEM_INDEX_EXTRA];
return isObject(e) || (e = JSON.parse(e || '{}')),
!!e.podcast
}
},
W9Tc: function (t, e, r) {
'use strict';
function i(t) {
var e = window.vk.pe;
return !!(void 0 === e ? {
}
 : e) [t]
}
function n() {
var t = window.vk.ts;
if (t && !window.browser.opera_mobile) {
var e = new Date,
r = Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds()) / 1000 - t;
r -= 10800,
r = (r /= 60).toFixed(0),
(r *= 60) < - 55800 ? r += 86400 : r > 37800 && (r -= 86400);
var i = 0,
n = Math.abs(r);
return [ - 12,
- 11,
- 10,
- 9.5,
- 9,
- 8,
- 7,
- 6,
- 5,
- 4.5,
- 4,
- 3.5,
- 3,
- 2,
- 1,
0,
1,
2,
3,
3.5,
4,
4.5,
5,
5.5,
5.75,
6,
6.5,
7,
8,
8.75,
9,
9.5,
10,
10.5,
11,
12,
12.75,
13,
14].forEach(t=>{
var e = Math.round(3600 * (t - 3)),
s = Math.abs(r - e);
s < n && (n = s, i = e)
}),
intval(getCookie('remixdt')) !== i && setCookie('remixdt', i, 365),
i
}
return 0
}
r.r(e),
r.d(e, 'partConfigEnabled', function () {
return i
}),
r.d(e, 'calculateTimeOffsets', function () {
return n
})
},
XBHu: function (t, e, r) {
'use strict';
r.r(e);
r('a1Th'),
r('Btvt');
var i = r('lkNA'),
n = r('rEJs'),
s = r('W0fz');
var o = r('YvCB');
r.d(e, 'AudioAds', function () {
return a
});
class a{
constructor(t, e, r) {
this._isPlaying = !1,
this._adsCurrentProgress = 0,
this._adman = null,
this._admanLoaded = !1,
this._adEvents = [
],
this.player = t || {
},
this.playerVersion = e || null,
this._startAdsTO = null,
this._adsConfig = null,
this._duration = 0,
this.isMvk = Boolean(r),
this.adsStatUrl = this.isMvk ? 'audio' : 'al_audio.php'
}
isPlaying() {
return this._isPlaying
}
setAdsConfig(t) {
this._adsConfig = t
}
getCurrentProgress() {
return this._adsCurrentProgress
}
getDuration() {
return this._duration
}
loadAdman(t) {
var e = e=>t && t(e);
if (this._admanLoaded) e();
 else {
var r = 0;
Object(i.loadScript) (a.ADMAN_SRC, {
onLoad: () =>{
this._admanLoaded = !0,
e()
},
onError: () =>{
window.abp ? (this._admanLoaded = !0, e())  : (3 === (r += 1) && (this._admanLoaded = !0), e('script_load_fail'))
}
})
}
}
_fetchAd(t, e, r, i, s) {
this.loadAdman(o=>{
if (!window.AdmanHTML) return this._sendEvent('no_adman', e, a.AD_TYPE, o),
i && i();
this._adman = new AdmanHTML;
var c = {
_SITEID: 276,
ver: 251116,
vk_id: vk.id,
duration: t.duration,
content_id: l(t.ownerId, t.id),
vk_catid: a.CAT_IDS[e] || a.CAT_IDS.other
};
extend(c, t.ads || {
}),
nav.objLoc && nav.objLoc.preview && (c.preview = intval(nav.objLoc.preview)),
cur.adsPreview && (c.preview = 1, c.vk_id = 398724832),
this._adman.setDebug(!!c.preview),
this._adman.onError(() =>i && i()),
this._adman.onReady(() =>{
if (this._adman) {
var t = this._adman.getBannersForSection(a.AD_TYPE);
t && t.length ? 'statistics' === t[0].type ? (this._play(!0, e), i && i())  : (this._sendEvent('received', e), r ? (this._sendEvent('rejected', e, a.AD_TYPE, s), this.deinit(), i && i())  : (this._sendEvent('ready', e), this.player.notify(n.events.AD_READY), this._play(!1, e, i)))  : (r || this._sendEvent('not_received', e), i && i())
}
}),
this._adman.init({
slot: 3514,
wrapper: this.isMvk ? ce('div')  : se('<div></div>'),
params: c,
browser: {
adBlock: !!window.abp,
mobile: !1
}
}),
this._sendEvent('requested', e)
})
}
_sendEvent(t, e, r, i) {
var n = r ? '/' + r : '',
s = i ? '/' + i : '';
this._adEvents.push(t + '/' + e + n + s),
clearTimeout(this._adEventDelay),
this._adEventDelay = setTimeout(() =>{
ajax.post(this.adsStatUrl, {
act: 'ad_event',
events: this._adEvents.join(','),
v: this.playerVersion,
abp: intval(window.abp)
}, {
onFail: () =>!0
}),
this._adEvents = [
]
}, 500)
}
_play(t, e, r) {
this._adman.onCompleted(() =>{
this.deinit(!0),
t ? this._sendEvent('statistics', e)  : (this.player.notify(n.events.PROGRESS, 0), this.player.notify(n.events.AD_COMPLETED), this._isPlaying = !1, this._adsCurrentProgress = 0, this._sendEvent('completed', e), window.setDocumentTitle && window.setDocumentTitle(this._adsPrevTitle), r && r())
}),
this._adman.onStarted(() =>{
t || (this.player.setIsPlaying(!0), this.player.notify(n.events.PROGRESS, 0), this.player.notify(n.events.AD_STARTED), this.updateVolume(), this._sendEvent('started', e))
});
var i = [
0.25,
0.5,
0.75
];
if (this._adman.onTimeRemained(t=>{
this._duration = isNaN(t.duration) ? 0 : t.duration,
this._adsCurrentProgress = (isNaN(t.percent) ? 0 : t.percent) / 100,
this.player.notify(n.events.PROGRESS, this._adsCurrentProgress, this._duration),
each(i, (t, r) =>{
if (this._adsCurrentProgress >= r) return i.shift(),
this._sendEvent('progress_' + intval(100 * r), e),
!1
})
}), this._adman.start(a.AD_TYPE), t) return r && r();
this._isPlaying = !0,
this.player.notify(n.events.PLAY),
this.player.notify(n.events.PROGRESS, 0),
this._adsPrevTitle = document.title,
this.isMvk || setDocumentTitle(getLang('global_audio_ad'))
}
updateVolume() {
this._adman && this._adman.setVolume(0.7 * this.player.getVolume())
}
deinit(t) {
this._adman = null,
!t && this.player.notify(n.events.AD_DEINITED)
}
pause() {
this._adman && (this.player.setIsPlaying(!1), this._adman.pause(), this.player.notify(n.events.PAUSE))
}
resume() {
this._adman && (this.player.setIsPlaying(!0), this._adman.resume(), this.player.notify(n.events.PLAY))
}
checkPlay(t, e) {
var r = this.player._getPlayingContextSection(),
i = this._isAllowed(t),
n = i.type,
s = i.reason,
o = () =>e && e();
switch (n) {
case a.ALLOW_ALLOWED:
this._fetchAd(t, r, !1, o);
break;
case a.ALLOW_DISABLED:
o();
break;
case a.ALLOW_REJECT:
this._fetchAd(t, r, !0, !1, s),
o()
}
}
_isAllowed(t) {
if (vk.widget) return {
type: a.ALLOW_DISABLED
};
if (Object(s.isPodcast) (t)) return {
type: a.ALLOW_DISABLED
};
if (window.browser && window.browser.safari) return {
type: a.ALLOW_DISABLED
};
if (cur.adsPreview) return {
type: a.ALLOW_ALLOWED
};
var e = this._adsConfig || vk.audioAdsConfig || window.audioAdsConfig;
if (e) {
if (!e.enabled) return {
type: a.ALLOW_DISABLED
};
if (e.day_limit_reached) return {
type: a.ALLOW_REJECT,
reason: a.REJECT_REASON_LIMIT
};
var r = this.player._getPlayingContextSection();
return e.sections.indexOf(r) > - 1 ? {
type: a.ALLOW_ALLOWED
}
 : {
type: a.ALLOW_REJECT,
reason: a.REJECT_REASON_SECTION
}
}
return {
type: a.ALLOW_REJECT,
reason: a.REJECT_REASON_UNKNOWN
}
}
startPlay(t, e, r) {
this._startAdsTO && function (t) {
if (!t) return !1;
isFinite(t) ? clearTimeout(t)  : t.terminate()
}(this._startAdsTO),
e ? this._startAdsTO = Object(o.setWorkerTimeout) (() =>this.checkPlay(t, r), 0)  : this.checkPlay(t, r)
}
}
function l(t, e) {
for (var r = t.toString(16), i = e.toString(16); i.length < 8; ) i = '0' + i;
return r + i
}
a.ADMAN_SRC = '//ad.mail.ru/static/admanhtml/rbadman-html5.min.js',
a.CAT_IDS = {
my: 101,
my_playlists: 101,
audio_feed: 109,
recent: 113,
user_wall: 104,
group_wall: 104,
user_list: 102,
group_list: 103,
user_playlists: 102,
group_playlists: 103,
feed: 105,
search: 110,
global_search: 110,
replies: 104,
im: 106,
group_status: 104,
user_status: 104,
recs: 107,
recs_audio: 107,
recs_album: 107,
other: 114
},
a.AD_TYPE = 'preroll',
a.ALLOW_DISABLED = 1,
a.ALLOW_ALLOWED = 2,
a.ALLOW_REJECT = 3,
a.REJECT_REASON_UNKNOWN = 'unknown',
a.REJECT_REASON_LIMIT = 'track_limit_exceeded',
a.REJECT_REASON_SECTION = 'section_not_allowed'
},
XKFU: function (t, e, r) {
var i = r('dyZX'),
n = r('g3g5'),
s = r('Mukb'),
o = r('KroJ'),
a = r('m0Pp'),
l = function (t, e, r) {
var c,
h,
d,
u,
p = t & l.F,
_ = t & l.G,
f = t & l.S,
m = t & l.P,
g = t & l.B,
v = _ ? i : f ? i[e] || (i[e] = {
})  : (i[e] || {
}).prototype,
b = _ ? n : n[e] || (n[e] = {
}),
y = b.prototype || (b.prototype = {
});
for (c in _ && (r = e), r) d = ((h = !p && v && void 0 !== v[c]) ? v : r) [c],
u = g && h ? a(d, i)  : m && 'function' == typeof d ? a(Function.call, d)  : d,
v && o(v, c, d, t & l.U),
b[c] != d && s(b, c, u),
m && y[c] != d && (y[c] = d)
};
i.core = n,
l.F = 1,
l.G = 2,
l.S = 4,
l.P = 8,
l.B = 16,
l.W = 32,
l.U = 64,
l.R = 128,
t.exports = l
},
XLUH: function (t, e, r) {
'use strict';
r.r(e),
r.d(e, 'UNKNOWN_STATE', function () {
return i
}),
r.d(e, 'BACKGROUND_STATE', function () {
return n
}),
r.d(e, 'FULL_SCREEN_STATE', function () {
return s
}),
r.d(e, 'APP_STATE', function () {
return o
}),
r.d(e, 'AudioStatsPlayerAdapter', function () {
return a
});
var i = 0,
n = 1,
s = 2,
o = 3;
class a{
constructor(t) {
this.player = t,
this.listeners = [
]
}
listen(t, e, r) {
var i = e.bind(r || this);
this.listeners.push({
event: t,
fn: e,
listener: i
}),
this.playerListen(t, i)
}
unListen(t, e) {
var r = - 1;
if (each(this.listeners, (i, n) =>{
if (n.event === t && n.listener === e) return r = i,
!1
}), !(r < 0)) {
var i = this.listeners[r];
this.playerUnListen(t, i.listener),
this.listeners.splice(r, 1)
}
}
unListenAll() {
for (var t; t = this.listeners[0]; ) this.unListen(t.event, t.listener)
}
listenPlay(t, e) {
this.listen('play', t, e)
}
listenPause(t, e) {
this.listen('pause', t, e)
}
listenProgress(t, e) {
this.listen('progress', t, e)
}
listenVolume(t, e) {
this.listen('volume', t, e)
}
listenSeek(t, e) {
this.listen('seek', t, e)
}
listenPlaylistChanged(t, e) {
this.listen('pl_changed', t, e)
}
listenEnded(t, e) {
this.listen('ended', t, e)
}
listenPlayNext(t, e) {
this.listen('play_next', t, e)
}
listenAdCompleted(t, e) {
this.listen('ad_completed', t, e)
}
playerListen(t, e) {
this.player.on(t, e)
}
playerUnListen(t, e) {
this.player.off(t, e)
}
useNewStats() {
return !1
}
getPausedBy() {
return null
}
getState() {
return document.hidden ? n : o
}
getProgress() {
return this.player.playerGetProgress()
}
getProgressInSeconds() {
return this.player.getProgressInSeconds()
}
getVolume() {
return this.player.getVolume()
}
getAudioId() {
return this.player.getAudioId()
}
getAudioTrackCode() {
return this.player.getAudioTrackCode()
}
getPrevAudioId() {
return this.player.getPrevAudioId()
}
getPrevPlaylistId() {
return this.player.getPrevPlaylistId()
}
getPlaylistId() {
return this.player.getPlaylistId()
}
getContext() {
return this.player.getContext()
}
getSequence() {
return this.player.getSequence()
}
getType() {
return this.player.getType()
}
getListenedTime() {
return this.player.getListenedTime()
}
getSearchParams() {
return this.player.getSearchParams()
}
isPlaying() {
return this.player.isPlaying()
}
isAutoPlayed() {
return this.player.isAutoPlayed()
}
isRepeatCurrentAudio() {
return this.player.isRepeatCurrentAudio()
}
isRepeatAll() {
return this.player.isRepeatAll()
}
isShuffledPlaylist() {
return this.player.isShuffledPlaylist()
}
isRealPlaylist() {
return this.player.isRealPlaylist()
}
isRealPrevPlaylist() {
return this.player.isRealPrevPlaylist()
}
isPodcast() {
return this.player.isPodcast()
}
isAdPlaying() {
return this.player.ads.isPlaying()
}
isLastTrack() {
return this.player.isLastTrack()
}
hasPrevAudio() {
return this.player.hasPrevAudio()
}
hasPrevPlaylist() {
return this.player.hasPrevPlaylist()
}
hasPlaylist() {
return this.player.hasPlaylist()
}
hasSearchParams() {
return this.player.hasSearchParams()
}
isDebug() {
return !1
}
sendListenedData(t) {
return this.player.sendListenedData(t)
}
}
},
XMVh: function (t, e, r) {
var i = r('K0xU') ('iterator'),
n = !1;
try {
var s = [
7
][i]();
s.return = function () {
n = !0
},
Array.from(s, function () {
throw 2
})
} catch (t) {
}
t.exports = function (t, e) {
if (!e && !n) return !1;
var r = !1;
try {
var s = [
7
],
o = s[i]();
o.next = function () {
return {
done: r = !0
}
},
s[i] = function () {
return o
},
t(s)
} catch (t) {
}
return r
}
},
Xbzi: function (t, e, r) {
var i = r('0/R4'),
n = r('i5dc').set;
t.exports = function (t, e, r) {
var s,
o = e.constructor;
return o !== r && 'function' == typeof o && (s = o.prototype) !== r.prototype && i(s) && n && n(t, s),
t
}
},
Xrg9: function (t, e, r) {
'use strict';
function i() {
return void 0 !== window.localStorage && null !== window.localStorage && void 0 !== window.JSON
}
function n(t) {
try {
localStorage.removeItem(t)
} catch (t) {
}
}
r.r(e),
e.default = {
checkVersion: i,
remove: n,
get: function (t) {
if (!i()) return !1;
try {
return JSON.parse(localStorage.getItem(t))
} catch (t) {
return !1
}
},
set: function (t, e) {
n(t);
try {
return !!i() && localStorage.setItem(t, JSON.stringify(e))
} catch (t) {
return !1
}
}
}
},
XuKo: function (t, e, r) {
'use strict';
r.r(e),
r.d(e, 'showStory', function () {
return h
}),
r.d(e, 'showNarrative', function () {
return d
}),
r.d(e, 'storiesPreloadStatic', function () {
return p
}),
r.d(e, 'sendMask', function () {
return f
});
r('rE2o'),
r('ioFf'),
r('rGqo'),
r('KKXr');
var i = r('EasH'),
n = r('kcIO'),
s = r('4+be'),
o = r('El3O'),
a = r('zxIV');
function l(t, e) {
return function (t) {
if (Array.isArray(t)) return t
}(t) || function (t, e) {
var r = [
],
i = !0,
n = !1,
s = void 0;
try {
for (var o, a = t[Symbol.iterator](); !(i = (o = a.next()).done) && (r.push(o.value), !e || r.length !== e); i = !0);
} catch (t) {
n = !0,
s = t
} finally {
try {
i || null == a.return || a.return ()
} finally {
if (n) throw s
}
}
return r
}(t, e) || function () {
throw new TypeError('Invalid attempt to destructure non-iterable instance')
}()
}
var c = !1;
function h(t) {
var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
};
if (cur.storiesNotSupported) return Object(i.showFastBox) (Object(s.getLang) ('global_error'), Object(s.getLang) ('stories_bad_browser'));
clearTimeout(c),
c = setTimeout(function () {
bodyNode.appendChild(Object(a.ce) ('div', {
id: 'stories_loader',
innerHTML: Object(o.getProgressHtml) ('stories_loader_pr', 'pr_baw pr_medium') + '<div class="back"></div>'
}))
}, 1000);
var r = [
'stories.js',
'stories.css',
jsc('web/emoji.js'),
'videoview.js',
'videoplayer.js',
'videoplayer.css',
'hls.min.js'
];
stManager.add(r, function () {
var r = window.Stories;
clearTimeout(c),
Object(a.re) ('stories_loader'),
r.show(t, e)
})
}
function d(t, e) {
var r = l(t.split('_'), 2),
i = r[0],
n = r[1];
i && n && h(`${i
}
&narrative${n
}
/narrative${t
}
`,
e)
}
var u = !1;
function p() {
u || cur.storiesNotSupported || (u = !0, stManager.add(['stories.js',
'stories.css']))
}
var _ = !1;
function f(t, e) {
_ || (_ = !0, ajax.post('al_stories.php', {
act: 'send_mask',
mask_id: t,
hash: e
}, {
loader: !0,
onDone: (t, e, r, o) =>{
'cant_send' === t ? Object(i.showFastBox) ({
title: e,
width: 460
}, r, o)  : Object(n.showDoneBox) (Object(s.getLang) ('stories_mask_sent')),
_ = !1
},
onFail: () =>(_ = !1, Object(i.showFastBox) ({
title: Object(s.getLang) ('global_box_error_title')
}, Object(s.getLang) ('global_unknown_error')), !0)
}))
}
},
Xxuz: function (t, e, r) {
'use strict';
var i = r('I8a+'),
n = RegExp.prototype.exec;
t.exports = function (t, e) {
var r = t.exec;
if ('function' == typeof r) {
var s = r.call(t, e);
if ('object' != typeof s) throw new TypeError('RegExp exec method returned something other than an Object or null');
return s
}
if ('RegExp' !== i(t)) throw new TypeError('RegExp#exec called on incompatible receiver');
return n.call(t, e)
}
},
XzvV: function (t, e, r) {
'use strict';
r.r(e),
r.d(e, 'statlogsValueEvent', function () {
return l
}),
r.d(e, 'saveSearchAttemptStats', function () {
return h
}),
r.d(e, 'removeSearchPositionTracker', function () {
return f
}),
r.d(e, 'logLeftMenuClicks', function () {
return m
});
r('rE2o'),
r('ioFf'),
r('rGqo'),
r('KKXr'),
r('pIFo'),
r('HEwt');
var i = r('J8bf'),
n = r('t7n3'),
s = r('Xrg9'),
o = r('W9Tc');
function a(t, e) {
return function (t) {
if (Array.isArray(t)) return t
}(t) || function (t, e) {
var r = [
],
i = !0,
n = !1,
s = void 0;
try {
for (var o, a = t[Symbol.iterator](); !(i = (o = a.next()).done) && (r.push(o.value), !e || r.length !== e); i = !0);
} catch (t) {
n = !0,
s = t
} finally {
try {
i || null == a.return || a.return ()
} finally {
if (n) throw s
}
}
return r
}(t, e) || function () {
throw new TypeError('Invalid attempt to destructure non-iterable instance')
}()
}
function l(t, e) {
if (void 0 !== t && void 0 !== e) {
var r,
o = Array.from(arguments).slice(2);
!function t(e, r, i) {
var n = 'lockkk_' + e;
if (!0 === s.default.get(n)) s.default.checkVersion() ? i || setTimeout(t.pbind(e, r, !0), 100)  : r();
 else {
s.default.set(n, !0);
try {
r()
} catch (t) {
}
s.default.set(n, !1)
}
}('stats_cookie_lock', function () {
try {
r = (r = JSON.parse(Object(i.getCookie) ('remixsts'))).data
} catch (t) {
r = [
]
}
for (r.push([Math.round(Date.now() / 1000),
t,
e].concat(o)); r.length > 100; ) r.shift();
var s = Math.round(Object(n.rand) (0, 1000000000));
Object(i.setCookie) ('remixsts', JSON.stringify({
data: r,
uniqueId: s
}), 0.01)
})
}
}
var c = {
}; function h(t) {
var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
r = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
i = arguments.length > 3 ? arguments[3] : void 0,
s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
if (Object(o.partConfigEnabled) ('search_attempt_stats')) {
r = r ? 1 : 0,
e || (e = + new Date),
s || (s = Object(n.rand) ( - 9223372035, 9223372035).toFixed(0).concat(Object(n.rand) (0, 999999999).toFixed(0)));
var h,
m = [
100,
200,
500,
1000,
2000,
5000,
10000,
20000,
1 / 0
];
if (void 0 === c[t]) h = m.pop();
 else {
var g = e - c[t];
h = m.find(t=>t >= g)
}
l('search_attempts', t, h + '', r, i, - (new Date).getTimezoneOffset(), s),
c[t] = e,
function (t, e, r) {
p[t] && f(t);
var i = function (t, e, r, i) {
if (!Object(o.partConfigEnabled) ('search_position_stats') || !c[t] || !p[t]) return;
var n = i.target;
if (!n || !n.classList) return;
var s = 0,
h = 'search',
_ = 0,
m = 1,
g = 0,
v = 0;
switch (t) {
case 'wall_users':
case 'wall_groups':
case 'wall':
case 'search_statuses':
var b = a(d(n, t=>{
var e = t.getAttribute('id');
return e && (e = e.replace('post', '')),
e && e.indexOf('_') ? e.split('_')  : [
0,
0
]
}, '_post', '.wall_posts_search ._post'), 3);
s = b[0],
g = b[1],
v = b[2];
break;
case 'news':
var y = a(d(n, () =>[0,
0], 'feed_row'), 3);
s = y[0],
g = y[1],
v = y[2];
break;
case 'market':
if (!isVisible('market_search_wrap')) return void f('market');
var E = a(d(n, t=>{
var e = t.getAttribute('data-id');
return e || (e = 0),
[
0,
e
]
}, '_market_row', '#marketplace_content ._market_row'), 3);
s = E[0],
g = E[1],
v = E[2];
break;
case 'search_audio':
var w = a(d(n, t=>{
var e = t.getAttribute('data-full-id');
return e && e.indexOf('_') ? e.split('_')  : [
0,
0
]
}, '_audio_row'), 3);
s = w[0],
g = w[1],
v = w[2];
break;
case 'bookmarks_groups':
case 'bookmarks_users':
var O = a(d(n, t=>{
var e = t.getAttribute('data-id');
return e || (e = 0),
[
0,
e
]
}, '_bookmark_page_item'), 3);
s = O[0],
g = O[1],
v = O[2];
break;
case 'apps_list':
case 'apps':
var P = a(d(n, t=>{
var e = t.getAttribute('id');
return [0,
e = e ? e.replace('app', '')  : 0]
}, '_apps_cat_row'), 3);
s = P[0],
g = P[1],
v = P[2];
break;
case 'apps_manage':
var C = a(d(n, t=>{
var e = t.getAttribute('id');
return [0,
e = e ? e.replace('app', '')  : 0]
}, '_apps_settings_row'), 3);
s = C[0],
g = C[1],
v = C[2];
break;
case 'search_video':
var x = a(d(n, t=>{
var e = t.getAttribute('data-id');
return e && e.indexOf('_') ? e.split('_')  : [
0,
0
]
}, '_video_item', '#results ._video_item'), 3);
s = x[0],
g = x[1],
v = x[2];
break;
case 'friends_find':
case 'search_people':
case 'search_communities':
var A = a(d(n, () =>[0,
0], 'search_row', '#results .search_row'), 3);
s = A[0],
g = A[1],
v = A[2];
break;
case 'top_search':
var M = a(d(n, () =>[0,
0], 'ts_contact', '#ts_cont_wrap .ts_contact'), 3);
s = M[0],
g = M[1],
v = M[2];
break;
case 'photos':
var D = a(d(n, () =>[0,
0], 'page_post_thumb_wrap', '._feed_rows .page_post_thumb_wrap'), 3);
s = D[0],
g = D[1],
v = D[2];
break;
case 'groups':
var k = a(d(n, t=>{
var e = t.getAttribute('id');
return [0,
'-' + (e = e ? e.replace('gl_groups', '').replace('gl_admin', '')  : 0)]
}, '_gl_row', '#groups_list_tab_groups ._gl_row, #groups_list_search_wrap ._gl_row', {
own: '#groups_list_tab_groups ._gl_row',
search: '#groups_list_search_wrap ._gl_row'
}), 6);
s = k[0],
g = k[1],
v = k[2],
h = k[3],
_ = k[4],
m = k[5];
break;
case 'friends':
var T = a(d(n, t=>{
var e = t.getAttribute('id');
return [0,
e = e ? e.replace('friends_user_row', '')  : 0]
}, 'friends_user_row', '#list_content .friends_user_row, #friends_search_cont .friends_user_row', {
own: '#list_content .friends_user_row',
search: '#friends_search_cont .friends_user_row'
}), 6);
s = T[0],
g = T[1],
v = T[2],
h = T[3],
_ = T[4],
m = T[5];
break;
case 'docs':
var j = a(d(n, t=>{
var e = t.getAttribute('id');
return e && (e = e.replace('docs_file_', '')),
e && e.indexOf('_') ? e.split('_')  : [
0,
0
]
}, '_docs_item', '#docs_list ._docs_item, #docs_search_list ._docs_item', {
own: '#docs_list ._docs_item',
search: '#docs_search_list ._docs_item'
}), 6);
s = j[0],
g = j[1],
v = j[2],
h = j[3],
_ = j[4],
m = j[5];
break;
case 'messages':
var S = a(d(n, t=>{
var e = t.getAttribute('data-peer');
return e || (e = 0),
[
0,
e
]
}, '_im_dialog', '._im_page_dcontent ._im_dialog', {
own_conversations: '._im_page_dcontent ._im_dialog:not(._im_search)',
own_messages: '._im_page_dcontent ._im_dialog._im_search'
}), 6);
s = S[0],
g = S[1],
v = S[2],
h = S[3],
_ = S[4],
m = S[5];
break;
case 'audio':
var I = a(d(n, (t, e) =>{
var r = '';
switch (e) {
case 1:
case 4:
r = t.getAttribute('data-full-id');
break;
case 0:
case 3:
r = t.getAttribute('data-raw-id');
break;
case 2:
r = t.getAttribute('data-title')
}
return r && r.indexOf('_') ? r.split('_')  : r ? [
r,
0
] : [
0,
0
]
},
[
'_audio_pl_item',
'audio_block_small_item',
'_audio_row',
'_video_item'
],
'\n        ._audio_section__search ._audio_pl_item,\n        ._audio_section__search ._audio_row,\n        ._audio_search_blocks ._audio_row,\n        ._audio_search_blocks ._video_item,\n        ._audio_search_blocks ._audio_pl_item,\n        ._audio_search_blocks .audio_block_small_item\n      ',
{
own_playlists: '._audio_page_block__playlists_items[data-audio-context="search_owned_playlist"] ._audio_pl_item',
own_audios: '._audio_pl[data-audio-context="search_owned_audios"] ._audio_row',
search_artists: '._audio_search_blocks .audio_block_small_item',
search_playlists: '._audio_page_block__playlists_items[data-audio-context="search_global_albums"] ._audio_pl_item',
search_audios: '._audio_pl[data-audio-context="search_global_audios"] ._audio_row'
}), 6); s = I[0], g = I[1], v = I[2], h = I[3], _ = I[4], m = I[5]; break; case 'video':
var L = a(d(n, (t, e) =>{
var r = '';
switch (e) {
case 1:
case 3:
r = t.getAttribute('data-id')
}
return r && r.indexOf('_') ? r.split('_')  : [
0,
0
]
},
[
'video_playlist_item',
'_video_item'
],
'\n        #video_layout_search .video_playlist_item,\n        #video_layout_search ._video_item\n      ',
{
own_albums: '#video_subtab_pane_search_albums .video_playlist_item',
own_videos: '#video_subtab_pane_search_videos ._video_item',
search_promo_albums: '#video_subtab_pane_search_promo_albums .video_playlist_item',
search_videos: '#video_subtab_pane_search_global_videos ._video_item'
}), 6); s = L[0], g = L[1], v = L[2], h = L[3], _ = L[4], m = L[5]; break; case 'search_auto':
var B = a(d(n, (t, e) =>{
var r = '';
switch (e) {
case 0:
r = t.getAttribute('data-full-id');
break;
case 1:
return (r = t.getAttribute('data-id')) || (r = 0),
[
0,
r
];
case 2:
return (r = t.getAttribute('data-id')) || (r = 0),
[
0,
'-' + r
];
case 3:
r = t.getAttribute('data-id');
break;
case 4:
(r = t.getAttribute('id')) && (r = r.replace('post', ''))
}
return r && r.indexOf('_') ? r.split('_')  : [
0,
0
]
},
[
'_audio_row',
'search_row',
'_video_item',
'_post'
],
'\n        ._search_results ._audio_row,\n        ._search_results .search_row,\n        ._search_results ._video_item,\n        #results ._post\n      ',
{
search_audio: '._search_results ._audio_row',
search_people: '._search_results .people_row',
search_groups: '._search_results .groups_row',
search_video: '._search_results ._video_item',
search_posts: '#results ._post'
}), 6); s = B[0], g = B[1], v = B[2], h = B[3], _ = B[4], m = B[5]
}
if (s) {
var R;
R = void 0 === u[t] ? 1 : u[t] + 1;
var F = - (new Date).getTimezoneOffset();
l('search_position', t, s, R, h, _, m, g, v, e, F, r),
u[t] = R
}
}.pbind(t, e, r); addEvent(window, 'click', i, !1, !1, !0), p[t] = i, u[t] = 0, cur.destroy || (cur.destroy = [
]); cur.destroy.some(t=>t === _) || cur.destroy.push(_)
}(t, i, s)
}
}
function d(t, e, r) {
var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : '',
n = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : void 0,
s = 0,
o = '',
l = 0,
c = 1,
h = 0,
d = 0;
return t && (isArray(r) || (r = [
r
]), r.some(r=>{
var u,
p = t.classList.contains(r) ? t : gpeByClass(r, t),
_ = 0;
if (p && (u = i ? bodyNode.querySelectorAll(i)  : p.parentNode.children)) {
if ((s = [
...u
].indexOf(p) + 1) && n) for (var f in n) if (n.hasOwnProperty(f)) {
var m = bodyNode.querySelectorAll(n[f]);
if (m) {
var g = [
...m
].indexOf(p) + 1;
if (g) {
l = g,
o = f;
break
}
}
c++,
_++
}
var v = a(e(p, _), 2);
return h = v[0],
d = v[1],
!0
}
})),
[
s,
h,
d,
o,
l,
c
]
}
var u = {
},
p = {
};
function _() {
for (var t in p) p.hasOwnProperty(t) && f(t)
}
function f(t) {
if (p[t]) {
var e = p[t];
removeEvent(window, 'click', e)
}
}
function m(t, e) {
var r = e || t.target.getAttribute('data-stats-key');
r && r.length > 0 && window.statlogsValueEvent('submenu_clicks', 0, r)
}
},
YQfe: function (t, e, r) {
'use strict';
r.r(e),
r.d(e, 'SILENCE', function () {
return i
});
var i = 'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA'
},
YTvA: function (t, e, r) {
var i = r('VTer') ('keys'),
n = r('ylqs');
t.exports = function (t) {
return i[t] || (i[t] = n(t))
}
},
Ymqv: function (t, e, r) {
var i = r('LZWt');
t.exports = Object('z').propertyIsEnumerable(0) ? Object : function (t) {
return 'String' == i(t) ? t.split('')  : Object(t)
}
},
YvCB: function (t, e, r) {
'use strict';
function i(t, e) {
if (!window.Worker || !window.Blob) return setTimeout(t, e);
var r = new Blob([`
      var timeout;
      onmessage = function(e) {
        clearTimeout(timeout);
        if (e.data == 'start') {
          timeout = setTimeout(function() { postMessage({}); }, ${e
}
);
        }
      }
    `]);
try {
var i = new Worker(window.URL.createObjectURL(r));
return i.onmessage = function () {
i.terminate(),
t()
},
i.postMessage('start'),
i
} catch (r) {
return setTimeout(t, e)
}
}
r.r(e),
r.d(e, 'setWorkerTimeout', function () {
return i
})
},
Z6vF: function (t, e, r) {
var i = r('ylqs') ('meta'),
n = r('0/R4'),
s = r('aagx'),
o = r('hswa').f,
a = 0,
l = Object.isExtensible || function () {
return !0
},
c = !r('eeVq') (function () {
return l(Object.preventExtensions({
}))
}),
h = function (t) {
o(t, i, {
value: {
i: 'O' + ++a,
w: {
}
}
})
},
d = t.exports = {
KEY: i,
NEED: !1,
fastKey: function (t, e) {
if (!n(t)) return 'symbol' == typeof t ? t : ('string' == typeof t ? 'S' : 'P') + t;
if (!s(t, i)) {
if (!l(t)) return 'F';
if (!e) return 'E';
h(t)
}
return t[i].i
},
getWeak: function (t, e) {
if (!s(t, i)) {
if (!l(t)) return !0;
if (!e) return !1;
h(t)
}
return t[i].w
},
onFreeze: function (t) {
return c && d.NEED && l(t) && !s(t, i) && h(t),
t
}
}
},
a1Th: function (t, e, r) {
'use strict';
r('OEbY');
var i = r('y3w9'),
n = r('C/va'),
s = r('nh4g'),
o = /./.toString,
a = function (t) {
r('KroJ') (RegExp.prototype, 'toString', t, !0)
};
r('eeVq') (function () {
return '/a/b' != o.call({
source: 'a',
flags: 'b'
})
}) ? a(function () {
var t = i(this);
return '/'.concat(t.source, '/', 'flags' in t ? t.flags : !s && t instanceof RegExp ? n.call(t)  : void 0)
})  : 'toString' != o.name && a(function () {
return o.call(this)
})
},
aCFj: function (t, e, r) {
var i = r('Ymqv'),
n = r('vhPU');
t.exports = function (t) {
return i(n(t))
}
},
aagx: function (t, e) {
var r = {
}.hasOwnProperty;
t.exports = function (t, e) {
return r.call(t, e)
}
},
aong: function (__webpack_module__, __webpack_exports__, __webpack_require__) {
'use strict';
__webpack_require__.r(__webpack_exports__),
__webpack_require__.d(__webpack_exports__, 'throttleAccumulate', function () {
return throttleAccumulate
}),
__webpack_require__.d(__webpack_exports__, 'executionStackPop', function () {
return executionStackPop
}),
__webpack_require__.d(__webpack_exports__, 'lplog', function () {
return lplog
}),
__webpack_require__.d(__webpack_exports__, 'toArray', function () {
return toArray
}),
__webpack_require__.d(__webpack_exports__, 'arrayUnique', function () {
return arrayUnique
}),
__webpack_require__.d(__webpack_exports__, 'unpackStore', function () {
return unpackStore
}),
__webpack_require__.d(__webpack_exports__, 'throttle', function () {
return throttle
}),
__webpack_require__.d(__webpack_exports__, 'shuffle', function () {
return shuffle
}),
__webpack_require__.d(__webpack_exports__, 'parallel', function () {
return parallel
}),
__webpack_require__.d(__webpack_exports__, 'hashCode', function () {
return hashCode
}),
__webpack_require__.d(__webpack_exports__, 'parseJSON', function () {
return parseJSON
}),
__webpack_require__.d(__webpack_exports__, 'checkTextLength', function () {
return checkTextLength
}),
__webpack_require__.d(__webpack_exports__, 'getSelectionText', function () {
return getSelectionText
}),
__webpack_require__.d(__webpack_exports__, 'goAway', function () {
return goAway
}),
__webpack_require__.d(__webpack_exports__, 'isFullScreen', function () {
return isFullScreen
}),
__webpack_require__.d(__webpack_exports__, 'updateMoney', function () {
return updateMoney
}),
__webpack_require__.d(__webpack_exports__, 'toggleOnline', function () {
return toggleOnline
}),
__webpack_require__.d(__webpack_exports__, 'onlinePlatformClass', function () {
return onlinePlatformClass
}),
__webpack_require__.d(__webpack_exports__, 'handleScroll', function () {
return handleScroll
}),
__webpack_require__.d(__webpack_exports__, 'showErrorBox', function () {
return showErrorBox
}),
__webpack_require__.d(__webpack_exports__, 'getDropdownValue', function () {
return getDropdownValue
});
var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('KKXr'),
core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('SRfc'),
core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('a1Th'),
core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('rGqo'),
core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('Btvt'),
_utils_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('t7n3'),
_ui_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('ryw6'),
_debug_tools__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__('98sY'),
_shared_lib_cookies__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__('J8bf'),
_shared_lib_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__('jE6c'),
_message_box__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__('EasH'),
_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__('zxIV'),
_lang__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__('4+be'),
_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__('gdug'),
_accessibility__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__('QGEU'),
_dom_events__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__('Egk5'),
_scroll__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__('lXE5');
function throttleAccumulate(t, e) {
var r = [
],
i = 0;
return function (n) {
r.push(n),
i || (i = setTimeout(() =>{
i = !1,
t(r),
r = [
]
}, e))
}
}
function executionStackPop(t) {
return t.length > 0 && t.pop().func(),
t
}
function lplog(t, e) {
var r,
i;
if (window.__debugMode) {
switch (e) {
case 'error':
r = 'color: red',
i = 'background: red; color: white';
break;
case 'success':
r = 'color: green',
i = 'background: green; color: white';
break;
default:
r = 'color: blue;',
i = 'background: #000; color: #fff;'
}
try {
var n = new Date;
console.debug(`%cLP:[${n.getHours()
}
:${n.getMinutes()
}
:${n.getSeconds()
}
:${n.getMilliseconds()
}
]%c ${t
}
`,
i,
r)
} catch (t) {
}
}
}
function toArray(t) {
var e = [
];
if (void 0 === t.length) return Object.keys(t).map(e=>t[e]);
for (var r = 0; r < t.length; r++) e.push(t[r]);
return e
}
function arrayUnique(t) {
for (var e = {
}, r = [
], i = 0; i < t.length; i++) e[t[i]] || (r.push(t[i]), e[r[i]] = 1);
return r
}
function unpackStore(t) {
return t.get ? t.get()  : t
}
function throttle(t, e) {
var r;
return function () {
r || (t.apply(this, arguments), r = setTimeout(function () {
r = !1
}, e))
}
}
function shuffle(t) {
for (var e = t.length; e > 0; ) {
var r = Math.floor(Math.random() * e),
i = t[--e];
t[e] = t[r],
t[r] = i
}
return t
}
function parallel() {
var t = [
].slice.call(arguments),
e = t.pop(),
r = new CallHub(e, t.length);
Object(_utils_common__WEBPACK_IMPORTED_MODULE_5__.each) (t, (t, e) =>e(() =>r.done()))
}
function hashCode(t) {
var e = 0;
if (0 === t.length) return e;
for (var r = 0, i = t.length; r < i; r++) {
e = (e << 5) - e + t.charCodeAt(r),
e |= 0
}
return e
}
function parseJSON(obj) {
if (window.JSON && JSON.parse) try {
return JSON.parse(obj)
} catch (e) {
Object(_ui_util__WEBPACK_IMPORTED_MODULE_6__.topError) ('<b>parseJSON:</b> ' + e.message, {
dt: - 1,
type: 5,
answer: obj
});
var evalString = `(${obj
}
)`;
try {
return eval(evalString)
} catch (t) {
if (__debugMode) throw t;
Object(_debug_tools__WEBPACK_IMPORTED_MODULE_7__.logEvalError) (t, evalString)
}
} else {
var _evalString = `(${obj
}
)`;
try {
return eval(_evalString)
} catch (t) {
if (__debugMode) throw t;
Object(_debug_tools__WEBPACK_IMPORTED_MODULE_7__.logEvalError) (t, _evalString)
}
}
}
function checkTextLength(t, e, r, i, n, s, o) {
var a = e.getValue ? e.getValue()  : e.value,
l = e.lastLen || 0;
if (e.lastLen !== a.length || s) {
e.lastLen = a.length;
var c = {
'&': 5,
'<': 4,
'>': 4,
'"': 6,
'\n': i ? 1 : 4,
'\r': 0,
'!': 5,
'\'': 5,
$: 6,
'\\': 6
},
h = {
1168: 1,
1169: 1,
8211: 1,
8212: 1,
8216: 1,
8217: 1,
8218: 1,
8230: 1,
8240: 1,
8249: 1,
8250: 1,
8364: 1,
8470: 1,
8482: 1,
65533: 1
},
d = {
1037: 1,
1104: 1,
1117: 1
};
n && (c[','] = 5);
var u = function (t) {
for (var e = 0, r = 0, i = t.length; r < i; r++) {
var n = c[t.charAt(r)],
s = t.charCodeAt(r);
e += void 0 !== n ? n : !o && s >= 128 && (s < 1025 || d[s] || s > 1119) && !h[s] && (s < 8220 || s > 8222) && (s < 8224 || s > 8226) ? ('&#' + s + ';').length : 1
}
return e
}(a);
if (r = Object(_dom__WEBPACK_IMPORTED_MODULE_11__.ge) (r), u > Math.max(t - 100, 0.75 * t)) if (Object(_dom__WEBPACK_IMPORTED_MODULE_11__.show) (r), u > t) if (n) {
var p = Object(_dom__WEBPACK_IMPORTED_MODULE_11__.val) (e, function (t, e) {
for (var r = 0, i = '', n = 0, s = t.length; n < s; n++) {
var a = t.charAt(n),
l = c[a],
u = t.charCodeAt(n);
if ((r += void 0 !== l ? l : !o && u >= 128 && (u < 1025 || d[u] || u > 1119) && !h[u] && (u < 8220 || u > 8222) && (u < 8224 || u > 8226) ? ('&#' + u + ';').length : 1) > e) break;
i += a
}
return i
}(a, Math.min(t, l)));
e.lastLen = p.length,
r.innerHTML = Object(_lang__WEBPACK_IMPORTED_MODULE_12__.getLang) ('text_N_symbols_remain', 0)
} else r.innerHTML = Object(_lang__WEBPACK_IMPORTED_MODULE_12__.getLang) ('text_exceeds_symbol_limit', u - t);
 else r.innerHTML = Object(_lang__WEBPACK_IMPORTED_MODULE_12__.getLang) ('text_N_symbols_remain', t - u);
 else Object(_dom__WEBPACK_IMPORTED_MODULE_11__.hide) (r)
}
}
function getSelectionText() {
var t = '';
return window.getSelection ? t = window.getSelection().toString()  : document.selection && 'Control' !== document.selection.type && (t = document.selection.createRange().text),
t
}
function goAway(t, e, r) {
if ( - 1 !== (e || {
}).h || Object(_dom_events__WEBPACK_IMPORTED_MODULE_15__.checkEvent) (r)) return !0;
if ( - 1 !== (e || {
}).h) {
var i = t.match(/https?:\/\/([a-zA-Z0-9\-_\.]+\.)?(vk\.com|vkontakte\.ru)(\/|$)/i);
if (i && 'api.' !== i[1].toLowerCase()) return location.href = t,
!1;
var n = Object(_utils_common__WEBPACK_IMPORTED_MODULE_5__.intval) (Object(_shared_lib_cookies__WEBPACK_IMPORTED_MODULE_8__.getCookie) ('remixsettings_bits'));
if (/https?:\/\/([a-zA-Z0-9\-_]+\.)(vk\.com|vkontakte\.ru)(\/|$)/i.test(Object(_shared_lib_common__WEBPACK_IMPORTED_MODULE_9__.locBase) ()) || 1 & n) return window.open('/away.php?to=' + encodeURIComponent(t) + (e && void 0 !== e.h ? '&h=' + e.h : ''), '_blank'),
!1
}
var s = Object(_utils_common__WEBPACK_IMPORTED_MODULE_5__.extend) ({
act: 'a_go',
to: t
}, e || {
});
return !Object(_message_box__WEBPACK_IMPORTED_MODULE_10__.showBox) ('away.php', s, {
}, r)
}
function isFullScreen() {
return !!(document.fullscreenElement || document.fullScreenElement || document.msFullscreenElement || document.mozFullScreen || document.webkitIsFullScreen || cur.pvPartScreen)
}
function updateMoney(t, e) {
if (void 0 !== t && !1 !== t) {
var r = '';
!0 === e ? (vk.balanceEx = t, r = '_ex')  : vk.balance = t;
var i = Object(_dom__WEBPACK_IMPORTED_MODULE_11__.geByClass) ('votes_balance_nom' + r);
Object(_utils_common__WEBPACK_IMPORTED_MODULE_5__.each) (i, (e, r) =>r.innerHTML = `${t
}
 ${Object(_lang__WEBPACK_IMPORTED_MODULE_12__.getLang) ('votes_flex', t)
}
`);
var n = t * (vk.vcost || 7),
s = Object(_dom__WEBPACK_IMPORTED_MODULE_11__.geByClass) ('money_balance_nom' + r);
Object(_utils_common__WEBPACK_IMPORTED_MODULE_5__.each) (s, (t, e) =>e.innerHTML = Object(_lang__WEBPACK_IMPORTED_MODULE_12__.getLang) ('global_money_amount_rub', n, !0)),
void 0 !== e && !1 !== e && !0 !== e && updateMoney(e, !0)
}
}
function toggleOnline(t, e) {
var r = onlinePlatformClass(e).split(' '),
i = [
];
[
'online',
'mobile',
'_online'
].forEach(function (e) {
Object(_utils_common__WEBPACK_IMPORTED_MODULE_5__.inArray) (e, r) && !Object(_dom__WEBPACK_IMPORTED_MODULE_11__.hasClass) (t, e) ? i.push(e)  : !Object(_utils_common__WEBPACK_IMPORTED_MODULE_5__.inArray) (e, r) && Object(_dom__WEBPACK_IMPORTED_MODULE_11__.hasClass) (t, e) && Object(_dom__WEBPACK_IMPORTED_MODULE_11__.removeClass) (t, e)
}),
i.length > 0 && Object(_dom__WEBPACK_IMPORTED_MODULE_11__.addClass) (t, i.join(' '))
}
function onlinePlatformClass(t) {
var e = ' _online';
return t && (e += ' online'),
_browser__WEBPACK_IMPORTED_MODULE_13__.mobPlatforms[t] && (e += ' mobile'),
Object(_accessibility__WEBPACK_IMPORTED_MODULE_14__.updateOnlineText) (),
e
}
function handleScroll(t) {
t = t.split(',');
var e = cur.named || {
},
r = t[0] && (e[t[0]] || Object(_dom__WEBPACK_IMPORTED_MODULE_11__.ge) (t[0])) || !1,
i = t[1] && (e[t[1]] || Object(_dom__WEBPACK_IMPORTED_MODULE_11__.ge) (t[1])) || !1;
if (!r && !i) {
if (!(r = document.getElementsByName(t[0]) [0])) return;
r = r.nextSibling
}
var n = Object(_dom__WEBPACK_IMPORTED_MODULE_11__.ge) ('page_header_wrap') || Object(_dom__WEBPACK_IMPORTED_MODULE_11__.ge) ('dev_top_nav_wrap');
setTimeout(function () {
r && Object(_scroll__WEBPACK_IMPORTED_MODULE_16__.scrollToY) (Object(_dom__WEBPACK_IMPORTED_MODULE_11__.getXY) (r) [1] - (n ? Object(_dom__WEBPACK_IMPORTED_MODULE_11__.getSize) (n) [1] : 0), 0),
i && Object(_dom__WEBPACK_IMPORTED_MODULE_11__.elfocus) (i)
}, 300)
}
function showErrorBox(t, e) {
return void 0 === e && (e = 10000),
setTimeout(showFastBox({
title: Object(_lang__WEBPACK_IMPORTED_MODULE_12__.getLang) ('global_error')
}, t).hide, e)
}
function getDropdownValue(t) {
var e = Object(_dom__WEBPACK_IMPORTED_MODULE_11__.ge) (t + '_container');
if (e || (e = Object(_dom__WEBPACK_IMPORTED_MODULE_11__.ge) (t)), e && e.dropdown) return e.dropdown.val()
}
},
apmT: function (t, e, r) {
var i = r('0/R4');
t.exports = function (t, e) {
if (!i(t)) return t;
var r,
n;
if (e && 'function' == typeof (r = t.toString) && !i(n = r.call(t))) return n;
if ('function' == typeof (r = t.valueOf) && !i(n = r.call(t))) return n;
if (!e && 'function' == typeof (r = t.toString) && !i(n = r.call(t))) return n;
throw TypeError('Can\'t convert object to primitive value')
}
},
cGUQ: function (t, e, r) {
'use strict';
r.r(e),
r.d(e, 'fromQueryString', function () {
return l
}),
r.d(e, 'toQueryString', function () {
return a
});
r('KKXr'),
r('Vd3H');
var i = r('jE6c'),
n = {
},
s = function (t) {
if (n[t]) return t;
try {
return encodeURIComponent(t)
} catch (t) {
return ''
}
},
o = function (t) {
try {
return decodeURIComponent(t)
} catch (e) {
return n[t] = 1,
t
}
};
function a(t, e) {
var r = [
];
for (var n in t) if (t.hasOwnProperty(n) && null != t[n] && !Object(i.isFunction) (t[n])) if (Object(i.isArray) (t[n])) for (var o = 0, a = 0, l = t[n].length; o < l; ++o) null == t[n][o] || Object(i.isFunction) (t[n][o]) || (r.push(s(n) + '[' + a + ']=' + s(t[n][o])), ++a);
 else r.push(s(n) + '=' + s(t[n]));
return e || r.sort(),
r.join('&')
}
function l(t) {
if (!t) return {
};
var e = {
};
return t = t.split('&'),
Object(i.each) (t, function (t, r) {
var i = r.split('=');
if (i[0]) {
var n = o(i[1] + '');
if ('[]' === i[0].substr(i.length - 2)) {
var s = o(i[0].substr(0, i.length - 2));
e[s] || (e[s] = [
]),
e[s].push(n)
} else e[o(i[0])] = n
}
}),
e
}
},
czNK: function (t, e, r) {
'use strict';
var i = r('nh4g'),
n = r('DVgA'),
s = r('JiEa'),
o = r('UqcF'),
a = r('S/j/'),
l = r('Ymqv'),
c = Object.assign;
t.exports = !c || r('eeVq') (function () {
var t = {
},
e = {
},
r = Symbol(),
i = 'abcdefghijklmnopqrst';
return t[r] = 7,
i.split('').forEach(function (t) {
e[t] = t
}),
7 != c({
}, t) [r] || Object.keys(c({
}, e)).join('') != i
}) ? function (t, e) {
for (var r = a(t), c = arguments.length, h = 1, d = s.f, u = o.f; c > h; ) for (var p, _ = l(arguments[h++]), f = d ? n(_).concat(d(_))  : n(_), m = f.length, g = 0; m > g; ) p = f[g++],
i && !u.call(_, p) || (r[p] = _[p]);
return r
}
 : c
},
'd/Gc': function (t, e, r) {
var i = r('RYi7'),
n = Math.max,
s = Math.min;
t.exports = function (t, e) {
return (t = i(t)) < 0 ? n(t + e, 0)  : s(t, e)
}
},
dyZX: function (t, e) {
var r = t.exports = 'undefined' != typeof window && window.Math == Math ? window : 'undefined' != typeof self && self.Math == Math ? self : Function('return this') ();
'number' == typeof __g && (__g = r)
},
e7yV: function (t, e, r) {
var i = r('aCFj'),
n = r('kJMx').f,
s = {
}.toString,
o = 'object' == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window)  : [
];
t.exports.f = function (t) {
return o && '[object Window]' == s.call(t) ? function (t) {
try {
return n(t)
} catch (t) {
return o.slice()
}
}(t)  : n(i(t))
}
},
eNQP: function (t, e, r) {
'use strict';
r.r(e),
r.d(e, 'collectMemoryStats', function () {
return o
}),
r.d(e, 'statDurationsLoadImage', function () {
return a
}),
r.d(e, 'statNavigationTiming', function () {
return l
});
var i = r('XzvV'),
n = r('t7n3');
function s(t, e) {
for (var r, i = 0; i < e.length; i++) if ('>' === (r = e[i])) r = '>' + e[i - 1];
 else {
if (1000 * r > t) {
r = '<' + r;
break
}
r = !1
}
return r
}
function o() {
var t = {
},
e = [
15,
60,
300,
1500,
5000,
10000,
15000,
20000,
25000,
30000
],
r = [
300,
1500,
5000,
30000,
60000,
120000,
'>'
],
n = !1;
setInterval(function () {
var o = window.cur && window.cur.module;
o !== n && (t = {
}, n = o);
var a = window.vkLastNav;
if (o && a) {
var l = s(Date.now() - a, e);
if (l && !t[l]) {
var c = s(Date.now() - window.vkTabLoaded, r);
t[l] = !0;
var h = performance.memory.usedJSHeapSize;
Object(i.statlogsValueEvent) ('js_memory_stats_modules', h, o, l, c)
}
}
}, 5000)
}
function a() {
if (Math.random() < 0.001 && window.performance && window.performance.getEntriesByType) {
if (window.clientStatsInited) return !1;
var t = window.performance.getEntriesByType('resource');
if (!t) return !1;
for (var e = {
}, r = {
}, s = 0; s < t.length; s++) if (t[s] && 'img' === t[s].initiatorType) if (t[s].duration < 100) e['<100'] = (e['<100'] || 0) + 1;
 else if (t[s].duration < 250) e['100-250'] = (e['100-250'] || 0) + 1;
 else if (t[s].duration < 500) e['250-500'] = (e['250-500'] || 0) + 1;
 else if (t[s].duration < 1000) e['500-1000'] = (e['500-1000'] || 0) + 1;
 else if (t[s].duration < 2000) e['1000-2000'] = (e['1000-2000'] || 0) + 1;
 else if (t[s].duration < 5000) e['2000-5000'] = (e['2000-5000'] || 0) + 1;
 else if (e['>5000'] = (e['>5000'] || 0) + 1, t[s].name && t[s].name.indexOf('pp.vk.me') > 0) {
var o = '';
(o = (o = t[s].name).substr(o.indexOf('pp.vk.me') + 9)).indexOf('/') > 0 && (r[o = o.substr(0, o.indexOf('/'))] = (r[o] || 0) + 1)
}
Object(n.each) (e, (t, e) =>Object(i.statlogsValueEvent) ('img_load', e, t)),
Object(n.each) (r, (t, e) =>Object(i.statlogsValueEvent) ('img_slow', e, t)),
window.clientStatsInited = !0
}
}
function l() {
if (window.clientStatsInitedNT) return !1;
if (window.performance && performance.timing) {
if (Math.random() > 0.001 && !__dev) return !1;
var t = {
},
e = window.cur && window.cur.module;
performance.timing.redirectStart && performance.timing.redirectEnd && (t.redirect = performance.timing.redirectEnd - performance.timing.redirectStart),
performance.timing.domainLookupStart && performance.timing.domainLookupEnd && (t.domainLookup = performance.timing.domainLookupEnd - performance.timing.domainLookupStart),
performance.timing.connectStart && performance.timing.connectEnd && (t.connect = performance.timing.connectEnd - performance.timing.connectStart, performance.timing.secureConnectionStart && (t.secureConnection = performance.timing.connectEnd - performance.timing.secureConnectionStart)),
performance.timing.requestStart && performance.timing.responseStart && (t.request = performance.timing.responseStart - performance.timing.requestStart, performance.timing.responseEnd && (t.response = performance.timing.responseEnd - performance.timing.responseStart)),
performance.timing.unloadEventStart && performance.timing.unloadEventEnd && (t.unloadEvent = performance.timing.unloadEventEnd - performance.timing.unloadEventStart),
performance.timing.domLoading && performance.timing.domComplete && (t.processing = performance.timing.domComplete - performance.timing.domLoading),
performance.timing.domContentLoadedEventStart && performance.timing.domContentLoadedEventEnd && (t.domContentLoadedEvent = performance.timing.domContentLoadedEventEnd - performance.timing.domContentLoadedEventStart),
performance.timing.loadEventStart && performance.timing.loadEventEnd && (t.loadEvent = performance.timing.loadEventEnd - performance.timing.loadEventStart),
performance.timing.loadEventEnd && performance.timing.responseEnd && (t.resource = performance.timing.loadEventEnd - performance.timing.responseEnd),
Object(n.each) (t, (t, r) =>Object(i.statlogsValueEvent) ('navigation_timing', r, t, e)),
window.clientStatsInitedNT = !0
}
}
},
'eQf/': function (t, e, r) {
'use strict';
r.r(e),
r.d(e, 'requestBox', function () {
return n
}),
r.d(e, 'activateMobileBox', function () {
return s
}),
r.d(e, 'validateMobileBox', function () {
return o
}),
r.d(e, 'validatePassBox', function () {
return a
}),
r.d(e, 'validateOtpBox', function () {
return l
});
var i = r('EasH');
function n(t, e, r) {
return t.setOptions({
onDestroy: r
}),
t.onDone = function () {
e && e.apply(null, arguments)
},
t
}
function s(t) {
return n(Object(i.showBox) ('activation.php', {
act: 'activate_mobile_box',
hash: t.hash
}), function () {
vk.nophone = 0,
t.onDone()
}, t.onFail)
}
function o(t) {
return n(Object(i.showBox) ('activation.php', {
act: 'validate_box',
captcha: t.acceptCaptcha ? 1 : '',
skip_push: t.skip_push ? t.skip_push : '',
from: t.from || '',
hash: t.hash,
ahash: t.ahash
}, {
stat: [
'uncommon.css'
]
}), t.onDone, t.onFail)
}
function a(t) {
return n(Object(i.showBox) ('activation.php', {
act: 'pass_validate_box',
hash: t.hash
}, {
stat: [
'uncommon.css'
]
}), t.onDone, t.onFail)
}
function l(t) {
return n(Object(i.showBox) ('activation.php', {
act: 'otp_validate_box',
hash: t.hash
}, {
stat: [
'uncommon.css'
]
}), t.onDone, t.onFail)
}
},
eeVq: function (t, e) {
t.exports = function (t) {
try {
return !!t()
} catch (t) {
return !0
}
}
},
elZq: function (t, e, r) {
'use strict';
var i = r('dyZX'),
n = r('hswa'),
s = r('nh4g'),
o = r('K0xU') ('species');
t.exports = function (t) {
var e = i[t];
s && e && !e[o] && n.f(e, o, {
configurable: !0,
get: function () {
return this
}
})
}
},
fyDq: function (t, e, r) {
var i = r('hswa').f,
n = r('aagx'),
s = r('K0xU') ('toStringTag');
t.exports = function (t, e, r) {
t && !n(t = r ? t : t.prototype, s) && i(t, s, {
configurable: !0,
value: e
})
}
},
g3g5: function (t, e) {
var r = t.exports = {
version: '2.6.9'
};
'number' == typeof __e && (__e = r)
},
g6HL: function (t, e) {
t.exports = Object.is || function (t, e) {
return t === e ? 0 !== t || 1 / t == 1 / e : t != t && e != e
}
},
gHnn: function (t, e, r) {
var i = r('dyZX'),
n = r('GZEu').set,
s = i.MutationObserver || i.WebKitMutationObserver,
o = i.process,
a = i.Promise,
l = 'process' == r('LZWt') (o);
t.exports = function () {
var t,
e,
r,
c = function () {
var i,
n;
for (l && (i = o.domain) && i.exit(); t; ) {
n = t.fn,
t = t.next;
try {
n()
} catch (i) {
throw t ? r()  : e = void 0,
i
}
}
e = void 0,
i && i.enter()
};
if (l) r = function () {
o.nextTick(c)
};
 else if (!s || i.navigator && i.navigator.standalone) if (a && a.resolve) {
var h = a.resolve(void 0);
r = function () {
h.then(c)
}
} else r = function () {
n.call(i, c)
};
 else {
var d = !0,
u = document.createTextNode('');
new s(c).observe(u, {
characterData: !0
}),
r = function () {
u.data = d = !d
}
}
return function (i) {
var n = {
fn: i,
next: void 0
};
e && (e.next = n),
t || (t = n, r()),
e = n
}
}
},
gdug: function (t, e, r) {
'use strict';
r.r(e),
r.d(e, 'browser', function () {
return s
}),
r.d(e, 'mobPlatforms', function () {
return o
}),
r.d(e, 'browserFeatures', function () {
return a
}),
r.d(e, 'initBrowserUtils', function () {
return l
});
r('pIFo'),
r('a1Th'),
r('Btvt'),
r('SRfc');
var i = r('zxIV'),
n = navigator.userAgent.toLowerCase(),
s = {
version: (n.match(/.+(?:me|ox|on|rv|it|era|opr|ie|edge)[\/: ]([\d.]+)/) || [
0,
'0'
]) [1],
opera: /opera/i.test(n) || /opr/i.test(n),
vivaldi: /vivaldi/i.test(n),
amigo: /amigo.*mrchrome soc/i.test(n),
msie: /msie/i.test(n) && !/opera/i.test(n) || /trident\//i.test(n) || /edge/i.test(n),
msie6: /msie 6/i.test(n) && !/opera/i.test(n),
msie7: /msie 7/i.test(n) && !/opera/i.test(n),
msie8: /msie 8/i.test(n) && !/opera/i.test(n),
msie9: /msie 9/i.test(n) && !/opera/i.test(n),
msie_edge: /edge/i.test(n) && !/opera/i.test(n),
mozilla: /firefox/i.test(n),
chrome: /chrome/i.test(n) && !/edge/i.test(n),
safari: !/chrome/i.test(n) && /webkit|safari|khtml/i.test(n),
iphone: /iphone/i.test(n),
ipod: /ipod/i.test(n),
iphone4: /iphone.*OS 4/i.test(n),
ipod4: /ipod.*OS 4/i.test(n),
ipad: /ipad/i.test(n),
android: /android/i.test(n),
bada: /bada/i.test(n),
mobile: /iphone|ipod|ipad|opera mini|opera mobi|iemobile|android/i.test(n),
msie_mobile: /iemobile/i.test(n),
safari_mobile: /iphone|ipod|ipad/i.test(n),
opera_mobile: /opera mini|opera mobi/i.test(n),
opera_mini: /opera mini/i.test(n),
mac: /mac/i.test(n),
windows7: /windows nt 6.1/i.test(n),
windowsVista: /windows nt 6.0/i.test(n),
windowsXp: /windows nt (5.2|5.1)/i.test(n),
search_bot: /(yandex|google|stackrambler|aport|slurp|msnbot|bingbot|twitterbot|ia_archiver|facebookexternalhit)/i.test(n),
smart_tv: /smart-tv|smarttv/i.test(n)
},
o = {
1: 1,
2: 1,
3: 1,
4: 1,
5: 1,
8: 1
},
a = {
wheelEvent: 'onwheel' in Object(i.ce) ('div') ? 'wheel' : void 0 !== document.onmousewheel ? 'mousewheel' : s.mozilla ? 'MozMousePixelScroll' : 'DOMMouseScroll',
hasBoundingClientRect: 'getBoundingClientRect' in Object(i.ce) ('div'),
cmaEnabled: navigator.credentials && navigator.credentials.preventSilentAccess && window.vk && vk.cma
};
function l() {
window._ua || (window._ua = navigator.userAgent.toLowerCase()),
window.locDomain || (window.locDomain = location.host.toString().match(/[a-zA-Z]+\.[a-zA-Z]+\.?$/) [0]),
window.locHost = location.host,
window.locProtocol = location.protocol,
window.locHash = location.hash.replace('#/', '').replace('#!', '')
}
},
hPIQ: function (t, e) {
t.exports = {
}
},
hswa: function (t, e, r) {
var i = r('y3w9'),
n = r('xpql'),
s = r('apmT'),
o = Object.defineProperty;
e.f = r('nh4g') ? Object.defineProperty : function (t, e, r) {
if (i(t), e = s(e, !0), i(r), n) try {
return o(t, e, r)
} catch (t) {
}
if ('get' in r || 'set' in r) throw TypeError('Accessors not supported!');
return 'value' in r && (t[e] = r.value),
t
}
},
i5dc: function (t, e, r) {
var i = r('0/R4'),
n = r('y3w9'),
s = function (t, e) {
if (n(t), !i(e) && null !== e) throw TypeError(e + ': can\'t set as prototype!')
};
t.exports = {
set: Object.setPrototypeOf || ('__proto__' in {
}
? function (t, e, i) {
try {
(i = r('m0Pp') (Function.call, r('EemH').f(Object.prototype, '__proto__').set, 2)) (t, [
]),
e = !(t instanceof Array)
} catch (t) {
e = !0
}
return function (t, r) {
return s(t, r),
e ? t.__proto__ = r : i(t, r),
t
}
}({
}, !1)  : void 0),
check: s
}
},
i6oL: function (t, e, r) {
'use strict';
r.r(e),
r.d(e, 'initStl', function () {
return p
}),
r.d(e, 'updateSTL', function () {
return g
});
var i = r('v+DW'),
n = r('El3O'),
s = r('kHqu'),
o = r('Egk5'),
a = r('lXE5'),
l = r('zxIV'),
c = r('t7n3'),
h = r('4+be'),
d = !1,
u = !0;
function p() {
var t = {
onclick: _,
onmousedown: f,
onmouseover: m,
onmouseout: m
};
Object(l.val) (_stlLeft, '<div id="stl_bg"><nobr id="stl_text">' + Object(h.getLang) ('global_to_top') + '</nobr></div>'),
Object(c.extend) (_stlLeft, t),
Object(c.extend) (_stlSide, t),
window._stlBg = _stlLeft.firstChild,
window._stlText = window._stlBg.firstChild,
Object(o.addEvent) (window, 'blur', function () {
window._wf = - 1,
d = !1
}),
Object(o.addEvent) (window, 'focus', function () {
window._wf = 1,
d || (window.__afterFocus = !0, d = !0, setTimeout(function () {
window.__afterFocus = !1
}, 10), u && (Object(i.sbWidth) (!0), Object(n.onBodyResize) (!0), u = !1))
})
}
function _(t) {
return Object(o.checkEvent) (t) || Object(o.cancelEvent) (t)
}
function f(t) {
if (t = t || window.event, !Object(o.checkEvent) (t) && !__afterFocus) if (_stlWasSet && _stlWas) {
var e = _stlWas;
window._stlWas = 0,
Object(a.scrollToY) (e, 0, !0, !0),
Object(s.updateLeftMenu) (!0)
} else 1 === _stlBack ? _tbLink.onclick()  : (window._stlWas = Object(a.scrollGetY) (), Object(a.scrollToY) (0, 0, !0, !0), Object(s.updateLeftMenu) ())
}
function m(t) {
var e = t ? t.originalEvent || t : window.event || {
},
r = 'mouseover' === e.type && (e.pageX > 0 || e.clientX > 0);
Object(l.toggleClass) (_stlLeft, 'over', r),
Object(l.toggleClass) (_stlLeft, 'over_fast', r && (0 === _stlBack || _tbLink.fast) && 0 === _stlWasSet),
Object(l.toggleClass) (_stlSide, 'over', r)
}
function g() {
var t = window.innerWidth,
e = document.documentElement.clientWidth,
r = Math.max(Object(c.intval) (t), Object(c.intval) (e));
Object(l.toggleClass) (bodyNode, 'no_stl', r < vk.width + 280),
Object(l.toggleClass) (bodyNode, 'no_sett', r < vk.width + 62)
}
},
ioFf: function (t, e, r) {
'use strict';
var i = r('dyZX'),
n = r('aagx'),
s = r('nh4g'),
o = r('XKFU'),
a = r('KroJ'),
l = r('Z6vF').KEY,
c = r('eeVq'),
h = r('VTer'),
d = r('fyDq'),
u = r('ylqs'),
p = r('K0xU'),
_ = r('N8g3'),
f = r('OnI7'),
m = r('1MBn'),
g = r('EWmC'),
v = r('y3w9'),
b = r('0/R4'),
y = r('S/j/'),
E = r('aCFj'),
w = r('apmT'),
O = r('RjD/'),
P = r('Kuth'),
C = r('e7yV'),
x = r('EemH'),
A = r('JiEa'),
M = r('hswa'),
D = r('DVgA'),
k = x.f,
T = M.f,
j = C.f,
S = i.Symbol,
I = i.JSON,
L = I && I.stringify,
B = p('_hidden'),
R = p('toPrimitive'),
F = {
}.propertyIsEnumerable,
N = h('symbol-registry'),
W = h('symbols'),
V = h('op-symbols'),
U = Object.prototype,
K = 'function' == typeof S && !!A.f,
H = i.QObject,
z = !H || !H.prototype || !H.prototype.findChild,
G = s && c(function () {
return 7 != P(T({
}, 'a', {
get: function () {
return T(this, 'a', {
value: 7
}).a
}
})).a
}) ? function (t, e, r) {
var i = k(U, e);
i && delete U[e],
T(t, e, r),
i && t !== U && T(U, e, i)
}
 : T,
q = function (t) {
var e = W[t] = P(S.prototype);
return e._k = t,
e
},
X = K && 'symbol' == typeof S.iterator ? function (t) {
return 'symbol' == typeof t
}
 : function (t) {
return t instanceof S
},
Y = function (t, e, r) {
return t === U && Y(V, e, r),
v(t),
e = w(e, !0),
v(r),
n(W, e) ? (r.enumerable ? (n(t, B) && t[B][e] && (t[B][e] = !1), r = P(r, {
enumerable: O(0, !1)
}))  : (n(t, B) || T(t, B, O(1, {
})), t[B][e] = !0), G(t, e, r))  : T(t, e, r)
},
$ = function (t, e) {
v(t);
for (var r, i = m(e = E(e)), n = 0, s = i.length; s > n; ) Y(t, r = i[n++], e[r]);
return t
},
Q = function (t) {
var e = F.call(this, t = w(t, !0));
return !(this === U && n(W, t) && !n(V, t)) && (!(e || !n(this, t) || !n(W, t) || n(this, B) && this[B][t]) || e)
},
Z = function (t, e) {
if (t = E(t), e = w(e, !0), t !== U || !n(W, e) || n(V, e)) {
var r = k(t, e);
return !r || !n(W, e) || n(t, B) && t[B][e] || (r.enumerable = !0),
r
}
},
J = function (t) {
for (var e, r = j(E(t)), i = [
], s = 0; r.length > s; ) n(W, e = r[s++]) || e == B || e == l || i.push(e);
return i
},
tt = function (t) {
for (var e, r = t === U, i = j(r ? V : E(t)), s = [
], o = 0; i.length > o; ) !n(W, e = i[o++]) || r && !n(U, e) || s.push(W[e]);
return s
};
K || (a((S = function () {
if (this instanceof S) throw TypeError('Symbol is not a constructor!');
var t = u(arguments.length > 0 ? arguments[0] : void 0),
e = function (r) {
this === U && e.call(V, r),
n(this, B) && n(this[B], t) && (this[B][t] = !1),
G(this, t, O(1, r))
};
return s && z && G(U, t, {
configurable: !0,
set: e
}),
q(t)
}).prototype, 'toString', function () {
return this._k
}), x.f = Z, M.f = Y, r('kJMx').f = C.f = J, r('UqcF').f = Q, A.f = tt, s && !r('LQAc') && a(U, 'propertyIsEnumerable', Q, !0), _.f = function (t) {
return q(p(t))
}),
o(o.G + o.W + o.F * !K, {
Symbol: S
});
for (var et = 'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'.split(','), rt = 0; et.length > rt; ) p(et[rt++]);
for (var it = D(p.store), nt = 0; it.length > nt; ) f(it[nt++]);
o(o.S + o.F * !K, 'Symbol', {
for : function (t) {
return n(N, t += '') ? N[t] : N[t] = S(t)
},
keyFor: function (t) {
if (!X(t)) throw TypeError(t + ' is not a symbol!');
for (var e in N) if (N[e] === t) return e
},
useSetter: function () {
z = !0
},
useSimple: function () {
z = !1
}
}),
o(o.S + o.F * !K, 'Object', {
create: function (t, e) {
return void 0 === e ? P(t)  : $(P(t), e)
},
defineProperty: Y,
defineProperties: $,
getOwnPropertyDescriptor: Z,
getOwnPropertyNames: J,
getOwnPropertySymbols: tt
});
var st = c(function () {
A.f(1)
});
o(o.S + o.F * st, 'Object', {
getOwnPropertySymbols: function (t) {
return A.f(y(t))
}
}),
I && o(o.S + o.F * (!K || c(function () {
var t = S();
return '[null]' != L([t]) || '{}' != L({
a: t
}) || '{}' != L(Object(t))
})), 'JSON', {
stringify: function (t) {
for (var e, r, i = [
t
], n = 1; arguments.length > n; ) i.push(arguments[n++]);
if (r = e = i[1], (b(e) || void 0 !== t) && !X(t)) return g(e) || (e = function (t, e) {
if ('function' == typeof r && (e = r.call(this, t, e)), !X(e)) return e
}),
i[1] = e,
L.apply(I, i)
}
}),
S.prototype[R] || r('Mukb') (S.prototype, R, S.prototype.valueOf),
d(S, 'Symbol'),
d(Math, 'Math', !0),
d(i.JSON, 'JSON', !0)
},
jE6c: function (t, e, r) {
'use strict';
r.r(e),
r.d(e, 'rand', function () {
return n
}),
r.d(e, 'replaceEntities', function () {
return f
}),
r.d(e, 'isArray', function () {
return l
}),
r.d(e, 'isEmpty', function () {
return h
}),
r.d(e, 'isFunction', function () {
return o
}),
r.d(e, 'isHttpHref', function () {
return E
}),
r.d(e, 'isObject', function () {
return c
}),
r.d(e, 'isString', function () {
return a
}),
r.d(e, 'isUndefined', function () {
return s
}),
r.d(e, 'irand', function () {
return b
}),
r.d(e, 'escapeAttr', function () {
return p
}),
r.d(e, 'escapeRE', function () {
return d
}),
r.d(e, 'escapeStr', function () {
return m
}),
r.d(e, 'each', function () {
return O
}),
r.d(e, 'htsc', function () {
return u
}),
r.d(e, 'copy', function () {
return P
}),
r.d(e, 'vkNow', function () {
return w
}),
r.d(e, 'locBase', function () {
return i
}),
r.d(e, 'unescapeAttr', function () {
return _
}),
r.d(e, 'utf2win', function () {
return y
}),
r.d(e, 'srand', function () {
return v
}),
r.d(e, 'stripTags', function () {
return g
});
r('KKXr'),
r('a1Th'),
r('Btvt'),
r('pIFo');
var i = () =>location.toString().replace(/#.+$/, ''),
n = (t, e) =>Math.random() * (e - t + 1) + t,
s = t=>void 0 === t,
o = t=>t && '[object Function]' === Object.prototype.toString.call(t),
a = t=>'string' == typeof t,
l = t=>'[object Array]' === Object.prototype.toString.call(t),
c = t=>'[object Object]' === Object.prototype.toString.call(t),
h = t=>{
if (!c(t)) return !1;
for (var e in t) if (t.hasOwnProperty(e)) return !1;
return !0
},
d = t=>t ? t.replace(/([.*+?^${}()|[\]\/\\])/g, '\\$1')  : '',
u = t=>t.replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/\'/g, '&#39;').replace(/%/g, '&#37;'),
p = t=>t.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/\'/g, '&#39;'),
_ = t=>t.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, '\''),
f = t=>ce('textarea', {
innerHTML: (t || '').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}).value,
m = t=>t.replace(/\'/g, '\\\''),
g = t=>t.replace(/<[^>]+>/g, ''),
v = () =>Math.random().toString(36).substr(2),
b = (t, e) =>Math.floor(n(t, e)),
y = t=>unescape(encodeURIComponent(t));
function E(t) {
var e = (t + '').split(':'),
r = e[1] && e[0] ? e[0] + ':' : location.protocol;
return 'http:' === r || 'https:' === r
}
var w = () => + new Date;
function O(t, e) {
if (!t) return t;
if (c(t) || void 0 === t.length) {
for (var r in t) if (t.hasOwnProperty(r) && !1 === e.call(t[r], r, t[r])) break
} else for (var i = 0, n = t.length; i < n; i++) {
var s = t[i];
if (!1 === e.call(s, i, s)) break
}
return t
}
function P(t) {
return l(t) ? t.concat([])  : c(t) ? extend({
}, t)  : t
}
},
k487: function (t, e, r) {
'use strict';
r.r(e),
r.d(e, 'default', function () {
return l
});
var i = r('zxIV'),
n = r('t7n3'),
s = r('Egk5'),
o = r('lXE5'),
a = r('El3O');
class l{
constructor(t, e) {
if (this.constructor !== l) throw new Error('ElementTooltip was called without \'new\' operator');
if (!(t = Object(i.ge) (t)) || !t.nodeType) throw new Error('First argument not a DOM element');
if (Object(i.data) (t, 'ett')) return Object(i.data) (t, 'ett');
if (this._opts = Object(n.extend) ({
delay: 100,
offset: [
0,
0
],
shift: 0,
type: l.TYPE_VERTICAL,
id: '',
cls: '',
width: null,
appendToParent: !1,
autoShow: !0,
autoHide: !1,
noHideOnClick: !1,
arrowSize: 'normal',
customShow: !1,
align: l.ALIGN_CENTER
}, e), this._opts.customShow && (this._opts.autoShow = !1), this._opts.defaultSide || (this._opts.defaultSide = this._opts.type === l.TYPE_VERTICAL ? 'top' : 'left'), this._opts.cls += ' eltt_arrow_size_' + this._opts.arrowSize, this._opts.cls += ' eltt_align_' + this._opts.align, this._opts.noBorder && (this._opts.cls += ' eltt_noborder'), this._opts.type !== l.TYPE_VERTICAL && delete this._opts.shift, this._opts.setPos && !this._opts.forceSide) throw new Error('forceSide parameter should be set if you use setPos');
this._opts.forceSide && (this._opts.type = Object(n.inArray) (this._opts.forceSide, [
'top',
'bottom'
]) ? l.TYPE_VERTICAL : l.TYPE_HORIZONTAL),
this._appendToEl = this._opts.appendTo ? this._opts.appendTo : this._opts.appendToParent ? Object(i.domClosestPositioned) (t, {
noOverflow: !0
})  : t,
this._arrowSize = {
mini: l.ARROW_SIZE_MINI,
normal: l.ARROW_SIZE_NORMAL,
big: l.ARROW_SIZE_BIG
}
[
this._opts.arrowSize
],
this._opts.forceSide && (this._opts.type = l.getType(this._opts.forceSide)),
this._el = t,
Object(i.data) (this._el, 'ett', this),
this._initEvents(t),
this._clearTimeouts(),
this._isShown = !1
}
_initEvents(t) {
this._opts.autoShow && (this._el_me_event = this._onMouseEnter.bind(this), Object(s.addEvent) (t, 'mouseenter', this._el_me_event)),
(this._opts.autoShow || this._opts.autoHide) && (this._el_ml_event = this._onMouseLeave.bind(this), Object(s.addEvent) (t, 'mouseleave', this._el_ml_event)),
this._opts.autoShow || this._opts.customShow || (this._el_c_event = () =>{
this._isShown && this._opts.noHideOnClick || this.toggle(!this._isShown)
}, Object(s.addEvent) (t, 'click', this._el_c_event))
}
_onMouseEnter(t) {
clearTimeout(this._hto),
this._hto = !1,
!this._isShown && this._opts.autoShow && (clearTimeout(this._reTimeout), this._reTimeout = !1, clearTimeout(this._sto), this._sto = setTimeout(this.show.bind(this), this._opts.delay))
}
_onMouseLeave(t) {
this._clearTimeouts(),
this._hto = setTimeout(this._hide.bind(this), 200)
}
_onMouseWindowClick(t) {
if (!this._opts.noAutoHideOnWindowClick) {
for (var e = t.target; e && e !== this._ttel && e !== document.body && e !== this._el; ) e = Object(i.domPN) (e);
if (!Object(i.hasClass) (t.target, '_ap_layer__close')) return e && e !== document.body ? void 0 : Object(n.isFunction) (this._opts.onWindowClick) ? (this._opts.onWindowClick(), Object(s.cancelEvent) (t))  : (this.hide(!0), Object(s.cancelEvent) (t))
}
}
destroy() {
var t;
this._el_me_event && Object(s.removeEvent) (this._el, 'mouseenter', this._el_me_event),
this._el_ml_event && Object(s.removeEvent) (this._el, 'mouseleave', this._el_ml_event),
this._el_c_event && Object(s.removeEvent) (this._el, 'click', this._el_c_event),
this._clearTimeouts(),
Object(i.removeData) (this._el, 'ett'),
Object(i.re) (this._ttel),
this._ev_wclick && Object(s.removeEvent) (document, 'mousedown', this._ev_wclick),
this._ttel && (t = Object(i.geByClass1) ('_eltt_content', this._ttel)),
this._opts.onDestroy && this._opts.onDestroy(t)
}
hide(t) {
this._hide(t)
}
_onTooltipMouseEnter(t) {
this._clearTimeouts()
}
_onTooltipMouseLeave(t) {
this._onMouseLeave()
}
build() {
if (!this._ttel) {
this._ttel = Object(i.se) (`
        <div class="eltt ${this._opts.cls || ''
}
" id="${this._opts.id
}
">
          <div class="eltt_arrow_back _eltt_arrow_back">
            <div class="eltt_arrow"></div>
          </div>
          <div class="eltt_content _eltt_content"></div>
        </div>`),
this._ttArrowEl = Object(i.geByClass1) ('_eltt_arrow_back', this._ttel);
var t = Object(i.geByClass1) ('_eltt_content', this._ttel);
this._opts.content && (Object(n.isString) (this._opts.content) ? t.innerHTML = this._opts.content : t.appendChild(this._opts.content)),
this._appendToEl.appendChild(this._ttel)
}
}
show() {
if (this._isShown) this.updatePosition();
 else {
if (this._clearTimeouts(), this._ttel || (this.build(), (this._opts.autoShow || this._opts.autoHide) && (this._ev_ttenter = this._onTooltipMouseEnter.bind(this), this._ev_ttleave = this._onTooltipMouseLeave.bind(this), Object(s.addEvent) (this._ttel, 'mouseenter', this._ev_ttenter), Object(s.addEvent) (this._ttel, 'mouseleave', this._ev_ttleave))), this._opts.width) {
var t = Object(n.isFunction) (this._opts.width) ? this._opts.width.call(this)  : this._opts.width;
Object(i.setStyle) (this._ttel, 'width', t)
}
Object(i.show) (this._ttel);
var e = Object(i.geByClass1) ('_eltt_content', this._ttel);
this._opts.onFirstTimeShow && !this._firstTimeShown && this._opts.onFirstTimeShow.call(this, e, this._ttel),
this._opts.onShow && this._opts.onShow(e, !this._firstTimeShown),
this._firstTimeShown = !0,
this.updatePosition(),
this._isShown = !0,
this._visTO = setTimeout(i.addClass.pbind(this._ttel, 'eltt_vis'), 10),
this._opts.elClassWhenShown && Object(i.addClass) (this._el, this._opts.elClassWhenShown),
this._ev_wclick && Object(s.removeEvent) (document, 'mousedown', this._ev_wclick),
this._ev_wclick = this._onMouseWindowClick.bind(this),
Object(s.addEvent) (document, 'mousedown', this._ev_wclick)
}
}
staticgetType(t) {
switch (t) {
case 'top':
case 'bottom':
return l.TYPE_VERTICAL;
case 'right':
case 'left':
return l.TYPE_HORIZONTAL
}
}
getOptions() {
return this._opts
}
updatePosition() {
var t = this._opts.forceSide,
e = !!this._opts.getTargetBoundingBox && this._opts.getTargetBoundingBox(this);
if (!e) {
var r = Object(i.getXY) (this._el),
s = Object(i.getSize) (this._el);
e = {
left: r[0],
top: r[1],
width: s[0],
height: s[1]
}
}
var c,
h = this._opts.getWrapEl ? this._opts.getWrapEl(this)  : Object(i.gpeByClass) ('audio_layer_container', this._ttel),
d = h || Object(i.domClosestOverflowHidden) (this._ttel),
u = d !== bodyNode ? Object(i.getXY) (d)  : [
Object(o.scrollGetX) (),
Object(o.scrollGetY) () + Object(a.getPageHeaderHeight) ()
],
p = d !== bodyNode ? Object(i.getSize) (d)  : [
window.innerWidth,
window.innerHeight
],
_ = Object(i.getSize) (this._ttel),
f = this._arrowSize,
m = this._opts.noBorder ? 0 : 1,
g = Object(n.isFunction) (this._opts.offset) ? this._opts.offset()  : this._opts.offset,
v = (t, r) =>{
var n,
s = {
},
o = [
vk.rtl ? 'marginRight' : 'marginLeft',
'marginTop'
].indexOf(t);
n = this._opts.align === (vk.rtl ? l.ALIGN_LEFT : l.ALIGN_RIGHT) ? _[o] - Math.max(m + f + (r || 0), Math.min(_[o], e[o ? 'height' : 'width']) / 2)  : this._opts.align === (vk.rtl ? l.ALIGN_RIGHT : l.ALIGN_LEFT) ? Math.max(m + f + (r || 0), Math.min(_[o], e[o ? 'height' : 'width']) / 2)  : _[o] / 2,
s[t] = Math.floor(n) - m - f - (r || 0),
Object(i.setStyle) (this._ttArrowEl, s)
};
if (this._opts.setPos) c = this._opts.setPos(this) || {
},
l.getType(t) === l.TYPE_VERTICAL ? void 0 !== c.arrowPosition ? Object(i.setStyle) (this._ttArrowEl, {
marginLeft: c.arrowPosition
})  : vk.rtl ? v('marginRight')  : v('marginLeft')  : void 0 !== c.arrowPosition ? Object(i.setStyle) (this._ttArrowEl, {
marginTop: c.arrowPosition
})  : v('marginTop');
 else {
if (!t && this._prevSide && this._opts.preventSideChange) t = this._prevSide;
 else if (!t) if (this._opts.type === l.TYPE_VERTICAL) {
var b = Object(i.hasClass) (bodyNode, 'body_im') ? this._opts.bottomGap || 60 : this._opts.bottomGap || 0,
y = e.top - u[1] > _[1] + f - g[1],
E = Object(o.scrollGetY) () + p[1] - (e.top + e.height + f) - b > _[1];
t = 'top' === this._opts.defaultSide ? y ? 'top' : 'bottom' : E ? 'bottom' : 'top'
} else t = e.left - u[0] < _[0] ? 'right' : 'left';
var w,
O,
P,
C,
x,
A,
M = Object(i.getXY) (this._appendToEl),
D = [
e.left - M[0],
e.top - M[1]
],
k = g[0] + D[0];
this._opts.centerShift ? (k += this._opts.centerShift || 0, w = this._opts.centerShift)  : this._opts.rightShift && (k += w = - (_[0] / 2 - this._opts.rightShift)),
this._prevSide = t;
switch (this._opts.align === (vk.rtl ? l.ALIGN_LEFT : l.ALIGN_RIGHT) ? (O = e.width - _[0], P = e.height - _[1])  : this._opts.align === (vk.rtl ? l.ALIGN_RIGHT : l.ALIGN_LEFT) ? (O = 0, P = 0)  : (O = - _[0] / 2 + e.width / 2, P = e.height / 2 - _[1] / 2), t) {
case 'bottom':
x = O + k,
A = e.height + f - g[1] + D[1],
w || ((C = O + e.left + g[0] + _[0] + 20 - (u[0] + p[0])) < 0 && (C = 0), x -= C, w = - C),
c = {
left: x,
top: A
};
break;
case 'top':
x = O + k,
A = - _[1] - f + g[1] + D[1],
w || ((C = O + e.left + g[0] + _[0] + 20 - (u[0] + p[0])) < 0 && (C = 0), x -= C, w = - C),
c = {
left: x,
top: A
};
break;
case 'right':
x = e.width + f + k,
A = P + g[1] + D[1],
w || ((C = P + e.top + g[1] - (u[1] + 20)) > 0 && (C = 0), A -= C, w = - C),
c = {
left: x,
top: A
};
break;
case 'left':
x = - _[0] - f + k,
A = P + g[1] + D[1],
w || ((C = P + e.top + g[1] - (u[1] + 20)) > 0 && (C = 0), A -= C, w = - C),
c = {
left: x,
top: A
}
}
this._opts.type === l.TYPE_VERTICAL ? vk.rtl ? v('marginRight', w)  : v('marginLeft', w)  : v('marginTop', w)
}
Object(n.each) (['top',
'bottom',
'left',
'right'], function (e, r) {
t !== r && Object(i.removeClass) (this._ttel, 'eltt_' + r)
}.bind(this)),
Object(i.addClass) (this._ttel, 'eltt_' + t),
Object(i.setStyle) (this._ttel, c)
}
_hide(t) {
if (!this.tempPreventHide) {
if (this._isShown = !1, this._clearTimeouts(), this._reTimeout = setTimeout(function () {
Object(i.hide) (this._ttel),
this._opts.elClassWhenShown && Object(i.removeClass) (this._el, this._opts.elClassWhenShown),
this._opts.onHide && this._opts.onHide(this._ttel, !!t)
}.bind(this), l.FADE_SPEED), this._opts.onBeforeHide) try {
this._opts.onBeforeHide(this._ttel, !!t)
} catch (t) {
}
Object(i.removeClass) (this._ttel, 'eltt_vis'),
this._ev_wclick && Object(s.removeEvent) (document, 'mousedown', this._ev_wclick)
}
}
isShown() {
return this._isShown
}
toggle() {
this.isShown() ? this.hide()  : this.show()
}
_clearTimeouts() {
this._visTO && clearTimeout(this._visTO),
this._visTO = !1,
this._sto && clearTimeout(this._sto),
this._sto = !1,
this._hto && clearTimeout(this._hto),
this._hto = !1,
this._reTimeout && clearTimeout(this._reTimeout),
this._reTimeout = !1
}
getContent() {
return Object(i.geByClass1) ('_eltt_content', this._ttel)
}
}
l.TYPE_VERTICAL = 0,
l.TYPE_HORIZONTAL = 1,
l.FADE_SPEED = 100,
l.ARROW_SIZE_MINI = 9,
l.ARROW_SIZE_NORMAL = 8,
l.ARROW_SIZE_BIG = 16,
l.ALIGN_LEFT = 'left',
l.ALIGN_CENTER = 'center',
l.ALIGN_RIGHT = 'right'
},
kHqu: function (t, e, r) {
'use strict';
r.r(e);
r('rE2o'),
r('ioFf'),
r('rGqo'),
r('SRfc'),
r('Oyvg'),
r('KKXr'),
r('pIFo'),
r('a1Th'),
r('Btvt');
var i = r('zxIV'),
n = r('t7n3'),
s = r('4+be'),
o = r('7jxN'),
a = r('XzvV'),
l = r('m0N1'),
c = r('ryw6'),
h = r('v+DW'),
d = r('XuKo'),
u = r('EasH'),
p = r('eQf/'),
_ = r('kcIO'),
f = r('/PiP'),
m = r('Ia1d'),
g = r('Ieup'),
v = r('i6oL'),
b = r('aong'),
y = r('W9Tc');
function E() {
if (Object(y.partConfigEnabled) ('geminus_counter_belarus_test') && Object(a.statlogsValueEvent) ('geminus_counter_belarus_test', 1), Object(y.partConfigEnabled) ('geminus_counter')) {
var t = 'pzBAVLtpzyiyDVIwmwjmX5a2zSVdA6eUI7mpf0ufDFf.57';
if (window.pp_gemius_identifier) window.pp_gemius_hit(t);
 else {
window.pp_gemius_identifier = t;
var e = function (t) {
window[t] = window[t] || function () {
var e = window[t + '_pdata'] = window[t + '_pdata'] || [
];
e[e.length] = arguments
}
};
e('gemius_hit'),
e('gemius_event'),
e('pp_gemius_hit'),
e('pp_gemius_event'),
function (t, e) {
try {
var r = t.createElement(e),
i = t.getElementsByTagName(e) [0],
n = 'http' + ('https:' == location.protocol ? 's' : '');
r.setAttribute('async', 'async'),
r.setAttribute('defer', 'defer'),
r.src = n + '://galv.hit.gemius.pl/xgemius.js',
i.parentNode.insertBefore(r, i)
} catch (t) {
}
}(document, 'script')
}
}
}
var w = r('Xrg9');
function O(t, e) {
return function (t) {
if (Array.isArray(t)) return t
}(t) || function (t, e) {
var r = [
],
i = !0,
n = !1,
s = void 0;
try {
for (var o, a = t[Symbol.iterator](); !(i = (o = a.next()).done) && (r.push(o.value), !e || r.length !== e); i = !0);
} catch (t) {
n = !0,
s = t
} finally {
try {
i || null == a.return || a.return ()
} finally {
if (n) throw s
}
}
return r
}(t, e) || function () {
throw new TypeError('Invalid attempt to destructure non-iterable instance')
}()
}
function P() {
window.vkLastNav = Date.now(),
window.vkTabLoaded = Date.now()
}
function C(t) {
var e = [
Object(i.ge) ('dev_top_nav_wrap'),
Object(i.ge) ('page_header_wrap')
];
Object(n.each) (e, function (e, r) {
r && Object(i.setStyle) (r, t)
})
}
function x(t) {
window.__leftMenu && window.__leftMenu.handleUpdateRequest(t)
}
function A(t, e, r) {
var a = '',
l = '',
c = '<span class="inl_bl left_count_sign"></span>',
h = 'reqs' === r || r && r.substr && 'spr' === r.substr(0, 3) ? 5 : 3,
d = Object(i.geByClass1) ('left_count_wrap', t),
u = Object(i.hasClass) (Object(i.geByClass1) ('left_row', t, 'a'), 'left_nav_over'),
p = Object(i.geByClass1) ('left_count', t, 'span'),
_ = Object(i.val) (p);
e && ((a = e.toString()).length > h && (l = ' title="' + Object(n.stripHTML) (Object(s.langNumeric) (e, '%s', !0)) + '"', a = '..' + a.substr(a.length - h)), c = `<span class="inl_bl left_count" ${l
}
>${a
}
</span>`);
var f = function () {
Object(i.val) (d, c),
(e ? i.removeClass : i.addClass) (d, 'left_void'),
Object(i.setStyle) (d, {
opacity: ''
})
};
if (_ || u) if (a) Object(o.animateCount) (p, a, {
str: 'auto',
onDone: f
});
 else if (u) {
var m = bodyNode.appendChild(Object(i.se) ('<span class="left_count_wrap"><span class="inl_bl left_count_sign"></span></span>')),
g = Object(i.getSize) (Object(i.domFC) (m)) [0];
Object(i.re) (m),
_ && '.' === _.charAt(0) && Object(i.val) (p, _.replace('..', '')),
Object(o.animate) (p, {
width: g
}, 100, f)
} else Object(o.animate) (d, {
opacity: 0
}, 100, f);
 else f(),
Object(i.setStyle) (d, {
opacity: 0
}),
Object(o.animate) (d, {
opacity: 1
}, 100)
}
function M(t, e, r, s) {
var o = Object(n.intval) (e);
if (void 0 === vk.counts && (vk.counts = {
}), vk.counts[t] !== o) {
if (vk.counts[t] = o, 'ntf' === t) return window.TopNotifier.setCount(o > 0 ? o : 0),
void window.TopNotifier.createNewEventsBox(o > 0 ? o : 0);
var a,
l = Object(i.ge) ('l_' + t),
c = Object(i.hasClass) (Object(i.domFC) (l), 'left_nav_over');
l && (A(l, o > 0 ? o : 0, t), s && r && (a = o > 0 && s ? '?' + s : '', l.firstChild.href = '/' + r + a)),
(o >= 0 || !c) && Object(i.toggle) (l, o >= 0)
}
}
function D(t) {
vk.id = t.id,
t.body_class !== bodyNode.className && (bodyNode.className = t.body_class || ''),
Object(v.updateSTL) (),
x(),
void 0 !== t.pvbig && (vk.pvbig = t.pvbig),
void 0 !== t.pvdark && (vk.pvdark = t.pvdark),
cur._level = t.level,
vk.id && vk.id % 1000 == 1 && setTimeout(function () {
window.scrollmarked = {
},
Object(a.statlogsValueEvent) ('page_scroll', 0, cur.module, '0')
}, 300),
L(t);
var e = Object(i.ge) ('mvk_footer_lnk');
if (e && (e.firstChild.href = t.mvklnk || 'http://m.vk.com/'), vk.nophone = Object(n.intval) (t.nophone), vk.staticheader = Object(n.intval) (t.staticheader), vk.id) {
var r = Object(i.ge) ('left_blocks');
r && (r.innerHTML = t.leftblocks || '')
}
'leftads' in t && 0 !== t.leftads && window.__adsSet(t.leftads, t.ads_section || '', t.ads_can_show, t.ads_showed);
var s = locProtocol + '//' + location.host + '/';
t.loc && ('?' === t.loc.charAt(0) ? s += nav.strLoc : s += t.loc);
var o = document.URL === s ? '' : document.URL;
if (setTimeout(k.pbind(s, o), 10), t.counters) {
var c = (t.counters || '').split(','),
h = '',
d = '';
Object(n.intval) (c[9]) > 0 ? (h = 'adsmarket', d = 'act=overview&status=-1')  : Object(n.intval) (c[9]) < - 1 ? (c[9] = 1, h = 'ads', d = 'act=a_comeback_office_redirect')  : h = 'ads?act=office&last=1';
var u = Object(i.ge) ('l_set'),
p = u && u.nextSibling || !1,
_ = [
'fr',
'ph',
'vid',
'msg',
'nts',
'gr',
'vkp',
'wsh',
'ap',
'ads',
'ntf',
'fav',
'doc',
'apm',
'mk'
],
f = [
'friends',
'albums' + vk.id,
'video',
'',
'notes',
'groups',
'vkpay',
'gifts.php?act=wishlist',
'apps',
h,
'feed' + (Object(i.ge) ('l_nwsf') ? '?section=notifications' : ''),
'pages',
'docs',
'apps_manage',
'market'
],
m = [
'',
'act=added',
'section=tagged',
'',
'act=comments',
'',
'tab=invitations',
'',
'',
d,
Object(i.ge) ('l_nwsf') ? '' : 'section=notifications',
'',
'',
'',
'only_friends=1'
],
g = !1;
if (t.handlecnts) {
for (var b = 0; b < _.length; b++) M(_[b], c[b], f[b], m[b]);
for (var y = p.nextSibling; y; y = y.nextSibling) {
if (y.tagName && 'li' === y.tagName.toLowerCase() && Object(i.isVisible) (y)) {
g = !0;
break
}
if (Object(i.hasClass) (y, 'more_div')) break
}(g ? i.show : i.hide) (p);
for (var E = c.length; b < E; b++) {
var w = c[b].split(':'),
O = Object(i.ge) ('l_app' + Object(n.intval) (w[0]));
O && A(O, Object(n.intval) (w[1]))
}
setTimeout(l.updSeenAdsInfo, 0)
} else for (var P = 0; P < _.length; P++) vk.counts[_[P]] = c[P]
}
}
function k(t, e) {
if (isFunction(E) && E(), !vk.zero && !__dev) {
e = e || document.referrer;
for (var r = [
new RegExp('(\\/login)(\\?).*$')
], i = 0; i < r.length; i++) if (t.match(r[i])) return;
var s = [
[new RegExp('(\\/(?:write|mail|im|al_im.php))(\\?[a-z0-9&=\\-_]*)?$'),
'$1'],
[
new RegExp('(\\/write)(\\d*)(\\?[a-zA-Z0-9&=\\-_]*)?$'),
'$1'
]
],
o = {
referrer: e,
url: t
};
Object(n.each) (o, function (t) {
Object(n.each) (s, function () {
o[t] = o[t].replace(this[0], this[1])
})
}),
e = o.referrer,
t = o.url;
var l = vk.tnsPixelSocdem || '83',
c = e.replace(/\*/g, '%2a');
Object(n.vkImage) ().src = `${locProtocol
}
//www.tns-counter.ru/V13a**clid:${l
}
*${c
}
*vk_com/ru/UTF-8/tmsec=vksite_total/${Math.round(1000000000 * Math.random())
}
`,
Object(a.statlogsValueEvent) ('counters_check', 1),
'unauth' === vk.tnsPixelType ? Object(n.vkImage) ().src = locProtocol + '//www.tns-counter.ru/V13a****vk_ad/ru/UTF-8/tmsec=vkad_cid1015708-posid1184674/' + Math.round(1000000000 * Math.random())  : 'has_rough' === vk.tnsPixelType ? Object(n.vkImage) ().src = locProtocol + '//www.tns-counter.ru/V13a****vk_ad/ru/UTF-8/tmsec=vkad_cid1015708-posid1184675/' + Math.round(1000000000 * Math.random())  : 'not_has_rough' === vk.tnsPixelType && (Object(n.vkImage) ().src = locProtocol + '//www.tns-counter.ru/V13a****vk_ad/ru/UTF-8/tmsec=vkad_cid1015708-posid1184677/' + Math.round(1000000000 * Math.random())),
window._tmr = window._tmr || [
],
window._tmr.push({
id: '2579437',
url: t,
referrer: e,
type: 'pageView',
start: (new Date).getTime(),
pid: vk.id ? vk.id : 0
})
}
}
function T(t) {
t = t || {
};
var e = w.default.get('last_reloaded') || [
];
e.unshift(Object(n.vkNow) ());
var r = e.length;
return r > 5 && (e.splice(5, r - 5), r = 5),
w.default.set('last_reloaded', e),
!!(5 === r && e[0] - e[4] < 20000) && (Object(c.topError) ('<b>Reloading error</b>, please check internet connection, <b><a href="/page-777107_43991681">clear your cache</a></b> and restart your browser.<br>If problem remains, please <a href="/support?act=new">report it here</a>.', {
dt: 15,
type: 6,
msg: 'Reload error, from ' + (t.from || 0) + ', forced ' + (t.force || 0) + ', url ' + (t.url || '') + ', query ' + (t.query || '')
}), !0)
}
function j(t) {
for (var e = 0, r = globalHistory.length; e < r; e++) if (globalHistory[e].loc === t) {
var i = globalHistory.splice(e, 1) [0];
I(i.cur),
i.content.innerHTML = '',
--e,
--r
}
}
function S(t, e, r) {
if (_tbLink) {
var s = t;
if (t = (t || '').replace(/^\//, ''), _tbLink.loc = t, void 0 === r && (r = 0, t)) for (var o = 0, a = globalHistory.length; o < a; o++) if (globalHistory[o].loc === t) {
r = 1;
break
}
if (s) {
try {
_tbLink.style.maxWidth = _tbLink.parentNode.offsetWidth - 35 + 'px'
} catch (t) {
}
Object(n.extend) (_tbLink, {
href: '/' + t,
innerHTML: e,
fast: r
}),
Object(i.show) (_tbLink),
window._stlWas = 0
} else Object(i.hide) (_tbLink);
Object(h.updSideTopLink) (1)
}
}
function I(t) {
if (t._back && t._back.hide && t === cur) for (var e in t._back.hide) if (t._back.hide.hasOwnProperty(e)) try {
t._back.hide[e]()
} catch (t) {
try {
console.log(t.stack)
} catch (t) {
}
}
if (t.destroy && t.destroy.length) for (var r in t.destroy) if (t.destroy.hasOwnProperty(r)) try {
t.destroy[r](t)
} catch (t) {
try {
console.log(t.stack)
} catch (t) {
}
}
}
function L(t) {
var e = Object(i.ge) ('footer_wrap'),
r = Object(i.ge) ('page_layout'),
s = Object(i.geByClass1) ('top_home_link'),
o = void 0 === t.width ? vk.width : t.width,
a = void 0 === t.width_dec ? vk.width_dec : t.width_dec,
l = void 0 === t.width_dec_footer ? vk.width_dec_footer : t.width_dec_footer;
if (vk.noleftmenu === t.noleftmenu && vk.nobottommenu === t.nobottommenu && vk.width === t.width && vk.width_dec_footer === t.width_dec_footer || (vk.noleftmenu !== t.noleftmenu && t.noleftmenu && Object(i.hide) ('side_bar'), vk.nobottommenu !== t.nobottommenu && (t.nobottommenu ? Object(i.hide) ('bottom_nav')  : Object(i.show) ('bottom_nav')), t.noleftmenu && t.nobottommenu ? e && (Object(i.addClass) (e, 'simple'), e.style.width = 'auto')  : e && (Object(i.removeClass) (e, 'simple'), e.style.width = o - l + 'px')), vk.notopmenu !== t.notopmenu && (t.notopmenu ? Object(i.hide) ('quick_search', 'qsearch_border', 'top_search', 'top_invite_link', 'top_menu_wrap')  : Object(i.show) ('quick_search', 'qsearch_border', 'top_search', 'top_invite_link', 'top_menu_wrap')), s && vk.top_home_link_class !== t.top_home_link_class && (s.className = t.top_home_link_class), r && (o !== vk.width || a !== vk.width_dec)) {
r.style.width = o + 'px',
Object(i.ge) ('page_header').style.width = o + 'px',
Object(i.ge) ('page_body').style.width = o - a + 'px',
Object(i.ge) ('ts_wrap') && Object(i.hasClass) (Object(i.ge) ('ts_wrap'), 'vk') && (Object(i.ge) ('ts_wrap').style.width = o - 191 + 'px'),
setTimeout(h.updSideTopLink.pbind(!0), 0),
setTimeout(v.updateSTL, 0);
try {
_tbLink.style.maxWidth = _tbLink.parentNode.offsetWidth - 35 + 'px'
} catch (t) {
}
}
vk.noleftmenu === t.noleftmenu || t.noleftmenu || Object(i.show) ('side_bar'),
vk.noleftmenu = t.noleftmenu,
vk.nobottommenu = t.nobottommenu,
vk.top_home_link_class = t.top_home_link_class,
vk.notopmenu = t.notopmenu,
vk.width = o,
vk.width_dec = a,
vk.width_dec_footer = l,
vk.body_class = t.body_class,
vk.staticheader = Object(n.intval) (t.staticheader),
vk.no_ads = t.no_ads,
vk.ad_preview = t.ad_preview
}
function B(t, e, r) {
var s = t.z,
o = t.f,
a = t.w,
l = (s || '').match(/^([a-z_]+)(-?\d+(?:_\d+)?)\/?(.*)/i);
if (delete t.z, delete t.f, delete t.w, e || (e = {
}), Object(n.isEmpty) (t)) {
if (o && (Object(b.handleScroll) (o), void 0 === s)) return !1;
if (e.hist) if (s || a) {
if (layerQueue.back('wiki', a, (l || {
}) [1], (l || {
}) [2])) return !1
} else if (!1 === s && r.w && layerQueue.back('wiki', r.w)) return !1;
if (a) {
if (!1 === s) layers.fullhide(!!e.hist && 2);
 else {
if (a.match(/^story([0-9\-]+)_(\d+)/)) return Object(d.showStory) (a);
if (a.match(/^narrative([0-9\-]+)_(\d+)/)) return Object(d.showNarrative) (a.split(/narrative/) [1], {
source: 'narrative_link'
});
if ('stories' === a) {
if (_message_boxes[cur.storiesArchiveBoxGUID]) return cur.storyLayer && cur.storyLayer.doHide(),
!1
} else r || (r = Object(n.clone) (nav.objLoc)),
a && (r.w = a),
o && (r.f = o),
delete r.z,
nav.setLoc(r)
}
return Object(f.showWiki) ({
w: a
}, 'note_new' === a, !1, {
onLoaded: s && B.pbind({
z: s
}, Object(n.extend) (e, {
queue: 1
})),
isZnav: 1
}),
!1
}
if ('giftbox' === s) return !Object(u.showBox) ('/al_gifts.php', {
act: 'get_gift_box',
mid: e.id || 0,
fr: e.is && e.id !== vk.id ? 0 : 1,
link: nav.objLoc[0]
}, {
stat: [
'gifts.css',
'ui_controls.js',
'ui_controls.css'
],
cache: 1
}, window.event);
if ('validatebox' === s) return !Object(p.validateMobileBox) ({
closeLink: 1,
onDone: () =>Object(i.ge) ('change_phone_wrap').parentNode.removeChild(Object(i.ge) ('change_phone_wrap'))
});
if ('upload_video' === s) return VideoUpload.showBox();
if (!1 === s || !1 === a) {
var c = !window.wkcur || !wkcur.shown || layers.fullhide !== WkView.hide;
!layers.fullhide || !c && !1 !== a || e.asBox || (!e.hist || r.z || r.w || - 1 !== r[0].indexOf('/') || r[0].match(/^(photo|video)(-?\d+_\d+)$/) || layerQueue.clear(), layers.fullhide(!!e.hist && 2));
var h = Object(_.curBox) ();
return h && h.wkRaw && h.hide(),
!1
}
if (s && l) {
var v = function () {
return delete nav.objLoc.z,
nav.setLoc(nav.objLoc),
!0
};
switch (l[1]) {
case 'photo':
return Object(f.showPhoto) (l[2], l[3], Object(n.extend) (e, {
onFail: v,
noHistory: !0
})),
!1;
case 'albums':
return Object(f.showAlbums) (l[2], Object(n.extend) (e, {
onFail: v,
noHistory: !0
})),
!1;
case 'album':
return Object(f.showAlbum) (l[2], Object(n.extend) (e, {
onFail: v,
noHistory: !0
})),
!1;
case 'tag':
case 'photo_tag':
return Object(f.showPhotoTags) (l[2], Object(n.extend) (e, {
onFail: v,
noHistory: !0
})),
!1;
case 'video':
var y = l[3],
E = Object(n.extend) (e, {
onFail: v,
noLocChange: 1,
focusPlay: 1
});
if (y) {
var w = [
],
P = '';
if (Object(n.each) (y.split('/'), function (t, e) {
0 === e.indexOf('pl_') ? P = e : w.push(e)
}), y = w.join('/'), P) {
P = P.substr('pl_'.length);
var C = cur.currentModule ? cur.currentModule()  : cur.module;
E = Object(n.extend) (E, {
playlistId: P,
module: C,
addParams: {
force_no_repeat: 1,
show_next: 1,
playlist_id: P
}
})
}
}
return Object(m.showVideo) (l[2], y, E),
!1;
case 'single':
return void 0 === a && stManager.add(['single_pv.css',
jsc('web/single_pv.js')], Object(i.ge) (s).onclick),
!1;
case 'accept_money':
return Object(g.moneyTransferBox) (l[2], l[3]),
!1;
case 'moneysend':
var x = Object(u.showBox) ('al_payments.php', {
act: 'money_transfer_box',
to_id: l[2],
from: 'public_link'
}, {
onFail: function (t) {
return x.hide(),
setTimeout(showFastBox(getLang('global_error'), t).hide, 2000),
delete nav.objLoc.z,
nav.setLoc(nav.objLoc),
!0
}
});
return !1;
case 'audio_playlist':
var A = O(l[2].split('_'), 2),
M = A[0],
D = A[1],
k = e.context || '';
return AudioUtils.showAudioPlaylist(M, D, l[3], k, void 0, e.onDone),
!1;
case 'article_edit':
return f.openArticleEditor.apply(null, l[2].split('_')),
!1;
case 'podcast':
return stManager.add([jsc('web/podcast.js'),
'page.css'], () =>{
Podcast.show(null, l[2], null, 'url')
}),
!1;
case 'apps_achievements':
return stManager.add([jsc('web/apps_achievements.js')], () =>{
window.AppsAchievementsPage.showFriendAchievements(l[2])
}),
!1
}
}
}
}
r.d(e, 'initNavCounters', function () {
return P
}),
r.d(e, 'updateHeaderStyles', function () {
return C
}),
r.d(e, 'updateLeftMenu', function () {
return x
}),
r.d(e, 'handlePageCount', function () {
return M
}),
r.d(e, 'handlePageParams', function () {
return D
}),
r.d(e, 'updateOtherCounters', function () {
return k
}),
r.d(e, 'reloadCheckFlood', function () {
return T
}),
r.d(e, 'globalHistoryDestroy', function () {
return j
}),
r.d(e, 'showBackLink', function () {
return S
}),
r.d(e, 'processDestroy', function () {
return I
}),
r.d(e, 'handlePageView', function () {
return L
}),
r.d(e, 'zNav', function () {
return B
})
},
kJMx:
function (t, e, r) {
var i = r('zhAb'),
n = r('4R4u').concat('length', 'prototype');
e.f = Object.getOwnPropertyNames || function (t) {
return i(t, n)
}
},
kcIO: function (t, e, r) {
'use strict';
r.r(e),
r.d(e, 'curBox', function () {
return l
}),
r.d(e, 'initBoxQueue', function () {
return c
}),
r.d(e, 'boxRefreshCoords', function () {
return h
}),
r.d(e, 'showDoneBox', function () {
return d
}),
r.d(e, 'getBoxQueue', function () {
return u
});
r('tUrg');
var i = r('Egk5'),
n = r('t7n3'),
s = r('zxIV'),
o = r('gdug'),
a = {
hideAll: function (t, e) {
if (t) for (; a.count(); ) a.hideLast();
 else {
if (a.count()) {
var r = _message_boxes[a._boxes.pop()];
r && (r._in_queue = !1, r._hide(!1, !1, e))
}
for (; a.count(); ) {
_message_boxes[a._boxes.pop()]._in_queue = !1
}
}
},
hideLast: function (t, e) {
if (a.count()) {
var r = window._message_boxes[a._boxes[a.count() - 1]];
if (!0 === t && (r.changed || a.skip || e && e.target && e.target.tagName && 'input' !== e.target.tagName.toLowerCase() && cur.__mdEvent && e.target !== cur.__mdEvent.target)) return void (a.skip = !1);
r.hide()
}
if (e && 'click' === e.type) return Object(i.cancelEvent) (e)
},
hideBGClick: function (t) {
t && t.target && /^box_layer/.test(t.target.id) && a.hideLast()
},
count: function () {
return a._boxes.length
},
_show: function (t) {
var e = _message_boxes[t];
if (e && !e._in_queue) {
a.count() ? _message_boxes[a._boxes[a.count() - 1]]._hide(!0, !0)  : window.tooltips && tooltips.hideAll(),
e._in_queue = !0;
var r = !!a.count();
r && (r = a._boxes.every(t=>!_message_boxes[t].forceHide)),
a.curBox = t,
e._show(r || a.currHiding, r),
a._boxes.push(t)
}
},
_hide: function (t) {
var e = _message_boxes[t];
if (e && e._in_queue && a._boxes[a.count() - 1] === t && e.isVisible() && (e._in_queue = !1, a._boxes.pop(), e._hide(!!a.count()), a.count())) {
var r = a._boxes[a.count() - 1];
a.curBox = r,
_message_boxes[r]._show(!0, !0, !0)
}
},
_boxes: [
],
curBox: 0
};
function l() {
var t = window._message_boxes[window.boxQueue.curBox];
return t && t.isVisible() ? t : null
}
function c() {
window.boxQueue.hideLastCheck = window.boxQueue.hideLast.pbind(!0),
window._message_box_guid = 0,
window._message_boxes = [
]
}
function h(t) {
var e = window.innerHeight || document.documentElement.clientHeight || boxLayerBG.offsetHeight,
r = o.browser.mobile ? Object(n.intval) (window.pageYOffset)  : 0,
i = Object(s.getSize) (t);
t.style.marginTop = Math.max(10, r + (e - i[1]) / 3) + 'px'
}
function d(t) {
var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
};
window.Notifier ? p(t, e)  : window.stManager.add(['notifier.js',
'notifier.css'], () =>{
p(t, e)
})
}
function u() {
return a
}
function p(t, e) {
window.curNotifier && window.curNotifier.version || window.Notifier.init({
version: - 1,
instance_id: - 1
});
var r = void 0 !== e.onHide ? e.onHide : e.callback,
i = void 0 !== e.timeout ? e.timeout : void 0 !== e.out ? e.out : null,
n = null !== e.id && void 0 !== e.id ? e.id : ++window.curNotifier.showDoneBoxLastId,
s = {
version: window.curNotifier.version,
type: 'done_box',
text: t,
onclick: e.onClick,
top_count: - 1,
id: n,
timeout: i,
onHide: r,
preventHideByClick: !0,
link: e.link
};
e.tooltipHandler && (s.tooltipHandler = e.tooltipHandler),
Notifier.pushEvent(s)
}
},
lXE5: function (t, e, r) {
'use strict';
r.r(e),
r.d(e, 'scrollToY', function () {
return a
}),
r.d(e, 'scrollToTop', function () {
return l
}),
r.d(e, 'scrollGetX', function () {
return c
}),
r.d(e, 'scrollGetY', function () {
return h
}),
r.d(e, 'disableBodyScroll', function () {
return d
}),
r.d(e, 'enableBodyScroll', function () {
return u
}),
r.d(e, 'isBodyScrollEnabled', function () {
return p
});
var i = r('v+DW'),
n = r('7jxN'),
s = r('zxIV');
function o() {
return bodyNode
}
function a(t, e, r, l) {
if (null == e && (e = 400), 'ontouchstart' in document.documentElement && (e = 0), l || (t = Math.max(0, t - (vk.staticheader ? 0 : Object(s.getSize) ('page_header_cont') [1]))), Object(s.data) (o(), 'tween') && Object(s.data) (o(), 'tween').stop(!1), Object(s.data) (htmlNode, 'tween') && Object(s.data) (htmlNode, 'tween').stop(!1), window.scrollAnimation = !1, e) {
var d = function () {
window.scrollAnimation = !1,
2 === r && ('profile' != cur.module && 'public' != cur.module && 'group' != cur.module && 'groups' != cur.module && 'event' != cur.module || !window.Wall || Wall.scrollCheck(!1, void 0, !0), Object(i.updSideTopLink) ())
};
window.scrollAnimation = !0,
Object(n.animate) (htmlNode, {
scrollTop: t
}, {
duration: e,
transition: n.Fx.Transitions.sineInOut,
onComplete: d
}),
Object(n.animate) (o(), {
scrollTop: t
}, {
duration: e,
transition: n.Fx.Transitions.sineInOut,
onComplete: d
})
} else {
if (r && 2 !== r) {
'profile' != cur.module && 'public' != cur.module && 'group' != cur.module && 'event' != cur.module || !window.Wall || Wall.scrollCheck(!1, t, !0);
var u = h() - t;
return Math.abs(u) > 6 && a(t + (u > 0 ? 6 : - 6), 0, 2, !0),
Object(i.updSideTopLink) (),
clearTimeout(window.scrlToTO),
void (window.scrlToTO = setTimeout(a.pbind(t, 100, 2, !0), 0))
}
window.scroll(c(), t),
r || Object(i.updSideTopLink) ()
}
}
function l(t) {
return a(0, t)
}
function c() {
return window.pageXOffset || scrollNode.scrollLeft || document.documentElement.scrollLeft
}
function h() {
return window.pageYOffset || scrollNode.scrollTop || document.documentElement.scrollTop
}
function d() {
o().style.overflow = 'hidden'
}
function u() {
o().style.overflow = 'auto'
}
function p() {
return 'hidden' !== o().style.overflow
}
},
ldAL: function (t, e, r) {
'use strict';
r.r(e),
r.d(e, 'default', function () {
return l
});
r('KKXr');
var i = 'idle',
n = 'pend_rows',
s = 'pend_prefetch',
o = 'done_prefetch',
a = 'done';
class l{
constructor(t, e) {
if (this.constructor !== l) throw new Error('AutoList: AutoList was called without \'new\' operator');
if (l._counter = l._counter || 0, this._id = l._counter++, this.setListEl(t, e.scrollNode), this._opts = extend({
threshold: 0,
renderImmediate: !1
}, e), !this._containerEl) throw new Error('AutoList: container not found');
this._rowClasses = !!this._opts.rowClass && this._opts.rowClass.split(' '),
delete this._opts.rowClass,
this._initialRender = this._opts.renderImmediate,
this._isProgressShown = !1,
this._prefetched = [
],
this._initialRender ? this._offset = 0 : this._opts.offset ? this._offset = this._opts.offset : this._opts.rowClasses ? this._offset = this._countRows(this._containerEl.children)  : this._offset = this._containerEl.children.length,
this._page = this._offset > 0 ? 1 : 0,
addEvent(this._scrollNode, 'scroll', this._ev_scroll = this._onScroll.bind(this)),
addEvent(window, 'resize', this._ev_window_resize = this._onScroll.bind(this)),
this._setState(this._opts.renderImmediate ? n : s),
this._requestRows()
}
getListEl() {
return this._containerEl
}
setListEl(t, e) {
var r;
this._containerEl = ge(t),
this._scrollNode = e || l.closestOverflowParent(this._containerEl),
r = this._scrollNode === window ? 0 : getXY(this._scrollNode) [1],
this._contentYOffset = getXY(this._containerEl) [1] - r
}
options(t) {
extend(this._opts, t)
}
_countRows(t) {
var e = this,
r = 0;
return each(t, function (t, i) {
'string' == typeof i && (i = se(i)),
e._rowClasses ? each(e._rowClasses, function (t, e) {
if (hasClass(i, e)) return r++,
!1
})  : r++
}),
r
}
_drawRows(t) {
var e = this;
this._opts.drawRows ? this._opts.drawRows(e._containerEl, t)  : each(t, function (t, r) {
'string' == typeof r && (r = se(trim(r))),
r && e._containerEl.appendChild(r)
}),
this.toggleProgress(this._state !== a),
!this._forceDrawCalled && this._opts.onRendered && this._opts.onRendered()
}
toggleProgress(t) {
t ? !this._isProgressShown && this._opts.showProgress && this._opts.showProgress()  : this._isProgressShown && this._opts.hideProgress && this._opts.hideProgress(),
this._isProgressShown = t
}
drawMore() {
inArray(this._state, [
i,
o
]) ? (this._forceDrawCalled = !0, this._drawRows(this._prefetched), this._setState(s), this._prefetched = [
], this._requestRows(), this._forceDrawCalled = !1)  : this._state === a && this._opts.onNoMore && this._opts.onNoMore(this._containerEl.childElementCount)
}
destroy() {
this._ev_scroll && (removeEvent(this._scrollNode, 'scroll', this._ev_scroll), this._ev_scroll = !1),
this._ev_window_resize && removeEvent(window, 'resize', this._ev_window_resize),
this._setState(a),
this.toggleProgress(!1)
}
getOffset() {
return this._offset
}
_requestRows() {
if (!this.isDone() && this._state !== o) {
this._initialRender = !1,
function () {
this._opts.onNeedRows(this._onRowsProvided.bind(this), this._offset, this._page++, this._state === s, this)
}.apply(this)
}
}
_onRowsProvided(t, e) {
if (!this.isDone()) {
if (!1 === t) return this._requestRows();
t = t || [
],
this._offset += void 0 === e ? this._countRows(t)  : e;
var r = this._containerEl.childElementCount;
switch (this._state) {
case s:
0 === t.length ? (this._setState(o), this._opts.onNoMore && this._opts.onNoMore(r), 0 === this._prefetched.length && this._setState(a))  : (this._setState(i), this._prefetched = this._prefetched.concat(t), this._opts.onHasMore && this._opts.onHasMore(), this._onScroll());
break;
case n:
this._drawRows(t),
0 === t.length ? (this._setState(a), this._opts.onNoMore && this._opts.onNoMore(r))  : (this._setState(s), this._requestRows()),
this.toggleProgress(!1);
break;
case i:
this._prefetched = this._prefetched.concat(t)
}
}
}
_setState(t) {
this._state = t
}
isDone() {
return this._state === a
}
staticclosestOverflowParent(t) {
for (var e = t; e && e.tagName && ('visible' === getStyle(e, 'overflow') || 'page_wrap' === e.id); ) e = domPN(e);
return e !== window.document && e !== bodyNode && e || (e = window),
e
}
_onScroll() {
if (!this._forceDrawCalled && this._state !== n) {
var t,
e,
r = this._scrollNode;
r === window ? (e = Math.max(document.documentElement.clientHeight, window.innerHeight || 0), t = scrollGetY())  : (e = getSize(r) [1], t = this._scroll ? this._scroll.data.scrollTop : r.scrollTop),
e < 10 || this._containerEl.scrollHeight - e - t + this._contentYOffset < 10 && (this._state === n || !this._prefetched.length && this._state === s ? (this.toggleProgress(!0), this._setState(n))  : this._state === s || this._state === i ? (this._drawRows(this._prefetched), this._prefetched = [
], this._setState(s), this._requestRows())  : this._state === o && (this._drawRows(this._prefetched), this._prefetched = [
], this._setState(a), this._opts.onNoMore && this._opts.onNoMore(), this.destroy()))
}
}
}
},
lkNA: function (t, e, r) {
'use strict';
function i(t, e) {
var r,
i = e.timeout,
n = e.onLoad,
s = e.onError,
o = document.createElement('script');
function a(t) {
o.readyState && 'loaded' != o.readyState && 'complete' != o.readyState || (c(), n && n())
}
function l(t) {
c(),
s && s()
}
function c() {
clearTimeout(r),
o.removeEventListener('load', a),
o.removeEventListener('readystatechange', a),
o.removeEventListener('error', l)
}
return o.addEventListener('load', a),
o.addEventListener('readystatechange', a),
o.addEventListener('error', l),
o.src = t,
document.head.appendChild(o),
i && (r = setTimeout(l, i)),
{
destroy: function () {
c()
}
}
}
r.r(e),
r.d(e, 'loadScript', function () {
return i
})
},
m0N1: function (t, e, r) {
'use strict';
r.r(e),
r.d(e, 'updSeenAdsInfo', function () {
return o
}),
r.d(e, '__adsGetAjaxParams', function () {
return a
}),
r.d(e, '__adsUpdate', function () {
return l
}),
r.d(e, '__adsSet', function () {
return c
}),
r.d(e, '__adsUpdateExternalStats', function () {
return h
}),
r.d(e, 'initAds', function () {
return d
});
var i = r('J8bf'),
n = r('t7n3'),
s = r('zxIV');
function o() {
if ((Object(s.getXY) ('ads_left', !0) || {
}) [1] && vk.id) {
var t = Object(s.getXYRect) (Object(s.geByTag1) ('ol', Object(s.ge) ('side_bar_inner')), !0),
e = t ? t.height : 0,
r = Object(s.getXYRect) (Object(s.ge) ('left_blocks'), !0),
o = r ? r.height : 0,
a = Math.max(Math.floor(((window.lastWindowHeight || 0) - e - o - 42 - 10) / 260), 0),
l = Object(i.getCookie) ('remixseenads');
window.__seenAds = Object(n.intval) (l),
l && __seenAds === a || (window.__seenAds = a, Object(i.setCookie) ('remixseenads', a, 30))
}
}
function a(t, e) {
return !window.noAdsAtAll && (a = function () {
return window.AdsLight && AdsLight.getAjaxParams.apply(AdsLight.getAjaxParams, arguments) || {
al_ad: null
}
}, stManager.add(['aes_light.js'], a.pbind(t, e)) || {
al_ad: null
})
}
function l(t) {
if (window.noAdsAtAll) return !1;
l = function () {
window.AdsLight && AdsLight.updateBlock.apply(AdsLight.updateBlock, arguments)
},
stManager.add(['aes_light.js'], l.pbind(t))
}
function c(t, e, r, i, n, s) {
if (window.noAdsAtAll) return !1;
c = function () {
var t = '';
arguments && arguments[0] && (t = arguments[0]),
'<!--criteo' === t.slice(0, '<!--criteo'.length) && Math.random() < 0.05 && (window.AdsLight && AdsLight.setNewBlock ? ajax.post('/wkview.php?act=mlet&mt=750', {
}, {
onFail: () =>!0
})  : ajax.post('/wkview.php?act=mlet&mt=751', {
}, {
onFail: () =>!0
})),
window.AdsLight && AdsLight.setNewBlock.apply(AdsLight.setNewBlock, arguments)
},
stManager.add(['aes_light.js'], c.pbind(t, e, r, i, n, s))
}
function h(t) {
if (window.noAdsAtAll) return !1;
h = function () {
window.AdsLight && AdsLight.updateExternalStats.apply(AdsLight.updateExternalStats, arguments)
},
stManager.add(['aes_light.js'], h.pbind(t))
}
function d() {
window.__seenAds = Object(n.intval) (Object(i.getCookie) ('remixseenads')),
window.__adsUpdate = l,
window.__adsSet = c,
window.__adsGetAjaxParams = a,
window.__adsUpdateExternalStats = h
}
window.__adsLoaded = Object(n.vkNow) ()
},
m0Pp: function (t, e, r) {
var i = r('2OiF');
t.exports = function (t, e, r) {
if (i(t), void 0 === e) return t;
switch (r) {
case 1:
return function (r) {
return t.call(e, r)
};
case 2:
return function (r, i) {
return t.call(e, r, i)
};
case 3:
return function (r, i, n) {
return t.call(e, r, i, n)
}
}
return function () {
return t.apply(e, arguments)
}
}
},
nGyu: function (t, e, r) {
var i = r('K0xU') ('unscopables'),
n = Array.prototype;
null == n[i] && r('Mukb') (n, i, {
}),
t.exports = function (t) {
n[i][t] = !0
}
},
nICZ: function (t, e) {
t.exports = function (t) {
try {
return {
e: !1,
v: t()
}
} catch (t) {
return {
e: !0,
v: t
}
}
}
},
nIY7: function (t, e, r) {
'use strict';
r('OGtf') ('big', function (t) {
return function () {
return t(this, 'big', '', '')
}
})
},
nJnv: function (module, exports, __webpack_require__) {
var __WEBPACK_AMD_DEFINE_RESULT__,
root,
factory;
root = window || {
},
factory = function (window) {
var svgNS = 'http://www.w3.org/2000/svg',
locationHref = '',
subframeEnabled = !0,
expressionsPlugin,
isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
cachedColors = {
},
bm_rounder = Math.round,
bm_rnd,
bm_pow = Math.pow,
bm_sqrt = Math.sqrt,
bm_abs = Math.abs,
bm_floor = Math.floor,
bm_max = Math.max,
bm_min = Math.min,
blitter = 10,
BMMath = {
};
function ProjectInterface() {
return {
}
}
!function () {
var t,
e = Object.getOwnPropertyNames(Math),
r = e.length;
for (t = 0; t < r; t += 1) BMMath[e[t]] = Math[e[t]]
}(),
BMMath.random = Math.random,
BMMath.abs = function (t) {
if ('object' == typeof t && t.length) {
var e,
r = Array.apply(null, {
length: t.length
}),
i = t.length;
for (e = 0; e < i; e += 1) r[e] = Math.abs(t[e]);
return r
}
return Math.abs(t)
};
var defaultCurveSegments = 150,
degToRads = Math.PI / 180,
roundCorner = 0.5519;
function roundValues(t) {
bm_rnd = t ? Math.round : function (t) {
return t
}
}
function roundTo2Decimals(t) {
return Math.round(10000 * t) / 10000
}
function roundTo3Decimals(t) {
return Math.round(100 * t) / 100
}
function styleDiv(t) {
t.style.position = 'absolute',
t.style.top = 0,
t.style.left = 0,
t.style.display = 'block',
t.style.transformOrigin = t.style.webkitTransformOrigin = '0 0',
t.style.backfaceVisibility = t.style.webkitBackfaceVisibility = 'visible',
t.style.transformStyle = t.style.webkitTransformStyle = t.style.mozTransformStyle = 'preserve-3d'
}
function styleUnselectableDiv(t) {
t.style.userSelect = 'none',
t.style.MozUserSelect = 'none',
t.style.webkitUserSelect = 'none',
t.style.oUserSelect = 'none'
}
function BMEnterFrameEvent(t, e, r, i) {
this.type = t,
this.currentTime = e,
this.totalTime = r,
this.direction = i < 0 ? - 1 : 1
}
function BMCompleteEvent(t, e) {
this.type = t,
this.direction = e < 0 ? - 1 : 1
}
function BMCompleteLoopEvent(t, e, r, i) {
this.type = t,
this.currentLoop = e,
this.totalLoops = r,
this.direction = i < 0 ? - 1 : 1
}
function BMSegmentStartEvent(t, e, r) {
this.type = t,
this.firstFrame = e,
this.totalFrames = r
}
function BMDestroyEvent(t, e) {
this.type = t,
this.target = e
}
function _addEventListener(t, e) {
return this._cbs[t] || (this._cbs[t] = [
]),
this._cbs[t].push(e),
function () {
this.removeEventListener(t, e)
}.bind(this)
}
function _removeEventListener(t, e) {
if (e) {
if (this._cbs[t]) {
for (var r = 0, i = this._cbs[t].length; r < i; ) this._cbs[t][r] === e && (this._cbs[t].splice(r, 1), r -= 1, i -= 1),
r += 1;
this._cbs[t].length || (this._cbs[t] = null)
}
} else this._cbs[t] = null
}
function _triggerEvent(t, e) {
if (this._cbs[t]) for (var r = this._cbs[t].length, i = 0; i < r; i++) this._cbs[t][i](e)
}
function randomString(t, e) {
var r;
void 0 === e && (e = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890');
var i = '';
for (r = t; r > 0; --r) i += e[Math.round(Math.random() * (e.length - 1))];
return i
}
function HSVtoRGB(t, e, r) {
var i,
n,
s,
o,
a,
l,
c,
h;
switch (1 === arguments.length && (e = t.s, r = t.v, t = t.h), l = r * (1 - e), c = r * (1 - (a = 6 * t - (o = Math.floor(6 * t))) * e), h = r * (1 - (1 - a) * e), o % 6) {
case 0:
i = r,
n = h,
s = l;
break;
case 1:
i = c,
n = r,
s = l;
break;
case 2:
i = l,
n = r,
s = h;
break;
case 3:
i = l,
n = c,
s = r;
break;
case 4:
i = h,
n = l,
s = r;
break;
case 5:
i = r,
n = l,
s = c
}
return [i,
n,
s]
}
function RGBtoHSV(t, e, r) {
1 === arguments.length && (e = t.g, r = t.b, t = t.r);
var i,
n = Math.max(t, e, r),
s = Math.min(t, e, r),
o = n - s,
a = 0 === n ? 0 : o / n,
l = n / 255;
switch (n) {
case s:
i = 0;
break;
case t:
i = e - r + o * (e < r ? 6 : 0),
i /= 6 * o;
break;
case e:
i = r - t + 2 * o,
i /= 6 * o;
break;
case r:
i = t - e + 4 * o,
i /= 6 * o
}
return [i,
a,
l]
}
function addSaturationToRGB(t, e) {
var r = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
return r[1] += e,
r[1] > 1 ? r[1] = 1 : r[1] <= 0 && (r[1] = 0),
HSVtoRGB(r[0], r[1], r[2])
}
function addBrightnessToRGB(t, e) {
var r = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
return r[2] += e,
r[2] > 1 ? r[2] = 1 : r[2] < 0 && (r[2] = 0),
HSVtoRGB(r[0], r[1], r[2])
}
function addHueToRGB(t, e) {
var r = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
return r[0] += e / 360,
r[0] > 1 ? r[0] -= 1 : r[0] < 0 && (r[0] += 1),
HSVtoRGB(r[0], r[1], r[2])
}
function componentToHex(t) {
var e = t.toString(16);
return 1 == e.length ? '0' + e : e
}
roundValues(!1);
var rgbToHex = function () {
var t,
e,
r = [
];
for (t = 0; t < 256; t += 1) e = t.toString(16),
r[t] = 1 == e.length ? '0' + e : e;
return function (t, e, i) {
return t < 0 && (t = 0),
e < 0 && (e = 0),
i < 0 && (i = 0),
'#' + r[t] + r[e] + r[i]
}
}();
function fillToRgba(t, e) {
if (!cachedColors[t]) {
var r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
cachedColors[t] = parseInt(r[1], 16) + ',' + parseInt(r[2], 16) + ',' + parseInt(r[3], 16)
}
return 'rgba(' + cachedColors[t] + ',' + e + ')'
}
var fillColorToString = (colorMap = [
], function (t, e) {
return void 0 !== e && (t[3] = e),
colorMap[t[0]] || (colorMap[t[0]] = {
}),
colorMap[t[0]][t[1]] || (colorMap[t[0]][t[1]] = {
}),
colorMap[t[0]][t[1]][t[2]] || (colorMap[t[0]][t[1]][t[2]] = {
}),
colorMap[t[0]][t[1]][t[2]][t[3]] || (colorMap[t[0]][t[1]][t[2]][t[3]] = 'rgba(' + t.join(',') + ')'),
colorMap[t[0]][t[1]][t[2]][t[3]]
}),
colorMap;
function RenderedFrame(t, e) {
this.tr = t,
this.o = e
}
function iterateDynamicProperties(t) {
var e,
r = this.dynamicProperties;
for (e = 0; e < r; e += 1) this.dynamicProperties[e].getValue(t)
}
function reversePath(t) {
var e,
r,
i = [
],
n = [
],
s = [
],
o = {
},
a = 0;
t.c && (i[0] = t.o[0], n[0] = t.i[0], s[0] = t.v[0], a = 1);
var l = (r = t.i.length) - 1;
for (e = a; e < r; e += 1) i.push(t.o[l]),
n.push(t.i[l]),
s.push(t.v[l]),
l -= 1;
return o.i = i,
o.o = n,
o.v = s,
o
}
var Matrix = function () {
function t() {
return this.props[0] = 1,
this.props[1] = 0,
this.props[2] = 0,
this.props[3] = 0,
this.props[4] = 0,
this.props[5] = 1,
this.props[6] = 0,
this.props[7] = 0,
this.props[8] = 0,
this.props[9] = 0,
this.props[10] = 1,
this.props[11] = 0,
this.props[12] = 0,
this.props[13] = 0,
this.props[14] = 0,
this.props[15] = 1,
this
}
function e(t) {
if (0 === t) return this;
var e = Math.cos(t),
r = Math.sin(t);
return this._t(e, - r, 0, 0, r, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
}
function r(t) {
if (0 === t) return this;
var e = Math.cos(t),
r = Math.sin(t);
return this._t(1, 0, 0, 0, 0, e, - r, 0, 0, r, e, 0, 0, 0, 0, 1)
}
function i(t) {
if (0 === t) return this;
var e = Math.cos(t),
r = Math.sin(t);
return this._t(e, 0, r, 0, 0, 1, 0, 0, - r, 0, e, 0, 0, 0, 0, 1)
}
function n(t) {
if (0 === t) return this;
var e = Math.cos(t),
r = Math.sin(t);
return this._t(e, - r, 0, 0, r, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
}
function s(t, e) {
return this._t(1, e, t, 1, 0, 0)
}
function o(t, e) {
return this.shear(Math.tan(t), Math.tan(e))
}
function a(t, e) {
var r = Math.cos(e),
i = Math.sin(e);
return this._t(r, i, 0, 0, - i, r, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, Math.tan(t), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(r, - i, 0, 0, i, r, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
}
function l(t, e, r) {
return r = isNaN(r) ? 1 : r,
1 == t && 1 == e && 1 == r ? this : this._t(t, 0, 0, 0, 0, e, 0, 0, 0, 0, r, 0, 0, 0, 0, 1)
}
function c(t, e, r, i, n, s, o, a, l, c, h, d, u, p, _, f) {
return this.props[0] = t,
this.props[1] = e,
this.props[2] = r,
this.props[3] = i,
this.props[4] = n,
this.props[5] = s,
this.props[6] = o,
this.props[7] = a,
this.props[8] = l,
this.props[9] = c,
this.props[10] = h,
this.props[11] = d,
this.props[12] = u,
this.props[13] = p,
this.props[14] = _,
this.props[15] = f,
this
}
function h(t, e, r) {
return r = r || 0,
0 !== t || 0 !== e || 0 !== r ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t, e, r, 1)  : this
}
function d(t, e, r, i, n, s, o, a, l, c, h, d, u, p, _, f) {
if (1 === t && 0 === e && 0 === r && 0 === i && 0 === n && 1 === s && 0 === o && 0 === a && 0 === l && 0 === c && 1 === h && 0 === d) return 0 === u && 0 === p && 0 === _ || (this.props[12] = this.props[12] * t + this.props[13] * n + this.props[14] * l + this.props[15] * u, this.props[13] = this.props[12] * e + this.props[13] * s + this.props[14] * c + this.props[15] * p, this.props[14] = this.props[12] * r + this.props[13] * o + this.props[14] * h + this.props[15] * _, this.props[15] = this.props[12] * i + this.props[13] * a + this.props[14] * d + this.props[15] * f),
this._identityCalculated = !1,
this;
var m = this.props[0],
g = this.props[1],
v = this.props[2],
b = this.props[3],
y = this.props[4],
E = this.props[5],
w = this.props[6],
O = this.props[7],
P = this.props[8],
C = this.props[9],
x = this.props[10],
A = this.props[11],
M = this.props[12],
D = this.props[13],
k = this.props[14],
T = this.props[15];
return this.props[0] = m * t + g * n + v * l + b * u,
this.props[1] = m * e + g * s + v * c + b * p,
this.props[2] = m * r + g * o + v * h + b * _,
this.props[3] = m * i + g * a + v * d + b * f,
this.props[4] = y * t + E * n + w * l + O * u,
this.props[5] = y * e + E * s + w * c + O * p,
this.props[6] = y * r + E * o + w * h + O * _,
this.props[7] = y * i + E * a + w * d + O * f,
this.props[8] = P * t + C * n + x * l + A * u,
this.props[9] = P * e + C * s + x * c + A * p,
this.props[10] = P * r + C * o + x * h + A * _,
this.props[11] = P * i + C * a + x * d + A * f,
this.props[12] = M * t + D * n + k * l + T * u,
this.props[13] = M * e + D * s + k * c + T * p,
this.props[14] = M * r + D * o + k * h + T * _,
this.props[15] = M * i + D * a + k * d + T * f,
this._identityCalculated = !1,
this
}
function u() {
return this._identityCalculated || (this._identity = !(1 !== this.props[0] || 0 !== this.props[1] || 0 !== this.props[2] || 0 !== this.props[3] || 0 !== this.props[4] || 1 !== this.props[5] || 0 !== this.props[6] || 0 !== this.props[7] || 0 !== this.props[8] || 0 !== this.props[9] || 1 !== this.props[10] || 0 !== this.props[11] || 0 !== this.props[12] || 0 !== this.props[13] || 0 !== this.props[14] || 1 !== this.props[15]), this._identityCalculated = !0),
this._identity
}
function p(t) {
var e;
for (e = 0; e < 16; e += 1) t.props[e] = this.props[e]
}
function _(t) {
var e;
for (e = 0; e < 16; e += 1) this.props[e] = t[e]
}
function f(t, e, r) {
return {
x: t * this.props[0] + e * this.props[4] + r * this.props[8] + this.props[12],
y: t * this.props[1] + e * this.props[5] + r * this.props[9] + this.props[13],
z: t * this.props[2] + e * this.props[6] + r * this.props[10] + this.props[14]
}
}
function m(t, e, r) {
return t * this.props[0] + e * this.props[4] + r * this.props[8] + this.props[12]
}
function g(t, e, r) {
return t * this.props[1] + e * this.props[5] + r * this.props[9] + this.props[13]
}
function v(t, e, r) {
return t * this.props[2] + e * this.props[6] + r * this.props[10] + this.props[14]
}
function b(t) {
var e = this.props[0] * this.props[5] - this.props[1] * this.props[4],
r = this.props[5] / e,
i = - this.props[1] / e,
n = - this.props[4] / e,
s = this.props[0] / e,
o = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / e,
a = - (this.props[0] * this.props[13] - this.props[1] * this.props[12]) / e;
return [t[0] * r + t[1] * n + o,
t[0] * i + t[1] * s + a,
0]
}
function y(t) {
var e,
r = t.length,
i = [
];
for (e = 0; e < r; e += 1) i[e] = b(t[e]);
return i
}
function E(t, e, r, i) {
if (i && 2 === i) {
var n = point_pool.newPoint();
return n[0] = t * this.props[0] + e * this.props[4] + r * this.props[8] + this.props[12],
n[1] = t * this.props[1] + e * this.props[5] + r * this.props[9] + this.props[13],
n
}
return [t * this.props[0] + e * this.props[4] + r * this.props[8] + this.props[12],
t * this.props[1] + e * this.props[5] + r * this.props[9] + this.props[13],
t * this.props[2] + e * this.props[6] + r * this.props[10] + this.props[14]]
}
function w(t, e) {
return this.isIdentity() ? t + ',' + e : bm_rnd(t * this.props[0] + e * this.props[4] + this.props[12]) + ',' + bm_rnd(t * this.props[1] + e * this.props[5] + this.props[13])
}
function O() {
return [this.props[0],
this.props[1],
this.props[2],
this.props[3],
this.props[4],
this.props[5],
this.props[6],
this.props[7],
this.props[8],
this.props[9],
this.props[10],
this.props[11],
this.props[12],
this.props[13],
this.props[14],
this.props[15]]
}
function P() {
return isSafari ? 'matrix3d(' + roundTo2Decimals(this.props[0]) + ',' + roundTo2Decimals(this.props[1]) + ',' + roundTo2Decimals(this.props[2]) + ',' + roundTo2Decimals(this.props[3]) + ',' + roundTo2Decimals(this.props[4]) + ',' + roundTo2Decimals(this.props[5]) + ',' + roundTo2Decimals(this.props[6]) + ',' + roundTo2Decimals(this.props[7]) + ',' + roundTo2Decimals(this.props[8]) + ',' + roundTo2Decimals(this.props[9]) + ',' + roundTo2Decimals(this.props[10]) + ',' + roundTo2Decimals(this.props[11]) + ',' + roundTo2Decimals(this.props[12]) + ',' + roundTo2Decimals(this.props[13]) + ',' + roundTo2Decimals(this.props[14]) + ',' + roundTo2Decimals(this.props[15]) + ')' : (this.cssParts[1] = this.props.join(','), this.cssParts.join(''))
}
function C() {
return 'matrix(' + roundTo2Decimals(this.props[0]) + ',' + roundTo2Decimals(this.props[1]) + ',' + roundTo2Decimals(this.props[4]) + ',' + roundTo2Decimals(this.props[5]) + ',' + roundTo2Decimals(this.props[12]) + ',' + roundTo2Decimals(this.props[13]) + ')'
}
function x() {
return '' + this.toArray()
}
return function () {
this.reset = t,
this.rotate = e,
this.rotateX = r,
this.rotateY = i,
this.rotateZ = n,
this.skew = o,
this.skewFromAxis = a,
this.shear = s,
this.scale = l,
this.setTransform = c,
this.translate = h,
this.transform = d,
this.applyToPoint = f,
this.applyToX = m,
this.applyToY = g,
this.applyToZ = v,
this.applyToPointArray = E,
this.applyToPointStringified = w,
this.toArray = O,
this.toCSS = P,
this.to2dCSS = C,
this.toString = x,
this.clone = p,
this.cloneFromProps = _,
this.inversePoints = y,
this.inversePoint = b,
this._t = this.transform,
this.isIdentity = u,
this._identity = !0,
this._identityCalculated = !1,
this.props = [
1,
0,
0,
0,
0,
1,
0,
0,
0,
0,
1,
0,
0,
0,
0,
1
],
this.cssParts = [
'matrix3d(',
'',
')'
]
}
}();
function Matrix() {
}
!function (t, e) {
var r,
i = this,
n = 256,
s = 6,
o = 'random',
a = e.pow(n, s),
l = e.pow(2, 52),
c = 2 * l,
h = n - 1;
function d(t) {
var e,
r = t.length,
i = this,
s = 0,
o = i.i = i.j = 0,
a = i.S = [
];
for (r || (t = [
r++
]); s < n; ) a[s] = s++;
for (s = 0; s < n; s++) a[s] = a[o = h & o + t[s % r] + (e = a[s])],
a[o] = e;
(i.g = function (t) {
for (var e, r = 0, s = i.i, o = i.j, a = i.S; t--; ) e = a[s = h & s + 1],
r = r * n + a[h & (a[s] = a[o = h & o + e]) + (a[o] = e)];
return i.i = s,
i.j = o,
r
}) (n)
}
function u(t, e) {
return e.i = t.i,
e.j = t.j,
e.S = t.S.slice(),
e
}
function p(t, e) {
for (var r, i = t + '', n = 0; n < i.length; ) e[h & n] = h & (r ^= 19 * e[h & n]) + i.charCodeAt(n++);
return _(e)
}
function _(t) {
return String.fromCharCode.apply(0, t)
}
e['seed' + o] = function (h, f, m) {
var g = [
],
v = p(function t(e, r) {
var i,
n = [
],
s = typeof e;
if (r && 'object' == s) for (i in e) try {
n.push(t(e[i], r - 1))
} catch (t) {
}
return n.length ? n : 'string' == s ? e : e + '\0'
}((f = 1 == f ? {
entropy: !0
}
 : f || {
}).entropy ? [
h,
_(t)
] : null == h ? function () {
try {
if (r) return _(r.randomBytes(n));
var e = new Uint8Array(n);
return (i.crypto || i.msCrypto).getRandomValues(e),
_(e)
} catch (e) {
var s = i.navigator,
o = s && s.plugins;
return [ + new Date,
i,
o,
i.screen,
_(t)]
}
}()  : h, 3), g),
b = new d(g),
y = function () {
for (var t = b.g(s), e = a, r = 0; t < l; ) t = (t + r) * n,
e *= n,
r = b.g(1);
for (; t >= c; ) t /= 2,
e /= 2,
r >>>= 1;
return (t + r) / e
};
return y.int32 = function () {
return 0 | b.g(4)
},
y.quick = function () {
return b.g(4) / 4294967296
},
y.double = y,
p(_(b.S), t),
(f.pass || m || function (t, r, i, n) {
return n && (n.S && u(n, b), t.state = function () {
return u(b, {
})
}),
i ? (e[o] = t, r)  : t
}) (y, v, 'global' in f ? f.global : this == e, f.state)
},
p(e.random(), t)
}([], BMMath);
var BezierFactory = function () {
var t = {
getBezierEasing: function (t, r, i, n, s) {
var o = s || ('bez_' + t + '_' + r + '_' + i + '_' + n).replace(/\./g, 'p');
if (e[o]) return e[o];
var a = new p([t,
r,
i,
n]);
return e[o] = a,
a
}
},
e = {
},
r = 4,
i = 1e-7,
n = 10,
s = 11,
o = 1 / (s - 1),
a = 'function' == typeof Float32Array;
function l(t, e) {
return 1 - 3 * e + 3 * t
}
function c(t, e) {
return 3 * e - 6 * t
}
function h(t) {
return 3 * t
}
function d(t, e, r) {
return ((l(e, r) * t + c(e, r)) * t + h(e)) * t
}
function u(t, e, r) {
return 3 * l(e, r) * t * t + 2 * c(e, r) * t + h(e)
}
function p(t) {
this._p = t,
this._mSampleValues = a ? new Float32Array(s)  : new Array(s),
this._precomputed = !1,
this.get = this.get.bind(this)
}
return p.prototype = {
get: function (t) {
var e = this._p[0],
r = this._p[1],
i = this._p[2],
n = this._p[3];
return this._precomputed || this._precompute(),
e === r && i === n ? t : 0 === t ? 0 : 1 === t ? 1 : d(this._getTForX(t), r, n)
},
_precompute: function () {
var t = this._p[0],
e = this._p[1],
r = this._p[2],
i = this._p[3];
this._precomputed = !0,
t === e && r === i || this._calcSampleValues()
},
_calcSampleValues: function () {
for (var t = this._p[0], e = this._p[2], r = 0; r < s; ++r) this._mSampleValues[r] = d(r * o, t, e)
},
_getTForX: function (t) {
for (var e = this._p[0], a = this._p[2], l = this._mSampleValues, c = 0, h = 1, p = s - 1; h !== p && l[h] <= t; ++h) c += o;
var _ = c + (t - l[--h]) / (l[h + 1] - l[h]) * o,
f = u(_, e, a);
return f >= 0.001 ? function (t, e, i, n) {
for (var s = 0; s < r; ++s) {
var o = u(e, i, n);
if (0 === o) return e;
e -= (d(e, i, n) - t) / o
}
return e
}(t, _, e, a)  : 0 === f ? _ : function (t, e, r, s, o) {
var a,
l,
c = 0;
do {
(a = d(l = e + (r - e) / 2, s, o) - t) > 0 ? r = l : e = l
} while (Math.abs(a) > i && ++c < n);
return l
}(t, c, c + o, e, a)
}
},
t
}();
function createElement(t, e, r) {
if (!e) {
var i = Object.create(t.prototype, r);
return i && '[object Function]' === {
}.toString.call(i.init) && i.init(),
i
}
e.prototype = Object.create(t.prototype),
e.prototype.constructor = e,
e.prototype._parent = t.prototype
}
function extendPrototype(t, e) {
for (var r in t.prototype) t.prototype.hasOwnProperty(r) && (e.prototype[r] = t.prototype[r])
}
function bezFunction() {
function t(t, e, r, i, n, s) {
var o = t * i + e * n + r * s - n * i - s * t - r * e;
return o > - 0.0001 && o < 0.0001
}
Math;
var e = function () {
function t(t, e) {
this.l = t,
this.p = e
}
return function (e, r, i, n) {
var s,
o,
a,
l,
c,
h,
d = defaultCurveSegments,
u = 0,
p = [
],
_ = [
],
f = {
addedLength: 0,
segments: [
]
};
for (a = i.length, s = 0; s < d; s += 1) {
for (c = s / (d - 1), h = 0, o = 0; o < a; o += 1) l = bm_pow(1 - c, 3) * e[o] + 3 * bm_pow(1 - c, 2) * c * i[o] + 3 * (1 - c) * bm_pow(c, 2) * n[o] + bm_pow(c, 3) * r[o],
p[o] = l,
null !== _[o] && (h += bm_pow(p[o] - _[o], 2)),
_[o] = p[o];
h && (u += h = bm_sqrt(h)),
f.segments.push(new t(u, c))
}
return f.addedLength = u,
f
}
}();
function r(t) {
this.segmentLength = 0,
this.points = new Array(t)
}
function i(t, e) {
this.partialLength = t,
this.point = e
}
var n,
s = (n = {
}, function (e) {
var s = e.s,
o = e.e,
a = e.to,
l = e.ti,
c = (s.join('_') + '_' + o.join('_') + '_' + a.join('_') + '_' + l.join('_')).replace(/\./g, 'p');
if (n[c]) e.bezierData = n[c];
 else {
var h,
d,
u,
p,
_,
f,
m,
g = defaultCurveSegments,
v = 0,
b = null;
2 === s.length && (s[0] != o[0] || s[1] != o[1]) && t(s[0], s[1], o[0], o[1], s[0] + a[0], s[1] + a[1]) && t(s[0], s[1], o[0], o[1], o[0] + l[0], o[1] + l[1]) && (g = 2);
var y = new r(g);
for (u = a.length, h = 0; h < g; h += 1) {
for (m = new Array(u), _ = h / (g - 1), f = 0, d = 0; d < u; d += 1) p = bm_pow(1 - _, 3) * s[d] + 3 * bm_pow(1 - _, 2) * _ * (s[d] + a[d]) + 3 * (1 - _) * bm_pow(_, 2) * (o[d] + l[d]) + bm_pow(_, 3) * o[d],
m[d] = p,
null !== b && (f += bm_pow(m[d] - b[d], 2));
v += f = bm_sqrt(f),
y.points[h] = new i(f, m),
b = m
}
y.segmentLength = v,
e.bezierData = y,
n[c] = y
}
});
function o(t, e) {
var r = e.segments,
i = r.length,
n = bm_floor((i - 1) * t),
s = t * e.addedLength,
o = 0;
if (s == r[n].l) return r[n].p;
for (var a = r[n].l > s ? - 1 : 1, l = !0; l; ) r[n].l <= s && r[n + 1].l > s ? (o = (s - r[n].l) / (r[n + 1].l - r[n].l), l = !1)  : n += a,
(n < 0 || n >= i - 1) && (l = !1);
return r[n].p + (r[n + 1].p - r[n].p) * o
}
function a() {
this.pt1 = new Array(2),
this.pt2 = new Array(2),
this.pt3 = new Array(2),
this.pt4 = new Array(2)
}
return {
getBezierLength: e,
getSegmentsLength: function (t) {
var r,
i = t.c,
n = t.v,
s = t.o,
o = t.i,
a = t._length,
l = [
],
c = 0;
for (r = 0; r < a - 1; r += 1) l[r] = e(n[r], n[r + 1], s[r], o[r + 1]),
c += l[r].addedLength;
return i && (l[r] = e(n[r], n[0], s[r], o[0]), c += l[r].addedLength),
{
lengths: l,
totalLength: c
}
},
getNewSegment: function (t, e, r, i, n, s, l) {
var c,
h = new a,
d = o(n = n < 0 ? 0 : n > 1 ? 1 : n, l),
u = o(s = s > 1 ? 1 : s, l),
p = t.length,
_ = 1 - d,
f = 1 - u;
for (c = 0; c < p; c += 1) h.pt1[c] = Math.round(1000 * (_ * _ * _ * t[c] + (d * _ * _ + _ * d * _ + _ * _ * d) * r[c] + (d * d * _ + _ * d * d + d * _ * d) * i[c] + d * d * d * e[c])) / 1000,
h.pt3[c] = Math.round(1000 * (_ * _ * f * t[c] + (d * _ * f + _ * d * f + _ * _ * u) * r[c] + (d * d * f + _ * d * u + d * _ * u) * i[c] + d * d * u * e[c])) / 1000,
h.pt4[c] = Math.round(1000 * (_ * f * f * t[c] + (d * f * f + _ * u * f + _ * f * u) * r[c] + (d * u * f + _ * u * u + d * f * u) * i[c] + d * u * u * e[c])) / 1000,
h.pt2[c] = Math.round(1000 * (f * f * f * t[c] + (u * f * f + f * u * f + f * f * u) * r[c] + (u * u * f + f * u * u + u * f * u) * i[c] + u * u * u * e[c])) / 1000;
return h
},
getPointInSegment: function (t, e, r, i, n, s) {
var a = o(n, s),
l = 1 - a;
return [Math.round(1000 * (l * l * l * t[0] + (a * l * l + l * a * l + l * l * a) * r[0] + (a * a * l + l * a * a + a * l * a) * i[0] + a * a * a * e[0])) / 1000,
Math.round(1000 * (l * l * l * t[1] + (a * l * l + l * a * l + l * l * a) * r[1] + (a * a * l + l * a * a + a * l * a) * i[1] + a * a * a * e[1])) / 1000]
},
buildBezierData: s,
pointOnLine2D: t,
pointOnLine3D: function (e, r, i, n, s, o, a, l, c) {
if (0 === i && 0 === o && 0 === c) return t(e, r, n, s, a, l);
var h,
d = Math.sqrt(Math.pow(n - e, 2) + Math.pow(s - r, 2) + Math.pow(o - i, 2)),
u = Math.sqrt(Math.pow(a - e, 2) + Math.pow(l - r, 2) + Math.pow(c - i, 2)),
p = Math.sqrt(Math.pow(a - n, 2) + Math.pow(l - s, 2) + Math.pow(c - o, 2));
return (h = d > u ? d > p ? d - u - p : p - u - d : p > u ? p - u - d : u - d - p) > - 0.0001 && h < 0.0001
}
}
}
!function () {
for (var t = 0, e = [
'ms',
'moz',
'webkit',
'o'
], r = 0; r < e.length && !window.requestAnimationFrame; ++r) window.requestAnimationFrame = window[e[r] + 'RequestAnimationFrame'],
window.cancelAnimationFrame = window[e[r] + 'CancelAnimationFrame'] || window[e[r] + 'CancelRequestAnimationFrame'];
window.requestAnimationFrame || (window.requestAnimationFrame = function (e, r) {
var i = (new Date).getTime(),
n = Math.max(0, 16 - (i - t)),
s = setTimeout(function () {
e(i + n)
}, n);
return t = i + n,
s
}),
window.cancelAnimationFrame || (window.cancelAnimationFrame = function (t) {
clearTimeout(t)
})
}();
var bez = bezFunction();
function dataFunctionManager() {
function t(t, e) {
for (var r = 0, i = e.length; r < i; ) {
if (e[r].id === t) return e[r].layers.__used ? JSON.parse(JSON.stringify(e[r].layers))  : (e[r].layers.__used = !0, e[r].layers);
r += 1
}
}
function e(t) {
var i,
n,
s;
for (i = t.length - 1; i >= 0; i -= 1) if ('sh' == t[i].ty) if (t[i].ks.k.i) r(t[i].ks.k);
 else for (s = t[i].ks.k.length, n = 0; n < s; n += 1) t[i].ks.k[n].s && r(t[i].ks.k[n].s[0]),
t[i].ks.k[n].e && r(t[i].ks.k[n].e[0]);
 else 'gr' == t[i].ty && e(t[i].it)
}
function r(t) {
var e,
r = t.i.length;
for (e = 0; e < r; e += 1) t.i[e][0] += t.v[e][0],
t.i[e][1] += t.v[e][1],
t.o[e][0] += t.v[e][0],
t.o[e][1] += t.v[e][1]
}
function i(t, e) {
var r = e ? e.split('.')  : [
100,
100,
100
];
return t[0] > r[0] || !(r[0] > t[0]) && (t[1] > r[1] || !(r[1] > t[1]) && (t[2] > r[2] || !(r[2] > t[2]) && void 0))
}
var n,
s = function () {
var t = [
4,
4,
14
];
function e(t) {
var e,
r,
i,
n = t.length;
for (e = 0; e < n; e += 1) 5 === t[e].ty && (r = t[e], i = void 0, i = r.t.d, r.t.d = {
k: [
{
s: i,
t: 0
}
]
})
}
return function (r) {
if (i(t, r.v) && (e(r.layers), r.assets)) {
var n,
s = r.assets.length;
for (n = 0; n < s; n += 1) r.assets[n].layers && e(r.assets[n].layers)
}
}
}(),
o = (n = [
4,
7,
99
], function (t) {
if (t.chars && !i(n, t.v)) {
var e,
s,
o,
a,
l,
c = t.chars.length;
for (e = 0; e < c; e += 1) if (t.chars[e].data && t.chars[e].data.shapes) for (o = (l = t.chars[e].data.shapes[0].it).length, s = 0; s < o; s += 1) (a = l[s].ks.k).__converted || (r(l[s].ks.k), a.__converted = !0)
}
}),
a = function () {
var t = [
4,
1,
9
];
function e(t) {
var r,
i,
n,
s = t.length;
for (r = 0; r < s; r += 1) if ('gr' === t[r].ty) e(t[r].it);
 else if ('fl' === t[r].ty || 'st' === t[r].ty) if (t[r].c.k && t[r].c.k[0].i) for (n = t[r].c.k.length, i = 0; i < n; i += 1) t[r].c.k[i].s && (t[r].c.k[i].s[0] /= 255, t[r].c.k[i].s[1] /= 255, t[r].c.k[i].s[2] /= 255, t[r].c.k[i].s[3] /= 255),
t[r].c.k[i].e && (t[r].c.k[i].e[0] /= 255, t[r].c.k[i].e[1] /= 255, t[r].c.k[i].e[2] /= 255, t[r].c.k[i].e[3] /= 255);
 else t[r].c.k[0] /= 255,
t[r].c.k[1] /= 255,
t[r].c.k[2] /= 255,
t[r].c.k[3] /= 255
}
function r(t) {
var r,
i = t.length;
for (r = 0; r < i; r += 1) 4 === t[r].ty && e(t[r].shapes)
}
return function (e) {
if (i(t, e.v) && (r(e.layers), e.assets)) {
var n,
s = e.assets.length;
for (n = 0; n < s; n += 1) e.assets[n].layers && r(e.assets[n].layers)
}
}
}(),
l = function () {
var t = [
4,
4,
18
];
function e(t) {
var r,
i,
n;
for (r = t.length - 1; r >= 0; r -= 1) if ('sh' == t[r].ty) if (t[r].ks.k.i) t[r].ks.k.c = t[r].closed;
 else for (n = t[r].ks.k.length, i = 0; i < n; i += 1) t[r].ks.k[i].s && (t[r].ks.k[i].s[0].c = t[r].closed),
t[r].ks.k[i].e && (t[r].ks.k[i].e[0].c = t[r].closed);
 else 'gr' == t[r].ty && e(t[r].it)
}
function r(t) {
var r,
i,
n,
s,
o,
a,
l = t.length;
for (i = 0; i < l; i += 1) {
if ((r = t[i]).hasMask) {
var c = r.masksProperties;
for (s = c.length, n = 0; n < s; n += 1) if (c[n].pt.k.i) c[n].pt.k.c = c[n].cl;
 else for (a = c[n].pt.k.length, o = 0; o < a; o += 1) c[n].pt.k[o].s && (c[n].pt.k[o].s[0].c = c[n].cl),
c[n].pt.k[o].e && (c[n].pt.k[o].e[0].c = c[n].cl)
}
4 === r.ty && e(r.shapes)
}
}
return function (e) {
if (i(t, e.v) && (r(e.layers), e.assets)) {
var n,
s = e.assets.length;
for (n = 0; n < s; n += 1) e.assets[n].layers && r(e.assets[n].layers)
}
}
}();
var c = {
};
return c.completeData = function (i, n) {
i.__complete || (a(i), s(i), o(i), l(i), function i(n, s, o) {
var a,
l,
c,
h,
d,
u,
p,
_ = n.length;
for (l = 0; l < _; l += 1) if ('ks' in (a = n[l]) && !a.completed) {
if (a.completed = !0, a.tt && (n[l - 1].td = a.tt), a.hasMask) {
var f = a.masksProperties;
for (h = f.length, c = 0; c < h; c += 1) if (f[c].pt.k.i) r(f[c].pt.k);
 else for (u = f[c].pt.k.length, d = 0; d < u; d += 1) f[c].pt.k[d].s && r(f[c].pt.k[d].s[0]),
f[c].pt.k[d].e && r(f[c].pt.k[d].e[0])
}
0 === a.ty ? (a.layers = t(a.refId, s), i(a.layers, s, o))  : 4 === a.ty ? e(a.shapes)  : 5 == a.ty && (0 !== (p = a).t.a.length || 'm' in p.t.p || (p.singleShape = !0))
}
}(i.layers, i.assets, n), i.__complete = !0)
},
c
}
var dataManager = dataFunctionManager(),
FontManager = function () {
var t = 5000;
function e(t, e) {
var r = document.createElement('span');
r.style.fontFamily = e;
var i = document.createElement('span');
i.innerHTML = 'giItT1WQy@!-/#',
r.style.position = 'absolute',
r.style.left = '-10000px',
r.style.top = '-10000px',
r.style.fontSize = '300px',
r.style.fontVariant = 'normal',
r.style.fontStyle = 'normal',
r.style.fontWeight = 'normal',
r.style.letterSpacing = '0',
r.appendChild(i),
document.body.appendChild(r);
var n = i.offsetWidth;
return i.style.fontFamily = t + ', ' + e,
{
node: i,
w: n,
parent: r
}
}
function r(t, e) {
var r = document.createElementNS(svgNS, 'text');
r.style.fontSize = '100px',
r.style.fontFamily = e.fFamily,
r.textContent = '1',
e.fClass ? (r.style.fontFamily = 'inherit', r.className = e.fClass)  : r.style.fontFamily = e.fFamily,
t.appendChild(r);
var i = document.createElement('canvas').getContext('2d');
return i.font = '100px ' + e.fFamily,
i
}
var i = function () {
this.fonts = [
],
this.chars = null,
this.typekitLoaded = 0,
this.loaded = !1,
this.initTime = Date.now()
};
return i.prototype.addChars = function (t) {
if (t) {
this.chars || (this.chars = [
]);
var e,
r,
i,
n = t.length,
s = this.chars.length;
for (e = 0; e < n; e += 1) {
for (r = 0, i = !1; r < s; ) this.chars[r].style === t[e].style && this.chars[r].fFamily === t[e].fFamily && this.chars[r].ch === t[e].ch && (i = !0),
r += 1;
i || (this.chars.push(t[e]), s += 1)
}
}
},
i.prototype.addFonts = function (i, n) {
if (i) {
if (this.chars) return this.loaded = !0,
void (this.fonts = i.list);
var s,
o = i.list,
a = o.length;
for (s = 0; s < a; s += 1) {
if (o[s].loaded = !1, o[s].monoCase = e(o[s].fFamily, 'monospace'), o[s].sansCase = e(o[s].fFamily, 'sans-serif'), o[s].fPath) {
if ('p' === o[s].fOrigin || 3 === o[s].origin) {
var l = document.createElement('style');
l.type = 'text/css',
l.innerHTML = '@font-face {font-family: ' + o[s].fFamily + '; font-style: normal; src: url(\'' + o[s].fPath + '\');}',
n.appendChild(l)
} else if ('g' === o[s].fOrigin || 1 === o[s].origin) {
var c = document.createElement('link');
c.type = 'text/css',
c.rel = 'stylesheet',
c.href = o[s].fPath,
n.appendChild(c)
} else if ('t' === o[s].fOrigin || 2 === o[s].origin) {
var h = document.createElement('script');
h.setAttribute('src', o[s].fPath),
n.appendChild(h)
}
} else o[s].loaded = !0;
o[s].helper = r(n, o[s]),
this.fonts.push(o[s])
}(function e() {
var r,
i,
n,
s = this.fonts.length,
o = s;
for (r = 0; r < s; r += 1) if (this.fonts[r].loaded) o -= 1;
 else if ('t' === this.fonts[r].fOrigin || 2 === this.fonts[r].origin) {
if (window.Typekit && window.Typekit.load && 0 === this.typekitLoaded) {
this.typekitLoaded = 1;
try {
window.Typekit.load({
async: !0,
active: function () {
this.typekitLoaded = 2
}.bind(this)
})
} catch (t) {
}
}
2 === this.typekitLoaded && (this.fonts[r].loaded = !0)
} else 'n' === this.fonts[r].fOrigin || 0 === this.fonts[r].origin ? this.fonts[r].loaded = !0 : (i = this.fonts[r].monoCase.node, n = this.fonts[r].monoCase.w, i.offsetWidth !== n ? (o -= 1, this.fonts[r].loaded = !0)  : (i = this.fonts[r].sansCase.node, n = this.fonts[r].sansCase.w, i.offsetWidth !== n && (o -= 1, this.fonts[r].loaded = !0)), this.fonts[r].loaded && (this.fonts[r].sansCase.parent.parentNode.removeChild(this.fonts[r].sansCase.parent), this.fonts[r].monoCase.parent.parentNode.removeChild(this.fonts[r].monoCase.parent)));
0 !== o && Date.now() - this.initTime < t ? setTimeout(e.bind(this), 20)  : setTimeout(function () {
this.loaded = !0
}.bind(this), 0)
}).bind(this) ()
} else this.loaded = !0
},
i.prototype.getCharData = function (t, e, r) {
for (var i = 0, n = this.chars.length; i < n; ) {
if (this.chars[i].ch === t && this.chars[i].style === e && this.chars[i].fFamily === r) return this.chars[i];
i += 1
}
},
i.prototype.getFontByName = function (t) {
for (var e = 0, r = this.fonts.length; e < r; ) {
if (this.fonts[e].fName === t) return this.fonts[e];
e += 1
}
return 'sans-serif'
},
i.prototype.measureText = function (t, e, r) {
return this.getFontByName(e).helper.measureText(t).width * r / 100
},
i
}(),
PropertyFactory = function () {
var t = - 999999;
function e(t, e, r, i) {
var n,
s = this.offsetTime;
r.constructor === Array && (n = Array.apply(null, {
length: r.length
}));
for (var o, a, l, c, h, d, u, p, _ = e, f = this.keyframes.length - 1, m = !0; m; ) {
if (o = this.keyframes[_], a = this.keyframes[_ + 1], _ == f - 1 && t >= a.t - s) {
o.h && (o = a),
e = 0;
break
}
if (a.t - s > t) {
e = _;
break
}
_ < f - 1 ? _ += 1 : (e = 0, m = !1)
}
if (o.to) {
o.bezierData || bez.buildBezierData(o);
var g = o.bezierData;
if (t >= a.t - s || t < o.t - s) {
var v = t >= a.t - s ? g.points.length - 1 : 0;
for (c = g.points[v].point.length, l = 0; l < c; l += 1) n[l] = g.points[v].point[l];
i._lastBezierData = null
} else {
o.__fnct ? p = o.__fnct : (p = BezierFactory.getBezierEasing(o.o.x, o.o.y, o.i.x, o.i.y, o.n).get, o.__fnct = p),
h = p((t - (o.t - s)) / (a.t - s - (o.t - s)));
var b,
y = g.segmentLength * h,
E = i.lastFrame < t && i._lastBezierData === g ? i._lastAddedLength : 0;
for (u = i.lastFrame < t && i._lastBezierData === g ? i._lastPoint : 0, m = !0, d = g.points.length; m; ) {
if (E += g.points[u].partialLength, 0 === y || 0 === h || u == g.points.length - 1) {
for (c = g.points[u].point.length, l = 0; l < c; l += 1) n[l] = g.points[u].point[l];
break
}
if (y >= E && y < E + g.points[u + 1].partialLength) {
for (b = (y - E) / g.points[u + 1].partialLength, c = g.points[u].point.length, l = 0; l < c; l += 1) n[l] = g.points[u].point[l] + (g.points[u + 1].point[l] - g.points[u].point[l]) * b;
break
}
u < d - 1 ? u += 1 : m = !1
}
i._lastPoint = u,
i._lastAddedLength = E - g.points[u].partialLength,
i._lastBezierData = g
}
} else {
var w,
O,
P,
C,
x;
for (f = o.s.length, _ = 0; _ < f; _ += 1) {
if (1 !== o.h && (t >= a.t - s ? h = 1 : t < o.t - s ? h = 0 : (o.o.x.constructor === Array ? (o.__fnct || (o.__fnct = [
]), o.__fnct[_] ? p = o.__fnct[_] : (w = o.o.x[_] || o.o.x[0], O = o.o.y[_] || o.o.y[0], P = o.i.x[_] || o.i.x[0], C = o.i.y[_] || o.i.y[0], p = BezierFactory.getBezierEasing(w, O, P, C).get, o.__fnct[_] = p))  : o.__fnct ? p = o.__fnct : (w = o.o.x, O = o.o.y, P = o.i.x, C = o.i.y, p = BezierFactory.getBezierEasing(w, O, P, C).get, o.__fnct = p), h = p((t - (o.t - s)) / (a.t - s - (o.t - s))))), this.sh && 1 !== o.h) {
var A = o.s[_],
M = o.e[_];
A - M < - 180 ? A += 360 : A - M > 180 && (A -= 360),
x = A + (M - A) * h
} else x = 1 === o.h ? o.s[_] : o.s[_] + (o.e[_] - o.s[_]) * h;
1 === f ? n = x : n[_] = x
}
}
return {
value: n,
iterationIndex: e
}
}
function r() {
if (this.elem.globalData.frameId !== this.frameId) {
this.mdf = !1;
var e = this.comp.renderedFrame - this.offsetTime,
r = this.keyframes[0].t - this.offsetTime,
i = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
if (!(e === this._caching.lastFrame || this._caching.lastFrame !== t && (this._caching.lastFrame >= i && e >= i || this._caching.lastFrame < r && e < r))) {
var n = this._caching.lastFrame < e ? this._caching.lastIndex : 0,
s = this.interpolateValue(e, n, this.pv, this._caching);
if (this._caching.lastIndex = s.iterationIndex, this.pv.constructor === Array) for (n = 0; n < this.v.length; ) this.pv[n] = s.value[n],
this.v[n] = this.mult ? this.pv[n] * this.mult : this.pv[n],
this.lastPValue[n] !== this.pv[n] && (this.mdf = !0, this.lastPValue[n] = this.pv[n]),
n += 1;
 else this.pv = s.value,
this.v = this.mult ? this.pv * this.mult : this.pv,
this.lastPValue != this.pv && (this.mdf = !0, this.lastPValue = this.pv)
}
this._caching.lastFrame = e,
this.frameId = this.elem.globalData.frameId
}
}
function i() {
}
function n(t, e, r) {
this.mult = r,
this.v = r ? e.k * r : e.k,
this.pv = e.k,
this.mdf = !1,
this.comp = t.comp,
this.k = !1,
this.kf = !1,
this.vel = 0,
this.getValue = i
}
function s(t, e, r) {
this.mult = r,
this.data = e,
this.mdf = !1,
this.comp = t.comp,
this.k = !1,
this.kf = !1,
this.frameId = - 1,
this.v = Array.apply(null, {
length: e.k.length
}),
this.pv = Array.apply(null, {
length: e.k.length
}),
this.lastValue = Array.apply(null, {
length: e.k.length
});
var n = Array.apply(null, {
length: e.k.length
});
this.vel = n.map(function () {
return 0
});
var s,
o = e.k.length;
for (s = 0; s < o; s += 1) this.v[s] = r ? e.k[s] * r : e.k[s],
this.pv[s] = e.k[s];
this.getValue = i
}
function o(i, n, s) {
this.keyframes = n.k,
this.offsetTime = i.data.st,
this.lastValue = - 99999,
this.lastPValue = - 99999,
this.frameId = - 1,
this._caching = {
lastFrame: t,
lastIndex: 0
},
this.k = !0,
this.kf = !0,
this.data = n,
this.mult = s,
this.elem = i,
this.comp = i.comp,
this.v = s ? n.k[0].s[0] * s : n.k[0].s[0],
this.pv = n.k[0].s[0],
this.getValue = r,
this.interpolateValue = e
}
function a(i, n, s) {
var o,
a,
l,
c,
h,
d = n.k.length;
for (o = 0; o < d - 1; o += 1) n.k[o].to && n.k[o].s && n.k[o].e && (a = n.k[o].s, l = n.k[o].e, c = n.k[o].to, h = n.k[o].ti, (2 === a.length && (a[0] !== l[0] || a[1] !== l[1]) && bez.pointOnLine2D(a[0], a[1], l[0], l[1], a[0] + c[0], a[1] + c[1]) && bez.pointOnLine2D(a[0], a[1], l[0], l[1], l[0] + h[0], l[1] + h[1]) || 3 === a.length && (a[0] !== l[0] || a[1] !== l[1] || a[2] !== l[2]) && bez.pointOnLine3D(a[0], a[1], a[2], l[0], l[1], l[2], a[0] + c[0], a[1] + c[1], a[2] + c[2]) && bez.pointOnLine3D(a[0], a[1], a[2], l[0], l[1], l[2], l[0] + h[0], l[1] + h[1], l[2] + h[2])) && (n.k[o].to = null, n.k[o].ti = null));
this.keyframes = n.k,
this.offsetTime = i.data.st,
this.k = !0,
this.kf = !0,
this.mult = s,
this.elem = i,
this.comp = i.comp,
this._caching = {
lastFrame: t,
lastIndex: 0
},
this.getValue = r,
this.interpolateValue = e,
this.frameId = - 1,
this.v = Array.apply(null, {
length: n.k[0].s.length
}),
this.pv = Array.apply(null, {
length: n.k[0].s.length
}),
this.lastValue = Array.apply(null, {
length: n.k[0].s.length
}),
this.lastPValue = Array.apply(null, {
length: n.k[0].s.length
})
}
var l = function () {
function t() {
return this.p ? ExpressionValue(this.p)  : [
this.px.v,
this.py.v,
this.pz ? this.pz.v : 0
]
}
function e() {
return ExpressionValue(this.px)
}
function r() {
return ExpressionValue(this.py)
}
function i() {
return ExpressionValue(this.a)
}
function n() {
return ExpressionValue(this.or)
}
function s() {
return this.r ? ExpressionValue(this.r, 1 / degToRads)  : ExpressionValue(this.rz, 1 / degToRads)
}
function o() {
return ExpressionValue(this.s, 100)
}
function a() {
return ExpressionValue(this.o, 100)
}
function l() {
return ExpressionValue(this.sk)
}
function c() {
return ExpressionValue(this.sa)
}
function h(t) {
var e,
r = this.dynamicProperties.length;
for (e = 0; e < r; e += 1) this.dynamicProperties[e].getValue(),
this.dynamicProperties[e].mdf && (this.mdf = !0);
this.a && t.translate( - this.a.v[0], - this.a.v[1], this.a.v[2]),
this.s && t.scale(this.s.v[0], this.s.v[1], this.s.v[2]),
this.r ? t.rotate( - this.r.v)  : t.rotateZ( - this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ( - this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]),
this.data.p.s ? this.data.p.z ? t.translate(this.px.v, this.py.v, - this.pz.v)  : t.translate(this.px.v, this.py.v, 0)  : t.translate(this.p.v[0], this.p.v[1], - this.p.v[2])
}
function d() {
if (this.elem.globalData.frameId !== this.frameId) {
this.mdf = !1;
var t,
e,
r,
i = this.dynamicProperties.length;
for (t = 0; t < i; t += 1) this.dynamicProperties[t].getValue(),
this.dynamicProperties[t].mdf && (this.mdf = !0);
if (this.mdf) this.v.reset(),
this.a && this.v.translate( - this.a.v[0], - this.a.v[1], this.a.v[2]),
this.s && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]),
this.sk && this.v.skewFromAxis( - this.sk.v, this.sa.v),
this.r ? this.v.rotate( - this.r.v)  : this.v.rotateZ( - this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ( - this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]),
this.autoOriented && this.p.keyframes && this.p.getValueAtTime && (this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t ? (e = this.p.getValueAtTime((this.p.keyframes[0].t + 0.01) / this.elem.globalData.frameRate, 0), r = this.p.getValueAtTime(this.p.keyframes[0].t / this.elem.globalData.frameRate, 0))  : this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t ? (e = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / this.elem.globalData.frameRate, 0), r = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - 0.01) / this.elem.globalData.frameRate, 0))  : (e = this.p.pv, r = this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - 0.01) / this.elem.globalData.frameRate, this.p.offsetTime)), this.v.rotate( - Math.atan2(e[1] - r[1], e[0] - r[0]))),
this.data.p.s ? this.data.p.z ? this.v.translate(this.px.v, this.py.v, - this.pz.v)  : this.v.translate(this.px.v, this.py.v, 0)  : this.v.translate(this.p.v[0], this.p.v[1], - this.p.v[2]);
this.frameId = this.elem.globalData.frameId
}
}
function u() {
this.inverted = !0,
this.iv = new Matrix,
this.k || (this.data.p.s ? this.iv.translate(this.px.v, this.py.v, - this.pz.v)  : this.iv.translate(this.p.v[0], this.p.v[1], - this.p.v[2]), this.r ? this.iv.rotate( - this.r.v)  : this.iv.rotateX( - this.rx.v).rotateY( - this.ry.v).rotateZ(this.rz.v), this.s && this.iv.scale(this.s.v[0], this.s.v[1], 1), this.a && this.iv.translate( - this.a.v[0], - this.a.v[1], this.a.v[2]))
}
function p() {
}
return function (_, f, m) {
this.elem = _,
this.frameId = - 1,
this.type = 'transform',
this.dynamicProperties = [
],
this.mdf = !1,
this.data = f,
this.getValue = d,
this.applyToMatrix = h,
this.setInverted = u,
this.autoOrient = p,
this.v = new Matrix,
f.p.s ? (this.px = PropertyFactory.getProp(_, f.p.x, 0, 0, this.dynamicProperties), this.py = PropertyFactory.getProp(_, f.p.y, 0, 0, this.dynamicProperties), f.p.z && (this.pz = PropertyFactory.getProp(_, f.p.z, 0, 0, this.dynamicProperties)))  : this.p = PropertyFactory.getProp(_, f.p, 1, 0, this.dynamicProperties),
f.r ? this.r = PropertyFactory.getProp(_, f.r, 0, degToRads, this.dynamicProperties)  : f.rx && (this.rx = PropertyFactory.getProp(_, f.rx, 0, degToRads, this.dynamicProperties), this.ry = PropertyFactory.getProp(_, f.ry, 0, degToRads, this.dynamicProperties), this.rz = PropertyFactory.getProp(_, f.rz, 0, degToRads, this.dynamicProperties), this.or = PropertyFactory.getProp(_, f.or, 1, degToRads, this.dynamicProperties), this.or.sh = !0),
f.sk && (this.sk = PropertyFactory.getProp(_, f.sk, 0, degToRads, this.dynamicProperties), this.sa = PropertyFactory.getProp(_, f.sa, 0, degToRads, this.dynamicProperties)),
f.a && (this.a = PropertyFactory.getProp(_, f.a, 1, 0, this.dynamicProperties)),
f.s && (this.s = PropertyFactory.getProp(_, f.s, 1, 0.01, this.dynamicProperties)),
f.o ? this.o = PropertyFactory.getProp(_, f.o, 0, 0.01, this.dynamicProperties)  : this.o = {
mdf: !1,
v: 1
},
this.dynamicProperties.length ? m.push(this)  : (this.a && this.v.translate( - this.a.v[0], - this.a.v[1], this.a.v[2]), this.s && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && this.v.skewFromAxis( - this.sk.v, this.sa.v), this.r ? this.v.rotate( - this.r.v)  : this.v.rotateZ( - this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ( - this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.data.p.s ? f.p.z ? this.v.translate(this.px.v, this.py.v, - this.pz.v)  : this.v.translate(this.px.v, this.py.v, 0)  : this.v.translate(this.p.v[0], this.p.v[1], - this.p.v[2])),
Object.defineProperty(this, 'position', {
get: t
}),
Object.defineProperty(this, 'xPosition', {
get: e
}),
Object.defineProperty(this, 'yPosition', {
get: r
}),
Object.defineProperty(this, 'orientation', {
get: n
}),
Object.defineProperty(this, 'anchorPoint', {
get: i
}),
Object.defineProperty(this, 'rotation', {
get: s
}),
Object.defineProperty(this, 'scale', {
get: o
}),
Object.defineProperty(this, 'opacity', {
get: a
}),
Object.defineProperty(this, 'skew', {
get: l
}),
Object.defineProperty(this, 'skewAxis', {
get: c
})
}
}();
function c(t, e, r, i, c) {
var h;
if (2 === r) h = new l(t, e, c);
 else if (0 === e.a) h = 0 === r ? new n(t, e, i)  : new s(t, e, i);
 else if (1 === e.a) h = 0 === r ? new o(t, e, i)  : new a(t, e, i);
 else if (e.k.length) if ('number' == typeof e.k[0]) h = new s(t, e, i);
 else switch (r) {
case 0:
h = new o(t, e, i);
break;
case 1:
h = new a(t, e, i)
} else h = new n(t, e, i);
return h.k && c.push(h),
h
}
var h = function () {
function t(t) {
if (this.prop.getValue(), this.cmdf = !1, this.omdf = !1, this.prop.mdf || t) {
var e,
r,
i,
n = 4 * this.data.p;
for (e = 0; e < n; e += 1) r = e % 4 == 0 ? 100 : 255,
i = Math.round(this.prop.v[e] * r),
this.c[e] !== i && (this.c[e] = i, this.cmdf = !0);
if (this.o.length) for (n = this.prop.v.length, e = 4 * this.data.p; e < n; e += 1) r = e % 2 == 0 ? 100 : 1,
i = e % 2 == 0 ? Math.round(100 * this.prop.v[e])  : this.prop.v[e],
this.o[e - 4 * this.data.p] !== i && (this.o[e - 4 * this.data.p] = i, this.omdf = !0)
}
}
function e(e, r, i) {
this.prop = c(e, r.k, 1, null, [
]),
this.data = r,
this.k = this.prop.k,
this.c = Array.apply(null, {
length: 4 * r.p
});
var n = r.k.k[0].s ? r.k.k[0].s.length - 4 * r.p : r.k.k.length - 4 * r.p;
this.o = Array.apply(null, {
length: n
}),
this.cmdf = !1,
this.omdf = !1,
this.getValue = t,
this.prop.k && i.push(this),
this.getValue(!0)
}
return function (t, r, i) {
return new e(t, r, i)
}
}(),
d = function () {
function t(t) {
var e = 0,
r = this.dataProps.length;
if (this.elem.globalData.frameId !== this.frameId || t) {
for (this.mdf = !1, this.frameId = this.elem.globalData.frameId; e < r; ) {
if (this.dataProps[e].p.mdf) {
this.mdf = !0;
break
}
e += 1
}
if (this.mdf || t) for ('svg' === this.renderer && (this.dasharray = ''), e = 0; e < r; e += 1) 'o' != this.dataProps[e].n ? 'svg' === this.renderer ? this.dasharray += ' ' + this.dataProps[e].p.v : this.dasharray[e] = this.dataProps[e].p.v : this.dashoffset = this.dataProps[e].p.v
}
}
return function (e, r, i, n) {
this.elem = e,
this.frameId = - 1,
this.dataProps = new Array(r.length),
this.renderer = i,
this.mdf = !1,
this.k = !1,
'svg' === this.renderer ? this.dasharray = '' : this.dasharray = new Array(r.length - 1),
this.dashoffset = 0;
var s,
o,
a = r.length;
for (s = 0; s < a; s += 1) o = PropertyFactory.getProp(e, r[s].v, 0, 0, n),
this.k = !!o.k || this.k,
this.dataProps[s] = {
n: r[s].n,
p: o
};
this.getValue = t,
this.k ? n.push(this)  : this.getValue(!0)
}
}(),
u = function () {
var t = Math.max,
e = Math.min,
r = Math.floor;
function i(t) {
if (this.mdf = t || !1, this.dynamicProperties.length) {
var e,
r = this.dynamicProperties.length;
for (e = 0; e < r; e += 1) this.dynamicProperties[e].getValue(),
this.dynamicProperties[e].mdf && (this.mdf = !0)
}
var i = this.elem.textProperty.currentData ? this.elem.textProperty.currentData.l.length : 0;
t && 2 === this.data.r && (this.e.v = i);
var n = 2 === this.data.r ? 1 : 100 / i,
s = this.o.v / n,
o = this.s.v / n + s,
a = this.e.v / n + s;
if (o > a) {
var l = o;
o = a,
a = l
}
this.finalS = o,
this.finalE = a
}
function n(i) {
var n = BezierFactory.getBezierEasing(this.ne.v / 100, 0, 1 - this.xe.v / 100, 1).get,
s = 0,
o = this.finalS,
a = this.finalE,
l = this.data.sh;
if (2 == l) s = n(s = a === o ? i >= a ? 1 : 0 : t(0, e(0.5 / (a - o) + (i - o) / (a - o), 1)));
 else if (3 == l) s = n(s = a === o ? i >= a ? 0 : 1 : 1 - t(0, e(0.5 / (a - o) + (i - o) / (a - o), 1)));
 else if (4 == l) a === o ? s = 0 : (s = t(0, e(0.5 / (a - o) + (i - o) / (a - o), 1))) < 0.5 ? s *= 2 : s = 1 - 2 * (s - 0.5),
s = n(s);
 else if (5 == l) {
if (a === o) s = 0;
 else {
var c = a - o,
h = - c / 2 + (i = e(t(0, i + 0.5 - o), a - o)),
d = c / 2;
s = Math.sqrt(1 - h * h / (d * d))
}
s = n(s)
} else 6 == l ? (a === o ? s = 0 : (i = e(t(0, i + 0.5 - o), a - o), s = (1 + Math.cos(Math.PI + 2 * Math.PI * i / (a - o))) / 2), s = n(s))  : (i >= r(o) && (s = i - o < 0 ? 1 - (o - i)  : t(0, e(a - i, 1))), s = n(s));
return s * this.a.v
}
return function (t, e, r) {
this.mdf = !1,
this.k = !1,
this.data = e,
this.dynamicProperties = [
],
this.getValue = i,
this.getMult = n,
this.elem = t,
this.comp = t.comp,
this.finalS = 0,
this.finalE = 0,
this.s = PropertyFactory.getProp(t, e.s || {
k: 0
}, 0, 0, this.dynamicProperties),
this.e = 'e' in e ? PropertyFactory.getProp(t, e.e, 0, 0, this.dynamicProperties)  : {
v: 100
},
this.o = PropertyFactory.getProp(t, e.o || {
k: 0
}, 0, 0, this.dynamicProperties),
this.xe = PropertyFactory.getProp(t, e.xe || {
k: 0
}, 0, 0, this.dynamicProperties),
this.ne = PropertyFactory.getProp(t, e.ne || {
k: 0
}, 0, 0, this.dynamicProperties),
this.a = PropertyFactory.getProp(t, e.a, 0, 0.01, this.dynamicProperties),
this.dynamicProperties.length ? r.push(this)  : this.getValue()
}
}();
return {
getProp: c,
getDashProp: function (t, e, r, i) {
return new d(t, e, r, i)
},
getTextSelectorProp: function (t, e, r) {
return new u(t, e, r)
},
getGradientProp: h
}
}();
function ShapePath() {
this.c = !1,
this._length = 0,
this._maxLength = 8,
this.v = Array.apply(null, {
length: this._maxLength
}),
this.o = Array.apply(null, {
length: this._maxLength
}),
this.i = Array.apply(null, {
length: this._maxLength
})
}
ShapePath.prototype.setPathData = function (t, e) {
this.c = t,
this.setLength(e);
for (var r = 0; r < e; ) this.v[r] = point_pool.newPoint(),
this.o[r] = point_pool.newPoint(),
this.i[r] = point_pool.newPoint(),
r += 1
},
ShapePath.prototype.setLength = function (t) {
for (; this._maxLength < t; ) this.doubleArrayLength();
this._length = t
},
ShapePath.prototype.doubleArrayLength = function () {
this.v = this.v.concat(Array.apply(null, {
length: this._maxLength
})),
this.i = this.i.concat(Array.apply(null, {
length: this._maxLength
})),
this.o = this.o.concat(Array.apply(null, {
length: this._maxLength
})),
this._maxLength *= 2
},
ShapePath.prototype.setXYAt = function (t, e, r, i, n) {
var s;
switch (this._length = Math.max(this._length, i + 1), this._length >= this._maxLength && this.doubleArrayLength(), r) {
case 'v':
s = this.v;
break;
case 'i':
s = this.i;
break;
case 'o':
s = this.o
}(!s[i] || s[i] && !n) && (s[i] = point_pool.newPoint()),
s[i][0] = t,
s[i][1] = e
},
ShapePath.prototype.setTripleAt = function (t, e, r, i, n, s, o, a) {
this.setXYAt(t, e, 'v', o, a),
this.setXYAt(r, i, 'o', o, a),
this.setXYAt(n, s, 'i', o, a)
};
var ShapePropertyFactory = function () {
var t = - 999999;
function e(t, e, r, i) {
var n,
s,
o;
if (t < this.keyframes[0].t - this.offsetTime) n = this.keyframes[0].s[0],
o = !0,
e = 0;
 else if (t >= this.keyframes[this.keyframes.length - 1].t - this.offsetTime) n = 1 === this.keyframes[this.keyframes.length - 2].h ? this.keyframes[this.keyframes.length - 1].s[0] : this.keyframes[this.keyframes.length - 2].e[0],
o = !0;
 else {
for (var a, l, c, h, d, u, p, _ = e, f = this.keyframes.length - 1, m = !0; m && (a = this.keyframes[_], !((l = this.keyframes[_ + 1]).t - this.offsetTime > t)); ) _ < f - 1 ? _ += 1 : m = !1;
if (e = _, !(o = 1 === a.h)) {
if (t >= l.t - this.offsetTime) p = 1;
 else if (t < a.t - this.offsetTime) p = 0;
 else {
var g;
a.__fnct ? g = a.__fnct : (g = BezierFactory.getBezierEasing(a.o.x, a.o.y, a.i.x, a.i.y).get, a.__fnct = g),
p = g((t - (a.t - this.offsetTime)) / (l.t - this.offsetTime - (a.t - this.offsetTime)))
}
s = a.e[0]
}
n = a.s[0]
}
h = r._length,
u = n.i[0].length;
var v,
b = !1;
for (c = 0; c < h; c += 1) for (d = 0; d < u; d += 1) o ? (v = n.i[c][d], r.i[c][d] !== v && (r.i[c][d] = v, i && (this.pv.i[c][d] = v), b = !0), v = n.o[c][d], r.o[c][d] !== v && (r.o[c][d] = v, i && (this.pv.o[c][d] = v), b = !0), v = n.v[c][d], r.v[c][d] !== v && (r.v[c][d] = v, i && (this.pv.v[c][d] = v), b = !0))  : (v = n.i[c][d] + (s.i[c][d] - n.i[c][d]) * p, r.i[c][d] !== v && (r.i[c][d] = v, i && (this.pv.i[c][d] = v), b = !0), v = n.o[c][d] + (s.o[c][d] - n.o[c][d]) * p, r.o[c][d] !== v && (r.o[c][d] = v, i && (this.pv.o[c][d] = v), b = !0), v = n.v[c][d] + (s.v[c][d] - n.v[c][d]) * p, r.v[c][d] !== v && (r.v[c][d] = v, i && (this.pv.v[c][d] = v), b = !0));
return b && (r.c = n.c),
{
iterationIndex: e,
hasModified: b
}
}
function r() {
this.paths = this.localShapeCollection,
this.k || (this.mdf = !1)
}
function i(t, e, i) {
this.__shapeObject = 1,
this.comp = t.comp,
this.k = !1,
this.mdf = !1;
var n = 3 === i ? e.pt.k : e.ks.k;
this.v = shape_pool.clone(n),
this.pv = shape_pool.clone(this.v),
this.localShapeCollection = shapeCollection_pool.newShapeCollection(),
this.paths = this.localShapeCollection,
this.paths.addShape(this.v),
this.reset = r
}
function n(e, i, n) {
this.__shapeObject = 1,
this.comp = e.comp,
this.elem = e,
this.offsetTime = e.data.st,
this._lastIndex = 0,
this.keyframes = 3 === n ? i.pt.k : i.ks.k,
this.k = !0,
this.kf = !0;
var s = this.keyframes[0].s[0].i.length;
this.keyframes[0].s[0].i[0].length,
this.v = shape_pool.newShape(),
this.v.setPathData(this.keyframes[0].s[0].c, s),
this.pv = shape_pool.clone(this.v),
this.localShapeCollection = shapeCollection_pool.newShapeCollection(),
this.paths = this.localShapeCollection,
this.paths.addShape(this.v),
this.lastFrame = t,
this.reset = r
}
i.prototype.interpolateShape = e,
i.prototype.getValue = function () {
return this.v
},
n.prototype.getValue = function () {
if (this.elem.globalData.frameId !== this.frameId) {
this.mdf = !1;
var e = this.comp.renderedFrame - this.offsetTime,
r = this.keyframes[0].t - this.offsetTime,
i = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
if (this.lastFrame === t || !(this.lastFrame < r && e < r || this.lastFrame > i && e > i)) {
var n = this.lastFrame < e ? this._lastIndex : 0,
s = this.interpolateShape(e, n, this.v, !0);
this._lastIndex = s.iterationIndex,
this.mdf = s.hasModified,
s.hasModified && (this.paths = this.localShapeCollection)
}
this.lastFrame = e,
this.frameId = this.elem.globalData.frameId
}
},
n.prototype.interpolateShape = e;
var s = function () {
var t = roundCorner;
function e() {
var e = this.p.v[0],
r = this.p.v[1],
i = this.s.v[0] / 2,
n = this.s.v[1] / 2;
3 !== this.d ? (this.v.v[0][0] = e, this.v.v[0][1] = r - n, this.v.v[1][0] = e + i, this.v.v[1][1] = r, this.v.v[2][0] = e, this.v.v[2][1] = r + n, this.v.v[3][0] = e - i, this.v.v[3][1] = r, this.v.i[0][0] = e - i * t, this.v.i[0][1] = r - n, this.v.i[1][0] = e + i, this.v.i[1][1] = r - n * t, this.v.i[2][0] = e + i * t, this.v.i[2][1] = r + n, this.v.i[3][0] = e - i, this.v.i[3][1] = r + n * t, this.v.o[0][0] = e + i * t, this.v.o[0][1] = r - n, this.v.o[1][0] = e + i, this.v.o[1][1] = r + n * t, this.v.o[2][0] = e - i * t, this.v.o[2][1] = r + n, this.v.o[3][0] = e - i, this.v.o[3][1] = r - n * t)  : (this.v.v[0][0] = e, this.v.v[0][1] = r - n, this.v.v[1][0] = e - i, this.v.v[1][1] = r, this.v.v[2][0] = e, this.v.v[2][1] = r + n, this.v.v[3][0] = e + i, this.v.v[3][1] = r, this.v.i[0][0] = e + i * t, this.v.i[0][1] = r - n, this.v.i[1][0] = e - i, this.v.i[1][1] = r - n * t, this.v.i[2][0] = e - i * t, this.v.i[2][1] = r + n, this.v.i[3][0] = e + i, this.v.i[3][1] = r + n * t, this.v.o[0][0] = e - i * t, this.v.o[0][1] = r - n, this.v.o[1][0] = e - i, this.v.o[1][1] = r + n * t, this.v.o[2][0] = e + i * t, this.v.o[2][1] = r + n, this.v.o[3][0] = e + i, this.v.o[3][1] = r - n * t)
}
function i(t) {
var e,
r = this.dynamicProperties.length;
if (this.elem.globalData.frameId !== this.frameId) {
for (this.mdf = !1, this.frameId = this.elem.globalData.frameId, e = 0; e < r; e += 1) this.dynamicProperties[e].getValue(t),
this.dynamicProperties[e].mdf && (this.mdf = !0);
this.mdf && this.convertEllToPath()
}
}
return function (t, n) {
this.v = shape_pool.newShape(),
this.v.setPathData(!0, 4),
this.localShapeCollection = shapeCollection_pool.newShapeCollection(),
this.paths = this.localShapeCollection,
this.localShapeCollection.addShape(this.v),
this.d = n.d,
this.dynamicProperties = [
],
this.elem = t,
this.comp = t.comp,
this.frameId = - 1,
this.mdf = !1,
this.getValue = i,
this.convertEllToPath = e,
this.reset = r,
this.p = PropertyFactory.getProp(t, n.p, 1, 0, this.dynamicProperties),
this.s = PropertyFactory.getProp(t, n.s, 1, 0, this.dynamicProperties),
this.dynamicProperties.length ? this.k = !0 : this.convertEllToPath()
}
}(),
o = function () {
function t() {
var t,
e = Math.floor(this.pt.v),
r = 2 * Math.PI / e,
i = this.or.v,
n = this.os.v,
s = 2 * Math.PI * i / (4 * e),
o = - Math.PI / 2,
a = 3 === this.data.d ? - 1 : 1;
for (o += this.r.v, this.v._length = 0, t = 0; t < e; t += 1) {
var l = i * Math.cos(o),
c = i * Math.sin(o),
h = 0 === l && 0 === c ? 0 : c / Math.sqrt(l * l + c * c),
d = 0 === l && 0 === c ? 0 : - l / Math.sqrt(l * l + c * c);
l += + this.p.v[0],
c += + this.p.v[1],
this.v.setTripleAt(l, c, l - h * s * n * a, c - d * s * n * a, l + h * s * n * a, c + d * s * n * a, t, !0),
o += r * a
}
this.paths.length = 0,
this.paths[0] = this.v
}
function e() {
var t,
e,
r,
i,
n = 2 * Math.floor(this.pt.v),
s = 2 * Math.PI / n,
o = !0,
a = this.or.v,
l = this.ir.v,
c = this.os.v,
h = this.is.v,
d = 2 * Math.PI * a / (2 * n),
u = 2 * Math.PI * l / (2 * n),
p = - Math.PI / 2;
p += this.r.v;
var _ = 3 === this.data.d ? - 1 : 1;
for (this.v._length = 0, t = 0; t < n; t += 1) {
r = o ? c : h,
i = o ? d : u;
var f = (e = o ? a : l) * Math.cos(p),
m = e * Math.sin(p),
g = 0 === f && 0 === m ? 0 : m / Math.sqrt(f * f + m * m),
v = 0 === f && 0 === m ? 0 : - f / Math.sqrt(f * f + m * m);
f += + this.p.v[0],
m += + this.p.v[1],
this.v.setTripleAt(f, m, f - g * i * r * _, m - v * i * r * _, f + g * i * r * _, m + v * i * r * _, t, !0),
o = !o,
p += s * _
}
}
function i() {
if (this.elem.globalData.frameId !== this.frameId) {
this.mdf = !1,
this.frameId = this.elem.globalData.frameId;
var t,
e = this.dynamicProperties.length;
for (t = 0; t < e; t += 1) this.dynamicProperties[t].getValue(),
this.dynamicProperties[t].mdf && (this.mdf = !0);
this.mdf && this.convertToPath()
}
}
return function (n, s) {
this.v = shape_pool.newShape(),
this.v.setPathData(!0, 0),
this.elem = n,
this.comp = n.comp,
this.data = s,
this.frameId = - 1,
this.d = s.d,
this.dynamicProperties = [
],
this.mdf = !1,
this.getValue = i,
this.reset = r,
1 === s.sy ? (this.ir = PropertyFactory.getProp(n, s.ir, 0, 0, this.dynamicProperties), this.is = PropertyFactory.getProp(n, s.is, 0, 0.01, this.dynamicProperties), this.convertToPath = e)  : this.convertToPath = t,
this.pt = PropertyFactory.getProp(n, s.pt, 0, 0, this.dynamicProperties),
this.p = PropertyFactory.getProp(n, s.p, 1, 0, this.dynamicProperties),
this.r = PropertyFactory.getProp(n, s.r, 0, degToRads, this.dynamicProperties),
this.or = PropertyFactory.getProp(n, s.or, 0, 0, this.dynamicProperties),
this.os = PropertyFactory.getProp(n, s.os, 0, 0.01, this.dynamicProperties),
this.localShapeCollection = shapeCollection_pool.newShapeCollection(),
this.localShapeCollection.addShape(this.v),
this.paths = this.localShapeCollection,
this.dynamicProperties.length ? this.k = !0 : this.convertToPath()
}
}(),
a = function () {
function t(t) {
if (this.elem.globalData.frameId !== this.frameId) {
this.mdf = !1,
this.frameId = this.elem.globalData.frameId;
var e,
r = this.dynamicProperties.length;
for (e = 0; e < r; e += 1) this.dynamicProperties[e].getValue(t),
this.dynamicProperties[e].mdf && (this.mdf = !0);
this.mdf && this.convertRectToPath()
}
}
function e() {
var t = this.p.v[0],
e = this.p.v[1],
r = this.s.v[0] / 2,
i = this.s.v[1] / 2,
n = bm_min(r, i, this.r.v),
s = n * (1 - roundCorner);
this.v._length = 0,
2 === this.d || 1 === this.d ? (this.v.setTripleAt(t + r, e - i + n, t + r, e - i + n, t + r, e - i + s, 0, !0), this.v.setTripleAt(t + r, e + i - n, t + r, e + i - s, t + r, e + i - n, 1, !0), 0 !== n ? (this.v.setTripleAt(t + r - n, e + i, t + r - n, e + i, t + r - s, e + i, 2, !0), this.v.setTripleAt(t - r + n, e + i, t - r + s, e + i, t - r + n, e + i, 3, !0), this.v.setTripleAt(t - r, e + i - n, t - r, e + i - n, t - r, e + i - s, 4, !0), this.v.setTripleAt(t - r, e - i + n, t - r, e - i + s, t - r, e - i + n, 5, !0), this.v.setTripleAt(t - r + n, e - i, t - r + n, e - i, t - r + s, e - i, 6, !0), this.v.setTripleAt(t + r - n, e - i, t + r - s, e - i, t + r - n, e - i, 7, !0))  : (this.v.setTripleAt(t - r, e + i, t - r + s, e + i, t - r, e + i, 2), this.v.setTripleAt(t - r, e - i, t - r, e - i + s, t - r, e - i, 3)))  : (this.v.setTripleAt(t + r, e - i + n, t + r, e - i + s, t + r, e - i + n, 0, !0), 0 !== n ? (this.v.setTripleAt(t + r - n, e - i, t + r - n, e - i, t + r - s, e - i, 1, !0), this.v.setTripleAt(t - r + n, e - i, t - r + s, e - i, t - r + n, e - i, 2, !0), this.v.setTripleAt(t - r, e - i + n, t - r, e - i + n, t - r, e - i + s, 3, !0), this.v.setTripleAt(t - r, e + i - n, t - r, e + i - s, t - r, e + i - n, 4, !0), this.v.setTripleAt(t - r + n, e + i, t - r + n, e + i, t - r + s, e + i, 5, !0), this.v.setTripleAt(t + r - n, e + i, t + r - s, e + i, t + r - n, e + i, 6, !0), this.v.setTripleAt(t + r, e + i - n, t + r, e + i - n, t + r, e + i - s, 7, !0))  : (this.v.setTripleAt(t - r, e - i, t - r + s, e - i, t - r, e - i, 1, !0), this.v.setTripleAt(t - r, e + i, t - r, e + i - s, t - r, e + i, 2, !0), this.v.setTripleAt(t + r, e + i, t + r - s, e + i, t + r, e + i, 3, !0)))
}
return function (i, n) {
this.v = shape_pool.newShape(),
this.v.c = !0,
this.localShapeCollection = shapeCollection_pool.newShapeCollection(),
this.localShapeCollection.addShape(this.v),
this.paths = this.localShapeCollection,
this.elem = i,
this.comp = i.comp,
this.frameId = - 1,
this.d = n.d,
this.dynamicProperties = [
],
this.mdf = !1,
this.getValue = t,
this.convertRectToPath = e,
this.reset = r,
this.p = PropertyFactory.getProp(i, n.p, 1, 0, this.dynamicProperties),
this.s = PropertyFactory.getProp(i, n.s, 1, 0, this.dynamicProperties),
this.r = PropertyFactory.getProp(i, n.r, 0, 0, this.dynamicProperties),
this.dynamicProperties.length ? this.k = !0 : this.convertRectToPath()
}
}(),
l = {
getShapeProp: function (t, e, r, l) {
var c;
if (3 === r || 4 === r) {
var h = 3 === r ? e.pt : e.ks,
d = h.k;
c = 1 === h.a || d.length ? new n(t, e, r)  : new i(t, e, r)
} else 5 === r ? c = new a(t, e)  : 6 === r ? c = new s(t, e)  : 7 === r && (c = new o(t, e));
return c.k && l.push(c),
c
},
getConstructorFunction: function () {
return i
},
getKeyframedConstructorFunction: function () {
return n
}
};
return l
}(),
ShapeModifiers = (ob = {
}, modifiers = {
}, ob.registerModifier = function (t, e) {
modifiers[t] || (modifiers[t] = e)
}, ob.getModifier = function (t, e, r, i) {
return new modifiers[t](e, r, i)
}, ob),
ob,
modifiers;
function ShapeModifier() {
}
function TrimModifier() {
}
function RoundCornersModifier() {
}
function RepeaterModifier() {
}
function ShapeCollection() {
this._length = 0,
this._maxLength = 4,
this.shapes = Array.apply(null, {
length: this._maxLength
})
}
ShapeModifier.prototype.initModifierProperties = function () {
},
ShapeModifier.prototype.addShapeToModifier = function () {
},
ShapeModifier.prototype.addShape = function (t) {
this.closed || (this.shapes.push({
shape: t.sh,
data: t,
localShapeCollection: shapeCollection_pool.newShapeCollection()
}), this.addShapeToModifier(t.sh))
},
ShapeModifier.prototype.init = function (t, e, r) {
this.elem = t,
this.frameId = - 1,
this.shapes = [
],
this.dynamicProperties = [
],
this.mdf = !1,
this.closed = !1,
this.k = !1,
this.comp = t.comp,
this.initModifierProperties(t, e),
this.dynamicProperties.length ? (this.k = !0, r.push(this))  : this.getValue(!0)
},
extendPrototype(ShapeModifier, TrimModifier),
TrimModifier.prototype.processKeys = function (t) {
if (this.elem.globalData.frameId !== this.frameId || t) {
this.mdf = !!t,
this.frameId = this.elem.globalData.frameId;
var e,
r = this.dynamicProperties.length;
for (e = 0; e < r; e += 1) this.dynamicProperties[e].getValue(),
this.dynamicProperties[e].mdf && (this.mdf = !0);
if (this.mdf || t) {
var i = this.o.v % 360 / 360;
i < 0 && (i += 1);
var n = this.s.v + i,
s = this.e.v + i;
if (n > s) {
var o = n;
n = s,
s = o
}
this.sValue = n,
this.eValue = s,
this.oValue = i
}
}
},
TrimModifier.prototype.initModifierProperties = function (t, e) {
this.sValue = 0,
this.eValue = 0,
this.oValue = 0,
this.getValue = this.processKeys,
this.s = PropertyFactory.getProp(t, e.s, 0, 0.01, this.dynamicProperties),
this.e = PropertyFactory.getProp(t, e.e, 0, 0.01, this.dynamicProperties),
this.o = PropertyFactory.getProp(t, e.o, 0, 0, this.dynamicProperties),
this.m = e.m,
this.dynamicProperties.length || this.getValue(!0)
},
TrimModifier.prototype.calculateShapeEdges = function (t, e, r, i, n) {
var s = [
];
e <= 1 ? s.push({
s: t,
e
})  : t >= 1 ? s.push({
s: t - 1,
e: e - 1
})  : (s.push({
s: t,
e: 1
}), s.push({
s: 0,
e: e - 1
}));
var o,
a,
l = [
],
c = s.length;
for (o = 0; o < c; o += 1) {
var h,
d;
(a = s[o]).e * n < i || a.s * n > i + r || (h = a.s * n <= i ? 0 : (a.s * n - i) / r, d = a.e * n >= i + r ? 1 : (a.e * n - i) / r, l.push([h,
d]))
}
return l.length || l.push([0,
0]),
l
},
TrimModifier.prototype.processShapes = function (t) {
var e,
r,
i,
n,
s,
o = this.shapes.length,
a = this.sValue,
l = this.eValue,
c = 0;
if (l === a) for (r = 0; r < o; r += 1) this.shapes[r].localShapeCollection.releaseShapes(),
this.shapes[r].shape.mdf = !0,
this.shapes[r].shape.paths = this.shapes[r].localShapeCollection;
 else if (1 === l && 0 === a || 0 === l && 1 === a) {
if (this.mdf) for (r = 0; r < o; r += 1) this.shapes[r].shape.mdf = !0
} else {
var h,
d,
u = [
];
for (r = 0; r < o; r += 1) if ((h = this.shapes[r]).shape.mdf || this.mdf || t || 2 === this.m) {
if (_ = (e = h.shape.paths)._length, s = 0, !h.shape.mdf && h.pathsData) s = h.totalShapeLength;
 else {
for (i = [
], p = 0; p < _; p += 1) n = bez.getSegmentsLength(e.shapes[p]),
i.push(n),
s += n.totalLength;
h.totalShapeLength = s,
h.pathsData = i
}
c += s,
h.shape.mdf = !0
} else h.shape.paths = h.localShapeCollection;
var p,
_,
f = a,
m = l,
g = 0;
for (r = o - 1; r >= 0; r -= 1) if ((h = this.shapes[r]).shape.mdf) {
if ((d = h.localShapeCollection).releaseShapes(), 2 === this.m && o > 1) {
var v = this.calculateShapeEdges(a, l, h.totalShapeLength, g, c);
g += h.totalShapeLength
} else v = [
[f,
m]
];
for (_ = v.length, p = 0; p < _; p += 1) {
f = v[p][0],
m = v[p][1],
u.length = 0,
m <= 1 ? u.push({
s: h.totalShapeLength * f,
e: h.totalShapeLength * m
})  : f >= 1 ? u.push({
s: h.totalShapeLength * (f - 1),
e: h.totalShapeLength * (m - 1)
})  : (u.push({
s: h.totalShapeLength * f,
e: h.totalShapeLength
}), u.push({
s: 0,
e: h.totalShapeLength * (m - 1)
}));
var b = this.addShapes(h, u[0]);
if (u[0].s !== u[0].e) {
if (u.length > 1) if (h.shape.v.c) {
var y = b.pop();
this.addPaths(b, d),
b = this.addShapes(h, u[1], y)
} else this.addPaths(b, d),
b = this.addShapes(h, u[1]);
this.addPaths(b, d)
}
}
h.shape.paths = d
}
}
this.dynamicProperties.length || (this.mdf = !1)
},
TrimModifier.prototype.addPaths = function (t, e) {
var r,
i = t.length;
for (r = 0; r < i; r += 1) e.addShape(t[r])
},
TrimModifier.prototype.addSegment = function (t, e, r, i, n, s, o) {
n.setXYAt(e[0], e[1], 'o', s),
n.setXYAt(r[0], r[1], 'i', s + 1),
o && n.setXYAt(t[0], t[1], 'v', s),
n.setXYAt(i[0], i[1], 'v', s + 1)
},
TrimModifier.prototype.addShapes = function (t, e, r) {
var i,
n,
s,
o,
a,
l,
c,
h,
d = t.pathsData,
u = t.shape.paths.shapes,
p = t.shape.paths._length,
_ = 0,
f = [
],
m = !0;
for (r ? (a = r._length, h = r._length)  : (r = shape_pool.newShape(), a = 0, h = 0), f.push(r), i = 0; i < p; i += 1) {
for (l = d[i].lengths, r.c = u[i].c, s = u[i].c ? l.length : l.length + 1, n = 1; n < s; n += 1) if (_ + (o = l[n - 1]).addedLength < e.s) _ += o.addedLength,
r.c = !1;
 else {
if (_ > e.e) {
r.c = !1;
break
}
e.s <= _ && e.e >= _ + o.addedLength ? (this.addSegment(u[i].v[n - 1], u[i].o[n - 1], u[i].i[n], u[i].v[n], r, a, m), m = !1)  : (c = bez.getNewSegment(u[i].v[n - 1], u[i].v[n], u[i].o[n - 1], u[i].i[n], (e.s - _) / o.addedLength, (e.e - _) / o.addedLength, l[n - 1]), this.addSegment(c.pt1, c.pt3, c.pt4, c.pt2, r, a, m), m = !1, r.c = !1),
_ += o.addedLength,
a += 1
}
if (u[i].c) {
if (o = l[n - 1], _ <= e.e) {
var g = l[n - 1].addedLength;
e.s <= _ && e.e >= _ + g ? (this.addSegment(u[i].v[n - 1], u[i].o[n - 1], u[i].i[0], u[i].v[0], r, a, m), m = !1)  : (c = bez.getNewSegment(u[i].v[n - 1], u[i].v[0], u[i].o[n - 1], u[i].i[0], (e.s - _) / g, (e.e - _) / g, l[n - 1]), this.addSegment(c.pt1, c.pt3, c.pt4, c.pt2, r, a, m), m = !1, r.c = !1)
} else r.c = !1;
_ += o.addedLength,
a += 1
}
if (r._length && (r.setXYAt(r.v[h][0], r.v[h][1], 'i', h), r.setXYAt(r.v[r._length - 1][0], r.v[r._length - 1][1], 'o', r._length - 1)), _ > e.e) break;
i < p - 1 && (r = shape_pool.newShape(), m = !0, f.push(r), a = 0)
}
return f
},
ShapeModifiers.registerModifier('tm', TrimModifier),
extendPrototype(ShapeModifier, RoundCornersModifier),
RoundCornersModifier.prototype.processKeys = function (t) {
if (this.elem.globalData.frameId !== this.frameId || t) {
this.mdf = !!t,
this.frameId = this.elem.globalData.frameId;
var e,
r = this.dynamicProperties.length;
for (e = 0; e < r; e += 1) this.dynamicProperties[e].getValue(),
this.dynamicProperties[e].mdf && (this.mdf = !0)
}
},
RoundCornersModifier.prototype.initModifierProperties = function (t, e) {
this.getValue = this.processKeys,
this.rd = PropertyFactory.getProp(t, e.r, 0, null, this.dynamicProperties),
this.dynamicProperties.length || this.getValue(!0)
},
RoundCornersModifier.prototype.processPath = function (t, e) {
var r = shape_pool.newShape();
r.c = t.c;
var i,
n,
s,
o,
a,
l,
c,
h,
d,
u,
p,
_,
f,
m = t._length,
g = 0;
for (i = 0; i < m; i += 1) n = t.v[i],
o = t.o[i],
s = t.i[i],
n[0] === o[0] && n[1] === o[1] && n[0] === s[0] && n[1] === s[1] ? 0 !== i && i !== m - 1 || t.c ? (a = 0 === i ? t.v[m - 1] : t.v[i - 1], c = (l = Math.sqrt(Math.pow(n[0] - a[0], 2) + Math.pow(n[1] - a[1], 2))) ? Math.min(l / 2, e) / l : 0, h = _ = n[0] + (a[0] - n[0]) * c, d = f = n[1] - (n[1] - a[1]) * c, u = h - (h - n[0]) * roundCorner, p = d - (d - n[1]) * roundCorner, r.setTripleAt(h, d, u, p, _, f, g), g += 1, a = i === m - 1 ? t.v[0] : t.v[i + 1], c = (l = Math.sqrt(Math.pow(n[0] - a[0], 2) + Math.pow(n[1] - a[1], 2))) ? Math.min(l / 2, e) / l : 0, h = u = n[0] + (a[0] - n[0]) * c, d = p = n[1] + (a[1] - n[1]) * c, _ = h - (h - n[0]) * roundCorner, f = d - (d - n[1]) * roundCorner, r.setTripleAt(h, d, u, p, _, f, g), g += 1)  : (r.setTripleAt(n[0], n[1], o[0], o[1], s[0], s[1], g), g += 1)  : (r.setTripleAt(t.v[i][0], t.v[i][1], t.o[i][0], t.o[i][1], t.i[i][0], t.i[i][1], g), g += 1);
return r
},
RoundCornersModifier.prototype.processShapes = function (t) {
var e,
r,
i,
n,
s,
o,
a = this.shapes.length,
l = this.rd.v;
if (0 !== l) for (r = 0; r < a; r += 1) {
if ((s = this.shapes[r]).shape.paths, o = s.localShapeCollection, s.shape.mdf || this.mdf || t) for (o.releaseShapes(), s.shape.mdf = !0, e = s.shape.paths.shapes, n = s.shape.paths._length, i = 0; i < n; i += 1) o.addShape(this.processPath(e[i], l));
s.shape.paths = s.localShapeCollection
}
this.dynamicProperties.length || (this.mdf = !1)
},
ShapeModifiers.registerModifier('rd', RoundCornersModifier),
RepeaterModifier.prototype.processKeys = function (t) {
if (this.elem.globalData.frameId !== this.frameId || t) {
this.mdf = !!t;
var e,
r = this.dynamicProperties.length;
for (e = 0; e < r; e += 1) this.dynamicProperties[e].getValue(),
this.dynamicProperties[e].mdf && (this.mdf = !0)
}
},
RepeaterModifier.prototype.initModifierProperties = function (t, e) {
this.getValue = this.processKeys,
this.c = PropertyFactory.getProp(t, e.c, 0, null, this.dynamicProperties),
this.o = PropertyFactory.getProp(t, e.o, 0, null, this.dynamicProperties),
this.tr = PropertyFactory.getProp(t, e.tr, 2, null, this.dynamicProperties),
this.data = e,
this.dynamicProperties.length || this.getValue(!0),
this.pMatrix = new Matrix,
this.rMatrix = new Matrix,
this.sMatrix = new Matrix,
this.tMatrix = new Matrix,
this.matrix = new Matrix
},
RepeaterModifier.prototype.applyTransforms = function (t, e, r, i, n, s) {
var o = s ? - 1 : 1,
a = i.s.v[0] + (1 - i.s.v[0]) * (1 - n),
l = i.s.v[1] + (1 - i.s.v[1]) * (1 - n);
t.translate(i.p.v[0] * o * n, i.p.v[1] * o * n, i.p.v[2]),
e.translate( - i.a.v[0], - i.a.v[1], i.a.v[2]),
e.rotate( - i.r.v * o * n),
e.translate(i.a.v[0], i.a.v[1], i.a.v[2]),
r.translate( - i.a.v[0], - i.a.v[1], i.a.v[2]),
r.scale(s ? 1 / a : a, s ? 1 / l : l),
r.translate(i.a.v[0], i.a.v[1], i.a.v[2])
},
RepeaterModifier.prototype.init = function (t, e, r, i, n) {
for (this.elem = t, this.arr = e, this.pos = r, this.elemsData = i, this._currentCopies = 0, this._elements = [
], this._groups = [
], this.dynamicProperties = [
], this.frameId = - 1, this.initModifierProperties(t, e[r]); r > 0; ) r -= 1,
this._elements.unshift(e[r]);
this.dynamicProperties.length ? (this.k = !0, n.push(this))  : this.getValue(!0)
},
RepeaterModifier.prototype.resetElements = function (t) {
var e,
r = t.length;
for (e = 0; e < r; e += 1) t[e]._processed = !1,
'gr' === t[e].ty && this.resetElements(t[e].it)
},
RepeaterModifier.prototype.cloneElements = function (t) {
t.length;
var e = JSON.parse(JSON.stringify(t));
return this.resetElements(e),
e
},
RepeaterModifier.prototype.changeGroupRender = function (t, e) {
var r,
i = t.length;
for (r = 0; r < i; r += 1) t[r]._render = e,
'gr' === t[r].ty && this.changeGroupRender(t[r].it, e)
},
RepeaterModifier.prototype.processShapes = function (t) {
if (this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.dynamicProperties.length || t || (this.mdf = !1), this.mdf)) {
var e = Math.ceil(this.c.v);
if (this._groups.length < e) {
for (; this._groups.length < e; ) {
var r = {
it: this.cloneElements(this._elements),
ty: 'gr'
};
r.it.push({
a: {
a: 0,
ix: 1,
k: [
0,
0
]
},
nm: 'Transform',
o: {
a: 0,
ix: 7,
k: 100
},
p: {
a: 0,
ix: 2,
k: [
0,
0
]
},
r: {
a: 0,
ix: 6,
k: 0
},
s: {
a: 0,
ix: 3,
k: [
100,
100
]
},
sa: {
a: 0,
ix: 5,
k: 0
},
sk: {
a: 0,
ix: 4,
k: 0
},
ty: 'tr'
}),
this.arr.splice(0, 0, r),
this._groups.splice(0, 0, r),
this._currentCopies += 1
}
this.elem.reloadShapes()
}
var i,
n,
s = 0;
for (i = 0; i <= this._groups.length - 1; i += 1) n = s < e,
this._groups[i]._render = n,
this.changeGroupRender(this._groups[i].it, n),
s += 1;
this._currentCopies = e,
this.elem.firstFrame = !0;
var o = this.o.v,
a = o % 1,
l = o > 0 ? Math.floor(o)  : Math.ceil(o),
c = (this.tr.v.props, this.pMatrix.props),
h = this.rMatrix.props,
d = this.sMatrix.props;
this.pMatrix.reset(),
this.rMatrix.reset(),
this.sMatrix.reset(),
this.tMatrix.reset(),
this.matrix.reset();
var u = 0;
if (o > 0) {
for (; u < l; ) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1),
u += 1;
a && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, a, !1), u += a)
} else if (o < 0) {
for (; u > l; ) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !0),
u -= 1;
a && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, - a, !0), u -= a)
}
i = 1 === this.data.m ? 0 : this._currentCopies - 1;
var p = 1 === this.data.m ? 1 : - 1;
for (s = this._currentCopies; s; ) {
if (0 !== u) {
(0 !== i && 1 === p || i !== this._currentCopies - 1 && - 1 === p) && this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1),
this.matrix.transform(h[0], h[1], h[2], h[3], h[4], h[5], h[6], h[7], h[8], h[9], h[10], h[11], h[12], h[13], h[14], h[15]),
this.matrix.transform(d[0], d[1], d[2], d[3], d[4], d[5], d[6], d[7], d[8], d[9], d[10], d[11], d[12], d[13], d[14], d[15]),
this.matrix.transform(c[0], c[1], c[2], c[3], c[4], c[5], c[6], c[7], c[8], c[9], c[10], c[11], c[12], c[13], c[14], c[15]);
var _ = (m = (f = this.elemsData[i].it) [f.length - 1].transform.mProps.v.props).length;
for (g = 0; g < _; g += 1) m[g] = this.matrix.props[g];
this.matrix.reset()
} else {
var f,
m,
g;
for (this.matrix.reset(), _ = (m = (f = this.elemsData[i].it) [f.length - 1].transform.mProps.v.props).length, g = 0; g < _; g += 1) m[g] = this.matrix.props[g]
}
u += 1,
s -= 1,
i += p
}
}
},
RepeaterModifier.prototype.addShape = function () {
},
ShapeModifiers.registerModifier('rp', RepeaterModifier),
ShapeCollection.prototype.addShape = function (t) {
this._length === this._maxLength && (this.shapes = this.shapes.concat(Array.apply(null, {
length: this._maxLength
})), this._maxLength *= 2),
this.shapes[this._length] = t,
this._length += 1
},
ShapeCollection.prototype.releaseShapes = function () {
var t;
for (t = 0; t < this._length; t += 1) shape_pool.release(this.shapes[t]);
this._length = 0
};
var ImagePreloader = function () {
var t;
function e() {
this.loadedAssets += 1,
this.loadedAssets === this.totalImages && t && t(null)
}
function r(t) {
var e = '';
if (this.assetsPath) {
var r = t.p;
- 1 !== r.indexOf('images/') && (r = r.split('/') [1]),
e = this.assetsPath + r
} else e = this.path,
e += t.u ? t.u : '',
e += t.p;
return e
}
function i(t) {
var r = document.createElement('img');
r.addEventListener('load', e.bind(this), !1),
r.addEventListener('error', e.bind(this), !1),
r.src = t
}
function n(e, n) {
var s;
for (t = n, this.totalAssets = e.length, s = 0; s < this.totalAssets; s += 1) e[s].layers || (i.bind(this) (r.bind(this) (e[s])), this.totalImages += 1)
}
function s(t) {
this.path = t || ''
}
function o(t) {
this.assetsPath = t || ''
}
return function () {
this.loadAssets = n,
this.setAssetsPath = o,
this.setPath = s,
this.assetsPath = '',
this.path = '',
this.totalAssets = 0,
this.totalImages = 0,
this.loadedAssets = 0
}
}(),
featureSupport = function () {
var t = {
maskType: !0
};
return (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) && (t.maskType = !1),
t
}(),
filtersFactory = function () {
var t = {
createFilter: function (t) {
var e = document.createElementNS(svgNS, 'filter');
return e.setAttribute('id', t),
e.setAttribute('filterUnits', 'objectBoundingBox'),
e.setAttribute('x', '0%'),
e.setAttribute('y', '0%'),
e.setAttribute('width', '100%'),
e.setAttribute('height', '100%'),
e
},
createAlphaToLuminanceFilter: function () {
var t = document.createElementNS(svgNS, 'feColorMatrix');
return t.setAttribute('type', 'matrix'),
t.setAttribute('color-interpolation-filters', 'sRGB'),
t.setAttribute('values', '0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1'),
t
}
};
return t
}();
function TextAnimatorProperty(t, e, r) {
this.mdf = !1,
this._firstFrame = !0,
this._hasMaskedPath = !1,
this._frameId = - 1,
this._dynamicProperties = [
],
this._textData = t,
this._renderType = e,
this._elem = r,
this._animatorsData = Array.apply(null, {
length: this._textData.a.length
}),
this._pathData = {
},
this._moreOptions = {
alignment: {
}
},
this.renderedLetters = [
],
this.lettersChangedFlag = !1
}
function LetterProps(t, e, r, i, n, s) {
this.o = t,
this.sw = e,
this.sc = r,
this.fc = i,
this.m = n,
this.p = s,
this.mdf = {
o: !0,
sw: !!e,
sc: !!r,
fc: !!i,
m: !0,
p: !0
}
}
function TextProperty(t, e, r) {
this._frameId = - 99999,
this.pv = '',
this.v = '',
this.kf = !1,
this.firstFrame = !0,
this.mdf = !0,
this.data = e,
this.elem = t,
this.keysIndex = - 1,
this.currentData = {
ascent: 0,
boxWidth: [
0,
0
],
f: '',
fStyle: '',
fWeight: '',
fc: '',
j: '',
justifyOffset: '',
l: [
],
lh: 0,
lineWidths: [
],
ls: '',
of: '',
s: '',
sc: '',
sw: 0,
t: 0,
tr: 0,
fillColorAnim: !1,
strokeColorAnim: !1,
strokeWidthAnim: !1,
yOffset: 0,
__complete: !1
},
this.searchProperty() ? r.push(this)  : this.getValue(!0)
}
TextAnimatorProperty.prototype.searchProperties = function (t) {
var e,
r,
i,
n = this._textData.a.length,
s = PropertyFactory.getProp;
for (e = 0; e < n; e += 1) r = {
a: {
},
s: {
}
},
'r' in (i = this._textData.a[e]).a && (r.a.r = s(this._elem, i.a.r, 0, degToRads, this._dynamicProperties)),
'rx' in i.a && (r.a.rx = s(this._elem, i.a.rx, 0, degToRads, this._dynamicProperties)),
'ry' in i.a && (r.a.ry = s(this._elem, i.a.ry, 0, degToRads, this._dynamicProperties)),
'sk' in i.a && (r.a.sk = s(this._elem, i.a.sk, 0, degToRads, this._dynamicProperties)),
'sa' in i.a && (r.a.sa = s(this._elem, i.a.sa, 0, degToRads, this._dynamicProperties)),
's' in i.a && (r.a.s = s(this._elem, i.a.s, 1, 0.01, this._dynamicProperties)),
'a' in i.a && (r.a.a = s(this._elem, i.a.a, 1, 0, this._dynamicProperties)),
'o' in i.a && (r.a.o = s(this._elem, i.a.o, 0, 0.01, this._dynamicProperties)),
'p' in i.a && (r.a.p = s(this._elem, i.a.p, 1, 0, this._dynamicProperties)),
'sw' in i.a && (r.a.sw = s(this._elem, i.a.sw, 0, 0, this._dynamicProperties)),
'sc' in i.a && (r.a.sc = s(this._elem, i.a.sc, 1, 0, this._dynamicProperties)),
'fc' in i.a && (r.a.fc = s(this._elem, i.a.fc, 1, 0, this._dynamicProperties)),
'fh' in i.a && (r.a.fh = s(this._elem, i.a.fh, 0, 0, this._dynamicProperties)),
'fs' in i.a && (r.a.fs = s(this._elem, i.a.fs, 0, 0.01, this._dynamicProperties)),
'fb' in i.a && (r.a.fb = s(this._elem, i.a.fb, 0, 0.01, this._dynamicProperties)),
't' in i.a && (r.a.t = s(this._elem, i.a.t, 0, 0, this._dynamicProperties)),
r.s = PropertyFactory.getTextSelectorProp(this._elem, i.s, this._dynamicProperties),
r.s.t = i.s.t,
this._animatorsData[e] = r;
this._textData.p && 'm' in this._textData.p ? (this._pathData = {
f: s(this._elem, this._textData.p.f, 0, 0, this._dynamicProperties),
l: s(this._elem, this._textData.p.l, 0, 0, this._dynamicProperties),
r: this._textData.p.r,
m: this._elem.maskManager.getMaskProperty(this._textData.p.m)
}, this._hasMaskedPath = !0)  : this._hasMaskedPath = !1,
this._moreOptions.alignment = s(this._elem, this._textData.m.a, 1, 0, this._dynamicProperties),
this._dynamicProperties.length && t.push(this)
},
TextAnimatorProperty.prototype.getMeasures = function (t, e) {
if (this.lettersChangedFlag = e, this.mdf || this._firstFrame || e || this._hasMaskedPath && this._pathData.m.mdf) {
this._firstFrame = !1;
var r,
i,
n,
s,
o = this._moreOptions.alignment.v,
a = this._animatorsData,
l = this._textData,
c = this.mHelper,
h = this._renderType,
d = this.renderedLetters.length,
u = (this.data, t.l);
if (this._hasMaskedPath) {
var p = this._pathData.m;
if (!this._pathData.n || this._pathData.mdf) {
var _ = p.v;
this._pathData.r && (_ = reversePath(_));
var f,
m = {
tLength: 0,
segments: [
]
};
s = _._length - 1;
var g = 0;
for (n = 0; n < s; n += 1) f = {
s: _.v[n],
e: _.v[n + 1],
to: [
_.o[n][0] - _.v[n][0],
_.o[n][1] - _.v[n][1]
],
ti: [
_.i[n + 1][0] - _.v[n + 1][0],
_.i[n + 1][1] - _.v[n + 1][1]
]
},
bez.buildBezierData(f),
m.tLength += f.bezierData.segmentLength,
m.segments.push(f),
g += f.bezierData.segmentLength;
n = s,
p.v.c && (f = {
s: _.v[n],
e: _.v[0],
to: [
_.o[n][0] - _.v[n][0],
_.o[n][1] - _.v[n][1]
],
ti: [
_.i[0][0] - _.v[0][0],
_.i[0][1] - _.v[0][1]
]
}, bez.buildBezierData(f), m.tLength += f.bezierData.segmentLength, m.segments.push(f), g += f.bezierData.segmentLength),
this._pathData.pi = m
}
m = this._pathData.pi;
var v,
b,
y,
E = this._pathData.f.v,
w = 0,
O = 1,
P = 0,
C = !0,
x = m.segments;
if (E < 0 && p.v.c) for (m.tLength < Math.abs(E) && (E = - Math.abs(E) % m.tLength), O = (y = x[w = x.length - 1].bezierData.points).length - 1; E < 0; ) E += y[O].partialLength,
(O -= 1) < 0 && (O = (y = x[w -= 1].bezierData.points).length - 1);
b = (y = x[w].bezierData.points) [O - 1];
var A,
M,
D = (v = y[O]).partialLength
}
s = u.length,
r = 0,
i = 0;
var k,
T,
j,
S,
I = 1.2 * t.s * 0.714,
L = !0;
if (j = a.length, e) for (T = 0; T < j; T += 1) a[T].s.getValue(!0);
var B,
R,
F,
N,
W,
V,
U,
K,
H,
z,
G,
q,
X,
Y = - 1,
$ = E,
Q = w,
Z = O,
J = - 1,
tt = '',
et = this.defaultPropsArray;
for (n = 0; n < s; n += 1) {
if (c.reset(), W = 1, u[n].n) r = 0,
i += t.yOffset,
i += L ? 1 : 0,
E = $,
L = !1,
this._hasMaskedPath && (O = Z, b = (y = x[w = Q].bezierData.points) [O - 1], D = (v = y[O]).partialLength, P = 0),
X = z = q = tt = '',
et = this.defaultPropsArray;
 else {
if (this._hasMaskedPath) {
if (J !== u[n].line) {
switch (t.j) {
case 1:
E += g - t.lineWidths[u[n].line];
break;
case 2:
E += (g - t.lineWidths[u[n].line]) / 2
}
J = u[n].line
}
Y !== u[n].ind && (u[Y] && (E += u[Y].extra), E += u[n].an / 2, Y = u[n].ind),
E += o[0] * u[n].an / 200;
var rt = 0;
for (T = 0; T < j; T += 1) 'p' in (k = a[T].a) && ((B = a[T].s.getMult(u[n].anIndexes[T], l.a[T].s.totalChars)).length ? rt += k.p.v[0] * B[0] : rt += k.p.v[0] * B),
'a' in k && ((B = a[T].s.getMult(u[n].anIndexes[T], l.a[T].s.totalChars)).length ? rt += k.a.v[0] * B[0] : rt += k.a.v[0] * B);
for (C = !0; C; ) P + D >= E + rt || !y ? (A = (E + rt - P) / v.partialLength, F = b.point[0] + (v.point[0] - b.point[0]) * A, N = b.point[1] + (v.point[1] - b.point[1]) * A, c.translate( - o[0] * u[n].an / 200, - o[1] * I / 100), C = !1)  : y && (P += v.partialLength, (O += 1) >= y.length && (O = 0, x[w += 1] ? y = x[w].bezierData.points : p.v.c ? (O = 0, y = x[w = 0].bezierData.points)  : (P -= v.partialLength, y = null)), y && (b = v, D = (v = y[O]).partialLength));
R = u[n].an / 2 - u[n].add,
c.translate( - R, 0, 0)
} else R = u[n].an / 2 - u[n].add,
c.translate( - R, 0, 0),
c.translate( - o[0] * u[n].an / 200, - o[1] * I / 100, 0);
for (u[n].l, T = 0; T < j; T += 1) 't' in (k = a[T].a) && (B = a[T].s.getMult(u[n].anIndexes[T], l.a[T].s.totalChars), this._hasMaskedPath ? B.length ? E += k.t * B[0] : E += k.t * B : B.length ? r += k.t.v * B[0] : r += k.t.v * B);
for (u[n].l, t.strokeWidthAnim && (U = t.sw || 0), t.strokeColorAnim && (V = t.sc ? [
t.sc[0],
t.sc[1],
t.sc[2]
] : [
0,
0,
0
]), t.fillColorAnim && t.fc && (K = [
t.fc[0],
t.fc[1],
t.fc[2]
]), T = 0; T < j; T += 1) 'a' in (k = a[T].a) && ((B = a[T].s.getMult(u[n].anIndexes[T], l.a[T].s.totalChars)).length ? c.translate( - k.a.v[0] * B[0], - k.a.v[1] * B[1], k.a.v[2] * B[2])  : c.translate( - k.a.v[0] * B, - k.a.v[1] * B, k.a.v[2] * B));
for (T = 0; T < j; T += 1) 's' in (k = a[T].a) && ((B = a[T].s.getMult(u[n].anIndexes[T], l.a[T].s.totalChars)).length ? c.scale(1 + (k.s.v[0] - 1) * B[0], 1 + (k.s.v[1] - 1) * B[1], 1)  : c.scale(1 + (k.s.v[0] - 1) * B, 1 + (k.s.v[1] - 1) * B, 1));
for (T = 0; T < j; T += 1) {
if (k = a[T].a, B = a[T].s.getMult(u[n].anIndexes[T], l.a[T].s.totalChars), 'sk' in k && (B.length ? c.skewFromAxis( - k.sk.v * B[0], k.sa.v * B[1])  : c.skewFromAxis( - k.sk.v * B, k.sa.v * B)), 'r' in k && (B.length ? c.rotateZ( - k.r.v * B[2])  : c.rotateZ( - k.r.v * B)), 'ry' in k && (B.length ? c.rotateY(k.ry.v * B[1])  : c.rotateY(k.ry.v * B)), 'rx' in k && (B.length ? c.rotateX(k.rx.v * B[0])  : c.rotateX(k.rx.v * B)), 'o' in k && (B.length ? W += (k.o.v * B[0] - W) * B[0] : W += (k.o.v * B - W) * B), t.strokeWidthAnim && 'sw' in k && (B.length ? U += k.sw.v * B[0] : U += k.sw.v * B), t.strokeColorAnim && 'sc' in k) for (H = 0; H < 3; H += 1) B.length ? V[H] = V[H] + (k.sc.v[H] - V[H]) * B[0] : V[H] = V[H] + (k.sc.v[H] - V[H]) * B;
if (t.fillColorAnim && t.fc) {
if ('fc' in k) for (H = 0; H < 3; H += 1) B.length ? K[H] = K[H] + (k.fc.v[H] - K[H]) * B[0] : K[H] = K[H] + (k.fc.v[H] - K[H]) * B;
'fh' in k && (K = B.length ? addHueToRGB(K, k.fh.v * B[0])  : addHueToRGB(K, k.fh.v * B)),
'fs' in k && (K = B.length ? addSaturationToRGB(K, k.fs.v * B[0])  : addSaturationToRGB(K, k.fs.v * B)),
'fb' in k && (K = B.length ? addBrightnessToRGB(K, k.fb.v * B[0])  : addBrightnessToRGB(K, k.fb.v * B))
}
}
for (T = 0; T < j; T += 1) 'p' in (k = a[T].a) && (B = a[T].s.getMult(u[n].anIndexes[T], l.a[T].s.totalChars), this._hasMaskedPath ? B.length ? c.translate(0, k.p.v[1] * B[0], - k.p.v[2] * B[1])  : c.translate(0, k.p.v[1] * B, - k.p.v[2] * B)  : B.length ? c.translate(k.p.v[0] * B[0], k.p.v[1] * B[1], - k.p.v[2] * B[2])  : c.translate(k.p.v[0] * B, k.p.v[1] * B, - k.p.v[2] * B));
if (t.strokeWidthAnim && (z = U < 0 ? 0 : U), t.strokeColorAnim && (G = 'rgb(' + Math.round(255 * V[0]) + ',' + Math.round(255 * V[1]) + ',' + Math.round(255 * V[2]) + ')'), t.fillColorAnim && t.fc && (q = 'rgb(' + Math.round(255 * K[0]) + ',' + Math.round(255 * K[1]) + ',' + Math.round(255 * K[2]) + ')'), this._hasMaskedPath) {
if (c.translate(0, - t.ls), c.translate(0, o[1] * I / 100 + i, 0), l.p.p) {
M = (v.point[1] - b.point[1]) / (v.point[0] - b.point[0]);
var it = 180 * Math.atan(M) / Math.PI;
v.point[0] < b.point[0] && (it += 180),
c.rotate( - it * Math.PI / 180)
}
c.translate(F, N, 0),
E -= o[0] * u[n].an / 200,
u[n + 1] && Y !== u[n + 1].ind && (E += u[n].an / 2, E += t.tr / 1000 * t.s)
} else {
switch (c.translate(r, i, 0), t.ps && c.translate(t.ps[0], t.ps[1] + t.ascent, 0), t.j) {
case 1:
c.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[u[n].line]), 0, 0);
break;
case 2:
c.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[u[n].line]) / 2, 0, 0)
}
c.translate(0, - t.ls),
c.translate(R, 0, 0),
c.translate(o[0] * u[n].an / 200, o[1] * I / 100, 0),
r += u[n].l + t.tr / 1000 * t.s
}
'html' === h ? tt = c.toCSS()  : 'svg' === h ? tt = c.to2dCSS()  : et = [
c.props[0],
c.props[1],
c.props[2],
c.props[3],
c.props[4],
c.props[5],
c.props[6],
c.props[7],
c.props[8],
c.props[9],
c.props[10],
c.props[11],
c.props[12],
c.props[13],
c.props[14],
c.props[15]
],
X = W
}
d <= n ? (S = new LetterProps(X, z, G, q, tt, et), this.renderedLetters.push(S), d += 1, this.lettersChangedFlag = !0)  : (S = this.renderedLetters[n], this.lettersChangedFlag = S.update(X, z, G, q, tt, et) || this.lettersChangedFlag)
}
}
},
TextAnimatorProperty.prototype.getValue = function () {
if (this._elem.globalData.frameId !== this._frameId) {
this._frameId = this._elem.globalData.frameId;
var t,
e = this._dynamicProperties.length;
for (this.mdf = !1, t = 0; t < e; t += 1) this._dynamicProperties[t].getValue(),
this.mdf = this._dynamicProperties[t].mdf || this.mdf
}
},
TextAnimatorProperty.prototype.mHelper = new Matrix,
TextAnimatorProperty.prototype.defaultPropsArray = [
],
LetterProps.prototype.update = function (t, e, r, i, n, s) {
this.mdf.o = !1,
this.mdf.sw = !1,
this.mdf.sc = !1,
this.mdf.fc = !1,
this.mdf.m = !1,
this.mdf.p = !1;
var o = !1;
return this.o !== t && (this.o = t, this.mdf.o = !0, o = !0),
this.sw !== e && (this.sw = e, this.mdf.sw = !0, o = !0),
this.sc !== r && (this.sc = r, this.mdf.sc = !0, o = !0),
this.fc !== i && (this.fc = i, this.mdf.fc = !0, o = !0),
this.m !== n && (this.m = n, this.mdf.m = !0, o = !0),
!s.length || this.p[0] === s[0] && this.p[1] === s[1] && this.p[4] === s[4] && this.p[5] === s[5] && this.p[12] === s[12] && this.p[13] === s[13] || (this.p = s, this.mdf.p = !0, o = !0),
o
},
TextProperty.prototype.setCurrentData = function (t) {
var e = this.currentData;
e.ascent = t.ascent,
e.boxWidth = t.boxWidth ? t.boxWidth : e.boxWidth,
e.f = t.f,
e.fStyle = t.fStyle,
e.fWeight = t.fWeight,
e.fc = t.fc,
e.j = t.j,
e.justifyOffset = t.justifyOffset,
e.l = t.l,
e.lh = t.lh,
e.lineWidths = t.lineWidths,
e.ls = t.ls,
e.of = t.of,
e.s = t.s,
e.sc = t.sc,
e.sw = t.sw,
e.t = t.t,
e.tr = t.tr,
e.fillColorAnim = t.fillColorAnim || e.fillColorAnim,
e.strokeColorAnim = t.strokeColorAnim || e.strokeColorAnim,
e.strokeWidthAnim = t.strokeWidthAnim || e.strokeWidthAnim,
e.yOffset = t.yOffset,
e.__complete = !1
},
TextProperty.prototype.searchProperty = function () {
return this.kf = this.data.d.k.length > 1,
this.kf
},
TextProperty.prototype.getValue = function () {
this.mdf = !1;
var t = this.elem.globalData.frameId;
if (t !== this._frameId && this.kf || this.firstFrame) {
for (var e, r = this.data.d.k, i = 0, n = r.length; i <= n - 1 && (e = r[i].s, !(i === n - 1 || r[i + 1].t > t)); ) i += 1;
this.keysIndex !== i && (e.__complete || this.completeTextData(e), this.setCurrentData(e), this.mdf = !this.firstFrame, this.pv = this.v = this.currentData.t, this.keysIndex = i),
this._frameId = t
}
},
TextProperty.prototype.completeTextData = function (t) {
t.__complete = !0;
var e,
r,
i,
n,
s,
o,
a,
l = this.elem.globalData.fontManager,
c = this.data,
h = [
],
d = 0,
u = c.m.g,
p = 0,
_ = 0,
f = 0,
m = [
],
g = 0,
v = 0,
b = l.getFontByName(t.f),
y = 0,
E = b.fStyle.split(' '),
w = 'normal',
O = 'normal';
for (r = E.length, e = 0; e < r; e += 1) switch (E[e].toLowerCase()) {
case 'italic':
O = 'italic';
break;
case 'bold':
w = '700';
break;
case 'black':
w = '900';
break;
case 'medium':
w = '500';
break;
case 'regular':
case 'normal':
w = '400';
case 'light':
case 'thin':
w = '200'
}
t.fWeight = w,
t.fStyle = O,
r = t.t.length;
var P = t.tr / 1000 * t.s;
if (t.sz) {
var C = t.sz[0],
x = - 1;
for (e = 0; e < r; e += 1) i = !1,
' ' === t.t.charAt(e) ? x = e : 13 === t.t.charCodeAt(e) && (g = 0, i = !0),
l.chars ? (a = l.getCharData(t.t.charAt(e), b.fStyle, b.fFamily), y = i ? 0 : a.w * t.s / 100)  : y = l.measureText(t.t.charAt(e), t.f, t.s),
g + y > C && ' ' !== t.t.charAt(e) ? ( - 1 === x ? r += 1 : e = x, t.t = t.t.substr(0, e) + '\r' + t.t.substr(e === x ? e + 1 : e), x = - 1, g = 0)  : (g += y, g += P);
r = t.t.length
}
g = - P,
y = 0;
var A,
M = 0;
for (e = 0; e < r; e += 1) if (i = !1, ' ' === (A = t.t.charAt(e)) ? n = ' ' : 13 === A.charCodeAt(0) ? (M = 0, m.push(g), v = g > v ? g : v, g = - 2 * P, n = '', i = !0, f += 1)  : n = t.t.charAt(e), l.chars ? (a = l.getCharData(A, b.fStyle, l.getFontByName(t.f).fFamily), y = i ? 0 : a.w * t.s / 100)  : y = l.measureText(n, t.f, t.s), ' ' === A ? M += y + P : (g += y + P + M, M = 0), h.push({
l: y,
an: y,
add: p,
n: i,
anIndexes: [
],
val: n,
line: f
}), 2 == u) {
if (p += y, '' == n || ' ' == n || e == r - 1) {
for ('' != n && ' ' != n || (p -= y); _ <= e; ) h[_].an = p,
h[_].ind = d,
h[_].extra = y,
_ += 1;
d += 1,
p = 0
}
} else if (3 == u) {
if (p += y, '' == n || e == r - 1) {
for ('' == n && (p -= y); _ <= e; ) h[_].an = p,
h[_].ind = d,
h[_].extra = y,
_ += 1;
p = 0,
d += 1
}
} else h[d].ind = d,
h[d].extra = 0,
d += 1;
if (t.l = h, v = g > v ? g : v, m.push(g), t.sz) t.boxWidth = t.sz[0],
t.justifyOffset = 0;
 else switch (t.boxWidth = v, t.j) {
case 1:
t.justifyOffset = - t.boxWidth;
break;
case 2:
t.justifyOffset = - t.boxWidth / 2;
break;
default:
t.justifyOffset = 0
}
t.lineWidths = m;
var D,
k,
T = c.a;
o = T.length;
var j,
S,
I = [
];
for (s = 0; s < o; s += 1) {
for ((D = T[s]).a.sc && (t.strokeColorAnim = !0), D.a.sw && (t.strokeWidthAnim = !0), (D.a.fc || D.a.fh || D.a.fs || D.a.fb) && (t.fillColorAnim = !0), S = 0, j = D.s.b, e = 0; e < r; e += 1) (k = h[e]).anIndexes[s] = S,
(1 == j && '' != k.val || 2 == j && '' != k.val && ' ' != k.val || 3 == j && (k.n || ' ' == k.val || e == r - 1) || 4 == j && (k.n || e == r - 1)) && (1 === D.s.rn && I.push(S), S += 1);
c.a[s].s.totalChars = S;
var L,
B = - 1;
if (1 === D.s.rn) for (e = 0; e < r; e += 1) B != (k = h[e]).anIndexes[s] && (B = k.anIndexes[s], L = I.splice(Math.floor(Math.random() * I.length), 1) [0]),
k.anIndexes[s] = L
}
t.yOffset = t.lh || 1.2 * t.s,
t.ls = t.ls || 0,
t.ascent = b.ascent * t.s / 100
},
TextProperty.prototype.updateDocumentData = function (t, e) {
e = void 0 === e ? this.keysIndex : e;
var r = this.data.d.k[e].s;
r.__complete = !1,
r.t = t.t,
this.keysIndex = - 1,
this.firstFrame = !0,
this.getValue()
};
var pooling = {
double: function (t) {
return t.concat(Array.apply(null, {
length: t.length
}))
}
},
point_pool = function () {
var t = {
newPoint: function () {
return e ? i[e -= 1] : [
0.1,
0.1
]
},
release: function (t) {
e === r && (i = pooling.double(i), r *= 2),
i[e] = t,
e += 1
}
},
e = 0,
r = 8,
i = Array.apply(null, {
length: r
});
return t
}(),
shape_pool = function () {
var t = {
clone: function (t, e) {
var r,
i,
s = void 0 === t._length ? t.v.length : t._length,
o = n();
for (o.setLength(s), o.c = t.c, r = 0; r < s; r += 1) e ? (i = e.applyToPointArray(t.v[r][0], t.v[r][1], 0, 2), o.setXYAt(i[0], i[1], 'v', r), point_pool.release(i), i = e.applyToPointArray(t.o[r][0], t.o[r][1], 0, 2), o.setXYAt(i[0], i[1], 'o', r), point_pool.release(i), i = e.applyToPointArray(t.i[r][0], t.i[r][1], 0, 2), o.setXYAt(i[0], i[1], 'i', r), point_pool.release(i))  : o.setTripleAt(t.v[r][0], t.v[r][1], t.o[r][0], t.o[r][1], t.i[r][0], t.i[r][1], r);
return o
},
newShape: n,
release: s,
releaseArray: function (t, e) {
for (; e--; ) s(t[e])
}
},
e = 0,
r = 4,
i = Array.apply(null, {
length: r
});
function n() {
return e ? i[e -= 1] : new ShapePath
}
function s(t) {
e === r && (i = pooling.double(i), r *= 2);
var n,
s = t._length;
for (n = 0; n < s; n += 1) point_pool.release(t.v[n]),
point_pool.release(t.i[n]),
point_pool.release(t.o[n]),
t.v[n] = null,
t.i[n] = null,
t.o[n] = null;
t._length = 0,
t.c = !1,
i[e] = t,
e += 1
}
return t
}(),
shapeCollection_pool = function () {
var t = {
newShapeCollection: function () {
return e ? i[e -= 1] : new ShapeCollection
},
release: n,
clone: function (t, s) {
n(t),
e === r && (i = pooling.double(i), r *= 2),
i[e] = t,
e += 1
}
},
e = 0,
r = 4,
i = Array.apply(null, {
length: r
});
function n(t) {
var n,
s = t._length;
for (n = 0; n < s; n += 1) shape_pool.release(t.shapes[n]);
t._length = 0,
e === r && (i = pooling.double(i), r *= 2),
i[e] = t,
e += 1
}
return t
}();
function BaseRenderer() {
}
function SVGRenderer(t, e) {
this.animationItem = t,
this.layers = null,
this.renderedFrame = - 1,
this.globalData = {
frameNum: - 1
},
this.renderConfig = {
preserveAspectRatio: e && e.preserveAspectRatio || 'xMidYMid meet',
progressiveLoad: e && e.progressiveLoad || !1,
hideOnTransparent: !e || !1 !== e.hideOnTransparent,
viewBoxOnly: e && e.viewBoxOnly || !1,
className: e && e.className || ''
},
this.globalData.renderConfig = this.renderConfig,
this.elements = [
],
this.pendingElements = [
],
this.destroyed = !1
}
function MaskElement(t, e, r) {
this.dynamicProperties = [
],
this.data = t,
this.element = e,
this.globalData = r,
this.storedData = [
],
this.masksProperties = this.data.masksProperties,
this.viewData = Array.apply(null, {
length: this.masksProperties.length
}),
this.maskElement = null,
this.firstFrame = !0;
var i,
n,
s,
o,
a,
l,
c,
h,
d = this.globalData.defs,
u = this.masksProperties.length,
p = this.masksProperties,
_ = 0,
f = [
],
m = randomString(10),
g = 'clipPath',
v = 'clip-path';
for (i = 0; i < u; i++) if (('a' !== p[i].mode && 'n' !== p[i].mode || p[i].inv || 100 !== p[i].o.k) && (g = 'mask', v = 'mask'), 's' != p[i].mode && 'i' != p[i].mode || 0 != _ ? a = null : ((a = document.createElementNS(svgNS, 'rect')).setAttribute('fill', '#ffffff'), a.setAttribute('width', this.element.comp.data.w), a.setAttribute('height', this.element.comp.data.h), f.push(a)), n = document.createElementNS(svgNS, 'path'), 'n' != p[i].mode) {
if (_ += 1, 's' == p[i].mode ? n.setAttribute('fill', '#000000')  : n.setAttribute('fill', '#ffffff'), n.setAttribute('clip-rule', 'nonzero'), 0 !== p[i].x.k) {
g = 'mask',
v = 'mask',
h = PropertyFactory.getProp(this.element, p[i].x, 0, null, this.dynamicProperties);
var b = 'fi_' + randomString(10);
(l = document.createElementNS(svgNS, 'filter')).setAttribute('id', b),
(c = document.createElementNS(svgNS, 'feMorphology')).setAttribute('operator', 'dilate'),
c.setAttribute('in', 'SourceGraphic'),
c.setAttribute('radius', '0'),
l.appendChild(c),
d.appendChild(l),
's' == p[i].mode ? n.setAttribute('stroke', '#000000')  : n.setAttribute('stroke', '#ffffff')
} else c = null,
h = null;
if (this.storedData[i] = {
elem: n,
x: h,
expan: c,
lastPath: '',
lastOperator: '',
filterId: b,
lastRadius: 0
}, 'i' == p[i].mode) {
o = f.length;
var y = document.createElementNS(svgNS, 'g');
for (s = 0; s < o; s += 1) y.appendChild(f[s]);
var E = document.createElementNS(svgNS, 'mask');
E.setAttribute('mask-type', 'alpha'),
E.setAttribute('id', m + '_' + _),
E.appendChild(n),
d.appendChild(E),
y.setAttribute('mask', 'url(' + locationHref + '#' + m + '_' + _ + ')'),
f.length = 0,
f.push(y)
} else f.push(n);
p[i].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()),
this.viewData[i] = {
elem: n,
lastPath: '',
op: PropertyFactory.getProp(this.element, p[i].o, 0, 0.01, this.dynamicProperties),
prop: ShapePropertyFactory.getShapeProp(this.element, p[i], 3, this.dynamicProperties, null)
},
a && (this.viewData[i].invRect = a),
this.viewData[i].prop.k || this.drawPath(p[i], this.viewData[i].prop.v, this.viewData[i])
} else this.viewData[i] = {
op: PropertyFactory.getProp(this.element, p[i].o, 0, 0.01, this.dynamicProperties),
prop: ShapePropertyFactory.getShapeProp(this.element, p[i], 3, this.dynamicProperties, null),
elem: n
},
d.appendChild(n);
for (this.maskElement = document.createElementNS(svgNS, g), u = f.length, i = 0; i < u; i += 1) this.maskElement.appendChild(f[i]);
this.maskElement.setAttribute('id', m),
_ > 0 && this.element.maskedElement.setAttribute(v, 'url(' + locationHref + '#' + m + ')'),
d.appendChild(this.maskElement)
}
function BaseElement() {
}
function SVGBaseElement(t, e, r, i, n) {
this.globalData = r,
this.comp = i,
this.data = t,
this.matteElement = null,
this.transformedElement = null,
this.isTransparent = !1,
this.parentContainer = e,
this.layerId = n ? n.layerId : 'ly_' + randomString(10),
this.placeholder = n,
this._sizeChanged = !1,
this.init()
}
function IShapeElement(t, e, r, i, n) {
this.shapes = [
],
this.shapesData = t.shapes,
this.stylesList = [
],
this.itemsData = [
],
this.prevViewData = [
],
this.shapeModifiers = [
],
this.processedElements = [
],
this._parent.constructor.call(this, t, e, r, i, n)
}
BaseRenderer.prototype.checkLayers = function (t) {
var e,
r,
i = this.layers.length;
for (this.completeLayers = !0, e = i - 1; e >= 0; e--) this.elements[e] || (r = this.layers[e]).ip - r.st <= t - this.layers[e].st && r.op - r.st > t - this.layers[e].st && this.buildItem(e),
this.completeLayers = !!this.elements[e] && this.completeLayers;
this.checkPendingElements()
},
BaseRenderer.prototype.createItem = function (t) {
switch (t.ty) {
case 2:
return this.createImage(t);
case 0:
return this.createComp(t);
case 1:
return this.createSolid(t);
case 4:
return this.createShape(t);
case 5:
return this.createText(t);
case 13:
return this.createCamera(t);
case 99:
return null
}
return this.createBase(t)
},
BaseRenderer.prototype.createCamera = function () {
throw new Error('You\'re using a 3d camera. Try the html renderer.')
},
BaseRenderer.prototype.buildAllItems = function () {
var t,
e = this.layers.length;
for (t = 0; t < e; t += 1) this.buildItem(t);
this.checkPendingElements()
},
BaseRenderer.prototype.includeLayers = function (t) {
this.completeLayers = !1;
var e,
r,
i = t.length,
n = this.layers.length;
for (e = 0; e < i; e += 1) for (r = 0; r < n; ) {
if (this.layers[r].id == t[e].id) {
this.layers[r] = t[e];
break
}
r += 1
}
},
BaseRenderer.prototype.setProjectInterface = function (t) {
this.globalData.projectInterface = t
},
BaseRenderer.prototype.initItems = function () {
this.globalData.progressiveLoad || this.buildAllItems()
},
BaseRenderer.prototype.buildElementParenting = function (t, e, r) {
r = r || [
];
for (var i = this.elements, n = this.layers, s = 0, o = n.length; s < o; ) n[s].ind == e && (i[s] && !0 !== i[s] ? void 0 !== n[s].parent ? (r.push(i[s]), i[s]._isParent = !0, this.buildElementParenting(t, n[s].parent, r))  : (r.push(i[s]), i[s]._isParent = !0, t.setHierarchy(r))  : (this.buildItem(s), this.addPendingElement(t))),
s += 1
},
BaseRenderer.prototype.addPendingElement = function (t) {
this.pendingElements.push(t)
},
extendPrototype(BaseRenderer, SVGRenderer),
SVGRenderer.prototype.createBase = function (t) {
return new SVGBaseElement(t, this.layerElement, this.globalData, this)
},
SVGRenderer.prototype.createShape = function (t) {
return new IShapeElement(t, this.layerElement, this.globalData, this)
},
SVGRenderer.prototype.createText = function (t) {
return new SVGTextElement(t, this.layerElement, this.globalData, this)
},
SVGRenderer.prototype.createImage = function (t) {
return new IImageElement(t, this.layerElement, this.globalData, this)
},
SVGRenderer.prototype.createComp = function (t) {
return new ICompElement(t, this.layerElement, this.globalData, this)
},
SVGRenderer.prototype.createSolid = function (t) {
return new ISolidElement(t, this.layerElement, this.globalData, this)
},
SVGRenderer.prototype.configAnimation = function (t) {
this.layerElement = document.createElementNS(svgNS, 'svg'),
this.layerElement.setAttribute('xmlns', 'http://www.w3.org/2000/svg'),
this.layerElement.setAttribute('viewBox', '0 0 ' + t.w + ' ' + t.h),
this.renderConfig.viewBoxOnly || (this.layerElement.setAttribute('width', t.w), this.layerElement.setAttribute('height', t.h), this.layerElement.style.width = '100%', this.layerElement.style.height = '100%'),
this.renderConfig.className && this.layerElement.setAttribute('class', this.renderConfig.className),
this.layerElement.setAttribute('preserveAspectRatio', this.renderConfig.preserveAspectRatio),
this.animationItem.wrapper.appendChild(this.layerElement);
var e = document.createElementNS(svgNS, 'defs');
this.globalData.defs = e,
this.layerElement.appendChild(e),
this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem),
this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem),
this.globalData.progressiveLoad = this.renderConfig.progressiveLoad,
this.globalData.frameId = 0,
this.globalData.nm = t.nm,
this.globalData.compSize = {
w: t.w,
h: t.h
},
this.data = t,
this.globalData.frameRate = t.fr;
var r = document.createElementNS(svgNS, 'clipPath'),
i = document.createElementNS(svgNS, 'rect');
i.setAttribute('width', t.w),
i.setAttribute('height', t.h),
i.setAttribute('x', 0),
i.setAttribute('y', 0);
var n = 'animationMask_' + randomString(10);
r.setAttribute('id', n),
r.appendChild(i);
var s = document.createElementNS(svgNS, 'g');
s.setAttribute('clip-path', 'url(' + locationHref + '#' + n + ')'),
this.layerElement.appendChild(s),
e.appendChild(r),
this.layerElement = s,
this.layers = t.layers,
this.globalData.fontManager = new FontManager,
this.globalData.fontManager.addChars(t.chars),
this.globalData.fontManager.addFonts(t.fonts, e),
this.elements = Array.apply(null, {
length: t.layers.length
})
},
SVGRenderer.prototype.destroy = function () {
this.animationItem.wrapper.innerHTML = '',
this.layerElement = null,
this.globalData.defs = null;
var t,
e = this.layers ? this.layers.length : 0;
for (t = 0; t < e; t++) this.elements[t] && this.elements[t].destroy();
this.elements.length = 0,
this.destroyed = !0,
this.animationItem = null
},
SVGRenderer.prototype.updateContainerSize = function () {
},
SVGRenderer.prototype.buildItem = function (t) {
var e = this.elements;
if (!e[t] && 99 != this.layers[t].ty) {
e[t] = !0;
var r = this.createItem(this.layers[t]);
e[t] = r,
expressionsPlugin && (0 === this.layers[t].ty && this.globalData.projectInterface.registerComposition(r), r.initExpressions()),
this.appendElementInPos(r, t),
this.layers[t].tt && (this.elements[t - 1] && !0 !== this.elements[t - 1] ? r.setMatte(e[t - 1].layerId)  : (this.buildItem(t - 1), this.addPendingElement(r)))
}
},
SVGRenderer.prototype.checkPendingElements = function () {
for (; this.pendingElements.length; ) {
var t = this.pendingElements.pop();
if (t.checkParenting(), t.data.tt) for (var e = 0, r = this.elements.length; e < r; ) {
if (this.elements[e] === t) {
t.setMatte(this.elements[e - 1].layerId);
break
}
e += 1
}
}
},
SVGRenderer.prototype.renderFrame = function (t) {
if (this.renderedFrame != t && !this.destroyed) {
null === t ? t = this.renderedFrame : this.renderedFrame = t,
this.globalData.frameNum = t,
this.globalData.frameId += 1,
this.globalData.projectInterface.currentFrame = t;
var e,
r = this.layers.length;
for (this.completeLayers || this.checkLayers(t), e = r - 1; e >= 0; e--) (this.completeLayers || this.elements[e]) && this.elements[e].prepareFrame(t - this.layers[e].st);
for (e = r - 1; e >= 0; e--) (this.completeLayers || this.elements[e]) && this.elements[e].renderFrame()
}
},
SVGRenderer.prototype.appendElementInPos = function (t, e) {
var r = t.getBaseElement();
if (r) {
for (var i, n = 0; n < e; ) this.elements[n] && !0 !== this.elements[n] && this.elements[n].getBaseElement() && (i = this.elements[n].getBaseElement()),
n += 1;
i ? this.layerElement.insertBefore(r, i)  : this.layerElement.appendChild(r)
}
},
SVGRenderer.prototype.hide = function () {
this.layerElement.style.display = 'none'
},
SVGRenderer.prototype.show = function () {
this.layerElement.style.display = 'block'
},
SVGRenderer.prototype.searchExtraCompositions = function (t) {
var e,
r = t.length,
i = document.createElementNS(svgNS, 'g');
for (e = 0; e < r; e += 1) if (t[e].xt) {
var n = this.createComp(t[e], i, this.globalData.comp, null);
n.initExpressions(),
this.globalData.projectInterface.registerComposition(n)
}
},
MaskElement.prototype.getMaskProperty = function (t) {
return this.viewData[t].prop
},
MaskElement.prototype.prepareFrame = function () {
var t,
e = this.dynamicProperties.length;
for (t = 0; t < e; t += 1) this.dynamicProperties[t].getValue()
},
MaskElement.prototype.renderFrame = function (t) {
var e,
r = this.masksProperties.length;
for (e = 0; e < r; e++) if ((this.viewData[e].prop.mdf || this.firstFrame) && this.drawPath(this.masksProperties[e], this.viewData[e].prop.v, this.viewData[e]), (this.viewData[e].op.mdf || this.firstFrame) && this.viewData[e].elem.setAttribute('fill-opacity', this.viewData[e].op.v), 'n' !== this.masksProperties[e].mode && (this.viewData[e].invRect && (this.element.finalTransform.mProp.mdf || this.firstFrame) && (this.viewData[e].invRect.setAttribute('x', - t.props[12]), this.viewData[e].invRect.setAttribute('y', - t.props[13])), this.storedData[e].x && (this.storedData[e].x.mdf || this.firstFrame))) {
var i = this.storedData[e].expan;
this.storedData[e].x.v < 0 ? ('erode' !== this.storedData[e].lastOperator && (this.storedData[e].lastOperator = 'erode', this.storedData[e].elem.setAttribute('filter', 'url(' + locationHref + '#' + this.storedData[e].filterId + ')')), i.setAttribute('radius', - this.storedData[e].x.v))  : ('dilate' !== this.storedData[e].lastOperator && (this.storedData[e].lastOperator = 'dilate', this.storedData[e].elem.setAttribute('filter', null)), this.storedData[e].elem.setAttribute('stroke-width', 2 * this.storedData[e].x.v))
}
this.firstFrame = !1
},
MaskElement.prototype.getMaskelement = function () {
return this.maskElement
},
MaskElement.prototype.createLayerSolidPath = function () {
var t = 'M0,0 ';
return t += ' h' + this.globalData.compSize.w,
t += ' v' + this.globalData.compSize.h,
t += ' h-' + this.globalData.compSize.w,
t += ' v-' + this.globalData.compSize.h + ' '
},
MaskElement.prototype.drawPath = function (t, e, r) {
var i,
n,
s = ' M' + e.v[0][0] + ',' + e.v[0][1];
for (n = e._length, i = 1; i < n; i += 1) s += ' C' + bm_rnd(e.o[i - 1][0]) + ',' + bm_rnd(e.o[i - 1][1]) + ' ' + bm_rnd(e.i[i][0]) + ',' + bm_rnd(e.i[i][1]) + ' ' + bm_rnd(e.v[i][0]) + ',' + bm_rnd(e.v[i][1]);
e.c && n > 1 && (s += ' C' + bm_rnd(e.o[i - 1][0]) + ',' + bm_rnd(e.o[i - 1][1]) + ' ' + bm_rnd(e.i[0][0]) + ',' + bm_rnd(e.i[0][1]) + ' ' + bm_rnd(e.v[0][0]) + ',' + bm_rnd(e.v[0][1])),
r.lastPath !== s && (r.elem && (e.c ? t.inv ? r.elem.setAttribute('d', this.solidPath + s)  : r.elem.setAttribute('d', s)  : r.elem.setAttribute('d', '')), r.lastPath = s)
},
MaskElement.prototype.destroy = function () {
this.element = null,
this.globalData = null,
this.maskElement = null,
this.data = null,
this.masksProperties = null
},
BaseElement.prototype.checkMasks = function () {
if (!this.data.hasMask) return !1;
for (var t = 0, e = this.data.masksProperties.length; t < e; ) {
if ('n' !== this.data.masksProperties[t].mode && !1 !== this.data.masksProperties[t].cl) return !0;
t += 1
}
return !1
},
BaseElement.prototype.checkParenting = function () {
void 0 !== this.data.parent && this.comp.buildElementParenting(this, this.data.parent)
},
BaseElement.prototype.prepareFrame = function (t) {
this.data.ip - this.data.st <= t && this.data.op - this.data.st > t ? !0 !== this.isVisible && (this.elemMdf = !0, this.globalData.mdf = !0, this.isVisible = !0, this.firstFrame = !0, this.data.hasMask && (this.maskManager.firstFrame = !0))  : !1 !== this.isVisible && (this.elemMdf = !0, this.globalData.mdf = !0, this.isVisible = !1);
var e,
r = this.dynamicProperties.length;
for (e = 0; e < r; e += 1) (this.isVisible || this._isParent && 'transform' === this.dynamicProperties[e].type) && (this.dynamicProperties[e].getValue(), this.dynamicProperties[e].mdf && (this.elemMdf = !0, this.globalData.mdf = !0));
return this.data.hasMask && this.isVisible && this.maskManager.prepareFrame(t * this.data.sr),
this.currentFrameNum = t * this.data.sr,
this.isVisible
},
BaseElement.prototype.globalToLocal = function (t) {
var e = [
];
e.push(this.finalTransform);
for (var r = !0, i = this.comp; r; ) i.finalTransform ? (i.data.hasMask && e.splice(0, 0, i.finalTransform), i = i.comp)  : r = !1;
var n,
s,
o = e.length;
for (n = 0; n < o; n += 1) s = e[n].mat.applyToPointArray(0, 0, 0),
t = [
t[0] - s[0],
t[1] - s[1],
0
];
return t
},
BaseElement.prototype.initExpressions = function () {
this.layerInterface = LayerExpressionInterface(this),
this.data.hasMask && this.layerInterface.registerMaskInterface(this.maskManager);
var t = EffectsExpressionInterface.createEffectsInterface(this, this.layerInterface);
this.layerInterface.registerEffectsInterface(t),
0 === this.data.ty || this.data.xt ? this.compInterface = CompExpressionInterface(this)  : 4 === this.data.ty ? this.layerInterface.shapeInterface = ShapeExpressionInterface.createShapeInterface(this.shapesData, this.itemsData, this.layerInterface)  : 5 === this.data.ty && (this.layerInterface.textInterface = TextExpressionInterface(this))
},
BaseElement.prototype.setBlendMode = function () {
var t = '';
switch (this.data.bm) {
case 1:
t = 'multiply';
break;
case 2:
t = 'screen';
break;
case 3:
t = 'overlay';
break;
case 4:
t = 'darken';
break;
case 5:
t = 'lighten';
break;
case 6:
t = 'color-dodge';
break;
case 7:
t = 'color-burn';
break;
case 8:
t = 'hard-light';
break;
case 9:
t = 'soft-light';
break;
case 10:
t = 'difference';
break;
case 11:
t = 'exclusion';
break;
case 12:
t = 'hue';
break;
case 13:
t = 'saturation';
break;
case 14:
t = 'color';
break;
case 15:
t = 'luminosity'
}(this.baseElement || this.layerElement).style['mix-blend-mode'] = t
},
BaseElement.prototype.init = function () {
this.data.sr || (this.data.sr = 1),
this.dynamicProperties = this.dynamicProperties || [
],
this.data.ef && (this.effects = new EffectsManager(this.data, this, this.dynamicProperties)),
this.hidden = !1,
this.firstFrame = !0,
this.isVisible = !1,
this._isParent = !1,
this.currentFrameNum = - 99999,
this.lastNum = - 99999,
this.data.ks && (this.finalTransform = {
mProp: PropertyFactory.getProp(this, this.data.ks, 2, null, this.dynamicProperties),
matMdf: !1,
opMdf: !1,
mat: new Matrix,
opacity: 1
}, this.data.ao && (this.finalTransform.mProp.autoOriented = !0), this.finalTransform.op = this.finalTransform.mProp.o, this.transform = this.finalTransform.mProp, 11 !== this.data.ty && this.createElements(), this.data.hasMask && this.addMasks(this.data)),
this.elemMdf = !1
},
BaseElement.prototype.getType = function () {
return this.type
},
BaseElement.prototype.resetHierarchy = function () {
this.hierarchy ? this.hierarchy.length = 0 : this.hierarchy = [
]
},
BaseElement.prototype.getHierarchy = function () {
return this.hierarchy || (this.hierarchy = [
]),
this.hierarchy
},
BaseElement.prototype.setHierarchy = function (t) {
this.hierarchy = t
},
BaseElement.prototype.getLayerSize = function () {
return 5 === this.data.ty ? {
w: this.data.textData.width,
h: this.data.textData.height
}
 : {
w: this.data.width,
h: this.data.height
}
},
BaseElement.prototype.hide = function () {
},
BaseElement.prototype.sourceRectAtTime = function () {
return {
top: 0,
left: 0,
width: 100,
height: 100
}
},
BaseElement.prototype.mHelper = new Matrix,
createElement(BaseElement, SVGBaseElement),
SVGBaseElement.prototype.createElements = function () {
this.layerElement = document.createElementNS(svgNS, 'g'),
this.transformedElement = this.layerElement,
this.data.hasMask && (this.maskedElement = this.layerElement);
var t = null;
if (this.data.td) {
if (3 == this.data.td || 1 == this.data.td) {
var e = document.createElementNS(svgNS, 'mask');
if (e.setAttribute('id', this.layerId), e.setAttribute('mask-type', 3 == this.data.td ? 'luminance' : 'alpha'), e.appendChild(this.layerElement), t = e, this.globalData.defs.appendChild(e), !featureSupport.maskType && 1 == this.data.td) {
e.setAttribute('mask-type', 'luminance');
var r = randomString(10),
i = filtersFactory.createFilter(r);
this.globalData.defs.appendChild(i),
i.appendChild(filtersFactory.createAlphaToLuminanceFilter()),
(l = document.createElementNS(svgNS, 'g')).appendChild(this.layerElement),
t = l,
e.appendChild(l),
l.setAttribute('filter', 'url(' + locationHref + '#' + r + ')')
}
} else if (2 == this.data.td) {
var n = document.createElementNS(svgNS, 'mask');
n.setAttribute('id', this.layerId),
n.setAttribute('mask-type', 'alpha');
var s = document.createElementNS(svgNS, 'g');
n.appendChild(s),
r = randomString(10),
i = filtersFactory.createFilter(r);
var o = document.createElementNS(svgNS, 'feColorMatrix');
o.setAttribute('type', 'matrix'),
o.setAttribute('color-interpolation-filters', 'sRGB'),
o.setAttribute('values', '1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 -1 1'),
i.appendChild(o),
this.globalData.defs.appendChild(i);
var a = document.createElementNS(svgNS, 'rect');
if (a.setAttribute('width', this.comp.data.w), a.setAttribute('height', this.comp.data.h), a.setAttribute('x', '0'), a.setAttribute('y', '0'), a.setAttribute('fill', '#ffffff'), a.setAttribute('opacity', '0'), s.setAttribute('filter', 'url(' + locationHref + '#' + r + ')'), s.appendChild(a), s.appendChild(this.layerElement), t = s, !featureSupport.maskType) {
n.setAttribute('mask-type', 'luminance'),
i.appendChild(filtersFactory.createAlphaToLuminanceFilter());
var l = document.createElementNS(svgNS, 'g');
s.appendChild(a),
l.appendChild(this.layerElement),
t = l,
s.appendChild(l)
}
this.globalData.defs.appendChild(n)
}
} else (this.data.hasMask || this.data.tt) && this.data.tt ? (this.matteElement = document.createElementNS(svgNS, 'g'), this.matteElement.appendChild(this.layerElement), t = this.matteElement, this.baseElement = this.matteElement)  : this.baseElement = this.layerElement;
if (!this.data.ln && !this.data.cl || 4 !== this.data.ty && 0 !== this.data.ty || (this.data.ln && this.layerElement.setAttribute('id', this.data.ln), this.data.cl && this.layerElement.setAttribute('class', this.data.cl)), 0 === this.data.ty) {
var c = document.createElementNS(svgNS, 'clipPath'),
h = document.createElementNS(svgNS, 'path');
h.setAttribute('d', 'M0,0 L' + this.data.w + ',0 L' + this.data.w + ',' + this.data.h + ' L0,' + this.data.h + 'z');
var d = 'cp_' + randomString(8);
if (c.setAttribute('id', d), c.appendChild(h), this.globalData.defs.appendChild(c), this.checkMasks()) {
var u = document.createElementNS(svgNS, 'g');
u.setAttribute('clip-path', 'url(' + locationHref + '#' + d + ')'),
u.appendChild(this.layerElement),
this.transformedElement = u,
t ? t.appendChild(this.transformedElement)  : this.baseElement = this.transformedElement
} else this.layerElement.setAttribute('clip-path', 'url(' + locationHref + '#' + d + ')')
}
0 !== this.data.bm && this.setBlendMode(),
this.layerElement !== this.parentContainer && (this.placeholder = null),
this.data.ef && (this.effectsManager = new SVGEffects(this)),
this.checkParenting()
},
SVGBaseElement.prototype.setBlendMode = BaseElement.prototype.setBlendMode,
SVGBaseElement.prototype.renderFrame = function (t) {
if (3 === this.data.ty || this.data.hd || !this.isVisible) return !1;
var e;
this.lastNum = this.currentFrameNum,
this.finalTransform.opMdf = this.firstFrame || this.finalTransform.op.mdf,
this.finalTransform.matMdf = this.firstFrame || this.finalTransform.mProp.mdf,
this.finalTransform.opacity = this.finalTransform.op.v;
var r = this.finalTransform.mat;
if (this.hierarchy) {
var i = 0,
n = this.hierarchy.length;
if (!this.finalTransform.matMdf) for (; i < n; ) {
if (this.hierarchy[i].finalTransform.mProp.mdf) {
this.finalTransform.matMdf = !0;
break
}
i += 1
}
if (this.finalTransform.matMdf) for (e = this.finalTransform.mProp.v.props, r.cloneFromProps(e), i = 0; i < n; i += 1) e = this.hierarchy[i].finalTransform.mProp.v.props,
r.transform(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8], e[9], e[10], e[11], e[12], e[13], e[14], e[15])
} else this.isVisible && (r = this.finalTransform.mProp.v);
return this.finalTransform.matMdf && this.layerElement && this.transformedElement.setAttribute('transform', r.to2dCSS()),
this.finalTransform.opMdf && this.layerElement && (this.finalTransform.op.v <= 0 ? !this.isTransparent && this.globalData.renderConfig.hideOnTransparent && (this.isTransparent = !0, this.hide())  : this.hidden && this.isTransparent && (this.isTransparent = !1, this.show()), this.transformedElement.setAttribute('opacity', this.finalTransform.op.v)),
this.data.hasMask && this.maskManager.renderFrame(r),
this.effectsManager && this.effectsManager.renderFrame(this.firstFrame),
this.isVisible
},
SVGBaseElement.prototype.destroy = function () {
this.layerElement = null,
this.parentContainer = null,
this.matteElement && (this.matteElement = null),
this.maskManager && this.maskManager.destroy()
},
SVGBaseElement.prototype.getBaseElement = function () {
return this.baseElement
},
SVGBaseElement.prototype.addMasks = function (t) {
this.maskManager = new MaskElement(t, this, this.globalData)
},
SVGBaseElement.prototype.setMatte = function (t) {
this.matteElement && this.matteElement.setAttribute('mask', 'url(' + locationHref + '#' + t + ')')
},
SVGBaseElement.prototype.hide = function () {
this.hidden || (this.layerElement.style.display = 'none', this.hidden = !0)
},
SVGBaseElement.prototype.show = function () {
this.isVisible && !this.isTransparent && (this.hidden = !1, this.layerElement.style.display = 'block')
},
createElement(SVGBaseElement, IShapeElement),
IShapeElement.prototype.identityMatrix = new Matrix,
IShapeElement.prototype.lcEnum = {
1: 'butt',
2: 'round',
3: 'square'
},
IShapeElement.prototype.ljEnum = {
1: 'miter',
2: 'round',
3: 'butt'
},
IShapeElement.prototype.searchProcessedElement = function (t) {
for (var e = this.processedElements.length; e; ) if (e -= 1, this.processedElements[e].elem === t) return this.processedElements[e].pos;
return 0
},
IShapeElement.prototype.addProcessedElement = function (t, e) {
for (var r = this.processedElements.length; r; ) if (r -= 1, this.processedElements[r].elem === t) {
this.processedElements[r].pos = e;
break
}
0 === r && this.processedElements.push({
elem: t,
pos: e
})
},
IShapeElement.prototype.buildExpressionInterface = function () {
},
IShapeElement.prototype.createElements = function () {
this._parent.createElements.call(this),
this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, this.dynamicProperties, 0, [
], !0),
this.data.hd && !this.data.td || styleUnselectableDiv(this.layerElement)
},
IShapeElement.prototype.setGradientData = function (t, e, r) {
var i,
n = 'gr_' + randomString(10);
(i = 1 === e.t ? document.createElementNS(svgNS, 'linearGradient')  : document.createElementNS(svgNS, 'radialGradient')).setAttribute('id', n),
i.setAttribute('spreadMethod', 'pad'),
i.setAttribute('gradientUnits', 'userSpaceOnUse');
var s,
o,
a,
l = [
];
for (a = 4 * e.g.p, o = 0; o < a; o += 4) s = document.createElementNS(svgNS, 'stop'),
i.appendChild(s),
l.push(s);
t.setAttribute('gf' === e.ty ? 'fill' : 'stroke', 'url(#' + n + ')'),
this.globalData.defs.appendChild(i),
r.gf = i,
r.cst = l
},
IShapeElement.prototype.setGradientOpacity = function (t, e, r) {
if (t.g.k.k[0].s && t.g.k.k[0].s.length > 4 * t.g.p || t.g.k.k.length > 4 * t.g.p) {
var i,
n,
s,
o,
a = document.createElementNS(svgNS, 'mask'),
l = document.createElementNS(svgNS, 'path');
a.appendChild(l);
var c = 'op_' + randomString(10),
h = 'mk_' + randomString(10);
a.setAttribute('id', h),
(i = 1 === t.t ? document.createElementNS(svgNS, 'linearGradient')  : document.createElementNS(svgNS, 'radialGradient')).setAttribute('id', c),
i.setAttribute('spreadMethod', 'pad'),
i.setAttribute('gradientUnits', 'userSpaceOnUse'),
o = t.g.k.k[0].s ? t.g.k.k[0].s.length : t.g.k.k.length;
var d = [
];
for (s = 4 * t.g.p; s < o; s += 2) (n = document.createElementNS(svgNS, 'stop')).setAttribute('stop-color', 'rgb(255,255,255)'),
i.appendChild(n),
d.push(n);
return l.setAttribute('gf' === t.ty ? 'fill' : 'stroke', 'url(#' + c + ')'),
this.globalData.defs.appendChild(i),
this.globalData.defs.appendChild(a),
e.of = i,
e.ost = d,
r.msElem = l,
h
}
},
IShapeElement.prototype.createStyleElement = function (t, e, r) {
var i = {
},
n = {
data: t,
type: t.ty,
d: '',
ld: '',
lvl: e,
mdf: !1,
closed: !1
},
s = document.createElementNS(svgNS, 'path');
if (i.o = PropertyFactory.getProp(this, t.o, 0, 0.01, r), ('st' == t.ty || 'gs' == t.ty) && (s.setAttribute('stroke-linecap', this.lcEnum[t.lc] || 'round'), s.setAttribute('stroke-linejoin', this.ljEnum[t.lj] || 'round'), s.setAttribute('fill-opacity', '0'), 1 == t.lj && s.setAttribute('stroke-miterlimit', t.ml), i.w = PropertyFactory.getProp(this, t.w, 0, null, r), t.d)) {
var o = PropertyFactory.getDashProp(this, t.d, 'svg', r);
o.k || (s.setAttribute('stroke-dasharray', o.dasharray), s.setAttribute('stroke-dashoffset', o.dashoffset)),
i.d = o
}
if ('fl' == t.ty || 'st' == t.ty) i.c = PropertyFactory.getProp(this, t.c, 1, 255, r);
 else {
i.g = PropertyFactory.getGradientProp(this, t.g, r),
2 == t.t && (i.h = PropertyFactory.getProp(this, t.h, 0, 0.01, r), i.a = PropertyFactory.getProp(this, t.a, 0, degToRads, r)),
i.s = PropertyFactory.getProp(this, t.s, 1, null, r),
i.e = PropertyFactory.getProp(this, t.e, 1, null, r),
this.setGradientData(s, t, i, n);
var a = this.setGradientOpacity(t, i, n);
a && s.setAttribute('mask', 'url(#' + a + ')')
}
return i.elem = s,
2 === t.r && s.setAttribute('fill-rule', 'evenodd'),
t.ln && s.setAttribute('id', t.ln),
t.cl && s.setAttribute('class', t.cl),
n.pElem = s,
this.stylesList.push(n),
i.style = n,
i
},
IShapeElement.prototype.createGroupElement = function (t) {
var e = {
it: [
],
prevViewData: [
]
},
r = document.createElementNS(svgNS, 'g');
return e.gr = r,
t.ln && e.gr.setAttribute('id', t.ln),
e
},
IShapeElement.prototype.createTransformElement = function (t, e) {
return {
transform: {
op: PropertyFactory.getProp(this, t.o, 0, 0.01, e),
mProps: PropertyFactory.getProp(this, t, 2, null, e)
},
elements: [
]
}
},
IShapeElement.prototype.createShapeElement = function (t, e, r, i) {
var n = {
elements: [
],
caches: [
],
styles: [
],
transformers: e,
lStr: ''
},
s = 4;
return 'rc' == t.ty ? s = 5 : 'el' == t.ty ? s = 6 : 'sr' == t.ty && (s = 7),
n.sh = ShapePropertyFactory.getShapeProp(this, t, s, i),
n.lvl = r,
this.shapes.push(n.sh),
this.addShapeToModifiers(n),
n
};
var cont = 0;
function ITextElement(t, e, r, i) {
}
function SVGTextElement(t, e, r, i, n) {
this.textSpans = [
],
this.renderType = 'svg',
this._parent.constructor.call(this, t, e, r, i, n)
}
function SVGTintFilter(t, e) {
this.filterManager = e;
var r = document.createElementNS(svgNS, 'feColorMatrix');
if (r.setAttribute('type', 'matrix'), r.setAttribute('color-interpolation-filters', 'linearRGB'), r.setAttribute('values', '0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0'), r.setAttribute('result', 'f1'), t.appendChild(r), (r = document.createElementNS(svgNS, 'feColorMatrix')).setAttribute('type', 'matrix'), r.setAttribute('color-interpolation-filters', 'sRGB'), r.setAttribute('values', '1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0'), r.setAttribute('result', 'f2'), t.appendChild(r), this.matrixFilter = r, 100 !== e.effectElements[2].p.v || e.effectElements[2].p.k) {
var i,
n = document.createElementNS(svgNS, 'feMerge');
t.appendChild(n),
(i = document.createElementNS(svgNS, 'feMergeNode')).setAttribute('in', 'SourceGraphic'),
n.appendChild(i),
(i = document.createElementNS(svgNS, 'feMergeNode')).setAttribute('in', 'f2'),
n.appendChild(i)
}
}
function SVGFillFilter(t, e) {
this.filterManager = e;
var r = document.createElementNS(svgNS, 'feColorMatrix');
r.setAttribute('type', 'matrix'),
r.setAttribute('color-interpolation-filters', 'sRGB'),
r.setAttribute('values', '1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0'),
t.appendChild(r),
this.matrixFilter = r
}
function SVGStrokeEffect(t, e) {
this.initialized = !1,
this.filterManager = e,
this.elem = t,
this.paths = [
]
}
function SVGTritoneFilter(t, e) {
this.filterManager = e;
var r = document.createElementNS(svgNS, 'feColorMatrix');
r.setAttribute('type', 'matrix'),
r.setAttribute('color-interpolation-filters', 'linearRGB'),
r.setAttribute('values', '0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0'),
r.setAttribute('result', 'f1'),
t.appendChild(r);
var i = document.createElementNS(svgNS, 'feComponentTransfer');
i.setAttribute('color-interpolation-filters', 'sRGB'),
t.appendChild(i),
this.matrixFilter = i;
var n = document.createElementNS(svgNS, 'feFuncR');
n.setAttribute('type', 'table'),
i.appendChild(n),
this.feFuncR = n;
var s = document.createElementNS(svgNS, 'feFuncG');
s.setAttribute('type', 'table'),
i.appendChild(s),
this.feFuncG = s;
var o = document.createElementNS(svgNS, 'feFuncB');
o.setAttribute('type', 'table'),
i.appendChild(o),
this.feFuncB = o
}
function SVGProLevelsFilter(t, e) {
this.filterManager = e;
var r = this.filterManager.effectElements,
i = document.createElementNS(svgNS, 'feComponentTransfer');
(r[9].p.k || 0 !== r[9].p.v || r[10].p.k || 1 !== r[10].p.v || r[11].p.k || 1 !== r[11].p.v || r[12].p.k || 0 !== r[12].p.v || r[13].p.k || 1 !== r[13].p.v) && (this.feFuncR = this.createFeFunc('feFuncR', i)),
(r[16].p.k || 0 !== r[16].p.v || r[17].p.k || 1 !== r[17].p.v || r[18].p.k || 1 !== r[18].p.v || r[19].p.k || 0 !== r[19].p.v || r[20].p.k || 1 !== r[20].p.v) && (this.feFuncG = this.createFeFunc('feFuncG', i)),
(r[23].p.k || 0 !== r[23].p.v || r[24].p.k || 1 !== r[24].p.v || r[25].p.k || 1 !== r[25].p.v || r[26].p.k || 0 !== r[26].p.v || r[27].p.k || 1 !== r[27].p.v) && (this.feFuncB = this.createFeFunc('feFuncB', i)),
(r[30].p.k || 0 !== r[30].p.v || r[31].p.k || 1 !== r[31].p.v || r[32].p.k || 1 !== r[32].p.v || r[33].p.k || 0 !== r[33].p.v || r[34].p.k || 1 !== r[34].p.v) && (this.feFuncA = this.createFeFunc('feFuncA', i)),
(this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA) && (i.setAttribute('color-interpolation-filters', 'sRGB'), t.appendChild(i), i = document.createElementNS(svgNS, 'feComponentTransfer')),
(r[2].p.k || 0 !== r[2].p.v || r[3].p.k || 1 !== r[3].p.v || r[4].p.k || 1 !== r[4].p.v || r[5].p.k || 0 !== r[5].p.v || r[6].p.k || 1 !== r[6].p.v) && (i.setAttribute('color-interpolation-filters', 'sRGB'), t.appendChild(i), this.feFuncRComposed = this.createFeFunc('feFuncR', i), this.feFuncGComposed = this.createFeFunc('feFuncG', i), this.feFuncBComposed = this.createFeFunc('feFuncB', i))
}
function SVGDropShadowEffect(t, e) {
t.setAttribute('x', '-100%'),
t.setAttribute('y', '-100%'),
t.setAttribute('width', '400%'),
t.setAttribute('height', '400%'),
this.filterManager = e;
var r = document.createElementNS(svgNS, 'feGaussianBlur');
r.setAttribute('in', 'SourceAlpha'),
r.setAttribute('result', 'drop_shadow_1'),
r.setAttribute('stdDeviation', '0'),
this.feGaussianBlur = r,
t.appendChild(r);
var i = document.createElementNS(svgNS, 'feOffset');
i.setAttribute('dx', '25'),
i.setAttribute('dy', '0'),
i.setAttribute('in', 'drop_shadow_1'),
i.setAttribute('result', 'drop_shadow_2'),
this.feOffset = i,
t.appendChild(i);
var n = document.createElementNS(svgNS, 'feFlood');
n.setAttribute('flood-color', '#00ff00'),
n.setAttribute('flood-opacity', '1'),
n.setAttribute('result', 'drop_shadow_3'),
this.feFlood = n,
t.appendChild(n);
var s = document.createElementNS(svgNS, 'feComposite');
s.setAttribute('in', 'drop_shadow_3'),
s.setAttribute('in2', 'drop_shadow_2'),
s.setAttribute('operator', 'in'),
s.setAttribute('result', 'drop_shadow_4'),
t.appendChild(s);
var o,
a = document.createElementNS(svgNS, 'feMerge');
t.appendChild(a),
o = document.createElementNS(svgNS, 'feMergeNode'),
a.appendChild(o),
(o = document.createElementNS(svgNS, 'feMergeNode')).setAttribute('in', 'SourceGraphic'),
this.feMergeNode = o,
this.feMerge = a,
this.originalNodeAdded = !1,
a.appendChild(o)
}
function SVGMatte3Effect(t, e, r) {
this.initialized = !1,
this.filterManager = e,
this.filterElem = t,
this.elem = r,
r.matteElement = document.createElementNS(svgNS, 'g'),
r.matteElement.appendChild(r.layerElement),
r.matteElement.appendChild(r.transformedElement),
r.baseElement = r.matteElement
}
function SVGEffects(t) {
var e,
r,
i = t.data.ef.length,
n = randomString(10),
s = filtersFactory.createFilter(n),
o = 0;
for (this.filters = [
], e = 0; e < i; e += 1) 20 === t.data.ef[e].ty ? (o += 1, r = new SVGTintFilter(s, t.effects.effectElements[e]), this.filters.push(r))  : 21 === t.data.ef[e].ty ? (o += 1, r = new SVGFillFilter(s, t.effects.effectElements[e]), this.filters.push(r))  : 22 === t.data.ef[e].ty ? (r = new SVGStrokeEffect(t, t.effects.effectElements[e]), this.filters.push(r))  : 23 === t.data.ef[e].ty ? (o += 1, r = new SVGTritoneFilter(s, t.effects.effectElements[e]), this.filters.push(r))  : 24 === t.data.ef[e].ty ? (o += 1, r = new SVGProLevelsFilter(s, t.effects.effectElements[e]), this.filters.push(r))  : 25 === t.data.ef[e].ty ? (o += 1, r = new SVGDropShadowEffect(s, t.effects.effectElements[e]), this.filters.push(r))  : 28 === t.data.ef[e].ty && (r = new SVGMatte3Effect(s, t.effects.effectElements[e], t), this.filters.push(r));
o && (t.globalData.defs.appendChild(s), t.layerElement.setAttribute('filter', 'url(' + locationHref + '#' + n + ')'))
}
function ICompElement(t, e, r, i, n) {
this._parent.constructor.call(this, t, e, r, i, n),
this.layers = t.layers,
this.supports3d = !0,
this.completeLayers = !1,
this.pendingElements = [
],
this.elements = this.layers ? Array.apply(null, {
length: this.layers.length
})  : [
],
this.data.tm && (this.tm = PropertyFactory.getProp(this, this.data.tm, 0, r.frameRate, this.dynamicProperties)),
this.data.xt ? (this.layerElement = document.createElementNS(svgNS, 'g'), this.buildAllItems())  : r.progressiveLoad || this.buildAllItems()
}
function IImageElement(t, e, r, i, n) {
this.assetData = r.getAssetData(t.refId),
this._parent.constructor.call(this, t, e, r, i, n)
}
function ISolidElement(t, e, r, i, n) {
this._parent.constructor.call(this, t, e, r, i, n)
}
IShapeElement.prototype.setElementStyles = function () {
var t,
e = this.stylesList.length,
r = [
];
for (t = 0; t < e; t += 1) this.stylesList[t].closed || r.push(this.stylesList[t]);
return r
},
IShapeElement.prototype.reloadShapes = function () {
this.firstFrame = !0;
var t,
e = this.itemsData.length;
for (t = 0; t < e; t += 1) this.prevViewData[t] = this.itemsData[t];
for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, this.dynamicProperties, 0, [
], !0), e = this.dynamicProperties.length, t = 0; t < e; t += 1) this.dynamicProperties[t].getValue();
this.renderModifiers()
},
IShapeElement.prototype.searchShapes = function (t, e, r, i, n, s, o, a) {
var l,
c,
h,
d,
u,
p,
_ = [
].concat(o),
f = t.length - 1,
m = [
],
g = [
];
for (l = f; l >= 0; l -= 1) {
if ((p = this.searchProcessedElement(t[l])) ? e[l] = r[p - 1] : t[l]._render = a, 'fl' == t[l].ty || 'st' == t[l].ty || 'gf' == t[l].ty || 'gs' == t[l].ty) p ? e[l].style.closed = !1 : e[l] = this.createStyleElement(t[l], s, n),
t[l]._render && i.appendChild(e[l].elem),
m.push(e[l].style);
 else if ('gr' == t[l].ty) {
if (p) for (h = e[l].it.length, c = 0; c < h; c += 1) e[l].prevViewData[c] = e[l].it[c];
 else e[l] = this.createGroupElement(t[l]);
this.searchShapes(t[l].it, e[l].it, e[l].prevViewData, e[l].gr, n, s + 1, _, a),
t[l]._render && i.appendChild(e[l].gr)
} else 'tr' == t[l].ty ? (p || (e[l] = this.createTransformElement(t[l], n)), d = e[l].transform, _.push(d))  : 'sh' == t[l].ty || 'rc' == t[l].ty || 'el' == t[l].ty || 'sr' == t[l].ty ? (p || (e[l] = this.createShapeElement(t[l], _, s, n)), e[l].elements = this.setElementStyles())  : 'tm' == t[l].ty || 'rd' == t[l].ty || 'ms' == t[l].ty ? (p ? (u = e[l]).closed = !1 : ((u = ShapeModifiers.getModifier(t[l].ty)).init(this, t[l], n), e[l] = u, this.shapeModifiers.push(u)), g.push(u))  : 'rp' == t[l].ty && (p ? (u = e[l]).closed = !0 : (u = ShapeModifiers.getModifier(t[l].ty), e[l] = u, u.init(this, t, l, e, n), this.shapeModifiers.push(u), a = !1), g.push(u));
this.addProcessedElement(t[l], l + 1)
}
for (f = m.length, l = 0; l < f; l += 1) m[l].closed = !0;
for (f = g.length, l = 0; l < f; l += 1) g[l].closed = !0
},
IShapeElement.prototype.addShapeToModifiers = function (t) {
var e,
r = this.shapeModifiers.length;
for (e = 0; e < r; e += 1) this.shapeModifiers[e].addShape(t)
},
IShapeElement.prototype.renderModifiers = function () {
if (this.shapeModifiers.length) {
var t,
e = this.shapes.length;
for (t = 0; t < e; t += 1) this.shapes[t].reset();
for (t = (e = this.shapeModifiers.length) - 1; t >= 0; t -= 1) this.shapeModifiers[t].processShapes(this.firstFrame)
}
},
IShapeElement.prototype.renderFrame = function (t) {
if (!1 !== this._parent.renderFrame.call(this, t)) {
this.hidden && (this.layerElement.style.display = 'block', this.hidden = !1),
this.renderModifiers();
var e,
r = this.stylesList.length;
for (e = 0; e < r; e += 1) this.stylesList[e].d = '',
this.stylesList[e].mdf = !1;
for (this.renderShape(this.shapesData, this.itemsData, null), e = 0; e < r; e += 1) '0' === this.stylesList[e].ld && (this.stylesList[e].ld = '1', this.stylesList[e].pElem.style.display = 'block'),
(this.stylesList[e].mdf || this.firstFrame) && (this.stylesList[e].pElem.setAttribute('d', this.stylesList[e].d), this.stylesList[e].msElem && this.stylesList[e].msElem.setAttribute('d', this.stylesList[e].d));
this.firstFrame && (this.firstFrame = !1)
} else this.hide()
},
IShapeElement.prototype.hide = function () {
if (!this.hidden) {
var t;
for (this.layerElement.style.display = 'none', t = this.stylesList.length - 1; t >= 0; t -= 1) '0' !== this.stylesList[t].ld && (this.stylesList[t].ld = '0', this.stylesList[t].pElem.style.display = 'none', this.stylesList[t].pElem.parentNode && (this.stylesList[t].parent = this.stylesList[t].pElem.parentNode));
this.hidden = !0
}
},
IShapeElement.prototype.renderShape = function (t, e, r) {
var i,
n;
for (i = t.length - 1; i >= 0; i -= 1) 'tr' == (n = t[i].ty) ? ((this.firstFrame || e[i].transform.op.mdf && r) && r.setAttribute('opacity', e[i].transform.op.v), (this.firstFrame || e[i].transform.mProps.mdf && r) && r.setAttribute('transform', e[i].transform.mProps.v.to2dCSS()))  : 'sh' == n || 'el' == n || 'rc' == n || 'sr' == n ? this.renderPath(t[i], e[i])  : 'fl' == n ? this.renderFill(t[i], e[i])  : 'gf' == n ? this.renderGradient(t[i], e[i])  : 'gs' == n ? (this.renderGradient(t[i], e[i]), this.renderStroke(t[i], e[i]))  : 'st' == n ? this.renderStroke(t[i], e[i])  : 'gr' == n && this.renderShape(t[i].it, e[i].it, e[i].gr)
},
IShapeElement.prototype.buildShapeString = function (t, e, r, i) {
var n,
s = '';
for (n = 1; n < e; n += 1) 1 === n && (s += ' M' + i.applyToPointStringified(t.v[0][0], t.v[0][1])),
s += ' C' + i.applyToPointStringified(t.o[n - 1][0], t.o[n - 1][1]) + ' ' + i.applyToPointStringified(t.i[n][0], t.i[n][1]) + ' ' + i.applyToPointStringified(t.v[n][0], t.v[n][1]);
return 1 === e && (s += ' M' + i.applyToPointStringified(t.v[0][0], t.v[0][1])),
r && e && (s += ' C' + i.applyToPointStringified(t.o[n - 1][0], t.o[n - 1][1]) + ' ' + i.applyToPointStringified(t.i[0][0], t.i[0][1]) + ' ' + i.applyToPointStringified(t.v[0][0], t.v[0][1]), s += 'z'),
s
},
IShapeElement.prototype.renderPath = function (t, e) {
var r,
i,
n,
s,
o,
a,
l = e.elements.length,
c = e.lvl;
if (t._render) for (a = 0; a < l; a += 1) if (e.elements[a].data._render) {
s = e.sh.mdf || this.firstFrame,
n = 'M0 0';
var h = e.sh.paths;
if (i = h._length, e.elements[a].lvl < c) {
for (var d, u = this.mHelper.reset(), p = c - e.elements[a].lvl, _ = e.transformers.length - 1; p > 0; ) s = e.transformers[_].mProps.mdf || s,
d = e.transformers[_].mProps.v.props,
u.transform(d[0], d[1], d[2], d[3], d[4], d[5], d[6], d[7], d[8], d[9], d[10], d[11], d[12], d[13], d[14], d[15]),
p--,
_--;
if (s) {
for (r = 0; r < i; r += 1) (o = h.shapes[r]) && o._length && (n += this.buildShapeString(o, o._length, o.c, u));
e.caches[a] = n
} else n = e.caches[a]
} else if (s) {
for (r = 0; r < i; r += 1) (o = h.shapes[r]) && o._length && (n += this.buildShapeString(o, o._length, o.c, this.identityMatrix));
e.caches[a] = n
} else n = e.caches[a];
e.elements[a].d += n,
e.elements[a].mdf = s || e.elements[a].mdf
} else e.elements[a].mdf = !0
},
IShapeElement.prototype.renderFill = function (t, e) {
var r = e.style;
(e.c.mdf || this.firstFrame) && r.pElem.setAttribute('fill', 'rgb(' + bm_floor(e.c.v[0]) + ',' + bm_floor(e.c.v[1]) + ',' + bm_floor(e.c.v[2]) + ')'),
(e.o.mdf || this.firstFrame) && r.pElem.setAttribute('fill-opacity', e.o.v)
},
IShapeElement.prototype.renderGradient = function (t, e) {
var r,
i,
n,
s,
o,
a = e.gf,
l = e.of,
c = e.s.v,
h = e.e.v;
if (e.o.mdf || this.firstFrame) {
var d = 'gf' === t.ty ? 'fill-opacity' : 'stroke-opacity';
e.elem.setAttribute(d, e.o.v)
}
if (e.s.mdf || this.firstFrame) {
var u = 1 === t.t ? 'x1' : 'cx',
p = 'x1' === u ? 'y1' : 'cy';
a.setAttribute(u, c[0]),
a.setAttribute(p, c[1]),
l && (l.setAttribute(u, c[0]), l.setAttribute(p, c[1]))
}
if (e.g.cmdf || this.firstFrame) {
r = e.cst;
var _ = e.g.c;
for (n = r.length, i = 0; i < n; i += 1) (s = r[i]).setAttribute('offset', _[4 * i] + '%'),
s.setAttribute('stop-color', 'rgb(' + _[4 * i + 1] + ',' + _[4 * i + 2] + ',' + _[4 * i + 3] + ')')
}
if (l && (e.g.omdf || this.firstFrame)) {
r = e.ost;
var f = e.g.o;
for (n = r.length, i = 0; i < n; i += 1) (s = r[i]).setAttribute('offset', f[2 * i] + '%'),
s.setAttribute('stop-opacity', f[2 * i + 1])
}
if (1 === t.t) (e.e.mdf || this.firstFrame) && (a.setAttribute('x2', h[0]), a.setAttribute('y2', h[1]), l && (l.setAttribute('x2', h[0]), l.setAttribute('y2', h[1])));
 else if ((e.s.mdf || e.e.mdf || this.firstFrame) && (o = Math.sqrt(Math.pow(c[0] - h[0], 2) + Math.pow(c[1] - h[1], 2)), a.setAttribute('r', o), l && l.setAttribute('r', o)), e.e.mdf || e.h.mdf || e.a.mdf || this.firstFrame) {
o || (o = Math.sqrt(Math.pow(c[0] - h[0], 2) + Math.pow(c[1] - h[1], 2)));
var m = Math.atan2(h[1] - c[1], h[0] - c[0]),
g = o * (e.h.v >= 1 ? 0.99 : e.h.v <= - 1 ? - 0.99 : e.h.v),
v = Math.cos(m + e.a.v) * g + c[0],
b = Math.sin(m + e.a.v) * g + c[1];
a.setAttribute('fx', v),
a.setAttribute('fy', b),
l && (l.setAttribute('fx', v), l.setAttribute('fy', b))
}
},
IShapeElement.prototype.renderStroke = function (t, e) {
var r = e.style,
i = e.d;
i && i.k && (i.mdf || this.firstFrame) && (r.pElem.setAttribute('stroke-dasharray', i.dasharray), r.pElem.setAttribute('stroke-dashoffset', i.dashoffset)),
e.c && (e.c.mdf || this.firstFrame) && r.pElem.setAttribute('stroke', 'rgb(' + bm_floor(e.c.v[0]) + ',' + bm_floor(e.c.v[1]) + ',' + bm_floor(e.c.v[2]) + ')'),
(e.o.mdf || this.firstFrame) && r.pElem.setAttribute('stroke-opacity', e.o.v),
(e.w.mdf || this.firstFrame) && (r.pElem.setAttribute('stroke-width', e.w.v), r.msElem && r.msElem.setAttribute('stroke-width', e.w.v))
},
IShapeElement.prototype.destroy = function () {
this._parent.destroy.call(this._parent),
this.shapeData = null,
this.itemsData = null,
this.parentContainer = null,
this.placeholder = null
},
ITextElement.prototype.init = function () {
this.lettersChangedFlag = !0,
this.dynamicProperties = this.dynamicProperties || [
],
this.textAnimator = new TextAnimatorProperty(this.data.t, this.renderType, this),
this.textProperty = new TextProperty(this, this.data.t, this.dynamicProperties),
this._parent.init.call(this),
this.textAnimator.searchProperties(this.dynamicProperties)
},
ITextElement.prototype.prepareFrame = function (t) {
this._parent.prepareFrame.call(this, t),
(this.textProperty.mdf || this.textProperty.firstFrame) && (this.buildNewText(), this.textProperty.firstFrame = !1)
},
ITextElement.prototype.createPathShape = function (t, e) {
var r,
i,
n = e.length,
s = '';
for (r = 0; r < n; r += 1) i = e[r].ks.k,
s += this.buildShapeString(i, i.i.length, !0, t);
return s
},
ITextElement.prototype.updateDocumentData = function (t, e) {
this.textProperty.updateDocumentData(t, e)
},
ITextElement.prototype.applyTextPropertiesToMatrix = function (t, e, r, i, n) {
switch (t.ps && e.translate(t.ps[0], t.ps[1] + t.ascent, 0), e.translate(0, - t.ls, 0), t.j) {
case 1:
e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[r]), 0, 0);
break;
case 2:
e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[r]) / 2, 0, 0)
}
e.translate(i, n, 0)
},
ITextElement.prototype.buildColor = function (t) {
return 'rgb(' + Math.round(255 * t[0]) + ',' + Math.round(255 * t[1]) + ',' + Math.round(255 * t[2]) + ')'
},
ITextElement.prototype.buildShapeString = IShapeElement.prototype.buildShapeString,
ITextElement.prototype.emptyProp = new LetterProps,
ITextElement.prototype.destroy = function () {
this._parent.destroy.call(this._parent)
},
createElement(SVGBaseElement, SVGTextElement),
extendPrototype(ITextElement, SVGTextElement),
SVGTextElement.prototype.createElements = function () {
this._parent.createElements.call(this),
this.data.ln && this.layerElement.setAttribute('id', this.data.ln),
this.data.cl && this.layerElement.setAttribute('class', this.data.cl),
this.data.singleShape && !this.globalData.fontManager.chars && (this.textContainer = document.createElementNS(svgNS, 'text'))
},
SVGTextElement.prototype.buildNewText = function () {
var t,
e,
r = this.textProperty.currentData;
this.renderedLetters = Array.apply(null, {
length: r ? r.l.length : 0
}),
r.fc ? this.layerElement.setAttribute('fill', this.buildColor(r.fc))  : this.layerElement.setAttribute('fill', 'rgba(0,0,0,0)'),
r.sc && (this.layerElement.setAttribute('stroke', this.buildColor(r.sc)), this.layerElement.setAttribute('stroke-width', r.sw)),
this.layerElement.setAttribute('font-size', r.s);
var i = this.globalData.fontManager.getFontByName(r.f);
if (i.fClass) this.layerElement.setAttribute('class', i.fClass);
 else {
this.layerElement.setAttribute('font-family', i.fFamily);
var n = r.fWeight,
s = r.fStyle;
this.layerElement.setAttribute('font-style', s),
this.layerElement.setAttribute('font-weight', n)
}
var o = r.l || [
],
a = this.globalData.fontManager.chars;
if (e = o.length) {
var l,
c,
h = this.mHelper,
d = '',
u = this.data.singleShape,
p = 0,
_ = 0,
f = !0,
m = r.tr / 1000 * r.s;
if (u && !a) {
var g = this.textContainer,
v = '';
switch (r.j) {
case 1:
v = 'end';
break;
case 2:
v = 'middle';
break;
case 2:
v = 'start'
}
g.setAttribute('text-anchor', v),
g.setAttribute('letter-spacing', m);
var b = r.t.split(String.fromCharCode(13));
for (e = b.length, _ = r.ps ? r.ps[1] + r.ascent : 0, t = 0; t < e; t += 1) (l = this.textSpans[t] || document.createElementNS(svgNS, 'tspan')).textContent = b[t],
l.setAttribute('x', 0),
l.setAttribute('y', _),
l.style.display = 'inherit',
g.appendChild(l),
this.textSpans[t] = l,
_ += r.lh;
this.layerElement.appendChild(g)
} else {
var y,
E,
w = this.textSpans.length;
for (t = 0; t < e; t += 1) a && u && 0 !== t || (l = w > t ? this.textSpans[t] : document.createElementNS(svgNS, a ? 'path' : 'text'), w <= t && (l.setAttribute('stroke-linecap', 'butt'), l.setAttribute('stroke-linejoin', 'round'), l.setAttribute('stroke-miterlimit', '4'), this.textSpans[t] = l, this.layerElement.appendChild(l)), l.style.display = 'inherit'),
h.reset(),
a ? (h.scale(r.s / 100, r.s / 100), u && (o[t].n && (p = - m, _ += r.yOffset, _ += f ? 1 : 0, f = !1), this.applyTextPropertiesToMatrix(r, h, o[t].line, p, _), p += o[t].l || 0, p += m), c = (y = (E = this.globalData.fontManager.getCharData(r.t.charAt(t), i.fStyle, this.globalData.fontManager.getFontByName(r.f).fFamily)) && E.data || {
}).shapes ? y.shapes[0].it : [
], u ? d += this.createPathShape(h, c)  : l.setAttribute('d', this.createPathShape(h, c)))  : (l.textContent = o[t].val, l.setAttributeNS('http://www.w3.org/XML/1998/namespace', 'xml:space', 'preserve'));
u && l.setAttribute('d', d)
}
for (; t < this.textSpans.length; ) this.textSpans[t].style.display = 'none',
t += 1;
this._sizeChanged = !0
}
},
SVGTextElement.prototype.sourceRectAtTime = function (t) {
if (this.prepareFrame(this.comp.renderedFrame - this.data.st), this.renderLetters(), this._sizeChanged) {
this._sizeChanged = !1;
var e = this.layerElement.getBBox();
this.bbox = {
top: e.y,
left: e.x,
width: e.width,
height: e.height
}
}
return this.bbox
},
SVGTextElement.prototype.renderLetters = function () {
if (!this.data.singleShape && (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)) {
var t,
e;
this._sizeChanged = !0;
var r,
i,
n = this.textAnimator.renderedLetters,
s = this.textProperty.currentData.l;
for (e = s.length, t = 0; t < e; t += 1) s[t].n || (r = n[t], i = this.textSpans[t], r.mdf.m && i.setAttribute('transform', r.m), r.mdf.o && i.setAttribute('opacity', r.o), r.mdf.sw && i.setAttribute('stroke-width', r.sw), r.mdf.sc && i.setAttribute('stroke', r.sc), r.mdf.fc && i.setAttribute('fill', r.fc))
}
},
SVGTextElement.prototype.renderFrame = function (t) {
!1 !== this._parent.renderFrame.call(this, t) ? (this.hidden && this.show(), this.firstFrame && (this.firstFrame = !1), this.renderLetters())  : this.hide()
},
SVGTintFilter.prototype.renderFrame = function (t) {
if (t || this.filterManager.mdf) {
var e = this.filterManager.effectElements[0].p.v,
r = this.filterManager.effectElements[1].p.v,
i = this.filterManager.effectElements[2].p.v / 100;
this.matrixFilter.setAttribute('values', r[0] - e[0] + ' 0 0 0 ' + e[0] + ' ' + (r[1] - e[1]) + ' 0 0 0 ' + e[1] + ' ' + (r[2] - e[2]) + ' 0 0 0 ' + e[2] + ' 0 0 0 ' + i + ' 0')
}
},
SVGFillFilter.prototype.renderFrame = function (t) {
if (t || this.filterManager.mdf) {
var e = this.filterManager.effectElements[2].p.v,
r = this.filterManager.effectElements[6].p.v;
this.matrixFilter.setAttribute('values', '0 0 0 0 ' + e[0] + ' 0 0 0 0 ' + e[1] + ' 0 0 0 0 ' + e[2] + ' 0 0 0 ' + r + ' 0')
}
},
SVGStrokeEffect.prototype.initialize = function () {
var t,
e,
r,
i,
n = this.elem.layerElement.children || this.elem.layerElement.childNodes;
for (1 === this.filterManager.effectElements[1].p.v ? (i = this.elem.maskManager.masksProperties.length, r = 0)  : i = 1 + (r = this.filterManager.effectElements[0].p.v - 1), (e = document.createElementNS(svgNS, 'g')).setAttribute('fill', 'none'), e.setAttribute('stroke-linecap', 'round'), e.setAttribute('stroke-dashoffset', 1); r < i; r += 1) t = document.createElementNS(svgNS, 'path'),
e.appendChild(t),
this.paths.push({
p: t,
m: r
});
if (3 === this.filterManager.effectElements[10].p.v) {
var s = document.createElementNS(svgNS, 'mask'),
o = 'stms_' + randomString(10);
s.setAttribute('id', o),
s.setAttribute('mask-type', 'alpha'),
s.appendChild(e),
this.elem.globalData.defs.appendChild(s);
var a = document.createElementNS(svgNS, 'g');
a.setAttribute('mask', 'url(' + locationHref + '#' + o + ')'),
n[0] && a.appendChild(n[0]),
this.elem.layerElement.appendChild(a),
this.masker = s,
e.setAttribute('stroke', '#fff')
} else if (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) {
if (2 === this.filterManager.effectElements[10].p.v) for (n = this.elem.layerElement.children || this.elem.layerElement.childNodes; n.length; ) this.elem.layerElement.removeChild(n[0]);
this.elem.layerElement.appendChild(e),
this.elem.layerElement.removeAttribute('mask'),
e.setAttribute('stroke', '#fff')
}
this.initialized = !0,
this.pathMasker = e
},
SVGStrokeEffect.prototype.renderFrame = function (t) {
this.initialized || this.initialize();
var e,
r,
i,
n = this.paths.length;
for (e = 0; e < n; e += 1) if (r = this.elem.maskManager.viewData[this.paths[e].m], i = this.paths[e].p, (t || this.filterManager.mdf || r.prop.mdf) && i.setAttribute('d', r.lastPath), t || this.filterManager.effectElements[9].p.mdf || this.filterManager.effectElements[4].p.mdf || this.filterManager.effectElements[7].p.mdf || this.filterManager.effectElements[8].p.mdf || r.prop.mdf) {
var s;
if (0 !== this.filterManager.effectElements[7].p.v || 100 !== this.filterManager.effectElements[8].p.v) {
var o = Math.min(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v) / 100,
a = Math.max(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v) / 100,
l = i.getTotalLength();
s = '0 0 0 ' + l * o + ' ';
var c,
h = l * (a - o),
d = 1 + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v / 100,
u = Math.floor(h / d);
for (c = 0; c < u; c += 1) s += '1 ' + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v / 100 + ' ';
s += '0 ' + 10 * l + ' 0 0'
} else s = '1 ' + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v / 100;
i.setAttribute('stroke-dasharray', s)
}
if ((t || this.filterManager.effectElements[4].p.mdf) && this.pathMasker.setAttribute('stroke-width', 2 * this.filterManager.effectElements[4].p.v), (t || this.filterManager.effectElements[6].p.mdf) && this.pathMasker.setAttribute('opacity', this.filterManager.effectElements[6].p.v), (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) && (t || this.filterManager.effectElements[3].p.mdf)) {
var p = this.filterManager.effectElements[3].p.v;
this.pathMasker.setAttribute('stroke', 'rgb(' + bm_floor(255 * p[0]) + ',' + bm_floor(255 * p[1]) + ',' + bm_floor(255 * p[2]) + ')')
}
},
SVGTritoneFilter.prototype.renderFrame = function (t) {
if (t || this.filterManager.mdf) {
var e = this.filterManager.effectElements[0].p.v,
r = this.filterManager.effectElements[1].p.v,
i = this.filterManager.effectElements[2].p.v,
n = i[0] + ' ' + r[0] + ' ' + e[0],
s = i[1] + ' ' + r[1] + ' ' + e[1],
o = i[2] + ' ' + r[2] + ' ' + e[2];
this.feFuncR.setAttribute('tableValues', n),
this.feFuncG.setAttribute('tableValues', s),
this.feFuncB.setAttribute('tableValues', o)
}
},
SVGProLevelsFilter.prototype.createFeFunc = function (t, e) {
var r = document.createElementNS(svgNS, t);
return r.setAttribute('type', 'table'),
e.appendChild(r),
r
},
SVGProLevelsFilter.prototype.getTableValue = function (t, e, r, i, n) {
for (var s, o, a = 0, l = Math.min(t, e), c = Math.max(t, e), h = Array.call(null, {
length: 256
}), d = 0, u = n - i, p = e - t; a <= 256; ) o = (s = a / 256) <= l ? p < 0 ? n : i : s >= c ? p < 0 ? i : n : i + u * Math.pow((s - t) / p, 1 / r),
h[d++] = o,
a += 256 / 255;
return h.join(' ')
},
SVGProLevelsFilter.prototype.renderFrame = function (t) {
if (t || this.filterManager.mdf) {
var e,
r = this.filterManager.effectElements;
this.feFuncRComposed && (t || r[2].p.mdf || r[3].p.mdf || r[4].p.mdf || r[5].p.mdf || r[6].p.mdf) && (e = this.getTableValue(r[2].p.v, r[3].p.v, r[4].p.v, r[5].p.v, r[6].p.v), this.feFuncRComposed.setAttribute('tableValues', e), this.feFuncGComposed.setAttribute('tableValues', e), this.feFuncBComposed.setAttribute('tableValues', e)),
this.feFuncR && (t || r[9].p.mdf || r[10].p.mdf || r[11].p.mdf || r[12].p.mdf || r[13].p.mdf) && (e = this.getTableValue(r[9].p.v, r[10].p.v, r[11].p.v, r[12].p.v, r[13].p.v), this.feFuncR.setAttribute('tableValues', e)),
this.feFuncG && (t || r[16].p.mdf || r[17].p.mdf || r[18].p.mdf || r[19].p.mdf || r[20].p.mdf) && (e = this.getTableValue(r[16].p.v, r[17].p.v, r[18].p.v, r[19].p.v, r[20].p.v), this.feFuncG.setAttribute('tableValues', e)),
this.feFuncB && (t || r[23].p.mdf || r[24].p.mdf || r[25].p.mdf || r[26].p.mdf || r[27].p.mdf) && (e = this.getTableValue(r[23].p.v, r[24].p.v, r[25].p.v, r[26].p.v, r[27].p.v), this.feFuncB.setAttribute('tableValues', e)),
this.feFuncA && (t || r[30].p.mdf || r[31].p.mdf || r[32].p.mdf || r[33].p.mdf || r[34].p.mdf) && (e = this.getTableValue(r[30].p.v, r[31].p.v, r[32].p.v, r[33].p.v, r[34].p.v), this.feFuncA.setAttribute('tableValues', e))
}
},
SVGDropShadowEffect.prototype.renderFrame = function (t) {
if (t || this.filterManager.mdf) {
if ((t || this.filterManager.effectElements[4].p.mdf) && this.feGaussianBlur.setAttribute('stdDeviation', this.filterManager.effectElements[4].p.v / 4), t || this.filterManager.effectElements[0].p.mdf) {
var e = this.filterManager.effectElements[0].p.v;
this.feFlood.setAttribute('flood-color', rgbToHex(Math.round(255 * e[0]), Math.round(255 * e[1]), Math.round(255 * e[2])))
}
if ((t || this.filterManager.effectElements[1].p.mdf) && this.feFlood.setAttribute('flood-opacity', this.filterManager.effectElements[1].p.v / 255), t || this.filterManager.effectElements[2].p.mdf || this.filterManager.effectElements[3].p.mdf) {
var r = this.filterManager.effectElements[3].p.v,
i = (this.filterManager.effectElements[2].p.v - 90) * degToRads,
n = r * Math.cos(i),
s = r * Math.sin(i);
this.feOffset.setAttribute('dx', n),
this.feOffset.setAttribute('dy', s)
}
}
},
SVGMatte3Effect.prototype.setElementAsMask = function (t, e) {
var r = document.createElementNS(svgNS, 'mask');
r.setAttribute('id', e.layerId),
r.setAttribute('mask-type', 'alpha'),
r.appendChild(e.layerElement),
t.setMatte(e.layerId),
e.data.hd = !1,
t.globalData.defs.appendChild(r)
},
SVGMatte3Effect.prototype.initialize = function () {
for (var t = this.filterManager.effectElements[0].p.v, e = 0, r = this.elem.comp.elements.length; e < r; ) this.elem.comp.elements[e].data.ind === t && this.setElementAsMask(this.elem, this.elem.comp.elements[e]),
e += 1;
this.initialized = !0
},
SVGMatte3Effect.prototype.renderFrame = function () {
this.initialized || this.initialize()
},
SVGEffects.prototype.renderFrame = function (t) {
var e,
r = this.filters.length;
for (e = 0; e < r; e += 1) this.filters[e].renderFrame(t)
},
createElement(SVGBaseElement, ICompElement),
ICompElement.prototype.hide = function () {
if (!this.hidden) {
this._parent.hide.call(this);
var t,
e = this.elements.length;
for (t = 0; t < e; t += 1) this.elements[t] && this.elements[t].hide()
}
},
ICompElement.prototype.prepareFrame = function (t) {
if (this._parent.prepareFrame.call(this, t), !1 !== this.isVisible || this.data.xt) {
if (this.tm) {
var e = this.tm.v;
e === this.data.op && (e = this.data.op - 1),
this.renderedFrame = e
} else this.renderedFrame = t / this.data.sr;
var r,
i = this.elements.length;
for (this.completeLayers || this.checkLayers(this.renderedFrame), r = 0; r < i; r += 1) (this.completeLayers || this.elements[r]) && this.elements[r].prepareFrame(this.renderedFrame - this.layers[r].st)
}
},
ICompElement.prototype.renderFrame = function (t) {
var e,
r = this._parent.renderFrame.call(this, t),
i = this.layers.length;
if (!1 !== r) {
for (this.hidden && this.show(), e = 0; e < i; e += 1) (this.completeLayers || this.elements[e]) && this.elements[e].renderFrame();
this.firstFrame && (this.firstFrame = !1)
} else this.hide()
},
ICompElement.prototype.setElements = function (t) {
this.elements = t
},
ICompElement.prototype.getElements = function () {
return this.elements
},
ICompElement.prototype.destroy = function () {
this._parent.destroy.call(this._parent);
var t,
e = this.layers.length;
for (t = 0; t < e; t += 1) this.elements[t] && this.elements[t].destroy()
},
ICompElement.prototype.checkLayers = SVGRenderer.prototype.checkLayers,
ICompElement.prototype.buildItem = SVGRenderer.prototype.buildItem,
ICompElement.prototype.buildAllItems = SVGRenderer.prototype.buildAllItems,
ICompElement.prototype.buildElementParenting = SVGRenderer.prototype.buildElementParenting,
ICompElement.prototype.createItem = SVGRenderer.prototype.createItem,
ICompElement.prototype.createImage = SVGRenderer.prototype.createImage,
ICompElement.prototype.createComp = SVGRenderer.prototype.createComp,
ICompElement.prototype.createSolid = SVGRenderer.prototype.createSolid,
ICompElement.prototype.createShape = SVGRenderer.prototype.createShape,
ICompElement.prototype.createText = SVGRenderer.prototype.createText,
ICompElement.prototype.createBase = SVGRenderer.prototype.createBase,
ICompElement.prototype.appendElementInPos = SVGRenderer.prototype.appendElementInPos,
ICompElement.prototype.checkPendingElements = SVGRenderer.prototype.checkPendingElements,
ICompElement.prototype.addPendingElement = SVGRenderer.prototype.addPendingElement,
createElement(SVGBaseElement, IImageElement),
IImageElement.prototype.createElements = function () {
var t = this.globalData.getAssetsPath(this.assetData);
this._parent.createElements.call(this),
this.innerElem = document.createElementNS(svgNS, 'image'),
this.innerElem.setAttribute('width', this.assetData.w + 'px'),
this.innerElem.setAttribute('height', this.assetData.h + 'px'),
this.innerElem.setAttribute('preserveAspectRatio', 'xMidYMid slice'),
this.innerElem.setAttributeNS('http://www.w3.org/1999/xlink', 'href', t),
this.maskedElement = this.innerElem,
this.layerElement.appendChild(this.innerElem),
this.data.ln && this.layerElement.setAttribute('id', this.data.ln),
this.data.cl && this.layerElement.setAttribute('class', this.data.cl)
},
IImageElement.prototype.renderFrame = function (t) {
!1 !== this._parent.renderFrame.call(this, t) ? (this.hidden && this.show(), this.firstFrame && (this.firstFrame = !1))  : this.hide()
},
IImageElement.prototype.destroy = function () {
this._parent.destroy.call(this._parent),
this.innerElem = null
},
createElement(SVGBaseElement, ISolidElement),
ISolidElement.prototype.createElements = function () {
this._parent.createElements.call(this);
var t = document.createElementNS(svgNS, 'rect');
t.setAttribute('width', this.data.sw),
t.setAttribute('height', this.data.sh),
t.setAttribute('fill', this.data.sc),
this.layerElement.appendChild(t),
this.innerElem = t,
this.data.ln && this.layerElement.setAttribute('id', this.data.ln),
this.data.cl && this.layerElement.setAttribute('class', this.data.cl)
},
ISolidElement.prototype.renderFrame = IImageElement.prototype.renderFrame,
ISolidElement.prototype.destroy = IImageElement.prototype.destroy;
var animationManager = function () {
var t = {
},
e = [
],
r = 0,
i = 0,
n = !0,
s = 0;
function o(t) {
for (var r = 0, n = t.target; r < i; ) e[r].animation === n && (e.splice(r, 1), r -= 1, i -= 1, n.isPaused || c()),
r += 1
}
function a(t, r) {
if (!t) return null;
for (var n = 0; n < i; ) {
if (e[n].elem == t && null !== e[n].elem) return e[n].animation;
n += 1
}
var s = new AnimationItem;
return h(s, t),
s.setData(t, r),
s
}
function l() {
s += 1,
n && (n = !1, window.requestAnimationFrame(u))
}
function c() {
0 == (s -= 1) && (n = !0)
}
function h(t, r) {
t.addEventListener('destroy', o),
t.addEventListener('_active', l),
t.addEventListener('_idle', c),
e.push({
elem: r,
animation: t
}),
i += 1
}
function d(t) {
var s,
o = t - r;
for (s = 0; s < i; s += 1) e[s].animation.advanceTime(o);
r = t,
n || window.requestAnimationFrame(d)
}
function u(t) {
r = t,
window.requestAnimationFrame(d)
}
function p() {
window.requestAnimationFrame(u)
}
return setTimeout(p, 0),
t.registerAnimation = a,
t.loadAnimation = function (t) {
var e = new AnimationItem;
return h(e, null),
e.setParams(t),
e
},
t.setSpeed = function (t, r) {
var n;
for (n = 0; n < i; n += 1) e[n].animation.setSpeed(t, r)
},
t.setDirection = function (t, r) {
var n;
for (n = 0; n < i; n += 1) e[n].animation.setDirection(t, r)
},
t.play = function (t) {
var r;
for (r = 0; r < i; r += 1) e[r].animation.play(t)
},
t.moveFrame = function (t, n) {
var s;
for (r = Date.now(), s = 0; s < i; s += 1) e[s].animation.moveFrame(t, n)
},
t.pause = function (t) {
var r;
for (r = 0; r < i; r += 1) e[r].animation.pause(t)
},
t.stop = function (t) {
var r;
for (r = 0; r < i; r += 1) e[r].animation.stop(t)
},
t.togglePause = function (t) {
var r;
for (r = 0; r < i; r += 1) e[r].animation.togglePause(t)
},
t.searchAnimations = function (t, e, r) {
var i,
n = document.getElementsByClassName('bodymovin'),
s = n.length;
for (i = 0; i < s; i += 1) r && n[i].setAttribute('data-bm-type', r),
a(n[i], t);
if (e && 0 === s) {
r || (r = 'svg');
var o = document.getElementsByTagName('body') [0];
o.innerHTML = '';
var l = document.createElement('div');
l.style.width = '100%',
l.style.height = '100%',
l.setAttribute('data-bm-type', r),
o.appendChild(l),
a(l, t)
}
},
t.resize = function () {
var t;
for (t = 0; t < i; t += 1) e[t].animation.resize()
},
t.start = p,
t.goToAndStop = function (t, r, n) {
var s;
for (s = 0; s < i; s += 1) e[s].animation.goToAndStop(t, r, n)
},
t.destroy = function (t) {
var r;
for (r = i - 1; r >= 0; r -= 1) e[r].animation.destroy(t)
},
t
}(),
AnimationItem = function () {
this._cbs = [
],
this.name = '',
this.path = '',
this.isLoaded = !1,
this.currentFrame = 0,
this.currentRawFrame = 0,
this.totalFrames = 0,
this.frameRate = 0,
this.frameMult = 0,
this.playSpeed = 1,
this.playDirection = 1,
this.pendingElements = 0,
this.playCount = 0,
this.prerenderFramesFlag = !0,
this.animationData = {
},
this.layers = [
],
this.assets = [
],
this.isPaused = !0,
this.autoplay = !1,
this.loop = !0,
this.renderer = null,
this.animationID = randomString(10),
this.scaleMode = 'fit',
this.assetsPath = '',
this.timeCompleted = 0,
this.segmentPos = 0,
this.subframeEnabled = subframeEnabled,
this.segments = [
],
this.pendingSegment = !1,
this._idle = !0,
this.projectInterface = ProjectInterface()
};
function CanvasRenderer(t, e) {
var r;
for (this.animationItem = t, this.renderConfig = {
clearCanvas: !e || void 0 === e.clearCanvas || e.clearCanvas,
context: e && e.context || null,
progressiveLoad: e && e.progressiveLoad || !1,
preserveAspectRatio: e && e.preserveAspectRatio || 'xMidYMid meet',
className: e && e.className || ''
}, this.renderConfig.dpr = e && e.dpr || 1, this.animationItem.wrapper && (this.renderConfig.dpr = e && e.dpr || window.devicePixelRatio || 1), this.renderedFrame = - 1, this.globalData = {
frameNum: - 1
}, this.contextData = {
saved: Array.apply(null, {
length: 15
}),
savedOp: Array.apply(null, {
length: 15
}),
cArrPos: 0,
cTr: new Matrix,
cO: 1
}, r = 0; r < 15; r += 1) this.contextData.saved[r] = Array.apply(null, {
length: 16
});
this.elements = [
],
this.pendingElements = [
],
this.transformMat = new Matrix,
this.completeLayers = !1
}
function HybridRenderer(t, e) {
this.animationItem = t,
this.layers = null,
this.renderedFrame = - 1,
this.globalData = {
frameNum: - 1
},
this.renderConfig = {
className: e && e.className || ''
},
this.pendingElements = [
],
this.elements = [
],
this.threeDElements = [
],
this.destroyed = !1,
this.camera = null,
this.supports3d = !0
}
function CVBaseElement(t, e, r) {
this.globalData = r,
this.data = t,
this.comp = e,
this.canvasContext = r.canvasContext,
this.init()
}
function CVCompElement(t, e, r) {
this._parent.constructor.call(this, t, e, r);
var i,
n = {
};
for (var s in r) r.hasOwnProperty(s) && (n[s] = r[s]);
for (n.renderer = this, n.compHeight = this.data.h, n.compWidth = this.data.w, this.renderConfig = {
clearCanvas: !0
}, this.contextData = {
saved: Array.apply(null, {
length: 15
}),
savedOp: Array.apply(null, {
length: 15
}),
cArrPos: 0,
cTr: new Matrix,
cO: 1
}, this.completeLayers = !1, i = 0; i < 15; i += 1) this.contextData.saved[i] = Array.apply(null, {
length: 16
});
this.transformMat = new Matrix,
this.parentGlobalData = this.globalData;
var o = document.createElement('canvas');
n.canvasContext = o.getContext('2d'),
this.canvasContext = n.canvasContext,
o.width = this.data.w,
o.height = this.data.h,
this.canvas = o,
this.globalData = n,
this.layers = t.layers,
this.pendingElements = [
],
this.elements = Array.apply(null, {
length: this.layers.length
}),
this.data.tm && (this.tm = PropertyFactory.getProp(this, this.data.tm, 0, r.frameRate, this.dynamicProperties)),
!this.data.xt && r.progressiveLoad || this.buildAllItems()
}
function CVImageElement(t, e, r) {
this.assetData = r.getAssetData(t.refId),
this._parent.constructor.call(this, t, e, r),
this.globalData.addPendingElement()
}
function CVMaskElement(t, e) {
this.data = t,
this.element = e,
this.dynamicProperties = [
],
this.masksProperties = this.data.masksProperties,
this.viewData = Array.apply(null, {
length: this.masksProperties.length
});
var r,
i = this.masksProperties.length;
for (r = 0; r < i; r++) this.viewData[r] = ShapePropertyFactory.getShapeProp(this.element, this.masksProperties[r], 3, this.dynamicProperties, null)
}
function CVShapeElement(t, e, r) {
this.shapes = [
],
this.shapesData = t.shapes,
this.stylesList = [
],
this.itemsData = [
],
this.prevViewData = [
],
this.shapeModifiers = [
],
this.processedElements = [
],
this._parent.constructor.call(this, t, e, r)
}
function CVSolidElement(t, e, r) {
this._parent.constructor.call(this, t, e, r)
}
function CVTextElement(t, e, r) {
this.textSpans = [
],
this.yOffset = 0,
this.fillColorAnim = !1,
this.strokeColorAnim = !1,
this.strokeWidthAnim = !1,
this.stroke = !1,
this.fill = !1,
this.justifyOffset = 0,
this.currentRender = null,
this.renderType = 'canvas',
this.values = {
fill: 'rgba(0,0,0,0)',
stroke: 'rgba(0,0,0,0)',
sWidth: 0,
fValue: ''
},
this._parent.constructor.call(this, t, e, r)
}
function HBaseElement(t, e, r, i, n) {
this.globalData = r,
this.comp = i,
this.data = t,
this.matteElement = null,
this.parentContainer = e,
this.layerId = n ? n.layerId : 'ly_' + randomString(10),
this.placeholder = n,
this.init()
}
function HSolidElement(t, e, r, i, n) {
this._parent.constructor.call(this, t, e, r, i, n)
}
function HCompElement(t, e, r, i, n) {
this._parent.constructor.call(this, t, e, r, i, n),
this.layers = t.layers,
this.supports3d = !0,
this.completeLayers = !1,
this.pendingElements = [
],
this.elements = Array.apply(null, {
length: this.layers.length
}),
this.data.tm && (this.tm = PropertyFactory.getProp(this, this.data.tm, 0, r.frameRate, this.dynamicProperties)),
this.data.hasMask && (this.supports3d = !1),
this.data.xt && (this.layerElement = document.createElement('div')),
this.buildAllItems()
}
function HShapeElement(t, e, r, i, n) {
this.shapes = [
],
this.shapesData = t.shapes,
this.stylesList = [
],
this.itemsData = [
],
this.prevViewData = [
],
this.shapeModifiers = [
],
this.processedElements = [
],
this._parent.constructor.call(this, t, e, r, i, n),
this.currentBBox = {
x: 999999,
y: - 999999,
h: 0,
w: 0
}
}
AnimationItem.prototype.setParams = function (t) {
var e = this;
t.context && (this.context = t.context),
(t.wrapper || t.container) && (this.wrapper = t.wrapper || t.container);
var r = t.animType ? t.animType : t.renderer ? t.renderer : 'svg';
switch (r) {
case 'canvas':
this.renderer = new CanvasRenderer(this, t.rendererSettings);
break;
case 'svg':
this.renderer = new SVGRenderer(this, t.rendererSettings);
break;
case 'hybrid':
case 'html':
default:
this.renderer = new HybridRenderer(this, t.rendererSettings)
}
if (this.renderer.setProjectInterface(this.projectInterface), this.animType = r, '' === t.loop || null === t.loop || (!1 === t.loop ? this.loop = !1 : !0 === t.loop ? this.loop = !0 : this.loop = parseInt(t.loop)), this.autoplay = !('autoplay' in t) || t.autoplay, this.name = t.name ? t.name : '', this.prerenderFramesFlag = !('prerender' in t) || t.prerender, this.autoloadSegments = !t.hasOwnProperty('autoloadSegments') || t.autoloadSegments, t.animationData) e.configAnimation(t.animationData);
 else if (t.path) {
'json' != t.path.substr( - 4) && ('/' != t.path.substr( - 1, 1) && (t.path += '/'), t.path += 'data.json');
var i = new XMLHttpRequest;
- 1 != t.path.lastIndexOf('\\') ? this.path = t.path.substr(0, t.path.lastIndexOf('\\') + 1)  : this.path = t.path.substr(0, t.path.lastIndexOf('/') + 1),
this.assetsPath = t.assetsPath,
this.fileName = t.path.substr(t.path.lastIndexOf('/') + 1),
this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf('.json')),
i.open('GET', t.path, !0),
i.send(),
i.onreadystatechange = function () {
if (4 == i.readyState) if (200 == i.status) e.configAnimation(JSON.parse(i.responseText));
 else try {
var t = JSON.parse(i.responseText);
e.configAnimation(t)
} catch (t) {
}
}
}
},
AnimationItem.prototype.setData = function (t, e) {
var r = {
wrapper: t,
animationData: e ? 'object' == typeof e ? e : JSON.parse(e)  : null
},
i = t.attributes;
r.path = i.getNamedItem('data-animation-path') ? i.getNamedItem('data-animation-path').value : i.getNamedItem('data-bm-path') ? i.getNamedItem('data-bm-path').value : i.getNamedItem('bm-path') ? i.getNamedItem('bm-path').value : '',
r.animType = i.getNamedItem('data-anim-type') ? i.getNamedItem('data-anim-type').value : i.getNamedItem('data-bm-type') ? i.getNamedItem('data-bm-type').value : i.getNamedItem('bm-type') ? i.getNamedItem('bm-type').value : i.getNamedItem('data-bm-renderer') ? i.getNamedItem('data-bm-renderer').value : i.getNamedItem('bm-renderer') ? i.getNamedItem('bm-renderer').value : 'canvas';
var n = i.getNamedItem('data-anim-loop') ? i.getNamedItem('data-anim-loop').value : i.getNamedItem('data-bm-loop') ? i.getNamedItem('data-bm-loop').value : i.getNamedItem('bm-loop') ? i.getNamedItem('bm-loop').value : '';
'' === n || (r.loop = 'false' !== n && ('true' === n || parseInt(n)));
var s = i.getNamedItem('data-anim-autoplay') ? i.getNamedItem('data-anim-autoplay').value : i.getNamedItem('data-bm-autoplay') ? i.getNamedItem('data-bm-autoplay').value : !i.getNamedItem('bm-autoplay') || i.getNamedItem('bm-autoplay').value;
r.autoplay = 'false' !== s,
r.name = i.getNamedItem('data-name') ? i.getNamedItem('data-name').value : i.getNamedItem('data-bm-name') ? i.getNamedItem('data-bm-name').value : i.getNamedItem('bm-name') ? i.getNamedItem('bm-name').value : '',
'false' === (i.getNamedItem('data-anim-prerender') ? i.getNamedItem('data-anim-prerender').value : i.getNamedItem('data-bm-prerender') ? i.getNamedItem('data-bm-prerender').value : i.getNamedItem('bm-prerender') ? i.getNamedItem('bm-prerender').value : '') && (r.prerender = !1),
this.setParams(r)
},
AnimationItem.prototype.includeLayers = function (t) {
t.op > this.animationData.op && (this.animationData.op = t.op, this.totalFrames = Math.floor(t.op - this.animationData.ip), this.animationData.tf = this.totalFrames);
var e,
r,
i = this.animationData.layers,
n = i.length,
s = t.layers,
o = s.length;
for (r = 0; r < o; r += 1) for (e = 0; e < n; ) {
if (i[e].id == s[r].id) {
i[e] = s[r];
break
}
e += 1
}
if ((t.chars || t.fonts) && (this.renderer.globalData.fontManager.addChars(t.chars), this.renderer.globalData.fontManager.addFonts(t.fonts, this.renderer.globalData.defs)), t.assets) for (n = t.assets.length, e = 0; e < n; e += 1) this.animationData.assets.push(t.assets[e]);
this.animationData.__complete = !1,
dataManager.completeData(this.animationData, this.renderer.globalData.fontManager),
this.renderer.includeLayers(t.layers),
expressionsPlugin && expressionsPlugin.initExpressions(this),
this.renderer.renderFrame(null),
this.loadNextSegment()
},
AnimationItem.prototype.loadNextSegment = function () {
var t = this.animationData.segments;
if (!t || 0 === t.length || !this.autoloadSegments) return this.trigger('data_ready'),
void (this.timeCompleted = this.animationData.tf);
var e = t.shift();
this.timeCompleted = e.time * this.frameRate;
var r = new XMLHttpRequest,
i = this,
n = this.path + this.fileName + '_' + this.segmentPos + '.json';
this.segmentPos += 1,
r.open('GET', n, !0),
r.send(),
r.onreadystatechange = function () {
if (4 == r.readyState) if (200 == r.status) i.includeLayers(JSON.parse(r.responseText));
 else try {
var t = JSON.parse(r.responseText);
i.includeLayers(t)
} catch (t) {
}
}
},
AnimationItem.prototype.loadSegments = function () {
this.animationData.segments || (this.timeCompleted = this.animationData.tf),
this.loadNextSegment()
},
AnimationItem.prototype.configAnimation = function (t) {
var e = this;
this.renderer && this.renderer.destroyed || (this.animationData = t, this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip), this.animationData.tf = this.totalFrames, this.renderer.configAnimation(t), t.assets || (t.assets = [
]), t.comps && (t.assets = t.assets.concat(t.comps), t.comps = null), this.renderer.searchExtraCompositions(t.assets), this.layers = this.animationData.layers, this.assets = this.animationData.assets, this.frameRate = this.animationData.fr, this.firstFrame = Math.round(this.animationData.ip), this.frameMult = this.animationData.fr / 1000, this.trigger('config_ready'), this.imagePreloader = new ImagePreloader, this.imagePreloader.setAssetsPath(this.assetsPath), this.imagePreloader.setPath(this.path), this.imagePreloader.loadAssets(t.assets, function (t) {
t || e.trigger('loaded_images')
}), this.loadSegments(), this.updaFrameModifier(), this.renderer.globalData.fontManager ? this.waitForFontsLoaded()  : (dataManager.completeData(this.animationData, this.renderer.globalData.fontManager), this.checkLoaded()))
},
AnimationItem.prototype.waitForFontsLoaded = function () {
(function t() {
this.renderer.globalData.fontManager.loaded ? (dataManager.completeData(this.animationData, this.renderer.globalData.fontManager), this.checkLoaded())  : setTimeout(t.bind(this), 20)
}).bind(this) ()
},
AnimationItem.prototype.addPendingElement = function () {
this.pendingElements += 1
},
AnimationItem.prototype.elementLoaded = function () {
this.pendingElements--,
this.checkLoaded()
},
AnimationItem.prototype.checkLoaded = function () {
0 === this.pendingElements && (expressionsPlugin && expressionsPlugin.initExpressions(this), this.renderer.initItems(), setTimeout(function () {
this.trigger('DOMLoaded')
}.bind(this), 0), this.isLoaded = !0, this.gotoFrame(), this.autoplay && this.play())
},
AnimationItem.prototype.resize = function () {
this.renderer.updateContainerSize()
},
AnimationItem.prototype.setSubframe = function (t) {
this.subframeEnabled = !!t
},
AnimationItem.prototype.gotoFrame = function () {
this.subframeEnabled ? this.currentFrame = this.currentRawFrame : this.currentFrame = Math.floor(this.currentRawFrame),
this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted && (this.currentFrame = this.timeCompleted),
this.trigger('enterFrame'),
this.renderFrame()
},
AnimationItem.prototype.renderFrame = function () {
!1 !== this.isLoaded && this.renderer.renderFrame(this.currentFrame + this.firstFrame)
},
AnimationItem.prototype.play = function (t) {
t && this.name != t || !0 === this.isPaused && (this.isPaused = !1, this._idle && (this._idle = !1, this.trigger('_active')))
},
AnimationItem.prototype.pause = function (t) {
t && this.name != t || !1 === this.isPaused && (this.isPaused = !0, this.pendingSegment || (this._idle = !0, this.trigger('_idle')))
},
AnimationItem.prototype.togglePause = function (t) {
t && this.name != t || (!0 === this.isPaused ? this.play()  : this.pause())
},
AnimationItem.prototype.stop = function (t) {
t && this.name != t || (this.pause(), this.currentFrame = this.currentRawFrame = 0, this.playCount = 0, this.gotoFrame())
},
AnimationItem.prototype.goToAndStop = function (t, e, r) {
r && this.name != r || (e ? this.setCurrentRawFrameValue(t)  : this.setCurrentRawFrameValue(t * this.frameModifier), this.pause())
},
AnimationItem.prototype.goToAndPlay = function (t, e, r) {
this.goToAndStop(t, e, r),
this.play()
},
AnimationItem.prototype.advanceTime = function (t) {
if (this.pendingSegment) return this.pendingSegment = !1,
this.adjustSegment(this.segments.shift()),
void (this.isPaused && this.play());
!0 !== this.isPaused && !1 !== this.isLoaded && this.setCurrentRawFrameValue(this.currentRawFrame + t * this.frameModifier)
},
AnimationItem.prototype.updateAnimation = function (t) {
this.setCurrentRawFrameValue(this.totalFrames * t)
},
AnimationItem.prototype.moveFrame = function (t, e) {
e && this.name != e || this.setCurrentRawFrameValue(this.currentRawFrame + t)
},
AnimationItem.prototype.adjustSegment = function (t) {
this.playCount = 0,
t[1] < t[0] ? (this.frameModifier > 0 && (this.playSpeed < 0 ? this.setSpeed( - this.playSpeed)  : this.setDirection( - 1)), this.totalFrames = t[0] - t[1], this.firstFrame = t[1], this.setCurrentRawFrameValue(this.totalFrames - 0.01))  : t[1] > t[0] && (this.frameModifier < 0 && (this.playSpeed < 0 ? this.setSpeed( - this.playSpeed)  : this.setDirection(1)), this.totalFrames = t[1] - t[0], this.firstFrame = t[0], this.setCurrentRawFrameValue(0)),
this.trigger('segmentStart')
},
AnimationItem.prototype.setSegment = function (t, e) {
var r = - 1;
this.isPaused && (this.currentRawFrame + this.firstFrame < t ? r = t : this.currentRawFrame + this.firstFrame > e && (r = e - t - 0.01)),
this.firstFrame = t,
this.totalFrames = e - t,
- 1 !== r && this.goToAndStop(r, !0)
},
AnimationItem.prototype.playSegments = function (t, e) {
if ('object' == typeof t[0]) {
var r,
i = t.length;
for (r = 0; r < i; r += 1) this.segments.push(t[r])
} else this.segments.push(t);
e && this.adjustSegment(this.segments.shift()),
this.isPaused && this.play()
},
AnimationItem.prototype.resetSegments = function (t) {
this.segments.length = 0,
this.segments.push([this.animationData.ip * this.frameRate,
Math.floor(this.animationData.op - this.animationData.ip + this.animationData.ip * this.frameRate)]),
t && this.adjustSegment(this.segments.shift())
},
AnimationItem.prototype.checkSegments = function () {
this.segments.length && (this.pendingSegment = !0)
},
AnimationItem.prototype.remove = function (t) {
t && this.name != t || this.renderer.destroy()
},
AnimationItem.prototype.destroy = function (t) {
t && this.name != t || this.renderer && this.renderer.destroyed || (this.renderer.destroy(), this.trigger('destroy'), this._cbs = null, this.onEnterFrame = this.onLoopComplete = this.onComplete = this.onSegmentStart = this.onDestroy = null)
},
AnimationItem.prototype.setCurrentRawFrameValue = function (t) {
if (this.currentRawFrame = t, this.currentRawFrame >= this.totalFrames) {
if (this.checkSegments(), !1 === this.loop) return this.currentRawFrame = this.totalFrames - 0.01,
this.gotoFrame(),
this.pause(),
void this.trigger('complete');
if (this.trigger('loopComplete'), this.playCount += 1, !0 !== this.loop && this.playCount == this.loop || this.pendingSegment) return this.currentRawFrame = this.totalFrames - 0.01,
this.gotoFrame(),
this.pause(),
void this.trigger('complete');
this.currentRawFrame = this.currentRawFrame % this.totalFrames
} else if (this.currentRawFrame < 0) return this.checkSegments(),
this.playCount -= 1,
this.playCount < 0 && (this.playCount = 0),
!1 === this.loop || this.pendingSegment ? (this.currentRawFrame = 0, this.gotoFrame(), this.pause(), void this.trigger('complete'))  : (this.trigger('loopComplete'), this.currentRawFrame = (this.totalFrames + this.currentRawFrame) % this.totalFrames, void this.gotoFrame());
this.gotoFrame()
},
AnimationItem.prototype.setSpeed = function (t) {
this.playSpeed = t,
this.updaFrameModifier()
},
AnimationItem.prototype.setDirection = function (t) {
this.playDirection = t < 0 ? - 1 : 1,
this.updaFrameModifier()
},
AnimationItem.prototype.updaFrameModifier = function () {
this.frameModifier = this.frameMult * this.playSpeed * this.playDirection
},
AnimationItem.prototype.getPath = function () {
return this.path
},
AnimationItem.prototype.getAssetsPath = function (t) {
var e = '';
if (this.assetsPath) {
var r = t.p;
- 1 !== r.indexOf('images/') && (r = r.split('/') [1]),
e = this.assetsPath + r
} else e = this.path,
e += t.u ? t.u : '',
e += t.p;
return e
},
AnimationItem.prototype.getAssetData = function (t) {
for (var e = 0, r = this.assets.length; e < r; ) {
if (t == this.assets[e].id) return this.assets[e];
e += 1
}
},
AnimationItem.prototype.hide = function () {
this.renderer.hide()
},
AnimationItem.prototype.show = function () {
this.renderer.show()
},
AnimationItem.prototype.getAssets = function () {
return this.assets
},
AnimationItem.prototype.trigger = function (t) {
if (this._cbs && this._cbs[t]) switch (t) {
case 'enterFrame':
this.triggerEvent(t, new BMEnterFrameEvent(t, this.currentFrame, this.totalFrames, this.frameMult));
break;
case 'loopComplete':
this.triggerEvent(t, new BMCompleteLoopEvent(t, this.loop, this.playCount, this.frameMult));
break;
case 'complete':
this.triggerEvent(t, new BMCompleteEvent(t, this.frameMult));
break;
case 'segmentStart':
this.triggerEvent(t, new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames));
break;
case 'destroy':
this.triggerEvent(t, new BMDestroyEvent(t, this));
break;
default:
this.triggerEvent(t)
}
'enterFrame' === t && this.onEnterFrame && this.onEnterFrame.call(this, new BMEnterFrameEvent(t, this.currentFrame, this.totalFrames, this.frameMult)),
'loopComplete' === t && this.onLoopComplete && this.onLoopComplete.call(this, new BMCompleteLoopEvent(t, this.loop, this.playCount, this.frameMult)),
'complete' === t && this.onComplete && this.onComplete.call(this, new BMCompleteEvent(t, this.frameMult)),
'segmentStart' === t && this.onSegmentStart && this.onSegmentStart.call(this, new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames)),
'destroy' === t && this.onDestroy && this.onDestroy.call(this, new BMDestroyEvent(t, this))
},
AnimationItem.prototype.addEventListener = _addEventListener,
AnimationItem.prototype.removeEventListener = _removeEventListener,
AnimationItem.prototype.triggerEvent = _triggerEvent,
extendPrototype(BaseRenderer, CanvasRenderer),
CanvasRenderer.prototype.createBase = function (t) {
return new CVBaseElement(t, this, this.globalData)
},
CanvasRenderer.prototype.createShape = function (t) {
return new CVShapeElement(t, this, this.globalData)
},
CanvasRenderer.prototype.createText = function (t) {
return new CVTextElement(t, this, this.globalData)
},
CanvasRenderer.prototype.createImage = function (t) {
return new CVImageElement(t, this, this.globalData)
},
CanvasRenderer.prototype.createComp = function (t) {
return new CVCompElement(t, this, this.globalData)
},
CanvasRenderer.prototype.createSolid = function (t) {
return new CVSolidElement(t, this, this.globalData)
},
CanvasRenderer.prototype.ctxTransform = function (t) {
if (1 !== t[0] || 0 !== t[1] || 0 !== t[4] || 1 !== t[5] || 0 !== t[12] || 0 !== t[13]) if (this.renderConfig.clearCanvas) {
this.transformMat.cloneFromProps(t),
this.transformMat.transform(this.contextData.cTr.props[0], this.contextData.cTr.props[1], this.contextData.cTr.props[2], this.contextData.cTr.props[3], this.contextData.cTr.props[4], this.contextData.cTr.props[5], this.contextData.cTr.props[6], this.contextData.cTr.props[7], this.contextData.cTr.props[8], this.contextData.cTr.props[9], this.contextData.cTr.props[10], this.contextData.cTr.props[11], this.contextData.cTr.props[12], this.contextData.cTr.props[13], this.contextData.cTr.props[14], this.contextData.cTr.props[15]),
this.contextData.cTr.cloneFromProps(this.transformMat.props);
var e = this.contextData.cTr.props;
this.canvasContext.setTransform(e[0], e[1], e[4], e[5], e[12], e[13])
} else this.canvasContext.transform(t[0], t[1], t[4], t[5], t[12], t[13])
},
CanvasRenderer.prototype.ctxOpacity = function (t) {
1 !== t && (this.renderConfig.clearCanvas ? (this.contextData.cO *= t < 0 ? 0 : t, this.canvasContext.globalAlpha = this.contextData.cO)  : this.canvasContext.globalAlpha *= t < 0 ? 0 : t)
},
CanvasRenderer.prototype.reset = function () {
this.renderConfig.clearCanvas ? (this.contextData.cArrPos = 0, this.contextData.cTr.reset(), this.contextData.cO = 1)  : this.canvasContext.restore()
},
CanvasRenderer.prototype.save = function (t) {
if (this.renderConfig.clearCanvas) {
t && this.canvasContext.save();
var e = this.contextData.cTr.props;
null !== this.contextData.saved[this.contextData.cArrPos] && void 0 !== this.contextData.saved[this.contextData.cArrPos] || (this.contextData.saved[this.contextData.cArrPos] = new Array(16));
var r,
i = this.contextData.saved[this.contextData.cArrPos];
for (r = 0; r < 16; r += 1) i[r] = e[r];
this.contextData.savedOp[this.contextData.cArrPos] = this.contextData.cO,
this.contextData.cArrPos += 1
} else this.canvasContext.save()
},
CanvasRenderer.prototype.restore = function (t) {
if (this.renderConfig.clearCanvas) {
t && this.canvasContext.restore(),
this.contextData.cArrPos -= 1;
var e,
r = this.contextData.saved[this.contextData.cArrPos],
i = this.contextData.cTr.props;
for (e = 0; e < 16; e += 1) i[e] = r[e];
this.canvasContext.setTransform(r[0], r[1], r[4], r[5], r[12], r[13]),
r = this.contextData.savedOp[this.contextData.cArrPos],
this.contextData.cO = r,
this.canvasContext.globalAlpha = r
} else this.canvasContext.restore()
},
CanvasRenderer.prototype.configAnimation = function (t) {
this.animationItem.wrapper ? (this.animationItem.container = document.createElement('canvas'), this.animationItem.container.style.width = '100%', this.animationItem.container.style.height = '100%', this.animationItem.container.style.transformOrigin = this.animationItem.container.style.mozTransformOrigin = this.animationItem.container.style.webkitTransformOrigin = this.animationItem.container.style['-webkit-transform'] = '0px 0px 0px', this.animationItem.wrapper.appendChild(this.animationItem.container), this.canvasContext = this.animationItem.container.getContext('2d'), this.renderConfig.className && this.animationItem.container.setAttribute('class', this.renderConfig.className))  : this.canvasContext = this.renderConfig.context,
this.data = t,
this.globalData.canvasContext = this.canvasContext,
this.globalData.renderer = this,
this.globalData.isDashed = !1,
this.globalData.totalFrames = Math.floor(t.tf),
this.globalData.compWidth = t.w,
this.globalData.compHeight = t.h,
this.globalData.frameRate = t.fr,
this.globalData.frameId = 0,
this.globalData.compSize = {
w: t.w,
h: t.h
},
this.globalData.progressiveLoad = this.renderConfig.progressiveLoad,
this.layers = t.layers,
this.transformCanvas = {
},
this.transformCanvas.w = t.w,
this.transformCanvas.h = t.h,
this.globalData.fontManager = new FontManager,
this.globalData.fontManager.addChars(t.chars),
this.globalData.fontManager.addFonts(t.fonts, document.body),
this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem),
this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem),
this.globalData.elementLoaded = this.animationItem.elementLoaded.bind(this.animationItem),
this.globalData.addPendingElement = this.animationItem.addPendingElement.bind(this.animationItem),
this.globalData.transformCanvas = this.transformCanvas,
this.elements = Array.apply(null, {
length: t.layers.length
}),
this.updateContainerSize()
},
CanvasRenderer.prototype.updateContainerSize = function () {
var t,
e,
r,
i;
if (this.animationItem.wrapper && this.animationItem.container ? (t = this.animationItem.wrapper.offsetWidth, e = this.animationItem.wrapper.offsetHeight, this.animationItem.container.setAttribute('width', t * this.renderConfig.dpr), this.animationItem.container.setAttribute('height', e * this.renderConfig.dpr))  : (t = this.canvasContext.canvas.width * this.renderConfig.dpr, e = this.canvasContext.canvas.height * this.renderConfig.dpr), - 1 !== this.renderConfig.preserveAspectRatio.indexOf('meet') || - 1 !== this.renderConfig.preserveAspectRatio.indexOf('slice')) {
var n = this.renderConfig.preserveAspectRatio.split(' '),
s = n[1] || 'meet',
o = n[0] || 'xMidYMid',
a = o.substr(0, 4),
l = o.substr(4);
r = t / e,
(i = this.transformCanvas.w / this.transformCanvas.h) > r && 'meet' === s || i < r && 'slice' === s ? (this.transformCanvas.sx = t / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = t / (this.transformCanvas.w / this.renderConfig.dpr))  : (this.transformCanvas.sx = e / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.sy = e / (this.transformCanvas.h / this.renderConfig.dpr)),
this.transformCanvas.tx = 'xMid' === a && (i < r && 'meet' === s || i > r && 'slice' === s) ? (t - this.transformCanvas.w * (e / this.transformCanvas.h)) / 2 * this.renderConfig.dpr : 'xMax' === a && (i < r && 'meet' === s || i > r && 'slice' === s) ? (t - this.transformCanvas.w * (e / this.transformCanvas.h)) * this.renderConfig.dpr : 0,
this.transformCanvas.ty = 'YMid' === l && (i > r && 'meet' === s || i < r && 'slice' === s) ? (e - this.transformCanvas.h * (t / this.transformCanvas.w)) / 2 * this.renderConfig.dpr : 'YMax' === l && (i > r && 'meet' === s || i < r && 'slice' === s) ? (e - this.transformCanvas.h * (t / this.transformCanvas.w)) * this.renderConfig.dpr : 0
} else 'none' == this.renderConfig.preserveAspectRatio ? (this.transformCanvas.sx = t / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = e / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.tx = 0, this.transformCanvas.ty = 0)  : (this.transformCanvas.sx = this.renderConfig.dpr, this.transformCanvas.sy = this.renderConfig.dpr, this.transformCanvas.tx = 0, this.transformCanvas.ty = 0);
this.transformCanvas.props = [
this.transformCanvas.sx,
0,
0,
0,
0,
this.transformCanvas.sy,
0,
0,
0,
0,
1,
0,
this.transformCanvas.tx,
this.transformCanvas.ty,
0,
1
];
var c,
h = this.elements.length;
for (c = 0; c < h; c += 1) this.elements[c] && 0 === this.elements[c].data.ty && this.elements[c].resize(this.globalData.transformCanvas)
},
CanvasRenderer.prototype.destroy = function () {
var t;
for (this.renderConfig.clearCanvas && (this.animationItem.wrapper.innerHTML = ''), t = (this.layers ? this.layers.length : 0) - 1; t >= 0; t -= 1) this.elements[t] && this.elements[t].destroy();
this.elements.length = 0,
this.globalData.canvasContext = null,
this.animationItem.container = null,
this.destroyed = !0
},
CanvasRenderer.prototype.renderFrame = function (t) {
if (!(this.renderedFrame == t && !0 === this.renderConfig.clearCanvas || this.destroyed || null === t)) {
this.renderedFrame = t,
this.globalData.frameNum = t - this.animationItem.firstFrame,
this.globalData.frameId += 1,
this.globalData.projectInterface.currentFrame = t,
!0 === this.renderConfig.clearCanvas ? (this.reset(), this.canvasContext.save(), this.canvasContext.clearRect(this.transformCanvas.tx, this.transformCanvas.ty, this.transformCanvas.w * this.transformCanvas.sx, this.transformCanvas.h * this.transformCanvas.sy))  : this.save(),
this.ctxTransform(this.transformCanvas.props),
this.canvasContext.beginPath(),
this.canvasContext.rect(0, 0, this.transformCanvas.w, this.transformCanvas.h),
this.canvasContext.closePath(),
this.canvasContext.clip();
var e,
r = this.layers.length;
for (this.completeLayers || this.checkLayers(t), e = 0; e < r; e++) (this.completeLayers || this.elements[e]) && this.elements[e].prepareFrame(t - this.layers[e].st);
for (e = r - 1; e >= 0; e -= 1) (this.completeLayers || this.elements[e]) && this.elements[e].renderFrame();
!0 !== this.renderConfig.clearCanvas ? this.restore()  : this.canvasContext.restore()
}
},
CanvasRenderer.prototype.buildItem = function (t) {
var e = this.elements;
if (!e[t] && 99 != this.layers[t].ty) {
var r = this.createItem(this.layers[t], this, this.globalData);
e[t] = r,
r.initExpressions(),
0 === this.layers[t].ty && r.resize(this.globalData.transformCanvas)
}
},
CanvasRenderer.prototype.checkPendingElements = function () {
for (; this.pendingElements.length; ) this.pendingElements.pop().checkParenting()
},
CanvasRenderer.prototype.hide = function () {
this.animationItem.container.style.display = 'none'
},
CanvasRenderer.prototype.show = function () {
this.animationItem.container.style.display = 'block'
},
CanvasRenderer.prototype.searchExtraCompositions = function (t) {
var e,
r = t.length;
for (document.createElementNS(svgNS, 'g'), e = 0; e < r; e += 1) if (t[e].xt) {
var i = this.createComp(t[e], this.globalData.comp, this.globalData);
i.initExpressions(),
this.globalData.projectInterface.registerComposition(i)
}
},
extendPrototype(BaseRenderer, HybridRenderer),
HybridRenderer.prototype.buildItem = SVGRenderer.prototype.buildItem,
HybridRenderer.prototype.checkPendingElements = function () {
for (; this.pendingElements.length; ) this.pendingElements.pop().checkParenting()
},
HybridRenderer.prototype.appendElementInPos = function (t, e) {
var r = t.getBaseElement();
if (r) {
var i = this.layers[e];
if (i.ddd && this.supports3d) this.addTo3dContainer(r, e);
 else {
for (var n, s, o = 0; o < e; ) this.elements[o] && !0 !== this.elements[o] && this.elements[o].getBaseElement && (s = this.elements[o], n = this.layers[o].ddd ? this.getThreeDContainerByPos(o)  : s.getBaseElement()),
o += 1;
n ? i.ddd && this.supports3d || this.layerElement.insertBefore(r, n)  : i.ddd && this.supports3d || this.layerElement.appendChild(r)
}
}
},
HybridRenderer.prototype.createBase = function (t) {
return new SVGBaseElement(t, this.layerElement, this.globalData, this)
},
HybridRenderer.prototype.createShape = function (t) {
return this.supports3d ? new HShapeElement(t, this.layerElement, this.globalData, this)  : new IShapeElement(t, this.layerElement, this.globalData, this)
},
HybridRenderer.prototype.createText = function (t) {
return this.supports3d ? new HTextElement(t, this.layerElement, this.globalData, this)  : new SVGTextElement(t, this.layerElement, this.globalData, this)
},
HybridRenderer.prototype.createCamera = function (t) {
return this.camera = new HCameraElement(t, this.layerElement, this.globalData, this),
this.camera
},
HybridRenderer.prototype.createImage = function (t) {
return this.supports3d ? new HImageElement(t, this.layerElement, this.globalData, this)  : new IImageElement(t, this.layerElement, this.globalData, this)
},
HybridRenderer.prototype.createComp = function (t) {
return this.supports3d ? new HCompElement(t, this.layerElement, this.globalData, this)  : new ICompElement(t, this.layerElement, this.globalData, this)
},
HybridRenderer.prototype.createSolid = function (t) {
return this.supports3d ? new HSolidElement(t, this.layerElement, this.globalData, this)  : new ISolidElement(t, this.layerElement, this.globalData, this)
},
HybridRenderer.prototype.getThreeDContainerByPos = function (t) {
for (var e = 0, r = this.threeDElements.length; e < r; ) {
if (this.threeDElements[e].startPos <= t && this.threeDElements[e].endPos >= t) return this.threeDElements[e].perspectiveElem;
e += 1
}
},
HybridRenderer.prototype.createThreeDContainer = function (t) {
var e = document.createElement('div');
styleDiv(e),
e.style.width = this.globalData.compSize.w + 'px',
e.style.height = this.globalData.compSize.h + 'px',
e.style.transformOrigin = e.style.mozTransformOrigin = e.style.webkitTransformOrigin = '50% 50%';
var r = document.createElement('div');
styleDiv(r),
r.style.transform = r.style.webkitTransform = 'matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)',
e.appendChild(r),
this.resizerElem.appendChild(e);
var i = {
container: r,
perspectiveElem: e,
startPos: t,
endPos: t
};
return this.threeDElements.push(i),
i
},
HybridRenderer.prototype.build3dContainers = function () {
var t,
e,
r = this.layers.length;
for (t = 0; t < r; t += 1) this.layers[t].ddd ? (e || (e = this.createThreeDContainer(t)), e.endPos = Math.max(e.endPos, t))  : e = null
},
HybridRenderer.prototype.addTo3dContainer = function (t, e) {
for (var r = 0, i = this.threeDElements.length; r < i; ) {
if (e <= this.threeDElements[r].endPos) {
for (var n, s = this.threeDElements[r].startPos; s < e; ) this.elements[s] && this.elements[s].getBaseElement && (n = this.elements[s].getBaseElement()),
s += 1;
n ? this.threeDElements[r].container.insertBefore(t, n)  : this.threeDElements[r].container.appendChild(t);
break
}
r += 1
}
},
HybridRenderer.prototype.configAnimation = function (t) {
var e = document.createElement('div'),
r = this.animationItem.wrapper;
e.style.width = t.w + 'px',
e.style.height = t.h + 'px',
this.resizerElem = e,
styleDiv(e),
e.style.transformStyle = e.style.webkitTransformStyle = e.style.mozTransformStyle = 'flat',
this.renderConfig.className && r.setAttribute('class', this.renderConfig.className),
r.appendChild(e),
e.style.overflow = 'hidden';
var i = document.createElementNS(svgNS, 'svg');
i.setAttribute('width', '1'),
i.setAttribute('height', '1'),
styleDiv(i),
this.resizerElem.appendChild(i);
var n = document.createElementNS(svgNS, 'defs');
i.appendChild(n),
this.globalData.defs = n,
this.data = t,
this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem),
this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem),
this.globalData.elementLoaded = this.animationItem.elementLoaded.bind(this.animationItem),
this.globalData.frameId = 0,
this.globalData.compSize = {
w: t.w,
h: t.h
},
this.globalData.frameRate = t.fr,
this.layers = t.layers,
this.globalData.fontManager = new FontManager,
this.globalData.fontManager.addChars(t.chars),
this.globalData.fontManager.addFonts(t.fonts, i),
this.layerElement = this.resizerElem,
this.build3dContainers(),
this.updateContainerSize()
},
HybridRenderer.prototype.destroy = function () {
this.animationItem.wrapper.innerHTML = '',
this.animationItem.container = null,
this.globalData.defs = null;
var t,
e = this.layers ? this.layers.length : 0;
for (t = 0; t < e; t++) this.elements[t].destroy();
this.elements.length = 0,
this.destroyed = !0,
this.animationItem = null
},
HybridRenderer.prototype.updateContainerSize = function () {
var t,
e,
r,
i,
n = this.animationItem.wrapper.offsetWidth,
s = this.animationItem.wrapper.offsetHeight,
o = n / s;
this.globalData.compSize.w / this.globalData.compSize.h > o ? (t = n / this.globalData.compSize.w, e = n / this.globalData.compSize.w, r = 0, i = (s - this.globalData.compSize.h * (n / this.globalData.compSize.w)) / 2)  : (t = s / this.globalData.compSize.h, e = s / this.globalData.compSize.h, r = (n - this.globalData.compSize.w * (s / this.globalData.compSize.h)) / 2, i = 0),
this.resizerElem.style.transform = this.resizerElem.style.webkitTransform = 'matrix3d(' + t + ',0,0,0,0,' + e + ',0,0,0,0,1,0,' + r + ',' + i + ',0,1)'
},
HybridRenderer.prototype.renderFrame = SVGRenderer.prototype.renderFrame,
HybridRenderer.prototype.hide = function () {
this.resizerElem.style.display = 'none'
},
HybridRenderer.prototype.show = function () {
this.resizerElem.style.display = 'block'
},
HybridRenderer.prototype.initItems = function () {
if (this.buildAllItems(), this.camera) this.camera.setup();
 else {
var t,
e = this.globalData.compSize.w,
r = this.globalData.compSize.h,
i = this.threeDElements.length;
for (t = 0; t < i; t += 1) this.threeDElements[t].perspectiveElem.style.perspective = this.threeDElements[t].perspectiveElem.style.webkitPerspective = Math.sqrt(Math.pow(e, 2) + Math.pow(r, 2)) + 'px'
}
},
HybridRenderer.prototype.searchExtraCompositions = function (t) {
var e,
r = t.length,
i = document.createElement('div');
for (e = 0; e < r; e += 1) if (t[e].xt) {
var n = this.createComp(t[e], i, this.globalData.comp, null);
n.initExpressions(),
this.globalData.projectInterface.registerComposition(n)
}
},
createElement(BaseElement, CVBaseElement),
CVBaseElement.prototype.createElements = function () {
this.checkParenting()
},
CVBaseElement.prototype.checkBlendMode = function (t) {
if (t.blendMode !== this.data.bm) {
t.blendMode = this.data.bm;
var e = '';
switch (this.data.bm) {
case 0:
e = 'normal';
break;
case 1:
e = 'multiply';
break;
case 2:
e = 'screen';
break;
case 3:
e = 'overlay';
break;
case 4:
e = 'darken';
break;
case 5:
e = 'lighten';
break;
case 6:
e = 'color-dodge';
break;
case 7:
e = 'color-burn';
break;
case 8:
e = 'hard-light';
break;
case 9:
e = 'soft-light';
break;
case 10:
e = 'difference';
break;
case 11:
e = 'exclusion';
break;
case 12:
e = 'hue';
break;
case 13:
e = 'saturation';
break;
case 14:
e = 'color';
break;
case 15:
e = 'luminosity'
}
t.canvasContext.globalCompositeOperation = e
}
},
CVBaseElement.prototype.renderFrame = function (t) {
if (3 === this.data.ty) return !1;
if (this.checkBlendMode(0 === this.data.ty ? this.parentGlobalData : this.globalData), !this.isVisible) return this.isVisible;
var e;
this.finalTransform.opMdf = this.finalTransform.op.mdf,
this.finalTransform.matMdf = this.finalTransform.mProp.mdf,
this.finalTransform.opacity = this.finalTransform.op.v;
var r = this.finalTransform.mat;
if (this.hierarchy) {
var i,
n = this.hierarchy.length;
for (e = this.finalTransform.mProp.v.props, r.cloneFromProps(e), i = 0; i < n; i += 1) this.finalTransform.matMdf = !!this.hierarchy[i].finalTransform.mProp.mdf || this.finalTransform.matMdf,
e = this.hierarchy[i].finalTransform.mProp.v.props,
r.transform(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8], e[9], e[10], e[11], e[12], e[13], e[14], e[15])
} else t ? (e = this.finalTransform.mProp.v.props, r.cloneFromProps(e))  : r.cloneFromProps(this.finalTransform.mProp.v.props);
return t && (e = t.mat.props, r.transform(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8], e[9], e[10], e[11], e[12], e[13], e[14], e[15]), this.finalTransform.opacity *= t.opacity, this.finalTransform.opMdf = !!t.opMdf || this.finalTransform.opMdf, this.finalTransform.matMdf = !!t.matMdf || this.finalTransform.matMdf),
this.data.hasMask && (this.globalData.renderer.save(!0), this.maskManager.renderFrame(0 === this.data.ty ? null : r)),
this.data.hd && (this.isVisible = !1),
this.isVisible
},
CVBaseElement.prototype.addMasks = function (t) {
this.maskManager = new CVMaskElement(t, this, this.globalData)
},
CVBaseElement.prototype.destroy = function () {
this.canvasContext = null,
this.data = null,
this.globalData = null,
this.maskManager && this.maskManager.destroy()
},
CVBaseElement.prototype.mHelper = new Matrix,
createElement(CVBaseElement, CVCompElement),
CVCompElement.prototype.ctxTransform = CanvasRenderer.prototype.ctxTransform,
CVCompElement.prototype.ctxOpacity = CanvasRenderer.prototype.ctxOpacity,
CVCompElement.prototype.save = CanvasRenderer.prototype.save,
CVCompElement.prototype.restore = CanvasRenderer.prototype.restore,
CVCompElement.prototype.reset = function () {
this.contextData.cArrPos = 0,
this.contextData.cTr.reset(),
this.contextData.cO = 1
},
CVCompElement.prototype.resize = function (t) {
var e = Math.max(t.sx, t.sy);
this.canvas.width = this.data.w * e,
this.canvas.height = this.data.h * e,
this.transformCanvas = {
sc: e,
w: this.data.w * e,
h: this.data.h * e,
props: [
e,
0,
0,
0,
0,
e,
0,
0,
0,
0,
1,
0,
0,
0,
0,
1
]
};
var r,
i = this.elements.length;
for (r = 0; r < i; r += 1) this.elements[r] && 0 === this.elements[r].data.ty && this.elements[r].resize(t)
},
CVCompElement.prototype.prepareFrame = function (t) {
if (this.globalData.frameId = this.parentGlobalData.frameId, this.globalData.mdf = !1, this._parent.prepareFrame.call(this, t), !1 !== this.isVisible || this.data.xt) {
var e = t;
this.tm && (e = this.tm.v) === this.data.op && (e = this.data.op - 1),
this.renderedFrame = e / this.data.sr;
var r,
i = this.elements.length;
for (this.completeLayers || this.checkLayers(t), r = 0; r < i; r += 1) (this.completeLayers || this.elements[r]) && (this.elements[r].prepareFrame(e / this.data.sr - this.layers[r].st), 0 === this.elements[r].data.ty && this.elements[r].globalData.mdf && (this.globalData.mdf = !0));
this.globalData.mdf && !this.data.xt && (this.canvasContext.clearRect(0, 0, this.data.w, this.data.h), this.ctxTransform(this.transformCanvas.props))
}
},
CVCompElement.prototype.renderFrame = function (t) {
if (!1 !== this._parent.renderFrame.call(this, t)) {
var e;
if (this.globalData.mdf) for (e = this.layers.length - 1; e >= 0; e -= 1) (this.completeLayers || this.elements[e]) && this.elements[e].renderFrame();
this.data.hasMask && this.globalData.renderer.restore(!0),
this.firstFrame && (this.firstFrame = !1),
this.parentGlobalData.renderer.save(),
this.parentGlobalData.renderer.ctxTransform(this.finalTransform.mat.props),
this.parentGlobalData.renderer.ctxOpacity(this.finalTransform.opacity),
this.parentGlobalData.renderer.canvasContext.drawImage(this.canvas, 0, 0, this.data.w, this.data.h),
this.parentGlobalData.renderer.restore(),
this.globalData.mdf && this.reset()
}
},
CVCompElement.prototype.setElements = function (t) {
this.elements = t
},
CVCompElement.prototype.getElements = function () {
return this.elements
},
CVCompElement.prototype.destroy = function () {
var t;
for (t = this.layers.length - 1; t >= 0; t -= 1) this.elements[t].destroy();
this.layers = null,
this.elements = null,
this._parent.destroy.call(this._parent)
},
CVCompElement.prototype.checkLayers = CanvasRenderer.prototype.checkLayers,
CVCompElement.prototype.buildItem = CanvasRenderer.prototype.buildItem,
CVCompElement.prototype.checkPendingElements = CanvasRenderer.prototype.checkPendingElements,
CVCompElement.prototype.addPendingElement = CanvasRenderer.prototype.addPendingElement,
CVCompElement.prototype.buildAllItems = CanvasRenderer.prototype.buildAllItems,
CVCompElement.prototype.createItem = CanvasRenderer.prototype.createItem,
CVCompElement.prototype.createImage = CanvasRenderer.prototype.createImage,
CVCompElement.prototype.createComp = CanvasRenderer.prototype.createComp,
CVCompElement.prototype.createSolid = CanvasRenderer.prototype.createSolid,
CVCompElement.prototype.createShape = CanvasRenderer.prototype.createShape,
CVCompElement.prototype.createText = CanvasRenderer.prototype.createText,
CVCompElement.prototype.createBase = CanvasRenderer.prototype.createBase,
CVCompElement.prototype.buildElementParenting = CanvasRenderer.prototype.buildElementParenting,
createElement(CVBaseElement, CVImageElement),
CVImageElement.prototype.createElements = function () {
var t = function () {
if (this.globalData.elementLoaded(), this.assetData.w !== this.img.width || this.assetData.h !== this.img.height) {
var t = document.createElement('canvas');
t.width = this.assetData.w,
t.height = this.assetData.h;
var e,
r,
i = t.getContext('2d'),
n = this.img.width,
s = this.img.height,
o = n / s,
a = this.assetData.w / this.assetData.h;
o > a ? e = (r = s) * a : r = (e = n) / a,
i.drawImage(this.img, (n - e) / 2, (s - r) / 2, e, r, 0, 0, this.assetData.w, this.assetData.h),
this.img = t
}
}.bind(this),
e = function () {
this.failed = !0,
this.globalData.elementLoaded()
}.bind(this);
this.img = new Image,
this.img.addEventListener('load', t, !1),
this.img.addEventListener('error', e, !1);
var r = this.globalData.getAssetsPath(this.assetData);
this.img.src = r,
this._parent.createElements.call(this)
},
CVImageElement.prototype.renderFrame = function (t) {
if (!this.failed && !1 !== this._parent.renderFrame.call(this, t)) {
var e = this.canvasContext;
this.globalData.renderer.save();
var r = this.finalTransform.mat.props;
this.globalData.renderer.ctxTransform(r),
this.globalData.renderer.ctxOpacity(this.finalTransform.opacity),
e.drawImage(this.img, 0, 0),
this.globalData.renderer.restore(this.data.hasMask),
this.firstFrame && (this.firstFrame = !1)
}
},
CVImageElement.prototype.destroy = function () {
this.img = null,
this._parent.destroy.call(this._parent)
},
CVMaskElement.prototype.prepareFrame = function (t) {
var e,
r = this.dynamicProperties.length;
for (e = 0; e < r; e += 1) this.dynamicProperties[e].getValue(t),
this.dynamicProperties[e].mdf && (this.element.globalData.mdf = !0)
},
CVMaskElement.prototype.renderFrame = function (t) {
var e,
r,
i,
n,
s,
o = this.element.canvasContext,
a = this.data.masksProperties.length,
l = !1;
for (e = 0; e < a; e++) if ('n' !== this.masksProperties[e].mode) {
!1 === l && (o.beginPath(), l = !0),
this.masksProperties[e].inv && (o.moveTo(0, 0), o.lineTo(this.element.globalData.compWidth, 0), o.lineTo(this.element.globalData.compWidth, this.element.globalData.compHeight), o.lineTo(0, this.element.globalData.compHeight), o.lineTo(0, 0)),
s = this.viewData[e].v,
r = t ? t.applyToPointArray(s.v[0][0], s.v[0][1], 0)  : s.v[0],
o.moveTo(r[0], r[1]);
var c,
h = s._length;
for (c = 1; c < h; c++) r = t ? t.applyToPointArray(s.o[c - 1][0], s.o[c - 1][1], 0)  : s.o[c - 1],
i = t ? t.applyToPointArray(s.i[c][0], s.i[c][1], 0)  : s.i[c],
n = t ? t.applyToPointArray(s.v[c][0], s.v[c][1], 0)  : s.v[c],
o.bezierCurveTo(r[0], r[1], i[0], i[1], n[0], n[1]);
r = t ? t.applyToPointArray(s.o[c - 1][0], s.o[c - 1][1], 0)  : s.o[c - 1],
i = t ? t.applyToPointArray(s.i[0][0], s.i[0][1], 0)  : s.i[0],
n = t ? t.applyToPointArray(s.v[0][0], s.v[0][1], 0)  : s.v[0],
o.bezierCurveTo(r[0], r[1], i[0], i[1], n[0], n[1])
}
l && o.clip()
},
CVMaskElement.prototype.getMaskProperty = MaskElement.prototype.getMaskProperty,
CVMaskElement.prototype.destroy = function () {
this.element = null
},
createElement(CVBaseElement, CVShapeElement),
CVShapeElement.prototype.transformHelper = {
opacity: 1,
mat: new Matrix,
matMdf: !1,
opMdf: !1
},
CVShapeElement.prototype.dashResetter = [
],
CVShapeElement.prototype.createElements = function () {
this._parent.createElements.call(this),
this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.dynamicProperties, !0)
},
CVShapeElement.prototype.createStyleElement = function (t, e) {
var r = {
data: t,
type: t.ty,
elements: [
]
},
i = {
};
if ('fl' != t.ty && 'st' != t.ty || (i.c = PropertyFactory.getProp(this, t.c, 1, 255, e), i.c.k || (r.co = 'rgb(' + bm_floor(i.c.v[0]) + ',' + bm_floor(i.c.v[1]) + ',' + bm_floor(i.c.v[2]) + ')')), i.o = PropertyFactory.getProp(this, t.o, 0, 0.01, e), 'st' == t.ty) {
if (r.lc = this.lcEnum[t.lc] || 'round', r.lj = this.ljEnum[t.lj] || 'round', 1 == t.lj && (r.ml = t.ml), i.w = PropertyFactory.getProp(this, t.w, 0, null, e), i.w.k || (r.wi = i.w.v), t.d) {
var n = PropertyFactory.getDashProp(this, t.d, 'canvas', e);
i.d = n,
i.d.k || (r.da = i.d.dasharray, r.do = i.d.dashoffset)
}
} else r.r = 2 === t.r ? 'evenodd' : 'nonzero';
return this.stylesList.push(r),
i.style = r,
i
},
CVShapeElement.prototype.createGroupElement = function (t) {
return {
it: [
],
prevViewData: [
]
}
},
CVShapeElement.prototype.createTransformElement = function (t, e) {
return {
transform: {
mat: new Matrix,
opacity: 1,
matMdf: !1,
opMdf: !1,
op: PropertyFactory.getProp(this, t.o, 0, 0.01, e),
mProps: PropertyFactory.getProp(this, t, 2, null, e)
},
elements: [
]
}
},
CVShapeElement.prototype.createShapeElement = function (t, e) {
var r = {
nodes: [
],
trNodes: [
],
tr: [
0,
0,
0,
0,
0,
0
]
},
i = 4;
'rc' == t.ty ? i = 5 : 'el' == t.ty ? i = 6 : 'sr' == t.ty && (i = 7),
r.sh = ShapePropertyFactory.getShapeProp(this, t, i, e),
this.shapes.push(r.sh),
this.addShapeToModifiers(r),
jLen = this.stylesList.length;
var n = !1,
s = !1;
for (j = 0; j < jLen; j += 1) this.stylesList[j].closed || (this.stylesList[j].elements.push(r), 'st' === this.stylesList[j].type ? n = !0 : s = !0);
return r.st = n,
r.fl = s,
r
},
CVShapeElement.prototype.reloadShapes = function () {
this.firstFrame = !0;
var t,
e = this.itemsData.length;
for (t = 0; t < e; t += 1) this.prevViewData[t] = this.itemsData[t];
for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.dynamicProperties, !0), e = this.dynamicProperties.length, t = 0; t < e; t += 1) this.dynamicProperties[t].getValue();
this.renderModifiers()
},
CVShapeElement.prototype.searchShapes = function (t, e, r, i, n) {
var s,
o,
a,
l,
c = t.length - 1,
h = [
],
d = [
];
for (s = c; s >= 0; s -= 1) {
if ((l = this.searchProcessedElement(t[s])) ? e[s] = r[l - 1] : t[s]._render = n, 'fl' == t[s].ty || 'st' == t[s].ty) l ? e[s].style.closed = !1 : e[s] = this.createStyleElement(t[s], i),
h.push(e[s].style);
 else if ('gr' == t[s].ty) {
if (l) for (a = e[s].it.length, o = 0; o < a; o += 1) e[s].prevViewData[o] = e[s].it[o];
 else e[s] = this.createGroupElement(t[s]);
this.searchShapes(t[s].it, e[s].it, e[s].prevViewData, i, n)
} else if ('tr' == t[s].ty) l || (e[s] = this.createTransformElement(t[s], i));
 else if ('sh' == t[s].ty || 'rc' == t[s].ty || 'el' == t[s].ty || 'sr' == t[s].ty) l || (e[s] = this.createShapeElement(t[s], i));
 else if ('tm' == t[s].ty || 'rd' == t[s].ty) {
if (l) (u = e[s]).closed = !1;
 else {
var u = ShapeModifiers.getModifier(t[s].ty);
u.init(this, t[s], i),
e[s] = u,
this.shapeModifiers.push(u)
}
d.push(u)
} else 'rp' == t[s].ty && (l ? (u = e[s]).closed = !0 : (u = ShapeModifiers.getModifier(t[s].ty), e[s] = u, u.init(this, t, s, e, i), this.shapeModifiers.push(u), n = !1), d.push(u));
this.addProcessedElement(t[s], s + 1)
}
for (c = h.length, s = 0; s < c; s += 1) h[s].closed = !0;
for (c = d.length, s = 0; s < c; s += 1) d[s].closed = !0
},
CVShapeElement.prototype.addShapeToModifiers = IShapeElement.prototype.addShapeToModifiers,
CVShapeElement.prototype.renderModifiers = IShapeElement.prototype.renderModifiers,
CVShapeElement.prototype.lcEnum = IShapeElement.prototype.lcEnum,
CVShapeElement.prototype.ljEnum = IShapeElement.prototype.ljEnum,
CVShapeElement.prototype.searchProcessedElement = IShapeElement.prototype.searchProcessedElement,
CVShapeElement.prototype.addProcessedElement = IShapeElement.prototype.addProcessedElement,
CVShapeElement.prototype.renderFrame = function (t) {
!1 !== this._parent.renderFrame.call(this, t) && (this.transformHelper.mat.reset(), this.transformHelper.opacity = this.finalTransform.opacity, this.transformHelper.matMdf = !1, this.transformHelper.opMdf = this.finalTransform.opMdf, this.renderModifiers(), this.renderShape(this.transformHelper, null, null, !0), this.data.hasMask && this.globalData.renderer.restore(!0))
},
CVShapeElement.prototype.renderShape = function (t, e, r, i) {
var n,
s,
o,
a;
if (!e) for (e = this.shapesData, s = this.stylesList.length, n = 0; n < s; n += 1) this.stylesList[n].d = '',
this.stylesList[n].mdf = !1;
for (r || (r = this.itemsData), o = t, n = s = e.length - 1; n >= 0; n -= 1) if ('tr' == e[n].ty) {
o = r[n].transform;
var l = r[n].transform.mProps.v.props;
if (o.matMdf = o.mProps.mdf, o.opMdf = o.op.mdf, (a = o.mat).cloneFromProps(l), t) {
var c = t.mat.props;
o.opacity = t.opacity,
o.opacity *= r[n].transform.op.v,
o.matMdf = !!t.matMdf || o.matMdf,
o.opMdf = !!t.opMdf || o.opMdf,
a.transform(c[0], c[1], c[2], c[3], c[4], c[5], c[6], c[7], c[8], c[9], c[10], c[11], c[12], c[13], c[14], c[15])
} else o.opacity = o.op.o
} else 'sh' == e[n].ty || 'el' == e[n].ty || 'rc' == e[n].ty || 'sr' == e[n].ty ? this.renderPath(e[n], r[n], o)  : 'fl' == e[n].ty ? this.renderFill(e[n], r[n], o)  : 'st' == e[n].ty ? this.renderStroke(e[n], r[n], o)  : 'gr' == e[n].ty ? this.renderShape(o, e[n].it, r[n].it)  : e[n].ty;
if (i) {
s = this.stylesList.length;
var h,
d,
u,
p,
_,
f,
m,
g = this.globalData.renderer,
v = this.globalData.canvasContext;
for (g.save(), g.ctxTransform(this.finalTransform.mat.props), n = 0; n < s; n += 1) if (('st' !== (m = this.stylesList[n].type) || 0 !== this.stylesList[n].wi) && this.stylesList[n].data._render) {
for (g.save(), _ = this.stylesList[n].elements, 'st' === m ? (v.strokeStyle = this.stylesList[n].co, v.lineWidth = this.stylesList[n].wi, v.lineCap = this.stylesList[n].lc, v.lineJoin = this.stylesList[n].lj, v.miterLimit = this.stylesList[n].ml || 0)  : v.fillStyle = this.stylesList[n].co, g.ctxOpacity(this.stylesList[n].coOp), 'st' !== m && v.beginPath(), d = _.length, h = 0; h < d; h += 1) {
for ('st' === m && (v.beginPath(), this.stylesList[n].da ? (v.setLineDash(this.stylesList[n].da), v.lineDashOffset = this.stylesList[n].do ,
this.globalData.isDashed = !0) : this.globalData.isDashed && (v.setLineDash(this.dashResetter), this.globalData.isDashed = !1)),
p = (f = _[h].trNodes).length,
u = 0;
u < p;
u += 1) 'm' == f[u].t ? v.moveTo(f[u].p[0], f[u].p[1])  : 'c' == f[u].t ? v.bezierCurveTo(f[u].p1[0], f[u].p1[1], f[u].p2[0], f[u].p2[1], f[u].p3[0], f[u].p3[1])  : v.closePath(); 'st' === m && v.stroke()
}
'st' !== m && v.fill(this.stylesList[n].r), g.restore()
}
g.restore(),
this.firstFrame && (this.firstFrame = !1)
}
},
CVShapeElement.prototype.renderPath = function (t, e, r) {
var i,
n,
s,
o;
if (r.matMdf || e.sh.mdf || this.firstFrame) {
var a = e.sh.paths,
l = r.mat;
o = a._length;
var c = e.trNodes;
for (c.length = 0, s = 0; s < o; s += 1) {
var h = a.shapes[s];
if (h && h.v) {
for (i = h._length, n = 1; n < i; n += 1) 1 == n && c.push({
t: 'm',
p: l.applyToPointArray(h.v[0][0], h.v[0][1], 0)
}),
c.push({
t: 'c',
p1: l.applyToPointArray(h.o[n - 1][0], h.o[n - 1][1], 0),
p2: l.applyToPointArray(h.i[n][0], h.i[n][1], 0),
p3: l.applyToPointArray(h.v[n][0], h.v[n][1], 0)
});
1 == i && c.push({
t: 'm',
p: l.applyToPointArray(h.v[0][0], h.v[0][1], 0)
}),
h.c && i && (c.push({
t: 'c',
p1: l.applyToPointArray(h.o[n - 1][0], h.o[n - 1][1], 0),
p2: l.applyToPointArray(h.i[0][0], h.i[0][1], 0),
p3: l.applyToPointArray(h.v[0][0], h.v[0][1], 0)
}), c.push({
t: 'z'
})),
e.lStr = c
}
}
if (e.st) for (n = 0; n < 16; n += 1) e.tr[n] = r.mat.props[n];
e.trNodes = c
}
},
CVShapeElement.prototype.renderFill = function (t, e, r) {
var i = e.style;
(e.c.mdf || this.firstFrame) && (i.co = 'rgb(' + bm_floor(e.c.v[0]) + ',' + bm_floor(e.c.v[1]) + ',' + bm_floor(e.c.v[2]) + ')'),
(e.o.mdf || r.opMdf || this.firstFrame) && (i.coOp = e.o.v * r.opacity)
},
CVShapeElement.prototype.renderStroke = function (t, e, r) {
var i = e.style,
n = e.d;
n && (n.mdf || this.firstFrame) && (i.da = n.dasharray, i.do = n.dashoffset), (e.c.mdf || this.firstFrame) && (i.co = 'rgb(' + bm_floor(e.c.v[0]) + ',' + bm_floor(e.c.v[1]) + ',' + bm_floor(e.c.v[2]) + ')'), (e.o.mdf || r.opMdf || this.firstFrame) && (i.coOp = e.o.v * r.opacity), (e.w.mdf || this.firstFrame) && (i.wi = e.w.v)
},
CVShapeElement.prototype.destroy = function () {
this.shapesData = null,
this.globalData = null,
this.canvasContext = null,
this.stylesList.length = 0,
this.itemData.length = 0,
this._parent.destroy.call(this._parent)
},
createElement(CVBaseElement, CVSolidElement),
CVSolidElement.prototype.renderFrame = function (t) {
if (!1 !== this._parent.renderFrame.call(this, t)) {
var e = this.canvasContext;
this.globalData.renderer.save(),
this.globalData.renderer.ctxTransform(this.finalTransform.mat.props),
this.globalData.renderer.ctxOpacity(this.finalTransform.opacity),
e.fillStyle = this.data.sc,
e.fillRect(0, 0, this.data.sw, this.data.sh),
this.globalData.renderer.restore(this.data.hasMask),
this.firstFrame && (this.firstFrame = !1)
}
},
createElement(CVBaseElement, CVTextElement),
extendPrototype(ITextElement, CVTextElement),
CVTextElement.prototype.tHelper = document.createElement('canvas').getContext('2d'),
CVTextElement.prototype.createElements = function () {
this._parent.createElements.call(this)
},
CVTextElement.prototype.buildNewText = function () {
var t = this.textProperty.currentData;
this.renderedLetters = Array.apply(null, {
length: t.l ? t.l.length : 0
});
var e = !1;
t.fc ? (e = !0, this.values.fill = this.buildColor(t.fc))  : this.values.fill = 'rgba(0,0,0,0)',
this.fill = e;
var r = !1;
t.sc && (r = !0, this.values.stroke = this.buildColor(t.sc), this.values.sWidth = t.sw);
var i,
n,
s = this.globalData.fontManager.getFontByName(t.f),
o = t.l,
a = this.mHelper;
this.stroke = r,
this.values.fValue = t.s + 'px ' + this.globalData.fontManager.getFontByName(t.f).fFamily,
n = t.t.length;
var l,
c,
h,
d,
u,
p,
_,
f,
m,
g,
v = this.data.singleShape,
b = t.tr / 1000 * t.s,
y = 0,
E = 0,
w = !0,
O = 0;
for (i = 0; i < n; i += 1) {
for (c = (l = this.globalData.fontManager.getCharData(t.t.charAt(i), s.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily)) && l.data || {
}, a.reset(), v && o[i].n && (y = - b, E += t.yOffset, E += w ? 1 : 0, w = !1), _ = (u = c.shapes ? c.shapes[0].it : [
]).length, a.scale(t.s / 100, t.s / 100), v && this.applyTextPropertiesToMatrix(t, a, o[i].line, y, E), m = Array.apply(null, {
length: _
}), p = 0; p < _; p += 1) {
for (d = u[p].ks.k.i.length, f = u[p].ks.k, g = [
], h = 1; h < d; h += 1) 1 == h && g.push(a.applyToX(f.v[0][0], f.v[0][1], 0), a.applyToY(f.v[0][0], f.v[0][1], 0)),
g.push(a.applyToX(f.o[h - 1][0], f.o[h - 1][1], 0), a.applyToY(f.o[h - 1][0], f.o[h - 1][1], 0), a.applyToX(f.i[h][0], f.i[h][1], 0), a.applyToY(f.i[h][0], f.i[h][1], 0), a.applyToX(f.v[h][0], f.v[h][1], 0), a.applyToY(f.v[h][0], f.v[h][1], 0));
g.push(a.applyToX(f.o[h - 1][0], f.o[h - 1][1], 0), a.applyToY(f.o[h - 1][0], f.o[h - 1][1], 0), a.applyToX(f.i[0][0], f.i[0][1], 0), a.applyToY(f.i[0][0], f.i[0][1], 0), a.applyToX(f.v[0][0], f.v[0][1], 0), a.applyToY(f.v[0][0], f.v[0][1], 0)),
m[p] = g
}
v && (y += o[i].l, y += b),
this.textSpans[O] ? this.textSpans[O].elem = m : this.textSpans[O] = {
elem: m
},
O += 1
}
},
CVTextElement.prototype.renderFrame = function (t) {
if (!1 !== this._parent.renderFrame.call(this, t)) {
var e,
r,
i,
n,
s,
o,
a = this.canvasContext,
l = this.finalTransform.mat.props;
this.globalData.renderer.save(),
this.globalData.renderer.ctxTransform(l),
this.globalData.renderer.ctxOpacity(this.finalTransform.opacity),
a.font = this.values.fValue,
a.lineCap = 'butt',
a.lineJoin = 'miter',
a.miterLimit = 4,
this.data.singleShape || this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);
var c,
h = this.textAnimator.renderedLetters,
d = this.textProperty.currentData.l;
r = d.length;
var u,
p,
_ = null,
f = null,
m = null;
for (e = 0; e < r; e += 1) if (!d[e].n) {
if ((c = h[e]) && (this.globalData.renderer.save(), this.globalData.renderer.ctxTransform(c.p), this.globalData.renderer.ctxOpacity(c.o)), this.fill) {
for (c && c.fc ? _ !== c.fc && (_ = c.fc, a.fillStyle = c.fc)  : _ !== this.values.fill && (_ = this.values.fill, a.fillStyle = this.values.fill), n = (u = this.textSpans[e].elem).length, this.globalData.canvasContext.beginPath(), i = 0; i < n; i += 1) for (o = (p = u[i]).length, this.globalData.canvasContext.moveTo(p[0], p[1]), s = 2; s < o; s += 6) this.globalData.canvasContext.bezierCurveTo(p[s], p[s + 1], p[s + 2], p[s + 3], p[s + 4], p[s + 5]);
this.globalData.canvasContext.closePath(),
this.globalData.canvasContext.fill()
}
if (this.stroke) {
for (c && c.sw ? m !== c.sw && (m = c.sw, a.lineWidth = c.sw)  : m !== this.values.sWidth && (m = this.values.sWidth, a.lineWidth = this.values.sWidth), c && c.sc ? f !== c.sc && (f = c.sc, a.strokeStyle = c.sc)  : f !== this.values.stroke && (f = this.values.stroke, a.strokeStyle = this.values.stroke), n = (u = this.textSpans[e].elem).length, this.globalData.canvasContext.beginPath(), i = 0; i < n; i += 1) for (o = (p = u[i]).length, this.globalData.canvasContext.moveTo(p[0], p[1]), s = 2; s < o; s += 6) this.globalData.canvasContext.bezierCurveTo(p[s], p[s + 1], p[s + 2], p[s + 3], p[s + 4], p[s + 5]);
this.globalData.canvasContext.closePath(),
this.globalData.canvasContext.stroke()
}
c && this.globalData.renderer.restore()
}
this.globalData.renderer.restore(this.data.hasMask),
this.firstFrame && (this.firstFrame = !1)
}
},
createElement(BaseElement, HBaseElement),
HBaseElement.prototype.checkBlendMode = function () {
},
HBaseElement.prototype.setBlendMode = BaseElement.prototype.setBlendMode,
HBaseElement.prototype.getBaseElement = function () {
return this.baseElement
},
HBaseElement.prototype.createElements = function () {
this.data.hasMask ? (this.layerElement = document.createElementNS(svgNS, 'svg'), styleDiv(this.layerElement), this.baseElement = this.layerElement, this.maskedElement = this.layerElement)  : this.layerElement = this.parentContainer,
this.transformedElement = this.layerElement,
!this.data.ln || 4 !== this.data.ty && 0 !== this.data.ty || (this.layerElement === this.parentContainer && (this.layerElement = document.createElementNS(svgNS, 'g'), this.baseElement = this.layerElement), this.layerElement.setAttribute('id', this.data.ln)),
this.setBlendMode(),
this.layerElement !== this.parentContainer && (this.placeholder = null),
this.checkParenting()
},
HBaseElement.prototype.renderFrame = function (t) {
if (3 === this.data.ty) return !1;
if (this.currentFrameNum === this.lastNum || !this.isVisible) return this.isVisible;
var e;
this.lastNum = this.currentFrameNum,
this.finalTransform.opMdf = this.finalTransform.op.mdf,
this.finalTransform.matMdf = this.finalTransform.mProp.mdf,
this.finalTransform.opacity = this.finalTransform.op.v,
this.firstFrame && (this.finalTransform.opMdf = !0, this.finalTransform.matMdf = !0);
var r = this.finalTransform.mat;
if (this.hierarchy) {
var i,
n = this.hierarchy.length;
for (e = this.finalTransform.mProp.v.props, r.cloneFromProps(e), i = 0; i < n; i += 1) this.finalTransform.matMdf = !!this.hierarchy[i].finalTransform.mProp.mdf || this.finalTransform.matMdf,
e = this.hierarchy[i].finalTransform.mProp.v.props,
r.transform(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8], e[9], e[10], e[11], e[12], e[13], e[14], e[15])
} else this.isVisible && this.finalTransform.matMdf && (t ? (e = this.finalTransform.mProp.v.props, r.cloneFromProps(e))  : r.cloneFromProps(this.finalTransform.mProp.v.props));
return this.data.hasMask && this.maskManager.renderFrame(r),
t && (e = t.mat.props, r.cloneFromProps(e), this.finalTransform.opacity *= t.opacity, this.finalTransform.opMdf = !!t.opMdf || this.finalTransform.opMdf, this.finalTransform.matMdf = !!t.matMdf || this.finalTransform.matMdf),
this.finalTransform.matMdf && (this.transformedElement.style.transform = this.transformedElement.style.webkitTransform = r.toCSS(), this.finalMat = r),
this.finalTransform.opMdf && (this.transformedElement.style.opacity = this.finalTransform.opacity),
this.isVisible
},
HBaseElement.prototype.destroy = function () {
this.layerElement = null,
this.transformedElement = null,
this.parentContainer = null,
this.matteElement && (this.matteElement = null),
this.maskManager && (this.maskManager.destroy(), this.maskManager = null)
},
HBaseElement.prototype.getDomElement = function () {
return this.layerElement
},
HBaseElement.prototype.addMasks = function (t) {
this.maskManager = new MaskElement(t, this, this.globalData)
},
HBaseElement.prototype.hide = function () {
},
HBaseElement.prototype.setMatte = function () {
},
HBaseElement.prototype.buildElementParenting = HybridRenderer.prototype.buildElementParenting,
createElement(HBaseElement, HSolidElement),
HSolidElement.prototype.createElements = function () {
var t = document.createElement('div');
styleDiv(t);
var e = document.createElementNS(svgNS, 'svg');
styleDiv(e),
e.setAttribute('width', this.data.sw),
e.setAttribute('height', this.data.sh),
t.appendChild(e),
this.layerElement = t,
this.transformedElement = t,
this.baseElement = t,
this.innerElem = t,
this.data.ln && this.innerElem.setAttribute('id', this.data.ln),
0 !== this.data.bm && this.setBlendMode();
var r = document.createElementNS(svgNS, 'rect');
r.setAttribute('width', this.data.sw),
r.setAttribute('height', this.data.sh),
r.setAttribute('fill', this.data.sc),
e.appendChild(r),
this.data.hasMask && (this.maskedElement = r),
this.checkParenting()
},
HSolidElement.prototype.hide = SVGBaseElement.prototype.hide,
HSolidElement.prototype.show = SVGBaseElement.prototype.show,
HSolidElement.prototype.renderFrame = IImageElement.prototype.renderFrame,
HSolidElement.prototype.destroy = IImageElement.prototype.destroy,
createElement(HBaseElement, HCompElement),
HCompElement.prototype.createElements = function () {
var t = document.createElement('div');
if (styleDiv(t), this.data.ln && t.setAttribute('id', this.data.ln), t.style.clip = 'rect(0px, ' + this.data.w + 'px, ' + this.data.h + 'px, 0px)', this.data.hasMask) {
var e = document.createElementNS(svgNS, 'svg');
styleDiv(e),
e.setAttribute('width', this.data.w),
e.setAttribute('height', this.data.h);
var r = document.createElementNS(svgNS, 'g');
e.appendChild(r),
t.appendChild(e),
this.maskedElement = r,
this.baseElement = t,
this.layerElement = r,
this.transformedElement = t
} else this.layerElement = t,
this.baseElement = this.layerElement,
this.transformedElement = t;
this.checkParenting()
},
HCompElement.prototype.hide = ICompElement.prototype.hide,
HCompElement.prototype.prepareFrame = ICompElement.prototype.prepareFrame,
HCompElement.prototype.setElements = ICompElement.prototype.setElements,
HCompElement.prototype.getElements = ICompElement.prototype.getElements,
HCompElement.prototype.destroy = ICompElement.prototype.destroy,
HCompElement.prototype.renderFrame = function (t) {
var e,
r = this._parent.renderFrame.call(this, t),
i = this.layers.length;
if (!1 !== r) {
for (this.hidden = !1, e = 0; e < i; e += 1) (this.completeLayers || this.elements[e]) && this.elements[e].renderFrame();
this.firstFrame && (this.firstFrame = !1)
} else this.hide()
},
HCompElement.prototype.checkLayers = BaseRenderer.prototype.checkLayers,
HCompElement.prototype.buildItem = HybridRenderer.prototype.buildItem,
HCompElement.prototype.checkPendingElements = HybridRenderer.prototype.checkPendingElements,
HCompElement.prototype.addPendingElement = HybridRenderer.prototype.addPendingElement,
HCompElement.prototype.buildAllItems = BaseRenderer.prototype.buildAllItems,
HCompElement.prototype.createItem = HybridRenderer.prototype.createItem,
HCompElement.prototype.buildElementParenting = HybridRenderer.prototype.buildElementParenting,
HCompElement.prototype.createImage = HybridRenderer.prototype.createImage,
HCompElement.prototype.createComp = HybridRenderer.prototype.createComp,
HCompElement.prototype.createSolid = HybridRenderer.prototype.createSolid,
HCompElement.prototype.createShape = HybridRenderer.prototype.createShape,
HCompElement.prototype.createText = HybridRenderer.prototype.createText,
HCompElement.prototype.createBase = HybridRenderer.prototype.createBase,
HCompElement.prototype.appendElementInPos = HybridRenderer.prototype.appendElementInPos,
createElement(HBaseElement, HShapeElement);
var parent = HShapeElement.prototype._parent;
function HTextElement(t, e, r, i, n) {
this.textSpans = [
],
this.textPaths = [
],
this.currentBBox = {
x: 999999,
y: - 999999,
h: 0,
w: 0
},
this.renderType = 'svg',
this.isMasked = !1,
this._parent.constructor.call(this, t, e, r, i, n)
}
function HImageElement(t, e, r, i, n) {
this.assetData = r.getAssetData(t.refId),
this._parent.constructor.call(this, t, e, r, i, n)
}
function HCameraElement(t, e, r, i, n) {
this._parent.constructor.call(this, t, e, r, i, n);
var s = PropertyFactory.getProp;
if (this.pe = s(this, t.pe, 0, 0, this.dynamicProperties), t.ks.p.s ? (this.px = s(this, t.ks.p.x, 1, 0, this.dynamicProperties), this.py = s(this, t.ks.p.y, 1, 0, this.dynamicProperties), this.pz = s(this, t.ks.p.z, 1, 0, this.dynamicProperties))  : this.p = s(this, t.ks.p, 1, 0, this.dynamicProperties), t.ks.a && (this.a = s(this, t.ks.a, 1, 0, this.dynamicProperties)), t.ks.or.k.length && t.ks.or.k[0].to) {
var o,
a = t.ks.or.k.length;
for (o = 0; o < a; o += 1) t.ks.or.k[o].to = null,
t.ks.or.k[o].ti = null
}
this.or = s(this, t.ks.or, 1, degToRads, this.dynamicProperties),
this.or.sh = !0,
this.rx = s(this, t.ks.rx, 0, degToRads, this.dynamicProperties),
this.ry = s(this, t.ks.ry, 0, degToRads, this.dynamicProperties),
this.rz = s(this, t.ks.rz, 0, degToRads, this.dynamicProperties),
this.mat = new Matrix
}
extendPrototype(IShapeElement, HShapeElement),
HShapeElement.prototype._parent = parent,
HShapeElement.prototype._renderShapeFrame = HShapeElement.prototype.renderFrame,
HShapeElement.prototype.createElements = function () {
var t = document.createElement('div');
styleDiv(t);
var e = document.createElementNS(svgNS, 'svg');
styleDiv(e);
var r = this.comp.data ? this.comp.data : this.globalData.compSize;
if (e.setAttribute('width', r.w), e.setAttribute('height', r.h), this.data.hasMask) {
var i = document.createElementNS(svgNS, 'g');
t.appendChild(e),
e.appendChild(i),
this.maskedElement = i,
this.layerElement = i,
this.shapesContainer = i
} else t.appendChild(e),
this.layerElement = e,
this.shapesContainer = document.createElementNS(svgNS, 'g'),
this.layerElement.appendChild(this.shapesContainer);
this.data.hd || (this.baseElement = t),
this.innerElem = t,
this.data.ln && this.innerElem.setAttribute('id', this.data.ln),
this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, this.dynamicProperties, 0, [
], !0),
this.buildExpressionInterface(),
this.layerElement = t,
this.transformedElement = t,
this.shapeCont = e,
0 !== this.data.bm && this.setBlendMode(),
this.checkParenting()
},
HShapeElement.prototype.renderFrame = function (t) {
var e = this.firstFrame;
if (this._renderShapeFrame(), this.isVisible && (this.elemMdf || e)) {
var r = this.shapeCont.getBBox(),
i = !1;
this.currentBBox.w !== r.width && (this.currentBBox.w = r.width, this.shapeCont.setAttribute('width', r.width), i = !0),
this.currentBBox.h !== r.height && (this.currentBBox.h = r.height, this.shapeCont.setAttribute('height', r.height), i = !0),
(i || this.currentBBox.x !== r.x || this.currentBBox.y !== r.y) && (this.currentBBox.w = r.width, this.currentBBox.h = r.height, this.currentBBox.x = r.x, this.currentBBox.y = r.y, this.shapeCont.setAttribute('viewBox', this.currentBBox.x + ' ' + this.currentBBox.y + ' ' + this.currentBBox.w + ' ' + this.currentBBox.h), this.shapeCont.style.transform = this.shapeCont.style.webkitTransform = 'translate(' + this.currentBBox.x + 'px,' + this.currentBBox.y + 'px)')
}
},
createElement(HBaseElement, HTextElement),
extendPrototype(ITextElement, HTextElement),
HTextElement.prototype.createElements = function () {
this.isMasked = this.checkMasks();
var t = document.createElement('div');
if (styleDiv(t), this.layerElement = t, this.transformedElement = t, this.isMasked) {
this.renderType = 'svg';
var e = document.createElementNS(svgNS, 'svg');
styleDiv(e),
this.cont = e,
this.compW = this.comp.data.w,
this.compH = this.comp.data.h,
e.setAttribute('width', this.compW),
e.setAttribute('height', this.compH);
var r = document.createElementNS(svgNS, 'g');
e.appendChild(r),
t.appendChild(e),
this.maskedElement = r,
this.innerElem = r
} else this.renderType = 'html',
this.innerElem = t;
this.baseElement = t,
this.checkParenting()
},
HTextElement.prototype.buildNewText = function () {
var t = this.textProperty.currentData;
this.renderedLetters = Array.apply(null, {
length: this.textProperty.currentData.l ? this.textProperty.currentData.l.length : 0
});
var e = this.innerElem.style;
e.color = e.fill = t.fc ? this.buildColor(t.fc)  : 'rgba(0,0,0,0)',
t.sc && (e.stroke = this.buildColor(t.sc), e.strokeWidth = t.sw + 'px');
var r,
i,
n = this.globalData.fontManager.getFontByName(t.f);
if (!this.globalData.fontManager.chars) if (e.fontSize = t.s + 'px', e.lineHeight = t.s + 'px', n.fClass) this.innerElem.className = n.fClass;
 else {
e.fontFamily = n.fFamily;
var s = t.fWeight,
o = t.fStyle;
e.fontStyle = o,
e.fontWeight = s
}
var a,
l,
c,
h = t.l;
i = h.length;
var d,
u = this.mHelper,
p = '',
_ = 0;
for (r = 0; r < i; r += 1) {
if (this.globalData.fontManager.chars ? (this.textPaths[_] ? a = this.textPaths[_] : ((a = document.createElementNS(svgNS, 'path')).setAttribute('stroke-linecap', 'butt'), a.setAttribute('stroke-linejoin', 'round'), a.setAttribute('stroke-miterlimit', '4')), this.isMasked || (this.textSpans[_] ? c = (l = this.textSpans[_]).children[0] : (l = document.createElement('div'), (c = document.createElementNS(svgNS, 'svg')).appendChild(a), styleDiv(l))))  : this.isMasked ? a = this.textPaths[_] ? this.textPaths[_] : document.createElementNS(svgNS, 'text')  : this.textSpans[_] ? (l = this.textSpans[_], a = this.textPaths[_])  : (styleDiv(l = document.createElement('span')), styleDiv(a = document.createElement('span')), l.appendChild(a)), this.globalData.fontManager.chars) {
var f,
m = this.globalData.fontManager.getCharData(t.t.charAt(r), n.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily);
if (f = m ? m.data : null, u.reset(), f && f.shapes && (d = f.shapes[0].it, u.scale(t.s / 100, t.s / 100), p = this.createPathShape(u, d), a.setAttribute('d', p)), this.isMasked) this.innerElem.appendChild(a);
 else if (this.innerElem.appendChild(l), f && f.shapes) {
document.body.appendChild(c);
var g = c.getBBox();
c.setAttribute('width', g.width + 2),
c.setAttribute('height', g.height + 2),
c.setAttribute('viewBox', g.x - 1 + ' ' + (g.y - 1) + ' ' + (g.width + 2) + ' ' + (g.height + 2)),
c.style.transform = c.style.webkitTransform = 'translate(' + (g.x - 1) + 'px,' + (g.y - 1) + 'px)',
h[r].yOffset = g.y - 1,
l.appendChild(c)
} else c.setAttribute('width', 1),
c.setAttribute('height', 1)
} else a.textContent = h[r].val,
a.setAttributeNS('http://www.w3.org/XML/1998/namespace', 'xml:space', 'preserve'),
this.isMasked ? this.innerElem.appendChild(a)  : (this.innerElem.appendChild(l), a.style.transform = a.style.webkitTransform = 'translate3d(0,' + - t.s / 1.2 + 'px,0)');
this.isMasked ? this.textSpans[_] = a : this.textSpans[_] = l,
this.textSpans[_].style.display = 'block',
this.textPaths[_] = a,
_ += 1
}
for (; _ < this.textSpans.length; ) this.textSpans[_].style.display = 'none',
_ += 1
},
HTextElement.prototype.hide = SVGTextElement.prototype.hide,
HTextElement.prototype.renderFrame = function (t) {
if (!1 !== this._parent.renderFrame.call(this, t)) {
if (this.hidden && (this.hidden = !1, this.innerElem.style.display = 'block', this.layerElement.style.display = 'block'), this.data.singleShape) {
if (!this.firstFrame && !this.lettersChangedFlag) return;
this.isMasked && this.finalTransform.matMdf && (this.cont.setAttribute('viewBox', - this.finalTransform.mProp.p.v[0] + ' ' + - this.finalTransform.mProp.p.v[1] + ' ' + this.compW + ' ' + this.compH), this.cont.style.transform = this.cont.style.webkitTransform = 'translate(' + - this.finalTransform.mProp.p.v[0] + 'px,' + - this.finalTransform.mProp.p.v[1] + 'px)')
}
if (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag) {
var e,
r,
i,
n,
s,
o = 0,
a = this.textAnimator.renderedLetters,
l = this.textProperty.currentData.l;
for (r = l.length, e = 0; e < r; e += 1) l[e].n ? o += 1 : (n = this.textSpans[e], s = this.textPaths[e], i = a[o], o += 1, this.isMasked ? n.setAttribute('transform', i.m)  : n.style.transform = n.style.webkitTransform = i.m, n.style.opacity = i.o, i.sw && s.setAttribute('stroke-width', i.sw), i.sc && s.setAttribute('stroke', i.sc), i.fc && (s.setAttribute('fill', i.fc), s.style.color = i.fc));
if (this.isVisible && (this.elemMdf || this.firstFrame) && this.innerElem.getBBox) {
var c = this.innerElem.getBBox();
this.currentBBox.w !== c.width && (this.currentBBox.w = c.width, this.cont.setAttribute('width', c.width)),
this.currentBBox.h !== c.height && (this.currentBBox.h = c.height, this.cont.setAttribute('height', c.height)),
this.currentBBox.w === c.width + 2 && this.currentBBox.h === c.height + 2 && this.currentBBox.x === c.x - 1 && this.currentBBox.y === c.y - 1 || (this.currentBBox.w = c.width + 2, this.currentBBox.h = c.height + 2, this.currentBBox.x = c.x - 1, this.currentBBox.y = c.y - 1, this.cont.setAttribute('viewBox', this.currentBBox.x + ' ' + this.currentBBox.y + ' ' + this.currentBBox.w + ' ' + this.currentBBox.h), this.cont.style.transform = this.cont.style.webkitTransform = 'translate(' + this.currentBBox.x + 'px,' + this.currentBBox.y + 'px)')
}
this.firstFrame && (this.firstFrame = !1)
}
} else this.hide()
},
createElement(HBaseElement, HImageElement),
HImageElement.prototype.createElements = function () {
var t = this.globalData.getAssetsPath(this.assetData),
e = new Image;
if (this.data.hasMask) {
var r = document.createElement('div');
styleDiv(r);
var i = document.createElementNS(svgNS, 'svg');
styleDiv(i),
i.setAttribute('width', this.assetData.w),
i.setAttribute('height', this.assetData.h),
r.appendChild(i),
this.imageElem = document.createElementNS(svgNS, 'image'),
this.imageElem.setAttribute('width', this.assetData.w + 'px'),
this.imageElem.setAttribute('height', this.assetData.h + 'px'),
this.imageElem.setAttributeNS('http://www.w3.org/1999/xlink', 'href', t),
i.appendChild(this.imageElem),
this.layerElement = r,
this.transformedElement = r,
this.baseElement = r,
this.innerElem = r,
this.maskedElement = this.imageElem
} else styleDiv(e),
this.layerElement = e,
this.baseElement = e,
this.innerElem = e,
this.transformedElement = e;
e.src = t,
this.data.ln && this.innerElem.setAttribute('id', this.data.ln),
this.checkParenting()
},
HImageElement.prototype.show = HSolidElement.prototype.show,
HImageElement.prototype.hide = HSolidElement.prototype.hide,
HImageElement.prototype.renderFrame = HSolidElement.prototype.renderFrame,
HImageElement.prototype.destroy = HSolidElement.prototype.destroy,
createElement(HBaseElement, HCameraElement),
HCameraElement.prototype.setup = function () {
var t,
e,
r = this.comp.threeDElements.length;
for (t = 0; t < r; t += 1) (e = this.comp.threeDElements[t]).perspectiveElem.style.perspective = e.perspectiveElem.style.webkitPerspective = this.pe.v + 'px',
e.container.style.transformOrigin = e.container.style.mozTransformOrigin = e.container.style.webkitTransformOrigin = '0px 0px 0px',
e.perspectiveElem.style.transform = e.perspectiveElem.style.webkitTransform = 'matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)'
},
HCameraElement.prototype.createElements = function () {
},
HCameraElement.prototype.hide = function () {
},
HCameraElement.prototype.renderFrame = function () {
var t,
e,
r = this.firstFrame;
if (this.hierarchy) for (e = this.hierarchy.length, t = 0; t < e; t += 1) r = !!this.hierarchy[t].finalTransform.mProp.mdf || r;
if (r || this.p && this.p.mdf || this.px && (this.px.mdf || this.py.mdf || this.pz.mdf) || this.rx.mdf || this.ry.mdf || this.rz.mdf || this.or.mdf || this.a && this.a.mdf) {
if (this.mat.reset(), this.p ? this.mat.translate( - this.p.v[0], - this.p.v[1], this.p.v[2])  : this.mat.translate( - this.px.v, - this.py.v, this.pz.v), this.a) {
var i = [
this.p.v[0] - this.a.v[0],
this.p.v[1] - this.a.v[1],
this.p.v[2] - this.a.v[2]
],
n = Math.sqrt(Math.pow(i[0], 2) + Math.pow(i[1], 2) + Math.pow(i[2], 2)),
s = [
i[0] / n,
i[1] / n,
i[2] / n
],
o = Math.sqrt(s[2] * s[2] + s[0] * s[0]),
a = Math.atan2(s[1], o),
l = Math.atan2(s[0], - s[2]);
this.mat.rotateY(l).rotateX( - a)
}
var c,
h;
if (this.mat.rotateX( - this.rx.v).rotateY( - this.ry.v).rotateZ(this.rz.v), this.mat.rotateX( - this.or.v[0]).rotateY( - this.or.v[1]).rotateZ(this.or.v[2]), this.mat.translate(this.globalData.compSize.w / 2, this.globalData.compSize.h / 2, 0), this.mat.translate(0, 0, this.pe.v), this.hierarchy) for (e = this.hierarchy.length, t = 0; t < e; t += 1) c = this.hierarchy[t].finalTransform.mProp.iv.props,
this.mat.transform(c[0], c[1], c[2], c[3], c[4], c[5], c[6], c[7], c[8], c[9], c[10], c[11], - c[12], - c[13], c[14], c[15]);
for (e = this.comp.threeDElements.length, t = 0; t < e; t += 1) (h = this.comp.threeDElements[t]).container.style.transform = h.container.style.webkitTransform = this.mat.toCSS()
}
this.firstFrame = !1
},
HCameraElement.prototype.destroy = function () {
};
var Expressions = function () {
var t = {
initExpressions: function (t) {
t.renderer.compInterface = CompExpressionInterface(t.renderer),
t.renderer.globalData.projectInterface.registerComposition(t.renderer)
}
};
return t
}();
expressionsPlugin = Expressions,
function () {
function t() {
return this.pv
}
function e(t, e, r) {
if (!this.k || !this.keyframes) return this.pv;
var i,
n,
s = this.comp.renderedFrame,
o = this.keyframes,
a = o[o.length - 1].t;
if (s <= a) return this.pv;
r ? n = a - (i = e ? Math.abs(a - elem.comp.globalData.frameRate * e)  : Math.max(0, a - this.elem.data.ip))  : ((!e || e > o.length - 1) && (e = o.length - 1), i = a - (n = o[o.length - 1 - e].t));
var l,
c,
h,
d = this.offsetTime || 0;
if ('pingpong' === t.toLowerCase()) {
if (Math.floor((s - n) / i) % 2 != 0) return this.getValueAtTime((i - (s - n) % i + n - d) / this.comp.globalData.frameRate, 0)
} else {
if ('offset' === t) {
var u = this.getValueAtTime(n / this.comp.globalData.frameRate, 0),
p = this.getValueAtTime(a / this.comp.globalData.frameRate, 0),
_ = this.getValueAtTime(((s - n) % i + n) / this.comp.globalData.frameRate, 0),
f = Math.floor((s - n) / i);
if (this.pv.length) {
for (c = (h = new Array(u.length)).length, l = 0; l < c; l += 1) h[l] = (p[l] - u[l]) * f + _[l];
return h
}
return (p - u) * f + _
}
if ('continue' === t) {
var m = this.getValueAtTime(a / this.comp.globalData.frameRate, 0),
g = this.getValueAtTime((a - 0.001) / this.comp.globalData.frameRate, 0);
if (this.pv.length) {
for (c = (h = new Array(m.length)).length, l = 0; l < c; l += 1) h[l] = m[l] + (m[l] - g[l]) * ((s - a) / this.comp.globalData.frameRate) / 0.0005;
return h
}
return m + (s - a) / 0.001 * (m - g)
}
}
return this.getValueAtTime(((s - n) % i + n - d) / this.comp.globalData.frameRate, 0)
}
function r(t, e, r) {
if (!this.k) return this.pv;
var i,
n,
s,
o,
a,
l = time * elem.comp.globalData.frameRate,
c = this.keyframes,
h = c[0].t,
d = this.offsetTime || 0;
if (l >= h) return this.pv;
if (r ? n = h + (i = e ? Math.abs(elem.comp.globalData.frameRate * e)  : Math.max(0, this.elem.data.op - h))  : ((!e || e > c.length - 1) && (e = c.length - 1), i = (n = c[e].t) - h), 'pingpong' === t) {
if (Math.floor((h - l) / i) % 2 == 0) return this.getValueAtTime(((h - l) % i + h - d) / this.comp.globalData.frameRate, 0)
} else {
if ('offset' === t) {
var u = this.getValueAtTime(h / this.comp.globalData.frameRate, 0),
p = this.getValueAtTime(n / this.comp.globalData.frameRate, 0),
_ = this.getValueAtTime((i - (h - l) % i + h) / this.comp.globalData.frameRate, 0),
f = Math.floor((h - l) / i) + 1;
if (this.pv.length) {
for (o = (a = new Array(u.length)).length, s = 0; s < o; s += 1) a[s] = _[s] - (p[s] - u[s]) * f;
return a
}
return _ - (p - u) * f
}
if ('continue' === t) {
var m = this.getValueAtTime(h / this.comp.globalData.frameRate, 0),
g = this.getValueAtTime((h + 0.001) / this.comp.globalData.frameRate, 0);
if (this.pv.length) {
for (o = (a = new Array(m.length)).length, s = 0; s < o; s += 1) a[s] = m[s] + (m[s] - g[s]) * (h - l) / 0.001;
return a
}
return m + (m - g) * (h - l) / 0.001
}
}
return this.getValueAtTime((i - (h - l) % i + h - d) / this.comp.globalData.frameRate, 0)
}
function i(t) {
if (this._cachingAtTime || (this._cachingAtTime = {
lastValue: - 99999,
lastIndex: 0
}), t !== this._cachingAtTime.lastFrame) {
t *= this.elem.globalData.frameRate,
t -= this.offsetTime;
var e = this._caching.lastFrame < t ? this._caching.lastIndex : 0,
r = this.interpolateValue(t, e, this.pv, this._cachingAtTime);
this._cachingAtTime.lastIndex = r.iterationIndex,
this._cachingAtTime.value = r.value,
this._cachingAtTime.lastFrame = t
}
return this._cachingAtTime.value
}
function n(t) {
if (void 0 !== this.vel) return this.vel;
var e,
r,
i = this.getValueAtTime(t),
n = this.getValueAtTime(t + - 0.01);
if (i.length) for (e = Array.apply(null, {
length: i.length
}), r = 0; r < i.length; r += 1) e[r] = (n[r] - i[r]) / - 0.01;
 else e = (n - i) / - 0.01;
return e
}
function s(t) {
this.propertyGroup = t
}
function o(t, e, r) {
e.x && (r.k = !0, r.x = !0, r.getValue && (r.getPreValue = r.getValue), r.getValue = ExpressionManager.initiateExpression.bind(r) (t, e, r))
}
var a = function () {
function e(t, e) {
return this.textIndex = t + 1,
this.textTotal = e,
this.getValue(),
this.v
}
return function (r, a) {
this.pv = 1,
this.comp = r.comp,
this.elem = r,
this.mult = 0.01,
this.type = 'textSelector',
this.textTotal = a.totalChars,
this.selectorValue = 100,
this.lastValue = [
1,
1,
1
],
o.bind(this) (r, a, this),
this.getMult = e,
this.getVelocityAtTime = n,
this.kf ? this.getValueAtTime = i.bind(this)  : this.getValueAtTime = t.bind(this),
this.setGroupProperty = s
}
}(),
l = PropertyFactory.getProp;
PropertyFactory.getProp = function (a, c, h, d, u) {
var p = l(a, c, h, d, u);
2 === h ? p.dynamicProperties.length ? p.getValueAtTime = function (t) {
console.log('time:', t)
}.bind(p)  : p.getValueAtTime = function (t) {
}.bind(p)  : p.kf ? p.getValueAtTime = i.bind(p)  : p.getValueAtTime = t.bind(p),
p.setGroupProperty = s,
p.loopOut = e,
p.loopIn = r,
p.getVelocityAtTime = n,
p.numKeys = 1 === c.a ? c.k.length : 0;
var _ = p.k;
return void 0 !== c.ix && Object.defineProperty(p, 'propertyIndex', {
get: function () {
return c.ix
}
}),
o(a, c, p),
!_ && p.x && u.push(p),
p
};
var c = ShapePropertyFactory.getConstructorFunction(),
h = ShapePropertyFactory.getKeyframedConstructorFunction();
c.prototype.vertices = function (t, e) {
var r = this.v;
void 0 !== e && (r = this.getValueAtTime(e, 0));
var i,
n = r._length,
s = r[t],
o = r.v,
a = Array.apply(null, {
length: n
});
for (i = 0; i < n; i += 1) a[i] = 'i' === t || 'o' === t ? [
s[i][0] - o[i][0],
s[i][1] - o[i][1]
] : [
s[i][0],
s[i][1]
];
return a
},
c.prototype.points = function (t) {
return this.vertices('v', t)
},
c.prototype.inTangents = function (t) {
return this.vertices('i', t)
},
c.prototype.outTangents = function (t) {
return this.vertices('o', t)
},
c.prototype.isClosed = function () {
return this.v.c
},
c.prototype.pointOnPath = function (t, e) {
var r = this.v;
void 0 !== e && (r = this.getValueAtTime(e, 0)),
this._segmentsLength || (this._segmentsLength = bez.getSegmentsLength(r));
for (var i = this._segmentsLength, n = i.lengths, s = i.totalLength * t, o = 0, a = n.length, l = 0; o < a; ) {
if (l + n[o].addedLength > s) {
n[o].segments;
var c = o,
h = r.c && o === a - 1 ? 0 : o + 1,
d = (s - l) / n[o].addedLength,
u = bez.getPointInSegment(r.v[c], r.v[h], r.o[c], r.i[h], d, n[o]);
break
}
l += n[o].addedLength,
o += 1
}
return u || (u = r.c ? [
r.v[0][0],
r.v[0][1]
] : [
r.v[r._length - 1][0],
r.v[r._length - 1][1]
]),
u
},
c.prototype.vectorOnPath = function (t, e, r) {
t = 1 == t ? this.v.c ? 0 : 0.999 : t;
var i = this.pointOnPath(t, e),
n = this.pointOnPath(t + 0.001, e),
s = n[0] - i[0],
o = n[1] - i[1],
a = Math.sqrt(Math.pow(s, 2) + Math.pow(o, 2));
return 'tangent' === r ? [
s / a,
o / a
] : [
- o / a,
s / a
]
},
c.prototype.tangentOnPath = function (t, e) {
return this.vectorOnPath(t, e, 'tangent')
},
c.prototype.normalOnPath = function (t, e) {
return this.vectorOnPath(t, e, 'normal')
},
c.prototype.setGroupProperty = s,
c.prototype.getValueAtTime = t,
h.prototype.vertices = c.prototype.vertices,
h.prototype.points = c.prototype.points,
h.prototype.inTangents = c.prototype.inTangents,
h.prototype.outTangents = c.prototype.outTangents,
h.prototype.isClosed = c.prototype.isClosed,
h.prototype.pointOnPath = c.prototype.pointOnPath,
h.prototype.vectorOnPath = c.prototype.vectorOnPath,
h.prototype.tangentOnPath = c.prototype.tangentOnPath,
h.prototype.normalOnPath = c.prototype.normalOnPath,
h.prototype.setGroupProperty = c.prototype.setGroupProperty,
h.prototype.getValueAtTime = function (t) {
if (this._shapeValueAtTime || (this._lastIndexAtTime = 0, this._lastTimeAtTime = - 999999, this._shapeValueAtTime = shape_pool.clone(this.pv)), t !== this._lastTimeAtTime) {
this._lastTimeAtTime = t,
t *= this.elem.globalData.frameRate;
var e = this.interpolateShape(t, this._lastIndexAtTime, this._shapeValueAtTime, !1);
this._lastIndexAtTime = e.iterationIndex
}
return this._shapeValueAtTime
};
var d = ShapePropertyFactory.getShapeProp;
ShapePropertyFactory.getShapeProp = function (t, e, r, i, n) {
var s = d(t, e, r, i, n),
a = s.k;
return void 0 !== e.ix && Object.defineProperty(s, 'propertyIndex', {
get: function () {
return e.ix
}
}),
3 === r ? o(t, e.pt, s)  : 4 === r && o(t, e.ks, s),
!a && s.x && i.push(s),
s
};
var u = PropertyFactory.getTextSelectorProp;
PropertyFactory.getTextSelectorProp = function (t, e, r) {
return 1 === e.t ? new a(t, e, r)  : u(t, e, r)
}
}(),
TextProperty.prototype.searchProperty = function () {
return this.kf = this.searchExpressions() || this.data.d.k.length > 1,
this.kf
},
TextProperty.prototype.getExpressionValue = function (t) {
this.calculateExpression(),
this.mdf && (this.currentData.t = this.v.toString(), this.completeTextData(this.currentData))
},
TextProperty.prototype.searchExpressions = function () {
return !!this.data.d.x && (this.comp = this.elem.comp, this.getValue && (this.getPreValue = this.getValue), this.calculateExpression = ExpressionManager.initiateExpression.bind(this) (this.elem, this.data.d, this), this.getValue = this.getExpressionValue, !0)
};
var ExpressionManager = function () {
var ob = {
},
Math = BMMath,
window = null,
document = null;
function duplicatePropertyValue(t, e) {
if (e = e || 1, 'number' == typeof t || t instanceof Number) return t * e;
if (t.i) return JSON.parse(JSON.stringify(t));
var r,
i = Array.apply(null, {
length: t.length
}),
n = t.length;
for (r = 0; r < n; r += 1) i[r] = t[r] * e;
return i
}
function shapesEqual(t, e) {
if (t._length !== e._length || t.c !== e.c) return !1;
var r,
i = t._length;
for (r = 0; r < i; r += 1) if (t.v[r][0] !== e.v[r][0] || t.v[r][1] !== e.v[r][1] || t.o[r][0] !== e.o[r][0] || t.o[r][1] !== e.o[r][1] || t.i[r][0] !== e.i[r][0] || t.i[r][1] !== e.i[r][1]) return !1;
return !0
}
function $bm_neg(t) {
var e = typeof t;
if ('number' === e || 'boolean' === e || t instanceof Number) return - t;
if (t.constructor === Array) {
var r,
i = t.length,
n = [
];
for (r = 0; r < i; r += 1) n[r] = - t[r];
return n
}
}
function sum(t, e) {
var r = typeof t,
i = typeof e;
if ('string' === r || 'string' === i) return t + e;
if (('number' === r || 'boolean' === r || 'string' === r || t instanceof Number) && ('number' === i || 'boolean' === i || 'string' === i || e instanceof Number)) return t + e;
if (t.constructor === Array && ('number' === i || 'boolean' === i || 'string' === i || e instanceof Number)) return t[0] = t[0] + e,
t;
if (('number' === r || 'boolean' === r || 'string' === r || t instanceof Number) && e.constructor === Array) return e[0] = t + e[0],
e;
if (t.constructor === Array && e.constructor === Array) {
for (var n = 0, s = t.length, o = e.length, a = [
]; n < s || n < o; ) ('number' == typeof t[n] || t[n] instanceof Number) && ('number' == typeof e[n] || e[n] instanceof Number) ? a[n] = t[n] + e[n] : a[n] = null == e[n] ? t[n] : t[n] || e[n],
n += 1;
return a
}
return 0
}
var add = sum;
function sub(t, e) {
var r = typeof t,
i = typeof e;
if (('number' === r || 'boolean' === r || 'string' === r || t instanceof Number) && ('number' === i || 'boolean' === i || 'string' === i || e instanceof Number)) return 'string' === r && (t = parseInt(t)),
'string' === i && (e = parseInt(e)),
t - e;
if (t.constructor === Array && ('number' === i || 'boolean' === i || 'string' === i || e instanceof Number)) return t[0] = t[0] - e,
t;
if (('number' === r || 'boolean' === r || 'string' === r || t instanceof Number) && e.constructor === Array) return e[0] = t - e[0],
e;
if (t.constructor === Array && e.constructor === Array) {
for (var n = 0, s = t.length, o = e.length, a = [
]; n < s || n < o; ) ('number' == typeof t[n] || t[n] instanceof Number) && ('number' == typeof e[n] || (e[n], Number), 1) ? a[n] = t[n] - e[n] : a[n] = null == e[n] ? t[n] : t[n] || e[n],
n += 1;
return a
}
return 0
}
function mul(t, e) {
var r,
i,
n,
s = typeof t,
o = typeof e;
if (('number' === s || 'boolean' === s || 'string' === s || t instanceof Number) && ('number' === o || 'boolean' === o || 'string' === o || e instanceof Number)) return t * e;
if (t.constructor === Array && ('number' === o || 'boolean' === o || 'string' === o || e instanceof Number)) {
for (n = t.length, r = Array.apply(null, {
length: n
}), i = 0; i < n; i += 1) r[i] = t[i] * e;
return r
}
if (('number' === s || 'boolean' === s || 'string' === s || t instanceof Number) && e.constructor === Array) {
for (n = e.length, r = Array.apply(null, {
length: n
}), i = 0; i < n; i += 1) r[i] = t * e[i];
return r
}
return 0
}
function div(t, e) {
var r,
i,
n,
s = typeof t,
o = typeof e;
if (('number' === s || 'boolean' === s || 'string' === s || t instanceof Number) && ('number' === o || 'boolean' === o || 'string' === o || e instanceof Number)) return t / e;
if (t.constructor === Array && ('number' === o || 'boolean' === o || 'string' === o || e instanceof Number)) {
for (n = t.length, r = Array.apply(null, {
length: n
}), i = 0; i < n; i += 1) r[i] = t[i] / e;
return r
}
if (('number' === s || 'boolean' === s || 'string' === s || t instanceof Number) && e.constructor === Array) {
for (n = e.length, r = Array.apply(null, {
length: n
}), i = 0; i < n; i += 1) r[i] = t / e[i];
return r
}
return 0
}
function mod(t, e) {
return 'string' == typeof t && (t = parseInt(t)),
'string' == typeof e && (e = parseInt(e)),
t % e
}
function clamp(t, e, r) {
if (e > r) {
var i = r;
r = e,
e = i
}
return Math.min(Math.max(t, e), r)
}
function radiansToDegrees(t) {
return t / degToRads
}
var radians_to_degrees = radiansToDegrees;
function degreesToRadians(t) {
return t * degToRads
}
var degrees_to_radians = radiansToDegrees,
helperLengthArray = [
0,
0,
0,
0,
0,
0
];
function length(t, e) {
if ('number' == typeof t || t instanceof Number) return e = e || 0,
Math.abs(t - e);
e || (e = helperLengthArray);
var r,
i = Math.min(t.length, e.length),
n = 0;
for (r = 0; r < i; r += 1) n += Math.pow(e[r] - t[r], 2);
return Math.sqrt(n)
}
function normalize(t) {
return div(t, length(t))
}
function rgbToHsl(t) {
var e,
r,
i = t[0],
n = t[1],
s = t[2],
o = Math.max(i, n, s),
a = Math.min(i, n, s),
l = (o + a) / 2;
if (o == a) e = r = 0;
 else {
var c = o - a;
switch (r = l > 0.5 ? c / (2 - o - a)  : c / (o + a), o) {
case i:
e = (n - s) / c + (n < s ? 6 : 0);
break;
case n:
e = (s - i) / c + 2;
break;
case s:
e = (i - n) / c + 4
}
e /= 6
}
return [e,
r,
l,
t[3]]
}
function hslToRgb(t) {
var e,
r,
i,
n = t[0],
s = t[1],
o = t[2];
if (0 == s) e = r = i = o;
 else {
function a(t, e, r) {
return r < 0 && (r += 1),
r > 1 && (r -= 1),
r < 1 / 6 ? t + 6 * (e - t) * r : r < 0.5 ? e : r < 2 / 3 ? t + (e - t) * (2 / 3 - r) * 6 : t
}
var l = o < 0.5 ? o * (1 + s)  : o + s - o * s,
c = 2 * o - l;
e = a(c, l, n + 1 / 3),
r = a(c, l, n),
i = a(c, l, n - 1 / 3)
}
return [e,
r,
i,
t[3]]
}
function linear(t, e, r, i, n) {
if (void 0 === i || void 0 === n) return linear(t, 0, 1, e, r);
if (t <= e) return i;
if (t >= r) return n;
var s = r === e ? 0 : (t - e) / (r - e);
if (!i.length) return i + (n - i) * s;
var o,
a = i.length,
l = Array.apply(null, {
length: a
});
for (o = 0; o < a; o += 1) l[o] = i[o] + (n[o] - i[o]) * s;
return l
}
function random(t, e) {
if (void 0 === e && (void 0 === t ? (t = 0, e = 1)  : (e = t, t = void 0)), e.length) {
var r,
i = e.length;
t || (t = Array.apply(null, {
length: i
}));
var n = Array.apply(null, {
length: i
}),
s = BMMath.random();
for (r = 0; r < i; r += 1) n[r] = t[r] + s * (e[r] - t[r]);
return n
}
return void 0 === t && (t = 0),
t + BMMath.random() * (e - t)
}
function createPath(t, e, r, n) {
e = e && e.length ? e : t,
r = r && r.length ? r : t;
var s = shape_pool.newShape(),
o = t.length;
for (s.setPathData(n, o), i = 0; i < o; i += 1) s.setTripleAt(t[i][0], t[i][1], r[i][0] + t[i][0], r[i][1] + t[i][1], e[i][0] + t[i][0], e[i][1] + t[i][1], i, !0);
return s
}
function initiateExpression(elem, data, property) {
var val = data.x,
needsVelocity = /velocity(?![\w\d])/.test(val),
_needsRandom = - 1 !== val.indexOf('random'),
elemType = elem.data.ty,
transform,
content,
effect,
thisComp = elem.comp,
thisProperty = property;
elem.comp.frameDuration = 1 / elem.comp.globalData.frameRate;
var inPoint = elem.data.ip / elem.comp.globalData.frameRate,
outPoint = elem.data.op / elem.comp.globalData.frameRate,
width = elem.data.sw ? elem.data.sw : 0,
height = elem.data.sh ? elem.data.sh : 0,
loopIn,
loop_in,
loopOut,
loop_out,
toWorld,
fromWorld,
fromComp,
fromCompToSurface,
anchorPoint,
thisLayer,
thisComp,
mask,
valueAtTime,
velocityAtTime,
fn = new Function,
fn = eval('[function(){' + val + ';if($bm_rt.__shapeObject){this.v=shape_pool.clone($bm_rt.v);}else{this.v=$bm_rt;}}]') [0],
bindedFn = fn.bind(this),
numKeys = property.kf ? data.k.length : 0,
wiggle = function (t, e) {
var r,
i,
n = this.pv.length ? this.pv.length : 1,
s = Array.apply(null, {
len: n
});
for (i = 0; i < n; i += 1) s[i] = 0;
var o = Math.floor(5 * time);
for (r = 0, i = 0; r < o; ) {
for (i = 0; i < n; i += 1) s[i] += - e + 2 * e * BMMath.random();
r += 1
}
var a = 5 * time,
l = a - Math.floor(a),
c = Array.apply({
length: n
});
if (n > 1) {
for (i = 0; i < n; i += 1) c[i] = this.pv[i] + s[i] + ( - e + 2 * e * BMMath.random()) * l;
return c
}
return this.pv + s[0] + ( - e + 2 * e * BMMath.random()) * l
}.bind(this);
thisProperty.loopIn && (loopIn = thisProperty.loopIn.bind(thisProperty), loop_in = loopIn),
thisProperty.loopOut && (loopOut = thisProperty.loopOut.bind(thisProperty), loop_out = loopOut);
var loopInDuration = function (t, e) {
return loopIn(t, e, !0)
}.bind(this),
loopOutDuration = function (t, e) {
return loopOut(t, e, !0)
}.bind(this);
this.getValueAtTime && (valueAtTime = this.getValueAtTime.bind(this)),
this.getVelocityAtTime && (velocityAtTime = this.getVelocityAtTime.bind(this));
var comp = elem.comp.globalData.projectInterface.bind(elem.comp.globalData.projectInterface),
time,
velocity,
value,
textIndex,
textTotal,
selectorValue;
function lookAt(t, e) {
var r = [
e[0] - t[0],
e[1] - t[1],
e[2] - t[2]
],
i = Math.atan2(r[0], Math.sqrt(r[1] * r[1] + r[2] * r[2])) / degToRads;
return [ - Math.atan2(r[1], r[2]) / degToRads,
i,
0]
}
function easeOut(t, e, r) {
return - (r - e) * t * (t - 2) + e
}
function nearestKey(t) {
var e,
r,
i,
n = data.k.length;
if (data.k.length && 'number' != typeof data.k[0]) if (r = - 1, (t *= elem.comp.globalData.frameRate) < data.k[0].t) r = 1,
i = data.k[0].t;
 else {
for (e = 0; e < n - 1; e += 1) {
if (t === data.k[e].t) {
r = e + 1,
i = data.k[e].t;
break
}
if (t > data.k[e].t && t < data.k[e + 1].t) {
t - data.k[e].t > data.k[e + 1].t - t ? (r = e + 2, i = data.k[e + 1].t)  : (r = e + 1, i = data.k[e].t);
break
}
}
- 1 === r && (r = e + 1, i = data.k[e].t)
} else r = 0,
i = 0;
var s = {
};
return s.index = r,
s.time = i / elem.comp.globalData.frameRate,
s
}
function key(t) {
var e,
r,
i,
n;
if (!data.k.length || 'number' == typeof data.k[0]) throw new Error('The property has no keyframe at index ' + t);
for (t -= 1, e = {
time: data.k[t].t / elem.comp.globalData.frameRate
}, i = (n = t !== data.k.length - 1 || data.k[t].h ? data.k[t].s : data.k[t - 1].e).length, r = 0; r < i; r += 1) e[r] = n[r];
return e
}
function framesToTime(t, e) {
return e || (e = elem.comp.globalData.frameRate),
t / e
}
function timeToFrames(t, e) {
return t || 0 === t || (t = time),
e || (e = elem.comp.globalData.frameRate),
t * e
}
function seedRandom(t) {
BMMath.seedrandom(randSeed + t)
}
function sourceRectAtTime() {
return elem.sourceRectAtTime()
}
var index = elem.data.ind,
hasParent = !(!elem.hierarchy || !elem.hierarchy.length),
parent,
randSeed = Math.floor(1000000 * Math.random());
function executeExpression() {
if (_needsRandom && seedRandom(randSeed), this.frameExpressionId !== elem.globalData.frameId || 'textSelector' === this.type) {
if (this.lock) return this.v = duplicatePropertyValue(this.pv, this.mult),
!0;
var t,
e;
if ('textSelector' === this.type && (textIndex = this.textIndex, textTotal = this.textTotal, selectorValue = this.selectorValue), thisLayer || (thisLayer = elem.layerInterface, thisComp = elem.comp.compInterface, toWorld = thisLayer.toWorld.bind(thisLayer), fromWorld = thisLayer.fromWorld.bind(thisLayer), fromComp = thisLayer.fromComp.bind(thisLayer), mask = thisLayer.mask ? thisLayer.mask.bind(thisLayer)  : null, fromCompToSurface = fromComp), transform || (transform = elem.layerInterface('ADBE Transform Group'), anchorPoint = transform.anchorPoint), 4 !== elemType || content || (content = thisLayer('ADBE Root Vectors Group')), effect || (effect = thisLayer(4)), (hasParent = !(!elem.hierarchy || !elem.hierarchy.length)) && !parent && (parent = elem.hierarchy[0].layerInterface), this.lock = !0, this.getPreValue && this.getPreValue(), value = this.pv, time = this.comp.renderedFrame / this.comp.globalData.frameRate, needsVelocity && (velocity = velocityAtTime(time)), bindedFn(), this.frameExpressionId = elem.globalData.frameId, this.mult) if ('number' == typeof this.v || this.v instanceof Number || this.v instanceof String || 'string' == typeof this.v) this.v *= this.mult;
 else if (1 === this.v.length) this.v = this.v[0] * this.mult;
 else for (e = this.v.length, value === this.v && (this.v = 2 === e ? [
value[0],
value[1]
] : [
value[0],
value[1],
value[2]
]), t = 0; t < e; t += 1) this.v[t] *= this.mult;
if (1 === this.v.length && (this.v = this.v[0]), 'number' == typeof this.v || this.v instanceof Number || this.v instanceof String || 'string' == typeof this.v) this.lastValue !== this.v && (this.lastValue = this.v, this.mdf = !0);
 else if (this.v._length) shapesEqual(this.v, this.localShapeCollection.shapes[0]) || (this.mdf = !0, this.localShapeCollection.releaseShapes(), this.localShapeCollection.addShape(shape_pool.clone(this.v)));
 else for (e = this.v.length, t = 0; t < e; t += 1) this.v[t] !== this.lastValue[t] && (this.lastValue[t] = this.v[t], this.mdf = !0);
this.lock = !1
}
}
return executeExpression
}
return ob.initiateExpression = initiateExpression,
ob
}(),
ShapeExpressionInterface = function () {
var t = {
createShapeInterface: function (t, e, i) {
return r(t, e, i)
},
createGroupInterface: function (t, e, r) {
return n(t, e, r)
},
createTrimInterface: function (t, e, r) {
return a(t, e, r)
},
createStrokeInterface: function (t, e, r) {
return o(t, e, r)
},
createTransformInterface: function (t, e, r) {
return l(t, e, r)
},
createEllipseInterface: function (t, e, r) {
return c(t, e, r)
},
createStarInterface: function (t, e, r) {
return h(t, e, r)
},
createRectInterface: function (t, e, r) {
return d(t, e, r)
},
createRoundedInterface: function (t, e, r) {
return u(t, e, r)
},
createRepatearInterface: function (t, e, r) {
return p(t, e, r)
},
createPathInterface: function (t, e, r) {
return _(t, e, r)
},
createFillInterface: function (t, e, r) {
return s(t, e, r)
}
};
function e(t, e, r) {
var i,
n = [
],
s = t ? t.length : 0;
for (i = 0; i < s; i += 1) 'gr' == t[i].ty ? n.push(ShapeExpressionInterface.createGroupInterface(t[i], e[i], r))  : 'fl' == t[i].ty ? n.push(ShapeExpressionInterface.createFillInterface(t[i], e[i], r))  : 'st' == t[i].ty ? n.push(ShapeExpressionInterface.createStrokeInterface(t[i], e[i], r))  : 'tm' == t[i].ty ? n.push(ShapeExpressionInterface.createTrimInterface(t[i], e[i], r))  : 'tr' == t[i].ty || ('el' == t[i].ty ? n.push(ShapeExpressionInterface.createEllipseInterface(t[i], e[i], r))  : 'sr' == t[i].ty ? n.push(ShapeExpressionInterface.createStarInterface(t[i], e[i], r))  : 'sh' == t[i].ty ? n.push(ShapeExpressionInterface.createPathInterface(t[i], e[i], r))  : 'rc' == t[i].ty ? n.push(ShapeExpressionInterface.createRectInterface(t[i], e[i], r))  : 'rd' == t[i].ty ? n.push(ShapeExpressionInterface.createRoundedInterface(t[i], e[i], r))  : 'rp' == t[i].ty && n.push(ShapeExpressionInterface.createRepatearInterface(t[i], e[i], r)));
return n
}
var r = function (t, r, i) {
var n;
function s(t) {
if ('number' == typeof t) return n[t - 1];
for (var e = 0, r = n.length; e < r; ) {
if (n[e]._name === t) return n[e];
e += 1
}
}
return s.propertyGroup = i,
n = e(t, r, s),
s
},
i = function (t, r, i) {
var n,
s = function (t) {
for (var e = 0, r = n.length; e < r; ) {
if (n[e]._name === t || n[e].mn === t || n[e].propertyIndex === t || n[e].ix === t || n[e].ind === t) return n[e];
e += 1
}
if ('number' == typeof t) return n[t - 1]
};
return s.propertyGroup = function (t) {
return 1 === t ? s : i(t - 1)
},
n = e(t.it, r.it, s.propertyGroup),
s.numProperties = n.length,
s.propertyIndex = t.cix,
s
},
n = function (t, e, r) {
var n = function (t) {
switch (t) {
case 'ADBE Vectors Group':
case 'Contents':
case 2:
return n.content;
case 'ADBE Vector Transform Group':
case 3:
default:
return n.transform
}
};
n.propertyGroup = function (t) {
return 1 === t ? n : r(t - 1)
};
var s = i(t, e, n.propertyGroup),
o = ShapeExpressionInterface.createTransformInterface(t.it[t.it.length - 1], e.it[e.it.length - 1], n.propertyGroup);
return n.content = s,
n.transform = o,
Object.defineProperty(n, '_name', {
get: function () {
return t.nm
}
}),
n.numProperties = t.np,
n.propertyIndex = t.ix,
n.nm = t.nm,
n.mn = t.mn,
n
},
s = function (t, e, r) {
function i(t) {
return 'Color' === t || 'color' === t ? i.color : 'Opacity' === t || 'opacity' === t ? i.opacity : void 0
}
return Object.defineProperty(i, 'color', {
get: function () {
return ExpressionValue(e.c, 1 / e.c.mult, 'color')
}
}),
Object.defineProperty(i, 'opacity', {
get: function () {
return ExpressionValue(e.o, 100)
}
}),
Object.defineProperty(i, '_name', {
value: t.nm
}),
Object.defineProperty(i, 'mn', {
value: t.mn
}),
e.c.setGroupProperty(r),
e.o.setGroupProperty(r),
i
},
o = function (e, r, i) {
function n(e) {
return 1 === e ? t : i(e - 1)
}
function s(t) {
return 1 === t ? c : n(t - 1)
}
function o(t) {
Object.defineProperty(c, e.d[t].nm, {
get: function () {
return ExpressionValue(r.d.dataProps[t].p)
}
})
}
var a,
l = e.d ? e.d.length : 0,
c = {
};
for (a = 0; a < l; a += 1) o(a),
r.d.dataProps[a].p.setGroupProperty(s);
function h(t) {
return 'Color' === t || 'color' === t ? h.color : 'Opacity' === t || 'opacity' === t ? h.opacity : 'Stroke Width' === t || 'stroke width' === t ? h.strokeWidth : void 0
}
return Object.defineProperty(h, 'color', {
get: function () {
return ExpressionValue(r.c, 1 / r.c.mult, 'color')
}
}),
Object.defineProperty(h, 'opacity', {
get: function () {
return ExpressionValue(r.o, 100)
}
}),
Object.defineProperty(h, 'strokeWidth', {
get: function () {
return ExpressionValue(r.w)
}
}),
Object.defineProperty(h, 'dash', {
get: function () {
return c
}
}),
Object.defineProperty(h, '_name', {
value: e.nm
}),
Object.defineProperty(h, 'mn', {
value: e.mn
}),
r.c.setGroupProperty(n),
r.o.setGroupProperty(n),
r.w.setGroupProperty(n),
h
},
a = function (t, e, r) {
function i(t) {
return 1 == t ? n : r(--t)
}
function n(e) {
return e === t.e.ix || 'End' === e || 'end' === e ? n.end : e === t.s.ix ? n.start : e === t.o.ix ? n.offset : void 0
}
return n.propertyIndex = t.ix,
e.s.setGroupProperty(i),
e.e.setGroupProperty(i),
e.o.setGroupProperty(i),
n.propertyIndex = t.ix,
Object.defineProperty(n, 'start', {
get: function () {
return ExpressionValue(e.s, 1 / e.s.mult)
}
}),
Object.defineProperty(n, 'end', {
get: function () {
return ExpressionValue(e.e, 1 / e.e.mult)
}
}),
Object.defineProperty(n, 'offset', {
get: function () {
return ExpressionValue(e.o)
}
}),
Object.defineProperty(n, '_name', {
get: function () {
return t.nm
}
}),
n.mn = t.mn,
n
},
l = function (t, e, r) {
function i(t) {
return 1 == t ? n : r(--t)
}
function n(e) {
return t.a.ix === e ? n.anchorPoint : t.o.ix === e ? n.opacity : t.p.ix === e ? n.position : t.r.ix === e ? n.rotation : t.s.ix === e ? n.scale : t.sk && t.sk.ix === e ? n.skew : t.sa && t.sa.ix === e ? n.skewAxis : 'Opacity' === e ? n.opacity : 'Position' === e ? n.position : 'Anchor Point' === e ? n.anchorPoint : 'Scale' === e ? n.scale : 'Rotation' === e || 'ADBE Vector Rotation' === e ? n.rotation : 'Skew' === e ? n.skew : 'Skew Axis' === e ? n.skewAxis : void 0
}
return e.transform.mProps.o.setGroupProperty(i),
e.transform.mProps.p.setGroupProperty(i),
e.transform.mProps.a.setGroupProperty(i),
e.transform.mProps.s.setGroupProperty(i),
e.transform.mProps.r.setGroupProperty(i),
e.transform.mProps.sk && (e.transform.mProps.sk.setGroupProperty(i), e.transform.mProps.sa.setGroupProperty(i)),
e.transform.op.setGroupProperty(i),
Object.defineProperty(n, 'opacity', {
get: function () {
return ExpressionValue(e.transform.mProps.o, 1 / e.transform.mProps.o.mult)
}
}),
Object.defineProperty(n, 'position', {
get: function () {
return ExpressionValue(e.transform.mProps.p)
}
}),
Object.defineProperty(n, 'anchorPoint', {
get: function () {
return ExpressionValue(e.transform.mProps.a)
}
}),
Object.defineProperty(n, 'scale', {
get: function () {
return ExpressionValue(e.transform.mProps.s, 1 / e.transform.mProps.s.mult)
}
}),
Object.defineProperty(n, 'rotation', {
get: function () {
return ExpressionValue(e.transform.mProps.r, 1 / e.transform.mProps.r.mult)
}
}),
Object.defineProperty(n, 'skew', {
get: function () {
return ExpressionValue(e.transform.mProps.sk)
}
}),
Object.defineProperty(n, 'skewAxis', {
get: function () {
return ExpressionValue(e.transform.mProps.sa)
}
}),
Object.defineProperty(n, '_name', {
get: function () {
return t.nm
}
}),
n.ty = 'tr',
n.mn = t.mn,
n
},
c = function (t, e, r) {
function i(t) {
return 1 == t ? s : r(--t)
}
s.propertyIndex = t.ix;
var n = 'tm' === e.sh.ty ? e.sh.prop : e.sh;
function s(e) {
return t.p.ix === e ? s.position : t.s.ix === e ? s.size : void 0
}
return n.s.setGroupProperty(i),
n.p.setGroupProperty(i),
Object.defineProperty(s, 'size', {
get: function () {
return ExpressionValue(n.s)
}
}),
Object.defineProperty(s, 'position', {
get: function () {
return ExpressionValue(n.p)
}
}),
Object.defineProperty(s, '_name', {
get: function () {
return t.nm
}
}),
s.mn = t.mn,
s
},
h = function (t, e, r) {
function i(t) {
return 1 == t ? s : r(--t)
}
var n = 'tm' === e.sh.ty ? e.sh.prop : e.sh;
function s(e) {
return t.p.ix === e ? s.position : t.r.ix === e ? s.rotation : t.pt.ix === e ? s.points : t.or.ix === e || 'ADBE Vector Star Outer Radius' === e ? s.outerRadius : t.os.ix === e ? s.outerRoundness : !t.ir || t.ir.ix !== e && 'ADBE Vector Star Inner Radius' !== e ? t.is && t.is.ix === e ? s.innerRoundness : void 0 : s.innerRadius
}
return s.propertyIndex = t.ix,
n.or.setGroupProperty(i),
n.os.setGroupProperty(i),
n.pt.setGroupProperty(i),
n.p.setGroupProperty(i),
n.r.setGroupProperty(i),
t.ir && (n.ir.setGroupProperty(i), n.is.setGroupProperty(i)),
Object.defineProperty(s, 'position', {
get: function () {
return ExpressionValue(n.p)
}
}),
Object.defineProperty(s, 'rotation', {
get: function () {
return ExpressionValue(n.r, 1 / n.r.mult)
}
}),
Object.defineProperty(s, 'points', {
get: function () {
return ExpressionValue(n.pt)
}
}),
Object.defineProperty(s, 'outerRadius', {
get: function () {
return ExpressionValue(n.or)
}
}),
Object.defineProperty(s, 'outerRoundness', {
get: function () {
return ExpressionValue(n.os)
}
}),
Object.defineProperty(s, 'innerRadius', {
get: function () {
return n.ir ? ExpressionValue(n.ir)  : 0
}
}),
Object.defineProperty(s, 'innerRoundness', {
get: function () {
return n.is ? ExpressionValue(n.is, 1 / n.is.mult)  : 0
}
}),
Object.defineProperty(s, '_name', {
get: function () {
return t.nm
}
}),
s.mn = t.mn,
s
},
d = function (t, e, r) {
function i(t) {
return 1 == t ? s : r(--t)
}
var n = 'tm' === e.sh.ty ? e.sh.prop : e.sh;
function s(e) {
return t.p.ix === e ? s.position : t.r.ix === e ? s.roundness : t.s.ix === e || 'Size' === e ? s.size : void 0
}
return s.propertyIndex = t.ix,
n.p.setGroupProperty(i),
n.s.setGroupProperty(i),
n.r.setGroupProperty(i),
Object.defineProperty(s, 'position', {
get: function () {
return ExpressionValue(n.p)
}
}),
Object.defineProperty(s, 'roundness', {
get: function () {
return ExpressionValue(n.r)
}
}),
Object.defineProperty(s, 'size', {
get: function () {
return ExpressionValue(n.s)
}
}),
Object.defineProperty(s, '_name', {
get: function () {
return t.nm
}
}),
s.mn = t.mn,
s
},
u = function (t, e, r) {
var i = e;
function n(e) {
if (t.r.ix === e || 'Round Corners 1' === e) return n.radius
}
return n.propertyIndex = t.ix,
i.rd.setGroupProperty(function (t) {
return 1 == t ? n : r(--t)
}),
Object.defineProperty(n, 'radius', {
get: function () {
return ExpressionValue(i.rd)
}
}),
Object.defineProperty(n, '_name', {
get: function () {
return t.nm
}
}),
n.mn = t.mn,
n
},
p = function (t, e, r) {
function i(t) {
return 1 == t ? s : r(--t)
}
var n = e;
function s(e) {
return t.c.ix === e || 'Copies' === e ? s.copies : t.o.ix === e || 'Offset' === e ? s.offset : void 0
}
return s.propertyIndex = t.ix,
n.c.setGroupProperty(i),
n.o.setGroupProperty(i),
Object.defineProperty(s, 'copies', {
get: function () {
return ExpressionValue(n.c)
}
}),
Object.defineProperty(s, 'offset', {
get: function () {
return ExpressionValue(n.o)
}
}),
Object.defineProperty(s, '_name', {
get: function () {
return t.nm
}
}),
s.mn = t.mn,
s
},
_ = function (t, e, r) {
var i = e.sh;
function n(t) {
if ('Shape' === t || 'shape' === t || 'Path' === t || 'path' === t || 'ADBE Vector Shape' === t || 2 === t) return n.path
}
return i.setGroupProperty(function (t) {
return 1 == t ? n : r(--t)
}),
Object.defineProperty(n, 'path', {
get: function () {
return i.k && i.getValue(),
i
}
}),
Object.defineProperty(n, 'shape', {
get: function () {
return i.k && i.getValue(),
i
}
}),
Object.defineProperty(n, '_name', {
value: t.nm
}),
Object.defineProperty(n, 'ix', {
value: t.ix
}),
Object.defineProperty(n, 'mn', {
value: t.mn
}),
n
};
return t
}(),
TextExpressionInterface = function (t) {
var e;
function r() {
}
return Object.defineProperty(r, 'sourceText', {
get: function () {
var r = t.textProperty.currentData.t;
return void 0 !== t.textProperty.currentData.t && (t.textProperty.currentData.t = void 0, (e = new String(r)).value = r || new String(r)),
e
}
}),
r
},
LayerExpressionInterface = function () {
function t(t, e) {
var r = new Matrix;
if (r.reset(), this._elem.finalTransform.mProp.applyToMatrix(r), this._elem.hierarchy && this._elem.hierarchy.length) {
var i,
n = this._elem.hierarchy.length;
for (i = 0; i < n; i += 1) this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(r);
return r.applyToPointArray(t[0], t[1], t[2] || 0)
}
return r.applyToPointArray(t[0], t[1], t[2] || 0)
}
function e(t, e) {
var r = new Matrix;
if (r.reset(), this._elem.finalTransform.mProp.applyToMatrix(r), this._elem.hierarchy && this._elem.hierarchy.length) {
var i,
n = this._elem.hierarchy.length;
for (i = 0; i < n; i += 1) this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(r);
return r.inversePoint(t)
}
return r.inversePoint(t)
}
function r(t) {
var e = new Matrix;
if (e.reset(), this._elem.finalTransform.mProp.applyToMatrix(e), this._elem.hierarchy && this._elem.hierarchy.length) {
var r,
i = this._elem.hierarchy.length;
for (r = 0; r < i; r += 1) this._elem.hierarchy[r].finalTransform.mProp.applyToMatrix(e);
return e.inversePoint(t)
}
return e.inversePoint(t)
}
return function (i) {
var n = TransformExpressionInterface(i.transform);
function s(t) {
switch (t) {
case 'ADBE Root Vectors Group':
case 'Contents':
case 2:
return s.shapeInterface;
case 1:
case 6:
case 'Transform':
case 'transform':
case 'ADBE Transform Group':
return n;
case 4:
case 'ADBE Effect Parade':
return s.effect
}
}
return s.toWorld = t,
s.fromWorld = e,
s.toComp = t,
s.fromComp = r,
s.sourceRectAtTime = i.sourceRectAtTime.bind(i),
s._elem = i,
Object.defineProperty(s, 'hasParent', {
get: function () {
return !!i.hierarchy
}
}),
Object.defineProperty(s, 'parent', {
get: function () {
return i.hierarchy[0].layerInterface
}
}),
Object.defineProperty(s, 'rotation', {
get: function () {
return n.rotation
}
}),
Object.defineProperty(s, 'scale', {
get: function () {
return n.scale
}
}),
Object.defineProperty(s, 'position', {
get: function () {
return n.position
}
}),
Object.defineProperty(s, 'anchorPoint', {
get: function () {
return n.anchorPoint
}
}),
Object.defineProperty(s, 'transform', {
get: function () {
return n
}
}),
Object.defineProperty(s, 'width', {
get: function () {
return 0 === i.data.ty ? i.data.w : 100
}
}),
Object.defineProperty(s, 'height', {
get: function () {
return 0 === i.data.ty ? i.data.h : 100
}
}),
Object.defineProperty(s, 'source', {
get: function () {
return i.data.refId
}
}),
Object.defineProperty(s, 'index', {
get: function () {
return i.data.ind
}
}),
Object.defineProperty(s, '_name', {
value: i.data.nm
}),
Object.defineProperty(s, 'content', {
get: function () {
return s.shapeInterface
}
}),
Object.defineProperty(s, 'active', {
get: function () {
return i.isVisible
}
}),
Object.defineProperty(s, 'text', {
get: function () {
return s.textInterface
}
}),
s.registerMaskInterface = function (t) {
s.mask = new MaskManagerInterface(t, i)
},
s.registerEffectsInterface = function (t) {
s.effect = t
},
s
}
}(),
CompExpressionInterface = function (t) {
function e(e) {
for (var r = 0, i = t.layers.length; r < i; ) {
if (t.layers[r].nm === e || t.layers[r].ind === e) return t.elements[r].layerInterface;
r += 1
}
return {
active: !1
}
}
return Object.defineProperty(e, '_name', {
value: t.data.nm
}),
e.layer = e,
e.pixelAspect = 1,
e.height = t.globalData.compSize.h,
e.width = t.globalData.compSize.w,
e.pixelAspect = 1,
e.frameDuration = 1 / t.globalData.frameRate,
e
},
TransformExpressionInterface = function (t) {
function e(r) {
switch (r) {
case 'scale':
case 'Scale':
case 'ADBE Scale':
case 6:
return e.scale;
case 'rotation':
case 'Rotation':
case 'ADBE Rotation':
case 'ADBE Rotate Z':
case 10:
return e.rotation;
case 'position':
case 'Position':
case 'ADBE Position':
case 2:
return t.position;
case 'anchorPoint':
case 'AnchorPoint':
case 'Anchor Point':
case 'ADBE AnchorPoint':
case 1:
return e.anchorPoint;
case 'opacity':
case 'Opacity':
case 11:
return e.opacity
}
}
return Object.defineProperty(e, 'rotation', {
get: function () {
return t.rotation
}
}),
Object.defineProperty(e, 'scale', {
get: function () {
return t.scale
}
}),
Object.defineProperty(e, 'position', {
get: function () {
return t.position
}
}),
Object.defineProperty(e, 'xPosition', {
get: function () {
return t.xPosition
}
}),
Object.defineProperty(e, 'yPosition', {
get: function () {
return t.yPosition
}
}),
Object.defineProperty(e, 'anchorPoint', {
get: function () {
return t.anchorPoint
}
}),
Object.defineProperty(e, 'opacity', {
get: function () {
return t.opacity
}
}),
Object.defineProperty(e, 'skew', {
get: function () {
return t.skew
}
}),
Object.defineProperty(e, 'skewAxis', {
get: function () {
return t.skewAxis
}
}),
e
},
ProjectInterface = function () {
function t(t) {
this.compositions.push(t)
}
return function () {
function e(t) {
for (var e = 0, r = this.compositions.length; e < r; ) {
if (this.compositions[e].data && this.compositions[e].data.nm === t) return this.compositions[e].prepareFrame && this.compositions[e].prepareFrame(this.currentFrame),
this.compositions[e].compInterface;
e += 1
}
}
return e.compositions = [
],
e.currentFrame = 0,
e.registerComposition = t,
e
}
}(),
EffectsExpressionInterface = function () {
function t(r, i, n, s) {
var o,
a = [
],
l = r.ef.length;
for (o = 0; o < l; o += 1) 5 === r.ef[o].ty ? a.push(t(r.ef[o], i.effectElements[o], i.effectElements[o].propertyGroup, s))  : a.push(e(i.effectElements[o], r.ef[o].ty, s, c));
function c(t) {
return 1 === t ? h : n(t - 1)
}
var h = function (t) {
for (var e = r.ef, i = 0, n = e.length; i < n; ) {
if (t === e[i].nm || t === e[i].mn || t === e[i].ix) return 5 === e[i].ty ? a[i] : a[i]();
i += 1
}
return a[0]()
};
return h.propertyGroup = c,
'ADBE Color Control' === r.mn && Object.defineProperty(h, 'color', {
get: function () {
return a[0]()
}
}),
Object.defineProperty(h, 'numProperties', {
get: function () {
return r.np
}
}),
h.active = 0 !== r.en,
h
}
function e(t, e, r, i) {
return t.p.setGroupProperty && t.p.setGroupProperty(i),
function () {
return 10 === e ? r.comp.compInterface(t.p.v)  : ExpressionValue(t.p)
}
}
return {
createEffectsInterface: function (e, r) {
if (e.effects) {
var i,
n = [
],
s = e.data.ef,
o = e.effects.effectElements.length;
for (i = 0; i < o; i += 1) n.push(t(s[i], e.effects.effectElements[i], r, e));
return function (t) {
for (var r = e.data.ef, i = 0, s = r.length; i < s; ) {
if (t === r[i].nm || t === r[i].mn || t === r[i].ix) return n[i];
i += 1
}
}
}
}
}
}(),
MaskManagerInterface = function () {
function t(t, e) {
this._mask = t,
this._data = e
}
return Object.defineProperty(t.prototype, 'maskPath', {
get: function () {
return this._mask.prop.k && this._mask.prop.getValue(),
this._mask.prop
}
}),
function (e, r) {
var i,
n = Array.apply(null, {
length: e.viewData.length
}),
s = e.viewData.length;
for (i = 0; i < s; i += 1) n[i] = new t(e.viewData[i], e.masksProperties[i]);
return function (t) {
for (i = 0; i < s; ) {
if (e.masksProperties[i].nm === t) return n[i];
i += 1
}
}
}
}(),
ExpressionValue = function (t, e, r) {
var i,
n,
s,
o;
if (t.k && t.getValue(), r) {
if ('color' === r) {
for (s = 4, i = Array.apply(null, {
length: s
}), o = Array.apply(null, {
length: s
}), n = 0; n < s; n += 1) i[n] = o[n] = e && n < 3 ? t.v[n] * e : 1;
i.value = o
}
} else if ('number' == typeof t.v || t.v instanceof Number) (i = e ? new Number(t.v * e)  : new Number(t.v)).value = e ? t.v * e : t.v;
 else {
for (s = t.v.length, i = Array.apply(null, {
length: s
}), o = Array.apply(null, {
length: s
}), n = 0; n < s; n += 1) i[n] = o[n] = e ? t.v[n] * e : t.v[n];
i.value = o
}
return i.numKeys = t.keyframes ? t.keyframes.length : 0,
i.key = function (e) {
return i.numKeys ? t.keyframes[e - 1].t : 0
},
i.valueAtTime = t.getValueAtTime,
i.propertyGroup = t.propertyGroup,
i
};
function SliderEffect(t, e, r) {
this.p = PropertyFactory.getProp(e, t.v, 0, 0, r)
}
function AngleEffect(t, e, r) {
this.p = PropertyFactory.getProp(e, t.v, 0, 0, r)
}
function ColorEffect(t, e, r) {
this.p = PropertyFactory.getProp(e, t.v, 1, 0, r)
}
function PointEffect(t, e, r) {
this.p = PropertyFactory.getProp(e, t.v, 1, 0, r)
}
function LayerIndexEffect(t, e, r) {
this.p = PropertyFactory.getProp(e, t.v, 0, 0, r)
}
function MaskIndexEffect(t, e, r) {
this.p = PropertyFactory.getProp(e, t.v, 0, 0, r)
}
function CheckboxEffect(t, e, r) {
this.p = PropertyFactory.getProp(e, t.v, 0, 0, r)
}
function NoValueEffect() {
this.p = {
}
}
function EffectsManager(t, e, r) {
var i = t.ef;
this.effectElements = [
];
var n,
s,
o = i.length;
for (n = 0; n < o; n++) s = new GroupEffect(i[n], e, r),
this.effectElements.push(s)
}
function GroupEffect(t, e, r) {
this.dynamicProperties = [
],
this.init(t, e, this.dynamicProperties),
this.dynamicProperties.length && r.push(this)
}
GroupEffect.prototype.getValue = function () {
this.mdf = !1;
var t,
e = this.dynamicProperties.length;
for (t = 0; t < e; t += 1) this.dynamicProperties[t].getValue(),
this.mdf = !!this.dynamicProperties[t].mdf || this.mdf
},
GroupEffect.prototype.init = function (t, e, r) {
this.data = t,
this.mdf = !1,
this.effectElements = [
];
var i,
n,
s = this.data.ef.length,
o = this.data.ef;
for (i = 0; i < s; i += 1) switch (o[i].ty) {
case 0:
n = new SliderEffect(o[i], e, r),
this.effectElements.push(n);
break;
case 1:
n = new AngleEffect(o[i], e, r),
this.effectElements.push(n);
break;
case 2:
n = new ColorEffect(o[i], e, r),
this.effectElements.push(n);
break;
case 3:
n = new PointEffect(o[i], e, r),
this.effectElements.push(n);
break;
case 4:
case 7:
n = new CheckboxEffect(o[i], e, r),
this.effectElements.push(n);
break;
case 10:
n = new LayerIndexEffect(o[i], e, r),
this.effectElements.push(n);
break;
case 11:
n = new MaskIndexEffect(o[i], e, r),
this.effectElements.push(n);
break;
case 5:
n = new EffectsManager(o[i], e, r),
this.effectElements.push(n);
break;
case 6:
n = new NoValueEffect(o[i], e, r),
this.effectElements.push(n)
}
};
var bodymovinjs = {
};
function setLocationHref(t) {
locationHref = t
}
function play(t) {
animationManager.play(t)
}
function pause(t) {
animationManager.pause(t)
}
function togglePause(t) {
animationManager.togglePause(t)
}
function setSpeed(t, e) {
animationManager.setSpeed(t, e)
}
function setDirection(t, e) {
animationManager.setDirection(t, e)
}
function stop(t) {
animationManager.stop(t)
}
function moveFrame(t) {
animationManager.moveFrame(t)
}
function searchAnimations() {
!0 === standalone ? animationManager.searchAnimations(animationData, standalone, renderer)  : animationManager.searchAnimations()
}
function registerAnimation(t) {
return animationManager.registerAnimation(t)
}
function resize() {
animationManager.resize()
}
function start() {
animationManager.start()
}
function goToAndStop(t, e, r) {
animationManager.goToAndStop(t, e, r)
}
function setSubframeRendering(t) {
subframeEnabled = t
}
function loadAnimation(t) {
return !0 === standalone && (t.animationData = JSON.parse(animationData)),
animationManager.loadAnimation(t)
}
function destroy(t) {
return animationManager.destroy(t)
}
function setQuality(t) {
if ('string' == typeof t) switch (t) {
case 'high':
defaultCurveSegments = 200;
break;
case 'medium':
defaultCurveSegments = 50;
break;
case 'low':
defaultCurveSegments = 10
} else !isNaN(t) && t > 1 && (defaultCurveSegments = t);
roundValues(!(defaultCurveSegments >= 50))
}
function inBrowser() {
return 'undefined' != typeof navigator
}
function installPlugin(t, e) {
'expressions' === t && (expressionsPlugin = e)
}
function getFactory(t) {
switch (t) {
case 'propertyFactory':
return PropertyFactory;
case 'shapePropertyFactory':
return ShapePropertyFactory;
case 'matrix':
return Matrix
}
}
function checkReady() {
'complete' === document.readyState && (clearInterval(readyStateCheckInterval), searchAnimations())
}
function getQueryVariable(t) {
for (var e = queryString.split('&'), r = 0; r < e.length; r++) {
var i = e[r].split('=');
if (decodeURIComponent(i[0]) == t) return decodeURIComponent(i[1])
}
}
bodymovinjs.play = play,
bodymovinjs.pause = pause,
bodymovinjs.setLocationHref = setLocationHref,
bodymovinjs.togglePause = togglePause,
bodymovinjs.setSpeed = setSpeed,
bodymovinjs.setDirection = setDirection,
bodymovinjs.stop = stop,
bodymovinjs.moveFrame = moveFrame,
bodymovinjs.searchAnimations = searchAnimations,
bodymovinjs.registerAnimation = registerAnimation,
bodymovinjs.loadAnimation = loadAnimation,
bodymovinjs.setSubframeRendering = setSubframeRendering,
bodymovinjs.resize = resize,
bodymovinjs.start = start,
bodymovinjs.goToAndStop = goToAndStop,
bodymovinjs.destroy = destroy,
bodymovinjs.setQuality = setQuality,
bodymovinjs.inBrowser = inBrowser,
bodymovinjs.installPlugin = installPlugin,
bodymovinjs.__getFactory = getFactory,
bodymovinjs.version = '4.13.0';
var standalone = '__[STANDALONE]__',
animationData = '__[ANIMATIONDATA]__',
renderer = '';
if (standalone) {
var scripts = document.getElementsByTagName('script'),
index = scripts.length - 1,
myScript = scripts[index] || {
src: ''
},
queryString = myScript.src.replace(/^[^\?]+\??/, '');
renderer = getQueryVariable('renderer')
}
var readyStateCheckInterval = setInterval(checkReady, 100);
return bodymovinjs
},
void 0 === (__WEBPACK_AMD_DEFINE_RESULT__ = function () {
return factory(root)
}.call(exports, __webpack_require__, exports, module)) || (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)
},
ne8i: function (t, e, r) {
var i = r('RYi7'),
n = Math.min;
t.exports = function (t) {
return t > 0 ? n(i(t), 9007199254740991)  : 0
}
},
nh4g: function (t, e, r) {
t.exports = !r('eeVq') (function () {
return 7 != Object.defineProperty({
}, 'a', {
get: function () {
return 7
}
}).a
})
},
o7bv: function (t, e, r) {
'use strict';
r.r(e),
r.d(e, 'isInputActive', function () {
return l
}),
r.d(e, 'placeholderSetup', function () {
return h
}),
r.d(e, 'placeholderInit', function () {
return d
});
r('SRfc'),
r('nIY7');
var i = r('zxIV'),
n = r('Egk5'),
s = r('7jxN'),
o = r('t7n3'),
a = r('gdug');
function l() {
return document.activeElement && (Object(i.attr) (document.activeElement, 'contenteditable') || 'INPUT' === document.activeElement.tagName || 'textarea' === document.activeElement.tagName)
}
function c(t) {
var e,
r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
},
n = arguments.length > 2 ? arguments[2] : void 0,
o = arguments.length > 3 ? arguments[3] : void 0,
l = t.phshown,
c = t.phcont,
h = r.back,
d = r.editable,
u = r.hideBackAfter,
p = r.timeout,
_ = r.phColor,
f = void 0 === _ ? '#8C8E91' : _,
m = r.activeColor,
g = void 0 === m ? '#C0C8D0' : m,
v = p || 0 === p ? p : 100,
b = r.period || 200;
if (e = d ? (void 0 !== t.textContent ? t.textContent : t.innerText) || Object(i.geByTag) ('img', t).length : t.value, l && (h && e || !h && (n && !n.type || e)) ? (Object(i.hide) (c), t.phshown = !1)  : l || e || !h && !o || (Object(i.show) (c), t.phshown = !0, a.browser.opera && o && (t.setAttribute('placeholder', ''), t.removeAttribute('placeholder', ''))), h && !e) {
if (n && !n.type) {
var y = u ? i.hide.pbind(c.firstChild.firstChild)  : null;
clearTimeout(t.phanim),
t.phanim = setTimeout(function () {
Object(s.animate) (c.firstChild.firstChild, {
color: g
}, b, y)
}, v)
}
o && (clearTimeout(t.phanim), u && Object(i.show) (c.firstChild.firstChild), t.phanim = setTimeout(function () {
Object(s.animate) (c.firstChild.firstChild, {
color: f
}, b)
}, v))
}
}
function h(t, e) {
var r = Object(i.ge) (t),
s = e ? Object(o.clone) (e)  : {
};
if (r && (!r.phevents || s.reload)) {
var l = r.getAttribute ? r.getAttribute('placeholder')  : r.placeholder;
if (l) {
r.removeAttribute('placeholder');
var h = {
},
d = !1,
u = [
'Top',
'Bottom',
'Left',
'Right'
];
if (s.pad) h = s.pad;
 else {
if (s.fast) {
for (var p = 0; p < 4; p++) h['padding' + u[p]] = 3,
h['margin' + u[p]] = 0,
h['border' + u[p] + 'Width'] = 1;
Object(o.extend) (h, s.styles || {
})
} else {
for (var _ = [
], f = 0; f < 4; f++) _.push('margin' + u[f]),
_.push('padding' + u[f]),
_.push('border' + u[f] + 'Width');
h = Object(i.getStyle) (r, _)
}
for (var m = 0; m < 4; m++) {
var g = 'margin' + u[m],
v = 'border' + u[m] + 'Width';
h[g] = Object(o.intval) (h[g]) + Object(o.intval) (h[v]) + 'px',
delete h[v]
}
}
if (s.reload) {
var b = r.previousSibling;
b && Object(i.hasClass) (b, 'input_back_wrap') && Object(i.re) (b)
}
var y = s.big ? ' big' : '',
E = Object(i.getSize) (r) [0] - 20,
w = r.phcont = r.parentNode.insertBefore(Object(i.ce) ('div', {
className: 'input_back_wrap no_select',
innerHTML: `<div class="input_back"><div class="input_back_content${y
}
" style="width: ${E
}
px;">${l
}
</div></div>`
}),
r),
O = Object(i.domFC) (w);
Object(i.setStyle) (O, h);
var P = c.pbind(r, s),
C = a.browser.mobile ? P : (t, e) =>setTimeout(P.pbind(t, e), 0);
a.browser.msie && a.browser.version < 8 && Object(i.setStyle) (O, {
marginTop: 1
}),
r.phonfocus = function (t) {
d || (r.focused = !0, cur.__focused = r, !0 === t && (Object(i.setStyle) (r, {
backgroundColor: '#FFF'
}), Object(i.hide) (O)), C(!0, !1))
},
r.phonblur = function () {
d || (cur.__focused = r.focused = !1, Object(i.show) (O), C(!1, !0))
},
r.phshown = !0,
r.phanim = null,
(r.value || s.editable && ((void 0 !== r.textContent ? r.textContent : r.innerText) || Object(i.geByTag) ('img', r).length)) && (r.phshown = !1, Object(i.hide) (w)),
a.browser.opera_mobile || (Object(n.addEvent) (w, 'focus click', function (t) {
d || (s.editableFocus ? (setTimeout(s.editableFocus.pbind(r), 0), r.phonfocus())  : (r.blur(), r.focus()))
}), Object(n.addEvent) (r, 'focus' + (s.editable ? ' click' : ''), r.phonfocus), Object(n.addEvent) (r, 'keydown paste cut input', C)),
Object(n.addEvent) (r, 'blur', r.phonblur),
r.check = C,
r.getValue = () =>s.editable ? r.innerHTML : r.value,
r.setPlaceholder = t=>Object(i.geByClass1) ('input_back_content', w).textContent = t,
r.setDisabled = t=>d = t,
r.setValue = function (t) {
s.editable ? r.innerHTML = t : r.value = t,
c(r, s)
},
r.phevents = !0,
r.phonsize = function () {
},
s.global || s.reload || (cur.__phinputs || (cur.__phinputs = [
], cur.destroy.push(function (t) {
for (var e = 0, r = t.length; e < r; e++) Object(i.removeData) (t[e])
}.pbind(cur.__phinputs))), cur.__phinputs.push(r))
}
}
}
function d(t, e) {
var r = Object(i.ge) (t),
s = e ? Object(o.clone) (e)  : {
},
l = void 0 === Object(i.ce) ('input').placeholder || r && r.getAttribute && r.getAttribute('contenteditable');
if (r && (!r.phevents || s.reload)) {
var c = r.getAttribute ? r.getAttribute('placeholder')  : r.placeholder;
if (c && (r.getValue = function () {
return s.editable ? r.innerHTML : r.value
}, r.setValue = function (t) {
s.editable ? r.innerHTML = t : r.value = t,
l && _(r, s)
}, r.phonfocus = function () {
}, r.phonblur = function () {
}, l)) {
if (r.removeAttribute('placeholder'), s.reload) {
var h = Object(i.domNS) (r);
h && Object(i.hasClass) (h, 'placeholder') && Object(i.re) (h)
}
var d = r.phcont = Object(i.domInsertAfter) (Object(i.ce) ('div', {
className: 'placeholder',
innerHTML: '<div class="ph_input"><div class="ph_content">' + c + '</div></div>'
}), r),
u = _.pbind(r, s),
p = a.browser.mobile ? u : (t, e) =>setTimeout(u.pbind(t, e), 0);
r.phonfocus = function () {
r.focused = !0,
cur.__focused = r,
p(!0, !1)
},
r.phonblur = function () {
cur.__focused = r.focused = !1,
p(!1, !0)
},
r.phshown = !0,
(r.value || s.editable && ((void 0 !== r.textContent ? r.textContent : r.innerText) || Object(i.geByTag) ('img', r).length)) && (r.phshown = !1, Object(i.hide) (d)),
a.browser.opera_mobile || (Object(n.addEvent) (d, 'focus click contextmenu', function (t) {
s.editableFocus ? (setTimeout(s.editableFocus.pbind(r), 0), 'contextmenu' === t.type && a.browser.msie && s.editableFocus(r), r.phonfocus())  : (r.blur(), r.focus())
}), Object(n.addEvent) (r, 'focus' + (s.editable ? ' click' : ''), r.phonfocus), Object(n.addEvent) (r, 'keydown paste cut input', p)),
Object(n.addEvent) (r, 'blur', r.phonblur),
r.check = p,
r.phevents = !0,
r.phonsize = function () {
},
s.global || s.reload || (cur.__phinputs || (cur.__phinputs = [
], cur.destroy.push(function () {
if (cur.__phinputs) for (var t = 0, e = cur.__phinputs.length; t < e; ++t) Object(i.removeData) (cur.__phinputs[t])
})), cur.__phinputs.push(r))
}
}
function _(t) {
var e,
r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
},
n = t.phshown,
s = t.phcont;
r.editable ? ((e = void 0 !== t.textContent ? t.textContent : t.innerText) && a.browser.opera && e.match(/^[ ]+$/) && (e = ''), e || (e = Object(i.geByTag) ('img', t).length > 0), e || (e = Object(i.geByTag) ('br', t).length > 1), e || (e = Object(i.geByTag) ('p', t).length > 1))  : e = t.value,
n && e ? (Object(i.hide) (s), t.phshown = !1)  : n || e || (Object(i.show) (s), t.phshown = !0)
}
}
},
ol8x: function (t, e, r) {
var i = r('dyZX').navigator;
t.exports = i && i.userAgent || ''
},
pIFo: function (t, e, r) {
'use strict';
var i = r('y3w9'),
n = r('S/j/'),
s = r('ne8i'),
o = r('RYi7'),
a = r('A5AN'),
l = r('Xxuz'),
c = Math.max,
h = Math.min,
d = Math.floor,
u = /\$([$&`']|\d\d?|<[^>]*>)/g,
p = /\$([$&`']|\d\d?)/g;
r('IU+Z') ('replace', 2, function (t, e, r, _) {
return [function (i, n) {
var s = t(this),
o = null == i ? void 0 : i[e];
return void 0 !== o ? o.call(i, s, n)  : r.call(String(s), i, n)
},
function (t, e) {
var n = _(r, t, this, e);
if (n.done) return n.value;
var d = i(t),
u = String(this),
p = 'function' == typeof e;
p || (e = String(e));
var m = d.global;
if (m) {
var g = d.unicode;
d.lastIndex = 0
}
for (var v = [
]; ; ) {
var b = l(d, u);
if (null === b) break;
if (v.push(b), !m) break;
'' === String(b[0]) && (d.lastIndex = a(u, s(d.lastIndex), g))
}
for (var y, E = '', w = 0, O = 0; O < v.length; O++) {
b = v[O];
for (var P = String(b[0]), C = c(h(o(b.index), u.length), 0), x = [
], A = 1; A < b.length; A++) x.push(void 0 === (y = b[A]) ? y : String(y));
var M = b.groups;
if (p) {
var D = [
P
].concat(x, C, u);
void 0 !== M && D.push(M);
var k = String(e.apply(void 0, D))
} else k = f(P, u, C, x, M, e);
C >= w && (E += u.slice(w, C) + k, w = C + P.length)
}
return E + u.slice(w)
}
];
function f(t, e, i, s, o, a) {
var l = i + t.length,
c = s.length,
h = p;
return void 0 !== o && (o = n(o), h = u),
r.call(a, h, function (r, n) {
var a;
switch (n.charAt(0)) {
case '$':
return '$';
case '&':
return t;
case '`':
return e.slice(0, i);
case '\'':
return e.slice(l);
case '<':
a = o[n.slice(1, - 1)];
break;
default:
var h = + n;
if (0 === h) return r;
if (h > c) {
var u = d(h / 10);
return 0 === u ? r : u <= c ? void 0 === s[u - 1] ? n.charAt(1)  : s[u - 1] + n.charAt(1)  : r
}
a = s[h - 1]
}
return void 0 === a ? '' : a
})
}
})
},
pbhE: function (t, e, r) {
'use strict';
var i = r('2OiF');
function n(t) {
var e,
r;
this.promise = new t(function (t, i) {
if (void 0 !== e || void 0 !== r) throw TypeError('Bad Promise constructor');
e = t,
r = i
}),
this.resolve = i(e),
this.reject = i(r)
}
t.exports.f = function (t) {
return new n(t)
}
},
pemR: function (t, e, r) {
'use strict';
r.r(e),
r.d(e, 'classNames', function () {
return i
});
r('rGqo'),
r('Btvt');
function i() {
for (var t = [
], e = arguments.length, r = new Array(e), i = 0; i < e; i++) r[i] = arguments[i];
return r.forEach(e=>{
if (e) switch (typeof e) {
case 'string':
t.push(e);
break;
case 'object':
Object.keys(e).forEach(r=>{
e[r] && t.push(r)
});
break;
default:
t.push('' + e)
}
}), t.join(' ')
}
},
qOki: function (t, e, r) {
'use strict';
r.r(e),
r.d(e, 'EMPTY', function () {
return i
}),
r.d(e, 'UNSTARTED', function () {
return n
}),
r.d(e, 'PLAYING', function () {
return s
}),
r.d(e, 'PAUSED', function () {
return o
}),
r.d(e, 'ENDED', function () {
return a
}),
r.d(e, 'ERROR', function () {
return l
});
var i = 'empty',
n = 'unstarted',
s = 'playing',
o = 'paused',
a = 'ended',
l = 'error'
},
quPj: function (t, e, r) {
var i = r('0/R4'),
n = r('LZWt'),
s = r('K0xU') ('match');
t.exports = function (t) {
var e;
return i(t) && (void 0 !== (e = t[s]) ? !!e : 'RegExp' == n(t))
}
},
rE2o: function (t, e, r) {
r('OnI7') ('asyncIterator')
},
rEJs: function (t, e, r) {
'use strict';
r.r(e),
r.d(e, 'events', function () {
return i
});
var i = {
CURRENT_CHANGED: 'curr',
PLAY: 'start',
PAUSE: 'pause',
STOP: 'stop',
UPDATE: 'update',
LOADED: 'loaded',
ENDED: 'ended',
FAILED: 'failed',
BUFFERED: 'buffered',
PROGRESS: 'progress',
VOLUME: 'volume',
PLAYLIST_CHANGED: 'plchange',
ADDED: 'added',
REMOVED: 'removed',
FREQ_UPDATE: 'freq',
SEEK: 'seek',
PLAY_NEXT: 'play_next',
AD_READY: 'ad_ready',
AD_DEINITED: 'ad_deinit',
AD_STARTED: 'ad_started',
AD_COMPLETED: 'ad_completed',
START_LOADING: 'start_load',
CAN_PLAY: 'actual_start'
}
},
rGqo: function (t, e, r) {
for (var i = r('yt8O'), n = r('DVgA'), s = r('KroJ'), o = r('dyZX'), a = r('Mukb'), l = r('hPIQ'), c = r('K0xU'), h = c('iterator'), d = c('toStringTag'), u = l.Array, p = {
CSSRuleList: !0,
CSSStyleDeclaration: !1,
CSSValueList: !1,
ClientRectList: !1,
DOMRectList: !1,
DOMStringList: !1,
DOMTokenList: !0,
DataTransferItemList: !1,
FileList: !1,
HTMLAllCollection: !1,
HTMLCollection: !1,
HTMLFormElement: !1,
HTMLSelectElement: !1,
MediaList: !0,
MimeTypeArray: !1,
NamedNodeMap: !1,
NodeList: !0,
PaintRequestList: !1,
Plugin: !1,
PluginArray: !1,
SVGLengthList: !1,
SVGNumberList: !1,
SVGPathSegList: !1,
SVGPointList: !1,
SVGStringList: !1,
SVGTransformList: !1,
SourceBufferList: !1,
StyleSheetList: !0,
TextTrackCueList: !1,
TextTrackList: !1,
TouchList: !1
}, _ = n(p), f = 0; f < _.length; f++) {
var m,
g = _[f],
v = p[g],
b = o[g],
y = b && b.prototype;
if (y && (y[h] || a(y, h, u), y[d] || a(y, d, g), l[g] = u, v)) for (m in i) y[m] || s(y, m, i[m], !0)
}
},
ryw6: function (__webpack_module__, __webpack_exports__, __webpack_require__) {
'use strict';
__webpack_require__.r(__webpack_exports__),
__webpack_require__.d(__webpack_exports__, 'topMsg', function () {
return topMsg
}),
__webpack_require__.d(__webpack_exports__, 'topError', function () {
return topError
}),
__webpack_require__.d(__webpack_exports__, 'showMsg', function () {
return showMsg
}),
__webpack_require__.d(__webpack_exports__, 'showGlobalPrg', function () {
return showGlobalPrg
});
var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('a1Th'),
core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('Btvt'),
core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('pIFo'),
_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('zxIV'),
_shared_user_user_env__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('W9Tc'),
_web_lib_debug_tools__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__('98sY'),
_utils_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('t7n3');
function topMsg(t, e, r) {
if (r || (r = '#D6E5F7'), t) {
clearTimeout(window.topMsgTimer);
var i = Object(_dom__WEBPACK_IMPORTED_MODULE_3__.ge) ('system_msg');
i.style.backgroundColor = r,
i.innerHTML = t,
Object(_dom__WEBPACK_IMPORTED_MODULE_3__.show) (i),
e && (window.topMsgTimer = setTimeout(topMsg.pbind(!1), 1000 * e))
} else Object(_dom__WEBPACK_IMPORTED_MODULE_3__.hide) ('system_msg')
}
function topError(text, opts) {
var prefix = 'VK error: ';
if (opts || (opts = {
}), text.message) {
var error = text;
text = '<b>JavaScript error</b>' + (Object(_shared_user_user_env__WEBPACK_IMPORTED_MODULE_4__.partConfigEnabled) ('extended_client_logging') ? ': ' + error.message : ''),
opts.stack = error.stack,
error.stack && __debugMode && (text += '<br/>' + error.stack.replace(/\n/g, '<br/>'));
try {
console.error(prefix, error.message),
console.log(error.stack)
} catch (t) {
}
} else try {
console.error(prefix, text)
} catch (t) {
}
if (!opts.stack) try {
eval('0 = 1')
} catch (t) {
opts.stack = t.stack
}
if ( - 1 != opts.dt && topMsg(text, opts.dt, '#FFB4A3'), 1 !== opts.type && !__dev && !Object(_dom__WEBPACK_IMPORTED_MODULE_3__.ge) ('debuglogwrap')) {
delete opts.dt;
var breadcrumb = {
message: text,
data: {
msg: opts.msg || text,
module: (window.cur || {
}).module,
id: vk.id,
host: locHost,
lang: vk.lang,
loc: (window.nav || {
}).strLoc,
realloc: location.toString()
}
};
Object(_web_lib_debug_tools__WEBPACK_IMPORTED_MODULE_5__.logError) (opts, {
environment: 'genericVkError',
breadcrumb
})
}
}
function showMsg(t, e, r, i) {
var n = 'msg' + ('msg' !== r ? ' ' + r : '');
i && (n += ' msg_appear'),
t = Object(_dom__WEBPACK_IMPORTED_MODULE_3__.ge) (t);
var s = Object(_dom__WEBPACK_IMPORTED_MODULE_3__.geByClass1) (r, t),
o = s || Object(_dom__WEBPACK_IMPORTED_MODULE_3__.domFC) (t),
a = t.insertBefore(Object(_dom__WEBPACK_IMPORTED_MODULE_3__.ce) ('div', {
className: n,
innerHTML: '<div class="msg_text">' + e + '</div>'
}), o);
s && Object(_dom__WEBPACK_IMPORTED_MODULE_3__.re) (s),
setTimeout(_dom__WEBPACK_IMPORTED_MODULE_3__.removeClass.pbind(a, 'msg_appear'), 0)
}
function showGlobalPrg(t, e) {
var r = Object(_dom__WEBPACK_IMPORTED_MODULE_3__.getXY) (t),
i = Object(_dom__WEBPACK_IMPORTED_MODULE_3__.getSize) (t),
n = e || {
},
s = n.w,
o = void 0 === s ? 32 : s,
a = n.h,
l = void 0 === a ? 13 : a,
c = Object(_dom__WEBPACK_IMPORTED_MODULE_3__.ge) ('global_prg');
c.className = n.cls || 'progress',
Object(_dom__WEBPACK_IMPORTED_MODULE_3__.setStyle) (c, {
left: r[0] + Math.floor((i[0] - o) / 2) + Object(_utils_common__WEBPACK_IMPORTED_MODULE_6__.intval) (n.shift ? n.shift[0] : 0),
top: r[1] + Math.floor((i[1] - l) / 2) + Object(_utils_common__WEBPACK_IMPORTED_MODULE_6__.intval) (n.shift ? n.shift[1] : 0),
width: o,
height: l,
display: 'block',
'z-index': n.zIndex ? n.zIndex : null
}),
n.hide && (t.style.visibility = 'hidden')
}
},
sMXx: function (t, e, r) {
'use strict';
var i = r('Ugos');
r('XKFU') ({
target: 'RegExp',
proto: !0,
forced: i !== /./.exec
}, {
exec: i
})
},
't/FQ': function (t, e, r) {
'use strict';
r.r(e),
r.d(e, 'Chat', function () {
return p
}),
r.d(e, 'cssAnim', function () {
return _
}),
r.d(e, 'imagesLoader', function () {
return f
}),
r.d(e, 'hideNewsAnnounce', function () {
return g
}),
r.d(e, 'leftAdBlockClose', function () {
return v
}),
r.d(e, 'leftBlockToggleFriend', function () {
return b
}),
r.d(e, 'leftBlockFriendTooltip', function () {
return y
}),
r.d(e, 'initLegacyBrowserDetectionInAttribute', function () {
return E
}),
r.d(e, '__qlClear', function () {
return w
}),
r.d(e, 'storePasswordCredential', function () {
return O
}),
r.d(e, 'onLoginDone', function () {
return P
}),
r.d(e, 'onLoginFailed', function () {
return C
}),
r.d(e, 'onLoginCaptcha', function () {
return x
}),
r.d(e, 'onLoginReCaptcha', function () {
return A
}),
r.d(e, 'nodeUpdated', function () {
return M
}),
r.d(e, 'initPostsLegacyVars', function () {
return D
});
r('rE2o'),
r('ioFf'),
r('rGqo'),
r('pIFo'),
r('0mN4');
var i = r('FWc3'),
n = r('v+DW'),
s = r('zxIV'),
o = r('7jxN'),
a = r('Egk5'),
l = r('t7n3'),
c = r('EasH'),
h = r('gdug'),
d = r('4+be');
function u(t, e) {
return function (t) {
if (Array.isArray(t)) return t
}(t) || function (t, e) {
var r = [
],
i = !0,
n = !1,
s = void 0;
try {
for (var o, a = t[Symbol.iterator](); !(i = (o = a.next()).done) && (r.push(o.value), !e || r.length !== e); i = !0);
} catch (t) {
n = !0,
s = t
} finally {
try {
i || null == a.return || a.return ()
} finally {
if (n) throw s
}
}
return r
}(t, e) || function () {
throw new TypeError('Invalid attempt to destructure non-iterable instance')
}()
}
var p = {
maxHeight: 300,
tabs: {
},
counters: {
},
showFriends: function () {
curFastChat.clistBox.visible ? curFastChat.clistBox.options.fixed ? FastChat.clistHide()  : curFastChat.clistBox.show()  : (FastChat.clistShow(), p.cont.tt && p.cont.tt.destroy && p.cont.tt.destroy())
},
showTT: function () {
if (!Object(s.hasClass) (p.wrap, 'chat_active') && !Object(s.hasClass) (p.wrap, 'chat_expand')) {
var t = h.browser.mac ? 'Cmd' : 'Ctrl';
Object(i.showTooltip) (p.cont, {
text: `${Object(d.getLang) ('head_fr_online_tip')
}
 (${t
}
+?)`,
shift: [
- 2,
4,
0
],
showdt: 0,
black: 1
})
}
},
init: function () {
p.wrap = Object(s.ce) ('div', {
id: 'chat_onl_wrap',
className: 'chat_onl_wrap',
innerHTML: '\n<div class="chat_tt_wrap"></div>\n<div class="chat_onl_inner">\n  <div class="chat_cont_scrolling"><div class="chat_onl_height"></div></div>\n  <div class="chat_cont_sh_top"></div>\n  <div class="chat_cont_sh_bottom"></div>\n  <a class="chat_tab_wrap" id="chat_tab_wrap" onclick="Chat.showFriends()" onmouseover="Chat.showTT();">\n    <div class="chat_onl_cont">\n      <div class="chat_onl" id="chat_onl"></div>\n    </div>\n  </a>\n</div>'
}),
utilsNode.appendChild(p.wrap),
p.scrollNode = Object(s.geByClass1) ('chat_cont_scrolling', p.wrap),
p.ttNode = Object(s.geByClass1) ('chat_tt_wrap', p.wrap),
p.itemsCont = p.scrollNode.firstChild,
p.onl = Object(s.ge) ('chat_onl'),
p.cont = p.onl.parentNode.parentNode,
Object(s.hide) (p.wrap),
p.inited = !0,
stManager._addCss('.layers_shown .chat_onl_wrap {margin-right: ' + Object(n.sbWidth) () + 'px;}')
}
};
function _(t, e, r, i) {
var n = Object(l.intval) (h.browser.version);
if (t && (h.browser.chrome && n > 14 || h.browser.mozilla && n > 13 || h.browser.opera && n > 2)) {
var c = 'all ' + r.duration + 'ms ' + (r.func || 'ease-out');
t.style.WebkitTransition = c,
t.style.MozTransition = c,
t.style.OTransition = c,
t.style.transition = c;
var d = function e() {
return h.browser.opera && Object(l.intval) (h.browser.version) <= 12 ? t.removeEventListener('oTransitionEnd', e)  : Object(a.removeEvent) (t, 'webkitTransitionEnd transitionend msTransitionEnd oTransitionEnd', e),
t.style.WebkitTransition = '',
t.style.MozTransition = '',
t.style.OTransition = '',
t.style.transition = '',
i && i(),
!1
};
i && (h.browser.opera && Object(l.intval) (h.browser.version) <= 12 ? t.addEventListener('oTransitionEnd', d)  : Object(a.addEvent) (t, 'webkitTransitionEnd transitionend msTransitionEnd oTransitionEnd', d)),
setTimeout(s.setStyle.pbind(t, e), 0)
} else Object(o.animate) (t, e, Object(l.extend) (r, {
onComplete: i
}))
}
function f(t, e) {
var r = [
],
i = 0,
n = null,
o = Object(l.extend) ({
top_load: 0,
bottom_load: 2,
load_limit: 10,
need_load_class: '__need_load',
skip_process_load: !1,
use_iframe: !1
}, e),
a = {
};
function c(t, e) {
r[t] && (--i, delete r[t]),
e || a.processLoad()
}
function h(e) {
var r = 0,
i = e;
if (i && i.offsetParent) do {
if (r += i.offsetTop, t && i.offsetParent === t) break
} while (i = i.offsetParent);
return r
}
return a.processLoad = function () {
if (Object(l.each) (r, (t, e) =>{
var i = u(e, 2),
n = i[0],
s = i[1];
(s.width || s.height || Object(l.vkNow) () - n > 20000) && r[t] && c.call(s, t, !0)
}), clearTimeout(n), i && (n = setTimeout(a.processLoad, 500)), !(i >= o.load_limit)) {
var e,
d,
p = Object(s.geByClass) (o.need_load_class, t || bodyNode),
_ = [
];
if (t && p.length) {
var f = t.offsetHeight;
e = t.scrollTop - f * o.top_load,
d = t.scrollTop + f * o.bottom_load
}
for (var m = 0, g = p.length; m < g && i < o.load_limit; m++) {
var v = p[m];
if ('IMG' === v.tagName) {
var b = v.getAttribute('data-src');
if (b) {
if (t) {
var y = h(v),
E = y + v.parentNode.offsetHeight;
if (y > d) continue;
if (E < e) continue
}
_.push([v,
b])
}
}
}
Object(l.each) (_, (t, e) =>{
var n = u(e, 2),
h = n[0],
d = n[1];
a.iloader && a.iloader.add(d, c, h),
h.src = d,
h.removeAttribute('data-src'),
Object(s.removeClass) (h, o.need_load_class),
r[d] || (i++, r[d] = [
Object(l.vkNow) (),
h
])
}),
clearTimeout(n),
i && (n = setTimeout(a.processLoad, 500))
}
},
a.destroy = function () {
r = [
],
i = 0,
clearTimeout(n)
},
o.use_iframe && (a.iloader = new m),
o.skip_process_load || a.processLoad(),
a
}
function m() {
var t,
e,
r,
i,
n,
o;
function a(t) {
return e && e.body ? '<img id="___img' + t + '" />' : '<img class="___img' + t + '" />'
}
function c(t) {
return e && e.body ? e.getElementById('___img' + t)  : Object(s.geByClass1) ('___img' + t, r)
}
function d() {
t = utilsNode.appendChild(Object(s.ce) ('iframe')),
e = function (t) {
if (h.browser.mozilla) return !1;
try {
return t.contentDocument ? t.contentDocument : t.contentWindow && t.contentWindow.document ? t.contentWindow.document : t.document
} catch (t) {
}
return !1
}(t),
r = e && e.body ? e.body : utilsNode.appendChild(Object(s.ce) ('div', {
}, {
display: 'none'
})),
i = 0,
n = [
]
}
function p(t, e, o) {
var l = i++;
n[l] = {
src: t,
onLoad: e,
that: o
},
r.appendChild(Object(s.ce) ('div', {
innerHTML: a(l)
}));
var h = c(l);
return h.src = t,
h.onload = function () {
var t = n[l];
t && (t.onLoad && t.onLoad.call(t.that || window, t.src), delete n[l], r.removeChild(c(l).parentNode))
},
h
}
return d(),
{
add: p,
abort: function () {
Object(s.re) (t),
o = [
...n.filter(t=>void 0 !== t)
],
d()
},
repeat: function (t) {
if (!o) return [];
var e = [
];
if (Object(l.each) (o, (t, r) =>{
p(r.src, r.onLoad, r.that),
e.push(r.that)
}), o = null, t) {
var r = [
];
Object(l.each) (e, function () {
r.push([this,
this.src]),
this.src = '',
Object(s.hide) (this)
}),
setTimeout(function () {
Object(l.each) (r, (t, e) =>{
var r = u(e, 2),
i = r[0],
n = r[1];
i.src = n,
Object(s.show) (i)
})
}, 10)
}
return e
}
}
}
function g(t, e) {
var r = {
act: 'hide_block',
block: t,
hash: e
};
ajax.post('al_index.php', r),
Object(s.hide) ('news_announce_' + t)
}
function v(t, e) {
function r() {
Object(o.animate) ('ads_ad_close_info_' + t, {
opacity: 1
}, 200, i)
}
function i() {
Object(s.setStyle) ('ads_ad_box2_' + t, {
visibility: 'hidden'
})
}
Object(s.setStyle) ('left_hide' + t, {
visibility: 'hidden'
}),
ajax.post(e, {
}, {
noAds: !0,
onDone: function (e) {
if (!e.done) return;
if ('ya_direct' === t) return Object(o.animate) (t, {
opacity: 0
}, 200, function () {
Object(s.re) ('ya_direct'),
setTimeout(function () {
AdsLight.updateBlock('force_hard', 2)
}, 5000)
}),
void (window.vk__adsLight.yaDirectAdActive = !1);
var i = Object(s.ge) ('ads_ad_close_info_' + t);
if (!i) return !1;
Object(s.setStyle) (i, {
opacity: 0
}),
i.style.setProperty('display', 'block', 'important'),
setTimeout(r, 0)
}
})
}
function b(t, e, r, i, n) {
i && stManager.add(['tooltips.css',
'tooltips.js']),
cur.mfid = t,
ajax.post('al_friends.php', {
act: i ? 'add' : 'remove',
mid: t,
mf_type: e,
hash: r,
from: 'leftblock'
}, {
onDone: function (e, r, i) {
if (!e) return nav.reload();
var n = Object(s.ge) ('left_friend_status_' + t);
Object(s.cleanElems) (n.firstChild),
e ? (Object(s.show) (n), Object(s.val) (n, e))  : Object(s.hide) (n),
r && (ajax.preload('al_friends.php', {
act: 'friend_tt',
mid: t
}, [
r,
i
]), setTimeout(y, 0))
},
showProgress: function () {
var e = (Object(s.ge) ('left_friend_subscribed') || {
}).tt;
e && (e.hide({
fasthide: 1
}), e.destroy()),
Object(s.ge) ('left_friend_status_' + t).innerHTML = '<img src="images/upload' + (window.devicePixelRatio >= 2 ? '_2x' : '') + '.gif" width="32" />'
},
hideProgress: () =>Object(s.hide) ('left_friend_status_' + t),
onFail: function (t) {
if (t) return Object(c.showFastBox) ({
title: Object(d.getLang) ('global_error')
}, t),
!0
}
}),
Object(a.cancelEvent) (n)
}
function y() {
return Object(i.showTooltip) (Object(s.ge) ('left_friend_subscribed'), {
url: 'al_friends.php',
params: {
act: 'friend_tt',
mid: cur.mfid,
from: 'leftblock'
},
slide: 15,
hidedt: 500,
shift: [
40,
- 1,
3
],
className: 'preq_tt',
forcetodown: !0
})
}
function E() {
var t = [
];
Object(l.each) (h.browser, function (e, r) {
r && !Object(l.inArray) (e, [
'version',
'mac',
'search_bot'
]) && 'flash' !== e.substr(0, 5) && t.push(e)
}),
t = t.join(' '),
bodyNode.setAttribute('data-useragent', t)
}
function w() {
clearTimeout(window.__qlTimer),
setTimeout(() =>clearTimeout(window.__qlTimer), 2000)
}
function O(t) {
if (h.browserFeatures.cmaEnabled && window.ResizeObserver && Object(s.val) ('quick_email') && void 0 !== window.PasswordCredential) {
var e = new PasswordCredential({
id: Object(s.ge) ('quick_email').value,
password: Object(s.ge) ('quick_pass').value,
name: t.name,
iconURL: t.photo_50
});
navigator.credentials.store(e)
}
}
function P(t, e) {
w(),
O(e),
nav.reload({
force: !0,
from: 6
})
}
function C(t, e) {
switch (w(), t) {
case - 1:
location.href = location.href.replace(/^http:/, 'https:');
break;
case 4:
var r = '/login?m=1' + (e.expire ? '&s=0' : '');
Object(l.each) (['email',
'ul',
'pch'], function (t, i) {
e[i] && (r += '&' + i + '=' + e[i])
}),
location.href = r;
break;
default:
location.href = '/login'
}
}
function x(t, e) {
w(),
Object(n.unlockButton) (window.__qfBtn),
window.qloginBox = Object(c.showCaptchaBox) (t, e, window.qloginBox, {
onSubmit: function (t, e) {
Object(s.ge) ('quick_captcha_sid').value = t,
Object(s.ge) ('quick_captcha_key').value = e,
Object(s.ge) ('quick_login_form').submit()
},
onHide: () =>window.qloginBox = !1
})
}
function A(t, e) {
w(),
Object(n.unlockButton) (window.__qfBtn),
window.qloginBox = Object(c.showReCaptchaBox) (t, e, window.qloginBox, {
onSubmit: function (t) {
Object(s.ge) ('quick_recaptcha').value = t,
Object(s.ge) ('quick_login_form').submit()
},
onHide: () =>window.qloginBox = !1
})
}
function M(t, e) {
Object(s.setStyle) (t, {
backgroundColor: '#F5F7FA'
}),
Object(o.animate) (t, {
backgroundColor: '#FFF'
}, e || 6000, function (t) {
Object(s.setStyle) (t, {
backgroundColor: null
})
})
}
function D() {
window._postsSeen = {
},
window._postsSaved = {
},
window._postsSaveTimer = void 0,
window._postsSendTimer = void 0,
window._postsCleanTimer = void 0,
window._postsSeenModules = {
},
window._postsExtras = {
}
}
},
t7n3: function (t, e, r) {
'use strict';
r.r(e),
r.d(e, 'vkLocal', function () {
return a
}),
r.d(e, 'lTimeout', function () {
return l
}),
r.d(e, 'vkImage', function () {
return c
}),
r.d(e, 'trim', function () {
return h
}),
r.d(e, 'stripHTML', function () {
return d
}),
r.d(e, 'intval', function () {
return u
}),
r.d(e, 'floatval', function () {
return p
}),
r.d(e, 'positive', function () {
return _
}),
r.d(e, 'isNumeric', function () {
return f
}),
r.d(e, 'winToUtf', function () {
return m
}),
r.d(e, 'clean', function () {
return g
}),
r.d(e, 'unclean', function () {
return v
}),
r.d(e, 'indexOf', function () {
return b
}),
r.d(e, 'inArray', function () {
return y
}),
r.d(e, 'clone', function () {
return E
}),
r.d(e, 'arrayKeyDiff', function () {
return w
}),
r.d(e, 'extend', function () {
return O
}),
r.d(e, 'addTemplates', function () {
return P
}),
r.d(e, 'getTemplate', function () {
return C
}),
r.d(e, 'serializeForm', function () {
return x
}),
r.d(e, 'extractUrls', function () {
return A
}),
r.d(e, 'isRetina', function () {
return M
}),
r.d(e, 'getCaretCharacterOffsetWithin', function () {
return D
}),
r.d(e, 'formatCount', function () {
return k
}),
r.d(e, 'encodeHtml', function () {
return S
}),
r.d(e, 'decodeHtml', function () {
return I
}),
r.d(e, 'initUtilsCommon', function () {
return L
});
r('rE2o'),
r('ioFf'),
r('rGqo'),
r('a1Th'),
r('Btvt'),
r('SRfc'),
r('pIFo');
var i = r('zxIV'),
n = r('4+be'),
s = r('gdug'),
o = r('jE6c');
function a(t) {
var e = PageID;
return function () {
e === PageID && t.apply(this, arguments)
}
}
function l(t, e) {
return setTimeout(a(t), e)
}
r.d(e, 'rand', function () {
return o.rand
}),
r.d(e, 'replaceEntities', function () {
return o.replaceEntities
}),
r.d(e, 'isArray', function () {
return o.isArray
}),
r.d(e, 'isEmpty', function () {
return o.isEmpty
}),
r.d(e, 'isFunction', function () {
return o.isFunction
}),
r.d(e, 'isHttpHref', function () {
return o.isHttpHref
}),
r.d(e, 'isObject', function () {
return o.isObject
}),
r.d(e, 'isString', function () {
return o.isString
}),
r.d(e, 'isUndefined', function () {
return o.isUndefined
}),
r.d(e, 'irand', function () {
return o.irand
}),
r.d(e, 'escapeAttr', function () {
return o.escapeAttr
}),
r.d(e, 'escapeRE', function () {
return o.escapeRE
}),
r.d(e, 'escapeStr', function () {
return o.escapeStr
}),
r.d(e, 'each', function () {
return o.each
}),
r.d(e, 'htsc', function () {
return o.htsc
}),
r.d(e, 'copy', function () {
return o.copy
}),
r.d(e, 'vkNow', function () {
return o.vkNow
}),
r.d(e, 'locBase', function () {
return o.locBase
}),
r.d(e, 'unescapeAttr', function () {
return o.unescapeAttr
}),
r.d(e, 'utf2win', function () {
return o.utf2win
}),
r.d(e, 'srand', function () {
return o.srand
}),
r.d(e, 'stripTags', function () {
return o.stripTags
});
var c = () =>window.Image ? new Image : Object(i.ce) ('img'),
h = t=>(t || '').replace(/^\s+|\s+$/g, ''),
d = t=>t ? t.replace(/<(?:.|\s)*?>/g, '')  : '';
function u(t) {
return !0 === t ? 1 : parseInt(t) || 0
}
function p(t) {
return !0 === t ? 1 : parseFloat(t) || 0
}
function _(t) {
return (t = u(t)) < 0 ? 0 : t
}
function f(t) {
return !isNaN(t)
}
function m(t) {
return t.replace(/&#(\d\d+);/g, function (t, e) {
return (e = u(e)) >= 32 ? String.fromCharCode(e)  : t
}).replace(/&quot;/gi, '"').replace(/&lt;/gi, '<').replace(/&gt;/gi, '>').replace(/&amp;/gi, '&')
}
function g(t) {
return t ? t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;')  : ''
}
function v(t) {
return Object(o.replaceEntities) (t.replace(/\t/g, '\n'))
}
function b(t, e, r) {
for (var i = r || 0, n = (t || [
]).length; i < n; i++) if (t[i] == e) return i;
return - 1
}
function y(t, e) {
return - 1 !== b(e, t)
}
function E(t, e) {
var r = Object(o.isObject) (t) || void 0 === t.length ? {
}
 : [
];
for (var i in t) (!/webkit/i.test(_ua) || 'layerX' != i && 'layerY' != i && 'webkitMovementX' != i && 'webkitMovementY' != i) && (e && 'object' == typeof t[i] && 'prototype' !== i && null !== t[i] ? r[i] = E(t[i])  : r[i] = t[i]);
return r
}
function w(t) {
var e = {
},
r = arguments.length,
i = arguments;
for (var n in t) if (t.hasOwnProperty(n)) {
for (var s = !1, o = 1; o < r; o++) i[o][n] && i[o][n] === t[n] && (s = !0);
s || (e[n] = t[n])
}
return e
}
function O() {
var t = arguments,
e = t.length,
r = t[0] || {
},
i = 1,
n = !1;
for ('boolean' == typeof r && (n = r, r = t[1] || {
}, i = 2), 'object' == typeof r || Object(o.isFunction) (r) || (r = {
}); i < e; i++) {
var s = t[i];
if (null != s) for (var a in s) if (s.hasOwnProperty(a)) {
var l = r[a],
c = s[a];
r !== c && (n && c && 'object' == typeof c && !c.nodeType ? r[a] = O(n, l || (null != c.length ? [
] : {
}), c)  : void 0 !== c && (r[a] = c))
}
}
return r
}
function P(t) {
window.templates = window.templates || {
},
O(window.templates, t)
}
function C(t, e) {
var r = (window.templates = window.templates || {
}) [t];
return 'function' == typeof r && (r = r()),
r && e ? Object(i.rs) (r, e)  : r || ''
}
function x(t) {
if ('object' != typeof t) return !1;
var e = {
},
r = e=>Object(i.geByTag) (e, t),
n = function (r, n) {
if (n.name) if ('text' !== n.type && n.type) if (n.getAttribute('bool')) {
var o = Object(i.val) (n);
if (!o || '0' === o) return;
e[n.name] = 1
} else e[n.name] = s.browser.msie && !n.value && t[n.name] ? t[n.name].value : n.value;
 else e[n.name] = Object(i.val) (n)
};
return Object(o.each) (r('input'), function (t, e) {
if ('radio' !== e.type && 'checkbox' !== e.type || e.checked) return n(0, e)
}),
Object(o.each) (r('select'), n),
Object(o.each) (r('textarea'), n),
e
}
function A(t, e) {
for (var r, i = e ? /(?:([!()?., \n\r\t \u00A0]|^)((https?:\/\/)?((?:[a-z0-9_\-]+\.)+(?:[a-z]{2,10}|xn--p1ai|xn--j1amh|xn--80asehdb|xn--80aswg))(\/.*?)?(\#.*?)?)(?:[\.!:;,\*\(\)&]*(&nbsp;|[ \t\r\n \u00A0]|$))|([!()?., \n\r\t \u00A0]|^)((https?:\/\/)?((?:[a-z0-9а-яєґї_\-]+\.)+(?:рф|укр|онлайн|сайт|срб))(\/.*?)?(\#.*?)?)(?:[\.!:;,\*\(\)&]*(&nbsp;|[ \t\r\n \u00A0]|$)))/i : /(?:([!()?., \n\r\t \u00A0]|^)((https?:\/\/)?((?:[a-z0-9_\-]+\.)+(?:[a-z]{2,10}|xn--p1ai|xn--j1amh|xn--80asehdb|xn--80aswg))(\/.*?)?(\#.*?)?)(?:[\.!:;,\*\(\)]*(&nbsp;|[ \t\r\n \u00A0]))|([!()?., \n\r\t \u00A0]|^)((https?:\/\/)?((?:[a-z0-9а-яєґї_\-]+\.)+(?:рф|укр|онлайн|сайт|срб))(\/.*?)?(\#.*?)?)(?:[\.!:;,\*\(\)]*(&nbsp;|[ \t\r\n \u00A0])))/i, n = [
]; t && (r = t.match(i)); ) {
t = t.substr(r.index + r[0].length);
var s = 0;
r[4] || (s = 7),
n.push({
url: r[2 + s],
query: r[5 + s] || '',
domain: r[4 + s]
})
}
return n
}
var M = () =>window.devicePixelRatio >= 2;
function D(t) {
if (!t) return [0,
0];
var e = 0,
r = 0,
i = t.ownerDocument || t.document,
n = i.defaultView || i.parentWindow;
if (n.getSelection().rangeCount > 0) {
var s = n.getSelection().getRangeAt(0),
o = s.cloneRange();
o.selectNodeContents(t),
o.setEnd(s.startContainer, s.startOffset),
e = o.toString().length,
o.setEnd(s.endContainer, s.endOffset),
r = o.toString().length
}
return [e,
r]
}
function k(t) {
var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
},
r = e.kLimit || 1000;
return t >= (e.mLimit || 1000000) && !e.noCheck ? k(t = (t = u(t / 100000)) > 1000 ? u(t / 10)  : t / 10, O(e, {
noCheck: !0
}), !0) + 'M' : t >= r && !e.noCheck ? k(t = (t = u(t / 100)) > 100 ? u(t / 10)  : t / 10, O(e, {
noCheck: !0
}), !0) + 'K' : Object(n.langNumeric) (t, '%s', !0).replace(/,/g, '.')
}
var T,
j = function (t, e) {
return function (t) {
if (Array.isArray(t)) return t
}(t) || function (t, e) {
var r = [
],
i = !0,
n = !1,
s = void 0;
try {
for (var o, a = t[Symbol.iterator](); !(i = (o = a.next()).done) && (r.push(o.value), !e || r.length !== e); i = !0);
} catch (t) {
n = !0,
s = t
} finally {
try {
i || null == a.return || a.return ()
} finally {
if (n) throw s
}
}
return r
}(t, e) || function () {
throw new TypeError('Invalid attempt to destructure non-iterable instance')
}()
}((T = null, [
function (t) {
return T || (T = Object(i.se) ('<span> </span>')),
T.innerText = t,
T.innerHTML
},
function (t) {
return T || (T = Object(i.se) ('<span> </span>')),
T.innerHTML = t.replace(/<br\s*\/?>/gim, '\n'),
T.innerText
}
]), 2),
S = j[0],
I = j[1];
function L() {
window.PageID = window.PageID || 1
}
},
tMHi: function (t, e, r) {
'use strict';
r.r(e),
r.d(e, 'audioUnmaskSource', function () {
return s
});
r('KKXr');
var i = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMN0PQRSTUVWXYZO123456789+/=',
n = {
v: function (t) {
return t.split('').reverse().join('')
},
r: function (t, e) {
var r;
t = t.split('');
for (var n = i + i, s = t.length; s--; ) ~(r = n.indexOf(t[s])) && (t[s] = n.substr(r - e, 1));
return t.join('')
},
s: function (t, e) {
var r = t.length;
if (r) {
var i = function (t, e) {
var r = t.length,
i = [
];
if (r) {
var n = r;
for (e = Math.abs(e); n--; ) e = (r * (n + 1) ^ e + n) % r,
i[n] = e
}
return i
}(t, e),
n = 0;
for (t = t.split(''); ++n < r; ) t[n] = t.splice(i[r - 1 - n], 1, t[n]) [0];
t = t.join('')
}
return t
},
i: function (t, e) {
return n.s(t, e ^ vk.id)
},
x: function (t, e) {
var r = [
];
return e = e.charCodeAt(0),
each(t.split(''), function (t, i) {
r.push(String.fromCharCode(i.charCodeAt(0) ^ e))
}),
r.join('')
}
};
function s(t) {
if ((!window.wbopen || !~(window.open + '').indexOf('wbopen')) && ~t.indexOf('audio_api_unavailable')) {
var e,
r,
i = t.split('?extra=') [1].split('#'),
s = '' === i[1] ? '' : o(i[1]);
if (i = o(i[0]), 'string' != typeof s || !i) return t;
for (var a = (s = s ? s.split(String.fromCharCode(9))  : [
]).length; a--; ) {
if (e = (r = s[a].split(String.fromCharCode(11))).splice(0, 1, i) [0], !n[e]) return t;
i = n[e].apply(null, r)
}
if (i && 'http' === i.substr(0, 4)) return i
}
return t
}
function o(t) {
if (!t || t.length % 4 == 1) return !1;
for (var e, r, n = 0, s = 0, o = ''; r = t.charAt(s++); ) ~(r = i.indexOf(r)) && (e = n % 4 ? 64 * e + r : r, n++ % 4) && (o += String.fromCharCode(255 & e >> ( - 2 * n & 6)));
return o
}
},
tUrg: function (t, e, r) {
'use strict';
r('OGtf') ('link', function (t) {
return function (e) {
return t(this, 'a', 'href', e)
}
})
},
uQjJ: function (t, e, r) {
'use strict';
r.r(e);
var i = r('4O8T');
window.EventEmitter = i,
e.default = i
},
uk5P: function (t, e, r) {
'use strict';
r.r(e),
r.d(e, 'AUDIO_PLAYER_ENUMS', function () {
return i
});
var i = {
AUDIO_ITEM_INDEX_ID: 0,
AUDIO_ITEM_INDEX_OWNER_ID: 1,
AUDIO_ITEM_INDEX_URL: 2,
AUDIO_ITEM_INDEX_TITLE: 3,
AUDIO_ITEM_INDEX_PERFORMER: 4,
AUDIO_ITEM_INDEX_DURATION: 5,
AUDIO_ITEM_INDEX_ALBUM_ID: 6,
AUDIO_ITEM_INDEX_AUTHOR_LINK: 8,
AUDIO_ITEM_INDEX_LYRICS: 9,
AUDIO_ITEM_INDEX_FLAGS: 10,
AUDIO_ITEM_INDEX_CONTEXT: 11,
AUDIO_ITEM_INDEX_EXTRA: 12,
AUDIO_ITEM_INDEX_HASHES: 13,
AUDIO_ITEM_INDEX_COVER_URL: 14,
AUDIO_ITEM_INDEX_ADS: 15,
AUDIO_ITEM_INDEX_SUBTITLE: 16,
AUDIO_ITEM_INDEX_MAIN_ARTISTS: 17,
AUDIO_ITEM_INDEX_FEAT_ARTISTS: 18,
AUDIO_ITEM_INDEX_ALBUM: 19,
AUDIO_ITEM_INDEX_TRACK_CODE: 20,
AUDIO_ITEM_INDEX_RESTRICTION: 21,
AUDIO_ITEM_INDEX_ALBUM_PART: 22,
AUDIO_ITEM_INDEX_NEW_STATS: 23,
AUDIO_ITEM_ACCESS_KEY: 24,
AUDIO_ITEM_HAS_LYRICS_BIT: 1,
AUDIO_ITEM_CAN_ADD_BIT: 2,
AUDIO_ITEM_CLAIMED_BIT: 4,
AUDIO_ITEM_HQ_BIT: 16,
AUDIO_ITEM_LONG_PERFORMER_BIT: 32,
AUDIO_ITEM_UMA_BIT: 128,
AUDIO_ITEM_REPLACEABLE: 512,
AUDIO_ITEM_EXPLICIT_BIT: 1024,
AUDIO_ENOUGH_LOCAL_SEARCH_RESULTS: 500,
AUDIO_RECOMS_TYPE_LISTENED: 'recoms6',
AUDIO_PLAYING_CLS: 'audio_row__playing',
AUDIO_CURRENT_CLS: 'audio_row__current',
AUDIO_DURATION_CLS: 'audio_row__duration',
AUDIO_LAYER_HEIGHT: 550,
AUDIO_LAYER_MIN_WIDTH: 400,
AUDIO_LAYER_MAX_WIDTH: 1000,
AUDIO_HQ_LABEL_CLS: 'audio_hq_label_show',
AUDIO_MAX_AUDIOS_IN_SNIPPET: 5,
AUDIO_ROW_COVER_SIZE: 40,
AUDIO_ROW_PLAY_SIZE: 24,
AUDIO_ROW_ACTION_ROW_ITEM: '<div role="button" class="audio_row__more_action audio_row__more_action_%0% _audio_row__more_action_%0% %3%">%2%</div>',
LOG_LS_KEY: 'audiolog'
}
},
upKx: function (t, e, r) {
'use strict';
var i = r('S/j/'),
n = r('d/Gc'),
s = r('ne8i');
t.exports = [
].copyWithin || function (t, e) {
var r = i(this),
o = s(r.length),
a = n(t, o),
l = n(e, o),
c = arguments.length > 2 ? arguments[2] : void 0,
h = Math.min((void 0 === c ? o : n(c, o)) - l, o - a),
d = 1;
for (l < a && a < l + h && (d = - 1, l += h - 1, a += h - 1); h-- > 0; ) l in r ? r[a] = r[l] : delete r[a],
a += d,
l += d;
return r
}
},
'v+DW': function (t, e, r) {
'use strict';
r.r(e),
r.d(e, 'notaBene', function () {
return h
}),
r.d(e, 'updSideTopLink', function () {
return d
}),
r.d(e, 'createButton', function () {
return u
}),
r.d(e, 'actionsMenuItemLocked', function () {
return p
}),
r.d(e, 'lockActionsMenuItem', function () {
return _
}),
r.d(e, 'unlockActionsMenuItem', function () {
return f
}),
r.d(e, 'linkLocked', function () {
return m
}),
r.d(e, 'lockLink', function () {
return g
}),
r.d(e, 'unlockLink', function () {
return v
}),
r.d(e, 'lockButton', function () {
return b
}),
r.d(e, 'unlockButton', function () {
return y
}),
r.d(e, 'buttonLocked', function () {
return E
}),
r.d(e, 'isButtonLocked', function () {
return w
}),
r.d(e, 'disableButton', function () {
return O
}),
r.d(e, 'sbWidth', function () {
return P
}),
r.d(e, 'isChecked', function () {
return C
}),
r.d(e, 'checkbox', function () {
return x
}),
r.d(e, 'disable', function () {
return A
}),
r.d(e, 'radioval', function () {
return M
}),
r.d(e, 'radiobtn', function () {
return D
}),
r.d(e, 'showProgress', function () {
return k
}),
r.d(e, 'hideProgress', function () {
return T
}),
r.d(e, 'disableEl', function () {
return j
}),
r.d(e, 'enableEl', function () {
return S
}),
r.d(e, 'initUiHelpers', function () {
return I
});
var i = r('zxIV'),
n = r('Egk5'),
s = r('t7n3'),
o = r('lXE5'),
a = r('7jxN'),
l = r('gdug'),
c = r('4+be');
function h(t, e, r) {
if (t = Object(i.ge) (t)) {
r || Object(i.elfocus) (t),
void 0 === Object(i.data) (t, 'backstyle') && Object(i.data) (t, 'backstyle', t.style.backgroundColor || '');
var n = Object(i.data) (t, 'back') || Object(i.data) (t, 'back', Object(i.getStyle) (t, 'backgroundColor')),
s = {
notice: '#FFFFE0',
warning: '#FAEAEA'
};
Object(i.setStyle) (t, 'backgroundColor', s[e] || e || s.warning),
setTimeout(() =>Object(a.animate) (t, {
backgroundColor: n
}, 300, function () {
t.style.backgroundColor = Object(i.data) (t, 'backstyle')
}), 400)
}
}
function d(t) {
if (window.scrollNode && !l.browser.mobile && window._tbLink) {
var e = Object(i.ge) ('page_body'),
r = Object(i.getXY) (e),
n = Object(o.scrollGetY) (),
s = bodyNode.scrollLeft,
h = Object(i.ge) ('side_bar'),
d = Object(i.isVisible) (h);
if (window._stlSideTop = Math.max((d ? Object(i.getSize) (h) [1] : 0) - n - (l.browser.mozilla ? Object(i.getXY) (pageNode) [1] : 0), r[1]), t || s != __scrLeft) {
var u = Object(i.ge) ('page_layout'),
p = vk.rtl ? u.offsetLeft + u.offsetWidth : 0,
_ = vk.rtl ? (window.lastWindowWidth || 0) - p : u.offsetLeft;
Object(i.setStyle) (_stlLeft, {
width: Math.max(_ - 1, 0)
});
var f = vk.rtl ? r[0] + e.offsetWidth + 5 : _,
m = vk.rtl ? p - f : r[0] - 5 - f;
Object(i.setStyle) (_stlSide, {
left: f - s,
width: Math.max(m, 0)
}),
__scrLeft = s
}
Object(i.setStyle) (_stlSide, {
top: _stlSideTop,
height: Math.max((window.lastWindowHeight || 0) - _stlSideTop, 0)
}),
__adsUpdate();
var g = _tbLink.loc || _stlWas || n > 200,
v = n > 250 && cur._regBar,
b = 0,
y = !1;
if (g) {
1 !== _stlShown && (Object(i.show) (_stlLeft, _stlSide), Object(i.addClass) (_stlLeft, 'stl_active'), Object(i.addClass) (_stlSide, 'stl_active'), _stlShown = 1),
_tbLink.loc && cur._noUpLink && (n = 0),
_stlWas && n > 500 && (_stlWas = 0),
n > 200 ? (b = (n - 200) / 200, (_stlWasSet || _stlBack) && (_stlWasSet = _stlBack = 0, y = 1, Object(i.val) (_stlText, Object(c.getLang) ('global_to_top')), Object(i.removeClass) (_stlText, 'down'), Object(i.removeClass) (_stlText, 'back')))  : (b = (200 - n) / 200, _stlWas ? _stlWasSet || (_stlWasSet = 1, y = 0, Object(i.val) (_stlText, ''), Object(i.addClass) (_stlText, 'down'), _stlBack && (_stlBack = 0, Object(i.removeClass) (_stlText, 'back')))  : _tbLink.loc && (_stlBack || (_stlBack = 1, y = _tbLink.fast ? 1 : 0, Object(i.val) (_stlText, Object(c.getLang) ('global_back')), Object(i.addClass) (_stlText, 'back'), _stlWasSet && (_stlWasSet = 0, Object(i.removeClass) (_stlText, 'down'))))),
!1 !== y && Object(i.toggleClass) (_stlLeft, 'over_fast', Object(i.hasClass) (_stlLeft, 'over') && y);
var E = {
opacity: Math.min(Math.max(b, 0), 1)
};
vk.staticheader && (E.top = - Math.min(Object(i.getSize) ('page_header_cont') [1], n)),
Object(i.setStyle) (_stlLeft, E)
} else 0 !== _stlShown && (Object(i.hide) (_stlLeft, _stlSide), _stlShown = 0);
vk.id || (!_regBar && v ? (_regBar = 1, Object(i.val) (Object(i.ge) ('reg_bar_content'), cur._regBar), Object(a.animate) (Object(i.ge) ('reg_bar'), {
top: 0,
transition: a.Fx.Transitions.sineInOut
}, 400), Object(a.animate) (Object(i.ge) ('stl_bg'), {
paddingTop: 60,
transition: a.Fx.Transitions.sineInOut
}, 400))  : _regBar && !v && (_regBar = 0, Object(a.animate) (Object(i.ge) ('reg_bar'), {
top: - 56,
transition: a.Fx.Transitions.sineInOut
}, 400), Object(a.animate) (Object(i.ge) ('stl_bg'), {
paddingTop: 13,
transition: a.Fx.Transitions.sineInOut
}, 400)))
}
}
function u(t, e) {
if ((t = Object(i.ge) (t)) && !t.btnevents) if (Object(i.hasClass) (t, 'flat_button')) Object(s.isFunction) (e) && (t.onclick = e.pbind(t));
 else {
var r = t.parentNode;
if (Object(i.hasClass) (r, 'button_blue') || Object(i.hasClass) (r, 'button_gray')) Object(s.isFunction) (e) && (t.onclick = e.pbind(t));
 else {
var o = !1;
Object(n.addEvent) (t, 'click mousedown mouseover mouseout', function (s) {
if (!Object(i.hasClass) (r, 'locked')) switch (s.type) {
case 'click':
if (!o) return;
return t.className = 'button_hover',
e(t),
Object(n.cancelEvent) (s);
case 'mousedown':
t.className = 'button_down';
break;
case 'mouseover':
o = !0,
t.className = 'button_hover';
break;
case 'mouseout':
t.className = 'button',
o = !1
}
}), t.btnevents = !0
}
}
}
function p(t) {
var e = Object(i.ge) (t);
if (e) return Object(i.hasClass) (e, 'ui_actions_menu_item_lock')
}
function _(t) {
if ((t = Object(i.ge) (t)) && Object(i.hasClass) (t, 'ui_actions_menu_item') && !Object(i.hasClass) (t, 'ui_actions_menu_item_lock')) {
Object(i.data) (t, 'inner', t.innerHTML),
Object(i.addClass) (t, 'ui_actions_menu_item_lock');
var e = Object(i.ce) ('div', {
className: 'ui_actions_menu_item_lock_text'
});
Object(i.val) (e, t.innerHTML),
t.appendChild(e),
k(t)
}
}
function f(t) {
(t = Object(i.ge) (t)) && Object(i.hasClass) (t, 'ui_actions_menu_item') && Object(i.hasClass) (t, 'ui_actions_menu_item_lock') && (Object(i.removeClass) (t, 'ui_actions_menu_item_lock'), t.innerHTML = Object(i.data) (t, 'inner'))
}
function m(t) {
var e = Object(i.ge) (t);
if (e) return Object(i.hasClass) (e, 'link_lock')
}
function g(t, e) {
var r = Object(i.ge) (t);
r && 'a' === r.tagName.toLowerCase() && !m(r) && (Object(i.addClass) (r, 'link_lock'), e && Object(s.each) (e, (t, e) =>Object(i.addClass) (r, e)))
}
function v(t, e) {
var r = Object(i.ge) (t);
r && m(r) && (Object(i.removeClass) (r, 'link_lock'), e && Object(s.each) (e, (t, e) =>Object(i.removeClass) (r, e)))
}
function b(t) {
var e = Object(i.ge) (t);
if (e && ('button' === e.tagName.toLowerCase() || Object(i.hasClass) (e, 'flat_button') || Object(i.hasClass) (e, 'wr_header')) && !w(e)) {
var r = Object(i.getSize) (e);
Object(i.addClass) (e, 'flat_btn_lock'),
Object(i.data) (e, 'inner', e.innerHTML),
Object(i.setStyle) (e, {
width: r[0],
height: r[1]
}),
e.innerHTML = '',
k(e, 'btn_lock')
}
}
function y(t) {
var e = Object(i.ge) (t);
e && w(e) && (T(e), e.innerHTML = Object(i.data) (e, 'inner'), Object(i.removeClass) (e, 'flat_btn_lock'), Object(i.setStyle) (e, {
width: null,
height: null
}))
}
function E(t) {
return w(t)
}
function w(t) {
var e = Object(i.ge) (t);
if (e) return Object(i.hasClass) (e, 'flat_btn_lock')
}
function O(t, e) {
var r = Object(i.ge) (t);
if (r && 'button' === r.tagName.toLowerCase()) if (e) {
if (!Object(i.isVisible) (r)) return;
r.parentNode.insertBefore(Object(i.ce) ('button', {
innerHTML: r.innerHTML,
className: r.className + ' button_disabled'
}), r),
Object(i.hide) (r)
} else {
var n = Object(i.domPS) (r);
n && Object(i.hasClass) (n, 'button_disabled') && Object(i.re) (n),
Object(i.show) (r)
}
}
function P(t) {
if (void 0 === window._sbWidth || t) {
var e = Object(i.ce) ('div', {
innerHTML: '<div style="height: 75px;">1<br>1</div>'
}, {
overflowY: 'scroll',
position: 'absolute',
width: '50px',
height: '50px'
});
bodyNode.appendChild(e),
window._sbWidth = Math.max(0, e.offsetWidth - e.firstChild.offsetWidth - 1),
bodyNode.removeChild(e)
}
return window._sbWidth
}
function C(t) {
return t = Object(i.ge) (t),
Object(i.hasClass) (t, 'on') ? 1 : ''
}
function x(t, e) {
var r = Object(i.ge) (t);
if (r && !Object(i.hasClass) (r, 'disabled')) return void 0 === e && (e = !C(r)),
Object(i.toggleClass) (r, 'on', e),
r.setAttribute('aria-checked', e ? 'true' : 'false'),
!1
}
function A(t, e) {
return t = Object(i.ge) (t),
void 0 === e && (e = !Object(i.hasClass) (t, 'disabled')),
Object(i.toggleClass) (t, 'disabled', e),
'INPUT' === t.tagName && (e ? t.setAttribute('readonly', 'readonly')  : t.removeAttribute('readonly')),
!1
}
function M(t) {
return !!radioBtns[t] && radioBtns[t].val
}
function D(t, e, r) {
if (radioBtns[r] && !Object(i.hasClass) (t, 'disabled')) return Object(s.each) (radioBtns[r].els, function () {
this == t ? (Object(i.addClass) (this, 'on'), this.setAttribute('aria-checked', 'true'), this.setAttribute('tabindex', '0'))  : (Object(i.removeClass) (this, 'on'), this.setAttribute && (this.setAttribute('aria-checked', 'false'), this.setAttribute('tabindex', '-1')))
}),
radioBtns[r].val = e
}
function k(t, e, r, n) {
var s;
if (t = Object(i.ge) (t)) return Object(i.hasClass) (t, 'pr') ? s = t : (s = Object(i.se) (Object(i.rs) (vk.pr_tpl, {
id: e || '',
cls: r || ''
})), n ? Object(i.domInsertBefore) (s, t)  : t.appendChild(s)),
setTimeout(function () {
Object(i.setStyle) (s, {
opacity: 1
})
}),
s
}
function T(t) {
t && (Object(i.hasClass) (t, 'pr') ? Object(i.setStyle) (t, {
opacity: 0
})  : Object(i.re) (Object(i.geByClass1) ('pr', t)))
}
function j(t) {
Object(i.setStyle) (t, 'pointer-events', 'none')
}
function S(t) {
Object(i.setStyle) (t, 'pointer-events', '')
}
function I() {
window.__scrLeft = 0,
window.radioBtns = {
}
}
},
vKrd: function (t, e, r) {
var i = r('y3w9'),
n = r('0/R4'),
s = r('pbhE');
t.exports = function (t, e) {
if (i(t), n(e) && e.constructor === t) return e;
var r = s.f(t);
return (0, r.resolve) (e),
r.promise
}
},
vhPU: function (t, e) {
t.exports = function (t) {
if (null == t) throw TypeError('Can\'t call method on  ' + t);
return t
}
},
w2a5: function (t, e, r) {
var i = r('aCFj'),
n = r('ne8i'),
s = r('d/Gc');
t.exports = function (t) {
return function (e, r, o) {
var a,
l = i(e),
c = n(l.length),
h = s(o, c);
if (t && r != r) {
for (; c > h; ) if ((a = l[h++]) != a) return !0
} else for (; c > h; h++) if ((t || h in l) && l[h] === r) return t || h || 0;
return !t && - 1
}
}
},
wetz: function (t, e, r) {
'use strict';
r.r(e),
r.d(e, 'onDocumentClick', function () {
return u
}),
r.d(e, 'onEnter', function () {
return p
}),
r.d(e, 'onCtrlEnter', function () {
return _
}),
r.d(e, 'handleGlobalEsc', function () {
return f
}),
r.d(e, 'hideCookiesPolicy', function () {
return m
});
r('OG14'),
r('pIFo'),
r('SRfc');
var i = r('Egk5'),
n = r('zxIV'),
s = r('t7n3'),
o = r('/PiP'),
a = r('t/FQ'),
l = r('gdug'),
c = r('Xrg9'),
h = r('ErRf'),
d = r('cGUQ');
function u(t) {
if (function (t) {
var e = t.target || t.srcElement;
if (e && e.href) {
var r = e.href,
i = decodeURIComponent(r).match(/\/app6706576#(?:.+)product_id=(\d+)/);
if (i && i[1]) {
var n = '/away.php?to=' + encodeURIComponent(`https://aliexpress.com/item/${i[1]
}
.html`);
return '_blank' === e.getAttribute('target') ? window.open(n)  : window.location.href = n,
!0
}
}
return !1
}(t)) return !1;
if (Object(i.checkEvent) (t)) return !0;
if (c.default.set('last_reloaded', [
]),
!cur.onMouseClick || !cur.onMouseClick(t)) {
if (!(t = window.event || t.originalEvent || t)) return !0;
for (var e, r, o = 8, a = t.target || t.srcElement; a && a !== bodyNode && 'A' !== a.tagName && o--; ) a = a.parentNode;
if (!a || 'A' !== a.tagName || a.onclick || a.onmousedown) return !0;
var l = a.href;
if (l && (a.getAttribute('target') || nav.baseBlank)) {
if (domClosest('bookmarks_row_type_link', a)) {
var h = (nav.fromStr(l) || {
}).to;
statlogsValueEvent('bookmarks_product_analytics', {
link_url: h,
time: window.getServerTime()
})
}
return !0
}
if ('https:' !== location.protocol && !l.indexOf('https://')) return !0;
(l = l.replace(/^https?:\/\//i, '')).indexOf(location.hostname) || (l = l.replace(location.hostname, '')),
vk.dev && 'vk.com' === location.hostname && (l = l.replace(/^(vkontakte\.ru\/|vk\.com\/)/, '/'));
var u = {
};
(r = l.match(/^\/(.+?)#[\!\/](.+?)$/)) && !r[1].match(/^app(\d+)/) && (u.permanent = r[1], l = '/' + r[2]);
var p = !!(a.getAttribute && a.getAttribute('data-post-click-type') && a.getAttribute('data-post-id'));
if (l.match(/#$/) && !p) return !0;
var _,
f = Object(n.domData) (a, 'post-id');
f && (u.postId = f);
var m = l;
if (e = l.match(/^\/(.*?)(\?|#|$)/)) e = e[1];
 else {
if (a.hostname) _ = a.hostname,
e = a.pathname + a.search;
 else {
var g = /^([^:\/]+)?(?::(\d+))?(\/?[^#]*)(#?.*)$/i.exec(l);
if (!g) return !0;
_ = g[1],
e = g[3] || '/'
}
if (!_ || !p) return !0;
a.setAttribute('data-change-location-with-post-away', 1),
m = a
}
if ('add_community_app' === e) return Object(n.attr) (a, 'target', '_blank'),
!0;
if (e.indexOf('.php') > 0 || e.match(/^(doc\-?\d+_\d+|graffiti\d+|reg\d+|images\/|utils\/|\.js|js\/|\.css|css\/|source\b)/)) {
if (!p) return !0;
a.setAttribute('data-change-location-with-post-away', 1),
m = a
}
var v = a.getAttribute('hrefparams');
v && (u.params = Object(s.extend) (u.params || {
}, Object(d.fromQueryString) (v)));
try {
return nav.go(m, t, Object(s.extend) ({
}, u, {
throwErrorOnDisabledPath: !0
})),
Object(i.cancelEvent) (t)
} catch (t) {
return !0
}
}
}
function p(t, e) {
(e = e || window.event).keyCode === i.KEY.ENTER && (t(), Object(i.cancelEvent) (e))
}
function _(t, e) {
(10 === (t = t || window.event).keyCode || 13 === t.keyCode && (t.ctrlKey || t.metaKey && l.browser.mac)) && (e(), Object(i.cancelEvent) (t))
}
function f(t) {
if (window._wf = 1, t.keyCode === i.KEY.ESC && boxQueue.count() && !cur._noEscHide) return boxQueue.hideLast(),
- 1;
if (t.keyCode === i.KEY.ESC && window.articleCloseImageFullSize && window.articleCloseImageFullSize()) return Object(i.cancelEvent) (event);
if (t.keyCode === i.KEY.ESC && window.isArticleLayerOpen && window.isArticleLayerOpen()) return window.ArticleLayer.close(!0),
Object(i.cancelEvent) (event);
if (t.keyCode === i.KEY.ESC && window.AuthorPage) return window.AuthorPage.close(),
Object(i.cancelEvent) (event);
if (t.keyCode === i.KEY.ESC) return Object(h.cancelStackPop) (),
Object(i.cancelEvent) (t);
var e = [
176,
177,
178,
179
],
r = !1;
window.audioPlayer && (e.push(i.KEY.LEFT), e.push(i.KEY.RIGHT)),
Object(s.each) (e, function (e, i) {
if (t.keyCode === i) return r = !0,
!1
}),
r && Object(o.getAudioPlayer) ().onMediaKeyPressedEvent(t),
a.Chat.inited && 191 === t.keyCode && (t.ctrlKey || t.metaKey && l.browser.mac) && a.Chat.showFriends()
}
function m() {
Object(n.re) ('cookies_policy_wrap'),
ajax.post('/settings', {
act: 'a_hide_cookies_policy'
})
}
},
xk4V: function (t, e, r) {
var i = r('4fRq'),
n = r('I2ZF');
t.exports = function (t, e, r) {
var s = e && r || 0;
'string' == typeof t && (e = 'binary' === t ? new Array(16)  : null, t = null);
var o = (t = t || {
}).random || (t.rng || i) ();
if (o[6] = 15 & o[6] | 64, o[8] = 63 & o[8] | 128, e) for (var a = 0; a < 16; ++a) e[s + a] = o[a];
return e || n(o)
}
},
xpql: function (t, e, r) {
t.exports = !r('nh4g') && !r('eeVq') (function () {
return 7 != Object.defineProperty(r('Iw71') ('div'), 'a', {
get: function () {
return 7
}
}).a
})
},
y3w9: function (t, e, r) {
var i = r('0/R4');
t.exports = function (t) {
if (!i(t)) throw TypeError(t + ' is not an object!');
return t
}
},
yLpj: function (t, e) {
var r;
r = function () {
return this
}();
try {
r = r || new Function('return this') ()
} catch (t) {
'object' == typeof window && (r = window)
}
t.exports = r
},
ylqs: function (t, e) {
var r = 0,
i = Math.random();
t.exports = function (t) {
return 'Symbol('.concat(void 0 === t ? '' : t, ')_', (++r + i).toString(36))
}
},
yt8O: function (t, e, r) {
'use strict';
var i = r('nGyu'),
n = r('1TsA'),
s = r('hPIQ'),
o = r('aCFj');
t.exports = r('Afnz') (Array, 'Array', function (t, e) {
this._t = o(t),
this._i = 0,
this._k = e
}, function () {
var t = this._t,
e = this._k,
r = this._i++;
return !t || r >= t.length ? (this._t = void 0, n(1))  : n(0, 'keys' == e ? r : 'values' == e ? t[r] : [
r,
t[r]
])
}, 'values'),
s.Arguments = s.Array,
i('keys'),
i('values'),
i('entries')
},
zRwo: function (t, e, r) {
var i = r('6FMO');
t.exports = function (t, e) {
return new (i(t)) (e)
}
},
zhAb: function (t, e, r) {
var i = r('aagx'),
n = r('aCFj'),
s = r('w2a5') (!1),
o = r('YTvA') ('IE_PROTO');
t.exports = function (t, e) {
var r,
a = n(t),
l = 0,
c = [
];
for (r in a) r != o && i(a, r) && c.push(r);
for (; e.length > l; ) i(a, r = e[l++]) && (~s(c, r) || c.push(r));
return c
}
},
zxIV: function (t, e, r) {
'use strict';
r.r(e),
r.d(e, 'geById', function () {
return a
}),
r.d(e, '$', function () {
return l
}),
r.d(e, '$$', function () {
return c
}),
r.d(e, 'setInnerText', function () {
return h
}),
r.d(e, 'ge', function () {
return d
}),
r.d(e, 'geByTag', function () {
return u
}),
r.d(e, 'geByTag1', function () {
return p
}),
r.d(e, 'geByClass', function () {
return _
}),
r.d(e, 'geByClass1', function () {
return f
}),
r.d(e, 'gpeByClass', function () {
return m
}),
r.d(e, 'domQuery', function () {
return g
}),
r.d(e, 'domQuery1', function () {
return v
}),
r.d(e, 'domClosest', function () {
return b
}),
r.d(e, 'domClosestByTag', function () {
return y
}),
r.d(e, 'gpeByTag', function () {
return E
}),
r.d(e, 'ce', function () {
return w
}),
r.d(e, 'cf', function () {
return A
}),
r.d(e, 're', function () {
return M
}),
r.d(e, 'se', function () {
return D
}),
r.d(e, 'sech', function () {
return k
}),
r.d(e, 'rs', function () {
return T
}),
r.d(e, 'psr', function () {
return j
}),
r.d(e, 'domReplaceEl', function () {
return S
}),
r.d(e, 'domEL', function () {
return I
}),
r.d(e, 'domNS', function () {
return L
}),
r.d(e, 'domPS', function () {
return B
}),
r.d(e, 'domFC', function () {
return R
}),
r.d(e, 'domLC', function () {
return F
}),
r.d(e, 'domPN', function () {
return N
}),
r.d(e, 'domChildren', function () {
return W
}),
r.d(e, 'domInsertBefore', function () {
return V
}),
r.d(e, 'domInsertAfter', function () {
return U
}),
r.d(e, 'domByClass', function () {
return K
}),
r.d(e, 'domData', function () {
return H
}),
r.d(e, 'domChildIndex', function () {
return z
}),
r.d(e, 'domCA', function () {
return G
}),
r.d(e, 'domClosestSibling', function () {
return q
}),
r.d(e, 'matchesSelector', function () {
return X
}),
r.d(e, 'isHover', function () {
return Y
}),
r.d(e, 'isAncestor', function () {
return $
}),
r.d(e, 'getScroll', function () {
return Q
}),
r.d(e, 'domClosestPositioned', function () {
return Z
}),
r.d(e, 'domClosestOverflowHidden', function () {
return J
}),
r.d(e, 'show', function () {
return tt
}),
r.d(e, 'hide', function () {
return et
}),
r.d(e, 'isVisible', function () {
return rt
}),
r.d(e, 'clientHeight', function () {
return it
}),
r.d(e, 'getClientRectOffsetY', function () {
return nt
}),
r.d(e, 'toggle', function () {
return st
}),
r.d(e, 'boundingRectEnabled', function () {
return ot
}),
r.d(e, 'getXYRect', function () {
return at
}),
r.d(e, 'getXY', function () {
return lt
}),
r.d(e, 'isWindow', function () {
return ct
}),
r.d(e, 'getSize', function () {
return ht
}),
r.d(e, 'getW', function () {
return dt
}),
r.d(e, 'getH', function () {
return ut
}),
r.d(e, 'hasClass', function () {
return pt
}),
r.d(e, 'addClass', function () {
return _t
}),
r.d(e, 'addClassDelayed', function () {
return ft
}),
r.d(e, 'removeClass', function () {
return mt
}),
r.d(e, 'removeClassDelayed', function () {
return gt
}),
r.d(e, 'toggleClass', function () {
return vt
}),
r.d(e, 'toggleClassDelayed', function () {
return bt
}),
r.d(e, 'replaceClass', function () {
return yt
}),
r.d(e, 'getStyle', function () {
return Et
}),
r.d(e, 'setStyle', function () {
return wt
}),
r.d(e, 'setStyleDelayed', function () {
return Ot
}),
r.d(e, 'setPseudoStyle', function () {
return Pt
}),
r.d(e, 'data', function () {
return Ct
}),
r.d(e, 'attr', function () {
return xt
}),
r.d(e, 'removeAttr', function () {
return At
}),
r.d(e, 'removeData', function () {
return Mt
}),
r.d(e, 'cleanElems', function () {
return Dt
}),
r.d(e, 'setTitle', function () {
return kt
}),
r.d(e, 'getZoom', function () {
return Tt
}),
r.d(e, 'val', function () {
return jt
}),
r.d(e, 'elfocus', function () {
return St
}),
r.d(e, 'traverseParent', function () {
return It
}),
r.d(e, 'setDocumentTitle', function () {
return Bt
}),
r.d(e, 'lockDocumentTitle', function () {
return Rt
}),
r.d(e, 'initDomScripts', function () {
return Ft
}),
r.d(e, 'createElement', function () {
return Nt
});
r('KKXr'),
r('SRfc'),
r('a1Th'),
r('Btvt'),
r('Oyvg'),
r('pIFo');
var i = r('t7n3'),
n = r('Egk5'),
s = r('gdug'),
o = r('98sY');
function a(t) {
return document.getElementById(t)
}
function l(t, e) {
return (e || document).querySelector(t)
}
function c(t, e) {
return (e || document).querySelectorAll(t)
}
function h(t, e) {
t && (t.innerText = e)
}
var d = t=>'string' == typeof t || 'number' == typeof t ? document.getElementById(t)  : t;
function u(t, e) {
return (e = d(e) || document).getElementsByTagName(t)
}
function p(t, e) {
return (e = d(e) || document).querySelector && e.querySelector(t) || u(t, e) [0]
}
function _(t, e, r) {
return e = d(e) || document,
r = r || '*',
t = ('.' + t).replace(/\s+/gm, '.'),
Array.prototype.slice.call(e.querySelectorAll(r + t))
}
function f(t, e, r) {
return r = r || '*',
(e = d(e) || document).querySelector && e.querySelector(r + ('.' + t).replace(/\s+/gm, '.')) || _(t, e, r) [0]
}
function m(t, e, r) {
if (!(e = d(e))) return null;
for (; r !== e && (e = e.parentNode); ) if (pt(e, t)) return e;
return null
}
function g(t, e) {
return (e || document).querySelectorAll(t)
}
function v(t, e) {
return (e || document).querySelector(t)
}
function b(t, e) {
return pt(e, t) ? e : m(t, e)
}
function y(t, e) {
return t = t.toUpperCase(),
e.nodeType === Node.ELEMENT_NODE && e.tagName.toUpperCase() === t ? e : E(t, e)
}
function E(t, e) {
if (!(e = d(e))) return null;
for (t = t.toUpperCase(); e = e.parentNode; ) if (e.tagName && e.tagName.toUpperCase() === t) return e;
return null
}
function w(t, e, r) {
var n = document.createElement(t);
return e && Object(i.extend) (n, e),
r && wt(n, r),
n
}
var O,
P,
C,
x,
A = (O = document, P = O.createDocumentFragment(), C = O.createElement('div'), x = O.createRange && O.createRange(), P.appendChild(C), x && x.selectNodeContents(C), x && x.createContextualFragment ? t=>t ? x.createContextualFragment(t)  : O.createDocumentFragment()  : t=>{
if (!t) return O.createDocumentFragment();
C.innerHTML = t;
for (var e = O.createDocumentFragment(); C.firstChild; ) e.appendChild(C.firstChild);
return e
});
function M(t) {
return (t = d(t)) && t.parentNode && t.parentNode.removeChild(t),
t
}
var D = t=>R(w('div', {
innerHTML: t
})),
k = t=>W(w('div', {
innerHTML: t
}));
function T(t, e) {
return Object(i.each) (e, function (e, r) {
t = t.replace(new RegExp('%' + e + '%', 'g'), (void 0 === r ? '' : r).toString().replace(/\$/g, '&#036;'))
}),
t
}
function j(t) {
return 'https:' !== locProtocol ? t : t = (t = (t = (t = (t = t.replace(/http:\/\/(cs(\d+)\.vk\.me\/c(\d+)\/)/gi, 'https://$1')).replace(/http:\/\/cs(\d+)\.(userapi\.com|vk\.com|vk\.me|vkontakte\.ru)\/c(\d+)\/(v\d+\/|[a-z0-9\/_:\-]+\.jpg)/gi, 'https://pp.vk.me/c$3/$4')).replace(/http:\/\/cs(\d+)\.(userapi\.com|vk\.com|vk\.me|vkontakte\.ru)\/([a-z0-9\/_:\-]+\.jpg)/gi, 'https://pp.vk.me/c$1/$3')).replace(/http:\/\/cs(\d+)\.(userapi\.com|vk\.com|vk\.me|vkontakte\.ru)\//gi, 'https://ps.vk.me/c$1/')).replace(/http:\/\/video(\d+)\.vkadre\.ru\//gi, 'https://ps.vk.me/v$1/')
}
function S(t, e) {
return Object(i.isString) (e) && (e = D(e)),
N(t).replaceChild(e, t),
e
}
function I(t, e) {
for (e = e ? 'previousSibling' : 'nextSibling'; t && !t.tagName; ) t = t[e];
return t
}
var L = t=>I((t || {
}).nextSibling),
B = t=>I((t || {
}).previousSibling, 1),
R = t=>I((t || {
}).firstChild),
F = t=>I((t || {
}).lastChild, 1),
N = t=>(t || {
}).parentNode;
function W(t) {
for (var e = [
], r = t.childNodes, i = 0; i < r.length; i++) r[i].tagName && e.push(r[i]);
return e
}
function V(t, e) {
var r = N(e);
return r && r.insertBefore(t, e)
}
function U(t, e) {
var r = N(e);
return r && r.insertBefore(t, L(e))
}
function K(t, e) {
return t ? f(e, t)  : t
}
function H(t, e, r) {
return t ? void 0 !== r ? (null === r ? t.removeAttribute('data-' + e)  : t.setAttribute('data-' + e, r), r)  : t.getAttribute('data-' + e)  : null
}
function z(t) {
for (var e = 0; null != (t = B(t)); ) e++;
return e
}
function G(t, e) {
do {
t = N(t)
} while (t && !X(t, e));
return t
}
function q(t, e, r) {
for (var i = null; null === i && t; ) (t = - 1 === r ? B(t)  : L(t)) && X(t, e) && (i = t);
return i
}
function X(t, e) {
return !(!(t = d(t)) || t === document) && (t.matches || t.matchesSelector || t.mozMatchesSelector || t.msMatchesSelector || t.oMatchesSelector || t.webkitMatchesSelector || function (t) {
for (var e = (this.document || this.ownerDocument).querySelectorAll(t), r = e.length; --r >= 0 && e.item(r) !== this; );
return r > - 1
}).call(t, e)
}
function Y(t) {
return X(t, ':hover')
}
function $(t, e) {
var r = d(t);
if (e = d(e), !t || !e) return !1;
for (; r = r.parentNode; ) if (r === e) return !0;
return !1
}
function Q() {
var t = s.browser.msie6 ? d('PageContainer')  : document.body,
e = document.documentElement;
return [t.scrollLeft || e.scrollLeft || window.pageXOffset || 0,
t.scrollTop || e.scrollTop || window.pageYOffset || 0,
e.clientWidth || t.clientWidth || 0,
e.clientHeight || t.clientHeight || 0]
}
function Z(t, e) {
for (var r = (e = e || {
}).fromEl || N(t), n = e.positions || [
'relative',
'absolute',
'fixed'
]; r && r !== bodyNode; ) {
var s = Et(r, 'position');
if (Object(i.inArray) (s, n) && (!e.noOverflow || 'hidden' !== Et(r, 'overflow'))) break;
r = N(r)
}
return r
}
function J(t, e) {
for (var r, i, n, o = t = d(t), a = !1; o && o.tagName && o !== bodyNode; ) {
if (r = Et(o, 'position'), i = Et(o, 'overflow'), n = Et(o, 'transform'), e && s.browser.mozilla) {
if ('page_wrap' != o.id && o !== t && 'visible' !== i && ('static' === r ? !a || 'relative' === a : 'fixed' !== a)) break
} else if (o !== t && 'visible' !== i && ('static' === r ? !a || 'relative' === a : 'fixed' !== a)) break;
'none' !== n ? a = void 0 : 'static' !== r && 'fixed' !== a && (a = r),
o = N(o)
}
return o
}
function tt(t) {
var e = arguments.length;
if (e > 1) for (var r = 0; r < e; r++) tt(arguments[r]);
 else if ((t = d(t)) && t.style) {
var i = t.olddisplay,
n = t.tagName.toLowerCase(),
o = 'block';
t.style.display = i || '',
'none' === Et(t, 'display') && (o = pt(t, 'inline') || pt(t, '_inline') ? 'inline' : pt(t, '_inline_block') ? 'inline-block' : 'tr' !== n || s.browser.msie ? 'table' !== n || s.browser.msie ? 'block' : 'table' : 'table-row', t.style.display = t.olddisplay = o)
}
}
function et(t) {
var e = arguments.length;
if (e > 1) for (var r = 0; r < e; r++) et(arguments[r]);
 else if ((t = d(t)) && t.style) {
var i = Et(t, 'display');
t.olddisplay = 'none' !== i ? i : '',
t.style.display = 'none'
}
}
function rt(t) {
return !(!(t = d(t)) || !t.style) && 'none' !== Et(t, 'display')
}
function it() {
return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
}
function nt(t, e, r) {
r = r || 0;
var n = lt(t = d(t)) [1],
s = ht(t) [1],
o = window,
a = document.documentElement,
l = Math.max(Object(i.intval) (o.innerHeight), Object(i.intval) (a.clientHeight)),
c = d('page_header_cont'),
h = a.scrollTop || bodyNode.scrollTop || window.scrollY || 0,
u = vk.staticheader ? Math.max(0, ht(c) [1] - h)  : ht(c) [1];
if (e) {
if (n + s < h + u + r) return n + s - h - u - r;
if (n > h + l - r) return n - h - l + r
} else {
if (n < h + u + r) return n - h - u - r;
if (n + s > h + l - r) return n + s - h - l + r
}
return 0
}
function st(t, e) {
return void 0 === e && (e = !rt(t)),
e ? tt(t)  : et(t),
e
}
function ot(t) {
return void 0 !== t.getBoundingClientRect
}
function at(t, e) {
var r;
if (e && 'inline' === Et(t, 'display')) {
var i = t.getClientRects();
r = i && i[0] || t.getBoundingClientRect()
} else r = t.getBoundingClientRect();
return r
}
function lt(t, e) {
if (!(t = d(t))) return [0,
0];
var r = t.ownerDocument,
i = {
top: 0,
left: 0
};
if (!r) return [0,
0];
var n = r.documentElement;
ot(t) && (i = at(t, !0));
var s = r === r.window ? r : 9 === r.nodeType && (r.defaultView || r.parentWindow);
return [i.left + (e ? 0 : s.pageXOffset || n.scrollLeft) - (n.clientLeft || 0),
i.top + (e ? 0 : s.pageYOffset || n.scrollTop) - (n.clientTop || 0)]
}
function ct(t) {
return null != t && t === t.window
}
function ht(t, e, r) {
t = d(t);
var n,
s = document.documentElement,
o = [
0,
0
];
if (e && 'border-box' === Et(t, 'boxSizing') && (e = !1), t === document) o = [
Math.max(s.clientWidth, bodyNode.scrollWidth, s.scrollWidth, bodyNode.offsetWidth, s.offsetWidth),
Math.max(s.clientHeight, bodyNode.scrollHeight, s.scrollHeight, bodyNode.offsetHeight, s.offsetHeight)
];
 else if (t) {
function a() {
o = ot(t) && (n = at(t, r)) && void 0 !== n.width ? [
n.width,
n.height
] : [
t.offsetWidth,
t.offsetHeight
],
e && Object(i.each) (o, function (e, r) {
var n = e ? [
'Top',
'Bottom'
] : [
'Left',
'Right'
];
Object(i.each) (n, function () {
o[e] -= parseFloat(Et(t, 'padding' + this)) || 0,
o[e] -= parseFloat(Et(t, 'border' + this + 'Width')) || 0
})
})
}
if (rt(t)) a();
 else {
var l = {
position: 'absolute',
visibility: 'hidden',
display: 'block'
},
c = {
},
h = !1;
t.style.cssText.indexOf('!important') > - 1 && (h = t.style.cssText),
Object(i.each) (l, function (e, r) {
c[e] = t.style[e],
t.style[e] = r
}),
a(),
Object(i.each) (l, function (e, r) {
t.style[e] = c[e]
}),
h && (t.style.cssText = h)
}
}
return o
}
function dt(t) {
return ht(t) [0]
}
function ut(t) {
return ht(t) [1]
}
function pt(t, e) {
var r = d(t);
return r && 1 === r.nodeType && (' ' + r.className + ' ').replace(window.whitespaceRegex, ' ').indexOf(' ' + e + ' ') >= 0
}
function _t(t, e) {
var r = d(t);
r && !pt(r, e) && (r.className = (r.className ? r.className + ' ' : '') + e)
}
window.whitespaceRegex = /[\t\r\n\f]/g;
var ft = (t, e, r) =>{
r = Object(i.positive) (r),
setTimeout(_t.pbind(t, e), r)
};
function mt(t, e) {
var r = d(t);
r && (r.className = Object(i.trim) ((r.className || '').replace(new RegExp('(\\s|^)' + e + '(\\s|$)'), ' ')))
}
var gt = (t, e, r) =>{
r = Object(i.positive) (r),
setTimeout(mt.pbind(t, e), r)
};
function vt(t, e, r) {
return void 0 === r && (r = !pt(t, e)),
(r ? _t : mt) (t, e),
r
}
function bt(t, e, r, n) {
return n = Object(i.positive) (n),
void 0 === r && (r = !pt(t, e)),
(r ? ft : gt) (t, e, n),
r
}
function yt(t, e, r) {
mt(t, e),
_t(t, r)
}
function Et(t, e, r) {
if (t = d(t), Object(i.isArray) (e)) {
var n = {
};
return Object(i.each) (e, (e, r) =>n[r] = Et(t, r)),
n
}
if (!t) return '';
if (void 0 === r && (r = !0), !r && 'opacity' === e && s.browser.msie) {
var o = t.style.filter;
return o ? o.indexOf('opacity=') >= 0 ? parseFloat(o.match(/opacity=([^)]*)/) [1]) / 100 + '' : '1' : ''
}
if (!r && t.style && (t.style[e] || 'height' === e)) return t.style[e];
var a,
l = document.defaultView || window;
if (l.getComputedStyle) {
e = e.replace(/([A-Z])/g, '-$1').toLowerCase();
var c = l.getComputedStyle(t, null);
c && (a = c.getPropertyValue(e))
} else if (t.currentStyle) {
if ('opacity' === e && s.browser.msie) {
var h = t.currentStyle.filter;
return h && h.indexOf('opacity=') >= 0 ? parseFloat(h.match(/opacity=([^)]*)/) [1]) / 100 + '' : '1'
}
var u = e.replace(/\-(\w)/g, function (t, e) {
return e.toUpperCase()
});
'auto' === (a = t.currentStyle[e] || t.currentStyle[u]) && (a = 0),
a = (a + '').split(' '),
Object(i.each) (a, function (e, r) {
if (!/^\d+(px)?$/i.test(r) && /^\d/.test(r)) {
var i = t.style,
n = i.left,
s = t.runtimeStyle.left;
t.runtimeStyle.left = t.currentStyle.left,
i.left = r || 0,
a[e] = i.pixelLeft + 'px',
i.left = n,
t.runtimeStyle.left = s
}
}),
a = a.join(' ')
}
if (r && ('width' === e || 'height' === e)) {
var p = ht(t, !0) [{
width: 0,
height: 1
}
[
e
]];
a = (Object(i.intval) (a) ? Math.max(Object(i.floatval) (a), p)  : p) + 'px'
}
return a
}
function wt(t, e, r) {
if (t = d(t)) if (Object(i.isObject) (e)) Object(i.each) (e, (e, r) =>wt(t, e, r));
 else if ('opacity' === e) s.browser.msie && ((r + '').length ? t.style.filter = 1 !== r ? 'alpha(opacity=' + 100 * r + ')' : '' : t.style.cssText = t.style.cssText.replace(/filter\s*:[^;]*/gi, ''), t.style.zoom = 1),
t.style.opacity !== r && (t.style.opacity = r);
 else try {
var n = 'number' == typeof r;
n && /height|width/i.test(e) && (r = Math.abs(r)),
r = n && !/z-?index|font-?weight|opacity|zoom|line-?height/i.test(e) ? r + 'px' : r,
t.style[e] !== r && (t.style[e] = r)
} catch (t) {
Object(o.debugLog) ('setStyle error: ', [
e,
r
], t)
}
}
window.cssTransformProp = function () {
var t = document.createElement('div');
if (null == t.style.transform) {
var e = [
'Webkit',
'Moz',
'ms'
];
for (var r in e) if (void 0 !== t.style[e[r] + 'Transform']) return e[r] + 'Transform'
}
return 'transform'
}();
var Ot = (t, e, r) =>setTimeout(wt.pbind(t, e, r), 0);
function Pt(t, e, r) {
var n = Ct(t, 'pseudo-id');
n || (Ct(t, 'pseudo-id', n = Object(i.irand) (100000000, 999999999)), _t(t, '_pseudo_' + n));
var s = e + '-style-' + n,
o = d(s),
a = '._pseudo_' + n + ':' + e + '{';
o || (o = headNode.appendChild(w('style', {
id: s,
type: 'text/css'
}))),
Object(i.each) (r, function (t, e) {
a += t + ': ' + e + ' !important;'
}),
a += '}',
o.sheet ? (o.sheet.cssRules.length && o.sheet.deleteRule(0), o.sheet.insertRule(a, 0))  : o.styleSheet && (o.styleSheet.cssText = a)
}
function Ct(t, e, r) {
if (!t) return !1;
var i = t[vkExpand];
return i || (i = t[vkExpand] = ++vkUUID),
void 0 !== r && (vkCache[i] || (vkCache[i] = {
}, window.__debugMode && (vkCache[i].__elem = t)), vkCache[i][e] = r),
e ? vkCache[i] && vkCache[i][e] : i
}
function xt(t, e, r) {
return t = d(t),
void 0 === r ? t.getAttribute(e)  : (t.setAttribute(e, r), r)
}
function At(t) {
for (var e = 0, r = arguments.length; e < r; ++e) {
var i = arguments[e];
if (void 0 !== t[i]) try {
delete t[i]
} catch (e) {
try {
t.removeAttribute(i)
} catch (t) {
}
}
}
}
function Mt(t, e) {
var r = !!t && t[vkExpand];
if (r) if (e) {
if (vkCache[r]) {
delete vkCache[r][e],
e = '';
var i = 0;
for (var s in vkCache[r]) if ('__elem' !== s) {
i++;
break
}
i || Mt(t)
}
} else Object(n.removeEvent) (t),
At(t, vkExpand),
delete vkCache[r]
}
function Dt() {
for (var t = arguments, e = 0; e < t.length; ++e) {
var r = d(t[e]);
r && (Mt(r), At(r, 'btnevents'))
}
}
function kt(t, e, r) {
if ((t = d(t)) && !t.titleSet) {
if (e || (e = t), e.scrollWidth > e.clientWidth || e.scrollHeight > e.clientHeight) t.setAttribute('title', r || t.innerText || t.textContent);
 else {
var i = p('b', t);
i && (i.scrollWidth > i.clientWidth || i.scrollHeight > i.clientHeight) ? t.setAttribute('title', r || t.innerText || t.textContent)  : t.removeAttribute('title')
}
t.titleSet = 1
}
}
function Tt() {
var t = d('zoom_test_1') || document.body.appendChild(w('div', {
id: 'zoom_test_1'
}, {
left: '10%',
position: 'absolute',
visibility: 'hidden'
}));
return (d('zoom_test_2') || document.body.appendChild(w('div', {
id: 'zoom_test_2'
}, {
left: t.offsetLeft + 'px',
position: 'absolute',
visibility: 'hidden'
}))).offsetLeft / t.offsetLeft
}
function jt(t, e, r) {
if (t = d(t)) return void 0 !== e && (t.setValue ? (t.setValue(e), !r && t.phonblur && t.phonblur())  : 'INPUT' === t.tagName || 'TEXTAREA' === t.tagName ? t.value = e : void 0 !== t.emojiId && window.Emoji ? Emoji.val(t, e)  : t.innerHTML = e, !r && Object(n.triggerEvent) (t, 'valueChanged')),
t.getValue ? t.getValue()  : ('INPUT' === t.tagName || 'TEXTAREA' === t.tagName ? t.value : t.innerHTML) || ''
}
function St(t, e, r) {
t = d(t);
try {
if (t.focus(), void 0 !== e && !1 !== e || (e = t.value.length), void 0 !== r && !1 !== r || (r = e), t.setSelectionRange) t.setSelectionRange(e, r);
 else if (window.getSelection && document.createRange) {
var i = document.createRange();
i.selectNodeContents(t),
i.collapse(!1);
var n = window.getSelection();
n.removeAllRanges(),
n.addRange(i)
}
} catch (t) {
}
}
function It(t, e, r) {
for (t = d(t), r = r || 999; t && !e(t); ) {
if (0 === --r) return !1;
try {
if ((t = N(t)) === document) return !1
} catch (e) {
t = !1
}
}
return t
}
var Lt = !1;
function Bt(t) {
if (!Lt) return window.document.title = Object(i.replaceEntities) (t)
}
function Rt(t) {
Lt = t,
t && window.cur && window.cur.destroy.push(() =>{
Rt(!1)
})
}
function Ft() {
window.vkExpand = window.vkExpand || 'VK' + Object(i.vkNow) (),
window.vkUUID = window.vkUUID || 0,
window.vkCache = window.vkCache || {
}
}
var Nt = w
}
}
]);
try {
stManager.done('cmodules/bundles/common.923f11830daa24643a61.js')
} catch (t) {
}
