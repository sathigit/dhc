var loginRegistrationMock = require('../mocks/registrationLogin.js'),
    LoginRegistrationMock = new loginRegistrationMock();

var loginRegistrationRoutes = function () {};

loginRegistrationRoutes.prototype.login = function (req, res) {
    if (req.body.userName && req.body.loginType && req.body.password) {
        res.send(LoginRegistrationMock.loginSuccess());
    } else {
        res.send(LoginRegistrationMock.loginError());
    }
};

loginRegistrationRoutes.prototype.registration = function (req, res) {
    if (req.body.createdDate && req.body.email && req.body.isActive && 
        req.body.loginType && req.body.mobile && req.body.orgId &&
        req.body.password && req.body.userName && req.body.userType) {
        res.send(LoginRegistrationMock.doctorRegistrationSuccess());
    } else {
        res.send(LoginRegistrationMock.doctorRegistrationError());
    }
};

module.exports = loginRegistrationRoutes;