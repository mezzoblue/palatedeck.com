//
// expandable lists
//

// quick & easy auto-expander / collapser
function prepareExpander() {
  $('.list-expanding').find('dt')
    .click( function(event) {
        $(this).toggleClass('expanded');
        $(this).next('dd').slideToggle('150');
        return false;
    })
    .next('dd').hide();
}


// simple one-time trigger expander
function discloseExtra() {

  var textString = $('.disclose-extra h2').text();

  $('<div></div>')
    .addClass('trigger')
    .append('<a></a>')
    .insertBefore('.disclose-extra');

  $('.trigger a')
    .addClass('button button-reverse button-large')
    .text(textString)
    .click( function(event) {
      $('.disclose-extra').slideToggle('250');
      $(this).hide();
      return false;
    });

  $('.disclose-extra').hide();

}



$(document).ready( function() {
    prepareExpander();
    discloseExtra();
});
