app.service('HTTPService', ['Restangular', '$q', function(Restangular, $q) {
    this.post= function(methodName, object) {
        var deferred = $q.defer();
        var object = Restangular.all(methodName).post(object);
        object.then(function(serverData) {
            var responseData = processData(serverData); 
            if( responseData.status && responseData.status.toUpperCase() == "SUCCESS") {
               deferred.resolve(responseData);
            } else {                
               deferred.reject(responseData);
            }
        });
        return deferred.promise;
    };

    this.put= function(methodName, object) {
        var deferred = $q.defer();
        var object = Restangular.all(methodName).customPUT(object);
        object.then(function(serverData) {
            var responseData = processData(serverData); 
            if( responseData.status && responseData.status.toUpperCase() == "SUCCESS") {
               deferred.resolve(responseData);
            } else {                
               deferred.reject(responseData);
            }
        });
        return deferred.promise;
    };


    function processData(serverData) {
        var responseData = new ResponseData();
        responseData.status = serverData.status;
        responseData.message = serverData.message;
        responseData.data = serverData.data;
        
        if( serverData.serverData ) {            
            if( typeof response.errors == 'string') {
                responseData.errors = serverData.errors;
            } else if( typeof serverData.errors == 'object') {
                if ( serverData.errors.title ) {
                    responseData.errors = serverData.errors.title;
                } else if ( serverData.errors.detail ) {
                    responseData.errors = serverData.errors.detail;
                }                
            }
        }
        
        return responseData;
    }

    this.get= function(methodName, requestId) {
        var deferred = $q.defer();
        var object = Restangular.one(methodName, requestId).get();
        object.then(function(serverData) {
            var responseData = processData(serverData); 
            if( responseData.status && responseData.status.toUpperCase() == "SUCCESS") {
               deferred.resolve(responseData);
            } else {                    
               deferred.reject(responseData);
            }
        });
        return deferred.promise;
    };
}]);