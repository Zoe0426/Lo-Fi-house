$(document).ready(function () {

    $(window).scroll(function () {
        var scrollPos = $(window).scrollTop();
        var windowHeight = $(window).height();

       $(".animated").each(function () {
            var thisPos = $(this).offset().top;
            var thisHeight = $(this).height() / 3;
            if ((windowHeight + scrollPos) >= (thisPos + thisHeight)) {
                $(this).addClass("slideIn");
                setTimeout(() => {
                    $(this).addClass("foggy");
                }, 1000);
            }    
        })


        $(".animatedR").each(function () {
            var thisPos = $(this).offset().top;
            var thisHeight = $(this).height() / 3;
            if ((windowHeight + scrollPos) >= (thisPos + thisHeight)) {
                setTimeout(() => {
                    $(this).addClass("slideInR");
                }, 2000);
            }    
        })


        $(".active").each(function (index, element) {
            // element == this
            var thisPos = $(this).offset().top;
            var thisHeight = $(this).height() / 3;
            if ((windowHeight + scrollPos) >= (thisPos + thisHeight)){
                setTimeout(() => {
                    $(this).addClass("fadIn");
                }, 1500);
            }           
        });
    });

});