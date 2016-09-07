// Header functions to:
// - attached fixed class so non-JS settings get fallback
// - hide header on scroll down
// - re-show on scroll up
// - toggle mobile menu trigger on load/resize
//
// (some adapted from https://jsfiddle.net/mariusc23/s6mLJ/31/)





// 
// PAGE SETUP
//


// global variables 
var didScroll, didResize;
var lastScrollTop = 0;
var delta = 5;


// find some DOM objects
var headerObj = $('.header-wrap');
var navObj = $('.site-nav');
var navbarHeight = $(".site-header").height();


//
// FIXED HEADER
// We're only doing this when Javascript is enabled
//
headerObj.addClass("header-scripted");



// 
// WINDOW RESIZE & MOBILE MENU FUNCTIONS
// Add a handler on window resize to toggle nav menu
//
$(window).resize(function(event) {
    didResize = true;
    updateHeaderSize();
});


// we can discard it safely after a quarter second
setInterval(function() {
    if (didResize) {
        didResize = false;
    }
}, 250);


// indicate which menu we want based on screen width
function updateHeaderSize() {
   if ($(window).width() < 800) {
        headerObj.addClass("header-small");
        headerObj.removeClass("header-large");
    } else {
        headerObj.removeClass("header-small");
        headerObj.addClass("header-large");
        // reset the small screen menu
        navObj.removeClass("visible").children("ul").css({
            height: "",
            maxHeight: ""
        });
    }
}


function addMenuToggle(thisClass, thisContent) {
    // create the toggle object
    var menuToggle = $('<a/>', {
        id: thisClass,
        class: thisClass,
        html: thisContent,
        href: "#"
    });

    // attach it and toggle it
    navObj.prepend(menuToggle);

    // handler for toggle click events
    $("#" + thisClass).wrapInner('<span class="button button-reverse button-small"></span>').click(function() {
        navObj.children("ul").toggleClass("visible");

        if(navObj.hasClass("visible")) {

            $(this).children("span").text("Menu");

            navObj.children("ul").css({
                maxHeight: "0"
            });
            navObj.removeClass("visible");

        } else {

            $(this).children("span").text("Menu");

            // set the max-height for smooth animation
            navObj.children("ul").css({
                maxHeight: "200px"
            });
            navObj.addClass("visible");

        }

        return false;
    });
}


// call some initial functions to setup the nav
updateHeaderSize();
addMenuToggle("site-nav-toggle", "Menu");




//
//  SCROLL FUNCTIONS
//
// flag when the window is scrolled, but only for larger screens
$(window).scroll(function(event) {
    if ($(window).width() > 800) {
        didScroll = true;
    }
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

// scroll handler function
function hasScrolled() {
    var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        headerObj.removeClass('header-shown').addClass('header-hidden');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            headerObj.removeClass('header-hidden').addClass('header-shown');
        }
    }
    
    // if the scroll position is lower than the bottom of the original header
    // position, then add an opaque background to offset the content
    if (st > (navbarHeight * 2)) {
        headerObj.addClass('header-opaque');
    } else {
        headerObj.removeClass('header-opaque');        
    }

    lastScrollTop = st;
}
