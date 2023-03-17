"use strict";
function _classCallCheck(e, t) {
    if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function")
}
function _defineProperties(e, t) {
    for (var n = 0; n < t.length; n++) {
        var a = t[n];
        a.enumerable = a.enumerable || !1,
        a.configurable = !0,
        "value"in a && (a.writable = !0),
        Object.defineProperty(e, a.key, a)
    }
}
function _createClass(e, t, n) {
    return t && _defineProperties(e.prototype, t),
    n && _defineProperties(e, n),
    Object.defineProperty(e, "prototype", {
        writable: !1
    }),
    e
}
function _toConsumableArray(e) {
    return _arrayWithoutHoles(e) || _iterableToArray(e) || _unsupportedIterableToArray(e) || _nonIterableSpread()
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
}
function _unsupportedIterableToArray(e, t) {
    if (e) {
        if ("string" == typeof e)
            return _arrayLikeToArray(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        return "Map" === (n = "Object" === n && e.constructor ? e.constructor.name : n) || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? _arrayLikeToArray(e, t) : void 0
    }
}
function _iterableToArray(e) {
    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
        return Array.from(e)
}
function _arrayWithoutHoles(e) {
    if (Array.isArray(e))
        return _arrayLikeToArray(e)
}
function _arrayLikeToArray(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, a = new Array(t); n < t; n++)
        a[n] = e[n];
    return a
}
!function(o) {
    function e() {
        o(window).on("load", function() {
            o("#status").fadeOut(),
            o("#preloader").delay(350).fadeOut("slow")
        });
        _toConsumableArray(document.querySelectorAll('[data-bs-toggle="popover"]')).map(function(e) {
            return new bootstrap.Popover(e)
        }),
        _toConsumableArray(document.querySelectorAll('[data-bs-toggle="tooltip"]')).map(function(e) {
            return new bootstrap.Tooltip(e)
        }),
        _toConsumableArray(document.querySelectorAll(".offcanvas")).map(function(e) {
            return new bootstrap.Offcanvas(e)
        });
        var e = document.getElementById("toastPlacement");
        e && document.getElementById("selectToastPlacement").addEventListener("change", function() {
            e.dataset.originalClass || (e.dataset.originalClass = e.className),
            e.className = e.dataset.originalClass + " " + this.value
        });
        [].slice.call(document.querySelectorAll(".toast")).map(function(e) {
            return new bootstrap.Toast(e)
        });
        var a = document.getElementById("liveAlertPlaceholder")
          , t = document.getElementById("liveAlertBtn");
        t && t.addEventListener("click", function() {
            var e, t, n;
            e = "Nice, you triggered this alert message!",
            t = "success",
            (n = document.createElement("div")).innerHTML = ['<div class="alert alert-'.concat(t, ' alert-dismissible" role="alert">'), "   <div>".concat(e, "</div>"), '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>', "</div>"].join(""),
            a.append(n)
        }),
        document.getElementById("app-style").href.includes("rtl.min.css") && (document.getElementsByTagName("html")[0].dir = "rtl")
    }
    function t() {
        var c, e;
        o(".side-nav").length && (c = function(e, t, n, a) {
            return (e /= a / 2) < 1 ? n / 2 * e * e + t : -n / 2 * (--e * (e - 2) - 1) + t
        }
        ,
        e = o(".side-nav li .collapse"),
        o(".side-nav li [data-bs-toggle='collapse']").on("click", function(e) {
            return !1
        }),
        e.on({
            "show.bs.collapse": function(e) {
                var t = o(e.target).parents(".collapse.show");
                o(".side-nav .collapse.show").not(e.target).not(t).collapse("hide")
            }
        }),
        o(".side-nav a").each(function() {
            var e = window.location.href.split(/[?#]/)[0];
            this.href == e && (o(this).addClass("active"),
            o(this).parent().addClass("menuitem-active"),
            o(this).parent().parent().parent().addClass("show"),
            o(this).parent().parent().parent().parent().addClass("menuitem-active"),
            "sidebar-menu" !== (e = o(this).parent().parent().parent().parent().parent().parent()).attr("id") && e.addClass("show"),
            o(this).parent().parent().parent().parent().parent().parent().parent().addClass("menuitem-active"),
            "wrapper" !== (e = o(this).parent().parent().parent().parent().parent().parent().parent().parent().parent()).attr("id") && e.addClass("show"),
            (e = o(this).parent().parent().parent().parent().parent().parent().parent().parent().parent().parent()).is("body") || e.addClass("menuitem-active"))
        }),
        setTimeout(function() {
            var e, n, a, o, r, i, t = document.querySelector("li.menuitem-active .active");
            null != t && (e = document.querySelector(".leftside-menu .simplebar-content-wrapper"),
            t = t.offsetTop - 300,
            e && 100 < t && (a = 600,
            o = (n = e).scrollTop,
            r = t - o,
            i = 0,
            function e() {
                var t = c(i += 20, o, r, a);
                n.scrollTop = t,
                i < a && setTimeout(e, 20)
            }()))
        }, 200))
    }
    var n, a, r, i, c;
    e(),
    n = ".card",
    o(document).on("click", '.card a[data-bs-toggle="remove"]', function(e) {
        e.preventDefault();
        var e = o(this).closest(n)
          , t = e.parent();
        e.remove(),
        0 == t.children().length && t.remove()
    }),
    o(document).on("click", '.card a[data-bs-toggle="reload"]', function(e) {
        e.preventDefault();
        var e = o(this).closest(n)
          , t = (e.append('<div class="card-disabled"><div class="card-portlets-loader"></div></div>'),
        e.find(".card-disabled"));
        setTimeout(function() {
            t.fadeOut("fast", function() {
                t.remove()
            })
        }, 500 + 5 * Math.random() * 300)
    }),
    o(".dropdown-menu a.dropdown-toggle").on("click", function() {
        var e = o(this).next(".dropdown-menu")
          , e = o(this).parent().parent().find(".dropdown-menu").not(e);
        return e.removeClass("show"),
        e.parent().find(".dropdown-toggle").removeClass("show"),
        !1
    }),
    t(),
    o(".navbar-nav").length && (o(".navbar-nav li a").each(function() {
        var e = window.location.href.split(/[?#]/)[0];
        this.href == e && (o(this).addClass("active"),
        o(this).parent().parent().addClass("active"),
        o(this).parent().parent().parent().parent().addClass("active"),
        o(this).parent().parent().parent().parent().parent().parent().addClass("active"))
    }),
    o(".navbar-toggle").on("click", function() {
        o(this).toggleClass("open"),
        o("#navigation").slideToggle(400)
    })),
    a = o(".navbar-custom .dropdown:not(.app-search)"),
    o(document).on("click", function(e) {
        return "top-search" == e.target.id || e.target.closest("#search-dropdown") ? o("#search-dropdown").addClass("d-block") : o("#search-dropdown").removeClass("d-block"),
        !0
    }),
    o("#top-search").on("focus", function(e) {
        return e.preventDefault(),
        a.children(".dropdown-menu.show").removeClass("show"),
        o("#search-dropdown").addClass("d-block"),
        !1
    }),
    a.on("show.bs.dropdown", function() {
        o("#search-dropdown").removeClass("d-block")
    }),
    (r = document.querySelector('[data-toggle="fullscreen"]')) && r.addEventListener("click", function(e) {
        e.preventDefault(),
        document.body.classList.toggle("fullscreen-enable"),
        document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement ? document.cancelFullScreen ? document.cancelFullScreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitCancelFullScreen && document.webkitCancelFullScreen() : document.documentElement.requestFullscreen ? document.documentElement.requestFullscreen() : document.documentElement.mozRequestFullScreen ? document.documentElement.mozRequestFullScreen() : document.documentElement.webkitRequestFullscreen && document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)
    }),
    o("[data-password]").on("click", function() {
        "false" == o(this).attr("data-password") ? (o(this).siblings("input").attr("type", "text"),
        o(this).attr("data-password", "true"),
        o(this).addClass("show-password")) : (o(this).siblings("input").attr("type", "password"),
        o(this).attr("data-password", "false"),
        o(this).removeClass("show-password"))
    }),
    document.querySelectorAll(".needs-validation").forEach(function(t) {
        t.addEventListener("submit", function(e) {
            t.checkValidity() || (e.preventDefault(),
            e.stopPropagation()),
            t.classList.add("was-validated")
        }, !1)
    }),
    jQuery().select2 && o('[data-toggle="select2"]').select2(),
    jQuery().mask && o('[data-toggle="input-mask"]').each(function(e, t) {
        var n = o(t).data("maskFormat")
          , a = o(t).data("reverse");
        null != a ? o(t).mask(n, {
            reverse: a
        }) : o(t).mask(n)
    }),
    jQuery().daterangepicker && (i = {
        startDate: moment().subtract(29, "days"),
        endDate: moment(),
        ranges: {
            Today: [moment(), moment()],
            Yesterday: [moment().subtract(1, "days"), moment().subtract(1, "days")],
            "Last 7 Days": [moment().subtract(6, "days"), moment()],
            "Last 30 Days": [moment().subtract(29, "days"), moment()],
            "This Month": [moment().startOf("month"), moment().endOf("month")],
            "Last Month": [moment().subtract(1, "month").startOf("month"), moment().subtract(1, "month").endOf("month")]
        }
    },
    o('[data-toggle="date-picker-range"]').each(function(e, t) {
        var n = o.extend({}, i, o(t).data())
          , a = n.targetDisplay;
        o(t).daterangepicker(n, function(e, t) {
            a && o(a).html(e.format("MMMM D, YYYY") + " - " + t.format("MMMM D, YYYY"))
        })
    }),
    c = {
        cancelClass: "btn-light",
        applyButtonClasses: "btn-success"
    },
    o('[data-toggle="date-picker"]').each(function(e, t) {
        var n = o.extend({}, c, o(t).data());
        o(t).daterangepicker(n)
    })),
    jQuery().timepicker && (c = {
        showSeconds: !0,
        icons: {
            up: "mdi mdi-chevron-up",
            down: "mdi mdi-chevron-down"
        }
    },
    o('[data-toggle="timepicker"]').each(function(e, t) {
        var n = o.extend({}, c, o(t).data());
        o(t).timepicker(n)
    })),
    jQuery().TouchSpin && (c = {},
    o('[data-toggle="touchspin"]').each(function(e, t) {
        var n = o.extend({}, c, o(t).data());
        o(t).TouchSpin(n)
    })),
    jQuery().maxlength && (c = {
        warningClass: "badge bg-success",
        limitReachedClass: "badge bg-danger",
        separator: " out of ",
        preText: "You typed ",
        postText: " chars available.",
        placement: "bottom"
    },
    o('[data-toggle="maxlength"]').each(function(e, t) {
        var n = o.extend({}, c, o(t).data());
        o(t).maxlength(n)
    }))
}(jQuery);
var ThemeCustomizer = function() {
    function e() {
        _classCallCheck(this, e),
        this.html = document.getElementsByTagName("html")[0],
        this.config = {},
        this.defaultConfig = window.config
    }
    return _createClass(e, [{
        key: "initConfig",
        value: function() {
            this.defaultConfig = JSON.parse(JSON.stringify(window.defaultConfig)),
            this.config = JSON.parse(JSON.stringify(window.config)),
            this.setSwitchFromConfig()
        }
    }, {
        key: "changeMenuColor",
        value: function(e) {
            this.config.menu.color = e,
            this.html.setAttribute("data-menu-color", e),
            this.setSwitchFromConfig()
        }
    }, {
        key: "changeLeftbarSize",
        value: function(e) {
            var t = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1];
            this.html.setAttribute("data-sidenav-size", e),
            t && (this.config.sidenav.size = e,
            this.setSwitchFromConfig())
        }
    }, {
        key: "changeLayoutMode",
        value: function(e) {
            var t = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1];
            this.html.setAttribute("data-layout-mode", e),
            t && (this.config.layout.mode = e,
            this.setSwitchFromConfig())
        }
    }, {
        key: "changeLayoutPosition",
        value: function(e) {
            this.config.layout.position = e,
            this.html.setAttribute("data-layout-position", e),
            this.setSwitchFromConfig()
        }
    }, {
        key: "changeLayoutColor",
        value: function(e) {
            this.config.theme = e,
            this.html.setAttribute("data-theme", e),
            this.setSwitchFromConfig()
        }
    }, {
        key: "changeTopbarColor",
        value: function(e) {
            this.config.topbar.color = e,
            this.html.setAttribute("data-topbar-color", e),
            this.setSwitchFromConfig()
        }
    }, {
        key: "changeSidebarUser",
        value: function(e) {
            (this.config.sidenav.user = e) ? this.html.setAttribute("data-sidenav-user", e) : this.html.removeAttribute("data-sidenav-user"),
            this.setSwitchFromConfig()
        }
    }, {
        key: "resetTheme",
        value: function() {
            this.config = JSON.parse(JSON.stringify(window.defaultConfig)),
            this.changeMenuColor(this.config.menu.color),
            this.changeLeftbarSize(this.config.sidenav.size),
            this.changeLayoutColor(this.config.theme),
            this.changeLayoutMode(this.config.layout.mode),
            this.changeLayoutPosition(this.config.layout.position),
            this.changeTopbarColor(this.config.topbar.color),
            this.changeSidebarUser(this.config.sidenav.user),
            this._adjustLayout()
        }
    }, {
        key: "initSwitchListener",
        value: function() {
            var n = this
              , e = (document.querySelectorAll("input[name=data-menu-color]").forEach(function(t) {
                t.addEventListener("change", function(e) {
                    n.changeMenuColor(t.value)
                })
            }),
            document.querySelectorAll("input[name=data-sidenav-size]").forEach(function(t) {
                t.addEventListener("change", function(e) {
                    n.changeLeftbarSize(t.value)
                })
            }),
            document.querySelectorAll("input[name=data-theme]").forEach(function(t) {
                t.addEventListener("change", function(e) {
                    n.changeLayoutColor(t.value)
                })
            }),
            document.querySelectorAll("input[name=data-layout-mode]").forEach(function(t) {
                t.addEventListener("change", function(e) {
                    n.changeLayoutMode(t.value)
                })
            }),
            document.querySelectorAll("input[name=data-layout-position]").forEach(function(t) {
                t.addEventListener("change", function(e) {
                    n.changeLayoutPosition(t.value)
                })
            }),
            document.querySelectorAll("input[name=data-layout]").forEach(function(t) {
                t.addEventListener("change", function(e) {
                    window.location = "horizontal" === t.value ? "layouts-horizontal.html" : "index.html"
                })
            }),
            document.querySelectorAll("input[name=data-topbar-color]").forEach(function(t) {
                t.addEventListener("change", function(e) {
                    n.changeTopbarColor(t.value)
                })
            }),
            document.querySelectorAll("input[name=sidebar-user]").forEach(function(t) {
                t.addEventListener("change", function(e) {
                    n.changeSidebarUser(t.checked)
                })
            }),
            document.getElementById("light-dark-mode"))
              , e = (e && e.addEventListener("click", function(e) {
                "light" === n.config.theme ? n.changeLayoutColor("dark") : n.changeLayoutColor("light")
            }),
            document.querySelector("#reset-layout"))
              , e = (e && e.addEventListener("click", function(e) {
                n.resetTheme()
            }),
            document.querySelector(".button-toggle-menu"))
              , e = (e && e.addEventListener("click", function() {
                var e = n.config.sidenav.size
                  , t = n.html.getAttribute("data-sidenav-size", e);
                "full" === t ? n.showBackdrop() : "fullscreen" == e ? "fullscreen" === t ? n.changeLeftbarSize("fullscreen" == e ? "default" : e, !1) : n.changeLeftbarSize("fullscreen", !1) : "condensed" === t ? n.changeLeftbarSize("condensed" == e ? "default" : e, !1) : n.changeLeftbarSize("condensed", !1),
                n.html.classList.toggle("sidebar-enable")
            }),
            document.querySelector(".button-close-fullsidebar"));
            e && e.addEventListener("click", function() {
                n.html.classList.remove("sidebar-enable"),
                n.hideBackdrop()
            }),
            document.querySelectorAll(".button-sm-hover").forEach(function(e) {
                e.addEventListener("click", function() {
                    var e = n.config.sidenav.size;
                    "sm-hover-active" === n.html.getAttribute("data-sidenav-size", e) ? n.changeLeftbarSize("sm-hover", !1) : n.changeLeftbarSize("sm-hover-active", !1)
                })
            })
        }
    }, {
        key: "showBackdrop",
        value: function() {
            var e = document.createElement("div")
              , t = (e.id = "custom-backdrop",
            e.classList = "offcanvas-backdrop fade show",
            document.body.appendChild(e),
            document.body.style.overflow = "hidden",
            767 < window.innerWidth && (document.body.style.paddingRight = "15px"),
            this);
            e.addEventListener("click", function(e) {
                t.html.classList.remove("sidebar-enable"),
                t.hideBackdrop()
            })
        }
    }, {
        key: "hideBackdrop",
        value: function() {
            var e = document.getElementById("custom-backdrop");
            e && (document.body.removeChild(e),
            document.body.style.overflow = null,
            document.body.style.paddingRight = null)
        }
    }, {
        key: "initWindowSize",
        value: function() {
            var t = this;
            window.addEventListener("resize", function(e) {
                t._adjustLayout()
            })
        }
    }, {
        key: "_adjustLayout",
        value: function() {
            var e = this;
            window.innerWidth <= 767.98 ? e.changeLeftbarSize("full", !1) : 767 <= window.innerWidth && window.innerWidth <= 1140 ? "full" !== e.config.sidenav.size && "fullscreen" !== e.config.sidenav.size && ("sm-hover" === e.config.sidenav.size ? e.changeLeftbarSize("condensed") : e.changeLeftbarSize("condensed", !1)) : (e.changeLeftbarSize(e.config.sidenav.size),
            e.changeLayoutMode(e.config.layout.mode))
        }
    }, {
        key: "setSwitchFromConfig",
        value: function() {
            sessionStorage.setItem("__HYPER_CONFIG__", JSON.stringify(this.config)),
            document.querySelectorAll(".right-bar input[type=checkbox]").forEach(function(e) {
                e.checked = !1
            });
            var e, t, n, a, o, r, i, c, s = this.config;
            s && (e = document.querySelector("input[type=radio][name=data-layout][value=" + s.nav + "]"),
            t = document.querySelector("input[type=radio][name=data-theme][value=" + s.theme + "]"),
            n = document.querySelector("input[type=radio][name=data-layout-mode][value=" + s.layout.mode + "]"),
            a = document.querySelector("input[type=radio][name=data-topbar-color][value=" + s.topbar.color + "]"),
            o = document.querySelector("input[type=radio][name=data-menu-color][value=" + s.menu.color + "]"),
            r = document.querySelector("input[type=radio][name=data-sidenav-size][value=" + s.sidenav.size + "]"),
            i = document.querySelector("input[type=radio][name=data-layout-position][value=" + s.layout.position + "]"),
            c = document.querySelector("input[type=checkbox][name=sidebar-user]"),
            e && (e.checked = !0),
            t && (t.checked = !0),
            n && (n.checked = !0),
            a && (a.checked = !0),
            o && (o.checked = !0),
            r && (r.checked = !0),
            i && (i.checked = !0),
            c && "true" === s.sidenav.user.toString() && (c.checked = !0))
        }
    }, {
        key: "init",
        value: function() {
            this.initConfig(),
            this.initSwitchListener(),
            this.initWindowSize(),
            this._adjustLayout(),
            this.setSwitchFromConfig()
        }
    }]),
    e
}();
(new ThemeCustomizer).init();

"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(n="Object"===n&&e.constructor?e.constructor.name:n)||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(e,t):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}!function(o){function e(){o(window).on("load",function(){o("#status").fadeOut(),o("#preloader").delay(350).fadeOut("slow")});_toConsumableArray(document.querySelectorAll('[data-bs-toggle="popover"]')).map(function(e){return new bootstrap.Popover(e)}),_toConsumableArray(document.querySelectorAll('[data-bs-toggle="tooltip"]')).map(function(e){return new bootstrap.Tooltip(e)}),_toConsumableArray(document.querySelectorAll(".offcanvas")).map(function(e){return new bootstrap.Offcanvas(e)});var e=document.getElementById("toastPlacement");e&&document.getElementById("selectToastPlacement").addEventListener("change",function(){e.dataset.originalClass||(e.dataset.originalClass=e.className),e.className=e.dataset.originalClass+" "+this.value});[].slice.call(document.querySelectorAll(".toast")).map(function(e){return new bootstrap.Toast(e)});var a=document.getElementById("liveAlertPlaceholder"),t=document.getElementById("liveAlertBtn");t&&t.addEventListener("click",function(){var e,t,n;e="Nice, you triggered this alert message!",t="success",(n=document.createElement("div")).innerHTML=['<div class="alert alert-'.concat(t,' alert-dismissible" role="alert">'),"   <div>".concat(e,"</div>"),'   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',"</div>"].join(""),a.append(n)}),document.getElementById("app-style").href.includes("rtl.min.css")&&(document.getElementsByTagName("html")[0].dir="rtl")}function t(){var c,e;o(".side-nav").length&&(c=function(e,t,n,a){return(e/=a/2)<1?n/2*e*e+t:-n/2*(--e*(e-2)-1)+t},e=o(".side-nav li .collapse"),o(".side-nav li [data-bs-toggle='collapse']").on("click",function(e){return!1}),e.on({"show.bs.collapse":function(e){var t=o(e.target).parents(".collapse.show");o(".side-nav .collapse.show").not(e.target).not(t).collapse("hide")}}),o(".side-nav a").each(function(){var e=window.location.href.split(/[?#]/)[0];this.href==e&&(o(this).addClass("active"),o(this).parent().addClass("menuitem-active"),o(this).parent().parent().parent().addClass("show"),o(this).parent().parent().parent().parent().addClass("menuitem-active"),"sidebar-menu"!==(e=o(this).parent().parent().parent().parent().parent().parent()).attr("id")&&e.addClass("show"),o(this).parent().parent().parent().parent().parent().parent().parent().addClass("menuitem-active"),"wrapper"!==(e=o(this).parent().parent().parent().parent().parent().parent().parent().parent().parent()).attr("id")&&e.addClass("show"),(e=o(this).parent().parent().parent().parent().parent().parent().parent().parent().parent().parent()).is("body")||e.addClass("menuitem-active"))}),setTimeout(function(){var e,n,a,o,r,i,t=document.querySelector("li.menuitem-active .active");null!=t&&(e=document.querySelector(".leftside-menu .simplebar-content-wrapper"),t=t.offsetTop-300,e&&100<t&&(a=600,o=(n=e).scrollTop,r=t-o,i=0,function e(){var t=c(i+=20,o,r,a);n.scrollTop=t,i<a&&setTimeout(e,20)}()))},200))}var n,a,r,i,c;e(),n=".card",o(document).on("click",'.card a[data-bs-toggle="remove"]',function(e){e.preventDefault();var e=o(this).closest(n),t=e.parent();e.remove(),0==t.children().length&&t.remove()}),o(document).on("click",'.card a[data-bs-toggle="reload"]',function(e){e.preventDefault();var e=o(this).closest(n),t=(e.append('<div class="card-disabled"><div class="card-portlets-loader"></div></div>'),e.find(".card-disabled"));setTimeout(function(){t.fadeOut("fast",function(){t.remove()})},500+5*Math.random()*300)}),o(".dropdown-menu a.dropdown-toggle").on("click",function(){var e=o(this).next(".dropdown-menu"),e=o(this).parent().parent().find(".dropdown-menu").not(e);return e.removeClass("show"),e.parent().find(".dropdown-toggle").removeClass("show"),!1}),t(),o(".navbar-nav").length&&(o(".navbar-nav li a").each(function(){var e=window.location.href.split(/[?#]/)[0];this.href==e&&(o(this).addClass("active"),o(this).parent().parent().addClass("active"),o(this).parent().parent().parent().parent().addClass("active"),o(this).parent().parent().parent().parent().parent().parent().addClass("active"))}),o(".navbar-toggle").on("click",function(){o(this).toggleClass("open"),o("#navigation").slideToggle(400)})),a=o(".navbar-custom .dropdown:not(.app-search)"),o(document).on("click",function(e){return"top-search"==e.target.id||e.target.closest("#search-dropdown")?o("#search-dropdown").addClass("d-block"):o("#search-dropdown").removeClass("d-block"),!0}),o("#top-search").on("focus",function(e){return e.preventDefault(),a.children(".dropdown-menu.show").removeClass("show"),o("#search-dropdown").addClass("d-block"),!1}),a.on("show.bs.dropdown",function(){o("#search-dropdown").removeClass("d-block")}),(r=document.querySelector('[data-toggle="fullscreen"]'))&&r.addEventListener("click",function(e){e.preventDefault(),document.body.classList.toggle("fullscreen-enable"),document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement?document.cancelFullScreen?document.cancelFullScreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitCancelFullScreen&&document.webkitCancelFullScreen():document.documentElement.requestFullscreen?document.documentElement.requestFullscreen():document.documentElement.mozRequestFullScreen?document.documentElement.mozRequestFullScreen():document.documentElement.webkitRequestFullscreen&&document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)}),o("[data-password]").on("click",function(){"false"==o(this).attr("data-password")?(o(this).siblings("input").attr("type","text"),o(this).attr("data-password","true"),o(this).addClass("show-password")):(o(this).siblings("input").attr("type","password"),o(this).attr("data-password","false"),o(this).removeClass("show-password"))}),document.querySelectorAll(".needs-validation").forEach(function(t){t.addEventListener("submit",function(e){t.checkValidity()||(e.preventDefault(),e.stopPropagation()),t.classList.add("was-validated")},!1)}),jQuery().select2&&o('[data-toggle="select2"]').select2(),jQuery().mask&&o('[data-toggle="input-mask"]').each(function(e,t){var n=o(t).data("maskFormat"),a=o(t).data("reverse");null!=a?o(t).mask(n,{reverse:a}):o(t).mask(n)}),jQuery().daterangepicker&&(i={startDate:moment().subtract(29,"days"),endDate:moment(),ranges:{Today:[moment(),moment()],Yesterday:[moment().subtract(1,"days"),moment().subtract(1,"days")],"Last 7 Days":[moment().subtract(6,"days"),moment()],"Last 30 Days":[moment().subtract(29,"days"),moment()],"This Month":[moment().startOf("month"),moment().endOf("month")],"Last Month":[moment().subtract(1,"month").startOf("month"),moment().subtract(1,"month").endOf("month")]}},o('[data-toggle="date-picker-range"]').each(function(e,t){var n=o.extend({},i,o(t).data()),a=n.targetDisplay;o(t).daterangepicker(n,function(e,t){a&&o(a).html(e.format("MMMM D, YYYY")+" - "+t.format("MMMM D, YYYY"))})}),c={cancelClass:"btn-light",applyButtonClasses:"btn-success"},o('[data-toggle="date-picker"]').each(function(e,t){var n=o.extend({},c,o(t).data());o(t).daterangepicker(n)})),jQuery().timepicker&&(c={showSeconds:!0,icons:{up:"mdi mdi-chevron-up",down:"mdi mdi-chevron-down"}},o('[data-toggle="timepicker"]').each(function(e,t){var n=o.extend({},c,o(t).data());o(t).timepicker(n)})),jQuery().TouchSpin&&(c={},o('[data-toggle="touchspin"]').each(function(e,t){var n=o.extend({},c,o(t).data());o(t).TouchSpin(n)})),jQuery().maxlength&&(c={warningClass:"badge bg-success",limitReachedClass:"badge bg-danger",separator:" out of ",preText:"You typed ",postText:" chars available.",placement:"bottom"},o('[data-toggle="maxlength"]').each(function(e,t){var n=o.extend({},c,o(t).data());o(t).maxlength(n)}))}(jQuery);var ThemeCustomizer=function(){function e(){_classCallCheck(this,e),this.html=document.getElementsByTagName("html")[0],this.config={},this.defaultConfig=window.config}return _createClass(e,[{key:"initConfig",value:function(){this.defaultConfig=JSON.parse(JSON.stringify(window.defaultConfig)),this.config=JSON.parse(JSON.stringify(window.config)),this.setSwitchFromConfig()}},{key:"changeMenuColor",value:function(e){this.config.menu.color=e,this.html.setAttribute("data-menu-color",e),this.setSwitchFromConfig()}},{key:"changeLeftbarSize",value:function(e){var t=!(1<arguments.length&&void 0!==arguments[1])||arguments[1];this.html.setAttribute("data-sidenav-size",e),t&&(this.config.sidenav.size=e,this.setSwitchFromConfig())}},{key:"changeLayoutMode",value:function(e){var t=!(1<arguments.length&&void 0!==arguments[1])||arguments[1];this.html.setAttribute("data-layout-mode",e),t&&(this.config.layout.mode=e,this.setSwitchFromConfig())}},{key:"changeLayoutPosition",value:function(e){this.config.layout.position=e,this.html.setAttribute("data-layout-position",e),this.setSwitchFromConfig()}},{key:"changeLayoutColor",value:function(e){this.config.theme=e,this.html.setAttribute("data-theme",e),this.setSwitchFromConfig()}},{key:"changeTopbarColor",value:function(e){this.config.topbar.color=e,this.html.setAttribute("data-topbar-color",e),this.setSwitchFromConfig()}},{key:"changeSidebarUser",value:function(e){(this.config.sidenav.user=e)?this.html.setAttribute("data-sidenav-user",e):this.html.removeAttribute("data-sidenav-user"),this.setSwitchFromConfig()}},{key:"resetTheme",value:function(){this.config=JSON.parse(JSON.stringify(window.defaultConfig)),this.changeMenuColor(this.config.menu.color),this.changeLeftbarSize(this.config.sidenav.size),this.changeLayoutColor(this.config.theme),this.changeLayoutMode(this.config.layout.mode),this.changeLayoutPosition(this.config.layout.position),this.changeTopbarColor(this.config.topbar.color),this.changeSidebarUser(this.config.sidenav.user),this._adjustLayout()}},{key:"initSwitchListener",value:function(){var n=this,e=(document.querySelectorAll("input[name=data-menu-color]").forEach(function(t){t.addEventListener("change",function(e){n.changeMenuColor(t.value)})}),document.querySelectorAll("input[name=data-sidenav-size]").forEach(function(t){t.addEventListener("change",function(e){n.changeLeftbarSize(t.value)})}),document.querySelectorAll("input[name=data-theme]").forEach(function(t){t.addEventListener("change",function(e){n.changeLayoutColor(t.value)})}),document.querySelectorAll("input[name=data-layout-mode]").forEach(function(t){t.addEventListener("change",function(e){n.changeLayoutMode(t.value)})}),document.querySelectorAll("input[name=data-layout-position]").forEach(function(t){t.addEventListener("change",function(e){n.changeLayoutPosition(t.value)})}),document.querySelectorAll("input[name=data-layout]").forEach(function(t){t.addEventListener("change",function(e){window.location="horizontal"===t.value?"layouts-horizontal.html":"index.html"})}),document.querySelectorAll("input[name=data-topbar-color]").forEach(function(t){t.addEventListener("change",function(e){n.changeTopbarColor(t.value)})}),document.querySelectorAll("input[name=sidebar-user]").forEach(function(t){t.addEventListener("change",function(e){n.changeSidebarUser(t.checked)})}),document.getElementById("light-dark-mode")),e=(e&&e.addEventListener("click",function(e){"light"===n.config.theme?n.changeLayoutColor("dark"):n.changeLayoutColor("light")}),document.querySelector("#reset-layout")),e=(e&&e.addEventListener("click",function(e){n.resetTheme()}),document.querySelector(".button-toggle-menu")),e=(e&&e.addEventListener("click",function(){var e=n.config.sidenav.size,t=n.html.getAttribute("data-sidenav-size",e);"full"===t?n.showBackdrop():"fullscreen"==e?"fullscreen"===t?n.changeLeftbarSize("fullscreen"==e?"default":e,!1):n.changeLeftbarSize("fullscreen",!1):"condensed"===t?n.changeLeftbarSize("condensed"==e?"default":e,!1):n.changeLeftbarSize("condensed",!1),n.html.classList.toggle("sidebar-enable")}),document.querySelector(".button-close-fullsidebar"));e&&e.addEventListener("click",function(){n.html.classList.remove("sidebar-enable"),n.hideBackdrop()}),document.querySelectorAll(".button-sm-hover").forEach(function(e){e.addEventListener("click",function(){var e=n.config.sidenav.size;"sm-hover-active"===n.html.getAttribute("data-sidenav-size",e)?n.changeLeftbarSize("sm-hover",!1):n.changeLeftbarSize("sm-hover-active",!1)})})}},{key:"showBackdrop",value:function(){var e=document.createElement("div"),t=(e.id="custom-backdrop",e.classList="offcanvas-backdrop fade show",document.body.appendChild(e),document.body.style.overflow="hidden",767<window.innerWidth&&(document.body.style.paddingRight="15px"),this);e.addEventListener("click",function(e){t.html.classList.remove("sidebar-enable"),t.hideBackdrop()})}},{key:"hideBackdrop",value:function(){var e=document.getElementById("custom-backdrop");e&&(document.body.removeChild(e),document.body.style.overflow=null,document.body.style.paddingRight=null)}},{key:"initWindowSize",value:function(){var t=this;window.addEventListener("resize",function(e){t._adjustLayout()})}},{key:"_adjustLayout",value:function(){var e=this;window.innerWidth<=767.98?e.changeLeftbarSize("full",!1):767<=window.innerWidth&&window.innerWidth<=1140?"full"!==e.config.sidenav.size&&"fullscreen"!==e.config.sidenav.size&&("sm-hover"===e.config.sidenav.size?e.changeLeftbarSize("condensed"):e.changeLeftbarSize("condensed",!1)):(e.changeLeftbarSize(e.config.sidenav.size),e.changeLayoutMode(e.config.layout.mode))}},{key:"setSwitchFromConfig",value:function(){sessionStorage.setItem("__HYPER_CONFIG__",JSON.stringify(this.config)),document.querySelectorAll(".right-bar input[type=checkbox]").forEach(function(e){e.checked=!1});var e,t,n,a,o,r,i,c,s=this.config;s&&(e=document.querySelector("input[type=radio][name=data-layout][value="+s.nav+"]"),t=document.querySelector("input[type=radio][name=data-theme][value="+s.theme+"]"),n=document.querySelector("input[type=radio][name=data-layout-mode][value="+s.layout.mode+"]"),a=document.querySelector("input[type=radio][name=data-topbar-color][value="+s.topbar.color+"]"),o=document.querySelector("input[type=radio][name=data-menu-color][value="+s.menu.color+"]"),r=document.querySelector("input[type=radio][name=data-sidenav-size][value="+s.sidenav.size+"]"),i=document.querySelector("input[type=radio][name=data-layout-position][value="+s.layout.position+"]"),c=document.querySelector("input[type=checkbox][name=sidebar-user]"),e&&(e.checked=!0),t&&(t.checked=!0),n&&(n.checked=!0),a&&(a.checked=!0),o&&(o.checked=!0),r&&(r.checked=!0),i&&(i.checked=!0),c&&"true"===s.sidenav.user.toString()&&(c.checked=!0))}},{key:"init",value:function(){this.initConfig(),this.initSwitchListener(),this.initWindowSize(),this._adjustLayout(),this.setSwitchFromConfig()}}]),e}();(new ThemeCustomizer).init();
/**
 
*  Author:  KT
* Module/App: Theme Config Js
*/

(function () {
    var savedConfig = sessionStorage.getItem("__HYPER_CONFIG__");
    // var savedConfig = localStorage.getItem("__HYPER_CONFIG__");

    var html = document.getElementsByTagName("html")[0];

    //  Default Config Value
    var defaultConfig = {
        theme: "light",

        nav: "vertical",

        layout: {
            mode: "fluid",
            position: "fixed",
        },

        topbar: {
            color: "light",
        },

        menu: {
            color: "dark",
        },

        // This option for only vertical (left Sidebar) layout
        sidenav: {
            size: "default",
            user: false,
        },
    };


    this.html = document.getElementsByTagName('html')[0];

    config = Object.assign(JSON.parse(JSON.stringify(defaultConfig)), {});

    var layoutColor = this.html.getAttribute('data-theme');
    config['theme'] = layoutColor !== null ? layoutColor : defaultConfig.theme;

    var layoutNav = this.html.getAttribute('data-layout');
    config['nav'] = layoutNav !== null ? layoutNav === 'topnav' ? 'horizontal' : 'vertical' : defaultConfig.nav;

    var layoutSize = this.html.getAttribute('data-layout-mode');
    config['layout']['mode'] = layoutSize !== null ? layoutSize : defaultConfig.layout.mode;

    var layoutMode = this.html.getAttribute('data-layout-position');
    config['layout']['position'] = layoutMode !== null ? layoutMode : defaultConfig.layout.position;

    var topbarColor = this.html.getAttribute('data-topbar-color');
    config['topbar']['color'] = topbarColor != null ? topbarColor : defaultConfig.topbar.color;

    var leftbarSize = this.html.getAttribute('data-sidenav-size');
    config['sidenav']['size'] = leftbarSize !== null ? leftbarSize : defaultConfig.sidenav.size;

    var sidebarUser = this.html.getAttribute('data-sidenav-user')
    config['sidenav']['user'] = sidebarUser !== null ? true : defaultConfig.sidenav.user;

    var menuColor = this.html.getAttribute('data-menu-color');
    config['menu']['color'] = menuColor !== null ? menuColor : defaultConfig.menu.color;

    window.defaultConfig = JSON.parse(JSON.stringify(config));

    if (savedConfig !== null) {
        config = JSON.parse(savedConfig);
    }

    window.config = config;

    if (html.getAttribute("data-layout") === "topnav") {
        config.nav = "horizontal"
    } else {
        config.nav = "vertical"
    }

    if (config) {
        html.setAttribute("data-theme", config.theme);
        html.setAttribute("data-layout-mode", config.layout.mode);
        html.setAttribute("data-menu-color", config.menu.color);
        html.setAttribute("data-topbar-color", config.topbar.color);
        html.setAttribute("data-layout-position", config.layout.position);
        if (config.nav == "vertical") {
            let size = config.sidenav.size;
            if (window.innerWidth <= 767) {
                size = "full";
            } else if (window.innerWidth >= 767 && window.innerWidth <= 1140) {
                if (self.config.sidenav.size !== 'full' && self.config.sidenav.size !== 'fullscreen') {
                    size = "condensed";
                }
            }
            html.setAttribute("data-sidenav-size", size);
            if (config.sidenav.user && config.sidenav.user.toString() === "true") {
                html.setAttribute("data-sidenav-user", true);
            } else {
                html.removeAttribute("data-sidenav-user");
            }
        }
    }
})();
/**
 
*  Author:  KT
* Module/App: Layout Js
*/

class ThemeCustomizer {

    constructor() {
        this.html = document.getElementsByTagName('html')[0]
        this.config = {};
        this.defaultConfig = window.config;
    }

    initConfig() {
        this.defaultConfig = JSON.parse(JSON.stringify(window.defaultConfig));
        this.config = JSON.parse(JSON.stringify(window.config));
        this.setSwitchFromConfig();
    }

    changeMenuColor(color) {
        this.config.menu.color = color;
        this.html.setAttribute('data-menu-color', color);
        this.setSwitchFromConfig();
    }

    changeLeftbarSize(size, save = true) {
        this.html.setAttribute('data-sidenav-size', size);
        if (save) {
            this.config.sidenav.size = size;
            this.setSwitchFromConfig();
        }
    }

    changeLayoutMode(mode, save = true) {
        this.html.setAttribute('data-layout-mode', mode);
        if (save) {
            this.config.layout.mode = mode;
            this.setSwitchFromConfig();
        }
    }

    changeLayoutPosition(position) {
        this.config.layout.position = position;
        this.html.setAttribute('data-layout-position', position);
        this.setSwitchFromConfig();
    }

    changeLayoutColor(color) {
        this.config.theme = color;
        this.html.setAttribute('data-theme', color);
        this.setSwitchFromConfig();
    }

    changeTopbarColor(color) {
        this.config.topbar.color = color;
        this.html.setAttribute('data-topbar-color', color);
        this.setSwitchFromConfig();
    }

    changeSidebarUser(showUser) {

        this.config.sidenav.user = showUser;
        if (showUser) {
            this.html.setAttribute('data-sidenav-user', showUser);
        } else {
            this.html.removeAttribute('data-sidenav-user');
        }
        this.setSwitchFromConfig();
    }

    resetTheme() {
        this.config = JSON.parse(JSON.stringify(window.defaultConfig));
        this.changeMenuColor(this.config.menu.color);
        this.changeLeftbarSize(this.config.sidenav.size);
        this.changeLayoutColor(this.config.theme);
        this.changeLayoutMode(this.config.layout.mode);
        this.changeLayoutPosition(this.config.layout.position);
        this.changeTopbarColor(this.config.topbar.color);
        this.changeSidebarUser(this.config.sidenav.user);
        this._adjustLayout();
    }

    initSwitchListener() {
        var self = this;
        document.querySelectorAll('input[name=data-menu-color]').forEach(function (element) {
            element.addEventListener('change', function (e) {
                self.changeMenuColor(element.value);
            })
        });

        document.querySelectorAll('input[name=data-sidenav-size]').forEach(function (element) {
            element.addEventListener('change', function (e) {
                self.changeLeftbarSize(element.value);
            })
        });

        document.querySelectorAll('input[name=data-theme]').forEach(function (element) {
            element.addEventListener('change', function (e) {
                self.changeLayoutColor(element.value);
            })
        });
        document.querySelectorAll('input[name=data-layout-mode]').forEach(function (element) {
            element.addEventListener('change', function (e) {
                self.changeLayoutMode(element.value);
            })
        });

        document.querySelectorAll('input[name=data-layout-position]').forEach(function (element) {
            element.addEventListener('change', function (e) {
                self.changeLayoutPosition(element.value);
            })
        });
        document.querySelectorAll('input[name=data-layout]').forEach(function (element) {
            element.addEventListener('change', function (e) {
                window.location = element.value === 'horizontal' ? 'layouts-horizontal.html' : 'index.html'
            })
        });
        document.querySelectorAll('input[name=data-topbar-color]').forEach(function (element) {
            element.addEventListener('change', function (e) {
                self.changeTopbarColor(element.value);
            })
        });
        document.querySelectorAll('input[name=sidebar-user]').forEach(function (element) {
            element.addEventListener('change', function (e) {
                self.changeSidebarUser(element.checked);
            })
        });


        //TopBar Light Dark
        var themeColorToggle = document.getElementById('light-dark-mode');
        if (themeColorToggle) {
            themeColorToggle.addEventListener('click', function (e) {

                if (self.config.theme === 'light') {
                    self.changeLayoutColor('dark');
                } else {
                    self.changeLayoutColor('light');
                }
            });
        }

        var resetBtn = document.querySelector('#reset-layout')
        if (resetBtn) {
            resetBtn.addEventListener('click', function (e) {
                self.resetTheme();
            });
        }

        var menuToggleBtn = document.querySelector('.button-toggle-menu');
        if (menuToggleBtn) {
            menuToggleBtn.addEventListener('click', function () {
                var configSize = self.config.sidenav.size;
                var size = self.html.getAttribute('data-sidenav-size', configSize);

                if (size === 'full') {
                    self.showBackdrop();
                } else {
                    if (configSize == 'fullscreen') {
                        if (size === 'fullscreen') {
                            self.changeLeftbarSize(configSize == 'fullscreen' ? 'default' : configSize, false);
                        } else {
                            self.changeLeftbarSize('fullscreen', false);
                        }
                    } else {
                        if (size === 'condensed') {
                            self.changeLeftbarSize(configSize == 'condensed' ? 'default' : configSize, false);
                        } else {
                            self.changeLeftbarSize('condensed', false);
                        }
                    }
                }

                // Todo: old implementation
                self.html.classList.toggle('sidebar-enable');

            });
        }

        var menuCloseBtn = document.querySelector('.button-close-fullsidebar');
        if (menuCloseBtn) {
            menuCloseBtn.addEventListener('click', function () {
                self.html.classList.remove('sidebar-enable');
                self.hideBackdrop();
            });
        }

        var hoverBtn = document.querySelectorAll('.button-sm-hover');
        hoverBtn.forEach(function (element) {
            element.addEventListener('click', function () {
                var configSize = self.config.sidenav.size;
                var size = self.html.getAttribute('data-sidenav-size', configSize);

                if (size === 'sm-hover-active') {
                    self.changeLeftbarSize('sm-hover', false);
                } else {
                    self.changeLeftbarSize('sm-hover-active', false);
                }
            });
        })
    }

    showBackdrop() {
        const backdrop = document.createElement('div');
        backdrop.id = 'custom-backdrop';
        backdrop.classList = 'offcanvas-backdrop fade show';
        document.body.appendChild(backdrop);
        document.body.style.overflow = "hidden";
        if (window.innerWidth > 767) {
            document.body.style.paddingRight = "15px";
        }
        const self = this
        backdrop.addEventListener('click', function (e) {
            self.html.classList.remove('sidebar-enable');
            self.hideBackdrop();
        })
    }

    hideBackdrop() {
        var backdrop = document.getElementById('custom-backdrop');
        if (backdrop) {
            document.body.removeChild(backdrop);
            document.body.style.overflow = null;
            document.body.style.paddingRight = null;
        }
    }


    initWindowSize() {
        var self = this;
        window.addEventListener('resize', function (e) {
            self._adjustLayout();
        })
    }

    _adjustLayout() {
        var self = this;

        if (window.innerWidth <= 767.98) {
            self.changeLeftbarSize('full', false);
        } else if (window.innerWidth >= 767 && window.innerWidth <= 1140) {
            if (self.config.sidenav.size !== 'full' && self.config.sidenav.size !== 'fullscreen') {
                if (self.config.sidenav.size === 'sm-hover') {
                    self.changeLeftbarSize('condensed');
                } else {
                    self.changeLeftbarSize('condensed', false);
                }
            }
        } else {
            self.changeLeftbarSize(self.config.sidenav.size);
            self.changeLayoutMode(self.config.layout.mode);
        }
    }

    setSwitchFromConfig() {

        sessionStorage.setItem('__HYPER_CONFIG__', JSON.stringify(this.config));
        // localStorage.setItem('__HYPER_CONFIG__', JSON.stringify(this.config));

        document.querySelectorAll('.right-bar input[type=checkbox]').forEach(function (checkbox) {
            checkbox.checked = false;
        })

        var config = this.config;
        if (config) {
            var layoutNavSwitch = document.querySelector('input[type=radio][name=data-layout][value=' + config.nav + ']');
            var layoutColorSwitch = document.querySelector('input[type=radio][name=data-theme][value=' + config.theme + ']');
            var layoutModeSwitch = document.querySelector('input[type=radio][name=data-layout-mode][value=' + config.layout.mode + ']');
            var topbarColorSwitch = document.querySelector('input[type=radio][name=data-topbar-color][value=' + config.topbar.color + ']');
            var menuColorSwitch = document.querySelector('input[type=radio][name=data-menu-color][value=' + config.menu.color + ']');
            var leftbarSizeSwitch = document.querySelector('input[type=radio][name=data-sidenav-size][value=' + config.sidenav.size + ']');
            var layoutSizeSwitch = document.querySelector('input[type=radio][name=data-layout-position][value=' + config.layout.position + ']');
            var sidebarUserSwitch = document.querySelector('input[type=checkbox][name=sidebar-user]');

            if (layoutNavSwitch) layoutNavSwitch.checked = true;
            if (layoutColorSwitch) layoutColorSwitch.checked = true;
            if (layoutModeSwitch) layoutModeSwitch.checked = true;
            if (topbarColorSwitch) topbarColorSwitch.checked = true;
            if (menuColorSwitch) menuColorSwitch.checked = true;
            if (leftbarSizeSwitch) leftbarSizeSwitch.checked = true;
            if (layoutSizeSwitch) layoutSizeSwitch.checked = true;
            if (sidebarUserSwitch && config.sidenav.user.toString() === "true") sidebarUserSwitch.checked = true;
        }
    }

    init() {
        this.initConfig();
        this.initSwitchListener();
        this.initWindowSize();
        this._adjustLayout();
        this.setSwitchFromConfig();
    }
}

new ThemeCustomizer().init();
/**
 
*  Author:  KT
* Module/App: Main Js
*/


(function ($) {

    'use strict';

    // Bootstrap Components
    function initComponents() {

        // loader - Preloader
        $(window).on('load', function () {
            $('#status').fadeOut();
            $('#preloader').delay(350).fadeOut('slow');
        });

        // Popovers
        const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
        const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

        // Tooltips
        const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
        const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

        // offcanvas
        const offcanvasElementList = document.querySelectorAll('.offcanvas')
        const offcanvasList = [...offcanvasElementList].map(offcanvasEl => new bootstrap.Offcanvas(offcanvasEl))

        //Toasts
        var toastPlacement = document.getElementById("toastPlacement");
        if (toastPlacement) {
            document.getElementById("selectToastPlacement").addEventListener("change", function () {
                if (!toastPlacement.dataset.originalClass) {
                    toastPlacement.dataset.originalClass = toastPlacement.className;
                }
                toastPlacement.className = toastPlacement.dataset.originalClass + " " + this.value;
            });
        }

        var toastElList = [].slice.call(document.querySelectorAll('.toast'))
        var toastList = toastElList.map(function (toastEl) {
            return new bootstrap.Toast(toastEl)
        })

        // Bootstrap Alert Live Example
        const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
        const alert = (message, type) => {
            const wrapper = document.createElement('div')
            wrapper.innerHTML = [
                `<div class="alert alert-${type} alert-dismissible" role="alert">`,
                `   <div>${message}</div>`,
                '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
                '</div>'
            ].join('')

            alertPlaceholder.append(wrapper)
        }

        const alertTrigger = document.getElementById('liveAlertBtn')
        if (alertTrigger) {
            alertTrigger.addEventListener('click', () => {
                alert('Nice, you triggered this alert message!', 'success')
            })
        }

        // RTL Layout
        if (document.getElementById('app-style').href.includes('rtl.min.css')) {
            document.getElementsByTagName('html')[0].dir = "rtl";
        }
    }

    // Portlet Widget (Card Reload, Collapse, and Delete)
    function initPortletCard() {

        var portletIdentifier = ".card"
        var portletCloser = '.card a[data-bs-toggle="remove"]'
        var portletRefresher = '.card a[data-bs-toggle="reload"]'
        let self = this

        // Panel closest
        $(document).on("click", portletCloser, function (ev) {
            ev.preventDefault();
            var $portlet = $(this).closest(portletIdentifier);
            var $portlet_parent = $portlet.parent();
            $portlet.remove();
            if ($portlet_parent.children().length == 0) {
                $portlet_parent.remove();
            }
        });

        // Panel Reload
        $(document).on("click", portletRefresher, function (ev) {
            ev.preventDefault();
            var $portlet = $(this).closest(portletIdentifier);
            // This is just a simulation, nothing is going to be reloaded
            $portlet.append('<div class="card-disabled"><div class="card-portlets-loader"></div></div>');
            var $pd = $portlet.find('.card-disabled');
            setTimeout(function () {
                $pd.fadeOut('fast', function () {
                    $pd.remove();
                });
            }, 500 + 300 * (Math.random() * 5));
        });
    }

    //  Multi Dropdown
    function initMultiDropdown() {
        $('.dropdown-menu a.dropdown-toggle').on('click', function () {
            var dropdown = $(this).next('.dropdown-menu');
            var otherDropdown = $(this).parent().parent().find('.dropdown-menu').not(dropdown);
            otherDropdown.removeClass('show')
            otherDropdown.parent().find('.dropdown-toggle').removeClass('show')
            return false;
        });
    }

    // Left Sidebar Menu (Vertical Menu)
    function initLeftSidebar() {
        var self = this;

        if ($(".side-nav").length) {
            var navCollapse = $('.side-nav li .collapse');
            var navToggle = $(".side-nav li [data-bs-toggle='collapse']");
            navToggle.on('click', function (e) {
                return false;
            });

            // open one menu at a time only
            navCollapse.on({
                'show.bs.collapse': function (event) {
                    var parent = $(event.target).parents('.collapse.show');
                    $('.side-nav .collapse.show').not(event.target).not(parent).collapse('hide');
                }
            });

            // activate the menu in left side bar (Vertical Menu) based on url
            $(".side-nav a").each(function () {
                var pageUrl = window.location.href.split(/[?#]/)[0];
                if (this.href == pageUrl) {
                    $(this).addClass("active");
                    $(this).parent().addClass("menuitem-active");
                    $(this).parent().parent().parent().addClass("show");
                    $(this).parent().parent().parent().parent().addClass("menuitem-active"); // add active to li of the current link

                    var firstLevelParent = $(this).parent().parent().parent().parent().parent().parent();
                    if (firstLevelParent.attr('id') !== 'sidebar-menu') firstLevelParent.addClass("show");

                    $(this).parent().parent().parent().parent().parent().parent().parent().addClass("menuitem-active");

                    var secondLevelParent = $(this).parent().parent().parent().parent().parent().parent().parent().parent().parent();
                    if (secondLevelParent.attr('id') !== 'wrapper') secondLevelParent.addClass("show");

                    var upperLevelParent = $(this).parent().parent().parent().parent().parent().parent().parent().parent().parent().parent();
                    if (!upperLevelParent.is('body')) upperLevelParent.addClass("menuitem-active");
                }
            });


            setTimeout(function () {
                var activatedItem = document.querySelector('li.menuitem-active .active');
                if (activatedItem != null) {
                    var simplebarContent = document.querySelector('.leftside-menu .simplebar-content-wrapper');
                    var offset = activatedItem.offsetTop - 300;
                    if (simplebarContent && offset > 100) {
                        scrollTo(simplebarContent, offset, 600);
                    }
                }
            }, 200);

            // scrollTo (Left Side Bar Active Menu)
            function easeInOutQuad(t, b, c, d) {
                t /= d / 2;
                if (t < 1) return c / 2 * t * t + b;
                t--;
                return -c / 2 * (t * (t - 2) - 1) + b;
            }
            function scrollTo(element, to, duration) {
                var start = element.scrollTop, change = to - start, currentTime = 0, increment = 20;
                var animateScroll = function () {
                    currentTime += increment;
                    var val = easeInOutQuad(currentTime, start, change, duration);
                    element.scrollTop = val;
                    if (currentTime < duration) {
                        setTimeout(animateScroll, increment);
                    }
                };
                animateScroll();
            }
        }
    }

    // Topbar Menu (HOrizontal Menu)
    function initTopbarMenu() {
        if ($('.navbar-nav').length) {
            $('.navbar-nav li a').each(function () {
                var pageUrl = window.location.href.split(/[?#]/)[0];
                if (this.href == pageUrl) {
                    $(this).addClass('active');
                    $(this).parent().parent().addClass('active'); // add active to li of the current link
                    $(this).parent().parent().parent().parent().addClass('active');
                    $(this).parent().parent().parent().parent().parent().parent().addClass('active');
                }
            });

            // Topbar - main menu
            $('.navbar-toggle').on('click', function () {
                $(this).toggleClass('open');
                $('#navigation').slideToggle(400);
            });
        }
    }

    // Topbar Search Form
    function initSearch() {
        // Serach Toggle
        var navDropdowns = $('.navbar-custom .dropdown:not(.app-search)');

        // hide on other click
        $(document).on('click', function (e) {
            if (e.target.id == "top-search" || e.target.closest('#search-dropdown')) {
                $('#search-dropdown').addClass('d-block');
            } else {
                $('#search-dropdown').removeClass('d-block');
            }
            return true;
        });

        // Serach Toggle
        $('#top-search').on('focus', function (e) {
            e.preventDefault();
            navDropdowns.children('.dropdown-menu.show').removeClass('show');
            $('#search-dropdown').addClass('d-block');
            return false;
        });

        // hide search on opening other dropdown
        navDropdowns.on('show.bs.dropdown', function () {
            $('#search-dropdown').removeClass('d-block');
        });
    }

    // Topbar Fullscreen Button
    function initfullScreenListener() {
        var self = this;
        var fullScreenBtn = document.querySelector('[data-toggle="fullscreen"]');

        if (fullScreenBtn) {
            fullScreenBtn.addEventListener('click', function (e) {
                e.preventDefault();
                document.body.classList.toggle('fullscreen-enable')
                if (!document.fullscreenElement && /* alternative standard method */ !document.mozFullScreenElement && !document.webkitFullscreenElement) {  // current working methods
                    if (document.documentElement.requestFullscreen) {
                        document.documentElement.requestFullscreen();
                    } else if (document.documentElement.mozRequestFullScreen) {
                        document.documentElement.mozRequestFullScreen();
                    } else if (document.documentElement.webkitRequestFullscreen) {
                        document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
                    }
                } else {
                    if (document.cancelFullScreen) {
                        document.cancelFullScreen();
                    } else if (document.mozCancelFullScreen) {
                        document.mozCancelFullScreen();
                    } else if (document.webkitCancelFullScreen) {
                        document.webkitCancelFullScreen();
                    }
                }
            });
        }
    }

    // Show/Hide Password
    function initShowHidePassword() {
        $("[data-password]").on('click', function () {
            if ($(this).attr('data-password') == "false") {
                $(this).siblings("input").attr("type", "text");
                $(this).attr('data-password', 'true');
                $(this).addClass("show-password");
            } else {
                $(this).siblings("input").attr("type", "password");
                $(this).attr('data-password', 'false');
                $(this).removeClass("show-password");
            }
        });
    }

    // Form Validation
    function initFormValidation() {
        // Example starter JavaScript for disabling form submissions if there are invalid fields
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        // Loop over them and prevent submission
        document.querySelectorAll('.needs-validation').forEach(form => {
            form.addEventListener('submit', event => {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
    }

    // Form Advance
    function initFormAdvance() {
        // Select2
        if (jQuery().select2) {
            $('[data-toggle="select2"]').select2();
        }

        // Input Mask
        if (jQuery().mask) {
            $('[data-toggle="input-mask"]').each(function (idx, obj) {
                var maskFormat = $(obj).data("maskFormat");
                var reverse = $(obj).data("reverse");
                if (reverse != null)
                    $(obj).mask(maskFormat, { 'reverse': reverse });
                else
                    $(obj).mask(maskFormat);
            });
        }

        // Date-Range-Picker
        if (jQuery().daterangepicker) {
            //date pickers ranges only
            var start = moment().subtract(29, 'days');
            var end = moment();
            var defaultRangeOptions = {
                startDate: start,
                endDate: end,
                ranges: {
                    'Today': [moment(), moment()],
                    'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
                    'Last 7 Days': [moment().subtract(6, 'days'), moment()],
                    'Last 30 Days': [moment().subtract(29, 'days'), moment()],
                    'This Month': [moment().startOf('month'), moment().endOf('month')],
                    'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
                }
            };

            $('[data-toggle="date-picker-range"]').each(function (idx, obj) {
                var objOptions = $.extend({}, defaultRangeOptions, $(obj).data());
                var target = objOptions["targetDisplay"];
                //rendering
                $(obj).daterangepicker(objOptions, function (start, end) {
                    if (target)
                        $(target).html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
                });
            });

            // Datetime and date range picker
            var defaultOptions = {
                "cancelClass": "btn-light",
                "applyButtonClasses": "btn-success"
            };

            $('[data-toggle="date-picker"]').each(function (idx, obj) {
                var objOptions = $.extend({}, defaultOptions, $(obj).data());
                $(obj).daterangepicker(objOptions);
            });
        }

        // Bootstrap Timepicker
        if (jQuery().timepicker) {
            var defaultOptions = {
                "showSeconds": true,
                "icons": {
                    "up": "mdi mdi-chevron-up",
                    "down": "mdi mdi-chevron-down"
                }
            };

            $('[data-toggle="timepicker"]').each(function (idx, obj) {
                var objOptions = $.extend({}, defaultOptions, $(obj).data());
                $(obj).timepicker(objOptions);
            });
        }

        // Bootstrap Touchspin
        if (jQuery().TouchSpin) {
            var defaultOptions = {

            };

            $('[data-toggle="touchspin"]').each(function (idx, obj) {
                var objOptions = $.extend({}, defaultOptions, $(obj).data());
                $(obj).TouchSpin(objOptions);
            });
        }

        // Bootstrap Maxlength
        if (jQuery().maxlength) {
            var defaultOptions = {
                warningClass: "badge bg-success",
                limitReachedClass: "badge bg-danger",
                separator: ' out of ',
                preText: 'You typed ',
                postText: ' chars available.',
                placement: 'bottom',
            };

            $('[data-toggle="maxlength"]').each(function (idx, obj) {
                var objOptions = $.extend({}, defaultOptions, $(obj).data());
                $(obj).maxlength(objOptions);
            });
        }
    }

    function init() {
        initComponents();
        initPortletCard();
        initMultiDropdown();
        initLeftSidebar()
        initTopbarMenu();
        initSearch();
        initfullScreenListener();
        initShowHidePassword();
        initFormValidation();
        initFormAdvance();
    }

    init();

})(jQuery)

/**
 
*  Author:  KT
* Module/App: Hightlight the syntax
*/


(function ($) {

    'use strict';

    function initHightlight() {

        //syntax
        var entityMap = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
            "/": "&#x2F;",
        };

        $(document).ready(function () {
            document
                .querySelectorAll("pre span.escape")
                .forEach(function (element, n) {
                    if (element.classList.contains("escape")) {
                        var text = element.innerText;
                    } else {
                        var text = element.innerText;
                    }
                    text = text.replace(/^\n/, "").trimRight(); // goodbye starting whitespace
                    var to_kill = Infinity;
                    var lines = text.split("\n");
                    for (var i = 0; i < lines.length; i++) {
                        if (!lines[i].trim()) {
                            continue;
                        }
                        to_kill = Math.min(lines[i].search(/\S/), to_kill);
                    }
                    var out = [];
                    for (var i = 0; i < lines.length; i++) {
                        out.push(
                            lines[i].replace(new RegExp("^ {" + to_kill + "}", "g"), "")
                        );
                    }
                    element.innerText = out.join("\n");
                });

            document.querySelectorAll("pre span.escape").forEach(function (block) {
                hljs.highlightBlock(block);
            });
        });
    }

    function init() {
        initHightlight();
    }

    init();

})(jQuery)


if (window['ClipboardJS']) {
    var clipboard = new ClipboardJS('.btn-copy-clipboard', {
        target: function (trigger) {
            var highlight = trigger.closest('.tab-pane.active');

            el = highlight.querySelector('.html.escape');

            return el;
        }
    });

    clipboard.on('success', function (e) {
        var originalLabel = e.trigger.innerHTML;
        e.trigger.innerHTML = "Copied";
        setTimeout(function () {
            e.trigger.innerHTML = originalLabel;
        }, 3000);
        e.clearSelection();
    });
}
/*! jQuery v3.6.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],r=Object.getPrototypeOf,s=t.slice,g=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},x=function(e){return null!=e&&e===e.window},E=C.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.6.0",S=function(e,t){return new S.fn.init(e,t)};function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}S.fn=S.prototype={jquery:f,constructor:S,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=S.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return S.each(this,e)},map:function(n){return this.pushStack(S.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(S.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(S.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},S.extend=S.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(S.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||S.isPlainObject(n)?n:{},i=!1,a[t]=S.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},S.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?S.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:y}),"function"==typeof Symbol&&(S.fn[Symbol.iterator]=t[Symbol.iterator]),S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var d=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,S="sizzle"+1*new Date,p=n.document,k=0,r=0,m=ue(),x=ue(),A=ue(),N=ue(),j=function(e,t){return e===t&&(l=!0),0},D={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",F=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",B=new RegExp(M+"+","g"),$=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp(F),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(p.childNodes),p.childNodes),t[p.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!N[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&(U.test(t)||z.test(t))){(f=ee.test(t)&&ye(e.parentNode)||e)===e&&d.scope||((s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=S)),o=(l=h(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+xe(l[o]);c=l.join(",")}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){N(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return g(t.replace($,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[S]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:p;return r!=C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),p!=C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.scope=ce(function(e){return a.appendChild(e).appendChild(C.createElement("div")),"undefined"!=typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=S,!C.getElementsByName||!C.getElementsByName(S).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+S+"'></a><select id='"+S+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+S+"-]").length||v.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||v.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+S+"+*").length||v.push(".#.+[+~]"),e.querySelectorAll("\\\f"),v.push("[\\r\\n\\f]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",F)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},j=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==p&&y(p,e)?-1:t==C||t.ownerDocument==p&&y(p,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]==p?-1:s[r]==p?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(T(e),d.matchesSelector&&E&&!N[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){N(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!=C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&D.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(j),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=m[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&m(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(B," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace($,"$1"));return s[S]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[k,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[S]||(e[S]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===k&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[S]&&(v=Ce(v)),y&&!y[S]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace($,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace($," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=A[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[S]?i.push(a):o.push(a);(a=A(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(k=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=S.split("").sort(j).join("")===S,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);S.find=d,S.expr=d.selectors,S.expr[":"]=S.expr.pseudos,S.uniqueSort=S.unique=d.uniqueSort,S.text=d.getText,S.isXMLDoc=d.isXML,S.contains=d.contains,S.escapeSelector=d.escape;var h=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&S(e).is(n))break;r.push(e)}return r},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=S.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,r){return m(n)?S.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?S.grep(e,function(e){return e===n!==r}):"string"!=typeof n?S.grep(e,function(e){return-1<i.call(n,e)!==r}):S.filter(n,e,r)}S.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?S.find.matchesSelector(r,e)?[r]:[]:S.find.matches(e,S.grep(t,function(e){return 1===e.nodeType}))},S.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(S(e).filter(function(){for(t=0;t<r;t++)if(S.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)S.find(e,i[t],n);return 1<r?S.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&k.test(e)?S(e):e||[],!1).length}});var D,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(S.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||D,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof S?t[0]:t,S.merge(this,S.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),N.test(r[1])&&S.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(S):S.makeArray(e,this)}).prototype=S.fn,D=S(E);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){while((e=e[t])&&1!==e.nodeType);return e}S.fn.extend({has:function(e){var t=S(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(S.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&S(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&S.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?S.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(S(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(S.uniqueSort(S.merge(this.get(),S(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),S.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),S.merge([],e.childNodes))}},function(r,i){S.fn[r]=function(e,t){var n=S.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=S.filter(t,n)),1<this.length&&(H[r]||S.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function R(e){return e}function M(e){throw e}function I(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}S.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},S.each(e.match(P)||[],function(e,t){n[t]=!0}),n):S.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){S.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return S.each(arguments,function(e,t){var n;while(-1<(n=S.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<S.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},S.extend({Deferred:function(e){var o=[["notify","progress",S.Callbacks("memory"),S.Callbacks("memory"),2],["resolve","done",S.Callbacks("once memory"),S.Callbacks("once memory"),0,"resolved"],["reject","fail",S.Callbacks("once memory"),S.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return S.Deferred(function(r){S.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,R,s),l(u,o,M,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,M,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){S.Deferred.exceptionHook&&S.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==M&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(S.Deferred.getStackHook&&(t.stackTrace=S.Deferred.getStackHook()),C.setTimeout(t))}}return S.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:R)),o[2][3].add(l(0,e,m(n)?n:M))}).promise()},promise:function(e){return null!=e?S.extend(e,a):a}},s={};return S.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=S.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(I(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)I(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;S.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&W.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},S.readyException=function(e){C.setTimeout(function(){throw e})};var F=S.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),S.ready()}S.fn.ready=function(e){return F.then(e)["catch"](function(e){S.readyException(e)}),this},S.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--S.readyWait:S.isReady)||(S.isReady=!0)!==e&&0<--S.readyWait||F.resolveWith(E,[S])}}),S.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(S.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var $=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)$(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(S(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(z,U)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=S.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;while(n--)delete r[t[n]]}(void 0===t||S.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!S.isEmptyObject(t)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}S.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),S.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){Q.set(this,n)}):$(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=Q.get(o,n))?t:void 0!==(t=Z(o,n))?t:void 0;this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),S.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,S.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=S.queue(e,t),r=n.length,i=n.shift(),o=S._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){S.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:S.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),S.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?S.queue(this[0],t):void 0===n?this:this.each(function(){var e=S.queue(this,t,n);S._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&S.dequeue(this,t)})},dequeue:function(e){return this.each(function(){S.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=S.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=E.documentElement,ie=function(e){return S.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return S.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});var ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===S.css(e,"display")};function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return S.css(e,t,"")},u=s(),l=n&&n[3]||(S.cssNumber[t]?"":"px"),c=e.nodeType&&(S.cssNumber[t]||"px"!==l&&+u)&&te.exec(S.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)S.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,S.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ue={};function le(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ue[s])||(o=a.body.appendChild(a.createElement(s)),u=S.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ue[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}S.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?S(this).show():S(this).hide()})}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=E.createDocumentFragment().appendChild(E.createElement("div")),(fe=E.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),ce.appendChild(fe),y.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML="<option></option>",y.option=!!ce.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?S.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,y.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))S.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+S.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;S.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<S.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}var be=/^([^.]*)(?:\.(.+)|)/;function we(){return!0}function Te(){return!1}function Ce(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function Ee(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Ee(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Te;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return S().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=S.guid++)),e.each(function(){S.event.add(this,t,i,r,n)})}function Se(e,i,o){o?(Y.set(e,i,!1),S.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(S.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n&&n.value}else r.length&&(Y.set(this,i,{value:S.event.trigger(S.extend(r[0],S.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,i)&&S.event.add(e,i,we)}S.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.get(t);if(V(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&S.find.matchesSelector(re,i),n.guid||(n.guid=S.guid++),(u=v.events)||(u=v.events=Object.create(null)),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof S&&S.event.triggered!==e.type?S.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(P)||[""]).length;while(l--)d=g=(s=be.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=S.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=S.event.special[d]||{},c=S.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&S.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),S.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.hasData(e)&&Y.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(P)||[""]).length;while(l--)if(d=g=(s=be.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=S.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||S.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)S.event.remove(e,d+t[l],n,r,!0);S.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=S.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=S.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=S.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((S.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<S(i,this).index(l):S.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(S.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[S.expando]?e:new S.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Se(t,"click",we),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Se(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},S.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},S.Event=function(e,t){if(!(this instanceof S.Event))return new S.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?we:Te,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&S.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[S.expando]=!0},S.Event.prototype={constructor:S.Event,isDefaultPrevented:Te,isPropagationStopped:Te,isImmediatePropagationStopped:Te,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=we,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=we,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=we,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},S.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},S.event.addProp),S.each({focus:"focusin",blur:"focusout"},function(e,t){S.event.special[e]={setup:function(){return Se(this,e,Ce),!1},trigger:function(){return Se(this,e),!0},_default:function(){return!0},delegateType:t}}),S.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){S.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||S.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),S.fn.extend({on:function(e,t,n,r){return Ee(this,e,t,n,r)},one:function(e,t,n,r){return Ee(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,S(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Te),this.each(function(){S.event.remove(this,e,n,t)})}});var ke=/<script|<style|<link/i,Ae=/checked\s*(?:[^=]|=\s*.checked.)/i,Ne=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function je(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&S(e).children("tbody")[0]||e}function De(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function qe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Le(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)S.event.add(t,i,s[i][n]);Q.hasData(e)&&(o=Q.access(e),a=S.extend({},o),Q.set(t,a))}}function He(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&Ae.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),He(t,r,i,o)});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=S.map(ve(e,"script"),De)).length;c<f;c++)u=e,c!==p&&(u=S.clone(u,!0,!0),s&&S.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,S.map(a,qe),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Y.access(u,"globalEval")&&S.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?S._evalUrl&&!u.noModule&&S._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):b(u.textContent.replace(Ne,""),u,l))}return n}function Oe(e,t,n){for(var r,i=t?S.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||S.cleanData(ve(r)),r.parentNode&&(n&&ie(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}S.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||S.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Le(o[r],a[r]);else Le(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=S.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?S.event.remove(n,r):S.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),S.fn.extend({detach:function(e){return Oe(this,e,!0)},remove:function(e){return Oe(this,e)},text:function(e){return $(this,function(e){return void 0===e?S.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return He(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||je(this,e).appendChild(e)})},prepend:function(){return He(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=je(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(S.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return S.clone(this,e,t)})},html:function(e){return $(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!ke.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=S.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(S.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return He(this,arguments,function(e){var t=this.parentNode;S.inArray(this,n)<0&&(S.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),S.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){S.fn[e]=function(e){for(var t,n=[],r=S(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),S(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Pe=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Re=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},Me=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},Ie=new RegExp(ne.join("|"),"i");function We(e,t,n){var r,i,o,a,s=e.style;return(n=n||Re(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||ie(e)||(a=S.style(e,t)),!y.pixelBoxStyles()&&Pe.test(a)&&Ie.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function Fe(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(u).appendChild(l);var e=C.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),re.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=E.createElement("div"),l=E.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===l.style.backgroundClip,S.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=E.createElement("table"),t=E.createElement("tr"),n=E.createElement("div"),e.style.cssText="position:absolute;left:-11111px;border-collapse:separate",t.style.cssText="border:1px solid",t.style.height="1px",n.style.height="9px",n.style.display="block",re.appendChild(e).appendChild(t).appendChild(n),r=C.getComputedStyle(t),a=parseInt(r.height,10)+parseInt(r.borderTopWidth,10)+parseInt(r.borderBottomWidth,10)===t.offsetHeight,re.removeChild(e)),a}}))}();var Be=["Webkit","Moz","ms"],$e=E.createElement("div").style,_e={};function ze(e){var t=S.cssProps[e]||_e[e];return t||(e in $e?e:_e[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=Be.length;while(n--)if((e=Be[n]+t)in $e)return e}(e)||e)}var Ue=/^(none|table(?!-c[ea]).+)/,Xe=/^--/,Ve={position:"absolute",visibility:"hidden",display:"block"},Ge={letterSpacing:"0",fontWeight:"400"};function Ye(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Qe(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=S.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=S.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=S.css(e,"border"+ne[a]+"Width",!0,i))):(u+=S.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=S.css(e,"border"+ne[a]+"Width",!0,i):s+=S.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function Je(e,t,n){var r=Re(e),i=(!y.boxSizingReliable()||n)&&"border-box"===S.css(e,"boxSizing",!1,r),o=i,a=We(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Pe.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||!y.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===S.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===S.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Qe(e,t,n||(i?"border":"content"),o,r,a)+"px"}function Ke(e,t,n,r,i){return new Ke.prototype.init(e,t,n,r,i)}S.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=We(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Xe.test(t),l=e.style;if(u||(t=ze(s)),a=S.cssHooks[t]||S.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(S.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Xe.test(t)||(t=ze(s)),(a=S.cssHooks[t]||S.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=We(e,t,r)),"normal"===i&&t in Ge&&(i=Ge[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),S.each(["height","width"],function(e,u){S.cssHooks[u]={get:function(e,t,n){if(t)return!Ue.test(S.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Je(e,u,n):Me(e,Ve,function(){return Je(e,u,n)})},set:function(e,t,n){var r,i=Re(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===S.css(e,"boxSizing",!1,i),s=n?Qe(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-Qe(e,u,"border",!1,i)-.5)),s&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=S.css(e,u)),Ye(0,t,s)}}}),S.cssHooks.marginLeft=Fe(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(We(e,"marginLeft"))||e.getBoundingClientRect().left-Me(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),S.each({margin:"",padding:"",border:"Width"},function(i,o){S.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(S.cssHooks[i+o].set=Ye)}),S.fn.extend({css:function(e,t){return $(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Re(e),i=t.length;a<i;a++)o[t[a]]=S.css(e,t[a],!1,r);return o}return void 0!==n?S.style(e,t,n):S.css(e,t)},e,t,1<arguments.length)}}),((S.Tween=Ke).prototype={constructor:Ke,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||S.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(S.cssNumber[n]?"":"px")},cur:function(){var e=Ke.propHooks[this.prop];return e&&e.get?e.get(this):Ke.propHooks._default.get(this)},run:function(e){var t,n=Ke.propHooks[this.prop];return this.options.duration?this.pos=t=S.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Ke.propHooks._default.set(this),this}}).init.prototype=Ke.prototype,(Ke.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=S.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){S.fx.step[e.prop]?S.fx.step[e.prop](e):1!==e.elem.nodeType||!S.cssHooks[e.prop]&&null==e.elem.style[ze(e.prop)]?e.elem[e.prop]=e.now:S.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=Ke.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},S.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},S.fx=Ke.prototype.init,S.fx.step={};var Ze,et,tt,nt,rt=/^(?:toggle|show|hide)$/,it=/queueHooks$/;function ot(){et&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(ot):C.setTimeout(ot,S.fx.interval),S.fx.tick())}function at(){return C.setTimeout(function(){Ze=void 0}),Ze=Date.now()}function st(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ut(e,t,n){for(var r,i=(lt.tweeners[t]||[]).concat(lt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function lt(o,e,t){var n,a,r=0,i=lt.prefilters.length,s=S.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=Ze||at(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:S.extend({},e),opts:S.extend(!0,{specialEasing:{},easing:S.easing._default},t),originalProperties:e,originalOptions:t,startTime:Ze||at(),duration:t.duration,tweens:[],createTween:function(e,t){var n=S.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=S.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=lt.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(S._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return S.map(c,ut,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),S.fx.timer(S.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}S.Animation=S.extend(lt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++)n=e[r],lt.tweeners[n]=lt.tweeners[n]||[],lt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),v=Y.get(e,"fxshow");for(r in n.queue||(null==(a=S._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,S.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],rt.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||S.style(e,r)}if((u=!S.isEmptyObject(t))||!S.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Y.get(e,"display")),"none"===(c=S.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=S.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===S.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Y.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&le([e],!0),p.done(function(){for(r in g||le([e]),Y.remove(e,"fxshow"),d)S.style(e,r,d[r])})),u=ut(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?lt.prefilters.unshift(e):lt.prefilters.push(e)}}),S.speed=function(e,t,n){var r=e&&"object"==typeof e?S.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return S.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in S.fx.speeds?r.duration=S.fx.speeds[r.duration]:r.duration=S.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&S.dequeue(this,r.queue)},r},S.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=S.isEmptyObject(t),o=S.speed(e,n,r),a=function(){var e=lt(this,S.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=S.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&it.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||S.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=S.timers,o=n?n.length:0;for(t.finish=!0,S.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),S.each(["toggle","show","hide"],function(e,r){var i=S.fn[r];S.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(st(r,!0),e,t,n)}}),S.each({slideDown:st("show"),slideUp:st("hide"),slideToggle:st("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){S.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),S.timers=[],S.fx.tick=function(){var e,t=0,n=S.timers;for(Ze=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||S.fx.stop(),Ze=void 0},S.fx.timer=function(e){S.timers.push(e),S.fx.start()},S.fx.interval=13,S.fx.start=function(){et||(et=!0,ot())},S.fx.stop=function(){et=null},S.fx.speeds={slow:600,fast:200,_default:400},S.fn.delay=function(r,e){return r=S.fx&&S.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},tt=E.createElement("input"),nt=E.createElement("select").appendChild(E.createElement("option")),tt.type="checkbox",y.checkOn=""!==tt.value,y.optSelected=nt.selected,(tt=E.createElement("input")).value="t",tt.type="radio",y.radioValue="t"===tt.value;var ct,ft=S.expr.attrHandle;S.fn.extend({attr:function(e,t){return $(this,S.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){S.removeAttr(this,e)})}}),S.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?S.prop(e,t,n):(1===o&&S.isXMLDoc(e)||(i=S.attrHooks[t.toLowerCase()]||(S.expr.match.bool.test(t)?ct:void 0)),void 0!==n?null===n?void S.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=S.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),ct={set:function(e,t,n){return!1===t?S.removeAttr(e,n):e.setAttribute(n,n),n}},S.each(S.expr.match.bool.source.match(/\w+/g),function(e,t){var a=ft[t]||S.find.attr;ft[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=ft[o],ft[o]=r,r=null!=a(e,t,n)?o:null,ft[o]=i),r}});var pt=/^(?:input|select|textarea|button)$/i,dt=/^(?:a|area)$/i;function ht(e){return(e.match(P)||[]).join(" ")}function gt(e){return e.getAttribute&&e.getAttribute("class")||""}function vt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}S.fn.extend({prop:function(e,t){return $(this,S.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[S.propFix[e]||e]})}}),S.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&S.isXMLDoc(e)||(t=S.propFix[t]||t,i=S.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=S.find.attr(e,"tabindex");return t?parseInt(t,10):pt.test(e.nodeName)||dt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(S.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),S.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){S.propFix[this.toLowerCase()]=this}),S.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).addClass(t.call(this,e,gt(this)))});if((e=vt(t)).length)while(n=this[u++])if(i=gt(n),r=1===n.nodeType&&" "+ht(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=ht(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).removeClass(t.call(this,e,gt(this)))});if(!arguments.length)return this.attr("class","");if((e=vt(t)).length)while(n=this[u++])if(i=gt(n),r=1===n.nodeType&&" "+ht(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=ht(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){S(this).toggleClass(i.call(this,e,gt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=S(this),r=vt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=gt(this))&&Y.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Y.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+ht(gt(n))+" ").indexOf(t))return!0;return!1}});var yt=/\r/g;S.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,S(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=S.map(t,function(e){return null==e?"":e+""})),(r=S.valHooks[this.type]||S.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=S.valHooks[t.type]||S.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(yt,""):null==e?"":e:void 0}}),S.extend({valHooks:{option:{get:function(e){var t=S.find.attr(e,"value");return null!=t?t:ht(S.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=S(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=S.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<S.inArray(S.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),S.each(["radio","checkbox"],function(){S.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<S.inArray(S(e).val(),t)}},y.checkOn||(S.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var mt=/^(?:focusinfocus|focusoutblur)$/,xt=function(e){e.stopPropagation()};S.extend(S.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!mt.test(d+S.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[S.expando]?e:new S.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:S.makeArray(t,[e]),c=S.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,mt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&V(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!V(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),S.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,xt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,xt),S.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=S.extend(new S.Event,n,{type:e,isSimulated:!0});S.event.trigger(r,null,t)}}),S.fn.extend({trigger:function(e,t){return this.each(function(){S.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return S.event.trigger(e,t,n,!0)}}),y.focusin||S.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){S.event.simulate(r,e.target,S.event.fix(e))};S.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r))}}});var bt=C.location,wt={guid:Date.now()},Tt=/\?/;S.parseXML=function(e){var t,n;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){}return n=t&&t.getElementsByTagName("parsererror")[0],t&&!n||S.error("Invalid XML: "+(n?S.map(n.childNodes,function(e){return e.textContent}).join("\n"):e)),t};var Ct=/\[\]$/,Et=/\r?\n/g,St=/^(?:submit|button|image|reset|file)$/i,kt=/^(?:input|select|textarea|keygen)/i;function At(n,e,r,i){var t;if(Array.isArray(e))S.each(e,function(e,t){r||Ct.test(n)?i(n,t):At(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)At(n+"["+t+"]",e[t],r,i)}S.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!S.isPlainObject(e))S.each(e,function(){i(this.name,this.value)});else for(n in e)At(n,e[n],t,i);return r.join("&")},S.fn.extend({serialize:function(){return S.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=S.prop(this,"elements");return e?S.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!S(this).is(":disabled")&&kt.test(this.nodeName)&&!St.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=S(this).val();return null==n?null:Array.isArray(n)?S.map(n,function(e){return{name:t.name,value:e.replace(Et,"\r\n")}}):{name:t.name,value:n.replace(Et,"\r\n")}}).get()}});var Nt=/%20/g,jt=/#.*$/,Dt=/([?&])_=[^&]*/,qt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Lt=/^(?:GET|HEAD)$/,Ht=/^\/\//,Ot={},Pt={},Rt="*/".concat("*"),Mt=E.createElement("a");function It(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function Wt(t,i,o,a){var s={},u=t===Pt;function l(e){var r;return s[e]=!0,S.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function Ft(e,t){var n,r,i=S.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&S.extend(!0,e,r),e}Mt.href=bt.href,S.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:bt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(bt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Rt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":S.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Ft(Ft(e,S.ajaxSettings),t):Ft(S.ajaxSettings,e)},ajaxPrefilter:It(Ot),ajaxTransport:It(Pt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=S.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?S(y):S.event,x=S.Deferred(),b=S.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=qt.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||bt.href)+"").replace(Ht,bt.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(P)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Mt.protocol+"//"+Mt.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=S.param(v.data,v.traditional)),Wt(Ot,v,t,T),h)return T;for(i in(g=S.event&&v.global)&&0==S.active++&&S.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Lt.test(v.type),f=v.url.replace(jt,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(Nt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(Tt.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Dt,"$1"),o=(Tt.test(f)?"&":"?")+"_="+wt.guid+++o),v.url=f+o),v.ifModified&&(S.lastModified[f]&&T.setRequestHeader("If-Modified-Since",S.lastModified[f]),S.etag[f]&&T.setRequestHeader("If-None-Match",S.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+Rt+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=Wt(Pt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),!i&&-1<S.inArray("script",v.dataTypes)&&S.inArray("json",v.dataTypes)<0&&(v.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(S.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(S.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--S.active||S.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return S.get(e,t,n,"json")},getScript:function(e,t){return S.get(e,void 0,t,"script")}}),S.each(["get","post"],function(e,i){S[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),S.ajax(S.extend({url:e,type:i,dataType:r,data:t,success:n},S.isPlainObject(e)&&e))}}),S.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),S._evalUrl=function(e,t,n){return S.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){S.globalEval(e,t,n)}})},S.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=S(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){S(this).wrapInner(n.call(this,e))}):this.each(function(){var e=S(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){S(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){S(this).replaceWith(this.childNodes)}),this}}),S.expr.pseudos.hidden=function(e){return!S.expr.pseudos.visible(e)},S.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},S.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var Bt={0:200,1223:204},$t=S.ajaxSettings.xhr();y.cors=!!$t&&"withCredentials"in $t,y.ajax=$t=!!$t,S.ajaxTransport(function(i){var o,a;if(y.cors||$t&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(Bt[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),S.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),S.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return S.globalEval(e),e}}}),S.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),S.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=S("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var _t,zt=[],Ut=/(=)\?(?=&|$)|\?\?/;S.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=zt.pop()||S.expando+"_"+wt.guid++;return this[e]=!0,e}}),S.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Ut.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ut.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Ut,"$1"+r):!1!==e.jsonp&&(e.url+=(Tt.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||S.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?S(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,zt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((_t=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===_t.childNodes.length),S.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&S(o).remove(),S.merge([],i.childNodes)));var r,i,o},S.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=ht(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&S.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?S("<div>").append(S.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},S.expr.pseudos.animated=function(t){return S.grep(S.timers,function(e){return t===e.elem}).length},S.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=S.css(e,"position"),c=S(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=S.css(e,"top"),u=S.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,S.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},S.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){S.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===S.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===S.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=S(e).offset()).top+=S.css(e,"borderTopWidth",!0),i.left+=S.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-S.css(r,"marginTop",!0),left:t.left-i.left-S.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===S.css(e,"position"))e=e.offsetParent;return e||re})}}),S.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;S.fn[t]=function(e){return $(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),S.each(["top","left"],function(e,n){S.cssHooks[n]=Fe(y.pixelPosition,function(e,t){if(t)return t=We(e,n),Pe.test(t)?S(e).position()[n]+"px":t})}),S.each({Height:"height",Width:"width"},function(a,s){S.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){S.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return $(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?S.css(e,t,i):S.style(e,t,n,i)},s,n?e:void 0,n)}})}),S.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){S.fn[t]=function(e){return this.on(t,e)}}),S.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){S.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var Xt=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;S.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||S.guid++,i},S.holdReady=function(e){e?S.readyWait++:S.ready(!0)},S.isArray=Array.isArray,S.parseJSON=JSON.parse,S.nodeName=A,S.isFunction=m,S.isWindow=x,S.camelCase=X,S.type=w,S.now=Date.now,S.isNumeric=function(e){var t=S.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},S.trim=function(e){return null==e?"":(e+"").replace(Xt,"")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return S});var Vt=C.jQuery,Gt=C.$;return S.noConflict=function(e){return C.$===S&&(C.$=Gt),e&&C.jQuery===S&&(C.jQuery=Vt),S},"undefined"==typeof e&&(C.jQuery=C.$=S),S});

/*!
  * Bootstrap v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).bootstrap=e()}(this,(function(){"use strict";const t="transitionend",e=t=>{let e=t.getAttribute("data-bs-target");if(!e||"#"===e){let i=t.getAttribute("href");if(!i||!i.includes("#")&&!i.startsWith("."))return null;i.includes("#")&&!i.startsWith("#")&&(i=`#${i.split("#")[1]}`),e=i&&"#"!==i?i.trim():null}return e},i=t=>{const i=e(t);return i&&document.querySelector(i)?i:null},n=t=>{const i=e(t);return i?document.querySelector(i):null},s=e=>{e.dispatchEvent(new Event(t))},o=t=>!(!t||"object"!=typeof t)&&(void 0!==t.jquery&&(t=t[0]),void 0!==t.nodeType),r=t=>o(t)?t.jquery?t[0]:t:"string"==typeof t&&t.length>0?document.querySelector(t):null,a=t=>{if(!o(t)||0===t.getClientRects().length)return!1;const e="visible"===getComputedStyle(t).getPropertyValue("visibility"),i=t.closest("details:not([open])");if(!i)return e;if(i!==t){const e=t.closest("summary");if(e&&e.parentNode!==i)return!1;if(null===e)return!1}return e},l=t=>!t||t.nodeType!==Node.ELEMENT_NODE||!!t.classList.contains("disabled")||(void 0!==t.disabled?t.disabled:t.hasAttribute("disabled")&&"false"!==t.getAttribute("disabled")),c=t=>{if(!document.documentElement.attachShadow)return null;if("function"==typeof t.getRootNode){const e=t.getRootNode();return e instanceof ShadowRoot?e:null}return t instanceof ShadowRoot?t:t.parentNode?c(t.parentNode):null},h=()=>{},d=t=>{t.offsetHeight},u=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,f=[],p=()=>"rtl"===document.documentElement.dir,g=t=>{var e;e=()=>{const e=u();if(e){const i=t.NAME,n=e.fn[i];e.fn[i]=t.jQueryInterface,e.fn[i].Constructor=t,e.fn[i].noConflict=()=>(e.fn[i]=n,t.jQueryInterface)}},"loading"===document.readyState?(f.length||document.addEventListener("DOMContentLoaded",(()=>{for(const t of f)t()})),f.push(e)):e()},m=t=>{"function"==typeof t&&t()},_=(e,i,n=!0)=>{if(!n)return void m(e);const o=(t=>{if(!t)return 0;let{transitionDuration:e,transitionDelay:i}=window.getComputedStyle(t);const n=Number.parseFloat(e),s=Number.parseFloat(i);return n||s?(e=e.split(",")[0],i=i.split(",")[0],1e3*(Number.parseFloat(e)+Number.parseFloat(i))):0})(i)+5;let r=!1;const a=({target:n})=>{n===i&&(r=!0,i.removeEventListener(t,a),m(e))};i.addEventListener(t,a),setTimeout((()=>{r||s(i)}),o)},b=(t,e,i,n)=>{const s=t.length;let o=t.indexOf(e);return-1===o?!i&&n?t[s-1]:t[0]:(o+=i?1:-1,n&&(o=(o+s)%s),t[Math.max(0,Math.min(o,s-1))])},v=/[^.]*(?=\..*)\.|.*/,y=/\..*/,w=/::\d+$/,A={};let E=1;const T={mouseenter:"mouseover",mouseleave:"mouseout"},C=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function O(t,e){return e&&`${e}::${E++}`||t.uidEvent||E++}function x(t){const e=O(t);return t.uidEvent=e,A[e]=A[e]||{},A[e]}function k(t,e,i=null){return Object.values(t).find((t=>t.callable===e&&t.delegationSelector===i))}function L(t,e,i){const n="string"==typeof e,s=n?i:e||i;let o=N(t);return C.has(o)||(o=t),[n,s,o]}function D(t,e,i,n,s){if("string"!=typeof e||!t)return;let[o,r,a]=L(e,i,n);if(e in T){const t=t=>function(e){if(!e.relatedTarget||e.relatedTarget!==e.delegateTarget&&!e.delegateTarget.contains(e.relatedTarget))return t.call(this,e)};r=t(r)}const l=x(t),c=l[a]||(l[a]={}),h=k(c,r,o?i:null);if(h)return void(h.oneOff=h.oneOff&&s);const d=O(r,e.replace(v,"")),u=o?function(t,e,i){return function n(s){const o=t.querySelectorAll(e);for(let{target:r}=s;r&&r!==this;r=r.parentNode)for(const a of o)if(a===r)return j(s,{delegateTarget:r}),n.oneOff&&P.off(t,s.type,e,i),i.apply(r,[s])}}(t,i,r):function(t,e){return function i(n){return j(n,{delegateTarget:t}),i.oneOff&&P.off(t,n.type,e),e.apply(t,[n])}}(t,r);u.delegationSelector=o?i:null,u.callable=r,u.oneOff=s,u.uidEvent=d,c[d]=u,t.addEventListener(a,u,o)}function S(t,e,i,n,s){const o=k(e[i],n,s);o&&(t.removeEventListener(i,o,Boolean(s)),delete e[i][o.uidEvent])}function I(t,e,i,n){const s=e[i]||{};for(const o of Object.keys(s))if(o.includes(n)){const n=s[o];S(t,e,i,n.callable,n.delegationSelector)}}function N(t){return t=t.replace(y,""),T[t]||t}const P={on(t,e,i,n){D(t,e,i,n,!1)},one(t,e,i,n){D(t,e,i,n,!0)},off(t,e,i,n){if("string"!=typeof e||!t)return;const[s,o,r]=L(e,i,n),a=r!==e,l=x(t),c=l[r]||{},h=e.startsWith(".");if(void 0===o){if(h)for(const i of Object.keys(l))I(t,l,i,e.slice(1));for(const i of Object.keys(c)){const n=i.replace(w,"");if(!a||e.includes(n)){const e=c[i];S(t,l,r,e.callable,e.delegationSelector)}}}else{if(!Object.keys(c).length)return;S(t,l,r,o,s?i:null)}},trigger(t,e,i){if("string"!=typeof e||!t)return null;const n=u();let s=null,o=!0,r=!0,a=!1;e!==N(e)&&n&&(s=n.Event(e,i),n(t).trigger(s),o=!s.isPropagationStopped(),r=!s.isImmediatePropagationStopped(),a=s.isDefaultPrevented());let l=new Event(e,{bubbles:o,cancelable:!0});return l=j(l,i),a&&l.preventDefault(),r&&t.dispatchEvent(l),l.defaultPrevented&&s&&s.preventDefault(),l}};function j(t,e){for(const[i,n]of Object.entries(e||{}))try{t[i]=n}catch(e){Object.defineProperty(t,i,{configurable:!0,get:()=>n})}return t}const M=new Map,H={set(t,e,i){M.has(t)||M.set(t,new Map);const n=M.get(t);n.has(e)||0===n.size?n.set(e,i):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(n.keys())[0]}.`)},get:(t,e)=>M.has(t)&&M.get(t).get(e)||null,remove(t,e){if(!M.has(t))return;const i=M.get(t);i.delete(e),0===i.size&&M.delete(t)}};function $(t){if("true"===t)return!0;if("false"===t)return!1;if(t===Number(t).toString())return Number(t);if(""===t||"null"===t)return null;if("string"!=typeof t)return t;try{return JSON.parse(decodeURIComponent(t))}catch(e){return t}}function W(t){return t.replace(/[A-Z]/g,(t=>`-${t.toLowerCase()}`))}const B={setDataAttribute(t,e,i){t.setAttribute(`data-bs-${W(e)}`,i)},removeDataAttribute(t,e){t.removeAttribute(`data-bs-${W(e)}`)},getDataAttributes(t){if(!t)return{};const e={},i=Object.keys(t.dataset).filter((t=>t.startsWith("bs")&&!t.startsWith("bsConfig")));for(const n of i){let i=n.replace(/^bs/,"");i=i.charAt(0).toLowerCase()+i.slice(1,i.length),e[i]=$(t.dataset[n])}return e},getDataAttribute:(t,e)=>$(t.getAttribute(`data-bs-${W(e)}`))};class F{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(t){return t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t}_mergeConfigObj(t,e){const i=o(e)?B.getDataAttribute(e,"config"):{};return{...this.constructor.Default,..."object"==typeof i?i:{},...o(e)?B.getDataAttributes(e):{},..."object"==typeof t?t:{}}}_typeCheckConfig(t,e=this.constructor.DefaultType){for(const n of Object.keys(e)){const s=e[n],r=t[n],a=o(r)?"element":null==(i=r)?`${i}`:Object.prototype.toString.call(i).match(/\s([a-z]+)/i)[1].toLowerCase();if(!new RegExp(s).test(a))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${n}" provided type "${a}" but expected type "${s}".`)}var i}}class z extends F{constructor(t,e){super(),(t=r(t))&&(this._element=t,this._config=this._getConfig(e),H.set(this._element,this.constructor.DATA_KEY,this))}dispose(){H.remove(this._element,this.constructor.DATA_KEY),P.off(this._element,this.constructor.EVENT_KEY);for(const t of Object.getOwnPropertyNames(this))this[t]=null}_queueCallback(t,e,i=!0){_(t,e,i)}_getConfig(t){return t=this._mergeConfigObj(t,this._element),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}static getInstance(t){return H.get(r(t),this.DATA_KEY)}static getOrCreateInstance(t,e={}){return this.getInstance(t)||new this(t,"object"==typeof e?e:null)}static get VERSION(){return"5.2.3"}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(t){return`${t}${this.EVENT_KEY}`}}const q=(t,e="hide")=>{const i=`click.dismiss${t.EVENT_KEY}`,s=t.NAME;P.on(document,i,`[data-bs-dismiss="${s}"]`,(function(i){if(["A","AREA"].includes(this.tagName)&&i.preventDefault(),l(this))return;const o=n(this)||this.closest(`.${s}`);t.getOrCreateInstance(o)[e]()}))};class R extends z{static get NAME(){return"alert"}close(){if(P.trigger(this._element,"close.bs.alert").defaultPrevented)return;this._element.classList.remove("show");const t=this._element.classList.contains("fade");this._queueCallback((()=>this._destroyElement()),this._element,t)}_destroyElement(){this._element.remove(),P.trigger(this._element,"closed.bs.alert"),this.dispose()}static jQueryInterface(t){return this.each((function(){const e=R.getOrCreateInstance(this);if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}q(R,"close"),g(R);const V='[data-bs-toggle="button"]';class K extends z{static get NAME(){return"button"}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle("active"))}static jQueryInterface(t){return this.each((function(){const e=K.getOrCreateInstance(this);"toggle"===t&&e[t]()}))}}P.on(document,"click.bs.button.data-api",V,(t=>{t.preventDefault();const e=t.target.closest(V);K.getOrCreateInstance(e).toggle()})),g(K);const Q={find:(t,e=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(e,t)),findOne:(t,e=document.documentElement)=>Element.prototype.querySelector.call(e,t),children:(t,e)=>[].concat(...t.children).filter((t=>t.matches(e))),parents(t,e){const i=[];let n=t.parentNode.closest(e);for(;n;)i.push(n),n=n.parentNode.closest(e);return i},prev(t,e){let i=t.previousElementSibling;for(;i;){if(i.matches(e))return[i];i=i.previousElementSibling}return[]},next(t,e){let i=t.nextElementSibling;for(;i;){if(i.matches(e))return[i];i=i.nextElementSibling}return[]},focusableChildren(t){const e=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map((t=>`${t}:not([tabindex^="-"])`)).join(",");return this.find(e,t).filter((t=>!l(t)&&a(t)))}},X={endCallback:null,leftCallback:null,rightCallback:null},Y={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class U extends F{constructor(t,e){super(),this._element=t,t&&U.isSupported()&&(this._config=this._getConfig(e),this._deltaX=0,this._supportPointerEvents=Boolean(window.PointerEvent),this._initEvents())}static get Default(){return X}static get DefaultType(){return Y}static get NAME(){return"swipe"}dispose(){P.off(this._element,".bs.swipe")}_start(t){this._supportPointerEvents?this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX):this._deltaX=t.touches[0].clientX}_end(t){this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX-this._deltaX),this._handleSwipe(),m(this._config.endCallback)}_move(t){this._deltaX=t.touches&&t.touches.length>1?0:t.touches[0].clientX-this._deltaX}_handleSwipe(){const t=Math.abs(this._deltaX);if(t<=40)return;const e=t/this._deltaX;this._deltaX=0,e&&m(e>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(P.on(this._element,"pointerdown.bs.swipe",(t=>this._start(t))),P.on(this._element,"pointerup.bs.swipe",(t=>this._end(t))),this._element.classList.add("pointer-event")):(P.on(this._element,"touchstart.bs.swipe",(t=>this._start(t))),P.on(this._element,"touchmove.bs.swipe",(t=>this._move(t))),P.on(this._element,"touchend.bs.swipe",(t=>this._end(t))))}_eventIsPointerPenTouch(t){return this._supportPointerEvents&&("pen"===t.pointerType||"touch"===t.pointerType)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const G="next",J="prev",Z="left",tt="right",et="slid.bs.carousel",it="carousel",nt="active",st={ArrowLeft:tt,ArrowRight:Z},ot={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},rt={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class at extends z{constructor(t,e){super(t,e),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=Q.findOne(".carousel-indicators",this._element),this._addEventListeners(),this._config.ride===it&&this.cycle()}static get Default(){return ot}static get DefaultType(){return rt}static get NAME(){return"carousel"}next(){this._slide(G)}nextWhenVisible(){!document.hidden&&a(this._element)&&this.next()}prev(){this._slide(J)}pause(){this._isSliding&&s(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval((()=>this.nextWhenVisible()),this._config.interval)}_maybeEnableCycle(){this._config.ride&&(this._isSliding?P.one(this._element,et,(()=>this.cycle())):this.cycle())}to(t){const e=this._getItems();if(t>e.length-1||t<0)return;if(this._isSliding)return void P.one(this._element,et,(()=>this.to(t)));const i=this._getItemIndex(this._getActive());if(i===t)return;const n=t>i?G:J;this._slide(n,e[t])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(t){return t.defaultInterval=t.interval,t}_addEventListeners(){this._config.keyboard&&P.on(this._element,"keydown.bs.carousel",(t=>this._keydown(t))),"hover"===this._config.pause&&(P.on(this._element,"mouseenter.bs.carousel",(()=>this.pause())),P.on(this._element,"mouseleave.bs.carousel",(()=>this._maybeEnableCycle()))),this._config.touch&&U.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const t of Q.find(".carousel-item img",this._element))P.on(t,"dragstart.bs.carousel",(t=>t.preventDefault()));const t={leftCallback:()=>this._slide(this._directionToOrder(Z)),rightCallback:()=>this._slide(this._directionToOrder(tt)),endCallback:()=>{"hover"===this._config.pause&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout((()=>this._maybeEnableCycle()),500+this._config.interval))}};this._swipeHelper=new U(this._element,t)}_keydown(t){if(/input|textarea/i.test(t.target.tagName))return;const e=st[t.key];e&&(t.preventDefault(),this._slide(this._directionToOrder(e)))}_getItemIndex(t){return this._getItems().indexOf(t)}_setActiveIndicatorElement(t){if(!this._indicatorsElement)return;const e=Q.findOne(".active",this._indicatorsElement);e.classList.remove(nt),e.removeAttribute("aria-current");const i=Q.findOne(`[data-bs-slide-to="${t}"]`,this._indicatorsElement);i&&(i.classList.add(nt),i.setAttribute("aria-current","true"))}_updateInterval(){const t=this._activeElement||this._getActive();if(!t)return;const e=Number.parseInt(t.getAttribute("data-bs-interval"),10);this._config.interval=e||this._config.defaultInterval}_slide(t,e=null){if(this._isSliding)return;const i=this._getActive(),n=t===G,s=e||b(this._getItems(),i,n,this._config.wrap);if(s===i)return;const o=this._getItemIndex(s),r=e=>P.trigger(this._element,e,{relatedTarget:s,direction:this._orderToDirection(t),from:this._getItemIndex(i),to:o});if(r("slide.bs.carousel").defaultPrevented)return;if(!i||!s)return;const a=Boolean(this._interval);this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(o),this._activeElement=s;const l=n?"carousel-item-start":"carousel-item-end",c=n?"carousel-item-next":"carousel-item-prev";s.classList.add(c),d(s),i.classList.add(l),s.classList.add(l),this._queueCallback((()=>{s.classList.remove(l,c),s.classList.add(nt),i.classList.remove(nt,c,l),this._isSliding=!1,r(et)}),i,this._isAnimated()),a&&this.cycle()}_isAnimated(){return this._element.classList.contains("slide")}_getActive(){return Q.findOne(".active.carousel-item",this._element)}_getItems(){return Q.find(".carousel-item",this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(t){return p()?t===Z?J:G:t===Z?G:J}_orderToDirection(t){return p()?t===J?Z:tt:t===J?tt:Z}static jQueryInterface(t){return this.each((function(){const e=at.getOrCreateInstance(this,t);if("number"!=typeof t){if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t]()}}else e.to(t)}))}}P.on(document,"click.bs.carousel.data-api","[data-bs-slide], [data-bs-slide-to]",(function(t){const e=n(this);if(!e||!e.classList.contains(it))return;t.preventDefault();const i=at.getOrCreateInstance(e),s=this.getAttribute("data-bs-slide-to");return s?(i.to(s),void i._maybeEnableCycle()):"next"===B.getDataAttribute(this,"slide")?(i.next(),void i._maybeEnableCycle()):(i.prev(),void i._maybeEnableCycle())})),P.on(window,"load.bs.carousel.data-api",(()=>{const t=Q.find('[data-bs-ride="carousel"]');for(const e of t)at.getOrCreateInstance(e)})),g(at);const lt="show",ct="collapse",ht="collapsing",dt='[data-bs-toggle="collapse"]',ut={parent:null,toggle:!0},ft={parent:"(null|element)",toggle:"boolean"};class pt extends z{constructor(t,e){super(t,e),this._isTransitioning=!1,this._triggerArray=[];const n=Q.find(dt);for(const t of n){const e=i(t),n=Q.find(e).filter((t=>t===this._element));null!==e&&n.length&&this._triggerArray.push(t)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return ut}static get DefaultType(){return ft}static get NAME(){return"collapse"}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let t=[];if(this._config.parent&&(t=this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter((t=>t!==this._element)).map((t=>pt.getOrCreateInstance(t,{toggle:!1})))),t.length&&t[0]._isTransitioning)return;if(P.trigger(this._element,"show.bs.collapse").defaultPrevented)return;for(const e of t)e.hide();const e=this._getDimension();this._element.classList.remove(ct),this._element.classList.add(ht),this._element.style[e]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const i=`scroll${e[0].toUpperCase()+e.slice(1)}`;this._queueCallback((()=>{this._isTransitioning=!1,this._element.classList.remove(ht),this._element.classList.add(ct,lt),this._element.style[e]="",P.trigger(this._element,"shown.bs.collapse")}),this._element,!0),this._element.style[e]=`${this._element[i]}px`}hide(){if(this._isTransitioning||!this._isShown())return;if(P.trigger(this._element,"hide.bs.collapse").defaultPrevented)return;const t=this._getDimension();this._element.style[t]=`${this._element.getBoundingClientRect()[t]}px`,d(this._element),this._element.classList.add(ht),this._element.classList.remove(ct,lt);for(const t of this._triggerArray){const e=n(t);e&&!this._isShown(e)&&this._addAriaAndCollapsedClass([t],!1)}this._isTransitioning=!0,this._element.style[t]="",this._queueCallback((()=>{this._isTransitioning=!1,this._element.classList.remove(ht),this._element.classList.add(ct),P.trigger(this._element,"hidden.bs.collapse")}),this._element,!0)}_isShown(t=this._element){return t.classList.contains(lt)}_configAfterMerge(t){return t.toggle=Boolean(t.toggle),t.parent=r(t.parent),t}_getDimension(){return this._element.classList.contains("collapse-horizontal")?"width":"height"}_initializeChildren(){if(!this._config.parent)return;const t=this._getFirstLevelChildren(dt);for(const e of t){const t=n(e);t&&this._addAriaAndCollapsedClass([e],this._isShown(t))}}_getFirstLevelChildren(t){const e=Q.find(":scope .collapse .collapse",this._config.parent);return Q.find(t,this._config.parent).filter((t=>!e.includes(t)))}_addAriaAndCollapsedClass(t,e){if(t.length)for(const i of t)i.classList.toggle("collapsed",!e),i.setAttribute("aria-expanded",e)}static jQueryInterface(t){const e={};return"string"==typeof t&&/show|hide/.test(t)&&(e.toggle=!1),this.each((function(){const i=pt.getOrCreateInstance(this,e);if("string"==typeof t){if(void 0===i[t])throw new TypeError(`No method named "${t}"`);i[t]()}}))}}P.on(document,"click.bs.collapse.data-api",dt,(function(t){("A"===t.target.tagName||t.delegateTarget&&"A"===t.delegateTarget.tagName)&&t.preventDefault();const e=i(this),n=Q.find(e);for(const t of n)pt.getOrCreateInstance(t,{toggle:!1}).toggle()})),g(pt);var gt="top",mt="bottom",_t="right",bt="left",vt="auto",yt=[gt,mt,_t,bt],wt="start",At="end",Et="clippingParents",Tt="viewport",Ct="popper",Ot="reference",xt=yt.reduce((function(t,e){return t.concat([e+"-"+wt,e+"-"+At])}),[]),kt=[].concat(yt,[vt]).reduce((function(t,e){return t.concat([e,e+"-"+wt,e+"-"+At])}),[]),Lt="beforeRead",Dt="read",St="afterRead",It="beforeMain",Nt="main",Pt="afterMain",jt="beforeWrite",Mt="write",Ht="afterWrite",$t=[Lt,Dt,St,It,Nt,Pt,jt,Mt,Ht];function Wt(t){return t?(t.nodeName||"").toLowerCase():null}function Bt(t){if(null==t)return window;if("[object Window]"!==t.toString()){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function Ft(t){return t instanceof Bt(t).Element||t instanceof Element}function zt(t){return t instanceof Bt(t).HTMLElement||t instanceof HTMLElement}function qt(t){return"undefined"!=typeof ShadowRoot&&(t instanceof Bt(t).ShadowRoot||t instanceof ShadowRoot)}const Rt={name:"applyStyles",enabled:!0,phase:"write",fn:function(t){var e=t.state;Object.keys(e.elements).forEach((function(t){var i=e.styles[t]||{},n=e.attributes[t]||{},s=e.elements[t];zt(s)&&Wt(s)&&(Object.assign(s.style,i),Object.keys(n).forEach((function(t){var e=n[t];!1===e?s.removeAttribute(t):s.setAttribute(t,!0===e?"":e)})))}))},effect:function(t){var e=t.state,i={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,i.popper),e.styles=i,e.elements.arrow&&Object.assign(e.elements.arrow.style,i.arrow),function(){Object.keys(e.elements).forEach((function(t){var n=e.elements[t],s=e.attributes[t]||{},o=Object.keys(e.styles.hasOwnProperty(t)?e.styles[t]:i[t]).reduce((function(t,e){return t[e]="",t}),{});zt(n)&&Wt(n)&&(Object.assign(n.style,o),Object.keys(s).forEach((function(t){n.removeAttribute(t)})))}))}},requires:["computeStyles"]};function Vt(t){return t.split("-")[0]}var Kt=Math.max,Qt=Math.min,Xt=Math.round;function Yt(){var t=navigator.userAgentData;return null!=t&&t.brands?t.brands.map((function(t){return t.brand+"/"+t.version})).join(" "):navigator.userAgent}function Ut(){return!/^((?!chrome|android).)*safari/i.test(Yt())}function Gt(t,e,i){void 0===e&&(e=!1),void 0===i&&(i=!1);var n=t.getBoundingClientRect(),s=1,o=1;e&&zt(t)&&(s=t.offsetWidth>0&&Xt(n.width)/t.offsetWidth||1,o=t.offsetHeight>0&&Xt(n.height)/t.offsetHeight||1);var r=(Ft(t)?Bt(t):window).visualViewport,a=!Ut()&&i,l=(n.left+(a&&r?r.offsetLeft:0))/s,c=(n.top+(a&&r?r.offsetTop:0))/o,h=n.width/s,d=n.height/o;return{width:h,height:d,top:c,right:l+h,bottom:c+d,left:l,x:l,y:c}}function Jt(t){var e=Gt(t),i=t.offsetWidth,n=t.offsetHeight;return Math.abs(e.width-i)<=1&&(i=e.width),Math.abs(e.height-n)<=1&&(n=e.height),{x:t.offsetLeft,y:t.offsetTop,width:i,height:n}}function Zt(t,e){var i=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(i&&qt(i)){var n=e;do{if(n&&t.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function te(t){return Bt(t).getComputedStyle(t)}function ee(t){return["table","td","th"].indexOf(Wt(t))>=0}function ie(t){return((Ft(t)?t.ownerDocument:t.document)||window.document).documentElement}function ne(t){return"html"===Wt(t)?t:t.assignedSlot||t.parentNode||(qt(t)?t.host:null)||ie(t)}function se(t){return zt(t)&&"fixed"!==te(t).position?t.offsetParent:null}function oe(t){for(var e=Bt(t),i=se(t);i&&ee(i)&&"static"===te(i).position;)i=se(i);return i&&("html"===Wt(i)||"body"===Wt(i)&&"static"===te(i).position)?e:i||function(t){var e=/firefox/i.test(Yt());if(/Trident/i.test(Yt())&&zt(t)&&"fixed"===te(t).position)return null;var i=ne(t);for(qt(i)&&(i=i.host);zt(i)&&["html","body"].indexOf(Wt(i))<0;){var n=te(i);if("none"!==n.transform||"none"!==n.perspective||"paint"===n.contain||-1!==["transform","perspective"].indexOf(n.willChange)||e&&"filter"===n.willChange||e&&n.filter&&"none"!==n.filter)return i;i=i.parentNode}return null}(t)||e}function re(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function ae(t,e,i){return Kt(t,Qt(e,i))}function le(t){return Object.assign({},{top:0,right:0,bottom:0,left:0},t)}function ce(t,e){return e.reduce((function(e,i){return e[i]=t,e}),{})}const he={name:"arrow",enabled:!0,phase:"main",fn:function(t){var e,i=t.state,n=t.name,s=t.options,o=i.elements.arrow,r=i.modifiersData.popperOffsets,a=Vt(i.placement),l=re(a),c=[bt,_t].indexOf(a)>=0?"height":"width";if(o&&r){var h=function(t,e){return le("number"!=typeof(t="function"==typeof t?t(Object.assign({},e.rects,{placement:e.placement})):t)?t:ce(t,yt))}(s.padding,i),d=Jt(o),u="y"===l?gt:bt,f="y"===l?mt:_t,p=i.rects.reference[c]+i.rects.reference[l]-r[l]-i.rects.popper[c],g=r[l]-i.rects.reference[l],m=oe(o),_=m?"y"===l?m.clientHeight||0:m.clientWidth||0:0,b=p/2-g/2,v=h[u],y=_-d[c]-h[f],w=_/2-d[c]/2+b,A=ae(v,w,y),E=l;i.modifiersData[n]=((e={})[E]=A,e.centerOffset=A-w,e)}},effect:function(t){var e=t.state,i=t.options.element,n=void 0===i?"[data-popper-arrow]":i;null!=n&&("string"!=typeof n||(n=e.elements.popper.querySelector(n)))&&Zt(e.elements.popper,n)&&(e.elements.arrow=n)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function de(t){return t.split("-")[1]}var ue={top:"auto",right:"auto",bottom:"auto",left:"auto"};function fe(t){var e,i=t.popper,n=t.popperRect,s=t.placement,o=t.variation,r=t.offsets,a=t.position,l=t.gpuAcceleration,c=t.adaptive,h=t.roundOffsets,d=t.isFixed,u=r.x,f=void 0===u?0:u,p=r.y,g=void 0===p?0:p,m="function"==typeof h?h({x:f,y:g}):{x:f,y:g};f=m.x,g=m.y;var _=r.hasOwnProperty("x"),b=r.hasOwnProperty("y"),v=bt,y=gt,w=window;if(c){var A=oe(i),E="clientHeight",T="clientWidth";A===Bt(i)&&"static"!==te(A=ie(i)).position&&"absolute"===a&&(E="scrollHeight",T="scrollWidth"),(s===gt||(s===bt||s===_t)&&o===At)&&(y=mt,g-=(d&&A===w&&w.visualViewport?w.visualViewport.height:A[E])-n.height,g*=l?1:-1),s!==bt&&(s!==gt&&s!==mt||o!==At)||(v=_t,f-=(d&&A===w&&w.visualViewport?w.visualViewport.width:A[T])-n.width,f*=l?1:-1)}var C,O=Object.assign({position:a},c&&ue),x=!0===h?function(t){var e=t.x,i=t.y,n=window.devicePixelRatio||1;return{x:Xt(e*n)/n||0,y:Xt(i*n)/n||0}}({x:f,y:g}):{x:f,y:g};return f=x.x,g=x.y,l?Object.assign({},O,((C={})[y]=b?"0":"",C[v]=_?"0":"",C.transform=(w.devicePixelRatio||1)<=1?"translate("+f+"px, "+g+"px)":"translate3d("+f+"px, "+g+"px, 0)",C)):Object.assign({},O,((e={})[y]=b?g+"px":"",e[v]=_?f+"px":"",e.transform="",e))}const pe={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(t){var e=t.state,i=t.options,n=i.gpuAcceleration,s=void 0===n||n,o=i.adaptive,r=void 0===o||o,a=i.roundOffsets,l=void 0===a||a,c={placement:Vt(e.placement),variation:de(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:s,isFixed:"fixed"===e.options.strategy};null!=e.modifiersData.popperOffsets&&(e.styles.popper=Object.assign({},e.styles.popper,fe(Object.assign({},c,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:r,roundOffsets:l})))),null!=e.modifiersData.arrow&&(e.styles.arrow=Object.assign({},e.styles.arrow,fe(Object.assign({},c,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})},data:{}};var ge={passive:!0};const me={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(t){var e=t.state,i=t.instance,n=t.options,s=n.scroll,o=void 0===s||s,r=n.resize,a=void 0===r||r,l=Bt(e.elements.popper),c=[].concat(e.scrollParents.reference,e.scrollParents.popper);return o&&c.forEach((function(t){t.addEventListener("scroll",i.update,ge)})),a&&l.addEventListener("resize",i.update,ge),function(){o&&c.forEach((function(t){t.removeEventListener("scroll",i.update,ge)})),a&&l.removeEventListener("resize",i.update,ge)}},data:{}};var _e={left:"right",right:"left",bottom:"top",top:"bottom"};function be(t){return t.replace(/left|right|bottom|top/g,(function(t){return _e[t]}))}var ve={start:"end",end:"start"};function ye(t){return t.replace(/start|end/g,(function(t){return ve[t]}))}function we(t){var e=Bt(t);return{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function Ae(t){return Gt(ie(t)).left+we(t).scrollLeft}function Ee(t){var e=te(t),i=e.overflow,n=e.overflowX,s=e.overflowY;return/auto|scroll|overlay|hidden/.test(i+s+n)}function Te(t){return["html","body","#document"].indexOf(Wt(t))>=0?t.ownerDocument.body:zt(t)&&Ee(t)?t:Te(ne(t))}function Ce(t,e){var i;void 0===e&&(e=[]);var n=Te(t),s=n===(null==(i=t.ownerDocument)?void 0:i.body),o=Bt(n),r=s?[o].concat(o.visualViewport||[],Ee(n)?n:[]):n,a=e.concat(r);return s?a:a.concat(Ce(ne(r)))}function Oe(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function xe(t,e,i){return e===Tt?Oe(function(t,e){var i=Bt(t),n=ie(t),s=i.visualViewport,o=n.clientWidth,r=n.clientHeight,a=0,l=0;if(s){o=s.width,r=s.height;var c=Ut();(c||!c&&"fixed"===e)&&(a=s.offsetLeft,l=s.offsetTop)}return{width:o,height:r,x:a+Ae(t),y:l}}(t,i)):Ft(e)?function(t,e){var i=Gt(t,!1,"fixed"===e);return i.top=i.top+t.clientTop,i.left=i.left+t.clientLeft,i.bottom=i.top+t.clientHeight,i.right=i.left+t.clientWidth,i.width=t.clientWidth,i.height=t.clientHeight,i.x=i.left,i.y=i.top,i}(e,i):Oe(function(t){var e,i=ie(t),n=we(t),s=null==(e=t.ownerDocument)?void 0:e.body,o=Kt(i.scrollWidth,i.clientWidth,s?s.scrollWidth:0,s?s.clientWidth:0),r=Kt(i.scrollHeight,i.clientHeight,s?s.scrollHeight:0,s?s.clientHeight:0),a=-n.scrollLeft+Ae(t),l=-n.scrollTop;return"rtl"===te(s||i).direction&&(a+=Kt(i.clientWidth,s?s.clientWidth:0)-o),{width:o,height:r,x:a,y:l}}(ie(t)))}function ke(t){var e,i=t.reference,n=t.element,s=t.placement,o=s?Vt(s):null,r=s?de(s):null,a=i.x+i.width/2-n.width/2,l=i.y+i.height/2-n.height/2;switch(o){case gt:e={x:a,y:i.y-n.height};break;case mt:e={x:a,y:i.y+i.height};break;case _t:e={x:i.x+i.width,y:l};break;case bt:e={x:i.x-n.width,y:l};break;default:e={x:i.x,y:i.y}}var c=o?re(o):null;if(null!=c){var h="y"===c?"height":"width";switch(r){case wt:e[c]=e[c]-(i[h]/2-n[h]/2);break;case At:e[c]=e[c]+(i[h]/2-n[h]/2)}}return e}function Le(t,e){void 0===e&&(e={});var i=e,n=i.placement,s=void 0===n?t.placement:n,o=i.strategy,r=void 0===o?t.strategy:o,a=i.boundary,l=void 0===a?Et:a,c=i.rootBoundary,h=void 0===c?Tt:c,d=i.elementContext,u=void 0===d?Ct:d,f=i.altBoundary,p=void 0!==f&&f,g=i.padding,m=void 0===g?0:g,_=le("number"!=typeof m?m:ce(m,yt)),b=u===Ct?Ot:Ct,v=t.rects.popper,y=t.elements[p?b:u],w=function(t,e,i,n){var s="clippingParents"===e?function(t){var e=Ce(ne(t)),i=["absolute","fixed"].indexOf(te(t).position)>=0&&zt(t)?oe(t):t;return Ft(i)?e.filter((function(t){return Ft(t)&&Zt(t,i)&&"body"!==Wt(t)})):[]}(t):[].concat(e),o=[].concat(s,[i]),r=o[0],a=o.reduce((function(e,i){var s=xe(t,i,n);return e.top=Kt(s.top,e.top),e.right=Qt(s.right,e.right),e.bottom=Qt(s.bottom,e.bottom),e.left=Kt(s.left,e.left),e}),xe(t,r,n));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}(Ft(y)?y:y.contextElement||ie(t.elements.popper),l,h,r),A=Gt(t.elements.reference),E=ke({reference:A,element:v,strategy:"absolute",placement:s}),T=Oe(Object.assign({},v,E)),C=u===Ct?T:A,O={top:w.top-C.top+_.top,bottom:C.bottom-w.bottom+_.bottom,left:w.left-C.left+_.left,right:C.right-w.right+_.right},x=t.modifiersData.offset;if(u===Ct&&x){var k=x[s];Object.keys(O).forEach((function(t){var e=[_t,mt].indexOf(t)>=0?1:-1,i=[gt,mt].indexOf(t)>=0?"y":"x";O[t]+=k[i]*e}))}return O}function De(t,e){void 0===e&&(e={});var i=e,n=i.placement,s=i.boundary,o=i.rootBoundary,r=i.padding,a=i.flipVariations,l=i.allowedAutoPlacements,c=void 0===l?kt:l,h=de(n),d=h?a?xt:xt.filter((function(t){return de(t)===h})):yt,u=d.filter((function(t){return c.indexOf(t)>=0}));0===u.length&&(u=d);var f=u.reduce((function(e,i){return e[i]=Le(t,{placement:i,boundary:s,rootBoundary:o,padding:r})[Vt(i)],e}),{});return Object.keys(f).sort((function(t,e){return f[t]-f[e]}))}const Se={name:"flip",enabled:!0,phase:"main",fn:function(t){var e=t.state,i=t.options,n=t.name;if(!e.modifiersData[n]._skip){for(var s=i.mainAxis,o=void 0===s||s,r=i.altAxis,a=void 0===r||r,l=i.fallbackPlacements,c=i.padding,h=i.boundary,d=i.rootBoundary,u=i.altBoundary,f=i.flipVariations,p=void 0===f||f,g=i.allowedAutoPlacements,m=e.options.placement,_=Vt(m),b=l||(_!==m&&p?function(t){if(Vt(t)===vt)return[];var e=be(t);return[ye(t),e,ye(e)]}(m):[be(m)]),v=[m].concat(b).reduce((function(t,i){return t.concat(Vt(i)===vt?De(e,{placement:i,boundary:h,rootBoundary:d,padding:c,flipVariations:p,allowedAutoPlacements:g}):i)}),[]),y=e.rects.reference,w=e.rects.popper,A=new Map,E=!0,T=v[0],C=0;C<v.length;C++){var O=v[C],x=Vt(O),k=de(O)===wt,L=[gt,mt].indexOf(x)>=0,D=L?"width":"height",S=Le(e,{placement:O,boundary:h,rootBoundary:d,altBoundary:u,padding:c}),I=L?k?_t:bt:k?mt:gt;y[D]>w[D]&&(I=be(I));var N=be(I),P=[];if(o&&P.push(S[x]<=0),a&&P.push(S[I]<=0,S[N]<=0),P.every((function(t){return t}))){T=O,E=!1;break}A.set(O,P)}if(E)for(var j=function(t){var e=v.find((function(e){var i=A.get(e);if(i)return i.slice(0,t).every((function(t){return t}))}));if(e)return T=e,"break"},M=p?3:1;M>0&&"break"!==j(M);M--);e.placement!==T&&(e.modifiersData[n]._skip=!0,e.placement=T,e.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function Ie(t,e,i){return void 0===i&&(i={x:0,y:0}),{top:t.top-e.height-i.y,right:t.right-e.width+i.x,bottom:t.bottom-e.height+i.y,left:t.left-e.width-i.x}}function Ne(t){return[gt,_t,mt,bt].some((function(e){return t[e]>=0}))}const Pe={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(t){var e=t.state,i=t.name,n=e.rects.reference,s=e.rects.popper,o=e.modifiersData.preventOverflow,r=Le(e,{elementContext:"reference"}),a=Le(e,{altBoundary:!0}),l=Ie(r,n),c=Ie(a,s,o),h=Ne(l),d=Ne(c);e.modifiersData[i]={referenceClippingOffsets:l,popperEscapeOffsets:c,isReferenceHidden:h,hasPopperEscaped:d},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":h,"data-popper-escaped":d})}},je={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(t){var e=t.state,i=t.options,n=t.name,s=i.offset,o=void 0===s?[0,0]:s,r=kt.reduce((function(t,i){return t[i]=function(t,e,i){var n=Vt(t),s=[bt,gt].indexOf(n)>=0?-1:1,o="function"==typeof i?i(Object.assign({},e,{placement:t})):i,r=o[0],a=o[1];return r=r||0,a=(a||0)*s,[bt,_t].indexOf(n)>=0?{x:a,y:r}:{x:r,y:a}}(i,e.rects,o),t}),{}),a=r[e.placement],l=a.x,c=a.y;null!=e.modifiersData.popperOffsets&&(e.modifiersData.popperOffsets.x+=l,e.modifiersData.popperOffsets.y+=c),e.modifiersData[n]=r}},Me={name:"popperOffsets",enabled:!0,phase:"read",fn:function(t){var e=t.state,i=t.name;e.modifiersData[i]=ke({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})},data:{}},He={name:"preventOverflow",enabled:!0,phase:"main",fn:function(t){var e=t.state,i=t.options,n=t.name,s=i.mainAxis,o=void 0===s||s,r=i.altAxis,a=void 0!==r&&r,l=i.boundary,c=i.rootBoundary,h=i.altBoundary,d=i.padding,u=i.tether,f=void 0===u||u,p=i.tetherOffset,g=void 0===p?0:p,m=Le(e,{boundary:l,rootBoundary:c,padding:d,altBoundary:h}),_=Vt(e.placement),b=de(e.placement),v=!b,y=re(_),w="x"===y?"y":"x",A=e.modifiersData.popperOffsets,E=e.rects.reference,T=e.rects.popper,C="function"==typeof g?g(Object.assign({},e.rects,{placement:e.placement})):g,O="number"==typeof C?{mainAxis:C,altAxis:C}:Object.assign({mainAxis:0,altAxis:0},C),x=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,k={x:0,y:0};if(A){if(o){var L,D="y"===y?gt:bt,S="y"===y?mt:_t,I="y"===y?"height":"width",N=A[y],P=N+m[D],j=N-m[S],M=f?-T[I]/2:0,H=b===wt?E[I]:T[I],$=b===wt?-T[I]:-E[I],W=e.elements.arrow,B=f&&W?Jt(W):{width:0,height:0},F=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},z=F[D],q=F[S],R=ae(0,E[I],B[I]),V=v?E[I]/2-M-R-z-O.mainAxis:H-R-z-O.mainAxis,K=v?-E[I]/2+M+R+q+O.mainAxis:$+R+q+O.mainAxis,Q=e.elements.arrow&&oe(e.elements.arrow),X=Q?"y"===y?Q.clientTop||0:Q.clientLeft||0:0,Y=null!=(L=null==x?void 0:x[y])?L:0,U=N+K-Y,G=ae(f?Qt(P,N+V-Y-X):P,N,f?Kt(j,U):j);A[y]=G,k[y]=G-N}if(a){var J,Z="x"===y?gt:bt,tt="x"===y?mt:_t,et=A[w],it="y"===w?"height":"width",nt=et+m[Z],st=et-m[tt],ot=-1!==[gt,bt].indexOf(_),rt=null!=(J=null==x?void 0:x[w])?J:0,at=ot?nt:et-E[it]-T[it]-rt+O.altAxis,lt=ot?et+E[it]+T[it]-rt-O.altAxis:st,ct=f&&ot?function(t,e,i){var n=ae(t,e,i);return n>i?i:n}(at,et,lt):ae(f?at:nt,et,f?lt:st);A[w]=ct,k[w]=ct-et}e.modifiersData[n]=k}},requiresIfExists:["offset"]};function $e(t,e,i){void 0===i&&(i=!1);var n,s,o=zt(e),r=zt(e)&&function(t){var e=t.getBoundingClientRect(),i=Xt(e.width)/t.offsetWidth||1,n=Xt(e.height)/t.offsetHeight||1;return 1!==i||1!==n}(e),a=ie(e),l=Gt(t,r,i),c={scrollLeft:0,scrollTop:0},h={x:0,y:0};return(o||!o&&!i)&&(("body"!==Wt(e)||Ee(a))&&(c=(n=e)!==Bt(n)&&zt(n)?{scrollLeft:(s=n).scrollLeft,scrollTop:s.scrollTop}:we(n)),zt(e)?((h=Gt(e,!0)).x+=e.clientLeft,h.y+=e.clientTop):a&&(h.x=Ae(a))),{x:l.left+c.scrollLeft-h.x,y:l.top+c.scrollTop-h.y,width:l.width,height:l.height}}function We(t){var e=new Map,i=new Set,n=[];function s(t){i.add(t.name),[].concat(t.requires||[],t.requiresIfExists||[]).forEach((function(t){if(!i.has(t)){var n=e.get(t);n&&s(n)}})),n.push(t)}return t.forEach((function(t){e.set(t.name,t)})),t.forEach((function(t){i.has(t.name)||s(t)})),n}var Be={placement:"bottom",modifiers:[],strategy:"absolute"};function Fe(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return!e.some((function(t){return!(t&&"function"==typeof t.getBoundingClientRect)}))}function ze(t){void 0===t&&(t={});var e=t,i=e.defaultModifiers,n=void 0===i?[]:i,s=e.defaultOptions,o=void 0===s?Be:s;return function(t,e,i){void 0===i&&(i=o);var s,r,a={placement:"bottom",orderedModifiers:[],options:Object.assign({},Be,o),modifiersData:{},elements:{reference:t,popper:e},attributes:{},styles:{}},l=[],c=!1,h={state:a,setOptions:function(i){var s="function"==typeof i?i(a.options):i;d(),a.options=Object.assign({},o,a.options,s),a.scrollParents={reference:Ft(t)?Ce(t):t.contextElement?Ce(t.contextElement):[],popper:Ce(e)};var r,c,u=function(t){var e=We(t);return $t.reduce((function(t,i){return t.concat(e.filter((function(t){return t.phase===i})))}),[])}((r=[].concat(n,a.options.modifiers),c=r.reduce((function(t,e){var i=t[e.name];return t[e.name]=i?Object.assign({},i,e,{options:Object.assign({},i.options,e.options),data:Object.assign({},i.data,e.data)}):e,t}),{}),Object.keys(c).map((function(t){return c[t]}))));return a.orderedModifiers=u.filter((function(t){return t.enabled})),a.orderedModifiers.forEach((function(t){var e=t.name,i=t.options,n=void 0===i?{}:i,s=t.effect;if("function"==typeof s){var o=s({state:a,name:e,instance:h,options:n});l.push(o||function(){})}})),h.update()},forceUpdate:function(){if(!c){var t=a.elements,e=t.reference,i=t.popper;if(Fe(e,i)){a.rects={reference:$e(e,oe(i),"fixed"===a.options.strategy),popper:Jt(i)},a.reset=!1,a.placement=a.options.placement,a.orderedModifiers.forEach((function(t){return a.modifiersData[t.name]=Object.assign({},t.data)}));for(var n=0;n<a.orderedModifiers.length;n++)if(!0!==a.reset){var s=a.orderedModifiers[n],o=s.fn,r=s.options,l=void 0===r?{}:r,d=s.name;"function"==typeof o&&(a=o({state:a,options:l,name:d,instance:h})||a)}else a.reset=!1,n=-1}}},update:(s=function(){return new Promise((function(t){h.forceUpdate(),t(a)}))},function(){return r||(r=new Promise((function(t){Promise.resolve().then((function(){r=void 0,t(s())}))}))),r}),destroy:function(){d(),c=!0}};if(!Fe(t,e))return h;function d(){l.forEach((function(t){return t()})),l=[]}return h.setOptions(i).then((function(t){!c&&i.onFirstUpdate&&i.onFirstUpdate(t)})),h}}var qe=ze(),Re=ze({defaultModifiers:[me,Me,pe,Rt]}),Ve=ze({defaultModifiers:[me,Me,pe,Rt,je,Se,He,he,Pe]});const Ke=Object.freeze(Object.defineProperty({__proto__:null,popperGenerator:ze,detectOverflow:Le,createPopperBase:qe,createPopper:Ve,createPopperLite:Re,top:gt,bottom:mt,right:_t,left:bt,auto:vt,basePlacements:yt,start:wt,end:At,clippingParents:Et,viewport:Tt,popper:Ct,reference:Ot,variationPlacements:xt,placements:kt,beforeRead:Lt,read:Dt,afterRead:St,beforeMain:It,main:Nt,afterMain:Pt,beforeWrite:jt,write:Mt,afterWrite:Ht,modifierPhases:$t,applyStyles:Rt,arrow:he,computeStyles:pe,eventListeners:me,flip:Se,hide:Pe,offset:je,popperOffsets:Me,preventOverflow:He},Symbol.toStringTag,{value:"Module"})),Qe="dropdown",Xe="ArrowUp",Ye="ArrowDown",Ue="click.bs.dropdown.data-api",Ge="keydown.bs.dropdown.data-api",Je="show",Ze='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',ti=`${Ze}.show`,ei=".dropdown-menu",ii=p()?"top-end":"top-start",ni=p()?"top-start":"top-end",si=p()?"bottom-end":"bottom-start",oi=p()?"bottom-start":"bottom-end",ri=p()?"left-start":"right-start",ai=p()?"right-start":"left-start",li={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},ci={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class hi extends z{constructor(t,e){super(t,e),this._popper=null,this._parent=this._element.parentNode,this._menu=Q.next(this._element,ei)[0]||Q.prev(this._element,ei)[0]||Q.findOne(ei,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return li}static get DefaultType(){return ci}static get NAME(){return Qe}toggle(){return this._isShown()?this.hide():this.show()}show(){if(l(this._element)||this._isShown())return;const t={relatedTarget:this._element};if(!P.trigger(this._element,"show.bs.dropdown",t).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(".navbar-nav"))for(const t of[].concat(...document.body.children))P.on(t,"mouseover",h);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(Je),this._element.classList.add(Je),P.trigger(this._element,"shown.bs.dropdown",t)}}hide(){if(l(this._element)||!this._isShown())return;const t={relatedTarget:this._element};this._completeHide(t)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(t){if(!P.trigger(this._element,"hide.bs.dropdown",t).defaultPrevented){if("ontouchstart"in document.documentElement)for(const t of[].concat(...document.body.children))P.off(t,"mouseover",h);this._popper&&this._popper.destroy(),this._menu.classList.remove(Je),this._element.classList.remove(Je),this._element.setAttribute("aria-expanded","false"),B.removeDataAttribute(this._menu,"popper"),P.trigger(this._element,"hidden.bs.dropdown",t)}}_getConfig(t){if("object"==typeof(t=super._getConfig(t)).reference&&!o(t.reference)&&"function"!=typeof t.reference.getBoundingClientRect)throw new TypeError(`${Qe.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return t}_createPopper(){if(void 0===Ke)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let t=this._element;"parent"===this._config.reference?t=this._parent:o(this._config.reference)?t=r(this._config.reference):"object"==typeof this._config.reference&&(t=this._config.reference);const e=this._getPopperConfig();this._popper=Ve(t,this._menu,e)}_isShown(){return this._menu.classList.contains(Je)}_getPlacement(){const t=this._parent;if(t.classList.contains("dropend"))return ri;if(t.classList.contains("dropstart"))return ai;if(t.classList.contains("dropup-center"))return"top";if(t.classList.contains("dropdown-center"))return"bottom";const e="end"===getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();return t.classList.contains("dropup")?e?ni:ii:e?oi:si}_detectNavbar(){return null!==this._element.closest(".navbar")}_getOffset(){const{offset:t}=this._config;return"string"==typeof t?t.split(",").map((t=>Number.parseInt(t,10))):"function"==typeof t?e=>t(e,this._element):t}_getPopperConfig(){const t={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||"static"===this._config.display)&&(B.setDataAttribute(this._menu,"popper","static"),t.modifiers=[{name:"applyStyles",enabled:!1}]),{...t,..."function"==typeof this._config.popperConfig?this._config.popperConfig(t):this._config.popperConfig}}_selectMenuItem({key:t,target:e}){const i=Q.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",this._menu).filter((t=>a(t)));i.length&&b(i,e,t===Ye,!i.includes(e)).focus()}static jQueryInterface(t){return this.each((function(){const e=hi.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}static clearMenus(t){if(2===t.button||"keyup"===t.type&&"Tab"!==t.key)return;const e=Q.find(ti);for(const i of e){const e=hi.getInstance(i);if(!e||!1===e._config.autoClose)continue;const n=t.composedPath(),s=n.includes(e._menu);if(n.includes(e._element)||"inside"===e._config.autoClose&&!s||"outside"===e._config.autoClose&&s)continue;if(e._menu.contains(t.target)&&("keyup"===t.type&&"Tab"===t.key||/input|select|option|textarea|form/i.test(t.target.tagName)))continue;const o={relatedTarget:e._element};"click"===t.type&&(o.clickEvent=t),e._completeHide(o)}}static dataApiKeydownHandler(t){const e=/input|textarea/i.test(t.target.tagName),i="Escape"===t.key,n=[Xe,Ye].includes(t.key);if(!n&&!i)return;if(e&&!i)return;t.preventDefault();const s=this.matches(Ze)?this:Q.prev(this,Ze)[0]||Q.next(this,Ze)[0]||Q.findOne(Ze,t.delegateTarget.parentNode),o=hi.getOrCreateInstance(s);if(n)return t.stopPropagation(),o.show(),void o._selectMenuItem(t);o._isShown()&&(t.stopPropagation(),o.hide(),s.focus())}}P.on(document,Ge,Ze,hi.dataApiKeydownHandler),P.on(document,Ge,ei,hi.dataApiKeydownHandler),P.on(document,Ue,hi.clearMenus),P.on(document,"keyup.bs.dropdown.data-api",hi.clearMenus),P.on(document,Ue,Ze,(function(t){t.preventDefault(),hi.getOrCreateInstance(this).toggle()})),g(hi);const di=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",ui=".sticky-top",fi="padding-right",pi="margin-right";class gi{constructor(){this._element=document.body}getWidth(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}hide(){const t=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,fi,(e=>e+t)),this._setElementAttributes(di,fi,(e=>e+t)),this._setElementAttributes(ui,pi,(e=>e-t))}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,fi),this._resetElementAttributes(di,fi),this._resetElementAttributes(ui,pi)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(t,e,i){const n=this.getWidth();this._applyManipulationCallback(t,(t=>{if(t!==this._element&&window.innerWidth>t.clientWidth+n)return;this._saveInitialAttribute(t,e);const s=window.getComputedStyle(t).getPropertyValue(e);t.style.setProperty(e,`${i(Number.parseFloat(s))}px`)}))}_saveInitialAttribute(t,e){const i=t.style.getPropertyValue(e);i&&B.setDataAttribute(t,e,i)}_resetElementAttributes(t,e){this._applyManipulationCallback(t,(t=>{const i=B.getDataAttribute(t,e);null!==i?(B.removeDataAttribute(t,e),t.style.setProperty(e,i)):t.style.removeProperty(e)}))}_applyManipulationCallback(t,e){if(o(t))e(t);else for(const i of Q.find(t,this._element))e(i)}}const mi="show",_i="mousedown.bs.backdrop",bi={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},vi={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class yi extends F{constructor(t){super(),this._config=this._getConfig(t),this._isAppended=!1,this._element=null}static get Default(){return bi}static get DefaultType(){return vi}static get NAME(){return"backdrop"}show(t){if(!this._config.isVisible)return void m(t);this._append();const e=this._getElement();this._config.isAnimated&&d(e),e.classList.add(mi),this._emulateAnimation((()=>{m(t)}))}hide(t){this._config.isVisible?(this._getElement().classList.remove(mi),this._emulateAnimation((()=>{this.dispose(),m(t)}))):m(t)}dispose(){this._isAppended&&(P.off(this._element,_i),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const t=document.createElement("div");t.className=this._config.className,this._config.isAnimated&&t.classList.add("fade"),this._element=t}return this._element}_configAfterMerge(t){return t.rootElement=r(t.rootElement),t}_append(){if(this._isAppended)return;const t=this._getElement();this._config.rootElement.append(t),P.on(t,_i,(()=>{m(this._config.clickCallback)})),this._isAppended=!0}_emulateAnimation(t){_(t,this._getElement(),this._config.isAnimated)}}const wi=".bs.focustrap",Ai="backward",Ei={autofocus:!0,trapElement:null},Ti={autofocus:"boolean",trapElement:"element"};class Ci extends F{constructor(t){super(),this._config=this._getConfig(t),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return Ei}static get DefaultType(){return Ti}static get NAME(){return"focustrap"}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),P.off(document,wi),P.on(document,"focusin.bs.focustrap",(t=>this._handleFocusin(t))),P.on(document,"keydown.tab.bs.focustrap",(t=>this._handleKeydown(t))),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,P.off(document,wi))}_handleFocusin(t){const{trapElement:e}=this._config;if(t.target===document||t.target===e||e.contains(t.target))return;const i=Q.focusableChildren(e);0===i.length?e.focus():this._lastTabNavDirection===Ai?i[i.length-1].focus():i[0].focus()}_handleKeydown(t){"Tab"===t.key&&(this._lastTabNavDirection=t.shiftKey?Ai:"forward")}}const Oi="hidden.bs.modal",xi="show.bs.modal",ki="modal-open",Li="show",Di="modal-static",Si={backdrop:!0,focus:!0,keyboard:!0},Ii={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class Ni extends z{constructor(t,e){super(t,e),this._dialog=Q.findOne(".modal-dialog",this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new gi,this._addEventListeners()}static get Default(){return Si}static get DefaultType(){return Ii}static get NAME(){return"modal"}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){this._isShown||this._isTransitioning||P.trigger(this._element,xi,{relatedTarget:t}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(ki),this._adjustDialog(),this._backdrop.show((()=>this._showElement(t))))}hide(){this._isShown&&!this._isTransitioning&&(P.trigger(this._element,"hide.bs.modal").defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(Li),this._queueCallback((()=>this._hideModal()),this._element,this._isAnimated())))}dispose(){for(const t of[window,this._dialog])P.off(t,".bs.modal");this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new yi({isVisible:Boolean(this._config.backdrop),isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new Ci({trapElement:this._element})}_showElement(t){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const e=Q.findOne(".modal-body",this._dialog);e&&(e.scrollTop=0),d(this._element),this._element.classList.add(Li),this._queueCallback((()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,P.trigger(this._element,"shown.bs.modal",{relatedTarget:t})}),this._dialog,this._isAnimated())}_addEventListeners(){P.on(this._element,"keydown.dismiss.bs.modal",(t=>{if("Escape"===t.key)return this._config.keyboard?(t.preventDefault(),void this.hide()):void this._triggerBackdropTransition()})),P.on(window,"resize.bs.modal",(()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()})),P.on(this._element,"mousedown.dismiss.bs.modal",(t=>{P.one(this._element,"click.dismiss.bs.modal",(e=>{this._element===t.target&&this._element===e.target&&("static"!==this._config.backdrop?this._config.backdrop&&this.hide():this._triggerBackdropTransition())}))}))}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide((()=>{document.body.classList.remove(ki),this._resetAdjustments(),this._scrollBar.reset(),P.trigger(this._element,Oi)}))}_isAnimated(){return this._element.classList.contains("fade")}_triggerBackdropTransition(){if(P.trigger(this._element,"hidePrevented.bs.modal").defaultPrevented)return;const t=this._element.scrollHeight>document.documentElement.clientHeight,e=this._element.style.overflowY;"hidden"===e||this._element.classList.contains(Di)||(t||(this._element.style.overflowY="hidden"),this._element.classList.add(Di),this._queueCallback((()=>{this._element.classList.remove(Di),this._queueCallback((()=>{this._element.style.overflowY=e}),this._dialog)}),this._dialog),this._element.focus())}_adjustDialog(){const t=this._element.scrollHeight>document.documentElement.clientHeight,e=this._scrollBar.getWidth(),i=e>0;if(i&&!t){const t=p()?"paddingLeft":"paddingRight";this._element.style[t]=`${e}px`}if(!i&&t){const t=p()?"paddingRight":"paddingLeft";this._element.style[t]=`${e}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(t,e){return this.each((function(){const i=Ni.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===i[t])throw new TypeError(`No method named "${t}"`);i[t](e)}}))}}P.on(document,"click.bs.modal.data-api",'[data-bs-toggle="modal"]',(function(t){const e=n(this);["A","AREA"].includes(this.tagName)&&t.preventDefault(),P.one(e,xi,(t=>{t.defaultPrevented||P.one(e,Oi,(()=>{a(this)&&this.focus()}))}));const i=Q.findOne(".modal.show");i&&Ni.getInstance(i).hide(),Ni.getOrCreateInstance(e).toggle(this)})),q(Ni),g(Ni);const Pi="show",ji="showing",Mi="hiding",Hi=".offcanvas.show",$i="hidePrevented.bs.offcanvas",Wi="hidden.bs.offcanvas",Bi={backdrop:!0,keyboard:!0,scroll:!1},Fi={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class zi extends z{constructor(t,e){super(t,e),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return Bi}static get DefaultType(){return Fi}static get NAME(){return"offcanvas"}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){this._isShown||P.trigger(this._element,"show.bs.offcanvas",{relatedTarget:t}).defaultPrevented||(this._isShown=!0,this._backdrop.show(),this._config.scroll||(new gi).hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(ji),this._queueCallback((()=>{this._config.scroll&&!this._config.backdrop||this._focustrap.activate(),this._element.classList.add(Pi),this._element.classList.remove(ji),P.trigger(this._element,"shown.bs.offcanvas",{relatedTarget:t})}),this._element,!0))}hide(){this._isShown&&(P.trigger(this._element,"hide.bs.offcanvas").defaultPrevented||(this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(Mi),this._backdrop.hide(),this._queueCallback((()=>{this._element.classList.remove(Pi,Mi),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||(new gi).reset(),P.trigger(this._element,Wi)}),this._element,!0)))}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const t=Boolean(this._config.backdrop);return new yi({className:"offcanvas-backdrop",isVisible:t,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:t?()=>{"static"!==this._config.backdrop?this.hide():P.trigger(this._element,$i)}:null})}_initializeFocusTrap(){return new Ci({trapElement:this._element})}_addEventListeners(){P.on(this._element,"keydown.dismiss.bs.offcanvas",(t=>{"Escape"===t.key&&(this._config.keyboard?this.hide():P.trigger(this._element,$i))}))}static jQueryInterface(t){return this.each((function(){const e=zi.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}P.on(document,"click.bs.offcanvas.data-api",'[data-bs-toggle="offcanvas"]',(function(t){const e=n(this);if(["A","AREA"].includes(this.tagName)&&t.preventDefault(),l(this))return;P.one(e,Wi,(()=>{a(this)&&this.focus()}));const i=Q.findOne(Hi);i&&i!==e&&zi.getInstance(i).hide(),zi.getOrCreateInstance(e).toggle(this)})),P.on(window,"load.bs.offcanvas.data-api",(()=>{for(const t of Q.find(Hi))zi.getOrCreateInstance(t).show()})),P.on(window,"resize.bs.offcanvas",(()=>{for(const t of Q.find("[aria-modal][class*=show][class*=offcanvas-]"))"fixed"!==getComputedStyle(t).position&&zi.getOrCreateInstance(t).hide()})),q(zi),g(zi);const qi=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),Ri=/^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,Vi=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,Ki=(t,e)=>{const i=t.nodeName.toLowerCase();return e.includes(i)?!qi.has(i)||Boolean(Ri.test(t.nodeValue)||Vi.test(t.nodeValue)):e.filter((t=>t instanceof RegExp)).some((t=>t.test(i)))},Qi={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},Xi={allowList:Qi,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},Yi={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},Ui={entry:"(string|element|function|null)",selector:"(string|element)"};class Gi extends F{constructor(t){super(),this._config=this._getConfig(t)}static get Default(){return Xi}static get DefaultType(){return Yi}static get NAME(){return"TemplateFactory"}getContent(){return Object.values(this._config.content).map((t=>this._resolvePossibleFunction(t))).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(t){return this._checkContent(t),this._config.content={...this._config.content,...t},this}toHtml(){const t=document.createElement("div");t.innerHTML=this._maybeSanitize(this._config.template);for(const[e,i]of Object.entries(this._config.content))this._setContent(t,i,e);const e=t.children[0],i=this._resolvePossibleFunction(this._config.extraClass);return i&&e.classList.add(...i.split(" ")),e}_typeCheckConfig(t){super._typeCheckConfig(t),this._checkContent(t.content)}_checkContent(t){for(const[e,i]of Object.entries(t))super._typeCheckConfig({selector:e,entry:i},Ui)}_setContent(t,e,i){const n=Q.findOne(i,t);n&&((e=this._resolvePossibleFunction(e))?o(e)?this._putElementInTemplate(r(e),n):this._config.html?n.innerHTML=this._maybeSanitize(e):n.textContent=e:n.remove())}_maybeSanitize(t){return this._config.sanitize?function(t,e,i){if(!t.length)return t;if(i&&"function"==typeof i)return i(t);const n=(new window.DOMParser).parseFromString(t,"text/html"),s=[].concat(...n.body.querySelectorAll("*"));for(const t of s){const i=t.nodeName.toLowerCase();if(!Object.keys(e).includes(i)){t.remove();continue}const n=[].concat(...t.attributes),s=[].concat(e["*"]||[],e[i]||[]);for(const e of n)Ki(e,s)||t.removeAttribute(e.nodeName)}return n.body.innerHTML}(t,this._config.allowList,this._config.sanitizeFn):t}_resolvePossibleFunction(t){return"function"==typeof t?t(this):t}_putElementInTemplate(t,e){if(this._config.html)return e.innerHTML="",void e.append(t);e.textContent=t.textContent}}const Ji=new Set(["sanitize","allowList","sanitizeFn"]),Zi="fade",tn="show",en=".modal",nn="hide.bs.modal",sn="hover",on="focus",rn={AUTO:"auto",TOP:"top",RIGHT:p()?"left":"right",BOTTOM:"bottom",LEFT:p()?"right":"left"},an={allowList:Qi,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,0],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},ln={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class cn extends z{constructor(t,e){if(void 0===Ke)throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(t,e),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return an}static get DefaultType(){return ln}static get NAME(){return"tooltip"}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){this._isEnabled&&(this._activeTrigger.click=!this._activeTrigger.click,this._isShown()?this._leave():this._enter())}dispose(){clearTimeout(this._timeout),P.off(this._element.closest(en),nn,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if("none"===this._element.style.display)throw new Error("Please use show on visible elements");if(!this._isWithContent()||!this._isEnabled)return;const t=P.trigger(this._element,this.constructor.eventName("show")),e=(c(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(t.defaultPrevented||!e)return;this._disposePopper();const i=this._getTipElement();this._element.setAttribute("aria-describedby",i.getAttribute("id"));const{container:n}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(n.append(i),P.trigger(this._element,this.constructor.eventName("inserted"))),this._popper=this._createPopper(i),i.classList.add(tn),"ontouchstart"in document.documentElement)for(const t of[].concat(...document.body.children))P.on(t,"mouseover",h);this._queueCallback((()=>{P.trigger(this._element,this.constructor.eventName("shown")),!1===this._isHovered&&this._leave(),this._isHovered=!1}),this.tip,this._isAnimated())}hide(){if(this._isShown()&&!P.trigger(this._element,this.constructor.eventName("hide")).defaultPrevented){if(this._getTipElement().classList.remove(tn),"ontouchstart"in document.documentElement)for(const t of[].concat(...document.body.children))P.off(t,"mouseover",h);this._activeTrigger.click=!1,this._activeTrigger.focus=!1,this._activeTrigger.hover=!1,this._isHovered=null,this._queueCallback((()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),P.trigger(this._element,this.constructor.eventName("hidden")))}),this.tip,this._isAnimated())}}update(){this._popper&&this._popper.update()}_isWithContent(){return Boolean(this._getTitle())}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(t){const e=this._getTemplateFactory(t).toHtml();if(!e)return null;e.classList.remove(Zi,tn),e.classList.add(`bs-${this.constructor.NAME}-auto`);const i=(t=>{do{t+=Math.floor(1e6*Math.random())}while(document.getElementById(t));return t})(this.constructor.NAME).toString();return e.setAttribute("id",i),this._isAnimated()&&e.classList.add(Zi),e}setContent(t){this._newContent=t,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(t){return this._templateFactory?this._templateFactory.changeContent(t):this._templateFactory=new Gi({...this._config,content:t,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{".tooltip-inner":this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(t){return this.constructor.getOrCreateInstance(t.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(Zi)}_isShown(){return this.tip&&this.tip.classList.contains(tn)}_createPopper(t){const e="function"==typeof this._config.placement?this._config.placement.call(this,t,this._element):this._config.placement,i=rn[e.toUpperCase()];return Ve(this._element,t,this._getPopperConfig(i))}_getOffset(){const{offset:t}=this._config;return"string"==typeof t?t.split(",").map((t=>Number.parseInt(t,10))):"function"==typeof t?e=>t(e,this._element):t}_resolvePossibleFunction(t){return"function"==typeof t?t.call(this._element):t}_getPopperConfig(t){const e={placement:t,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:t=>{this._getTipElement().setAttribute("data-popper-placement",t.state.placement)}}]};return{...e,..."function"==typeof this._config.popperConfig?this._config.popperConfig(e):this._config.popperConfig}}_setListeners(){const t=this._config.trigger.split(" ");for(const e of t)if("click"===e)P.on(this._element,this.constructor.eventName("click"),this._config.selector,(t=>{this._initializeOnDelegatedTarget(t).toggle()}));else if("manual"!==e){const t=e===sn?this.constructor.eventName("mouseenter"):this.constructor.eventName("focusin"),i=e===sn?this.constructor.eventName("mouseleave"):this.constructor.eventName("focusout");P.on(this._element,t,this._config.selector,(t=>{const e=this._initializeOnDelegatedTarget(t);e._activeTrigger["focusin"===t.type?on:sn]=!0,e._enter()})),P.on(this._element,i,this._config.selector,(t=>{const e=this._initializeOnDelegatedTarget(t);e._activeTrigger["focusout"===t.type?on:sn]=e._element.contains(t.relatedTarget),e._leave()}))}this._hideModalHandler=()=>{this._element&&this.hide()},P.on(this._element.closest(en),nn,this._hideModalHandler)}_fixTitle(){const t=this._element.getAttribute("title");t&&(this._element.getAttribute("aria-label")||this._element.textContent.trim()||this._element.setAttribute("aria-label",t),this._element.setAttribute("data-bs-original-title",t),this._element.removeAttribute("title"))}_enter(){this._isShown()||this._isHovered?this._isHovered=!0:(this._isHovered=!0,this._setTimeout((()=>{this._isHovered&&this.show()}),this._config.delay.show))}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout((()=>{this._isHovered||this.hide()}),this._config.delay.hide))}_setTimeout(t,e){clearTimeout(this._timeout),this._timeout=setTimeout(t,e)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(t){const e=B.getDataAttributes(this._element);for(const t of Object.keys(e))Ji.has(t)&&delete e[t];return t={...e,..."object"==typeof t&&t?t:{}},t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t.container=!1===t.container?document.body:r(t.container),"number"==typeof t.delay&&(t.delay={show:t.delay,hide:t.delay}),"number"==typeof t.title&&(t.title=t.title.toString()),"number"==typeof t.content&&(t.content=t.content.toString()),t}_getDelegateConfig(){const t={};for(const e in this._config)this.constructor.Default[e]!==this._config[e]&&(t[e]=this._config[e]);return t.selector=!1,t.trigger="manual",t}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(t){return this.each((function(){const e=cn.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}}g(cn);const hn={...cn.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},dn={...cn.DefaultType,content:"(null|string|element|function)"};class un extends cn{static get Default(){return hn}static get DefaultType(){return dn}static get NAME(){return"popover"}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{".popover-header":this._getTitle(),".popover-body":this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(t){return this.each((function(){const e=un.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}}g(un);const fn="click.bs.scrollspy",pn="active",gn="[href]",mn={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},_n={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class bn extends z{constructor(t,e){super(t,e),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement="visible"===getComputedStyle(this._element).overflowY?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return mn}static get DefaultType(){return _n}static get NAME(){return"scrollspy"}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const t of this._observableSections.values())this._observer.observe(t)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(t){return t.target=r(t.target)||document.body,t.rootMargin=t.offset?`${t.offset}px 0px -30%`:t.rootMargin,"string"==typeof t.threshold&&(t.threshold=t.threshold.split(",").map((t=>Number.parseFloat(t)))),t}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(P.off(this._config.target,fn),P.on(this._config.target,fn,gn,(t=>{const e=this._observableSections.get(t.target.hash);if(e){t.preventDefault();const i=this._rootElement||window,n=e.offsetTop-this._element.offsetTop;if(i.scrollTo)return void i.scrollTo({top:n,behavior:"smooth"});i.scrollTop=n}})))}_getNewObserver(){const t={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver((t=>this._observerCallback(t)),t)}_observerCallback(t){const e=t=>this._targetLinks.get(`#${t.target.id}`),i=t=>{this._previousScrollData.visibleEntryTop=t.target.offsetTop,this._process(e(t))},n=(this._rootElement||document.documentElement).scrollTop,s=n>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=n;for(const o of t){if(!o.isIntersecting){this._activeTarget=null,this._clearActiveClass(e(o));continue}const t=o.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(s&&t){if(i(o),!n)return}else s||t||i(o)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const t=Q.find(gn,this._config.target);for(const e of t){if(!e.hash||l(e))continue;const t=Q.findOne(e.hash,this._element);a(t)&&(this._targetLinks.set(e.hash,e),this._observableSections.set(e.hash,t))}}_process(t){this._activeTarget!==t&&(this._clearActiveClass(this._config.target),this._activeTarget=t,t.classList.add(pn),this._activateParents(t),P.trigger(this._element,"activate.bs.scrollspy",{relatedTarget:t}))}_activateParents(t){if(t.classList.contains("dropdown-item"))Q.findOne(".dropdown-toggle",t.closest(".dropdown")).classList.add(pn);else for(const e of Q.parents(t,".nav, .list-group"))for(const t of Q.prev(e,".nav-link, .nav-item > .nav-link, .list-group-item"))t.classList.add(pn)}_clearActiveClass(t){t.classList.remove(pn);const e=Q.find("[href].active",t);for(const t of e)t.classList.remove(pn)}static jQueryInterface(t){return this.each((function(){const e=bn.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t]()}}))}}P.on(window,"load.bs.scrollspy.data-api",(()=>{for(const t of Q.find('[data-bs-spy="scroll"]'))bn.getOrCreateInstance(t)})),g(bn);const vn="ArrowLeft",yn="ArrowRight",wn="ArrowUp",An="ArrowDown",En="active",Tn="fade",Cn="show",On='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',xn=`.nav-link:not(.dropdown-toggle), .list-group-item:not(.dropdown-toggle), [role="tab"]:not(.dropdown-toggle), ${On}`;class kn extends z{constructor(t){super(t),this._parent=this._element.closest('.list-group, .nav, [role="tablist"]'),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),P.on(this._element,"keydown.bs.tab",(t=>this._keydown(t))))}static get NAME(){return"tab"}show(){const t=this._element;if(this._elemIsActive(t))return;const e=this._getActiveElem(),i=e?P.trigger(e,"hide.bs.tab",{relatedTarget:t}):null;P.trigger(t,"show.bs.tab",{relatedTarget:e}).defaultPrevented||i&&i.defaultPrevented||(this._deactivate(e,t),this._activate(t,e))}_activate(t,e){t&&(t.classList.add(En),this._activate(n(t)),this._queueCallback((()=>{"tab"===t.getAttribute("role")?(t.removeAttribute("tabindex"),t.setAttribute("aria-selected",!0),this._toggleDropDown(t,!0),P.trigger(t,"shown.bs.tab",{relatedTarget:e})):t.classList.add(Cn)}),t,t.classList.contains(Tn)))}_deactivate(t,e){t&&(t.classList.remove(En),t.blur(),this._deactivate(n(t)),this._queueCallback((()=>{"tab"===t.getAttribute("role")?(t.setAttribute("aria-selected",!1),t.setAttribute("tabindex","-1"),this._toggleDropDown(t,!1),P.trigger(t,"hidden.bs.tab",{relatedTarget:e})):t.classList.remove(Cn)}),t,t.classList.contains(Tn)))}_keydown(t){if(![vn,yn,wn,An].includes(t.key))return;t.stopPropagation(),t.preventDefault();const e=[yn,An].includes(t.key),i=b(this._getChildren().filter((t=>!l(t))),t.target,e,!0);i&&(i.focus({preventScroll:!0}),kn.getOrCreateInstance(i).show())}_getChildren(){return Q.find(xn,this._parent)}_getActiveElem(){return this._getChildren().find((t=>this._elemIsActive(t)))||null}_setInitialAttributes(t,e){this._setAttributeIfNotExists(t,"role","tablist");for(const t of e)this._setInitialAttributesOnChild(t)}_setInitialAttributesOnChild(t){t=this._getInnerElement(t);const e=this._elemIsActive(t),i=this._getOuterElement(t);t.setAttribute("aria-selected",e),i!==t&&this._setAttributeIfNotExists(i,"role","presentation"),e||t.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(t,"role","tab"),this._setInitialAttributesOnTargetPanel(t)}_setInitialAttributesOnTargetPanel(t){const e=n(t);e&&(this._setAttributeIfNotExists(e,"role","tabpanel"),t.id&&this._setAttributeIfNotExists(e,"aria-labelledby",`#${t.id}`))}_toggleDropDown(t,e){const i=this._getOuterElement(t);if(!i.classList.contains("dropdown"))return;const n=(t,n)=>{const s=Q.findOne(t,i);s&&s.classList.toggle(n,e)};n(".dropdown-toggle",En),n(".dropdown-menu",Cn),i.setAttribute("aria-expanded",e)}_setAttributeIfNotExists(t,e,i){t.hasAttribute(e)||t.setAttribute(e,i)}_elemIsActive(t){return t.classList.contains(En)}_getInnerElement(t){return t.matches(xn)?t:Q.findOne(xn,t)}_getOuterElement(t){return t.closest(".nav-item, .list-group-item")||t}static jQueryInterface(t){return this.each((function(){const e=kn.getOrCreateInstance(this);if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t]()}}))}}P.on(document,"click.bs.tab",On,(function(t){["A","AREA"].includes(this.tagName)&&t.preventDefault(),l(this)||kn.getOrCreateInstance(this).show()})),P.on(window,"load.bs.tab",(()=>{for(const t of Q.find('.active[data-bs-toggle="tab"], .active[data-bs-toggle="pill"], .active[data-bs-toggle="list"]'))kn.getOrCreateInstance(t)})),g(kn);const Ln="hide",Dn="show",Sn="showing",In={animation:"boolean",autohide:"boolean",delay:"number"},Nn={animation:!0,autohide:!0,delay:5e3};class Pn extends z{constructor(t,e){super(t,e),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return Nn}static get DefaultType(){return In}static get NAME(){return"toast"}show(){P.trigger(this._element,"show.bs.toast").defaultPrevented||(this._clearTimeout(),this._config.animation&&this._element.classList.add("fade"),this._element.classList.remove(Ln),d(this._element),this._element.classList.add(Dn,Sn),this._queueCallback((()=>{this._element.classList.remove(Sn),P.trigger(this._element,"shown.bs.toast"),this._maybeScheduleHide()}),this._element,this._config.animation))}hide(){this.isShown()&&(P.trigger(this._element,"hide.bs.toast").defaultPrevented||(this._element.classList.add(Sn),this._queueCallback((()=>{this._element.classList.add(Ln),this._element.classList.remove(Sn,Dn),P.trigger(this._element,"hidden.bs.toast")}),this._element,this._config.animation)))}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(Dn),super.dispose()}isShown(){return this._element.classList.contains(Dn)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout((()=>{this.hide()}),this._config.delay)))}_onInteraction(t,e){switch(t.type){case"mouseover":case"mouseout":this._hasMouseInteraction=e;break;case"focusin":case"focusout":this._hasKeyboardInteraction=e}if(e)return void this._clearTimeout();const i=t.relatedTarget;this._element===i||this._element.contains(i)||this._maybeScheduleHide()}_setListeners(){P.on(this._element,"mouseover.bs.toast",(t=>this._onInteraction(t,!0))),P.on(this._element,"mouseout.bs.toast",(t=>this._onInteraction(t,!1))),P.on(this._element,"focusin.bs.toast",(t=>this._onInteraction(t,!0))),P.on(this._element,"focusout.bs.toast",(t=>this._onInteraction(t,!1)))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(t){return this.each((function(){const e=Pn.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}return q(Pn),g(Pn),{Alert:R,Button:K,Carousel:at,Collapse:pt,Dropdown:hi,Modal:Ni,Offcanvas:zi,Popover:un,ScrollSpy:bn,Tab:kn,Toast:Pn,Tooltip:cn}}));
//# 
/**
 * SimpleBar.js - v5.3.8
 * Scrollbars, simpler.
 * https://grsmto.github.io/simplebar/
 *
 * Made by Adrien Denat from a fork by Jonathan Nicol
 * Under MIT License
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).SimpleBar=e()}(this,(function(){"use strict";var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function e(t,e){return t(e={exports:{}},e.exports),e.exports}var r,n,i=function(t){return t&&t.Math==Math&&t},o=i("object"==typeof globalThis&&globalThis)||i("object"==typeof window&&window)||i("object"==typeof self&&self)||i("object"==typeof t&&t)||function(){return this}()||Function("return this")(),s=Object.defineProperty,a=function(t,e){try{s(o,t,{value:e,configurable:!0,writable:!0})}catch(r){o[t]=e}return e},c=o["__core-js_shared__"]||a("__core-js_shared__",{}),l=e((function(t){(t.exports=function(t,e){return c[t]||(c[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.22.6",mode:"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.22.6/LICENSE",source:"https://github.com/zloirock/core-js"})})),u=function(t){try{return!!t()}catch(t){return!0}},f=!u((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")})),h=Function.prototype,d=h.bind,p=h.call,v=f&&d.bind(p,p),g=f?function(t){return t&&v(t)}:function(t){return t&&function(){return p.apply(t,arguments)}},b=o.TypeError,y=function(t){if(null==t)throw b("Can't call method on "+t);return t},m=o.Object,x=function(t){return m(y(t))},E=g({}.hasOwnProperty),w=Object.hasOwn||function(t,e){return E(x(t),e)},O=0,S=Math.random(),A=g(1..toString),k=function(t){return"Symbol("+(void 0===t?"":t)+")_"+A(++O+S,36)},T=function(t){return"function"==typeof t},L=function(t){return T(t)?t:void 0},R=function(t,e){return arguments.length<2?L(o[t]):o[t]&&o[t][e]},_=R("navigator","userAgent")||"",j=o.process,z=o.Deno,M=j&&j.versions||z&&z.version,C=M&&M.v8;C&&(n=(r=C.split("."))[0]>0&&r[0]<4?1:+(r[0]+r[1])),!n&&_&&(!(r=_.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=_.match(/Chrome\/(\d+)/))&&(n=+r[1]);var N=n,W=!!Object.getOwnPropertySymbols&&!u((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&N&&N<41})),I=W&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,P=l("wks"),B=o.Symbol,D=B&&B.for,F=I?B:B&&B.withoutSetter||k,V=function(t){if(!w(P,t)||!W&&"string"!=typeof P[t]){var e="Symbol."+t;W&&w(B,t)?P[t]=B[t]:P[t]=I&&D?D(e):F(e)}return P[t]},$={};$[V("toStringTag")]="z";var X="[object z]"===String($),H=!u((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),q=function(t){return"object"==typeof t?null!==t:T(t)},Y=o.document,G=q(Y)&&q(Y.createElement),U=function(t){return G?Y.createElement(t):{}},K=!H&&!u((function(){return 7!=Object.defineProperty(U("div"),"a",{get:function(){return 7}}).a})),J=H&&u((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype})),Q=o.String,Z=o.TypeError,tt=function(t){if(q(t))return t;throw Z(Q(t)+" is not an object")},et=Function.prototype.call,rt=f?et.bind(et):function(){return et.apply(et,arguments)},nt=g({}.isPrototypeOf),it=o.Object,ot=I?function(t){return"symbol"==typeof t}:function(t){var e=R("Symbol");return T(e)&&nt(e.prototype,it(t))},st=o.String,at=function(t){try{return st(t)}catch(t){return"Object"}},ct=o.TypeError,lt=function(t){if(T(t))return t;throw ct(at(t)+" is not a function")},ut=function(t,e){var r=t[e];return null==r?void 0:lt(r)},ft=o.TypeError,ht=o.TypeError,dt=V("toPrimitive"),pt=function(t,e){if(!q(t)||ot(t))return t;var r,n=ut(t,dt);if(n){if(void 0===e&&(e="default"),r=rt(n,t,e),!q(r)||ot(r))return r;throw ht("Can't convert object to primitive value")}return void 0===e&&(e="number"),function(t,e){var r,n;if("string"===e&&T(r=t.toString)&&!q(n=rt(r,t)))return n;if(T(r=t.valueOf)&&!q(n=rt(r,t)))return n;if("string"!==e&&T(r=t.toString)&&!q(n=rt(r,t)))return n;throw ft("Can't convert object to primitive value")}(t,e)},vt=function(t){var e=pt(t,"string");return ot(e)?e:e+""},gt=o.TypeError,bt=Object.defineProperty,yt=Object.getOwnPropertyDescriptor,mt={f:H?J?function(t,e,r){if(tt(t),e=vt(e),tt(r),"function"==typeof t&&"prototype"===e&&"value"in r&&"writable"in r&&!r.writable){var n=yt(t,e);n&&n.writable&&(t[e]=r.value,r={configurable:"configurable"in r?r.configurable:n.configurable,enumerable:"enumerable"in r?r.enumerable:n.enumerable,writable:!1})}return bt(t,e,r)}:bt:function(t,e,r){if(tt(t),e=vt(e),tt(r),K)try{return bt(t,e,r)}catch(t){}if("get"in r||"set"in r)throw gt("Accessors not supported");return"value"in r&&(t[e]=r.value),t}},xt=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},Et=H?function(t,e,r){return mt.f(t,e,xt(1,r))}:function(t,e,r){return t[e]=r,t},wt=Function.prototype,Ot=H&&Object.getOwnPropertyDescriptor,St=w(wt,"name"),At={EXISTS:St,PROPER:St&&"something"===function(){}.name,CONFIGURABLE:St&&(!H||H&&Ot(wt,"name").configurable)},kt=g(Function.toString);T(c.inspectSource)||(c.inspectSource=function(t){return kt(t)});var Tt,Lt,Rt,_t=c.inspectSource,jt=o.WeakMap,zt=T(jt)&&/native code/.test(_t(jt)),Mt=l("keys"),Ct=function(t){return Mt[t]||(Mt[t]=k(t))},Nt={},Wt=o.TypeError,It=o.WeakMap;if(zt||c.state){var Pt=c.state||(c.state=new It),Bt=g(Pt.get),Dt=g(Pt.has),Ft=g(Pt.set);Tt=function(t,e){if(Dt(Pt,t))throw new Wt("Object already initialized");return e.facade=t,Ft(Pt,t,e),e},Lt=function(t){return Bt(Pt,t)||{}},Rt=function(t){return Dt(Pt,t)}}else{var Vt=Ct("state");Nt[Vt]=!0,Tt=function(t,e){if(w(t,Vt))throw new Wt("Object already initialized");return e.facade=t,Et(t,Vt,e),e},Lt=function(t){return w(t,Vt)?t[Vt]:{}},Rt=function(t){return w(t,Vt)}}var $t={set:Tt,get:Lt,has:Rt,enforce:function(t){return Rt(t)?Lt(t):Tt(t,{})},getterFor:function(t){return function(e){var r;if(!q(e)||(r=Lt(e)).type!==t)throw Wt("Incompatible receiver, "+t+" required");return r}}},Xt=e((function(t){var e=At.CONFIGURABLE,r=$t.enforce,n=$t.get,i=Object.defineProperty,o=H&&!u((function(){return 8!==i((function(){}),"length",{value:8}).length})),s=String(String).split("String"),a=t.exports=function(t,n,a){if("Symbol("===String(n).slice(0,7)&&(n="["+String(n).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),a&&a.getter&&(n="get "+n),a&&a.setter&&(n="set "+n),(!w(t,"name")||e&&t.name!==n)&&i(t,"name",{value:n,configurable:!0}),o&&a&&w(a,"arity")&&t.length!==a.arity&&i(t,"length",{value:a.arity}),a&&w(a,"constructor")&&a.constructor){if(H)try{i(t,"prototype",{writable:!1})}catch(t){}}else t.prototype=void 0;var c=r(t);return w(c,"source")||(c.source=s.join("string"==typeof n?n:"")),t};Function.prototype.toString=a((function(){return T(this)&&n(this).source||_t(this)}),"toString")})),Ht=function(t,e,r,n){n||(n={});var i=n.enumerable,o=void 0!==n.name?n.name:e;return T(r)&&Xt(r,o,n),n.global?i?t[e]=r:a(e,r):(n.unsafe?t[e]&&(i=!0):delete t[e],i?t[e]=r:Et(t,e,r)),t},qt=g({}.toString),Yt=g("".slice),Gt=function(t){return Yt(qt(t),8,-1)},Ut=V("toStringTag"),Kt=o.Object,Jt="Arguments"==Gt(function(){return arguments}()),Qt=X?Gt:function(t){var e,r,n;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,e){try{return t[e]}catch(t){}}(e=Kt(t),Ut))?r:Jt?Gt(e):"Object"==(n=Gt(e))&&T(e.callee)?"Arguments":n},Zt=X?{}.toString:function(){return"[object "+Qt(this)+"]"};X||Ht(Object.prototype,"toString",Zt,{unsafe:!0});var te={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0},ee=U("span").classList,re=ee&&ee.constructor&&ee.constructor.prototype,ne=re===Object.prototype?void 0:re,ie=g(g.bind),oe=function(t,e){return lt(t),void 0===e?t:f?ie(t,e):function(){return t.apply(e,arguments)}},se=o.Object,ae=g("".split),ce=u((function(){return!se("z").propertyIsEnumerable(0)}))?function(t){return"String"==Gt(t)?ae(t,""):se(t)}:se,le=Math.ceil,ue=Math.floor,fe=Math.trunc||function(t){var e=+t;return(e>0?ue:le)(e)},he=function(t){var e=+t;return e!=e||0===e?0:fe(e)},de=Math.min,pe=function(t){return t>0?de(he(t),9007199254740991):0},ve=function(t){return pe(t.length)},ge=Array.isArray||function(t){return"Array"==Gt(t)},be=function(){},ye=[],me=R("Reflect","construct"),xe=/^\s*(?:class|function)\b/,Ee=g(xe.exec),we=!xe.exec(be),Oe=function(t){if(!T(t))return!1;try{return me(be,ye,t),!0}catch(t){return!1}},Se=function(t){if(!T(t))return!1;switch(Qt(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return we||!!Ee(xe,_t(t))}catch(t){return!0}};Se.sham=!0;var Ae=!me||u((function(){var t;return Oe(Oe.call)||!Oe(Object)||!Oe((function(){t=!0}))||t}))?Se:Oe,ke=V("species"),Te=o.Array,Le=function(t,e){return new(function(t){var e;return ge(t)&&(e=t.constructor,(Ae(e)&&(e===Te||ge(e.prototype))||q(e)&&null===(e=e[ke]))&&(e=void 0)),void 0===e?Te:e}(t))(0===e?0:e)},Re=g([].push),_e=function(t){var e=1==t,r=2==t,n=3==t,i=4==t,o=6==t,s=7==t,a=5==t||o;return function(c,l,u,f){for(var h,d,p=x(c),v=ce(p),g=oe(l,u),b=ve(v),y=0,m=f||Le,E=e?m(c,b):r||s?m(c,0):void 0;b>y;y++)if((a||y in v)&&(d=g(h=v[y],y,p),t))if(e)E[y]=d;else if(d)switch(t){case 3:return!0;case 5:return h;case 6:return y;case 2:Re(E,h)}else switch(t){case 4:return!1;case 7:Re(E,h)}return o?-1:n||i?i:E}},je={forEach:_e(0),map:_e(1),filter:_e(2),some:_e(3),every:_e(4),find:_e(5),findIndex:_e(6),filterReject:_e(7)},ze=function(t,e){var r=[][t];return!!r&&u((function(){r.call(null,e||function(){return 1},1)}))},Me=je.forEach,Ce=ze("forEach")?[].forEach:function(t){return Me(this,t,arguments.length>1?arguments[1]:void 0)},Ne=function(t){if(t&&t.forEach!==Ce)try{Et(t,"forEach",Ce)}catch(e){t.forEach=Ce}};for(var We in te)te[We]&&Ne(o[We]&&o[We].prototype);Ne(ne);var Ie=!("undefined"==typeof window||!window.document||!window.document.createElement),Pe={}.propertyIsEnumerable,Be=Object.getOwnPropertyDescriptor,De={f:Be&&!Pe.call({1:2},1)?function(t){var e=Be(this,t);return!!e&&e.enumerable}:Pe},Fe=function(t){return ce(y(t))},Ve=Object.getOwnPropertyDescriptor,$e={f:H?Ve:function(t,e){if(t=Fe(t),e=vt(e),K)try{return Ve(t,e)}catch(t){}if(w(t,e))return xt(!rt(De.f,t,e),t[e])}},Xe=Math.max,He=Math.min,qe=function(t,e){var r=he(t);return r<0?Xe(r+e,0):He(r,e)},Ye=function(t){return function(e,r,n){var i,o=Fe(e),s=ve(o),a=qe(n,s);if(t&&r!=r){for(;s>a;)if((i=o[a++])!=i)return!0}else for(;s>a;a++)if((t||a in o)&&o[a]===r)return t||a||0;return!t&&-1}},Ge={includes:Ye(!0),indexOf:Ye(!1)}.indexOf,Ue=g([].push),Ke=function(t,e){var r,n=Fe(t),i=0,o=[];for(r in n)!w(Nt,r)&&w(n,r)&&Ue(o,r);for(;e.length>i;)w(n,r=e[i++])&&(~Ge(o,r)||Ue(o,r));return o},Je=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],Qe=Je.concat("length","prototype"),Ze={f:Object.getOwnPropertyNames||function(t){return Ke(t,Qe)}},tr={f:Object.getOwnPropertySymbols},er=g([].concat),rr=R("Reflect","ownKeys")||function(t){var e=Ze.f(tt(t)),r=tr.f;return r?er(e,r(t)):e},nr=function(t,e,r){for(var n=rr(e),i=mt.f,o=$e.f,s=0;s<n.length;s++){var a=n[s];w(t,a)||r&&w(r,a)||i(t,a,o(e,a))}},ir=/#|\.prototype\./,or=function(t,e){var r=ar[sr(t)];return r==lr||r!=cr&&(T(e)?u(e):!!e)},sr=or.normalize=function(t){return String(t).replace(ir,".").toLowerCase()},ar=or.data={},cr=or.NATIVE="N",lr=or.POLYFILL="P",ur=or,fr=$e.f,hr=function(t,e){var r,n,i,s,c,l=t.target,u=t.global,f=t.stat;if(r=u?o:f?o[l]||a(l,{}):(o[l]||{}).prototype)for(n in e){if(s=e[n],i=t.dontCallGetSet?(c=fr(r,n))&&c.value:r[n],!ur(u?n:l+(f?".":"#")+n,t.forced)&&void 0!==i){if(typeof s==typeof i)continue;nr(s,i)}(t.sham||i&&i.sham)&&Et(s,"sham",!0),Ht(r,n,s,t)}},dr=o.String,pr=function(t){if("Symbol"===Qt(t))throw TypeError("Cannot convert a Symbol value to a string");return dr(t)},vr="\t\n\v\f\r                　\u2028\u2029\ufeff",gr=g("".replace),br="["+vr+"]",yr=RegExp("^"+br+br+"*"),mr=RegExp(br+br+"*$"),xr=function(t){return function(e){var r=pr(y(e));return 1&t&&(r=gr(r,yr,"")),2&t&&(r=gr(r,mr,"")),r}},Er={start:xr(1),end:xr(2),trim:xr(3)}.trim,wr=o.parseInt,Or=o.Symbol,Sr=Or&&Or.iterator,Ar=/^[+-]?0x/i,kr=g(Ar.exec),Tr=8!==wr(vr+"08")||22!==wr(vr+"0x16")||Sr&&!u((function(){wr(Object(Sr))}))?function(t,e){var r=Er(pr(t));return wr(r,e>>>0||(kr(Ar,r)?16:10))}:wr;hr({global:!0,forced:parseInt!=Tr},{parseInt:Tr});var Lr=Object.keys||function(t){return Ke(t,Je)},Rr=Object.assign,_r=Object.defineProperty,jr=g([].concat),zr=!Rr||u((function(){if(H&&1!==Rr({b:1},Rr(_r({},"a",{enumerable:!0,get:function(){_r(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var t={},e={},r=Symbol();return t[r]=7,"abcdefghijklmnopqrst".split("").forEach((function(t){e[t]=t})),7!=Rr({},t)[r]||"abcdefghijklmnopqrst"!=Lr(Rr({},e)).join("")}))?function(t,e){for(var r=x(t),n=arguments.length,i=1,o=tr.f,s=De.f;n>i;)for(var a,c=ce(arguments[i++]),l=o?jr(Lr(c),o(c)):Lr(c),u=l.length,f=0;u>f;)a=l[f++],H&&!rt(s,c,a)||(r[a]=c[a]);return r}:Rr;hr({target:"Object",stat:!0,arity:2,forced:Object.assign!==zr},{assign:zr});var Mr,Cr=V("species"),Nr=je.filter,Wr=(Mr="filter",N>=51||!u((function(){var t=[];return(t.constructor={})[Cr]=function(){return{foo:1}},1!==t[Mr](Boolean).foo})));hr({target:"Array",proto:!0,forced:!Wr},{filter:function(t){return Nr(this,t,arguments.length>1?arguments[1]:void 0)}});var Ir,Pr={f:H&&!J?Object.defineProperties:function(t,e){tt(t);for(var r,n=Fe(e),i=Lr(e),o=i.length,s=0;o>s;)mt.f(t,r=i[s++],n[r]);return t}},Br=R("document","documentElement"),Dr=Ct("IE_PROTO"),Fr=function(){},Vr=function(t){return"<script>"+t+"<\/script>"},$r=function(t){t.write(Vr("")),t.close();var e=t.parentWindow.Object;return t=null,e},Xr=function(){try{Ir=new ActiveXObject("htmlfile")}catch(t){}var t,e;Xr="undefined"!=typeof document?document.domain&&Ir?$r(Ir):((e=U("iframe")).style.display="none",Br.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(Vr("document.F=Object")),t.close(),t.F):$r(Ir);for(var r=Je.length;r--;)delete Xr.prototype[Je[r]];return Xr()};Nt[Dr]=!0;var Hr=Object.create||function(t,e){var r;return null!==t?(Fr.prototype=tt(t),r=new Fr,Fr.prototype=null,r[Dr]=t):r=Xr(),void 0===e?r:Pr.f(r,e)},qr=mt.f,Yr=V("unscopables"),Gr=Array.prototype;null==Gr[Yr]&&qr(Gr,Yr,{configurable:!0,value:Hr(null)});var Ur,Kr,Jr,Qr=function(t){Gr[Yr][t]=!0},Zr={},tn=!u((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype})),en=Ct("IE_PROTO"),rn=o.Object,nn=rn.prototype,on=tn?rn.getPrototypeOf:function(t){var e=x(t);if(w(e,en))return e[en];var r=e.constructor;return T(r)&&e instanceof r?r.prototype:e instanceof rn?nn:null},sn=V("iterator"),an=!1;[].keys&&("next"in(Jr=[].keys())?(Kr=on(on(Jr)))!==Object.prototype&&(Ur=Kr):an=!0),(null==Ur||u((function(){var t={};return Ur[sn].call(t)!==t})))&&(Ur={}),T(Ur[sn])||Ht(Ur,sn,(function(){return this}));var cn={IteratorPrototype:Ur,BUGGY_SAFARI_ITERATORS:an},ln=mt.f,un=V("toStringTag"),fn=function(t,e,r){t&&!r&&(t=t.prototype),t&&!w(t,un)&&ln(t,un,{configurable:!0,value:e})},hn=cn.IteratorPrototype,dn=function(){return this},pn=o.String,vn=o.TypeError,gn=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,r={};try{(t=g(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set))(r,[]),e=r instanceof Array}catch(t){}return function(r,n){return tt(r),function(t){if("object"==typeof t||T(t))return t;throw vn("Can't set "+pn(t)+" as a prototype")}(n),e?t(r,n):r.__proto__=n,r}}():void 0),bn=At.PROPER,yn=At.CONFIGURABLE,mn=cn.IteratorPrototype,xn=cn.BUGGY_SAFARI_ITERATORS,En=V("iterator"),wn=function(){return this},On=function(t,e,r,n,i,o,s){!function(t,e,r,n){var i=e+" Iterator";t.prototype=Hr(hn,{next:xt(+!n,r)}),fn(t,i,!1),Zr[i]=dn}(r,e,n);var a,c,l,u=function(t){if(t===i&&v)return v;if(!xn&&t in d)return d[t];switch(t){case"keys":case"values":case"entries":return function(){return new r(this,t)}}return function(){return new r(this)}},f=e+" Iterator",h=!1,d=t.prototype,p=d[En]||d["@@iterator"]||i&&d[i],v=!xn&&p||u(i),g="Array"==e&&d.entries||p;if(g&&(a=on(g.call(new t)))!==Object.prototype&&a.next&&(on(a)!==mn&&(gn?gn(a,mn):T(a[En])||Ht(a,En,wn)),fn(a,f,!0)),bn&&"values"==i&&p&&"values"!==p.name&&(yn?Et(d,"name","values"):(h=!0,v=function(){return rt(p,this)})),i)if(c={values:u("values"),keys:o?v:u("keys"),entries:u("entries")},s)for(l in c)(xn||h||!(l in d))&&Ht(d,l,c[l]);else hr({target:e,proto:!0,forced:xn||h},c);return d[En]!==v&&Ht(d,En,v,{name:i}),Zr[e]=v,c},Sn=mt.f,An=$t.set,kn=$t.getterFor("Array Iterator"),Tn=On(Array,"Array",(function(t,e){An(this,{type:"Array Iterator",target:Fe(t),index:0,kind:e})}),(function(){var t=kn(this),e=t.target,r=t.kind,n=t.index++;return!e||n>=e.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==r?{value:n,done:!1}:"values"==r?{value:e[n],done:!1}:{value:[n,e[n]],done:!1}}),"values"),Ln=Zr.Arguments=Zr.Array;if(Qr("keys"),Qr("values"),Qr("entries"),H&&"values"!==Ln.name)try{Sn(Ln,"name",{value:"values"})}catch(t){}var Rn=g("".charAt),_n=g("".charCodeAt),jn=g("".slice),zn=function(t){return function(e,r){var n,i,o=pr(y(e)),s=he(r),a=o.length;return s<0||s>=a?t?"":void 0:(n=_n(o,s))<55296||n>56319||s+1===a||(i=_n(o,s+1))<56320||i>57343?t?Rn(o,s):n:t?jn(o,s,s+2):i-56320+(n-55296<<10)+65536}},Mn={codeAt:zn(!1),charAt:zn(!0)},Cn=Mn.charAt,Nn=$t.set,Wn=$t.getterFor("String Iterator");On(String,"String",(function(t){Nn(this,{type:"String Iterator",string:pr(t),index:0})}),(function(){var t,e=Wn(this),r=e.string,n=e.index;return n>=r.length?{value:void 0,done:!0}:(t=Cn(r,n),e.index+=t.length,{value:t,done:!1})}));var In=function(t,e,r){for(var n in e)Ht(t,n,e[n],r);return t},Pn=o.Array,Bn=Math.max,Dn=Ze.f,Fn="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],Vn=function(t){try{return Dn(t)}catch(t){return function(t,e,r){for(var n,i,o,s,a=ve(t),c=qe(e,a),l=qe(void 0===r?a:r,a),u=Pn(Bn(l-c,0)),f=0;c<l;c++,f++)n=u,i=f,o=t[c],s=void 0,(s=vt(i))in n?mt.f(n,s,xt(0,o)):n[s]=o;return u.length=f,u}(Fn)}},$n={f:function(t){return Fn&&"Window"==Gt(t)?Vn(t):Dn(Fe(t))}},Xn=u((function(){if("function"==typeof ArrayBuffer){var t=new ArrayBuffer(8);Object.isExtensible(t)&&Object.defineProperty(t,"a",{value:8})}})),Hn=Object.isExtensible,qn=u((function(){Hn(1)}))||Xn?function(t){return!!q(t)&&((!Xn||"ArrayBuffer"!=Gt(t))&&(!Hn||Hn(t)))}:Hn,Yn=!u((function(){return Object.isExtensible(Object.preventExtensions({}))})),Gn=e((function(t){var e=mt.f,r=!1,n=k("meta"),i=0,o=function(t){e(t,n,{value:{objectID:"O"+i++,weakData:{}}})},s=t.exports={enable:function(){s.enable=function(){},r=!0;var t=Ze.f,e=g([].splice),i={};i[n]=1,t(i).length&&(Ze.f=function(r){for(var i=t(r),o=0,s=i.length;o<s;o++)if(i[o]===n){e(i,o,1);break}return i},hr({target:"Object",stat:!0,forced:!0},{getOwnPropertyNames:$n.f}))},fastKey:function(t,e){if(!q(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!w(t,n)){if(!qn(t))return"F";if(!e)return"E";o(t)}return t[n].objectID},getWeakData:function(t,e){if(!w(t,n)){if(!qn(t))return!0;if(!e)return!1;o(t)}return t[n].weakData},onFreeze:function(t){return Yn&&r&&qn(t)&&!w(t,n)&&o(t),t}};Nt[n]=!0})),Un=(Gn.enable,Gn.fastKey,Gn.getWeakData,Gn.onFreeze,V("iterator")),Kn=Array.prototype,Jn=V("iterator"),Qn=function(t){if(null!=t)return ut(t,Jn)||ut(t,"@@iterator")||Zr[Qt(t)]},Zn=o.TypeError,ti=function(t,e,r){var n,i;tt(t);try{if(!(n=ut(t,"return"))){if("throw"===e)throw r;return r}n=rt(n,t)}catch(t){i=!0,n=t}if("throw"===e)throw r;if(i)throw n;return tt(n),r},ei=o.TypeError,ri=function(t,e){this.stopped=t,this.result=e},ni=ri.prototype,ii=function(t,e,r){var n,i,o,s,a,c,l,u,f=r&&r.that,h=!(!r||!r.AS_ENTRIES),d=!(!r||!r.IS_ITERATOR),p=!(!r||!r.INTERRUPTED),v=oe(e,f),g=function(t){return n&&ti(n,"normal",t),new ri(!0,t)},b=function(t){return h?(tt(t),p?v(t[0],t[1],g):v(t[0],t[1])):p?v(t,g):v(t)};if(d)n=t;else{if(!(i=Qn(t)))throw ei(at(t)+" is not iterable");if(void 0!==(u=i)&&(Zr.Array===u||Kn[Un]===u)){for(o=0,s=ve(t);s>o;o++)if((a=b(t[o]))&&nt(ni,a))return a;return new ri(!1)}n=function(t,e){var r=arguments.length<2?Qn(t):e;if(lt(r))return tt(rt(r,t));throw Zn(at(t)+" is not iterable")}(t,i)}for(c=n.next;!(l=rt(c,n)).done;){try{a=b(l.value)}catch(t){ti(n,"throw",t)}if("object"==typeof a&&a&&nt(ni,a))return a}return new ri(!1)},oi=o.TypeError,si=function(t,e){if(nt(e,t))return t;throw oi("Incorrect invocation")},ai=V("iterator"),ci=!1;try{var li=0,ui={next:function(){return{done:!!li++}},return:function(){ci=!0}};ui[ai]=function(){return this},Array.from(ui,(function(){throw 2}))}catch(t){}var fi=Gn.getWeakData,hi=$t.set,di=$t.getterFor,pi=je.find,vi=je.findIndex,gi=g([].splice),bi=0,yi=function(t){return t.frozen||(t.frozen=new mi)},mi=function(){this.entries=[]},xi=function(t,e){return pi(t.entries,(function(t){return t[0]===e}))};mi.prototype={get:function(t){var e=xi(this,t);if(e)return e[1]},has:function(t){return!!xi(this,t)},set:function(t,e){var r=xi(this,t);r?r[1]=e:this.entries.push([t,e])},delete:function(t){var e=vi(this.entries,(function(e){return e[0]===t}));return~e&&gi(this.entries,e,1),!!~e}};var Ei,wi={getConstructor:function(t,e,r,n){var i=t((function(t,i){si(t,o),hi(t,{type:e,id:bi++,frozen:void 0}),null!=i&&ii(i,t[n],{that:t,AS_ENTRIES:r})})),o=i.prototype,s=di(e),a=function(t,e,r){var n=s(t),i=fi(tt(e),!0);return!0===i?yi(n).set(e,r):i[n.id]=r,t};return In(o,{delete:function(t){var e=s(this);if(!q(t))return!1;var r=fi(t);return!0===r?yi(e).delete(t):r&&w(r,e.id)&&delete r[e.id]},has:function(t){var e=s(this);if(!q(t))return!1;var r=fi(t);return!0===r?yi(e).has(t):r&&w(r,e.id)}}),In(o,r?{get:function(t){var e=s(this);if(q(t)){var r=fi(t);return!0===r?yi(e).get(t):r?r[e.id]:void 0}},set:function(t,e){return a(this,t,e)}}:{add:function(t){return a(this,t,!0)}}),i}},Oi=$t.enforce,Si=!o.ActiveXObject&&"ActiveXObject"in o,Ai=function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}},ki=function(t,e,r){var n=-1!==t.indexOf("Map"),i=-1!==t.indexOf("Weak"),s=n?"set":"add",a=o[t],c=a&&a.prototype,l=a,f={},h=function(t){var e=g(c[t]);Ht(c,t,"add"==t?function(t){return e(this,0===t?0:t),this}:"delete"==t?function(t){return!(i&&!q(t))&&e(this,0===t?0:t)}:"get"==t?function(t){return i&&!q(t)?void 0:e(this,0===t?0:t)}:"has"==t?function(t){return!(i&&!q(t))&&e(this,0===t?0:t)}:function(t,r){return e(this,0===t?0:t,r),this})};if(ur(t,!T(a)||!(i||c.forEach&&!u((function(){(new a).entries().next()})))))l=r.getConstructor(e,t,n,s),Gn.enable();else if(ur(t,!0)){var d=new l,p=d[s](i?{}:-0,1)!=d,v=u((function(){d.has(1)})),b=function(t,e){if(!e&&!ci)return!1;var r=!1;try{var n={};n[ai]=function(){return{next:function(){return{done:r=!0}}}},t(n)}catch(t){}return r}((function(t){new a(t)})),y=!i&&u((function(){for(var t=new a,e=5;e--;)t[s](e,e);return!t.has(-0)}));b||((l=e((function(t,e){si(t,c);var r=function(t,e,r){var n,i;return gn&&T(n=e.constructor)&&n!==r&&q(i=n.prototype)&&i!==r.prototype&&gn(t,i),t}(new a,t,l);return null!=e&&ii(e,r[s],{that:r,AS_ENTRIES:n}),r}))).prototype=c,c.constructor=l),(v||y)&&(h("delete"),h("has"),n&&h("get")),(y||p)&&h(s),i&&c.clear&&delete c.clear}return f[t]=l,hr({global:!0,constructor:!0,forced:l!=a},f),fn(l,t),i||r.setStrong(l,t,n),l}("WeakMap",Ai,wi);if(zt&&Si){Ei=wi.getConstructor(Ai,"WeakMap",!0),Gn.enable();var Ti=ki.prototype,Li=g(Ti.delete),Ri=g(Ti.has),_i=g(Ti.get),ji=g(Ti.set);In(Ti,{delete:function(t){if(q(t)&&!qn(t)){var e=Oi(this);return e.frozen||(e.frozen=new Ei),Li(this,t)||e.frozen.delete(t)}return Li(this,t)},has:function(t){if(q(t)&&!qn(t)){var e=Oi(this);return e.frozen||(e.frozen=new Ei),Ri(this,t)||e.frozen.has(t)}return Ri(this,t)},get:function(t){if(q(t)&&!qn(t)){var e=Oi(this);return e.frozen||(e.frozen=new Ei),Ri(this,t)?_i(this,t):e.frozen.get(t)}return _i(this,t)},set:function(t,e){if(q(t)&&!qn(t)){var r=Oi(this);r.frozen||(r.frozen=new Ei),Ri(this,t)?ji(this,t,e):r.frozen.set(t,e)}else ji(this,t,e);return this}})}var zi=V("iterator"),Mi=V("toStringTag"),Ci=Tn.values,Ni=function(t,e){if(t){if(t[zi]!==Ci)try{Et(t,zi,Ci)}catch(e){t[zi]=Ci}if(t[Mi]||Et(t,Mi,e),te[e])for(var r in Tn)if(t[r]!==Tn[r])try{Et(t,r,Tn[r])}catch(e){t[r]=Tn[r]}}};for(var Wi in te)Ni(o[Wi]&&o[Wi].prototype,Wi);Ni(ne,"DOMTokenList");var Ii=/^\s+|\s+$/g,Pi=/^[-+]0x[0-9a-f]+$/i,Bi=/^0b[01]+$/i,Di=/^0o[0-7]+$/i,Fi=parseInt,Vi="object"==typeof t&&t&&t.Object===Object&&t,$i="object"==typeof self&&self&&self.Object===Object&&self,Xi=Vi||$i||Function("return this")(),Hi=Object.prototype.toString,qi=Math.max,Yi=Math.min,Gi=function(){return Xi.Date.now()};function Ui(t,e,r){var n,i,o,s,a,c,l=0,u=!1,f=!1,h=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function d(e){var r=n,o=i;return n=i=void 0,l=e,s=t.apply(o,r)}function p(t){return l=t,a=setTimeout(g,e),u?d(t):s}function v(t){var r=t-c;return void 0===c||r>=e||r<0||f&&t-l>=o}function g(){var t=Gi();if(v(t))return b(t);a=setTimeout(g,function(t){var r=e-(t-c);return f?Yi(r,o-(t-l)):r}(t))}function b(t){return a=void 0,h&&n?d(t):(n=i=void 0,s)}function y(){var t=Gi(),r=v(t);if(n=arguments,i=this,c=t,r){if(void 0===a)return p(c);if(f)return a=setTimeout(g,e),d(c)}return void 0===a&&(a=setTimeout(g,e)),s}return e=Ji(e)||0,Ki(r)&&(u=!!r.leading,o=(f="maxWait"in r)?qi(Ji(r.maxWait)||0,e):o,h="trailing"in r?!!r.trailing:h),y.cancel=function(){void 0!==a&&clearTimeout(a),l=0,n=c=i=a=void 0},y.flush=function(){return void 0===a?s:b(Gi())},y}function Ki(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function Ji(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==Hi.call(t)}(t))return NaN;if(Ki(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=Ki(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(Ii,"");var r=Bi.test(t);return r||Di.test(t)?Fi(t.slice(2),r?2:8):Pi.test(t)?NaN:+t}var Qi=function(t,e,r){var n=!0,i=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return Ki(r)&&(n="leading"in r?!!r.leading:n,i="trailing"in r?!!r.trailing:i),Ui(t,e,{leading:n,maxWait:e,trailing:i})},Zi=/^\s+|\s+$/g,to=/^[-+]0x[0-9a-f]+$/i,eo=/^0b[01]+$/i,ro=/^0o[0-7]+$/i,no=parseInt,io="object"==typeof t&&t&&t.Object===Object&&t,oo="object"==typeof self&&self&&self.Object===Object&&self,so=io||oo||Function("return this")(),ao=Object.prototype.toString,co=Math.max,lo=Math.min,uo=function(){return so.Date.now()};function fo(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function ho(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==ao.call(t)}(t))return NaN;if(fo(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=fo(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(Zi,"");var r=eo.test(t);return r||ro.test(t)?no(t.slice(2),r?2:8):to.test(t)?NaN:+t}var po=function(t,e,r){var n,i,o,s,a,c,l=0,u=!1,f=!1,h=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function d(e){var r=n,o=i;return n=i=void 0,l=e,s=t.apply(o,r)}function p(t){return l=t,a=setTimeout(g,e),u?d(t):s}function v(t){var r=t-c;return void 0===c||r>=e||r<0||f&&t-l>=o}function g(){var t=uo();if(v(t))return b(t);a=setTimeout(g,function(t){var r=e-(t-c);return f?lo(r,o-(t-l)):r}(t))}function b(t){return a=void 0,h&&n?d(t):(n=i=void 0,s)}function y(){var t=uo(),r=v(t);if(n=arguments,i=this,c=t,r){if(void 0===a)return p(c);if(f)return a=setTimeout(g,e),d(c)}return void 0===a&&(a=setTimeout(g,e)),s}return e=ho(e)||0,fo(r)&&(u=!!r.leading,o=(f="maxWait"in r)?co(ho(r.maxWait)||0,e):o,h="trailing"in r?!!r.trailing:h),y.cancel=function(){void 0!==a&&clearTimeout(a),l=0,n=c=i=a=void 0},y.flush=function(){return void 0===a?s:b(uo())},y},vo=/^\[object .+?Constructor\]$/,go="object"==typeof t&&t&&t.Object===Object&&t,bo="object"==typeof self&&self&&self.Object===Object&&self,yo=go||bo||Function("return this")();var mo=Array.prototype,xo=Function.prototype,Eo=Object.prototype,wo=yo["__core-js_shared__"],Oo=function(){var t=/[^.]+$/.exec(wo&&wo.keys&&wo.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),So=xo.toString,Ao=Eo.hasOwnProperty,ko=Eo.toString,To=RegExp("^"+So.call(Ao).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Lo=mo.splice,Ro=Io(yo,"Map"),_o=Io(Object,"create");function jo(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function zo(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Mo(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Co(t,e){for(var r,n,i=t.length;i--;)if((r=t[i][0])===(n=e)||r!=r&&n!=n)return i;return-1}function No(t){return!(!Bo(t)||(e=t,Oo&&Oo in e))&&(function(t){var e=Bo(t)?ko.call(t):"";return"[object Function]"==e||"[object GeneratorFunction]"==e}(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t)?To:vo).test(function(t){if(null!=t){try{return So.call(t)}catch(t){}try{return t+""}catch(t){}}return""}(t));var e}function Wo(t,e){var r,n,i=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?i["string"==typeof e?"string":"hash"]:i.map}function Io(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return No(r)?r:void 0}function Po(t,e){if("function"!=typeof t||e&&"function"!=typeof e)throw new TypeError("Expected a function");var r=function(){var n=arguments,i=e?e.apply(this,n):n[0],o=r.cache;if(o.has(i))return o.get(i);var s=t.apply(this,n);return r.cache=o.set(i,s),s};return r.cache=new(Po.Cache||Mo),r}function Bo(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}jo.prototype.clear=function(){this.__data__=_o?_o(null):{}},jo.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},jo.prototype.get=function(t){var e=this.__data__;if(_o){var r=e[t];return"__lodash_hash_undefined__"===r?void 0:r}return Ao.call(e,t)?e[t]:void 0},jo.prototype.has=function(t){var e=this.__data__;return _o?void 0!==e[t]:Ao.call(e,t)},jo.prototype.set=function(t,e){return this.__data__[t]=_o&&void 0===e?"__lodash_hash_undefined__":e,this},zo.prototype.clear=function(){this.__data__=[]},zo.prototype.delete=function(t){var e=this.__data__,r=Co(e,t);return!(r<0)&&(r==e.length-1?e.pop():Lo.call(e,r,1),!0)},zo.prototype.get=function(t){var e=this.__data__,r=Co(e,t);return r<0?void 0:e[r][1]},zo.prototype.has=function(t){return Co(this.__data__,t)>-1},zo.prototype.set=function(t,e){var r=this.__data__,n=Co(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},Mo.prototype.clear=function(){this.__data__={hash:new jo,map:new(Ro||zo),string:new jo}},Mo.prototype.delete=function(t){return Wo(this,t).delete(t)},Mo.prototype.get=function(t){return Wo(this,t).get(t)},Mo.prototype.has=function(t){return Wo(this,t).has(t)},Mo.prototype.set=function(t,e){return Wo(this,t).set(t,e),this},Po.Cache=Mo;var Do,Fo=Po,Vo=[],$o="ResizeObserver loop completed with undelivered notifications.";!function(t){t.BORDER_BOX="border-box",t.CONTENT_BOX="content-box",t.DEVICE_PIXEL_CONTENT_BOX="device-pixel-content-box"}(Do||(Do={}));var Xo,Ho=function(t){return Object.freeze(t)},qo=function(t,e){this.inlineSize=t,this.blockSize=e,Ho(this)},Yo=function(){function t(t,e,r,n){return this.x=t,this.y=e,this.width=r,this.height=n,this.top=this.y,this.left=this.x,this.bottom=this.top+this.height,this.right=this.left+this.width,Ho(this)}return t.prototype.toJSON=function(){var t=this;return{x:t.x,y:t.y,top:t.top,right:t.right,bottom:t.bottom,left:t.left,width:t.width,height:t.height}},t.fromRect=function(e){return new t(e.x,e.y,e.width,e.height)},t}(),Go=function(t){return t instanceof SVGElement&&"getBBox"in t},Uo=function(t){if(Go(t)){var e=t.getBBox(),r=e.width,n=e.height;return!r&&!n}var i=t,o=i.offsetWidth,s=i.offsetHeight;return!(o||s||t.getClientRects().length)},Ko=function(t){var e,r;if(t instanceof Element)return!0;var n=null===(r=null===(e=t)||void 0===e?void 0:e.ownerDocument)||void 0===r?void 0:r.defaultView;return!!(n&&t instanceof n.Element)},Jo="undefined"!=typeof window?window:{},Qo=new WeakMap,Zo=/auto|scroll/,ts=/^tb|vertical/,es=/msie|trident/i.test(Jo.navigator&&Jo.navigator.userAgent),rs=function(t){return parseFloat(t||"0")},ns=function(t,e,r){return void 0===t&&(t=0),void 0===e&&(e=0),void 0===r&&(r=!1),new qo((r?e:t)||0,(r?t:e)||0)},is=Ho({devicePixelContentBoxSize:ns(),borderBoxSize:ns(),contentBoxSize:ns(),contentRect:new Yo(0,0,0,0)}),os=function(t,e){if(void 0===e&&(e=!1),Qo.has(t)&&!e)return Qo.get(t);if(Uo(t))return Qo.set(t,is),is;var r=getComputedStyle(t),n=Go(t)&&t.ownerSVGElement&&t.getBBox(),i=!es&&"border-box"===r.boxSizing,o=ts.test(r.writingMode||""),s=!n&&Zo.test(r.overflowY||""),a=!n&&Zo.test(r.overflowX||""),c=n?0:rs(r.paddingTop),l=n?0:rs(r.paddingRight),u=n?0:rs(r.paddingBottom),f=n?0:rs(r.paddingLeft),h=n?0:rs(r.borderTopWidth),d=n?0:rs(r.borderRightWidth),p=n?0:rs(r.borderBottomWidth),v=f+l,g=c+u,b=(n?0:rs(r.borderLeftWidth))+d,y=h+p,m=a?t.offsetHeight-y-t.clientHeight:0,x=s?t.offsetWidth-b-t.clientWidth:0,E=i?v+b:0,w=i?g+y:0,O=n?n.width:rs(r.width)-E-x,S=n?n.height:rs(r.height)-w-m,A=O+v+x+b,k=S+g+m+y,T=Ho({devicePixelContentBoxSize:ns(Math.round(O*devicePixelRatio),Math.round(S*devicePixelRatio),o),borderBoxSize:ns(A,k,o),contentBoxSize:ns(O,S,o),contentRect:new Yo(f,c,O,S)});return Qo.set(t,T),T},ss=function(t,e,r){var n=os(t,r),i=n.borderBoxSize,o=n.contentBoxSize,s=n.devicePixelContentBoxSize;switch(e){case Do.DEVICE_PIXEL_CONTENT_BOX:return s;case Do.BORDER_BOX:return i;default:return o}},as=function(t){var e=os(t);this.target=t,this.contentRect=e.contentRect,this.borderBoxSize=Ho([e.borderBoxSize]),this.contentBoxSize=Ho([e.contentBoxSize]),this.devicePixelContentBoxSize=Ho([e.devicePixelContentBoxSize])},cs=function(t){if(Uo(t))return 1/0;for(var e=0,r=t.parentNode;r;)e+=1,r=r.parentNode;return e},ls=function(){var t=1/0,e=[];Vo.forEach((function(r){if(0!==r.activeTargets.length){var n=[];r.activeTargets.forEach((function(e){var r=new as(e.target),i=cs(e.target);n.push(r),e.lastReportedSize=ss(e.target,e.observedBox),i<t&&(t=i)})),e.push((function(){r.callback.call(r.observer,n,r.observer)})),r.activeTargets.splice(0,r.activeTargets.length)}}));for(var r=0,n=e;r<n.length;r++){(0,n[r])()}return t},us=function(t){Vo.forEach((function(e){e.activeTargets.splice(0,e.activeTargets.length),e.skippedTargets.splice(0,e.skippedTargets.length),e.observationTargets.forEach((function(r){r.isActive()&&(cs(r.target)>t?e.activeTargets.push(r):e.skippedTargets.push(r))}))}))},fs=function(){var t,e=0;for(us(e);Vo.some((function(t){return t.activeTargets.length>0}));)e=ls(),us(e);return Vo.some((function(t){return t.skippedTargets.length>0}))&&("function"==typeof ErrorEvent?t=new ErrorEvent("error",{message:$o}):((t=document.createEvent("Event")).initEvent("error",!1,!1),t.message=$o),window.dispatchEvent(t)),e>0},hs=[],ds=function(t){if(!Xo){var e=0,r=document.createTextNode("");new MutationObserver((function(){return hs.splice(0).forEach((function(t){return t()}))})).observe(r,{characterData:!0}),Xo=function(){r.textContent=""+(e?e--:e++)}}hs.push(t),Xo()},ps=0,vs={attributes:!0,characterData:!0,childList:!0,subtree:!0},gs=["resize","load","transitionend","animationend","animationstart","animationiteration","keyup","keydown","mouseup","mousedown","mouseover","mouseout","blur","focus"],bs=function(t){return void 0===t&&(t=0),Date.now()+t},ys=!1,ms=new(function(){function t(){var t=this;this.stopped=!0,this.listener=function(){return t.schedule()}}return t.prototype.run=function(t){var e=this;if(void 0===t&&(t=250),!ys){ys=!0;var r,n=bs(t);r=function(){var r=!1;try{r=fs()}finally{if(ys=!1,t=n-bs(),!ps)return;r?e.run(1e3):t>0?e.run(t):e.start()}},ds((function(){requestAnimationFrame(r)}))}},t.prototype.schedule=function(){this.stop(),this.run()},t.prototype.observe=function(){var t=this,e=function(){return t.observer&&t.observer.observe(document.body,vs)};document.body?e():Jo.addEventListener("DOMContentLoaded",e)},t.prototype.start=function(){var t=this;this.stopped&&(this.stopped=!1,this.observer=new MutationObserver(this.listener),this.observe(),gs.forEach((function(e){return Jo.addEventListener(e,t.listener,!0)})))},t.prototype.stop=function(){var t=this;this.stopped||(this.observer&&this.observer.disconnect(),gs.forEach((function(e){return Jo.removeEventListener(e,t.listener,!0)})),this.stopped=!0)},t}()),xs=function(t){!ps&&t>0&&ms.start(),!(ps+=t)&&ms.stop()},Es=function(){function t(t,e){this.target=t,this.observedBox=e||Do.CONTENT_BOX,this.lastReportedSize={inlineSize:0,blockSize:0}}return t.prototype.isActive=function(){var t,e=ss(this.target,this.observedBox,!0);return t=this.target,Go(t)||function(t){switch(t.tagName){case"INPUT":if("image"!==t.type)break;case"VIDEO":case"AUDIO":case"EMBED":case"OBJECT":case"CANVAS":case"IFRAME":case"IMG":return!0}return!1}(t)||"inline"!==getComputedStyle(t).display||(this.lastReportedSize=e),this.lastReportedSize.inlineSize!==e.inlineSize||this.lastReportedSize.blockSize!==e.blockSize},t}(),ws=function(t,e){this.activeTargets=[],this.skippedTargets=[],this.observationTargets=[],this.observer=t,this.callback=e},Os=new WeakMap,Ss=function(t,e){for(var r=0;r<t.length;r+=1)if(t[r].target===e)return r;return-1},As=function(){function t(){}return t.connect=function(t,e){var r=new ws(t,e);Os.set(t,r)},t.observe=function(t,e,r){var n=Os.get(t),i=0===n.observationTargets.length;Ss(n.observationTargets,e)<0&&(i&&Vo.push(n),n.observationTargets.push(new Es(e,r&&r.box)),xs(1),ms.schedule())},t.unobserve=function(t,e){var r=Os.get(t),n=Ss(r.observationTargets,e),i=1===r.observationTargets.length;n>=0&&(i&&Vo.splice(Vo.indexOf(r),1),r.observationTargets.splice(n,1),xs(-1))},t.disconnect=function(t){var e=this,r=Os.get(t);r.observationTargets.slice().forEach((function(r){return e.unobserve(t,r.target)})),r.activeTargets.splice(0,r.activeTargets.length)},t}(),ks=function(){function t(t){if(0===arguments.length)throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");if("function"!=typeof t)throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");As.connect(this,t)}return t.prototype.observe=function(t,e){if(0===arguments.length)throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!Ko(t))throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");As.observe(this,t,e)},t.prototype.unobserve=function(t){if(0===arguments.length)throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!Ko(t))throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");As.unobserve(this,t)},t.prototype.disconnect=function(){As.disconnect(this)},t.toString=function(){return"function ResizeObserver () { [polyfill code] }"},t}(),Ts=o.TypeError,Ls=function(t){return function(e,r,n,i){lt(r);var o=x(e),s=ce(o),a=ve(o),c=t?a-1:0,l=t?-1:1;if(n<2)for(;;){if(c in s){i=s[c],c+=l;break}if(c+=l,t?c<0:a<=c)throw Ts("Reduce of empty array with no initial value")}for(;t?c>=0:a>c;c+=l)c in s&&(i=r(i,s[c],c,o));return i}},Rs={left:Ls(!1),right:Ls(!0)},_s="process"==Gt(o.process),js=Rs.left,zs=ze("reduce");hr({target:"Array",proto:!0,forced:!zs||!_s&&N>79&&N<83},{reduce:function(t){var e=arguments.length;return js(this,t,e,e>1?arguments[1]:void 0)}});var Ms,Cs,Ns=function(){var t=tt(this),e="";return t.hasIndices&&(e+="d"),t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e},Ws=o.RegExp,Is=u((function(){var t=Ws("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),Ps=Is||u((function(){return!Ws("a","y").sticky})),Bs={BROKEN_CARET:Is||u((function(){var t=Ws("^r","gy");return t.lastIndex=2,null!=t.exec("str")})),MISSED_STICKY:Ps,UNSUPPORTED_Y:Is},Ds=o.RegExp,Fs=u((function(){var t=Ds(".","s");return!(t.dotAll&&t.exec("\n")&&"s"===t.flags)})),Vs=o.RegExp,$s=u((function(){var t=Vs("(?<a>b)","g");return"b"!==t.exec("b").groups.a||"bc"!=="b".replace(t,"$<a>c")})),Xs=$t.get,Hs=l("native-string-replace",String.prototype.replace),qs=RegExp.prototype.exec,Ys=qs,Gs=g("".charAt),Us=g("".indexOf),Ks=g("".replace),Js=g("".slice),Qs=(Cs=/b*/g,rt(qs,Ms=/a/,"a"),rt(qs,Cs,"a"),0!==Ms.lastIndex||0!==Cs.lastIndex),Zs=Bs.BROKEN_CARET,ta=void 0!==/()??/.exec("")[1];(Qs||ta||Zs||Fs||$s)&&(Ys=function(t){var e,r,n,i,o,s,a,c=this,l=Xs(c),u=pr(t),f=l.raw;if(f)return f.lastIndex=c.lastIndex,e=rt(Ys,f,u),c.lastIndex=f.lastIndex,e;var h=l.groups,d=Zs&&c.sticky,p=rt(Ns,c),v=c.source,g=0,b=u;if(d&&(p=Ks(p,"y",""),-1===Us(p,"g")&&(p+="g"),b=Js(u,c.lastIndex),c.lastIndex>0&&(!c.multiline||c.multiline&&"\n"!==Gs(u,c.lastIndex-1))&&(v="(?: "+v+")",b=" "+b,g++),r=new RegExp("^(?:"+v+")",p)),ta&&(r=new RegExp("^"+v+"$(?!\\s)",p)),Qs&&(n=c.lastIndex),i=rt(qs,d?r:c,b),d?i?(i.input=Js(i.input,g),i[0]=Js(i[0],g),i.index=c.lastIndex,c.lastIndex+=i[0].length):c.lastIndex=0:Qs&&i&&(c.lastIndex=c.global?i.index+i[0].length:n),ta&&i&&i.length>1&&rt(Hs,i[0],r,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(i[o]=void 0)})),i&&h)for(i.groups=s=Hr(null),o=0;o<h.length;o++)s[(a=h[o])[0]]=i[a[1]];return i});var ea=Ys;hr({target:"RegExp",proto:!0,forced:/./.exec!==ea},{exec:ea});var ra=V("species"),na=RegExp.prototype,ia=function(t,e,r,n){var i=V(t),o=!u((function(){var e={};return e[i]=function(){return 7},7!=""[t](e)})),s=o&&!u((function(){var e=!1,r=/a/;return"split"===t&&((r={}).constructor={},r.constructor[ra]=function(){return r},r.flags="",r[i]=/./[i]),r.exec=function(){return e=!0,null},r[i](""),!e}));if(!o||!s||r){var a=g(/./[i]),c=e(i,""[t],(function(t,e,r,n,i){var s=g(t),c=e.exec;return c===ea||c===na.exec?o&&!i?{done:!0,value:a(e,r,n)}:{done:!0,value:s(r,e,n)}:{done:!1}}));Ht(String.prototype,t,c[0]),Ht(na,i,c[1])}n&&Et(na[i],"sham",!0)},oa=Mn.charAt,sa=function(t,e,r){return e+(r?oa(t,e).length:1)},aa=o.TypeError,ca=function(t,e){var r=t.exec;if(T(r)){var n=rt(r,t,e);return null!==n&&tt(n),n}if("RegExp"===Gt(t))return rt(ea,t,e);throw aa("RegExp#exec called on incompatible receiver")};ia("match",(function(t,e,r){return[function(e){var r=y(this),n=null==e?void 0:ut(e,t);return n?rt(n,e,r):new RegExp(e)[t](pr(r))},function(t){var n=tt(this),i=pr(t),o=r(e,n,i);if(o.done)return o.value;if(!n.global)return ca(n,i);var s=n.unicode;n.lastIndex=0;for(var a,c=[],l=0;null!==(a=ca(n,i));){var u=pr(a[0]);c[l]=u,""===u&&(n.lastIndex=sa(i,pe(n.lastIndex),s)),l++}return 0===l?null:c}]}));var la=At.EXISTS,ua=mt.f,fa=Function.prototype,ha=g(fa.toString),da=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,pa=g(da.exec);H&&!la&&ua(fa,"name",{configurable:!0,get:function(){try{return pa(da,ha(this))[1]}catch(t){return""}}});var va=Function.prototype,ga=va.apply,ba=va.call,ya="object"==typeof Reflect&&Reflect.apply||(f?ba.bind(ga):function(){return ba.apply(ga,arguments)}),ma=Math.floor,xa=g("".charAt),Ea=g("".replace),wa=g("".slice),Oa=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,Sa=/\$([$&'`]|\d{1,2})/g,Aa=function(t,e,r,n,i,o){var s=r+t.length,a=n.length,c=Sa;return void 0!==i&&(i=x(i),c=Oa),Ea(o,c,(function(o,c){var l;switch(xa(c,0)){case"$":return"$";case"&":return t;case"`":return wa(e,0,r);case"'":return wa(e,s);case"<":l=i[wa(c,1,-1)];break;default:var u=+c;if(0===u)return o;if(u>a){var f=ma(u/10);return 0===f?o:f<=a?void 0===n[f-1]?xa(c,1):n[f-1]+xa(c,1):o}l=n[u-1]}return void 0===l?"":l}))},ka=V("replace"),Ta=Math.max,La=Math.min,Ra=g([].concat),_a=g([].push),ja=g("".indexOf),za=g("".slice),Ma="$0"==="a".replace(/./,"$0"),Ca=!!/./[ka]&&""===/./[ka]("a","$0");ia("replace",(function(t,e,r){var n=Ca?"$":"$0";return[function(t,r){var n=y(this),i=null==t?void 0:ut(t,ka);return i?rt(i,t,n,r):rt(e,pr(n),t,r)},function(t,i){var o=tt(this),s=pr(t);if("string"==typeof i&&-1===ja(i,n)&&-1===ja(i,"$<")){var a=r(e,o,s,i);if(a.done)return a.value}var c=T(i);c||(i=pr(i));var l=o.global;if(l){var u=o.unicode;o.lastIndex=0}for(var f=[];;){var h=ca(o,s);if(null===h)break;if(_a(f,h),!l)break;""===pr(h[0])&&(o.lastIndex=sa(s,pe(o.lastIndex),u))}for(var d,p="",v=0,g=0;g<f.length;g++){for(var b=pr((h=f[g])[0]),y=Ta(La(he(h.index),s.length),0),m=[],x=1;x<h.length;x++)_a(m,void 0===(d=h[x])?d:String(d));var E=h.groups;if(c){var w=Ra([b],m,y,s);void 0!==E&&_a(w,E);var O=pr(ya(i,void 0,w))}else O=Aa(b,s,y,m,E,i);y>=v&&(p+=za(s,v,y)+O,v=y+b.length)}return p+za(s,v)}]}),!!u((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}))||!Ma||Ca);var Na=function(t){return Array.prototype.reduce.call(t,(function(t,e){var r=e.name.match(/data-simplebar-(.+)/);if(r){var n=r[1].replace(/\W+(.)/g,(function(t,e){return e.toUpperCase()}));switch(e.value){case"true":t[n]=!0;break;case"false":t[n]=!1;break;case void 0:t[n]=!0;break;default:t[n]=e.value}}return t}),{})};function Wa(t){return t&&t.ownerDocument&&t.ownerDocument.defaultView?t.ownerDocument.defaultView:window}function Ia(t){return t&&t.ownerDocument?t.ownerDocument:document}var Pa=null,Ba=null;function Da(t){if(null===Pa){var e=Ia(t);if(void 0===e)return Pa=0;var r=e.body,n=e.createElement("div");n.classList.add("simplebar-hide-scrollbar"),r.appendChild(n);var i=n.getBoundingClientRect().right;r.removeChild(n),Pa=i}return Pa}Ie&&window.addEventListener("resize",(function(){Ba!==window.devicePixelRatio&&(Ba=window.devicePixelRatio,Pa=null)}));var Fa=function(){function t(e,r){var n=this;this.onScroll=function(){var t=Wa(n.el);n.scrollXTicking||(t.requestAnimationFrame(n.scrollX),n.scrollXTicking=!0),n.scrollYTicking||(t.requestAnimationFrame(n.scrollY),n.scrollYTicking=!0)},this.scrollX=function(){n.axis.x.isOverflowing&&(n.showScrollbar("x"),n.positionScrollbar("x")),n.scrollXTicking=!1},this.scrollY=function(){n.axis.y.isOverflowing&&(n.showScrollbar("y"),n.positionScrollbar("y")),n.scrollYTicking=!1},this.onMouseEnter=function(){n.showScrollbar("x"),n.showScrollbar("y")},this.onMouseMove=function(t){n.mouseX=t.clientX,n.mouseY=t.clientY,(n.axis.x.isOverflowing||n.axis.x.forceVisible)&&n.onMouseMoveForAxis("x"),(n.axis.y.isOverflowing||n.axis.y.forceVisible)&&n.onMouseMoveForAxis("y")},this.onMouseLeave=function(){n.onMouseMove.cancel(),(n.axis.x.isOverflowing||n.axis.x.forceVisible)&&n.onMouseLeaveForAxis("x"),(n.axis.y.isOverflowing||n.axis.y.forceVisible)&&n.onMouseLeaveForAxis("y"),n.mouseX=-1,n.mouseY=-1},this.onWindowResize=function(){n.scrollbarWidth=n.getScrollbarWidth(),n.hideNativeScrollbar()},this.hideScrollbars=function(){n.axis.x.track.rect=n.axis.x.track.el.getBoundingClientRect(),n.axis.y.track.rect=n.axis.y.track.el.getBoundingClientRect(),n.isWithinBounds(n.axis.y.track.rect)||(n.axis.y.scrollbar.el.classList.remove(n.classNames.visible),n.axis.y.isVisible=!1),n.isWithinBounds(n.axis.x.track.rect)||(n.axis.x.scrollbar.el.classList.remove(n.classNames.visible),n.axis.x.isVisible=!1)},this.onPointerEvent=function(t){var e,r;n.axis.x.track.rect=n.axis.x.track.el.getBoundingClientRect(),n.axis.y.track.rect=n.axis.y.track.el.getBoundingClientRect(),(n.axis.x.isOverflowing||n.axis.x.forceVisible)&&(e=n.isWithinBounds(n.axis.x.track.rect)),(n.axis.y.isOverflowing||n.axis.y.forceVisible)&&(r=n.isWithinBounds(n.axis.y.track.rect)),(e||r)&&(t.preventDefault(),t.stopPropagation(),"mousedown"===t.type&&(e&&(n.axis.x.scrollbar.rect=n.axis.x.scrollbar.el.getBoundingClientRect(),n.isWithinBounds(n.axis.x.scrollbar.rect)?n.onDragStart(t,"x"):n.onTrackClick(t,"x")),r&&(n.axis.y.scrollbar.rect=n.axis.y.scrollbar.el.getBoundingClientRect(),n.isWithinBounds(n.axis.y.scrollbar.rect)?n.onDragStart(t,"y"):n.onTrackClick(t,"y"))))},this.drag=function(e){var r=n.axis[n.draggedAxis].track,i=r.rect[n.axis[n.draggedAxis].sizeAttr],o=n.axis[n.draggedAxis].scrollbar,s=n.contentWrapperEl[n.axis[n.draggedAxis].scrollSizeAttr],a=parseInt(n.elStyles[n.axis[n.draggedAxis].sizeAttr],10);e.preventDefault(),e.stopPropagation();var c=(("y"===n.draggedAxis?e.pageY:e.pageX)-r.rect[n.axis[n.draggedAxis].offsetAttr]-n.axis[n.draggedAxis].dragOffset)/(i-o.size)*(s-a);"x"===n.draggedAxis&&(c=n.isRtl&&t.getRtlHelpers().isRtlScrollbarInverted?c-(i+o.size):c,c=n.isRtl&&t.getRtlHelpers().isRtlScrollingInverted?-c:c),n.contentWrapperEl[n.axis[n.draggedAxis].scrollOffsetAttr]=c},this.onEndDrag=function(t){var e=Ia(n.el),r=Wa(n.el);t.preventDefault(),t.stopPropagation(),n.el.classList.remove(n.classNames.dragging),e.removeEventListener("mousemove",n.drag,!0),e.removeEventListener("mouseup",n.onEndDrag,!0),n.removePreventClickId=r.setTimeout((function(){e.removeEventListener("click",n.preventClick,!0),e.removeEventListener("dblclick",n.preventClick,!0),n.removePreventClickId=null}))},this.preventClick=function(t){t.preventDefault(),t.stopPropagation()},this.el=e,this.minScrollbarWidth=20,this.options=Object.assign({},t.defaultOptions,r),this.classNames=Object.assign({},t.defaultOptions.classNames,this.options.classNames),this.axis={x:{scrollOffsetAttr:"scrollLeft",sizeAttr:"width",scrollSizeAttr:"scrollWidth",offsetSizeAttr:"offsetWidth",offsetAttr:"left",overflowAttr:"overflowX",dragOffset:0,isOverflowing:!0,isVisible:!1,forceVisible:!1,track:{},scrollbar:{}},y:{scrollOffsetAttr:"scrollTop",sizeAttr:"height",scrollSizeAttr:"scrollHeight",offsetSizeAttr:"offsetHeight",offsetAttr:"top",overflowAttr:"overflowY",dragOffset:0,isOverflowing:!0,isVisible:!1,forceVisible:!1,track:{},scrollbar:{}}},this.removePreventClickId=null,t.instances.has(this.el)||(this.recalculate=Qi(this.recalculate.bind(this),64),this.onMouseMove=Qi(this.onMouseMove.bind(this),64),this.hideScrollbars=po(this.hideScrollbars.bind(this),this.options.timeout),this.onWindowResize=po(this.onWindowResize.bind(this),64,{leading:!0}),t.getRtlHelpers=Fo(t.getRtlHelpers),this.init())}t.getRtlHelpers=function(){var e=document.createElement("div");e.innerHTML='<div class="hs-dummy-scrollbar-size"><div style="height: 200%; width: 200%; margin: 10px 0;"></div></div>';var r=e.firstElementChild;document.body.appendChild(r);var n=r.firstElementChild;r.scrollLeft=0;var i=t.getOffset(r),o=t.getOffset(n);r.scrollLeft=999;var s=t.getOffset(n);return{isRtlScrollingInverted:i.left!==o.left&&o.left-s.left!=0,isRtlScrollbarInverted:i.left!==o.left}},t.getOffset=function(t){var e=t.getBoundingClientRect(),r=Ia(t),n=Wa(t);return{top:e.top+(n.pageYOffset||r.documentElement.scrollTop),left:e.left+(n.pageXOffset||r.documentElement.scrollLeft)}};var e=t.prototype;return e.init=function(){t.instances.set(this.el,this),Ie&&(this.initDOM(),this.setAccessibilityAttributes(),this.scrollbarWidth=this.getScrollbarWidth(),this.recalculate(),this.initListeners())},e.initDOM=function(){var t=this;if(Array.prototype.filter.call(this.el.children,(function(e){return e.classList.contains(t.classNames.wrapper)})).length)this.wrapperEl=this.el.querySelector("."+this.classNames.wrapper),this.contentWrapperEl=this.options.scrollableNode||this.el.querySelector("."+this.classNames.contentWrapper),this.contentEl=this.options.contentNode||this.el.querySelector("."+this.classNames.contentEl),this.offsetEl=this.el.querySelector("."+this.classNames.offset),this.maskEl=this.el.querySelector("."+this.classNames.mask),this.placeholderEl=this.findChild(this.wrapperEl,"."+this.classNames.placeholder),this.heightAutoObserverWrapperEl=this.el.querySelector("."+this.classNames.heightAutoObserverWrapperEl),this.heightAutoObserverEl=this.el.querySelector("."+this.classNames.heightAutoObserverEl),this.axis.x.track.el=this.findChild(this.el,"."+this.classNames.track+"."+this.classNames.horizontal),this.axis.y.track.el=this.findChild(this.el,"."+this.classNames.track+"."+this.classNames.vertical);else{for(this.wrapperEl=document.createElement("div"),this.contentWrapperEl=document.createElement("div"),this.offsetEl=document.createElement("div"),this.maskEl=document.createElement("div"),this.contentEl=document.createElement("div"),this.placeholderEl=document.createElement("div"),this.heightAutoObserverWrapperEl=document.createElement("div"),this.heightAutoObserverEl=document.createElement("div"),this.wrapperEl.classList.add(this.classNames.wrapper),this.contentWrapperEl.classList.add(this.classNames.contentWrapper),this.offsetEl.classList.add(this.classNames.offset),this.maskEl.classList.add(this.classNames.mask),this.contentEl.classList.add(this.classNames.contentEl),this.placeholderEl.classList.add(this.classNames.placeholder),this.heightAutoObserverWrapperEl.classList.add(this.classNames.heightAutoObserverWrapperEl),this.heightAutoObserverEl.classList.add(this.classNames.heightAutoObserverEl);this.el.firstChild;)this.contentEl.appendChild(this.el.firstChild);this.contentWrapperEl.appendChild(this.contentEl),this.offsetEl.appendChild(this.contentWrapperEl),this.maskEl.appendChild(this.offsetEl),this.heightAutoObserverWrapperEl.appendChild(this.heightAutoObserverEl),this.wrapperEl.appendChild(this.heightAutoObserverWrapperEl),this.wrapperEl.appendChild(this.maskEl),this.wrapperEl.appendChild(this.placeholderEl),this.el.appendChild(this.wrapperEl)}if(!this.axis.x.track.el||!this.axis.y.track.el){var e=document.createElement("div"),r=document.createElement("div");e.classList.add(this.classNames.track),r.classList.add(this.classNames.scrollbar),e.appendChild(r),this.axis.x.track.el=e.cloneNode(!0),this.axis.x.track.el.classList.add(this.classNames.horizontal),this.axis.y.track.el=e.cloneNode(!0),this.axis.y.track.el.classList.add(this.classNames.vertical),this.el.appendChild(this.axis.x.track.el),this.el.appendChild(this.axis.y.track.el)}this.axis.x.scrollbar.el=this.axis.x.track.el.querySelector("."+this.classNames.scrollbar),this.axis.y.scrollbar.el=this.axis.y.track.el.querySelector("."+this.classNames.scrollbar),this.options.autoHide||(this.axis.x.scrollbar.el.classList.add(this.classNames.visible),this.axis.y.scrollbar.el.classList.add(this.classNames.visible)),this.el.setAttribute("data-simplebar","init")},e.setAccessibilityAttributes=function(){var t=this.options.ariaLabel||"scrollable content";this.contentWrapperEl.setAttribute("tabindex","0"),this.contentWrapperEl.setAttribute("role","region"),this.contentWrapperEl.setAttribute("aria-label",t)},e.initListeners=function(){var t=this,e=Wa(this.el);this.options.autoHide&&this.el.addEventListener("mouseenter",this.onMouseEnter),["mousedown","click","dblclick"].forEach((function(e){t.el.addEventListener(e,t.onPointerEvent,!0)})),["touchstart","touchend","touchmove"].forEach((function(e){t.el.addEventListener(e,t.onPointerEvent,{capture:!0,passive:!0})})),this.el.addEventListener("mousemove",this.onMouseMove),this.el.addEventListener("mouseleave",this.onMouseLeave),this.contentWrapperEl.addEventListener("scroll",this.onScroll),e.addEventListener("resize",this.onWindowResize);var r=!1,n=e.ResizeObserver||ks;this.resizeObserver=new n((function(){r&&t.recalculate()})),this.resizeObserver.observe(this.el),this.resizeObserver.observe(this.contentEl),e.requestAnimationFrame((function(){r=!0})),this.mutationObserver=new e.MutationObserver(this.recalculate),this.mutationObserver.observe(this.contentEl,{childList:!0,subtree:!0,characterData:!0})},e.recalculate=function(){var t=Wa(this.el);this.elStyles=t.getComputedStyle(this.el),this.isRtl="rtl"===this.elStyles.direction;var e=this.heightAutoObserverEl.offsetHeight<=1,r=this.heightAutoObserverEl.offsetWidth<=1,n=this.contentEl.offsetWidth,i=this.contentWrapperEl.offsetWidth,o=this.elStyles.overflowX,s=this.elStyles.overflowY;this.contentEl.style.padding=this.elStyles.paddingTop+" "+this.elStyles.paddingRight+" "+this.elStyles.paddingBottom+" "+this.elStyles.paddingLeft,this.wrapperEl.style.margin="-"+this.elStyles.paddingTop+" -"+this.elStyles.paddingRight+" -"+this.elStyles.paddingBottom+" -"+this.elStyles.paddingLeft;var a=this.contentEl.scrollHeight,c=this.contentEl.scrollWidth;this.contentWrapperEl.style.height=e?"auto":"100%",this.placeholderEl.style.width=r?n+"px":"auto",this.placeholderEl.style.height=a+"px";var l=this.contentWrapperEl.offsetHeight;this.axis.x.isOverflowing=c>n,this.axis.y.isOverflowing=a>l,this.axis.x.isOverflowing="hidden"!==o&&this.axis.x.isOverflowing,this.axis.y.isOverflowing="hidden"!==s&&this.axis.y.isOverflowing,this.axis.x.forceVisible="x"===this.options.forceVisible||!0===this.options.forceVisible,this.axis.y.forceVisible="y"===this.options.forceVisible||!0===this.options.forceVisible,this.hideNativeScrollbar();var u=this.axis.x.isOverflowing?this.scrollbarWidth:0,f=this.axis.y.isOverflowing?this.scrollbarWidth:0;this.axis.x.isOverflowing=this.axis.x.isOverflowing&&c>i-f,this.axis.y.isOverflowing=this.axis.y.isOverflowing&&a>l-u,this.axis.x.scrollbar.size=this.getScrollbarSize("x"),this.axis.y.scrollbar.size=this.getScrollbarSize("y"),this.axis.x.scrollbar.el.style.width=this.axis.x.scrollbar.size+"px",this.axis.y.scrollbar.el.style.height=this.axis.y.scrollbar.size+"px",this.positionScrollbar("x"),this.positionScrollbar("y"),this.toggleTrackVisibility("x"),this.toggleTrackVisibility("y")},e.getScrollbarSize=function(t){if(void 0===t&&(t="y"),!this.axis[t].isOverflowing)return 0;var e,r=this.contentEl[this.axis[t].scrollSizeAttr],n=this.axis[t].track.el[this.axis[t].offsetSizeAttr],i=n/r;return e=Math.max(~~(i*n),this.options.scrollbarMinSize),this.options.scrollbarMaxSize&&(e=Math.min(e,this.options.scrollbarMaxSize)),e},e.positionScrollbar=function(e){if(void 0===e&&(e="y"),this.axis[e].isOverflowing){var r=this.contentWrapperEl[this.axis[e].scrollSizeAttr],n=this.axis[e].track.el[this.axis[e].offsetSizeAttr],i=parseInt(this.elStyles[this.axis[e].sizeAttr],10),o=this.axis[e].scrollbar,s=this.contentWrapperEl[this.axis[e].scrollOffsetAttr],a=(s="x"===e&&this.isRtl&&t.getRtlHelpers().isRtlScrollingInverted?-s:s)/(r-i),c=~~((n-o.size)*a);c="x"===e&&this.isRtl&&t.getRtlHelpers().isRtlScrollbarInverted?c+(n-o.size):c,o.el.style.transform="x"===e?"translate3d("+c+"px, 0, 0)":"translate3d(0, "+c+"px, 0)"}},e.toggleTrackVisibility=function(t){void 0===t&&(t="y");var e=this.axis[t].track.el,r=this.axis[t].scrollbar.el;this.axis[t].isOverflowing||this.axis[t].forceVisible?(e.style.visibility="visible",this.contentWrapperEl.style[this.axis[t].overflowAttr]="scroll"):(e.style.visibility="hidden",this.contentWrapperEl.style[this.axis[t].overflowAttr]="hidden"),this.axis[t].isOverflowing?r.style.display="block":r.style.display="none"},e.hideNativeScrollbar=function(){this.offsetEl.style[this.isRtl?"left":"right"]=this.axis.y.isOverflowing||this.axis.y.forceVisible?"-"+this.scrollbarWidth+"px":0,this.offsetEl.style.bottom=this.axis.x.isOverflowing||this.axis.x.forceVisible?"-"+this.scrollbarWidth+"px":0},e.onMouseMoveForAxis=function(t){void 0===t&&(t="y"),this.axis[t].track.rect=this.axis[t].track.el.getBoundingClientRect(),this.axis[t].scrollbar.rect=this.axis[t].scrollbar.el.getBoundingClientRect(),this.isWithinBounds(this.axis[t].scrollbar.rect)?this.axis[t].scrollbar.el.classList.add(this.classNames.hover):this.axis[t].scrollbar.el.classList.remove(this.classNames.hover),this.isWithinBounds(this.axis[t].track.rect)?(this.showScrollbar(t),this.axis[t].track.el.classList.add(this.classNames.hover)):this.axis[t].track.el.classList.remove(this.classNames.hover)},e.onMouseLeaveForAxis=function(t){void 0===t&&(t="y"),this.axis[t].track.el.classList.remove(this.classNames.hover),this.axis[t].scrollbar.el.classList.remove(this.classNames.hover)},e.showScrollbar=function(t){void 0===t&&(t="y");var e=this.axis[t].scrollbar.el;this.axis[t].isVisible||(e.classList.add(this.classNames.visible),this.axis[t].isVisible=!0),this.options.autoHide&&this.hideScrollbars()},e.onDragStart=function(t,e){void 0===e&&(e="y");var r=Ia(this.el),n=Wa(this.el),i=this.axis[e].scrollbar,o="y"===e?t.pageY:t.pageX;this.axis[e].dragOffset=o-i.rect[this.axis[e].offsetAttr],this.draggedAxis=e,this.el.classList.add(this.classNames.dragging),r.addEventListener("mousemove",this.drag,!0),r.addEventListener("mouseup",this.onEndDrag,!0),null===this.removePreventClickId?(r.addEventListener("click",this.preventClick,!0),r.addEventListener("dblclick",this.preventClick,!0)):(n.clearTimeout(this.removePreventClickId),this.removePreventClickId=null)},e.onTrackClick=function(t,e){var r=this;if(void 0===e&&(e="y"),this.options.clickOnTrack){var n=Wa(this.el);this.axis[e].scrollbar.rect=this.axis[e].scrollbar.el.getBoundingClientRect();var i=this.axis[e].scrollbar.rect[this.axis[e].offsetAttr],o=parseInt(this.elStyles[this.axis[e].sizeAttr],10),s=this.contentWrapperEl[this.axis[e].scrollOffsetAttr],a=("y"===e?this.mouseY-i:this.mouseX-i)<0?-1:1,c=-1===a?s-o:s+o;!function t(){var i,o;-1===a?s>c&&(s-=r.options.clickOnTrackSpeed,r.contentWrapperEl.scrollTo(((i={})[r.axis[e].offsetAttr]=s,i)),n.requestAnimationFrame(t)):s<c&&(s+=r.options.clickOnTrackSpeed,r.contentWrapperEl.scrollTo(((o={})[r.axis[e].offsetAttr]=s,o)),n.requestAnimationFrame(t))}()}},e.getContentElement=function(){return this.contentEl},e.getScrollElement=function(){return this.contentWrapperEl},e.getScrollbarWidth=function(){try{return"none"===getComputedStyle(this.contentWrapperEl,"::-webkit-scrollbar").display||"scrollbarWidth"in document.documentElement.style||"-ms-overflow-style"in document.documentElement.style?0:Da(this.el)}catch(t){return Da(this.el)}},e.removeListeners=function(){var t=this,e=Wa(this.el);this.options.autoHide&&this.el.removeEventListener("mouseenter",this.onMouseEnter),["mousedown","click","dblclick"].forEach((function(e){t.el.removeEventListener(e,t.onPointerEvent,!0)})),["touchstart","touchend","touchmove"].forEach((function(e){t.el.removeEventListener(e,t.onPointerEvent,{capture:!0,passive:!0})})),this.el.removeEventListener("mousemove",this.onMouseMove),this.el.removeEventListener("mouseleave",this.onMouseLeave),this.contentWrapperEl&&this.contentWrapperEl.removeEventListener("scroll",this.onScroll),e.removeEventListener("resize",this.onWindowResize),this.mutationObserver&&this.mutationObserver.disconnect(),this.resizeObserver&&this.resizeObserver.disconnect(),this.recalculate.cancel(),this.onMouseMove.cancel(),this.hideScrollbars.cancel(),this.onWindowResize.cancel()},e.unMount=function(){this.removeListeners(),t.instances.delete(this.el)},e.isWithinBounds=function(t){return this.mouseX>=t.left&&this.mouseX<=t.left+t.width&&this.mouseY>=t.top&&this.mouseY<=t.top+t.height},e.findChild=function(t,e){var r=t.matches||t.webkitMatchesSelector||t.mozMatchesSelector||t.msMatchesSelector;return Array.prototype.filter.call(t.children,(function(t){return r.call(t,e)}))[0]},t}();return Fa.defaultOptions={autoHide:!0,forceVisible:!1,clickOnTrack:!0,clickOnTrackSpeed:40,classNames:{contentEl:"simplebar-content",contentWrapper:"simplebar-content-wrapper",offset:"simplebar-offset",mask:"simplebar-mask",wrapper:"simplebar-wrapper",placeholder:"simplebar-placeholder",scrollbar:"simplebar-scrollbar",track:"simplebar-track",heightAutoObserverWrapperEl:"simplebar-height-auto-observer-wrapper",heightAutoObserverEl:"simplebar-height-auto-observer",visible:"simplebar-visible",horizontal:"simplebar-horizontal",vertical:"simplebar-vertical",hover:"simplebar-hover",dragging:"simplebar-dragging"},scrollbarMinSize:25,scrollbarMaxSize:0,timeout:1e3},Fa.instances=new WeakMap,Fa.initDOMLoadedElements=function(){document.removeEventListener("DOMContentLoaded",this.initDOMLoadedElements),window.removeEventListener("load",this.initDOMLoadedElements),Array.prototype.forEach.call(document.querySelectorAll("[data-simplebar]"),(function(t){"init"===t.getAttribute("data-simplebar")||Fa.instances.has(t)||new Fa(t,Na(t.attributes))}))},Fa.removeObserver=function(){this.globalObserver.disconnect()},Fa.initHtmlApi=function(){this.initDOMLoadedElements=this.initDOMLoadedElements.bind(this),"undefined"!=typeof MutationObserver&&(this.globalObserver=new MutationObserver(Fa.handleMutations),this.globalObserver.observe(document,{childList:!0,subtree:!0})),"complete"===document.readyState||"loading"!==document.readyState&&!document.documentElement.doScroll?window.setTimeout(this.initDOMLoadedElements):(document.addEventListener("DOMContentLoaded",this.initDOMLoadedElements),window.addEventListener("load",this.initDOMLoadedElements))},Fa.handleMutations=function(t){t.forEach((function(t){Array.prototype.forEach.call(t.addedNodes,(function(t){1===t.nodeType&&(t.hasAttribute("data-simplebar")?!Fa.instances.has(t)&&document.documentElement.contains(t)&&new Fa(t,Na(t.attributes)):Array.prototype.forEach.call(t.querySelectorAll("[data-simplebar]"),(function(t){"init"!==t.getAttribute("data-simplebar")&&!Fa.instances.has(t)&&document.documentElement.contains(t)&&new Fa(t,Na(t.attributes))})))})),Array.prototype.forEach.call(t.removedNodes,(function(t){1===t.nodeType&&("init"===t.getAttribute("data-simplebar")?Fa.instances.has(t)&&!document.documentElement.contains(t)&&Fa.instances.get(t).unMount():Array.prototype.forEach.call(t.querySelectorAll('[data-simplebar="init"]'),(function(t){Fa.instances.has(t)&&!document.documentElement.contains(t)&&Fa.instances.get(t).unMount()})))}))}))},Fa.getOptions=Na,Ie&&Fa.initHtmlApi(),Fa}));

/**
  
 *  Author:  KT
 * Module/App: Apex Area Charts
 */


//
// Basic Area Chart
//

var colors = ["#fa6767"];
var dataColors = $("#basic-area").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}
var options = {
    chart: {
        height: 380,
        type: 'area',
        zoom: {
            enabled: false
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        width: 3,
        curve: 'straight'
    },
    colors: colors,
    series: [{
        name: "STOCK ABC",
        data: series.monthDataSeries1.prices
    }],
    title: {
        text: 'Fundamental Analysis of Stocks',
        align: 'left'
    },
    subtitle: {
        text: 'Price Movements',
        align: 'left'
    },
    labels: series.monthDataSeries1.dates,
    xaxis: {
        type: 'datetime',
    },
    yaxis: {
        opposite: true
    },
    legend: {
        horizontalAlign: 'left'
    },
    grid: {
        borderColor: '#f1f3fa'
    },
    responsive: [{
        breakpoint: 600,
        options: {
            chart: {
                toolbar: {
                    show: false
                }
            },
            legend: {
                show: false
            },
        }
    }]
}

var chart = new ApexCharts(
    document.querySelector("#basic-area"),
    options
);

chart.render();


//
// Splite Area
//
var colors = ["#727cf5", "#6c757d"];
var dataColors = $("#spline-area").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}
var options = {
    chart: {
        height: 380,
        type: 'area',
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        width: 3,
        curve: 'smooth'
    },
    colors: colors,
    series: [{
        name: 'Series 1',
        data: [31, 40, 28, 51, 42, 109, 100]
    }, {
        name: 'Series 2',
        data: [11, 32, 45, 32, 34, 52, 41]
    }],
    legend: {
        offsetY: 5,
    },
    xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    },
    tooltip: {
        fixed: {
            enabled: false,
            position: 'topRight'
        }
    },
    grid: {
        row: {
            colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.2
        },
        borderColor: '#f1f3fa',
        padding: {
            bottom: 5
        }
    },
    grid: {
        borderColor: '#f1f3fa',

    }
}

var chart = new ApexCharts(
    document.querySelector("#spline-area"),
    options
);

chart.render();

//
// AREA CHART - DATETIME X-AXIS
//

$(document).ready(function () {
    var colors = ["#6c757d"];
    var dataColors = $("#area-chart-datetime").data('colors');
    if (dataColors) {
        colors = dataColors.split(",");
    }
    var options = {
        annotations: {
            yaxis: [{
                y: 30,
                borderColor: '#999',
                label: {
                    show: true,
                    text: 'Support',
                    style: {
                        color: "#fff",
                        background: '#00E396'
                    }
                }
            }],
            xaxis: [{
                x: new Date('14 Nov 2012').getTime(),
                borderColor: '#999',
                yAxisIndex: 0,
                label: {
                    show: true,
                    text: 'Rally',
                    style: {
                        color: "#fff",
                        background: '#775DD0'
                    }
                }
            }]
        },
        chart: {
            type: 'area',
            height: 350,
        },
        stroke: {
            width: 3,
            curve: 'smooth'
        },
        colors: colors,
        dataLabels: {
            enabled: false
        },
        series: [{
            data: [
                [1327359600000, 30.95],
                [1327446000000, 31.34],
                [1327532400000, 31.18],
                [1327618800000, 31.05],
                [1327878000000, 31.00],
                [1327964400000, 30.95],
                [1328050800000, 31.24],
                [1328137200000, 31.29],
                [1328223600000, 31.85],
                [1328482800000, 31.86],
                [1328569200000, 32.28],
                [1328655600000, 32.10],
                [1328742000000, 32.65],
                [1328828400000, 32.21],
                [1329087600000, 32.35],
                [1329174000000, 32.44],
                [1329260400000, 32.46],
                [1329346800000, 32.86],
                [1329433200000, 32.75],
                [1329778800000, 32.54],
                [1329865200000, 32.33],
                [1329951600000, 32.97],
                [1330038000000, 33.41],
                [1330297200000, 33.27],
                [1330383600000, 33.27],
                [1330470000000, 32.89],
                [1330556400000, 33.10],
                [1330642800000, 33.73],
                [1330902000000, 33.22],
                [1330988400000, 31.99],
                [1331074800000, 32.41],
                [1331161200000, 33.05],
                [1331247600000, 33.64],
                [1331506800000, 33.56],
                [1331593200000, 34.22],
                [1331679600000, 33.77],
                [1331766000000, 34.17],
                [1331852400000, 33.82],
                [1332111600000, 34.51],
                [1332198000000, 33.16],
                [1332284400000, 33.56],
                [1332370800000, 33.71],
                [1332457200000, 33.81],
                [1332712800000, 34.40],
                [1332799200000, 34.63],
                [1332885600000, 34.46],
                [1332972000000, 34.48],
                [1333058400000, 34.31],
                [1333317600000, 34.70],
                [1333404000000, 34.31],
                [1333490400000, 33.46],
                [1333576800000, 33.59],
                [1333922400000, 33.22],
                [1334008800000, 32.61],
                [1334095200000, 33.01],
                [1334181600000, 33.55],
                [1334268000000, 33.18],
                [1334527200000, 32.84],
                [1334613600000, 33.84],
                [1334700000000, 33.39],
                [1334786400000, 32.91],
                [1334872800000, 33.06],
                [1335132000000, 32.62],
                [1335218400000, 32.40],
                [1335304800000, 33.13],
                [1335391200000, 33.26],
                [1335477600000, 33.58],
                [1335736800000, 33.55],
                [1335823200000, 33.77],
                [1335909600000, 33.76],
                [1335996000000, 33.32],
                [1336082400000, 32.61],
                [1336341600000, 32.52],
                [1336428000000, 32.67],
                [1336514400000, 32.52],
                [1336600800000, 31.92],
                [1336687200000, 32.20],
                [1336946400000, 32.23],
                [1337032800000, 32.33],
                [1337119200000, 32.36],
                [1337205600000, 32.01],
                [1337292000000, 31.31],
                [1337551200000, 32.01],
                [1337637600000, 32.01],
                [1337724000000, 32.18],
                [1337810400000, 31.54],
                [1337896800000, 31.60],
                [1338242400000, 32.05],
                [1338328800000, 31.29],
                [1338415200000, 31.05],
                [1338501600000, 29.82],
                [1338760800000, 30.31],
                [1338847200000, 30.70],
                [1338933600000, 31.69],
                [1339020000000, 31.32],
                [1339106400000, 31.65],
                [1339365600000, 31.13],
                [1339452000000, 31.77],
                [1339538400000, 31.79],
                [1339624800000, 31.67],
                [1339711200000, 32.39],
                [1339970400000, 32.63],
                [1340056800000, 32.89],
                [1340143200000, 31.99],
                [1340229600000, 31.23],
                [1340316000000, 31.57],
                [1340575200000, 30.84],
                [1340661600000, 31.07],
                [1340748000000, 31.41],
                [1340834400000, 31.17],
                [1340920800000, 32.37],
                [1341180000000, 32.19],
                [1341266400000, 32.51],
                [1341439200000, 32.53],
                [1341525600000, 31.37],
                [1341784800000, 30.43],
                [1341871200000, 30.44],
                [1341957600000, 30.20],
                [1342044000000, 30.14],
                [1342130400000, 30.65],
                [1342389600000, 30.40],
                [1342476000000, 30.65],
                [1342562400000, 31.43],
                [1342648800000, 31.89],
                [1342735200000, 31.38],
                [1342994400000, 30.64],
                [1343080800000, 30.02],
                [1343167200000, 30.33],
                [1343253600000, 30.95],
                [1343340000000, 31.89],
                [1343599200000, 31.01],
                [1343685600000, 30.88],
                [1343772000000, 30.69],
                [1343858400000, 30.58],
                [1343944800000, 32.02],
                [1344204000000, 32.14],
                [1344290400000, 32.37],
                [1344376800000, 32.51],
                [1344463200000, 32.65],
                [1344549600000, 32.64],
                [1344808800000, 32.27],
                [1344895200000, 32.10],
                [1344981600000, 32.91],
                [1345068000000, 33.65],
                [1345154400000, 33.80],
                [1345413600000, 33.92],
                [1345500000000, 33.75],
                [1345586400000, 33.84],
                [1345672800000, 33.50],
                [1345759200000, 32.26],
                [1346018400000, 32.32],
                [1346104800000, 32.06],
                [1346191200000, 31.96],
                [1346277600000, 31.46],
                [1346364000000, 31.27],
                [1346709600000, 31.43],
                [1346796000000, 32.26],
                [1346882400000, 32.79],
                [1346968800000, 32.46],
                [1347228000000, 32.13],
                [1347314400000, 32.43],
                [1347400800000, 32.42],
                [1347487200000, 32.81],
                [1347573600000, 33.34],
                [1347832800000, 33.41],
                [1347919200000, 32.57],
                [1348005600000, 33.12],
                [1348092000000, 34.53],
                [1348178400000, 33.83],
                [1348437600000, 33.41],
                [1348524000000, 32.90],
                [1348610400000, 32.53],
                [1348696800000, 32.80],
                [1348783200000, 32.44],
                [1349042400000, 32.62],
                [1349128800000, 32.57],
                [1349215200000, 32.60],
                [1349301600000, 32.68],
                [1349388000000, 32.47],
                [1349647200000, 32.23],
                [1349733600000, 31.68],
                [1349820000000, 31.51],
                [1349906400000, 31.78],
                [1349992800000, 31.94],
                [1350252000000, 32.33],
                [1350338400000, 33.24],
                [1350424800000, 33.44],
                [1350511200000, 33.48],
                [1350597600000, 33.24],
                [1350856800000, 33.49],
                [1350943200000, 33.31],
                [1351029600000, 33.36],
                [1351116000000, 33.40],
                [1351202400000, 34.01],
                [1351638000000, 34.02],
                [1351724400000, 34.36],
                [1351810800000, 34.39],
                [1352070000000, 34.24],
                [1352156400000, 34.39],
                [1352242800000, 33.47],
                [1352329200000, 32.98],
                [1352415600000, 32.90],
                [1352674800000, 32.70],
                [1352761200000, 32.54],
                [1352847600000, 32.23],
                [1352934000000, 32.64],
                [1353020400000, 32.65],
                [1353279600000, 32.92],
                [1353366000000, 32.64],
                [1353452400000, 32.84],
                [1353625200000, 33.40],
                [1353884400000, 33.30],
                [1353970800000, 33.18],
                [1354057200000, 33.88],
                [1354143600000, 34.09],
                [1354230000000, 34.61],
                [1354489200000, 34.70],
                [1354575600000, 35.30],
                [1354662000000, 35.40],
                [1354748400000, 35.14],
                [1354834800000, 35.48],
                [1355094000000, 35.75],
                [1355180400000, 35.54],
                [1355266800000, 35.96],
                [1355353200000, 35.53],
                [1355439600000, 37.56],
                [1355698800000, 37.42],
                [1355785200000, 37.49],
                [1355871600000, 38.09],
                [1355958000000, 37.87],
                [1356044400000, 37.71],
                [1356303600000, 37.53],
                [1356476400000, 37.55],
                [1356562800000, 37.30],
                [1356649200000, 36.90],
                [1356908400000, 37.68],
                [1357081200000, 38.34],
                [1357167600000, 37.75],
                [1357254000000, 38.13],
                [1357513200000, 37.94],
                [1357599600000, 38.14],
                [1357686000000, 38.66],
                [1357772400000, 38.62],
                [1357858800000, 38.09],
                [1358118000000, 38.16],
                [1358204400000, 38.15],
                [1358290800000, 37.88],
                [1358377200000, 37.73],
                [1358463600000, 37.98],
                [1358809200000, 37.95],
                [1358895600000, 38.25],
                [1358982000000, 38.10],
                [1359068400000, 38.32],
                [1359327600000, 38.24],
                [1359414000000, 38.52],
                [1359500400000, 37.94],
                [1359586800000, 37.83],
                [1359673200000, 38.34],
                [1359932400000, 38.10],
                [1360018800000, 38.51],
                [1360105200000, 38.40],
                [1360191600000, 38.07],
                [1360278000000, 39.12],
                [1360537200000, 38.64],
                [1360623600000, 38.89],
                [1360710000000, 38.81],
                [1360796400000, 38.61],
                [1360882800000, 38.63],
                [1361228400000, 38.99],
                [1361314800000, 38.77],
                [1361401200000, 38.34],
                [1361487600000, 38.55],
                [1361746800000, 38.11],
                [1361833200000, 38.59],
                [1361919600000, 39.60],
            ]
        },

        ],
        markers: {
            size: 0,
            style: 'hollow',
        },
        xaxis: {
            type: 'datetime',
            min: new Date('01 Mar 2012').getTime(),
            tickAmount: 6,
        },
        tooltip: {
            x: {
                format: 'dd MMM yyyy'
            }
        },
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.7,
                opacityTo: 0.9,
                stops: [0, 100]
            }
        },

    }

    var chart = new ApexCharts(
        document.querySelector("#area-chart-datetime"),
        options
    );

    chart.render();

    var resetCssClasses = function (activeEl) {
        var els = document.querySelectorAll("button");
        Array.prototype.forEach.call(els, function (el) {
            el.classList.remove('active');
        });

        activeEl.target.classList.add('active')
    }

    document.querySelector("#one_month").addEventListener('click', function (e) {
        resetCssClasses(e)
        chart.updateOptions({
            xaxis: {
                min: new Date('28 Jan 2013').getTime(),
                max: new Date('27 Feb 2013').getTime(),
            }
        })
    })

    document.querySelector("#six_months").addEventListener('click', function (e) {
        resetCssClasses(e)
        chart.updateOptions({
            xaxis: {
                min: new Date('27 Sep 2012').getTime(),
                max: new Date('27 Feb 2013').getTime(),
            }
        })
    })

    document.querySelector("#one_year").addEventListener('click', function (e) {
        resetCssClasses(e)
        chart.updateOptions({
            xaxis: {
                min: new Date('27 Feb 2012').getTime(),
                max: new Date('27 Feb 2013').getTime(),
            }
        })
    })

    document.querySelector("#ytd").addEventListener('click', function (e) {
        resetCssClasses(e)
        chart.updateOptions({
            xaxis: {
                min: new Date('01 Jan 2013').getTime(),
                max: new Date('27 Feb 2013').getTime(),
            }
        })
    })

    document.querySelector("#all").addEventListener('click', function (e) {
        resetCssClasses(e)
        chart.updateOptions({
            xaxis: {
                min: undefined,
                max: undefined,
            }
        })
    })

    document.querySelector("#ytd").addEventListener('click', function () {

    })
})

//
// AREA WITH NEGATIVE VALUES
//
var colors = ["#0acf97", "#ffbc00"];
var dataColors = $("#area-chart-negative").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}
var options = {
    chart: {
        height: 380,
        type: 'area',
        // zoom: {
        //     enabled: false
        // }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        width: 2,
        curve: 'straight'
    },
    colors: colors,
    series: [{
        name: 'North',
        data: [{
            x: 1996,
            y: 322
        },
        {
            x: 1997,
            y: 324
        },
        {
            x: 1998,
            y: 329
        },
        {
            x: 1999,
            y: 342
        },
        {
            x: 2000,
            y: 348
        },
        {
            x: 2001,
            y: 334
        },
        {
            x: 2002,
            y: 325
        },
        {
            x: 2003,
            y: 316
        },
        {
            x: 2004,
            y: 318
        },
        {
            x: 2005,
            y: 330
        },
        {
            x: 2006,
            y: 355
        },
        {
            x: 2007,
            y: 366
        },
        {
            x: 2008,
            y: 337
        },
        {
            x: 2009,
            y: 352
        },
        {
            x: 2010,
            y: 377
        },
        {
            x: 2011,
            y: 383
        },
        {
            x: 2012,
            y: 344
        },
        {
            x: 2013,
            y: 366
        },
        {
            x: 2014,
            y: 389
        },
        {
            x: 2015,
            y: 334
        }
        ]
    }, {
        name: 'South',
        data: [

            {
                x: 1996,
                y: 162
            },
            {
                x: 1997,
                y: 90
            },
            {
                x: 1998,
                y: 50
            },
            {
                x: 1999,
                y: 77
            },
            {
                x: 2000,
                y: 35
            },
            {
                x: 2001,
                y: -45
            },
            {
                x: 2002,
                y: -88
            },
            {
                x: 2003,
                y: -120
            },
            {
                x: 2004,
                y: -156
            },
            {
                x: 2005,
                y: -123
            },
            {
                x: 2006,
                y: -88
            },
            {
                x: 2007,
                y: -66
            },
            {
                x: 2008,
                y: -45
            },
            {
                x: 2009,
                y: -29
            },
            {
                x: 2010,
                y: -45
            },
            {
                x: 2011,
                y: -88
            },
            {
                x: 2012,
                y: -132
            },
            {
                x: 2013,
                y: -146
            },
            {
                x: 2014,
                y: -169
            },
            {
                x: 2015,
                y: -184
            }
        ]
    }],
    xaxis: {
        type: 'datetime',
        axisBorder: {
            show: false
        },
        axisTicks: {
            show: false
        }
    },
    yaxis: {
        tickAmount: 4,
        floating: false,

        labels: {
            style: {
                color: '#8e8da4',
            },
            offsetY: -7,
            offsetX: 0,
        },
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false
        }
    },
    fill: {
        opacity: 0.5,
        gradient: {
            enabled: false
        }
    },
    tooltip: {
        x: {
            format: "yyyy",
        },
        fixed: {
            enabled: false,
            position: 'topRight'
        }
    },
    legend: {
        offsetY: 5,
    },
    grid: {
        yaxis: {
            lines: {
                offsetX: -30
            }
        },
        padding: {
            left: 0,
            bottom: 10
        },
        borderColor: '#f1f3fa'
    },
}

var chart = new ApexCharts(
    document.querySelector("#area-chart-negative"),
    options
);

chart.render();


//
// SELECTION - GITHUB STYLE
//
var colors = ["#FF7F00"];
var dataColors = $("#area-chart-github2").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}
var optionsarea2 = {
    chart: {
        id: 'chartyear',
        type: 'area',
        height: 200,
        toolbar: {
            show: false,
            autoSelected: 'pan'
        }
    },
    colors: colors,
    stroke: {
        width: 0,
        curve: 'smooth'
    },
    dataLabels: {
        enabled: false
    },
    fill: {
        opacity: 1,
        type: 'solid'
    },
    series: [{
        name: 'commits',
        data: githubdata.series
    }],
    yaxis: {
        tickAmount: 10,
        labels: {
            show: false
        }
    },
    xaxis: {
        type: 'datetime',
    }
}

var chartarea2 = new ApexCharts(
    document.querySelector("#area-chart-github2"),
    optionsarea2
);

chartarea2.render();

var colors = ["#7BD39A"];
var dataColors = $("#area-chart-github").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}
var options = {
    chart: {
        height: 175,
        type: 'area',
        toolbar: {
            autoSelected: 'selection',
        },
        brush: {
            enabled: true,
            target: 'chartyear'
        },
        selection: {
            enabled: true,
            xaxis: {
                min: new Date('05 Jan 2014').getTime(),
                max: new Date('04 Jan 2015').getTime()
            }
        },
    },
    colors: colors,
    dataLabels: {
        enabled: false
    },
    stroke: {
        width: 0,
        curve: 'smooth'
    },

    series: [{
        name: 'commits',
        data: githubdata.series
    }],
    fill: {
        opacity: 1,
        type: 'solid'
    },
    legend: {
        position: 'top',
        horizontalAlign: 'left'
    },
    xaxis: {
        type: 'datetime'
    },
}

var chart = new ApexCharts(
    document.querySelector("#area-chart-github"),
    options
);

chart.render();


//
// STACKED AREA
//
var colors = ['#727cf5', '#0acf97', '#e3eaef'];
var dataColors = $("#stacked-area").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}
var options = {
    chart: {
        height: 422,
        type: 'area',
        stacked: true,
        events: {
            selection: function (chart, e) {
                console.log(new Date(e.xaxis.min))
            }
        },

    },
    colors: colors,
    dataLabels: {
        enabled: false
    },
    stroke: {
        width: 2,
        curve: 'smooth'
    },

    series: [{
        name: 'South',
        data: generateDayWiseTimeSeries(new Date('11 Feb 2017').getTime(), 20, {
            min: 10,
            max: 60
        })
    },
    {
        name: 'North',
        data: generateDayWiseTimeSeries(new Date('11 Feb 2017').getTime(), 20, {
            min: 10,
            max: 20
        })
    },

    {
        name: 'Central',
        data: generateDayWiseTimeSeries(new Date('11 Feb 2017').getTime(), 20, {
            min: 10,
            max: 15
        })
    }
    ],
    fill: {
        gradient: {
            enabled: true,
            opacityFrom: 0.6,
            opacityTo: 0.8,
        }
    },
    legend: {
        position: 'top',
        horizontalAlign: 'left'
    },
    xaxis: {
        type: 'datetime'
    },
    grid: {
        row: {
            colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.2
        },
        borderColor: '#f1f3fa'
    },
    responsive: [{
        breakpoint: 600,
        options: {
            chart: {
                toolbar: {
                    show: false
                }
            }
        }
    }]
}

var chart = new ApexCharts(
    document.querySelector("#stacked-area"),
    options
);

chart.render();

/*
  // this function will generate output in this format
  // data = [
      [timestamp, 23],
      [timestamp, 33],
      [timestamp, 12]
      ...
  ]
  */
function generateDayWiseTimeSeries(baseval, count, yrange) {
    var i = 0;
    var series = [];
    while (i < count) {
        var x = baseval;
        var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

        series.push([x, y]);
        baseval += 86400000;
        i++;
    }
    return series;
}


//
// IRREGULAR TIMESERIES
//

var ts1 = 1388534400000;
var ts2 = 1388620800000;
var ts3 = 1389052800000;

var dataSet = [[], [], []];

for (var i = 0; i < 12; i++) {
    ts1 = ts1 + 86400000;
    var innerArr = [ts1, dataSeries[2][i].value];
    dataSet[0].push(innerArr)
}
for (var i = 0; i < 18; i++) {
    ts2 = ts2 + 86400000;
    var innerArr = [ts2, dataSeries[1][i].value];
    dataSet[1].push(innerArr)
}
for (var i = 0; i < 12; i++) {
    ts3 = ts3 + 86400000;
    var innerArr = [ts3, dataSeries[0][i].value];
    dataSet[2].push(innerArr)
}
var colors = ["#39afd1", "#fa5c7c", "#727cf5"];
var dataColors = $("#area-timeSeries").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}
var options = {
    chart: {
        type: 'area',
        stacked: false,
        height: 380,
        zoom: {
            enabled: false
        },
    },
    plotOptions: {
        line: {
            curve: 'smooth',
        }
    },
    dataLabels: {
        enabled: false
    },
    series: [{
        name: 'Product A',
        data: dataSet[0]
    }, {
        name: 'Product B',
        data: dataSet[1]
    }, {
        name: 'Product C',
        data: dataSet[2]
    }],
    colors: colors,
    markers: {
        size: 0,
        style: 'full',
    },
    stroke: {
        width: 3
    },
    fill: {
        gradient: {
            enabled: true,
            shadeIntensity: 1,
            inverseColors: false,
            opacityFrom: 0.45,
            opacityTo: 0.05,
            stops: [20, 100, 100, 100]
        },
    },
    yaxis: {
        //floating: true,
        labels: {
            style: {
                color: '#8e8da4',
            },
            offsetX: 0,
            formatter: function (val) {
                return (val / 1000000).toFixed(0);
            },
        },
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false
        }
    },
    xaxis: {
        type: 'datetime',
        tickAmount: 8,
        labels: {
            formatter: function (val) {
                return moment(new Date(val)).format("DD MMM YYYY")
            }
        }
    },
    title: {
        text: 'Irregular Data in Time Series',
        align: 'left',
        offsetX: 0
    },
    tooltip: {
        shared: true,
        y: {
            formatter: function (val) {
                return (val / 1000000).toFixed(0) + " points"
            }
        }
    },
    legend: {
        position: 'top',
        horizontalAlign: 'center',
        offsetX: -10
    },
    grid: {
        row: {
            colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.2
        },
        borderColor: '#f1f3fa'
    },
    responsive: [{
        breakpoint: 600,
        options: {
            chart: {
                toolbar: {
                    show: false
                }
            }
        }
    }]
}

var chart = new ApexCharts(
    document.querySelector("#area-timeSeries"),
    options
);

chart.render();


//
// AREA CHART WITH NULL VALUES
//
var colors = ["#6c757d"];
var dataColors = $("#area-chart-nullvalues").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}
var options = {
    chart: {
        height: 380,
        type: 'area',
        animations: {
            enabled: false
        },
        zoom: {
            enabled: false
        },
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'straight'
    },
    colors: colors,
    series: [{
        name: 'Network',
        data: [{
            x: 'Dec 23 2017',
            y: null
        },
        {
            x: 'Dec 24 2017',
            y: 44
        },
        {
            x: 'Dec 25 2017',
            y: 31
        },
        {
            x: 'Dec 26 2017',
            y: 38
        },
        {
            x: 'Dec 27 2017',
            y: null
        },
        {
            x: 'Dec 28 2017',
            y: 32
        },
        {
            x: 'Dec 29 2017',
            y: 55
        },
        {
            x: 'Dec 30 2017',
            y: 51
        },
        {
            x: 'Dec 31 2017',
            y: 67
        },
        {
            x: 'Jan 01 2018',
            y: 22
        },
        {
            x: 'Jan 02 2018',
            y: 34
        },
        {
            x: 'Jan 03 2018',
            y: null
        },
        {
            x: 'Jan 04 2018',
            y: null
        },
        {
            x: 'Jan 05 2018',
            y: 11
        },
        {
            x: 'Jan 06 2018',
            y: 4
        },
        {
            x: 'Jan 07 2018',
            y: 15,
        },
        {
            x: 'Jan 08 2018',
            y: null
        },
        {
            x: 'Jan 09 2018',
            y: 9
        },
        {
            x: 'Jan 10 2018',
            y: 34
        },
        {
            x: 'Jan 11 2018',
            y: null
        },
        {
            x: 'Jan 12 2018',
            y: null
        },
        {
            x: 'Jan 13 2018',
            y: 13
        },
        {
            x: 'Jan 14 2018',
            y: null
        }
        ],
    }],
    fill: {
        opacity: 0.8,
        gradient: {
            enabled: false
        },
        pattern: {
            enabled: true,
            style: ['verticalLines', 'horizontalLines'],
            width: 5,
            depth: 6
        },
    },
    markers: {
        size: 5,
        hover: {
            size: 9
        }
    },
    title: {
        text: 'Network Monitoring',
    },
    tooltip: {
        intersect: true,
        shared: false
    },
    theme: {
        palette: 'palette1'
    },
    xaxis: {
        type: 'datetime',
    },
    yaxis: {
        title: {
            text: 'Bytes Received'
        }
    },
    grid: {
        row: {
            colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.2
        },
        borderColor: '#f1f3fa'
    },
    responsive: [{
        breakpoint: 600,
        options: {
            chart: {
                toolbar: {
                    show: false
                }
            }
        }
    }]
}

var chart = new ApexCharts(
    document.querySelector("#area-chart-nullvalues"),
    options
);

chart.render();
/**
  
 *  Author:  KT
 * Module/App: Apex Bar Charts
 */

//
// BASIC BAR CHART
//

var colors = ["#39afd1"];
var dataColors = $("#basic-bar").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}
var options = {
    chart: {
        height: 380,
        type: 'bar',
        toolbar: {
            show: false
        }
    },
    plotOptions: {
        bar: {
            horizontal: true,
        }
    },
    dataLabels: {
        enabled: false
    },
    series: [{
        data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
    }],
    colors: colors,
    xaxis: {
        categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan', 'United States', 'China', 'Germany'],
    },
    states: {
        hover: {
            filter: 'none'
        }
    },
    grid: {
        borderColor: '#f1f3fa'
    }
}

var chart = new ApexCharts(
    document.querySelector("#basic-bar"),
    options
);

chart.render();


//
// GROUPED BAR CHART
//
var colors = ["#fa5c7c", "#6c757d"];
var dataColors = $("#grouped-bar").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}
var options = {
    chart: {
        height: 380,
        type: 'bar',
        toolbar: {
            show: false
        }
    },
    plotOptions: {
        bar: {
            horizontal: true,
            dataLabels: {
                position: 'top',
            },
        }
    },
    dataLabels: {
        enabled: true,
        offsetX: -6,
        style: {
            fontSize: '12px',
            colors: ['#fff']
        }
    },
    colors: colors,
    stroke: {
        show: true,
        width: 1,
        colors: ['#fff']
    },
    series: [{
        name: 'Series 1',
        data: [44, 55, 41, 64, 22, 43, 21]
    }, {
        name: 'Series 2',
        data: [53, 32, 33, 52, 13, 44, 32]
    }],
    xaxis: {
        categories: [2001, 2002, 2003, 2004, 2005, 2006, 2007],
    },
    legend: {
        offsetY: 5,
    },
    states: {
        hover: {
            filter: 'none'
        }
    },
    grid: {
        borderColor: '#f1f3fa',
        padding: {
            bottom: 5
        }
    }
}

var chart = new ApexCharts(
    document.querySelector("#grouped-bar"),
    options
);

chart.render();


//
// STACKED BAR CHART
//
var colors = ["#727cf5", "#0acf97", "#fa5c7c", "#6c757d", "#39afd1"];
var dataColors = $("#stacked-bar").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}
var options = {
    chart: {
        height: 380,
        type: 'bar',
        stacked: true,
        toolbar: {
            show: false
        }
    },
    plotOptions: {
        bar: {
            horizontal: true,
        },

    },
    stroke: {
        show: false
    },
    series: [{
        name: 'Marine Sprite',
        data: [44, 55, 41, 37, 22, 43, 21]
    }, {
        name: 'Striking Calf',
        data: [53, 32, 33, 52, 13, 43, 32]
    }, {
        name: 'Tank Picture',
        data: [12, 17, 11, 9, 15, 11, 20]
    }, {
        name: 'Bucket Slope',
        data: [9, 7, 5, 8, 6, 9, 4]
    }, {
        name: 'Reborn Kid',
        data: [25, 12, 19, 32, 25, 24, 10]
    }],
    xaxis: {
        categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
        labels: {
            formatter: function (val) {
                return val + "K"
            }
        }
    },
    yaxis: {
        title: {
            text: undefined
        },

    },
    colors: colors,
    tooltip: {
        y: {
            formatter: function (val) {
                return val + "K"
            }
        }
    },
    fill: {
        opacity: 1
    },
    states: {
        hover: {
            filter: 'none'
        }
    },
    legend: {
        position: 'top',
        horizontalAlign: 'center',
        offsetY: 10
    },
    grid: {
        borderColor: '#f1f3fa'
    }
}

var chart = new ApexCharts(
    document.querySelector("#stacked-bar"),
    options
);

chart.render();


//
// 100% STACKED BAR CHART
//
var colors = ["#ffbc00", "#39afd1", "#6c757d", "#e3eaef", "#727cf5"];
var dataColors = $("#full-stacked-bar").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}
var options = {
    chart: {
        height: 380,
        type: 'bar',
        stacked: true,
        stackType: '100%',
        toolbar: {
            show: false
        }
    },
    plotOptions: {
        bar: {
            horizontal: true,
        },
    },
    stroke: {
        width: 1,
        colors: ['#fff']
    },
    series: [{
        name: 'Marine Sprite',
        data: [44, 55, 41, 37, 22, 43, 21]
    }, {
        name: 'Striking Calf',
        data: [53, 32, 33, 52, 13, 43, 32]
    }, {
        name: 'Tank Picture',
        data: [12, 17, 11, 9, 15, 11, 20]
    }, {
        name: 'Bucket Slope',
        data: [9, 7, 5, 8, 6, 9, 4]
    }, {
        name: 'Reborn Kid',
        data: [25, 12, 19, 32, 25, 24, 10]
    }],
    xaxis: {
        categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
    },
    colors: colors,
    tooltip: {
        y: {
            formatter: function (val) {
                return val + "K"
            }
        }
    },
    fill: {
        opacity: 1

    },
    states: {
        hover: {
            filter: 'none'
        }
    },
    legend: {
        position: 'top',
        horizontalAlign: 'center',
        offsetY: 10
    },
    grid: {
        borderColor: '#f1f3fa',
        padding: {
            top: 0
        }
    }
}

var chart = new ApexCharts(
    document.querySelector("#full-stacked-bar"),
    options
);

chart.render();


//
// BAR WITH NEGATIVE VALUES
//
var colors = ["#fa5c7c", "#0acf97"];
var dataColors = $("#negative-bar").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}
var options = {
    chart: {
        height: 380,
        type: 'bar',
        stacked: true,
        toolbar: {
            show: false
        }
    },
    colors: colors,
    plotOptions: {
        bar: {
            horizontal: true,
            barHeight: '80%',
        },
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        width: 1,
        colors: ["#fff"]
    },
    series: [{
        name: 'Males',
        data: [0.4, 0.65, 0.76, 0.88, 1.5, 2.1, 2.9, 3.8, 3.9, 4.2, 4, 4.3, 4.1, 4.2, 4.5, 3.9, 3.5, 3]
    },
    {
        name: 'Females',
        data: [-0.8, -1.05, -1.06, -1.18, -1.4, -2.2, -2.85, -3.7, -3.96, -4.22, -4.3, -4.4, -4.1, -4, -4.1, -3.4, -3.1, -2.8]
    }],
    grid: {
        xaxis: {
            showLines: false
        }
    },
    yaxis: {
        min: -5,
        max: 5,
        title: {
            // text: 'Age',
        },
    },
    tooltip: {
        shared: false,
        x: {
            formatter: function (val) {
                return val
            }
        },
        y: {
            formatter: function (val) {
                return Math.abs(val) + "%"
            }
        }
    },
    xaxis: {
        categories: ['85+', '80-84', '75-79', '70-74', '65-69', '60-64', '55-59', '50-54', '45-49', '40-44', '35-39', '30-34', '25-29', '20-24', '15-19', '10-14', '5-9', '0-4'],
        title: {
            text: 'Percent'
        },
        labels: {
            formatter: function (val) {
                return Math.abs(Math.round(val)) + "%"
            }
        }
    },
    legend: {
        offsetY: 7,
    },
    grid: {
        borderColor: '#f1f3fa',
        padding: {
            bottom: 5
        }
    }
}

var chart = new ApexCharts(
    document.querySelector("#negative-bar"),
    options
);

chart.render();

//
// PATTERNED BAR CHART
//
var colors = ["#727cf5", "#0acf97", "#fa5c7c", "#39afd1"];
var dataColors = $("#pattern-bar").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}
var options = {
    chart: {
        height: 380,
        type: 'bar',
        stacked: true,
        toolbar: {
            show: false
        },
        shadow: {
            enabled: true,
            blur: 1,
            opacity: 0.5
        }
    },
    plotOptions: {
        bar: {
            horizontal: true,
            barHeight: '60%',

        },
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        width: 2,
    },
    series: [{
        name: 'Marine Sprite',
        data: [44, 55, 41, 37, 22, 43, 21]
    }, {
        name: 'Striking Calf',
        data: [53, 32, 33, 52, 13, 43, 32]
    }, {
        name: 'Tank Picture',
        data: [12, 17, 11, 9, 15, 11, 20]
    }, {
        name: 'Bucket Slope',
        data: [9, 7, 5, 8, 6, 9, 4]
    }],
    xaxis: {
        categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014],

    },
    yaxis: {
        title: {
            text: undefined
        },
    },
    tooltip: {
        shared: false,
        y: {
            formatter: function (val) {
                return val + "K"
            }
        }
    },
    colors: colors,
    fill: {
        type: 'pattern',
        opacity: 1,
        pattern: {
            style: ['circles', 'slantedLines', 'verticalLines', 'horizontalLines'], // string or array of strings

        }
    },
    states: {
        hover: {
            filter: 'none'
        }
    },
    legend: {
        position: 'right',
    },
    grid: {
        borderColor: '#f1f3fa'
    },
    responsive: [{
        breakpoint: 600,
        options: {
            legend: {
                show: false
            },
        }
    }]
}

var chart = new ApexCharts(
    document.querySelector("#pattern-bar"),
    options
);

chart.render();



//
// BAR WITH IMAGE FILL
//

var labels = Array.apply(null, { length: 39 }).map(function (el, index) {
    return index + 1;
});

var options = {
    chart: {
        height: 450,
        type: 'bar',
        toolbar: {
            show: false
        },
        animations: {
            enabled: false
        }
    },
    plotOptions: {
        bar: {
            horizontal: true,
            barHeight: '100%',

        },
    },
    dataLabels: {
        enabled: false,
    },
    stroke: {
        colors: ["#fff"],
        width: 0.2
    },
    series: [{
        name: 'coins',
        data: [2, 4, 3, 4, 3, 5, 5, 6.5, 6, 5, 4, 5, 8, 7, 7, 8, 8, 10, 9, 9, 12, 12, 11, 12, 13, 14, 16, 14, 15, 17, 19, 21]
    }],
    labels: labels,
    yaxis: {
        axisBorder: {
            show: false
        },
        axisTicks: {
            show: false
        },
        labels: {
            show: false
        },
        title: {
            text: 'Weight',
        },
    },
    grid: {
        position: 'back',
        borderColor: '#f1f3fa'
    },
    fill: {
        type: 'image',
        opacity: 0.87,
        image: {
            src: ['assets/images/small/small-4.jpg'],
            width: 466,
            height: 406
        }
    },
}

var chart = new ApexCharts(
    document.querySelector("#image-fill-bar"),
    options
);

chart.render();


// 
// CUSTOM DATALABELS BAR
//

var colors = ["#727cf5", "#0acf97", "#fa5c7c", "#6c757d", "#39afd1", '#2b908f', '#ffbc00', '#90ee7e', '#f48024', '#212730'];
var dataColors = $("#datalables-bar").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}
var options = {
    chart: {
        height: 450,
        type: 'bar'
    },
    plotOptions: {
        bar: {
            barHeight: '100%',
            distributed: true,
            horizontal: true,
            dataLabels: {
                position: 'bottom'
            },
        }
    },
    colors: colors,
    dataLabels: {
        enabled: true,
        textAnchor: 'start',
        style: {
            colors: ['#fff']
        },
        formatter: function (val, opt) {
            return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val
        },
        offsetX: 0,
        dropShadow: {
            enabled: false
        }
    },
    series: [{
        data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
    }],
    stroke: {
        width: 0,
        colors: ['#fff']
    },
    xaxis: {
        categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan', 'United States', 'China', 'India'],
    },
    yaxis: {
        labels: {
            show: false
        }
    },
    grid: {
        borderColor: '#f1f3fa'
    },

    tooltip: {
        theme: 'dark',
        x: {
            show: false
        },
        y: {
            title: {
                formatter: function () {
                    return ''
                }
            }
        }
    }
}

var chart = new ApexCharts(
    document.querySelector("#datalables-bar"),
    options
);

chart.render();


// 
// Bar with Markers
//

var dataColors = $("#bar-markers").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}

var options = {
    series: [
    {
      name: 'Actual',
      data: [
        {
          x: '2017',
          y: 12,
          goals: [
            {
              name: 'Expected',
              value: 14,
              strokeWidth: 2,
              strokeDashArray: 2,
              strokeColor: colors[1]
            }
          ]
        },
        {
          x: '2018',
          y: 44,
          goals: [
            {
              name: 'Expected',
              value: 54,
              strokeWidth: 5,
              strokeHeight: 10,
              strokeColor: colors[1]
            }
          ]
        },
        {
          x: '2019',
          y: 54,
          goals: [
            {
              name: 'Expected',
              value: 52,
              strokeWidth: 10,
              strokeHeight: 0,
              strokeLineCap: 'round',
              strokeColor: colors[1]
            }
          ]
        },
        {
          x: '2020',
          y: 66,
          goals: [
            {
              name: 'Expected',
              value: 61,
              strokeWidth: 10,
              strokeHeight: 0,
              strokeLineCap: 'round',
              strokeColor: colors[1]
            }
          ]
        },
        {
          x: '2021',
          y: 81,
          goals: [
            {
              name: 'Expected',
              value: 66,
              strokeWidth: 10,
              strokeHeight: 0,
              strokeLineCap: 'round',
              strokeColor: colors[1]
            }
          ]
        },
        {
          x: '2022',
          y: 67,
          goals: [
            {
              name: 'Expected',
              value: 70,
              strokeWidth: 5,
              strokeHeight: 10,
              strokeColor: colors[1]
            }
          ]
        }
      ]
    }
  ],
    chart: {
    height: 380,
    type: 'bar'
  },
  plotOptions: {
    bar: {
      horizontal: true,
    }
  },
  colors: colors,
  dataLabels: {
    dataLabels: {
        formatter: function (val, opt) {
            var goals =
                opt.w.config.series[opt.seriesIndex].data[opt.dataPointIndex]
                .goals

            // if (goals && goals.length) {
            //   return `${val} / ${goals[0].value}`
            // }
            return val
        }
    },
  },
  legend: {
    show: true,
    showForSingleSeries: true,
    customLegendItems: ['Actual', 'Expected'],
    markers: {
      fillColors: colors
    }
  }
  };

var chart = new ApexCharts(document.querySelector("#bar-markers"), options);
chart.render();

// 
// Reversed Bar Chart
//

var dataColors = $("#reversed-bar").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}

var options = {
    series: [{
    data: [400, 430, 448, 470, 540, 580, 690]
  }],
    chart: {
    type: 'bar',
    height: 380
  },
  annotations: {
    xaxis: [{
      x: 500,
      borderColor: colors[1],
      label: {
        borderColor: colors[1],
        style: {
          color: '#fff',
          background: colors[1],
        },
        text: 'X annotation',
      }
    }],
    yaxis: [{
      y: 'July',
      y2: 'September',
      label: {
        text: 'Y annotation'
      }
    }]
  },
  plotOptions: {
    bar: {
      horizontal: true,
    }
  },
  dataLabels: {
    enabled: true
  },
  xaxis: {
    categories: ['June', 'July', 'August', 'September', 'October', 'November', 'December'],
  },
  colors: colors,
  grid: {
    xaxis: {
      lines: {
        show: true
      }
    }
  },
  yaxis: {
    reversed: true,
    axisTicks: {
      show: true
    }
  }
  };

  var chart = new ApexCharts(document.querySelector("#reversed-bar"), options);
  chart.render();
/**
  
 *  Author:  KT
 * Module/App: Apex Boxplot Charts
 */

//
// BASIC BOXPLOT
//

var colors = ["#727cf5", "#0acf97", "#fa5c7c"];
var dataColors = $("#basic-boxplot").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}

var options = {
    series: [{
        type: 'boxPlot',
        data: [{
                x: 'Jan 2015',
                y: [54, 66, 69, 75, 88]
            },
            {
                x: 'Jan 2016',
                y: [43, 65, 69, 76, 81]
            },
            {
                x: 'Jan 2017',
                y: [31, 39, 45, 51, 59]
            },
            {
                x: 'Jan 2018',
                y: [39, 46, 55, 65, 71]
            },
            {
                x: 'Jan 2019',
                y: [29, 31, 35, 39, 44]
            },
            {
                x: 'Jan 2020',
                y: [41, 49, 58, 61, 67]
            },
            {
                x: 'Jan 2021',
                y: [54, 59, 66, 71, 88]
            }
        ]
    }],
    chart: {
        type: 'boxPlot',
        height: 350,
        toolbar: {
            show: false
        }
    },
    plotOptions: {
        boxPlot: {
            colors: {
                upper: colors[0],
                lower: colors[1]
            }
        }
    },
    stroke: {
        colors: ['#a1a9b1']
    }
};

var chart = new ApexCharts(document.querySelector("#basic-boxplot"), options);
chart.render();


//
// SCATTER BOXPLOT
//

var colors = ["#727cf5", "#0acf97", "#fa5c7c"];
var dataColors = $("#scatter-boxplot").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}

var options = {
    series: [{
            name: 'Box',
            type: 'boxPlot',
            data: [{
                    x: new Date('2017-01-01').getTime(),
                    y: [54, 66, 69, 75, 88]
                },
                {
                    x: new Date('2018-01-01').getTime(),
                    y: [43, 65, 69, 76, 81]
                },
                {
                    x: new Date('2019-01-01').getTime(),
                    y: [31, 39, 45, 51, 59]
                },
                {
                    x: new Date('2020-01-01').getTime(),
                    y: [39, 46, 55, 65, 71]
                },
                {
                    x: new Date('2021-01-01').getTime(),
                    y: [29, 31, 35, 39, 44]
                }
            ]
        },
        {
            name: 'Outliers',
            type: 'scatter',
            data: [{
                    x: new Date('2017-01-01').getTime(),
                    y: 32
                },
                {
                    x: new Date('2018-01-01').getTime(),
                    y: 25
                },
                {
                    x: new Date('2019-01-01').getTime(),
                    y: 64
                },
                {
                    x: new Date('2020-01-01').getTime(),
                    y: 27
                },
                {
                    x: new Date('2020-01-01').getTime(),
                    y: 78
                },
                {
                    x: new Date('2021-01-01').getTime(),
                    y: 15
                }
            ]
        }
    ],
    chart: {
        type: 'boxPlot',
        height: 350
    },
    colors: colors,
    stroke: {
        colors: ['#a1a9b1']
    },
    legend: {
        offsetY: 10,
    },
    xaxis: {
        type: 'datetime',
        tooltip: {
            formatter: function (val) {
                return new Date(val).getFullYear()
            }
        }
    },
    grid: {
        padding: {
            bottom: 5
        }
    },
    tooltip: {
        shared: false,
        intersect: true
    },
    plotOptions: {
        boxPlot: {
            colors: {
                upper: colors[0],
                lower: colors[1]
            }
        }
    },
};

var chart = new ApexCharts(document.querySelector("#scatter-boxplot"), options);
chart.render();



//
// HORIZONTAL BOXPLOT
//

var colors = ["#727cf5", "#0acf97", "#fa5c7c"];
var dataColors = $("#horizontal-boxplot").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}

var options = {
    series: [{
        data: [{
                x: 'Category A',
                y: [54, 66, 69, 75, 88]
            },
            {
                x: 'Category B',
                y: [43, 65, 69, 76, 81]
            },
            {
                x: 'Category C',
                y: [31, 39, 45, 51, 59]
            },
            {
                x: 'Category D',
                y: [39, 46, 55, 65, 71]
            },
            {
                x: 'Category E',
                y: [29, 31, 35, 39, 44]
            },
            {
                x: 'Category F',
                y: [41, 49, 58, 61, 67]
            },
            {
                x: 'Category G',
                y: [54, 59, 66, 71, 88]
            }
        ]
    }],
    chart: {
        type: 'boxPlot',
        height: 350
    },
    plotOptions: {
        bar: {
            horizontal: true,
            barHeight: '50%'
        },
        boxPlot: {
            colors: {
                upper: colors[0],
                lower: colors[1]
            }
        }
    },
    stroke: {
        colors: ['#a1a9b1']
    }
};

var chart = new ApexCharts(document.querySelector("#horizontal-boxplot"), options);
chart.render();
/**
  
 *  Author:  KT
 * Module/App: Apex Bubble Charts
 */

//
// SIMPLE BUBBLE CHART
//

/*
// this function will generate output in this format
// data = [
    [timestamp, 23],
    [timestamp, 33],
    [timestamp, 12]
    ...
]
*/
function generateData(baseval, count, yrange) {
    var i = 0;
    var series = [];
    while (i < count) {
        var x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;;
        var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
        var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;

        series.push([x, y, z]);
        baseval += 86400000;
        i++;
    }
    return series;
}

var colors = ["#727cf5", "#ffbc00", "#fa5c7c"];
var dataColors = $("#simple-bubble").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}
var options = {
    chart: {
        height: 380,
        type: 'bubble',
        toolbar: {
            show: false
        }
    },
    dataLabels: {
        enabled: false
    },
    series: [{
        name: 'Bubble 1',
        data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
            min: 10,
            max: 60
        })
    },
    {
        name: 'Bubble 2',
        data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
            min: 10,
            max: 60
        })
    },
    {
        name: 'Bubble 3',
        data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
            min: 10,
            max: 60
        })
    }
    ],
    fill: {
        opacity: 0.8,
        gradient: {
            enabled: false
        }
    },
    colors: colors,
    xaxis: {
        tickAmount: 12,
        type: 'category',
    },
    yaxis: {
        max: 70
    },
    grid: {
        borderColor: '#f1f3fa',
        padding: {
            bottom: 5
        }
    },
    legend: {
        offsetY: 7,
    }
}

var chart = new ApexCharts(
    document.querySelector("#simple-bubble"),
    options
);

chart.render();


//
// 3D BUBBLE CHART
//

/*
// this function will generate output in this format
// data = [
    [timestamp, 23],
    [timestamp, 33],
    [timestamp, 12]
    ...
]
*/
function generateData1(baseval1, count, yrange) {
    var i = 0;
    var series = [];
    while (i < count) {
        //var x =Math.floor(Math.random() * (750 - 1 + 1)) + 1;;
        var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
        var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;

        series.push([baseval1, y, z]);
        baseval1 += 86400000;
        i++;
    }
    return series;
}

var colors = ["#727cf5", "#0acf97", "#fa5c7c", "#39afd1"];
var dataColors = $("#second-bubble").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}
var options2 = {
    chart: {
        height: 380,
        type: 'bubble',
        toolbar: {
            show: false
        }
    },
    dataLabels: {
        enabled: false
    },
    series: [{
        name: 'Product 1',
        data: generateData1(new Date('11 Feb 2017 GMT').getTime(), 20, {
            min: 10,
            max: 60
        })
    },
    {
        name: 'Product 2',
        data: generateData1(new Date('11 Feb 2017 GMT').getTime(), 20, {
            min: 10,
            max: 60
        })
    },
    {
        name: 'Product 3',
        data: generateData1(new Date('11 Feb 2017 GMT').getTime(), 20, {
            min: 10,
            max: 60
        })
    },
    {
        name: 'Product 4',
        data: generateData1(new Date('11 Feb 2017 GMT').getTime(), 20, {
            min: 10,
            max: 60
        })
    }
    ],
    fill: {
        type: 'gradient',
    },
    colors: colors,
    xaxis: {
        tickAmount: 12,
        type: 'datetime',

        labels: {
            rotate: 0,
        }
    },
    yaxis: {
        max: 70
    },
    legend: {
        offsetY: 7,
    },
    grid: {
        borderColor: '#f1f3fa',
        padding: {
            bottom: 5
        }
    }
}

var chart = new ApexCharts(
    document.querySelector("#second-bubble"),
    options2
);

chart.render();
/**
  
 *  Author:  KT
 * Module/App: Apex Candlestick Charts
 */

//
// Simple Candlestick chart
//
var colors = ["#0acf97", "#fa5c7c"];
var dataColors = $("#simple-candlestick").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}
var options = {
    chart: {
        height: 400,
        type: 'candlestick'
    },
    plotOptions: {
        candlestick: {
            colors: {
                upward: colors[0],
                downward: colors[1]
            }
        }
    },
    series: [{
        data: seriesData
    }],

    stroke: {
        show: true,
        colors: '#f1f3fa',
        width: 1
    },
    xaxis: {
        type: 'datetime'
    },
    grid: {
        borderColor: '#f1f3fa'
    }
}

var chart = new ApexCharts(
    document.querySelector("#simple-candlestick"),
    options
);

chart.render();

//
// Combo Candlestick
//
var colors = ["#0acf97", "#fa5c7c"];
var dataColors = $("#combo-candlestick").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}
var optionsCandlestick = {
    chart: {
        height: 240,
        type: 'candlestick',
        toolbar: {
            show: false
        },
        zoom: {
            enabled: false
        },
    },
    series: [{
        data: seriesData
    }],
    plotOptions: {
        candlestick: {
            colors: {
                upward: colors[0],
                downward: colors[1]
            }
        }
    },
    xaxis: {
        type: 'datetime'
    },
    grid: {
        borderColor: '#f1f3fa'
    }
}

var chartCandlestick = new ApexCharts(
    document.querySelector("#combo-candlestick"),
    optionsCandlestick
);

chartCandlestick.render();


var colors = ["#727cf5", "#ffbc00"];
var dataColors = $("#combo-bar-candlestick").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}
var options = {
    chart: {
        height: 160,
        type: 'bar',
        toolbar: {
            show: false,
            autoSelected: 'selection'
        },
        selection: {
            xaxis: {
                min: new Date('20 Jan 2017').getTime(),
                max: new Date('10 Dec 2017').getTime()
            },
            fill: {
                color: '#6c757d',
                opacity: 0.4
            },
            stroke: {
                color: '#6c757d',
            }
        },
        events: {
            selection: function (chart, e) {
                chartCandlestick.updateOptions({
                    xaxis: {
                        min: e.xaxis.min,
                        max: e.xaxis.max
                    }
                }, false, false)
            }
        },

    },
    dataLabels: {
        enabled: false
    },
    plotOptions: {
        bar: {
            columnWidth: '80%',
            colors: {
                ranges: [{
                    from: -1000,
                    to: 0,
                    color: colors[0],
                }, {
                    from: 1,
                    to: 10000,
                    color: colors[1]
                }],

            },
        }
    },
    series: [{
        name: 'volume',
        data: seriesDataLinear
    }],
    xaxis: {
        type: 'datetime',
        axisBorder: {
            offsetX: 13
        }
    },
    yaxis: {
        labels: {
            show: false
        }
    },
    grid: {
        borderColor: '#f1f3fa'
    }
}

var chart = new ApexCharts(
    document.querySelector("#combo-bar-candlestick"),
    options
);

chart.render();

//
// CATEGORY X-AXIS
//

var colors = ["#727cf5", "#ffbc00"];
var dataColors = $("#x-axis-candlestick").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}

var options = {
    series: [{
        name: 'candle',
        data: [{
                x: new Date(1538778600000),
                y: [6629.81, 6650.5, 6623.04, 6633.33]
            },
            {
                x: new Date(1538780400000),
                y: [6632.01, 6643.59, 6620, 6630.11]
            },
            {
                x: new Date(1538782200000),
                y: [6630.71, 6648.95, 6623.34, 6635.65]
            },
            {
                x: new Date(1538784000000),
                y: [6635.65, 6651, 6629.67, 6638.24]
            },
            {
                x: new Date(1538785800000),
                y: [6638.24, 6640, 6620, 6624.47]
            },
            {
                x: new Date(1538787600000),
                y: [6624.53, 6636.03, 6621.68, 6624.31]
            },
            {
                x: new Date(1538789400000),
                y: [6624.61, 6632.2, 6617, 6626.02]
            },
            {
                x: new Date(1538791200000),
                y: [6627, 6627.62, 6584.22, 6603.02]
            },
            {
                x: new Date(1538793000000),
                y: [6605, 6608.03, 6598.95, 6604.01]
            },
            {
                x: new Date(1538794800000),
                y: [6604.5, 6614.4, 6602.26, 6608.02]
            },
            {
                x: new Date(1538796600000),
                y: [6608.02, 6610.68, 6601.99, 6608.91]
            },
            {
                x: new Date(1538798400000),
                y: [6608.91, 6618.99, 6608.01, 6612]
            },
            {
                x: new Date(1538800200000),
                y: [6612, 6615.13, 6605.09, 6612]
            },
            {
                x: new Date(1538802000000),
                y: [6612, 6624.12, 6608.43, 6622.95]
            },
            {
                x: new Date(1538803800000),
                y: [6623.91, 6623.91, 6615, 6615.67]
            },
            {
                x: new Date(1538805600000),
                y: [6618.69, 6618.74, 6610, 6610.4]
            },
            {
                x: new Date(1538807400000),
                y: [6611, 6622.78, 6610.4, 6614.9]
            },
            {
                x: new Date(1538809200000),
                y: [6614.9, 6626.2, 6613.33, 6623.45]
            },
            {
                x: new Date(1538811000000),
                y: [6623.48, 6627, 6618.38, 6620.35]
            },
            {
                x: new Date(1538812800000),
                y: [6619.43, 6620.35, 6610.05, 6615.53]
            },
            {
                x: new Date(1538814600000),
                y: [6615.53, 6617.93, 6610, 6615.19]
            },
            {
                x: new Date(1538816400000),
                y: [6615.19, 6621.6, 6608.2, 6620]
            },
            {
                x: new Date(1538818200000),
                y: [6619.54, 6625.17, 6614.15, 6620]
            },
            {
                x: new Date(1538820000000),
                y: [6620.33, 6634.15, 6617.24, 6624.61]
            },
            {
                x: new Date(1538821800000),
                y: [6625.95, 6626, 6611.66, 6617.58]
            },
            {
                x: new Date(1538823600000),
                y: [6619, 6625.97, 6595.27, 6598.86]
            },
            {
                x: new Date(1538825400000),
                y: [6598.86, 6598.88, 6570, 6587.16]
            },
            {
                x: new Date(1538827200000),
                y: [6588.86, 6600, 6580, 6593.4]
            },
            {
                x: new Date(1538829000000),
                y: [6593.99, 6598.89, 6585, 6587.81]
            },
            {
                x: new Date(1538830800000),
                y: [6587.81, 6592.73, 6567.14, 6578]
            },
            {
                x: new Date(1538832600000),
                y: [6578.35, 6581.72, 6567.39, 6579]
            },
            {
                x: new Date(1538834400000),
                y: [6579.38, 6580.92, 6566.77, 6575.96]
            },
            {
                x: new Date(1538836200000),
                y: [6575.96, 6589, 6571.77, 6588.92]
            },
            {
                x: new Date(1538838000000),
                y: [6588.92, 6594, 6577.55, 6589.22]
            },
            {
                x: new Date(1538839800000),
                y: [6589.3, 6598.89, 6589.1, 6596.08]
            },
            {
                x: new Date(1538841600000),
                y: [6597.5, 6600, 6588.39, 6596.25]
            },
            {
                x: new Date(1538843400000),
                y: [6598.03, 6600, 6588.73, 6595.97]
            },
            {
                x: new Date(1538845200000),
                y: [6595.97, 6602.01, 6588.17, 6602]
            },
            {
                x: new Date(1538847000000),
                y: [6602, 6607, 6596.51, 6599.95]
            },
            {
                x: new Date(1538848800000),
                y: [6600.63, 6601.21, 6590.39, 6591.02]
            },
            {
                x: new Date(1538850600000),
                y: [6591.02, 6603.08, 6591, 6591]
            },
            {
                x: new Date(1538852400000),
                y: [6591, 6601.32, 6585, 6592]
            },
            {
                x: new Date(1538854200000),
                y: [6593.13, 6596.01, 6590, 6593.34]
            },
            {
                x: new Date(1538856000000),
                y: [6593.34, 6604.76, 6582.63, 6593.86]
            },
            {
                x: new Date(1538857800000),
                y: [6593.86, 6604.28, 6586.57, 6600.01]
            },
            {
                x: new Date(1538859600000),
                y: [6601.81, 6603.21, 6592.78, 6596.25]
            },
            {
                x: new Date(1538861400000),
                y: [6596.25, 6604.2, 6590, 6602.99]
            },
            {
                x: new Date(1538863200000),
                y: [6602.99, 6606, 6584.99, 6587.81]
            },
            {
                x: new Date(1538865000000),
                y: [6587.81, 6595, 6583.27, 6591.96]
            },
            {
                x: new Date(1538866800000),
                y: [6591.97, 6596.07, 6585, 6588.39]
            },
            {
                x: new Date(1538868600000),
                y: [6587.6, 6598.21, 6587.6, 6594.27]
            },
            {
                x: new Date(1538870400000),
                y: [6596.44, 6601, 6590, 6596.55]
            },
            {
                x: new Date(1538872200000),
                y: [6598.91, 6605, 6596.61, 6600.02]
            },
            {
                x: new Date(1538874000000),
                y: [6600.55, 6605, 6589.14, 6593.01]
            },
            {
                x: new Date(1538875800000),
                y: [6593.15, 6605, 6592, 6603.06]
            },
            {
                x: new Date(1538877600000),
                y: [6603.07, 6604.5, 6599.09, 6603.89]
            },
            {
                x: new Date(1538879400000),
                y: [6604.44, 6604.44, 6600, 6603.5]
            },
            {
                x: new Date(1538881200000),
                y: [6603.5, 6603.99, 6597.5, 6603.86]
            },
            {
                x: new Date(1538883000000),
                y: [6603.85, 6605, 6600, 6604.07]
            },
            {
                x: new Date(1538884800000),
                y: [6604.98, 6606, 6604.07, 6606]
            },
        ]
    }],
    chart: {
        height: 380,
        type: 'candlestick',
    },
    title: {
        text: 'CandleStick Chart - Category X-axis',
        align: 'left'
    },
    grid: {
        padding: {
            top: 0,
            right: -2,
            bottom: -25,
            left: 0,
        },
    },
    annotations: {
        xaxis: [{
            x: 'Oct 06 14:00',
            borderColor: colors[2],
            label: {
                borderColor: colors[2],
                style: {
                    fontSize: '12px',
                    color: '#fff',
                    background: colors[2]
                },
                orientation: 'horizontal',
                offsetY: 7,
                text: 'Annotation Test'
            }
        }]
    },
    plotOptions: {
        candlestick: {
            colors: {
                upward: colors[0],
                downward: colors[1]
            }
        }
    },
    tooltip: {
        enabled: true,
    },
    colors: colors,
    xaxis: {
        type: 'category',
        labels: {
            formatter: function (val) {
                return dayjs(val).format('MMM DD HH:mm')
            }
        }
    },
    yaxis: {
        tooltip: {
            enabled: true
        }
    }
};

var chart = new ApexCharts(document.querySelector("#x-axis-candlestick"), options);
chart.render();

//
// CANDLESTICK WITH LINE
//

var colors = ["#727cf5", "#ffbc00"];
var dataColors = $("#candlestick-with-line").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}

var options = {
    series: [{
        name: 'Line',
        type: 'line',
        data: [{
            x: new Date(1538778600000),
            y: 6604
        }, {
            x: new Date(1538782200000),
            y: 6602
        }, {
            x: new Date(1538814600000),
            y: 6607
        }, {
            x: new Date(1538884800000),
            y: 6620
        }]
    }, {
        name: 'Candle',
        type: 'candlestick',
        data: [{
                x: new Date(1538778600000),
                y: [6629.81, 6650.5, 6623.04, 6633.33]
            },
            {
                x: new Date(1538780400000),
                y: [6632.01, 6643.59, 6620, 6630.11]
            },
            {
                x: new Date(1538782200000),
                y: [6630.71, 6648.95, 6623.34, 6635.65]
            },
            {
                x: new Date(1538784000000),
                y: [6635.65, 6651, 6629.67, 6638.24]
            },
            {
                x: new Date(1538785800000),
                y: [6638.24, 6640, 6620, 6624.47]
            },
            {
                x: new Date(1538787600000),
                y: [6624.53, 6636.03, 6621.68, 6624.31]
            },
            {
                x: new Date(1538789400000),
                y: [6624.61, 6632.2, 6617, 6626.02]
            },
            {
                x: new Date(1538791200000),
                y: [6627, 6627.62, 6584.22, 6603.02]
            },
            {
                x: new Date(1538793000000),
                y: [6605, 6608.03, 6598.95, 6604.01]
            },
            {
                x: new Date(1538794800000),
                y: [6604.5, 6614.4, 6602.26, 6608.02]
            },
            {
                x: new Date(1538796600000),
                y: [6608.02, 6610.68, 6601.99, 6608.91]
            },
            {
                x: new Date(1538798400000),
                y: [6608.91, 6618.99, 6608.01, 6612]
            },
            {
                x: new Date(1538800200000),
                y: [6612, 6615.13, 6605.09, 6612]
            },
            {
                x: new Date(1538802000000),
                y: [6612, 6624.12, 6608.43, 6622.95]
            },
            {
                x: new Date(1538803800000),
                y: [6623.91, 6623.91, 6615, 6615.67]
            },
            {
                x: new Date(1538805600000),
                y: [6618.69, 6618.74, 6610, 6610.4]
            },
            {
                x: new Date(1538807400000),
                y: [6611, 6622.78, 6610.4, 6614.9]
            },
            {
                x: new Date(1538809200000),
                y: [6614.9, 6626.2, 6613.33, 6623.45]
            },
            {
                x: new Date(1538811000000),
                y: [6623.48, 6627, 6618.38, 6620.35]
            },
            {
                x: new Date(1538812800000),
                y: [6619.43, 6620.35, 6610.05, 6615.53]
            },
            {
                x: new Date(1538814600000),
                y: [6615.53, 6617.93, 6610, 6615.19]
            },
            {
                x: new Date(1538816400000),
                y: [6615.19, 6621.6, 6608.2, 6620]
            },
            {
                x: new Date(1538818200000),
                y: [6619.54, 6625.17, 6614.15, 6620]
            },
            {
                x: new Date(1538820000000),
                y: [6620.33, 6634.15, 6617.24, 6624.61]
            },
            {
                x: new Date(1538821800000),
                y: [6625.95, 6626, 6611.66, 6617.58]
            },
            {
                x: new Date(1538823600000),
                y: [6619, 6625.97, 6595.27, 6598.86]
            },
            {
                x: new Date(1538825400000),
                y: [6598.86, 6598.88, 6570, 6587.16]
            },
            {
                x: new Date(1538827200000),
                y: [6588.86, 6600, 6580, 6593.4]
            },
            {
                x: new Date(1538829000000),
                y: [6593.99, 6598.89, 6585, 6587.81]
            },
            {
                x: new Date(1538830800000),
                y: [6587.81, 6592.73, 6567.14, 6578]
            },
            {
                x: new Date(1538832600000),
                y: [6578.35, 6581.72, 6567.39, 6579]
            },
            {
                x: new Date(1538834400000),
                y: [6579.38, 6580.92, 6566.77, 6575.96]
            },
            {
                x: new Date(1538836200000),
                y: [6575.96, 6589, 6571.77, 6588.92]
            },
            {
                x: new Date(1538838000000),
                y: [6588.92, 6594, 6577.55, 6589.22]
            },
            {
                x: new Date(1538839800000),
                y: [6589.3, 6598.89, 6589.1, 6596.08]
            },
            {
                x: new Date(1538841600000),
                y: [6597.5, 6600, 6588.39, 6596.25]
            },
            {
                x: new Date(1538843400000),
                y: [6598.03, 6600, 6588.73, 6595.97]
            },
            {
                x: new Date(1538845200000),
                y: [6595.97, 6602.01, 6588.17, 6602]
            },
            {
                x: new Date(1538847000000),
                y: [6602, 6607, 6596.51, 6599.95]
            },
            {
                x: new Date(1538848800000),
                y: [6600.63, 6601.21, 6590.39, 6591.02]
            },
            {
                x: new Date(1538850600000),
                y: [6591.02, 6603.08, 6591, 6591]
            },
            {
                x: new Date(1538852400000),
                y: [6591, 6601.32, 6585, 6592]
            },
            {
                x: new Date(1538854200000),
                y: [6593.13, 6596.01, 6590, 6593.34]
            },
            {
                x: new Date(1538856000000),
                y: [6593.34, 6604.76, 6582.63, 6593.86]
            },
            {
                x: new Date(1538857800000),
                y: [6593.86, 6604.28, 6586.57, 6600.01]
            },
            {
                x: new Date(1538859600000),
                y: [6601.81, 6603.21, 6592.78, 6596.25]
            },
            {
                x: new Date(1538861400000),
                y: [6596.25, 6604.2, 6590, 6602.99]
            },
            {
                x: new Date(1538863200000),
                y: [6602.99, 6606, 6584.99, 6587.81]
            },
            {
                x: new Date(1538865000000),
                y: [6587.81, 6595, 6583.27, 6591.96]
            },
            {
                x: new Date(1538866800000),
                y: [6591.97, 6596.07, 6585, 6588.39]
            },
            {
                x: new Date(1538868600000),
                y: [6587.6, 6598.21, 6587.6, 6594.27]
            },
            {
                x: new Date(1538870400000),
                y: [6596.44, 6601, 6590, 6596.55]
            },
            {
                x: new Date(1538872200000),
                y: [6598.91, 6605, 6596.61, 6600.02]
            },
            {
                x: new Date(1538874000000),
                y: [6600.55, 6605, 6589.14, 6593.01]
            },
            {
                x: new Date(1538875800000),
                y: [6593.15, 6605, 6592, 6603.06]
            },
            {
                x: new Date(1538877600000),
                y: [6603.07, 6604.5, 6599.09, 6603.89]
            },
            {
                x: new Date(1538879400000),
                y: [6604.44, 6604.44, 6600, 6603.5]
            },
            {
                x: new Date(1538881200000),
                y: [6603.5, 6603.99, 6597.5, 6603.86]
            },
            {
                x: new Date(1538883000000),
                y: [6603.85, 6605, 6600, 6604.07]
            },
            {
                x: new Date(1538884800000),
                y: [6604.98, 6606, 6604.07, 6606]
            },
        ]
    }],
    chart: {
        height: 380,
        type: 'line',
    },
    title: {
        text: 'CandleStick Chart',
        align: 'left'
    },
    stroke: {
        width: [3, 1]
    },
    legend: {
        show: true,
        horizontalAlign: "center",
        offsetX: 0,
        offsetY: 5,
    },
    grid: {
        padding: {
            top: 0,
            right: -2,
            bottom: 15,
            left: 10,
        },
    },
    colors: colors,
    plotOptions: {
        candlestick: {
            colors: {
                upward: colors[1],
                downward: colors[2]
            }
        }
    },
    tooltip: {
        shared: true,
        custom: [function (_ref) {
            var seriesIndex = _ref.seriesIndex;
            var dataPointIndex = _ref.dataPointIndex;
            var w = _ref.w;

            return w.globals.series[seriesIndex][dataPointIndex];
        }, function (_ref2) {
            var seriesIndex = _ref2.seriesIndex;
            var dataPointIndex = _ref2.dataPointIndex;
            var w = _ref2.w;

            var o = w.globals.seriesCandleO[seriesIndex][dataPointIndex];
            var h = w.globals.seriesCandleH[seriesIndex][dataPointIndex];
            var l = w.globals.seriesCandleL[seriesIndex][dataPointIndex];
            var c = w.globals.seriesCandleC[seriesIndex][dataPointIndex];
            return '<div class="apexcharts-tooltip-candlestick">' + '<div>Open: <span class="value">' + o + '</span></div>' + '<div>High: <span class="value">' + h + '</span></div>' + '<div>Low: <span class="value">' + l + '</span></div>' + '<div>Close: <span class="value">' + c + '</span></div>' + '</div>';
        }]
    },
    xaxis: {
        type: 'datetime'
    }
};

var chart = new ApexCharts(document.querySelector("#candlestick-with-line"), options);
chart.render();
/**
  
 *  Author:  KT
 * Module/App: Apex Column Charts
 */

//
// BASIC COLUMN CHART
//
var colors = ["#727cf5", "#0acf97", "#fa5c7c"];
var dataColors = $("#basic-column").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}
var options = {
    chart: {
        height: 396,
        type: 'bar',
        toolbar: {
            show: false
        }
    },
    plotOptions: {
        bar: {
            horizontal: false,
            endingShape: 'rounded',
            columnWidth: '55%',
        },
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
    },
    colors: colors,
    series: [{
        name: 'Net Profit',
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
    }, {
        name: 'Revenue',
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
    }, {
        name: 'Free Cash Flow',
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
    }],
    xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    },
    legend: {
        offsetY: 7,
    },
    yaxis: {
        title: {
            text: '$ (thousands)'
        }
    },
    fill: {
        opacity: 1
    },
    grid: {
        row: {
            colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.2
        },
        borderColor: '#f1f3fa',
        padding: {
            bottom: 5
        }
    },
    tooltip: {
        y: {
            formatter: function (val) {
                return "$ " + val + " thousands"
            }
        }
    }
}

var chart = new ApexCharts(
    document.querySelector("#basic-column"),
    options
);

chart.render();


//
// COLUMN CHART WITH DATALABELS
//
var colors = ["#727cf5"];
var dataColors = $("#datalabels-column").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}
var options = {
    chart: {
        height: 380,
        type: 'bar',
        toolbar: {
            show: false
        }
    },
    plotOptions: {
        bar: {
            borderRadius: 10,
            dataLabels: {
                position: 'top', // top, center, bottom
            },
        }
    },
    dataLabels: {
        enabled: true,
        formatter: function (val) {
            return val + "%";
        },
        offsetY: -25,
        style: {
            fontSize: '12px',
            colors: ["#304758"]
        }
    },
    colors: colors,
    legend: {
        show: true,
        horizontalAlign: "center",
        offsetX: 0,
        offsetY: -5,
    },
    series: [{
        name: 'Inflation',
        data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2]
    }],
    xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        position: 'top',
        labels: {
            offsetY: 0,
        },
        axisBorder: {
            show: false
        },
        axisTicks: {
            show: false
        },
        crosshairs: {
            fill: {
                type: 'gradient',
                gradient: {
                    colorFrom: '#D8E3F0',
                    colorTo: '#BED1E6',
                    stops: [0, 100],
                    opacityFrom: 0.4,
                    opacityTo: 0.5,
                }
            }
        },
        tooltip: {
            enabled: true,
            offsetY: -10,
        }
    },
    fill: {
        gradient: {
            enabled: false,
            shade: 'light',
            type: "horizontal",
            shadeIntensity: 0.25,
            gradientToColors: undefined,
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [50, 0, 100, 100]
        },
    },
    yaxis: {
        axisBorder: {
            show: false
        },
        axisTicks: {
            show: false,
        },
        labels: {
            show: false,
            formatter: function (val) {
                return val + "%";
            }
        }

    },
    title: {
        text: 'Monthly Inflation in Argentina, 2002',
        floating: true,
        offsetY: 360,
        align: 'center',
        style: {
            color: '#444'
        }
    },
    grid: {
        row: {
            colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.2
        },
        borderColor: '#f1f3fa'
    }
}

var chart = new ApexCharts(
    document.querySelector("#datalabels-column"),
    options
);

chart.render();


//
// STACKED COLUMN CHART
//

var colors = ["#39afd1", "#ffbc00", "#e3eaef"];
var dataColors = $("#stacked-column").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}
var options = {
    chart: {
        height: 380,
        type: 'bar',
        stacked: true,
        toolbar: {
            show: false
        }
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '50%',
        },
    },
    series: [{
        name: 'Product A',
        data: [44, 55, 41, 67, 22, 43, 21, 49]
    }, {
        name: 'Product B',
        data: [13, 23, 20, 8, 13, 27, 33, 12]
    }, {
        name: 'Product C',
        data: [11, 17, 15, 15, 21, 14, 15, 13]
    }],
    xaxis: {
        categories: ['2011 Q1', '2011 Q2', '2011 Q3', '2011 Q4', '2012 Q1', '2012 Q2', '2012 Q3', '2012 Q4'],
    },
    colors: colors,
    fill: {
        opacity: 1
    },
    legend: {
        offsetY: 7,
    },
    grid: {
        row: {
            colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.2
        },
        borderColor: '#f1f3fa',
        padding: {
            bottom: 5
        }
    }
}

var chart = new ApexCharts(
    document.querySelector("#stacked-column"),
    options
);

chart.render();


//
// 100% STACKED COLUMN CHART
//
var colors = ["#39afd1", "#0acf97", "#e3eaef"];
var dataColors = $("#full-stacked-column").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}
var options = {
    chart: {
        height: 380,
        type: 'bar',
        stacked: true,
        stackType: '100%',
        toolbar: {
            show: false
        }
    },
    plotOptions: {
        bar: {
            columnWidth: '50%',
        },
    },
    series: [{
        name: 'Product A',
        data: [44, 55, 41, 67, 22, 43, 21, 49]
    }, {
        name: 'Product B',
        data: [13, 23, 20, 8, 13, 27, 33, 12]
    }, {
        name: 'Product C',
        data: [11, 17, 15, 15, 21, 14, 15, 13]
    }],
    xaxis: {
        categories: ['2011 Q1', '2011 Q2', '2011 Q3', '2011 Q4', '2012 Q1', '2012 Q2', '2012 Q3', '2012 Q4'],
    },
    fill: {
        opacity: 1
    },
    legend: {
        offsetY: 7,
    },
    colors: colors,
    grid: {
        row: {
            colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.2
        },
        borderColor: '#f1f3fa',
        padding: {
            bottom: 5
        }
    }
}

var chart = new ApexCharts(
    document.querySelector("#full-stacked-column"),
    options
);

chart.render();

//
// COLUMN WITH MARKERS
//


var colors = ["#0acf97", "#fa5c7c"];
var dataColors = $("#column-with-markers").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}

var options = {
    series: [{
        name: 'Actual',
        data: [{
                x: '2011',
                y: 1292,
                goals: [{
                    name: 'Expected',
                    value: 1400,
                    strokeHeight: 5,
                    strokeColor: colors[1]
                }]
            },
            {
                x: '2012',
                y: 4432,
                goals: [{
                    name: 'Expected',
                    value: 5400,
                    strokeHeight: 5,
                    strokeColor: colors[1]
                }]
            },
            {
                x: '2013',
                y: 5423,
                goals: [{
                    name: 'Expected',
                    value: 5200,
                    strokeHeight: 5,
                    strokeColor: colors[1]
                }]
            },
            {
                x: '2014',
                y: 6653,
                goals: [{
                    name: 'Expected',
                    value: 6500,
                    strokeHeight: 5,
                    strokeColor: colors[1]
                }]
            },
            {
                x: '2015',
                y: 8133,
                goals: [{
                    name: 'Expected',
                    value: 6600,
                    strokeHeight: 13,
                    strokeWidth: 0,
                    strokeLineCap: 'round',
                    strokeColor: colors[1]
                }]
            },
            {
                x: '2016',
                y: 7132,
                goals: [{
                    name: 'Expected',
                    value: 7500,
                    strokeHeight: 5,
                    strokeColor: colors[1]
                }]
            },
            {
                x: '2017',
                y: 7332,
                goals: [{
                    name: 'Expected',
                    value: 8700,
                    strokeHeight: 5,
                    strokeColor: colors[1]
                }]
            },
            {
                x: '2018',
                y: 6553,
                goals: [{
                    name: 'Expected',
                    value: 7300,
                    strokeHeight: 2,
                    strokeDashArray: 2,
                    strokeColor: colors[1]
                }]
            }
        ]
    }],
    chart: {
        height: 380,
        type: 'bar'
    },
    plotOptions: {
        bar: {
            columnWidth: '60%'
        }
    },
    colors: colors,
    dataLabels: {
        enabled: false
    },
    legend: {
        show: true,
        showForSingleSeries: true,
        customLegendItems: ['Actual', 'Expected'],
        markers: {
            fillColors: colors
        }
    }
};

var chart = new ApexCharts(document.querySelector("#column-with-markers"), options);
chart.render();


//
// COLUMN WITH GROUP LABEL
//

var colors = ["#0acf97", "#fa5c7c"];
var dataColors = $("#column-with-group-label").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}

dayjs.extend(window.dayjs_plugin_quarterOfYear)
var optionsGroup = {
    series: [{
        name: "Sales",
        data: [{
            x: '2020/01/01',
            y: 400
        }, {
            x: '2020/04/01',
            y: 430
        }, {
            x: '2020/07/01',
            y: 448
        }, {
            x: '2020/10/01',
            y: 470
        }, {
            x: '2021/01/01',
            y: 540
        }, {
            x: '2021/04/01',
            y: 580
        }, {
            x: '2021/07/01',
            y: 690
        }, {
            x: '2021/10/01',
            y: 690
        }]
    }],
    chart: {
        type: 'bar',
        height: 380,
        toolbar: {
            show: false,
        }
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '45%',
        },
    },
    colors: colors,
    xaxis: {
        type: 'category',
        labels: {
            formatter: function (val) {
                return "Q" + dayjs(val).quarter()
            }
        },
        group: {
            style: {
                fontSize: '10px',
                fontWeight: 700
            },
            groups: [{
                    title: '2020',
                    cols: 4
                },
                {
                    title: '2021',
                    cols: 4
                }
            ]
        }
    },
    tooltip: {
        x: {
            formatter: function (val) {
                return "Q" + dayjs(val).quarter() + " " + dayjs(val).format("YYYY")
            }
        }
    },
};

var chartGroup = new ApexCharts(document.querySelector("#column-with-group-label"), optionsGroup);
chartGroup.render();


//
// COLUMN CHART WITH ROTATED LABELS & ANNOTATIONS
//
var colors = ["#fa5c7c"];
var dataColors = $("#rotate-labels-column").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}
var options = {
    annotations: {
        points: [{
            x: 'Bananas',
            seriesIndex: 0,
            label: {
                borderColor: '#727cf5',
                offsetY: 0,
                style: {
                    color: '#fff',
                    background: '#727cf5',
                },
                text: 'Bananas are good',
            }
        }]
    },
    chart: {
        height: 380,
        type: 'bar',
        toolbar: {
            show: false
        }
    },
    plotOptions: {
        bar: {
            columnWidth: '50%',
            endingShape: 'rounded'
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        width: 2
    },
    colors: colors,
    series: [{
        name: 'Servings',
        data: [44, 55, 41, 67, 22, 43, 21, 33, 45, 31, 87, 65, 35]
    }],
    grid: {
        borderColor: '#f1f3fa',
        padding: {
            top: 0,
            right: -2,
            bottom: -35,
            left: 10,
        },
    },
    xaxis: {
        labels: {
            rotate: -45
        },
        categories: ['Apples', 'Oranges', 'Strawberries', 'Pineapples', 'Mangoes', 'Bananas',
            'Blackberries', 'Pears', 'Watermelons', 'Cherries', 'Pomegranates', 'Tangerines', 'Papayas'
        ],
    },
    yaxis: {
        title: {
            text: 'Servings',
        },

    },
    fill: {
        type: 'gradient',
        gradient: {
            shade: 'light',
            type: "horizontal",
            shadeIntensity: 0.25,
            gradientToColors: undefined,
            inverseColors: true,
            opacityFrom: 0.85,
            opacityTo: 0.85,
            stops: [50, 0, 100]
        },
    },

}

var chart = new ApexCharts(
    document.querySelector("#rotate-labels-column"),
    options
);

chart.render();


//
// COLUMN CHART WITH NEGATIVE VALUES
//
var colors = ["#727cf5"];
var dataColors = $("#negative-value-column").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}
var options = {
    chart: {
        height: 380,
        type: 'bar',
        toolbar: {
            show: false
        }
    },
    plotOptions: {
        bar: {
            colors: {
                ranges: [{
                    from: -100,
                    to: -46,
                    color: '#fa5c7c'
                }, {
                    from: -45,
                    to: 0,
                    color: '#ffbc00'
                }]
            },
            columnWidth: '80%',
        }
    },
    dataLabels: {
        enabled: false,
    },
    colors: colors,
    series: [{
        name: 'Cash Flow',
        data: [1.45, 5.42, 5.9, -0.42, -12.6, -18.1, -18.2, -14.16, -11.1, -6.09, 0.34, 3.88, 13.07,
            5.8, 2, 7.37, 8.1, 13.57, 15.75, 17.1, 19.8, -27.03, -54.4, -47.2, -43.3, -18.6, -
            48.6, -41.1, -39.6, -37.6, -29.4, -21.4, -2.4
        ]
    }],
    yaxis: {
        title: {
            text: 'Growth',
        },
        labels: {
            formatter: function (y) {
                return y.toFixed(0) + "%";
            }
        }

    },
    xaxis: {
        // TODO: uncomment below and fix the error
        //type: 'datetime',
        categories: [
            '2011-01-01', '2011-02-01', '2011-03-01', '2011-04-01', '2011-05-01', '2011-06-01',
            '2011-07-01', '2011-08-01', '2011-09-01', '2011-10-01', '2011-11-01', '2011-12-01',
            '2012-01-01', '2012-02-01', '2012-03-01', '2012-04-01', '2012-05-01', '2012-06-01',
            '2012-07-01', '2012-08-01', '2012-09-01', '2012-10-01', '2012-11-01', '2012-12-01',
            '2013-01-01', '2013-02-01', '2013-03-01', '2013-04-01', '2013-05-01', '2013-06-01',
            '2013-07-01', '2013-08-01', '2013-09-01'
        ],
        labels: {
            rotate: -90
        }
    },
    grid: {
        row: {
            colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.2
        },
        borderColor: '#f1f3fa'
    }
}

var chart = new ApexCharts(
    document.querySelector("#negative-value-column"),
    options
);

chart.render();


//
// DISTRIBUTED COLUMN CHART
//
var colors = ['#727cf5', '#6c757d', '#0acf97', '#fa5c7c', '#ffbc00', '#39afd1', '#e3eaef', '#313a46'];
var dataColors = $("#distributed-column").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}
var options = {
    chart: {
        height: 380,
        type: 'bar',
        toolbar: {
            show: false
        },
        events: {
            click: function (chart, w, e) {
                console.log(chart, w, e)
            }
        },
    },
    colors: colors,
    plotOptions: {
        bar: {
            columnWidth: '45%',
            distributed: true
        }
    },
    dataLabels: {
        enabled: false,
    },
    series: [{
        data: [21, 22, 10, 28, 16, 21, 13, 30]
    }],
    xaxis: {
        categories: ['John', 'Joe', 'Jake', 'Amber', 'Peter', 'Mary', 'David', 'Lily'],
        labels: {
            style: {
                colors: colors,
                fontSize: '14px'
            }
        }
    },
    legend: {
        offsetY: 7
    },
    grid: {
        row: {
            colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.2
        },
        borderColor: '#f1f3fa'
    }
}

var chart = new ApexCharts(
    document.querySelector("#distributed-column"),
    options
);

chart.render();


//
// Range Column Chart
//
var colors = ["#0acf97", "#39afd1"];
var dataColors = $("#range-column").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}
var options = {
    chart: {
        height: 380,
        type: 'rangeBar',
    },
    plotOptions: {
        bar: {
            horizontal: false
        }
    },
    dataLabels: {
        enabled: true
    },
    legend: {
        offsetY: 7
    },
    colors: colors,
    series: [{
        name: 'Product A',
        data: [{
            x: 'Team A',
            y: [1, 5]
        }, {
            x: 'Team B',
            y: [4, 6]
        }, {
            x: 'Team C',
            y: [5, 8]
        }, {
            x: 'Team D',
            y: [3, 11]
        }]
    }, {
        name: 'Product B',
        data: [{
            x: 'Team A',
            y: [2, 6]
        }, {
            x: 'Team B',
            y: [1, 3]
        }, {
            x: 'Team C',
            y: [7, 8]
        }, {
            x: 'Team D',
            y: [5, 9]
        }]
    }],

}

var chart = new ApexCharts(
    document.querySelector("#range-column"),
    options
);

chart.render();


//
// DYNAMIC LOADED CHART
//


var colors = ['#727cf5', '#6c757d', '#0acf97', '#fa5c7c', '#ffbc00', '#39afd1', '#e3eaef', '#313a46'];
var dataColors = $("#chart-year").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}

Apex = {
    chart: {
        toolbar: {
            show: false
        }
    },
    tooltip: {
        shared: false
    },
    legend: {
        show: false
    }
}

/**
 * Randomize array element order in-place.
 * Using Durstenfeld shuffle algorithm.
 */
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

var arrayData = [{
    y: 400,
    quarters: [{
        x: 'Q1',
        y: 120
    }, {
        x: 'Q2',
        y: 90
    }, {
        x: 'Q3',
        y: 100
    }, {
        x: 'Q4',
        y: 90
    }]
}, {
    y: 430,
    quarters: [{
        x: 'Q1',
        y: 120
    }, {
        x: 'Q2',
        y: 110
    }, {
        x: 'Q3',
        y: 90
    }, {
        x: 'Q4',
        y: 110
    }]
}, {
    y: 448,
    quarters: [{
        x: 'Q1',
        y: 70
    }, {
        x: 'Q2',
        y: 100
    }, {
        x: 'Q3',
        y: 140
    }, {
        x: 'Q4',
        y: 138
    }]
}, {
    y: 470,
    quarters: [{
        x: 'Q1',
        y: 150
    }, {
        x: 'Q2',
        y: 60
    }, {
        x: 'Q3',
        y: 190
    }, {
        x: 'Q4',
        y: 70
    }]
}, {
    y: 540,
    quarters: [{
        x: 'Q1',
        y: 120
    }, {
        x: 'Q2',
        y: 120
    }, {
        x: 'Q3',
        y: 130
    }, {
        x: 'Q4',
        y: 170
    }]
}, {
    y: 580,
    quarters: [{
        x: 'Q1',
        y: 170
    }, {
        x: 'Q2',
        y: 130
    }, {
        x: 'Q3',
        y: 120
    }, {
        x: 'Q4',
        y: 160
    }]
}];

function makeData() {
    var dataSet = shuffleArray(arrayData)

    var dataYearSeries = [{
        x: "2011",
        y: dataSet[0].y,
        color: colors[0],
        quarters: dataSet[0].quarters
    }, {
        x: "2012",
        y: dataSet[1].y,
        color: colors[1],
        quarters: dataSet[1].quarters
    }, {
        x: "2013",
        y: dataSet[2].y,
        color: colors[2],
        quarters: dataSet[2].quarters
    }, {
        x: "2014",
        y: dataSet[3].y,
        color: colors[3],
        quarters: dataSet[3].quarters
    }, {
        x: "2015",
        y: dataSet[4].y,
        color: colors[4],
        quarters: dataSet[4].quarters
    }, {
        x: "2016",
        y: dataSet[5].y,
        color: colors[5],
        quarters: dataSet[5].quarters
    }];

    return dataYearSeries
}

function updateQuarterChart(sourceChart, destChartIDToUpdate) {
    var series = [];
    var seriesIndex = 0;
    var colors = []

    if (sourceChart.w.globals.selectedDataPoints[0]) {
        var selectedPoints = sourceChart.w.globals.selectedDataPoints;
        for (var i = 0; i < selectedPoints[seriesIndex].length; i++) {
            var selectedIndex = selectedPoints[seriesIndex][i];
            var yearSeries = sourceChart.w.config.series[seriesIndex];
            series.push({
                name: yearSeries.data[selectedIndex].x,
                data: yearSeries.data[selectedIndex].quarters
            })
            colors.push(yearSeries.data[selectedIndex].color)
        }

        if (series.length === 0) series = [{
            data: []
        }]

        return ApexCharts.exec(destChartIDToUpdate, 'updateOptions', {
            series: series,
            colors: colors,
            fill: {
                colors: colors
            }
        })
    }
}


var options = {
    series: [{
        data: makeData()
    }],
    chart: {
        id: 'barYear',
        height: 400,
        width: '100%',
        type: 'bar',
        events: {
            dataPointSelection: function (e, chart, opts) {
                var quarterChartEl = document.querySelector("#chart-quarter");
                var yearChartEl = document.querySelector("#chart-year");

                if (opts.selectedDataPoints[0].length === 1) {
                    if (quarterChartEl.classList.contains("active")) {
                        updateQuarterChart(chart, 'barQuarter')
                    } else {
                        yearChartEl.classList.add("chart-quarter-activated")
                        quarterChartEl.classList.add("active");
                        updateQuarterChart(chart, 'barQuarter')
                    }
                } else {
                    updateQuarterChart(chart, 'barQuarter')
                }

                if (opts.selectedDataPoints[0].length === 0) {
                    yearChartEl.classList.remove("chart-quarter-activated")
                    quarterChartEl.classList.remove("active");
                }

            },
            updated: function (chart) {
                updateQuarterChart(chart, 'barQuarter')
            }
        }
    },
    plotOptions: {
        bar: {
            distributed: true,
            horizontal: true,
            barHeight: '75%',
            dataLabels: {
                position: 'bottom'
            }
        }
    },
    dataLabels: {
        enabled: true,
        textAnchor: 'start',
        style: {
            colors: ['#fff']
        },
        formatter: function (val, opt) {
            return opt.w.globals.labels[opt.dataPointIndex]
        },
        offsetX: 0,
        dropShadow: {
            enabled: true
        }
    },

    colors: colors,

    states: {
        normal: {
            filter: {
                type: 'desaturate'
            }
        },
        active: {
            allowMultipleDataPointsSelection: true,
            filter: {
                type: 'darken',
                value: 1
            }
        }
    },
    tooltip: {
        x: {
            show: false
        },
        y: {
            title: {
                formatter: function (val, opts) {
                    return opts.w.globals.labels[opts.dataPointIndex]
                }
            }
        }
    },
    title: {
        text: 'Yearly Results',
        offsetX: 15
    },
    subtitle: {
        text: '(Click on bar to see details)',
        offsetX: 15
    },
    yaxis: {
        labels: {
            show: false
        }
    }
};

var chart = new ApexCharts(document.querySelector("#chart-year"), options);
chart.render();

var optionsQuarter = {
    series: [{
        data: []
    }],
    chart: {
        id: 'barQuarter',
        height: 400,
        width: '100%',
        type: 'bar',
        stacked: true
    },
    plotOptions: {
        bar: {
            columnWidth: '50%',
            horizontal: false
        }
    },
    legend: {
        show: false
    },
    grid: {
        yaxis: {
            lines: {
                show: false,
            }
        },
        xaxis: {
            lines: {
                show: true,
            }
        }
    },
    yaxis: {
        labels: {
            show: false
        }
    },
    title: {
        text: 'Quarterly Results',
        offsetX: 10
    },
    tooltip: {
        x: {
            formatter: function (val, opts) {
                return opts.w.globals.seriesNames[opts.seriesIndex]
            }
        },
        y: {
            title: {
                formatter: function (val, opts) {
                    return opts.w.globals.labels[opts.dataPointIndex]
                }
            }
        }
    }
};

var chartQuarter = new ApexCharts(document.querySelector("#chart-quarter"), optionsQuarter);
chartQuarter.render();


chart.addEventListener('dataPointSelection', function (e, chart, opts) {
    var quarterChartEl = document.querySelector("#chart-quarter");
    var yearChartEl = document.querySelector("#chart-year");

    if (opts.selectedDataPoints[0].length === 1) {
        if (quarterChartEl.classList.contains("active")) {
            updateQuarterChart(chart, 'barQuarter')
        } else {
            yearChartEl.classList.add("chart-quarter-activated")
            quarterChartEl.classList.add("active");
            updateQuarterChart(chart, 'barQuarter')
        }
    } else {
        updateQuarterChart(chart, 'barQuarter')
    }

    if (opts.selectedDataPoints[0].length === 0) {
        yearChartEl.classList.remove("chart-quarter-activated")
        quarterChartEl.classList.remove("active");
    }

})

chart.addEventListener('updated', function (chart) {
    updateQuarterChart(chart, 'barQuarter')
})

document.querySelector("#model").addEventListener("change", function (e) {
    chart.updateSeries([{
        data: makeData()
    }])
})
/**
  
 *  Author:  KT
 * Module/App: Apex Area Charts
 */

//
// BASIC HEATMAP - SINGLE SERIES
//

/*
// this function will generate output in this format
// data = [
    [timestamp, 23],
    [timestamp, 33],
    [timestamp, 12]
    ...
]
*/
function generateData(count, yrange) {
    var i = 0;
    var series = [];
    while (i < count) {
        var x = (i + 1).toString();
        var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

        series.push({
            x: x,
            y: y
        });
        i++;
    }
    return series;
}

var colors = ["#727cf5"];
var dataColors = $("#basic-heatmap").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}
var options = {
    chart: {
        height: 380,
        type: 'heatmap',
    },
    dataLabels: {
        enabled: false
    },
    colors: colors,
    series: [{
        name: 'Metric 1',
        data: generateData(20, {
            min: 0,
            max: 90
        })
    },
    {
        name: 'Metric 2',
        data: generateData(20, {
            min: 0,
            max: 90
        })
    },
    {
        name: 'Metric 3',
        data: generateData(20, {
            min: 0,
            max: 90
        })
    },
    {
        name: 'Metric 4',
        data: generateData(20, {
            min: 0,
            max: 90
        })
    },
    {
        name: 'Metric 5',
        data: generateData(20, {
            min: 0,
            max: 90
        })
    },
    {
        name: 'Metric  6',
        data: generateData(20, {
            min: 0,
            max: 90
        })
    },
    {
        name: 'Metric 7',
        data: generateData(20, {
            min: 0,
            max: 90
        })
    },
    {
        name: 'Metric 8',
        data: generateData(20, {
            min: 0,
            max: 90
        })
    },
    {
        name: 'Metric 9',
        data: generateData(20, {
            min: 0,
            max: 90
        })
    }
    ],
    xaxis: {
        type: 'category',
    },

}

var chart = new ApexCharts(
    document.querySelector("#basic-heatmap"),
    options
);

chart.render();


//
// HEATMAP - MULTIPLE SERIES
//

/*
// this function will generate output in this format
// data = [
    [timestamp, 23],
    [timestamp, 33],
    [timestamp, 12]
    ...
]
*/
function generateData(count, yrange) {
var i = 0;
var series = [];
while (i < count) {
    var x = (i + 1).toString();
    var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

    series.push({
        x: x,
        y: y
    });
    i++;
}
return series;
}

var colors = ["#F3B415", "#F27036", "#663F59", "#6A6E94", "#4E88B4", "#00A7C6", "#18D8D8", '#A9D794','#46AF78'];
var dataColors = $("#multiple-series-heatmap").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}
var options = {
    chart: {
        height: 380,
        type: 'heatmap',
    },
    dataLabels: {
        enabled: false
    },
    colors: colors,
    series: [{
            name: 'Metric 1',
            data: generateData(20, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric 2',
            data: generateData(20, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric 3',
            data: generateData(20, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric 4',
            data: generateData(20, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric 5',
            data: generateData(20, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric 6',
            data: generateData(20, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric 7',
            data: generateData(20, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric 8',
            data: generateData(20, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric 9',
            data: generateData(20, {
                min: 0,
                max: 90
            })
        }
    ],
    xaxis: {
        type: 'category',
    },
}

var chart = new ApexCharts(
document.querySelector("#multiple-series-heatmap"),
options
);

chart.render();


//
// HEATMAP - COLOR RANGE
//

/*
// this function will generate output in this format
// data = [
    [timestamp, 23],
    [timestamp, 33],
    [timestamp, 12]
    ...
]
*/
function generateData(count, yrange) {
var i = 0;
var series = [];
while (i < count) {
    var x = (i + 1).toString();
    var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

    series.push({
        x: x,
        y: y
    });
    i++;
}
return series;
}
var colors = ["#fa6767","#f9bc0d","#44badc","#42d29d"];
var dataColors = $("#color-range-heatmap").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}
var options = {
chart: {
    height: 380,
    type: 'heatmap',
},
plotOptions: {
    heatmap: {
        shadeIntensity: 0.5,

        colorScale: {
            ranges: [{
                    from: -30,
                    to: 5,
                    name: 'Low',
                    color: colors[0]
                },
                {
                    from: 6,
                    to: 20,
                    name: 'Medium',
                    color: colors[1]
                },
                {
                    from: 21,
                    to: 45,
                    name: 'High',
                    color: colors[2]
                },
                {
                    from: 46,
                    to: 55,
                    name: 'Extreme',
                    color: colors[3]
                }
            ]
        }
    }
},
dataLabels: {
    enabled: false
},
series: [{
        name: 'Jan',
        data: generateData(20, {
            min: -30,
            max: 55
        })
    },
    {
        name: 'Feb',
        data: generateData(20, {
            min: -30,
            max: 55
        })
    },
    {
        name: 'Mar',
        data: generateData(20, {
            min: -30,
            max: 55
        })
    },
    {
        name: 'Apr',
        data: generateData(20, {
            min: -30,
            max: 55
        })
    },
    {
        name: 'May',
        data: generateData(20, {
            min: -30,
            max: 55
        })
    },
    {
        name: 'Jun',
        data: generateData(20, {
            min: -30,
            max: 55
        })
    },
    {
        name: 'Jul',
        data: generateData(20, {
            min: -30,
            max: 55
        })
    },
    {
        name: 'Aug',
        data: generateData(20, {
            min: -30,
            max: 55
        })
    },
    {
        name: 'Sep',
        data: generateData(20, {
            min: -30,
            max: 55
        })
    }
],

}

var chart = new ApexCharts(
document.querySelector("#color-range-heatmap"),
options
);

chart.render();


//
// HEATMAP - RANGE WITHOUT SHADES
//

/*
// this function will generate output in this format
// data = [
    [timestamp, 23],
    [timestamp, 33],
    [timestamp, 12]
    ...
]
*/
function generateData(count, yrange) {
var i = 0;
var series = [];
while (i < count) {
    var x = (i + 1).toString();
    var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

    series.push({
        x: x,
        y: y
    });
    i++;
}
return series;
}

var colors = ["#39afd1","#0acf97"];
var dataColors = $("#rounded-heatmap").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}
var options = {
    chart: {
        height: 380,
        type: 'heatmap',
    },
    stroke: {
        width: 0
    },
    plotOptions: {
        heatmap: {
            radius: 30,
            enableShades: false,
            colorScale: {
                ranges: [{
                        from: 0,
                        to: 50,
                        color: colors[0]
                    },
                    {
                        from: 51,
                        to: 100,
                        color: colors[1]
                    },
                ],
            },

        }
    },
    colors: colors,
    dataLabels: {
        enabled: true,
        style: {
            colors: ['#fff']
        }
    },
    series: [{
            name: 'Metric1',
            data: generateData(20, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric2',
            data: generateData(20, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric3',
            data: generateData(20, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric4',
            data: generateData(20, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric5',
            data: generateData(20, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric6',
            data: generateData(20, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric7',
            data: generateData(20, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric8',
            data: generateData(20, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric8',
            data: generateData(20, {
                min: 0,
                max: 90
            })
        }
    ],

    xaxis: {
        type: 'category',
    },
    grid: {
        borderColor: '#f1f3fa'
    }
}

var chart = new ApexCharts(
document.querySelector("#rounded-heatmap"),
options
);

chart.render();
/**
  
 *  Author:  KT
 * Module/App: Apex line Charts
 */

//
// Simple line chart
//
var colors = ["#ffbc00"];
var dataColors = $("#line-chart").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}
var options = {
    chart: {
        height: 380,
        type: 'line',
        zoom: {
            enabled: false
        }
    },
    dataLabels: {
        enabled: false
    },
    colors: colors,
    stroke: {
        width: [4],
        curve: 'straight'
    },
    series: [{
        name: "Desktops",
        data: [30, 41, 35, 51, 49, 62, 69, 91, 126]
    }],
    title: {
        text: 'Product Trends by Month',
        align: 'center'
    },
    grid: {
        row: {
            colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.2
        },
        borderColor: '#f1f3fa',
    },
    labels: series.monthDataSeries1.dates,
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    },
    responsive: [{
        breakpoint: 600,
        options: {
            chart: {
                toolbar: {
                    show: false
                }
            },
            legend: {
                show: false
            },
        }
    }]
}

var chart = new ApexCharts(
    document.querySelector("#line-chart"),
    options
);
chart.render();

//
// Line chart with data labels
//

var colors = ["#727cf5", "#0acf97", "#fa5c7c", "#ffbc00"];
var dataColors = $("#line-chart-datalabel").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}
var options = {
    chart: {
        height: 380,
        type: 'line',
        zoom: {
            enabled: false
        },
        toolbar: {
            show: false
        }
    },
    colors: colors,
    dataLabels: {
        enabled: true,
    },
    stroke: {
        width: [3, 3],
        curve: 'smooth'
    },
    series: [{
        name: "High - 2018",
        data: [28, 29, 33, 36, 32, 32, 33]
    },
    {
        name: "Low - 2018",
        data: [12, 11, 14, 18, 17, 13, 13]
    }
    ],
    title: {
        text: 'Average High & Low Temperature',
        align: 'left'
    },
    grid: {
        row: {
            colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.2
        },
        borderColor: '#f1f3fa'
    },
    markers: {
        style: 'inverted',
        size: 6
    },
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        title: {
            text: 'Month'
        }
    },
    yaxis: {
        title: {
            text: 'Temperature'
        },
        min: 5,
        max: 40
    },
    legend: {
        position: 'top',
        horizontalAlign: 'right',
        floating: true,
        offsetY: -25,
        offsetX: -5
    },
    responsive: [{
        breakpoint: 600,
        options: {
            chart: {
                toolbar: {
                    show: false
                }
            },
            legend: {
                show: false
            },
        }
    }]
}

var chart = new ApexCharts(
    document.querySelector("#line-chart-datalabel"),
    options
);

chart.render();

//
// Zoomable Timeseries
//

var ts2 = 1484418600000;
var dates = [];
var spikes = [5, -5, 3, -3, 8, -8]
for (var i = 0; i < 120; i++) {
    ts2 = ts2 + 86400000;
    var innerArr = [ts2, dataSeries[1][i].value];
    dates.push(innerArr)
}
var colors = ["#fa5c7c"];
var dataColors = $("#line-chart-zoomable").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}
var options = {
    chart: {
        type: 'area',
        stacked: false,
        height: 380,
        zoom: {
            enabled: true
        },
    },
    plotOptions: {
        line: {
            curve: 'smooth',

        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        width: [3]
    },
    series: [{
        name: 'XYZ MOTORS',
        data: dates
    }],
    markers: {
        size: 0,
        style: 'full',
    },
    colors: colors,
    title: {
        text: 'Stock Price Movement',
        align: 'left'
    },
    grid: {
        row: {
            colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.2
        },
        borderColor: '#f1f3fa'
    },
    fill: {
        gradient: {
            enabled: true,
            shadeIntensity: 1,
            inverseColors: false,
            opacityFrom: 0.5,
            opacityTo: 0.1,
            stops: [0, 70, 80, 100]
        },
    },
    yaxis: {
        min: 20000000,
        max: 250000000,
        labels: {
            formatter: function (val) {
                return (val / 1000000).toFixed(0);
            },
        },
        title: {
            text: 'Price'
        },
    },
    xaxis: {
        type: 'datetime',
    },

    tooltip: {
        shared: false,
        y: {
            formatter: function (val) {
                return (val / 1000000).toFixed(0)
            }
        }
    },
    responsive: [{
        breakpoint: 600,
        options: {
            chart: {
                toolbar: {
                    show: false
                }
            },
            legend: {
                show: false
            },
        }
    }]
}

var chart = new ApexCharts(
    document.querySelector("#line-chart-zoomable"),
    options
);

chart.render();


//
// Line Annotations 
//
var colors = ["#39afd1"];
var dataColors = $("#line-chart-annotations").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}
var options = {
    annotations: {
        yaxis: [{
            y: 8200,
            borderColor: '#0acf97',
            label: {
                borderColor: '#0acf97',
                style: {
                    color: '#fff',
                    background: '#0acf97',
                },
                text: 'Support',
            }
        }],
        xaxis: [{
            x: new Date('23 Nov 2017').getTime(),
            borderColor: '#775DD0',
            label: {
                borderColor: '#775DD0',
                style: {
                    color: '#fff',
                    background: '#775DD0',
                },
                text: 'Anno Test',
            }
        }, {
            x: new Date('03 Dec 2017').getTime(),
            borderColor: '#ffbc00',
            label: {
                borderColor: '#ffbc00',
                style: {
                    color: '#fff',
                    background: '#ffbc00',
                },
                orientation: 'horizontal',
                text: 'New Beginning',
            }
        }],
        points: [{
            x: new Date('27 Nov 2017').getTime(),
            y: 8506.9,
            marker: {
                size: 8,
                fillColor: '#fff',
                strokeColor: '#fa5c7c',
                radius: 2
            },
            label: {
                borderColor: '#fa5c7c',
                offsetY: 0,
                style: {
                    color: '#fff',
                    background: '#fa5c7c',
                },

                text: 'Point Annotation',
            }
        }]
    },
    chart: {
        height: 380,
        type: 'line',
        id: 'areachart-2'
    },
    colors: colors,
    dataLabels: {
        enabled: false
    },
    stroke: {
        width: [3],
        curve: 'straight'
    },
    series: [{
        data: series.monthDataSeries1.prices
    }],
    title: {
        text: 'Line with Annotations',
        align: 'left'
    },
    labels: series.monthDataSeries1.dates,
    xaxis: {
        type: 'datetime',
    },
    grid: {
        row: {
            colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.2
        },
        borderColor: '#f1f3fa'
    },
    responsive: [{
        breakpoint: 600,
        options: {
            chart: {
                toolbar: {
                    show: false
                }
            },
            legend: {
                show: false
            },
        }
    }]
}

var chart = new ApexCharts(
    document.querySelector("#line-chart-annotations"),
    options
);

chart.render();

//
// Syncing charts
//
var colors = ["#727cf5"];
var dataColors = $("#line-chart-syncing").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}
var optionsline2 = {
    chart: {
        type: 'line',
        height: 160,
        id: 'fb',
        group: 'social'
    },
    colors: colors,
    stroke: {
        width: [3],
        curve: 'straight'
    },
    toolbar: {
        tools: {
            selection: false
        }
    },
    fill: {
        opacity: 1,
    },
    tooltip: {
        followCursor: false,
        theme: 'dark',
        x: {
            show: false
        },
        marker: {
            show: false
        },
        y: {
            title: {
                formatter: function () {
                    return ''
                }
            }
        }
    },
    series: [{
        data: generateDayWiseTimeSeries(new Date('11 Feb 2017').getTime(), 20, {
            min: 10,
            max: 30
        })
    }],
    xaxis: {
        type: 'datetime'
    },
    grid: {
        row: {
            colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.2
        },
        borderColor: '#f1f3fa'
    }
}

var chartline2 = new ApexCharts(
    document.querySelector("#line-chart-syncing"),
    optionsline2
);

chartline2.render();

// 
// Syncing Chart-2
//

var colors = ["#6c757d"];
var dataColors = $("#line-chart-syncing2").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}
var options = {
    chart: {
        height: 200,
        type: 'line',
        id: 'yt',
        group: 'social'
    },
    colors: colors,
    dataLabels: {
        enabled: false
    },
    toolbar: {
        tools: {
            selection: false
        }
    },
    tooltip: {
        followCursor: false,
        theme: 'dark',
        x: {
            show: false
        },
        marker: {
            show: false
        },
        y: {
            title: {
                formatter: function () {
                    return ''
                }
            }
        }
    },
    stroke: {
        width: [3],
        curve: 'smooth'
    },

    series: [{
        data: generateDayWiseTimeSeries(new Date('11 Feb 2017').getTime(), 20, {
            min: 10,
            max: 60
        })
    }],
    fill: {
        gradient: {
            enabled: true,
            opacityFrom: 0.6,
            opacityTo: 0.8,
        }
    },
    legend: {
        position: 'top',
        horizontalAlign: 'left'
    },
    xaxis: {
        type: 'datetime'
    },
    grid: {
        row: {
            colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.2
        },
        borderColor: '#f1f3fa'
    }
}

var chart = new ApexCharts(
    document.querySelector("#line-chart-syncing2"),
    options
);

chart.render();

/*
  // this function will generate output in this format
  // data = [
      [timestamp, 23],
      [timestamp, 33],
      [timestamp, 12]
      ...
  ]
*/
function generateDayWiseTimeSeries(baseval, count, yrange) {
    var i = 0;
    var series = [];
    while (i < count) {
        var x = baseval;
        var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

        series.push([x, y]);
        baseval += 86400000;
        i++;
    }
    return series;
}


//
// Gradient Line Chart
//

var options = {
    chart: {
        height: 374,
        type: 'line',
        shadow: {
            enabled: false,
            color: '#bbb',
            top: 3,
            left: 2,
            blur: 3,
            opacity: 1
        },
    },
    forecastDataPoints: {
        count: 7
    },
      stroke: {
        width: 5,
        curve: 'smooth'
    },
    series: [{
        name: 'Likes',
        data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5]
    }],
    xaxis: {
        type: 'datetime',
        categories: ['1/11/2000', '2/11/2000', '3/11/2000', '4/11/2000', '5/11/2000', '6/11/2000', '7/11/2000', '8/11/2000', '9/11/2000', '10/11/2000', '11/11/2000', '12/11/2000', '1/11/2001', '2/11/2001', '3/11/2001', '4/11/2001', '5/11/2001', '6/11/2001'],
    },
    title: {
        text: 'Social Media',
        align: 'left',
        style: {
            fontSize: "16px",
            color: '#666'
        }
    },
    fill: {
        type: 'gradient',
        gradient: {
            shade: 'dark',
            gradientToColors: ['#fa5c7c'],
            shadeIntensity: 1,
            type: 'horizontal',
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100, 100, 100]
        },
    },
    markers: {
        size: 4,
        opacity: 0.9,
        colors: ["#ffbc00"],
        strokeColor: "#fff",
        strokeWidth: 2,
        style: 'inverted', // full, hollow, inverted
        hover: {
            size: 7,
        }
    },
    yaxis: {
        min: -10,
        max: 40,
        title: {
            text: 'Engagement',
        },
    },
    grid: {
        row: {
            colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.2
        },
        borderColor: '#f1f3fa'
    },
    responsive: [{
        breakpoint: 600,
        options: {
            chart: {
                toolbar: {
                    show: false
                }
            },
            legend: {
                show: false
            },
        }
    }]
}

var chart = new ApexCharts(
    document.querySelector("#line-chart-gradient"),
    options
);

chart.render();

//
// Missing Data
//
var colors = ["#ffbc00", "#0acf97", "#39afd1"];
var dataColors = $("#line-chart-missing").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}
var options = {
    chart: {
        height: 380,
        type: 'line',
        zoom: {
            enabled: false
        },
        animations: {
            enabled: false
        }
    },
    stroke: {
        width: [5, 5, 4],
        curve: 'straight'
    },

    series: [{
        name: 'Peter',
        data: [5, 5, 10, 8, 7, 5, 4, null, null, null, 10, 10, 7, 8, 6, 9]
    }, {
        name: 'Johnny',
        data: [10, 15, null, 12, null, 10, 12, 15, null, null, 12, null, 14, null, null, null]
    }, {
        name: 'David',
        data: [null, null, null, null, 3, 4, 1, 3, 4, 6, 7, 9, 5, null, null, null]
    }],
    colors: colors,
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    grid: {
        row: {
            colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.2
        },
        borderColor: '#f1f3fa',
        padding: {
            bottom: 5
        }
    },
    legend: {
        offsetY: 7,
    }
}

var chart = new ApexCharts(
    document.querySelector("#line-chart-missing"),
    options
);

chart.render();

//
// Dashed line chart
//
var colors = ["#6c757d", "#0acf97", "#39afd1"];
var dataColors = $("#line-chart-dashed").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}
var options = {
    chart: {
        height: 380,
        type: 'line',
        zoom: {
            enabled: false
        },
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        width: [3, 5, 3],
        curve: 'straight',
        dashArray: [0, 8, 5]
    },
    series: [{
        name: "Session Duration",
        data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
    },
    {
        name: "Page Views",
        data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]
    },
    {
        name: 'Total Visits',
        data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47]
    }
    ],
    markers: {
        size: 0,
        style: 'hollow', // full, hollow, inverted
    },
    xaxis: {
        categories: ['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan', '08 Jan',
            '09 Jan', '10 Jan', '11 Jan', '12 Jan'
        ],
    },
    colors: colors,
    tooltip: {
        y: {
            title: {
                formatter: function (val) {
                    if (val === 'Session Duration') return val + " (mins)"
                    else if (val === 'Page Views') return val + " per session"
                    return val;
                }
            }
        }
    },
    grid: {
        borderColor: '#f1f3fa',
    },
    legend: {
        offsetY: 7,
    }
}

var chart = new ApexCharts(
    document.querySelector("#line-chart-dashed"),
    options
);

chart.render();

// 
// Stepline Charts
//

var ts2 = 1484418600000;
var data = [];
var spikes = [5, -5, 3, -3, 8, -8]
for (var i = 0; i < 30; i++) {
    ts2 = ts2 + 86400000;
    var innerArr = [ts2, dataSeries[1][i].value];
    data.push(innerArr)
}
var colors = ["#0acf97"];
var dataColors = $("#line-chart-stepline").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}
var options = {
    chart: {
        type: 'line',
        height: 344
    },
    stroke: {
        curve: 'stepline',
    },
    dataLabels: {
        enabled: false
    },
    series: [{
        data: [34, 44, 54, 21, 12, 43, 33, 23, 66, 66, 58]
    }],
    colors: colors,
    title: {
        text: 'Stepline Chart',
        align: 'left'
    },
    markers: {
        hover: {
            sizeOffset: 4
        }
    },

}

var chart = new ApexCharts(
    document.querySelector("#line-chart-stepline"),
    options
);

chart.render();




var colors = ["#ffbc00"];
var dataColors = $("#chart-line2").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}

/*
    // this function will generate output in this format
    // data = [
        [timestamp, 23],
        [timestamp, 33],
        [timestamp, 12]
        ...
    ]
  */
    function generateDayWiseTimeSeries(baseval, count, yrange) {
        var i = 0;
        var series = [];
        while (i < count) {
          var x = baseval;
          var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
      
          series.push([x, y]);
          baseval += 86400000;
          i++;
        }
        return series;
      }
      
      var data = generateDayWiseTimeSeries(new Date('11 Feb 2017').getTime(), 185, {
        min: 30,
        max: 90
      })
var options = {
    series: [{
    data: data
  }],
    chart: {
    id: 'chart2',
    type: 'line',
    height: 230,
    toolbar: {
      autoSelected: 'pan',
      show: false
    }
  },
  colors: colors,
  stroke: {
    width: 3
  },
  dataLabels: {
    enabled: false
  },
  fill: {
    opacity: 1,
  },
  markers: {
    size: 0
  },
  xaxis: {
    type: 'datetime'
  }
  };

  var chart = new ApexCharts(document.querySelector("#chart-line2"), options);
  chart.render();


  var colors = ["#ffbc00"];
    var dataColors = $("#chart-line").data('colors');
    if (dataColors) {
        colors = dataColors.split(",");
    }

  var optionsLine = {
    series: [{
    data: data
  }],
    chart: {
    id: 'chart1',
    height: 130,
    type: 'area',
    brush:{
      target: 'chart2',
      enabled: true
    },
    selection: {
      enabled: true,
      xaxis: {
        min: new Date('19 Jun 2017').getTime(),
        max: new Date('14 Aug 2017').getTime()
      }
    },
  },
  colors: colors,
  fill: {
    type: 'gradient',
    gradient: {
      opacityFrom: 0.91,
      opacityTo: 0.1,
    }
  },
  xaxis: {
    type: 'datetime',
    tooltip: {
      enabled: false
    }
  },
  yaxis: {
    tickAmount: 2
  }
  };

  var chartLine = new ApexCharts(document.querySelector("#chart-line"), optionsLine);
  chartLine.render();


//
// Realtime chart
//

'use strict';

var lastDate = 0;
var data = [];
function getDayWiseTimeSeries(baseval, count, yrange) {
    var i = 0;
    while (i < count) {
        var x = baseval;
        var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

        data.push({
            x: x, y: y
        });
        lastDate = baseval;
        baseval += 86400000;
        i++;
    }
}

getDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 10, {
    min: 10,
    max: 90
});

function getNewSeries(baseval, yrange) {
    var newDate = baseval + 86400000;
    lastDate = newDate;
    data.push({
        x: newDate,
        y: Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min
    });
}

function resetData() {
    data = data.slice(data.length - 10, data.length);
}

var colors = ["#39afd1"];
var dataColors = $("#line-chart-realtime").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}
var options = {
    chart: {
        height: 350,
        type: 'line',
        animations: {
            enabled: true,
            easing: 'linear',
            dynamicAnimation: {
                speed: 2000
            }
        },
        toolbar: {
            show: false
        },
        zoom: {
            enabled: false
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth',
        width: [3],
    },
    colors: colors,
    series: [{
        data: data
    }],
    markers: {
        size: 0
    },
    xaxis: {
        type: 'datetime',
        range: 777600000
    },
    yaxis: {
        max: 100
    },
    legend: {
        show: false
    },
    grid: {
        borderColor: '#f1f3fa',
    }
};

var chart = new ApexCharts(document.querySelector("#line-chart-realtime"), options);

chart.render();

var dataPointsLength = 10;

window.setInterval(function () {
    getNewSeries(lastDate, {
        min: 10,
        max: 90
    });

    chart.updateSeries([{
        data: data
    }]);
}, 2000);

// every 60 seconds, we reset the data 
window.setInterval(function () {
    resetData();
    chart.updateSeries([{
        data: data
    }], false, true);
}, 60000);
/**
  
 *  Author:  KT
 * Module/App: Apex Mixed Charts
 */

//
// LINE & COLUMN CHART
//
var colors = ["#727cf5", "#0acf97"];
var dataColors = $("#line-column-mixed").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}
var options = {
    chart: {
        height: 380,
        type: 'line',
        toolbar: {
            show: false
        }
    },
    series: [{
        name: 'Website Blog',
        type: 'column',
        data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
    }, {
        name: 'Social Media',
        type: 'line',
        data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
    }],
    stroke: {
        width: [0, 4]
    },
    labels: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001', '12 Jan 2001'],
    xaxis: {
        type: 'datetime'
    },
    colors: colors,
    yaxis: [{
        title: {
            text: 'Website Blog',
        },

    }, {
        opposite: true,
        title: {
            text: 'Social Media'
        }
    }],
    legend: {
        offsetY: 7,
    },
    grid: {
        borderColor: '#f1f3fa',
        padding: {
            bottom: 5
        }
      }

}

var chart = new ApexCharts(
    document.querySelector("#line-column-mixed"),
    options
);

chart.render();


//
// MULTIPLE Y-AXIS CHART
//
var colors = ["#727cf5", "#39afd1", "#fa5c7c"];
var dataColors = $("#multiple-yaxis-mixed").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}
var options = {
    chart: {
        height: 380,
        type: 'line',
        stacked: false,
        toolbar: {
            show: false
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        width: [0, 0, 3]
    },
    series: [{
        name: 'Income',
        type: 'column',
        data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6]
    }, {
        name: 'Cashflow',
        type: 'column',
        data: [1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5]
    }, {
        name: 'Revenue',
        type: 'line',
        data: [20, 29, 37, 36, 44, 45, 50, 58]
    }],
    colors: colors,
    xaxis: {
        categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
    },
    yaxis: [
        {
            axisTicks: {
                show: true,
            },
            axisBorder: {
                show: true,
                color: colors[0]
            },
            labels: {
                style: {
                    color: colors[0]
                }
            },
            title: {
                text: "Income (thousand crores)"
            },
        },

        {
            axisTicks: {
                show: true,
            },
            axisBorder: {
                show: true,
                color: colors[1]
            },
            labels: {
                style: {
                    color: colors[1]
                },
                offsetX: 10
            },
            title: {
                text: "Operating Cashflow (thousand crores)",
            },
        },
        {
            opposite: true,
            axisTicks: {
                show: true,
            },
            axisBorder: {
                show: true,
                color: colors[2]
            },
            labels: {
                style: {
                    color: colors[2]
                }
            },
            title: {
                text: "Revenue (thousand crores)"
            }
        },

    ],
    tooltip: {
        followCursor: true,
        y: {
            formatter: function (y) {
                if (typeof y !== "undefined") {
                    return y + " thousand crores"
                }
                return y;
            }
        }
    },
    grid: {
        borderColor: '#f1f3fa',
        padding: {
            bottom: 5
        }
    },
    legend: {
        offsetY: 7,
    },
    responsive: [{
        breakpoint: 600,
        options: {
            yaxis: {
                show: false
            },
            legend: {
                show: false
            }
        }
    }]
}

var chart = new ApexCharts(
    document.querySelector("#multiple-yaxis-mixed"),
    options
);

chart.render();


//
// LINE & AREA CHART
//
var colors = ["#0acf97", "#fa5c7c"];
var dataColors = $("#line-area-mixed").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}
var options = {
    chart: {
        height: 380,
        type: 'line',
        toolbar: {
            show: false
        }
    },
    stroke: {
        curve: 'smooth',
        width: 2
    },
    series: [{
        name: 'Team A',
        type: 'area',
        data: [44, 55, 31, 47, 31, 43, 26, 41, 31, 47, 33]
    }, {
        name: 'Team B',
        type: 'line',
        data: [55, 69, 45, 61, 43, 54, 37, 52, 44, 61, 43]
    }],
    fill: {
        type: 'solid',
        opacity: [0.35, 1],
    },
    labels: ['Dec 01', 'Dec 02', 'Dec 03', 'Dec 04', 'Dec 05', 'Dec 06', 'Dec 07', 'Dec 08', 'Dec 09 ', 'Dec 10', 'Dec 11'],
    markers: {
        size: 0
    },
    legend: {
        offsetY: 7,
    },
    colors: colors,
    yaxis: [
        {
            title: {
                text: 'Series A',
            },
        },
        {
            opposite: true,
            title: {
                text: 'Series B',
            },
        },
    ],
    tooltip: {
        shared: true,
        intersect: false,
        y: {
            formatter: function (y) {
                if (typeof y !== "undefined") {
                    return y.toFixed(0) + " points";
                }
                return y;

            }
        }
    },
    grid: {
        borderColor: '#f1f3fa',
        padding: {
            bottom: 5
        }
    },
    responsive: [{
        breakpoint: 600,
        options: {
            yaxis: {
                show: false
            },
            legend: {
                show: false
            }
        }
    }]
}

var chart = new ApexCharts(
    document.querySelector("#line-area-mixed"),
    options
);

chart.render();


//
// LINE, COLUMN & AREA CHART
//
var colors = ["#727cf5", "#39afd1", "#fa5c7c"];
var dataColors = $("#all-mixed").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}
var options = {
    chart: {
        height: 380,
        type: 'line',
        stacked: false,
        toolbar: {
            show: false
        }
    },
    stroke: {
        width: [0, 2, 4],
        curve: 'smooth'
    },
    plotOptions: {
        bar: {
            columnWidth: '50%'
        }
    },
    colors: colors,
    series: [{
        name: 'Team A',
        type: 'column',
        data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
    }, {
        name: 'Team B',
        type: 'area',
        data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
    }, {
        name: 'Team C',
        type: 'line',
        data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
    }],
    fill: {
        opacity: [0.85, 0.25, 1],
        gradient: {
            inverseColors: false,
            shade: 'light',
            type: "vertical",
            opacityFrom: 0.85,
            opacityTo: 0.55,
            stops: [0, 100, 100, 100]
        }
    },
    labels: ['01/01/2003', '02/01/2003', '03/01/2003', '04/01/2003', '05/01/2003', '06/01/2003', '07/01/2003', '08/01/2003', '09/01/2003', '10/01/2003', '11/01/2003'],
    markers: {
        size: 0
    },
    legend: {
        offsetY: 7,
    },
    xaxis: {
        type: 'datetime'
    },
    yaxis: {
        title: {
            text: 'Points',
        },
    },
    tooltip: {
        shared: true,
        intersect: false,
        y: {
            formatter: function (y) {
                if (typeof y !== "undefined") {
                    return y.toFixed(0) + " points";
                }
                return y;

            }
        }
    },
    grid: {
        borderColor: '#f1f3fa',
        padding: {
            bottom: 5
        }
    }
}

var chart = new ApexCharts(
    document.querySelector("#all-mixed"),
    options
);

chart.render();
/**
  
 *  Author:  KT
 * Module/App: Apex Pie Charts
 */

//
// SIMPLE PIE CHART
//
var colors = ["#727cf5", "#6c757d","#0acf97", "#fa5c7c","#e3eaef"];
var dataColors = $("#simple-pie").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}
var options = {
    chart: {
        height: 320,
        type: 'pie',
    }, 
    series: [44, 55, 41, 17, 15],
    labels: ["Series 1", "Series 2", "Series 3", "Series 4", "Series 5"],
    colors: colors,
    legend: {
        show: true,
        position: 'bottom',
        horizontalAlign: 'center',
        verticalAlign: 'middle',
        floating: false,
        fontSize: '14px',
        offsetX: 0,
        offsetY: 7
    },
    responsive: [{
        breakpoint: 600,
        options: {
            chart: {
                height: 240
            },
            legend: {
                show: false
            },
        }
    }]

}

var chart = new ApexCharts(
    document.querySelector("#simple-pie"),
    options
);

chart.render();


//
// SIMPLE DONUT CHART
//
var colors = ["#39afd1", "#ffbc00", "#313a46", "#fa5c7c", "#0acf97"];
var dataColors = $("#simple-donut").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}
var options = {
    chart: {
        height: 320,
        type: 'donut',
    }, 
    series: [44, 55, 41, 17, 15],
    legend: {
        show: true,
        position: 'bottom',
        horizontalAlign: 'center',
        verticalAlign: 'middle',
        floating: false,
        fontSize: '14px',
        offsetX: 0,
        offsetY: 7
    },
    labels: ["Series 1", "Series 2", "Series 3", "Series 4", "Series 5"],
    colors: colors,
    responsive: [{
        breakpoint: 600,
        options: {
            chart: {
                height: 240
            },
            legend: {
                show: false
            },
        }
    }]
}

var chart = new ApexCharts(
    document.querySelector("#simple-donut"),
    options
);

chart.render();


//
// MONOCHROME PIE CHART
//
var options = {
    chart: {
        height: 320,
        type: 'pie',
    }, 
    series: [25, 15, 44, 55, 41, 17],
    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    legend: {
        show: true,
        position: 'bottom',
        horizontalAlign: 'center',
        verticalAlign: 'middle',
        floating: false,
        fontSize: '14px',
        offsetX: 0,
        offsetY: 7
    },
    theme: {
        monochrome: {
            enabled: true
        }
    },
    responsive: [{
        breakpoint: 600,
        options: {
            chart: {
                height: 240
            },
            legend: {
                show: false
            },
        }
    }]
}

var chart = new ApexCharts(
    document.querySelector("#monochrome-pie"),
    options
);

chart.render();

//
// GRADIENT DONUT CHART
//
var colors = ["#727cf5", "#6c757d","#0acf97", "#fa5c7c","#e3eaef"];
var dataColors = $("#gradient-donut").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}
var options = {
    chart: {
        height: 320,
        type: 'donut',
    }, 
    series: [44, 55, 41, 17, 15],
    legend: {
        show: true,
        position: 'bottom',
        horizontalAlign: 'center',
        verticalAlign: 'middle',
        floating: false,
        fontSize: '14px',
        offsetX: 0,
        offsetY: 7
    },
    labels: ["Series 1", "Series 2", "Series 3", "Series 4", "Series 5"],
    colors: colors,
    responsive: [{
        breakpoint: 600,
        options: {
            chart: {
                height: 240
            },
            legend: {
                show: false
            },
        }
    }],
    fill: {
        type: 'gradient'
    }
}

var chart = new ApexCharts(
    document.querySelector("#gradient-donut"),
    options
);

chart.render();


//
// PATTERNED DONUT CHART
//
var colors = ["#39afd1", "#ffbc00", "#313a46", "#fa5c7c", "#0acf97"];
var dataColors = $("#patterned-donut").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}
var options = {
    chart: {
        height: 320,
        type: 'donut',
        dropShadow: {
          enabled: true,
          color: '#111',
          top: -1,
          left: 3,
          blur: 3,
          opacity: 0.2
        }
    },
    stroke: {
        show: true,
        width: 2,
    },
    series: [44, 55, 41, 17, 15],
    colors: colors,
    labels: ["Comedy", "Action", "SciFi", "Drama", "Horror"],
    dataLabels: {
        dropShadow: {
            blur: 3,
            opacity: 0.8
        }
    },
    fill: {
    type: 'pattern',
      opacity: 1,
      pattern: {
        enabled: true,
        style: ['verticalLines', 'squares', 'horizontalLines', 'circles','slantedLines'], 
      },
    },
    states: {
      hover: {
        enabled: false
      }
    },
    legend: {
        show: true,
        position: 'bottom',
        horizontalAlign: 'center',
        verticalAlign: 'middle',
        floating: false,
        fontSize: '14px',
        offsetX: 0,
        offsetY: 7
    },
    responsive: [{
        breakpoint: 600,
        options: {
            chart: {
                height: 240
            },
            legend: {
                show: false
            },
        }
    }]
}

var chart = new ApexCharts(
    document.querySelector("#patterned-donut"),
    options
);

chart.render();


//
// PIE CHART WITH IMAGE FILL
//
var colors = ["#39afd1", "#ffbc00", "#727cf5", "#0acf97"];
var dataColors = $("#image-pie").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}
var options = {
    chart: {
        height: 320,
        type: 'pie',
    },
    labels: ["Series 1", "Series 2", "Series 3", "Series 4"],
    colors: colors,
    series: [44, 33, 54, 45],
    fill: {
        type: 'image',
        opacity: 0.85,
        image: {
             src: ['assets/images/small/small-1.jpg', 'assets/images/small/small-2.jpg', 'assets/images/small/small-3.jpg', 'assets/images/small/small-4.jpg'],
            width: 25,
            imagedHeight: 25
        },
    },
    stroke: {
        width: 4
    },
    dataLabels: {
        enabled: false
    },
    legend: {
        show: true,
        position: 'bottom',
        horizontalAlign: 'center',
        verticalAlign: 'middle',
        floating: false,
        fontSize: '14px',
        offsetX: 0,
        offsetY: 7
    },
    responsive: [{
        breakpoint: 600,
        options: {
            chart: {
                height: 240
            },
            legend: {
                show: false
            },
        }
    }]
}

var chart = new ApexCharts(
    document.querySelector("#image-pie"),
    options
);

chart.render();


//
// DONUT UPDATE
//
var colors = ["#727cf5", "#6c757d","#0acf97", "#fa5c7c"];
var dataColors = $("#update-donut").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}
var options = {
    chart: {
        height: 320,
        type: 'donut',
    },
    dataLabels: {
        enabled: false
    },
    series: [44, 55, 13, 33],
    colors: colors,
    legend: {
        show: true,
        position: 'bottom',
        horizontalAlign: 'center',
        verticalAlign: 'middle',
        floating: false,
        fontSize: '14px',
        offsetX: 0,
        offsetY: 7
    },
    responsive: [{
        breakpoint: 600,
        options: {
            chart: {
                height: 240
            },
            legend: {
                show: false
            },
        }
    }]
}

var chart = new ApexCharts(
    document.querySelector("#update-donut"),
    options
);

chart.render();

function appendData() {
    var arr = chart.w.globals.series.map(function () {
        return Math.floor(Math.random() * (100 - 1 + 1)) + 1;
    });
    arr.push(Math.floor(Math.random() * (100 - 1 + 1)) + 1);
    return arr;
}

function removeData() {
    var arr = chart.w.globals.series.map(function () {
        return Math.floor(Math.random() * (100 - 1 + 1)) + 1;
    });
    arr.pop();
    return arr;
}

function randomize() {
    return chart.w.globals.series.map(function () {
        return Math.floor(Math.random() * (100 - 1 + 1)) + 1;
    });
}

function reset() {
    return options.series;
}

document.querySelector("#randomize").addEventListener("click", function () {
    chart.updateSeries(randomize());
});

document.querySelector("#add").addEventListener("click", function () {
    chart.updateSeries(appendData());
});

document.querySelector("#remove").addEventListener("click", function () {
    chart.updateSeries(removeData());
});

document.querySelector("#reset").addEventListener("click", function () {
    chart.updateSeries(reset());
});
/**
  
 *  Author:  KT
 * Module/App: Apex Bar Charts
 */

//
// BASIC POLAR AREA CHART
//

var colors = ["#727cf5", "#0acf97", "#fa5c7c"];
var dataColors = $("#basic-polar-area").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}

var options = {
    series: [14, 23, 21, 17, 15, 10],
    chart: {
        height: 380,
        type: 'polarArea',
    },
    stroke: {
        colors: ['#fff']
    },
    fill: {
        opacity: 0.8
    },
    labels: ['Vote A', 'Vote B', 'Vote C', 'Vote D', 'Vote E', 'Vote F'],
    legend: {
        position: 'bottom'
    },
    colors: colors,
    responsive: [{
        breakpoint: 480,
        options: {
            chart: {
                width: 200
            },
            legend: {
                position: 'bottom'
            }
        }
    }]
};

var chart = new ApexCharts(document.querySelector("#basic-polar-area"), options);
chart.render();

//
// MONOCHROME POLAR AREA
//
var options = {
    series: [42, 47, 52, 58, 65],
    chart: {
        height: 380,
        type: 'polarArea'
    },
    labels: ['Rose A', 'Rose B', 'Rose C', 'Rose D', 'Rose E'],
    fill: {
        opacity: 1
    },
    stroke: {
        width: 1
    },
    yaxis: {
        show: false
    },
    legend: {
        position: 'bottom'
    },
    plotOptions: {
        polarArea: {
            rings: {
                strokeWidth: 0
            },
            spokes: {
                strokeWidth: 0
            },
        }
    },
    theme: {
        monochrome: {
            enabled: true,
            shadeTo: 'light',
            color: '#727cf5',
            shadeIntensity: 0.6
        }
    }
};

var chart = new ApexCharts(document.querySelector("#monochrome-polar-area"), options);
chart.render();
/**
  
 *  Author:  KT
 * Module/App: Apex Radar Charts
 */

 //
 // BASIC RADAR CHART
 //
 var colors = ["#727cf5"];
 var dataColors = $("#basic-radar").data('colors');
 if (dataColors) {
     colors = dataColors.split(",");
 }
 var options = {
    chart: {
        height: 350,
        type: 'radar',
    },
    series: [{
        name: 'Series 1',
        data: [80, 50, 30, 40, 100, 20],
    }],
    colors: colors,
    labels: ['January', 'February', 'March', 'April', 'May', 'June']
}

var chart = new ApexCharts(
    document.querySelector("#basic-radar"),
    options
);

chart.render();


 //
 // RADAR WITH POLYGON-FILL
 //
 var colors = ["#FF4560"];
 var dataColors = $("#radar-polygon").data('colors');
 if (dataColors) {
     colors = dataColors.split(",");
 }
 var options = {
    chart: {
        height: 350,
        type: 'radar',
    },
    series: [{
        name: 'Series 1',
        data: [20, 100, 40, 30, 50, 80, 33],
    }],
    labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    plotOptions: {
        radar: {
            size: 140,
        }
    },
    colors: colors,
    markers: {
        size: 4,
        colors: ['#fff'],
        strokeColor: colors,
        strokeWidth: 2,
    },
    tooltip: {
        y: {
            formatter: function(val) {
                return val
            }   
        }
    },
    yaxis: {
        tickAmount: 7,
        labels: {
            formatter: function(val, i) {
                if(i % 2 === 0) {
                    return val
                } else {
                    return ''
                }
            }
        }
    }
}

var chart = new ApexCharts(
    document.querySelector("#radar-polygon"),
    options
);

chart.render();

 //
 // RADAR – MULTIPLE SERIES
 //
 var colors = ["#727cf5","#02a8b5","#fd7e14"];
 var dataColors = $("#radar-multiple-series").data('colors');
 if (dataColors) {
     colors = dataColors.split(",");
 }
var options = {
    chart: {
        height: 350,
        type: 'radar'
    },
    series: [{
        name: 'Series 1',
        data: [80, 50, 30, 40, 100, 20],
    }, {
        name: 'Series 2',
        data: [20, 30, 40, 80, 20, 80],
    }, {
        name: 'Series 3',
        data: [44, 76, 78, 13, 43, 10],
    }],
    stroke: {
        width: 0
    },
    fill: {
        opacity: 0.4
    },
    markers: {
        size: 0
    },
    legend: {
        offsetY: -10,
    },
    colors: colors,
    labels: ['2011', '2012', '2013', '2014', '2015', '2016']
}

var chart = new ApexCharts(
    document.querySelector("#radar-multiple-series"),
    options
);

chart.render();

function update() {

    function randomSeries() {
        var arr = []
        for(var i = 0; i < 6; i++) {
            arr.push(Math.floor(Math.random() * 100)) 
        }

        return arr
    }
    

    chart.updateSeries([{
        name: 'Series 1',
        data: randomSeries(),
    }, {
        name: 'Series 2',
        data: randomSeries(),
    }, {
        name: 'Series 3',
        data: randomSeries(),
    }])
}

/**
  
 *  Author:  KT
 * Module/App: Apex RadialBar Charts
 */

//
// BASIC RADIALBAR CHART
//
var colors = ["#39afd1"];
var dataColors = $("#basic-radialbar").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}
var options = {
    chart: {
        height: 320,
        type: 'radialBar',
    },
    plotOptions: {
        radialBar: {
            hollow: {
                size: '70%',
            },
            track: {
                background: "rgba(170,184,197, 0.2)"
            }
        },
    },
    colors: colors,
    series: [70],
    labels: ['CRICKET'],

}

var chart = new ApexCharts(
    document.querySelector("#basic-radialbar"),
    options
);

chart.render();


//
// MULTIPLE RADIALBARS
//
var colors = ["#6c757d", "#ffbc00", "#727cf5", "#0acf97"];
var dataColors = $("#multiple-radialbar").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}
var options = {
    chart: {
        height: 320,
        type: 'radialBar',
    },
    plotOptions: {
        circle: {
            dataLabels: {
                showOn: 'hover'
            }
        },
        radialBar: {
            track: {
                background: "rgba(170,184,197, 0.2)"
            }
        }
    },
    colors: colors,
    series: [44, 55, 67, 83],
    labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
    responsive: [{
        breakpoint: 380,
        options: {
            chart: {
                height: 260,
            }
        }
    }]

}

var chart = new ApexCharts(
    document.querySelector("#multiple-radialbar"),
    options
);

chart.render();


//
// CIRCLE CHART - CUSTOM ANGLE
//
var colors = ['#0acf97', '#727cf5'];
var dataColors = $("#circle-angle-radial").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}
var options = {
    chart: {
        height: 380,
        type: 'radialBar',
    },
    plotOptions: {
        radialBar: {
            offsetY: -30,
            startAngle: 0,
            endAngle: 270,
            hollow: {
                margin: 5,
                size: '30%',
                background: 'transparent',
                image: undefined,
            },
            track: {
                background: "rgba(170,184,197, 0.2)"
            },
            dataLabels: {
                name: {
                    show: false,

                },
                value: {
                    show: false,
                }
            }
        }
    },
    colors: colors,
    series: [76, 67, 61, 90],
    labels: ['Vimeo', 'Messenger', 'Facebook', 'LinkedIn'],
    legend: {
        show: true,
        floating: true,
        fontSize: '13px',
        position: 'left',
        offsetX: 10,
        offsetY: 10,
        labels: {
            useSeriesColors: true,
        },
        markers: {
            size: 0
        },
        formatter: function (seriesName, opts) {
            return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
        },
        itemMargin: {
            horizontal: 1,
        }
    },
    responsive: [{
        breakpoint: 480,
        options: {
            legend: {
                show: false
            }
        }
    }]
}

var chart = new ApexCharts(
    document.querySelector("#circle-angle-radial"),
    options
);

chart.render();


//
// CIRCLE CHART WITH IMAGE
//

var options = {
    chart: {
        height: 360,
        type: 'radialBar',
    },
    fill: {
        type: 'image',
        image: {
            src: ['assets/images/small/small-2.jpg'],
        }
    },
    plotOptions: {
        radialBar: {
            hollow: {
                size: '70%',
            }
        },
    },
    series: [70],
    stroke: {
        lineCap: 'round'
    },
    labels: ['Volatility'],
    responsive: [{
        breakpoint: 380,
        options: {
            chart: {
                height: 280
            }
        }
    }]
}

var chart = new ApexCharts(
    document.querySelector("#image-radial"),
    options
);

chart.render();


//
// STROKED CIRCULAR GUAGE
//
var colors = ["#727cf5"];
var dataColors = $("#stroked-guage-radial").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}
var options = {
    chart: {
        height: 380,
        type: 'radialBar',
    },
    plotOptions: {
        radialBar: {
            startAngle: -135,
            endAngle: 135,
            dataLabels: {
                name: {
                    fontSize: '16px',
                    color: undefined,
                    offsetY: 120
                },
                value: {
                    offsetY: 76,
                    fontSize: '22px',
                    color: undefined,
                    formatter: function (val) {
                        return val + "%";
                    }
                }
            },
            track: {
                background: "rgba(170,184,197, 0.2)",
                margin: 0
            },
        }
    },
    fill: {
        gradient: {
            enabled: true,
            shade: 'dark',
            shadeIntensity: 0.2,
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 50, 65, 91]
        },
    },
    stroke: {
        dashArray: 4
    },
    colors: colors,
    series: [67],
    labels: ['Median Ratio'],
    responsive: [{
        breakpoint: 380,
        options: {
            chart: {
                height: 280
            }
        }
    }]
}

var chart = new ApexCharts(
    document.querySelector("#stroked-guage-radial"),
    options
);

chart.render();

// window.setInterval(function () {
//     chart.updateSeries([Math.floor(Math.random() * (100 - 1 + 1)) + 1])
// }, 2000)


//
// GRADIENT CIRCULAR CHART
//
var colors = ["#8f75da", "#727cf5"];
var dataColors = $("#gradient-chart").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}
var options = {
    chart: {
        height: 330,
        type: 'radialBar',
        toolbar: {
            show: true
        }
    },
    plotOptions: {
        radialBar: {
            startAngle: -135,
            endAngle: 225,
            hollow: {
                margin: 0,
                size: '70%',
                background: 'transparent',
                image: undefined,
                imageOffsetX: 0,
                imageOffsetY: 0,
                position: 'front',
                dropShadow: {
                    enabled: true,
                    top: 3,
                    left: 0,
                    blur: 4,
                    opacity: 0.24
                }
            },
            track: {
                background: "rgba(170,184,197, 0.2)",
                strokeWidth: '67%',
                margin: 0
            },

            dataLabels: {
                showOn: 'always',
                name: {
                    offsetY: -10,
                    show: true,
                    color: '#888',
                    fontSize: '17px'
                },
                value: {
                    formatter: function (val) {
                        return parseInt(val);
                    },
                    color: '#111',
                    fontSize: '36px',
                    show: true,
                }
            }
        }
    },
    fill: {
        type: 'gradient',
        gradient: {
            shade: 'dark',
            type: 'horizontal',
            shadeIntensity: 0.5,
            gradientToColors: colors,
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100]
        }
    },
    series: [75],
    stroke: {
        lineCap: 'round'
    },
    labels: ['Percent'],

}

var chart = new ApexCharts(
    document.querySelector("#gradient-chart"),
    options
);

chart.render();


//
// SEMI CIRCLE GAUGE
//

var colors = ["#8f75da", "#727cf5"];
var dataColors = $("#gradient-chart").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}

var options = {
    series: [76],
    chart: {
        type: 'radialBar',
        offsetY: -20,
        sparkline: {
            enabled: true
        }
    },
    plotOptions: {
        radialBar: {
            startAngle: -90,
            endAngle: 90,
            track: {
                background: "rgba(170,184,197, 0.2)",
                strokeWidth: '97%',
                margin: 5, // margin is in pixels
                dropShadow: {
                    top: 2,
                    left: 0,
                    color: '#eef2f7',
                    opacity: 1,
                    blur: 2
                }
            },
            dataLabels: {
                name: {
                    show: false
                },
                value: {
                    offsetY: -2,
                    fontSize: '22px'
                }
            }
        }
    },
    grid: {
        padding: {
            top: -10
        }
    },
    colors: colors,
    labels: ['Average Results'],
};

var chart = new ApexCharts(document.querySelector("#semi-circle-gauge"), options);
chart.render();
/**
  
 *  Author:  KT
 * Module/App: Apex Scatter Charts
 */

//
// SCATTER (XY) CHART
//
var colors = ["#727cf5", "#0acf97", "#fa5c7c"];
var dataColors = $("#basic-scatter").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}
var options = {
    chart: {
        height: 380,
        type: 'scatter',
        zoom: {
            enabled: false
        }
    },

    series: [{
        name: "Sample A",
        data: [
            [16.4, 5.4], [21.7, 2], [25.4, 3], [19, 2], [10.9, 1], [13.6, 3.2], [10.9, 7.4], [10.9, 0], [10.9, 8.2], [16.4, 0], [16.4, 1.8], [13.6, 0.3], [13.6, 0], [29.9, 0], [27.1, 2.3], [16.4, 0], [13.6, 3.7], [10.9, 5.2], [16.4, 6.5], [10.9, 0], [24.5, 7.1], [10.9, 0], [8.1, 4.7], [19, 0], [21.7, 1.8], [27.1, 0], [24.5, 0], [27.1, 0], [29.9, 1.5], [27.1, 0.8], [22.1, 2]]
    }, {
        name: "Sample B",
        data: [
            [6.4, 13.4], [1.7, 11], [5.4, 8], [9, 17], [1.9, 4], [3.6, 12.2], [1.9, 14.4], [1.9, 9], [1.9, 13.2], [1.4, 7], [6.4, 8.8], [3.6, 4.3], [1.6, 10], [9.9, 2], [7.1, 15], [1.4, 0], [3.6, 13.7], [1.9, 15.2], [6.4, 16.5], [0.9, 10], [4.5, 17.1], [10.9, 10], [0.1, 14.7], [9, 10], [12.7, 11.8], [2.1, 10], [2.5, 10], [27.1, 10], [2.9, 11.5], [7.1, 10.8], [2.1, 12]]
    }, {
        name: "Sample C",
        data: [
            [21.7, 3], [23.6, 3.5], [24.6, 3], [29.9, 3], [21.7, 20], [23, 2], [10.9, 3], [28, 4], [27.1, 0.3], [16.4, 4], [13.6, 0], [19, 5], [22.4, 3], [24.5, 3], [32.6, 3], [27.1, 4], [29.6, 6], [31.6, 8], [21.6, 5], [20.9, 4], [22.4, 0], [32.6, 10.3], [29.7, 20.8], [24.5, 0.8], [21.4, 0], [21.7, 6.9], [28.6, 7.7], [15.4, 0], [18.1, 0], [33.4, 0], [16.4, 0]]
    }],
    xaxis: {
        tickAmount: 10,
    },
    yaxis: {
        tickAmount: 7
    },
    colors: colors,
    grid: {
        borderColor: '#f1f3fa',
        padding: {
            bottom: 5
        }
    },
    legend: {
        offsetY: 7,
    },
    responsive: [{
        breakpoint: 600,
        options: {
            chart: {
                toolbar: {
                    show: false
                }
            },
            legend: {
                show: false
            },
        }
    }]
}

var chart = new ApexCharts(
    document.querySelector("#basic-scatter"),
    options
);

chart.render();


//
// SCATTER CHART – DATETIME
//
var colors = ["#39afd1", "#0acf97", "#e3eaef", "#6c757d", "#ffbc00"];
var dataColors = $("#datetime-scatter").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}
var options = {
    chart: {
        height: 380,
        type: 'scatter',
        zoom: {
            type: 'xy'
        }
    },
    series: [{
        name: 'Team 1',
        data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
            min: 10,
            max: 60
        })
    },
    {
        name: 'Team 2',
        data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
            min: 10,
            max: 60
        })
    },
    {
        name: 'Team 3',
        data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 30, {
            min: 10,
            max: 60
        })
    },
    {
        name: 'Team 4',
        data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 10, {
            min: 10,
            max: 60
        })
    },
    {
        name: 'Team 5',
        data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 30, {
            min: 10,
            max: 60
        })
    },
    ],
    dataLabels: {
        enabled: false
    },
    colors: colors,
    grid: {
        borderColor: '#f1f3fa',
        padding: {
            bottom: 5
        },
        xaxis: {
            showLines: true
        },
        yaxis: {
            showLines: true
        },
    },
    legend: {
        offsetY: 10,
    },
    xaxis: {
        type: 'datetime',

    },
    yaxis: {
        max: 70
    },
    responsive: [{
        breakpoint: 600,
        options: {
            chart: {
                toolbar: {
                    show: false
                }
            },
            legend: {
                show: false
            },
        }
    }]
}

var chart = new ApexCharts(
    document.querySelector("#datetime-scatter"),
    options
);

chart.render();

/*
// this function will generate output in this format
// data = [
    [timestamp, 23],
    [timestamp, 33],
    [timestamp, 12]
    ...
]
*/
function generateDayWiseTimeSeries(baseval, count, yrange) {
    var i = 0;
    var series = [];
    while (i < count) {
        var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

        series.push([baseval, y]);
        baseval += 86400000;
        i++;
    }
    return series;
}

//
// SCATTER - IMAGES
//
var colors = ['#056BF6', '#D2376A'];
var dataColors = $("#scatter-images").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}
var options = {
    chart: {
        height: 380,
        type: 'scatter',
        animations: {
            enabled: false,
        },
        zoom: {
            enabled: false,
        },
        toolbar: {
            show: false
        }
    },
    colors: colors,
    series: [{
        name: 'Messenger',
        data: [
            [16.4, 5.4],
            [21.7, 4],
            [25.4, 3],
            [19, 2],
            [10.9, 1],
            [13.6, 3.2],
            [10.9, 7],
            [10.9, 8.2],
            [16.4, 4],
            [13.6, 4.3],
            [13.6, 12],
            [29.9, 3],
            [10.9, 5.2],
            [16.4, 6.5],
            [10.9, 8],
            [24.5, 7.1],
            [10.9, 7],
            [8.1, 4.7],
            [19, 10],
            [27.1, 10],
            [24.5, 8],
            [27.1, 3],
            [29.9, 11.5],
            [27.1, 0.8],
            [22.1, 2]
        ]
    }, {
        name: 'Instagram',
        data: [
            [6.4, 5.4],
            [11.7, 4],
            [15.4, 3],
            [9, 2],
            [10.9, 11],
            [20.9, 7],
            [12.9, 8.2],
            [6.4, 14],
            [11.6, 12]
        ]
    }],
    xaxis: {
        tickAmount: 10,
        min: 0,
        max: 40
    },
    yaxis: {
        tickAmount: 7
    },
    markers: {
        size: 20
    },
    fill: {
        type: 'image',
        opacity: 1,
        image: {
            src: ['assets/images/brands/messenger.png', 'assets/images/brands/instagram.png'],
            width: 40,
            height: 40
        }
    },
    legend: {
        labels: {
            useSeriesColors: true
        },
        offsetY: 7
    }
}

var chart = new ApexCharts(
    document.querySelector("#scatter-images"),
    options
);

chart.render();

/**
  
 *  Author:  KT
 * Module/App: Apex Sparklines Charts
 */


Apex.grid = {
    padding: {
        right: 0,
        left: 0
    }
}

Apex.dataLabels = {
    enabled: false
}

var randomizeArray = function (arg) {
    var array = arg.slice();
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

// data for the sparklines that appear below header area
var sparklineData = [47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46];

// the default colorPalette for this dashboard
//var colorPalette = ['#01BFD6', '#5564BE', '#F7A600', '#EDCD24', '#F74F58'];
var colorPalette = ['#00D8B6', '#008FFB', '#FEB019', '#FF4560', '#775DD0']


var colors = ['#DCE6EC'];
var dataColors = $("#spark1").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}
var spark1 = {
    chart: {
        type: 'area',
        height: 160,
        sparkline: {
            enabled: true
        },
    },
    stroke: {
        width: 2,
        curve: 'straight'
    },
    fill: {
        opacity: 0.2,
    },
    series: [{
        name: 'Hyper Sales ',
        data: randomizeArray(sparklineData)
    }],
    yaxis: {
        min: 0
    },
    colors: colors,
    title: {
        text: '$424,652',
        offsetX: 20,
        style: {
            fontSize: '24px'
        }
    },
    subtitle: {
        text: 'Sales',
        offsetX: 20,
        style: {
            fontSize: '14px'
        }
    }
}
new ApexCharts(document.querySelector("#spark1"), spark1).render();

var colors = ['#DCE6EC'];
var dataColors = $("#spark2").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}
var spark2 = {
    chart: {
        type: 'area',
        height: 160,
        sparkline: {
            enabled: true
        },
    },
    stroke: {
        width: 2,
        curve: 'straight'
    },
    fill: {
        opacity: 0.2,
    },
    series: [{
        name: 'Hyper Expenses ',
        data: randomizeArray(sparklineData)
    }],
    yaxis: {
        min: 0
    },
    colors: colors,
    title: {
        text: '$235,312',
        offsetX: 20,
        style: {
            fontSize: '24px'
        }
    },
    subtitle: {
        text: 'Expenses',
        offsetX: 20,
        style: {
            fontSize: '14px'
        }
    }
}

new ApexCharts(document.querySelector("#spark2"), spark2).render();


var colors = ['#0acf97'];
var dataColors = $("#spark3").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}
var spark3 = {
    chart: {
        type: 'area',
        height: 160,
        sparkline: {
            enabled: true
        },
    },
    stroke: {
        width: 2,
        curve: 'straight'
    },
    fill: {
        opacity: 0.2,
    },
    series: [{
        name: 'Net Profits ',
        data: randomizeArray(sparklineData)
    }],
    xaxis: {
        crosshairs: {
            width: 1
        },
    },
    yaxis: {
        min: 0
    },
    colors: colors,
    title: {
        text: '$135,965',
        offsetX: 20,
        style: {
            fontSize: '24px'
        }
    },
    subtitle: {
        text: 'Profits',
        offsetX: 20,
        style: {
            fontSize: '14px'
        }
    }
}

new ApexCharts(document.querySelector("#spark3"), spark3).render();


var colors = ['#727cf5'];
var dataColors = $("#chart1").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}
var options1 = {
    chart: {
        type: 'line',
        width: 140,
        height: 60,
        sparkline: {
            enabled: true
        }
    },
    series: [{
        data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54]
    }],
    stroke: {
        width: 2,
        curve: 'smooth'
    },
    markers: {
        size: 0
    },
    colors: colors,
    tooltip: {
        fixed: {
            enabled: false
        },
        x: {
            show: false
        },
        y: {
            title: {
                formatter: function (seriesName) {
                    return ''
                }
            }
        },
        marker: {
            show: false
        }
    }
}


var colors = ['#0acf97'];
var dataColors = $("#chart2").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}
var options2 = {
    chart: {
        type: 'line',
        width: 140,
        height: 60,
        sparkline: {
            enabled: true
        }
    },
    colors: colors,
    series: [{
        data: [12, 14, 2, 47, 42, 15, 47, 75, 65, 19, 14]
    }],
    stroke: {
        width: 2,
        curve: 'smooth'
    },
    markers: {
        size: 0
    },
    tooltip: {
        fixed: {
            enabled: false
        },
        x: {
            show: false
        },
        y: {
            title: {
                formatter: function (seriesName) {
                    return ''
                }
            }
        },
        marker: {
            show: false
        }
    }
}


var colors = ['#ffbc00'];
var dataColors = $("#chart3").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}
var options3 = {
    chart: {
        type: 'line',
        width: 140,
        height: 60,
        sparkline: {
            enabled: true
        }
    },
    colors: colors,
    series: [{
        data: [47, 45, 74, 14, 56, 74, 14, 11, 7, 39, 82]
    }],
    stroke: {
        width: 2,
        curve: 'smooth'
    },
    markers: {
        size: 0
    },
    tooltip: {
        fixed: {
            enabled: false
        },
        x: {
            show: false
        },
        y: {
            title: {
                formatter: function (seriesName) {
                    return ''
                }
            }
        },
        marker: {
            show: false
        }
    }
}


var colors = ['#fa5c7c'];
var dataColors = $("#chart4").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}
var options4 = {
    chart: {
        type: 'line',
        width: 140,
        height: 60,
        sparkline: {
            enabled: true
        }
    },
    colors: colors,
    series: [{
        data: [15, 75, 47, 65, 14, 2, 41, 54, 4, 27, 15]
    }],
    stroke: {
        width: 2,
        curve: 'smooth'
    },
    markers: {
        size: 0
    },
    tooltip: {
        fixed: {
            enabled: false
        },
        x: {
            show: false
        },
        y: {
            title: {
                formatter: function (seriesName) {
                    return ''
                }
            }
        },
        marker: {
            show: false
        }
    }
}


var colors = ['#727cf5'];
var dataColors = $("#chart5").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}
var options5 = {
    chart: {
        type: 'bar',
        width: 100,
        height: 60,
        sparkline: {
            enabled: true
        }
    },
    plotOptions: {
        bar: {
            columnWidth: '80%'
        }
    },
    colors: colors,
    series: [{
        data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54]
    }],
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    xaxis: {
        crosshairs: {
            width: 1
        },
    },
    tooltip: {
        fixed: {
            enabled: false
        },
        x: {
            show: false
        },
        y: {
            title: {
                formatter: function (seriesName) {
                    return ''
                }
            }
        },
        marker: {
            show: false
        }
    }
}


var colors = ['#0acf97'];
var dataColors = $("#chart6").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}
var options6 = {
    chart: {
        type: 'bar',
        width: 100,
        height: 60,
        sparkline: {
            enabled: true
        }
    },
    plotOptions: {
        bar: {
            columnWidth: '80%'
        }
    },
    colors: colors,
    series: [{
        data: [12, 14, 2, 47, 42, 15, 47, 75, 65, 19, 14]
    }],
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    xaxis: {
        crosshairs: {
            width: 1
        },
    },
    tooltip: {
        fixed: {
            enabled: false
        },
        x: {
            show: false
        },
        y: {
            title: {
                formatter: function (seriesName) {
                    return ''
                }
            }
        },
        marker: {
            show: false
        }
    }
}


var colors = ['#ffbc00'];
var dataColors = $("#chart7").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}
var options7 = {
    chart: {
        type: 'bar',
        width: 100,
        height: 60,
        sparkline: {
            enabled: true
        }
    },
    plotOptions: {
        bar: {
            columnWidth: '80%'
        }
    },
    colors: colors,
    series: [{
        data: [47, 45, 74, 14, 56, 74, 14, 11, 7, 39, 82]
    }],
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    xaxis: {
        crosshairs: {
            width: 1
        },
    },
    tooltip: {
        fixed: {
            enabled: false
        },
        x: {
            show: false
        },
        y: {
            title: {
                formatter: function (seriesName) {
                    return ''
                }
            }
        },
        marker: {
            show: false
        }
    }
}


var colors = ['#fa5c7c'];
var dataColors = $("#chart8").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}
var options8 = {
    chart: {
        type: 'bar',
        width: 100,
        height: 60,
        sparkline: {
            enabled: true
        }
    },
    plotOptions: {
        bar: {
            columnWidth: '80%'
        }
    },
    colors: colors,
    series: [{
        data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54]
    }],
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    xaxis: {
        crosshairs: {
            width: 1
        },
    },
    tooltip: {
        fixed: {
            enabled: false
        },
        x: {
            show: false
        },
        y: {
            title: {
                formatter: function (seriesName) {
                    return ''
                }
            }
        },
        marker: {
            show: false
        }
    }
}

new ApexCharts(document.querySelector("#chart1"), options1).render();
new ApexCharts(document.querySelector("#chart2"), options2).render();
new ApexCharts(document.querySelector("#chart3"), options3).render();
new ApexCharts(document.querySelector("#chart4"), options4).render();
new ApexCharts(document.querySelector("#chart5"), options5).render();
new ApexCharts(document.querySelector("#chart6"), options6).render();
new ApexCharts(document.querySelector("#chart7"), options7).render();
new ApexCharts(document.querySelector("#chart8"), options8).render();
/**
  
 *  Author:  KT
 * Module/App: Apex Timeline Charts
 */

//
// Basic Timeline
//

var dataColors = $("#basic-timeline").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}

var options = {
    series: [{
        data: [{
                x: 'Code',
                y: [
                    new Date('2019-03-02').getTime(),
                    new Date('2019-03-04').getTime()
                ]
            },
            {
                x: 'Test',
                y: [
                    new Date('2019-03-04').getTime(),
                    new Date('2019-03-08').getTime()
                ]
            },
            {
                x: 'Validation',
                y: [
                    new Date('2019-03-08').getTime(),
                    new Date('2019-03-12').getTime()
                ]
            },
            {
                x: 'Deployment',
                y: [
                    new Date('2019-03-12').getTime(),
                    new Date('2019-03-18').getTime()
                ]
            }
        ]
    }],
    chart: {
        height: 350,
        type: 'rangeBar',
        toolbar: {
            show: false
        }
    },
    colors: colors,
    plotOptions: {
        bar: {
            horizontal: true
        }
    },
    xaxis: {
        type: 'datetime'
    }
};

var chart = new ApexCharts(document.querySelector("#basic-timeline"), options);
chart.render();


//
// DISTRIBUTED TIMELINE
//

var colors = ["#727cf5", "#0acf97", "#fa5c7c", "#6c757d", "#39afd1"];
var dataColors = $("#distributed-timeline").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}

var options = {
    series: [{
        data: [{
                x: 'Analysis',
                y: [
                    new Date('2019-02-27').getTime(),
                    new Date('2019-03-04').getTime()
                ],
                fillColor: colors[0]
            },
            {
                x: 'Design',
                y: [
                    new Date('2019-03-04').getTime(),
                    new Date('2019-03-08').getTime()
                ],
                fillColor: colors[1]
            },
            {
                x: 'Coding',
                y: [
                    new Date('2019-03-07').getTime(),
                    new Date('2019-03-10').getTime()
                ],
                fillColor: colors[2]
            },
            {
                x: 'Testing',
                y: [
                    new Date('2019-03-08').getTime(),
                    new Date('2019-03-12').getTime()
                ],
                fillColor: colors[3]
            },
            {
                x: 'Deployment',
                y: [
                    new Date('2019-03-12').getTime(),
                    new Date('2019-03-17').getTime()
                ],
                fillColor: colors[4]
            }
        ]
    }],
    chart: {
        height: 350,
        type: 'rangeBar',
        toolbar: {
            show: false
        }
    },
    plotOptions: {
        bar: {
            horizontal: true,
            distributed: true,
            dataLabels: {
                hideOverflowingLabels: false
            }
        }
    },
    dataLabels: {
        enabled: true,
        formatter: function (val, opts) {
            var label = opts.w.globals.labels[opts.dataPointIndex]
            var a = moment(val[0])
            var b = moment(val[1])
            var diff = b.diff(a, 'days')
            return label + ': ' + diff + (diff > 1 ? ' days' : ' day')
        },
        style: {
            colors: ['#f3f4f5', '#fff']
        }
    },
    xaxis: {
        type: 'datetime'
    },
    yaxis: {
        show: false
    },
    grid: {
        row: {
            colors: ['#f3f4f5', '#fff'],
            opacity: 1
        },
        padding: {
            top: -15,
            right: 10,
            bottom: -15,
            left: -10,
        }
    }
};

var chart = new ApexCharts(document.querySelector("#distributed-timeline"), options);
chart.render();


//
// MULTI SERIES TIMELINE
//

var colors = ["#727cf5", "#0acf97", "#fa5c7c", "#6c757d", "#39afd1"];
var dataColors = $("#multi-series-timeline").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}

var options = {
    series: [{
            name: 'Bob',
            data: [{
                    x: 'Design',
                    y: [
                        new Date('2019-03-05').getTime(),
                        new Date('2019-03-08').getTime()
                    ]
                },
                {
                    x: 'Code',
                    y: [
                        new Date('2019-03-08').getTime(),
                        new Date('2019-03-11').getTime()
                    ]
                },
                {
                    x: 'Test',
                    y: [
                        new Date('2019-03-11').getTime(),
                        new Date('2019-03-16').getTime()
                    ]
                }
            ]
        },
        {
            name: 'Joe',
            data: [{
                    x: 'Design',
                    y: [
                        new Date('2019-03-02').getTime(),
                        new Date('2019-03-05').getTime()
                    ]
                },
                {
                    x: 'Code',
                    y: [
                        new Date('2019-03-06').getTime(),
                        new Date('2019-03-09').getTime()
                    ]
                },
                {
                    x: 'Test',
                    y: [
                        new Date('2019-03-10').getTime(),
                        new Date('2019-03-19').getTime()
                    ]
                }
            ]
        }
    ],
    chart: {
        height: 350,
        type: 'rangeBar',
        toolbar: {
            show: false
        }
    },
    plotOptions: {
        bar: {
            horizontal: true
        }
    },
    dataLabels: {
        enabled: true,
        formatter: function (val) {
            var a = moment(val[0])
            var b = moment(val[1])
            var diff = b.diff(a, 'days')
            return diff + (diff > 1 ? ' days' : ' day')
        }
    },
    fill: {
        type: 'gradient',
        gradient: {
            shade: 'light',
            type: 'vertical',
            shadeIntensity: 0.25,
            gradientToColors: undefined,
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [50, 0, 100, 100]
        }
    },
    colors: colors,
    xaxis: {
        type: 'datetime'
    },
    legend: {
        position: 'top'
    }
};

var chart = new ApexCharts(document.querySelector("#multi-series-timeline"), options);
chart.render();


//
// ADVANCED TIMELINE
//

var colors = ["#727cf5", "#0acf97", "#fa5c7c", "#6c757d", "#39afd1"];
var dataColors = $("#advanced-timeline").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}

var options = {
    series: [{
            name: 'Bob',
            data: [{
                    x: 'Design',
                    y: [
                        new Date('2019-03-05').getTime(),
                        new Date('2019-03-08').getTime()
                    ]
                },
                {
                    x: 'Code',
                    y: [
                        new Date('2019-03-02').getTime(),
                        new Date('2019-03-05').getTime()
                    ]
                },
                {
                    x: 'Code',
                    y: [
                        new Date('2019-03-05').getTime(),
                        new Date('2019-03-07').getTime()
                    ]
                },
                {
                    x: 'Test',
                    y: [
                        new Date('2019-03-03').getTime(),
                        new Date('2019-03-09').getTime()
                    ]
                },
                {
                    x: 'Test',
                    y: [
                        new Date('2019-03-08').getTime(),
                        new Date('2019-03-11').getTime()
                    ]
                },
                {
                    x: 'Validation',
                    y: [
                        new Date('2019-03-11').getTime(),
                        new Date('2019-03-16').getTime()
                    ]
                },
                {
                    x: 'Design',
                    y: [
                        new Date('2019-03-01').getTime(),
                        new Date('2019-03-03').getTime()
                    ],
                }
            ]
        },
        {
            name: 'Joe',
            data: [{
                    x: 'Design',
                    y: [
                        new Date('2019-03-02').getTime(),
                        new Date('2019-03-05').getTime()
                    ]
                },
                {
                    x: 'Test',
                    y: [
                        new Date('2019-03-06').getTime(),
                        new Date('2019-03-16').getTime()
                    ],
                    goals: [{
                        name: 'Break',
                        value: new Date('2019-03-10').getTime(),
                        strokeColor: '#CD2F2A'
                    }]
                },
                {
                    x: 'Code',
                    y: [
                        new Date('2019-03-03').getTime(),
                        new Date('2019-03-07').getTime()
                    ]
                },
                {
                    x: 'Deployment',
                    y: [
                        new Date('2019-03-20').getTime(),
                        new Date('2019-03-22').getTime()
                    ]
                },
                {
                    x: 'Design',
                    y: [
                        new Date('2019-03-10').getTime(),
                        new Date('2019-03-16').getTime()
                    ]
                }
            ]
        },
        {
            name: 'Dan',
            data: [{
                    x: 'Code',
                    y: [
                        new Date('2019-03-10').getTime(),
                        new Date('2019-03-17').getTime()
                    ]
                },
                {
                    x: 'Validation',
                    y: [
                        new Date('2019-03-05').getTime(),
                        new Date('2019-03-09').getTime()
                    ],
                    goals: [{
                        name: 'Break',
                        value: new Date('2019-03-07').getTime(),
                        strokeColor: '#CD2F2A'
                    }]
                },
            ]
        }
    ],
    chart: {
        height: 350,
        type: 'rangeBar',
        toolbar: {
            show: false
        }
    },
    plotOptions: {
        bar: {
            horizontal: true,
            barHeight: '80%'
        }
    },
    xaxis: {
        type: 'datetime'
    },
    stroke: {
        width: 1
    },
    colors: colors,
    fill: {
        type: 'solid',
        opacity: 0.6
    },
    legend: {
        position: 'top',
        horizontalAlign: 'left'
    }
};

var chart = new ApexCharts(document.querySelector("#advanced-timeline"), options);
chart.render();

//
// MULTIPLE SERIES - GROUP ROWS
//


var colors = ["#727cf5", "#0acf97", "#fa5c7c", "#6c757d", "#39afd1"];
var dataColors = $("#group-rows-timeline").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}

var options = {
    series: [
        // George Washington
        {
            name: 'George Washington',
            data: [{
                x: 'President',
                y: [
                    new Date(1789, 3, 30).getTime(),
                    new Date(1797, 2, 4).getTime()
                ]
            }, ]
        },
        // John Adams
        {
            name: 'John Adams',
            data: [{
                    x: 'President',
                    y: [
                        new Date(1797, 2, 4).getTime(),
                        new Date(1801, 2, 4).getTime()
                    ]
                },
                {
                    x: 'Vice President',
                    y: [
                        new Date(1789, 3, 21).getTime(),
                        new Date(1797, 2, 4).getTime()
                    ]
                }
            ]
        },
        // Thomas Jefferson
        {
            name: 'Thomas Jefferson',
            data: [{
                    x: 'President',
                    y: [
                        new Date(1801, 2, 4).getTime(),
                        new Date(1809, 2, 4).getTime()
                    ]
                },
                {
                    x: 'Vice President',
                    y: [
                        new Date(1797, 2, 4).getTime(),
                        new Date(1801, 2, 4).getTime()
                    ]
                },
                {
                    x: 'Secretary of State',
                    y: [
                        new Date(1790, 2, 22).getTime(),
                        new Date(1793, 11, 31).getTime()
                    ]
                }
            ]
        },
        // Aaron Burr
        {
            name: 'Aaron Burr',
            data: [{
                x: 'Vice President',
                y: [
                    new Date(1801, 2, 4).getTime(),
                    new Date(1805, 2, 4).getTime()
                ]
            }]
        },
        // George Clinton
        {
            name: 'George Clinton',
            data: [{
                x: 'Vice President',
                y: [
                    new Date(1805, 2, 4).getTime(),
                    new Date(1812, 3, 20).getTime()
                ]
            }]
        },
        // John Jay
        {
            name: 'John Jay',
            data: [{
                x: 'Secretary of State',
                y: [
                    new Date(1789, 8, 25).getTime(),
                    new Date(1790, 2, 22).getTime()
                ]
            }]
        },
        // Edmund Randolph
        {
            name: 'Edmund Randolph',
            data: [{
                x: 'Secretary of State',
                y: [
                    new Date(1794, 0, 2).getTime(),
                    new Date(1795, 7, 20).getTime()
                ]
            }]
        },
        // Timothy Pickering
        {
            name: 'Timothy Pickering',
            data: [{
                x: 'Secretary of State',
                y: [
                    new Date(1795, 7, 20).getTime(),
                    new Date(1800, 4, 12).getTime()
                ]
            }]
        },
        // Charles Lee
        {
            name: 'Charles Lee',
            data: [{
                x: 'Secretary of State',
                y: [
                    new Date(1800, 4, 13).getTime(),
                    new Date(1800, 5, 5).getTime()
                ]
            }]
        },
        // John Marshall
        {
            name: 'John Marshall',
            data: [{
                x: 'Secretary of State',
                y: [
                    new Date(1800, 5, 13).getTime(),
                    new Date(1801, 2, 4).getTime()
                ]
            }]
        },
        // Levi Lincoln
        {
            name: 'Levi Lincoln',
            data: [{
                x: 'Secretary of State',
                y: [
                    new Date(1801, 2, 5).getTime(),
                    new Date(1801, 4, 1).getTime()
                ]
            }]
        },
        // James Madison
        {
            name: 'James Madison',
            data: [{
                x: 'Secretary of State',
                y: [
                    new Date(1801, 4, 2).getTime(),
                    new Date(1809, 2, 3).getTime()
                ]
            }]
        },
    ],
    chart: {
        height: 350,
        type: 'rangeBar',
        toolbar: {
            show: false
        }
    },
    plotOptions: {
        bar: {
            horizontal: true,
            barHeight: '50%',
            rangeBarGroupRows: true
        }
    },
    colors: colors,
    fill: {
        type: 'solid'
    },
    xaxis: {
        type: 'datetime'
    },
    legend: {
        position: 'right'
    },
    //   tooltip: {
    //     custom: function(opts) {
    //       const fromYear = new Date(opts.y1).getFullYear()
    //       const toYear = new Date(opts.y2).getFullYear()
    //       const values = opts.ctx.rangeBar.getTooltipValues(opts)

    //       return (
    //         ''
    //       )
    //     }
    //   }
};

var chart = new ApexCharts(document.querySelector("#group-rows-timeline"), options);
chart.render();
/**
  
 *  Author:  KT
 * Module/App: Apex Treemap Charts
 */

//
// BASIC TREEMAP
//

var colors = ["#727cf5", "#0acf97", "#fa5c7c"];
var dataColors = $("#basic-treemap").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}

var options = {
    series: [{
        data: [{
                x: 'New Delhi',
                y: 218
            },
            {
                x: 'Kolkata',
                y: 149
            },
            {
                x: 'Mumbai',
                y: 184
            },
            {
                x: 'Ahmedabad',
                y: 55
            },
            {
                x: 'Bangaluru',
                y: 84
            },
            {
                x: 'Pune',
                y: 31
            },
            {
                x: 'Chennai',
                y: 70
            },
            {
                x: 'Jaipur',
                y: 30
            },
            {
                x: 'Surat',
                y: 44
            },
            {
                x: 'Hyderabad',
                y: 68
            },
            {
                x: 'Lucknow',
                y: 28
            },
            {
                x: 'Indore',
                y: 19
            },
            {
                x: 'Kanpur',
                y: 29
            }
        ]
    }],
    colors: colors,
    legend: {
        show: false
    },
    chart: {
        height: 350,
        type: 'treemap'
    },
    title: {
        text: 'Basic Treemap',
        align: 'center'
    }
};

var chart = new ApexCharts(document.querySelector("#basic-treemap"), options);
chart.render();

//
// TREEMAP MULTIPLE SERIES
//

var colors = ["#727cf5", "#0acf97", "#fa5c7c"];
var dataColors = $("#multiple-treemap").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}

var options = {
    series: [{
            name: 'Desktops',
            data: [{
                    x: 'ABC',
                    y: 10
                },
                {
                    x: 'DEF',
                    y: 60
                },
                {
                    x: 'XYZ',
                    y: 41
                }
            ]
        },
        {
            name: 'Mobile',
            data: [{
                    x: 'ABCD',
                    y: 10
                },
                {
                    x: 'DEFG',
                    y: 20
                },
                {
                    x: 'WXYZ',
                    y: 51
                },
                {
                    x: 'PQR',
                    y: 30
                },
                {
                    x: 'MNO',
                    y: 20
                },
                {
                    x: 'CDE',
                    y: 30
                }
            ]
        }
    ],
    legend: {
        show: false
    },
    chart: {
        height: 350,
        type: 'treemap'
    },
    colors: colors,
    title: {
        text: 'Multi-dimensional Treemap',
        align: 'center'
    }
};

var chart = new ApexCharts(document.querySelector("#multiple-treemap"), options);
chart.render();

//
// DISTRIBUTED TREEMAP
//

var colors = ["#727cf5", "#0acf97", "#fa5c7c"];
var dataColors = $("#distributed-treemap").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}

var options = {
    series: [{
        data: [{
                x: 'New Delhi',
                y: 218
            },
            {
                x: 'Kolkata',
                y: 149
            },
            {
                x: 'Mumbai',
                y: 184
            },
            {
                x: 'Ahmedabad',
                y: 55
            },
            {
                x: 'Bangaluru',
                y: 84
            },
            {
                x: 'Pune',
                y: 31
            },
            {
                x: 'Chennai',
                y: 70
            },
            {
                x: 'Jaipur',
                y: 30
            },
            {
                x: 'Surat',
                y: 44
            },
            {
                x: 'Hyderabad',
                y: 68
            },
            {
                x: 'Lucknow',
                y: 28
            },
            {
                x: 'Indore',
                y: 19
            },
            {
                x: 'Kanpur',
                y: 29
            }
        ]
    }],
    legend: {
        show: false
    },
    chart: {
        height: 350,
        type: 'treemap'
    },
    title: {
        text: 'Distibuted Treemap (different color for each cell)',
        align: 'center'
    },
    colors: colors,
    plotOptions: {
        treemap: {
            distributed: true,
            enableShades: false
        }
    }
};

var chart = new ApexCharts(document.querySelector("#distributed-treemap"), options);
chart.render();


//
// COLOR RANGE TREEMAP
//

var colors = ["#727cf5", "#0acf97", "#fa5c7c"];
var dataColors = $("#color-range-treemap").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}
var options = {
    series: [{
        data: [{
                x: 'INTC',
                y: 1.2
            },
            {
                x: 'GS',
                y: 0.4
            },
            {
                x: 'CVX',
                y: -1.4
            },
            {
                x: 'GE',
                y: 2.7
            },
            {
                x: 'CAT',
                y: -0.3
            },
            {
                x: 'RTX',
                y: 5.1
            },
            {
                x: 'CSCO',
                y: -2.3
            },
            {
                x: 'JNJ',
                y: 2.1
            },
            {
                x: 'PG',
                y: 0.3
            },
            {
                x: 'TRV',
                y: 0.12
            },
            {
                x: 'MMM',
                y: -2.31
            },
            {
                x: 'NKE',
                y: 3.98
            },
            {
                x: 'IYT',
                y: 1.67
            }
        ]
    }],
    legend: {
        show: false
    },
    chart: {
        height: 350,
        type: 'treemap'
    },
    title: {
        text: 'Treemap with Color scale',
        align: 'center'
    },
    dataLabels: {
        enabled: true,
        style: {
            fontSize: '12px',
        },
        formatter: function (text, op) {
            return [text, op.value]
        },
        offsetY: -4
    },
    plotOptions: {
        treemap: {
            enableShades: true,
            shadeIntensity: 0.5,
            reverseNegativeShade: true,
            colorScale: {
                ranges: [{
                        from: -6,
                        to: 0,
                        color: colors[0]
                    },
                    {
                        from: 0.001,
                        to: 6,
                        color: colors[1]
                    }
                ]
            }
        }
    }
};

var chart = new ApexCharts(document.querySelector("#color-range-treemap"), options);
chart.render();
/**
  
 *  Author:  KT
 * Module/App: Brite Charts
 */

var briteChartApp = window.briteChartApp || {};

(function ($, context) {
	"use strict";
	/**
	 * Creates the bar chart
	 */
	var defaultColors = ["#727cf5", "#0acf97", "#6c757d", "#fa5c7c", "#ffbc00", "#39afd1", "#e3eaef"];


	context.createBarChart = function (elementSelector, data) {
		var dataColors = $(elementSelector).data('colors');
		var colors = dataColors ? dataColors.split(",") : defaultColors.concat();

		var chartTooltip = new britecharts.miniTooltip();
		var _barChart = new britecharts.bar();
		var barContainer = d3.select(elementSelector),
			containerWidth = barContainer.node()
				? barContainer.node().getBoundingClientRect().width
				: false,
			containerHeight = barContainer.node()
				? barContainer.node().getBoundingClientRect().height
				: false,
			tooltipContainer = void 0;

		var margin = {
			top: 10,
			left: 55,
			bottom: 20,
			right: 10
		};

		_barChart
			.isAnimated(true)
			.width(containerWidth)
			.height(containerHeight)
			.margin(margin)
			.betweenBarsPadding(0.5)
			.colorSchema(colors)
			.on("customMouseOver", chartTooltip.show)
			.on("customMouseMove", chartTooltip.update)
			.on("customMouseOut", chartTooltip.hide);

		barContainer.datum(data).call(_barChart);
		tooltipContainer = d3.select(elementSelector + " .metadata-group");
		tooltipContainer.datum([]).call(chartTooltip);
	};

	/**
	 * Creates the horizontal bar chart
	 */

	context.createHorizontalBarChart = function (elementSelector, data) {
		var dataColors = $(elementSelector).data('colors');
		var colors = dataColors ? dataColors.split(",") : defaultColors.concat();

		var _barChart = new britecharts.bar();

		var barContainer = d3.select(elementSelector),
			containerWidth = barContainer.node()
				? barContainer.node().getBoundingClientRect().width
				: false,
			containerHeight = barContainer.node()
				? barContainer.node().getBoundingClientRect().height
				: false,
			tooltipContainer = void 0;

		var margin = {
			top: 10,
			left: 50,
			bottom: 20,
			right: 10
		};

		_barChart
			.colorSchema(colors)
			.isAnimated(true)
			.isHorizontal(true)
			.width(containerWidth)
			.margin(margin)
			.enableLabels(true)
			.percentageAxisToMaxRatio(1.3)
			.labelsNumberFormat(1)
			.height(containerHeight);

		barContainer.datum(data).call(_barChart);
	};

	/**
	 * creates the line chart
	 * @param {*} elementSelector
	 * @param {*} data
	 */
	context.createLineChart = function (elementSelector, data) {


		var lineChart = new britecharts.line(),
			chartTooltip = new britecharts.tooltip(),
			lineContainer = d3.select(elementSelector),
			containerWidth = lineContainer.node()
				? lineContainer.node().getBoundingClientRect().width
				: false,
			tooltipContainer = void 0;

		lineChart
			.isAnimated(true)
			.aspectRatio(0.7)
			.tooltipThreshold(100)
			.grid("horizontal")
			.width(containerWidth)
			.dateLabel("date")
			.valueLabel("value")
			.on("customMouseOver", chartTooltip.show)
			.on("customMouseMove", chartTooltip.update)
			.on("customMouseOut", chartTooltip.hide);

		chartTooltip.title("Sample Data");

		//   .topicsOrder(lineData2.dataByTopic.map(function(topic) {
		//   return topic.topic;
		// }));

		lineContainer.datum(data).call(lineChart);
		tooltipContainer = d3.select(
			elementSelector + " .metadata-group .hover-marker"
		);
		tooltipContainer.datum([]).call(chartTooltip);
	};

	/**
	 * Creates the donut chart
	 * @param {*} elementSelector
	 * @param {*} data
	 */

	context.createDonutChart = function (elementSelector, data) {
		var dataColors = $(elementSelector).data('colors');
		var colors = dataColors ? dataColors.split(",") : defaultColors.concat();

		var donutChart = britecharts.donut(),
			legendChart = britecharts.legend(),
			legendContainer = void 0;

		legendChart
			.width(250)
			.height(200)
			.colorSchema(colors)
			.numberFormat("s");

		donutChart.height(300)
			.highlightSliceById(3)
			.colorSchema(colors)
			.hasFixedHighlightedSlice(true)
			.internalRadius(80)
			.on('customMouseOver', function (data) {
				legendChart.highlight(data.data.id);
			})
			.on('customMouseOut', function () {
				legendChart.clearHighlight();
			});

		d3.select(elementSelector)
			.datum(data)
			.call(donutChart);
		legendContainer = d3.select(".legend-chart-container");
		legendContainer.datum(data).call(legendChart);
	};

	/**
	 * creates brush chart
	 * @param {*} elementSelector
	 * @param {*} data
	 */
	context.createBrushChart = function (elementSelector, data) {
		var brushContainer = d3.select(elementSelector);
		var brushChart = britecharts.brush(),
			containerWidth = brushContainer.node()
				? brushContainer.node().getBoundingClientRect().width
				: false;

		brushChart
			.height(320)
			.width(containerWidth)
			.on("customBrushStart", function (brushExtent) {
				var format = d3.timeFormat("%m/%d/%Y");
				console.log("Start date = " + format(brushExtent[0]));
				console.log("End date = " + format(brushExtent[1]));
			})
			.on("customBrushEnd", function (brushExtent) {
				console.log("rounded extent", brushExtent);
			});

		brushContainer.datum(data).call(brushChart);

		brushChart.dateRange(["9/15/2015", "1/25/2016"]);
	};

	/**
	 * Creates step chart
	 * @param {*} elementSelector
	 * @param {*} data
	 */
	context.createStepChart = function (elementSelector, data) {
		var stepChart = britecharts.step(),
			chartTooltip = britecharts.miniTooltip(),
			stepContainer = d3.select(elementSelector),
			containerWidth = stepContainer.node()
				? stepContainer.node().getBoundingClientRect().width
				: false,
			tooltipContainer = void 0;

		stepChart
			.width(containerWidth)
			.height(320)
			.margin({
				top: 40,
				right: 40,
				bottom: 80,
				left: 50
			})
			.on("customMouseOver", chartTooltip.show)
			.on("customMouseMove", chartTooltip.update)
			.on("customMouseOut", chartTooltip.hide);

		stepContainer.datum(data).call(stepChart);

		chartTooltip.nameLabel("key");

		tooltipContainer = d3.select(
			elementSelector + " .step-chart .metadata-group"
		);
		tooltipContainer.datum([]).call(chartTooltip);
	};

	//private method
	function init() {
		var barData = [
			{ name: "Mon", value: 2100 },
			{ name: "Tue", value: 5000 },
			{ name: "Wed", value: 4000 },
			{ name: "Thu", value: 5500 },
			{ name: "Fri", value: 6500 },
			{ name: "Sat", value: 4500 },
			{ name: "Sun", value: 3500 }
		];

		var lineData = {
			dataByTopic: [
				{
					topic: 103,
					topicName: "San Francisco",
					dates: [
						{
							date: "2018-06-27T07:00:00.000Z",
							value: 1,
							fullDate: "2018-06-27T07:00:00.000Z"
						},
						{
							date: "2018-06-28T07:00:00.000Z",
							value: 1,
							fullDate: "2018-06-28T07:00:00.000Z"
						},
						{
							date: "2018-06-29T07:00:00.000Z",
							value: 4,
							fullDate: "2018-06-29T07:00:00.000Z"
						},
						{
							date: "2018-06-30T07:00:00.000Z",
							value: 2,
							fullDate: "2018-06-30T07:00:00.000Z"
						},
						{
							date: "2018-07-01T07:00:00.000Z",
							value: 3,
							fullDate: "2018-07-01T07:00:00.000Z"
						},
						{
							date: "2018-07-02T07:00:00.000Z",
							value: 3,
							fullDate: "2018-07-02T07:00:00.000Z"
						},
						{
							date: "2018-07-03T07:00:00.000Z",
							value: 0,
							fullDate: "2018-07-03T07:00:00.000Z"
						},
						{
							date: "2018-07-04T07:00:00.000Z",
							value: 3,
							fullDate: "2018-07-04T07:00:00.000Z"
						},
						{
							date: "2018-07-05T07:00:00.000",
							value: 1,
							fullDate: "2018-07-05T07:00:00.000Z"
						},
						{
							date: "2018-07-06T07:00:00.000Z",
							value: 2,
							fullDate: "2018-07-06T07:00:00.000Z"
						},
						{
							date: "2018-07-07T07:00:00.000Z",
							value: 0,
							fullDate: "2018-07-07T07:00:00.000Z"
						},
						{
							date: "2018-07-08T07:00:00.000Z",
							value: 2,
							fullDate: "2018-07-08T07:00:00.000Z"
						},
						{
							date: "2018-07-09T07:00:00.000Z",
							value: 1,
							fullDate: "2018-07-09T07:00:00.000Z"
						},
						{
							date: "2018-07-10T07:00:00.000Z",
							value: 4,
							fullDate: "2018-07-10T07:00:00.000Z"
						},
						{
							date: "2018-07-11T07:00:00.000Z",
							value: 2,
							fullDate: "2018-07-11T07:00:00.000Z"
						},
						{
							date: "2018-07-12T07:00:00.000Z",
							value: 1,
							fullDate: "2018-07-12T07:00:00.000Z"
						},
						{
							date: "2018-07-13T07:00:00.000Z",
							value: 6,
							fullDate: "2018-07-13T07:00:00.000Z"
						},
						{
							date: "2018-07-14T07:00:00.000Z",
							value: 5,
							fullDate: "2018-07-14T07:00:00.000Z"
						},
						{
							date: "2018-07-15T07:00:00.000Z",
							value: 2,
							fullDate: "2018-07-15T07:00:00.000Z"
						}
					]
				}
			]
		};

		var donutData = [
			{ name: "Shiny", id: 1, quantity: 86, percentage: 5 },
			{ name: "Blazing", id: 2, quantity: 300, percentage: 18 },
			{ name: "Dazzling", id: 3, quantity: 276, percentage: 16 },
			{ name: "Radiant", id: 4, quantity: 195, percentage: 11 },
			{ name: "Sparkling", id: 5, quantity: 36, percentage: 2 },
			{ name: "Other", id: 0, quantity: 814, percentage: 48 }
		];

		var brushData = [
			{ date: "2018-06-27T07:00:00.000Z", value: 4 },
			{ date: "2018-06-28T07:00:00.000Z", value: 12 },
			{ date: "2018-06-29T07:00:00.000Z", value: 33 },
			{ date: "2018-06-30T07:00:00.000Z", value: 17 },
			{ date: "2018-07-01T07:00:00.000Z", value: 17 },
			{ date: "2018-07-02T07:00:00.000Z", value: 16 },
			{ date: "2018-07-03T07:00:00.000Z", value: 8 },
			{ date: "2018-07-04T07:00:00.000Z", value: 14 },
			{ date: "2018-07-05T07:00:00.000Z", value: 11 },
			{ date: "2018-07-06T07:00:00.000Z", value: 14 },
			{ date: "2018-07-07T07:00:00.000Z", value: 25 },
			{ date: "2018-07-08T07:00:00.000Z", value: 55 },
			{ date: "2018-07-09T07:00:00.000Z", value: 15 },
			{ date: "2018-07-10T07:00:00.000Z", value: 26 },
			{ date: "2018-07-11T07:00:00.000Z", value: 21 },
			{ date: "2018-07-12T07:00:00.000Z", value: 16 },
			{ date: "2018-07-13T07:00:00.000Z", value: 20 },
			{ date: "2018-07-14T07:00:00.000Z", value: 26 },
			{ date: "2018-07-15T07:00:00.000Z", value: 24 },
			{ date: "2018-07-16T07:00:00.000Z", value: 29 },
			{ date: "2018-07-17T07:00:00.000Z", value: 12 },
			{ date: "2018-07-18T07:00:00.000Z", value: 16 },
			{ date: "2018-07-19T07:00:00.000Z", value: 11 },
			{ date: "2018-07-20T07:00:00.000Z", value: 29 },
			{ date: "2018-07-21T07:00:00.000Z", value: 9 },
			{ date: "2018-07-22T07:00:00.000Z", value: 26 },
			{ date: "2018-07-23T07:00:00.000Z", value: 21 },
			{ date: "2018-07-24T07:00:00.000Z", value: 18 },
			{ date: "2018-07-25T07:00:00.000Z", value: 15 },
			{ date: "2018-07-26T07:00:00.000Z", value: 23 },
			{ date: "2018-07-27T07:00:00.000Z", value: 43 },
			{ date: "2018-07-28T07:00:00.000Z", value: 44 },
			{ date: "2018-07-29T07:00:00.000Z", value: 67 },
			{ date: "2018-07-30T07:00:00.000Z", value: 67 },
			{ date: "2018-07-31T07:00:00.000Z", value: 0 },
			{ date: "2018-08-01T07:00:00.000Z", value: 0 },
			{ date: "2018-08-02T07:00:00.000Z", value: 0 }
		];

		var stepData = [
			{ key: "Appetizer", value: 400 },
			{ key: "Soup", value: 300 },
			{ key: "Salad", value: 300 },
			{ key: "Lunch", value: 250 },
			{ key: "Dinner", value: 220 },
			{ key: "Dessert", value: 100 },
			{ key: "Midnight snack", value: 20 }
		];


		function drawCharts() {
			d3.selectAll('.bar-chart').remove();
			d3.selectAll('.line-chart').remove();
			d3.selectAll('.donut-chart').remove();
			d3.selectAll('.britechart-legend').remove();
			d3.selectAll('.brush-chart').remove();
			d3.selectAll('.step-chart').remove();

			if ($(".bar-container").length > 0) {
				briteChartApp.createBarChart(".bar-container", barData);
			}

			if ($(".bar-container-horizontal").length > 0) {
				briteChartApp.createHorizontalBarChart(
					".bar-container-horizontal",
					barData
				);
			}

			if ($(".line-container").length > 0) {
				briteChartApp.createLineChart(".line-container", lineData);
			}

			if ($(".donut-container").length > 0) {
				briteChartApp.createDonutChart(".donut-container", donutData);
			}

			if ($(".brush-container").length > 0) {
				briteChartApp.createBrushChart(".brush-container", brushData);
			}

			if ($(".step-container").length > 0) {
				briteChartApp.createStepChart(".step-container", stepData);
			}
		}

		// responsive charts
		$(window).on('resize', function (e) {
			e.preventDefault();
			setTimeout(drawCharts, 200);
		});

		//render charts
		drawCharts();
	}

	// The init will run in the document ready
	$(init);
})(jQuery, briteChartApp);
/**
  
 *  Author:  KT
 * Component: Full-Calendar
 */


!function ($) {
    "use strict";

    var CalendarApp = function () {
        this.$body = $("body"),
            this.$modal = new bootstrap.Modal(document.getElementById('event-modal'), { backdrop: 'static' }),
            this.$calendar = $('#calendar'),
            this.$formEvent = $("#form-event"),
            this.$btnNewEvent = $("#btn-new-event"),
            this.$btnDeleteEvent = $("#btn-delete-event"),
            this.$btnSaveEvent = $("#btn-save-event"),
            this.$modalTitle = $("#modal-title"),
            this.$calendarObj = null,
            this.$selectedEvent = null,
            this.$newEventData = null
    };


    /* on click on event */
    CalendarApp.prototype.onEventClick = function (info) {
        this.$formEvent[0].reset();
        this.$formEvent.removeClass("was-validated");

        this.$newEventData = null;
        this.$btnDeleteEvent.show();
        this.$modalTitle.text('Edit Event');
        this.$modal.show();
        this.$selectedEvent = info.event;
        $("#event-title").val(this.$selectedEvent.title);
        $("#event-category").val(this.$selectedEvent.classNames[0]);
    },

        /* on select */
        CalendarApp.prototype.onSelect = function (info) {
            this.$formEvent[0].reset();
            this.$formEvent.removeClass("was-validated");

            this.$selectedEvent = null;
            this.$newEventData = info;
            this.$btnDeleteEvent.hide();
            this.$modalTitle.text('Add New Event');

            this.$modal.show();
            this.$calendarObj.unselect();
        },

        /* Initializing */
        CalendarApp.prototype.init = function () {
            /*  Initialize the calendar  */
            var today = new Date($.now());

            var Draggable = FullCalendar.Draggable;
            var externalEventContainerEl = document.getElementById('external-events');

            // init dragable
            new Draggable(externalEventContainerEl, {
                itemSelector: '.external-event',
                eventData: function (eventEl) {
                    return {
                        title: eventEl.innerText,
                        className: $(eventEl).data('class')
                    };
                }
            });

            var defaultEvents = [{
                title: 'Meeting with Mr. Shreyu',
                start: new Date($.now() + 158000000),
                end: new Date($.now() + 338000000),
                className: 'bg-warning'
            },
                {
                    title: 'Interview - Backend Engineer',
                    start: today,
                    end: today,
                    className: 'bg-success'
                },
                {
                    title: 'Phone Screen - Frontend Engineer',
                    start: new Date($.now() + 168000000),
                    className: 'bg-info'
                },
                {
                    title: 'Buy Design Assets',
                    start: new Date($.now() + 338000000),
                    end: new Date($.now() + 338000000 * 1.2),
                    className: 'bg-primary',
                }];

            var $this = this;

            // cal - init
            $this.$calendarObj = new FullCalendar.Calendar($this.$calendar[0], {
                slotDuration: '00:15:00', /* If we want to split day time each 15minutes */
                slotMinTime: '08:00:00',
                slotMaxTime: '19:00:00',
                themeSystem: 'bootstrap',
                bootstrapFontAwesome: false,
                buttonText: {
                    today: 'Today',
                    month: 'Month',
                    week: 'Week',
                    day: 'Day',
                    list: 'List',
                    prev: 'Prev',
                    next: 'Next'
                },
                initialView: 'dayGridMonth',
                handleWindowResize: true,
                height: $(window).height() - 200,
                headerToolbar: {
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
                },
                initialEvents: defaultEvents,
                editable: true,
                droppable: true, // this allows things to be dropped onto the calendar !!!
                // dayMaxEventRows: false, // allow "more" link when too many events
                selectable: true,
                dateClick: function (info) { $this.onSelect(info); },
                eventClick: function (info) { $this.onEventClick(info); }
            });

            $this.$calendarObj.render();

            // on new event button click
            $this.$btnNewEvent.on('click', function (e) {
                $this.onSelect({ date: new Date(), allDay: true });
            });

            // save event
            $this.$formEvent.on('submit', function (e) {
                e.preventDefault();
                var form = $this.$formEvent[0];

                // validation
                if (form.checkValidity()) {
                    if ($this.$selectedEvent) {
                        $this.$selectedEvent.setProp('title', $("#event-title").val());
                        $this.$selectedEvent.setProp('classNames', [$("#event-category").val()]);
                    } else {
                        var eventData = {
                            title: $("#event-title").val(),
                            start: $this.$newEventData.date,
                            allDay: $this.$newEventData.allDay,
                            className: $("#event-category").val()
                        }
                        $this.$calendarObj.addEvent(eventData);
                    }
                    $this.$modal.hide();
                } else {
                    e.stopPropagation();
                    form.classList.add('was-validated');
                }
            });

            // delete event
            $($this.$btnDeleteEvent.on('click', function (e) {
                if ($this.$selectedEvent) {
                    $this.$selectedEvent.remove();
                    $this.$selectedEvent = null;
                    $this.$modal.hide();
                }
            }));
        },

        //init CalendarApp
        $.CalendarApp = new CalendarApp, $.CalendarApp.Constructor = CalendarApp

}(window.jQuery),

    //initializing CalendarApp
    function ($) {
        "use strict";
        $.CalendarApp.init()
    }(window.jQuery);

/**
  
 *  Author:  KT
 * Module/App: Chartjs
 */

!function ($) {
    "use strict";

    var AreaChart = function () {
        this.$body = $("body");
        this.charts = [];

        this.defaultColors = ["#727cf5", "#0acf97", "#fa5c7c", "#ffbc00"];


    };

    AreaChart.prototype.boundariesExample = function () {
        var chartElement = document.getElementById('boundaries-example');
        var dataColors = chartElement.getAttribute('data-colors');
        var colors = dataColors ? dataColors.split(",") : this.defaultColors;
        var ctx = chartElement.getContext('2d');
        var chart = new Chart(ctx, {
            type: 'line', data: {
                labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June'], datasets: [{
                    label: 'Fully Rounded',
                    data: [12.5, -19.4, 14.3, -15.0, 10.8, -10.5],
                    borderColor: colors[0],
                    backgroundColor: hexToRGB(colors[0], .3),
                    fill: false
                },]
            }, options: {
                responsive: true, maintainAspectRatio: false,

                plugins: {
                    legend: {
                        display: false,

                        position: 'top',
                    },

                }, scales: {
                    x: {
                        grid: {
                            display: false
                        }
                    }, y: {
                        grid: {
                            display: false
                        }
                    },
                }
            },
        });

        this.charts.push(chart);
    }


    AreaChart.prototype.datasetExample = function () {
        var chartElement = document.getElementById('dataset-example');
        var dataColors = chartElement.getAttribute('data-colors');
        var colors = dataColors ? dataColors.split(",") : this.defaultColors
        var ctx = chartElement.getContext('2d');
        var chart = new Chart(ctx, {
            type: 'line', data: {
                labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June'], datasets: [{
                    label: 'D0',
                    data: [10, 20, 15, 35, 38, 24],
                    borderColor: colors[0],
                    hidden: true,
                    backgroundColor: hexToRGB(colors[0], 0.3),
                }, {
                    label: 'D1',
                    data: [12, 18, 18, 33, 41, 20],
                    borderColor: colors[1],
                    fill: '-1',
                    backgroundColor: hexToRGB(colors[1], 0.3),
                }, {
                    label: 'D2',
                    data: [5, 25, 20, 25, 28, 14],
                    borderColor: colors[2],
                    fill: 1,
                    backgroundColor: hexToRGB(colors[2], 0.3),
                }, {
                    label: 'D3',
                    data: [12, 45, 15, 35, 38, 24],
                    borderColor: colors[3],
                    fill: '-1',
                    backgroundColor: hexToRGB(colors[3], 0.3),
                }, {
                    label: 'D4',
                    data: [24, 38, 35, 15, 20, 10],
                    borderColor: colors[4],
                    fill: 8,
                    backgroundColor: hexToRGB(colors[4], 0.3),
                }]
            }, options: {
                responsive: true, maintainAspectRatio: false,

                plugins: {

                    filler: {
                        propagate: false
                    },

                }, interaction: {
                    intersect: false,
                }, scales: {
                    x: {
                        grid: {
                            display: false
                        }
                    }, y: {
                        stacked: true, grid: {
                            display: false
                        }
                    },
                }
            },
        });

        this.charts.push(chart)
    }

    AreaChart.prototype.drawTimeExample = function () {
        var chartElement = document.getElementById('draw-time-example');
        var dataColors = chartElement.getAttribute('data-colors');
        var colors = dataColors ? dataColors.split(",") : this.defaultColors
        var ctx = chartElement.getContext('2d');
        var chart = new Chart(ctx, {
            type: 'line', data: {
                labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June'], datasets: [{
                    label: 'Fully Rounded',
                    data: [10, 20, 15, 35, 38, 24],
                    borderColor: colors[0],
                    backgroundColor: colors[0],
                    fill: true

                }, {
                    label: 'Small Radius',
                    data: [24, 38, 35, 15, 20, 10],
                    backgroundColor: hexToRGB(colors[1], 0.3),
                    borderColor: colors[1],
                    borderWidth: 1,
                }]
            }, options: {
                responsive: true, maintainAspectRatio: false, plugins: {
                    legend: {
                        display: false,
                    }, filler: {
                        propagate: false,
                    },
                }, pointBackgroundColor: '#fff', radius: 5, interaction: {
                    intersect: false,
                }, scales: {
                    x: {
                        grid: {
                            display: false
                        }
                    }, y: {
                        grid: {
                            display: false
                        }
                    },
                }
            },
        });
        this.charts.push(chart)

    }

    AreaChart.prototype.stackedExample = function () {
        var chartElement = document.getElementById('stacked-example');
        var dataColors = chartElement.getAttribute('data-colors');
        var colors = dataColors ? dataColors.split(",") : this.defaultColors
        var ctx = chartElement.getContext('2d');
        var chart = new Chart(ctx, {
            type: 'line', data: {
                labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June'], datasets: [{
                    label: 'D0',
                    data: [10, 20, 15, 35, 38, 24],
                    borderColor: colors[0],
                    fill: true,
                    backgroundColor: colors[0],
                }, {
                    label: 'D1',
                    data: [12, 18, 18, 33, 41, 20],
                    borderColor: colors[1],
                    fill: true,
                    backgroundColor: colors[1],
                }, {
                    label: 'D2',
                    data: [5, 25, 20, 25, 28, 14],
                    borderColor: colors[2],
                    fill: true,
                    backgroundColor: colors[2],
                }, {
                    label: 'D3',
                    data: [12, 45, 15, 35, 38, 24],
                    borderColor: colors[3],
                    fill: true,
                    backgroundColor: colors[3],
                }, {
                    label: 'D4',
                    data: [24, 38, 35, 15, 20, 10],
                    borderColor: colors[4],
                    fill: true,
                    backgroundColor: colors[4],
                }]
            }, options: {
                responsive: true, maintainAspectRatio: false, plugins: {
                    legend: {
                        display: false,
                    },

                }, interaction: {
                    mode: 'nearest', axis: 'x', intersect: false
                }, scales: {
                    x: {
                        title: {
                            display: true, text: 'Month'
                        },


                        grid: {
                            display: false
                        }
                    }, y: {
                        stacked: true, title: {
                            display: true, text: 'Value'
                        }, grid: {
                            display: false
                        }
                    },
                }
            },
        });
        this.charts.push(chart)
    }

    AreaChart.prototype.radarExample = function () {
        var chartElement = document.getElementById('radar-example');
        var dataColors = chartElement.getAttribute('data-colors');
        var colors = dataColors ? dataColors.split(",") : this.defaultColors
        var ctx = chartElement.getContext('2d');
        var chart = new Chart(ctx, {
            type: 'radar', data: {
                labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June'], datasets: [{
                    label: 'D0',
                    data: [10, 20, 15, 35, 38, 24],
                    borderColor: colors[0],
                    fill: '-1',
                    backgroundColor: hexToRGB(colors[0], 0.3),
                }, {
                    label: 'D1',
                    data: [12, 18, 18, 33, 41, 20],
                    borderColor: colors[1],
                    fill: false,
                    backgroundColor: hexToRGB(colors[1], 0.3),
                }, {
                    label: 'D2',
                    data: [5, 25, 20, 25, 28, 14],
                    borderColor: colors[2],
                    fill: '-1',
                    backgroundColor: hexToRGB(colors[2], 0.3),
                }, {
                    label: 'D3',
                    data: [12, 45, 15, 35, 38, 24],
                    borderColor: colors[3],
                    fill: '-1',
                    backgroundColor: hexToRGB(colors[3], 0.3),
                }, ]
            }, options: {
                responsive: true, maintainAspectRatio: false, plugins: {
                    legend: {
                        display: false,
                    }, filler: {
                        propagate: false
                    },

                },
            },
        });
        this.charts.push(chart)
    }


    //initializing various components and plugins
    AreaChart.prototype.init = function () {
        var $this = this;
        Chart.defaults.font.family = '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif';

        Chart.defaults.color = "#8391a2";
        Chart.defaults.scale.grid.color = "#8391a2";
        // init charts
        this.boundariesExample();
        this.datasetExample();
        this.drawTimeExample();
        this.stackedExample();
        this.radarExample();

        // enable resizing matter


        $(window).on('resizeEnd', function (e) {
            $.each($this.charts, function (index, chart) {
                try {
                    chart.destroy();
                } catch (err) {
                }
            });
            $this.boundariesExample();
            $this.datasetExample();
            $this.drawTimeExample();
            $this.stackedExample();
            $this.radarExample();
        });

        $(window).resize(function () {
            if (this.resizeTO) clearTimeout(this.resizeTO);
            this.resizeTO = setTimeout(function () {
                $(this).trigger('resizeEnd');
            }, 500);
        });
    };

    //init chart
    $.ChartJs = new AreaChart;
    $.ChartJs.Constructor = AreaChart
}(window.jQuery),

    //initializing ChartJs
    function ($) {
        "use strict";
        $.ChartJs.init()
    }(window.jQuery);

/* utility function */

function hexToRGB(hex, alpha) {
    var r = parseInt(hex.slice(1, 3), 16), g = parseInt(hex.slice(3, 5), 16), b = parseInt(hex.slice(5, 7), 16);

    if (alpha) {
        return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
    } else {
        return "rgb(" + r + ", " + g + ", " + b + ")";
    }
}



/**
  
 *  Author:  KT
 * Module/App: Chartjs
 */

!function ($) {
    "use strict";

    var BarChart = function () {
        this.$body = $("body");
        this.charts = [];

        this.defaultColors = ["#727cf5", "#0acf97", "#fa5c7c", "#ffbc00"];


    };

    BarChart.prototype.borderRadiusExample = function () {
        var chartElement = document.getElementById('border-radius-example');
        var dataColors = chartElement.getAttribute('data-colors');
        var colors = dataColors ? dataColors.split(",") : this.defaultColors;
        var ctx = chartElement.getContext('2d');
        var chart = new Chart(ctx, {
            type: 'bar', data: {
                labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June'], datasets: [{
                    label: 'Fully Rounded',
                    data: [12, -19, 14, -15, 12, -14],
                    borderColor: colors[0],
                    backgroundColor: hexToRGB(colors[0], .3),
                    borderWidth: 2,
                    borderRadius: Number.MAX_VALUE,
                    borderSkipped: false,
                }, {
                    label: 'Small Radius',
                    data: [-10, 19, -15, -8, 12, -7],
                    backgroundColor: hexToRGB(colors[1], .3),
                    borderColor: colors[1],
                    borderWidth: 2,
                    borderRadius: 5,
                    borderSkipped: false,
                }]
            }, options: {
                responsive: true, maintainAspectRatio: false,

                plugins: {
                    legend: {
                        display: false,

                        position: 'top',
                    },

                }, scales: {
                    x: {
                        grid: {
                            display: false
                        }
                    }, y: {
                        grid: {
                            display: false
                        }
                    },
                }
            },
        });

        this.charts.push(chart);
    }


    BarChart.prototype.floatingBarExample = function () {
        var chartElement = document.getElementById('floating-example');
        var dataColors = chartElement.getAttribute('data-colors');
        var colors = dataColors ? dataColors.split(",") : this.defaultColors
        var ctx = chartElement.getContext('2d');
        var chart = new Chart(ctx, {
            type: 'bar', data: {
                labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June'], datasets: [{
                    label: 'Fully Rounded', data: [12, -19, 14, -15, 12, -14], backgroundColor: colors[0],
                }, {
                    label: 'Small Radius', data: [-10, 19, -15, -8, 12, -7], backgroundColor: colors[1],
                }]
            }, options: {
                responsive: true, maintainAspectRatio: false,

                plugins: {
                    legend: {
                        display: false,

                        position: 'top',
                    },

                }, scales: {
                    x: {
                        grid: {
                            display: false
                        }
                    }, y: {
                        grid: {
                            display: false
                        }
                    },
                }
            },
        });

        this.charts.push(chart)
    }

    BarChart.prototype.horizontalExample = function () {
        var chartElement = document.getElementById('horizontal-example');
        var dataColors = chartElement.getAttribute('data-colors');
        var colors = dataColors ? dataColors.split(",") : this.defaultColors
        var ctx = chartElement.getContext('2d');
        var chart = new Chart(ctx, {
            type: 'bar', data: {
                labels: ['Jan', 'Feb', 'March', 'April'], datasets: [{
                    label: 'Fully Rounded',
                    data: [12, -19, 14, -15],
                    borderColor: colors[0],
                    backgroundColor: hexToRGB(colors[0], 0.3),
                    borderWidth: 1,
                }, {
                    label: 'Small Radius',
                    data: [-10, 19, -15, -8],
                    backgroundColor: hexToRGB(colors[1], 0.3),
                    borderColor: colors[1],
                    borderWidth: 1,
                }]
            }, options: {
                indexAxis: 'y', responsive: true, maintainAspectRatio: false, plugins: {
                    legend: {
                        display: false,

                        position: 'top',
                    },

                }, scales: {
                    x: {
                        grid: {
                            display: false
                        }
                    }, y: {
                        grid: {
                            display: false
                        }
                    },
                }
            },
        });
        this.charts.push(chart)

    }

    BarChart.prototype.stackedExample = function () {
        var chartElement = document.getElementById('stacked-example');
        var dataColors = chartElement.getAttribute('data-colors');
        var colors = dataColors ? dataColors.split(",") : this.defaultColors
        var ctx = chartElement.getContext('2d');
        var chart = new Chart(ctx, {
            type: 'bar', data: {
                labels: ['Jan', 'Feb', 'March', 'April'], datasets: [{
                    label: 'Dataset 1', data: [12, -19, 14, -15], backgroundColor: colors[0],
                }, {
                    label: 'Dataset 2', data: [-10, 19, -15, -8], backgroundColor: colors[1],
                }, {
                    label: 'Dataset 3', data: [-10, 19, -15, -8], backgroundColor: colors[2],
                }]
            }, options: {
                responsive: true, maintainAspectRatio: false, plugins: {
                    legend: {
                        display: false,

                        position: 'top',
                    },

                }, scales: {
                    x: {
                        stacked: true,

                        grid: {
                            display: false
                        }
                    }, y: {
                        stacked: true,

                        grid: {
                            display: false
                        }
                    },
                }
            },
        });
        this.charts.push(chart)
    }

    BarChart.prototype.groupStackedExample = function () {
        var chartElement = document.getElementById('group-stack-example');
        var dataColors = chartElement.getAttribute('data-colors');
        var colors = dataColors ? dataColors.split(",") : this.defaultColors
        var ctx = chartElement.getContext('2d');
        var chart = new Chart(ctx, {
            type: 'bar', data: {
                labels: ['Jan', 'Feb', 'March', 'April'], datasets: [{
                    label: 'Dataset 1', data: [12, -19, 14, -15], backgroundColor: colors[0], stack: 'Stack 0',

                }, {
                    label: 'Dataset 2', data: [-10, 19, -15, -8], backgroundColor: colors[1], stack: 'Stack 0',

                }, {
                    label: 'Dataset 3', data: [-10, 19, -15, -8], backgroundColor: colors[2], stack: 'Stack 1',

                }]
            }, options: {
                responsive: true, maintainAspectRatio: false, plugins: {
                    legend: {
                        display: false,

                        position: 'top',
                    },

                }, scales: {
                    x: {
                        stacked: true,

                        grid: {
                            display: false
                        }
                    }, y: {
                        stacked: true,

                        grid: {
                            display: false
                        }
                    },
                }
            },
        });
        this.charts.push(chart)
    }

    BarChart.prototype.verticalExample = function () {
        var chartElement = document.getElementById('vertical-example');
        var dataColors = chartElement.getAttribute('data-colors');
        var colors = dataColors ? dataColors.split(",") : this.defaultColors
        var ctx = chartElement.getContext('2d');
        var chart = new Chart(ctx, {
            type: 'bar', data: {
                labels: ['Jan', 'Feb', 'March', 'April'], datasets: [{
                    label: 'Dataset 1', data: [12, -19, 14, -15], backgroundColor: colors[0],

                }, {
                    label: 'Dataset 2', data: [-10, 19, -15, -8], backgroundColor: colors[1],

                }]
            }, options: {
                responsive: true, maintainAspectRatio: false, plugins: {
                    legend: {
                        display: false,

                        position: 'top',
                    },

                }, scales: {
                    x: {

                        grid: {
                            display: false
                        }
                    }, y: {

                        grid: {
                            display: false
                        }
                    },
                }
            },
        });
        this.charts.push(chart)
    }


    //initializing various components and plugins
    BarChart.prototype.init = function () {
        var $this = this;
        Chart.defaults.font.family = '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif';

        Chart.defaults.color = "#8391a2";
        Chart.defaults.scale.grid.color = "#8391a2";
        // init charts
        this.borderRadiusExample();
        this.floatingBarExample();
        this.horizontalExample();
        this.stackedExample();
        this.groupStackedExample();
        this.verticalExample();

        // enable resizing matter


        $(window).on('resizeEnd', function (e) {
            $.each($this.charts, function (index, chart) {
                try {
                    chart.destroy();
                } catch (err) {
                }
            });
            $this.borderRadiusExample();
            $this.floatingBarExample();
            $this.horizontalExample();
            $this.stackedExample();
            $this.groupStackedExample();
            $this.verticalExample();
        });

        $(window).resize(function () {
            if (this.resizeTO) clearTimeout(this.resizeTO);
            this.resizeTO = setTimeout(function () {
                $(this).trigger('resizeEnd');
            }, 500);
        });
    };

    //init chart
    $.ChartJs = new BarChart;
    $.ChartJs.Constructor = BarChart
}(window.jQuery),

    //initializing ChartJs
    function ($) {
        "use strict";
        $.ChartJs.init()
    }(window.jQuery);

/* utility function */

function hexToRGB(hex, alpha) {
    var r = parseInt(hex.slice(1, 3), 16), g = parseInt(hex.slice(3, 5), 16), b = parseInt(hex.slice(5, 7), 16);

    if (alpha) {
        return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
    } else {
        return "rgb(" + r + ", " + g + ", " + b + ")";
    }
}



/**
  
 *  Author:  KT
 * Module/App: Chartjs
 */

!function ($) {
    "use strict";

    var LineChart = function () {
        this.$body = $("body");
        this.charts = [];

        this.defaultColors = ["#727cf5", "#0acf97", "#fa5c7c", "#ffbc00"];


    };

    LineChart.prototype.interpolationExample = function () {
        var chartElement = document.getElementById('interpolation-example');
        var dataColors = chartElement.getAttribute('data-colors');
        var colors = dataColors ? dataColors.split(",") : this.defaultColors;
        var ctx = chartElement.getContext('2d');
        var datapoints = [0, 20, 20, 60, 60, 120, NaN, 180, 120, 125, 105, 110, 170];

        var chart = new Chart(ctx, {
            type: 'line', data: {
                labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'], datasets: [{
                    label: 'Fully Rounded',
                    data: datapoints,
                    borderColor: colors[0],
                    fill: false,
                    cubicInterpolationMode: 'monotone',
                    tension: 0.4
                }, {
                    label: 'Small Radius', data: datapoints, borderColor: colors[1], fill: false, tension: 0.4
                }, {
                    label: 'Small Radius', data: datapoints, borderColor: colors[2], fill: false,
                },]
            }, options: {
                responsive: true, maintainAspectRatio: false, interaction: {
                    intersect: false,
                }, plugins: {
                    legend: {
                        display: false,

                        position: 'top',
                    },

                }, scales: {
                    x: {
                        grid: {
                            display: false
                        }
                    }, y: {
                        grid: {
                            display: false
                        }, suggestedMin: -10, suggestedMax: 200
                    },
                }
            },
        });

        this.charts.push(chart);
    }


    LineChart.prototype.lineExample = function () {
        var chartElement = document.getElementById('line-example');
        var dataColors = chartElement.getAttribute('data-colors');
        var colors = dataColors ? dataColors.split(",") : this.defaultColors
        var ctx = chartElement.getContext('2d');
        var chart = new Chart(ctx, {
            type: 'line', data: {
                labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], datasets: [{
                    label: 'Fully Rounded',
                    data: [32, 42, 42, 62, 52, 75, 62],
                    borderColor: colors[0],
                    fill: true,
                    backgroundColor: hexToRGB(colors[0], 0.3),

                }, {
                    label: 'Small Radius',
                    data: [42, 58, 66, 93, 82, 105, 92],
                    fill: true,
                    backgroundColor: 'transparent',
                    borderColor: colors[1],
                    borderDash: [5, 5],
                }]
            }, options: {
                responsive: true, maintainAspectRatio: false,

                plugins: {
                    legend: {
                        display: false,

                        position: 'top',
                    },

                }, tension: 0.3, scales: {
                    x: {
                        grid: {
                            display: false
                        }
                    }, y: {
                        grid: {
                            display: false
                        }
                    },
                }
            },
        });

        this.charts.push(chart)
    }

    LineChart.prototype.multiAxesExample = function () {
        var chartElement = document.getElementById('multi-axes-example');
        var dataColors = chartElement.getAttribute('data-colors');
        var colors = dataColors ? dataColors.split(",") : this.defaultColors
        var ctx = chartElement.getContext('2d');
        var chart = new Chart(ctx, {
            type: 'line', data: {
                labels: ['Jan', 'Feb', 'March', 'April', "May", "June", "July"], datasets: [{
                    label: 'Fully Rounded',
                    data: [12, -19, 14, -15, 18, -14, -7],
                    borderColor: colors[0],
                    backgroundColor: hexToRGB(colors[0], 0.3),
                    borderWidth: 1.5,
                    yAxisID: 'y',

                }, {
                    label: 'Small Radius',
                    data: [-10, 19, -15, -8, -17, 12, 8],
                    backgroundColor: hexToRGB(colors[1], 0.3),
                    borderColor: colors[1],
                    borderWidth: 1.5,
                    yAxisID: 'y1',

                }]
            }, options: {
                interaction: {
                    mode: 'index', intersect: false,
                }, responsive: true, maintainAspectRatio: false, plugins: {
                    legend: {
                        display: false,

                        position: 'top',
                    },

                }, tension: 0.2, scales: {
                    x: {
                        grid: {
                            display: false
                        }
                    }, y: {
                        type: 'linear', display: true, position: 'left', grid: {
                            display: false
                        }
                    }, y1: {
                        type: 'linear', display: true, position: 'right', grid: {
                            drawOnChartArea: false, // only want the grid lines for one axis to show up
                        },
                    },
                }
            },
        });
        this.charts.push(chart)

    }

    LineChart.prototype.pointStylingExample = function () {
        var chartElement = document.getElementById('point-styling-example');
        var dataColors = chartElement.getAttribute('data-colors');
        var colors = dataColors ? dataColors.split(",") : this.defaultColors
        var ctx = chartElement.getContext('2d');
        var chart = new Chart(ctx, {
            type: 'line', data: {
                labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6'], datasets: [{
                    label: 'Dataset 1',
                    data: [12, -19, 14, -15, 14, -8],
                    borderColor: colors[0],
                    pointStyle: 'circle',
                    pointRadius: 10,
                    pointHoverRadius: 15
                },]
            }, options: {
                responsive: true, maintainAspectRatio: false, plugins: {
                    legend: {
                        display: false,
                    },

                }, scales: {
                    x: {
                        stacked: true,

                        grid: {
                            display: false
                        }
                    }, y: {
                        stacked: true,

                        grid: {
                            display: false
                        }
                    },
                }
            },
        });
        this.charts.push(chart)
    }

    LineChart.prototype.lineSegmentExample = function () {
        var chartElement = document.getElementById('line-segment-example');
        var dataColors = chartElement.getAttribute('data-colors');
        var colors = dataColors ? dataColors.split(",") : this.defaultColors
        var ctx = chartElement.getContext('2d');
        var chart = new Chart(ctx, {
            type: 'line', data: {
                labels: ['Jan', 'Feb', 'March', 'April', "May", "June", "July"], datasets: [{
                    label: 'Dataset 1',
                    data: [65, 59, NaN, 48, 56, 57, 40],
                    borderColor: colors[0],
                    spanGaps: true,
                    segment: {
                        borderColor: function (ctx){ return skipped(ctx, 'rgb(0,0,0,0.2)') || down(ctx, 'rgb(192,75,75)')},
                        borderDash: function (ctx){ return  skipped(ctx, [6, 6])},
                    },

                }]
            }, options: {
                responsive: true, maintainAspectRatio: false, plugins: {
                    legend: {
                        display: false,

                        position: 'top',
                    },

                }, scales: {
                    x: {
                        stacked: true,

                        grid: {
                            display: false
                        }
                    }, y: {
                        stacked: true,

                        grid: {
                            display: false
                        }
                    },
                }
            },
        });
        this.charts.push(chart)
    }

    LineChart.prototype.steppedExample = function () {
        var chartElement = document.getElementById('stepped-example');
        var dataColors = chartElement.getAttribute('data-colors');
        var colors = dataColors ? dataColors.split(",") : this.defaultColors
        var ctx = chartElement.getContext('2d');
        var chart = new Chart(ctx, {
            type: 'line', data: {
                labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6'], datasets: [{
                    label: 'Dataset 1', data: [12, -19, 14, -15, 14, -8], borderColor: colors[0],  fill: false,
                    stepped: true,

                }, ]
            }, options: {
                responsive: true, maintainAspectRatio: false,
                interaction: {
                    intersect: false,
                    axis: 'x'
                },
                plugins: {
                    legend: {
                        display: false,

                        position: 'top',
                    },

                }, scales: {
                    x: {

                        grid: {
                            display: false
                        }
                    }, y: {

                        grid: {
                            display: false
                        }
                    },
                }
            },
        });
        this.charts.push(chart)
    }


    //initializing various components and plugins
    LineChart.prototype.init = function () {
        var $this = this;
        Chart.defaults.font.family = '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif';

        Chart.defaults.color = "#8391a2";
        Chart.defaults.scale.grid.color = "#8391a2";
        // init charts
        this.interpolationExample();
        this.lineExample();
        this.multiAxesExample();
        this.pointStylingExample();
        this.lineSegmentExample();
        this.steppedExample();

        // enable resizing matter


        $(window).on('resizeEnd', function (e) {
            $.each($this.charts, function (index, chart) {
                try {
                    chart.destroy();
                } catch (err) {
                }
            });
            $this.interpolationExample();
            $this.lineExample();
            $this.multiAxesExample();
            $this.pointStylingExample();
            $this.lineSegmentExample();
            $this.steppedExample();
        });

        $(window).resize(function () {
            if (this.resizeTO) clearTimeout(this.resizeTO);
            this.resizeTO = setTimeout(function () {
                $(this).trigger('resizeEnd');
            }, 500);
        });
    };

    //init chart
    $.ChartJs = new LineChart;
    $.ChartJs.Constructor = LineChart
}(window.jQuery),

    //initializing ChartJs
    function ($) {
        "use strict";
        $.ChartJs.init()
    }(window.jQuery);

/* utility function */

function hexToRGB(hex, alpha) {
    var r = parseInt(hex.slice(1, 3), 16), g = parseInt(hex.slice(3, 5), 16), b = parseInt(hex.slice(5, 7), 16);

    if (alpha) {
        return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
    } else {
        return "rgb(" + r + ", " + g + ", " + b + ")";
    }
}

function skipped(ctx, value) {
    return ctx.p0.skip || ctx.p1.skip ? value : undefined;
}

function down(ctx, value) {
    return ctx.p0.parsed.y > ctx.p1.parsed.y ? value : undefined;
}



/**
  
 *  Author:  KT
 * Module/App: Chartjs
 */

!function ($) {
    "use strict";

    var OtherChart = function () {
        this.$body = $("body");
        this.charts = [];

        this.defaultColors = ["#727cf5", "#0acf97", "#fa5c7c", "#ffbc00"];


    };

    OtherChart.prototype.bubbleExample = function () {
        var chartElement = document.getElementById('bubble-example');
        var dataColors = chartElement.getAttribute('data-colors');
        var colors = dataColors ? dataColors.split(",") : this.defaultColors;
        var ctx = chartElement.getContext('2d');
        var chart = new Chart(ctx, {
            type: 'bubble', data: {
                labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June'], datasets: [{
                    label: 'Fully Rounded',
                    data: [{x: 10, y: 20, r: 5}, {x: 20, y: 10, r: 5}, {x: 15, y: 15, r: 5},],
                    borderColor: colors[0],
                    backgroundColor: hexToRGB(colors[0], .3),
                    borderWidth: 2,
                    borderSkipped: false,
                }, {
                    label: 'Small Radius',
                    data: [{x: 12, y: 22}, {x: 22, y: 20}, {x: 5, y: 15},],
                    backgroundColor: hexToRGB(colors[1], .3),
                    borderColor: colors[1],
                    borderWidth: 2,
                    borderSkipped: false,
                }]
            }, options: {
                responsive: true, maintainAspectRatio: false,

                plugins: {
                    legend: {
                        display: false,

                        position: 'top',
                    },

                }, scales: {
                    x: {
                        grid: {
                            display: false
                        }
                    }, y: {
                        grid: {
                            display: false
                        }
                    },
                }
            },
        });

        this.charts.push(chart);
    }


    OtherChart.prototype.donutExample = function () {
        var chartElement = document.getElementById('donut-example');
        var dataColors = chartElement.getAttribute('data-colors');
        var colors = dataColors ? dataColors.split(",") : this.defaultColors
        var ctx = chartElement.getContext('2d');
        var chart = new Chart(ctx, {
            type: 'doughnut', data: {
                labels: ["Direct", "Affilliate", "Sponsored", "E-mail"], datasets: [{
                    data: [300, 135, 48, 154], backgroundColor: colors, borderColor: "transparent", borderWidth: "3",
                }]
            }, options: {
                responsive: true, maintainAspectRatio: false, cutoutPercentage: 60, plugins: {
                    legend: {
                        display: false,

                        position: 'top',
                    },

                },
            },
        });

        this.charts.push(chart)
    }

    OtherChart.prototype.pieExample = function () {
        var chartElement = document.getElementById('pie-example');
        var dataColors = chartElement.getAttribute('data-colors');
        var colors = dataColors ? dataColors.split(",") : this.defaultColors
        var ctx = chartElement.getContext('2d');
        var chart = new Chart(ctx, {
            type: 'pie', data: {
                labels: ['Jan', 'Feb', 'March', 'April', "May"], datasets: [{
                    label: 'Fully Rounded', data: [12, 19, 14, 15, 40], backgroundColor: colors,
                }]
            }, options: {
                indexAxis: 'y', responsive: true, maintainAspectRatio: false, plugins: {
                    legend: {
                        display: false,
                    },

                }
            },
        });
        this.charts.push(chart)

    }

    OtherChart.prototype.polarAreaExample = function () {
        var chartElement = document.getElementById('polar-area-example');
        var dataColors = chartElement.getAttribute('data-colors');
        var colors = dataColors ? dataColors.split(",") : this.defaultColors
        var ctx = chartElement.getContext('2d');
        var chart = new Chart(ctx, {
            type: 'polarArea', data: {
                labels: ['Jan', 'Feb', 'March', 'April', "May"], datasets: [{
                    label: 'Dataset 1', data: [12, 19, 14, 15, 20], backgroundColor: colors,
                },]
            }, options: {
                responsive: true, maintainAspectRatio: false, plugins: {
                    legend: {
                        display: false,

                        position: 'top',
                    },


                },
                scales:{
                    r: {
                        display: false
                    }
                }
            },
        });
        this.charts.push(chart)
    }

    OtherChart.prototype.radarExample = function () {
        var chartElement = document.getElementById('radar-example');
        var dataColors = chartElement.getAttribute('data-colors');
        var colors = dataColors ? dataColors.split(",") : this.defaultColors
        var ctx = chartElement.getContext('2d');
        var chart = new Chart(ctx, {
            type: 'radar', data: {
                labels: ['Jan', 'Feb', 'March', 'April', "May", "June"], datasets: [{
                    label: 'Dataset 1',
                    data: [12, 29, 39, 22, 28, 34],
                    borderColor: colors[0],
                    backgroundColor: hexToRGB(colors[0], .3),

                }, {
                    label: 'Dataset 2',
                    data: [10, 19, 15, 28, 34, 39],
                    borderColor: colors[1],
                    backgroundColor: hexToRGB(colors[1], .3),

                },]
            }, options: {
                responsive: true, maintainAspectRatio: false, plugins: {
                    legend: {
                        display: false,
                    },

                },
            },
        });
        this.charts.push(chart)
    }

    OtherChart.prototype.scatterExample = function () {
        var chartElement = document.getElementById('scatter-example');
        var dataColors = chartElement.getAttribute('data-colors');
        var colors = dataColors ? dataColors.split(",") : this.defaultColors
        var ctx = chartElement.getContext('2d');
        var chart = new Chart(ctx, {
            type: 'scatter', data: {
                labels: ['Jan', 'Feb', 'March', 'April', "May", "June", "July"], datasets: [{
                    label: 'Dataset 1',
                    data: [{x: 10, y: 50,}, {x: 50, y: 10,}, {x: 15, y: 15,}, {x: 20, y: 45,}, {x: 25, y: 18,}, {x: 34, y: 38,},],
                    borderColor: colors[0],
                    backgroundColor: hexToRGB(colors[0], .3),

                }, {
                    label: 'Dataset 2',
                    data: [{x: 15, y: 45,}, {x: 40, y: 20,}, {x: 30, y: 5,}, {x: 35, y: 25,}, {x: 18, y: 25,}, {x: 40, y: 8,},],
                    borderColor: colors[1],
                    backgroundColor: hexToRGB(colors[1], .3),

                }]
            }, options: {
                responsive: true, maintainAspectRatio: false, plugins: {
                    legend: {
                        display: false,
                    },

                }, scales: {

                    x: {
                        grid: {
                            display: false
                        }
                    }, y: {
                        grid: {
                            display: false
                        }
                    }
                }
            },
        });
        this.charts.push(chart)
    }


    OtherChart.prototype.barLineExample = function () {
        var chartElement = document.getElementById('bar-line-example');
        var dataColors = chartElement.getAttribute('data-colors');
        var colors = dataColors ? dataColors.split(",") : this.defaultColors
        var ctx = chartElement.getContext('2d');
        var chart = new Chart(ctx, {
            type: 'line', data: {
                labels: ['Jan', 'Feb', 'March', 'April', "May", "June", "July"], datasets: [{
                    label: 'Dataset 1',
                    data: [10, 20, 35, 18, 15, 25, 22],
                    backgroundColor: colors[0],
                    stack: 'combined',
                    type: 'bar'
                }, {
                    label: 'Dataset 2',
                    data:  [13, 23, 38, 22, 25, 30, 28],

                    borderColor:colors[1],
                    stack: 'combined'

                }]
            }, options: {
                responsive: true, maintainAspectRatio: false, plugins: {
                    legend: {
                        display: false,
                    },

                }, scales: {

                    x: {
                        grid: {
                            display: false
                        }
                    }, y: {
                        stacked: true,
                        grid: {
                            display: false
                        }
                    }
                }
            },
        });
        this.charts.push(chart)
    }


    //initializing various components and plugins
    OtherChart.prototype.init = function () {
        var $this = this;
        Chart.defaults.font.family = '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif';

        Chart.defaults.color = "#8391a2";
        Chart.defaults.scale.grid.color = "#8391a2";
        // init charts
        this.bubbleExample();
        this.donutExample();
        this.pieExample();
        this.polarAreaExample();
        this.radarExample();
        this.barLineExample();
        this.scatterExample();

        // enable resizing matter


        $(window).on('resizeEnd', function (e) {
            $.each($this.charts, function (index, chart) {
                try {
                    chart.destroy();
                } catch (err) {
                }
            });
            $this.bubbleExample();
            $this.donutExample();
            $this.pieExample();
            $this.polarAreaExample();
            $this.radarExample();
            $this.barLineExample();
            $this.scatterExample();
        });

        $(window).resize(function () {
            if (this.resizeTO) clearTimeout(this.resizeTO);
            this.resizeTO = setTimeout(function () {
                $(this).trigger('resizeEnd');
            }, 500);
        });
    };

    //init chart
    $.ChartJs = new OtherChart;
    $.ChartJs.Constructor = OtherChart
}(window.jQuery),

    //initializing ChartJs
    function ($) {
        "use strict";
        $.ChartJs.init()
    }(window.jQuery);

/* utility function */

function hexToRGB(hex, alpha) {
    var r = parseInt(hex.slice(1, 3), 16), g = parseInt(hex.slice(3, 5), 16), b = parseInt(hex.slice(5, 7), 16);

    if (alpha) {
        return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
    } else {
        return "rgb(" + r + ", " + g + ", " + b + ")";
    }
}



/**
  
 *  Author:  KT
 * Module/App: CRM Dashboard
 */



//
// Campaign Sent Chart
//
var colors = ["#727cf5", "#0acf97", "#fa5c7c", "#ffbc00"];
var dataColors = $("#campaign-sent-chart").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}
var options1 = {
    chart: {
        type: 'bar',
        height: 60,
        sparkline: {
            enabled: true
        }
    },
    plotOptions: {
        bar: {
            columnWidth: '60%'
        }
    },
    colors: colors,
    series: [{
        data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54]
    }],
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    xaxis: {
        crosshairs: {
            width: 1
        },
    },
    tooltip: {
        fixed: {
            enabled: false
        },
        x: {
            show: false
        },
        y: {
            title: {
                formatter: function (seriesName) {
                    return ''
                }
            }
        },
        marker: {
            show: false
        }
    }
}

new ApexCharts(document.querySelector("#campaign-sent-chart"), options1).render();


// 
// New Leads Chart
//
var colors = ["#727cf5", "#0acf97", "#fa5c7c", "#ffbc00"];
var dataColors = $("#new-leads-chart").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}
var options2 = {
    chart: {
        type: 'line',
        height: 60,
        sparkline: {
            enabled: true
        }
    },
    series: [{
        data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54]
    }],
    stroke: {
        width: 2,
        curve: 'smooth'
    },
    markers: {
        size: 0
    },
    colors: colors,
    tooltip: {
        fixed: {
            enabled: false
        },
        x: {
            show: false
        },
        y: {
            title: {
                formatter: function (seriesName) {
                    return ''
                }
            }
        },
        marker: {
            show: false
        }
    }
}


new ApexCharts(document.querySelector("#new-leads-chart"), options2).render();


//
// Deals Charts
//
var colors = ["#727cf5", "#0acf97", "#fa5c7c", "#ffbc00"];
var dataColors = $("#deals-chart").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}
var options3 = {
    chart: {
        type: 'bar',
        height: 60,
        sparkline: {
            enabled: true
        }
    },
    plotOptions: {
        bar: {
            columnWidth: '60%'
        }
    },
    colors: colors,
    series: [{
        data: [12, 14, 2, 47, 42, 15, 47, 75, 65, 19, 14]
    }],
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    xaxis: {
        crosshairs: {
            width: 1
        },
    },
    tooltip: {
        fixed: {
            enabled: false
        },
        x: {
            show: false
        },
        y: {
            title: {
                formatter: function (seriesName) {
                    return ''
                }
            }
        },
        marker: {
            show: false
        }
    }
}


new ApexCharts(document.querySelector("#deals-chart"), options3).render();

//
// Booked Revenue Chart
//
var colors = ["#727cf5", "#0acf97", "#fa5c7c", "#ffbc00"];
var dataColors = $("#booked-revenue-chart").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}
var options4 = {
    chart: {
        type: 'bar',
        height: 60,
        sparkline: {
            enabled: true
        }
    },
    plotOptions: {
        bar: {
            columnWidth: '60%'
        }
    },
    colors: colors,
    series: [{
        data: [47, 45, 74, 14, 56, 74, 14, 11, 7, 39, 82]
    }],
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    xaxis: {
        crosshairs: {
            width: 1
        },
    },
    tooltip: {
        fixed: {
            enabled: false
        },
        x: {
            show: false
        },
        y: {
            title: {
                formatter: function (seriesName) {
                    return ''
                }
            }
        },
        marker: {
            show: false
        }
    }
}

new ApexCharts(document.querySelector("#booked-revenue-chart"), options4).render();

  
//
// CAMPAIGNS RADIALBARS CHART
//
var colors = ["#727cf5", "#0acf97", "#fa5c7c", "#ffbc00"];
var dataColors = $("#dash-campaigns-chart").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}
var options = {
    chart: {
        height: 314,
        type: 'radialBar'
    },
    colors: colors,
    series: [86, 36, 50],
    labels: ['Total Sent', 'Reached', 'Opened'],
    plotOptions: {
        radialBar: {
            track: {
                margin: 8,
            }
        }
    }
}

var chart = new ApexCharts(
    document.querySelector("#dash-campaigns-chart"),
    options
);

chart.render();


//
// REVENUE AREA CHART
//

var colors = ["#727cf5", "#0acf97", "#fa5c7c", "#ffbc00"];
var dataColors = $("#dash-revenue-chart").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}
var options = {
    chart: {
        height: 338,
        type: 'line',
        toolbar: {
            show: false
        }
    },
    stroke: {
        curve: 'smooth',
        width: 2
    },
    series: [{
        name: 'Total Revenue',
        type: 'area',
        data: [44, 55, 31, 47, 31, 43, 26, 41, 31, 47, 33, 43]
    }, {
        name: 'Total Pipeline',
        type: 'line',
        data: [55, 69, 45, 61, 43, 54, 37, 52, 44, 61, 43, 56]
    }],
    fill: {
        type: 'solid',
        opacity: [0.35, 1],
    },
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    markers: {
        size: 0
    },
    colors: colors,
    yaxis: [
        {
            title: {
                text: 'Revenue (USD)',
            },
            min: 0
        }
    ],
    tooltip: {
        shared: true,
        intersect: false,
        y: {
            formatter: function (y) {
                if (typeof y !== "undefined") {
                    return y.toFixed(0) + "k";
                }
                return y;
  
            }
        }
    },
    grid: {
        borderColor: '#f1f3fa',
        padding: {
            bottom: 5
        }
    },
    legend: {
        fontSize: '14px',
        fontFamily: '14px',
        offsetY: 5,
    },
    responsive: [{
        breakpoint: 600,
        options: {
            yaxis: {
                show: false
            },
            legend: {
                show: false
            }
        }
    }]
  }
  
  var chart = new ApexCharts(
    document.querySelector("#dash-revenue-chart"),
    options
  );
  
  chart.render();
/**
  
 *  Author:  KT
 * Module/App: CRM Management
 */





! function ($) {
    "use strict";

    var CrmManagement = function () {
        // this.$body = $("body"),
            this.charts = []
    };

    CrmManagement.prototype.init = function () {
        this.initCharts();
    }

    CrmManagement.prototype.initCharts = function() {

        var colors = ["#727cf5", "#0acf97"];
        var dataColors = $("#revenue-statistics-chart").data('colors');
        if (dataColors) {
            colors = dataColors.split(",");
        }

        var options = {
            chart: {
                height: 361,
                type: 'line',
                dropShadow: {
                    enabled: true,
                    opacity: 0.2,
                    blur: 7,
                    left: -7,
                    top: 7
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth',
                width: 4
            },
            series: [{
                name: 'Budget',
                data: [10, 20, 15, 28, 22, 34 ]
            }, {
                name: 'Revenue',
                data: [2, 26, 10, 38, 30, 48]
            }],
            colors: colors,
            zoom: {
                enabled: false
            },
            xaxis: {
                type: 'string',
                categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                tooltip: {
                    enabled: false
                },
                axisBorder: {
                    show: false
                }
            },
            yaxis: {
                labels: {
                    formatter: function (val) {
                        return val + "k"
                    },
                    offsetX: -15
                }
            }
        }

        var chart = new ApexCharts(
            document.querySelector("#revenue-statistics-chart"),
            options
        );

        chart.render();
    }

//init flotchart
$.CrmManagement = new CrmManagement, $.CrmManagement.Constructor = CrmManagement
}(window.jQuery),

//initializing CrmManagement
function ($) {
"use strict";
$(document).ready(function(e) {
    $.CrmManagement.init();
});
}(window.jQuery);


/**
  
 *  Author:  KT
 * Module/App: CRM Project
 */



//
// Campaign Sent Chart

! function ($) {
    "use strict";

    var CrmProject = function () {
        this.$body = $("body"),
            this.charts = []
    };

    CrmProject.prototype.init = function () {
        this.initCharts();
    }

    CrmProject.prototype.initCharts = function () {
        // Project Statistics
        var colors = ["#727cf5", "#0acf97"];
        var dataColors = $("#crm-project-statistics").data('colors');

        if (dataColors) {
            colors = dataColors.split(",");
        }
        var options = {
            chart: {
                height: 326,
                type: 'bar',
                toolbar: {
                    show: false
                }
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    endingShape: 'rounded',
                    columnWidth: '25%',
                },
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                show: true,
                width: 3,
                colors: ['transparent']
            },
            colors: colors,
            series: [{
                name: 'Projects',
                data: [56, 38, 85, 72, 28, 69, 55, 52, 69]
            }, {
                name: 'Working Hours',
                data: [176, 185, 256, 240, 187, 205, 191, 114, 194]
            }],
            xaxis: {
                categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
            },
            legend: {
                offsetY: 7,
            },
            fill: {
                opacity: 1

            },
            // legend: {
            //     floating: true
            // },
            grid: {
                row: {
                    colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
                    opacity: 0.2
                },
                borderColor: '#f1f3fa',
                padding: {
                    bottom: 5
                }
            }
        }

        var chart = new ApexCharts(
            document.querySelector("#crm-project-statistics"),
            options
        );

        chart.render();


        // Monthly Target

        var colors = ["#727cf5", "#0acf97"];
        var dataColors = $("#monthly-target").data('colors');
        if (dataColors) {
            colors = dataColors.split(",");
        }
        var options = {
            chart: {
                height: 256,
                type: 'donut',
            },
            legend: {
                show: false
            },
            stroke: {
                colors: ['transparent']
            },
            series: [82, 37],
            labels: ["Done Projects", "Pending Projects"],
            colors: colors,
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }]
        }

        var chart = new ApexCharts(
            document.querySelector("#monthly-target"),
            options
        );

        chart.render();
    },
        //init flotchart
        $.CrmProject = new CrmProject, $.CrmProject.Constructor = CrmProject
}(window.jQuery),

    //initializing CrmProject
    function ($) {
        "use strict";
        $(document).ready(function (e) {
            $.CrmProject.init();
        });
    }(window.jQuery);



//
// project-overview CHART
//
var colors = ["#727cf5", "#0acf97", "#fa5c7c", "#ffbc00"];
var dataColors = $("#project-overview-chart").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}
var options = {
    chart: {
        height: 326,
        type: 'radialBar'
    },
    colors: colors,
    series: [85, 70, 80, 65],
    labels: ['Product Design', 'Web Development', 'Illustration Design', 'UI/UX Design'],
    plotOptions: {
        radialBar: {
            track: {
                margin: 5,
            }
        }
    }
}

var chart = new ApexCharts(
    document.querySelector("#project-overview-chart"),
    options
);

chart.render();

/**
  
 *  Author:  KT
 * Module/App: Customers demo page
 */

$(document).ready(function() {
  "use strict";

  // Default Datatable
  $("#products-datatable").DataTable({
    language: {
      paginate: {
        previous: "<i class='mdi mdi-chevron-left'>",
        next: "<i class='mdi mdi-chevron-right'>"
      },
      info: "Showing customers _START_ to _END_ of _TOTAL_",
      lengthMenu:
        "Display <select class='form-select form-select-sm ms-1 me-1'>" +
        '<option value="10">10</option>' +
        '<option value="20">20</option>' +
        '<option value="-1">All</option>' +
        "</select> customers"
    },
    columnDefs: [
      {
          targets: -1,
          className: 'dt-body-right'
      }],
    pageLength: 10,
    columns: [
      {
        orderable: false,
        render: function(data, type, row, meta) {
          if (type === "display") {
            data =
              '<div class="form-check"><input type="checkbox" class="form-check-input dt-checkboxes"><label class="form-check-label">&nbsp;</label></div>';
          }
          return data;
        },
        checkboxes: {
          selectRow: true,
          selectAllRender:
            '<div class="form-check"><input type="checkbox" class="form-check-input dt-checkboxes"><label class="form-check-label">&nbsp;</label></div>'
        }
      },
      { orderable: true },
      { orderable: true },
      { orderable: true },
      { orderable: true },
      { orderable: true },
      { orderable: true },
      { orderable: false }
    ],
    select: {
      style: "multi"
    },
    order: [[5, "asc"]],
    drawCallback: function() {
      $(".dataTables_paginate > .pagination").addClass("pagination-rounded");
      $('#products-datatable_length label').addClass('form-label');


      // Col add & remove
      var filterDiv = document.querySelector('.dataTables_wrapper .row');
      filterDiv.querySelectorAll('.col-md-6').forEach(function(element){
        element.classList.add('col-sm-6');
        element.classList.remove('col-sm-12');
        element.classList.remove('col-md-6');
      });

    }
  });
});

/**
  
 *  Author:  KT
 * Module/App: Dashboard Analytics
 */

!function ($) {
    "use strict";

    var AnalyticsDashboard = function () {
        this.$body = $("body"),
            this.charts = []
    };

    AnalyticsDashboard.prototype.initCharts = function () {
        window.Apex = {
            chart: {
                parentHeightOffset: 0,
                toolbar: {
                    show: false
                }
            },
            grid: {
                padding: {
                    left: 0,
                    right: 0
                }
            },
            colors: ["#727cf5", "#0acf97", "#fa5c7c", "#ffbc00"],
        };

        function getRandomData(number) {
            var graphData = [];
            for (var idx = 0; idx < number; idx++) {
                graphData.push(Math.floor(Math.random() * Math.floor(90)) + 30);
            }
            return graphData;
        }

        function getDaysInMonth(month, year) {
            var date = new Date(year, month, 1);
            var days = [];
            var idx = 0;
            while (date.getMonth() === month && idx < 15) {
                var d = new Date(date);
                days.push(d.getDate() + " " + d.toLocaleString('en-us', { month: 'short' }));
                date.setDate(date.getDate() + 1);
                idx += 1;
            }
            return days;
        }

        var now = new Date();
        var labels = getDaysInMonth(now.getMonth() + 1, now.getFullYear());

        var colors = ["#727cf5", "#0acf97", "#fa5c7c", "#ffbc00"];
        var dataColors = $("#sessions-overview").data('colors');
        if (dataColors) {
            colors = dataColors.split(",");
        }
        var options = {
            chart: {
                height: 309,
                type: 'area'
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth',
                width: 4
            },
            series: [{
                name: 'Sessions',
                data: [10, 20, 5, 15, 10, 20, 15, 25, 20, 30, 25, 40, 30, 50, 35]
            }],
            zoom: {
                enabled: false
            },
            legend: {
                show: false
            },
            colors: colors,
            xaxis: {
                type: 'string',
                categories: labels,
                tooltip: {
                    enabled: false
                },
                axisBorder: {
                    show: false
                },
                labels: {

                }
            },
            yaxis: {
                labels: {
                    formatter: function (val) {
                        return val + "k"
                    },
                    offsetX: -15
                }
            },
            fill: {
                type: 'gradient',
                gradient: {
                    type: "vertical",
                    shadeIntensity: 1,
                    inverseColors: false,
                    opacityFrom: 0.45,
                    opacityTo: 0.05,
                    stops: [45, 100]
                },
            },
        }

        var chart = new ApexCharts(
            document.querySelector("#sessions-overview"),
            options
        );

        chart.render();

        // --------------------------------------------------
        var categories = [];
        for (var i = 10; i >= 1; i--) {
            categories.push(i + ' min ago');
        }
        function getRandomData(length) {
            var d = [];
            for (var idx = 0; idx < length; idx++) {
                d.push(Math.floor(Math.random() * 90) + 10);
            }
            return d;
        }

        var colors = ["#727cf5", "#0acf97", "#fa5c7c", "#ffbc00"];
        var dataColors = $("#views-min").data('colors');
        if (dataColors) {
            colors = dataColors.split(",");
        }
        var options = {
            chart: {
                height: 150,
                type: 'bar',
                stacked: true
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    endingShape: "rounded",
                    columnWidth: "22%",
                    dataLabels: {
                        position: 'top', // top, center, bottom
                    },
                },
            },
            dataLabels: {
                enabled: true,
                offsetY: -24,
                style: {
                    fontSize: '12px',
                    colors: ["#8a969c"]
                }
            },
            series: [{
                name: 'Views',
                data: getRandomData(10)
            }],
            zoom: {
                enabled: false
            },
            legend: {
                show: false
            },
            colors: colors,
            xaxis: {
                categories: categories,
                labels: {
                    show: false
                },
                axisTicks: {
                    show: false
                },
                axisBorder: {
                    show: false
                }
            },
            yaxis: {
                labels: {
                    show: false
                }
            },
            fill: {
                type: "gradient",
                gradient: {
                    inverseColors: !0,
                    shade: "light",
                    type: "horizontal",
                    shadeIntensity: .25,
                    gradientToColors: void 0,
                    opacityFrom: 1,
                    opacityTo: 1,
                    stops: [0, 100, 100, 100]
                }
            },
            tooltip: {
                y: {
                    formatter: function (val) {
                        return val;
                    }
                },
            },
        }

        var chart2 = new ApexCharts(
            document.querySelector("#views-min"),
            options
        );

        chart2.render();


        // ------------ sessions by browser
        var colors = ["#727cf5", "#0acf97", "#fa5c7c", "#ffbc00"];
        var dataColors = $("#sessions-browser").data('colors');
        if (dataColors) {
            colors = dataColors.split(",");
        }
        var options = {
            chart: {
                height: 345,
                type: 'radar',
            },
            series: [{
                name: 'Usage',
                data: [80, 50, 30, 40, 60, 20],
            }],
            labels: ['Chrome', 'Firefox', 'Safari', 'Opera', 'Edge', 'Explorer'],
            plotOptions: {
                radar: {
                    size: 130,
                    polygons: {
                        strokeColor: '#e9e9e9',
                        fill: {
                            colors: ['#f8f8f8', '#fff']
                        }
                    }
                }
            },
            colors: colors,
            yaxis: {
                labels: {
                    formatter: function (val) {
                        return val + "%";
                    }
                },
            },
            dataLabels: {
                enabled: true
            },
            markers: {
                size: 4,
                colors: ['#fff'],
                strokeColor: colors[0],
                strokeWidth: 2,
            }
        }

        var chart = new ApexCharts(
            document.querySelector("#sessions-browser"),
            options
        );

        chart.render();

        /* ------------- visitors by country */
        var colors = ["#727cf5", "#0acf97", "#fa5c7c", "#ffbc00"];
        var dataColors = $("#country-chart").data('colors');
        if (dataColors) {
            colors = dataColors.split(",");
        }
        var options = {
            chart: {
                height: 320,
                type: 'bar',
            },
            plotOptions: {
                bar: {
                    horizontal: true,
                }
            },
            colors: colors,
            dataLabels: {
                enabled: false
            },
            series: [{
                name: 'Sessions',
                data: [90, 75, 60, 50, 45, 36, 28, 20, 15, 12]
            }],
            xaxis: {
                categories: ["India", "China", "United States", "Japan", "France", "Italy", "Netherlands", "United Kingdom", "Canada", "South Korea"],
                axisBorder: {
                    show: false,
                },
                labels: {
                    formatter: function (val) {
                        return val + "%";
                    }
                }
            },
            grid: {
                strokeDashArray: [5]
            }
        }

        var chart = new ApexCharts(
            document.querySelector("#country-chart"),
            options
        );

        chart.render();

        /* ------------- visitors by os */
        var colors = ["#727cf5", "#0acf97", "#fa5c7c", "#ffbc00"];
        var dataColors = $("#sessions-os").data('colors');
        if (dataColors) {
            colors = dataColors.split(",");
        }
        var options = {
            chart: {
                height: 269,
                type: 'radialBar',
            },
            plotOptions: {
                radialBar: {
                    dataLabels: {
                        name: {
                            fontSize: '22px',
                        },
                        value: {
                            fontSize: '16px',
                        },
                        total: {
                            show: true,
                            label: 'OS',
                            formatter: function (w) {
                                // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                                return 8541
                            }
                        }
                    }
                }
            },
            colors: colors,
            series: [44, 55, 67, 83],
            labels: ['Windows', 'Macintosh', 'Linux', 'Android']
        }

        var chart = new ApexCharts(
            document.querySelector("#sessions-os"),
            options
        );

        chart.render();

    },
        // inits the map
        AnalyticsDashboard.prototype.initMaps = function () {
            //various examples
            if ($('#world-map-markers').length > 0) {
                $('#world-map-markers').vectorMap({
                    map: 'world_mill_en',
                    normalizeFunction: 'polynomial',
                    hoverOpacity: 0.7,
                    hoverColor: false,
                    regionStyle: {
                        initial: {
                            fill: 'rgba(93,106,120,0.2)'
                        }
                    },
                    series: {
                        regions: [{
                            values: {
                                "KR": "#e6ebff",
                                "CA": "#b3c3ff",
                                "GB": "#809bfe",
                                "NL": "#4d73fe",
                                "IT": "#1b4cfe",
                                "FR": "#727cf5",
                                "JP": "#e7fef7",
                                "US": "#e7e9fd",
                                "CN": "#8890f7",
                                "IN": "#727cf5",
                            }, attribute: 'fill'
                        }]
                    },
                    backgroundColor: 'transparent',
                    zoomOnScroll: false
                });
            }
        },
        //initializing various components and plugins
        AnalyticsDashboard.prototype.init = function () {
            var $this = this;
            // font
            // Chart.defaults.global.defaultFontFamily = '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif';        

            //default date range picker
            $('#dash-daterange').daterangepicker({
                singleDatePicker: true
            });

            // init charts
            this.initCharts();

            //init maps
            this.initMaps();

            // active counts
            window.setInterval(function () {
                var ac = Math.floor(Math.random() * 600 + 150);
                $("#active-users-count").text(ac);
                $("#active-views-count").text(Math.floor(Math.random() * ac + 200));
            }, 2000);
        },

        //init flotchart
        $.AnalyticsDashboard = new AnalyticsDashboard, $.AnalyticsDashboard.Constructor = AnalyticsDashboard
}(window.jQuery),

    //initializing Dashboard
    function ($) {
        "use strict";
        $.AnalyticsDashboard.init()
    }(window.jQuery);
/**
  
 *  Author:  KT
 * Module/App: Projects Dashboard
 */


!function ($) {
    "use strict";

    var ChartJs = function () {
        this.$body = $("body"), this.charts = []
    };

    ChartJs.prototype.respChart = function (selector, type, data, options) {

        //default config
        Chart.defaults.font.color = "#8391a2";
        Chart.defaults.scale.grid.color = "#8391a2";

        // get selector by context
        var ctx = selector.get(0).getContext("2d");
        // pointing parent container to make chart js inherit its width
        var container = $(selector).parent();

        // this function produce the responsive Chart JS
        function generateChart() {
            // make chart width fit with its container
            var ww = selector.attr('width', $(container).width());
            var chart;
            switch (type) {
                case 'Line':
                    chart = new Chart(ctx, { type: 'line', data: data, options: options });
                    break;
                case 'Bar':
                    chart = new Chart(ctx, { type: 'bar', data: data, options: options });
                    break;
                case 'Doughnut':
                    chart = new Chart(ctx, { type: 'doughnut', data: data, options: options });
                    break;
            }
            return chart;
        }
        // run function - render chart at first load
        return generateChart();
    }, // init various charts and returns
        ChartJs.prototype.initCharts = function () {
            var charts = [];

            if ($('#task-area-chart').length > 0) {
                var dataBgColor = $("#task-area-chart").data('bgcolor');
                var dataBorderColor = $("#task-area-chart").data('bordercolor');
                var bgColor = dataBgColor ? dataBgColor : '#727cf5';
                var borderColor = dataBorderColor ? dataBorderColor : '#727cf5';

                var lineChart = {
                    labels: ["Sprint 1", "Sprint 2", "Sprint 3", "Sprint 4", "Sprint 5", "Sprint 6", "Sprint 7", "Sprint 8", "Sprint 9", "Sprint 10", "Sprint 11", "Sprint 12", "Sprint 13", "Sprint 14", "Sprint 15", "Sprint 16", "Sprint 17", "Sprint 18", "Sprint 19", "Sprint 20", "Sprint 21", "Sprint 22", "Sprint 23", "Sprint 24"],
                    datasets: [{
                        label: "This year",
                        backgroundColor: bgColor,
                        borderColor: borderColor,
                        data: [16, 44, 32, 48, 72, 60, 84, 64, 78, 50, 68, 34, 26, 44, 32, 48, 72, 60, 74, 52, 62, 50, 32, 22]
                    }]
                };

                var lineOpts = {
                    maintainAspectRatio: false, barPercentage: 0.7, categoryPercentage: 0.5, // barSpacing: 10,
                    plugins: {
                        filler: {
                            propagate: false
                        }, legend: {
                            display: false
                        }, tooltips: {
                            intersect: false
                        }, hover: {
                            intersect: true
                        },

                    }, scales: {
                        x: {
                            grid: {
                                color: "rgba(0,0,0,0.05)"
                            }
                        }, y: {
                            ticks: {
                                stepSize: 10, display: false
                            }, min: 10, max: 100, display: true, borderDash: [5, 5], grid: {
                                color: "rgba(0,0,0,0)", fontColor: '#fff',
                            }
                        }
                    }
                };
                charts.push(this.respChart($("#task-area-chart"), 'Bar', lineChart, lineOpts));
            }

            if ($('#project-status-chart').length > 0) {
                var dataColors = $("#project-status-chart").data('colors');
                var colors = dataColors ? dataColors.split(",") : ["#0acf97", "#727cf5", "#fa5c7c"];
                //donut chart
                var donutChart = {
                    labels: ["Completed", "In-progress", "Behind"], datasets: [{
                        data: [64, 26, 10], backgroundColor: colors, borderColor: "transparent", borderWidth: "3",
                    }]
                };
                var donutOpts = {
                    maintainAspectRatio: false, cutout: 80, plugins: {
                        cutoutPercentage: 40, legend: {
                            display: false
                        }
                    }

                };
                charts.push(this.respChart($("#project-status-chart"), 'Doughnut', donutChart, donutOpts));
            }
            return charts;
        }, //initializing various components and plugins
        ChartJs.prototype.init = function () {
            var $this = this;
            // font
            Chart.defaults.font.family = '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif';

            // init charts
            $this.charts = this.initCharts();

            // enable resizing matter
            $(window).on('resizeEnd', function (e) {
                $.each($this.charts, function (index, chart) {
                    try {
                        chart.destroy();
                    } catch (err) {
                    }
                });
                $this.charts = $this.initCharts();
            });

            $(window).resize(function () {
                if (this.resizeTO) clearTimeout(this.resizeTO);
                this.resizeTO = setTimeout(function () {
                    $(this).trigger('resizeEnd');
                }, 500);
            });

        },

        //init flotchart
        $.ChartJs = new ChartJs, $.ChartJs.Constructor = ChartJs
}(window.jQuery),

    //initializing ChartJs
    function ($) {
        "use strict";
        $.ChartJs.init()
    }(window.jQuery);

/**
  
 *  Author:  KT
 * Module/App: Dashboard Analytics
 */



// 
// currency-btc-chart
//

!function ($) {
    'use strict';

    var DashboardWallet = function () {
    };

    DashboardWallet.prototype.generateData = function(){
        var balanceData = [];
        for(var i=0;i<100;i++){
            balanceData.push(5000 + Math.random()*100000 + 0.8*i*i*i)
        }
        return balanceData;
    }

    DashboardWallet.prototype.init = function() {


        this.dayDummyData = this.generateData();
        this.monthDummyData = this.generateData();
        this.weekDummyData = this.generateData();
        this.yearDummyData = this.generateData();
        
        this.dayBalanceData = [];
                
        for(var i=0;i<100;i++){
            var start = new Date();
            this.dayBalanceData.push([start.setDate(start.getDate()+i - 100), this.dayDummyData[i]]);
        }
        
        this.weekBalanceData = [];
                
        for(var i=0;i<100;i++){
            var start = new Date();
            this.weekBalanceData.push([start.setDate(start.getDate() + i*7 - 100*7), this.weekDummyData[i]]);
        }
        
        this.monthBalanceData = [];
                
        for(var i=0;i<100;i++){
            var start = new Date();
            this.monthBalanceData.push([start.setDate(start.getDate() + i*30 - 100*30), this.monthDummyData[i]]);
        }
        
        this.yearBalanceData = [];
                
        for(var i=0;i<100;i++){
            var start = new Date();
            this.yearBalanceData.push([start.setDate(start.getDate() + i*365 - 100*365), this.yearDummyData[i]]);
        }

        this.initCurrencyBTC();
        this.initCurrencyCNY();
        this.initCurrencyETH();
        this.initDayBalance();
        this.initWeekBalance();
        this.initMonthBalance();
        this.initYearBalance();

    },

    

    DashboardWallet.prototype.initCurrencyBTC = function() {


        var colors = ["#727cf5", "#0acf97", "#fa5c7c", "#ffbc00"];
        var dataColors = $("#currency-btc-chart").data('colors');
        if (dataColors) {
            colors = dataColors.split(",");
        }
        var options2 = {
            chart: {
                type: 'line',
                height: 60,
                sparkline: {
                    enabled: true
                }
            },
            series: [{
                data: [25, 33, 28, 35, 30, 40]
            }],
            stroke: {
                width: 2,
                curve: 'smooth'
            },
            markers: {
                size: 0
            },
            colors: colors,
            tooltip: {
                fixed: {
                    enabled: false
                },
                x: {
                    show: false
                },
                y: {
                    title: {
                        formatter: function (seriesName) {
                            return ''
                        }
                    }
                },
                marker: {
                    show: false
                }
            }
        }


        new ApexCharts(document.querySelector("#currency-btc-chart"), options2).render();


    }

    DashboardWallet.prototype.initCurrencyCNY = function()  {
        //
        // currency-cny-chart
        //
        var colors = ["#727cf5", "#0acf97", "#fa5c7c", "#ffbc00"];
        var dataColors = $("#currency-cny-chart").data('colors');
        if (dataColors) {
            colors = dataColors.split(",");
        }
        var options1 = {
            chart: {
                type: 'bar',
                height: 60,
                sparkline: {
                    enabled: true
                }
            },
            plotOptions: {
                bar: {
                    columnWidth: '60%'
                }
            },
            colors: colors,
            series: [{
                data: [25, 44, 12, 36, 9, 54, 25, 66, 41, 89, 63]
            }],
            labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
            xaxis: {
                crosshairs: {
                    width: 1
                },
            },
            tooltip: {
                fixed: {
                    enabled: false
                },
                x: {
                    show: false
                },
                y: {
                    title: {
                        formatter: function (seriesName) {
                            return ''
                        }
                    }
                },
                marker: {
                    show: false
                }
            }
        }

        new ApexCharts(document.querySelector("#currency-cny-chart"), options1).render();

    }

    DashboardWallet.prototype.initCurrencyETH = function()  {

        var colors = ["#727cf5", "#0acf97", "#fa5c7c", "#ffbc00"];
        var dataColors = $("#currency-eth-chart").data('colors');
        if (dataColors) {
            colors = dataColors.split(",");
        }
        var options2 = {
            chart: {
                type: 'line',
                height: 60,
                sparkline: {
                    enabled: true
                }
            },
            series: [{
                data: [25, 33, 28, 35, 30, 40]
            }],
            stroke: {
                width: 2,
                curve: 'smooth'
            },
            markers: {
                size: 0
            },
            colors: colors,
            tooltip: {
                fixed: {
                    enabled: false
                },
                x: {
                    show: false
                },
                y: {
                    title: {
                        formatter: function (seriesName) {
                            return ''
                        }
                    }
                },
                marker: {
                    show: false
                }
            }
        }


        new ApexCharts(document.querySelector("#currency-eth-chart"), options2).render();

    }

    DashboardWallet.prototype.initDayBalance = function() {



        var colors = ["#6c757d"];
        var dataColors = $("#day-balance-chart").data('colors');
        if (dataColors) {
            colors = dataColors.split(",");
        }
        var options = {
            chart: {
                type: 'area',
                height: 350,
                toolbar: {
                    show: false
                }
            },
            colors: colors,
            dataLabels: {
                enabled: false
            },
            stroke: {
                width: 1,
            },
            series: [{
                data: this.dayBalanceData
            },
            ],
            markers: {
                size: 0,
                style: 'hollow',
            },
            xaxis: {
                type: 'datetime',
                // min: new Date('01 Mar 2012').getTime(),
                tickAmount: 6,
            },
            yaxis: {
                labels: {
                    formatter: function (value) {
                        return "$" + value;
                    }
                },
            },
            tooltip: {
                x: {
                    format: 'dd MMM yyyy'
                }
            },
            fill: {
                type: 'gradient',
                gradient: {
                    shadeIntensity: 1,
                    opacityFrom: 0.7,
                    opacityTo: 0,
                    stops: [0, 100]
                }
            },
    
        }
    
        var chart = new ApexCharts(
            document.querySelector("#day-balance-chart"),
            options
        );
    
        chart.render();
    }

    DashboardWallet.prototype.initWeekBalance = function() {
        var colors = ["#6c757d"];
        var dataColors = $("#week-balance-chart").data('colors');
        if (dataColors) {
            colors = dataColors.split(",");
        }
        var options = {
            chart: {
                type: 'area',
                height: 350,
                toolbar: {
                    show: false
                }
            },
            colors: colors,
            dataLabels: {
                enabled: false
            },
            stroke: {
                width: 1,
            },
            series: [{
                data: this.weekBalanceData
            },
    
            ],
            markers: {
                size: 0,
                style: 'hollow',
            },
            xaxis: {
                type: 'datetime',
                // min: new Date('01 Mar 2012').getTime(),
                tickAmount: 6,
            },
            yaxis: {
                labels: {
                    formatter: function (value) {
                        return "$" + value;
                    }
                },
            },
            tooltip: {
                x: {
                    format: 'dd MMM yyyy'
                }
            },
            fill: {
                type: 'gradient',
                gradient: {
                    shadeIntensity: 1,
                    opacityFrom: 0.7,
                    opacityTo: 0,
                    stops: [0, 100]
                }
            },
    
        }
    
        var chart = new ApexCharts(
            document.querySelector("#week-balance-chart"),
            options
        );
    
        chart.render();
    }

    DashboardWallet.prototype.initMonthBalance = function() {
        var colors = ["#6c757d"];
        var dataColors = $("#month-balance-chart").data('colors');
        if (dataColors) {
            colors = dataColors.split(",");
        }
        var options = {
            chart: {
                type: 'area',
                height: 350,
                toolbar: {
                    show: false
                }
            },
            colors: colors,
            dataLabels: {
                enabled: false
            },
            stroke: {
                width: 1,
            },
            series: [{
                data: this.monthBalanceData
            },
    
            ],
            markers: {
                size: 0,
                style: 'hollow',
            },
            xaxis: {
                type: 'datetime',
                // min: new Date('01 Mar 2012').getTime(),
                tickAmount: 6,
            },
            yaxis: {
                labels: {
                    formatter: function (value) {
                        return "$" + value;
                    }
                },
            },
            tooltip: {
                x: {
                    format: 'dd MMM yyyy'
                }
            },
            fill: {
                type: 'gradient',
                gradient: {
                    shadeIntensity: 1,
                    opacityFrom: 0.7,
                    opacityTo: 0,
                    stops: [0, 100]
                }
            },
    
        }
    
        var chart = new ApexCharts(
            document.querySelector("#month-balance-chart"),
            options
        );
    
        chart.render();
    }

    DashboardWallet.prototype.initYearBalance = function() {
        var colors = ["#6c757d"];
        var dataColors = $("#year-balance-chart").data('colors');
        if (dataColors) {
            colors = dataColors.split(",");
        }
        var options = {
            chart: {
                type: 'area',
                height: 350,
                toolbar: {
                    show: false
                }
            },
            colors: colors,
            dataLabels: {
                enabled: false
            },
            stroke: {
                width: 1,
            },
            series: [{
                data: this.yearBalanceData
            },
    
            ],
            markers: {
                size: 0,
                style: 'hollow',
            },
            xaxis: {
                type: 'datetime',
                // min: new Date('01 Mar 2012').getTime(),
                tickAmount: 6,
            },
            yaxis: {
                labels: {
                    formatter: function (value) {
                        return "$" + value;
                    }
                },
            },
            tooltip: {
                x: {
                    format: 'dd MMM yyyy'
                }
            },
            fill: {
                type: 'gradient',
                gradient: {
                    shadeIntensity: 1,
                    opacityFrom: 0.7,
                    opacityTo: 0,
                    stops: [0, 100]
                }
            },
    
        }
    
        var chart = new ApexCharts(
            document.querySelector("#year-balance-chart"),
            options
        );
    
        chart.render();
    }

    $.DashboardWallet = new DashboardWallet, $.DashboardWallet.Constructor = DashboardWallet
    $.DashboardWallet.init();
}(window.jQuery);

/**
  
 *  Author:  KT
 * Module/App: Dashboard
 */

! function ($) {
    "use strict";

    var Dashboard = function () {
        this.$body = $("body"),
            this.charts = []
    };


    Dashboard.prototype.initCharts = function () {
        window.Apex = {
            chart: {
                parentHeightOffset: 0,
                toolbar: {
                    show: false
                }
            },
            grid: {
                padding: {
                    left: 0,
                    right: 0
                }
            },
            colors: ["#727cf5", "#0acf97", "#fa5c7c", "#ffbc00"],
        };

        var colors = ["#727cf5", "#0acf97", "#fa5c7c", "#ffbc00"];
        var dataColors = $("#revenue-chart").data('colors');
        if (dataColors) {
            colors = dataColors.split(",");
        }

        var options = {
            chart: {
                height: 370,
                type: 'line',
                dropShadow: {
                    enabled: true,
                    opacity: 0.2,
                    blur: 7,
                    left: -7,
                    top: 7
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth',
                width: 4
            },
            series: [{
                name: 'Current Week',
                data: [10, 20, 15, 25, 20, 30, 20]
            }, {
                name: 'Previous Week',
                data: [0, 15, 10, 30, 15, 35, 25]
            }],
            colors: colors,
            zoom: {
                enabled: false
            },
            legend: {
                show: false
            },
            xaxis: {
                type: 'string',
                categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                tooltip: {
                    enabled: false
                },
                axisBorder: {
                    show: false
                }
            },
            grid: {
                strokeDashArray: 7,
            },
            yaxis: {
                labels: {
                    formatter: function (val) {
                        return val + "k"
                    },
                    offsetX: -15
                }
            }
        }

        var chart = new ApexCharts(
            document.querySelector("#revenue-chart"),
            options
        );

        chart.render();

        // --------------------------------------------------
        var colors = ["#727cf5", "#e3eaef"];
        var dataColors = $("#high-performing-product").data('colors');
        if (dataColors) {
            colors = dataColors.split(",");
        }

        var options = {
            chart: {
                height: 256,
                type: 'bar',
                stacked: true
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '20%'
                },
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                show: true,
                width: 2,
                colors: ['transparent']
            },
            series: [{
                name: 'Actual',
                data: [65, 59, 80, 81, 56, 89, 40, 32, 65, 59, 80, 81]
            }, {
                name: 'Projection',
                data: [89, 40, 32, 65, 59, 80, 81, 56, 89, 40, 65, 59]
            }],
            zoom: {
                enabled: false
            },
            legend: {
                show: false
            },
            colors: colors,
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                axisBorder: {
                    show: false
                },
            },
            yaxis: {
                labels: {
                    formatter: function (val) {
                        return val + "k"
                    },
                    offsetX: -15
                }
            },
            fill: {
                opacity: 1
            },
            tooltip: {
                y: {
                    formatter: function (val) {
                        return "$" + val + "k"
                    }
                },
            },
        }

        var chart = new ApexCharts(
            document.querySelector("#high-performing-product"),
            options
        );

        chart.render();

        // --------------------------------------------------
        var colors = ["#727cf5", "#0acf97", "#fa5c7c", "#ffbc00"];
        var dataColors = $("#average-sales").data('colors');
        if (dataColors) {
            colors = dataColors.split(",");
        }
        var options = {
            chart: {
                height: 202,
                type: 'donut',
            },
            legend: {
                show: false
            },
            stroke: {
                colors: ['transparent']
            },
            series: [44, 55, 41, 17],
            labels: ["Direct", "Affilliate", "Sponsored", "E-mail"],
            colors: colors,
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }]
        }

        var chart = new ApexCharts(
            document.querySelector("#average-sales"),
            options
        );

        chart.render();
    },

        // inits the map
        Dashboard.prototype.initMaps = function () {
            //various examples
            if ($('#world-map-markers').length > 0) {
                $('#world-map-markers').vectorMap({
                    map: 'world_mill_en',
                    normalizeFunction: 'polynomial',
                    hoverOpacity: 0.7,
                    hoverColor: false,
                    regionStyle: {
                        initial: {
                            fill: '#e3eaef'
                        }
                    },
                    markerStyle: {
                        initial: {
                            r: 9,
                            'fill': '#727cf5',
                            'fill-opacity': 0.9,
                            'stroke': '#fff',
                            'stroke-width': 7,
                            'stroke-opacity': 0.4
                        },

                        hover: {
                            'stroke': '#fff',
                            'fill-opacity': 1,
                            'stroke-width': 1.5
                        }
                    },
                    backgroundColor: 'transparent',
                    markers: [{
                        latLng: [40.71, -74.00],
                        name: 'New York'
                    }, {
                        latLng: [37.77, -122.41],
                        name: 'San Francisco'
                    }, {
                        latLng: [-33.86, 151.20],
                        name: 'Sydney'
                    }, {
                        latLng: [1.3, 103.8],
                        name: 'Singapore'
                    }],
                    zoomOnScroll: false
                });
            }
        },

        //initializing various components and plugins
        Dashboard.prototype.init = function () {
            var $this = this;
            // font
            // Chart.defaults.global.defaultFontFamily = '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif';        

            //default date range picker
            $('#dash-daterange').daterangepicker({
                singleDatePicker: true
            });

            // init charts
            this.initCharts();

            //init maps
            this.initMaps();
        },

        //init flotchart
        $.Dashboard = new Dashboard, $.Dashboard.Constructor = Dashboard
}(window.jQuery),

    //initializing Dashboard
    function ($) {
        "use strict";
        $(document).ready(function (e) {
            $.Dashboard.init();
        });
    }(window.jQuery);
/**
  
 *  Author:  KT
 * Module/App: Data tables 
 */


$(document).ready(function() {
    "use strict";

    // Default Datatable
    $('#basic-datatable').DataTable({
        keys: true,
        "language": {
            "paginate": {
                "previous": "<i class='mdi mdi-chevron-left'>",
                "next": "<i class='mdi mdi-chevron-right'>"
            }
        },
        "drawCallback": function () {
            $('.dataTables_paginate > .pagination').addClass('pagination-rounded');
        }
    });

    //Buttons examples
    var table = $('#datatable-buttons').DataTable({
        lengthChange: false,
        buttons: ['copy', 'print'],
        "language": {
            "paginate": {
                "previous": "<i class='mdi mdi-chevron-left'>",
                "next": "<i class='mdi mdi-chevron-right'>"
            }
        },
        "drawCallback": function () {
            $('.dataTables_paginate > .pagination').addClass('pagination-rounded');
        }
    });

    // Multi Selection Datatable
    $('#selection-datatable').DataTable({
        select: {
            style: 'multi'
        },
        "language": {
            "paginate": {
                "previous": "<i class='mdi mdi-chevron-left'>",
                "next": "<i class='mdi mdi-chevron-right'>"
            }
        },
        "drawCallback": function () {
            $('.dataTables_paginate > .pagination').addClass('pagination-rounded');
        }
    });

    table.buttons().container()
            .appendTo('#datatable-buttons_wrapper .col-md-6:eq(0)');


    // Alternative Pagination Datatable
    $('#alternative-page-datatable').DataTable({
        "pagingType": "full_numbers",
        "drawCallback": function () {
            $('.dataTables_paginate > .pagination').addClass('pagination-rounded');
        }
    });

    // Scroll Vertical Datatable
    $('#scroll-vertical-datatable').DataTable({
        "scrollY":        "350px",
        "scrollCollapse": true,
        "paging":         false,
        "language": {
            "paginate": {
                "previous": "<i class='mdi mdi-chevron-left'>",
                "next": "<i class='mdi mdi-chevron-right'>"
            }
        },
        "drawCallback": function () {
            $('.dataTables_paginate > .pagination').addClass('pagination-rounded');
        }
    });

    // Scroll Vertical Datatable
    $('#scroll-horizontal-datatable').DataTable({
        "scrollX": true,
        "language": {
            "paginate": {
                "previous": "<i class='mdi mdi-chevron-left'>",
                "next": "<i class='mdi mdi-chevron-right'>"
            }
        },
        "drawCallback": function () {
            $('.dataTables_paginate > .pagination').addClass('pagination-rounded');
        }
    });

    // Complex headers with column visibility Datatable
    $('#complex-header-datatable').DataTable({
        "language": {
            "paginate": {
                "previous": "<i class='mdi mdi-chevron-left'>",
                "next": "<i class='mdi mdi-chevron-right'>"
            }
        },
        "drawCallback": function () {
            $('.dataTables_paginate > .pagination').addClass('pagination-rounded');
        },
        "columnDefs": [ {
            "visible": false,
            "targets": -1
        } ]
    });

    // Row created callback Datatable
    $('#row-callback-datatable').DataTable({
        "language": {
            "paginate": {
                "previous": "<i class='mdi mdi-chevron-left'>",
                "next": "<i class='mdi mdi-chevron-right'>"
            }
        },
        "drawCallback": function () {
            $('.dataTables_paginate > .pagination').addClass('pagination-rounded');
        },
        "createdRow": function ( row, data, index ) {
            if ( data[5].replace(/[\$,]/g, '') * 1 > 150000 ) {
                $('td', row).eq(5).addClass('text-danger');
            }
        }
    });

    // State Saving Datatable
    $('#state-saving-datatable').DataTable({
        stateSave: true,
        "language": {
            "paginate": {
                "previous": "<i class='mdi mdi-chevron-left'>",
                "next": "<i class='mdi mdi-chevron-right'>"
            }
        },
        "drawCallback": function () {
            $('.dataTables_paginate > .pagination').addClass('pagination-rounded');
        }
    });

    // Fixed header Datatable
    // $('#fixed-header-datatable').DataTable( {
    //     fixedHeader: true,
    // });

    // Fixed Columns Datatable
    $('#fixed-columns-datatable').DataTable( {
        scrollY: 300,
        scrollX: true,
        scrollCollapse: true,
        paging: false,
        fixedColumns: true
    });

    $(".dataTables_length select").addClass('form-select form-select-sm');
    $(".dataTables_length label").addClass('form-label');

} );


$(document).ready(function() {
    var table = $('#fixed-header-datatable').DataTable( {
        responsive: true,
        "language": {
            "paginate": {
                "previous": "<i class='mdi mdi-chevron-left'>",
                "next": "<i class='mdi mdi-chevron-right'>"
            }
        },
        "drawCallback": function () {
            $('.dataTables_paginate > .pagination').addClass('pagination-rounded');
        }
    } );
 
    new $.fn.dataTable.FixedHeader( table );
} );
    
/**
  
 *  Author:  KT
 * Module/App: Form Wizard
 */

$(function () {
  "use strict";

  $('#basicwizard').bootstrapWizard();

  $('#progressbarwizard').bootstrapWizard({
    onTabShow: function (tab, navigation, index) {
      var $total = navigation.find('li').length;
      var $current = index + 1;
      var $percent = ($current / $total) * 100;
      $('#progressbarwizard').find('.bar').css({ width: $percent + '%' });
    }
  });

  $('#btnwizard').bootstrapWizard({ 'nextSelector': '.button-next', 'previousSelector': '.button-previous', 'firstSelector': '.button-first', 'lastSelector': '.button-last' });

  $('#rootwizard').bootstrapWizard({
    'onNext': function (tab, navigation, index) {
      var form = $($(tab).data("targetForm"));
      if (form) {
        form.addClass('was-validated');
        if (form[0].checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
          return false;
        }
      }
    }
  });
});
/**
 
*  Author:  KT
* Google Maps
*/

!function($) {
    "use strict";

    var GoogleMap = function() {};

    //creates basic map
    GoogleMap.prototype.createBasic = function($container) {
        return new GMaps({
          div: $container,
          lat: -12.043333,
          lng: -77.028333
        });
    },
    //creates map with markers
    GoogleMap.prototype.createMarkers = function($container) {
        var map = new GMaps({
          div: $container,
          lat: -12.043333,
          lng: -77.028333
        });

        //sample markers, but you can pass actual marker data as function parameter
        map.addMarker({
          lat: -12.043333,
          lng: -77.03,
          title: 'Lima',
          details: {
            database_id: 42,
            author: 'HPNeo'
          },
          click: function(e){
            if(console.log)
              console.log(e);
            alert('You clicked in this marker');
          }
        });
        map.addMarker({
          lat: -12.042,
          lng: -77.028333,
          title: 'Marker with InfoWindow',
          infoWindow: {
            content: '<p>HTML Content</p>'
          }
        });

        return map;
    },
    
    //creates map with street view
    GoogleMap.prototype.createWithStreetview = function ($container, $lat, $lng) {
      return GMaps.createPanorama({
        el: $container,
        lat : $lat,
        lng : $lng
      });
    },
    
    //Type
    GoogleMap.prototype.createMapByType = function ($container, $lat, $lng) {
      var map = new GMaps({
        div: $container,
        lat: $lat,
        lng: $lng,
        mapTypeControlOptions: {
          mapTypeIds : ["hybrid", "roadmap", "satellite", "terrain", "osm", "cloudmade"]
        }
      });
      map.addMapType("osm", {
        getTileUrl: function(coord, zoom) {
          return "http://tile.openstreetmap.org/" + zoom + "/" + coord.x + "/" + coord.y + ".png";
        },
        tileSize: new google.maps.Size(256, 256),
        name: "OpenStreetMap",
        maxZoom: 18
      });
      map.addMapType("cloudmade", {
        getTileUrl: function(coord, zoom) {
          return "http://b.tile.cloudmade.com/8ee2a50541944fb9bcedded5165f09d9/1/256/" + zoom + "/" + coord.x + "/" + coord.y + ".png";
        },
        tileSize: new google.maps.Size(256, 256),
        name: "CloudMade",
        maxZoom: 18
      });
      map.setMapTypeId("osm");
      return map;
    },

    //creates map with style
    GoogleMap.prototype.createWithStyle = function($container, styleJson) {
      var map = new GMaps({
        div: $container,
        lat: -12.043333,
        lng: -77.028333,
        styles: styleJson
      });
  },
    
    //init
    GoogleMap.prototype.init = function() {
      var $this = this;
      $(document).ready(function(){
        //creating basic map
        $this.createBasic('#gmaps-basic'),

        //with sample markers
        $this.createMarkers('#gmaps-markers');

        //street view
        $this.createWithStreetview('#panorama',  40.7295174, -73.9986496);

        //types
        $this.createMapByType('#gmaps-types', -12.043333, -77.028333);
        
        // style - ultra light
        $this.createWithStyle("#ultra-light", [
          {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#e9e9e9"
              },
              {
                "lightness": 17
              }
            ]
          },
          {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#f5f5f5"
              },
              {
                "lightness": 20
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#ffffff"
              },
              {
                "lightness": 17
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [
              {
                "color": "#ffffff"
              },
              {
                "lightness": 29
              },
              {
                "weight": 0.2
              }
            ]
          },
          {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#ffffff"
              },
              {
                "lightness": 18
              }
            ]
          },
          {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#ffffff"
              },
              {
                "lightness": 16
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#f5f5f5"
              },
              {
                "lightness": 21
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#dedede"
              },
              {
                "lightness": 21
              }
            ]
          },
          {
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "visibility": "on"
              },
              {
                "color": "#ffffff"
              },
              {
                "lightness": 16
              }
            ]
          },
          {
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "saturation": 36
              },
              {
                "color": "#333333"
              },
              {
                "lightness": 40
              }
            ]
          },
          {
            "elementType": "labels.icon",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#f2f2f2"
              },
              {
                "lightness": 19
              }
            ]
          },
          {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#fefefe"
              },
              {
                "lightness": 20
              }
            ]
          },
          {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [
              {
                "color": "#fefefe"
              },
              {
                "lightness": 17
              },
              {
                "weight": 1.2
              }
            ]
          }
        ])
      });

      $this.createWithStyle("#dark", [
        {
            "featureType": "all",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "all",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "saturation": 36
                },
                {
                    "color": "#000000"
                },
                {
                    "lightness": 40
                }
            ]
        },
        {
            "featureType": "all",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#000000"
                },
                {
                    "lightness": 16
                }
            ]
        },
        {
            "featureType": "all",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": 20
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": 17
                },
                {
                    "weight": 1.2
                }
            ]
        },
        {
            "featureType": "administrative.country",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#e5c163"
                }
            ]
        },
        {
            "featureType": "administrative.locality",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#c4c4c4"
                }
            ]
        },
        {
            "featureType": "administrative.neighborhood",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#e5c163"
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": 20
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": 21
                },
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "poi.business",
            "elementType": "geometry",
            "stylers": [
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#e5c163"
                },
                {
                    "lightness": "0"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#ffffff"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "color": "#e5c163"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": 18
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#575757"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#ffffff"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "color": "#2c2c2c"
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": 16
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#999999"
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": 19
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": 17
                }
            ]
        }
    ]);
    },
    //init
    $.GoogleMap = new GoogleMap, $.GoogleMap.Constructor = GoogleMap
}(window.jQuery),

//initializing 
function($) {
    "use strict";
    $.GoogleMap.init()
}(window.jQuery);
/**
  
 *  Author:  KT
 * Module/App: Inbox 
 */


 // Email Checked
$('input:checkbox').change(function(){
    if($(this).is(":checked")) {
        $(this).parent().parent().parent().parent().addClass("mail-selected");
    } else {
        $(this).parent().parent().parent().parent().removeClass("mail-selected");
    }
});


// Email Compose
!function ($) {
    "use strict";

    var SimpleMDEEditor = function () {
    };

    /* Initializing */
    SimpleMDEEditor.prototype.init = function () {
        // e.g.
        var simplemde = new SimpleMDE({
            element: document.getElementById("simplemde1"),
            spellChecker: false,
            placeholder: "Write something..",
            tabSize: 2,
            status: false,
            autosave: {
                enabled: false
            }
        });
    },
     //init SimpleMDE
     $.SimpleMDEEditor = new SimpleMDEEditor, $.SimpleMDEEditor.Constructor = SimpleMDEEditor

}(window.jQuery),
    
//initializing 
function ($) {
    "use strict";
    $.SimpleMDEEditor.init();
}(window.jQuery);
    
/**
  
 *  Author:  KT
 * Module/App: Chartjs 
 */

! function ($) {
    "use strict";

    var JSTree = function () {
        this.$body = $("body")
    };

        //initializing various components and plugins
        JSTree.prototype.init = function () {

            // jstree-1
            $("#jstree-1").jstree({
                "core": {
                    "themes": {
                        "responsive": false
                    }
                },
                "types": {
                    "default": {
                        "icon": "ri-folder-line"
                    },
                    "file": {
                        "icon": "ri-article-line"
                    }
                },
                "plugins": ["types"]
            });

            // handle link clicks in tree nodes(support target="_blank" as well)
            $('#jstree-1').on('select_node.jstree', function(e, data) {
                var link = $('#' + data.selected).find('a');
                if (link.attr("href") != "#" && link.attr("href") != "javascript:;" && link.attr("href") != "") {
                    if (link.attr("target") == "_blank") {
                        link.attr("href").target = "_blank";
                    }
                    document.location.href = link.attr("href");
                    return false;
                }
            });


            // jstree-2
            $('#jstree-2').jstree({
                "core": {
                    "themes": {
                        "responsive": false
                    }
                },
                "types": {
                    "default": {
                        "icon": "ri-folder-line text-warning"
                    },
                    "file": {
                        "icon": "ri-article-line  text-warning"
                    }
                },
                "plugins": ["types"]
            });

            $('#jstree-2').on('select_node.jstree', function(e, data) {
                var link = $('#' + data.selected).find('a');
                if (link.attr("href") != "#" && link.attr("href") != "javascript:;" && link.attr("href") != "") {
                    if (link.attr("target") == "_blank") {
                        link.attr("href").target = "_blank";
                    }
                    document.location.href = link.attr("href");
                    return false;
                }
            });


            // jstree-3
            $('#jstree-3').jstree({
                "plugins": ["wholerow", "checkbox", "types"],
                "core": {
                    "themes": {
                        "responsive": false
                    },
                    "data": [{
                           "text": "Same but with checkboxes",
                            "children": [{
                                "text": "initially selected",
                                "state": {
                                    "selected": true
                                }
                            }, {
                                "text": "custom icon",
                                "icon": "ri-feedback-line text-danger"
                            }, {
                                "text": "initially open",
                                "icon": "ri-folder-line text-default",
                                "state": {
                                    "opened": true
                                },
                                "children": ["Another node"]
                            }, {
                                "text": "custom icon",
                                "icon": "ri-article-line text-warning"
                            }, {
                                "text": "disabled node",
                                "icon": "ri-close-circle-line text-success",
                                "state": {
                                    "disabled": true
                                }
                            }]
                        },
                        "And wholerow selection"
                    ]
                },
                "types": {
                    "default": {
                        "icon": "ri-folder-line text-warning"
                    },
                    "file": {
                        "icon": "ri-article-line  text-warning"
                    }
                },
            });



            // jstree-4
            $("#jstree-4").jstree({
                "core": {
                    "themes": {
                        "responsive": false
                    },
                    // so that create works
                    "check_callback": true,
                    "data": [{
                            "text": "Parent Node",
                            "children": [{
                                "text": "Initially selected",
                                "state": {
                                    "selected": true
                                }
                            }, {
                                "text": "Custom Icon",
                                "icon": "ri-feedback-line text-danger"
                            }, {
                                "text": "Initially open",
                                "icon": "ri-folder-line text-success",
                                "state": {
                                    "opened": true
                                },
                                "children": [{
                                    "text": "Another node",
                                    "icon": "ri-article-line text-warning"
                                }]
                            }, {
                                "text": "Another Custom Icon",
                                "icon": "ri-article-line text-warning"
                            }, {
                                "text": "Disabled Node",
                                "icon": "ri-close-circle-line text-success",
                                "state": {
                                    "disabled": true
                                }
                            }, {
                                "text": "Sub Nodes",
                                "icon": "ri-folder-line text-danger",
                                "children": [{
                                        "text": "Item 1",
                                        "icon": "ri-article-line text-warning"
                                    },
                                    {
                                        "text": "Item 2",
                                        "icon": "ri-article-line text-success"
                                    },
                                    {
                                        "text": "Item 3",
                                        "icon": "ri-article-line text-default"
                                    },
                                    {
                                        "text": "Item 4",
                                        "icon": "ri-article-line text-danger"
                                    },
                                    {
                                        "text": "Item 5",
                                        "icon": "ri-article-line text-info"
                                    }
                                ]
                            }]
                        },
                        "Another Node"
                    ]
                },
                "types": {
                    "default": {
                        "icon": "ri-folder-line text-primary"
                    },
                    "file": {
                        "icon": "ri-article-line  text-primary"
                    }
                },
                "state": {
                    "key": "demo2"
                },
                "plugins": ["contextmenu", "state", "types"]
            });



            // jstree-5
            $("#jstree-5").jstree({
                "core": {
                    "themes": {
                        "responsive": false
                    },
                    // so that create works
                    "check_callback": true,
                    "data": [{
                            "text": "Parent Node",
                            "children": [{
                                "text": "Initially selected",
                                "state": {
                                    "selected": true
                                }
                            }, {
                                "text": "Custom Icon",
                                "icon": "ri-article-line text-danger"
                            }, {
                                "text": "Initially open",
                                "icon": "ri-folder-line text-success",
                                "state": {
                                    "opened": true
                                },
                                "children": [{
                                    "text": "Another node",
                                    "icon": "ri-article-line text-warning"
                                }]
                            }, {
                                "text": "Another Custom Icon",
                                "icon": "ri-line-chart-line text-warning"
                            }, {
                                "text": "Disabled Node",
                                "icon": "ri-close-circle-line text-success",
                                "state": {
                                    "disabled": true
                                }
                            }, {
                                "text": "Sub Nodes",
                                "icon": "ri-folder-line text-danger",
                                "children": [{
                                        "text": "Item 1",
                                        "icon": "ri-article-line text-warning"
                                    },
                                    {
                                        "text": "Item 2",
                                        "icon": "ri-article-line text-success"
                                    },
                                    {
                                        "text": "Item 3",
                                        "icon": "ri-article-line text-default"
                                    },
                                    {
                                        "text": "Item 4",
                                        "icon": "ri-article-line text-danger"
                                    },
                                    {
                                        "text": "Item 5",
                                        "icon": "ri-article-line text-info"
                                    }
                                ]
                            }]
                        },
                        "Another Node"
                    ]
                },
                "types": {
                    "default": {
                        "icon": "ri-folder-line text-success"
                    },
                    "file": {
                        "icon": "ri-article-line  text-success"
                    }
                },
                "state": {
                    "key": "demo2"
                },
                "plugins": ["dnd", "state", "types"]
            });




            // jstree-6
            $("#jstree-6").jstree({
                "core": {
                    "themes": {
                        "responsive": false
                    },
                    // so that create works
                    "check_callback": true,
                    'data' : {
                        'url' : function (node) {
                          return node.id === '#' ?
                            'assets/data/ajax_demo_children.json' : 'assets/data/ajax_demo_children.json';
                        },
                        'data' : function (node) {
                          return { 'id' : node.id };
                        }
                      }
                },
                "types": {
                    "default": {
                        "icon": "ri-folder-line text-primary"
                    },
                    "file": {
                        "icon": "ri-article-line  text-primary"
                    }
                },
                "state": {
                    "key": "demo3"
                },
                "plugins": ["dnd", "state", "types"]
            });

        },

        //init flotchart
        $.JSTree = new JSTree, $.JSTree.Constructor = JSTree
}(window.jQuery),

    //initializing ChartJs
    function ($) {
        "use strict";
        $.JSTree.init()
    }(window.jQuery);
    
/**
 
*  Author:  KT
* Component: Material Design Icons Listing
*/

// icons
function isNew(icon) {
    return icon.version === '6.5.95';
}
function isDeprecated(icon) {
    return typeof icon.deprecated == 'undefined'
        ? false
        : icon.deprecated;
}
function copyText(text) {
    var copyFrom = document.createElement('textarea');
    copyFrom.setAttribute("style", "position:fixed;opacity:0;top:100px;left:100px;");
    copyFrom.value = text;
    document.body.appendChild(copyFrom);
    copyFrom.select();
    document.execCommand('copy');
    var copied = document.createElement('div');
    copied.setAttribute('class', 'copied');
    copied.appendChild(document.createTextNode('Copied to Clipboard'));
    document.body.appendChild(copied);
    setTimeout(function () {
        document.body.removeChild(copyFrom);
        document.body.removeChild(copied);
    }, 1500);
};
function getIconItem(icon, isNewIcon) {
    var div = document.createElement('div'),
        i = document.createElement('i');
        div.className = "col-xl-3 col-lg-4 col-sm-6";
    i.className = 'mdi mdi-' + icon.name;
    div.appendChild(i);
    var span = document.createElement('span');
    span.appendChild(document.createTextNode('mdi-' + icon.name));
    div.appendChild(span);
    return div;
}
(function () {
    var iconsCount = 0;
    var newIconsCount = 0;
    var deprecatedIconsCount = 0;
    icons.push({ "name": "blank", "hex": "f68c" });
    icons.forEach(function (icon) {
        var item = getIconItem(icon, isNew(icon), isDeprecated(icon));
        document.getElementById('icons').appendChild(item);
        if (isNew(icon)) {
            var newItem = getIconItem(icon, false, false);
            document.getElementById('newIcons').appendChild(newItem);
            newIconsCount++;
        }
        if (isDeprecated(icon)) {
            var deprecatedItem = getIconItem(icon, false, false);
            document.getElementById('deprecatedIcons').appendChild(deprecatedItem);
            deprecatedIconsCount++;
        }
        iconsCount++;
    });
})();
/**
  
 *  Author:  KT
 * Module/App: Products demo page
 */

$(document).ready(function() {
    "use strict";

    // Default Datatable
    $('#products-datatable').DataTable({
        "language": {
            "paginate": {
                "previous": "<i class='mdi mdi-chevron-left'>",
                "next": "<i class='mdi mdi-chevron-right'>"
            },
            "info": "Showing products _START_ to _END_ of _TOTAL_",
            "lengthMenu": "Display <select class='form-select form-select-sm ms-1 me-1'>"+
                  '<option value="5">5</option>'+
                  '<option value="10">10</option>'+
                  '<option value="20">20</option>'+
                  '<option value="-1">All</option>'+
                  '</select> products',
        },
        "pageLength": 5,
        "columns": [
            {
                'orderable': false, 'targets': 0,
                'render': function(data, type, row, meta){
                    if(type === 'display'){
                        data = "<div class=\"form-check\"><input type=\"checkbox\" class=\"form-check-input dt-checkboxes\"><label class=\"form-check-label\">&nbsp;</label></div>";
                    }
                    return data;
                 },
                'checkboxes': {
                    'selectRow': true,
                    'selectAllRender': '<div class=\"form-check\"><input type=\"checkbox\" class=\"form-check-input dt-checkboxes\"><label class=\"form-check-label\">&nbsp;</label></div>'
                }
            },
            {'orderable': true},
            {'orderable': true},
            {'orderable': true},
            {'orderable': true},
            {'orderable': true},
            {'orderable': true},
            {'orderable': false}
        ],
        "select": {
            "style": "multi"
        },
        "order": [[ 1, "asc" ]],
        "drawCallback": function () {
            $('.dataTables_paginate > .pagination').addClass('pagination-rounded');
            $('#products-datatable_length label').addClass('form-label');

            // Col add & remove
            var filterDiv = document.querySelector('.dataTables_wrapper .row');
            filterDiv.querySelectorAll('.col-md-6').forEach(function(element){
                element.classList.add('col-sm-6');
                element.classList.remove('col-sm-12');
                element.classList.remove('col-md-6');
            });
        }
    });
} );
/**
  
 *  Author:  KT
 * Module/App: Profile
 */

! function ($) {
    "use strict";

    var Profile = function () {
        this.$body = $("body"),
            this.charts = []
    };

    Profile.prototype.respChart = function (selector, type, data, options) {

        var draw3 = Chart.controllers.bar.prototype.draw;
        Chart.controllers.bar.draw = function () {
            draw3.apply(this, arguments);
            var ctx = this.chart.ctx;
            var _fill = ctx.fill;
            ctx.fill = function () {
                ctx.save();
                ctx.shadowColor = 'rgba(0,0,0,0.01)';
                ctx.shadowBlur = 20;
                ctx.shadowOffsetX = 4;
                ctx.shadowOffsetY = 5;
                _fill.apply(this, arguments)
                ctx.restore();
            }
        }

        //default config
        Chart.defaults.font.color = "#8391a2";
        Chart.defaults.scale.grid.color = "#8391a2";

        // get selector by context
        var ctx = selector.get(0).getContext("2d");
        // pointing parent container to make chart js inherit its width
        var container = $(selector).parent();

        // this function produce the responsive Chart JS
        function generateChart() {
            // make chart width fit with its container
            var ww = selector.attr('width', $(container).width());
            var chart;
            switch (type) {
                case 'Line':
                    chart = new Chart(ctx, { type: 'line', data: data, options: options });
                    break;
                case 'Doughnut':
                    chart = new Chart(ctx, { type: 'doughnut', data: data, options: options });
                    break;
                case 'Pie':
                    chart = new Chart(ctx, { type: 'pie', data: data, options: options });
                    break;
                case 'Bar':
                    chart = new Chart(ctx, { type: 'bar', data: data, options: options });
                    break;
                case 'Radar':
                    chart = new Chart(ctx, { type: 'radar', data: data, options: options });
                    break;
                case 'PolarArea':
                    chart = new Chart(ctx, { data: data, type: 'polarArea', options: options });
                    break;
            }
            return chart;
        };
        // run function - render chart at first load
        return generateChart();
    },
        // init various charts and returns
        Profile.prototype.initCharts = function () {
            var charts = [];

            //barchart
            if ($('#high-performing-product').length > 0) {
                // create gradient
                var ctx = document.getElementById('high-performing-product').getContext("2d");
                var gradientStroke = ctx.createLinearGradient(0, 500, 0, 150);
                gradientStroke.addColorStop(0, "#fa5c7c");
                gradientStroke.addColorStop(1, "#727cf5");

                var barChart = {
                    // labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
                    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                    datasets: [
                        {
                            label: "Orders",
                            backgroundColor: gradientStroke,
                            borderColor: gradientStroke,
                            hoverBackgroundColor: gradientStroke,
                            hoverBorderColor: gradientStroke,
                            data: [65, 59, 80, 81, 56, 89, 40, 32, 65, 59, 80, 81]
                        },
                        {
                            label: "Revenue",
                            backgroundColor: "#e3eaef",
                            borderColor: "#e3eaef",
                            hoverBackgroundColor: "#e3eaef",
                            hoverBorderColor: "#e3eaef",
                            data: [89, 40, 32, 65, 59, 80, 81, 56, 89, 40, 65, 59]
                        }
                    ]
                };
                var barOpts = {
                    maintainAspectRatio: false,
                    datasets: {
                        bar: {
                            barPercentage: 0.7,
                            categoryPercentage: 0.5,
                        }
                    },
                    plugins:{
                        legend: {
                            display: false
                        },
                    },


                    scales: {
                        y: {
                            grid: {
                                display: false,
                                color: "rgba(0,0,0,0.05)"
                            },
                            stacked: false,
                            ticks: {
                                stepSize: 20
                            }
                        },
                        x: {
                            stacked: false,
                            grid: {
                                color: "rgba(0,0,0,0.01)"
                            }
                        }
                    }
                };

                charts.push(this.respChart($("#high-performing-product"), 'Bar', barChart, barOpts));
            }
        },

        //initializing various components and plugins
        Profile.prototype.init = function () {
            var $this = this;
            // font
            Chart.defaults.font.family = '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif';

            // init charts
            $this.charts = this.initCharts();

            // enable resizing matter
            $(window).on('resize', function (e) {
                $.each($this.charts, function (index, chart) {
                    try {
                        chart.destroy();
                    }
                    catch (err) {
                    }
                });
                $this.charts = $this.initCharts();
            });
        },

        //init flotchart
        $.Profile = new Profile, $.Profile.Constructor = Profile
}(window.jQuery),

    //initializing Profile
    function ($) {
        "use strict";
        $.Profile.init()
    }(window.jQuery);
/**
  
 *  Author:  KT
 * Module/App: Project detail chart 
 */

! function ($) {
    "use strict";

    var ChartJs = function () {
        this.$body = $("body"),
            this.charts = []
    };

    ChartJs.prototype.respChart = function (selector, type, data, options) {
        var draw = Chart.controllers.line.prototype.draw;
        Chart.controllers.line.prototype.draw = function () {
            draw.apply(this, arguments);
            var ctx = this.chart.ctx;
            var _stroke = ctx.stroke;
            ctx.stroke = function () {
                ctx.save();
                ctx.shadowColor = 'rgba(0,0,0,0.01)';
                ctx.shadowBlur = 20;
                ctx.shadowOffsetX = 0;
                ctx.shadowOffsetY = 5;
                _stroke.apply(this, arguments);
                ctx.restore();
            }
        };

        //default config
        Chart.defaults.font.color = "#8391a2";
        Chart.defaults.scale.grid.color = "#8391a2";

        // get selector by context
        var ctx = selector.get(0).getContext("2d");
        // pointing parent container to make chart js inherit its width
        var container = $(selector).parent();

        // this function produce the responsive Chart JS
        function generateChart() {
            // make chart width fit with its container
            var ww = selector.attr('width', $(container).width());
            var chart;
            switch (type) {
                case 'Line':
                    chart = new Chart(ctx, { type: 'line', data: data, options: options });
                    break;
                case 'Doughnut':
                    chart = new Chart(ctx, { type: 'doughnut', data: data, options: options });
                    break;
                case 'Pie':
                    chart = new Chart(ctx, { type: 'pie', data: data, options: options });
                    break;
                case 'Bar':
                    chart = new Chart(ctx, { type: 'bar', data: data, options: options });
                    break;
                case 'Radar':
                    chart = new Chart(ctx, { type: 'radar', data: data, options: options });
                    break;
                case 'PolarArea':
                    chart = new Chart(ctx, { data: data, type: 'polarArea', options: options });
                    break;
            }
            return chart;
        };
        // run function - render chart at first load
        return generateChart();
    },
        // init various charts and returns
        ChartJs.prototype.initCharts = function () {
            var charts = [];
            if ($('#line-chart-example').length > 0) {
                var lineChart = {
                    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                    datasets: [{
                        label: "Completed Tasks",
                        backgroundColor: 'rgba(10, 207, 151, 0.3)',
                        borderColor: '#0acf97',
                        fill: true,

                        data: [32, 42, 42, 62, 52, 75, 62]
                    }, {
                        label: "Plan Tasks",
                        fill: true,
                        backgroundColor: 'transparent',
                        borderColor: "#727cf5",
                        borderDash: [5, 5],
                        data: [42, 58, 66, 93, 82, 105, 92]
                    }]
                };

                var lineOpts = {
                    maintainAspectRatio: false,

                    plugins: {
                        filler: {
                            propagate: false
                        },
                        legend: {
                            display: false
                        },
                        tooltips: {
                            intersect: false
                        },
                        hover: {
                            intersect: true
                        },
                    },
                    tension: 0.3,
                    scales: {
                        x: {

                            grid: {
                                color: "rgba(0,0,0,0.05)"
                            }
                        },
                        y: {
                            ticks: {
                                stepSize: 20
                            },
                            display: true,
                            borderDash: [5, 5],
                            grid: {
                                color: "rgba(0,0,0,0)",
                                fontColor: '#fff'
                            }
                        }
                    }
                };
                charts.push(this.respChart($("#line-chart-example"), 'Line', lineChart, lineOpts));
            }

            
            return charts;
        },
        //initializing various components and plugins
        ChartJs.prototype.init = function () {
            var $this = this;
            // font
            Chart.defaults.font.family = '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif';

            // init charts
            $this.charts = this.initCharts();

            // enable resizing matter
            $(window).on('resize', function (e) {
                $.each($this.charts, function (index, chart) {
                    try {
                        chart.destroy();
                    }
                    catch (err) {
                    }
                });
                $this.charts = $this.initCharts();
            });
        },

        //init flotchart
        $.ChartJs = new ChartJs, $.ChartJs.Constructor = ChartJs
}(window.jQuery),

    //initializing ChartJs
    function ($) {
        "use strict";
        $.ChartJs.init()
    }(window.jQuery);
    
/**
  
 *  Author:  KT
 * Module/App: Project Gantt 
*/

$(function () {
    var task = [{
        id: '1',
        name: 'Draft the new contract document for sales team',
        start: '2019-07-16',
        end: '2019-07-20',
        progress: 55,
    },
    {
        id: '2',
        name: 'Find out the old contract documents',
        start: '2019-07-19',
        end: '2019-07-21',
        progress: 85,
        dependencies: '1'
    },
    {
        id: '3',
        name: 'Organize meeting with sales associates to understand need in detail',
        start: '2019-07-21',
        end: '2019-07-22',
        progress: 80,
        dependencies: '2'
    },
    {
        id: '4',
        name: 'iOS App home page',
        start: '2019-07-15',
        end: '2019-07-17',
        progress: 80
    },
    {
        id: '5',
        name: 'Write a release note',
        start: '2019-07-18',
        end: '2019-07-22',
        progress: 65,
        dependencies: '4'
    },
    {
        id: '6',
        name: 'Setup new sales project',
        start: '2019-07-20',
        end: '2019-07-31',
        progress: 15,
    },
    {
        id: '7',
        name: 'Invite user to a project',
        start: '2019-07-25',
        end: '2019-07-26',
        progress: 99,
        dependencies: '6'
    },
    {
        id: '8',
        name: 'Coordinate with business development',
        start: '2019-07-28',
        end: '2019-07-30',
        progress: 35,
        dependencies: '7'
    },
    {
        id: '9',
        name: 'Kanban board design',
        start: '2019-08-01',
        end: '2019-08-03',
        progress: 25,
        dependencies: '8'
    },
    {
        id: '10',
        name: 'Enable analytics tracking',
        start: '2019-08-05',
        end: '2019-08-07',
        progress: 60,
        dependencies: '9'
    }
    ];
    var gantt = new Gantt("#tasks-gantt", task, {
        view_modes: ['Quarter Day', 'Half Day', 'Day', 'Week', 'Month'],
        bar_height: 20,
        padding: 18,
        view_mode: 'Week',
        custom_popup_html: function (task) {
            // the task object will contain the updated
            // dates and progress value
            var end_date = task.end;
            var progressCls = task.progress >= 60 ? "bg-success" : (task.progress >= 30 && task.progress < 60 ? "bg-primary" : "bg-warning");
            return `
            <div class="popover fade show bs-popover-right gantt-task-details" role="tooltip">
                <div class="arrow"></div><div class="popover-body">
                <h5>${task.name}</h5><p class="mb-2">Expected to finish by ${end_date}</p>
                <div class="progress mb-2">
                <div class="progress-bar  progressCls + '" role="progressbar" style="width: ${task.progress}%;" aria-valuenow="${task.progress}"
                 aria-valuemin="0" aria-valuemax="100">${task.progress}%</div>
                </div></div></div>
                `;
        }
    });

    // handling the mode changes
    $("#modes-filter :input").on('change', function () {
        gantt.change_view_mode($(this).val());
    });


    //Vanila JS
    var modesFiltrerBtn = document.getElementById('modes-filter').querySelectorAll('.btn');
    modesFiltrerBtn.forEach(function (element) {
        element.addEventListener('click', function () {
            modesFiltrerBtn.forEach(function (element) {
                element.classList.remove('active');
            });
            element.classList.add('active');
        });
    });



});



// Snow theme
var quill = new Quill('#snow-editor', {
    theme: 'snow',
    modules: {
        'toolbar': [[{ 'font': [] }, { 'size': [] }], ['bold', 'italic', 'underline', 'strike'], [{ 'color': [] }, { 'background': [] }], [{ 'script': 'super' }, { 'script': 'sub' }], [{ 'header': [false, 1, 2, 3, 4, 5, 6] }, 'blockquote', 'code-block'], [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }], ['direction', { 'align': [] }], ['link', 'image', 'video'], ['clean']]
    },
});

// Bubble theme
var quill = new Quill('#bubble-editor', {
    theme: 'bubble'
});
var icons = '{"Buildings":{"home":["house","房子","家","主页"],"home-2":["house","房子","家","主页"],"home-3":["house","房子","家","主页"],"home-4":["house","房子","家","主页"],"home-5":["house","房子","家","主页"],"home-6":["house","房子","家","主页"],"home-7":["house","房子","家","主页"],"home-8":["house","房子","家","主页"],"home-gear":["house","房子","工厂"],"home-wifi":["smart home","房子","家具","智能家居"],"home-smile":["house","smart home","smile","房子","智能家居","微笑"],"home-smile-2":["house","smart home","smile","房子","智能家居","微笑"],"home-heart":["house","心","房子","家","主页","孤儿院"],"building":["city","office","enterprise","建筑","城市","楼","办公楼","写字楼","企业"],"building-2":["city","office","construction","enterprise","城市","建筑","楼","企业"],"building-3":["factory","plant","enterprise","工厂","建筑","楼","企业"],"building-4":["city","office","enterprise","建筑","城市","楼","办公楼","写字楼","企业"],"hotel":["building","hotel","office","enterprise","tavern","建筑","酒店","楼","办公楼","写字楼","企业"],"community":["building","hotel","社区","建筑","酒店"],"government":["building","政府","建筑","大会堂"],"bank":["bank","finance","savings","banking","银行","交易所"],"store":["shop","mall","supermarket","商店","超市","店铺","商家"],"store-2":["shop","mall","supermarket","商店","超市","店铺","商家"],"store-3":["shop","mall","supermarket","商店","超市","店铺","商家"],"hospital":["medical","health","医院"],"ancient-gate":["historical","genre","scenic","trip","travel","旅行","旅游","城门","古代","历史","景区"],"ancient-pavilion":["historical","genre","scenic","trip","travel","旅行","旅游","凉亭","古代","历史","景区"]},"Business":{"mail":["envelope","email","inbox","信封","邮箱","邮件","收件箱"],"mail-open":["envelope","email","inbox","信封","邮箱","邮件","收件箱"],"mail-send":["envelope","email","inbox","信封","邮箱","邮件","发送","发件箱"],"mail-unread":["envelope","email","inbox","信封","邮箱","邮件","未读"],"mail-add":["envelope","email","inbox","add","信封","邮箱","邮件","新增","添加"],"mail-check":["envelope","email","inbox","read","信封","邮箱","邮件","已读"],"mail-close":["envelope","email","inbox","failed","x","信封","邮箱","邮件","失败"],"mail-download":["envelope","email","inbox","download","信封","邮箱","邮件","下载"],"mail-forbid":["envelope","email","inbox","privacy","信封","邮箱","邮件","禁止"],"mail-lock":["envelope","email","inbox","lock","信封","邮箱","邮件","加密"],"mail-settings":["envelope","email","inbox","settings","信封","邮箱","邮件","设置"],"mail-star":["envelope","email","inbox","favorite","信封","邮箱","邮件","收藏","喜欢"],"mail-volume":["envelope","email","inbox","promotional email","email campaign","subscription","信封","邮箱","邮件","收件箱","推广","订阅"],"inbox":["收件箱"],"inbox-archive":["收件箱","归档","收纳"],"inbox-unarchive":["unzip","unpack","extract","收件箱","取消归档","还原","解压缩"],"cloud":["weather","云端"],"cloud-off":["offline-mode","connection-fail","slash","weather","云端","断网","无信号","连接失败"],"attachment":["annex","paperclip","附件","曲别针"],"profile":["id","档案","资料","身份证","证件"],"archive":["box","收纳","归档","存档","盒子","纸箱"],"archive-drawer":["night table","收纳","抽屉","归档","存档","床头柜"],"at":["@","mention","提到","在"],"award":["medal","achievement","badge","成就","奖牌","金牌","勋章"],"medal":["award","achievement","badge","成就","奖牌","金牌","勋章"],"medal-2":["award","achievement","badge","成就","奖牌","金牌","勋章"],"bar-chart":["statistics","rhythm","柱状图","统计","韵律","节奏"],"bar-chart-horizontal":["statistics","rhythm","柱状图","统计","韵律","节奏"],"bar-chart-2":["statistics","rhythm","柱状图","统计","排行","节奏"],"bar-chart-box":["statistics","rhythm","柱状图","统计","节奏"],"bar-chart-grouped":["statistics","rhythm","柱状图","统计","分组"],"bubble-chart":["data","analysis","statistics","气泡图","统计"],"pie-chart":["data","analysis","饼图","饼状图","数据","分析"],"pie-chart-2":["data","analysis","饼图","饼状图","数据","分析"],"pie-chart-box":["data","analysis","饼图","饼状图","数据","分析"],"donut-chart":["data","analysis","环形图","数据","分析"],"line-chart":["data","analysis","stats","折线图","数据","分析"],"bookmark":["tag","书签","标记"],"bookmark-2":["tag","书签","标记"],"bookmark-3":["tag","书签","标记","荣誉"],"briefcase":["bag","baggage","公文包","行李箱","旅行箱","皮包"],"briefcase-2":["bag","baggage","公文包","行李箱","旅行箱","皮包"],"briefcase-3":["bag","baggage","公文包","行李箱","旅行箱","皮包"],"briefcase-4":["bag","baggage","公文包","行李箱","旅行箱","皮包"],"briefcase-5":["bag","baggage","公文包","行李箱","旅行箱","皮包"],"calculator":["计算器","计算机"],"calendar":["date","plan","schedule","agenda","日历","日期","月份","计划","日程","时间表"],"calendar-2":["date","plan","schedule","agenda","日历","日期","月份","计划","日程","时间表"],"calendar-event":["date","plan","schedule","agenda","日历","日期","月份","计划","日程","时间表"],"calendar-todo":["date","plan","schedule","agenda","日历","日期","月份","计划","日程","时间表"],"calendar-check":["date","plan","schedule","agenda","check-in","punch","日历","日期","月份","计划","日程","时间表","签到","打卡"],"customer-service":["headset","客服","售后","耳机","耳麦"],"customer-service-2":["headset","客服","售后","耳机","耳麦"],"flag":["banner","pin","旗帜","旗子","国旗","标记"],"flag-2":["banner","pin","旗帜","旗子","国旗","标记"],"global":["earth","union","world","language","地球","联合","世界","全球","语言"],"honour":["honor","glory","锦旗","荣誉","荣耀","军衔"],"links":["connection","address","联系","链接","地址"],"printer":["打印机"],"printer-cloud":["打印机","云打印"],"record-mail":["voice mail","tape","录音","留言","语音信箱","磁带"],"reply":["forward","回复","答复","留言","转发"],"send-plane":["发送","纸飞机"],"send-plane-2":["发送","纸飞机"],"projector":["projection","meeting","投影仪","会议室"],"projector-2":["projection","meeting","投影仪","会议室","极米"],"slideshow":["presentation","meeting","PPT","keynote","投影","放映","演示","演讲","幻灯片","会议室"],"slideshow-2":["presentation","meeting","投影","放映","演示","演讲","幻灯片","会议室"],"slideshow-3":["presentation","meeting","投影","放映","演示","演讲","视频会议","幻灯片","会议室"],"slideshow-4":["presentation","meeting","投影","放映","演示","演讲","可视对讲","幻灯片","会议室"],"window":["browser","program","web","窗口","浏览器","程序","网站"],"window-2":["browser","program","web","窗口","浏览器","程序","网站"],"stack":["layers","图层","叠加","堆栈"],"service":["heart","handshake","cooperation","服务","握手","心","合作"],"registered":["注册","商标"],"trademark":["注册","商标"],"advertisement":["ad","广告","推广"],"copyright":["版权"],"creative-commons":["知识共享"],"creative-commons-by":["attribution","copyright","版权","知识共享","署名"],"creative-commons-nc":["noncommercial","copyright","版权","知识共享","非商业用途"],"creative-commons-nd":["no derivative works","copyright","版权","知识共享","禁止演绎"],"creative-commons-sa":["share alike","copyright","版权","知识共享","相同方式共享"],"creative-commons-zero":["cc0","copyright","版权","知识共享"]},"Communication":{"chat-1":["message","reply","comment","消息","聊天","回复","评论"],"chat-2":["message","reply","comment","消息","聊天","回复","评论"],"chat-3":["message","reply","comment","消息","聊天","回复","评论"],"chat-4":["message","reply","comment","消息","聊天","回复","评论"],"message":["chat","comment","reply","消息","聊天","回复","评论"],"message-2":["chat","reply","comment","消息","聊天","回复","评论"],"message-3":["chat","reply","comment","消息","聊天","回复","评论"],"chat-check":["message","reply","comment","消息","聊天","回复","评论","已阅"],"chat-delete":["message","comment","消息","聊天","回复","评论","清除","删除"],"chat-forward":["message","comment","消息","聊天","转发"],"chat-upload":["message","comment","消息","聊天","上传"],"chat-download":["message","comment","消息","下载"],"chat-new":["message","reply","comment","消息","聊天","回复","评论"],"chat-settings":["message","comment","消息","聊天","回复","评论","设置"],"chat-smile":["message","reply","comment","消息","聊天","回复","评论"],"chat-smile-2":["message","reply","comment","消息","聊天","回复","评论"],"chat-smile-3":["message","reply","comment","消息","聊天","回复","评论"],"chat-heart":["message","reply","comment","消息","聊天","回复","评论","心","点赞","收藏"],"chat-off":["message","reply","comment","slash","消息","聊天","回复","评论","禁止","关闭"],"feedback":["message","comment","消息","聊天","回复","评论","反馈"],"discuss":["message","reply","comment","消息","聊天","回复","评论","讨论","群聊"],"question-answer":["message","reply","comment","消息","聊天","回复","评论","讨论","群聊"],"questionnaire":["message","comment","help","消息","聊天","回复","评论","讨论","调查问卷","帮助"],"video-chat":["message","comment","消息","视频聊天"],"chat-voice":["message","comment","消息","语音消息"],"chat-quote":["message","reply","comment","消息","引用回复"],"chat-follow-up":["message","reply","comment","消息","+1","跟帖"],"chat-poll":["message","vote","questionnaire","消息","投票","问卷调查"],"chat-history":["message","历史消息","消息记录"],"chat-private":["message","私密消息","密聊"]},"Design":{"pencil":["edit","铅笔","编辑"],"edit":["pencil","铅笔","编辑"],"edit-2":["pencil","铅笔","编辑"],"ball-pen":["圆珠笔"],"quill-pen":["羽毛笔"],"mark-pen":["马克笔"],"markup":["标记","马克"],"pen-nib":["钢笔","笔尖"],"edit-box":["编辑"],"edit-circle":["编辑"],"sip":["吸管","取色器"],"brush":["笔刷","画笔","刷子"],"brush-2":["刷子"],"brush-3":["刷子"],"brush-4":["刷子"],"paint-brush":["填色","填充","刷子"],"contrast":["brightness","tonalit","对比度","亮度","色调"],"contrast-2":["moon","dark","brightness","tonalit","月亮","夜间","对比度","亮度","色调"],"drop":["water","blur","模糊","水","滴"],"blur-off":["water","drop","slash","模糊","水","滴","禁止","关闭"],"contrast-drop":["water","brightness","tonalit","水","对比度","亮度","色调","滴"],"contrast-drop-2":["water","brightness","tonalit","水","对比度","亮度","色调","滴"],"compasses":["圆规"],"compasses-2":["圆规"],"scissors":["剪刀","裁剪"],"scissors-cut":["剪刀","裁剪"],"scissors-2":["剪刀","裁剪","截屏"],"slice":["knife","切图","切片","刀"],"eraser":["remove formatting","橡皮","擦除","清除格式"],"ruler":["尺子"],"ruler-2":["尺子"],"pencil-ruler":["design","铅笔","尺子","文具","设计"],"pencil-ruler-2":["design","铅笔","尺子","文具","设计"],"t-box":["文字","字体","字号"],"input-method":["输入法","文字"],"artboard":["grid","crop","画板","裁切"],"artboard-2":["画板"],"crop":["裁切"],"crop-2":["裁切"],"screenshot":["capture","屏幕截图","截屏"],"screenshot-2":["capture","屏幕截图","截屏"],"drag-move":["arrow","拖拽","移动","箭头"],"drag-move-2":["arrow","拖拽","移动","箭头"],"focus":["aim","target","焦点","聚焦","目标","靶心"],"focus-2":["aim","target","bullseye","焦点","聚焦","目标","靶心"],"focus-3":["aim","target","bullseye","焦点","聚焦","目标","靶心"],"paint":["填色","填充","油漆桶"],"palette":["调色盘","色板"],"pantone":["色板","潘通色","色号"],"shape":["border","形状","描边","边框"],"shape-2":["border","形状","描边","边框"],"magic":["fantasy","magic stick","beautify","魔法棒","美化","幻想","魔幻"],"anticlockwise":["rotate","left","左翻转","左旋转"],"anticlockwise-2":["rotate","left","左翻转","左旋转"],"clockwise":["rotate","right","右翻转","右旋转"],"clockwise-2":["rotate","right","右翻转","右旋转"],"hammer":["锤子"],"tools":["settings","工具","设置"],"drag-drop":["drag and drop","mouse","拖拽","鼠标"],"table":["表格"],"table-alt":["表格"],"layout":["布局"],"layout-2":["collage","布局","拼贴画"],"layout-3":["collage","布局","拼贴画"],"layout-4":["collage","布局","拼贴画"],"layout-5":["collage","布局","拼贴画"],"layout-6":["collage","布局","拼贴画"],"layout-column":["左右布局"],"layout-row":["上下布局"],"layout-top":["顶部布局","顶部导航"],"layout-right":["右侧布局","右侧导航"],"layout-bottom":["底部布局","底部导航"],"layout-left":["左侧布局","左侧导航"],"layout-top-2":["顶部布局","顶部导航"],"layout-right-2":["右侧布局","右侧导航"],"layout-bottom-2":["底部布局","底部导航"],"layout-left-2":["左侧布局","左侧导航"],"layout-grid":["卡片布局","网格"],"layout-masonry":["瀑布流布局","拼贴画"],"grid":["table","网格","表格"]},"Development":{"bug":["虫子"],"bug-2":["虫子"],"code":["代码","编程"],"code-s":["代码","编程"],"code-s-slash":["代码","编程"],"code-box":["代码","编程"],"terminal-box":["code","command line","终端","代码","命令行"],"terminal":["code","command line","终端","代码","命令行"],"terminal-window":["code","command line","终端","代码","命令行"],"parentheses":["code","math","小括号"],"brackets":["code","math","中括号"],"braces":["code","math","大括号","花括号"],"command":["apple key","花键","苹果键"],"cursor":["mouse","指针","鼠标"],"git-commit":["node","提交"],"git-pull-request":["合并申请"],"git-merge":["合并"],"git-branch":["分支"],"git-repository":["仓库"],"git-repository-commits":["仓库","提交"],"git-repository-private":["私密仓库","私人仓库"],"html5":["html","h5"],"css3":["css"]},"Device":{"tv":["电视"],"tv-2":["monitor","电视","显示器"],"computer":["monitor","电脑","显示器"],"mac":["monitor","显示器"],"macbook":["laptop","笔记本"],"cellphone":["手机","电话"],"smartphone":["mobile","手机"],"tablet":["平板电脑"],"device":["设备"],"phone":["电话"],"database":["storage","数据库","存储"],"database-2":["storage","数据库","存储"],"server":["服务器"],"hard-drive":["disc","storage","硬盘","存储"],"hard-drive-2":["disc","server","storage","硬盘","服务器","存储"],"install":["安装"],"uninstall":["卸载"],"save":["floppy","保存","软盘"],"save-2":["floppy","保存","软盘"],"save-3":["floppy","保存","软盘"],"sd-card":["内存卡"],"sd-card-mini":["内存卡"],"sim-card":["电话卡"],"sim-card-2":["电话卡"],"dual-sim-1":["sim card","电话卡","卡槽","双卡双待"],"dual-sim-2":["sim card","电话卡","卡槽","双卡双待"],"u-disk":["U盘","优盘"],"battery":["电池"],"battery-charge":["电池","充电"],"battery-low":["电池","低电量"],"battery-2":["电池"],"battery-2-charge":["电池","充电"],"battery-saver":["电池","省电模式"],"battery-share":["电池共享","共享电量"],"cast":["mirroring","投屏","无线","广播"],"airplay":["mirroring","投屏","无线"],"cpu":["中央处理器"],"gradienter":["水平仪"],"keyboard":["input","键盘","输入"],"keyboard-box":["input","键盘","输入"],"mouse":["鼠标"],"sensor":["capacitor","传感器","电容器"],"router":["wifi","signal tower","radio","station","路由器","信号塔","广播","基站","流量"],"radar":["satellite receiver","雷达","卫星接收器","锅"],"gamepad":["consoles","controller","游戏手柄"],"remote-control":["controller","遥控器"],"remote-control-2":["controller","遥控器"],"device-recover":["恢复出厂设置"],"hotspot":["手机热点"],"phone-find":["找回手机"],"phone-lock":["锁定手机"],"rotate-lock":["锁定旋转屏幕"],"restart":["reload","refresh","重启"],"shut-down":["power off","关机"],"fingerprint":["指纹"],"fingerprint-2":["指纹"],"barcode":["scan","扫码","条形码","条码"],"barcode-box":["scan","扫码","条形码","条码"],"qr-code":["二维码"],"qr-scan":["二维码","扫描"],"qr-scan-2":["二维码","扫描"],"scan":["扫描"],"scan-2":["扫描"],"rss":["feed","subscribe","订阅"],"gps":["signal","定位","信号"],"base-station":["wifi","signal tower","router","cast","基站","信号塔","路由器","广播","流量"],"bluetooth":["wireless","蓝牙","无线"],"bluetooth-connect":["wireless","蓝牙","连接","无线"],"wifi":["无线网"],"wifi-off":["slash","offline","connection-fail","无线网","关闭","断网","链接失败"],"signal-wifi":["cellular","strength","无线网","信号"],"signal-wifi-1":["cellular","strength","无线网","信号"],"signal-wifi-2":["cellular","strength","无线网","信号"],"signal-wifi-3":["cellular","strength","无线网","信号"],"signal-wifi-error":["cellular","offline","connection-fail","无线网","断网","链接失败","无信号"],"signal-wifi-off":["cellular","slash","offline","connection-fail","无线网","关闭","断网","链接失败"],"wireless-charging":["power","flash","无线充电","闪充"]},"Document":{"file":["new","paper","文件","文档","新建"],"file-2":["new","paper","文件","文档","新建"],"file-3":["new","paper","文件","文档","新建"],"file-4":["new","paper","文件","文档","新建"],"sticky-note":["new","paper","文件","文档","新建","便签纸","便利贴"],"sticky-note-2":["new","paper","文件","文档","新建","便签纸","便利贴"],"file-edit":["文件","文档","编辑"],"file-paper":["文件","文档","纸","谱"],"file-paper-2":["文件","文档","纸","谱"],"file-text":["文件","文档","文本"],"file-list":["清单","列表"],"file-list-2":["清单","列表"],"file-list-3":["newspaper","清单","列表","报纸"],"bill":["账单"],"file-copy":["duplicate","clone","复制","克隆"],"file-copy-2":["duplicate","clone","复制","克隆"],"clipboard":["copy","复制","剪切板"],"survey":["research","questionnaire","调查","问卷","调研"],"article":["newspaper","文章","报纸"],"newspaper":["报纸"],"file-zip":["7z","rar","压缩包"],"file-mark":["文件","文档","标记"],"task":["todo","任务","待办"],"todo":["待办"],"book":["read","dictionary","booklet","书","阅读","字典","小册子"],"book-mark":["read","dictionary","booklet","书","阅读","字典","小册子","书签"],"book-2":["read","dictionary","booklet","书","阅读","字典","小册子"],"book-3":["read","dictionary","booklet","书","阅读","字典","小册子"],"book-open":["read","booklet","magazine","书","阅读","小册子","杂志"],"book-read":["booklet","magazine","书","阅读","小册子","杂志"],"contacts-book":["通讯录","联系人"],"contacts-book-2":["通讯录","联系人"],"contacts-book-upload":["upload","通讯录","联系人","上传"],"booklet":["notebook","手册","笔记本","小册子"],"file-code":["config","文件","文档","代码","脚本","配置文件"],"file-pdf":["文件","文档"],"file-word":["文档"],"file-ppt":["文件","文档"],"file-excel":["文档","表单"],"file-word-2":["文档"],"file-ppt-2":["文件","文档"],"file-excel-2":["文档","表单"],"file-hwp":["文件","文档","hangul word processor"],"keynote":["演示文稿","幻灯片","讲演"],"numbers":["表格"],"pages":["文稿"],"file-search":["文件","文档","搜索"],"file-add":["new","文件","文档","新建"],"file-reduce":["文件","文档","减"],"file-settings":["文件","文档","设置"],"file-upload":["文件","文档","上传"],"file-transfer":["文件","文档","传输"],"file-download":["文件","文档","下载"],"file-lock":["文件","文档","锁"],"file-chart":["report","文件","文档","柱状图","报表"],"file-chart-2":["report","文件","文档","饼图","报表"],"file-music":["文件","文档","音乐"],"file-gif":["文件","文档","动图"],"file-forbid":["文件","文档","禁用"],"file-info":["文件","文档","信息"],"file-warning":["alert","文件","文档","警告","提醒"],"file-unknow":["文件","文档","未知","问号"],"file-user":["文件","文档","用户"],"file-shield":["protected","secured","文件","文档","盾牌","保护","安全"],"file-shield-2":["protected","secured","文件","文档","盾牌","保护","安全"],"file-damage":["breakdown","broken","文件","文档","损坏","破损","破裂"],"file-history":["record","文件","文档","记录","历史"],"file-shred":["shredder","shred","destroy","cut","文档","销毁","碎纸机","破裂","粉碎"],"file-cloud":["文件","文档","云"],"folder":["directory","file","文件夹","目录","文档"],"folder-2":["directory","file","文件夹","目录","文档"],"folder-3":["directory","file","文件夹","目录","文档"],"folder-4":["directory","file","文件夹","目录","文档"],"folder-5":["directory","file","文件夹","目录","文档"],"folders":["directory","file","文件夹","目录","文档","批量"],"folder-add":["directory","file","文件夹","目录","文档","添加"],"folder-reduce":["directory","file","文件夹","目录","文档","减"],"folder-settings":["directory","file","文件夹","目录","文档","设置"],"folder-upload":["directory","file","文件夹","目录","文档","上传"],"folder-transfer":["directory","file","文件夹","目录","文档","传输"],"folder-download":["directory","file","文件夹","目录","文档","下载"],"folder-lock":["directory","file","文件夹","目录","文档","锁"],"folder-chart":["report","文件夹","目录","文档","柱状图","报表"],"folder-chart-2":["report","文件夹","目录","文档","饼图","报表"],"folder-music":["directory","file","文件夹","目录","文档","音乐"],"folder-forbid":["directory","file","文件夹","目录","文档","禁用"],"folder-info":["directory","file","文件夹","目录","文档","信息"],"folder-warning":["alert","directory","file","文件夹","目录","文档","警告","提醒"],"folder-unknow":["directory","file","文件夹","目录","文档","未知"],"folder-user":["directory","file","文件夹","目录","文档","用户"],"folder-shield":["directory","file","protected","secured","文件夹","目录","文档","保护","盾牌","安全"],"folder-shield-2":["directory","file","protected","secured","文件夹","目录","文档","保护","盾牌","安全"],"folder-shared":["directory","file","文件夹","目录","文档","分享"],"folder-received":["directory","file","文件夹","目录","文档","接收"],"folder-open":["directory","file","文件夹","目录","文档","打开"],"folder-keyhole":["directory","encryption","file","文件夹","目录","文档","打开","加密文档"],"folder-zip":["directory","file","文件夹","目录","文档","打开","压缩"],"folder-history":["directory","file","record","文件夹","目录","文档","记录","历史"],"markdown":["arrow","箭头","下"]},"Editor":{"bold":["加粗"],"italic":["斜体"],"heading":["标题"],"text":["字体"],"font-color":["文字色"],"font-size":["字号","字体大小"],"font-size-2":["字号","字体大小"],"underline":["下划线"],"emphasis":["着重号"],"emphasis-cn":["着重号"],"strikethrough":["remove formatting","删除线"],"strikethrough-2":["remove formatting","删除线"],"format-clear":["remove formatting","清除格式"],"align-left":["左对齐"],"align-center":["居中对齐"],"align-right":["右对齐"],"align-justify":["排列对齐"],"align-top":["顶部对齐"],"align-vertically":["垂直对齐"],"align-bottom":["底部对齐"],"list-check":["check list","清单列表"],"list-check-2":["check list","清单列表"],"list-ordered":["number list","有序列表"],"list-unordered":["bullet list","无序列表"],"indent-decrease":["indent more","缩进"],"indent-increase":["indent less","缩进"],"line-height":["行高"],"text-spacing":["字间距"],"text-wrap":["文本换行"],"attachment-2":["annex","paperclip","附件","曲别针"],"link":["connection","address","联系","链接","地址"],"link-unlink":["connection","remove address","去除链接"],"link-m":["connection","address","联系","链接","地址"],"link-unlink-m":["connection","remove address","去除链接"],"separator":["分割线"],"space":["空格"],"page-separator":["insert","分页符","插入"],"code-view":["代码视图"],"double-quotes-l":["left","quotaion marks","双引号"],"double-quotes-r":["right","quotaion marks","双引号"],"single-quotes-l":["left","quotaion marks","单引号"],"single-quotes-r":["right","quotaion marks","单引号"],"table-2":["表格"],"subscript":["角标","下标","脚注"],"subscript-2":["角标","下标","脚注"],"superscript":["角标","上标"],"superscript-2":["角标","上标"],"paragraph":["段落"],"text-direction-l":["文本左对齐"],"text-direction-r":["文本左对齐"],"functions":["功能"],"omega":["Ω","特殊符号"],"hashtag":["#","井号"],"asterisk":["*","星号"],"translate":["translator","翻译"],"translate-2":["translator","翻译"],"a-b":["a/b testing","ab testing","ab测试"],"english-input":["英文输入法"],"pinyin-input":["拼音输入法"],"wubi-input":["五笔输入法"],"input-cursor-move":["移动输入光标"],"number-1":["1","一","数字"],"number-2":["2","二","数字"],"number-3":["3","三","数字"],"number-4":["4","四","数字"],"number-5":["5","五","数字"],"number-6":["6","六","数字"],"number-7":["7","七","数字"],"number-8":["8","八","数字"],"number-9":["9","九","数字"],"number-0":["0","零","数字"],"sort-asc":["ranking","ordering","sorting","ascending","descending","升序排列","排序"],"sort-desc":["ranking","ordering","降序排列","排序"],"bring-forward":["arrange","层级","向上一层"],"send-backward":["arrange","层级","向下一层"],"bring-to-front":["arrange","层级","移到最前面"],"send-to-back":["arrange","层级","移到最后面"]},"Finance":{"wallet":["钱包","卡包"],"wallet-2":["钱包","卡包"],"wallet-3":["钱包","卡包"],"bank-card":["credit","purchase","payment","cc","银行卡","信用卡","购买","消费","支付"],"bank-card-2":["credit","purchase","payment","cc","银行卡","信用卡","购买","消费","支付"],"secure-payment":["credit","purchase","payment","cc","银行卡","信用卡","购买","消费","支付","安全"],"refund":["credit card","repayment","cc","银行卡","信用卡还款"],"refund-2":["credit card","repayment","cc","银行卡","信用卡还款"],"safe":["保险柜","保险箱"],"safe-2":["保险柜","保险箱"],"price-tag":["label","标签","价签"],"price-tag-2":["label","标签","价签"],"price-tag-3":["label","标签","价签"],"ticket":["coupon","票","优惠券","代金券"],"ticket-2":["coupon","票","优惠券","代金券"],"coupon":["ticket","票","优惠券","代金券"],"coupon-2":["ticket","票","优惠券","代金券"],"coupon-3":["ticket","票","优惠券","代金券"],"coupon-4":["优惠券","代金券"],"coupon-5":["优惠券","代金券"],"shopping-bag":["purse","购物袋","购买","消费","商城"],"shopping-bag-2":["购物袋","购买","消费","商城"],"shopping-bag-3":["购物袋","购买","消费","商城"],"shopping-basket":["购物篮","购买","消费","商城"],"shopping-basket-2":["购物篮","购买","消费","商城"],"shopping-cart":["购物车","购买","消费","商城"],"shopping-cart-2":["购物车","购买","消费","商城"],"vip":["会员"],"vip-crown":["king","queen","皇冠","会员","国王","女王","王后"],"vip-crown-2":["king","queen","皇冠","会员","国王","女王","王后"],"vip-diamond":["钻石","会员"],"trophy":["奖品","奖杯","金杯"],"exchange":["swap","交换","换算","兑换"],"exchange-box":["swap","交换","换算","兑换"],"swap":["exchange","交换","换算","兑换"],"swap-box":["exchange","交换","换算","兑换"],"exchange-dollar":["swap","transfer","交换","换算","兑换","美元","转账"],"exchange-cny":["swap","transfer","交换","换算","兑换","人民币","转账"],"exchange-funds":["swap","transfer","交换","换算","兑换","基金","股票","转账"],"increase-decrease":["计算器"],"percent":["百分之","百分比"],"copper-coin":["currency","payment","铜币","硬币","货币","钱","支付"],"copper-diamond":["currency","coins","金币","钻石","货币","钱","支付"],"money-cny-box":["currency","payment","货币","钱","支付","人民币"],"money-cny-circle":["currency","coins","金币","payment","货币","钱","支付","人民币"],"money-dollar-box":["currency","payment","货币","钱","支付","美元"],"money-dollar-circle":["currency","coins","金币","payment","cent","penny","货币","钱","支付","美元","美分","便士"],"money-euro-box":["currency","payment","货币","钱","支付","欧元"],"money-euro-circle":["currency","coins","金币","payment","货币","钱","支付","欧元"],"money-pound-box":["currency","payment","货币","钱","支付","英镑"],"money-pound-circle":["currency","coins","金币","payment","货币","钱","支付","英镑"],"bit-coin":["currency","payment","货币","钱","比特币"],"coin":["金币","硬币"],"coins":["金币","硬币"],"currency":["cash","payment","货币","钱"],"funds":["foundation","stock","基金","股票"],"funds-box":["foundation","stock","基金","股票"],"red-packet":["红包"],"water-flash":["水电费"],"stock":["股票"],"auction":["hammer","拍卖","锤子"],"gift":["present","礼物"],"gift-2":["present","礼物"],"hand-coin":["donate","business","捐赠"],"hand-heart":["help","donate","volunteer","welfare","帮助","爱心","捐赠","志愿者","公益"]},"Logos":{"alipay":["zhifubao","支付宝"],"amazon":["亚马逊"],"android":["applications","安卓","应用"],"angularjs":["angular","programing framework"],"app-store":["applications","苹果应用商店"],"apple":["苹果"],"baidu":["du","claw","百度","爪"],"behance":["behance"],"bilibili":["哔哩哔哩"],"centos":["linux","system","系统"],"chrome":["谷歌浏览器"],"codepen":["代码笔"],"coreos":["linux","system","系统"],"dingding":["钉钉"],"discord":["game","chat"],"disqus":["comments"],"douban":["豆瓣"],"dribbble":["追波"],"drive":["google drive","谷歌云端硬盘"],"dropbox":["多宝箱"],"edge":["microsoft edge","edge浏览器"],"evernote":["印象笔记"],"facebook":["脸书"],"facebook-circle":["脸书"],"facebook-box":["脸书"],"firefox":["火狐浏览器"],"flutter":["google"],"gatsby":["gatsby"],"github":["github"],"gitlab":["gitlab"],"google":["谷歌"],"google-play":["applications","谷歌应用商店"],"honor-of-kings":["game","王者荣耀"],"ie":["internet explorer","浏览器"],"instagram":["照片墙"],"invision":["invision"],"kakao-talk":["kakao talk","chat"],"line":["连我"],"linkedin":["领英"],"linkedin-box":["领英"],"mastercard":["bank card","银行卡"],"mastodon":["mastodon","长毛象"],"medium":["媒体"],"messenger":["facebook","脸书","信使"],"mini-program":["微信小程序"],"netease-cloud-music":["netease cloud music","网易云音乐"],"netflix":["网飞"],"npmjs":["npm","nodejs"],"open-source":["opensource","开源"],"opera":["欧朋浏览器"],"patreon":["donate","money","捐赠","打赏"],"paypal":["贝宝"],"pinterest":["拼趣"],"pixelfed":["photography","pixelfed"],"playstation":["ps"],"product-hunt":["product hunt"],"qq":["penguin","tencent","腾讯","企鹅"],"reactjs":["react","programing framework","facebook"],"reddit":["reddit"],"remixicon":["remix icon","图标"],"safari":["safari浏览器"],"skype":["skype"],"slack":["slack"],"snapchat":["ghost","色拉布","幽灵"],"soundcloud":["声云"],"spectrum":["spectrum"],"spotify":["music","音乐"],"stack-overflow":["stack overflow"],"stackshare":["share","分享","技术栈"],"steam":["game","store"],"switch":["nintendo","任天堂"],"taobao":["淘宝"],"telegram":["telegram"],"trello":["trello"],"tumblr":["汤博乐"],"twitch":["twitch"],"twitter":["推特"],"ubuntu":["linux","system","系统"],"unsplash":["photos"],"visa":["bank card","银行卡"],"vuejs":["vue","programing framework"],"wechat":["微信"],"wechat-2":["微信"],"wechat-pay":["微信支付"],"weibo":["新浪微博"],"whatsapp":["瓦次艾普"],"windows":["microsoft","窗户","微软"],"xbox":["xbox"],"xing":["xing"],"youtube":["优兔","油管"],"zcool":["zcool","站酷"],"zhihu":["知乎"]},"Map":{"map-pin":["location","navigation","地图","坐标","定位","导航","位置"],"map-pin-2":["location","navigation","地图","坐标","定位","导航","位置"],"map-pin-3":["location","navigation","地图","坐标","定位","导航","位置"],"map-pin-4":["location","navigation","地图","坐标","定位","导航","位置"],"map-pin-5":["location","navigation","地图","坐标","定位","导航","位置"],"map-pin-add":["location","navigation","地图","坐标","定位","导航","位置","新增","添加"],"map-pin-range":["location","navigation","地图","坐标","定位","导航","位置","范围"],"map-pin-time":["location","navigation","地图","坐标","定位","导航","位置","时间"],"map-pin-user":["location","navigation","地图","坐标","定位","导航","位置","用户"],"pin-distance":["坐标","距离"],"pushpin":["图钉"],"pushpin-2":["图钉"],"compass":["navigation","safari","direction","discover","指南针","导航","方向","发现","探索"],"compass-2":["navigation","direction","discover","指南针","导航","方向","发现","探索"],"compass-3":["navigation","safari","direction","discover","指南针","导航","方向","发现","探索"],"compass-4":["navigation","direction","discover","指南针","导航","方向","发现","探索"],"compass-discover":["navigation","direction","指南针","导航","方向","发现","探索"],"anchor":["锚"],"china-railway":["中铁","铁路","火车"],"space-ship":["太空飞船"],"rocket":["火箭"],"rocket-2":["space ship","火箭","太空飞船"],"map":["navigation","travel","地图","导航","旅行"],"map-2":["location","navigation","travel","地图","定位","导航","旅行"],"treasure-map":["thriller","adventure","地图","藏宝图"],"road-map":["navigation","travel","地图","导航","旅行"],"earth":["global","union","world","language","地球","全球","联合","世界","语言"],"globe":["earth","地球仪"],"parking":["停车场"],"parking-box":["停车场"],"route":["path","路线"],"guide":["path","指引","路线"],"gas-station":["加气站","加油站"],"charging-pile":["充电桩"],"charging-pile-2":["充电桩"],"car":["汽车"],"car-washing":["汽车","洗车"],"roadster":["car","汽车","跑车"],"taxi":["car","出租车","汽车"],"taxi-wifi":["car","出租车","汽车"],"police-car":["汽车","警车"],"bus":["大巴","巴士"],"bus-2":["大巴","巴士"],"bus-wifi":["大巴","巴士"],"truck":["van","delivery","卡车","货车","运输"],"train":["火车"],"train-wifi":["火车"],"subway":["地铁"],"subway-wifi":["地铁"],"flight-takeoff":["airplane","plane","origin","起飞","出发","始发","起点","飞机"],"flight-land":["airplane","plane","destination","着陆","到达","抵达","终点","飞机"],"plane":["fight","飞机","航班"],"sailboat":["帆船"],"ship":["轮船","航海","海运"],"ship-2":["轮船"],"bike":["自行车"],"e-bike":["take out","takeaway","电动车","外卖"],"e-bike-2":["take out","takeaway","电动车","外卖"],"takeaway":["take out","takeaway","电动车","外卖"],"motorbike":["摩托车"],"caravan":["房车"],"walk":["步行"],"run":["奔跑","跑步"],"riding":["bike","骑行","自行车"],"barricade":["路障"],"footprint":["脚印","足迹"],"traffic-light":["交通","信号灯"],"signal-tower":["base station","antenna","信号塔","基站","天线"],"restaurant":["餐厅","饭店"],"restaurant-2":["餐厅","饭店"],"cup":["tea","coffee","杯子","咖啡","茶"],"goblet":["cup","wine glass","高脚杯","酒杯"],"hotel-bed":["酒店","床"],"navigation":["gps","导航"],"oil":["汽油","机油"],"direction":["right","方向","右转"],"steering":["drive","方向盘","驾车"],"steering-2":["drive","方向盘","驾车"],"lifebuoy":["life ring","救生圈"],"passport":["passports","护照"],"suitcase":["travel","旅行","行李箱"],"suitcase-2":["travel","旅行","行李箱","拉杆箱"],"suitcase-3":["travel","旅行","boarding case","行李箱","拉杆箱","登机箱"],"luggage-deposit":["consignment","行李箱","行李寄存","托运"],"luggage-cart":["行李车"]},"Media":{"image":["picture","photo","图片","照片"],"image-2":["picture","photo","图片","照片"],"image-add":["picture","photo","图片","照片","添加"],"landscape":["picture","image","photo","图片","照片"],"gallery":["picture","image","图片","相册"],"gallery-upload":["picture","image","图片","相册","上传"],"video":["视频"],"movie":["film","video","电影","硬盘","视频"],"movie-2":["film","video","电影","硬盘","视频"],"film":["movie","video","影片","电影","视频"],"clapperboard":["movie","film","场记板","电影"],"vidicon":["video","camera","摄像机","摄影机","视频"],"vidicon-2":["camera","摄像机","摄影机"],"live":["video","camera","摄像机","摄影机","视频","直播"],"video-add":["camera","摄像机","摄影机","视频","添加"],"video-upload":["camera","摄像机","摄影机","视频","上传"],"video-download":["camera","摄像机","摄影机","视频","下载"],"dv":["vidicon","camera","摄像机","摄影机"],"camera":["photo","照相机","拍照","照片"],"camera-off":["photo","slash","照相机","拍照","照片","禁止","关闭"],"camera-2":["photo","照相机","拍照","照片"],"camera-3":["photo","照相机","拍照","照片"],"camera-lens":["aperture","photo","照相机","拍照","照片","朋友圈"],"camera-switch":["照相机","拍照","翻转"],"polaroid":["camera","相机","宝丽来"],"polaroid-2":["camera","相机","宝丽来"],"phone-camera":["手机相机","手机摄像头"],"webcam":["摄像头"],"mv":["music video","音乐"],"music":["音乐"],"music-2":["音乐"],"disc":["music","album","音乐","唱片"],"album":["music","唱片","音乐"],"dvd":["cd","dvd","record","光盘","刻录"],"headphone":["music","headset","耳机","音乐"],"radio":["收音机","电台"],"radio-2":["收音机","电台"],"tape":["录音","磁带"],"mic":["record","voice","话筒","语音","录音","声音"],"mic-2":["record","voice","话筒","语音","录音","声音"],"mic-off":["record","voice","slash","关闭话筒","关闭语音","录音","关闭声音","静音","禁止"],"volume-down":["trumpet","sound","speaker","音量低","喇叭","声音","扬声器"],"volume-mute":["trumpet","sound","off","音量低","喇叭","声音","静音"],"volume-up":["trumpet","sound","speaker","音量高","喇叭","声音","扬声器"],"volume-vibrate":["trumpet","sound","speaker","喇叭","声音","扬声器","震动模式"],"volume-off-vibrate":["trumpet","sound","speaker","静音","喇叭","声音","扬声器","静音模式"],"speaker":["音响"],"speaker-2":["音响"],"speaker-3":["音响"],"surround-sound":["环绕立体声"],"broadcast":["广播"],"notification":["bell","alarm","通知","铃铛","提醒"],"notification-2":["bell","alarm","通知","铃铛","提醒"],"notification-3":["bell","alarm","通知","铃铛","提醒"],"notification-4":["bell","alarm","通知","铃铛","提醒"],"notification-off":["bell","alarm","silent","slash","通知","铃铛","提醒","免打扰","静音","关闭","禁止"],"play-circle":["start","播放","开始"],"pause-circle":["暂停"],"record-circle":["录音"],"stop-circle":["停止"],"eject":["推出"],"play":["start","播放","开始"],"pause":["暂停"],"stop":["停止"],"rewind":["fast","快退"],"speed":["fast","快进"],"skip-back":["上一曲"],"skip-forward":["下一曲"],"play-mini":["播放"],"pause-mini":["暂停"],"stop-mini":["停止"],"rewind-mini":["fast","快退"],"speed-mini":["fast","快进"],"skip-back-mini":["上一曲"],"skip-forward-mini":["下一曲"],"repeat":["循环播放"],"repeat-2":["循环播放"],"repeat-one":["单曲循环"],"order-play":["顺序播放"],"shuffle":["随机播放"],"play-list":["播放列表"],"play-list-add":["列表","添加"],"fullscreen":["maximize","全屏","最大化"],"fullscreen-exit":["minimize","退出全屏","最小化"],"equalizer":["sliders","controls","settings","filter","均衡器","控制器","设置","筛选"],"sound-module":["sliders","controls","settings","filter","均衡器","控制器","设置","筛选"],"rhythm":["节奏","韵律"],"voiceprint":["声纹"],"hq":["high quality","高质量","高品质"],"hd":["high definition","高清晰度"],"4k":["high definition","high quality","高清晰度","高品质","超清"],"aspect-ratio":["宽高比","比例"],"picture-in-picture":["画中画","小窗"],"picture-in-picture-2":["画中画","小窗"],"picture-in-picture-exit":["退出画中画","退出小窗"]},"System":{"apps":["应用"],"apps-2":["应用"],"function":["layout","功能","应用","卡片布局"],"dashboard":["仪表盘"],"menu":["navigation","hamburger","导航","菜单","汉堡包"],"menu-2":["navigation","hamburger","导航","菜单","汉堡包"],"menu-3":["navigation","hamburger","导航","菜单","汉堡包"],"menu-4":["navigation","hamburger","导航","菜单","汉堡包"],"menu-5":["navigation","hamburger","导航","菜单","汉堡包"],"menu-add":["navigation","hamburger","导航","菜单","汉堡包","添加"],"more":["ellipsis","更多","省略"],"more-2":["ellipsis","更多","省略"],"heart":["like","love","favorite","心","喜欢","爱","收藏"],"heart-2":["public welfare","like","love","favorite","心","喜欢","爱","收藏"],"heart-add":["like","love","favorite","心","喜欢","爱","收藏"],"star":["favorite","like","mark","星星","星标","喜欢"],"star-s":["favorite","like","mark","星星","星标","喜欢","半星"],"star-half":["favorite","like","mark","星星","星标","喜欢"],"star-half-s":["favorite","like","mark","星星","星标","喜欢","半星"],"settings":["edit","gear","preferences","偏好设置","编辑","齿轮"],"settings-2":["edit","gear","preferences","偏好设置","编辑","齿轮"],"settings-3":["edit","gear","preferences","偏好设置","编辑","齿轮"],"settings-4":["edit","gear","preferences","偏好设置","编辑","齿轮"],"settings-5":["edit","gear","preferences","偏好设置","编辑","齿轮"],"settings-6":["edit","gear","preferences","偏好设置","编辑","齿轮"],"list-settings":["列表","设置"],"forbid":["slash","ban","禁止","禁用"],"forbid-2":["slash","ban","禁止","禁用"],"information":["信息"],"error-warning":["alert","警告","错误"],"question":["help","问号","帮助"],"alert":["提醒","警告"],"spam":["alert","垃圾邮件","警告"],"spam-2":["alert","垃圾邮件","警告"],"spam-3":["alert","垃圾邮件","警告"],"checkbox-blank":["复选框","空"],"checkbox":["复选框"],"checkbox-indeterminate":["复选框"],"add-box":["plus","new","复选框","添加","加号","新增"],"checkbox-blank-circle":["复选框","空"],"checkbox-circle":["复选框"],"indeterminate-circle":["slash","ban","复选框","禁"],"add-circle":["plus","new","复选框","添加","加号","新增"],"close-circle":["cancel","remove","delete","empty","x","关闭","取消","移除","删除","清空"],"radio-button":["单选框"],"checkbox-multiple-blank":["复选框","空"],"checkbox-multiple":["复选框","空"],"check":["对勾"],"check-double":["read","done","double-tick","双对勾","已读"],"close":["cancel","remove","delete","empty","x","关闭","取消","移除","删除","清空"],"add":["plus","new","添加","新增","加号"],"subtract":["减"],"divide":["除以"],"arrow-left-up":["corner","左上"],"arrow-up":["箭头","向上"],"arrow-right-up":["corner","右上"],"arrow-right":["箭头","向右"],"arrow-right-down":["corner","右下"],"arrow-down":["箭头","向下"],"arrow-left-down":["corner","箭头","左下"],"arrow-left":["箭头","向左","返回"],"arrow-up-circle":["箭头","向上"],"arrow-right-circle":["箭头","向右"],"arrow-down-circle":["箭头","向下","下载"],"arrow-left-circle":["箭头","向左","返回"],"arrow-up-s":["箭头","向上"],"arrow-down-s":["箭头","向下"],"arrow-right-s":["箭头","向右"],"arrow-left-s":["箭头","向左","返回"],"arrow-drop-up":["箭头","向上"],"arrow-drop-right":["箭头","向右"],"arrow-drop-down":["箭头","向下"],"arrow-drop-left":["箭头","向左","返回"],"arrow-left-right":["exchange","swap","箭头","左右","交换","换算","兑换"],"arrow-up-down":["exchange","swap","箭头","上下","交换","换算","兑换"],"arrow-go-back":["undo","箭头","返回","撤销","撤回"],"arrow-go-forward":["redo","箭头","重做","撤回"],"download":["下载"],"upload":["上传"],"download-2":["下载"],"upload-2":["上传"],"download-cloud":["下载","云"],"download-cloud-2":["下载","云"],"upload-cloud":["上传","云"],"upload-cloud-2":["上传","云"],"login-box":["sign in","登录"],"logout-box":["sign out","登出","注销"],"logout-box-r":["sign out","登出","注销"],"login-circle":["sign in","登录"],"logout-circle":["sign out","登出","注销"],"logout-circle-r":["sign out","登出","注销"],"refresh":["synchronization","reload","restart","spinner","loader","ajax","update","刷新","同步"],"shield":["safety","protect","盾牌","卫士","安全","防御"],"shield-cross":["safety","protect","盾牌","卫士","安全","防御","闪电"],"shield-flash":["safety","protect","盾牌","卫士","安全","防御"],"shield-star":["safety","protect","盾牌","卫士","安全","防御","星星"],"shield-user":["safety","protect","user protected","guarantor","盾牌","卫士","安全","防御","用户"],"shield-keyhole":["safety","protect","guarantor","盾牌","卫士","安全","防御","钥匙孔"],"delete-back":["backspace","删除","退格"],"delete-back-2":["backspace","删除","退格"],"delete-bin":["trash","remove","ash-bin","garbage","dustbin","uninstall","卸载","删除","垃圾桶"],"delete-bin-2":["trash","remove","ash-bin","garbage","dustbin","uninstall","卸载","删除","垃圾桶"],"delete-bin-3":["trash","remove","ash-bin","garbage","dustbin","uninstall","卸载","删除","垃圾桶"],"delete-bin-4":["trash","remove","ash-bin","garbage","dustbin","uninstall","卸载","删除","垃圾桶"],"delete-bin-5":["trash","remove","ash-bin","garbage","dustbin","uninstall","卸载","删除","垃圾桶"],"delete-bin-6":["trash","remove","ash-bin","garbage","dustbin","uninstall","卸载","删除","垃圾桶"],"delete-bin-7":["trash","remove","ash-bin","garbage","dustbin","uninstall","卸载","删除","垃圾桶"],"lock":["security","password","锁子","安全","密码"],"lock-2":["security","password","锁子","安全","密码"],"lock-password":["security","锁子","安全","密码"],"lock-unlock":["security","password","锁子","安全","密码"],"eye":["watch","view","眼睛","查看"],"eye-off":["slash","眼睛","不可见","关闭","禁止"],"eye-2":["watch","view","眼睛","查看"],"eye-close":["x","闭眼"],"search":["搜索","放大镜"],"search-2":["搜索","放大镜"],"search-eye":["搜索","放大镜","眼睛"],"zoom-in":["放大","放大镜"],"zoom-out":["缩小","放大镜"],"find-replace":["查找","搜索","替换"],"share":["分享","转发"],"share-box":["分享","转发"],"share-circle":["分享","转发"],"share-forward":["分享","转发"],"share-forward-2":["分享","转发"],"share-forward-box":["分享","转发"],"side-bar":["侧边栏"],"time":["clock","时间","时钟","钟表"],"timer":["chronograph","stopwatch","秒表","计时器"],"timer-2":["chronograph","stopwatch","秒表","计时器"],"timer-flash":["chronograph","stopwatch","秒表","计时器","闪电"],"alarm":["闹钟"],"history":["record","recent","time machine","历史记录","最近"],"thumb-down":["dislike","bad","不喜欢","不好"],"thumb-up":["like","good","喜欢","好"],"alarm-warning":["alert","report","police light","告警","举报","警灯"],"notification-badge":["red dot","通知","小红点"],"toggle":["switch","开关","触发器"],"filter":["filtration","筛选","过滤"],"filter-2":["filtration","筛选","过滤"],"filter-3":["filtration","筛选","过滤"],"loader":["loader","spinner","ajax","waiting","delay","加载中","载入中","正在加载"],"loader-2":["loader","spinner","ajax","waiting","delay","加载中","载入中","正在加载"],"loader-3":["loader","spinner","ajax","waiting","delay","加载中","载入中","正在加载"],"loader-4":["loader","spinner","ajax","waiting","delay","加载中","载入中","正在加载"],"loader-5":["loader","spinner","ajax","waiting","delay","加载中","载入中","正在加载"],"external-link":["外链"]},"User&Faces":{"user":["用户"],"user-2":["用户"],"user-3":["用户"],"user-4":["用户"],"user-5":["用户"],"user-6":["用户"],"user-smile":["用户","微笑"],"account-box":["用户","账户"],"account-circle":["用户","账户"],"account-pin-box":["用户","账户"],"account-pin-circle":["用户","账户"],"user-add":["用户","添加","新增"],"user-follow":["关注"],"user-unfollow":["用户","取消关注"],"user-shared":["transfer","用户","我分享的","发送"],"user-shared-2":["transfer","用户","我分享的","发送"],"user-received":["用户","我接收的","收取"],"user-received-2":["用户","我接收的","收取"],"user-location":["用户","定位"],"user-search":["用户","查找"],"user-settings":["admin","用户","设置","管理员"],"user-star":["用户","关注"],"user-heart":["用户","关注"],"admin":["admin","用户","管理员"],"contacts":["联系人"],"group":["team","团队","群组"],"group-2":["team","团队","群组"],"team":["团队","小组","群主"],"user-voice":["用户","录音","演讲"],"emotion":["表情","笑脸"],"emotion-2":["表情","笑脸"],"emotion-happy":["表情","开心"],"emotion-normal":["表情","一般"],"emotion-unhappy":["表情","不开心"],"emotion-laugh":["comedy","happy","表情","大笑","笑脸","开心","喜剧"],"emotion-sad":["drama","tears","悲剧","哭泣","泪"],"skull":["ghost","骷髅","鬼怪"],"skull-2":["ghost","horror","thriller","骷髅","鬼怪","恐惧","恐怖"],"men":["gender","male","man","男人","男性"],"women":["gender","female","woman","女人","女性"],"travesti":["女人","女性"],"genderless":["女人","女性"],"open-arm":["张开双臂"],"body-scan":["gesture recognition","body","扫描身体","体态识别","动作之别","手势识别"],"parent":["patriarch","父母","亲子","家长"],"robot":["mechanic","机器人"],"aliens":["science fiction","ET","外星人","科幻小说"],"bear-smile":["cartoon","anime","cartoon","小熊","微笑","儿童","动画片","卡通","动漫"],"mickey":["cartoon","disney","迪士尼","米老鼠","微笑","儿童","动画片"],"criminal":["horror","thriller","罪犯","犯罪","恐怖"],"ghost":["horror","thriller","鬼怪","恐怖","恐惧"],"ghost-2":["horror","鬼怪","恐怖","恐惧"],"ghost-smile":["鬼怪","笑"],"star-smile":["animation","动画","微笑","星星"],"spy":["incognito mode","detective","secret","间谍","侦探","无痕模式","隐私模式"]},"Weather":{"sun":["light mode","sunny","太阳","白天模式","晴天"],"moon":["dark mode","night","月亮","夜间模式","月牙"],"flashlight":["闪电"],"cloudy":["多云"],"cloudy-2":["多云"],"mist":["雾气","雾霾"],"foggy":["大雾"],"cloud-windy":["风"],"windy":["大风","刮风"],"rainy":["下雨","雨天"],"drizzle":["小雨"],"showers":["中雨"],"heavy-showers":["大雨"],"thunderstorms":["雷暴","雷阵雨"],"hail":["冰雹"],"snowy":["下雪","雪天"],"sun-cloudy":["晴转多云"],"moon-cloudy":["夜间多云"],"tornado":["龙卷风"],"typhoon":["cyclone","tornado","龙卷风","旋风","台风"],"haze":["阴霾","薄雾"],"haze-2":["阴霾","薄雾"],"sun-foggy":["薄雾"],"moon-foggy":["薄雾"],"moon-clear":["夜间模式","夜间无云"],"temp-hot":["temperature","温度","高温","热"],"temp-cold":["temperature","温度","低温","冷"],"celsius":["temperature","温度","摄氏度"],"fahrenheit":["temperature","温度","华氏度"],"fire":["hot","火","热门"],"blaze":["火灾"],"earthquake":["地震"],"flood":["洪水"],"meteor":["流星","陨石"],"rainbow":["彩虹"]},"Others":{"basketball":["sports","运动","篮球"],"bell":["cartoon","anime","doraemon","铃铛","哆啦A梦","卡通","动漫"],"billiards":["sports","运动","台球","8"],"boxing":["sports","运动","拳击"],"cake":["anniversary","蛋糕"],"cake-2":["anniversary","蛋糕"],"cake-3":["蛋糕"],"door-lock":["门锁"],"door-lock-box":["门锁"],"flask":["testing","experimental","experiment","烧瓶","实验","试验"],"football":["sports","运动","足球"],"game":["pac man","游戏","吃豆人"],"handbag":["fashion","时尚","手提包","女包"],"hearts":["romance","爱情","浪漫","心"],"key":["password","钥匙","密码"],"key-2":["password","钥匙","密码"],"knife":["刀"],"knife-blood":["crime","刀","犯罪","血","杀人"],"lightbulb":["energy","creativity","灯泡","能源"],"lightbulb-flash":["energy","creativity","灯泡","能源","闪电"],"outlet":["插座"],"outlet-2":["插座"],"ping-pong":["sports","table tennis","运动","乒乓球"],"plug":["二脚插头"],"plug-2":["三脚插头"],"reserved":["已预定"],"shirt":["clothes","衬衫","衣服"],"sword":["war","刀剑","战争","战斗","玄幻"],"t-shirt":["skin","theme","T恤","皮肤","主题"],"t-shirt-2":["skin","theme","T恤","皮肤","主题"],"t-shirt-air":["dry","T恤","风干","烘干"],"umbrella":["protect","雨伞","保护"],"character-recognition":["ocr","文字识别"],"voice-recognition":["asr","语音识别"],"leaf":["energy","ecology","树叶","节能","环保","语音识别"],"plant":["植物"],"recycle":["recyclable","可回收"],"scales":["balance","称","天平","天秤"],"scales-2":["厨房称"],"fridge":["refrigerator","电冰箱"],"wheelchair":["accessbility","轮椅","可访问性","辅助功能"]}}';
        icons = JSON.parse(icons);
        var iconData = "";
        var simpleIcons = ['Editor'];

        Object.keys(icons).forEach(function(key) {
            if(key === "Editor") {
                iconData = iconData + '<div class="card"><div class="card-body"><h4 class="header-title">' + key + ' </h4><p class="card-title-desc mb-2">Use <code>&lt;i class="ri-bold"&gt;&lt;/i&gt;</code></p><div class="row icons-list-demo">';
                Object.keys(icons[key]).forEach(function (k) {
                    iconData += '<div class="col-xl-3 col-lg-4 col-sm-6">\
                    <i class="ri-'+ k + '"></i> ri-' + k + '</div>';
                });
            } else {
                iconData = iconData + '<div class="card"><div class="card-body"><h4 class="header-title">' + key + ' </h4><p class="card-title-desc mb-2">Use <code>&lt;i class="ri-home-line"&gt;&lt;/i&gt;</code> or <code>&lt;i class="ri-home-fill"&gt;&lt;/i&gt;</code></p><div class="row icons-list-demo">';
                Object.keys(icons[key]).forEach(function (k) {
                    iconData += '<div class="col-xl-3 col-lg-4 col-sm-6">\
                        <i class="ri-'+ k + '-line"></i> ri-' + k + '-line\
                    </div><div class="col-xl-3 col-lg-4 col-sm-6">\
                        <i class="ri-'+ k + '-fill"></i> ri-' + k + '-fill\
                    </div>';
                });
            }
            iconData += '</div></div></div>';
        });

        if(document.getElementById("icons"))
            document.getElementById("icons").innerHTML = iconData;

/**
  
 *  Author:  KT
 * Module/App: Sellers demo page
 */

$(document).ready(function () {
    "use strict";

    // Sellers revenue chart
    var options = {
        chart: {
            type: 'line',
            width: 80,
            height: 35,
            sparkline: {
                enabled: true
            }
        },
        series: [],
        stroke: {
            width: 2,
            curve: 'smooth'
        },
        markers: {
            size: 0
        },
        colors: ["#727cf5"],
        tooltip: {
            fixed: {
                enabled: false
            },
            x: {
                show: false
            },
            y: {
                title: {
                    formatter: function (seriesName) {
                        return ''
                    }
                }
            },
            marker: {
                show: false
            }
        }
    }

    var charts = [];
    // Default Datatable
    var table = $('#products-datatable').DataTable({
        "language": {
            "paginate": {
                "previous": "<i class='mdi mdi-chevron-left'>",
                "next": "<i class='mdi mdi-chevron-right'>"
            },
            "info": "Showing sellers _START_ to _END_ of _TOTAL_",
            "lengthMenu": "Display <select class='form-select form-select-sm ms-1 me-1'>" +
                '<option value="10">10</option>' +
                '<option value="20">20</option>' +
                '<option value="-1">All</option>' +
                '</select> sellers',
        },
        "pageLength": 10,
        "columns": [
            {
                'orderable': false,
                'render': function (data, type, row, meta) {
                    if (type === 'display') {
                        data = "<div class=\"form-check\"><input type=\"checkbox\" class=\"form-check-input dt-checkboxes\"><label class=\"form-check-label\">&nbsp;</label></div>";
                    }
                    return data;
                },
                'checkboxes': {
                    'selectRow': true,
                    'selectAllRender': '<div class=\"form-check\"><input type=\"checkbox\" class=\"form-check-input dt-checkboxes\"><label class=\"form-check-label\">&nbsp;</label></div>'
                }
            },
            { 'orderable': true },
            { 'orderable': true },
            { 'orderable': true },
            { 'orderable': true },
            { 'orderable': true },
            { 'orderable': false },
            { 'orderable': false }
        ],
        "select": {
            "style": "multi"
        },
        "order": [[4, "desc"]],
        "drawCallback": function () {
            $('.dataTables_paginate > .pagination').addClass('pagination-rounded');
            $('#products-datatable_length label').addClass('form-label');
            // {data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54]}

            // remove existing charts
            for (var idx = 0; idx < charts.length; idx++) {
                try { charts[idx].destroy(); } catch (e) { console.log(e) };
            }
            charts = [];

            $(".spark-chart").each(function (index) {
                var data = $(this).data()['dataset'];
                options['series'] = [{ 'data': data }];
                var chart = new ApexCharts($(this)[0], options)
                charts.push(chart);
                chart.render();
            });

            // Col add & remove
            var filterDiv = document.querySelector('.dataTables_wrapper .row');
            filterDiv.querySelectorAll('.col-md-6').forEach(function (element) {
                element.classList.add('col-sm-6');
                element.classList.remove('col-sm-12');
                element.classList.remove('col-md-6');
            });
        },
    });
});




/**
 
*  Author:  KT
* Component: SimpleMDE component
*/

!function ($) {
    "use strict";

    var SimpleMDEEditor = function () {
    };

    /* Initializing */
    SimpleMDEEditor.prototype.init = function () {
        // e.g.
        var simplemde = new SimpleMDE({
            element: document.getElementById("simplemde1"),
            spellChecker: false,
            autosave: {
                enabled: true,
                unique_id: 'simplemde1'
            }
        });
    },
        //init SimpleMDE
        $.SimpleMDEEditor = new SimpleMDEEditor, $.SimpleMDEEditor.Constructor = SimpleMDEEditor

}(window.jQuery),

    //initializing 
    function ($) {
        "use strict";
        $.SimpleMDEEditor.init();
    }(window.jQuery);
/**
  
 *  Author:  KT
 * Module/App: Sparkline Charts
 */

$(document).ready(function () {

    var defaultColors = ["#727cf5", "#0acf97", "#fa5c7c", "#ffbc00"];

    var DrawSparkline = function () {
        var dataColors = $("#sparkline1").data('colors');
        var colors = dataColors ? dataColors.split(",") : defaultColors.concat();

        $('#sparkline1').sparkline([0, 23, 43, 35, 44, 45, 56, 37, 40], {
            type: 'line',
            width: "100%",
            height: '165',
            chartRangeMax: 50,
            lineColor: colors[0],
            fillColor: hexToRGB(colors[0], 0.3),
            highlightLineColor: 'rgba(0,0,0,.1)',
            highlightSpotColor: 'rgba(0,0,0,.2)',
            maxSpotColor: false,
            minSpotColor: false,
            spotColor: false,
            lineWidth: 1
        });

        $('#sparkline1').sparkline([25, 23, 26, 24, 25, 32, 30, 24, 19], {
            type: 'line',
            width: "100%",
            height: '165',
            chartRangeMax: 40,
            lineColor: colors[1],
            fillColor: hexToRGB(colors[1], 0.3),
            composite: true,
            highlightLineColor: 'rgba(0,0,0,.1)',
            highlightSpotColor: 'rgba(0,0,0,.2)',
            maxSpotColor: false,
            minSpotColor: false,
            spotColor: false,
            lineWidth: 1
        });

        var dataColors = $("#sparkline2").data('colors');
        colors = dataColors ? dataColors.split(",") : defaultColors.concat();
        $('#sparkline2').sparkline([3, 6, 7, 8, 6, 4, 7, 10, 12, 7, 4, 9, 12, 13, 11, 12], {
            type: 'bar',
            height: '165',
            barWidth: '10',
            barSpacing: '3',
            barColor: colors
        });

        var dataColors = $("#sparkline3").data('colors');
        colors = dataColors ? dataColors.split(",") : defaultColors.concat();
        $('#sparkline3').sparkline([20, 40, 30, 10], {
            type: 'pie',
            width: '165',
            height: '165',
            sliceColors: colors
        });

        var dataColors = $("#sparkline4").data('colors');
        colors = dataColors ? dataColors.split(",") : defaultColors.concat();
        $('#sparkline4').sparkline([0, 23, 43, 35, 44, 45, 56, 37, 40], {
            type: 'line',
            width: "100%",
            height: '165',
            chartRangeMax: 50,
            lineColor: colors[0],
            fillColor: 'transparent',
            lineWidth: 2,
            highlightLineColor: 'rgba(0,0,0,.1)',
            highlightSpotColor: 'rgba(0,0,0,.2)',
            maxSpotColor: false,
            minSpotColor: false,
            spotColor: false
        });

        $('#sparkline4').sparkline([25, 23, 26, 24, 25, 32, 30, 24, 19], {
            type: 'line',
            width: "100%",
            height: '165',
            chartRangeMax: 40,
            lineColor: colors[1],
            fillColor: 'transparent',
            composite: true,
            lineWidth: 2,
            maxSpotColor: false,
            minSpotColor: false,
            spotColor: false,
            highlightLineColor: 'rgba(0,0,0,1)',
            highlightSpotColor: 'rgba(0,0,0,1)'
        });

        var dataColors = $("#sparkline6").data('colors');
        colors = dataColors ? dataColors.split(",") : defaultColors.concat();
        $('#sparkline6').sparkline([3, 6, 7, 8, 6, 4, 7, 10, 12, 7, 4, 9, 12, 13, 11, 12], {
            type: 'line',
            width: "100%",
            height: '165',
            lineColor: '#e3eaef',
            lineWidth: 2,
            fillColor: 'rgba(227,234,239,0.3)',
            highlightLineColor: 'rgba(0,0,0,.1)',
            highlightSpotColor: 'rgba(0,0,0,.2)'
        });

        $('#sparkline6').sparkline([3, 6, 7, 8, 6, 4, 7, 10, 12, 7, 4, 9, 12, 13, 11, 12], {
            type: 'bar',
            height: '165',
            barWidth: '10',
            barSpacing: '5',
            composite: true,
            barColor: '#6c757d'
        });

        var colors = ['#6c757d'];
        var dataColors = $("#sparkline7").data('colors');
        if (dataColors) {
            colors = dataColors.split(",");
        }
        $("#sparkline7").sparkline([4, 6, 7, 7, 4, 3, 2, 1, 4, 4, 5, 6, 3, 4, 5, 8, 7, 6, 9, 3, 2, 4, 1, 5, 6, 4, 3, 7], {
            type: 'discrete',
            width: '280',
            height: '165',
            lineColor: colors
        });



    },
        DrawMouseSpeed = function () {
            var mrefreshinterval = 500; // update display every 500ms
            var lastmousex = -1;
            var lastmousey = -1;
            var lastmousetime;
            var mousetravel = 0;
            var mpoints = [];
            var mpoints_max = 30;
            $('html').mousemove(function (e) {
                var mousex = e.pageX;
                var mousey = e.pageY;
                if (lastmousex > -1) {
                    mousetravel += Math.max(Math.abs(mousex - lastmousex), Math.abs(mousey - lastmousey));
                }
                lastmousex = mousex;
                lastmousey = mousey;
            });
            var mdraw = function () {
                var md = new Date();
                var timenow = md.getTime();
                if (lastmousetime && lastmousetime != timenow) {
                    var pps = Math.round(mousetravel / (timenow - lastmousetime) * 1000);
                    mpoints.push(pps);
                    if (mpoints.length > mpoints_max)
                        mpoints.splice(0, 1);
                    mousetravel = 0;
                    $('#sparkline5').sparkline(mpoints, {
                        tooltipSuffix: ' pixels per second',
                        type: 'line',
                        width: "100%",
                        height: '165',
                        chartRangeMax: 77,
                        maxSpotColor: false,
                        minSpotColor: false,
                        spotColor: false,
                        lineWidth: 1,
                        lineColor: '#fa5c7c',
                        fillColor: 'rgba(250, 92, 124, 0.3)',
                        highlightLineColor: 'rgba(24,147,126,.1)',
                        highlightSpotColor: 'rgba(24,147,126,.2)'
                    });
                }
                lastmousetime = timenow;
                setTimeout(mdraw, mrefreshinterval);
            }
            // We could use setInterval instead, but I prefer to do it this way
            setTimeout(mdraw, mrefreshinterval);
        };

    DrawSparkline();
    DrawMouseSpeed();

    var resizeChart;

    $(window).resize(function (e) {
        clearTimeout(resizeChart);
        resizeChart = setTimeout(function () {
            DrawSparkline();
            DrawMouseSpeed();
        }, 300);
    });
});

/* utility function */

function hexToRGB(hex, alpha) {
    var r = parseInt(hex.slice(1, 3), 16),
        g = parseInt(hex.slice(3, 5), 16),
        b = parseInt(hex.slice(5, 7), 16);

    if (alpha) {
        return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
    } else {
        return "rgb(" + r + ", " + g + ", " + b + ")";
    }
}


// Bubble theme
var quill = new Quill('#bubble-editor', {
    theme: 'bubble'
});
/**
  
 *  Author:  KT
 * Module/App: Time Picker
 */

$('#timepicker').timepicker({
    "showSeconds": true,
    icons: {
        up: 'mdi mdi-chevron-up',
        down: 'mdi mdi-chevron-down'
    },
    appendWidgetTo: "#timepicker-input-group1"
});

$('#timepicker2').timepicker({
    "showSeconds": true,
    showMeridian: false,
    icons: {
        up: 'mdi mdi-chevron-up',
        down: 'mdi mdi-chevron-down'
    },
    appendWidgetTo: "#timepicker-input-group2"
});

$('#timepicker3').timepicker({
    "showSeconds": true,
    minuteStep: 15,
    icons: {
        up: 'mdi mdi-chevron-up',
        down: 'mdi mdi-chevron-down'
    },
    appendWidgetTo: "#timepicker-input-group3"
});

//Flat picker
$('#basic-datepicker').flatpickr();

$('#datetime-datepicker').flatpickr({
    enableTime: true,
    dateFormat: "Y-m-d H:i"
});

$('#humanfd-datepicker').flatpickr({
    altInput: true,
    altFormat: "F j, Y",
    dateFormat: "Y-m-d",
});

$('#minmax-datepicker').flatpickr({
    minDate: "2020-01",
    maxDate: "2020-03"
});

$('#disable-datepicker').flatpickr({
    onReady: function () {
        this.jumpToDate("2025-01")
    },
    disable: ["2025-01-10", "2025-01-21", "2025-01-30", new Date(2025, 4, 9)],
    dateFormat: "Y-m-d",
});

$('#multiple-datepicker').flatpickr({
    mode: "multiple",
    dateFormat: "Y-m-d"
});

$('#conjunction-datepicker').flatpickr({
    mode: "multiple",
    dateFormat: "Y-m-d",
    conjunction: " :: "
});

$('#range-datepicker').flatpickr({
    mode: "range"
});

$('#inline-datepicker').flatpickr({
    inline: true
});

$('#basic-timepicker').flatpickr({
    enableTime: true,
    noCalendar: true,
    dateFormat: "H:i"
});

$('#24hours-timepicker').flatpickr({
    enableTime: true,
    noCalendar: true,
    dateFormat: "H:i",
    time_24hr: true
});

$('#minmax-timepicker').flatpickr({
    enableTime: true,
    noCalendar: true,
    dateFormat: "H:i",
    minDate: "16:00",
    maxDate: "22:30",
});

$('#preloading-timepicker').flatpickr({
    enableTime: true,
    noCalendar: true,
    dateFormat: "H:i",
    defaultDate: "01:45"
});
/**
  
 *  Author:  KT
 * Toastr js
 */

// Notification

!function ($) {
    "use strict";

    var NotificationApp = function () { };

    NotificationApp.prototype.send = function (heading, body, position, loaderBgColor, icon, hideAfter, stack, showHideTransition) {
        // default      
        if (!hideAfter)
            hideAfter = 3000;
        if (!stack)
            stack = 1;

        var options = {
            heading: heading,
            text: body,
            position: position,
            loaderBg: loaderBgColor,
            icon: icon,
            hideAfter: hideAfter,
            stack: stack
        };

        if (showHideTransition)
            options.showHideTransition = showHideTransition;
        else
            options.showHideTransition = 'fade';

        $.toast().reset('all');
        $.toast(options);
    }

    $.NotificationApp = new NotificationApp, $.NotificationApp.Constructor = NotificationApp

    // notification examples
    $("#toastr-one").on('click', function (e) {
        $.NotificationApp.send("Heads up!", "This alert needs your attention, but it is not super important.", 'top-right', 'rgba(0,0,0,0.2)', 'info');
    });

    $("#toastr-two").on('click', function (e) {
        $.NotificationApp.send("Heads up!", "Check below fields please.", 'top-center', 'rgba(0,0,0,0.2)', 'warning');
    });

    $("#toastr-three").on('click', function (e) {
        $.NotificationApp.send("Well Done!", "You successfully read this important alert message", 'bottom-right', 'rgba(0,0,0,0.2)', 'success');
    });

    $("#toastr-four").on('click', function (e) {
        $.NotificationApp.send("Oh snap!", "Change a few things up and try submitting again.", 'bottom-left', 'rgba(0,0,0,0.2)', 'error');
    });

    $("#toastr-five").on('click', function (e) {
        $.NotificationApp.send("How to contribute?", ['Fork the repository', 'Improve/extend the functionality', 'Create a pull request'], 'top-right', 'rgba(0,0,0,0.2)', 'info');
    });

    $("#toastr-six").on('click', function (e) {
        $.NotificationApp.send("Can I add <em>icons</em>?", "Yes! check this <a href='https://github.com/kamranahmedse/jquery-toast-plugin/commits/master'>update</a>.", 'top-right', 'rgba(0,0,0,0.2)', 'info', false);
    });

    $("#toastr-seven").on('click', function (e) {
        $.NotificationApp.send("", "Set the `hideAfter` property to false and the toast will become sticky.", 'top-right', 'rgba(0,0,0,0.2)', 'success');
    });

    $("#toastr-eight").on('click', function (e) {
        $.NotificationApp.send("", "Set the `showHideTransition` property to fade|plain|slide to achieve different transitions.", 'top-right', 'rgba(0,0,0,0.2)', 'info', 3000, 1, 'fade');
    });
}(window.jQuery);
/**
  
 *  Author:  KT
 * Module/App: Typehead
 */

$(document).ready(function () {

    // the basics
    // ----------

    var substringMatcher = function (strs) {
        return function findMatches(q, cb) {
            var matches, substringRegex;

            // an array that will be populated with substring matches
            matches = [];

            // regex used to determine if a string contains the substring `q`
            substrRegex = new RegExp(q, 'i');

            // iterate through the pool of strings and for any string that
            // contains the substring `q`, add it to the `matches` array
            $.each(strs, function (i, str) {
                if (substrRegex.test(str)) {
                    matches.push(str);
                }
            });

            cb(matches);
        };
    };

    var states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California',
        'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii',
        'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana',
        'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota',
        'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
        'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
        'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island',
        'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
        'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
    ];

    $('#the-basics').typeahead({
        hint: true,
        highlight: true,
        minLength: 1
    },
        {
            name: 'states',
            source: substringMatcher(states)
        });

    // bloodhound
    // ----------

    // constructs the suggestion engine
    var states = new Bloodhound({
        datumTokenizer: Bloodhound.tokenizers.whitespace,
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        // `states` is an array of state names defined in "The Basics"
        local: states
    });

    $('#bloodhound').typeahead({
        hint: true,
        highlight: true,
        minLength: 1
    },
        {
            name: 'states',
            source: states
        });

    // prefetch
    // --------

    var countries = new Bloodhound({
        datumTokenizer: Bloodhound.tokenizers.whitespace,
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        // url points to a json file that contains an array of country names, see
        prefetch: 'https://raw.githubusercontent.com/twitter/typeahead.js/gh-pages/data/countries.json'
    });

    // passing in `null` for the `options` arguments will result in the default
    // options being used
    $('#prefetch').typeahead(null, {
        name: 'countries',
        source: countries
    });

    // remote
    // ------

    var bestPictures = new Bloodhound({
        datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        prefetch: 'https://raw.githubusercontent.com/twitter/typeahead.js/gh-pages/data/films/post_1960.json',
        remote: {
            url: '../plugins/typeahead/data/%QUERY.json',
            wildcard: '%QUERY'
        }
    });

    $('#remote').typeahead(null, {
        name: 'best-pictures',
        display: 'value',
        source: bestPictures
    });

    // default suggestions
    // -------------------

    var nflTeams = new Bloodhound({
        datumTokenizer: Bloodhound.tokenizers.obj.whitespace('team'),
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        identify: function (obj) { return obj.team; },
        prefetch: 'https://raw.githubusercontent.com/twitter/typeahead.js/gh-pages/data/nfl.json'
    });

    function nflTeamsWithDefaults(q, sync) {
        if (q === '') {
            sync(nflTeams.get('Detroit Lions', 'Green Bay Packers', 'Chicago Bears'));
        }

        else {
            nflTeams.search(q, sync);
        }
    }

    $('#default-suggestions').typeahead({
        minLength: 0,
        highlight: true
    },
        {
            name: 'nfl-teams',
            display: 'team',
            source: nflTeamsWithDefaults
        });

    // custom templates
    // ----------------

    $('#custom-templates').typeahead(null, {
        name: 'best-pictures',
        display: 'value',
        source: bestPictures,
        templates: {
            empty: [
                '<div class="typeahead-empty-message">',
                'Unable to find any Best Picture winners that match the current query',
                '</div>'
            ].join('\n'),
            suggestion: Handlebars.compile('<div><strong>{{value}}</strong> - {{year}}</div>')
        }
    });

    // multiple datasets
    // -----------------

    var nbaTeams = new Bloodhound({
        datumTokenizer: Bloodhound.tokenizers.obj.whitespace('team'),
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        prefetch: 'https://raw.githubusercontent.com/twitter/typeahead.js/gh-pages/data/nba.json'
    });

    var nhlTeams = new Bloodhound({
        datumTokenizer: Bloodhound.tokenizers.obj.whitespace('team'),
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        prefetch: 'https://raw.githubusercontent.com/twitter/typeahead.js/gh-pages/data/nhl.json'
    });

    $('#multiple-datasets').typeahead({
        highlight: true
    },
        {
            name: 'nba-teams',
            display: 'team',
            source: nbaTeams,
            templates: {
                header: '<h5 class="league-name">NBA Teams</h5>'
            }
        },
        {
            name: 'nhl-teams',
            display: 'team',
            source: nhlTeams,
            templates: {
                header: '<h5 class="league-name">NHL Teams</h5>'
            }
        });

});
/**
 
*  Author:  KT
* Vector Maps
*/

! function ($) {
	"use strict";

	var VectorMap = function () {
	};

	VectorMap.prototype.init = function () {
		//various examples
		$('#world-map-markers').vectorMap({
			map: 'world_mill_en',
			normalizeFunction: 'polynomial',
			hoverOpacity: 0.7,
			hoverColor: false,
			regionStyle: {
				initial: {
					fill: '#e3eaef'
				}
			},
			markerStyle: {
				initial: {
					r: 9,
					'fill': '#727cf5',
					'fill-opacity': 0.9,
					'stroke': '#fff',
					'stroke-width': 7,
					'stroke-opacity': 0.4
				},

				hover: {
					'stroke': '#fff',
					'fill-opacity': 1,
					'stroke-width': 1.5
				}
			},
			backgroundColor: 'transparent',
			markers: [{
				latLng: [41.90, 12.45],
				name: 'Vatican City'
			}, {
				latLng: [43.73, 7.41],
				name: 'Monaco'
			}, {
				latLng: [-0.52, 166.93],
				name: 'Nauru'
			}, {
				latLng: [-8.51, 179.21],
				name: 'Tuvalu'
			}, {
				latLng: [43.93, 12.46],
				name: 'San Marino'
			}, {
				latLng: [47.14, 9.52],
				name: 'Liechtenstein'
			}, {
				latLng: [7.11, 171.06],
				name: 'Marshall Islands'
			}, {
				latLng: [17.3, -62.73],
				name: 'Saint Kitts and Nevis'
			}, {
				latLng: [3.2, 73.22],
				name: 'Maldives'
			}, {
				latLng: [35.88, 14.5],
				name: 'Malta'
			}, {
				latLng: [12.05, -61.75],
				name: 'Grenada'
			}, {
				latLng: [13.16, -61.23],
				name: 'Saint Vincent and the Grenadines'
			}, {
				latLng: [13.16, -59.55],
				name: 'Barbados'
			}, {
				latLng: [17.11, -61.85],
				name: 'Antigua and Barbuda'
			}, {
				latLng: [-4.61, 55.45],
				name: 'Seychelles'
			}, {
				latLng: [7.35, 134.46],
				name: 'Palau'
			}, {
				latLng: [42.5, 1.51],
				name: 'Andorra'
			}, {
				latLng: [14.01, -60.98],
				name: 'Saint Lucia'
			}, {
				latLng: [6.91, 158.18],
				name: 'Federated States of Micronesia'
			}, {
				latLng: [1.3, 103.8],
				name: 'Singapore'
			}, {
				latLng: [0.33, 6.73],
				name: 'SÃ£o TomÃ© and PrÃ­ncipe'
			}]
		});

		$('#usa-vectormap').vectorMap({
			map: 'us_merc_en',
			backgroundColor: 'transparent',
			regionStyle: {
				initial: {
					fill: '#727cf5'
				}
			}
		});

		$('#india-vectormap').vectorMap({
			map: 'in_mill_en',
			backgroundColor: 'transparent',
			regionStyle: {
				initial: {
					fill: '#6c757d'
				}
			}
		});

		$('#australia-vectormap').vectorMap({
			map: 'au_mill_en',
			backgroundColor: 'transparent',
			regionStyle: {
				initial: {
					fill: '#0acf97'
				}
			}
		});

		$('#chicago-vectormap').vectorMap({
			map: 'us-il-chicago_mill_en',
			backgroundColor: 'transparent',
			regionStyle: {
				initial: {
					fill: '#39afd1'
				}
			}
		});

		$('#uk-vectormap').vectorMap({
			map: 'uk_mill_en',
			backgroundColor: 'transparent',
			regionStyle: {
				initial: {
					fill: '#fa5c7c'
				}
			}
		});

		$('#canada-vectormap').vectorMap({
			map: 'ca_lcc_en',
			backgroundColor: 'transparent',
			regionStyle: {
				initial: {
					fill: '#ffbc00'
				}
			}
		});

		$('#europe-vectormap').vectorMap({
			map: 'europe_mill_en',
			backgroundColor: 'transparent',
			regionStyle: {
				initial: {
					fill: '#727cf5'
				}
			}
		});

		$('#france-vectormap').vectorMap({
			map: 'fr_merc_en',
			backgroundColor: 'transparent',
			regionStyle: {
				initial: {
					fill: '#0acf97'
				}
			}
		});

		$('#spain-vectormap').vectorMap({
			map: 'es_merc',
			backgroundColor: 'transparent',
			regionStyle: {
				initial: {
					fill: '#39afd1'
				}
			}
		});

		$('#spain2-vectormap').vectorMap({
			map: 'es_mill',
			backgroundColor: 'transparent',
			regionStyle: {
				initial: {
					fill: '#6c757d'
				}
			}
		});

	},
		//init
		$.VectorMap = new VectorMap, $.VectorMap.Constructor =
		VectorMap
}(window.jQuery),

	//initializing
	function ($) {
		"use strict";
		$.VectorMap.init()
	}(window.jQuery);
/**
  
 *  Author:  KT
 * Module/App: Widgets
 */


Apex.grid = {
    padding: {
        right: 0,
        left: 0
    }
}

Apex.dataLabels = {
    enabled: false
}

var randomizeArray = function (arg) {
    var array = arg.slice();
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


$(document).ready(function () {
    "use strict";
    // data for the sparklines that appear below header area
    var sparklineData = [47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46];

    // the default colorPalette for this dashboard
    var colorPalette = ['#00D8B6', '#008FFB', '#FEB019', '#FF4560', '#775DD0']

    var labelsSales = [];
    for (var i=1; i<=24;i++) {
        labelsSales.push('2018-09-' + i);
    }
    var colors = ["#3688fc"];
    var dataColors = $("#sales-spark").data('colors');
    if (dataColors) {
        colors = dataColors.split(",");
    }
    var salesspark = {
        chart: {
            type: 'area',
            height: 172,
            sparkline: {
                enabled: true
            },
        },
        stroke: {
            width: 2,
            curve: 'straight'
        },
        fill: {
            opacity: 0.2,
        },
        series: [{
            name: 'Hyper Sales',
            data: randomizeArray(sparklineData)
        }],
        xaxis: {
            type: 'datetime',
        },
        yaxis: {
            min: 0
        },
        colors: colors,
        labels: labelsSales,
        title: {
            text: '$424,652',
            offsetX: 20,
            offsetY: 20,
            style: {
                fontSize: '24px'
            }
        },
        subtitle: {
            text: 'Sales',
            offsetX: 20,
            offsetY: 55,
            style: {
                fontSize: '14px'
            }
        }
    }
    new ApexCharts(document.querySelector("#sales-spark"), salesspark).render();

    var colors = ["#0acf97"];
    var dataColors = $("#profit-spark").data('colors');
    if (dataColors) {
        colors = dataColors.split(",");
    }
    var profitspark = {
        chart: {
            type: 'bar',
            height: 172,
            sparkline: {
                enabled: true
            },
        },
        stroke: {
            width: 0,
            curve: 'straight'
        },
        fill: {
            opacity: 0.5,
        },
        series: [{
            name: 'Net Profits ',
            data: randomizeArray(sparklineData)
        }],
        xaxis: {
            crosshairs: {
                width: 1
            },
        },
        yaxis: {
            min: 0
        },
        colors: colors,
        title: {
            text: '$135,965',
            offsetX: 20,
            offsetY: 20,
            style: {
                fontSize: '24px'
            }
        },
        subtitle: {
            text: 'Profits',
            offsetX: 20,
            offsetY: 55,
            style: {
                fontSize: '14px'
            }
        }
    }

    new ApexCharts(document.querySelector("#profit-spark"), profitspark).render();

    // Other Sparkline

    var colors = ["#734CEA"];
    var dataColors = $("#spark1").data('colors');
    if (dataColors) {
        colors = dataColors.split(",");
    }
    var spark1 = {
        chart: {
            type: 'line',
            height: 100,
            sparkline: {
                enabled: true
            },
        },
        series: [{
            data: [25, 66, 41, 59, 25, 44, 12, 36, 9, 21]
        }],
        stroke: {
            width: 4,
            curve: 'smooth'
        },
        markers: {
            size: 0
        },
        colors: colors
    }
    var colors = ["#34bfa3"];
    var dataColors = $("#spark2").data('colors');
    if (dataColors) {
        colors = dataColors.split(",");
    }
    var spark2 = {
        chart: {
            type: 'bar',
            height: 100,
            sparkline: {
                enabled: true
            },
        },
        series: [{
            data: [12, 14, 2, 47, 32, 44, 14, 55, 41, 69]
        }],
        stroke: {
            width: 3,
            curve: 'smooth'
        },
        markers: {
            size: 0
        },
        colors: colors
    }
    var colors = ["#f4516c"];
    var dataColors = $("#spark3").data('colors');
    if (dataColors) {
        colors = dataColors.split(",");
    }
    var spark3 = {
        chart: {
            type: 'line',
            height: 100,
            sparkline: {
                enabled: true
            },
        },
        series: [{
            data: [47, 45, 74, 32, 56, 31, 44, 33, 45, 19]
        }],
        stroke: {
            width: 4,
            curve: 'smooth'
        },
        markers: {
            size: 0
        },
        colors: colors
    }
    var colors = ["#00c5dc"];
    var dataColors = $("#spark4").data('colors');
    if (dataColors) {
        colors = dataColors.split(",");
    }
    var spark4 = {
        chart: {
            type: 'bar',
            height: 100,
            sparkline: {
                enabled: true
            },
        },
        plotOptions: {
            bar: {
                horizontal: false,
                endingShape: 'rounded',
                columnWidth: '55%',
            },
        },
        series: [{
            data: [15, 75, 47, 65, 14, 32, 19, 54, 44, 61]
        }],
        stroke: {
            width: 3,
            curve: 'smooth'
        },
        markers: {
            size: 0
        },
        colors: colors
    }

    new ApexCharts(document.querySelector("#spark1"), spark1).render();
    new ApexCharts(document.querySelector("#spark2"), spark2).render();
    new ApexCharts(document.querySelector("#spark3"), spark3).render();
    new ApexCharts(document.querySelector("#spark4"), spark4).render();
});


//
// Campaign Sent Chart
//
var colors = ["#727cf5"];
var dataColors = $("#campaign-sent-chart").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}
var options1 = {
    chart: {
        type: 'bar',
        height: 60,
        sparkline: {
            enabled: true
        }
    },
    plotOptions: {
        bar: {
            columnWidth: '60%'
        }
    },
    colors: colors,
    series: [{
        data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54]
    }],
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    xaxis: {
        crosshairs: {
            width: 1
        },
    },
    tooltip: {
        fixed: {
            enabled: false
        },
        x: {
            show: false
        },
        y: {
            title: {
                formatter: function (seriesName) {
                    return ''
                }
            }
        },
        marker: {
            show: false
        }
    }
}

new ApexCharts(document.querySelector("#campaign-sent-chart"), options1).render();


// 
// New Leads Chart
//
var colors = ["#727cf5"];
var dataColors = $("#new-leads-chart").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}
var options2 = {
    chart: {
        type: 'line',
        height: 60,
        sparkline: {
            enabled: true
        }
    },
    series: [{
        data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54]
    }],
    stroke: {
        width: 2,
        curve: 'smooth'
    },
    markers: {
        size: 0
    },
    colors: colors,
    tooltip: {
        fixed: {
            enabled: false
        },
        x: {
            show: false
        },
        y: {
            title: {
                formatter: function (seriesName) {
                    return ''
                }
            }
        },
        marker: {
            show: false
        }
    }
}


new ApexCharts(document.querySelector("#new-leads-chart"), options2).render();


//
// Deals Charts
//
var colors = ["#727cf5"];
var dataColors = $("#deals-chart").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}
var options3 = {
    chart: {
        type: 'bar',
        height: 60,
        sparkline: {
            enabled: true
        }
    },
    plotOptions: {
        bar: {
            columnWidth: '60%'
        }
    },
    colors: colors,
    series: [{
        data: [12, 14, 2, 47, 42, 15, 47, 75, 65, 19, 14]
    }],
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    xaxis: {
        crosshairs: {
            width: 1
        },
    },
    tooltip: {
        fixed: {
            enabled: false
        },
        x: {
            show: false
        },
        y: {
            title: {
                formatter: function (seriesName) {
                    return ''
                }
            }
        },
        marker: {
            show: false
        }
    }
}


new ApexCharts(document.querySelector("#deals-chart"), options3).render();

//
// Booked Revenue Chart
//
var colors = ["#727cf5"];
var dataColors = $("#booked-revenue-chart").data('colors');
if (dataColors) {
    colors = dataColors.split(",");
}
var options4 = {
    chart: {
        type: 'bar',
        height: 60,
        sparkline: {
            enabled: true
        }
    },
    plotOptions: {
        bar: {
            columnWidth: '60%'
        }
    },
    colors: colors,
    series: [{
        data: [47, 45, 74, 14, 56, 74, 14, 11, 7, 39, 82]
    }],
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    xaxis: {
        crosshairs: {
            width: 1
        },
    },
    tooltip: {
        fixed: {
            enabled: false
        },
        x: {
            show: false
        },
        y: {
            title: {
                formatter: function (seriesName) {
                    return ''
                }
            }
        },
        marker: {
            show: false
        }
    }
}

new ApexCharts(document.querySelector("#booked-revenue-chart"), options4).render();
/*
 
*  Author:  KT
* Component: Chat init js
*/

!function ($) {
    "use strict";

    var ChatApp = function () {
        this.$body = $("body"),
            this.$chatInput = $('.chat-input'),
            this.$chatList = $('.conversation-list'),
            this.$chatSendBtn = $('.chat-send'),
            this.$chatForm = $("#chat-form")
    };

    ChatApp.prototype.save = function () {
        var chatText = this.$chatInput.val();
        var chatTime = moment().format("h:mm");
        if (chatText == "") {
            this.$chatInput.focus();
            return false;
        } else {
            $('<li class="clearfix odd"><div class="chat-avatar"><img src="assets/images/users/avatar-1.jpg" alt="male"><i>' + chatTime + '</i></div><div class="conversation-text"><div class="ctext-wrap"><i>Dominic</i><p>' + chatText + '</p></div></div></li>').appendTo('.conversation-list');
            this.$chatInput.focus();
            this.$chatList.animate({ scrollTop: this.$chatList.prop("scrollHeight") }, 1000);
            return true;
        }
    }

    // init
    ChatApp.prototype.init = function () {
        var $this = this;
        //binding keypress event on chat input box - on enter we are adding the chat into chat list - 
        $this.$chatInput.keypress(function (ev) {
            var p = ev.which;
            if (p == 13) {
                $this.save();
                return false;
            }
        });


        //binding send button click
        $this.$chatForm.on('submit', function (ev) {
            ev.preventDefault();
            $this.save();
            $this.$chatForm.removeClass('was-validated');
            $this.$chatInput.val('');
            return false;
        });
    },
        //init ChatApp
        $.ChatApp = new ChatApp, $.ChatApp.Constructor = ChatApp

}(window.jQuery),

    //initializing main application module
    function ($) {
        "use strict";
        $.ChatApp.init();
    }(window.jQuery);
/**
 
*  Author:  KT
* Component: Dragula component
*/


!function ($) {
    "use strict";

    var Dragula = function () {
        this.$body = $("body")
    };


    /* Initializing */
    Dragula.prototype.init = function () {
        
        $('[data-plugin="dragula"]').each(function () {
            var containersIds = $(this).data("containers");
            var containers = [];
            if (containersIds) {
                for (var i = 0; i < containersIds.length; i++) {
                    containers.push($("#" + containersIds[i])[0]);
                }
            } else {
                containers = [$(this)[0]];
            }

            // if handle provided
            var handleClass = $(this).data("handleclass");

            // init dragula
            if (handleClass) {
                dragula(containers, {
                    moves: function (el, container, handle) {
                        return handle.classList.contains(handleClass);
                    }
                });
            } else {
                dragula(containers);
            }
            
        });
    },

        //init dragula
        $.Dragula = new Dragula, $.Dragula.Constructor = Dragula

}(window.jQuery),

//initializing Dragula
function ($) {
"use strict";
    $.Dragula.init()
}(window.jQuery);

/**
 
*  Author:  KT
* Component: Dragula component
*/


!function ($) {
    "use strict";

    var FileUpload = function () {
        this.$body = $("body")
    };


    /* Initializing */
    FileUpload.prototype.init = function () {
        // Disable auto discovery

        Dropzone.autoDiscover = false;



        $('[data-plugin="dropzone"]').each(function () {
            var actionUrl = $(this).attr('action')
            var previewContainer = $(this).data('previewsContainer');

            var opts = { url: actionUrl};
            if (previewContainer) {
                opts['previewsContainer'] = previewContainer;
            }

            var uploadPreviewTemplate = $(this).data("uploadPreviewTemplate");
            if (uploadPreviewTemplate) {
                opts['previewTemplate'] = $(uploadPreviewTemplate).html();
            }

            var dropzoneEl = $(this).dropzone(opts);
            
        });
    },

        //init fileupload
        $.FileUpload = new FileUpload, $.FileUpload.Constructor = FileUpload

}(window.jQuery),

//initializing FileUpload
function ($) {
"use strict";
    $.FileUpload.init()
}(window.jQuery);

/*
 
*  Author:  KT
* Component: Range Slider init js
*/


!function ($) {
    "use strict";

    var RangeSlider = function () {
        this.$body = $("body")
    };


    /* Initializing */
    RangeSlider.prototype.init = function () {
        $('[data-plugin="range-slider"]').each(function () {
            var opts = $(this).data();
            $(this).ionRangeSlider(opts);
        });
    },

    //init RangeSlider
    $.RangeSlider = new RangeSlider, $.RangeSlider.Constructor = RangeSlider

}(window.jQuery),

//initializing RangeSlider
function ($) {
"use strict";
    $.RangeSlider.init()
}(window.jQuery);
/*
 
*  Author:  KT
* Component: Ratings
*/

// Rated
$("#js-interaction").bind('rated', function(event, value) {
    $('#jsvalue').text('You\'ve rated it: ' + value);
});

// Reset
$("#js-interaction").bind('reset', function() {
    $('#jsvalue').text('Rating reset');
});

// Over
$("#js-interaction").bind('over', function(event, value) {
    $('#jshover').text('Hovering over: ' + value);
});
/*
 
*  Author:  KT
* Component: Scrollbar Init Js
*/

$('.slimscroll-leftbar').slimscroll({
    height: 'auto',
    position: 'left',
    size: "4px",
    color: '#9ea5ab',
    wheelStep: 5,
    touchScrollStep: 20
});

$('.slimscroll-size').slimscroll({
    height: 'auto',
    position: 'right',
    size: "10px",
    color: '#9ea5ab',
    wheelStep: 5,
    touchScrollStep: 20
});

$('.slimscroll-color').slimscroll({
    height: 'auto',
    position: 'right',
    size: "5px",
    color: '#727cf5',
    wheelStep: 5,
    touchScrollStep: 20
});

$('.slimscroll-always-visible').slimscroll({
    height: 'auto',
    position: 'right',
    size: "5px",
    color: '#9ea5ab',
    wheelStep: 5,
    alwaysVisible: true,
    touchScrollStep: 20
});
/*
 
*  Author:  KT
* Component: Todo init js
*/

!function($) {
    "use strict";

    var TodoApp = function() {
        this.$body = $("body"),
        this.$todoContainer = $('#todo-container'),
        this.$todoMessage = $("#todo-message"),
        this.$todoRemaining = $("#todo-remaining"),
        this.$todoTotal = $("#todo-total"),
        this.$archiveBtn = $("#btn-archive"),
        this.$todoList = $("#todo-list"),
        this.$todoDonechk = ".todo-done",
        this.$todoForm = $("#todo-form"),
        this.$todoInput = $("#todo-input-text"),
        this.$todoBtn = $("#todo-btn-submit"),

        this.$todoData = [
        {
            'id': '1',
            'text': 'Design One page theme',
            'done': false
        },
        {
            'id': '2',
            'text': 'Build a js based app',
            'done': true
        },
        {
            'id': '3',
            'text': 'Creating component page',
            'done': true
        },
        {
            'id': '4',
            'text': 'Testing??',
            'done': true
        },
        {
            'id': '5',
            'text': 'Hehe!! This looks cool!',
            'done': false
        },
        {
            'id': '6',
            'text': 'Create new version 3.0',
            'done': false
        },
        {
            'id': '7',
            'text': 'Build an angular app',
            'done': true
        }];

        this.$todoCompletedData = [];
        this.$todoUnCompletedData = [];
    };

    //mark/unmark - you can use ajax to save data on server side
    TodoApp.prototype.markTodo = function(todoId, complete) {
       for(var count=0; count<this.$todoData.length;count++) {
            if(this.$todoData[count].id == todoId) {
                this.$todoData[count].done = complete;
            }
       }
    },
    //adds new todo
    TodoApp.prototype.addTodo = function(todoText) {
        this.$todoData.push({'id': this.$todoData.length, 'text': todoText, 'done': false});
        //regenerate list
        this.generate();
    },
    //Archives the completed todos
    TodoApp.prototype.archives = function() {
    	this.$todoUnCompletedData = [];
        for(var count=0; count<this.$todoData.length;count++) {
            //geretaing html
            var todoItem = this.$todoData[count];
            if(todoItem.done == true) {
                this.$todoCompletedData.push(todoItem);
            } else {
                this.$todoUnCompletedData.push(todoItem);
            }
        }
        this.$todoData = [];
        this.$todoData = [].concat(this.$todoUnCompletedData);
        //regenerate todo list
        this.generate();
    },
    //Generates todos
    TodoApp.prototype.generate = function() {
        //clear list
        this.$todoList.html("");
        var remaining = 0;
        for(var count=0; count<this.$todoData.length;count++) {
            //geretaing html
            var todoItem = this.$todoData[count];
            if(todoItem.done == true)
                this.$todoList.prepend('<li class="list-group-item border-0 ps-0"><div class="form-check mb-0"><input type="checkbox" class="form-check-input todo-done" id="' + todoItem.id + '" checked><label class="form-check-label" for="' + todoItem.id + '"><s>' + todoItem.text + '</s></label></div></li>');
            else {
                remaining = remaining + 1;
                this.$todoList.prepend('<li class="list-group-item border-0 ps-0"><div class="form-check mb-0"><input type="checkbox" class="form-check-input todo-done" id="' + todoItem.id + '"><label class="form-check-label" for="' + todoItem.id + '">' + todoItem.text + '</label></div></li>');
            }
        }

        //set total in ui
        this.$todoTotal.text(this.$todoData.length);
        //set remaining
        this.$todoRemaining.text(remaining);
    },
    //init todo app
    TodoApp.prototype.init = function () {
        var $this = this;
        //generating todo list
        this.generate();

        //binding archive
        this.$archiveBtn.on("click", function(e) {
        	e.preventDefault();
            $this.archives();
            return false;
        });

        //binding todo done chk
        $(document).on("change", this.$todoDonechk, function() {
            if(this.checked) 
                $this.markTodo($(this).attr('id'), true);
            else
                $this.markTodo($(this).attr('id'), false);
            //regenerate list
            $this.generate();
        });

        //binding the new todo button
        this.$todoForm.on("submit", function(e) {
            e.preventDefault();
            if ($this.$todoInput.val() == "" || typeof($this.$todoInput.val()) == 'undefined' || $this.$todoInput.val() == null) {
                $this.$todoInput.focus();
                return false;
            } else {
                $this.addTodo($this.$todoInput.val());
                $this.$todoForm.removeClass('was-validated');
                $this.$todoInput.val("");
                return true;
            }
        });
    },
    //init TodoApp
    $.TodoApp = new TodoApp, $.TodoApp.Constructor = TodoApp
    
}(window.jQuery),

//initializing todo app
function($) {
    "use strict";
    $.TodoApp.init()
}(window.jQuery);
!function(e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).dragula=e()}(function(){return function o(r,i,u){function c(t,e){if(!i[t]){if(!r[t]){var n="function"==typeof require&&require;if(!e&&n)return n(t,!0);if(a)return a(t,!0);throw(n=new Error("Cannot find module '"+t+"'")).code="MODULE_NOT_FOUND",n}n=i[t]={exports:{}},r[t][0].call(n.exports,function(e){return c(r[t][1][e]||e)},n,n.exports,o,r,i,u)}return i[t].exports}for(var a="function"==typeof require&&require,e=0;e<u.length;e++)c(u[e]);return c}({1:[function(e,t,n){"use strict";var o={},r="(?:^|\\s)",i="(?:\\s|$)";function u(e){var t=o[e];return t?t.lastIndex=0:o[e]=t=new RegExp(r+e+i,"g"),t}t.exports={add:function(e,t){var n=e.className;n.length?u(t).test(n)||(e.className+=" "+t):e.className=t},rm:function(e,t){e.className=e.className.replace(u(t)," ").trim()}}},{}],2:[function(e,t,n){(function(r){"use strict";var M=e("contra/emitter"),k=e("crossvent"),j=e("./classes"),R=document,q=R.documentElement;function U(e,t,n,o){r.navigator.pointerEnabled?k[t](e,{mouseup:"pointerup",mousedown:"pointerdown",mousemove:"pointermove"}[n],o):r.navigator.msPointerEnabled?k[t](e,{mouseup:"MSPointerUp",mousedown:"MSPointerDown",mousemove:"MSPointerMove"}[n],o):(k[t](e,{mouseup:"touchend",mousedown:"touchstart",mousemove:"touchmove"}[n],o),k[t](e,n,o))}function K(e){if(void 0!==e.touches)return e.touches.length;if(void 0!==e.which&&0!==e.which)return e.which;if(void 0!==e.buttons)return e.buttons;e=e.button;return void 0!==e?1&e?1:2&e?3:4&e?2:0:void 0}function z(e,t){return void 0!==r[t]?r[t]:(q.clientHeight?q:R.body)[e]}function H(e,t,n){var o=(e=e||{}).className||"";return e.className+=" gu-hide",n=R.elementFromPoint(t,n),e.className=o,n}function V(){return!1}function $(){return!0}function G(e){return e.width||e.right-e.left}function J(e){return e.height||e.bottom-e.top}function Q(e){return e.parentNode===R?null:e.parentNode}function W(e){return"INPUT"===e.tagName||"TEXTAREA"===e.tagName||"SELECT"===e.tagName||function e(t){if(!t)return!1;if("false"===t.contentEditable)return!1;if("true"===t.contentEditable)return!0;return e(Q(t))}(e)}function Z(t){return t.nextElementSibling||function(){var e=t;for(;e=e.nextSibling,e&&1!==e.nodeType;);return e}()}function ee(e,t){var t=(n=t).targetTouches&&n.targetTouches.length?n.targetTouches[0]:n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:n,n={pageX:"clientX",pageY:"clientY"};return e in n&&!(e in t)&&n[e]in t&&(e=n[e]),t[e]}t.exports=function(e,t){var l,f,s,d,m,o,r,v,p,h,n;1===arguments.length&&!1===Array.isArray(e)&&(t=e,e=[]);var i,g=null,y=t||{};void 0===y.moves&&(y.moves=$),void 0===y.accepts&&(y.accepts=$),void 0===y.invalid&&(y.invalid=function(){return!1}),void 0===y.containers&&(y.containers=e||[]),void 0===y.isContainer&&(y.isContainer=V),void 0===y.copy&&(y.copy=!1),void 0===y.copySortSource&&(y.copySortSource=!1),void 0===y.revertOnSpill&&(y.revertOnSpill=!1),void 0===y.removeOnSpill&&(y.removeOnSpill=!1),void 0===y.direction&&(y.direction="vertical"),void 0===y.ignoreInputTextSelection&&(y.ignoreInputTextSelection=!0),void 0===y.mirrorContainer&&(y.mirrorContainer=R.body);var w=M({containers:y.containers,start:function(e){e=S(e);e&&C(e)},end:O,cancel:L,remove:X,destroy:function(){c(!0),N({})},canMove:function(e){return!!S(e)},dragging:!1});return!0===y.removeOnSpill&&w.on("over",function(e){j.rm(e,"gu-hide")}).on("out",function(e){w.dragging&&j.add(e,"gu-hide")}),c(),w;function u(e){return-1!==w.containers.indexOf(e)||y.isContainer(e)}function c(e){e=e?"remove":"add";U(q,e,"mousedown",E),U(q,e,"mouseup",N)}function a(e){U(q,e?"remove":"add","mousemove",x)}function b(e){e=e?"remove":"add";k[e](q,"selectstart",T),k[e](q,"click",T)}function T(e){i&&e.preventDefault()}function E(e){var t,n;o=e.clientX,r=e.clientY,1!==K(e)||e.metaKey||e.ctrlKey||(n=S(t=e.target))&&(i=n,a(),"mousedown"===e.type&&(W(t)?t.focus():e.preventDefault()))}function x(e){if(i)if(0!==K(e)){if(!(void 0!==e.clientX&&Math.abs(e.clientX-o)<=(y.slideFactorX||0)&&void 0!==e.clientY&&Math.abs(e.clientY-r)<=(y.slideFactorY||0))){if(y.ignoreInputTextSelection){var t=ee("clientX",e)||0,n=ee("clientY",e)||0;if(W(R.elementFromPoint(t,n)))return}n=i;a(!0),b(),O(),C(n);n=function(e){e=e.getBoundingClientRect();return{left:e.left+z("scrollLeft","pageXOffset"),top:e.top+z("scrollTop","pageYOffset")}}(s);d=ee("pageX",e)-n.left,m=ee("pageY",e)-n.top,j.add(h||s,"gu-transit"),function(){if(l)return;var e=s.getBoundingClientRect();(l=s.cloneNode(!0)).style.width=G(e)+"px",l.style.height=J(e)+"px",j.rm(l,"gu-transit"),j.add(l,"gu-mirror"),y.mirrorContainer.appendChild(l),U(q,"add","mousemove",P),j.add(y.mirrorContainer,"gu-unselectable"),w.emit("cloned",l,s,"mirror")}(),P(e)}}else N({})}function S(e){if(!(w.dragging&&l||u(e))){for(var t=e;Q(e)&&!1===u(Q(e));){if(y.invalid(e,t))return;if(!(e=Q(e)))return}var n=Q(e);if(n)if(!y.invalid(e,t))if(y.moves(e,n,t,Z(e)))return{item:e,source:n}}}function C(e){var t,n;t=e.item,n=e.source,("boolean"==typeof y.copy?y.copy:y.copy(t,n))&&(h=e.item.cloneNode(!0),w.emit("cloned",h,e.item,"copy")),f=e.source,s=e.item,v=p=Z(e.item),w.dragging=!0,w.emit("drag",s,f)}function O(){var e;w.dragging&&_(e=h||s,Q(e))}function I(){a(!(i=!1)),b(!0)}function N(e){var t,n;I(),w.dragging&&(t=h||s,n=ee("clientX",e)||0,e=ee("clientY",e)||0,(e=B(H(l,n,e),n,e))&&(h&&y.copySortSource||!h||e!==f)?_(t,e):(y.removeOnSpill?X:L)())}function _(e,t){var n=Q(e);h&&y.copySortSource&&t===f&&n.removeChild(s),A(t)?w.emit("cancel",e,f,f):w.emit("drop",e,t,f,p),Y()}function X(){var e,t;w.dragging&&((t=Q(e=h||s))&&t.removeChild(e),w.emit(h?"cancel":"remove",e,t,f),Y())}function L(e){var t,n,o;w.dragging&&(t=0<arguments.length?e:y.revertOnSpill,!1===(e=A(o=Q(n=h||s)))&&t&&(h?o&&o.removeChild(h):f.insertBefore(n,v)),e||t?w.emit("cancel",n,f,f):w.emit("drop",n,o,f,p),Y())}function Y(){var e=h||s;I(),l&&(j.rm(y.mirrorContainer,"gu-unselectable"),U(q,"remove","mousemove",P),Q(l).removeChild(l),l=null),e&&j.rm(e,"gu-transit"),n&&clearTimeout(n),w.dragging=!1,g&&w.emit("out",e,g,f),w.emit("dragend",e),f=s=h=v=p=n=g=null}function A(e,t){t=void 0!==t?t:l?p:Z(h||s);return e===f&&t===v}function B(t,n,o){for(var r=t;r&&!function(){if(!1===u(r))return!1;var e=D(r,t),e=F(r,e,n,o);if(A(r,e))return!0;return y.accepts(s,r,f,e)}();)r=Q(r);return r}function P(e){if(l){e.preventDefault();var t=ee("clientX",e)||0,n=ee("clientY",e)||0,o=t-d,r=n-m;l.style.left=o+"px",l.style.top=r+"px";var i=h||s,e=H(l,t,n),o=B(e,t,n),u=null!==o&&o!==g;!u&&null!==o||(g&&a("out"),g=o,u&&a("over"));r=Q(i);if(o!==f||!h||y.copySortSource){var c,e=D(o,e);if(null!==e)c=F(o,e,t,n);else{if(!0!==y.revertOnSpill||h)return void(h&&r&&r.removeChild(i));c=v,o=f}(null===c&&u||c!==i&&c!==Z(i))&&(p=c,o.insertBefore(i,c),w.emit("shadow",i,o,f))}else r&&r.removeChild(i)}function a(e){w.emit(e,i,g,f)}}function D(e,t){for(var n=t;n!==e&&Q(n)!==e;)n=Q(n);return n===q?null:n}function F(r,t,i,u){var c="horizontal"===y.direction;return(t!==r?function(){var e=t.getBoundingClientRect();if(c)return n(i>e.left+G(e)/2);return n(u>e.top+J(e)/2)}:function(){var e,t,n,o=r.children.length;for(e=0;e<o;e++){if(t=r.children[e],n=t.getBoundingClientRect(),c&&n.left+n.width/2>i)return t;if(!c&&n.top+n.height/2>u)return t}return null})();function n(e){return e?Z(t):t}}}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./classes":1,"contra/emitter":5,crossvent:6}],3:[function(e,t,n){t.exports=function(e,t){return Array.prototype.slice.call(e,t)}},{}],4:[function(e,t,n){"use strict";var o=e("ticky");t.exports=function(e,t,n){e&&o(function(){e.apply(n||null,t||[])})}},{ticky:10}],5:[function(e,t,n){"use strict";var c=e("atoa"),a=e("./debounce");t.exports=function(r,e){var i=e||{},u={};return void 0===r&&(r={}),r.on=function(e,t){return u[e]?u[e].push(t):u[e]=[t],r},r.once=function(e,t){return t._once=!0,r.on(e,t),r},r.off=function(e,t){var n=arguments.length;if(1===n)delete u[e];else if(0===n)u={};else{e=u[e];if(!e)return r;e.splice(e.indexOf(t),1)}return r},r.emit=function(){var e=c(arguments);return r.emitterSnapshot(e.shift()).apply(this,e)},r.emitterSnapshot=function(o){var e=(u[o]||[]).slice(0);return function(){var t=c(arguments),n=this||r;if("error"===o&&!1!==i.throws&&!e.length)throw 1===t.length?t[0]:t;return e.forEach(function(e){i.async?a(e,t,n):e.apply(n,t),e._once&&r.off(o,e)}),r}},r}},{"./debounce":4,atoa:3}],6:[function(n,o,e){(function(r){"use strict";var i=n("custom-event"),u=n("./eventmap"),c=r.document,e=function(e,t,n,o){return e.addEventListener(t,n,o)},t=function(e,t,n,o){return e.removeEventListener(t,n,o)},a=[];function l(e,t,n){t=function(e,t,n){var o,r;for(o=0;o<a.length;o++)if((r=a[o]).element===e&&r.type===t&&r.fn===n)return o}(e,t,n);if(t){n=a[t].wrapper;return a.splice(t,1),n}}r.addEventListener||(e=function(e,t,n){return e.attachEvent("on"+t,function(e,t,n){var o=l(e,t,n)||function(n,o){return function(e){var t=e||r.event;t.target=t.target||t.srcElement,t.preventDefault=t.preventDefault||function(){t.returnValue=!1},t.stopPropagation=t.stopPropagation||function(){t.cancelBubble=!0},t.which=t.which||t.keyCode,o.call(n,t)}}(e,n);return a.push({wrapper:o,element:e,type:t,fn:n}),o}(e,t,n))},t=function(e,t,n){n=l(e,t,n);if(n)return e.detachEvent("on"+t,n)}),o.exports={add:e,remove:t,fabricate:function(e,t,n){var o=-1===u.indexOf(t)?new i(t,{detail:n}):function(){var e;c.createEvent?(e=c.createEvent("Event")).initEvent(t,!0,!0):c.createEventObject&&(e=c.createEventObject());return e}();e.dispatchEvent?e.dispatchEvent(o):e.fireEvent("on"+t,o)}}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./eventmap":7,"custom-event":8}],7:[function(e,r,t){(function(e){"use strict";var t=[],n="",o=/^on/;for(n in e)o.test(n)&&t.push(n.slice(2));r.exports=t}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],8:[function(e,n,t){(function(e){var t=e.CustomEvent;n.exports=function(){try{var e=new t("cat",{detail:{foo:"bar"}});return"cat"===e.type&&"bar"===e.detail.foo}catch(e){}}()?t:"undefined"!=typeof document&&"function"==typeof document.createEvent?function(e,t){var n=document.createEvent("CustomEvent");return t?n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail):n.initCustomEvent(e,!1,!1,void 0),n}:function(e,t){var n=document.createEventObject();return n.type=e,t?(n.bubbles=Boolean(t.bubbles),n.cancelable=Boolean(t.cancelable),n.detail=t.detail):(n.bubbles=!1,n.cancelable=!1,n.detail=void 0),n}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],9:[function(e,t,n){var o,r,t=t.exports={};function i(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}function c(t){if(o===setTimeout)return setTimeout(t,0);if((o===i||!o)&&setTimeout)return o=setTimeout,setTimeout(t,0);try{return o(t,0)}catch(e){try{return o.call(null,t,0)}catch(e){return o.call(this,t,0)}}}!function(){try{o="function"==typeof setTimeout?setTimeout:i}catch(e){o=i}try{r="function"==typeof clearTimeout?clearTimeout:u}catch(e){r=u}}();var a,l=[],f=!1,s=-1;function d(){f&&a&&(f=!1,a.length?l=a.concat(l):s=-1,l.length&&m())}function m(){if(!f){var e=c(d);f=!0;for(var t=l.length;t;){for(a=l,l=[];++s<t;)a&&a[s].run();s=-1,t=l.length}a=null,f=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===u||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(e)}}function v(e,t){this.fun=e,this.array=t}function p(){}t.nextTick=function(e){var t=new Array(arguments.length-1);if(1<arguments.length)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new v(e,t)),1!==l.length||f||c(m)},v.prototype.run=function(){this.fun.apply(null,this.array)},t.title="browser",t.browser=!0,t.env={},t.argv=[],t.version="",t.versions={},t.on=p,t.addListener=p,t.once=p,t.off=p,t.removeListener=p,t.removeAllListeners=p,t.emit=p,t.prependListener=p,t.prependOnceListener=p,t.listeners=function(e){return[]},t.binding=function(e){throw new Error("process.binding is not supported")},t.cwd=function(){return"/"},t.chdir=function(e){throw new Error("process.chdir is not supported")},t.umask=function(){return 0}},{}],10:[function(e,n,t){(function(t){var e="function"==typeof t?function(e){t(e)}:function(e){setTimeout(e,0)};n.exports=e}).call(this,e("timers").setImmediate)},{timers:11}],11:[function(a,e,l){(function(e,t){var o=a("process/browser.js").nextTick,n=Function.prototype.apply,r=Array.prototype.slice,i={},u=0;function c(e,t){this._id=e,this._clearFn=t}l.setTimeout=function(){return new c(n.call(setTimeout,window,arguments),clearTimeout)},l.setInterval=function(){return new c(n.call(setInterval,window,arguments),clearInterval)},l.clearTimeout=l.clearInterval=function(e){e.close()},c.prototype.unref=c.prototype.ref=function(){},c.prototype.close=function(){this._clearFn.call(window,this._id)},l.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},l.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},l._unrefActive=l.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;0<=t&&(e._idleTimeoutId=setTimeout(function(){e._onTimeout&&e._onTimeout()},t))},l.setImmediate="function"==typeof e?e:function(e){var t=u++,n=!(arguments.length<2)&&r.call(arguments,1);return i[t]=!0,o(function(){i[t]&&(n?e.apply(null,n):e.call(null),l.clearImmediate(t))}),t},l.clearImmediate="function"==typeof t?t:function(e){delete i[e]}}).call(this,a("timers").setImmediate,a("timers").clearImmediate)},{"process/browser.js":9,timers:11}]},{},[2])(2)});