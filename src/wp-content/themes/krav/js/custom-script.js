(function($) {
    var initialHeight = $('.l-topsection').height();
    $(window).scroll(function(e) {

        // console.log($('.l-topsection').height())
        var div = $('.m-camapign--body');
        var navbar = $('.l-topsection');
        var height = navbar.height()
            // var offset = div.offset().top;

        var scrollTop = $(window).scrollTop(),
            offset = div.offset().top,
            distance = (offset - scrollTop);

        console.log(distance)
        console.log(height)
        if (distance <= height) {
            $(navbar).css("margin-top", "" + distance - height);
        } else {
            (navbar).css("margin-top", "0");
        }

        ////
        var screenheight = parseInt($(document).height());

        var scrolled = $(document).scrollTop();
        // console.log(scrolled)
        // console.log(screenheight)
        var percent = (parseInt(scrolled) / parseInt(screenheight)) * 100;
        if (percent > 25) {
            $('.m-scrolltop').addClass("scrolltop-visible")
                // $('.m-scrolltop').css("display", "block");
                // console.log(1 / (28 - percent))
                // $('.m-scrolltop').css("opacity", 1 / (28 - percent));
        } else {
            $('.m-scrolltop').removeClass("scrolltop-visible")
        }
        ////
    });
    var navPrimary = $(".m-logo");
    $(navPrimary).on("click",

        function() {
            console.log("this")
            console.log($(this))
        });

})(jQuery);