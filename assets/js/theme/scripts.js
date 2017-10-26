/*
* ----------------------------------------------------------------------------------------
Author       : onepageboss
Template Name: Tourlover - Travel agency landing page Template
Version      : 1.0                                          
* ----------------------------------------------------------------------------------------
*/

(function ($) {
    'use strict';

    jQuery(document).ready(function () {

        /*
         * ----------------------------------------------------------------------------------------
         *  PRELOADER JS
         * ----------------------------------------------------------------------------------------
         */
        $(window).on("load", function () {
            $('.spinner').fadeOut();
            $('.preloader-area').delay(350).fadeOut('slow');
        });

        /*
         * ----------------------------------------------------------------------------------------
         *  CHANGE MENU BACKGROUND JS
         * ----------------------------------------------------------------------------------------
         */
        var winwidth = $(window).width();
        if (winwidth > 767) {
            $(window).on('scroll', function () {
                if ($(window).scrollTop() > 150) {
                    $('.header-top-area').addClass('menu-bg');
                } else {
                    $('.header-top-area').removeClass('menu-bg');
                }
            });
        } else {
            $(window).on('scroll', function () {
                if ($(window).scrollTop() > 50) {
                    $('.header-top-area').addClass('menu-bg');
                } else {
                    $('.header-top-area').removeClass('menu-bg');
                }
            });
        }



        /*
         * ----------------------------------------------------------------------------------------
         *  SMOTH SCROOL JS
         * ----------------------------------------------------------------------------------------
         */

        $('a.smoth-scroll').on("click", function (e) {
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top - 50
            }, 1000);
            e.preventDefault();
        });





        /*
         * ----------------------------------------------------------------------------------------
         *  PARALLAX JS
         * ----------------------------------------------------------------------------------------
         */

        $(window).stellar({
            responsive: true,
            positionProperty: 'position',
            horizontalScrolling: false
        });



        /*
         * ----------------------------------------------------------------------------------------
         *  TESTIMONIAL,BLOG JS
         * ----------------------------------------------------------------------------------------
         */

        $(".testimonial-list").owlCarousel({
            items: 3,
            autoPlay: true,
            navigation: false,
            itemsDesktop: [1199, 1],
            itemsDesktopSmall: [980, 2],
            itemsTablet: [768, 2],
            itemsTabletSmall: false,
            itemsMobile: [479, 1],
            pagination: true,
            autoHeight: true,
        });


        $(".tour-list").owlCarousel({
            items: 4,
            autoPlay: true,
            navigation: false,
            itemsDesktop: [1199, 1],
            itemsDesktopSmall: [980, 2],
            itemsTablet: [768, 2],
            itemsTabletSmall: false,
            itemsMobile: [479, 1],
            pagination: true,
            autoHeight: true,
        });



        /*
         * ----------------------------------------------------------------------------------------
         *  GOOGLE MAP JS
         * ----------------------------------------------------------------------------------------
         */
        var myCenter = new google.maps.LatLng(45.717799, -74.319718);

        function initialize() {
            var mapProp = {
                zoom: 12,
                center: myCenter,
                scrollwheel: false,
                styles: [{
                    "stylers": [{
                            "hue": "#ffffff"
                        }, {
                            saturation: -110
                        },
                        {
                            gamma: 2
                        }]
                }],
                mapTpeIdy: google.maps.MapTypeId.ROADMAP
            };
            var map = new google.maps.Map(document.getElementById("map"), mapProp);
            var marker = new google.maps.Marker({
                position: myCenter,
                icon: "/assets/images/logo/map-pin-norplan.png"
            });
            marker.setMap(map);
        }
        google.maps.event.addDomListener(window, 'load', initialize);


        /*
         * ----------------------------------------------------------------------------------------
         *  EXTRA JS
         * ----------------------------------------------------------------------------------------
         */
        $(document).on('click', '.navbar-collapse.in', function (e) {
            if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
                $(this).collapse('hide');
            }
        });
        $('body').scrollspy({
            target: '.navbar-collapse',
            offset: 195
        });



        /*
         * ----------------------------------------------------------------------------------------
         *  SCROOL TO UP JS
         * ----------------------------------------------------------------------------------------
         */
        if (winwidth > 767) {
            $(window).on("scroll", function () {
                if ($(this).scrollTop() > 250) {
                    $('.scrollup:not(.scrollup-phone)').fadeIn();
                } else {
                    $('.scrollup:not(.scrollup-phone)').fadeOut();
                }
            });
        } else {
            $(window).on("scroll", function () {
                if ($(this).scrollTop() > 50) {
                    $('.scrollup-phone').fadeIn();
                } else {
                    $('.scrollup-phone').fadeOut();
                }
            });
        }
        
        $('.scrollup:not(.scrollup-phone)').on("click", function () {
            $("html, body").animate({
                scrollTop: 0
            }, 800);
            return false;
        });

        /*
         * ----------------------------------------------------------------------------------------
         *  WOW JS
         * ----------------------------------------------------------------------------------------
         */
        new WOW().init();

    });

})(jQuery);