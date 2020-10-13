//Smooth scroll        
var scroll = new SmoothScroll('a[href*="#"]', {speed: 600});


//Hiding navbar after clicking
$('.navbar-collapse a').click(function () {
    $(".navbar-collapse").collapse('hide');
});


