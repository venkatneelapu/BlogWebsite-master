//Filter Js

$(document).ready(function(){
    $('.filter-item').click(function(){
        const value = $(this).attr('data-filter');
        if (value == 'all') {
            $('.post-box').show('1000');
        }
        else{
            $('.post-box')
            .not('.' + value)
            .hide('1000');
            $('.post-box')
            .filter('.' + value)
            .show('1000');
        }
    });
    //adding active to btn
    $(".filter-item").click(function (){
        $(this).addClass("active-filter").siblings().removeClass("active-filter");
    });
});

//extra

$(document).ready(function() {
    // Function to handle scroll event
    $(window).scroll(function() {
        var scroll = $(window).scrollTop(); // Get the current vertical scroll position

        // Check if the scroll position is greater than a certain value (e.g., 100 pixels from the top)
        if (scroll > 100) {
            // Add a class to the navigation bar to change its styling
            $('nav').addClass('scrolled');
        } else {
            // Remove the class if the scroll position is less than the specified value
            $('nav').removeClass('scrolled');
        }
    });
});

