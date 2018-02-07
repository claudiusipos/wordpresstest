(function($) {

    $(window).ready(function() {
        var subMenuItem = $('.m-nav-primarynav---submenu-items a');
        subMenuItem.hover(function() {
            //$(this).addClass('activeItem')
            console.log($(this).attr('description'))
            $('.m-nav--submenu-text em').text($(this).attr('description'))
        }, function() {
            // $('.m-nav--submenu-text').text("")
        });


        var globalid;
        var area = $('.m-nav-primarynav li a');
        area.hover(function() {
            var id = $(this).attr('id');
            globalid = id;
            // console.log(id);
            area.filter('.activeItem').each(function() {
                $('.m-nav--submenu-text em').text("")
                $(this).removeClass('activeItem')

            });
            $(this).addClass('activeItem');
            // console.log($(this).attr('description'));
            // $('m-nav--submenu-text').
            var newid = $(this).parents().eq(0).attr('id');
            // console.log(newid)
            // console.log($(this).parents().eq(0))
            $('.m-nav-primarynav--submenuwrapper').filter('.showLi').each(function() {
                $(this).removeClass('showLi')
            })
            $('#menuItem-' + newid).addClass('showLi');

            var secondaryNavbar = $("#mainmenu")
            var secondaryNavbarChild = $("#" + id)
            secondaryNavbarChild.addClass("navbar-on-hover");
            secondaryNavbar.addClass("primary-navbar-on-hover");


        }, function() {});

        var wrapper = $("#mainmenu")
        wrapper.hover(function() {



        }, function() {

            //hide active item (orange glow)

            $('.m-nav-primarynav li a ').filter('.activeItem').each(function() {
                $(this).removeClass('activeItem')
            });
            //hite menu item
            $('.m-nav-primarynav--submenuwrapper').filter('.showLi').each(function() {
                $(this).removeClass('showLi')
            })


            //hide white space
            var secondaryNavbar = $("#mainmenu")
            var secondaryNavbarChild = $("#" + globalid)
            secondaryNavbarChild.removeClass("navbar-on-hover");
            secondaryNavbar.removeClass("primary-navbar-on-hover");

        });



    });


})(jQuery);