$(document).ready(function() {
    
    function heightDetect() {
        $(".header").css("height", $(window).height());
    };
    heightDetect();
    $(window).resize(function() {
        heightDetect();
    });
    
    //Touch-menu settings
    var touch = $('.touch-menu');
    var menu = $('.navbar-menu');
    var sm = $('.small-menu')

    $(touch).on('click', function() {
        sm.slideToggle();
        $(".header-content").toggleClass("hidden");
        $(".header-content").fadeOut(600);
    });
    $(".small-menu a").click(function() {
        sm.slideUp();
        $(".header-content").removeClass("hidden");
        $(".header-content").fadeIn(600);
    });

    //Smooth scroll

    $(".navbar-menu a, .small-menu a, .scroll, #backTop").mPageScroll2id();

    //Tooltips

    $(function() {
        $('[data-toggle="tooltip"]').tooltip();
    });

    //MixitUp

    $("#portfolio-grid").mixItUp();

    // Load Google Maps on wide screen

    $(".load-map").on("click", function() {
        if (!$(this).data("loaded")) {
            var mapScript = "http://maps.googleapis.com/maps/api/js?key=AIzaSyCEIfHjmSXApC9Jhh5EdjNymcCbs4lrw38";
            $.getScript(mapScript, function() {

                $(".load-map").data('loaded', true);
                $('.load-map').fadeOut(600);
                var myCenter = new google.maps.LatLng(22.7041461, 90.3672038);

                var map = new google.maps.Map(document.getElementById('map'), {
                    center: myCenter,
                    zoom: 16,
                    scrollwheel: false
                });

                var marker = new google.maps.Marker({
                    position: myCenter,
                });

                marker.setMap(map);
            });
        }
    });

    // Load Google Maps on narrow screen

    onload = resize = function() {
        var map = document.getElementById('clickyMap');
        var iframe = map.getElementsByTagName('iframe')[0];
        iframe.style.pointerEvents = 'none';
        map.onclick = function() {
            iframe.style.pointerEvents = 'inherit';
        }
        map.onmouseleave = function() {
            iframe.style.pointerEvents = 'none';
        }
    }

    //Circle progress bar

    $('#circle').animate({
        fill: "#223fa3",
        stroke: "#000",
        "stroke-dasharray": 611,
        "stroke-opacity": 0.5
    }, {
        duration: 3500,
        progress: function(animate, progress) {
            $('#text').text(Math.round(progress * 80));
        }
    });
    $('#circle2').animate({
        fill: "#223fa3",
        stroke: "#000",
        "stroke-dasharray": 594

    }, {
        duration: 3000,
        progress: function(animate, progress) {
            $('#text2').text(Math.round(progress * 75));
        }
    });
    $('#circle3').animate({
        fill: "#223fa3",
        stroke: "#000",
        "stroke-dasharray": 543
    }, {
        duration: 2000,
        progress: function(animate, progress) {
            $('#text3').text(Math.round(progress * 60));
        }
    });

    //Linear progress bar

    $(".progress-bar").each(function() {
        each_bar_width = $(this).attr('aria-valuenow');
        $(this).width(each_bar_width + '%');
    });

    //Appearance anchor up

    jQuery(function(f) {
        var element = f('#backTop');
        f(window).scroll(function() {
            element['fade' + (f(this).scrollTop() > 700 ? 'In' : 'Out')](500);
        });
    });
});
