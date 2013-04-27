/* 
 * Author: Bradley Tse
 * Email: bradleytse@gmail.com
 * Date: April 2013
 * 
 */

$(document).ready(function() {

    /*
     * Sticky nav bar 
     */
    var $top1 = $('#navbar').offset().top;

    $(window).scroll(function() {   

            if ($(window).scrollTop()>$top1) {
                $('#navbar').addClass('sticky');
                /* Check jquery alternative */
                $('#uparrow').css({"opacity": "0.6", "right": "15%"});
            } else {
                $('#navbar').removeClass('sticky');
                $('#uparrow').css({"opacity": "0", "right": "0%"});
            }
    });


    /*
     * Smooth scrolling animation
     */
    function goToByScroll(href) {
        /*
         * Returns if already at correct position 
         * FIXME: find a better solution 
         */
        var $curPos = $(this).scrollTop();
        var $goalPos = $(href).offset().top;
        if ($curPos == $goalPos) {
            return;
        }

        $("html, body").stop(true).animate({scrollTop: $(href).offset().top}, 500);
    }

    $("a").click(function(event) {

        /* Checks if anchor is local and returns if it is not. This was modified
           to work on my localhost. FIXME*/
        var href = $(this).attr("href"); 
        var regExp = new RegExp("//" + location.host + "($|/)");
        var isLocal = (href.indexOf("#") == "0") ? true : false;
        if (isLocal != true) {
            return;
        }

        event.preventDefault(); 
       
        goToByScroll(href); 
    });

    /*
     * Fade in and out social link images
     */
    $("#social-links a").hover(
        function() {
            $(this).find("img").stop(true).fadeTo(300, 1);
        },
        function() {
            $(this).find("img").stop(true).fadeTo(300, 0.6);
        }
    );

    /*
     * Fades in resume caption
     */
    $("#pdf").hover(
        function() {
            $("#resume-wrap").css({"margin-top": "23px",
                                   "color": "#333333"});
        }, 
        function() {
            $("#resume-wrap").css({"margin-top": "0px", 
                                   "color": "transparent"});
        }
    );
    
    $("#uparrow").hover(
        function() {
                $(this).stop(true).fadeTo(50, 1);
        },
        function() {
            $(this).stop(true).fadeTo(50, 0.6);
        }
    );

    /*
     * Fade in and out menu items
     */
    $("#navbar > ul > li > a").hover(
        
    );

});
