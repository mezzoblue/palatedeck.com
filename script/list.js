// expandable lists

function prepareList() {
  $('.list-expanding').find('dt')
    .click( function(event) {
        $(this).toggleClass('expanded');
        $(this).next('dd').slideToggle('150');
        return false;
    })
    .next('dd').hide();
  };
 
  $(document).ready( function() {
      prepareList();
  });