/*! project-name v0.0.1 | (c) 2020 YOUR NAME | MIT License | http://link-to-your-git-repo.com */
function responsiveMenu() {
    var x = document.getElementById("list-menu-id");
    var y = document.getElementById("site-header-id");
    if (x.className === "list-menu") {
        x.className += " responsive-menu";
        y.className += " responsive-head";
    } else {
        x.className = "list-menu";
        y.className = "site-header";
        document.getElementById("site-header-id").style.position = "initial";
    }
}

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var is_mobile = document.getElementsByClassName("site-header responsive-head")[0];
    if (is_mobile.className === "site-header responsive-head") {
        document.getElementById("site-header-id").style.position = "fixed";
    }
};