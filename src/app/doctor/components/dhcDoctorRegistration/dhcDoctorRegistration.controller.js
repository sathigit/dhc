app.controller('dhcDoctorRegitrationController', ['$scope', 'dataValidation', 'DoctorService', '$location',  function ($scope, dataValidation, DoctorService, $location) {
    var doctorRegistrationUI = new DoctorRegistrationUI();

    doctorRegistrationUI.name = 'sharan';
    doctorRegistrationUI.userName = 'sharan.nitk@' + Math.random();
    doctorRegistrationUI.password = 'sharan$100';
    doctorRegistrationUI.confirmPassword = 'sharan$100';
    doctorRegistrationUI.email = 'sharan.nitk@gmail.com';
    doctorRegistrationUI.mobile = '9900156532';
    doctorRegistrationUI.isPasswordNotSame = false;

    $scope.doctorRegistrationUI = doctorRegistrationUI;

    $scope.submitUser = function () {
        validate() && registerUserService();
    };

    function registerUserService () {
        DoctorService.registration($scope.doctorRegistrationUI).then(
            function(successResponse) {
                $scope.doctorRegistrationUI = new DoctorRegistrationUI();
                $location.path("doctorSuccess");            
            },
            function(failureResponse) {
                alert('Dcotor has been failed to Register. Please check the ');
            }
        );
    };

    $scope.checkPassword = function() {
        var doctorRegistrationUI = $scope.doctorRegistrationUI;
        $scope.doctorRegistrationUI.isPasswordNotSame = false;
        if( doctorRegistrationUI.password && doctorRegistrationUI.confirmPassword && doctorRegistrationUI.password != doctorRegistrationUI.confirmPassword ) {
            $scope.doctorRegistrationUI.isPasswordNotSame = true;
        }
    }

    function validate () {
        var data = $scope.doctorRegistrationUI;
        return data.name && data.userName && data.password && data.confirmPassword && data.password == data.confirmPassword 
            && data.email && data.mobile && dataValidation.validateEmail(data.email);
    }
}]);