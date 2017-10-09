function LoginResponseDataUI(responseData) {
    this.status = responseData.status;
    this.message = responseData.message;
    if( responseData.data && responseData.data.userType ) {
        this.data = new UserMetadataUI(responseData.data);    
    }    
    this.errors = responseData.errors;
}