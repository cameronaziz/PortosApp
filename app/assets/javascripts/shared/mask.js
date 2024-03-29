// jQuery Mask Plugin v1.11.2
// github.com/igorescobar/jQuery-Mask-Plugin
(function(a) {
"function" === typeof define && define.amd ? define(["jquery"], a) : a(window.jQuery || window.Zepto)
})(function(a) {
var y = function(b, d, e) {
    b = a(b);
    var g = this, l = b.val(), m;
    d = "function" === typeof d ? d(b.val(), void 0, b, e) : d;
var c = {
invalid: [],
getCaret: function() {
try {
    var k, r = 0, a = b.get(0), f = document.selection, c = a.selectionStart;
    if (f&&-1 === navigator.appVersion.indexOf("MSIE 10"))
k = f.createRange(), k.moveStart("character", b.is("input")?-b.val().length : - b.text().length), r = k.text.length;
    else if (c || "0" === c)
r = c;
    return r
} catch (d) {}
},
setCaret: function(k) {
try {
if (b.is(":focus")) {
    var r, a = b.get(0);
    a.setSelectionRange ? a.setSelectionRange(k, k) : a.createTextRange && (r = a.createTextRange(), r.collapse(!0), r.moveEnd("character", k), r.moveStart("character", k), r.select())
}
} catch (c) {}
},
events: function() {
b.on("keyup.mask", c.behaviour).on("paste.mask drop.mask", function() {
setTimeout(function() {
    b.keydown().keyup()
}, 100)
}).on("change.mask", function() {
    b.data("changed", !0)
}).on("blur.mask", function() {
    l === b.val() || b.data("changed") ||
    b.trigger("change");
    b.data("changed", !1)
}).on("keydown.mask, blur.mask", function() {
    l = b.val()
}).on("focus.mask", function(k) {
    !0 === e.selectOnFocus && a(k.target).select()
}).on("focusout.mask", function() {
    e.clearIfNotMatch&&!m.test(c.val()) && c.val("")
})
},
getRegexMask: function() {
    for (var k = [], b, a, c, e, h = 0; h < d.length; h++)(b = g.translation[d[h]])
? (a = b.pattern.toString().replace(/.{1}$|^.{1}/g, ""), c = b.optional, (b = b.recursive) ? (k.push(d[h]), e = {
    digit: d[h],
pattern: a
}) : k.push(c || b ? a + "?" : a)) : k.push(d[h].replace(/[-\/\\^$*+?.()|[\]{}]/g,
"\\$&"));
k = k.join("");
e && (k = k.replace(RegExp("(" + e.digit + "(.*" + e.digit + ")?)"), "($1)?").replace(RegExp(e.digit, "g"), e.pattern));
return RegExp(k)
},
destroyEvents: function() {
    b.off("keydown keyup paste drop blur focusout ".split(" ").join(".mask "))
},
val: function(k) {
    var a = b.is("input") ? "val": "text";
if (0 < arguments.length) {
    if (b[a]() !== k)
b[a](k);
    a = b
} else
  a = b[a]();
return a
},
getMCharsBeforeCount: function(a, b) {
    for (var c = 0, f = 0, e = d.length; f < e && f < a; f++)
g.translation[d.charAt(f)] || (a = b ? a + 1 : a, c++);
    return c
},
caretPos: function(a,
                   b, e, f) {
    return g.translation[d.charAt(Math.min(a - 1, d.length - 1))] ? Math.min(a + e - b - f, e) : c.caretPos(a + 1, b, e, f)
},
behaviour: function(b) {
    b = b || window.event;
    c.invalid = [];
    var e = b.keyCode || b.which;
if ( - 1 === a.inArray(e, g.byPassKeys)) {
    var d = c.getCaret(), f = c.val().length, p = d < f, h = c.getMasked(), l = h.length, n = c.getMCharsBeforeCount(l - 1) - c.getMCharsBeforeCount(f - 1);
    c.val(h);
    !p || 65 === e && b.ctrlKey || (8 !== e && 46 !== e && (d = c.caretPos(d, f, l, n)), c.setCaret(d));
    return c.callbacks(b)
}
},
getMasked: function(b) {
    var a = [], l = c.val(), f =
    0, p = d.length, h = 0, m = l.length, n = 1, q = "push", u =- 1, t, w;
e.reverse ? (q = "unshift", n =- 1, t = 0, f = p - 1, h = m - 1, w = function() {
    return - 1 < f&&-1 < h
}) : (t = p - 1, w = function() {
    return f < p && h < m
});
for (; w();) {
    var x = d.charAt(f), v = l.charAt(h), s = g.translation[x];
if (s)
v.match(s.pattern) ? (a[q](v), s.recursive && ( - 1 === u ? u = f : f === t && (f = u - n), t === u && (f -= n)), f += n) : s.optional ? (f += n, h -= n) : s.fallback ? (a[q](s.fallback), f += n, h -= n) : c.invalid.push({
    p: h,
v: v,
e: s.pattern
}), h += n;
else {
    if (!b)
a[q](x);
    v === x && (h += n);
    f += n
}
}
b = d.charAt(t);
p !== m + 1 || g.translation[b] ||
                a.push(b);
return a.join("")
},
callbacks: function(a) {
var g = c.val(), m = g !== l, f = [g, a, b, e], p = function(a, b, c) {
"function" === typeof e[a] && b && e[a].apply(this, c)
};
p("onChange", !0 === m, f);
p("onKeyPress", !0 === m, f);
p("onComplete", g.length === d.length, f);
p("onInvalid", 0 < c.invalid.length, [g, a, b, c.invalid, e])
}
};
g.mask = d;
g.options = e;
g.remove = function() {
    var a = c.getCaret();
    c.destroyEvents();
    c.val(g.getCleanVal());
    c.setCaret(a - c.getMCharsBeforeCount(a));
    return b
};
g.getCleanVal = function() {
    return c.getMasked(!0)
};
g.init =
function(d) {
    d = d ||!1;
e = e || {};
g.byPassKeys = a.jMaskGlobals.byPassKeys;
g.translation = a.jMaskGlobals.translation;
g.translation = a.extend({}, g.translation, e.translation);
g = a.extend(!0, {}, g, e);
m = c.getRegexMask();
!1 === d ? (e.placeholder && b.attr("placeholder", e.placeholder), b.attr("autocomplete", "off"), c.destroyEvents(), c.events(), d = c.getCaret(), c.val(c.getMasked()), c.setCaret(d + c.getMCharsBeforeCount(d, !0))) : (c.events(), c.val(c.getMasked()))
};
g.init(!b.is("input"))
};
a.maskWatchers = {};
var A = function() {
var b =
a(this), d = {}, e = b.attr("data-mask");
b.attr("data-mask-reverse") && (d.reverse=!0);
b.attr("data-mask-clearifnotmatch") && (d.clearIfNotMatch=!0);
"true" === b.attr("data-mask-selectonfocus") && (d.selectOnFocus=!0);
if (z(b, e, d))
return b.data("mask", new y(this, e, d))
}, z = function(b, d, e) {
e = e || {};
var g = a(b).data("mask"), l = JSON.stringify;
b = a(b).val() || a(b).text();
try {
    return "function" === typeof d && (d = d(b)), "object" !== typeof g || l(g.options) !== l(e) || g.mask !== d
} catch (m) {}
};
a.fn.mask = function(b, d) {
d = d || {};
var e = this.selector,
        g = a.jMaskGlobals, l = a.jMaskGlobals.watchInterval, m = function() {
    if (z(this, b, d))
return a(this).data("mask", new y(this, b, d))
};
a(this).each(m);
e && "" !== e && g.watchInputs && (clearInterval(a.maskWatchers[e]), a.maskWatchers[e] = setInterval(function() {
a(document).find(e).each(m)
}, l));
return this
};
a.fn.unmask = function() {
clearInterval(a.maskWatchers[this.selector]);
    delete a.maskWatchers[this.selector];
return this.each(function() {
    var b = a(this).data("mask");
    b && b.remove().removeData("mask")
})
};
a.fn.cleanVal = function() {
    return this.data("mask").getCleanVal()
};
a.applyDataMask = function() {
a(document).find(a.jMaskGlobals.maskElements).filter(q.dataMaskAttr).each(A)
};
var q = {
maskElements: "input,td,span,div",
dataMaskAttr: "*[data-mask]",
dataMask: !0,
watchInterval: 300,
watchInputs: !0,
watchDataMask: !1,
byPassKeys: [9, 16, 17, 18, 36, 37, 38, 39, 40, 91],
translation: {
0: {
     pattern: /\d/
 },
9: {
     pattern: /\d/,
 optional: !0
 },
"#": {
       pattern: /\d/,
   recursive: !0
   },
A: {
    pattern: /[a-zA-Z0-9]/
},
S: {
    pattern: /[a-zA-Z]/
}
}
};
a.jMaskGlobals = a.jMaskGlobals || {};
q = a.jMaskGlobals = a.extend(!0, {}, q, a.jMaskGlobals);
q.dataMask && a.applyDataMask();
setInterval(function() {
    a.jMaskGlobals.watchDataMask && a.applyDataMask()
}, q.watchInterval)
});


