app.service('dataValidation', function () {
    this.validateEmail = function (email) {
        var reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return reg.test(email);
    };

    this.validatePhoneNumber = function (phoneNumber) {
        var reg = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;
        return reg.test(phoneNumber);
    };

    this.validatePassword = function (password) {
        var reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;
        return reg.test(password);
    };
    
    this.validateConfirmPassword = function (password, confirmPassword) {
        var reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;
        if (password === confirmPassword) {
            return reg.test(password);
        } else {
            return false;
        }
    };
    
});