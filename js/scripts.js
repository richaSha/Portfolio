$(document).ready(function(){
	// set row heigth to device heigth
	$('.row').css('min-height',$(window).innerHeight());

	$('.skillInfo').css('height',$('.skillInfo').width());


  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a").on('click', function(event) {

  // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {

    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 900, function(){

      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
      });
    } 
  });
  	//on scroll window show scroll top
  	 $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').removeClass('hide');
        } else {
            $('.scrollup').addClass('hide');
        }
    });

    $('.scrollup').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });


})