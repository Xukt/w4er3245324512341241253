/*-----------------------------------------------------------------------------------

 	Plugins
 
-----------------------------------------------------------------------------------*/
(function($) {
    'use strict';

    // add browser to body class (for sticky column)
    // $.each($.browser, function(i) { alert(i); });
    var os = ['iphone', 'ipad', 'windows', 'mac', 'linux'];
    var match = navigator.appVersion.toLowerCase().match(new RegExp(os.join('|')));
    if (match) {
        $('body').addClass(match[0]);
    }

    /*! jQuery visible 1.0 teamdf.com/jquery-plugins | teamdf.com/jquery-plugins/license (modified by Spab Rice to check a specefic area on screen)*/
    ! function(t) {
        t.fn.visible = function(e, i, f) {
            var h = t(this).eq(0),
                o = h.get(0),
                n = t(window),
                r = n.scrollTop();
            n = f ? r + f : r + n.height();
            var s = h.offset().top,
                g = s + h.height();
            return f && (g = s + h.height() - (f - 3)), h = e === !0 ? g : s, s = e === !0 ? s : g, !!(i === !0 ? o.offsetWidth * o.offsetHeight : !0) && n >= s && h >= r
        }
    }(jQuery);

    /*! jQuery Unveil - customized - https://github.com/luis-almeida */
    ! function(t) {
        t.fn.unveil = function(e, a) {
            var s, i = t(window),
                r = e || 0,
                n = window.devicePixelRatio > 1 ? "data-src-retina" : "data-src",
                p = this;

            function h() {
                var e = p.filter(function() {
                    var e = t(this);
                    if (!e.is(":hidden")) {
                        var a = i.scrollTop(),
                            s = a + i.height(),
                            n = e.offset().top;
                        return n + e.height() >= a - r && n <= s + r
                    }
                });
                s = e.trigger("unveil"), p = p.not(s)
            }
            return p.parent(".lazy-img").length || (p.wrap('<span class="lazy-wrapper"><span class="lazy-img"></span></span>'), p.parents(".lazy-wrapper").append('<span class="lazy-icon"><span></span></span>'), p.each(function() {
                var t = 400;
                if (void 0 !== jQuery(this).attr("height") && !1 !== jQuery(this).attr("height")) {
                    var e = parseInt(jQuery(this).attr("height"), 10),
                        a = parseInt(jQuery(this).attr("width"), 10);
                    jQuery(this).parents(".lazy-wrapper").css("max-width", a + "px"), jQuery(this).closest(".isotope-grid").data("ratio") && jQuery(this).parents(".lazy-wrapper").css("max-width", "100%");
                    var s = a / e,
                        i = parseInt(jQuery(this).parents(".lazy-wrapper").width(), 10);
                    t = parseInt(i / s, 10)
                }
                jQuery(this).parents(".lazy-wrapper").css({
                    "min-height": t + "px"
                })
            })), this.one("unveil", function() {
                var t = this.getAttribute(n);
                (t = t || this.getAttribute("data-src")) && (this.setAttribute("src", t), this.getAttribute("data-srcset") && this.setAttribute("srcset", this.getAttribute("data-srcset")), jQuery(this).addClass("lazy-loaded"), jQuery(this).parents(".lazy-wrapper").addClass("loaded"), "function" == typeof a && a.call(this))
            }), i.on("scroll.unveil resize.unveil lookup.unveil", h), setTimeout(function() {
                h()
            }, 1e3), this
        }
    }(window.jQuery || window.Zepto);

    /*! jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/ */
    jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
        def: "easeOutQuad",
        swing: function(n, e, u, t, a) {
            return jQuery.easing[jQuery.easing.def](n, e, u, t, a)
        },
        easeInQuad: function(n, e, u, t, a) {
            return t * (e /= a) * e + u
        },
        easeOutQuad: function(n, e, u, t, a) {
            return -t * (e /= a) * (e - 2) + u
        },
        easeInOutQuad: function(n, e, u, t, a) {
            return (e /= a / 2) < 1 ? t / 2 * e * e + u : -t / 2 * (--e * (e - 2) - 1) + u
        },
        easeInCubic: function(n, e, u, t, a) {
            return t * (e /= a) * e * e + u
        },
        easeOutCubic: function(n, e, u, t, a) {
            return t * ((e = e / a - 1) * e * e + 1) + u
        },
        easeInOutCubic: function(n, e, u, t, a) {
            return (e /= a / 2) < 1 ? t / 2 * e * e * e + u : t / 2 * ((e -= 2) * e * e + 2) + u
        },
        easeInQuart: function(n, e, u, t, a) {
            return t * (e /= a) * e * e * e + u
        },
        easeOutQuart: function(n, e, u, t, a) {
            return -t * ((e = e / a - 1) * e * e * e - 1) + u
        },
        easeInOutQuart: function(n, e, u, t, a) {
            return (e /= a / 2) < 1 ? t / 2 * e * e * e * e + u : -t / 2 * ((e -= 2) * e * e * e - 2) + u
        },
        easeInQuint: function(n, e, u, t, a) {
            return t * (e /= a) * e * e * e * e + u
        },
        easeOutQuint: function(n, e, u, t, a) {
            return t * ((e = e / a - 1) * e * e * e * e + 1) + u
        },
        easeInOutQuint: function(n, e, u, t, a) {
            return (e /= a / 2) < 1 ? t / 2 * e * e * e * e * e + u : t / 2 * ((e -= 2) * e * e * e * e + 2) + u
        },
        easeInSine: function(n, e, u, t, a) {
            return -t * Math.cos(e / a * (Math.PI / 2)) + t + u
        },
        easeOutSine: function(n, e, u, t, a) {
            return t * Math.sin(e / a * (Math.PI / 2)) + u
        },
        easeInOutSine: function(n, e, u, t, a) {
            return -t / 2 * (Math.cos(Math.PI * e / a) - 1) + u
        },
        easeInExpo: function(n, e, u, t, a) {
            return 0 == e ? u : t * Math.pow(2, 10 * (e / a - 1)) + u
        },
        easeOutExpo: function(n, e, u, t, a) {
            return e == a ? u + t : t * (-Math.pow(2, -10 * e / a) + 1) + u
        },
        easeInOutExpo: function(n, e, u, t, a) {
            return 0 == e ? u : e == a ? u + t : (e /= a / 2) < 1 ? t / 2 * Math.pow(2, 10 * (e - 1)) + u : t / 2 * (-Math.pow(2, -10 * --e) + 2) + u
        },
        easeInCirc: function(n, e, u, t, a) {
            return -t * (Math.sqrt(1 - (e /= a) * e) - 1) + u
        },
        easeOutCirc: function(n, e, u, t, a) {
            return t * Math.sqrt(1 - (e = e / a - 1) * e) + u
        },
        easeInOutCirc: function(n, e, u, t, a) {
            return (e /= a / 2) < 1 ? -t / 2 * (Math.sqrt(1 - e * e) - 1) + u : t / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + u
        },
        easeInElastic: function(n, e, u, t, a) {
            var r = 1.70158,
                i = 0,
                s = t;
            if (0 == e) return u;
            if (1 == (e /= a)) return u + t;
            if (i || (i = .3 * a), s < Math.abs(t)) {
                s = t;
                var r = i / 4
            } else var r = i / (2 * Math.PI) * Math.asin(t / s);
            return -(s * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * a - r) * (2 * Math.PI) / i)) + u
        },
        easeOutElastic: function(n, e, u, t, a) {
            var r = 1.70158,
                i = 0,
                s = t;
            if (0 == e) return u;
            if (1 == (e /= a)) return u + t;
            if (i || (i = .3 * a), s < Math.abs(t)) {
                s = t;
                var r = i / 4
            } else var r = i / (2 * Math.PI) * Math.asin(t / s);
            return s * Math.pow(2, -10 * e) * Math.sin((e * a - r) * (2 * Math.PI) / i) + t + u
        },
        easeInOutElastic: function(n, e, u, t, a) {
            var r = 1.70158,
                i = 0,
                s = t;
            if (0 == e) return u;
            if (2 == (e /= a / 2)) return u + t;
            if (i || (i = a * (.3 * 1.5)), s < Math.abs(t)) {
                s = t;
                var r = i / 4
            } else var r = i / (2 * Math.PI) * Math.asin(t / s);
            return 1 > e ? -.5 * (s * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * a - r) * (2 * Math.PI) / i)) + u : s * Math.pow(2, -10 * (e -= 1)) * Math.sin((e * a - r) * (2 * Math.PI) / i) * .5 + t + u
        },
        easeInBack: function(n, e, u, t, a, r) {
            return void 0 == r && (r = 1.70158), t * (e /= a) * e * ((r + 1) * e - r) + u
        },
        easeOutBack: function(n, e, u, t, a, r) {
            return void 0 == r && (r = 1.70158), t * ((e = e / a - 1) * e * ((r + 1) * e + r) + 1) + u
        },
        easeInOutBack: function(n, e, u, t, a, r) {
            return void 0 == r && (r = 1.70158), (e /= a / 2) < 1 ? t / 2 * (e * e * (((r *= 1.525) + 1) * e - r)) + u : t / 2 * ((e -= 2) * e * (((r *= 1.525) + 1) * e + r) + 2) + u
        },
        easeInBounce: function(n, e, u, t, a) {
            return t - jQuery.easing.easeOutBounce(n, a - e, 0, t, a) + u
        },
        easeOutBounce: function(n, e, u, t, a) {
            return (e /= a) < 1 / 2.75 ? t * (7.5625 * e * e) + u : 2 / 2.75 > e ? t * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + u : 2.5 / 2.75 > e ? t * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + u : t * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + u
        },
        easeInOutBounce: function(n, e, u, t, a) {
            return a / 2 > e ? .5 * jQuery.easing.easeInBounce(n, 2 * e, 0, t, a) + u : .5 * jQuery.easing.easeOutBounce(n, 2 * e - a, 0, t, a) + .5 * t + u
        }
    }), jQuery.extend(jQuery.easing, {
        easeIn: function(n, e, u, t, a) {
            return jQuery.easing.easeInQuad(n, e, u, t, a)
        },
        easeOut: function(n, e, u, t, a) {
            return jQuery.easing.easeOutQuad(n, e, u, t, a)
        },
        easeInOut: function(n, e, u, t, a) {
            return jQuery.easing.easeInOutQuad(n, e, u, t, a)
        },
        expoin: function(n, e, u, t, a) {
            return jQuery.easing.easeInExpo(n, e, u, t, a)
        },
        expoout: function(n, e, u, t, a) {
            return jQuery.easing.easeOutExpo(n, e, u, t, a)
        },
        expoinout: function(n, e, u, t, a) {
            return jQuery.easing.easeInOutExpo(n, e, u, t, a)
        },
        bouncein: function(n, e, u, t, a) {
            return jQuery.easing.easeInBounce(n, e, u, t, a)
        },
        bounceout: function(n, e, u, t, a) {
            return jQuery.easing.easeOutBounce(n, e, u, t, a)
        },
        bounceinout: function(n, e, u, t, a) {
            return jQuery.easing.easeInOutBounce(n, e, u, t, a)
        },
        elasin: function(n, e, u, t, a) {
            return jQuery.easing.easeInElastic(n, e, u, t, a)
        },
        elasout: function(n, e, u, t, a) {
            return jQuery.easing.easeOutElastic(n, e, u, t, a)
        },
        elasinout: function(n, e, u, t, a) {
            return jQuery.easing.easeInOutElastic(n, e, u, t, a)
        },
        backin: function(n, e, u, t, a) {
            return jQuery.easing.easeInBack(n, e, u, t, a)
        },
        backout: function(n, e, u, t, a) {
            return jQuery.easing.easeOutBack(n, e, u, t, a)
        },
        backinout: function(n, e, u, t, a) {
            return jQuery.easing.easeInOutBack(n, e, u, t, a)
        }
    });

})(jQuery);
