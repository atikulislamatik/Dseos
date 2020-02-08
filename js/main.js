(function($) {
        //preloader start
        $(document).on("scroll", function() {
            if ($(document).scrollTop() > 600) {
                $("header").addClass("black");
            } else {
                $("header").removeClass("black");
            }
        });

        //project slider

        $(".promo-slider").owlCarousel({
            items: 1,
            loop: true,
            dots: true,
            nav: true,
            autoplay: true,
            smartSpeed: 2000,
            autoplayHoverPause: true,
            autoplayTimeout: 5500,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],

        });
        //client slider
        $(".testimonial-slider").owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            autoplayTimeout: 500,
            smartSpeed: 1000,
            autoplayHoverPause: true,
            nav: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],

        });

        //project magnific
        $('.foot-gall-pop').magnificPopup({
            type: 'image',
            removalDelay: 300,
            gallery: {
                // options for gallery
                enabled: true
            },
        });
        // isotop js
        var $grid = $('.price-active').isotope({
            itemSelector: '.grid-item',
            percentPosition: true,
            masonry: {
               
                columnWidth: 1
            }
        })
        $('.price-menu').on('click', 'button', function() {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({
                filter: filterValue
            });
        });

        $('.price-menu button').on('click', function(event) {
            $(this).siblings('.active-price').removeClass('active-price');
            $(this).addClass('active-price');
            event.preventDefault();
        });

        // preloader

        $(window).load(function() {
            $("#loading").fadeOut(1200);

        })

        // scrool top

        $(window).scroll(function() {
            if ($(this).scrollTop() > 300) {
                $('.scroll-top').fadeIn();
            } else {
                $('.scroll-top').fadeOut();
            }
        });
        $('.scroll-top').click(function() {
            $('html, body').animate({
                scrollTop: 0
            }, 800);
            return false;
        });

        // wow js
        new WOW({
            offset: 100,
            mobile: true
        }).init();
        //slicknav js
        $(document).ready(function() {
            $('#hello').slicknav({
                'label': '',
            });
        });
    }

    (jQuery));