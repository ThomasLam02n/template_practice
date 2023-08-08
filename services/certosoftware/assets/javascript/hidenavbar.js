var prevScrollpos = window.pageYOffset;

window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("header__hidden").style.top = "0";
    } else {
        document.getElementById("header__hidden").style.top = "-84px";
    }
    prevScrollpos = currentScrollPos;
}
