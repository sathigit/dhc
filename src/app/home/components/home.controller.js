app.controller('homeController', ['$scope', function ($scope) {
    function componentUIInit () {
        $(".owl-carousel").owlCarousel({
            margin:0,
            loop:true,
            nav:false,
            autoplay:false,
            dots: true,
            responsive:{
                0:{
                    items:1
                },
                480:{
                    items:2
                },
                700:{
                    items:4
                },
                1000:{
                    items:3
                },
                1100:{
                    items:5
                }
            }
        });
    };
    componentUIInit();
    // $.material.init();
}]);