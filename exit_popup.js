! function (e) {
    function o(e) {
        for (var o = e + "=", t = document.cookie.split(";"), n = 0; n < t.length; n++) {
            for (var i = t[n];
                " " == i.charAt(0);) i = i.substring(1);
            if (-1 != i.indexOf(o)) return i.substring(o.length, i.length)
        }
        return 0
    }

    function t() {
        e(".glue_container").fadeOut(function () {
            e(this).remove()
        }), e(".glue_block_layer").fadeOut(function () {
            e(this).remove()
        }), e.removeData(document.body, "glue_var")
    }
    e.glue = function (n) {
        function i() {
            g = !1, e(document).bind("mousemove.bindoffset", function () {
                g && (e(document).bind("mouseleave", function (e) {
                    setTimeout(function () {
                        a(e)
                    }, u.delay)
                }), e(document).unbind("mousemove.bindoffset")), g = !0
            })
        }

        function a(t) {
            if (-1 == t.pageX && -1 == t.pageY) var n = -p + e(document).scrollTop(),
                a = r - e(document).scrollLeft();
            else var n = -t.pageY + e(document).scrollTop(),
                a = t.pageX - e(document).scrollLeft();
            var l, g = -s / m * a,
                y = s / m * a - s;
            if (l = g > n ? y > n ? "bottom" : "left" : y > n ? "right" : "top", !(/Firefox[\/\s](\d+\.\d+)/.test(navigator.userAgent) && 0 > n && n > -s && a > 0 && m > a)) {
                if (-1 != e.inArray(l, u.trigger) || -1 != e.inArray("all", u.trigger)) {
                    var x = (new Date).getTime();
                    if (x - d >= u.mintime && !(x - d > u.maxtime && 0 != u.maxtime || f >= u.maxamount && 0 != u.maxamount || x - v < u.interval && 0 != u.interval || !b)) {
                        var w = o("ck_glue_visit");
                        (0 == u.cookie || 1 == u.cookie && (w < u.maxamount || 0 == u.maxamount)) && (u.onleave.call(this, l), "" != u.layer && c(), f++, 1 == u.cookie && (w++, document.cookie = "ck_glue_visit=" + w + "; path=/"), v = (new Date).getTime())
                    }
                }
                h && (e(document).unbind("mouseleave"), i())
            }
        }

        function c() {
            1 != e.data(document.body, "glue_var") && (e.data(document.body, "glue_var", 1), e('<div class="glue_block_layer"></div>').appendTo("body").css(u.backgroundcss).fadeIn(300), e('<div class="glue_container"></div>').appendTo("body"), e(u.layer).clone().show().css(u.boxcss).appendTo(".glue_container"), u.bgclickclose && e(".glue_block_layer").click(function () {
                t()
            }), u.escclose && e("body").keyup(function (e) {
                27 == e.which && t()
            }))
        }
        var l = {
                layer: "",
                trigger: ["top"],
                delay: 0,
                interval: 0,
                mintime: 0,
                maxtime: 0,
                maxamount: 0,
                cookie: !1,
                bgclickclose: !0,
                escclose: !0,
                onleave: function () {},
                disableleftscroll: !0
            },
            u = e.extend({}, l, n);
        e(u.layer).hide();
        var r, d = (new Date).getTime(),
            s = e(window).height(),
            m = e(window).width(),
            g = !1,
            f = 0,
            v = 0,
            b = !0,
            p = 0;
        if (/Chrome/.test(navigator.userAgent)) {
            var h = !0;
            e(document).width() > m && 1 == u.disableleftscroll && (b = !1)
        }
        var y = parseFloat(e(u.layer).css("height")),
            x = parseFloat(e(u.layer).css("width")),
            w = {
                backgroundcss: {
                    "z-index": "1000",
                    display: "none"
                },
                boxcss: {
                    "z-index": "1000",
                    position: "fixed",
                    left: "50%",
                    top: "50%",
                    height: y + "px",
                    width: x + "px",
                    "margin-left": -x / 2 + "px",
                    "margin-top": -y / 2 + "px"
                }
            };
        e.extend(!0, u, w), e(document).bind("mousemove", function (e) {
            r = e.pageX, p = e.pageY
        }), e(document).bind("mouseleave", function (e) {
            setTimeout(function () {
                a(e)
            }, u.delay)
        }), h && (e(document).unbind("mouseleave"), i()), e(window).resize(function () {
            s = e(window).height(), m = e(window).width()
        })
    }, e.glue_close = function () {
        t()
    }
}(jQuery);