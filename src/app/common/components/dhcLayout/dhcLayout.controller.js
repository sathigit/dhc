app.controller('dhcLayoutController', ['$scope', '$location', function ($scope, $location) {
    
    $scope.$on('$routeChangeSuccess', function (event, next, current) {
        $scope.changeMainView();
    });

    $scope.changeMainView = function () {
        if (window.location.href.indexOf("doctor") > -1) {
            $scope.registrationPage = false;
            $scope.doctorMainPage = true;
            $scope.patientMainPage = false;
        } else if (window.location.href.indexOf("patient") > -1) {
            $scope.registrationPage = false;
            $scope.doctorMainPage = false;
            $scope.patientMainPage = true;
        } else if ((window.location.href.indexOf("register") > -1) || 
                    window.location.href.indexOf("home") > -1) {
            $scope.registrationPage = true;
            $scope.doctorMainPage = false;
            $scope.patientMainPage = false;
        } 
    };
}]);