

function HomeIndex() {
    const heightFromTop = 300;
    this.initalizeScrollToTopButton = function () {
        $(window).scroll(function () {
            var verticalHeight = $(this).scrollTop();
            if (verticalHeight > heightFromTop) {
                $("#scrolltotop").fadeIn();
            } else {
                $("#scrolltotop").fadeOut();
            }
        });

        $("#scrolltotop").click(function () {
            $("html, body").animate({scrollTop: 0}, "medium");
        });

    }
}
$(document).ready(function() {
    
    app.HomeIndex = new HomeIndex();

    app.HomeIndex.initalizeScrollToTopButton();
});