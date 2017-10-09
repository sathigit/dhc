function DoctorNotificationsServer(doctorNotificationsUI) {
    if (doctorNotificationsUI) {
       this.notifications = [];
       doctorNotificationsUI.notifications.forEach(function(notificationUI) {
          var notification = {};
          notification.title =  notificationUI.title;
          notification.time = notificationUI.time;
          notification.detail= notificationUI.detail;
          this.notifications.push(notification);
       }, this);
    }
}