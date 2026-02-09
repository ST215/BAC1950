(function() {
  "use strict";
  /*! modernizr 3.3.1 (Custom Build) | MIT *
   * https://modernizr.com/download/?-backgroundcliptext-csspointerevents-flexbox-objectfit-touchevents-video-setclasses !*/
  !function(e, n, t) {
    function o(e2, n2) {
      return typeof e2 === n2;
    }
    function r() {
      var e2, n2, t2, r2, s2, i2, a2;
      for (var l2 in x)
        if (x.hasOwnProperty(l2)) {
          if (e2 = [], n2 = x[l2], n2.name && (e2.push(n2.name.toLowerCase()), n2.options && n2.options.aliases && n2.options.aliases.length))
            for (t2 = 0; t2 < n2.options.aliases.length; t2++)
              e2.push(n2.options.aliases[t2].toLowerCase());
          for (r2 = o(n2.fn, "function") ? n2.fn() : n2.fn, s2 = 0; s2 < e2.length; s2++)
            i2 = e2[s2], a2 = i2.split("."), 1 === a2.length ? Modernizr2[a2[0]] = r2 : (!Modernizr2[a2[0]] || Modernizr2[a2[0]] instanceof Boolean || (Modernizr2[a2[0]] = new Boolean(Modernizr2[a2[0]])), Modernizr2[a2[0]][a2[1]] = r2), g.push((r2 ? "" : "no-") + a2.join("-"));
        }
    }
    function s(e2) {
      var n2 = b.className, t2 = Modernizr2._config.classPrefix || "";
      if (w && (n2 = n2.baseVal), Modernizr2._config.enableJSClass) {
        var o2 = new RegExp("(^|\\s)" + t2 + "no-js(\\s|$)");
        n2 = n2.replace(o2, "$1" + t2 + "js$2");
      }
      Modernizr2._config.enableClasses && (n2 += " " + t2 + e2.join(" " + t2), w ? b.className.baseVal = n2 : b.className = n2);
    }
    function i() {
      return "function" != typeof n.createElement ? n.createElement(arguments[0]) : w ? n.createElementNS.call(n, "http://www.w3.org/2000/svg", arguments[0]) : n.createElement.apply(n, arguments);
    }
    function a(e2) {
      return e2.replace(/([a-z])-([a-z])/g, function(e3, n2, t2) {
        return n2 + t2.toUpperCase();
      }).replace(/^-/, "");
    }
    function l() {
      var e2 = n.body;
      return e2 || (e2 = i(w ? "svg" : "body"), e2.fake = true), e2;
    }
    function f(e2, t2, o2, r2) {
      var s2, a2, f2, u2, c2 = "modernizr", p2 = i("div"), d2 = l();
      if (parseInt(o2, 10))
        for (; o2--; )
          f2 = i("div"), f2.id = r2 ? r2[o2] : c2 + (o2 + 1), p2.appendChild(f2);
      return s2 = i("style"), s2.type = "text/css", s2.id = "s" + c2, (d2.fake ? d2 : p2).appendChild(s2), d2.appendChild(p2), s2.styleSheet ? s2.styleSheet.cssText = e2 : s2.appendChild(n.createTextNode(e2)), p2.id = c2, d2.fake && (d2.style.background = "", d2.style.overflow = "hidden", u2 = b.style.overflow, b.style.overflow = "hidden", b.appendChild(d2)), a2 = t2(p2, e2), d2.fake ? (d2.parentNode.removeChild(d2), b.style.overflow = u2, b.offsetHeight) : p2.parentNode.removeChild(p2), !!a2;
    }
    function u(e2, n2) {
      return !!~("" + e2).indexOf(n2);
    }
    function c(e2, n2) {
      return function() {
        return e2.apply(n2, arguments);
      };
    }
    function p(e2, n2, t2) {
      var r2;
      for (var s2 in e2)
        if (e2[s2] in n2)
          return t2 === false ? e2[s2] : (r2 = n2[e2[s2]], o(r2, "function") ? c(r2, t2 || n2) : r2);
      return false;
    }
    function d(e2) {
      return e2.replace(/([A-Z])/g, function(e3, n2) {
        return "-" + n2.toLowerCase();
      }).replace(/^ms-/, "-ms-");
    }
    function v(n2, o2) {
      var r2 = n2.length;
      if ("CSS" in e && "supports" in e.CSS) {
        for (; r2--; )
          if (e.CSS.supports(d(n2[r2]), o2))
            return true;
        return false;
      }
      if ("CSSSupportsRule" in e) {
        for (var s2 = []; r2--; )
          s2.push("(" + d(n2[r2]) + ":" + o2 + ")");
        return s2 = s2.join(" or "), f("@supports (" + s2 + ") { #modernizr { position: absolute; } }", function(e2) {
          return "absolute" == getComputedStyle(e2, null).position;
        });
      }
      return t;
    }
    function m(e2, n2, r2, s2) {
      function l2() {
        c2 && (delete k.style, delete k.modElem);
      }
      if (s2 = o(s2, "undefined") ? false : s2, !o(r2, "undefined")) {
        var f2 = v(e2, r2);
        if (!o(f2, "undefined"))
          return f2;
      }
      for (var c2, p2, d2, m2, y2, h2 = ["modernizr", "tspan", "samp"]; !k.style && h2.length; )
        c2 = true, k.modElem = i(h2.shift()), k.style = k.modElem.style;
      for (d2 = e2.length, p2 = 0; d2 > p2; p2++)
        if (m2 = e2[p2], y2 = k.style[m2], u(m2, "-") && (m2 = a(m2)), k.style[m2] !== t) {
          if (s2 || o(r2, "undefined"))
            return l2(), "pfx" == n2 ? m2 : true;
          try {
            k.style[m2] = r2;
          } catch (g2) {
          }
          if (k.style[m2] != y2)
            return l2(), "pfx" == n2 ? m2 : true;
        }
      return l2(), false;
    }
    function y(e2, n2, t2, r2, s2) {
      var i2 = e2.charAt(0).toUpperCase() + e2.slice(1), a2 = (e2 + " " + P.join(i2 + " ") + i2).split(" ");
      return o(n2, "string") || o(n2, "undefined") ? m(a2, n2, r2, s2) : (a2 = (e2 + " " + j.join(i2 + " ") + i2).split(" "), p(a2, n2, t2));
    }
    function h(e2, n2, o2) {
      return y(e2, t, t, n2, o2);
    }
    var g = [], x = [], C = { _version: "3.3.1", _config: { classPrefix: "", enableClasses: true, enableJSClass: true, usePrefixes: true }, _q: [], on: function(e2, n2) {
      var t2 = this;
      setTimeout(function() {
        n2(t2[e2]);
      }, 0);
    }, addTest: function(e2, n2, t2) {
      x.push({ name: e2, fn: n2, options: t2 });
    }, addAsyncTest: function(e2) {
      x.push({ name: null, fn: e2 });
    } }, Modernizr2 = function() {
    };
    Modernizr2.prototype = C, Modernizr2 = new Modernizr2();
    var b = n.documentElement, w = "svg" === b.nodeName.toLowerCase(), T = C._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
    C._prefixes = T, Modernizr2.addTest("video", function() {
      var e2 = i("video"), n2 = false;
      try {
        (n2 = !!e2.canPlayType) && (n2 = new Boolean(n2), n2.ogg = e2.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), n2.h264 = e2.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), n2.webm = e2.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""), n2.vp9 = e2.canPlayType('video/webm; codecs="vp9"').replace(/^no$/, ""), n2.hls = e2.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/, ""));
      } catch (t2) {
      }
      return n2;
    }), Modernizr2.addTest("csspointerevents", function() {
      var e2 = i("a").style;
      return e2.cssText = "pointer-events:auto", "auto" === e2.pointerEvents;
    });
    var _ = C.testStyles = f;
    Modernizr2.addTest("touchevents", function() {
      var t2;
      if ("ontouchstart" in e || e.DocumentTouch && n instanceof DocumentTouch)
        t2 = true;
      else {
        var o2 = ["@media (", T.join("touch-enabled),("), "heartz", ")", "{#modernizr{top:9px;position:absolute}}"].join("");
        _(o2, function(e2) {
          t2 = 9 === e2.offsetTop;
        });
      }
      return t2;
    });
    var S = "Moz O ms Webkit", P = C._config.usePrefixes ? S.split(" ") : [];
    C._cssomPrefixes = P;
    var E = function(n2) {
      var o2, r2 = T.length, s2 = e.CSSRule;
      if ("undefined" == typeof s2)
        return t;
      if (!n2)
        return false;
      if (n2 = n2.replace(/^@/, ""), o2 = n2.replace(/-/g, "_").toUpperCase() + "_RULE", o2 in s2)
        return "@" + n2;
      for (var i2 = 0; r2 > i2; i2++) {
        var a2 = T[i2], l2 = a2.toUpperCase() + "_" + o2;
        if (l2 in s2)
          return "@-" + a2.toLowerCase() + "-" + n2;
      }
      return false;
    };
    C.atRule = E;
    var j = C._config.usePrefixes ? S.toLowerCase().split(" ") : [];
    C._domPrefixes = j;
    var z = { elem: i("modernizr") };
    Modernizr2._q.push(function() {
      delete z.elem;
    });
    var k = { style: z.elem.style };
    Modernizr2._q.unshift(function() {
      delete k.style;
    }), C.testAllProps = y, C.testAllProps = h, Modernizr2.addTest("flexbox", h("flexBasis", "1px", true));
    var N = C.prefixed = function(e2, n2, t2) {
      return 0 === e2.indexOf("@") ? E(e2) : (-1 != e2.indexOf("-") && (e2 = a(e2)), n2 ? y(e2, n2, t2) : y(e2, "pfx"));
    };
    Modernizr2.addTest("objectfit", !!N("objectFit"), { aliases: ["object-fit"] }), Modernizr2.addTest("backgroundcliptext", function() {
      return h("backgroundClip", "text");
    }), r(), s(g), delete C.addTest, delete C.addAsyncTest;
    for (var L = 0; L < Modernizr2._q.length; L++)
      Modernizr2._q[L]();
    e.Modernizr = Modernizr2;
  }(window, document);
  /*!
   * Bootstrap v3.3.7 (http://getbootstrap.com)
   * Copyright 2011-2017 Twitter, Inc.
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   */
  /*!
   * Generated using the Bootstrap Customizer (http://getbootstrap.com/customize/?id=1f5abcbc13a31592a88f68a5da3768af)
   * Config saved to config.json and https://gist.github.com/1f5abcbc13a31592a88f68a5da3768af
   */
  if (typeof jQuery === "undefined") {
    throw new Error("Bootstrap's JavaScript requires jQuery");
  }
  +function($) {
    var version = $.fn.jquery.split(" ")[0].split(".");
    if (version[0] < 2 && version[1] < 9 || version[0] == 1 && version[1] == 9 && version[2] < 1 || version[0] > 3) {
      throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4");
    }
  }(jQuery);
  +function($) {
    var dismiss = '[data-dismiss="alert"]';
    var Alert = function(el) {
      $(el).on("click", dismiss, this.close);
    };
    Alert.VERSION = "3.3.7";
    Alert.TRANSITION_DURATION = 150;
    Alert.prototype.close = function(e) {
      var $this = $(this);
      var selector = $this.attr("data-target");
      if (!selector) {
        selector = $this.attr("href");
        selector = selector && selector.replace(/.*(?=#[^\s]*$)/, "");
      }
      var $parent = $(selector === "#" ? [] : selector);
      if (e)
        e.preventDefault();
      if (!$parent.length) {
        $parent = $this.closest(".alert");
      }
      $parent.trigger(e = $.Event("close.bs.alert"));
      if (e.isDefaultPrevented())
        return;
      $parent.removeClass("in");
      function removeElement() {
        $parent.detach().trigger("closed.bs.alert").remove();
      }
      $.support.transition && $parent.hasClass("fade") ? $parent.one("bsTransitionEnd", removeElement).emulateTransitionEnd(Alert.TRANSITION_DURATION) : removeElement();
    };
    function Plugin(option) {
      return this.each(function() {
        var $this = $(this);
        var data = $this.data("bs.alert");
        if (!data)
          $this.data("bs.alert", data = new Alert(this));
        if (typeof option == "string")
          data[option].call($this);
      });
    }
    var old = $.fn.alert;
    $.fn.alert = Plugin;
    $.fn.alert.Constructor = Alert;
    $.fn.alert.noConflict = function() {
      $.fn.alert = old;
      return this;
    };
    $(document).on("click.bs.alert.data-api", dismiss, Alert.prototype.close);
  }(jQuery);
  +function($) {
    var Button = function(element, options) {
      this.$element = $(element);
      this.options = $.extend({}, Button.DEFAULTS, options);
      this.isLoading = false;
    };
    Button.VERSION = "3.3.7";
    Button.DEFAULTS = {
      loadingText: "loading..."
    };
    Button.prototype.setState = function(state) {
      var d = "disabled";
      var $el = this.$element;
      var val = $el.is("input") ? "val" : "html";
      var data = $el.data();
      state += "Text";
      if (data.resetText == null)
        $el.data("resetText", $el[val]());
      setTimeout($.proxy(function() {
        $el[val](data[state] == null ? this.options[state] : data[state]);
        if (state == "loadingText") {
          this.isLoading = true;
          $el.addClass(d).attr(d, d).prop(d, true);
        } else if (this.isLoading) {
          this.isLoading = false;
          $el.removeClass(d).removeAttr(d).prop(d, false);
        }
      }, this), 0);
    };
    Button.prototype.toggle = function() {
      var changed = true;
      var $parent = this.$element.closest('[data-toggle="buttons"]');
      if ($parent.length) {
        var $input = this.$element.find("input");
        if ($input.prop("type") == "radio") {
          if ($input.prop("checked"))
            changed = false;
          $parent.find(".active").removeClass("active");
          this.$element.addClass("active");
        } else if ($input.prop("type") == "checkbox") {
          if ($input.prop("checked") !== this.$element.hasClass("active"))
            changed = false;
          this.$element.toggleClass("active");
        }
        $input.prop("checked", this.$element.hasClass("active"));
        if (changed)
          $input.trigger("change");
      } else {
        this.$element.attr("aria-pressed", !this.$element.hasClass("active"));
        this.$element.toggleClass("active");
      }
    };
    function Plugin(option) {
      return this.each(function() {
        var $this = $(this);
        var data = $this.data("bs.button");
        var options = typeof option == "object" && option;
        if (!data)
          $this.data("bs.button", data = new Button(this, options));
        if (option == "toggle")
          data.toggle();
        else if (option)
          data.setState(option);
      });
    }
    var old = $.fn.button;
    $.fn.button = Plugin;
    $.fn.button.Constructor = Button;
    $.fn.button.noConflict = function() {
      $.fn.button = old;
      return this;
    };
    $(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(e) {
      var $btn = $(e.target).closest(".btn");
      Plugin.call($btn, "toggle");
      if (!$(e.target).is('input[type="radio"], input[type="checkbox"]')) {
        e.preventDefault();
        if ($btn.is("input,button"))
          $btn.trigger("focus");
        else
          $btn.find("input:visible,button:visible").first().trigger("focus");
      }
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(e) {
      $(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type));
    });
  }(jQuery);
  +function($) {
    var backdrop = ".dropdown-backdrop";
    var toggle = '[data-toggle="dropdown"]';
    var Dropdown = function(element) {
      $(element).on("click.bs.dropdown", this.toggle);
    };
    Dropdown.VERSION = "3.3.7";
    function getParent($this) {
      var selector = $this.attr("data-target");
      if (!selector) {
        selector = $this.attr("href");
        selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, "");
      }
      var $parent = selector && $(selector);
      return $parent && $parent.length ? $parent : $this.parent();
    }
    function clearMenus(e) {
      if (e && e.which === 3)
        return;
      $(backdrop).remove();
      $(toggle).each(function() {
        var $this = $(this);
        var $parent = getParent($this);
        var relatedTarget = { relatedTarget: this };
        if (!$parent.hasClass("open"))
          return;
        if (e && e.type == "click" && /input|textarea/i.test(e.target.tagName) && $.contains($parent[0], e.target))
          return;
        $parent.trigger(e = $.Event("hide.bs.dropdown", relatedTarget));
        if (e.isDefaultPrevented())
          return;
        $this.attr("aria-expanded", "false");
        $parent.removeClass("open").trigger($.Event("hidden.bs.dropdown", relatedTarget));
      });
    }
    Dropdown.prototype.toggle = function(e) {
      var $this = $(this);
      if ($this.is(".disabled, :disabled"))
        return;
      var $parent = getParent($this);
      var isActive = $parent.hasClass("open");
      clearMenus();
      if (!isActive) {
        if ("ontouchstart" in document.documentElement && !$parent.closest(".navbar-nav").length) {
          $(document.createElement("div")).addClass("dropdown-backdrop").insertAfter($(this)).on("click", clearMenus);
        }
        var relatedTarget = { relatedTarget: this };
        $parent.trigger(e = $.Event("show.bs.dropdown", relatedTarget));
        if (e.isDefaultPrevented())
          return;
        $this.trigger("focus").attr("aria-expanded", "true");
        $parent.toggleClass("open").trigger($.Event("shown.bs.dropdown", relatedTarget));
      }
      return false;
    };
    Dropdown.prototype.keydown = function(e) {
      if (!/(38|40|27|32)/.test(e.which) || /input|textarea/i.test(e.target.tagName))
        return;
      var $this = $(this);
      e.preventDefault();
      e.stopPropagation();
      if ($this.is(".disabled, :disabled"))
        return;
      var $parent = getParent($this);
      var isActive = $parent.hasClass("open");
      if (!isActive && e.which != 27 || isActive && e.which == 27) {
        if (e.which == 27)
          $parent.find(toggle).trigger("focus");
        return $this.trigger("click");
      }
      var desc = " li:not(.disabled):visible a";
      var $items = $parent.find(".dropdown-menu" + desc);
      if (!$items.length)
        return;
      var index = $items.index(e.target);
      if (e.which == 38 && index > 0)
        index--;
      if (e.which == 40 && index < $items.length - 1)
        index++;
      if (!~index)
        index = 0;
      $items.eq(index).trigger("focus");
    };
    function Plugin(option) {
      return this.each(function() {
        var $this = $(this);
        var data = $this.data("bs.dropdown");
        if (!data)
          $this.data("bs.dropdown", data = new Dropdown(this));
        if (typeof option == "string")
          data[option].call($this);
      });
    }
    var old = $.fn.dropdown;
    $.fn.dropdown = Plugin;
    $.fn.dropdown.Constructor = Dropdown;
    $.fn.dropdown.noConflict = function() {
      $.fn.dropdown = old;
      return this;
    };
    $(document).on("click.bs.dropdown.data-api", clearMenus).on("click.bs.dropdown.data-api", ".dropdown form", function(e) {
      e.stopPropagation();
    }).on("click.bs.dropdown.data-api", toggle, Dropdown.prototype.toggle).on("keydown.bs.dropdown.data-api", toggle, Dropdown.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", Dropdown.prototype.keydown);
  }(jQuery);
  +function($) {
    var Tooltip = function(element, options) {
      this.type = null;
      this.options = null;
      this.enabled = null;
      this.timeout = null;
      this.hoverState = null;
      this.$element = null;
      this.inState = null;
      this.init("tooltip", element, options);
    };
    Tooltip.VERSION = "3.3.7";
    Tooltip.TRANSITION_DURATION = 150;
    Tooltip.DEFAULTS = {
      animation: true,
      placement: "top",
      selector: false,
      template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
      trigger: "hover focus",
      title: "",
      delay: 0,
      html: false,
      container: false,
      viewport: {
        selector: "body",
        padding: 0
      }
    };
    Tooltip.prototype.init = function(type, element, options) {
      this.enabled = true;
      this.type = type;
      this.$element = $(element);
      this.options = this.getOptions(options);
      this.$viewport = this.options.viewport && $($.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport);
      this.inState = { click: false, hover: false, focus: false };
      if (this.$element[0] instanceof document.constructor && !this.options.selector) {
        throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
      }
      var triggers = this.options.trigger.split(" ");
      for (var i = triggers.length; i--; ) {
        var trigger = triggers[i];
        if (trigger == "click") {
          this.$element.on("click." + this.type, this.options.selector, $.proxy(this.toggle, this));
        } else if (trigger != "manual") {
          var eventIn = trigger == "hover" ? "mouseenter" : "focusin";
          var eventOut = trigger == "hover" ? "mouseleave" : "focusout";
          this.$element.on(eventIn + "." + this.type, this.options.selector, $.proxy(this.enter, this));
          this.$element.on(eventOut + "." + this.type, this.options.selector, $.proxy(this.leave, this));
        }
      }
      this.options.selector ? this._options = $.extend({}, this.options, { trigger: "manual", selector: "" }) : this.fixTitle();
    };
    Tooltip.prototype.getDefaults = function() {
      return Tooltip.DEFAULTS;
    };
    Tooltip.prototype.getOptions = function(options) {
      options = $.extend({}, this.getDefaults(), this.$element.data(), options);
      if (options.delay && typeof options.delay == "number") {
        options.delay = {
          show: options.delay,
          hide: options.delay
        };
      }
      return options;
    };
    Tooltip.prototype.getDelegateOptions = function() {
      var options = {};
      var defaults = this.getDefaults();
      this._options && $.each(this._options, function(key, value) {
        if (defaults[key] != value)
          options[key] = value;
      });
      return options;
    };
    Tooltip.prototype.enter = function(obj) {
      var self2 = obj instanceof this.constructor ? obj : $(obj.currentTarget).data("bs." + this.type);
      if (!self2) {
        self2 = new this.constructor(obj.currentTarget, this.getDelegateOptions());
        $(obj.currentTarget).data("bs." + this.type, self2);
      }
      if (obj instanceof $.Event) {
        self2.inState[obj.type == "focusin" ? "focus" : "hover"] = true;
      }
      if (self2.tip().hasClass("in") || self2.hoverState == "in") {
        self2.hoverState = "in";
        return;
      }
      clearTimeout(self2.timeout);
      self2.hoverState = "in";
      if (!self2.options.delay || !self2.options.delay.show)
        return self2.show();
      self2.timeout = setTimeout(function() {
        if (self2.hoverState == "in")
          self2.show();
      }, self2.options.delay.show);
    };
    Tooltip.prototype.isInStateTrue = function() {
      for (var key in this.inState) {
        if (this.inState[key])
          return true;
      }
      return false;
    };
    Tooltip.prototype.leave = function(obj) {
      var self2 = obj instanceof this.constructor ? obj : $(obj.currentTarget).data("bs." + this.type);
      if (!self2) {
        self2 = new this.constructor(obj.currentTarget, this.getDelegateOptions());
        $(obj.currentTarget).data("bs." + this.type, self2);
      }
      if (obj instanceof $.Event) {
        self2.inState[obj.type == "focusout" ? "focus" : "hover"] = false;
      }
      if (self2.isInStateTrue())
        return;
      clearTimeout(self2.timeout);
      self2.hoverState = "out";
      if (!self2.options.delay || !self2.options.delay.hide)
        return self2.hide();
      self2.timeout = setTimeout(function() {
        if (self2.hoverState == "out")
          self2.hide();
      }, self2.options.delay.hide);
    };
    Tooltip.prototype.show = function() {
      var e = $.Event("show.bs." + this.type);
      if (this.hasContent() && this.enabled) {
        this.$element.trigger(e);
        var inDom = $.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
        if (e.isDefaultPrevented() || !inDom)
          return;
        var that = this;
        var $tip = this.tip();
        var tipId = this.getUID(this.type);
        this.setContent();
        $tip.attr("id", tipId);
        this.$element.attr("aria-describedby", tipId);
        if (this.options.animation)
          $tip.addClass("fade");
        var placement = typeof this.options.placement == "function" ? this.options.placement.call(this, $tip[0], this.$element[0]) : this.options.placement;
        var autoToken = /\s?auto?\s?/i;
        var autoPlace = autoToken.test(placement);
        if (autoPlace)
          placement = placement.replace(autoToken, "") || "top";
        $tip.detach().css({ top: 0, left: 0, display: "block" }).addClass(placement).data("bs." + this.type, this);
        this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element);
        this.$element.trigger("inserted.bs." + this.type);
        var pos = this.getPosition();
        var actualWidth = $tip[0].offsetWidth;
        var actualHeight = $tip[0].offsetHeight;
        if (autoPlace) {
          var orgPlacement = placement;
          var viewportDim = this.getPosition(this.$viewport);
          placement = placement == "bottom" && pos.bottom + actualHeight > viewportDim.bottom ? "top" : placement == "top" && pos.top - actualHeight < viewportDim.top ? "bottom" : placement == "right" && pos.right + actualWidth > viewportDim.width ? "left" : placement == "left" && pos.left - actualWidth < viewportDim.left ? "right" : placement;
          $tip.removeClass(orgPlacement).addClass(placement);
        }
        var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight);
        this.applyPlacement(calculatedOffset, placement);
        var complete = function() {
          var prevHoverState = that.hoverState;
          that.$element.trigger("shown.bs." + that.type);
          that.hoverState = null;
          if (prevHoverState == "out")
            that.leave(that);
        };
        $.support.transition && this.$tip.hasClass("fade") ? $tip.one("bsTransitionEnd", complete).emulateTransitionEnd(Tooltip.TRANSITION_DURATION) : complete();
      }
    };
    Tooltip.prototype.applyPlacement = function(offset, placement) {
      var $tip = this.tip();
      var width = $tip[0].offsetWidth;
      var height = $tip[0].offsetHeight;
      var marginTop = parseInt($tip.css("margin-top"), 10);
      var marginLeft = parseInt($tip.css("margin-left"), 10);
      if (isNaN(marginTop))
        marginTop = 0;
      if (isNaN(marginLeft))
        marginLeft = 0;
      offset.top += marginTop;
      offset.left += marginLeft;
      $.offset.setOffset($tip[0], $.extend({
        using: function(props) {
          $tip.css({
            top: Math.round(props.top),
            left: Math.round(props.left)
          });
        }
      }, offset), 0);
      $tip.addClass("in");
      var actualWidth = $tip[0].offsetWidth;
      var actualHeight = $tip[0].offsetHeight;
      if (placement == "top" && actualHeight != height) {
        offset.top = offset.top + height - actualHeight;
      }
      var delta = this.getViewportAdjustedDelta(placement, offset, actualWidth, actualHeight);
      if (delta.left)
        offset.left += delta.left;
      else
        offset.top += delta.top;
      var isVertical = /top|bottom/.test(placement);
      var arrowDelta = isVertical ? delta.left * 2 - width + actualWidth : delta.top * 2 - height + actualHeight;
      var arrowOffsetPosition = isVertical ? "offsetWidth" : "offsetHeight";
      $tip.offset(offset);
      this.replaceArrow(arrowDelta, $tip[0][arrowOffsetPosition], isVertical);
    };
    Tooltip.prototype.replaceArrow = function(delta, dimension, isVertical) {
      this.arrow().css(isVertical ? "left" : "top", 50 * (1 - delta / dimension) + "%").css(isVertical ? "top" : "left", "");
    };
    Tooltip.prototype.setContent = function() {
      var $tip = this.tip();
      var title = this.getTitle();
      $tip.find(".tooltip-inner")[this.options.html ? "html" : "text"](title);
      $tip.removeClass("fade in top bottom left right");
    };
    Tooltip.prototype.hide = function(callback) {
      var that = this;
      var $tip = $(this.$tip);
      var e = $.Event("hide.bs." + this.type);
      function complete() {
        if (that.hoverState != "in")
          $tip.detach();
        if (that.$element) {
          that.$element.removeAttr("aria-describedby").trigger("hidden.bs." + that.type);
        }
        callback && callback();
      }
      this.$element.trigger(e);
      if (e.isDefaultPrevented())
        return;
      $tip.removeClass("in");
      $.support.transition && $tip.hasClass("fade") ? $tip.one("bsTransitionEnd", complete).emulateTransitionEnd(Tooltip.TRANSITION_DURATION) : complete();
      this.hoverState = null;
      return this;
    };
    Tooltip.prototype.fixTitle = function() {
      var $e = this.$element;
      if ($e.attr("title") || typeof $e.attr("data-original-title") != "string") {
        $e.attr("data-original-title", $e.attr("title") || "").attr("title", "");
      }
    };
    Tooltip.prototype.hasContent = function() {
      return this.getTitle();
    };
    Tooltip.prototype.getPosition = function($element) {
      $element = $element || this.$element;
      var el = $element[0];
      var isBody = el.tagName == "BODY";
      var elRect = el.getBoundingClientRect();
      if (elRect.width == null) {
        elRect = $.extend({}, elRect, { width: elRect.right - elRect.left, height: elRect.bottom - elRect.top });
      }
      var isSvg = window.SVGElement && el instanceof window.SVGElement;
      var elOffset = isBody ? { top: 0, left: 0 } : isSvg ? null : $element.offset();
      var scroll = { scroll: isBody ? document.documentElement.scrollTop || document.body.scrollTop : $element.scrollTop() };
      var outerDims = isBody ? { width: $(window).width(), height: $(window).height() } : null;
      return $.extend({}, elRect, scroll, outerDims, elOffset);
    };
    Tooltip.prototype.getCalculatedOffset = function(placement, pos, actualWidth, actualHeight) {
      return placement == "bottom" ? { top: pos.top + pos.height, left: pos.left + pos.width / 2 - actualWidth / 2 } : placement == "top" ? { top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2 } : placement == "left" ? { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth } : (
        /* placement == 'right' */
        { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width }
      );
    };
    Tooltip.prototype.getViewportAdjustedDelta = function(placement, pos, actualWidth, actualHeight) {
      var delta = { top: 0, left: 0 };
      if (!this.$viewport)
        return delta;
      var viewportPadding = this.options.viewport && this.options.viewport.padding || 0;
      var viewportDimensions = this.getPosition(this.$viewport);
      if (/right|left/.test(placement)) {
        var topEdgeOffset = pos.top - viewportPadding - viewportDimensions.scroll;
        var bottomEdgeOffset = pos.top + viewportPadding - viewportDimensions.scroll + actualHeight;
        if (topEdgeOffset < viewportDimensions.top) {
          delta.top = viewportDimensions.top - topEdgeOffset;
        } else if (bottomEdgeOffset > viewportDimensions.top + viewportDimensions.height) {
          delta.top = viewportDimensions.top + viewportDimensions.height - bottomEdgeOffset;
        }
      } else {
        var leftEdgeOffset = pos.left - viewportPadding;
        var rightEdgeOffset = pos.left + viewportPadding + actualWidth;
        if (leftEdgeOffset < viewportDimensions.left) {
          delta.left = viewportDimensions.left - leftEdgeOffset;
        } else if (rightEdgeOffset > viewportDimensions.right) {
          delta.left = viewportDimensions.left + viewportDimensions.width - rightEdgeOffset;
        }
      }
      return delta;
    };
    Tooltip.prototype.getTitle = function() {
      var title;
      var $e = this.$element;
      var o = this.options;
      title = $e.attr("data-original-title") || (typeof o.title == "function" ? o.title.call($e[0]) : o.title);
      return title;
    };
    Tooltip.prototype.getUID = function(prefix) {
      do
        prefix += ~~(Math.random() * 1e6);
      while (document.getElementById(prefix));
      return prefix;
    };
    Tooltip.prototype.tip = function() {
      if (!this.$tip) {
        this.$tip = $(this.options.template);
        if (this.$tip.length != 1) {
          throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        }
      }
      return this.$tip;
    };
    Tooltip.prototype.arrow = function() {
      return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow");
    };
    Tooltip.prototype.enable = function() {
      this.enabled = true;
    };
    Tooltip.prototype.disable = function() {
      this.enabled = false;
    };
    Tooltip.prototype.toggleEnabled = function() {
      this.enabled = !this.enabled;
    };
    Tooltip.prototype.toggle = function(e) {
      var self2 = this;
      if (e) {
        self2 = $(e.currentTarget).data("bs." + this.type);
        if (!self2) {
          self2 = new this.constructor(e.currentTarget, this.getDelegateOptions());
          $(e.currentTarget).data("bs." + this.type, self2);
        }
      }
      if (e) {
        self2.inState.click = !self2.inState.click;
        if (self2.isInStateTrue())
          self2.enter(self2);
        else
          self2.leave(self2);
      } else {
        self2.tip().hasClass("in") ? self2.leave(self2) : self2.enter(self2);
      }
    };
    Tooltip.prototype.destroy = function() {
      var that = this;
      clearTimeout(this.timeout);
      this.hide(function() {
        that.$element.off("." + that.type).removeData("bs." + that.type);
        if (that.$tip) {
          that.$tip.detach();
        }
        that.$tip = null;
        that.$arrow = null;
        that.$viewport = null;
        that.$element = null;
      });
    };
    function Plugin(option) {
      return this.each(function() {
        var $this = $(this);
        var data = $this.data("bs.tooltip");
        var options = typeof option == "object" && option;
        if (!data && /destroy|hide/.test(option))
          return;
        if (!data)
          $this.data("bs.tooltip", data = new Tooltip(this, options));
        if (typeof option == "string")
          data[option]();
      });
    }
    var old = $.fn.tooltip;
    $.fn.tooltip = Plugin;
    $.fn.tooltip.Constructor = Tooltip;
    $.fn.tooltip.noConflict = function() {
      $.fn.tooltip = old;
      return this;
    };
  }(jQuery);
  +function($) {
    var Tab = function(element) {
      this.element = $(element);
    };
    Tab.VERSION = "3.3.7";
    Tab.TRANSITION_DURATION = 150;
    Tab.prototype.show = function() {
      var $this = this.element;
      var $ul = $this.closest("ul:not(.dropdown-menu)");
      var selector = $this.data("target");
      if (!selector) {
        selector = $this.attr("href");
        selector = selector && selector.replace(/.*(?=#[^\s]*$)/, "");
      }
      if ($this.parent("li").hasClass("active"))
        return;
      var $previous = $ul.find(".active:last a");
      var hideEvent = $.Event("hide.bs.tab", {
        relatedTarget: $this[0]
      });
      var showEvent = $.Event("show.bs.tab", {
        relatedTarget: $previous[0]
      });
      $previous.trigger(hideEvent);
      $this.trigger(showEvent);
      if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented())
        return;
      var $target = $(selector);
      this.activate($this.closest("li"), $ul);
      this.activate($target, $target.parent(), function() {
        $previous.trigger({
          type: "hidden.bs.tab",
          relatedTarget: $this[0]
        });
        $this.trigger({
          type: "shown.bs.tab",
          relatedTarget: $previous[0]
        });
      });
    };
    Tab.prototype.activate = function(element, container, callback) {
      var $active = container.find("> .active");
      var transition = callback && $.support.transition && ($active.length && $active.hasClass("fade") || !!container.find("> .fade").length);
      function next() {
        $active.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", false);
        element.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", true);
        if (transition) {
          element[0].offsetWidth;
          element.addClass("in");
        } else {
          element.removeClass("fade");
        }
        if (element.parent(".dropdown-menu").length) {
          element.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", true);
        }
        callback && callback();
      }
      $active.length && transition ? $active.one("bsTransitionEnd", next).emulateTransitionEnd(Tab.TRANSITION_DURATION) : next();
      $active.removeClass("in");
    };
    function Plugin(option) {
      return this.each(function() {
        var $this = $(this);
        var data = $this.data("bs.tab");
        if (!data)
          $this.data("bs.tab", data = new Tab(this));
        if (typeof option == "string")
          data[option]();
      });
    }
    var old = $.fn.tab;
    $.fn.tab = Plugin;
    $.fn.tab.Constructor = Tab;
    $.fn.tab.noConflict = function() {
      $.fn.tab = old;
      return this;
    };
    var clickHandler = function(e) {
      e.preventDefault();
      Plugin.call($(this), "show");
    };
    $(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', clickHandler).on("click.bs.tab.data-api", '[data-toggle="pill"]', clickHandler);
  }(jQuery);
  +function($) {
    var Collapse = function(element, options) {
      this.$element = $(element);
      this.options = $.extend({}, Collapse.DEFAULTS, options);
      this.$trigger = $('[data-toggle="collapse"][href="#' + element.id + '"],[data-toggle="collapse"][data-target="#' + element.id + '"]');
      this.transitioning = null;
      if (this.options.parent) {
        this.$parent = this.getParent();
      } else {
        this.addAriaAndCollapsedClass(this.$element, this.$trigger);
      }
      if (this.options.toggle)
        this.toggle();
    };
    Collapse.VERSION = "3.3.7";
    Collapse.TRANSITION_DURATION = 350;
    Collapse.DEFAULTS = {
      toggle: true
    };
    Collapse.prototype.dimension = function() {
      var hasWidth = this.$element.hasClass("width");
      return hasWidth ? "width" : "height";
    };
    Collapse.prototype.show = function() {
      if (this.transitioning || this.$element.hasClass("in"))
        return;
      var activesData;
      var actives = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
      if (actives && actives.length) {
        activesData = actives.data("bs.collapse");
        if (activesData && activesData.transitioning)
          return;
      }
      var startEvent = $.Event("show.bs.collapse");
      this.$element.trigger(startEvent);
      if (startEvent.isDefaultPrevented())
        return;
      if (actives && actives.length) {
        Plugin.call(actives, "hide");
        activesData || actives.data("bs.collapse", null);
      }
      var dimension = this.dimension();
      this.$element.removeClass("collapse").addClass("collapsing")[dimension](0).attr("aria-expanded", true);
      this.$trigger.removeClass("collapsed").attr("aria-expanded", true);
      this.transitioning = 1;
      var complete = function() {
        this.$element.removeClass("collapsing").addClass("collapse in")[dimension]("");
        this.transitioning = 0;
        this.$element.trigger("shown.bs.collapse");
      };
      if (!$.support.transition)
        return complete.call(this);
      var scrollSize = $.camelCase(["scroll", dimension].join("-"));
      this.$element.one("bsTransitionEnd", $.proxy(complete, this)).emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize]);
    };
    Collapse.prototype.hide = function() {
      if (this.transitioning || !this.$element.hasClass("in"))
        return;
      var startEvent = $.Event("hide.bs.collapse");
      this.$element.trigger(startEvent);
      if (startEvent.isDefaultPrevented())
        return;
      var dimension = this.dimension();
      this.$element[dimension](this.$element[dimension]())[0].offsetHeight;
      this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", false);
      this.$trigger.addClass("collapsed").attr("aria-expanded", false);
      this.transitioning = 1;
      var complete = function() {
        this.transitioning = 0;
        this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse");
      };
      if (!$.support.transition)
        return complete.call(this);
      this.$element[dimension](0).one("bsTransitionEnd", $.proxy(complete, this)).emulateTransitionEnd(Collapse.TRANSITION_DURATION);
    };
    Collapse.prototype.toggle = function() {
      this[this.$element.hasClass("in") ? "hide" : "show"]();
    };
    Collapse.prototype.getParent = function() {
      return $(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each($.proxy(function(i, element) {
        var $element = $(element);
        this.addAriaAndCollapsedClass(getTargetFromTrigger($element), $element);
      }, this)).end();
    };
    Collapse.prototype.addAriaAndCollapsedClass = function($element, $trigger) {
      var isOpen = $element.hasClass("in");
      $element.attr("aria-expanded", isOpen);
      $trigger.toggleClass("collapsed", !isOpen).attr("aria-expanded", isOpen);
    };
    function getTargetFromTrigger($trigger) {
      var href;
      var target = $trigger.attr("data-target") || (href = $trigger.attr("href")) && href.replace(/.*(?=#[^\s]+$)/, "");
      return $(target);
    }
    function Plugin(option) {
      return this.each(function() {
        var $this = $(this);
        var data = $this.data("bs.collapse");
        var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == "object" && option);
        if (!data && options.toggle && /show|hide/.test(option))
          options.toggle = false;
        if (!data)
          $this.data("bs.collapse", data = new Collapse(this, options));
        if (typeof option == "string")
          data[option]();
      });
    }
    var old = $.fn.collapse;
    $.fn.collapse = Plugin;
    $.fn.collapse.Constructor = Collapse;
    $.fn.collapse.noConflict = function() {
      $.fn.collapse = old;
      return this;
    };
    $(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(e) {
      var $this = $(this);
      if (!$this.attr("data-target"))
        e.preventDefault();
      var $target = getTargetFromTrigger($this);
      var data = $target.data("bs.collapse");
      var option = data ? "toggle" : $this.data();
      Plugin.call($target, option);
    });
  }(jQuery);
  +function($) {
    function transitionEnd() {
      var el = document.createElement("bootstrap");
      var transEndEventNames = {
        WebkitTransition: "webkitTransitionEnd",
        MozTransition: "transitionend",
        OTransition: "oTransitionEnd otransitionend",
        transition: "transitionend"
      };
      for (var name in transEndEventNames) {
        if (el.style[name] !== void 0) {
          return { end: transEndEventNames[name] };
        }
      }
      return false;
    }
    $.fn.emulateTransitionEnd = function(duration) {
      var called = false;
      var $el = this;
      $(this).one("bsTransitionEnd", function() {
        called = true;
      });
      var callback = function() {
        if (!called)
          $($el).trigger($.support.transition.end);
      };
      setTimeout(callback, duration);
      return this;
    };
    $(function() {
      $.support.transition = transitionEnd();
      if (!$.support.transition)
        return;
      $.event.special.bsTransitionEnd = {
        bindType: $.support.transition.end,
        delegateType: $.support.transition.end,
        handle: function(e) {
          if ($(e.target).is(this))
            return e.handleObj.handler.apply(this, arguments);
        }
      };
    });
  }(jQuery);
  (function() {
    if (jQuery == void 0) {
      console.log("Jquery not included!");
      return;
    }
    var $ = jQuery;
    function isIE_fun() {
      var myNav = navigator.userAgent.toLowerCase();
      return myNav.indexOf("msie") != -1 ? parseInt(myNav.split("msie")[1]) : false;
    }
    var isIE = isIE_fun();
    var players = 0;
    var youtube_api_state = 0;
    var vimeo_api_state = 0;
    jQuery.fn.extend({
      ensureLoad: function(handler) {
        return this.each(function() {
          if (this.complete || this.readyState === 4) {
            handler.call(this);
          } else if (this.readyState === "uninitialized" && this.src.indexOf("data:") === 0) {
            $(this).trigger("error");
            handler.call(this);
          } else {
            $(this).one("load", handler);
            if (isIE && this.src != void 0 && this.src.indexOf("?") == -1) {
              this.src = this.src + "?" + (/* @__PURE__ */ new Date()).getTime();
            }
          }
        });
      }
    });
    window.video_background = function($holder, in_parameters) {
      this.hidden = false;
      this.$holder = $holder;
      this.isVimeoPlaying = true;
      this.isVimeoMute = 1;
      this.id = "video_background_video_" + players;
      players++;
      this.parameters = {
        position: "absolute",
        "z-index": "-1",
        video_ratio: false,
        loop: true,
        autoplay: true,
        muted: false,
        mp4: false,
        webm: false,
        ogg: false,
        youtube: false,
        vimeo: false,
        controls: 1,
        controls_position: "bottom-right",
        priority: "html5",
        fallback_image: false,
        sizing: "fill",
        // fill || adjust
        start: 0,
        video_overlay: 0,
        mobile_play: "no",
        tranitionIn: true
      };
      $.each(
        in_parameters,
        $.proxy(function(index, obj) {
          this.parameters[index] = obj;
        }, this)
      );
      this.$video_holder = $(
        '<div id="' + this.id + '" class="evb-video-holder"></div>'
      ).appendTo($holder).css({
        "z-index": this.parameters["z-index"],
        position: this.parameters.position,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: "hidden"
      });
      this.ismobile = navigator.userAgent.match(
        /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
      );
      this.decision = "image";
      var allow_mobile_videos = ZionBuilderFrontend.allow_video_on_mobile;
      if (!this.ismobile || allow_mobile_videos) {
        this.decision = this.parameters.priority;
        if (this.parameters.youtube !== false) {
          this.decision = "youtube";
        } else if (this.parameters.vimeo !== false) {
          this.decision = "vimeo";
        } else {
          this.decision = "html5";
        }
      }
      if (this.decision == "image") {
        this.make_image();
      } else if (this.decision == "youtube") {
        this.make_youtube();
      } else if (this.decision == "vimeo") {
        this.make_vimeo();
      } else {
        this.make_video();
      }
      return this;
    };
    window.video_background.prototype = {
      // Make html5 video
      make_video: function() {
        var parameters = (this.parameters.autoplay ? "autoplay " : "") + (this.parameters.loop ? 'loop onended="this.play()" ' : "");
        parameters += this.parameters.muted ? " muted " : "";
        var str = '<video width="100%" height="100%" ' + parameters + ">";
        if (this.parameters.mp4 !== false) {
          str += '<source src="' + this.parameters.mp4 + '" type="video/mp4"></source>';
        }
        if (this.parameters.webm !== false) {
          str += '<source src="' + this.parameters.webm + '" type="video/webm"></source>';
        }
        if (this.parameters.ogg !== false) {
          str += '<source src="' + this.parameters.ogg + '" type="video/ogg"></source>';
        }
        str += "</video>";
        this.$video = $(str).addClass("object-fit__cover");
        this.$video_holder.append(this.$video);
        this.video = this.$video.get(0);
        if (typeof Modernizr == "object" && !Modernizr.objectfit) {
          if (this.parameters.video_ratio !== false) {
            this.resize_timeout = false;
            $(window).resize(
              $.proxy(function() {
                clearTimeout(this.resize_timeout);
                this.resize_timeout = setTimeout(
                  $.proxy(this.video_resize, this),
                  10
                );
              }, this)
            );
            this.video_resize();
          }
        } else {
          this.$video.css({ width: "100%", height: "100%" });
        }
        this.$video_holder.closest(".zn-videoBg").addClass("is-loaded");
        if (this.parameters.muted) {
          this.mute();
        }
        if (this.parameters.controls) {
          this.make_controls();
        }
      },
      video_resize: function(self2) {
        this.$video = typeof self2 !== "undefined" && self2 === true ? this.$video.children("iframe") : this.$video;
        var w = this.$video_holder.width();
        var h = this.$video_holder.height();
        var new_width = w;
        var new_height = w / this.parameters.video_ratio;
        if (new_height < h) {
          new_height = h;
          new_width = h * this.parameters.video_ratio;
        }
        new_height = Math.ceil(new_height);
        new_width = Math.ceil(new_width);
        var top = Math.round(h / 2 - new_height / 2);
        var left = Math.round(w / 2 - new_width / 2);
        this.$video.attr("width", new_width);
        this.$video.attr("height", new_height);
        this.$video.css({
          position: "absolute",
          top: top + "px",
          left: left + "px"
        });
      },
      //Make youtube
      make_youtube: function() {
        var $html = $("html");
        var pars = {
          loop: this.parameters.loop ? 1 : 0,
          start: this.parameters.start,
          autoplay: this.parameters.autoplay ? 1 : 0,
          controls: 0,
          showinfo: 0,
          wmode: "transparent",
          iv_load_policy: 3,
          modestbranding: 1,
          rel: 0,
          mute: this.parameters.muted ? 1 : 0
        };
        if (this.parameters.loop) {
          pars["playlist"] = this.parameters.youtube;
        }
        this.$video = $(
          '<iframe id="' + this.id + '_yt" allowfullscreen="allowfullscreen" width="640" height="360" src="https://www.youtube.com/embed/' + this.parameters.youtube + "?enablejsapi=1&" + $.param(pars) + '" frameborder="0"></iframe>'
        ).appendTo(this.$video_holder).css({
          position: "absolute"
        });
        this.youtube_ready = false;
        if (youtube_api_state == 0) {
          var tag = document.createElement("script");
          tag.src = "https://www.youtube.com/iframe_api";
          var firstScriptTag = document.getElementsByTagName("script")[0];
          firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
          youtube_api_state = 1;
          window.onYouTubeIframeAPIReady = $.proxy(function() {
            $html.trigger("yt_loaded");
            this.build_youtube();
            youtube_api_state = 2;
          }, this);
        } else if (youtube_api_state == 1) {
          $html.bind("yt_loaded", $.proxy(this.build_youtube, this));
        } else if (youtube_api_state == 2) {
          this.build_youtube();
        }
      },
      build_youtube: function() {
        this.player = new YT.Player(this.id + "_yt", {
          height: "100%",
          width: "100%",
          videoId: this.parameters.youtube,
          events: {
            onReady: $.proxy(this.youtube_ready_fun, this)
          }
        });
      },
      youtube_ready_fun: function(event) {
        this.youtube_ready = true;
        this.$video = $("#" + this.id + "_yt");
        this.$video_holder.closest(".zn-videoBg").addClass("is-loaded");
        if (this.parameters.video_ratio !== false) {
          this.resize_timeout = false;
          $(window).resize(
            $.proxy(function() {
              clearTimeout(this.resize_timeout);
              this.resize_timeout = setTimeout(
                $.proxy(this.video_resize, this),
                10
              );
            }, this)
          );
          this.video_resize();
        }
        if (this.parameters.muted) {
          this.mute();
        }
        if (this.parameters.controls) {
          this.make_controls();
        }
      },
      //Make vimeo
      make_vimeo: function() {
        $("html");
        this.$video = $('<div id="' + this.id + '_vm"></div>').appendTo(this.$video_holder).css({
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0
        });
        this.vimeo_ready = false;
        if (vimeo_api_state === 0) {
          $.getScript(
            "//player.vimeo.com/api/player.js",
            $.proxy(function() {
              this.build_vimeo();
              vimeo_api_state = 1;
            }, this)
          );
        } else if (vimeo_api_state == 1) {
          this.build_vimeo();
        }
      },
      build_vimeo: function() {
        console.log(this.parameters);
        var pars = {
          id: this.parameters.vimeo,
          loop: this.parameters.loop ? 1 : 0,
          autoplay: this.parameters.autoplay ? 1 : 0,
          muted: this.parameters.muted ? 1 : 0
        };
        this.player = new Vimeo.Player(this.id + "_vm", pars);
        var self2 = this;
        this.player.on("loaded", function() {
          self2.vimeo_ready_fun();
        });
        this.player.on("play", function() {
          self2.isVimeoPlaying = true;
        });
        this.player.on("pause", function() {
          self2.isVimeoPlaying = false;
        });
        this.player.getPaused().then(function(paused) {
          self2.isVimeoPlaying = !paused;
        });
        this.player.on("volumechange", function(e) {
          self2.isVimeoMute = e.volume === 0 ? true : false;
        });
      },
      vimeo_ready_fun: function(event) {
        this.vimeo_ready = true;
        this.$video = $("#" + this.id + "_vm");
        this.$video_holder.closest(".zn-videoBg").addClass("is-loaded");
        if (this.parameters.video_ratio !== false) {
          this.resize_timeout = false;
          $(window).resize(
            $.proxy(function() {
              clearTimeout(this.resize_timeout);
              this.resize_timeout = setTimeout(
                $.proxy(this.video_resize, this),
                10
              );
            }, this)
          );
          this.video_resize(true);
        }
        if (this.parameters.start) {
          this.player.setCurrentTime(this.parameters.start);
        }
        if (this.parameters.muted) {
          this.isVimeoMute = true;
          this.mute();
        }
        if (this.parameters.controls) {
          this.make_controls();
        }
      },
      make_controls: function() {
        var self2 = this, $controls;
        $controls = '<ul class="zn-videoBg-controls" data-position="' + this.parameters.controls_position + '">';
        $controls += '<li><a href="#" class="btn-toggleplay zn-videoBg-controls-toggleplay">';
        $controls += '<i class="kl-icon glyphicon glyphicon-play circled-icon ' + (!this.isPlaying() ? "paused" : "") + '"></i>';
        $controls += "</a></li>";
        $controls += '<li><a href="#" class="btn-audio zn-videoBg-controls-togglemute">';
        $controls += '<i class="kl-icon glyphicon glyphicon-volume-up circled-icon ci-xsmall ' + (this.parameters.muted ? "mute" : "") + '"></i>';
        $controls += "</a></li>";
        $controls += "</ul>";
        $($controls).appendTo(this.$video_holder);
        this.$video_holder.find(".btn-toggleplay").on("click", function(e) {
          e.preventDefault();
          self2.toggle_play();
          $(this).children("i").toggleClass("paused");
        });
        this.$video_holder.find(".btn-audio").on("click", function(e) {
          e.preventDefault();
          self2.toggle_mute();
          $(this).children("i").toggleClass("mute");
        });
      },
      // Make image
      make_image: function() {
        if (this.parameters.fallback_image === false || this.parameters.fallback_image == "") {
          return;
        }
        this.$img = $(
          '<img src="' + this.parameters.fallback_image + '" class="cover-fit-img" />'
        ).appendTo(this.$video_holder).css({
          position: "absolute"
        });
        if (typeof Modernizr == "object" && !Modernizr.objectfit) {
          this.$img.ensureLoad($.proxy(this.image_loaded, this));
        } else {
          this.$img.css({ width: "100%", height: "100%" });
        }
        this.$video_holder.closest(".zn-videoBg").addClass("is-loaded");
      },
      image_loaded: function() {
        this.original_width = this.$img.width();
        this.original_height = this.$img.height();
        this.resize_timeout = false;
        $(window).resize(
          $.proxy(function() {
            clearTimeout(this.resize_timeout);
            this.resize_timeout = setTimeout(
              $.proxy(this.image_resize, this),
              10
            );
          }, this)
        );
        this.image_resize();
      },
      image_resize: function() {
        var w = this.$video_holder.width();
        var h = this.$video_holder.height();
        var new_width = w;
        var new_height = this.original_height / (this.original_width / w);
        if (this.parameters.sizing == "adjust" && new_height > h || this.parameters.sizing == "fill" && new_height < h) {
          new_height = h;
          new_width = this.original_width / (this.original_height / h);
        }
        new_height = Math.ceil(new_height);
        new_width = Math.ceil(new_width);
        var top = Math.round(h / 2 - new_height / 2);
        var left = Math.round(w / 2 - new_width / 2);
        this.$img.css({
          width: new_width + "px",
          height: new_height + "px",
          top: top + "px",
          left: left + "px"
        });
      },
      // User Callable Functions
      funcIsVimeoPlaying: function(value) {
        this.isVimeoPlaying = value;
      },
      isPlaying: function() {
        if (this.decision == "html5")
          return !this.video.paused;
        else if (this.decision == "youtube" && this.youtube_ready)
          return this.player.getPlayerState() === 1;
        else if (this.decision == "vimeo" && this.vimeo_ready) {
          var self2 = this;
          this.player.getPaused().then(function(paused) {
            self2.funcIsVimeoPlaying(!paused);
          });
          return this.isVimeoPlaying;
        }
        return false;
      },
      // Play
      play: function() {
        if (this.decision == "html5")
          this.video.play();
        else if (this.decision == "youtube" && this.youtube_ready)
          this.player.playVideo();
        else if (this.decision == "vimeo" && this.vimeo_ready)
          this.player.play();
      },
      // Pause
      pause: function() {
        if (this.decision == "html5")
          this.video.pause();
        else if (this.decision == "youtube" && this.youtube_ready)
          this.player.pauseVideo();
        else if (this.decision == "vimeo" && this.vimeo_ready)
          this.player.pause();
      },
      // Toogle play
      toggle_play: function() {
        if (this.isPlaying()) {
          this.pause();
        } else
          this.play();
      },
      funcIsVimeoMute: function(value) {
        this.isVimeoMute = value;
      },
      // Is mute
      isMuted: function() {
        if (this.decision == "html5")
          return !this.video.volume;
        else if (this.decision == "youtube" && this.youtube_ready)
          return this.player.isMuted();
        else if (this.decision == "vimeo" && this.vimeo_ready) {
          var self2 = this;
          this.player.getVolume().then(function(volume) {
            self2.funcIsVimeoMute(volume === 0 ? true : false);
          });
          return this.isVimeoMute;
        }
        return false;
      },
      // Mute
      mute: function() {
        if (this.decision == "html5")
          this.video.volume = 0;
        else if (this.decision == "youtube" && this.youtube_ready)
          this.player.mute();
        else if (this.decision == "vimeo" && this.vimeo_ready) {
          this.player.setVolume(0);
        }
      },
      //Unmute
      unmute: function() {
        if (this.decision == "html5")
          this.video.volume = 1;
        else if (this.decision == "youtube" && this.youtube_ready)
          this.player.unMute();
        else if (this.decision == "vimeo" && this.vimeo_ready)
          this.player.setVolume(1);
      },
      //Toogle mute
      toggle_mute: function() {
        if (this.isMuted())
          this.unmute();
        else
          this.mute();
      },
      //Hide
      hide: function() {
        this.pause();
        this.$video_holder.stop().fadeTo(700, 0);
        this.hidden = true;
      },
      //Show
      show: function() {
        this.play();
        this.$video_holder.stop().fadeTo(700, 1);
        this.hidden = false;
      },
      //Toogle Hidden
      toogle_hidden: function() {
        if (this.hidden)
          this.show();
        else
          this.hide();
      },
      //Rewind
      rewind: function() {
        if (this.decision == "html5")
          this.video.currentTime = 0;
        else if (this.decision == "youtube" && this.youtube_ready)
          this.player.seekTo(0);
        else if (this.decision == "vimeo" && this.vimeo_ready)
          this.player.setCurrentTime(0);
      }
    };
  })();
  var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
  function getDefaultExportFromCjs(x) {
    return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
  }
  var rellax = { exports: {} };
  (function(module) {
    (function(root, factory) {
      if (module.exports) {
        module.exports = factory();
      } else {
        root.Rellax = factory();
      }
    })(typeof window !== "undefined" ? window : commonjsGlobal, function() {
      var Rellax2 = function(el, options) {
        var self2 = Object.create(Rellax2.prototype);
        var posY = 0;
        var screenY = 0;
        var posX = 0;
        var screenX = 0;
        var blocks = [];
        var pause = true;
        var loop = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame || function(callback) {
          return setTimeout(callback, 1e3 / 60);
        };
        var loopId = null;
        var supportsPassive = false;
        try {
          var opts = Object.defineProperty({}, "passive", {
            get: function() {
              supportsPassive = true;
            }
          });
          window.addEventListener("testPassive", null, opts);
          window.removeEventListener("testPassive", null, opts);
        } catch (e) {
        }
        var clearLoop = window.cancelAnimationFrame || window.mozCancelAnimationFrame || clearTimeout;
        var transformProp = window.transformProp || function() {
          var testEl = document.createElement("div");
          if (testEl.style.transform === null) {
            var vendors = ["Webkit", "Moz", "ms"];
            for (var vendor in vendors) {
              if (testEl.style[vendors[vendor] + "Transform"] !== void 0) {
                return vendors[vendor] + "Transform";
              }
            }
          }
          return "transform";
        }();
        self2.options = {
          speed: -2,
          verticalSpeed: null,
          horizontalSpeed: null,
          breakpoints: [576, 768, 1201],
          center: false,
          wrapper: null,
          relativeToWrapper: false,
          round: true,
          vertical: true,
          horizontal: false,
          verticalScrollAxis: "y",
          horizontalScrollAxis: "x",
          callback: function() {
          }
        };
        if (options) {
          Object.keys(options).forEach(function(key) {
            self2.options[key] = options[key];
          });
        }
        function validateCustomBreakpoints() {
          if (self2.options.breakpoints.length === 3 && Array.isArray(self2.options.breakpoints)) {
            var isAscending = true;
            var isNumerical = true;
            var lastVal;
            self2.options.breakpoints.forEach(function(i) {
              if (typeof i !== "number")
                isNumerical = false;
              if (lastVal !== null) {
                if (i < lastVal)
                  isAscending = false;
              }
              lastVal = i;
            });
            if (isAscending && isNumerical)
              return;
          }
          self2.options.breakpoints = [576, 768, 1201];
          console.warn("Rellax: You must pass an array of 3 numbers in ascending order to the breakpoints option. Defaults reverted");
        }
        if (options && options.breakpoints) {
          validateCustomBreakpoints();
        }
        if (!el) {
          el = ".rellax";
        }
        var elements = typeof el === "string" ? document.querySelectorAll(el) : [el];
        if (elements.length > 0) {
          self2.elems = elements;
        } else {
          console.warn("Rellax: The elements you're trying to select don't exist.");
          return;
        }
        if (self2.options.wrapper) {
          if (!self2.options.wrapper.nodeType) {
            var wrapper = document.querySelector(self2.options.wrapper);
            if (wrapper) {
              self2.options.wrapper = wrapper;
            } else {
              console.warn("Rellax: The wrapper you're trying to use doesn't exist.");
              return;
            }
          }
        }
        var currentBreakpoint;
        var getCurrentBreakpoint = function(w) {
          var bp = self2.options.breakpoints;
          if (w < bp[0])
            return "xs";
          if (w >= bp[0] && w < bp[1])
            return "sm";
          if (w >= bp[1] && w < bp[2])
            return "md";
          return "lg";
        };
        var cacheBlocks = function() {
          for (var i = 0; i < self2.elems.length; i++) {
            var block = createBlock(self2.elems[i]);
            blocks.push(block);
          }
        };
        var init = function() {
          for (var i = 0; i < blocks.length; i++) {
            self2.elems[i].style.cssText = blocks[i].style;
          }
          blocks = [];
          screenY = window.innerHeight;
          screenX = window.innerWidth;
          currentBreakpoint = getCurrentBreakpoint(screenX);
          setPosition();
          cacheBlocks();
          animate();
          if (pause) {
            window.addEventListener("resize", init);
            pause = false;
            update();
          }
        };
        var createBlock = function(el2) {
          var dataPercentage = el2.getAttribute("data-rellax-percentage");
          var dataSpeed = el2.getAttribute("data-rellax-speed");
          var dataXsSpeed = el2.getAttribute("data-rellax-xs-speed");
          var dataMobileSpeed = el2.getAttribute("data-rellax-mobile-speed");
          var dataTabletSpeed = el2.getAttribute("data-rellax-tablet-speed");
          var dataDesktopSpeed = el2.getAttribute("data-rellax-desktop-speed");
          var dataVerticalSpeed = el2.getAttribute("data-rellax-vertical-speed");
          var dataHorizontalSpeed = el2.getAttribute("data-rellax-horizontal-speed");
          var dataVericalScrollAxis = el2.getAttribute("data-rellax-vertical-scroll-axis");
          var dataHorizontalScrollAxis = el2.getAttribute("data-rellax-horizontal-scroll-axis");
          var dataZindex = el2.getAttribute("data-rellax-zindex") || 0;
          var dataMin = el2.getAttribute("data-rellax-min");
          var dataMax = el2.getAttribute("data-rellax-max");
          var dataMinX = el2.getAttribute("data-rellax-min-x");
          var dataMaxX = el2.getAttribute("data-rellax-max-x");
          var dataMinY = el2.getAttribute("data-rellax-min-y");
          var dataMaxY = el2.getAttribute("data-rellax-max-y");
          var mapBreakpoints;
          var breakpoints = true;
          if (!dataXsSpeed && !dataMobileSpeed && !dataTabletSpeed && !dataDesktopSpeed) {
            breakpoints = false;
          } else {
            mapBreakpoints = {
              "xs": dataXsSpeed,
              "sm": dataMobileSpeed,
              "md": dataTabletSpeed,
              "lg": dataDesktopSpeed
            };
          }
          var wrapperPosY = self2.options.wrapper ? self2.options.wrapper.scrollTop : window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
          if (self2.options.relativeToWrapper) {
            var scrollPosY = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            wrapperPosY = scrollPosY - self2.options.wrapper.offsetTop;
          }
          var posY2 = self2.options.vertical ? dataPercentage || self2.options.center ? wrapperPosY : 0 : 0;
          var posX2 = self2.options.horizontal ? dataPercentage || self2.options.center ? self2.options.wrapper ? self2.options.wrapper.scrollLeft : window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft : 0 : 0;
          var blockTop = posY2 + el2.getBoundingClientRect().top;
          var blockHeight = el2.clientHeight || el2.offsetHeight || el2.scrollHeight;
          var blockLeft = posX2 + el2.getBoundingClientRect().left;
          var blockWidth = el2.clientWidth || el2.offsetWidth || el2.scrollWidth;
          var percentageY = dataPercentage ? dataPercentage : (posY2 - blockTop + screenY) / (blockHeight + screenY);
          var percentageX = dataPercentage ? dataPercentage : (posX2 - blockLeft + screenX) / (blockWidth + screenX);
          if (self2.options.center) {
            percentageX = 0.5;
            percentageY = 0.5;
          }
          var speed = breakpoints && mapBreakpoints[currentBreakpoint] !== null ? Number(mapBreakpoints[currentBreakpoint]) : dataSpeed ? dataSpeed : self2.options.speed;
          var verticalSpeed = dataVerticalSpeed ? dataVerticalSpeed : self2.options.verticalSpeed;
          var horizontalSpeed = dataHorizontalSpeed ? dataHorizontalSpeed : self2.options.horizontalSpeed;
          var verticalScrollAxis = dataVericalScrollAxis ? dataVericalScrollAxis : self2.options.verticalScrollAxis;
          var horizontalScrollAxis = dataHorizontalScrollAxis ? dataHorizontalScrollAxis : self2.options.horizontalScrollAxis;
          var bases = updatePosition(percentageX, percentageY, speed, verticalSpeed, horizontalSpeed);
          var style = el2.style.cssText;
          var transform = "";
          var searchResult = /transform\s*:/i.exec(style);
          if (searchResult) {
            var index = searchResult.index;
            var trimmedStyle = style.slice(index);
            var delimiter = trimmedStyle.indexOf(";");
            if (delimiter) {
              transform = " " + trimmedStyle.slice(11, delimiter).replace(/\s/g, "");
            } else {
              transform = " " + trimmedStyle.slice(11).replace(/\s/g, "");
            }
          }
          return {
            baseX: bases.x,
            baseY: bases.y,
            top: blockTop,
            left: blockLeft,
            height: blockHeight,
            width: blockWidth,
            speed,
            verticalSpeed,
            horizontalSpeed,
            verticalScrollAxis,
            horizontalScrollAxis,
            style,
            transform,
            zindex: dataZindex,
            min: dataMin,
            max: dataMax,
            minX: dataMinX,
            maxX: dataMaxX,
            minY: dataMinY,
            maxY: dataMaxY
          };
        };
        var setPosition = function() {
          var oldY = posY;
          var oldX = posX;
          posY = self2.options.wrapper ? self2.options.wrapper.scrollTop : (document.documentElement || document.body.parentNode || document.body).scrollTop || window.pageYOffset;
          posX = self2.options.wrapper ? self2.options.wrapper.scrollLeft : (document.documentElement || document.body.parentNode || document.body).scrollLeft || window.pageXOffset;
          if (self2.options.relativeToWrapper) {
            var scrollPosY = (document.documentElement || document.body.parentNode || document.body).scrollTop || window.pageYOffset;
            posY = scrollPosY - self2.options.wrapper.offsetTop;
          }
          if (oldY != posY && self2.options.vertical) {
            return true;
          }
          if (oldX != posX && self2.options.horizontal) {
            return true;
          }
          return false;
        };
        var updatePosition = function(percentageX, percentageY, speed, verticalSpeed, horizontalSpeed) {
          var result = {};
          var valueX = (horizontalSpeed ? horizontalSpeed : speed) * (100 * (1 - percentageX));
          var valueY = (verticalSpeed ? verticalSpeed : speed) * (100 * (1 - percentageY));
          result.x = self2.options.round ? Math.round(valueX) : Math.round(valueX * 100) / 100;
          result.y = self2.options.round ? Math.round(valueY) : Math.round(valueY * 100) / 100;
          return result;
        };
        var deferredUpdate = function() {
          window.removeEventListener("resize", deferredUpdate);
          window.removeEventListener("orientationchange", deferredUpdate);
          (self2.options.wrapper ? self2.options.wrapper : window).removeEventListener("scroll", deferredUpdate);
          (self2.options.wrapper ? self2.options.wrapper : document).removeEventListener("touchmove", deferredUpdate);
          loopId = loop(update);
        };
        var update = function() {
          if (setPosition() && pause === false) {
            animate();
            loopId = loop(update);
          } else {
            loopId = null;
            window.addEventListener("resize", deferredUpdate);
            window.addEventListener("orientationchange", deferredUpdate);
            (self2.options.wrapper ? self2.options.wrapper : window).addEventListener("scroll", deferredUpdate, supportsPassive ? { passive: true } : false);
            (self2.options.wrapper ? self2.options.wrapper : document).addEventListener("touchmove", deferredUpdate, supportsPassive ? { passive: true } : false);
          }
        };
        var animate = function() {
          var positions;
          for (var i = 0; i < self2.elems.length; i++) {
            var verticalScrollAxis = blocks[i].verticalScrollAxis.toLowerCase();
            var horizontalScrollAxis = blocks[i].horizontalScrollAxis.toLowerCase();
            var verticalScrollX = verticalScrollAxis.indexOf("x") != -1 ? posY : 0;
            var verticalScrollY = verticalScrollAxis.indexOf("y") != -1 ? posY : 0;
            var horizontalScrollX = horizontalScrollAxis.indexOf("x") != -1 ? posX : 0;
            var horizontalScrollY = horizontalScrollAxis.indexOf("y") != -1 ? posX : 0;
            var percentageY = (verticalScrollY + horizontalScrollY - blocks[i].top + screenY) / (blocks[i].height + screenY);
            var percentageX = (verticalScrollX + horizontalScrollX - blocks[i].left + screenX) / (blocks[i].width + screenX);
            positions = updatePosition(percentageX, percentageY, blocks[i].speed, blocks[i].verticalSpeed, blocks[i].horizontalSpeed);
            var positionY = positions.y - blocks[i].baseY;
            var positionX = positions.x - blocks[i].baseX;
            if (blocks[i].min !== null) {
              if (self2.options.vertical && !self2.options.horizontal) {
                positionY = positionY <= blocks[i].min ? blocks[i].min : positionY;
              }
              if (self2.options.horizontal && !self2.options.vertical) {
                positionX = positionX <= blocks[i].min ? blocks[i].min : positionX;
              }
            }
            if (blocks[i].minY != null) {
              positionY = positionY <= blocks[i].minY ? blocks[i].minY : positionY;
            }
            if (blocks[i].minX != null) {
              positionX = positionX <= blocks[i].minX ? blocks[i].minX : positionX;
            }
            if (blocks[i].max !== null) {
              if (self2.options.vertical && !self2.options.horizontal) {
                positionY = positionY >= blocks[i].max ? blocks[i].max : positionY;
              }
              if (self2.options.horizontal && !self2.options.vertical) {
                positionX = positionX >= blocks[i].max ? blocks[i].max : positionX;
              }
            }
            if (blocks[i].maxY != null) {
              positionY = positionY >= blocks[i].maxY ? blocks[i].maxY : positionY;
            }
            if (blocks[i].maxX != null) {
              positionX = positionX >= blocks[i].maxX ? blocks[i].maxX : positionX;
            }
            var zindex = blocks[i].zindex;
            var translate = "translate3d(" + (self2.options.horizontal ? positionX : "0") + "px," + (self2.options.vertical ? positionY : "0") + "px," + zindex + "px) " + blocks[i].transform;
            self2.elems[i].style[transformProp] = translate;
          }
          self2.options.callback(positions);
        };
        self2.destroy = function() {
          for (var i = 0; i < self2.elems.length; i++) {
            self2.elems[i].style.cssText = blocks[i].style;
          }
          if (!pause) {
            window.removeEventListener("resize", init);
            pause = true;
          }
          clearLoop(loopId);
          loopId = null;
        };
        init();
        self2.refresh = init;
        return self2;
      };
      return Rellax2;
    });
  })(rellax);
  var rellaxExports = rellax.exports;
  const Rellax = /* @__PURE__ */ getDefaultExportFromCjs(rellaxExports);
  /*!
   * znParallax - Parallax jQuery Plugin
   * Based on Parallux Responsive jQuery Parallax plugin
   * Original author: @tomsarduy
   * Licensed under the MIT license
   */
  (function($, window2) {
    var pluginName = "znParallax", $window = $(window2), is_mobile = false, winHeight = $window.height(), rendered = false, defaults = {
      bleed: 0
    };
    function debounce(func, wait, immediate) {
      var timeout;
      return function() {
        var context = this, args = arguments;
        var later = function() {
          timeout = null;
          if (!immediate)
            func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait || 100);
        if (callNow)
          func.apply(context, args);
      };
    }
    function Plugin(element, options) {
      this.element = element;
      this.options = $.extend({}, defaults, options);
      this._defaults = defaults;
      this._name = pluginName;
      this.init(element);
    }
    Plugin.prototype = {
      init: function(element) {
        var self2 = this, $el = $(element);
        this.$par = $el.parent();
        this.$bg = $el.children().first();
        this.scaleFactor = this.options.bleed ? "scale(" + this.options.bleed + ")" : "";
        this.updateStuff();
        this.render();
        if (!$el.hasClass("is-fixed")) {
          $el.addClass("is-fixed");
        }
        is_mobile = this.mobileCheck();
        var event = typeof window2.isSmoothScroll !== "undefined" ? "smoothScrollCustomEvent scroll" : "scroll";
        $window.on(event, function() {
          self2.mobileCheck();
          if (!is_mobile) {
            self2.updateStuff();
            self2.render();
          }
        });
        $window.on("orientationchange resize", debounce(function() {
          self2.mobileCheck();
          if (!is_mobile) {
            self2.updateStuff();
            if (!$el.hasClass("is-fixed")) {
              $el.addClass("is-fixed");
            }
          } else {
            self2.disableParallax();
          }
        }));
      },
      mobileCheck: function() {
        var hasTouch = typeof Modernizr === "object" && Modernizr.touchevents || false;
        is_mobile = hasTouch && window2.matchMedia("(max-width: 1024px)").matches;
      },
      updateStuff: function() {
        var self2 = this;
        var updateValues = function() {
          winHeight = $window.height();
          self2.parTop = self2.$par.offset().top;
          self2.parLeft = Math.ceil(!self2.isRtl() ? self2.$par.offset().left : "-" + ($window.width() - (self2.$par.offset().left + self2.$par.outerWidth())));
          self2.parWidth = self2.$par.outerWidth();
          self2.parHeight = self2.$par.outerHeight();
          $(self2.element).css({ height: self2.parHeight, width: self2.parWidth });
        };
        debounce(updateValues(), 200);
      },
      isRtl: function() {
        var $html = $("html");
        return $html.is("[dir]") && $html.attr("dir") === "rtl";
      },
      //The Parallax rendering, magic happens here
      render: function() {
        var $el = $(this.element);
        var $scrollY = window2.scrollY || window2.pageYOffset || 0;
        var $winST = $window.scrollTop();
        if (!rendered || $winST + winHeight >= this.parTop && $winST <= this.parTop + this.parHeight) {
          var $diffElem = (($scrollY - this.parTop) / 1.3).toFixed(0);
          $el.addClass("is-visible");
          $el.css({ "transform": "translate3d(" + this.parLeft + "px," + (this.parTop - $scrollY) + "px,0)" + this.scaleFactor });
          this.$bg.css("transform", "translate3d(0," + $diffElem + "px,0)");
          rendered = true;
        } else {
          $el.removeClass("is-visible");
        }
      },
      disableParallax: function() {
        $(this.element).removeClass("is-fixed").css({ "transform": "", "height": "" });
        this.$bg.css("transform", "");
      }
    };
    $.fn[pluginName] = function(options) {
      return this.each(function() {
        if (!$.data(this, "plugin_" + pluginName)) {
          $.data(
            this,
            "plugin_" + pluginName,
            new Plugin(this, options)
          );
        }
      });
    };
  })(jQuery, window);
  (function($) {
    $.ZnbFrontendJs = function() {
      this.scope = $(document);
      this.zinit();
    };
    $.ZnbFrontendJs.prototype = {
      zinit: function() {
        var fw = this;
        fw.addActions();
        fw.initHelpers($(document));
        fw.refresh_events($(document));
        $(document).trigger("ZnbFrontendJsReady", this);
      },
      refresh_events: function(content) {
        var fw = this;
        fw.contact_forms(content);
        fw.doParallax(content);
        fw.doObjectParallax(content);
        fw.background_video(content);
        fw.entryAnimations(content);
        fw.objectFitCover(content);
      },
      RefreshOnWidthChange: function(content) {
      },
      addActions: function() {
        var fw = this;
        fw.scope.on("ZnWidthChanged", function(e) {
          fw.RefreshOnWidthChange(e.content);
          $(window).trigger("resize");
        });
        fw.scope.on("ZnNewContent", function(e) {
          fw.refresh_events(e.content);
        });
      },
      unbind_events: function(scope) {
      },
      initHelpers: function(scope) {
        var fw = this;
        this.helpers = {};
        this.helpers.IsJsonString = function(a) {
          try {
            JSON.parse(a);
          } catch (e) {
            return false;
          }
          return true;
        };
        this.helpers.is_null = function(a) {
          return a === null;
        };
        this.helpers.is_undefined = function(a) {
          return typeof a == "undefined" || a === null || a === "" || a === "undefined";
        };
        this.helpers.is_number = function(a) {
          return (a instanceof Number || typeof a == "number") && !isNaN(a);
        };
        this.helpers.is_true = function(a) {
          return a === true || a === "true";
        };
        this.helpers.is_false = function(a) {
          return a === false || a === "false";
        };
        this.helpers.throttle = function(func, wait, options) {
          var timeout, context, args, result;
          var previous = 0;
          if (!options)
            options = {};
          var later = function() {
            previous = options.leading === false ? 0 : fw.helpers.date_now;
            timeout = null;
            result = func.apply(context, args);
            if (!timeout)
              context = args = null;
          };
          var throttled = function() {
            var now = fw.helpers.date_now;
            if (!previous && options.leading === false)
              previous = now;
            var remaining = wait - (now - previous);
            context = this;
            args = arguments;
            if (remaining <= 0 || remaining > wait) {
              if (timeout) {
                clearTimeout(timeout);
                timeout = null;
              }
              previous = now;
              result = func.apply(context, args);
              if (!timeout)
                context = args = null;
            } else if (!timeout && options.trailing !== false) {
              timeout = setTimeout(later, remaining);
            }
            return result;
          };
          throttled.cancel = function() {
            clearTimeout(timeout);
            previous = 0;
            timeout = context = args = null;
          };
          return throttled;
        };
        this.helpers.debounce = function(func, wait, immediate) {
          var timeout;
          return function() {
            var context = this, args = arguments;
            var later = function() {
              timeout = null;
              if (!immediate)
                func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow)
              func.apply(context, args);
          };
        };
        this.helpers.isInViewport = function(element) {
          var rect = element.getBoundingClientRect();
          var html = document.documentElement;
          var tolerance = rect.height * 0.75;
          return rect.top >= -tolerance && rect.bottom <= (window.innerHeight || html.clientHeight) + tolerance;
        };
        this.helpers.date_now = Date.now || function() {
          return (/* @__PURE__ */ new Date()).getTime();
        };
        this.helpers.hasTouch = typeof Modernizr == "object" && Modernizr.touchevents || false;
        this.helpers.hasTouchMobile = this.helpers.hasTouch && window.matchMedia("(max-width: 1024px)").matches;
        this.helpers.ua = navigator.userAgent || "";
        this.helpers.is_mobile_ie = -1 !== this.helpers.ua.indexOf("IEMobile");
        this.helpers.is_firefox = -1 !== this.helpers.ua.indexOf("Firefox");
        this.helpers.isAtLeastIE11 = !!(this.helpers.ua.match(/Trident/) && !this.helpers.ua.match(/MSIE/));
        this.helpers.isIE11 = !!(this.helpers.ua.match(/Trident/) && this.helpers.ua.match(/rv[ :]11/));
        this.helpers.isMac = /^Mac/.test(navigator.platform);
        this.helpers.is_safari = /^((?!chrome|android).)*safari/i.test(
          this.helpers.ua
        );
        this.helpers.isIE10 = navigator.userAgent.match("MSIE 10");
        this.helpers.isIE9 = navigator.userAgent.match("MSIE 9");
        this.helpers.is_EDGE = /Edge\/12./i.test(this.helpers.ua);
        this.helpers.is_pb = !this.helpers.is_undefined(window.ZnPbData);
        var $body = $("body");
        if (this.helpers.is_EDGE)
          $body.addClass("is-edge");
        if (this.helpers.isIE11)
          $body.addClass("is-ie11");
        if (this.helpers.is_safari)
          $body.addClass("is-safari");
      },
      contact_forms: function(scope) {
        var fw = this, element = scope ? scope.find(".zn-contactForm") : $(".zn-contactForm");
        element.each(function(index, el) {
          var $el = $(el), time_picker = $el.find(".zn-formItem-field--timepicker"), date_picker = $el.find(".zn-formItem-field--datepicker"), datepicker_lang = date_picker.is("[data-datepickerlang]") ? date_picker.attr("data-datepickerlang") : "", date_format = date_picker.is("[data-dateformat]") ? date_picker.attr("data-dateformat") : "yy-mm-dd", timeformat = time_picker.is("[data-timeformat]") ? time_picker.attr("data-timeformat") : "h:i A";
          if (time_picker.length > 0) {
            time_picker.timepicker({
              timeFormat: timeformat,
              className: "cf-elm-tp"
            });
          }
          if (date_picker.length > 0) {
            date_picker.datepicker({
              dateFormat: date_format,
              showOtherMonths: true
            }).datepicker("widget").wrap('<div class="ll-skin-melon"/>');
            if (datepicker_lang !== "") {
              $.datepicker.setDefaults($.datepicker.regional[datepicker_lang]);
            }
          }
          $el.on("submit", function(e) {
            e.preventDefault();
            if (fw.form_submitting === true) {
              return false;
            }
            fw.form_submitting = true;
            var form = $(this), response_container = form.find(".zn_contact_ajax_response:eq(0)"), has_error = false, inputs = {
              fields: form.find(
                'textarea, select, input[type="text"], input[type="checkbox"], input[type="hidden"]'
              )
            }, form_id = response_container.attr("id"), submit_button = form.find(".zn-formSubmit");
            if ((fw.helpers.isIE11 || fw.helpers.isIE10 || fw.helpers.isIE9) && form.is('[action="#"]')) {
              form.attr("action", "");
            }
            submit_button.addClass("zn-contactForm--loading");
            inputs.fields.each(function() {
              var field = $(this), p_container = field.parent();
              if (field.is(":checkbox")) {
                if (field.is(":checked")) {
                  field.val(true);
                } else {
                  field.val("");
                }
              }
              p_container.removeClass("zn-formItem--invalid");
              if (field.hasClass("zn_validate_not_empty")) {
                if (field.is(":checkbox")) {
                  if (!field.is(":checked")) {
                    p_container.addClass("zn-formItem--invalid");
                    has_error = true;
                  }
                } else {
                  if (field.val() === "") {
                    p_container.addClass("zn-formItem--invalid");
                    has_error = true;
                  }
                }
              } else if (field.hasClass("zn_validate_is_email")) {
                if (!field.val().match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)) {
                  p_container.addClass("zn-formItem--invalid");
                  has_error = true;
                }
              } else if (field.hasClass("zn_validate_is_numeric")) {
                if (isNaN(field.val())) {
                  p_container.addClass("zn-formItem--invalid");
                  has_error = true;
                }
              }
            });
            if (has_error) {
              submit_button.removeClass("zn-contactForm--loading");
              fw.form_submitting = false;
              return false;
            }
            var data = form.serialize();
            $.post(form.attr("action"), data).success(function(result) {
              fw.form_submitting = false;
              submit_button.removeClass("zn-contactForm--loading");
              var response = $(result).find(
                "#" + form_id + " > .zn_cf_response"
              ), responseContainer = $("#" + form_id), redirect_uri = form.data("redirect");
              responseContainer.html(response);
              if (response.hasClass("alert-success")) {
                inputs.fields.val("");
                if (redirect_uri) {
                  window.location.replace(redirect_uri);
                }
              }
            }).error(function() {
              console.log("Error loading page");
            });
            return false;
          });
        });
      },
      /**
       * Easy Video Background
       * Based on easy background video plugin
       * Example data setup attribute:
       * data-video-setup='{ "position": absolute, "loop": true , "autoplay": true, "muted": true, "mp4":"", "webm":"", "ogg":""  }'
       */
      background_video: function(scope) {
        var fw = this, elements = scope.find(".zn-videoBg:not(.zn-videoBg--no-init)");
        if (!elements.length)
          return;
        elements.each(function(index, el) {
          var $video = $(el), $options = $video.is("[data-video-setup]") && fw.helpers.IsJsonString($video.attr("data-video-setup")) ? JSON.parse($video.attr("data-video-setup")) : {};
          if (typeof window.video_background != "undefined") {
            new window.video_background($video, $options);
          }
        });
      },
      doParallax: function(scope) {
        var fw = this, $el = $(".js-znParallax", $(scope));
        if ($el.length > 0 && !fw.helpers.hasTouchMobile && typeof $.fn.znParallax != "undefined") {
          $el.znParallax();
        }
      },
      doObjectParallax: function(scope) {
        var fw = this, $el = $(".js-doObjParallax", $(scope));
        if ($el.length > 0 && !fw.helpers.hasTouchMobile && !fw.helpers.is_mobile_ie && typeof Rellax != "undefined") {
          new Rellax(".js-doObjParallax");
        }
      },
      entryAnimations: function(scope) {
        var fw = this, elements = $(scope).find(".zn-animateInViewport"), is = [];
        if (elements.length > 0) {
          elements.each(function(i, el) {
            var $el = $(el);
            $el.css("animation-delay", $el.attr("data-anim-delay"));
            function animateEntrance() {
              if ($(el).parent().hasClass("eluida7543286")) {
                console.log(fw.helpers.isInViewport(el));
              }
              if (!is[i] && fw.helpers.isInViewport(el)) {
                $el.removeClass("zn-animateInViewport").addClass("is-animating");
                is[i] = true;
              }
            }
            animateEntrance();
            $(window).on("scroll", animateEntrance);
          });
        }
      },
      objectFitCover: function(scope) {
        var fw = this;
        function coverFillSwitch(container, obj, invert) {
          if (!container || !obj)
            return false;
          var objHeight = obj.naturalHeight || obj.videoHeight;
          var objWidth = obj.naturalWidth || obj.videoWidth;
          var containerRatio = container.offsetWidth / container.offsetHeight;
          var objRatio = objWidth / objHeight;
          var ratioComparison = false;
          if (objRatio >= containerRatio)
            ratioComparison = true;
          if (invert)
            ratioComparison = !ratioComparison;
          if (ratioComparison) {
            obj.style.height = "100%";
            obj.style.width = "auto";
          } else {
            obj.style.height = "auto";
            obj.style.width = "100%";
          }
        }
        function applyStandardProperties(container, obj) {
          var containerStyle = window.getComputedStyle(container);
          if (containerStyle.overflow !== "hidden")
            container.style.overflow = "hidden";
          if (containerStyle.position !== "relative" && containerStyle.position !== "absolute" && containerStyle.position !== "fixed")
            container.style.position = "relative";
          obj.style.position = "absolute";
          obj.style.top = "50%";
          obj.style.left = "50%";
          obj.style.transform = "translate(-50%,-50%)";
        }
        function objectFitInt(el) {
          var objs = document.getElementsByClassName(el);
          for (var i = 0; i < objs.length; i++) {
            var obj = objs[i];
            var container = obj.parentElement;
            coverFillSwitch(container, obj);
            applyStandardProperties(container, obj);
          }
        }
        if (typeof Modernizr == "object" && !Modernizr.objectfit) {
          window.addEventListener(
            "load",
            objectFitInt("object-fit__cover"),
            false
          );
          window.addEventListener(
            "resize",
            fw.helpers.throttle(function() {
              var i, obj, container;
              var objsCover = document.getElementsByClassName("object-fit__cover");
              for (i = 0; i < objsCover.length; i++) {
                obj = objsCover[i];
                container = obj.parentElement;
                coverFillSwitch(container, obj);
              }
            }, 100),
            false
          );
        }
        if ($(".js-object-fit-cover", scope).length !== 0) {
          window.addEventListener(
            "load",
            objectFitInt("js-object-fit-cover"),
            false
          );
          window.addEventListener(
            "resize",
            fw.helpers.throttle(function() {
              var i, obj, container;
              var objsCover = document.getElementsByClassName(
                "js-object-fit-cover"
              );
              for (i = 0; i < objsCover.length; i++) {
                obj = objsCover[i];
                container = obj.parentElement;
                coverFillSwitch(container, obj);
              }
            }, 100),
            false
          );
        }
      }
    };
    $(document).ready(function() {
      $.znb_frontend_js = new $.ZnbFrontendJs();
    });
  })(jQuery);
})();
