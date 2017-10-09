function ResponseDataUI(responseData) {
    this.status = responseData.status;
    this.message = responseData.message;
    this.data = responseData.data;
    this.errors = responseData.errors;
}