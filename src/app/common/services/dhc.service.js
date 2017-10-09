app.service('DHCService', ['HTTPService', function(HTTPService) {
    this.registration= function(object) {
         var promise = HTTPService.post('user', object);
         return promise;
    };

    this.login= function(object) {
        var promise = HTTPService.post('login', object);
        return promise;
    };

    this.getUser= function(userId) {
        var promise = HTTPService.get('user', userId);
        return promise;
    };

    this.getUserMeta= function(userId) {
        var promise = HTTPService.get('usermeta', userId);
        return promise;
    };

    this.saveUserMeta = function(metadata) {
        var promise = HTTPService.put('usermeta', metadata);
        return promise;
    };

    this.getDoctorPrescriptions = function(userId) {
        var promise = HTTPService.get('prescriptions',userId);
        return promise;
    }

    this.getDoctorNotifications = function(userId) {
        var promise = HTTPService.get('notifications',userId);
        return promise;
    }
   }]);
 
 