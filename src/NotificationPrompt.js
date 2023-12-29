// NotificationPrompt.js
import React, { useEffect } from 'react';
import Cookies from 'js-cookie';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

const NotificationPrompt = () => {
  useEffect(() => {
    const handleNotificationPermission = async () => {
      if ("Notification" in window) {
        const notificationPermission = Cookies.get('notificationPermission');

        if (!notificationPermission) {
          const permission = await Notification.requestPermission();

          if (permission === "granted") {
            Cookies.set('notificationPermission', 'granted');
            showNotification('You will now receive notifications!', 'Permission Granted');
          } else {
            Cookies.set('notificationPermission', 'denied');
            showNotification('Notifications are denied.', 'Permission Denied', 'error');
          }
        }
      }
    };

    const showNotification = (message, title, type = 'success') => {
      NotificationManager[type](message, title);
    };

    handleNotificationPermission();
  }, []);

  return (
    <div>
      <NotificationContainer />
    </div>
  );
};

export default NotificationPrompt;
