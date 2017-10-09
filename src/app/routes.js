app.config(function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
    $routeProvider
        .when("/register", {
            templateUrl: "src/app/common/components/dhcRegistrationPage/dhcRegistrationPage.html" //,
                // controller : "homeController"
        })
        .when("/login", {
            templateUrl: "src/app/common/components/dhcLogin/dhcLogin.html" //,
                // controller : "loginController"
        })
        .when("/home", {
            templateUrl: "src/app/home/components/home.html" //,
                // controller : "homeController"
        })
        .when("/doctorHome", {
            templateUrl: "src/app/doctor/components/dhcDoctorDashboard/dhcDoctorDashboard.html" //,
                // controller : "doctorHomeController"
        })
        .when("/doctorSuccess", {
            templateUrl: "src/app/common/components/dhcRegistrationPage/dhcRegistrationPageSuccessfull.html" //,
                // controller : "homeController"
        })
        .when("/doctorProfile", {
            templateUrl: "src/app/doctor/components/dhcDoctorProfile/dhcDoctorProfile.html" //,
                // controller : "homeController"
        })
        .when("/doctorDiagnosis", {
            templateUrl: "src/app/doctor/components/dhcDoctorDiagnosis/dhcDoctorDiagnosis.html" //,
                // controller : "homeController"
        })
        .when("/doctorConfigAppointments", {
            templateUrl: "src/app/doctor/components/dhcDoctorConfigAppointments/dhcDoctorConfigAppointments.html" //,
                // controller : "homeController"
        })
        .when("/doctorNotifications", {
            templateUrl: "src/app/doctor/components/dhcDoctorNotifications/dhcDoctorNotifications.html" //,
                // controller : "homeController"
        })
        .when("/doctorUpcomingAppointments", {
            templateUrl: "src/app/doctor/components/dhcDoctorUpcomingAppointments/dhcDoctorUpcomingAppointments.html" //,
                // controller : "homeController"
        })
        .when("/doctorCompletedAppointments", {
            templateUrl: "src/app/doctor/components/dhcDoctorCompletedAppointments/dhcDoctorCompletedAppointments.html" //,
                // controller : "homeController"
        })
        .when("/doctorCancelledAppointments", {
            templateUrl: "src/app/doctor/components/dhcDoctorCancelledAppointments/dhcDoctorCancelledAppointments.html" //,
                // controller : "homeController"
        })
        .when("/doctorPrescriptions", {
            templateUrl: "src/app/doctor/components/dhcDoctorPrescriptions/dhcDoctorPrescriptions.html" //,
                // controller : "homeController"
        })
        .when("/doctorUploadPrescription", {
            templateUrl: "src/app/doctor/components/dhcDoctorUploadPrescription/dhcDoctorUploadPrescription.html" //,
                // controller : "homeController"
        })
        .when("/doctorCancelAppointments", {
            templateUrl: "src/app/doctor/components/dhcDoctorCancelAppointments/dhcDoctorCancelAppointments.html" //,
                // controller : "homeController"
        });        
        
})
.controller('appController', ['$scope', '$localStorage', '$location', function($s, $localStorage, $location) {
    $s.$storage = $localStorage.$default({
        page: '/register'
    });

    $location.path($s.$storage.page);

}]);