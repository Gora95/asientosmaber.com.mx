(function($) {
    
    "use strict";

    // ==================== Preloader ====================
    function preloader_load() {
        if($('.preloader').length){
            $('.preloader').delay(400).fadeOut(500);
        }
    }

    // ==================== Navbar Scroll To Fixed ====================
    function navbar_scrollfixed() {
        $('.scrollingto-fixed').scrollToFixed();
        var summaries = $('.summary');
        summaries.each(function(i) {
            var summary = $(summaries[i]);
            var next = summaries[i + 1];
            summary.scrollToFixed({
                marginTop: $('.scrollingto-fixed').outerHeight(true) + 10,
                limit: function() {
                    var limit = 0;
                    if (next) {
                        limit = $(next).offset().top - $(this).outerHeight(true) - 10;
                    } else {
                        limit = $('.footer').offset().top - $(this).outerHeight(true) - 10;
                    }
                    return limit;
                },
                zIndex: 999
            });
        });
    }

    // ==================== Gallery Masonry Isotop And Other Gallery and Lightbox
    function masonryIsotop() {
        if ($('.masonry-gallery').length) {
            $('.masonry-gallery').isotope({
                layoutMode:'masonry'
            });
        }
        if($('.masonry-filter').length){
            $('.masonry-filter a').children('span').click(function(){
                var Self = $(this);
                var selector = Self.parent().attr('data-filter');
                $('.masonry-filter a').children('span').parent().removeClass('active');
                Self.parent().addClass('active');
                $('.masonry-gallery').isotope({ filter: selector });
                return false;
            });
    }
        
    /*================================ magnificPopup  ================================*/
    $(document).ready(function() {
        $('.popup-gallery').magnificPopup({
          delegate: 'a',
          type: 'image',
          tLoading: 'Loading image #%curr%...',
          mainClass: 'mfp-img-mobile',
          gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1] // Will preload 0 - before current, and 1 after the current image
          },
          image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function(item) {
              return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
            }
          }
        });
    });

    $(document).ready(function() {
        $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
          disableOn: 700,
          type: 'iframe',
          mainClass: 'mfp-fade',
          removalDelay: 160,
          preloader: false,
          fixedContentPos: false
        });
    });

    //LighvtBox / Fancybox
    if($('.lightbox-image').length) {
      $('.lightbox-image').fancybox();
    }
    }

    // ==================== fact-counter ====================
    $(document).ready(function() {
        $('div.timer').counterUp({
            delay: 5,
            time: 2000
        });
    });

    // ==================== fitVids ====================
    function fit_Vids() {
        $body.fitVids();
    }

    // ==================== Wow animation ====================
    function wowAnimation() {
        var wow = new WOW({
            animateClass: 'animated',
            mobile: true, // trigger animations on mobile devices (default is true)
            offset:       0
        });
        wow.init();
    }    

    // ==================== YTplayer ====================
    $(document).ready(function() {
        $(".player").mb_YTPlayer();
    });

    // ==================== Scroll To top ====================
    function scrollToToped() {
        $(window).scroll(function(){
            if ($(this).scrollTop() > 600) {
                $('.scrollToTop').fadeIn();
            } else {
                $('.scrollToTop').fadeOut();
            }
        });
        
        //Click event to scroll to top
        $('.scrollToTop').click(function(){
            $('html, body').animate({scrollTop : 0},800);
            return false;
        });
    }

    // ==================== OWL CAROUSEL AND OTHER SLIDER SCRIPT   ====================
    // Owl-News-carousel
    if($('.irt-main-slider').length){
        $('.irt-main-slider').owlCarousel({
            autoplay: 5000,
            loop:true,
            margin:0,
            dots: false,
            nav:true,
            autoplayHoverPause:false,
            autoplay: true,
            autoHeight:true,
            smartSpeed: 2000,
            navText: [
              '<i class="">P</i>',
              '<i class="">N</i>'
            ],
            responsive: {
                0: {
                    items: 1,
                    center: false
                },
                480:{
                    items:1,
                    center: false
                },
                600: {
                    items: 1,
                    center: false
                },
                768: {
                    items: 1
                },
                992: {
                    items: 1
                },
                1200: {
                    items: 1
                }
            }
        })
    }
    // Owl-News-carousel
    if($('.irt-main-slider-style2').length){
        $('.irt-main-slider-style2').owlCarousel({
            loop:true,
            margin:0,
            dots: false,
            nav:true,
            autoplayHoverPause:false,
            autoplay: true,
            autoHeight:true,
            animateIn: 'fadeIn',
            smartSpeed: 500,
            navText: [
              '<i class="">P</i>',
              '<i class="">N</i>'
            ],
            responsive: {
                0: {
                    items: 1,
                    center: false
                },
                480:{
                    items:1,
                    center: false
                },
                600: {
                    items: 1,
                    center: false
                },
                768: {
                    items: 1
                },
                992: {
                    items: 1
                },
                1200: {
                    items: 1
                }
            }
        })
    }

    // ==================== Owl-Testimonial-carousel ====================
    if($('.blog-single-post-slider').length){
        $('.blog-single-post-slider').owlCarousel({
            loop:true,
            margin:5,
            dots: false,
            nav:false,
            autoplayHoverPause:false,
            autoplay: false,
            smartSpeed: 700,
            navText: [
              '<i class="lnr lnr-arrow-left"></i>',
              '<i class="lnr lnr-arrow-right"></i>'
            ],
            responsive: {
                0: {
                    items: 1,
                    center: false
                },
                480:{
                    items:1,
                    center: false
                },
                600: {
                    items: 1,
                    center: false
                },
                768: {
                    items: 1
                },
                992: {
                    items: 1
                },
                1200: {
                    items: 1
                }
            }
        })
    }

    // Google Map Settings
    if($('#map-location').length){
        var map;
        map = new GMaps({
            el: '#map-location',
            zoom: 14,
            scrollwheel:false,
            //Set Latitude and Longitude Here
            lat: 39.768403,
            lng: -86.158068
        });
    }


/* ==========================================================================
   When document is ready, do
   ========================================================================== */
    $(document).on('ready', function() {
        // add your functions
        navbar_scrollfixed();
        scrollToToped();
        wowAnimation();
    });

/* ==========================================================================
   When document is Scrollig, do
   ========================================================================== */
    // window on Scroll function
    $(window).on('scroll', function() {
        // add your functions
    });
    
/* ==========================================================================
   When document is loading, do
   ========================================================================== */

    $(window).on('load', function() {
        // add your functions
        preloader_load();
        masonryIsotop();
    }); 


/* ==========================================================================
   When Window is resizing, do
   ========================================================================== */
    $(window).on('resize', function() {
        // add your functions
    });


})(window.jQuery);