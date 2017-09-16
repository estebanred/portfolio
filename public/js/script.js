$(document).ready(function() {
  $(window).scroll(function() {
    yPos();
  });

  var yHeight = $('.e-header').position().top + $('.e-header').outerHeight() - $('#navmenu').outerHeight();

  function yPos() {
    if ($(window).scrollTop() > yHeight) {
      $('#navmenu').removeClass('e-nav-transparent');
    } else {
      $('#navmenu').addClass('e-nav-transparent');
    }
  }

  //Smooth scrolling to anchor
  $(document).on('click', '.anchor-link', function(event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 480);
  });

});
