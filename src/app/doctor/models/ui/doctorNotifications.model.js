function DoctorNotificationsUI(doctorNotificationsServer) {
    if (doctorNotificationsServer) {
        this.notifications = [];

        doctorNotificationsServer.notifications.forEach(function(notificationServer) {
            var notification = {};
            notification.title =  notificationServer.title;
            notification.time = notificationServer.time;
            notification.detail= notificationServer.detail;
            this.notifications.push(notification);
         }, this);
    }
}