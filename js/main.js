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
            } else {
                $('#navbar').removeClass('sticky');
            }
    });


    /*
     * Smooth scrolling animation
     */
    function goToByScroll(id) {
        id = id.replace("link", "");

        /*
         * Returns if already at correct position 
         * FIXME: find a better solution 
         */
        var $curPos = $(this).scrollTop();
        var $goalPos = $("#" + id).offset().top;
        if ($curPos == $goalPos) {
            return;
        }

        $("html, body").stop(true).animate({scrollTop: $("#" + id).offset().top}, 400);
    }

    $("#navbar > ul > li > a").click(function(event) {
        event.preventDefault(); 
       
        goToByScroll($(this).attr("id")); 
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
     * Fade in and out menu items
     */
    $("#navbar > ul > li > a").hover(
        
    );

});
