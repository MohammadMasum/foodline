;
(function($) {
    $(document).ready(function() {


        /*-------------------------------------------------------------------------------
        javaScript for sticky header
        -------------------------------------------------------------------------------*/
        $(".menu-trigger").on("click", function() {
            $(".offcanvas-header").toggleClass("active");
        });

        /*-------------------------------------------------------------------------------
        javaScript search header
        -------------------------------------------------------------------------------*/
        $(".search-triger").on("click", function() {
            $(".search-bar").addClass("active");
        });
        $(".search-close").on("click", function() {
            $(".search-bar").removeClass("active");
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