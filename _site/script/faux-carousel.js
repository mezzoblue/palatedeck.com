/*

    Create a carousel-like hidden content section, but
    interaction will happen differently than a typical
    carousel. Instead of sliding in, the faux carousel
    allows for progressive disclosure of more content.

    Because carousels suck.

*/
$(document).ready(function() {

    $(".faux-carousel").children(".faux-carousel-pane").each(function(i) {

        // hide all panes except the first
        if (i) {
            $(this).addClass("hidden");
        }

        // add triggers to disclose the next item when the link is clicked
        $(this).append("<div class='next'><a href='#' class='button button-reverse button-large'>" + $(this).attr("data-next") + "</a></div>");

        $(this).children(".next").click(function() {
            
            // show the next pane
            $(this).parent().next().removeClass("hidden");

            // adjust scroll position if there's enough space
            if ($(window).width() > 800) {
                $('html, body').animate({
                        scrollTop: $(this).parent().offset().top + 200
                    }, 500);
            }

            // delay before removing to give the fade animation time to fire
            $(this).addClass("hidden").delay(150).remove();
            return false;
        });


        // remove the last .next link cause we're done here
        $(".faux-carousel li:last-child").children(".next").remove();

    });



    // didn't have a better place for this temporary code
    $(".preview-expand-link").click(function() {

        obj = $(this).attr("data-expand");
        console.log(obj);

        $("." + obj).addClass("expanded");
        return(false);

    });



});