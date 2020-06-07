function responsiveMenu() {
    var x = document.getElementById("list-menu-id");
    var y = document.getElementById("site-header-id");
    if (x.className === "list-menu") {
        x.className += " responsive-menu";
        y.className += " responsive-head";
    } else {
        x.className = "list-menu";
        y.className = "site-header";
    }
}