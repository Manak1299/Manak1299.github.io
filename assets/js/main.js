(function ($) {
    "use strict";

    //Navigation scroll spy
    $(".menu > li > a").on('click', function (event) {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top - 10 + "px"
        }, 700, function () {
            window.location.hash = hash;
        });
    });
    //Set Image as a Parents Background
    var parents = $(".single_service_body").height();
    $(".set_background").each(function () {
        var thesrc = $(this).attr('src');
        $(this).parent().css("background", "url(" + thesrc + ")");
        $(this).parent().css("background-position", "center");
        $(this).parent().css("background-size", "cover");
        $(this).parent().css("background-repeat", "no-repeat");
        $(this).parent().css("height", parents);
        $(this).hide();
    });
    //Aos Initilize
    AOS.init({
        easing: 'ease-out-back',
        duration: 1500
    });

    //Owl carosuel
    var specialDealCarousel = $('.client_text_slider');
    specialDealCarousel.owlCarousel({
        items: 1,
        margin: 15,
        loop: true,
        autoplay: true,
        stagePadding: 0,
        dots: true,
        smartSpeed: 700
    });
    var dealImageCarousel = $('.client_image_slider');
    dealImageCarousel.owlCarousel({
        center: true,
        items: 3,
        loop: true,
        autoplay: true,
        dots: true,
        margin: 15,
        smartSpeed: 700,
        responsive: {
            600: {
                items: 3
            }
        }
    });
    specialDealCarousel.on(' translate.owl.carousel', function (property) {
        dealImageCarousel.find('.owl-dot:eq(' + property.page.index + ')').click();
    });
    dealImageCarousel.on(' translate.owl.carousel', function (property) {
        specialDealCarousel.find('.owl-dot:eq(' + property.page.index + ')').click();
    });

    //Window scroll
    var logoCheck = $('#logo');
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 68) {
            $('.navigation_area').addClass('sticky');
            if (logoCheck.length) {
                document.getElementById('logo').src = 'assets/images/brand_logo.png';
            }
        } else {
            $('.navigation_area').removeClass('sticky');
            if (logoCheck.length) {
                document.getElementById('logo').src = 'assets/images/brand_logo_white.png';
            }
        }
        if ($(this).scrollTop() > 700) {
            $('.go_top').removeClass('no__visibility');
        } else {
            $('.go_top').addClass('no__visibility');
        }
    });

    //Scroll Top
    $('.go_top').on('click', function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 1500);
    });

    // Convert All Image to SVG
    $('img.svg').each(function () {
        var $img = $(this),
            imgID = $img.attr('id'),
            imgClass = $img.attr('class'),
            imgURL = $img.attr('src');

        $.get(imgURL, function (data) {
            var $svg = $(data).find('svg');
            if (typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            if (typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass);
            }
            $svg = $svg.removeAttr('xmlns:a');
            $img.replaceWith($svg);
        }, 'xml');

    });

    //Background video
    var bgVideo = $('.background_video'),
        videoId = bgVideo.attr('data-video');
    bgVideo.each(function () {
        $(this).YTPlayer({
            fitToBackground: true,
            videoId: videoId,
            pauseOnScroll: false
        });
    });

    //venobox
    $(document).ready(function () {
        $('.venobox').venobox();
    });
    //Preloader
    jQuery(window).load(function () {
        //Prealoder
        $('.preloader').fadeOut('slow');
        var $grid = $('.grid').isotope({});

        // Isotop js
        $('.filter-button-group').on('click', 'li', function () {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({
                filter: filterValue
            });
        });
    });

    //Switcher js
    $('.swither_handle').on('click', function () {
        $('.switcher_area').toggleClass('switcher_toggle');
    });

    //Portfolio fill
    $('.portfolio_fill li').on('click', function () {
        $(this).siblings('li').removeClass('active');
        $(this).addClass('active');
    });

})(jQuery);
