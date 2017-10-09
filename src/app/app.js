var app = angular.module('dhcApp', ['ngMaterial', 'ngMessages', 'ngRoute', 'ngStorage', 'restangular']);

app.config(function(RestangularProvider) {
    RestangularProvider.setBaseUrl('http://localhost:8083/dhc/api/v1');
    RestangularProvider.setDefaultHeaders({
        "X-API-KEY": "DHCETree",
        "Content-Type": "application/json"
        /*"Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
        "Access-Control-Allow-Headers": "Accept, X-Requested-With"*/
    });
    
});