app.directive('dhcAboutUs', function() {
    return {
        restrict: 'E',
        templateUrl: 'src/app/home/components/aboutUs/aboutUs.html'
    };
});

app.directive('dhcContactUs', function() {
    return {
        restrict: 'E',
        templateUrl: 'src/app/home/components/contactUs/contactUs.html'
    };
});

app.directive('dhcDownloadApp', function() {
    return {
        restrict: 'E',
        templateUrl: 'src/app/home/components/downloadApp/downloadApp.html'
    };
});

app.directive('dhcSpecialization', function() {
    return {
        restrict: 'E',
        templateUrl: 'src/app/home/components/specialization/specialization.html'
    };
});

app.directive('dhcTestimonials', function() {
    return {
        restrict: 'E',
        templateUrl: 'src/app/home/components/testimonials/testimonials.html'
    };
});
