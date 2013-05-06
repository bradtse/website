/*
 * Author: Bradley Tse
 * Email: bradleytse@gmail.com
 * Date: April 2013
 *
 */

$(document).ready(function() {

    jQuery.easing.def = "easeOutCubic"
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

        $("html, body").stop().animate({
            scrollTop: $(href).offset().top
        }, 900);
    }

    function moveVertical(position) {
        var $curr = parseInt($("#vertical").css("top"), 10);
        var $move = parseInt(position.top, 10) - $curr + 9;
        $("#vertical").stop().animate({
            "top":$curr + $move + "px"
        }, 900);
    }

    $("#navbar a").click(function(event) {
        event.preventDefault();

        var href = $(this).attr("href");

        goToByScroll(href);
        moveVertical($(this).position());
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
            $("#resume-wrap").css({"margin-top": "25px",
                                   "color": "#333333"});
        },
        function() {
            $("#resume-wrap").css({"margin-top": "0px",
                                   "color": "transparent"});
        }
    );
});
