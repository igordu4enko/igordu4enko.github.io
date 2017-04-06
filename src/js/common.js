(function ($) {

    $(window).load(function() {
        $(".loader_inner").delay(600).fadeOut();
        $(".loader").delay(600).fadeOut("slow");
    });
    
    $(".top-menu ul a").mPageScroll2id();

    $("#portfolio-grid").mixItUp();

    $(".portfolio li").click(function() {
        $(".portfolio li").removeClass("active");
        $(this).addClass("active");
    });

    $(".top-text h1").animated("fadeInDown");
    $(".top-text p, .section-header").animated("fadeInUp");
    $(".animation-1").animated("flipInY");
    $(".animation-2").animated("fadeInLeft", "fadeOutRight");
    $(".animation-3").animated("fadeInRight", "fadeOutLeft");

    $(".pop-up").magnificPopup({
        type: "image"
    });
    $(".popup-content").magnificPopup({
        type: "inline",
        midClick: true,
        showCloseBtn: true
    });

    $(".resume-left .resume-item").animated("fadeInLeft", "fadeOutRight");
    $(".resume-right .resume-item").animated("fadeInRight", "fadeOutLeft");

    $(".portfolio-item").each(function(i) {
        $(this).find(".popup-content").attr("href", "#project-" + i);
        $(this).find(".project-descr").attr("id", "project-" + i);
    });

    function heightDetect() {
        $(".main-head").css("height", $(window).height());
    }
    heightDetect();
    $(window).resize(function() {
        heightDetect();
    });

    $(".toggle-menu").click(function() {
        $(".sandwich").toggleClass("active");
    });

    $(".top-menu ul a").click(function() {
        $(".top-menu").fadeOut(600);
        $(".sandwich").toggleClass("active");
    }).append("<span>");

    $(".toggle-menu").click(function() {
        if ($(".top-menu").is(":visible")) {
            $(".top-text").removeClass("h-opacity");
            $(".top-menu").fadeOut(600);
            $(".top-menu li a").removeClass("fadeInUp animated");
        } else {
            $(".top-text").addClass("h-opacity");
            $(".top-menu").fadeIn(600);
            $(".top-menu li a").addClass("fadeInUp animated");
        }
    });

    $("#form").validator().on("submit", function(event) {
        if (event.isDefaultPrevented()) {
            // handle the invalid form...
            formError();
            submitMSG(false, "Ви заповнили всі поля?");
        } else {
            // everything looks good!
            event.preventDefault();
            submitForm();
        }
    });

    function submitForm() {
        // Initiate Variables With Form Content
        var name = $("#name").val();
        var email = $("#email").val();
        var message = $("#message").val();


        $.ajax({
            type: "POST",
            url: "../mail.php",
            data: "name=" + name + "&email=" + email + "&message=" + message,
            success: function(text) {
                if (text == "success") {
                    formSuccess();
                } else {
                    formError();
                    submitMSG(false, text);
                }
            }
        });
    }

    function formSuccess() {
        $("#form")[0].reset();
        submitMSG(true, "Повідомлення відправлено!")
    }

    function formError() {
        $("#form").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $(this).removeClass();
        });
    }

    function submitMSG(valid, msg) {
        if (valid) {
            var msgClasses = "h3 text-center tada animated text-success";
        } else {
            var msgClasses = "h3 text-center text-danger";
        }
        $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
    }

})(jQuery);
