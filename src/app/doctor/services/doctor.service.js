app.service('DoctorService', ['DHCService', '$q', function(DHCService, $q) {
    this.registration = function(doctorUI) {
        var responsePromise = $q.defer();
         var promise = DHCService.registration(new DoctorRegistrationServer(doctorUI));
         
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
   
}]);
 
 