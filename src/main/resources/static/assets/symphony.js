"use strict";
var _typeof =
  "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
    ? function (e) {
        return typeof e;
      }
    : function (e) {
        return e &&
          "function" == typeof Symbol &&
          e.constructor === Symbol &&
          e !== Symbol.prototype
          ? "symbol"
          : typeof e;
      };
!(function (e) {
  var t,
    n,
    i = !1;
  "function" == typeof define && define.amd && (define(e), (i = !0)),
    "object" ===
      ("undefined" == typeof exports ? "undefined" : _typeof(exports)) &&
      ((module.exports = e()), (i = !0)),
    i ||
      ((t = window.Cookies),
      ((n = window.Cookies = e()).noConflict = function () {
        return (window.Cookies = t), n;
      }));
})(function () {
  function m() {
    for (var e = 0, t = {}; e < arguments.length; e++) {
      var n = arguments[e];
      for (var i in n) t[i] = n[i];
    }
    return t;
  }
  return (function e(u) {
    function f(e, t, n) {
      var i, a;
      if ("undefined" != typeof document) {
        if (1 < arguments.length) {
          "number" == typeof (n = m({ path: "/" }, f.defaults, n)).expires &&
            ((a = new Date()).setMilliseconds(
              a.getMilliseconds() + 864e5 * n.expires
            ),
            (n.expires = a));
          try {
            (i = JSON.stringify(t)), /^[\{\[]/.test(i) && (t = i);
          } catch (e) {}
          return (
            (t = u.write
              ? u.write(t, e)
              : encodeURIComponent(String(t)).replace(
                  /%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
                  decodeURIComponent
                )),
            (e = (e = (e = encodeURIComponent(String(e))).replace(
              /%(23|24|26|2B|5E|60|7C)/g,
              decodeURIComponent
            )).replace(/[\(\)]/g, escape)),
            (document.cookie = [
              e,
              "=",
              t,
              n.expires ? "; expires=" + n.expires.toUTCString() : "",
              n.path ? "; path=" + n.path : "",
              n.domain ? "; domain=" + n.domain : "",
              n.secure ? "; secure" : "",
            ].join(""))
          );
        }
        e || (i = {});
        for (
          var o = document.cookie ? document.cookie.split("; ") : [],
            r = /(%[0-9A-Z]{2})+/g,
            l = 0;
          l < o.length;
          l++
        ) {
          var c = o[l].split("=");
          '"' === (d = c.slice(1).join("=")).charAt(0) && (d = d.slice(1, -1));
          try {
            var s = c[0].replace(r, decodeURIComponent),
              d = u.read
                ? u.read(d, s)
                : u(d, s) || d.replace(r, decodeURIComponent);
            if (this.json)
              try {
                d = JSON.parse(d);
              } catch (e) {}
            if (e === s) {
              i = d;
              break;
            }
            e || (i[s] = d);
          } catch (e) {}
        }
        return i;
      }
    }
    return (
      ((f.set = f).get = function (e) {
        return f.call(f, e);
      }),
      (f.getJSON = function () {
        return f.apply({ json: !0 }, [].slice.call(arguments));
      }),
      (f.defaults = {}),
      (f.remove = function (e, t) {
        f(e, "", m(t, { expires: -1 }));
      }),
      (f.withConverter = e),
      f
    );
  })(function () {});
}),
  document.addEventListener("DOMContentLoaded", function () {
    var n = [].slice.call(
        document.querySelectorAll(
          ".lazyload, .lazybg, .lazyinlinebg, .animate-fade"
        ) || []
      ),
      i = !1;
    function a() {
      i ||
        ((i = !0),
        n.forEach(function (t) {
          var e = t.getBoundingClientRect();
          e.top <= window.innerHeight &&
            0 <= e.bottom &&
            (t.classList.contains("lazyload") &&
              (t.classList.contains("lazyinlinebg")
                ? (t.style.backgroundImage = "url(" + t.dataset.srcset + ")")
                : (t.src = t.dataset.srcset)),
            t.classList.add("visible"),
            t.classList.contains("animate-fade") && t.classList.add("fade-in"),
            (n = n.filter(function (e) {
              return t !== e;
            }))),
            0 === n.length &&
              (document.removeEventListener("scroll", a),
              window.removeEventListener("resize", a),
              window.removeEventListener("orientationchange", a)),
            (i = !1);
        }));
    }
    0 < n.length &&
      (document.addEventListener("scroll", a),
      window.addEventListener("resize", a),
      window.addEventListener("orientationchange", a)),
      a();
  });
var datePickerLabel,
  _typeof =
    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
      ? function (e) {
          return typeof e;
        }
      : function (e) {
          return e &&
            "function" == typeof Symbol &&
            e.constructor === Symbol &&
            e !== Symbol.prototype
            ? "symbol"
            : typeof e;
        };
document.addEventListener("DOMContentLoaded", function () {
  var u;
  function c(e, t) {
    var n = !1,
      i = e.getAttribute("class"),
      a = !0;
    e.parentElement.classList.contains("hidden") && (a = !1);
    var o,
      r,
      l,
      c,
      s,
      d = e.getAttribute("name");
    return (
      void 0 !== d && d && (d = (d = d.replace("]", "")).replace("[", "")),
      a &&
      "-1" == i.indexOf("check-required") &&
      (("" == e.value &&
        ("text" == e.getAttribute("type") || "textarea" == e.tagName)) ||
        ("checkbox" == e.getAttribute("type") &&
          ((r = e),
          (l = d),
          (c = !1),
          !(1 < (s = t.querySelectorAll('*[name="' + l + '"]')).length
            ? (s.forEach(function (e) {
                e.checked && (c = !0);
              }),
              c)
            : r.checked))) ||
        ("radio" == e.getAttribute("type") &&
          !(function (e) {
            var t = !0;
            if (
              1 <
              document.querySelectorAll(
                'input[name="' + e.getAttribute("name") + '"]'
              ).length
            ) {
              if (
                (document
                  .querySelectorAll(
                    'input[name="' + e.getAttribute("name") + '"]'
                  )
                  .forEach(function (e) {
                    e.checked && (t = !1);
                  }),
                !t)
              )
                return 1;
            } else if (e.checked) return 1;
          })(e)) ||
        ("email" == e.getAttribute("type") &&
          !(function (e) {
            var t =
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              n = e.value;
            {
              if (
                !0 !== Boolean(e.dataset.validate) ||
                !0 !== t.test(String(n).toLowerCase())
              )
                return t.test(String(n).toLowerCase());
              var i = e.dataset.id_validate;
              return document.getElementById(i).value === n;
            }
          })(e)) ||
        ("url" == e.getAttribute("type") && !f(e)) ||
        ("date" == e.getAttribute("type") && "" == e.value) ||
        ("time" == e.getAttribute("type") && "" == e.value) ||
        ("number" == e.getAttribute("type") && "" == e.value) ||
        ("tel" == e.getAttribute("type") && "" == e.value) ||
        ("file" == e.getAttribute("type") &&
          "" == e.value &&
          null == e.getAttribute("multiple")) ||
        ("file" == e.getAttribute("type") &&
          0 == e.files.length &&
          "multiple" == e.getAttribute("multiple")) ||
        ("SELECT" == e.tagName && "" == e.value) ||
        ("TEXTAREA" == e.tagName && "" == e.value))
        ? (u &&
            "undefined" == typeof form_error_scroll &&
            (window.scrollTo({
              top: e.getBoundingClientRect().top + window.scrollY,
              behavior: "smooth",
            }),
            (u = !1)),
          e.classList.add("error"),
          0 < e.parentElement.querySelectorAll("#_" + d + "-error").length &&
            e.parentElement
              .querySelectorAll("#_" + d + "-error")
              .forEach(function (e) {
                e.remove();
              }),
          "url" != e.getAttribute("type") || f(e)
            ? "radio" == e.getAttribute("type") ||
              "checkbox" == e.getAttribute("type")
              ? e.insertAdjacentHTML(
                  "afterend",
                  '<label id="_' +
                    d +
                    '-error" class="error" for="' +
                    d +
                    '">' +
                    m("This field is required.") +
                    "</label>"
                )
              : "email" == e.getAttribute("type") &&
                !0 === Boolean(e.dataset.validate)
              ? e.insertAdjacentHTML(
                  "afterend",
                  '<label id="_' +
                    d +
                    '-error" class="error" for="' +
                    d +
                    '">' +
                    m("Email and confirmation email must be the same.") +
                    "</label>"
                )
              : ((o = m("This field is required.")),
                0 < e.value.length &&
                  "email" == e.getAttribute("type") &&
                  (o = m("Invalid Email")),
                e.insertAdjacentHTML(
                  "afterend",
                  '<label id="_' +
                    d +
                    '-error" class="error" for="' +
                    d +
                    '">' +
                    o +
                    "</label>"
                ))
            : "" == e.value.trim()
            ? e.insertAdjacentHTML(
                "afterend",
                '<label id="_' +
                  d +
                  '-error" class="error" for="' +
                  d +
                  '">' +
                  m("This field is required.") +
                  "</label>"
              )
            : e.insertAdjacentHTML(
                "afterend",
                '<label id="_' +
                  d +
                  '-error" class="error" for="' +
                  d +
                  '">' +
                  m("Please enter a valid URL, starting with 'https://'") +
                  "</label>"
              ),
          (n = !0))
        : "-1" != i.indexOf("check-required") && a
        ? ((n = !0),
          e.querySelectorAll("input").forEach(function (e) {
            e.checked && (n = !1);
          }),
          n
            ? 0 ==
                e.parentElement.querySelectorAll("#_" + d + "-error").length &&
              0 ==
                e.parentElement.querySelectorAll("[class*='error']").length &&
              ("radio" == e.getAttribute("type") || e.getAttribute("type"),
              e.insertAdjacentHTML(
                "afterend",
                '<label id="_' +
                  d +
                  '-error" class="error" for="' +
                  d +
                  '">' +
                  m("This field is required.") +
                  "</label>"
              ))
            : (e.querySelectorAll("[class*='error']").forEach(function (e) {
                e.remove();
              }),
              e.parentElement
                .querySelectorAll("[class*='error']")
                .forEach(function (e) {
                  e.remove();
                })))
        : (e.classList.remove("error"),
          e.parentElement.querySelector("#_" + d + "-error") &&
            e.parentElement.querySelector("#_" + d + "-error").remove(),
          e.parentElement
            .querySelectorAll("*[class*='-error']")
            .forEach(function (e) {
              e.remove();
            })),
      n
    );
  }
  function f(e) {
    var t = e.value;
    return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(
      t
    );
  }
  function m(e) {
    switch (langSelected) {
      case "ar":
        if ("This field is required." == e) return "هذه الخانة مطلوبه.";
        if ("Email and confirmation email must be the same." == e)
          return "يجب أن يكون البريد الإلكتروني والبريد الإلكتروني للتأكيد متماثلين.";
        if ("Please enter a valid URL, starting with 'https://'" == e)
          return "يُرجى إدخال عنوان URL صالح يبدأ بـ 'https://'";
        if ("Invalid Email" == e) return "البريد الإلكتروني غير صالح.";
        break;
      case "es":
        if ("This field is required." == e) return "Este campo es requerido.";
        if ("Email and confirmation email must be the same." == e)
          return "El correo electrónico y el correo electrónico de confirmación deben ser iguales.";
        if ("Please enter a valid URL, starting with 'https://'" == e)
          return "Introduzca una URL válida que comience con 'https://'";
        if ("Invalid Email" == e) return "Email inválido.";
        break;
      case "it":
        if ("This field is required." == e)
          return "Questo campo è obbligatorio.";
        if ("Email and confirmation email must be the same." == e)
          return "L'e-mail e l'e-mail di conferma devono coincidere.";
        if ("Please enter a valid URL, starting with 'https://'" == e)
          return "Inserite un URL valido che inizi con ‘https://’";
        if ("Invalid Email" == e) return "E-mail non valido.";
        break;
      case "fr":
        if ("This field is required." == e) return "Ce champ est requis.";
        if ("Email and confirmation email must be the same." == e)
          return "L'e-mail et l'e-mail de confirmation doivent être identiques.";
        if ("Please enter a valid URL, starting with 'https://'" == e)
          return "Veuillez saisir une URL valide commençant par « https:// »";
        if ("Invalid Email" == e) return "Adresse e-mail invalide.";
        break;
      case "de":
        if ("This field is required." == e) return "Dieses Feld wird benötigt.";
        if ("Email and confirmation email must be the same." == e)
          return "E-Mail und Bestätigungs-E-Mail müssen identisch sein.";
        if ("Please enter a valid URL, starting with 'https://'" == e)
          return "Bitte geben Sie eine gültige URL beginnend mit 'https://' ein.";
        if ("Invalid Email" == e) return "Ungültige E-Mail.";
        break;
      case "ru":
        if ("This field is required." == e)
          return "Это поле обязательно к заполнению.";
        if ("Email and confirmation email must be the same." == e)
          return "Электронная почта и электронное письмо с подтверждением должны совпадать.";
        if ("Please enter a valid URL, starting with 'https://'" == e)
          return "Введите действительный URL-адрес, который начинается с «https://»";
        if ("Invalid Email" == e)
          return "Неправильный адрес электронной почты.";
        break;
      case "pt":
        if ("This field is required." == e) return "Este campo é obrigatório.";
        if ("Email and confirmation email must be the same." == e)
          return "Email e email de confirmação devem ser os mesmos.";
        if ("Please enter a valid URL, starting with 'https://'" == e)
          return "Por favor, insira um URL válido.";
        if ("Invalid Email" == e) return "E-mail inválido.";
        break;
      case "tr":
        if ("This field is required." == e) return "Bu alan gereklidir.";
        if ("Email and confirmation email must be the same." == e)
          return "E-posta ve onay e-postası aynı olmalıdır.";
        if ("Please enter a valid URL, starting with 'https://'" == e)
          return "Lütfen 'https://' ile başlayan geçerli bir URL girin.";
        if ("Invalid Email" == e) return "Gecersiz e-posta adresi.";
        break;
      case "nl":
        if ("This field is required." == e) return "Dit veld is verplicht.";
        if ("Email and confirmation email must be the same." == e)
          return "Dit e-mailadres staat al in ons archief.";
        if ("Please enter a valid URL, starting with 'https://'" == e)
          return "Voer een geldige URL in die begint met 'https://'";
        if ("Invalid Email" == e) return "Ongeldig e-mailadres.";
        break;
      case "pl":
        if ("This field is required." == e) return "To pole jest wymagan.";
        if ("Email and confirmation email must be the same." == e)
          return "Ten adres e-mail już figuruje w naszej bazie.";
        if ("Please enter a valid URL, starting with 'https://'" == e)
          return "Wprowadź prawidłowy adres URL rozpoczynający się od „https://”";
        if ("Invalid Email" == e) return "Nieprawidłowy adres email.";
        break;
      case "en":
      default:
        return e;
    }
  }
  window.callbackFormValidate = function (n) {
    var e,
      t,
      i,
      a = n,
      o = !1,
      r = n.formElement;
    if ("object" === _typeof(a.rules))
      for (var l in a.rules) {
        a.rules.hasOwnProperty(l) &&
          ((e = (e = l.replace("]", "")).replace("[", "")),
          (t = r.querySelectorAll('input[name="' + e + '"]')),
          (i = r.querySelector("#" + e)),
          t.forEach(function (e) {
            e.classList.add("required");
          }),
          i && i.classList.add("required"));
      }
    r.querySelectorAll(".required, .check-required").forEach(function (e, t) {
      e.addEventListener("change", function () {
        var e = c(this, r);
        e && (o = e);
      }),
        e.addEventListener("keyup", function () {
          var e = c(this, r);
          e && (o = e);
        });
    }),
      n.formElement.addEventListener("submit", function (e) {
        e.preventDefault();
        var t = n.formElement;
        return (
          (u = !(o = !1)),
          r
            .querySelectorAll(".required, .check-required")
            .forEach(function (e, t) {
              var n = c(e, r);
              n && (o = n);
            }),
          o || (0, a.submitHandler)(t),
          !1
        );
      });
  };
}),
  window.jQuery &&
    void 0 !== jQuery.ui &&
    ((datePickerLabel = function (e, t) {
      var n,
        i,
        a,
        o,
        r,
        l,
        c = e.length,
        s = t.length;
      0 < c &&
        0 < s &&
        ((n = Math.floor(5 * Math.random() + 0)),
        (i = Math.floor(10 * Math.random() + 6)),
        (a = e
          .find(".ui-datepicker-month")
          .attr("id", "ui-datepicker-month" + n)),
        (o = t
          .find(".ui-datepicker-month")
          .attr("id", "ui-datepicker-month" + i)),
        (r = a.attr("id")),
        (l = o.attr("id")),
        $(".ui-datepicker-title").prepend("<label hidden>select date</label>"),
        e.find(".ui-datepicker-title label").attr("for", r),
        t.find(".ui-datepicker-title label").attr("for", l));
    })($("#CheckIn"), $("#CheckOut")),
    setTimeout(function () {
      $(".hasDatepicker").each(function (e) {
        $(this).attr("autocomplete", "off");
      });
    }, 3e3));
var _responsive,
  firstEntry = !1;
function scrollDownAction(e, t) {
  var n,
    i,
    a = document.querySelector(".js-scroll-logo img") || [];
  0 !== a.length &&
    ((n = a.src || []), (i = a.getAttribute("data-scroll") || []));
  var o = document.querySelector("header");
  firstEntry ||
    (console.log(i.length),
    0 < i.length
      ? window.addEventListener("scroll", function () {
          pageYOffset > e
            ? (o.classList.add(t), (a.src = i))
            : (o.classList.remove(t), (a.src = n));
        })
      : window.addEventListener("scroll", function () {
          pageYOffset > e ? o.classList.add(t) : o.classList.remove(t);
        }),
    (firstEntry = !0));
}
// function _get_form_token() {
//   fetch(site_url + "/ajax/functions.php?operation=_get_form_token")
//     .then(function (e) {
//       if (!e.ok) throw new Error("Request token failed");
//       return e.text();
//     })
//     .then(function (t) {
//       document
//         .querySelectorAll("input[name=_token][type=hidden]")
//         .forEach(function (e) {
//           e.value = t;
//         });
//     })
//     .catch(function (e) {
//       console.error("Error getting token:", e);
//     });
// }
function decorateUrlGA4(e) {
  var t,
    n =
      ((t = { _ga: i("_ga"), _gac: void 0, _gid: i("_gid") }),
      [
        "1",
        (function (e, t) {
          var n,
            i = function (e) {
              Ne.set(e);
            };
          for (
            e = [
              window.navigator.userAgent,
              new Date().getTimezoneOffset(),
              window.navigator.userLanguage || window.navigator.language,
              Math.floor(new Date().getTime() / 60 / 1e3) -
                (void 0 === t ? 0 : t),
              e,
            ].join("*"),
              i = t = i,
              t = 4294967295,
              n = 0;
            n < e.length;
            n++
          )
            t = (t >>> 8) ^ i[255 & (t ^ e.charCodeAt(n))];
          return ((-1 ^ t) >>> 0).toString(36);
        })(),
        "_ga",
        a(t._ga),
        "_gid",
        a(t._gid),
      ].join("*"));
  function i(e) {
    var t = document.cookie.match(new RegExp(e + "=([^;]+)"));
    return t ? t[1].match(/GA1\.[0-9]\.(.+)/)[1] : void 0;
  }
  function a(e) {
    var s;
    return (function (e) {
      (s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_."),
        0;
      for (var t = [], n = 0; n < e.length; n += 3) {
        var i = n + 1 < e.length,
          a = n + 2 < e.length,
          o = e.charCodeAt(n),
          r = i ? e.charCodeAt(n + 1) : 0,
          l = a ? e.charCodeAt(n + 2) : 0,
          c = o >> 2,
          o = ((3 & o) << 4) | (r >> 4),
          r = ((15 & r) << 2) | (l >> 6);
        (l &= 63),
          a || ((l = 64), i || (r = 64)),
          t.push(s[c], s[o], s[r], s[l]);
      }
      return t.join("");
    })(String(e));
  }
  var o = new URL(e);
  return o.searchParams.append("_gl", n), o.toString();
}
// "undefined" != typeof responsive && (_responsive = responsive),
//   window.addEventListener("load", function () {
//     var e = !1;
//     window.addEventListener("resize", function () {
//       window.innerWidth < 768 &&
//         !e &&
//         !_responsive &&
//         ((document.cookie = "forceMobile=1; path=/"),
//         (e = !0),
//         console.log("redirecting..."),
//         (window.location = window.location));
//     }),
//       "undefined" != typeof ScrollMagic &&
//         setTimeout(function () {
//           var t = new ScrollMagic.Controller(),
//             e = document.querySelectorAll(".animate-fade");
//           0 < e.length &&
//             e.forEach(function (e) {
//               new ScrollMagic.Scene({
//                 triggerElement: e.children[0],
//                 triggerHook: 0.9,
//                 reverse: !1,
//               })
//                 .setClassToggle(e, "fade-in")
//                 .addTo(t);
//             });
//         }, 500),
//       _get_form_token();
//   }),
//   window.jQuery &&
//     window.addEventListener("load", function () {
//       "function" == typeof $.fancybox &&
//         ($(".fancybox").fancybox({
//           padding: 0,
//           beforeShow: function () {
//             var e = $(this.element).find("img").attr("alt"),
//               t = $(this.element).data("alt");
//             e
//               ? $(".fancybox-image").attr("alt", e)
//               : t && $(".fancybox-image").attr("alt", t);
//           },
//           afterLoad: function () {
//             $("html").addClass("fancybox-lock");
//           },
//           afterClose: function () {
//             $("html").removeClass("fancybox-lock");
//           },
//         }),
//         $(".fancybox_iframe").fancybox({
//           type: "iframe",
//           scrolling: "no",
//           titleShow: !1,
//           padding: 0,
//         }),
//         $(".fancybox_inline").fancybox({
//           type: "inline",
//           scrolling: "no",
//           titleShow: !1,
//           padding: 0,
//         }),
//         $(".fancybox_youtube").click(function () {
//           return (
//             $.fancybox({
//               padding: 0,
//               autoScale: !1,
//               transitionIn: "none",
//               transitionOut: "none",
//               title: this.title,
//               width: 680,
//               height: 495,
//               href: this.href.replace(new RegExp("watch\\?v=", "i"), "v/"),
//               type: "swf",
//               swf: { wmode: "transparent", allowfullscreen: "true" },
//             }),
//             !1
//           );
//         })),
//         $(".scroll").click(function () {
//           var e = $(this).attr("href");
//           return (
//             $("html, body").animate(
//               { scrollTop: $(e).offset().top - $("header").height() },
//               1e3
//             ),
//             !1
//           );
//         }),
//         void 0 !== jQuery.ui && $(".datepicker").datepicker(),
//         void 0 !== jQuery.ui &&
//           $("#booking-form, #booking-form2").submit(function () {
//             var e = "#" + $(this).attr("id"),
//               i = [],
//               t = {};
//             $(".hasDatepicker", $(e)).each(function (e, t) {
//               var n = $(t).val();
//               i.push(n);
//             }),
//               (t.operation = "process_checkout"),
//               (t.checkin = i[0]),
//               (t.checkout = i[1]),
//               (t.device = "D"),
//               (t.raw = $(e).serialize()),
//               $.post(
//                 site_url + "ajax/functions.php",
//                 t,
//                 function (e) {},
//                 "json"
//               );
//           });
//     }),
  window.addEventListener("keydown", function (e) {
    var t;
    "Tab" !== e.key ||
      document.activeElement !== document.body ||
      ((t = document.querySelector("#start-content")) &&
        (t.setAttribute("tabindex", "0"), t.focus()));
  });
_typeof =
  "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
    ? function (e) {
        return typeof e;
      }
    : function (e) {
        return e &&
          "function" == typeof Symbol &&
          e.constructor === Symbol &&
          e !== Symbol.prototype
          ? "symbol"
          : typeof e;
      };
!(function (e, t) {
  "object" ==
    ("undefined" == typeof exports ? "undefined" : _typeof(exports)) &&
  "undefined" != typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define(t)
    : ((e =
        "undefined" != typeof globalThis ? globalThis : e || self).flatpickr =
        t());
})(void 0, function () {
  var ee = function () {
    return (ee =
      Object.assign ||
      function (e) {
        for (var t, n = 1, i = arguments.length; n < i; n++)
          for (var a in (t = arguments[n]))
            Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
        return e;
      }).apply(this, arguments);
  };
  function te() {
    for (var e = 0, t = 0, n = arguments.length; t < n; t++)
      e += arguments[t].length;
    for (var i = Array(e), a = 0, t = 0; t < n; t++)
      for (var o = arguments[t], r = 0, l = o.length; r < l; r++, a++)
        i[a] = o[r];
    return i;
  }
  var ne = [
      "onChange",
      "onClose",
      "onDayCreate",
      "onDestroy",
      "onKeyDown",
      "onMonthChange",
      "onOpen",
      "onParseConfig",
      "onReady",
      "onValueUpdate",
      "onYearChange",
      "onPreCalendarPosition",
    ],
    ie = {
      _disable: [],
      allowInput: !1,
      allowInvalidPreload: !1,
      altFormat: "F j, Y",
      altInput: !1,
      altInputClass: "form-control input",
      animate:
        "object" ==
          ("undefined" == typeof window ? "undefined" : _typeof(window)) &&
        -1 === window.navigator.userAgent.indexOf("MSIE"),
      ariaDateFormat: "F j, Y",
      autoFillDefaultTime: !0,
      clickOpens: !0,
      closeOnSelect: !0,
      conjunction: ", ",
      dateFormat: "Y-m-d",
      defaultHour: 12,
      defaultMinute: 0,
      defaultSeconds: 0,
      disable: [],
      disableMobile: !1,
      enableSeconds: !1,
      enableTime: !1,
      errorHandler: function (e) {
        return "undefined" != typeof console && console.warn(e);
      },
      getWeek: function (e) {
        var t = new Date(e.getTime());
        t.setHours(0, 0, 0, 0),
          t.setDate(t.getDate() + 3 - ((t.getDay() + 6) % 7));
        var n = new Date(t.getFullYear(), 0, 4);
        return (
          1 +
          Math.round(
            ((t.getTime() - n.getTime()) / 864e5 - 3 + ((n.getDay() + 6) % 7)) /
              7
          )
        );
      },
      hourIncrement: 1,
      ignoredFocusElements: [],
      inline: !1,
      locale: "default",
      minuteIncrement: 5,
      mode: "single",
      monthSelectorType: "dropdown",
      nextArrow:
        "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",
      noCalendar: !1,
      now: new Date(),
      onChange: [],
      onClose: [],
      onDayCreate: [],
      onDestroy: [],
      onKeyDown: [],
      onMonthChange: [],
      onOpen: [],
      onParseConfig: [],
      onReady: [],
      onValueUpdate: [],
      onYearChange: [],
      onPreCalendarPosition: [],
      plugins: [],
      position: "auto",
      positionElement: void 0,
      prevArrow:
        "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",
      shorthandCurrentMonth: !1,
      showMonths: 1,
      static: !1,
      time_24hr: !1,
      weekNumbers: !1,
      wrap: !1,
    },
    ae = {
      weekdays: {
        shorthand: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        longhand: [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
      },
      months: {
        shorthand: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        longhand: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
      },
      daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
      firstDayOfWeek: 0,
      ordinal: function (e) {
        var t = e % 100;
        if (3 < t && t < 21) return "th";
        switch (t % 10) {
          case 1:
            return "st";
          case 2:
            return "nd";
          case 3:
            return "rd";
          default:
            return "th";
        }
      },
      rangeSeparator: " to ",
      weekAbbreviation: "Wk",
      scrollTitle: "Scroll to increment",
      toggleTitle: "Click to toggle",
      amPM: ["AM", "PM"],
      yearAriaLabel: "Year",
      monthAriaLabel: "Month",
      hourAriaLabel: "Hour",
      minuteAriaLabel: "Minute",
      time_24hr: !1,
    },
    oe = function (e, t) {
      return void 0 === t && (t = 2), ("000" + e).slice(-1 * t);
    },
    re = function (e) {
      return !0 === e ? 1 : 0;
    };
  function le(n, i) {
    var a;
    return function () {
      var e = this,
        t = arguments;
      clearTimeout(a),
        (a = setTimeout(function () {
          return n.apply(e, t);
        }, i));
    };
  }
  var ce = function (e) {
    return e instanceof Array ? e : [e];
  };
  function se(e, t, n) {
    if (!0 === n) return e.classList.add(t);
    e.classList.remove(t);
  }
  function de(e, t, n) {
    var i = window.document.createElement(e);
    return (
      (t = t || ""),
      (n = n || ""),
      (i.className = t),
      void 0 !== n && (i.textContent = n),
      i
    );
  }
  function ue(e) {
    for (; e.firstChild; ) e.removeChild(e.firstChild);
  }
  function fe(e, t) {
    var n = de("div", "numInputWrapper"),
      i = de("input", "numInput " + e),
      a = de("span", "arrowUp"),
      o = de("span", "arrowDown");
    if (
      (-1 === navigator.userAgent.indexOf("MSIE 9.0")
        ? (i.type = "number")
        : ((i.type = "text"), (i.pattern = "\\d*")),
      void 0 !== t)
    )
      for (var r in t) i.setAttribute(r, t[r]);
    return n.appendChild(i), n.appendChild(a), n.appendChild(o), n;
  }
  function me(t) {
    try {
      return "function" == typeof t.composedPath
        ? t.composedPath()[0]
        : t.target;
    } catch (e) {
      return t.target;
    }
  }
  function e() {}
  var ge = function (e, t, n) {
      return n.months[t ? "shorthand" : "longhand"][e];
    },
    w = {
      D: e,
      F: function (e, t, n) {
        e.setMonth(n.months.longhand.indexOf(t));
      },
      G: function (e, t) {
        e.setHours((12 <= e.getHours() ? 12 : 0) + parseFloat(t));
      },
      H: function (e, t) {
        e.setHours(parseFloat(t));
      },
      J: function (e, t) {
        e.setDate(parseFloat(t));
      },
      K: function (e, t, n) {
        e.setHours(
          (e.getHours() % 12) + 12 * re(new RegExp(n.amPM[1], "i").test(t))
        );
      },
      M: function (e, t, n) {
        e.setMonth(n.months.shorthand.indexOf(t));
      },
      S: function (e, t) {
        e.setSeconds(parseFloat(t));
      },
      U: function (e, t) {
        return new Date(1e3 * parseFloat(t));
      },
      W: function (e, t, n) {
        var i = parseInt(t),
          a = new Date(e.getFullYear(), 0, 2 + 7 * (i - 1), 0, 0, 0, 0);
        return a.setDate(a.getDate() - a.getDay() + n.firstDayOfWeek), a;
      },
      Y: function (e, t) {
        e.setFullYear(parseFloat(t));
      },
      Z: function (e, t) {
        return new Date(t);
      },
      d: function (e, t) {
        e.setDate(parseFloat(t));
      },
      h: function (e, t) {
        e.setHours((12 <= e.getHours() ? 12 : 0) + parseFloat(t));
      },
      i: function (e, t) {
        e.setMinutes(parseFloat(t));
      },
      j: function (e, t) {
        e.setDate(parseFloat(t));
      },
      l: e,
      m: function (e, t) {
        e.setMonth(parseFloat(t) - 1);
      },
      n: function (e, t) {
        e.setMonth(parseFloat(t) - 1);
      },
      s: function (e, t) {
        e.setSeconds(parseFloat(t));
      },
      u: function (e, t) {
        return new Date(parseFloat(t));
      },
      w: e,
      y: function (e, t) {
        e.setFullYear(2e3 + parseFloat(t));
      },
    },
    pe = {
      D: "",
      F: "",
      G: "(\\d\\d|\\d)",
      H: "(\\d\\d|\\d)",
      J: "(\\d\\d|\\d)\\w+",
      K: "",
      M: "",
      S: "(\\d\\d|\\d)",
      U: "(.+)",
      W: "(\\d\\d|\\d)",
      Y: "(\\d{4})",
      Z: "(.+)",
      d: "(\\d\\d|\\d)",
      h: "(\\d\\d|\\d)",
      i: "(\\d\\d|\\d)",
      j: "(\\d\\d|\\d)",
      l: "",
      m: "(\\d\\d|\\d)",
      n: "(\\d\\d|\\d)",
      s: "(\\d\\d|\\d)",
      u: "(.+)",
      w: "(\\d\\d|\\d)",
      y: "(\\d{2})",
    },
    c = {
      Z: function (e) {
        return e.toISOString();
      },
      D: function (e, t, n) {
        return t.weekdays.shorthand[c.w(e, t, n)];
      },
      F: function (e, t, n) {
        return ge(c.n(e, t, n) - 1, !1, t);
      },
      G: function (e, t, n) {
        return oe(c.h(e, t, n));
      },
      H: function (e) {
        return oe(e.getHours());
      },
      J: function (e, t) {
        return void 0 !== t.ordinal
          ? e.getDate() + t.ordinal(e.getDate())
          : e.getDate();
      },
      K: function (e, t) {
        return t.amPM[re(11 < e.getHours())];
      },
      M: function (e, t) {
        return ge(e.getMonth(), !0, t);
      },
      S: function (e) {
        return oe(e.getSeconds());
      },
      U: function (e) {
        return e.getTime() / 1e3;
      },
      W: function (e, t, n) {
        return n.getWeek(e);
      },
      Y: function (e) {
        return oe(e.getFullYear(), 4);
      },
      d: function (e) {
        return oe(e.getDate());
      },
      h: function (e) {
        return e.getHours() % 12 ? e.getHours() % 12 : 12;
      },
      i: function (e) {
        return oe(e.getMinutes());
      },
      j: function (e) {
        return e.getDate();
      },
      l: function (e, t) {
        return t.weekdays.longhand[e.getDay()];
      },
      m: function (e) {
        return oe(e.getMonth() + 1);
      },
      n: function (e) {
        return e.getMonth() + 1;
      },
      s: function (e) {
        return e.getSeconds();
      },
      u: function (e) {
        return e.getTime();
      },
      w: function (e) {
        return e.getDay();
      },
      y: function (e) {
        return String(e.getFullYear()).substring(2);
      },
    },
    he = function (e) {
      var t = e.config,
        o = void 0 === t ? ie : t,
        n = e.l10n,
        r = void 0 === n ? ae : n,
        i = e.isMobile,
        l = void 0 !== i && i;
      return function (i, e, t) {
        var a = t || r;
        return void 0 === o.formatDate || l
          ? e
              .split("")
              .map(function (e, t, n) {
                return c[e] && "\\" !== n[t - 1]
                  ? c[e](i, a, o)
                  : "\\" !== e
                  ? e
                  : "";
              })
              .join("")
          : o.formatDate(i, e, a);
      };
    },
    ve = function (e) {
      var t = e.config,
        y = void 0 === t ? ie : t,
        n = e.l10n,
        b = void 0 === n ? ae : n;
      return function (e, t, n, i) {
        if (0 === e || e) {
          var a,
            o = i || b,
            r = e;
          if (e instanceof Date) a = new Date(e.getTime());
          else if ("string" != typeof e && void 0 !== e.toFixed)
            a = new Date(e);
          else if ("string" == typeof e) {
            var l = t || (y || ie).dateFormat,
              c = String(e).trim();
            if ("today" === c) (a = new Date()), (n = !0);
            else if (y && y.parseDate) a = y.parseDate(e, l);
            else if (/Z$/.test(c) || /GMT$/.test(c)) a = new Date(e);
            else {
              for (
                var s = void 0, d = [], u = 0, f = 0, m = "";
                u < l.length;
                u++
              ) {
                var g,
                  p = l[u],
                  h = "\\" === p,
                  v = "\\" === l[u - 1] || h;
                pe[p] && !v
                  ? ((m += pe[p]),
                    (g = new RegExp(m).exec(e)) &&
                      (s = !0) &&
                      d["Y" !== p ? "push" : "unshift"]({
                        fn: w[p],
                        val: g[++f],
                      }))
                  : h || (m += ".");
              }
              (a =
                y && y.noCalendar
                  ? new Date(new Date().setHours(0, 0, 0, 0))
                  : new Date(new Date().getFullYear(), 0, 1, 0, 0, 0, 0)),
                d.forEach(function (e) {
                  var t = e.fn,
                    n = e.val;
                  return (a = t(a, n, o) || a);
                }),
                (a = s ? a : void 0);
            }
          }
          if (a instanceof Date && !isNaN(a.getTime()))
            return !0 === n && a.setHours(0, 0, 0, 0), a;
          y.errorHandler(new Error("Invalid date provided: " + r));
        }
      };
    };
  function ye(e, t, n) {
    return (
      void 0 === n && (n = !0),
      !1 !== n
        ? new Date(e.getTime()).setHours(0, 0, 0, 0) -
          new Date(t.getTime()).setHours(0, 0, 0, 0)
        : e.getTime() - t.getTime()
    );
  }
  var be = function (e, t, n) {
      return 3600 * e + 60 * t + n;
    },
    we = 864e5;
  function De(e) {
    var t,
      n,
      i,
      a,
      o,
      r = e.defaultHour,
      l = e.defaultMinute,
      c = e.defaultSeconds;
    return (
      void 0 !== e.minDate &&
        ((t = e.minDate.getHours()),
        (n = e.minDate.getMinutes()),
        (i = e.minDate.getSeconds()),
        r < t && (r = t),
        r === t && l < n && (l = n),
        r === t && l === n && c < i && (c = e.minDate.getSeconds())),
      void 0 !== e.maxDate &&
        ((a = e.maxDate.getHours()),
        (o = e.maxDate.getMinutes()),
        (r = Math.min(r, a)) === a && (l = Math.min(o, l)),
        r === a && l === o && (c = e.maxDate.getSeconds())),
      { hours: r, minutes: l, seconds: c }
    );
  }
  function r(m, d) {
    var C = { config: ee(ee({}, ie), Ce.defaultConfig), l10n: ae };
    function g() {
      var e;
      return (
        (null === (e = C.calendarContainer) || void 0 === e
          ? void 0
          : e.getRootNode()
        ).activeElement || document.activeElement
      );
    }
    function u(e) {
      return e.bind(C);
    }
    function t() {
      var t = C.config;
      (!1 === t.weekNumbers && 1 === t.showMonths) ||
        (!0 !== t.noCalendar &&
          window.requestAnimationFrame(function () {
            var e;
            void 0 !== C.calendarContainer &&
              ((C.calendarContainer.style.visibility = "hidden"),
              (C.calendarContainer.style.display = "block")),
              void 0 !== C.daysContainer &&
                ((e = (C.days.offsetWidth + 1) * t.showMonths),
                (C.daysContainer.style.width = e + "px"),
                (C.calendarContainer.style.width =
                  e +
                  (void 0 !== C.weekWrapper ? C.weekWrapper.offsetWidth : 0) +
                  "px"),
                C.calendarContainer.style.removeProperty("visibility"),
                C.calendarContainer.style.removeProperty("display"));
          }));
    }
    function p(e) {
      var t, n;
      0 === C.selectedDates.length &&
        ((t =
          void 0 === C.config.minDate || 0 <= ye(new Date(), C.config.minDate)
            ? new Date()
            : new Date(C.config.minDate.getTime())),
        (n = De(C.config)),
        t.setHours(n.hours, n.minutes, n.seconds, t.getMilliseconds()),
        (C.selectedDates = [t]),
        (C.latestSelectedDateObj = t)),
        void 0 !== e &&
          "blur" !== e.type &&
          (function (e) {
            e.preventDefault();
            var t = "keydown" === e.type,
              n = me(e),
              i = n;
            void 0 !== C.amPM &&
              n === C.amPM &&
              (C.amPM.textContent =
                C.l10n.amPM[re(C.amPM.textContent === C.l10n.amPM[0])]);
            var a,
              o,
              r = parseFloat(i.getAttribute("min")),
              l = parseFloat(i.getAttribute("max")),
              c = parseFloat(i.getAttribute("step")),
              s = parseInt(i.value, 10),
              d = s + c * (e.delta || (t ? (38 === e.which ? 1 : -1) : 0));
            void 0 !== i.value &&
              2 === i.value.length &&
              ((a = i === C.hourElement),
              (o = i === C.minuteElement),
              d < r
                ? ((d = l + d + re(!a) + (re(a) && re(!C.amPM))),
                  o && f(void 0, -1, C.hourElement))
                : l < d &&
                  ((d = i === C.hourElement ? d - l - re(!C.amPM) : r),
                  o && f(void 0, 1, C.hourElement)),
              C.amPM &&
                a &&
                (1 === c ? d + s === 23 : Math.abs(d - s) > c) &&
                (C.amPM.textContent =
                  C.l10n.amPM[re(C.amPM.textContent === C.l10n.amPM[0])]),
              (i.value = oe(d)));
          })(e);
      var i = C._input.value;
      h(), Z(), C._input.value !== i && C._debouncedChange();
    }
    function h() {
      var e, t, n, i, a, o, r, l, c, s, d, u, f, m;
      void 0 !== C.hourElement &&
        void 0 !== C.minuteElement &&
        ((r = (parseInt(C.hourElement.value.slice(-2), 10) || 0) % 24),
        (l = (parseInt(C.minuteElement.value, 10) || 0) % 60),
        (c =
          void 0 !== C.secondElement
            ? (parseInt(C.secondElement.value, 10) || 0) % 60
            : 0),
        void 0 !== C.amPM &&
          ((e = C.amPM.textContent),
          (r = (r % 12) + 12 * re(e === C.l10n.amPM[1]))),
        (t =
          void 0 !== C.config.minTime ||
          (C.config.minDate &&
            C.minDateHasTime &&
            C.latestSelectedDateObj &&
            0 === ye(C.latestSelectedDateObj, C.config.minDate, !0))),
        (n =
          void 0 !== C.config.maxTime ||
          (C.config.maxDate &&
            C.maxDateHasTime &&
            C.latestSelectedDateObj &&
            0 === ye(C.latestSelectedDateObj, C.config.maxDate, !0))),
        void 0 !== C.config.maxTime &&
        void 0 !== C.config.minTime &&
        C.config.minTime > C.config.maxTime
          ? ((i = be(
              C.config.minTime.getHours(),
              C.config.minTime.getMinutes(),
              C.config.minTime.getSeconds()
            )),
            be(
              C.config.maxTime.getHours(),
              C.config.maxTime.getMinutes(),
              C.config.maxTime.getSeconds()
            ) < (a = be(r, l, c)) &&
              a < i &&
              ((u = i),
              (r = (o = [
                (f = Math.floor(u / 3600)),
                (m = (u - 3600 * f) / 60),
                u - 3600 * f - 60 * m,
              ])[0]),
              (l = o[1]),
              (c = o[2])))
          : (n &&
              ((s =
                void 0 !== C.config.maxTime
                  ? C.config.maxTime
                  : C.config.maxDate),
              (r = Math.min(r, s.getHours())) === s.getHours() &&
                (l = Math.min(l, s.getMinutes())),
              l === s.getMinutes() && (c = Math.min(c, s.getSeconds()))),
            t &&
              ((d =
                void 0 !== C.config.minTime
                  ? C.config.minTime
                  : C.config.minDate),
              (r = Math.max(r, d.getHours())) === d.getHours() &&
                l < d.getMinutes() &&
                (l = d.getMinutes()),
              l === d.getMinutes() && (c = Math.max(c, d.getSeconds())))),
        v(r, l, c));
    }
    function a(e) {
      var t = e || C.latestSelectedDateObj;
      t && t instanceof Date && v(t.getHours(), t.getMinutes(), t.getSeconds());
    }
    function v(e, t, n) {
      void 0 !== C.latestSelectedDateObj &&
        C.latestSelectedDateObj.setHours(e % 24, t, n || 0, 0),
        C.hourElement &&
          C.minuteElement &&
          !C.isMobile &&
          ((C.hourElement.value = oe(
            C.config.time_24hr ? e : ((12 + e) % 12) + 12 * re(e % 12 == 0)
          )),
          (C.minuteElement.value = oe(t)),
          void 0 !== C.amPM && (C.amPM.textContent = C.l10n.amPM[re(12 <= e)]),
          void 0 !== C.secondElement && (C.secondElement.value = oe(n)));
    }
    function n(e) {
      var t = me(e),
        n = parseInt(t.value) + (e.delta || 0);
      (1 < n / 1e3 || ("Enter" === e.key && !/[^\d]/.test(n.toString()))) &&
        _(n);
    }
    function r(t, n, i, a) {
      return n instanceof Array
        ? n.forEach(function (e) {
            return r(t, e, i, a);
          })
        : t instanceof Array
        ? t.forEach(function (e) {
            return r(e, n, i, a);
          })
        : (t.addEventListener(n, i, a),
          void C._handlers.push({
            remove: function () {
              return t.removeEventListener(n, i, a);
            },
          }));
    }
    function s() {
      J("onChange");
    }
    function i(e, t) {
      var n =
          void 0 !== e
            ? C.parseDate(e)
            : C.latestSelectedDateObj ||
              (C.config.minDate && C.config.minDate > C.now
                ? C.config.minDate
                : C.config.maxDate && C.config.maxDate < C.now
                ? C.config.maxDate
                : C.now),
        i = C.currentYear,
        a = C.currentMonth;
      try {
        void 0 !== n &&
          ((C.currentYear = n.getFullYear()), (C.currentMonth = n.getMonth()));
      } catch (e) {
        (e.message = "Invalid date supplied: " + n), C.config.errorHandler(e);
      }
      t && C.currentYear !== i && (J("onYearChange"), E()),
        !t ||
          (C.currentYear === i && C.currentMonth === a) ||
          J("onMonthChange"),
        C.redraw();
    }
    function o(e) {
      var t = me(e);
      ~t.className.indexOf("arrow") &&
        f(e, t.classList.contains("arrowUp") ? 1 : -1);
    }
    function f(e, t, n) {
      var i = e && me(e),
        a = n || (i && i.parentNode && i.parentNode.firstChild),
        o = K("increment");
      (o.delta = t), a && a.dispatchEvent(o);
    }
    function y(e, t, n, i) {
      var a,
        o = A(t, !0),
        r = de("span", e, t.getDate().toString());
      return (
        (r.dateObj = t),
        (r.$i = i),
        r.setAttribute("aria-label", C.formatDate(t, C.config.ariaDateFormat)),
        -1 === e.indexOf("hidden") &&
          0 === ye(t, C.now) &&
          ((C.todayDateElem = r).classList.add("today"),
          r.setAttribute("aria-current", "date")),
        o
          ? ((r.tabIndex = -1),
            Q(t) &&
              (r.classList.add("selected"),
              (C.selectedDateElem = r),
              "range" === C.config.mode &&
                (se(
                  r,
                  "startRange",
                  C.selectedDates[0] && 0 === ye(t, C.selectedDates[0], !0)
                ),
                se(
                  r,
                  "endRange",
                  C.selectedDates[1] && 0 === ye(t, C.selectedDates[1], !0)
                ),
                "nextMonthDay" === e && r.classList.add("inRange"))))
          : r.classList.add("flatpickr-disabled"),
        "range" === C.config.mode &&
          ((a = t),
          !("range" !== C.config.mode || C.selectedDates.length < 2) &&
            0 <= ye(a, C.selectedDates[0]) &&
            ye(a, C.selectedDates[1]) <= 0) &&
          !Q(t) &&
          r.classList.add("inRange"),
        C.weekNumbers &&
          1 === C.config.showMonths &&
          "prevMonthDay" !== e &&
          i % 7 == 6 &&
          C.weekNumbers.insertAdjacentHTML(
            "beforeend",
            "<span class='flatpickr-day'>" + C.config.getWeek(t) + "</span>"
          ),
        J("onDayCreate", r),
        r
      );
    }
    function b(e) {
      e.focus(), "range" === C.config.mode && P(e);
    }
    function w(e) {
      for (
        var t = 0 < e ? 0 : C.config.showMonths - 1,
          n = 0 < e ? C.config.showMonths : -1,
          i = t;
        i != n;
        i += e
      )
        for (
          var a = C.daysContainer.children[i],
            o = 0 < e ? 0 : a.children.length - 1,
            r = 0 < e ? a.children.length : -1,
            l = o;
          l != r;
          l += e
        ) {
          var c = a.children[l];
          if (-1 === c.className.indexOf("hidden") && A(c.dateObj)) return c;
        }
    }
    function D(e, t) {
      var n = g(),
        i = I(n || document.body),
        a =
          void 0 !== e
            ? e
            : i
            ? n
            : void 0 !== C.selectedDateElem && I(C.selectedDateElem)
            ? C.selectedDateElem
            : void 0 !== C.todayDateElem && I(C.todayDateElem)
            ? C.todayDateElem
            : w(0 < t ? 1 : -1);
      void 0 === a
        ? C._input.focus()
        : i
        ? (function (e, t) {
            for (
              var n =
                  -1 === e.className.indexOf("Month")
                    ? e.dateObj.getMonth()
                    : C.currentMonth,
                i = 0 < t ? C.config.showMonths : -1,
                a = 0 < t ? 1 : -1,
                o = n - C.currentMonth;
              o != i;
              o += a
            )
              for (
                var r = C.daysContainer.children[o],
                  l =
                    n - C.currentMonth === o
                      ? e.$i + t
                      : t < 0
                      ? r.children.length - 1
                      : 0,
                  c = r.children.length,
                  s = l;
                0 <= s && s < c && s != (0 < t ? c : -1);
                s += a
              ) {
                var d = r.children[s];
                if (
                  -1 === d.className.indexOf("hidden") &&
                  A(d.dateObj) &&
                  Math.abs(e.$i - s) >= Math.abs(t)
                )
                  return b(d);
              }
            C.changeMonth(a), D(w(a), 0);
          })(a, t)
        : b(a);
    }
    function M() {
      if (void 0 !== C.daysContainer) {
        ue(C.daysContainer), C.weekNumbers && ue(C.weekNumbers);
        for (
          var e = document.createDocumentFragment(), t = 0;
          t < C.config.showMonths;
          t++
        ) {
          var n = new Date(C.currentYear, C.currentMonth, 1);
          n.setMonth(C.currentMonth + t),
            e.appendChild(
              (function (e, t) {
                for (
                  var n =
                      (new Date(e, t, 1).getDay() - C.l10n.firstDayOfWeek + 7) %
                      7,
                    i = C.utils.getDaysInMonth((t - 1 + 12) % 12, e),
                    a = C.utils.getDaysInMonth(t, e),
                    o = window.document.createDocumentFragment(),
                    r = 1 < C.config.showMonths,
                    l = r ? "prevMonthDay hidden" : "prevMonthDay",
                    c = r ? "nextMonthDay hidden" : "nextMonthDay",
                    s = i + 1 - n,
                    d = 0;
                  s <= i;
                  s++, d++
                )
                  o.appendChild(
                    y("flatpickr-day " + l, new Date(e, t - 1, s), 0, d)
                  );
                for (s = 1; s <= a; s++, d++)
                  o.appendChild(y("flatpickr-day", new Date(e, t, s), 0, d));
                for (
                  var u = a + 1;
                  u <= 42 - n && (1 === C.config.showMonths || d % 7 != 0);
                  u++, d++
                )
                  o.appendChild(
                    y("flatpickr-day " + c, new Date(e, t + 1, u % a), 0, d)
                  );
                var f = de("div", "dayContainer");
                return f.appendChild(o), f;
              })(n.getFullYear(), n.getMonth())
            );
        }
        C.daysContainer.appendChild(e),
          (C.days = C.daysContainer.firstChild),
          "range" === C.config.mode && 1 === C.selectedDates.length && P();
      }
    }
    function E() {
      if (
        !(1 < C.config.showMonths || "dropdown" !== C.config.monthSelectorType)
      ) {
        (C.monthsDropdownContainer.tabIndex = -1),
          (C.monthsDropdownContainer.innerHTML = "");
        for (var e, t = 0; t < 12; t++) {
          (n = t),
            (void 0 !== C.config.minDate &&
              C.currentYear === C.config.minDate.getFullYear() &&
              n < C.config.minDate.getMonth()) ||
              (void 0 !== C.config.maxDate &&
                C.currentYear === C.config.maxDate.getFullYear() &&
                n > C.config.maxDate.getMonth()) ||
              (((e = de("option", "flatpickr-monthDropdown-month")).value =
                new Date(C.currentYear, t).getMonth().toString()),
              (e.textContent = ge(t, C.config.shorthandCurrentMonth, C.l10n)),
              (e.tabIndex = -1),
              C.currentMonth === t && (e.selected = !0),
              C.monthsDropdownContainer.appendChild(e));
        }
      }
      var n;
    }
    function l() {
      ue(C.monthNav),
        C.monthNav.appendChild(C.prevMonthNav),
        C.config.showMonths && ((C.yearElements = []), (C.monthElements = []));
      for (var e = C.config.showMonths; e--; ) {
        var t = (function () {
          var e = de("div", "flatpickr-month"),
            t = window.document.createDocumentFragment(),
            n =
              1 < C.config.showMonths || "static" === C.config.monthSelectorType
                ? de("span", "cur-month")
                : ((C.monthsDropdownContainer = de(
                    "select",
                    "flatpickr-monthDropdown-months"
                  )),
                  C.monthsDropdownContainer.setAttribute(
                    "aria-label",
                    C.l10n.monthAriaLabel
                  ),
                  r(C.monthsDropdownContainer, "change", function (e) {
                    var t = me(e),
                      n = parseInt(t.value, 10);
                    C.changeMonth(n - C.currentMonth), J("onMonthChange");
                  }),
                  E(),
                  C.monthsDropdownContainer),
            i = fe("cur-year", { tabindex: "-1" }),
            a = i.getElementsByTagName("input")[0];
          a.setAttribute("aria-label", C.l10n.yearAriaLabel),
            C.config.minDate &&
              a.setAttribute("min", C.config.minDate.getFullYear().toString()),
            C.config.maxDate &&
              (a.setAttribute("max", C.config.maxDate.getFullYear().toString()),
              (a.disabled =
                !!C.config.minDate &&
                C.config.minDate.getFullYear() ===
                  C.config.maxDate.getFullYear()));
          var o = de("div", "flatpickr-current-month");
          return (
            o.appendChild(n),
            o.appendChild(i),
            t.appendChild(o),
            e.appendChild(t),
            { container: e, yearElement: a, monthElement: n }
          );
        })();
        C.yearElements.push(t.yearElement),
          C.monthElements.push(t.monthElement),
          C.monthNav.appendChild(t.container);
      }
      C.monthNav.appendChild(C.nextMonthNav);
    }
    function c() {
      C.weekdayContainer
        ? ue(C.weekdayContainer)
        : (C.weekdayContainer = de("div", "flatpickr-weekdays"));
      for (var e = C.config.showMonths; e--; ) {
        var t = de("div", "flatpickr-weekdaycontainer");
        C.weekdayContainer.appendChild(t);
      }
      return k(), C.weekdayContainer;
    }
    function k() {
      if (C.weekdayContainer) {
        var e = C.l10n.firstDayOfWeek,
          t = te(C.l10n.weekdays.shorthand);
        0 < e &&
          e < t.length &&
          (t = te(t.splice(e, t.length), t.splice(0, e)));
        for (var n = C.config.showMonths; n--; )
          C.weekdayContainer.children[n].innerHTML =
            "\n      <span class='flatpickr-weekday'>\n        " +
            t.join("</span><span class='flatpickr-weekday'>") +
            "\n      </span>\n      ";
      }
    }
    function x(e, t) {
      void 0 === t && (t = !0);
      var n = t ? e : e - C.currentMonth;
      (n < 0 && !0 === C._hidePrevMonthArrow) ||
        (0 < n && !0 === C._hideNextMonthArrow) ||
        ((C.currentMonth += n),
        (C.currentMonth < 0 || 11 < C.currentMonth) &&
          ((C.currentYear += 11 < C.currentMonth ? 1 : -1),
          (C.currentMonth = (C.currentMonth + 12) % 12),
          J("onYearChange"),
          E()),
        M(),
        J("onMonthChange"),
        V());
    }
    function S(e) {
      return C.calendarContainer.contains(e);
    }
    function T(e) {
      var t, n, i, a;
      C.isOpen &&
        !C.config.inline &&
        ((n = S((t = me(e)))),
        (i = !(
          t === C.input ||
          t === C.altInput ||
          C.element.contains(t) ||
          (e.path &&
            e.path.indexOf &&
            (~e.path.indexOf(C.input) || ~e.path.indexOf(C.altInput))) ||
          n ||
          S(e.relatedTarget)
        )),
        (a = !C.config.ignoredFocusElements.some(function (e) {
          return e.contains(t);
        })),
        i &&
          a &&
          (C.config.allowInput &&
            C.setDate(
              C._input.value,
              !1,
              C.config.altInput ? C.config.altFormat : C.config.dateFormat
            ),
          void 0 !== C.timeContainer &&
            void 0 !== C.minuteElement &&
            void 0 !== C.hourElement &&
            "" !== C.input.value &&
            void 0 !== C.input.value &&
            p(),
          C.close(),
          C.config &&
            "range" === C.config.mode &&
            1 === C.selectedDates.length &&
            C.clear(!1)));
    }
    function _(e) {
      var t;
      !e ||
        (C.config.minDate && e < C.config.minDate.getFullYear()) ||
        (C.config.maxDate && e > C.config.maxDate.getFullYear()) ||
        ((t = C.currentYear !== e),
        (C.currentYear = e || C.currentYear),
        C.config.maxDate && C.currentYear === C.config.maxDate.getFullYear()
          ? (C.currentMonth = Math.min(
              C.config.maxDate.getMonth(),
              C.currentMonth
            ))
          : C.config.minDate &&
            C.currentYear === C.config.minDate.getFullYear() &&
            (C.currentMonth = Math.max(
              C.config.minDate.getMonth(),
              C.currentMonth
            )),
        t && (C.redraw(), J("onYearChange"), E()));
    }
    function A(e, t) {
      var n;
      void 0 === t && (t = !0);
      var i = C.parseDate(e, void 0, t);
      if (
        (C.config.minDate &&
          i &&
          ye(i, C.config.minDate, void 0 !== t ? t : !C.minDateHasTime) < 0) ||
        (C.config.maxDate &&
          i &&
          0 < ye(i, C.config.maxDate, void 0 !== t ? t : !C.maxDateHasTime))
      )
        return !1;
      if (!C.config.enable && 0 === C.config.disable.length) return !0;
      if (void 0 === i) return !1;
      for (
        var a = !!C.config.enable,
          o =
            null !== (n = C.config.enable) && void 0 !== n
              ? n
              : C.config.disable,
          r = 0,
          l = void 0;
        r < o.length;
        r++
      ) {
        if ("function" == typeof (l = o[r]) && l(i)) return a;
        if (l instanceof Date && void 0 !== i && l.getTime() === i.getTime())
          return a;
        if ("string" == typeof l) {
          var c = C.parseDate(l, void 0, !0);
          return c && c.getTime() === i.getTime() ? a : !a;
        }
        if (
          "object" == (void 0 === l ? "undefined" : _typeof(l)) &&
          void 0 !== i &&
          l.from &&
          l.to &&
          i.getTime() >= l.from.getTime() &&
          i.getTime() <= l.to.getTime()
        )
          return a;
      }
      return !a;
    }
    function I(e) {
      return (
        void 0 !== C.daysContainer &&
        -1 === e.className.indexOf("hidden") &&
        -1 === e.className.indexOf("flatpickr-disabled") &&
        C.daysContainer.contains(e)
      );
    }
    function L(e) {
      var t = e.target === C._input,
        n = C._input.value.trimEnd() !== G();
      !t ||
        !n ||
        (e.relatedTarget && S(e.relatedTarget)) ||
        C.setDate(
          C._input.value,
          !0,
          e.target === C.altInput ? C.config.altFormat : C.config.dateFormat
        );
    }
    function O(e) {
      var t = me(e),
        n = C.config.wrap ? m.contains(t) : t === C._input,
        i = C.config.allowInput,
        a = C.isOpen && (!i || !n),
        o = C.config.inline && n && !i;
      if (13 === e.keyCode && n) {
        if (i)
          return (
            C.setDate(
              C._input.value,
              !0,
              t === C.altInput ? C.config.altFormat : C.config.dateFormat
            ),
            C.close(),
            t.blur()
          );
        C.open();
      } else if (S(t) || a || o) {
        var r,
          l,
          c,
          s,
          d,
          u = !!C.timeContainer && C.timeContainer.contains(t);
        switch (e.keyCode) {
          case 13:
            u ? (e.preventDefault(), p(), q()) : U(e);
            break;
          case 27:
            e.preventDefault(), q();
            break;
          case 8:
          case 46:
            n && !C.config.allowInput && (e.preventDefault(), C.clear());
            break;
          case 37:
          case 39:
            u || n
              ? C.hourElement && C.hourElement.focus()
              : (e.preventDefault(),
                (r = g()),
                void 0 !== C.daysContainer &&
                  (!1 === i || (r && I(r))) &&
                  ((l = 39 === e.keyCode ? 1 : -1),
                  e.ctrlKey
                    ? (e.stopPropagation(), x(l), D(w(1), 0))
                    : D(void 0, l)));
            break;
          case 38:
          case 40:
            e.preventDefault();
            var f = 40 === e.keyCode ? 1 : -1;
            (C.daysContainer && void 0 !== t.$i) ||
            t === C.input ||
            t === C.altInput
              ? e.ctrlKey
                ? (e.stopPropagation(), _(C.currentYear - f), D(w(1), 0))
                : u || D(void 0, 7 * f)
              : t === C.currentYearElement
              ? _(C.currentYear - f)
              : C.config.enableTime &&
                (!u && C.hourElement && C.hourElement.focus(),
                p(e),
                C._debouncedChange());
            break;
          case 9:
            u
              ? -1 !==
                  (s = (c = [
                    C.hourElement,
                    C.minuteElement,
                    C.secondElement,
                    C.amPM,
                  ]
                    .concat(C.pluginElements)
                    .filter(function (e) {
                      return e;
                    })).indexOf(t)) &&
                ((d = c[s + (e.shiftKey ? -1 : 1)]),
                e.preventDefault(),
                (d || C._input).focus())
              : !C.config.noCalendar &&
                C.daysContainer &&
                C.daysContainer.contains(t) &&
                e.shiftKey &&
                (e.preventDefault(), C._input.focus());
        }
      }
      if (void 0 !== C.amPM && t === C.amPM)
        switch (e.key) {
          case C.l10n.amPM[0].charAt(0):
          case C.l10n.amPM[0].charAt(0).toLowerCase():
            (C.amPM.textContent = C.l10n.amPM[0]), h(), Z();
            break;
          case C.l10n.amPM[1].charAt(0):
          case C.l10n.amPM[1].charAt(0).toLowerCase():
            (C.amPM.textContent = C.l10n.amPM[1]), h(), Z();
        }
      (n || S(t)) && J("onKeyDown", e);
    }
    function P(r, e) {
      if (
        (void 0 === e && (e = "flatpickr-day"),
        1 === C.selectedDates.length &&
          (!r ||
            (r.classList.contains(e) &&
              !r.classList.contains("flatpickr-disabled"))))
      ) {
        for (
          var l = r
              ? r.dateObj.getTime()
              : C.days.firstElementChild.dateObj.getTime(),
            c = C.parseDate(C.selectedDates[0], void 0, !0).getTime(),
            t = Math.min(l, C.selectedDates[0].getTime()),
            n = Math.max(l, C.selectedDates[0].getTime()),
            s = !1,
            d = 0,
            u = 0,
            i = t;
          i < n;
          i += we
        )
          A(new Date(i), !0) ||
            ((s = s || (t < i && i < n)),
            i < c && (!d || d < i)
              ? (d = i)
              : c < i && (!u || i < u) && (u = i));
        Array.from(
          C.rContainer.querySelectorAll(
            "*:nth-child(-n+" + C.config.showMonths + ") > ." + e
          )
        ).forEach(function (t) {
          var e,
            n,
            i,
            a = t.dateObj.getTime(),
            o = (0 < d && a < d) || (0 < u && u < a);
          if (o)
            return (
              t.classList.add("notAllowed"),
              void ["inRange", "startRange", "endRange"].forEach(function (e) {
                t.classList.remove(e);
              })
            );
          (s && !o) ||
            (["startRange", "inRange", "endRange", "notAllowed"].forEach(
              function (e) {
                t.classList.remove(e);
              }
            ),
            void 0 !== r &&
              (r.classList.add(
                l <= C.selectedDates[0].getTime() ? "startRange" : "endRange"
              ),
              c < l && a === c
                ? t.classList.add("startRange")
                : l < c && a === c && t.classList.add("endRange"),
              d <= a &&
                (0 === u || a <= u) &&
                ((n = c),
                (i = l),
                (e = a) > Math.min(n, i) && e < Math.max(n, i)) &&
                t.classList.add("inRange")));
        });
      }
    }
    function j() {
      !C.isOpen || C.config.static || C.config.inline || H();
    }
    function F(i) {
      return function (e) {
        var t = (C.config["_" + i + "Date"] = C.parseDate(
            e,
            C.config.dateFormat
          )),
          n = C.config["_" + ("min" === i ? "max" : "min") + "Date"];
        void 0 !== t &&
          (C["min" === i ? "minDateHasTime" : "maxDateHasTime"] =
            0 < t.getHours() || 0 < t.getMinutes() || 0 < t.getSeconds()),
          C.selectedDates &&
            ((C.selectedDates = C.selectedDates.filter(function (e) {
              return A(e);
            })),
            C.selectedDates.length || "min" !== i || a(t),
            Z()),
          C.daysContainer &&
            (R(),
            void 0 !== t
              ? (C.currentYearElement[i] = t.getFullYear().toString())
              : C.currentYearElement.removeAttribute(i),
            (C.currentYearElement.disabled =
              !!n && void 0 !== t && n.getFullYear() === t.getFullYear()));
      };
    }
    function N() {
      return C.config.wrap ? m.querySelector("[data-input]") : m;
    }
    function Y() {
      "object" != _typeof(C.config.locale) &&
        void 0 === Ce.l10ns[C.config.locale] &&
        C.config.errorHandler(
          new Error("flatpickr: invalid locale " + C.config.locale)
        ),
        (C.l10n = ee(
          ee({}, Ce.l10ns.default),
          "object" == _typeof(C.config.locale)
            ? C.config.locale
            : "default" !== C.config.locale
            ? Ce.l10ns[C.config.locale]
            : void 0
        )),
        (pe.D = "(" + C.l10n.weekdays.shorthand.join("|") + ")"),
        (pe.l = "(" + C.l10n.weekdays.longhand.join("|") + ")"),
        (pe.M = "(" + C.l10n.months.shorthand.join("|") + ")"),
        (pe.F = "(" + C.l10n.months.longhand.join("|") + ")"),
        (pe.K =
          "(" +
          C.l10n.amPM[0] +
          "|" +
          C.l10n.amPM[1] +
          "|" +
          C.l10n.amPM[0].toLowerCase() +
          "|" +
          C.l10n.amPM[1].toLowerCase() +
          ")"),
        void 0 ===
          ee(ee({}, d), JSON.parse(JSON.stringify(m.dataset || {})))
            .time_24hr &&
          void 0 === Ce.defaultConfig.time_24hr &&
          (C.config.time_24hr = C.l10n.time_24hr),
        (C.formatDate = he(C)),
        (C.parseDate = ve({ config: C.config, l10n: C.l10n }));
    }
    function H(e) {
      if ("function" != typeof C.config.position) {
        if (void 0 !== C.calendarContainer) {
          J("onPreCalendarPosition");
          var t = e || C._positionElement,
            n = Array.prototype.reduce.call(
              C.calendarContainer.children,
              function (e, t) {
                return e + t.offsetHeight;
              },
              0
            ),
            i = C.calendarContainer.offsetWidth,
            a = C.config.position.split(" "),
            o = a[0],
            r = 1 < a.length ? a[1] : null,
            l = t.getBoundingClientRect(),
            c = window.innerHeight - l.bottom,
            s = "above" === o || ("below" !== o && c < n && l.top > n),
            d = window.pageYOffset + l.top + (s ? -n - 2 : t.offsetHeight + 2);
          if (
            (se(C.calendarContainer, "arrowTop", !s),
            se(C.calendarContainer, "arrowBottom", s),
            !C.config.inline)
          ) {
            var u = window.pageXOffset + l.left,
              f = !1,
              m = !1;
            "center" === r
              ? ((u -= (i - l.width) / 2), (f = !0))
              : "right" === r && ((u -= i - l.width), (m = !0)),
              se(C.calendarContainer, "arrowLeft", !f && !m),
              se(C.calendarContainer, "arrowCenter", f),
              se(C.calendarContainer, "arrowRight", m);
            var g =
                window.document.body.offsetWidth -
                (window.pageXOffset + l.right),
              p = u + i > window.document.body.offsetWidth,
              h = g + i > window.document.body.offsetWidth;
            if ((se(C.calendarContainer, "rightMost", p), !C.config.static))
              if (((C.calendarContainer.style.top = d + "px"), p))
                if (h) {
                  var v = (function () {
                    for (
                      var e, t = null, n = 0;
                      n < document.styleSheets.length;
                      n++
                    ) {
                      var i = document.styleSheets[n];
                      if (i.cssRules) {
                        try {
                          i.cssRules;
                        } catch (t) {
                          continue;
                        }
                        t = i;
                        break;
                      }
                    }
                    return null != t
                      ? t
                      : ((e = document.createElement("style")),
                        document.head.appendChild(e),
                        e.sheet);
                  })();
                  if (void 0 === v) return;
                  var y = window.document.body.offsetWidth,
                    b = Math.max(0, y / 2 - i / 2),
                    w = v.cssRules.length,
                    D = "{left:" + l.left + "px;right:auto;}";
                  se(C.calendarContainer, "rightMost", !1),
                    se(C.calendarContainer, "centerMost", !0),
                    v.insertRule(
                      ".flatpickr-calendar.centerMost:before,.flatpickr-calendar.centerMost:after" +
                        D,
                      w
                    ),
                    (C.calendarContainer.style.left = b + "px"),
                    (C.calendarContainer.style.right = "auto");
                } else
                  (C.calendarContainer.style.left = "auto"),
                    (C.calendarContainer.style.right = g + "px");
              else
                (C.calendarContainer.style.left = u + "px"),
                  (C.calendarContainer.style.right = "auto");
          }
        }
      } else C.config.position(C, e);
    }
    function R() {
      C.config.noCalendar || C.isMobile || (E(), V(), M());
    }
    function q() {
      C._input.focus(),
        -1 !== window.navigator.userAgent.indexOf("MSIE") ||
        void 0 !== navigator.msMaxTouchPoints
          ? setTimeout(C.close, 0)
          : C.close();
    }
    function U(e) {
      e.preventDefault(), e.stopPropagation();
      var t,
        n,
        i,
        a,
        o,
        r,
        l,
        c = (function e(t, n) {
          return n(t) ? t : t.parentNode ? e(t.parentNode, n) : void 0;
        })(me(e), function (e) {
          return (
            e.classList &&
            e.classList.contains("flatpickr-day") &&
            !e.classList.contains("flatpickr-disabled") &&
            !e.classList.contains("notAllowed")
          );
        });
      void 0 !== c &&
        ((t = c),
        (i =
          ((n = C.latestSelectedDateObj =
            new Date(t.dateObj.getTime())).getMonth() < C.currentMonth ||
            n.getMonth() > C.currentMonth + C.config.showMonths - 1) &&
          "range" !== C.config.mode),
        (C.selectedDateElem = t),
        "single" === C.config.mode
          ? (C.selectedDates = [n])
          : "multiple" === C.config.mode
          ? (a = Q(n))
            ? C.selectedDates.splice(parseInt(a), 1)
            : C.selectedDates.push(n)
          : "range" === C.config.mode &&
            (2 === C.selectedDates.length && C.clear(!1, !1),
            (C.latestSelectedDateObj = n),
            C.selectedDates.push(n),
            0 !== ye(n, C.selectedDates[0], !0) &&
              C.selectedDates.sort(function (e, t) {
                return e.getTime() - t.getTime();
              })),
        h(),
        i &&
          ((o = C.currentYear !== n.getFullYear()),
          (C.currentYear = n.getFullYear()),
          (C.currentMonth = n.getMonth()),
          o && (J("onYearChange"), E()),
          J("onMonthChange")),
        V(),
        M(),
        Z(),
        i || "range" === C.config.mode || 1 !== C.config.showMonths
          ? void 0 !== C.selectedDateElem &&
            void 0 === C.hourElement &&
            C.selectedDateElem &&
            C.selectedDateElem.focus()
          : b(t),
        void 0 !== C.hourElement &&
          void 0 !== C.hourElement &&
          C.hourElement.focus(),
        C.config.closeOnSelect &&
          ((r = "single" === C.config.mode && !C.config.enableTime),
          (l =
            "range" === C.config.mode &&
            2 === C.selectedDates.length &&
            !C.config.enableTime),
          (r || l) && q()),
        s());
    }
    (C.parseDate = ve({ config: C.config, l10n: C.l10n })),
      (C._handlers = []),
      (C.pluginElements = []),
      (C.loadedPlugins = []),
      (C._bind = r),
      (C._setHoursFromDate = a),
      (C._positionCalendar = H),
      (C.changeMonth = x),
      (C.changeYear = _),
      (C.clear = function (e, t) {
        var n;
        void 0 === e && (e = !0),
          void 0 === t && (t = !0),
          (C.input.value = ""),
          void 0 !== C.altInput && (C.altInput.value = ""),
          void 0 !== C.mobileInput && (C.mobileInput.value = ""),
          (C.selectedDates = []),
          !(C.latestSelectedDateObj = void 0) === t &&
            ((C.currentYear = C._initialDate.getFullYear()),
            (C.currentMonth = C._initialDate.getMonth())),
          !0 === C.config.enableTime &&
            v((n = De(C.config)).hours, n.minutes, n.seconds),
          C.redraw(),
          e && J("onChange");
      }),
      (C.close = function () {
        (C.isOpen = !1),
          C.isMobile ||
            (void 0 !== C.calendarContainer &&
              C.calendarContainer.classList.remove("open"),
            void 0 !== C._input && C._input.classList.remove("active")),
          J("onClose");
      }),
      (C.onMouseOver = P),
      (C._createElement = de),
      (C.createDay = y),
      (C.destroy = function () {
        void 0 !== C.config && J("onDestroy");
        for (var e = C._handlers.length; e--; ) C._handlers[e].remove();
        if (((C._handlers = []), C.mobileInput))
          C.mobileInput.parentNode &&
            C.mobileInput.parentNode.removeChild(C.mobileInput),
            (C.mobileInput = void 0);
        else if (C.calendarContainer && C.calendarContainer.parentNode)
          if (C.config.static && C.calendarContainer.parentNode) {
            var t = C.calendarContainer.parentNode;
            if ((t.lastChild && t.removeChild(t.lastChild), t.parentNode)) {
              for (; t.firstChild; ) t.parentNode.insertBefore(t.firstChild, t);
              t.parentNode.removeChild(t);
            }
          } else
            C.calendarContainer.parentNode.removeChild(C.calendarContainer);
        C.altInput &&
          ((C.input.type = "text"),
          C.altInput.parentNode &&
            C.altInput.parentNode.removeChild(C.altInput),
          delete C.altInput),
          C.input &&
            ((C.input.type = C.input._type),
            C.input.classList.remove("flatpickr-input"),
            C.input.removeAttribute("readonly")),
          [
            "_showTimeInput",
            "latestSelectedDateObj",
            "_hideNextMonthArrow",
            "_hidePrevMonthArrow",
            "__hideNextMonthArrow",
            "__hidePrevMonthArrow",
            "isMobile",
            "isOpen",
            "selectedDateElem",
            "minDateHasTime",
            "maxDateHasTime",
            "days",
            "daysContainer",
            "_input",
            "_positionElement",
            "innerContainer",
            "rContainer",
            "monthNav",
            "todayDateElem",
            "calendarContainer",
            "weekdayContainer",
            "prevMonthNav",
            "nextMonthNav",
            "monthsDropdownContainer",
            "currentMonthElement",
            "currentYearElement",
            "navigationCurrentMonth",
            "selectedDateElem",
            "config",
          ].forEach(function (e) {
            try {
              delete C[e];
            } catch (e) {}
          });
      }),
      (C.isEnabled = A),
      (C.jumpToDate = i),
      (C.updateValue = Z),
      (C.open = function (e, t) {
        var n, i;
        if ((void 0 === t && (t = C._positionElement), !0 === C.isMobile))
          return (
            e && (e.preventDefault(), (n = me(e)) && n.blur()),
            void 0 !== C.mobileInput &&
              (C.mobileInput.focus(), C.mobileInput.click()),
            void J("onOpen")
          );
        C._input.disabled ||
          C.config.inline ||
          ((i = C.isOpen),
          (C.isOpen = !0),
          i ||
            (C.calendarContainer.classList.add("open"),
            C._input.classList.add("active"),
            J("onOpen"),
            H(t)),
          !0 === C.config.enableTime &&
            !0 === C.config.noCalendar &&
            (!1 !== C.config.allowInput ||
              (void 0 !== e && C.timeContainer.contains(e.relatedTarget)) ||
              setTimeout(function () {
                return C.hourElement.select();
              }, 50)));
      }),
      (C.redraw = R),
      (C.set = function (e, t) {
        if (null !== e && "object" == (void 0 === e ? "undefined" : _typeof(e)))
          for (var n in (Object.assign(C.config, e), e))
            void 0 !== $[n] &&
              $[n].forEach(function (e) {
                return e();
              });
        else
          (C.config[e] = t),
            void 0 !== $[e]
              ? $[e].forEach(function (e) {
                  return e();
                })
              : -1 < ne.indexOf(e) && (C.config[e] = ce(t));
        C.redraw(), Z(!0);
      }),
      (C.setDate = function (e, t, n) {
        if (
          (void 0 === t && (t = !1),
          void 0 === n && (n = C.config.dateFormat),
          (0 !== e && !e) || (e instanceof Array && 0 === e.length))
        )
          return C.clear(t);
        z(e, n),
          (C.latestSelectedDateObj =
            C.selectedDates[C.selectedDates.length - 1]),
          C.redraw(),
          i(void 0, t),
          a(),
          0 === C.selectedDates.length && C.clear(!1),
          Z(t),
          t && J("onChange");
      }),
      (C.toggle = function (e) {
        if (!0 === C.isOpen) return C.close();
        C.open(e);
      });
    var $ = {
      locale: [Y, k],
      showMonths: [l, t, c],
      minDate: [i],
      maxDate: [i],
      positionElement: [B],
      clickOpens: [
        function () {
          !0 === C.config.clickOpens
            ? (r(C._input, "focus", C.open), r(C._input, "click", C.open))
            : (C._input.removeEventListener("focus", C.open),
              C._input.removeEventListener("click", C.open));
        },
      ],
    };
    function z(e, t) {
      var n = [];
      if (e instanceof Array)
        n = e.map(function (e) {
          return C.parseDate(e, t);
        });
      else if (e instanceof Date || "number" == typeof e)
        n = [C.parseDate(e, t)];
      else if ("string" == typeof e)
        switch (C.config.mode) {
          case "single":
          case "time":
            n = [C.parseDate(e, t)];
            break;
          case "multiple":
            n = e.split(C.config.conjunction).map(function (e) {
              return C.parseDate(e, t);
            });
            break;
          case "range":
            n = e.split(C.l10n.rangeSeparator).map(function (e) {
              return C.parseDate(e, t);
            });
        }
      else
        C.config.errorHandler(
          new Error("Invalid date supplied: " + JSON.stringify(e))
        );
      (C.selectedDates = C.config.allowInvalidPreload
        ? n
        : n.filter(function (e) {
            return e instanceof Date && A(e, !1);
          })),
        "range" === C.config.mode &&
          C.selectedDates.sort(function (e, t) {
            return e.getTime() - t.getTime();
          });
    }
    function W(e) {
      return e
        .slice()
        .map(function (e) {
          return "string" == typeof e ||
            "number" == typeof e ||
            e instanceof Date
            ? C.parseDate(e, void 0, !0)
            : e &&
              "object" == (void 0 === e ? "undefined" : _typeof(e)) &&
              e.from &&
              e.to
            ? {
                from: C.parseDate(e.from, void 0),
                to: C.parseDate(e.to, void 0),
              }
            : e;
        })
        .filter(function (e) {
          return e;
        });
    }
    function B() {
      C._positionElement = C.config.positionElement || C._input;
    }
    function J(e, t) {
      if (void 0 !== C.config) {
        var n = C.config[e];
        if (void 0 !== n && 0 < n.length)
          for (var i = 0; n[i] && i < n.length; i++)
            n[i](C.selectedDates, C.input.value, C, t);
        "onChange" === e &&
          (C.input.dispatchEvent(K("change")),
          C.input.dispatchEvent(K("input")));
      }
    }
    function K(e) {
      var t = document.createEvent("Event");
      return t.initEvent(e, !0, !0), t;
    }
    function Q(e) {
      for (var t = 0; t < C.selectedDates.length; t++) {
        var n = C.selectedDates[t];
        if (n instanceof Date && 0 === ye(n, e)) return "" + t;
      }
      return !1;
    }
    function V() {
      C.config.noCalendar ||
        C.isMobile ||
        !C.monthNav ||
        (C.yearElements.forEach(function (e, t) {
          var n = new Date(C.currentYear, C.currentMonth, 1);
          n.setMonth(C.currentMonth + t),
            1 < C.config.showMonths || "static" === C.config.monthSelectorType
              ? (C.monthElements[t].textContent =
                  ge(n.getMonth(), C.config.shorthandCurrentMonth, C.l10n) +
                  " ")
              : (C.monthsDropdownContainer.value = n.getMonth().toString()),
            (e.value = n.getFullYear().toString());
        }),
        (C._hidePrevMonthArrow =
          void 0 !== C.config.minDate &&
          (C.currentYear === C.config.minDate.getFullYear()
            ? C.currentMonth <= C.config.minDate.getMonth()
            : C.currentYear < C.config.minDate.getFullYear())),
        (C._hideNextMonthArrow =
          void 0 !== C.config.maxDate &&
          (C.currentYear === C.config.maxDate.getFullYear()
            ? C.currentMonth + 1 > C.config.maxDate.getMonth()
            : C.currentYear > C.config.maxDate.getFullYear())));
    }
    function G(e) {
      var t =
        e || (C.config.altInput ? C.config.altFormat : C.config.dateFormat);
      return C.selectedDates
        .map(function (e) {
          return C.formatDate(e, t);
        })
        .filter(function (e, t, n) {
          return (
            "range" !== C.config.mode ||
            C.config.enableTime ||
            n.indexOf(e) === t
          );
        })
        .join(
          "range" !== C.config.mode
            ? C.config.conjunction
            : C.l10n.rangeSeparator
        );
    }
    function Z(e) {
      void 0 === e && (e = !0),
        void 0 !== C.mobileInput &&
          C.mobileFormatStr &&
          (C.mobileInput.value =
            void 0 !== C.latestSelectedDateObj
              ? C.formatDate(C.latestSelectedDateObj, C.mobileFormatStr)
              : ""),
        (C.input.value = G(C.config.dateFormat)),
        void 0 !== C.altInput && (C.altInput.value = G(C.config.altFormat)),
        !1 !== e && J("onValueUpdate");
    }
    function X(e) {
      var t = me(e),
        n = C.prevMonthNav.contains(t),
        i = C.nextMonthNav.contains(t);
      n || i
        ? x(n ? -1 : 1)
        : 0 <= C.yearElements.indexOf(t)
        ? t.select()
        : t.classList.contains("arrowUp")
        ? C.changeYear(C.currentYear + 1)
        : t.classList.contains("arrowDown") && C.changeYear(C.currentYear - 1);
    }
    return (
      (function () {
        (C.element = C.input = m),
          (C.isOpen = !1),
          (function () {
            var e = [
                "wrap",
                "weekNumbers",
                "allowInput",
                "allowInvalidPreload",
                "clickOpens",
                "time_24hr",
                "enableTime",
                "noCalendar",
                "altInput",
                "shorthandCurrentMonth",
                "inline",
                "static",
                "enableSeconds",
                "disableMobile",
              ],
              t = ee(ee({}, JSON.parse(JSON.stringify(m.dataset || {}))), d),
              n = {};
            (C.config.parseDate = t.parseDate),
              (C.config.formatDate = t.formatDate),
              Object.defineProperty(C.config, "enable", {
                get: function () {
                  return C.config._enable;
                },
                set: function (e) {
                  C.config._enable = W(e);
                },
              }),
              Object.defineProperty(C.config, "disable", {
                get: function () {
                  return C.config._disable;
                },
                set: function (e) {
                  C.config._disable = W(e);
                },
              });
            var i,
              a,
              o = "time" === t.mode;
            t.dateFormat ||
              (!t.enableTime && !o) ||
              ((i = Ce.defaultConfig.dateFormat || ie.dateFormat),
              (n.dateFormat =
                t.noCalendar || o
                  ? "H:i" + (t.enableSeconds ? ":S" : "")
                  : i + " H:i" + (t.enableSeconds ? ":S" : ""))),
              t.altInput &&
                (t.enableTime || o) &&
                !t.altFormat &&
                ((a = Ce.defaultConfig.altFormat || ie.altFormat),
                (n.altFormat =
                  t.noCalendar || o
                    ? "h:i" + (t.enableSeconds ? ":S K" : " K")
                    : a + " h:i" + (t.enableSeconds ? ":S" : "") + " K")),
              Object.defineProperty(C.config, "minDate", {
                get: function () {
                  return C.config._minDate;
                },
                set: F("min"),
              }),
              Object.defineProperty(C.config, "maxDate", {
                get: function () {
                  return C.config._maxDate;
                },
                set: F("max"),
              });
            function r(t) {
              return function (e) {
                C.config["min" === t ? "_minTime" : "_maxTime"] = C.parseDate(
                  e,
                  "H:i:S"
                );
              };
            }
            Object.defineProperty(C.config, "minTime", {
              get: function () {
                return C.config._minTime;
              },
              set: r("min"),
            }),
              Object.defineProperty(C.config, "maxTime", {
                get: function () {
                  return C.config._maxTime;
                },
                set: r("max"),
              }),
              "time" === t.mode &&
                ((C.config.noCalendar = !0), (C.config.enableTime = !0)),
              Object.assign(C.config, n, t);
            for (var l = 0; l < e.length; l++)
              C.config[e[l]] =
                !0 === C.config[e[l]] || "true" === C.config[e[l]];
            for (
              ne
                .filter(function (e) {
                  return void 0 !== C.config[e];
                })
                .forEach(function (e) {
                  C.config[e] = ce(C.config[e] || []).map(u);
                }),
                C.isMobile =
                  !C.config.disableMobile &&
                  !C.config.inline &&
                  "single" === C.config.mode &&
                  !C.config.disable.length &&
                  !C.config.enable &&
                  !C.config.weekNumbers &&
                  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                    navigator.userAgent
                  ),
                l = 0;
              l < C.config.plugins.length;
              l++
            ) {
              var c = C.config.plugins[l](C) || {};
              for (var s in c)
                -1 < ne.indexOf(s)
                  ? (C.config[s] = ce(c[s]).map(u).concat(C.config[s]))
                  : void 0 === t[s] && (C.config[s] = c[s]);
            }
            t.altInputClass ||
              (C.config.altInputClass =
                N().className + " " + C.config.altInputClass),
              J("onParseConfig");
          })(),
          Y(),
          (C.input = N()),
          C.input
            ? ((C.input._type = C.input.type),
              (C.input.type = "text"),
              C.input.classList.add("flatpickr-input"),
              (C._input = C.input),
              C.config.altInput &&
                ((C.altInput = de(C.input.nodeName, C.config.altInputClass)),
                (C._input = C.altInput),
                (C.altInput.placeholder = C.input.placeholder),
                (C.altInput.disabled = C.input.disabled),
                (C.altInput.required = C.input.required),
                (C.altInput.tabIndex = C.input.tabIndex),
                (C.altInput.type = "text"),
                C.input.setAttribute("type", "hidden"),
                !C.config.static &&
                  C.input.parentNode &&
                  C.input.parentNode.insertBefore(
                    C.altInput,
                    C.input.nextSibling
                  )),
              C.config.allowInput ||
                C._input.setAttribute("readonly", "readonly"),
              B())
            : C.config.errorHandler(
                new Error("Invalid input element specified")
              ),
          (function () {
            (C.selectedDates = []),
              (C.now = C.parseDate(C.config.now) || new Date());
            var e =
              C.config.defaultDate ||
              (("INPUT" !== C.input.nodeName &&
                "TEXTAREA" !== C.input.nodeName) ||
              !C.input.placeholder ||
              C.input.value !== C.input.placeholder
                ? C.input.value
                : null);
            e && z(e, C.config.dateFormat),
              (C._initialDate =
                0 < C.selectedDates.length
                  ? C.selectedDates[0]
                  : C.config.minDate &&
                    C.config.minDate.getTime() > C.now.getTime()
                  ? C.config.minDate
                  : C.config.maxDate &&
                    C.config.maxDate.getTime() < C.now.getTime()
                  ? C.config.maxDate
                  : C.now),
              (C.currentYear = C._initialDate.getFullYear()),
              (C.currentMonth = C._initialDate.getMonth()),
              0 < C.selectedDates.length &&
                (C.latestSelectedDateObj = C.selectedDates[0]),
              void 0 !== C.config.minTime &&
                (C.config.minTime = C.parseDate(C.config.minTime, "H:i")),
              void 0 !== C.config.maxTime &&
                (C.config.maxTime = C.parseDate(C.config.maxTime, "H:i")),
              (C.minDateHasTime =
                !!C.config.minDate &&
                (0 < C.config.minDate.getHours() ||
                  0 < C.config.minDate.getMinutes() ||
                  0 < C.config.minDate.getSeconds())),
              (C.maxDateHasTime =
                !!C.config.maxDate &&
                (0 < C.config.maxDate.getHours() ||
                  0 < C.config.maxDate.getMinutes() ||
                  0 < C.config.maxDate.getSeconds()));
          })(),
          (C.utils = {
            getDaysInMonth: function (e, t) {
              return (
                void 0 === e && (e = C.currentMonth),
                void 0 === t && (t = C.currentYear),
                1 === e && ((t % 4 == 0 && t % 100 != 0) || t % 400 == 0)
                  ? 29
                  : C.l10n.daysInMonth[e]
              );
            },
          }),
          C.isMobile ||
            (function () {
              var e,
                t,
                n,
                i = window.document.createDocumentFragment();
              (C.calendarContainer = de("div", "flatpickr-calendar")),
                (C.calendarContainer.tabIndex = -1),
                C.config.noCalendar ||
                  (i.appendChild(
                    ((C.monthNav = de("div", "flatpickr-months")),
                    (C.yearElements = []),
                    (C.monthElements = []),
                    (C.prevMonthNav = de("span", "flatpickr-prev-month")),
                    (C.prevMonthNav.innerHTML = C.config.prevArrow),
                    (C.nextMonthNav = de("span", "flatpickr-next-month")),
                    (C.nextMonthNav.innerHTML = C.config.nextArrow),
                    l(),
                    Object.defineProperty(C, "_hidePrevMonthArrow", {
                      get: function () {
                        return C.__hidePrevMonthArrow;
                      },
                      set: function (e) {
                        C.__hidePrevMonthArrow !== e &&
                          (se(C.prevMonthNav, "flatpickr-disabled", e),
                          (C.__hidePrevMonthArrow = e));
                      },
                    }),
                    Object.defineProperty(C, "_hideNextMonthArrow", {
                      get: function () {
                        return C.__hideNextMonthArrow;
                      },
                      set: function (e) {
                        C.__hideNextMonthArrow !== e &&
                          (se(C.nextMonthNav, "flatpickr-disabled", e),
                          (C.__hideNextMonthArrow = e));
                      },
                    }),
                    (C.currentYearElement = C.yearElements[0]),
                    V(),
                    C.monthNav)
                  ),
                  (C.innerContainer = de("div", "flatpickr-innerContainer")),
                  C.config.weekNumbers &&
                    ((t = (e = (function () {
                      C.calendarContainer.classList.add("hasWeeks");
                      var e = de("div", "flatpickr-weekwrapper");
                      e.appendChild(
                        de("span", "flatpickr-weekday", C.l10n.weekAbbreviation)
                      );
                      var t = de("div", "flatpickr-weeks");
                      return (
                        e.appendChild(t), { weekWrapper: e, weekNumbers: t }
                      );
                    })()).weekWrapper),
                    (n = e.weekNumbers),
                    C.innerContainer.appendChild(t),
                    (C.weekNumbers = n),
                    (C.weekWrapper = t)),
                  (C.rContainer = de("div", "flatpickr-rContainer")),
                  C.rContainer.appendChild(c()),
                  C.daysContainer ||
                    ((C.daysContainer = de("div", "flatpickr-days")),
                    (C.daysContainer.tabIndex = -1)),
                  M(),
                  C.rContainer.appendChild(C.daysContainer),
                  C.innerContainer.appendChild(C.rContainer),
                  i.appendChild(C.innerContainer)),
                C.config.enableTime &&
                  i.appendChild(
                    (function () {
                      C.calendarContainer.classList.add("hasTime"),
                        C.config.noCalendar &&
                          C.calendarContainer.classList.add("noCalendar");
                      var e = De(C.config);
                      (C.timeContainer = de("div", "flatpickr-time")),
                        (C.timeContainer.tabIndex = -1);
                      var t = de("span", "flatpickr-time-separator", ":"),
                        n = fe("flatpickr-hour", {
                          "aria-label": C.l10n.hourAriaLabel,
                        });
                      C.hourElement = n.getElementsByTagName("input")[0];
                      var i,
                        a = fe("flatpickr-minute", {
                          "aria-label": C.l10n.minuteAriaLabel,
                        });
                      return (
                        (C.minuteElement = a.getElementsByTagName("input")[0]),
                        (C.hourElement.tabIndex = C.minuteElement.tabIndex =
                          -1),
                        (C.hourElement.value = oe(
                          C.latestSelectedDateObj
                            ? C.latestSelectedDateObj.getHours()
                            : C.config.time_24hr
                            ? e.hours
                            : (function (e) {
                                switch (e % 24) {
                                  case 0:
                                  case 12:
                                    return 12;
                                  default:
                                    return e % 12;
                                }
                              })(e.hours)
                        )),
                        (C.minuteElement.value = oe(
                          C.latestSelectedDateObj
                            ? C.latestSelectedDateObj.getMinutes()
                            : e.minutes
                        )),
                        C.hourElement.setAttribute(
                          "step",
                          C.config.hourIncrement.toString()
                        ),
                        C.minuteElement.setAttribute(
                          "step",
                          C.config.minuteIncrement.toString()
                        ),
                        C.hourElement.setAttribute(
                          "min",
                          C.config.time_24hr ? "0" : "1"
                        ),
                        C.hourElement.setAttribute(
                          "max",
                          C.config.time_24hr ? "23" : "12"
                        ),
                        C.hourElement.setAttribute("maxlength", "2"),
                        C.minuteElement.setAttribute("min", "0"),
                        C.minuteElement.setAttribute("max", "59"),
                        C.minuteElement.setAttribute("maxlength", "2"),
                        C.timeContainer.appendChild(n),
                        C.timeContainer.appendChild(t),
                        C.timeContainer.appendChild(a),
                        C.config.time_24hr &&
                          C.timeContainer.classList.add("time24hr"),
                        C.config.enableSeconds &&
                          (C.timeContainer.classList.add("hasSeconds"),
                          (i = fe("flatpickr-second")),
                          (C.secondElement =
                            i.getElementsByTagName("input")[0]),
                          (C.secondElement.value = oe(
                            C.latestSelectedDateObj
                              ? C.latestSelectedDateObj.getSeconds()
                              : e.seconds
                          )),
                          C.secondElement.setAttribute(
                            "step",
                            C.minuteElement.getAttribute("step")
                          ),
                          C.secondElement.setAttribute("min", "0"),
                          C.secondElement.setAttribute("max", "59"),
                          C.secondElement.setAttribute("maxlength", "2"),
                          C.timeContainer.appendChild(
                            de("span", "flatpickr-time-separator", ":")
                          ),
                          C.timeContainer.appendChild(i)),
                        C.config.time_24hr ||
                          ((C.amPM = de(
                            "span",
                            "flatpickr-am-pm",
                            C.l10n.amPM[
                              re(
                                11 <
                                  (C.latestSelectedDateObj
                                    ? C.hourElement.value
                                    : C.config.defaultHour)
                              )
                            ]
                          )),
                          (C.amPM.title = C.l10n.toggleTitle),
                          (C.amPM.tabIndex = -1),
                          C.timeContainer.appendChild(C.amPM)),
                        C.timeContainer
                      );
                    })()
                  ),
                se(C.calendarContainer, "rangeMode", "range" === C.config.mode),
                se(C.calendarContainer, "animate", !0 === C.config.animate),
                se(C.calendarContainer, "multiMonth", 1 < C.config.showMonths),
                C.calendarContainer.appendChild(i);
              var a,
                o =
                  void 0 !== C.config.appendTo &&
                  void 0 !== C.config.appendTo.nodeType;
              (C.config.inline || C.config.static) &&
                (C.calendarContainer.classList.add(
                  C.config.inline ? "inline" : "static"
                ),
                C.config.inline &&
                  (!o && C.element.parentNode
                    ? C.element.parentNode.insertBefore(
                        C.calendarContainer,
                        C._input.nextSibling
                      )
                    : void 0 !== C.config.appendTo &&
                      C.config.appendTo.appendChild(C.calendarContainer)),
                C.config.static) &&
                ((a = de("div", "flatpickr-wrapper")),
                C.element.parentNode &&
                  C.element.parentNode.insertBefore(a, C.element),
                a.appendChild(C.element),
                C.altInput && a.appendChild(C.altInput),
                a.appendChild(C.calendarContainer)),
                C.config.static ||
                  C.config.inline ||
                  (void 0 !== C.config.appendTo
                    ? C.config.appendTo
                    : window.document.body
                  ).appendChild(C.calendarContainer);
            })(),
          (function () {
            if (
              (C.config.wrap &&
                ["open", "close", "toggle", "clear"].forEach(function (t) {
                  Array.prototype.forEach.call(
                    C.element.querySelectorAll("[data-" + t + "]"),
                    function (e) {
                      return r(e, "click", C[t]);
                    }
                  );
                }),
              C.isMobile)
            )
              return (function () {
                var e = C.config.enableTime
                  ? C.config.noCalendar
                    ? "time"
                    : "datetime-local"
                  : "date";
                (C.mobileInput = de(
                  "input",
                  C.input.className + " flatpickr-mobile"
                )),
                  (C.mobileInput.tabIndex = 1),
                  (C.mobileInput.type = e),
                  (C.mobileInput.disabled = C.input.disabled),
                  (C.mobileInput.required = C.input.required),
                  (C.mobileInput.placeholder = C.input.placeholder),
                  (C.mobileFormatStr =
                    "datetime-local" == e
                      ? "Y-m-d\\TH:i:S"
                      : "date" == e
                      ? "Y-m-d"
                      : "H:i:S"),
                  0 < C.selectedDates.length &&
                    (C.mobileInput.defaultValue = C.mobileInput.value =
                      C.formatDate(C.selectedDates[0], C.mobileFormatStr)),
                  C.config.minDate &&
                    (C.mobileInput.min = C.formatDate(
                      C.config.minDate,
                      "Y-m-d"
                    )),
                  C.config.maxDate &&
                    (C.mobileInput.max = C.formatDate(
                      C.config.maxDate,
                      "Y-m-d"
                    )),
                  C.input.getAttribute("step") &&
                    (C.mobileInput.step = String(C.input.getAttribute("step"))),
                  (C.input.type = "hidden"),
                  void 0 !== C.altInput && (C.altInput.type = "hidden");
                try {
                  C.input.parentNode &&
                    C.input.parentNode.insertBefore(
                      C.mobileInput,
                      C.input.nextSibling
                    );
                } catch (e) {}
                r(C.mobileInput, "change", function (e) {
                  C.setDate(me(e).value, !1, C.mobileFormatStr),
                    J("onChange"),
                    J("onClose");
                });
              })();
            var e = le(j, 50);
            (C._debouncedChange = le(s, 300)),
              C.daysContainer &&
                !/iPhone|iPad|iPod/i.test(navigator.userAgent) &&
                r(C.daysContainer, "mouseover", function (e) {
                  "range" === C.config.mode && P(me(e));
                }),
              r(C._input, "keydown", O),
              void 0 !== C.calendarContainer &&
                r(C.calendarContainer, "keydown", O),
              C.config.inline || C.config.static || r(window, "resize", e),
              void 0 !== window.ontouchstart
                ? r(window.document, "touchstart", T)
                : r(window.document, "mousedown", T),
              r(window.document, "focus", T, { capture: !0 }),
              !0 === C.config.clickOpens &&
                (r(C._input, "focus", C.open), r(C._input, "click", C.open)),
              void 0 !== C.daysContainer &&
                (r(C.monthNav, "click", X),
                r(C.monthNav, ["keyup", "increment"], n),
                r(C.daysContainer, "click", U)),
              void 0 !== C.timeContainer &&
                void 0 !== C.minuteElement &&
                void 0 !== C.hourElement &&
                (r(C.timeContainer, ["increment"], p),
                r(C.timeContainer, "blur", p, { capture: !0 }),
                r(C.timeContainer, "click", o),
                r(
                  [C.hourElement, C.minuteElement],
                  ["focus", "click"],
                  function (e) {
                    return me(e).select();
                  }
                ),
                void 0 !== C.secondElement &&
                  r(C.secondElement, "focus", function () {
                    return C.secondElement && C.secondElement.select();
                  }),
                void 0 !== C.amPM &&
                  r(C.amPM, "click", function (e) {
                    p(e);
                  })),
              C.config.allowInput && r(C._input, "blur", L);
          })(),
          (C.selectedDates.length || C.config.noCalendar) &&
            (C.config.enableTime &&
              a(C.config.noCalendar ? C.latestSelectedDateObj : void 0),
            Z(!1)),
          t();
        var e = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
        !C.isMobile && e && H(), J("onReady");
      })(),
      C
    );
  }
  function n(e, t) {
    for (
      var n = Array.prototype.slice.call(e).filter(function (e) {
          return e instanceof HTMLElement;
        }),
        i = [],
        a = 0;
      a < n.length;
      a++
    ) {
      var o = n[a];
      try {
        if (null !== o.getAttribute("data-fp-omit")) continue;
        void 0 !== o._flatpickr &&
          (o._flatpickr.destroy(), (o._flatpickr = void 0)),
          (o._flatpickr = r(o, t || {})),
          i.push(o._flatpickr);
      } catch (e) {
        console.error(e);
      }
    }
    return 1 === i.length ? i[0] : i;
  }
  "function" != typeof Object.assign &&
    (Object.assign = function (n) {
      for (var e = [], t = 1; t < arguments.length; t++)
        e[t - 1] = arguments[t];
      if (!n) throw TypeError("Cannot convert undefined or null to object");
      for (var i = 0, a = e; i < a.length; i++) {
        !(function (t) {
          t &&
            Object.keys(t).forEach(function (e) {
              return (n[e] = t[e]);
            });
        })(a[i]);
      }
      return n;
    }),
    "undefined" != typeof HTMLElement &&
      "undefined" != typeof HTMLCollection &&
      "undefined" != typeof NodeList &&
      ((HTMLCollection.prototype.flatpickr = NodeList.prototype.flatpickr =
        function (e) {
          return n(this, e);
        }),
      (HTMLElement.prototype.flatpickr = function (e) {
        return n([this], e);
      }));
  var Ce = function (e, t) {
    return "string" == typeof e
      ? n(window.document.querySelectorAll(e), t)
      : e instanceof Node
      ? n([e], t)
      : n(e, t);
  };
  return (
    (Ce.defaultConfig = {}),
    (Ce.l10ns = { en: ee({}, ae), default: ee({}, ae) }),
    (Ce.localize = function (e) {
      Ce.l10ns.default = ee(ee({}, Ce.l10ns.default), e);
    }),
    (Ce.setDefaults = function (e) {
      Ce.defaultConfig = ee(ee({}, Ce.defaultConfig), e);
    }),
    (Ce.parseDate = ve({})),
    (Ce.formatDate = he({})),
    (Ce.compareDates = ye),
    "undefined" != typeof jQuery &&
      void 0 !== jQuery.fn &&
      (jQuery.fn.flatpickr = function (e) {
        return n(this, e);
      }),
    (Date.prototype.fp_incr = function (e) {
      return new Date(
        this.getFullYear(),
        this.getMonth(),
        this.getDate() + ("string" == typeof e ? parseInt(e, 10) : e)
      );
    }),
    "undefined" != typeof window && (window.flatpickr = Ce),
    Ce
  );
});
//# sourceMappingURL=symphony.js.map
