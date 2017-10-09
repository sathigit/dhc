/**
 * @method: RegistrationLoginMock
 * @description: Provides the json data for login and registraion services
 */

var registrationLoginMock = function () {};

registrationLoginMock.prototype.loginSuccess = function () {
    var data = {
        "status": "SUCCESS",
        "message": "authenticate user",
        "data": {
            "userId": "zqFQNB1mj8fE6WmBq8t8YBt9grPrRhOs",
            "userName": "sharan.nitk15",
            "email": "sharan.nitk1@gmail.com",
            "mobile": "9874563210",
            "loginType": "DHC",
            "userType": "DOCTOR",
            "orgId": "1",
            "isActive": true,
            "createdDate": "1505755317000"
        }
    };
    return data;
};

registrationLoginMock.prototype.loginError = function () {
    var data = {
        "status": "ERROR",
        "message": "authenticate user",
        "errors": {
            "title": "Invalid Username or Password",
            "detail": "Invalid Username or Password"
        }
    };
    return data;
};

registrationLoginMock.prototype.sampleLoginData = function () {
    var data = {
        "userName":"sharan.nitk15",
        "loginType": "DHC",
        "password": "Test$100"
    };
    return data;
};

registrationLoginMock.prototype.doctorRegistrationSampleData = function () {
    var data = {
        "createdDate": "2017-09-09T11:57:00.134Z",
        "email": "sharan.nitk1@gmail.com",
        "isActive": true,
        "loginType": "DHC",
        "mobile": "9874563210",
        "orgId": "1",
        "password": "Test$100",
        "userName": "sharan.nitk11",
        "userType": "USER"
    };
    return data;
};

registrationLoginMock.prototype.doctorRegistrationSuccess = function () {
    var data = {
        "status": "SUCCESS",
        "message": "Add user data"
    };
    return data;
};

registrationLoginMock.prototype.doctorRegistrationError = function () {
    var data = {
        "status": "ERROR",
        "message": "Add user data",
        "errors": "PreparedStatementCallback; SQL [INSERT INTO user (userId,userName,password,email,mobile,loginType,userType,orgId,isActive,createdDate) VALUES(?,?,?,?,?,?,?,?,?,?)]; Duplicate entry 'sharan.nitk15' for key 'userName'; nested exception is com.mysql.jdbc.exceptions.jdbc4.MySQLIntegrityConstraintViolationException: Duplicate entry 'sharan.nitk15' for key 'userName'"
    };
    return data;
};

registrationLoginMock.prototype.userRegistrationsampleData = function () {
    var data = {
        "createdDate": "2017-09-09T11:57:00.134Z",
        "email": "sharan.nitk1@gmail.com",
        "isActive": true,
        "loginType": "DHC",
        "mobile": "9874563210",
        "orgId": "1",
        "password": "Test$100",
        "userName": "sharan.nitk15",
        "userType": "DOCTOR"
    };
    return data;
};

registrationLoginMock.prototype.userRegistrationSuccess = function () {
    var data = {
        "status": "SUCCESS",
        "message": "Add user data"
    };
    return data;
};

registrationLoginMock.prototype.doctorRegistrationError = function () {
    var data = {
        "status": "ERROR",
        "message": "Add user data",
        "errors": "PreparedStatementCallback; SQL [INSERT INTO user (userId,userName,password,email,mobile,loginType,userType,orgId,isActive,createdDate) VALUES(?,?,?,?,?,?,?,?,?,?)]; Duplicate entry 'sharan.nitk15' for key 'userName'; nested exception is com.mysql.jdbc.exceptions.jdbc4.MySQLIntegrityConstraintViolationException: Duplicate entry 'sharan.nitk15' for key 'userName'"
    };
    return data;
};

module.exports = registrationLoginMock;