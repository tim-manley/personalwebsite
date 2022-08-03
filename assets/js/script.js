// Blur image and make navbar opaque
$(window).scroll(function() {
    // Get scroll position
    var s = $(window).scrollTop(),
    // scroll value and opacity
    opacityVal = (s / 200.0);
    // opacity value 0% to 100%
    $('.blur').css('opacity', opacityVal);
    
    // Make navbar opaque below a certain value
    if (s / 200.0 >= 1) {
        $('.navbar').addClass('bg-dark');
    } else {
        $('.navbar').removeClass('bg-dark');
    }
});