app.service('UserService', ['DHCService', '$q', function(DHCService, $q) {
    this.registration = function(patientUI) {
        var responsePromise = $q.defer();
        var promise = DHCService.registration(new PatientRegistrationServer(patientUI));
         
        promise.then(function(responseData) {
            responsePromise.resolve(new ResponseDataUI(responseData));
        }, function(failureResponse) {
            responsePromise.reject(new ResponseDataUI(failureResponse));
        });
         
        return responsePromise.promise;
    };

    this.login = function(loginDataUI) {
        var responsePromise = $q.defer();
        var promise = DHCService.login(new LoginDataServer(loginDataUI));
         
        promise.then(function(responseData) {
            responsePromise.resolve(new LoginResponseDataUI(responseData));
        }, function(failureResponse) {
            responsePromise.reject(new ResponseDataUI(failureResponse));
        });
         
        return responsePromise.promise;
    };

    this.getUser = function(userId) {
        var responsePromise = $q.defer();
        var promise = DHCService.getUser(userId);
         
        promise.then(function(responseData) {
            responsePromise.resolve(new ResponseDataUI(responseData));
        }, function(failureResponse) {
            responsePromise.reject(new ResponseDataUI(failureResponse));
        });
         
        return responsePromise.promise;
    };

    this.getUserMeta = function(userId) {
        var responsePromise = $q.defer();
        var promise = DHCService.getUserMeta(userId);
         
        promise.then(function(responseData) {
            responsePromise.resolve(new DoctorMetadataUI(responseData));
        }, function(failureResponse) {
            responsePromise.reject(new ResponseDataUI(failureResponse));
        });
         
        return responsePromise.promise;
    };

    this.saveUserMeta = function(userMetadataUI) {
        var responsePromise = $q.defer();
        var promise = DHCService.saveUserMeta(userMetadataUI);
         
        promise.then(function(responseData) {
            responsePromise.resolve(new DoctorMetadataServer(responseData));
        }, function(failureResponse) {
            responsePromise.reject(new ResponseDataUI(failureResponse));
        });
         
        return responsePromise.promise;
    };

    this.getDoctorPrescriptions = function(userId) {
        var responsePromise = $q.defer();
        var promise = DHCService.getDoctorPrescriptions(userId);

        promise.then(function(responseData){
            responsePromise.resolve(new DoctorPrescriptionsServer(responseData));
        }, function(failureResponse) {
            responsePromise.reject(new ResponseDataUI(failureResponse));
        });
    }

    this.getDoctorNotifications = function(userId) {
        var responsePromise = $q.defer();
        var promise = DHCService.getDoctorNotifications(userId);

        promise.then(function(responseData){
            responsePromise.resolve(new DoctorNotificationsServer(responseData));
        }, function(failureResponse) {
            responsePromise.reject(new ResponseDataUI(failureResponse));
        });
    }
}]);
 
 