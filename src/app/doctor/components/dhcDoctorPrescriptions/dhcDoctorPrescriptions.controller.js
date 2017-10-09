app.controller('dhcDoctorPrescriptionsController', ['$scope', '$rootScope', 'UserService', function ($scope, $rootScope, UserService){
    $rootScope.userId = 'zOvPRaVfNRv6eLhK';
    UserService.getDoctorPrescriptions($rootScope.userId).then(
        function(prescriptions) {
            prescriptions.userId =  $rootScope.userId;
            $scope.prescriptions = prescriptions;
        }, function(failureDetails) {
            $scope.prescriptions = new DoctorPrescriptionsUI();
        }
    );
}]);