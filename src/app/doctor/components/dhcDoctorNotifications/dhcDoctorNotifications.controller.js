app.controller('dhcDoctorNotificationsController', ['$scope', '$rootScope', 'UserService', function ($scope, $rootScope, UserService){
    $rootScope.userId = 'zOvPRaVfNRv6eLhK';

    UserService.getDoctorNotifications($rootScope.userId).then(
        function(notifications) {
            prescriptions.userId =  $rootScope.userId;
            $scope.notifications = notifications;
        }, function(failureDetails) {
            $scope.notifications = new DoctorNotificationsUI();
        }
    );

}]);