$(document).ready(function() {
  //Navbar Animation functions
  $(window).scroll(function() {
    yPos();
  });

  function yPos() {
    if ($(window).scrollTop() > yHeight) {
      $('#navmenu').removeClass('e-nav-transparent');
    } else {
      $('#navmenu').addClass('e-nav-transparent');
    }
  }

  var yHeight = $('.e-header').position().top + $('.e-header').outerHeight() - $('#navmenu').outerHeight();

  //Smooth scrolling to anchor
  $(document).on('click', 'a', function(event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
  });

});
