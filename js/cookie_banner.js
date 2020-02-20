function update_permission() {
    var n = "https:" === location.protocol;
    if ($('input[name="cookie_policies[]"]').each(function(e, t) {
        var o = $(t).val();
        $(this).is(":checked") ? Cookies.set(o, !0, {
            path: "/",
            expires: 365,
            secure: n
        }) : Cookies.remove(o, {
            path: "/"
        })
    }), $(".js-cookies-eu").length) {
        var e = document.querySelector(".js-cookies-eu");
        e.parentNode.removeChild(e), Cookies.set("cookie_eu_consented", !0, {
            path: "/",
            expires: 365,
            secure: n
        })
    }
    if (window.$("#cookie-settings").modal("hide"), Cookies.get("tracking") && (gaProperty = $(".site-ua").html(), disableStr = "ga-disable-" + gaProperty, -1 < document.cookie.indexOf(disableStr + "=true") && (window[disableStr] = !0), ga("create", gaProperty, "auto"), ga("set", "anonymizeIp", !0), ga("send", "pageview")), Cookies.get("targeting")) {
        var t = $(".site-fp").html();
        0 < t.length && (html = "<script>!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init', '" + t + "');fbq('track', 'PageView');fbq('consent', 'grant');</script><noscript><img height='1' width='1' style='display:none'src='https://www.facebook.com/tr?id=" + t + "&ev=PageView&noscript=1'/></noscript>", $("head").append(html))
    }
}
$(function() {
    $(".vertical-tabs a").click(function() {
        return $(this).tab("show"), !1
    }), $(".cookie_eu_close").click(function(e) {
        e.preventDefault(), $(".js-cookies-eu").fadeOut()
    }), $(".open-cookie-settings").click(function(e) {
        e.preventDefault(), window.$("#cookie-settings").modal("show")
    })
});

