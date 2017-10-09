function PatientRegistrationServer(patientUI) {
    this.name = patientUI.name ;
    this.userName = patientUI.userName;
    this.userType = patientUI.userType;
    this.password = patientUI.password;
    this.loginType = "DHC";
    this.email = patientUI.email;
    this.mobile = patientUI.mobile;
    this.orgId = 1; 
}
