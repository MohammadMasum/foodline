;
(function($) {
    $(document).ready(function() {


        /*-------------------------------------------------------------------------------
        javaScript for sticky header
        -------------------------------------------------------------------------------*/
        $(".menu-trigger").on("click", function() {
            $(".offcanvas-header").toggleClass("active");
        });

        /*---------------------------------
        Javascript for AOS animation
        ----------------------------------*/
        AOS.init({
            duration: 1200,
            once: true,
        });


    })
}(jQuery));