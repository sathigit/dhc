function UserMetadataUI(userMetadataServer) {
    if( userMetadataServer ) {
        this.userId = userMetadataServer.userId;
        this.name = '';
        this.userName = userMetadataServer.userName;
        this.userType = userMetadataServer.userType;
        this.loginType = userMetadataServer.loginType;
        this.email = userMetadataServer.email;
        this.mobile = userMetadataServer.mobile;
    } else {
        this.name = '';
        this.userName = '';
        this.userType = "";
        this.loginType = "";
        this.email = '';
        this.mobile = '';
    }
}