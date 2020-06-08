function responsiveMenu() {
    var x = document.getElementById("list-menu-id");
    var y = document.getElementById("site-header-id");
    if (x.className === "list-menu") {
        x.className += " responsive-menu";
        y.className += " responsive-head";
        document.body.style.position = "fixed";
    } else {
        x.className = "list-menu";
        y.className = "site-header";
        document.body.style.position = "";
    }
}

function responsiveMenuMain() {
    var x = document.getElementById("list-menu-id");
    var y = document.getElementById("site-header-id");
    if (x.className === "list-menu") {
        x.className += " responsive-menu";
        y.className += " responsive-head";
        document.body.style.position = "fixed";
    } else {
        x.className = "list-menu";
        y.className = "site-header site-header-main";
        document.body.style.position = "";
    }
}

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("site-header-id").style.top = "0";
  } else {
    document.getElementById("site-header-id").style.top = "-78px";
  }
  prevScrollpos = currentScrollPos;
};
