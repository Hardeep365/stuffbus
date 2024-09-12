$(document).ready(function(){
    $(".slick-slider").slick({
        slidesToShow: 4,
        infinite: true,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        prevArrow: '<button class="slick-prev">&#10094;</button>',
        nextArrow: '<button class="slick-next">&#10095;</button>',
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});

$(document).ready(function(){
    $(".slick-slider1").slick({
        slidesToShow: 4,
        infinite: true,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        prevArrow: '<button class="slick-prev">&#10094;</button>',
        nextArrow: '<button class="slick-next">&#10095;</button>',
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1, 
                    slidesToScroll: 1
                }
            }
        ]
    });
});


$(document).ready(function(){
    $("#toggle-button").click(function(){
        $("#toggle-menu").toggle();
    });
});