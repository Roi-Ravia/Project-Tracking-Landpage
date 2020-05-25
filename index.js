var toggler = $(".navbar-toggler");

var iconArray = ["fas fa-bars hamburger fa-2x", "fas fa-times fa-2x"];

var index = 0;

toggler.on("click", function (event) {
    if(toggler.attr("aria-expanded") !== false) {
        index++;
        $(".fas").attr("class", iconArray[index % 2]);

    }
});