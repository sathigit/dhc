app.controller('dhcDoctorProfileController', ['$scope', '$rootScope', 'UserService', function ($scope, $rootScope, UserService){
    $rootScope.userId = 'zOvPRaVfNRv6eLhK';
    UserService.getUserMeta($rootScope.userId).then(
        function(doctorDetails) {
            doctorDetails.userId =  $rootScope.userId;
            $scope.doctorDetails = doctorDetails;
        }, function(failureDetails) {
            $scope.doctorDetails = new DoctorMetadataUI();
        }
    );
    $scope.saveDoctorDetails = function () {
        validate() && saveDoctorDetails();
    };

    function saveDoctorDetails () {
        UserService.saveUserMeta($scope.doctorDetails).then(
            function(successResponse) {
                alert('Saved Dcotor details');             
            },
            function(failureResponse) {
                alert('Failed to save Dcotor details');
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
        var data = $scope.doctorDetails;
        return data.firstName;            
    }
}]);