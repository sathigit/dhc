app.controller('dhcLoginController', ['$scope', 'UserService', 'dataValidation', '$location', function ($scope, UserService, dataValidation, $location) {
    $scope.loginData = new LoginDataUI();
    $scope.loginData.userName = 'sharan.nitk@0.013787976445200467';
    $scope.loginData.password = 'sharan$100';

    $scope.userRegistrationDetailsDisplay = false;

    $scope.registerData = new PatientRegistrationUI();
    $scope.registerData.name = 'sharan';
    $scope.registerData.userName = 'sharan.nitk@' + Math.random();
    $scope.registerData.password = 'sharan$100';
    $scope.registerData.confirmPassword = 'sharan$100';
    $scope.registerData.email = 'sharan.nitk@gmail.com';
    $scope.registerData.mobile = '9900156532';

    $scope.loginSubmit = function () {
        var data = $scope.loginData;
        if (data.userName && data.password) {
            loginUser(data);
        }
    };

    $scope.registerSubmit = function () {
        var data = $scope.registerData;
        if (validate()) {
            registerUser(data);
        }
    };

    $scope.showUserRegistrationDetails = function() {
        $scope.userRegistrationDetailsDisplay = true;
    }

    $scope.checkPassword = function() {
        var doctorRegistrationUI = $scope.doctorRegistrationUI;
        $scope.doctorRegistrationUI.isPasswordNotSame = false;
        if( doctorRegistrationUI.password && doctorRegistrationUI.confirmPassword && doctorRegistrationUI.password != doctorRegistrationUI.confirmPassword ) {
            $scope.doctorRegistrationUI.isPasswordNotSame = true;
        }
    }

    function loginUser (loginData) {        
        UserService.login(loginData).then(
            function(successResponse) {
                var loginModal = angular.element( document.querySelector( '#responsive-modal' ) );
                loginModal.modal('hide');
                angular.element( document.querySelector( '.modal-backdrop' ) ).remove();
                $location.path("/doctorHome");            
            },
            function(failureResponse) {
                alert('Login failed');
            }
        );
    };

    function registerUser (registerData) {
        UserService.registration(registerData).then(
            function(successResponse) {
                var loginModal = angular.element( document.querySelector( '#responsive-modal' ) );
                loginModal.modal('hide');
                $location.path("/doctorSuccess");            
            },
            function(failureResponse) {
                alert('User Registration failed');
            }
        );
    };

    function validate () {
        var data = $scope.registerData;
        return data.name && data.userName && data.password && data.confirmPassword && data.password == data.confirmPassword 
            && data.email && data.mobile && dataValidation.validateEmail(data.email);
    }    

}]);