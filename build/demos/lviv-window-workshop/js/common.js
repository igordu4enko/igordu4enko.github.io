$(document).ready(function() {
// Smooth scroll
    $(".touch-menu, .nav").on("click", "a", function(event) {
        //cancel standard treatment clicking on the link
        event.preventDefault();

        //take away from the sides of the ID attribute href
        var id = $(this).attr('href'),

        //find out the height of the top-up unit which is referred to anchor
            top = $(id).offset().top;

        //animate the transition to the distance - top 1,500 ms
        $('body,html').animate({
            scrollTop: top
        }, 1500);
    });
});
